import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { calcMatchPoints } from '../../../lib/points'
import { MATCHES } from '../../../data/fixture'

// POST /api/debug-points — solo admin. Detalle partido por partido de un
// usuario: prediccion, resultado oficial, puntos esperados vs guardados.
// Body: { admin_key, username }
export async function POST(request) {
  const { admin_key, username } = await request.json()

  if (admin_key !== process.env.ADMIN_KEY) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .ilike('username', `%${username}%`)
    .limit(1)
    .maybeSingle()

  if (profileError) return NextResponse.json({ error: profileError.message }, { status: 500 })
  if (!profile) return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 })

  const { data: predictions } = await supabase
    .from('predictions')
    .select('*')
    .eq('user_id', profile.id)

  const { data: results } = await supabase.from('match_results').select('*')
  const resultsByMatch = new Map((results || []).map(r => [r.match_id, r]))

  const matchDate = (id) => {
    const m = MATCHES.find(x => x.id === id)
    return m ? `${m.date}T${m.time}` : ''
  }

  const rows = (predictions || [])
    .slice()
    .sort((a, b) => matchDate(a.match_id).localeCompare(matchDate(b.match_id)))
    .map(p => {
      const result = resultsByMatch.get(p.match_id)
      const match = MATCHES.find(m => m.id === p.match_id)
      const base = result
        ? calcMatchPoints({ score_home: p.score_home, score_away: p.score_away }, result)
        : null
      return {
        match_id: p.match_id,
        teams: match ? `${match.home} vs ${match.away}` : `#${p.match_id}`,
        date: match ? `${match.date} ${match.time}` : '',
        pred: `${p.score_home}-${p.score_away}`,
        result: result ? `${result.score_home}-${result.score_away}` : null,
        base_points: base,
        pts_earned_stored: p.pts_earned,
      }
    })

  const sumStored = rows.reduce((s, r) => s + (r.pts_earned_stored || 0), 0)
  const sumBase = rows.reduce((s, r) => s + (r.base_points || 0), 0)

  return NextResponse.json({
    profile: {
      id: profile.id,
      username: profile.username,
      total_pts: profile.total_pts,
      streak_exact: profile.streak_exact,
      streak_exact_best: profile.streak_exact_best,
    },
    sumStored,
    sumBaseOnly: sumBase,
    predictionsCount: rows.length,
    rows,
  })
}
