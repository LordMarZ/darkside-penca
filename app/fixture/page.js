'use client'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'
import { createClient } from '../../lib/supabase'
import { useRouter } from 'next/navigation'
import Navbar from '../../components/Navbar'
import MatchCard from '../../components/MatchCard'
import Flag from '../../components/Flag'
import PredictModal from '../../components/PredictModal'
import { MATCHES, GROUPS, PHASES } from '../../data/fixture'
import { resolveMatches } from '../../lib/bracket'
import styles from './fixture.module.css'

function matchStarted(match) {
  return new Date() >= new Date(`${match.date}T${match.time}:00-03:00`)
}

// Calcula la tabla de posiciones de un grupo a partir de los resultados oficiales
function calcStandings(groupKey, results) {
  const teams = GROUPS[groupKey].teams.map(t => ({
    name: t.name,
    flag: t.flag,
    pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, pts: 0,
  }))

  const groupMatches = MATCHES.filter(m => m.group === groupKey && m.phase === 'groups')

  for (const m of groupMatches) {
    const result = results[m.id]
    if (!result) continue

    const home = teams.find(t => t.name === m.home)
    const away = teams.find(t => t.name === m.away)
    if (!home || !away) continue

    const rh = result.score_home
    const ra = result.score_away

    home.pj++; away.pj++
    home.gf += rh; home.gc += ra
    away.gf += ra; away.gc += rh

    if (rh > ra) { home.pg++; home.pts += 3; away.pp++ }
    else if (rh < ra) { away.pg++; away.pts += 3; home.pp++ }
    else { home.pe++; away.pe++; home.pts++; away.pts++ }
  }

  // Ordenar: puntos desc, diferencia de gol desc, goles a favor desc
  return teams.sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts
    const diffA = a.gf - a.gc, diffB = b.gf - b.gc
    if (diffB !== diffA) return diffB - diffA
    return b.gf - a.gf
  })
}

export default function FixturePage() {
  const supabase = createClient()
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [predictions, setPredictions] = useState({})
  const [results, setResults] = useState({})
  const [modalMatch, setModalMatch] = useState(null)
  const [phase, setPhase] = useState('groups')
  const [activeGroup, setActiveGroup] = useState('A')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { router.push('/login'); return }
      setUser(session.user)

      const [predsRes, resultsRes] = await Promise.all([
        supabase.from('predictions').select('*').eq('user_id', session.user.id),
        supabase.from('match_results').select('*'),
      ])

      const map = {}
      predsRes.data?.forEach(p => { map[p.match_id] = p })
      setPredictions(map)

      const resMap = {}
      resultsRes.data?.forEach(r => { resMap[r.match_id] = r })
      setResults(resMap)

      setLoading(false)
    }
    load()
  }, [])

  async function savePrediction(matchId, scoreHome, scoreAway) {
    const { data: { session } } = await supabase.auth.getSession()
    const match = resolvedMatches.find(m => m.id === matchId)
    if (matchStarted(match)) {
      alert('El partido ya comenzó, no se puede pronosticar')
      return
    }
    if (match.pending) {
      alert('Todavía no se conocen los equipos de este partido')
      return
    }

    await supabase.from('profiles').upsert({
      id: session.user.id,
      username: session.user.user_metadata?.full_name || session.user.email,
      avatar_url: session.user.user_metadata?.avatar_url || null,
    }, { onConflict: 'id', ignoreDuplicates: true })

    const payload = { user_id: session.user.id, match_id: matchId, score_home: scoreHome, score_away: scoreAway, submitted_at: new Date().toISOString() }
    const { data, error } = await supabase.from('predictions').upsert(payload, { onConflict: 'user_id,match_id' }).select().single()
    if (data) setPredictions(prev => ({ ...prev, [matchId]: data }))
    else if (error) alert('El partido ya comenzó, no se puede pronosticar')
  }

  const resolvedMatches = resolveMatches(MATCHES, results)
  const phaseMatches = resolvedMatches.filter(m => m.phase === phase)
  const groupKeys = Object.keys(GROUPS)
  const standings = phase === 'groups' ? calcStandings(activeGroup, results) : []

  // Adjuntar resultado oficial a cada partido para que MatchCard lo muestre
  function withResult(m) {
    return results[m.id] ? { ...m, result: { score_home: results[m.id].score_home, score_away: results[m.id].score_away } } : m
  }

  if (loading) return <div style={{ display:'flex',alignItems:'center',justifyContent:'center',minHeight:'100vh',color:'var(--muted)',letterSpacing:2 }}>CARGANDO...</div>

  return (
    <>
      <Navbar user={user} />
      <main className={styles.main}>

        <div className={styles.phaseTabs}>
          {Object.entries(PHASES).map(([key, label]) => (
            <button key={key} className={`${styles.phaseTab} ${phase === key ? styles.active : ''}`} onClick={() => setPhase(key)}>
              {label}
            </button>
          ))}
        </div>

        {phase === 'groups' && (
          <>
            <div className={styles.groupTabs}>
              {groupKeys.map(g => (
                <button key={g} className={`${styles.groupTab} ${activeGroup === g ? styles.active : ''}`} onClick={() => setActiveGroup(g)}>
                  GRP {g}
                </button>
              ))}
            </div>

            <div className={styles.groupHeader}>GRUPO {activeGroup}</div>

            <div className={styles.standingsCard}>
              <div className={styles.stRow + ' ' + styles.stHeader}>
                <span>EQUIPO</span><span>J</span><span>G</span><span>E</span><span>P</span><span>PTS</span>
              </div>
              {standings.map((t, i) => (
                <div key={i} className={styles.stRow}>
                  <span style={{ display:'flex', alignItems:'center', gap:6 }}><Flag country={t.name} size={20} /><span>{t.name}</span></span>
                  <span>{t.pj}</span><span>{t.pg}</span><span>{t.pe}</span><span>{t.pp}</span>
                  <span style={{ fontFamily:'Bebas Neue, Impact, cursive', fontSize:18, color:'var(--gold)' }}>{t.pts}</span>
                </div>
              ))}
            </div>

            <div className={styles.matchesTitle}>PARTIDOS</div>
            <div className={styles.matchList}>
              {resolvedMatches.filter(m => m.group === activeGroup).map(m => (
                <MatchCard key={m.id} match={withResult(m)} prediction={predictions[m.id]} onPredict={setModalMatch} />
              ))}
            </div>
          </>
        )}

        {phase !== 'groups' && (
          <div className={styles.matchList}>
            {phaseMatches.length === 0
              ? <div className={styles.tbd}>Los partidos se definiran durante el torneo</div>
              : phaseMatches.map(m => (
                <MatchCard key={m.id} match={withResult(m)} prediction={predictions[m.id]} onPredict={!m.pending ? setModalMatch : null} />
              ))
            }
          </div>
        )}

      </main>

      {modalMatch && (
        <PredictModal match={modalMatch} existing={predictions[modalMatch.id]} onSave={savePrediction} onClose={() => setModalMatch(null)} />
      )}
      <Footer />
    </>
  )
}