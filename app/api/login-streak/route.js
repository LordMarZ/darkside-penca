import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST() {
  const cookieStore = cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    { cookies: { get: (n) => cookieStore.get(n)?.value } }
  )

  const { data: { session } } = await supabase.auth.getSession()
  if (!session) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const { data: profile } = await supabase
    .from('profiles')
    .select('login_streak, last_login_date, total_pts')
    .eq('id', session.user.id)
    .single()

  const today = new Date().toISOString().slice(0, 10)
  const lastLogin = profile?.last_login_date

  if (lastLogin === today) {
    return NextResponse.json({ streak: profile.login_streak, bonus: 0 })
  }

  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
  const isConsecutive = lastLogin === yesterday
  const newStreak = isConsecutive ? (profile?.login_streak ?? 0) + 1 : 1
  const bonus = 0

  const updates = {
    login_streak: newStreak,
    last_login_date: today,
  }

  if (bonus > 0) {
    updates.total_pts = (profile?.total_pts ?? 0) + bonus
    await supabase.from('points_log').insert({
      user_id: session.user.id,
      pts: bonus,
      reason: `Login diario consecutivo - dia ${newStreak}`,
    })
  }

  await supabase.from('profiles').update(updates).eq('id', session.user.id)
  return NextResponse.json({ streak: newStreak, bonus })
}
