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
import styles from './fixture.module.css'

export default function FixturePage() {
  const supabase = createClient()
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [predictions, setPredictions] = useState({})
  const [modalMatch, setModalMatch] = useState(null)
  const [phase, setPhase] = useState('groups')
  const [activeGroup, setActiveGroup] = useState('A')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { router.push('/login'); return }
      setUser(session.user)
      const { data: preds } = await supabase.from('predictions').select('*').eq('user_id', session.user.id)
      const map = {}
      preds?.forEach(p => { map[p.match_id] = p })
      setPredictions(map)
      setLoading(false)
    }
    load()
  }, [])

  async function savePrediction(matchId, scoreHome, scoreAway) {
    const { data: { session } } = await supabase.auth.getSession()
    const match = MATCHES.find(m => m.id === matchId)
    const matchTime = new Date(`${match.date}T${match.time}:00`)
    const isEarly = (matchTime - new Date()) / 3600000 > 24

    const payload = { user_id: session.user.id, match_id: matchId, score_home: scoreHome, score_away: scoreAway, is_early: isEarly, submitted_at: new Date().toISOString() }
    const { data } = await supabase.from('predictions').upsert(payload, { onConflict: 'user_id,match_id' }).select().single()
    if (data) setPredictions(prev => ({ ...prev, [matchId]: data }))
  }

  const phaseMatches = MATCHES.filter(m => m.phase === phase)
  const groupKeys = Object.keys(GROUPS)

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
              {GROUPS[activeGroup].teams.map((t, i) => (
                <div key={i} className={styles.stRow}>
                  <span style={{ display:'flex', alignItems:'center', gap:6 }}><Flag country={t.name} size={20} /><span>{t.name}</span></span>
                  <span>0</span><span>0</span><span>0</span><span>0</span>
                  <span style={{ fontFamily:'Bebas Neue, Impact, cursive', fontSize:18, color:'var(--gold)' }}>0</span>
                </div>
              ))}
            </div>

            <div className={styles.matchesTitle}>PARTIDOS</div>
            <div className={styles.matchList}>
              {MATCHES.filter(m => m.group === activeGroup).map(m => (
                <MatchCard key={m.id} match={m} prediction={predictions[m.id]} onPredict={setModalMatch} />
              ))}
            </div>
          </>
        )}

        {phase !== 'groups' && (
          <div className={styles.matchList}>
            {phaseMatches.length === 0
              ? <div className={styles.tbd}>Los partidos se definiran durante el torneo</div>
              : phaseMatches.map(m => (
                <MatchCard key={m.id} match={m} prediction={predictions[m.id]} onPredict={m.home !== 'TBD' ? setModalMatch : null} />
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
