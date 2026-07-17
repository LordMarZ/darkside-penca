// Resuelve los cruces de eliminacion directa (homeFrom/awayFrom) contra
// los resultados oficiales cargados, para que el ganador de cada partido
// se acomode solo en el siguiente sin tocar codigo ni redeployar.

const TBD = { name: null, flag: null }

function winnerOf(match, resultsByMatchId, matchesById) {
  const resolved = resolveTeams(match, resultsByMatchId, matchesById)
  const result = resultsByMatchId.get(match.id)
  if (!result || resolved.home.name === null || resolved.away.name === null) return TBD

  const { score_home, score_away, winner_home } = result
  if (score_home > score_away) return resolved.home
  if (score_away > score_home) return resolved.away
  // Empate: solo en partidos de eliminacion, se define por penales
  if (winner_home === true) return resolved.home
  if (winner_home === false) return resolved.away
  return TBD
}

function loserOf(match, resultsByMatchId, matchesById) {
  const resolved = resolveTeams(match, resultsByMatchId, matchesById)
  const result = resultsByMatchId.get(match.id)
  if (!result || resolved.home.name === null || resolved.away.name === null) return TBD

  const { score_home, score_away, winner_home } = result
  if (score_home > score_away) return resolved.away
  if (score_away > score_home) return resolved.home
  // Empate: solo en partidos de eliminacion, se define por penales
  if (winner_home === true) return resolved.away
  if (winner_home === false) return resolved.home
  return TBD
}

function resolveTeams(match, resultsByMatchId, matchesById) {
  if (match.home) return { home: { name: match.home, flag: match.homeF }, away: { name: match.away, flag: match.awayF } }

  const pick = match.loser ? loserOf : winnerOf
  const homeFeeder = matchesById.get(match.homeFrom)
  const awayFeeder = matchesById.get(match.awayFrom)
  const home = homeFeeder ? pick(homeFeeder, resultsByMatchId, matchesById) : TBD
  const away = awayFeeder ? pick(awayFeeder, resultsByMatchId, matchesById) : TBD
  return { home, away }
}

// Devuelve la lista de partidos con home/away/homeF/awayF resueltos
// (o 'A definir' si el partido que los alimenta todavia no se jugo).
export function resolveMatches(matches, results) {
  const matchesById = new Map(matches.map(m => [m.id, m]))
  const resultsByMatchId = new Map(Object.entries(results || {}).map(([id, r]) => [Number(id), r]))

  return matches.map(m => {
    if (m.home) return m
    const { home, away } = resolveTeams(m, resultsByMatchId, matchesById)
    return {
      ...m,
      home: home.name || 'A definir',
      homeF: home.flag || '🏳️',
      away: away.name || 'A definir',
      awayF: away.flag || '🏳️',
      pending: !home.name || !away.name,
    }
  })
}
