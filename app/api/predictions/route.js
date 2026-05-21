import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { calcTotalMatchPoints } from '../../../lib/points'
import { MATCHES } from '../../../data/fixture'

export async function POST(request) {
  const cookieStore = cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    { cookies: { get: (n) => cookieStore.get(n)?.value } }
  )

  const { data: { session } } = await supabase.auth.getSession()
  if (!session) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const { match_id, score_home, score_away } = await request.json()

  const match = MATCHES.find(m => m.id === match_id)
  if (!match) return NextResponse.json({ error: 'Partido no encontrado' }, { status: 404 })

  // Verificar que el partido no empezó aun
  const matchTime = new Date(`${match.date}T${match.time}:00`)
  if (new Date() >= matchTime) {
    return NextResponse.json({ error: 'El partido ya comenzó' }, { status: 400 })
  }

  const isEarly = (matchTime - new Date()) / 3600000 > 24

  const { data, error } = await supabase
    .from('predictions')
    .upsert({
      user_id: session.user.id,
      match_id,
      score_home,
      score_away,
      is_early: isEarly,
      submitted_at: new Date().toISOString(),
    }, { onConflict: 'user_id,match_id' })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ prediction: data })
}
