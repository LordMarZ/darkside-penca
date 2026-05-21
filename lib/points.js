// =============================================
// DARKSIDE BROS — SISTEMA DE PUNTOS
// =============================================

// Puntos base por pronostico
export function calcMatchPoints(pred, result) {
  const { score_home: ph, score_away: pa } = pred
  const { score_home: rh, score_away: ra } = result

  const predWinner = ph > pa ? 'home' : ph < pa ? 'away' : 'draw'
  const realWinner = rh > ra ? 'home' : rh < ra ? 'away' : 'draw'

  if (ph === rh && pa === ra) return 5              // Exacto
  if (predWinner === realWinner && (ph - pa) === (rh - ra)) return 3  // Diferencia exacta
  if (predWinner === realWinner) return 1           // Solo ganador
  return 0
}

// Bonus pronostico anticipado (+2 si acerto algo)
export function earlyBonus(basePoints, isEarly) {
  return isEarly && basePoints > 0 ? 2 : 0
}

// Bonus racha de exactos consecutivos
export function streakBonus(streak) {
  return streak >= 3 ? streak * 3 : 0
}

// Quiz diario: 10/9 = +3, 8 = +2, 7 = +1
export function calcQuizPoints(correct) {
  if (correct >= 9) return 3
  if (correct === 8) return 2
  if (correct === 7) return 1
  return 0
}

// Calculo total de un partido con todos los bonus
export function calcTotalMatchPoints({ pred, result, isEarly, streakBefore }) {
  const base = calcMatchPoints(pred, result)
  const early = earlyBonus(base, isEarly)
  const newStreak = base === 5 ? streakBefore + 1 : 0
  const streak = newStreak >= 3 ? streakBonus(newStreak) : 0
  return {
    base,
    early,
    streak,
    total: base + early + streak,
    newStreak,
  }
}

// Bonus campeon pre-torneo
export function championBonus(pick, actual) {
  return pick && pick === actual ? 10 : 0
}

// Bonus goleador pre-torneo
export function topScorerBonus(pick, actual) {
  return pick && pick === actual ? 5 : 0
}
