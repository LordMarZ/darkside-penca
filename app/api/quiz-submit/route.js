import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { calcQuizPoints } from '../../../data/quiz'

export async function POST(request) {
  const cookieStore = cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    { cookies: { get: (n) => cookieStore.get(n)?.value } }
  )

  const { data: { session } } = await supabase.auth.getSession()
  if (!session) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const { quiz_day, correct, total, answers } = await request.json()

  // Verificar que no lo haya hecho ya
  const { data: existing } = await supabase
    .from('quiz_attempts')
    .select('id')
    .eq('user_id', session.user.id)
    .eq('quiz_day', quiz_day)
    .single()

  if (existing) return NextResponse.json({ error: 'Ya completaste este día' }, { status: 400 })

  const pts = calcQuizPoints(correct)

  const { data: attempt, error } = await supabase
    .from('quiz_attempts')
    .insert({ user_id: session.user.id, quiz_day, correct, total, pts_earned: pts, answers })
    .select().single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  if (pts > 0) {
    const { data: profile } = await supabase.from('profiles').select('total_pts').eq('id', session.user.id).single()
    await supabase.from('profiles').update({ total_pts: (profile?.total_pts ?? 0) + pts }).eq('id', session.user.id)
    await supabase.from('points_log').insert({ user_id: session.user.id, pts, reason: `Quiz Día ${quiz_day}: ${correct}/${total} correctas` })
  }

  return NextResponse.json({ attempt, pts })
}
