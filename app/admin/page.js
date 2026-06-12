'use client'
import { useState } from 'react'
import { MATCHES, GROUPS } from '../../data/fixture'
import Flag from '../../components/Flag'

// Mapeo de nombres ESPN → nombres del fixture
const ESPN_MAP = {
  'Mexico': 'México', 'South Korea': 'Corea del Sur', 'Czechia': 'Rep. Checa', 'Czech Republic': 'Rep. Checa', 
  'South Africa': 'Sudáfrica', 'Canada': 'Canadá', 'Bosnia and Herzegovina': 'Bosnia y Herzegovina',
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

export default function AdminPage() {
  const [key, setKey] = useState('')
  const [authed, setAuthed] = useState(false)
  const [authError, setAuthError] = useState(false)
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
  const [espnResults, setEspnResults] = useState([])
  const [fetching, setFetching] = useState(false)
  const [scores, setScores] = useState({})
  const [loading, setLoading] = useState({})
  const [done, setDone] = useState({})
  const [fetchMsg, setFetchMsg] = useState('')

  function handleAuth() {
    if (key.trim()) {
      setAuthed(true)
      setAuthError(false)
    } else {
      setAuthError(true)
    }
  }

  async function fetchESPN() {
    setFetching(true)
    setFetchMsg('')
    try {
      const res = await fetch(`/api/fetch-results?date=${date}`)
      const data = await res.json()
      setEspnResults(data.matches || [])

      const newScores = { ...scores }
      const matchesOfDay = MATCHES.filter(m => m.date === date)

      for (const match of matchesOfDay) {
        const found = data.matches?.find(e => {
          const h = normalize(e.home_team)
          const a = normalize(e.away_team)
          return (h === match.home && a === match.away) ||
                 (h === match.away && a === match.home)
        })
        if (found?.finished) {
          const flipped = normalize(found.home_team) === match.away
          newScores[match.id] = {
            home: flipped ? found.score_away : found.score_home,
            away: flipped ? found.score_home : found.score_away,
            auto: true,
            finished: true,
          }
        }
      }
      setScores(newScores)

      const foundCount = matchesOfDay.filter(match => {
        return data.matches?.some(e => {
          const h = normalize(e.home_team)
          const a = normalize(e.away_team)
          return (h === match.home && a === match.away) || (h === match.away && a === match.home)
        })
      }).length

      setFetchMsg(`ESPN: ${data.matches?.length || 0} partidos encontrados (${foundCount} coinciden con tu fixture)`)
    } catch (err) {
      setFetchMsg('Error al conectar con ESPN')
    }
    setFetching(false)
  }

  async function loadResult(match) {
    const s = scores[match.id]
    if (s?.home === undefined || s?.away === undefined) return

    setLoading(prev => ({ ...prev, [match.id]: true }))
    try {
      const res = await fetch('/api/results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          match_id: match.id,
          score_home: parseInt(s.home),
          score_away: parseInt(s.away),
          admin_key: key,
        }),
      })
      const data = await res.json()
      if (res.ok) {
        setDone(prev => ({ ...prev, [match.id]: `✅ ${data.updated} jugadores actualizados` }))
      } else {
        setDone(prev => ({ ...prev, [match.id]: `❌ ${data.error}` }))
      }
    } catch {
      setDone(prev => ({ ...prev, [match.id]: '❌ Error de conexión' }))
    }
    setLoading(prev => ({ ...prev, [match.id]: false }))
  }

  const matchesOfDay = MATCHES.filter(m => m.date === date)

  if (!authed) {
    return (
      <div style={{ minHeight: '100vh', background: '#050505', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ background: '#0d0d0d', border: '1px solid #1a0a0a', borderRadius: 16, padding: 40, width: 360 }}>
          <div style={{ fontFamily: 'Bebas Neue, Impact, cursive', fontSize: 28, letterSpacing: 4, color: '#cc1111', marginBottom: 8 }}>ADMIN</div>
          <div style={{ fontSize: 12, color: '#444', marginBottom: 24, letterSpacing: 1 }}>PENCA MUNDIAL 2026</div>
          <input
            type="password"
            placeholder="Clave de administrador"
            value={key}
            onChange={e => setKey(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleAuth()}
            style={{ width: '100%', background: '#1a1a1a', border: '1px solid #2a0a0a', borderRadius: 8, padding: '10px 14px', color: '#fff', fontSize: 14, marginBottom: 12, boxSizing: 'border-box', outline: 'none' }}
          />
          {authError && <div style={{ color: '#cc1111', fontSize: 12, marginBottom: 8 }}>Clave incorrecta</div>}
          <button
            onClick={handleAuth}
            style={{ width: '100%', background: '#cc1111', border: 'none', borderRadius: 8, padding: 12, color: '#fff', fontFamily: 'Bebas Neue, Impact, cursive', fontSize: 16, letterSpacing: 2, cursor: 'pointer' }}
          >
            ENTRAR
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#050505', padding: '0 0 60px' }}>
      <div style={{ background: '#0d0d0d', borderBottom: '1px solid #1a0a0a', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: 'Bebas Neue, Impact, cursive', fontSize: 24, letterSpacing: 3, color: '#cc1111' }}>⚙️ ADMIN — PENCA MUNDIAL</div>
        <button onClick={() => setAuthed(false)} style={{ background: 'none', border: '1px solid #333', borderRadius: 6, color: '#666', fontSize: 11, padding: '6px 12px', cursor: 'pointer', letterSpacing: 1 }}>SALIR</button>
      </div>

      <div style={{ maxWidth: 720, margin: '32px auto', padding: '0 16px' }}>

        <div style={{ background: '#0d0d0d', border: '1px solid #1a1a1a', borderRadius: 12, padding: 20, marginBottom: 24, display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10, color: '#444', letterSpacing: 2, marginBottom: 6 }}>FECHA</div>
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: 8, padding: '8px 12px', color: '#fff', fontSize: 14, outline: 'none' }}
            />
          </div>
          <div>
            <button
              onClick={fetchESPN}
              disabled={fetching}
              style={{ background: '#1a3a1a', border: '1px solid #2a5a2a', borderRadius: 8, color: '#4caf50', padding: '10px 20px', fontFamily: 'Bebas Neue, Impact, cursive', fontSize: 14, letterSpacing: 2, cursor: 'pointer' }}
            >
              {fetching ? 'BUSCANDO...' : '📡 BUSCAR EN ESPN'}
            </button>
            {fetchMsg && <div style={{ fontSize: 11, color: '#4caf50', marginTop: 6 }}>{fetchMsg}</div>}
          </div>
        </div>

        {matchesOfDay.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#333', padding: 40, fontSize: 14 }}>No hay partidos para esta fecha</div>
        ) : (
          matchesOfDay.map(match => {
            const s = scores[match.id] || {}
            const isDone = done[match.id]
            const isLoading = loading[match.id]

            return (
              <div key={match.id} style={{ background: '#0d0d0d', border: `1px solid ${isDone?.startsWith('✅') ? '#1a3a1a' : '#1a1a1a'}`, borderRadius: 12, padding: 20, marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                  <span style={{ background: '#1a0a0a', border: '1px solid #2a0a0a', color: '#cc1111', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 4, letterSpacing: 1 }}>GRP {match.group}</span>
                  <span style={{ fontSize: 12, color: '#444' }}>{match.date} · {match.time}hs UY</span>
                  {s.auto && <span style={{ fontSize: 10, color: '#4caf50', background: '#0a1a0a', border: '1px solid #1a3a1a', padding: '2px 8px', borderRadius: 4 }}>📡 ESPN</span>}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{ flex: 1, display:'flex', alignItems:'center', justifyContent:'flex-end', gap: 8 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{match.home}</div>
                    <Flag country={match.home} size={20} />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <input
                      type="number" min="0" max="20"
                      value={s.home ?? ''}
                      onChange={e => setScores(prev => ({ ...prev, [match.id]: { ...prev[match.id], home: e.target.value } }))}
                      style={{ width: 52, textAlign: 'center', background: '#1a1a1a', border: '1px solid #333', borderRadius: 8, padding: '8px 0', color: '#fff', fontSize: 20, fontFamily: 'Bebas Neue, Impact, cursive', outline: 'none' }}
                    />
                    <span style={{ color: '#444', fontFamily: 'Bebas Neue, Impact, cursive', fontSize: 20 }}>-</span>
                    <input
                      type="number" min="0" max="20"
                      value={s.away ?? ''}
                      onChange={e => setScores(prev => ({ ...prev, [match.id]: { ...prev[match.id], away: e.target.value } }))}
                      style={{ width: 52, textAlign: 'center', background: '#1a1a1a', border: '1px solid #333', borderRadius: 8, padding: '8px 0', color: '#fff', fontSize: 20, fontFamily: 'Bebas Neue, Impact, cursive', outline: 'none' }}
                    />
                  </div>

                  <div style={{ flex: 1, display:'flex', alignItems:'center', gap: 8 }}>
                    <Flag country={match.away} size={20} />
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{match.away}</div>
                  </div>
                </div>

                {isDone ? (
                  <div style={{ textAlign: 'center', fontSize: 13, color: isDone.startsWith('✅') ? '#4caf50' : '#cc1111', padding: '8px', background: isDone.startsWith('✅') ? '#0a1a0a' : '#1a0a0a', borderRadius: 8 }}>{isDone}</div>
                ) : (
                  <button
                    onClick={() => loadResult(match)}
                    disabled={isLoading || s.home === undefined || s.away === undefined || s.home === '' || s.away === ''}
                    style={{ width: '100%', background: s.home !== undefined && s.home !== '' ? '#cc1111' : '#1a1a1a', border: 'none', borderRadius: 8, padding: 10, color: '#fff', fontFamily: 'Bebas Neue, Impact, cursive', fontSize: 14, letterSpacing: 2, cursor: 'pointer', opacity: isLoading ? 0.6 : 1 }}
                  >
                    {isLoading ? 'CARGANDO...' : 'CARGAR RESULTADO'}
                  </button>
                )}
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}