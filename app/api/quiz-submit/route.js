import { createServerClient } from '@supabase/ssr'
import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { calcQuizPoints } from '../../../lib/points'

export async function POST(request) {
  const cookieStore = cookies()

  // Cliente con sesión — solo para identificar al usuario
  const supabaseAuth = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    { cookies: { get: (n) => cookieStore.get(n)?.value } }
  )

  const { data: { session } } = await supabaseAuth.auth.getSession()
  if (!session) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const { quiz_day, correct, total, answers } = await request.json()

  // Cliente admin (service role) — para escribir sin que RLS bloquee
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  // Asegurar que el perfil exista (por si el usuario es nuevo)
  await supabase.from('profiles').upsert({
    id: session.user.id,
    username: session.user.user_metadata?.full_name || session.user.email,
    avatar_url: session.user.user_metadata?.avatar_url || null,
  }, { onConflict: 'id', ignoreDuplicates: true })

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

  // El quiz NO suma puntos al ranking de la penca — es actividad separada
  return NextResponse.json({ attempt, pts })
}