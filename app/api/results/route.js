import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { recomputeAllPoints } from '../../../lib/recompute'

// POST /api/results — solo admin puede llamar esto
// Body: { match_id, score_home, score_away, winner_home, admin_key }
// winner_home: solo en partidos de eliminacion empatados (definidos por
// penales) — true si gano el local, false si gano el visitante, null/undefined
// en cualquier otro caso.
//
// Idempotente: guarda el resultado oficial y recalcula TODOS los puntos
// desde cero (match_results + predictions). Cargar el mismo resultado
// una o cien veces da siempre el mismo total_pts — no se acumula.
export async function POST(request) {
  const { match_id, score_home, score_away, winner_home, admin_key } = await request.json()

  if (admin_key !== process.env.ADMIN_KEY) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  // Service role key — bypasea RLS para actualizar perfiles de todos los usuarios
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  // Guardar resultado oficial
  const { error: resultError } = await supabase
    .from('match_results')
    .upsert({ match_id, score_home, score_away, winner_home: winner_home ?? null })

  if (resultError) {
    return NextResponse.json({ error: resultError.message }, { status: 500 })
  }

  try {
    const summary = await recomputeAllPoints(supabase)
    return NextResponse.json({ ...summary, match_id, score_home, score_away })
  } catch (err) {
    console.error('recompute error:', err)
    return NextResponse.json({ error: err.message || 'Error desconocido' }, { status: 500 })
  }
}