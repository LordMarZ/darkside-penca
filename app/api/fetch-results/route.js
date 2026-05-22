import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const date = searchParams.get('date') || new Date().toISOString().slice(0, 10)
  const dateStr = date.replace(/-/g, '')

  try {
    const res = await fetch(
      `https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=${dateStr}`,
      { cache: 'no-store' }
    )
    const data = await res.json()

    const matches = (data.events || []).map(event => {
      const comp = event.competitions?.[0]
      const home = comp?.competitors?.find(c => c.homeAway === 'home')
      const away = comp?.competitors?.find(c => c.homeAway === 'away')
      const status = comp?.status?.type?.name

      return {
        espn_id: event.id,
        home_team: home?.team?.displayName || '',
        away_team: away?.team?.displayName || '',
        score_home: parseInt(home?.score || '0'),
        score_away: parseInt(away?.score || '0'),
        status,
        finished: status === 'STATUS_FULL_TIME' || status === 'STATUS_FINAL',
      }
    })

    return NextResponse.json({ matches, date })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}