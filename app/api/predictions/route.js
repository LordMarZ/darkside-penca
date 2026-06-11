import { createServerClient } from '@supabase/ssr'
import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { MATCHES } from '../../../data/fixture'

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

  const { match_id, score_home, score_away } = await request.json()

  const match = MATCHES.find(m => m.id === match_id)
  if (!match) return NextResponse.json({ error: 'Partido no encontrado' }, { status: 404 })

  // Verificar que el partido no empezó aun (hora Uruguay)
  const matchTime = new Date(`${match.date}T${match.time}:00-03:00`)
  if (new Date() >= matchTime) {
    return NextResponse.json({ error: 'El partido ya comenzó' }, { status: 400 })
  }

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

  // Guardar el pronóstico
  const { data, error } = await supabase
    .from('predictions')
    .upsert({
      user_id: session.user.id,
      match_id,
      score_home,
      score_away,
      submitted_at: new Date().toISOString(),
    }, { onConflict: 'user_id,match_id' })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ prediction: data })
}