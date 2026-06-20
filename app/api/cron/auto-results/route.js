import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { recomputeAllPoints } from '../../../../lib/recompute'
import { MATCHES } from '../../../../data/fixture'

const ESPN_MAP = {
  'Mexico': 'México', 'South Korea': 'Corea del Sur', 'Czechia': 'Rep. Checa', 'Czech Republic': 'Rep. Checa',
  'South Africa': 'Sudáfrica', 'Canada': 'Canadá', 'Bosnia-Herzegovina': 'Bosnia y Herzegovina',
  'Bosnia and Herzegovina': 'Bosnia y Herzegovina',
  'Switzerland': 'Suiza', 'Brazil': 'Brasil', 'Morocco': 'Marruecos', 'Haiti': 'Haití',
  'Scotland': 'Escocia', 'United States': 'Estados Unidos', 'Paraguay': 'Paraguay',
  'Australia': 'Australia', 'Turkey': 'Turquía', 'Germany': 'Alemania', 'Curaçao': 'Curazao',
  "Ivory Coast": 'Costa de Marfil', 'Ecuador': 'Ecuador', 'Netherlands': 'Países Bajos',
  'Japan': 'Japón', 'Tunisia': 'Túnez', 'Sweden': 'Suecia', 'Belgium': 'Bélgica',
  'Egypt': 'Egipto', 'Iran': 'Irán', 'New Zealand': 'Nueva Zelanda', 'Spain': 'España',
  'Cape Verde': 'Cabo Verde', 'Saudi Arabia': 'Arabia Saudita', 'Uruguay': 'Uruguay',
  'France': 'Francia', 'Senegal': 'Senegal', 'Norway': 'Noruega', 'Iraq': 'Iraq',
  'Argentina': 'Argentina', 'Algeria': 'Argelia', 'Austria': 'Austria', 'Jordan': 'Jordania',
  'Portugal': 'Portugal', 'DR Congo': 'RD Congo', 'Uzbekistan': 'Uzbekistán',
  'Colombia': 'Colombia', 'England': 'Inglaterra', 'Croatia': 'Croacia',
  'Ghana': 'Ghana', 'Panama': 'Panamá',
}

function normalize(name) {
  return ESPN_MAP[name] || name
}

async function fetchESPNForDate(date) {
  const dateStr = date.replace(/-/g, '')

  const prevDate = new Date(date + 'T12:00:00Z')
  prevDate.setUTCDate(prevDate.getUTCDate() - 1)
  const prevDateStr = prevDate.toISOString().slice(0, 10).replace(/-/g, '')

  const nextDate = new Date(date + 'T12:00:00Z')
  nextDate.setUTCDate(nextDate.getUTCDate() + 1)
  const nextDateStr = nextDate.toISOString().slice(0, 10).replace(/-/g, '')

  const [res0, res1, res2] = await Promise.all([
    fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=${prevDateStr}`, { cache: 'no-store' }),
    fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=${dateStr}`, { cache: 'no-store' }),
    fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=${nextDateStr}`, { cache: 'no-store' }),
  ])
  const [data0, data1, data2] = await Promise.all([res0.json(), res1.json(), res2.json()])
  const allEvents = [...(data0.events || []), ...(data1.events || []), ...(data2.events || [])]

  const seen = new Set()
  const matches = []
  for (const event of allEvents) {
    if (seen.has(event.id)) continue
    seen.add(event.id)

    const comp = event.competitions?.[0]
    const home = comp?.competitors?.find(c => c.homeAway === 'home')
    const away = comp?.competitors?.find(c => c.homeAway === 'away')
    const status = comp?.status?.type?.name

    const eventUTC = new Date(event.date)
    const eventUYDate = new Date(eventUTC.getTime() - 3 * 3600000).toISOString().slice(0, 10)

    matches.push({
      home_team: home?.team?.displayName || '',
      away_team: away?.team?.displayName || '',
      score_home: parseInt(home?.score || '0'),
      score_away: parseInt(away?.score || '0'),
      finished: status === 'STATUS_FULL_TIME' || status === 'STATUS_FINAL',
      event_date_uy: eventUYDate,
    })
  }
  return matches.filter(m => m.event_date_uy === date)
}

async function saveResult(supabase, match_id, score_home, score_away) {
  await supabase.from('match_results').upsert({ match_id, score_home, score_away })
}

export async function GET(request) {
  const auth = request.headers.get('authorization')
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  const { data: existingResults } = await supabase.from('match_results').select('match_id')
  const loadedIds = new Set((existingResults || []).map(r => r.match_id))

  const today = new Date().toLocaleDateString('en-CA')
  const yesterday = new Date(Date.now() - 86400000).toLocaleDateString('en-CA')

  const candidateMatches = MATCHES.filter(m =>
    m.phase === 'groups' &&
    (m.date === today || m.date === yesterday) &&
    !loadedIds.has(m.id) &&
    new Date() >= new Date(`${m.date}T${m.time}:00-03:00`)
  )

  if (candidateMatches.length === 0) {
    return NextResponse.json({ checked: 0, applied: 0, message: 'Nada pendiente' })
  }

  const [espnToday, espnYesterday] = await Promise.all([
    fetchESPNForDate(today),
    fetchESPNForDate(yesterday),
  ])
  const espnMatches = [...espnToday, ...espnYesterday]

  let applied = 0
  const log = []

  for (const match of candidateMatches) {
    const found = espnMatches.find(e => {
      const h = normalize(e.home_team)
      const a = normalize(e.away_team)
      return (h === match.home && a === match.away) || (h === match.away && a === match.home)
    })

    if (found?.finished) {
      const flipped = normalize(found.home_team) === match.away
      const score_home = flipped ? found.score_away : found.score_home
      const score_away = flipped ? found.score_home : found.score_away

      await saveResult(supabase, match.id, score_home, score_away)
      applied++
      log.push(`${match.home} ${score_home}-${score_away} ${match.away}`)
    }
  }

  // Un solo recalculo completo al final (idempotente) en vez de ir
  // sumando incrementalmente partido por partido.
  let summary = { matchesProcessed: 0, predictionsProcessed: 0, usersUpdated: 0 }
  if (applied > 0) {
    try {
      summary = await recomputeAllPoints(supabase)
    } catch (err) {
      console.error('recompute error:', err)
      return NextResponse.json({ checked: candidateMatches.length, applied, log, error: err.message }, { status: 500 })
    }
  }

  return NextResponse.json({ checked: candidateMatches.length, applied, log, ...summary })
}