// =============================================
// DARKSIDE BROS — RECALCULO DE PUNTOS (idempotente)
// =============================================
// Recalcula desde cero pts_earned, total_pts, streak_exact y
// streak_exact_best de TODOS los usuarios en base a la fuente de verdad
// (match_results + predictions). No suma incrementalmente: siempre
// reconstruye el estado completo, así que correrlo 1 o 100 veces da
// exactamente el mismo resultado. Esto evita la duplicación de puntos
// al cargar (o recargar) un resultado.

import { calcTotalMatchPoints } from './points'
import { MATCHES } from '../data/fixture'

const MATCH_DATETIME = new Map(MATCHES.map(m => [m.id, `${m.date}T${m.time}`]))

export async function recomputeAllPoints(supabase) {
  const { data: results, error: resultsError } = await supabase.from('match_results').select('*')
  if (resultsError) throw resultsError

  const { data: predictions, error: predsError } = await supabase.from('predictions').select('*')
  if (predsError) throw predsError

  // Orden cronológico real (los grupos están entrelazados, match_id no alcanza)
  const sortedResults = [...(results || [])].sort((a, b) => {
    const da = MATCH_DATETIME.get(a.match_id) || ''
    const db = MATCH_DATETIME.get(b.match_id) || ''
    if (da !== db) return da.localeCompare(db)
    return a.match_id - b.match_id
  })

  const predsByMatch = new Map()
  for (const p of predictions || []) {
    if (!predsByMatch.has(p.match_id)) predsByMatch.set(p.match_id, [])
    predsByMatch.get(p.match_id).push(p)
  }

  const { data: profiles, error: profilesError } = await supabase.from('profiles').select('id')
  if (profilesError) throw profilesError

  const state = new Map() // user_id -> { total_pts, streak_exact, streak_exact_best }
  for (const p of profiles || []) {
    state.set(p.id, { total_pts: 0, streak_exact: 0, streak_exact_best: 0 })
  }
  const predUpdates = []
  const pointsLogRows = []

  for (const result of sortedResults) {
    const preds = predsByMatch.get(result.match_id) || []
    for (const pred of preds) {
      if (!state.has(pred.user_id)) {
        state.set(pred.user_id, { total_pts: 0, streak_exact: 0, streak_exact_best: 0 })
      }
      const s = state.get(pred.user_id)

      const { base, streak, total, newStreak } = calcTotalMatchPoints({
        pred: { score_home: pred.score_home, score_away: pred.score_away },
        result: { score_home: result.score_home, score_away: result.score_away },
        isEarly: false,
        streakBefore: s.streak_exact,
      })

      predUpdates.push({ id: pred.id, pts_earned: total })
      s.total_pts += total
      s.streak_exact = newStreak
      s.streak_exact_best = Math.max(s.streak_exact_best, newStreak)

      if (total > 0) {
        const reasons = []
        if (base > 0) reasons.push(`Base: ${base}pts`)
        if (streak > 0) reasons.push(`Racha: +${streak}pts`)
        pointsLogRows.push({
          user_id: pred.user_id,
          pts: total,
          reason: reasons.join(' | ') + ` (Partido ${result.match_id})`,
          match_id: result.match_id,
        })
      }
    }
  }

  for (const u of predUpdates) {
    await supabase.from('predictions').update({ pts_earned: u.pts_earned }).eq('id', u.id)
  }

  for (const [user_id, s] of state) {
    await supabase.from('profiles').update({
      total_pts: s.total_pts,
      streak_exact: s.streak_exact,
      streak_exact_best: s.streak_exact_best,
    }).eq('id', user_id)
  }

  // El log de puntos por partido se reescribe limpio para que no acumule
  // entradas duplicadas de cargas anteriores.
  await supabase.from('points_log').delete().not('match_id', 'is', null)
  if (pointsLogRows.length) await supabase.from('points_log').insert(pointsLogRows)

  return {
    matchesProcessed: sortedResults.length,
    predictionsProcessed: predUpdates.length,
    usersUpdated: state.size,
  }
}
