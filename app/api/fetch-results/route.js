import { NextResponse } from 'next/server'

// Busca partidos de ESPN para una fecha en hora Uruguay (UTC-3).
// Como los partidos nocturnos (ej: 23:00 UY) caen en el día siguiente en UTC,
// consultamos el día solicitado Y el día siguiente, y combinamos resultados.
export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const date = searchParams.get('date') || new Date().toISOString().slice(0, 10)

  const dateStr = date.replace(/-/g, '')

  // Día siguiente (para partidos nocturnos UY que caen en UTC del día +1)
  const nextDate = new Date(date + 'T12:00:00Z')
  nextDate.setUTCDate(nextDate.getUTCDate() + 1)
  const nextDateStr = nextDate.toISOString().slice(0, 10).replace(/-/g, '')

  try {
    const [res1, res2] = await Promise.all([
      fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=${dateStr}`, { cache: 'no-store' }),
      fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=${nextDateStr}`, { cache: 'no-store' }),
    ])

    const [data1, data2] = await Promise.all([res1.json(), res2.json()])

    const allEvents = [...(data1.events || []), ...(data2.events || [])]

    // Deduplicar por id (por si algún evento aparece en ambos días)
    const seen = new Set()
    const matches = []

    for (const event of allEvents) {
      if (seen.has(event.id)) continue
      seen.add(event.id)

      const comp = event.competitions?.[0]
      const home = comp?.competitors?.find(c => c.homeAway === 'home')
      const away = comp?.competitors?.find(c => c.homeAway === 'away')
      const status = comp?.status?.type?.name

      // Convertir fecha UTC del evento a fecha local Uruguay (UTC-3) para filtrar
      const eventUTC = new Date(event.date)
      const eventUYDate = new Date(eventUTC.getTime() - 3 * 3600000).toISOString().slice(0, 10)

      matches.push({
        espn_id: event.id,
        home_team: home?.team?.displayName || '',
        away_team: away?.team?.displayName || '',
        score_home: parseInt(home?.score || '0'),
        score_away: parseInt(away?.score || '0'),
        status,
        finished: status === 'STATUS_FULL_TIME' || status === 'STATUS_FINAL',
        event_date_uy: eventUYDate,
      })
    }

    // Filtrar solo los partidos cuya fecha en hora Uruguay coincide con la solicitada
    const filtered = matches.filter(m => m.event_date_uy === date)

    return NextResponse.json({ matches: filtered, date })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }

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

}