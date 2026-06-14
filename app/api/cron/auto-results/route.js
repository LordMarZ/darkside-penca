import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { calcTotalMatchPoints } from '../../../../lib/points'
import { MATCHES } from '../../../../data/fixture'

// Mapeo de nombres ESPN → nombres del fixture
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

// Trae partidos de ESPN para una fecha en hora Uruguay (consulta 2 días UTC)
async function fetchESPNForDate(date) {
  const dateStr = date.replace(/-/g, '')
  const nextDate = new Date(date + 'T12:00:00Z')
  nextDate.setUTCDate(nextDate.getUTCDate() + 1)
  const nextDateStr = nextDate.toISOString().slice(0, 10).replace(/-/g, '')

  // Día anterior (para partidos de madrugada UY que en UTC cayeron el día anterior)
const prevDate = new Date(date + 'T12:00:00Z')
prevDate.setUTCDate(prevDate.getUTCDate() - 1)
const prevDateStr = prevDate.toISOString().slice(0, 10).replace(/-/g, '')

const [res1, res2, res3] = await Promise.all([
  fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=${prevDateStr}`, { cache: 'no-store' }),
  fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=${dateStr}`, { cache: 'no-store' }),
  fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=${nextDateStr}`, { cache: 'no-store' }),
])

const [data0, data1, data2] = await Promise.all([res1.json(), res2.json(), res3.json()])
const allEvents = [...(data0.events || []), ...(data1.events || []), ...(data2.events || [])]


  const [res1, res2] = await Promise.all([
    fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=${dateStr}`, { cache: 'no-store' }),
    fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=${nextDateStr}`, { cache: 'no-store' }),
  ])
  const [data1, data2] = await Promise.all([res1.json(), res2.json()])
  const allEvents = [...(data1.events || []), ...(data2.events || [])]

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

// Aplica un resultado: guarda en match_results y calcula puntos de todos los usuarios
async function applyResult(supabase, match_id, score_home, score_away) {
  await supabase.from('match_results').upsert({ match_id, score_home, score_away })

  const { data: predictions } = await supabase
    .from('predictions')
    .select('*, profiles(streak_exact, streak_exact_best, total_pts)')
    .eq('match_id', match_id)

  if (!predictions?.length) return 0

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
      await supabase.from('predictions').update({ pts_earned: total }).eq('id', pred.id)

      const { data: profile } = await supabase
        .from('profiles').select('total_pts, streak_exact_best').eq('id', pred.user_id).single()

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
      await supabase.from('profiles').update({ streak_exact: 0 }).eq('id', pred.user_id)
    }
  }
  return updated
}

export async function GET(request) {
  // Proteger con un secret para que no lo llame cualquiera
  const auth = request.headers.get('authorization')
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  // Resultados ya cargados
  const { data: existingResults } = await supabase.from('match_results').select('match_id')
  const loadedIds = new Set((existingResults || []).map(r => r.match_id))

  // Partidos de hoy y ayer (hora Uruguay) que ya empezaron y no tienen resultado
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

  // Buscar resultados ESPN para ambas fechas
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

      const updated = await applyResult(supabase, match.id, score_home, score_away)
      applied++
      log.push(`${match.home} ${score_home}-${score_away} ${match.away} (${updated} usuarios)`)
    }
  }

  return NextResponse.json({ checked: candidateMatches.length, applied, log })
}