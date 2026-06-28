'use client'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'
import { createClient } from '../../lib/supabase'
import { useRouter } from 'next/navigation'
import Navbar from '../../components/Navbar'
import MatchCard from '../../components/MatchCard'
import PredictModal from '../../components/PredictModal'
import ChampionPicker from '../../components/ChampionPicker'
import { MATCHES } from '../../data/fixture'
import { resolveMatches } from '../../lib/bracket'
import Flag from '../../components/Flag'
import styles from './dashboard.module.css'

const DAY_NAMES = ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb']
const MONTH_NAMES = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T12:00:00')
  return `${DAY_NAMES[d.getDay()]} ${d.getDate()} ${MONTH_NAMES[d.getMonth()]}`
}

function matchStarted(match) {
  return new Date() >= new Date(`${match.date}T${match.time}:00-03:00`)
}

export default function Dashboard() {
  const supabase = createClient()
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [predictions, setPredictions] = useState({})
  const [results, setResults] = useState({})
  const [leaderboard, setLeaderboard] = useState([])
  const [modalMatch, setModalMatch] = useState(null)
  const [showChampionPicker, setShowChampionPicker] = useState(false)
  const [loading, setLoading] = useState(true)
  const [loginBonus, setLoginBonus] = useState(null)
  const [visibleDates, setVisibleDates] = useState(2)

// Forzar fecha "hoy" en hora Uruguay (UTC-3), sin depender del timezone del dispositivo
const nowUY = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Montevideo' }))
const today = nowUY.toLocaleDateString('en-CA')

  const resolvedMatches = resolveMatches(MATCHES, results)

  const upcomingDates = [...new Set(
    resolvedMatches.filter(m => m.date >= today).map(m => m.date)
  )].sort()

  const shownDates = upcomingDates.slice(0, visibleDates)
  const todayMatches = resolvedMatches.filter(m => m.date === today)
  const nextTodayMatch = todayMatches.find(m => !matchStarted(m))
  const todayMatch = nextTodayMatch
  || resolvedMatches.find(m => !matchStarted(m) && m.date >= today)
  || resolvedMatches[0]
  const isToday = todayMatch.date === today

  const pendingMatches = resolvedMatches
    .filter(m => m.date >= today)
    .sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time))

  function getNextMatch(currentMatchId) {
    const idx = pendingMatches.findIndex(m => m.id === currentMatchId)
    return idx >= 0 && idx < pendingMatches.length - 1 ? pendingMatches[idx + 1] : null
  }

  useEffect(() => {
    async function load() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { router.push('/login'); return }
      setUser(session.user)

      const [profRes, predsRes, resultsRes, lbRes] = await Promise.all([
        supabase.from('profiles').select('*').eq('id', session.user.id).single(),
        supabase.from('predictions').select('*').eq('user_id', session.user.id),
        supabase.from('match_results').select('*'),
        supabase.from('profiles').select('id, username, avatar_url, total_pts').order('total_pts', { ascending: false }).limit(5),
      ])

      setProfile(profRes.data)
      const predMap = {}
      predsRes.data?.forEach(p => { predMap[p.match_id] = p })
      setPredictions(predMap)
      const resMap = {}
      resultsRes.data?.forEach(r => { resMap[r.match_id] = r })
      setResults(resMap)
      setLeaderboard(lbRes.data || [])
      setLoading(false)

      fetch('/api/login-streak', { method: 'POST' })
        .then(r => r.json())
        .then(d => { if (d.bonus > 0) setLoginBonus(d) })
        .catch(() => {})
    }
    load()
  }, [])

  async function savePrediction(matchId, scoreHome, scoreAway) {
    const match = resolvedMatches.find(m => m.id === matchId)
    if (matchStarted(match)) {
      alert('El partido ya comenzó, no se puede pronosticar')
      return {}
    }
    if (match.pending) {
      alert('Todavía no se conocen los equipos de este partido')
      return {}
    }

    await supabase.from('profiles').upsert({
      id: user.id,
      username: user.user_metadata?.full_name || user.email,
      avatar_url: user.user_metadata?.avatar_url || null,
    }, { onConflict: 'id', ignoreDuplicates: true })

    const { data, error } = await supabase
      .from('predictions')
      .upsert({
        user_id: user.id,
        match_id: matchId,
        score_home: scoreHome,
        score_away: scoreAway,
        submitted_at: new Date().toISOString(),
      }, { onConflict: 'user_id,match_id' })
      .select()
      .single()

    if (error) {
      alert('Error al guardar: ' + error.message)
      return {}
    }
    setPredictions(prev => ({ ...prev, [matchId]: data }))
    return { prediction: data }
  }

  async function saveChampion(champion, topScorer) {
    await supabase.from('profiles').update({
      champion_pick: champion, top_scorer_pick: topScorer,
    }).eq('id', user.id)
    setProfile(prev => ({ ...prev, champion_pick: champion, top_scorer_pick: topScorer }))
    setShowChampionPicker(false)
  }

  if (loading) return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', minHeight:'100vh', color:'var(--muted)', fontSize:16, letterSpacing:2 }}>
      CARGANDO...
    </div>
  )

  return (
    <>
      <Navbar user={user} />
      <main className={styles.main}>

        {loginBonus && (
          <div className={styles.bonusToast} onClick={() => setLoginBonus(null)}>
            🔥 Racha de {loginBonus.streak} dias seguidos · <strong>+{loginBonus.bonus} pt</strong>
          </div>
        )}

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statVal}>{profile?.total_pts ?? 0}</div>
            <div className={styles.statLabel}>MIS PUNTOS</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statVal}>{Object.keys(predictions).length}</div>
            <div className={styles.statLabel}>PRONOSTICOS</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statVal} style={{ color:'var(--gold2)' }}>{profile?.streak_exact ?? 0}</div>
            <div className={styles.statLabel}>RACHA EXACTOS</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statVal}>{profile?.login_streak ?? 0}</div>
            <div className={styles.statLabel}>DIAS SEGUIDOS</div>
          </div>
        </div>

        <div className={styles.championPromo}>
          <div className={styles.championLeft}>
            <div className={styles.championTitle}>🏆 PRONÓSTICO CAMPEÓN</div>
            <div className={styles.championSub}>
              {profile?.champion_pick
                ? `Tu campeón: ${profile.champion_pick} · Goleador: ${profile.top_scorer_pick || 'sin elegir'}`
                : 'Elegí campeón (+10 pts) y goleador (+5 pts) antes del torneo'}
            </div>
          </div>
          <button className={styles.championBtn} onClick={() => setShowChampionPicker(true)}>
            {profile?.champion_pick ? 'CAMBIAR' : 'ELEGIR'}
          </button>
        </div>

        <div className={styles.sectionTitle}>{isToday ? 'PARTIDO DE HOY' : 'PRÓXIMO PARTIDO'}</div>
        <div className={styles.todayBox}>
          {isToday && <div className={styles.todayBadge}>HOY</div>}
          <div className={styles.todayMatch}>
            <div className={styles.todayTeam}>
              <Flag country={todayMatch.home} size={52} />
              <span className={styles.bigName}>{todayMatch.home}</span>
            </div>
            <div className={styles.todayCenter}>
              <div className={styles.bigVs}>VS</div>
              <div className={styles.todayMeta}>{todayMatch.date} · {todayMatch.time}hs UY</div>
              <div className={styles.todayVenue}>{todayMatch.venue}</div>
              {predictions[todayMatch.id] && (
                <div className={styles.todayPred}>Tu pred: {predictions[todayMatch.id].score_home}-{predictions[todayMatch.id].score_away}</div>
              )}
            </div>
            <div className={styles.todayTeam}>
              <Flag country={todayMatch.away} size={52} />
              <span className={styles.bigName}>{todayMatch.away}</span>
            </div>
          </div>
          {todayMatch.pending ? (
            <div className={styles.startedBadge}>🕓 EQUIPOS A DEFINIR</div>
          ) : !matchStarted(todayMatch) ? (
            <button className={styles.predictBtn} onClick={() => setModalMatch(todayMatch)}>
              {predictions[todayMatch.id] ? 'EDITAR PRONOSTICO' : 'HACER PRONOSTICO'}
            </button>
          ) : (
            <div className={styles.startedBadge}>⏱ PARTIDO EN CURSO — PRONÓSTICOS CERRADOS</div>
          )}
        </div>

        <div className={styles.sectionTitle}>PRÓXIMOS PARTIDOS</div>

        {upcomingDates.length === 0 ? (
          <div style={{ color:'var(--muted)', textAlign:'center', padding:32 }}>No hay más partidos de grupos pendientes</div>
        ) : (
          shownDates.map(date => {
            const dayMatches = resolvedMatches
              .filter(m => m.date === date)
              .sort((a, b) => a.time.localeCompare(b.time))
            const predictable = dayMatches.filter(m => !m.pending)
            const predCount = predictable.filter(m => predictions[m.id]).length
            return (
              <div key={date} className={styles.dayBlock}>
                <div className={styles.dayHeader}>
                  <span className={styles.dayTitle}>
                    {date === today ? '🔴 HOY — ' : ''}{formatDate(date)}
                  </span>
                  <span className={styles.dayMeta}>{predCount}/{predictable.length} pronosticados</span>
                </div>
                <div className={styles.matchList}>
                  {dayMatches.map(m => (
                    <MatchCard key={m.id} match={m} prediction={predictions[m.id]} onPredict={!m.pending ? setModalMatch : null} />
                  ))}
                </div>
              </div>
            )
          })
        )}

        {visibleDates < upcomingDates.length && (
          <button className={styles.loadMoreBtn} onClick={() => setVisibleDates(v => v + 2)}>
            VER MÁS FECHAS ({upcomingDates.length - visibleDates} restantes)
          </button>
        )}

        <div className={styles.sectionTitle} style={{ marginTop:32 }}>TOP 5 RANKING</div>
        <div className={styles.lbCard}>
          {leaderboard.map((u, i) => (
            <div key={u.id} className={`${styles.lbRow} ${u.id === user?.id ? styles.lbYou : ''}`}>
              <span className={`${styles.lbRank} ${i === 0 ? styles.gold : i === 1 ? styles.silver : i === 2 ? styles.bronze : ''}`}>
                {i === 0 ? '🏆' : i + 1}
              </span>
              <div className={styles.lbUser}>
                {u.avatar_url
                  ? <img src={u.avatar_url} className={styles.lbAvatar} alt="" />
                  : <div className={styles.lbAvatarFallback}>{(u.username || '?')[0]}</div>}
                <span className={styles.lbName}>{u.username || 'Usuario'}</span>
                {u.id === user?.id && <span className={styles.youTag}>TU</span>}
              </div>
              <span className={styles.lbPts}>{u.total_pts}</span>
            </div>
          ))}
        </div>

      </main>

      {modalMatch && (
        <PredictModal
          match={modalMatch}
          existing={predictions[modalMatch.id]}
          onSave={savePrediction}
          onClose={() => setModalMatch(null)}
          nextMatch={getNextMatch(modalMatch.id)}
          onNext={(next) => setModalMatch(next)}
        />
      )}
      {showChampionPicker && (
        <ChampionPicker current={profile} onSave={saveChampion} onClose={() => setShowChampionPicker(false)} />
      )}
      <Footer />
    </>
  )
}