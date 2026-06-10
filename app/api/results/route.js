import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { calcTotalMatchPoints } from '../../../lib/points'

// POST /api/results — solo admin puede llamar esto
// Body: { match_id, score_home, score_away, admin_key }
export async function POST(request) {
  const { match_id, score_home, score_away, admin_key } = await request.json()

  if (admin_key !== process.env.ADMIN_KEY) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  // Service role key — bypasea RLS para actualizar perfiles de todos los usuarios
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  // Guardar resultado oficial
  const { error: resultError } = await supabase
    .from('match_results')
    .upsert({ match_id, score_home, score_away })

  if (resultError) {
    return NextResponse.json({ error: resultError.message }, { status: 500 })
  }

  // Obtener todos los pronosticos de este partido
  const { data: predictions, error: predsError } = await supabase
    .from('predictions')
    .select('*, profiles(streak_exact, streak_exact_best, total_pts)')
    .eq('match_id', match_id)

  if (predsError) {
    return NextResponse.json({ error: predsError.message }, { status: 500 })
  }

  if (!predictions?.length) {
    return NextResponse.json({ updated: 0, match_id, score_home, score_away })
  }

  // Calcular y aplicar puntos para cada usuario
  let updated = 0
  for (const pred of predictions) {
    const result = { score_home, score_away }
    const streakBefore = pred.profiles?.streak_exact ?? 0

    const { base, streak, total, newStreak } = calcTotalMatchPoints({
      pred: { score_home: pred.score_home, score_away: pred.score_away },
      result,
      isEarly: false,
      streakBefore,
    })

    if (total > 0) {
      await supabase
        .from('predictions')
        .update({ pts_earned: total })
        .eq('id', pred.id)

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

      const reasons = []
      if (base > 0) reasons.push(`Base: ${base}pts`)
      if (streak > 0) reasons.push(`Racha: +${streak}pts`)

      await supabase.from('points_log').insert({
        user_id: pred.user_id,
        pts: total,
        reason: reasons.join(' | ') + ` (Partido ${match_id})`,
        match_id,
      })

      updated++
    } else {
      await supabase
        .from('profiles')
        .update({ streak_exact: 0 })
        .eq('id', pred.user_id)
    }
  }

  return NextResponse.json({ updated, match_id, score_home, score_away })
}