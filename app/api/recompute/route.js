import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { recomputeAllPoints } from '../../../lib/recompute'

// POST /api/recompute — solo admin. Repasa TODOS los pronosticos contra
// TODOS los resultados oficiales cargados y reconstruye total_pts,
// streak_exact y streak_exact_best desde cero para cada usuario.
// Body: { admin_key }
export async function POST(request) {
  const { admin_key } = await request.json()

  if (admin_key !== process.env.ADMIN_KEY) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  const summary = await recomputeAllPoints(supabase)
  return NextResponse.json(summary)
}
