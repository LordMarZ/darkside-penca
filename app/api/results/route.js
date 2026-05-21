import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { calcTotalMatchPoints } from '../../../lib/points'

// POST /api/results — solo admin puede llamar esto
// Body: { match_id, score_home, score_away, admin_key }
export async function POST(request) {
  const { match_id, score_home, score_away, admin_key } = await request.json()

  // Clave admin simple — en produccion usar variable de entorno
  if (admin_key !== process.env.ADMIN_KEY) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  const cookieStore = cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    { cookies: { get: (n) => cookieStore.get(n)?.value } }
  )

  // Guardar resultado oficial
  await supabase.from('match_results').upsert({ match_id, score_home, score_away })

  // Obtener todos los pronosticos de este partido
  const { data: predictions } = await supabase
    .from('predictions')
    .select('*, profiles(streak_exact, streak_exact_best, total_pts)')
    .eq('match_id', match_id)

  if (!predictions?.length) {
    return NextResponse.json({ updated: 0 })
  }

  // Calcular y aplicar puntos para cada usuario
  let updated = 0
  for (const pred of predictions) {
    const result = { score_home, score_away }
    const streakBefore = pred.profiles?.streak_exact ?? 0

    const { base, early, streak, total, newStreak } = calcTotalMatchPoints({
      pred: { score_home: pred.score_home, score_away: pred.score_away },
      result,
      isEarly: pred.is_early,
      streakBefore,
    })

    if (total > 0) {
      // Actualizar prediction con puntos ganados
      await supabase.from('predictions')
        .update({ pts_earned: total })
        .eq('id', pred.id)

      // Actualizar perfil del usuario
      const { data: profile } = await supabase
        .from('profiles')
        .select('total_pts, streak_exact_best')
        .eq('id', pred.user_id)
        .single()

      await supabase.from('profiles').update({
        total_pts: (profile?.total_pts ?? 0) + total,
        streak_exact: newStreak,
        streak_exact_best: Math.max(profile?.streak_exact_best ?? 0, newStreak),
      }).eq('id', pred.user_id)

      // Log de puntos
      const reasons = []
      if (base > 0) reasons.push(`Base: ${base}pts`)
      if (early > 0) reasons.push(`Anticipado: +${early}pts`)
      if (streak > 0) reasons.push(`Racha: +${streak}pts`)

      await supabase.from('points_log').insert({
        user_id: pred.user_id,
        pts: total,
        reason: reasons.join(' | ') + ` (Partido ${match_id})`,
        match_id,
      })

      updated++
    } else {
      // Si no acerto, resetear racha
      await supabase.from('profiles')
        .update({ streak_exact: 0 })
        .eq('id', pred.user_id)
    }
  }

  return NextResponse.json({ updated, match_id, score_home, score_away })
}
