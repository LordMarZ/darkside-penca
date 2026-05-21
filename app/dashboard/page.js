'use client'
import { useEffect, useState } from 'react'
import { createClient } from '../../lib/supabase'
import { useRouter } from 'next/navigation'
import Navbar from '../../components/Navbar'
import MatchCard from '../../components/MatchCard'
import PredictModal from '../../components/PredictModal'
import ChampionPicker from '../../components/ChampionPicker'
import { MATCHES } from '../../data/fixture'
import styles from './dashboard.module.css'

export default function Dashboard() {
  const supabase = createClient()
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [predictions, setPredictions] = useState({})
  const [leaderboard, setLeaderboard] = useState([])
  const [modalMatch, setModalMatch] = useState(null)
  const [showChampionPicker, setShowChampionPicker] = useState(false)
  const [loading, setLoading] = useState(true)
  const [loginBonus, setLoginBonus] = useState(null)

  const today = new Date().toISOString().slice(0, 10)
  const upcomingMatches = MATCHES.filter(m => m.phase === 'groups').slice(0, 8)
  const todayMatch = MATCHES.find(m => m.date === today) || MATCHES[0]

  useEffect(() => {
    async function load() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { router.push('/login'); return }
      setUser(session.user)

      const [profRes, predsRes, lbRes] = await Promise.all([
        supabase.from('profiles').select('*').eq('id', session.user.id).single(),
        supabase.from('predictions').select('*').eq('user_id', session.user.id),
        supabase.from('profiles').select('id, username, avatar_url, total_pts').order('total_pts', { ascending: false }).limit(5),
      ])

      setProfile(profRes.data)
      const predMap = {}
      predsRes.data?.forEach(p => { predMap[p.match_id] = p })
      setPredictions(predMap)
      setLeaderboard(lbRes.data || [])
      setLoading(false)

      // Registrar login streak (sin bloquear la carga)
      fetch('/api/login-streak', { method: 'POST' })
        .then(r => r.json())
        .then(d => {
          if (d.bonus > 0) setLoginBonus(d)
        })
        .catch(() => {})
    }
    load()
  }, [])

  async function savePrediction(matchId, scoreHome, scoreAway) {
    const res = await fetch('/api/predictions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ match_id: matchId, score_home: scoreHome, score_away: scoreAway }),
    })
    const data = await res.json()
    if (data.prediction) {
      setPredictions(prev => ({ ...prev, [matchId]: data.prediction }))
    }
    return data
  }

  async function saveChampion(champion, topScorer) {
    await supabase.from('profiles').update({
      champion_pick: champion,
      top_scorer_pick: topScorer,
    }).eq('id', user.id)
    setProfile(prev => ({ ...prev, champion_pick: champion, top_scorer_pick: topScorer }))
    setShowChampionPicker(false)
  }

  if (loading) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', color: 'var(--muted)', fontSize: 16, letterSpacing: 2 }}>
      CARGANDO...
    </div>
  )

  return (
    <>
      <Navbar user={user} />
      <main className={styles.main}>

        {/* Login bonus toast */}
        {loginBonus && (
          <div className={styles.bonusToast} onClick={() => setLoginBonus(null)}>
            🔥 Racha de {loginBonus.streak} dias seguidos · <strong>+{loginBonus.bonus} pt</strong>
          </div>
        )}

        {/* Stats */}
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
            <div className={styles.statVal} style={{ color: 'var(--gold2)' }}>{profile?.streak_exact ?? 0}</div>
            <div className={styles.statLabel}>RACHA EXACTOS</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statVal}>{profile?.login_streak ?? 0}</div>
            <div className={styles.statLabel}>DIAS SEGUIDOS</div>
          </div>
        </div>

        {/* Champion Picker promo */}
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

        {/* Today */}
        <div className={styles.sectionTitle}>PARTIDO DESTACADO</div>
        <div className={styles.todayBox}>
          <div className={styles.todayBadge}>HOY</div>
          <div className={styles.todayMatch}>
            <div className={styles.todayTeam}>
              <span className={styles.bigFlag}>{todayMatch.homeF}</span>
              <span className={styles.bigName}>{todayMatch.home}</span>
            </div>
            <div className={styles.todayCenter}>
              <div className={styles.bigVs}>VS</div>
              <div className={styles.todayMeta}>{todayMatch.date} · {todayMatch.time}hs</div>
              <div className={styles.todayVenue}>{todayMatch.venue}</div>
              {predictions[todayMatch.id] && (
                <div className={styles.todayPred}>
                  Tu pred: {predictions[todayMatch.id].score_home}-{predictions[todayMatch.id].score_away}
                </div>
              )}
            </div>
            <div className={styles.todayTeam}>
              <span className={styles.bigFlag}>{todayMatch.awayF}</span>
              <span className={styles.bigName}>{todayMatch.away}</span>
            </div>
          </div>
          <button className={styles.predictBtn} onClick={() => setModalMatch(todayMatch)}>
            {predictions[todayMatch.id] ? 'EDITAR PRONOSTICO' : 'HACER PRONOSTICO'}
          </button>
        </div>

        {/* Upcoming */}
        <div className={styles.sectionTitle}>PROXIMOS PARTIDOS</div>
        <div className={styles.matchList}>
          {upcomingMatches.map(m => (
            <MatchCard key={m.id} match={m} prediction={predictions[m.id]} onPredict={setModalMatch} />
          ))}
        </div>

        {/* Mini leaderboard */}
        <div className={styles.sectionTitle}>TOP 5 RANKING</div>
        <div className={styles.lbCard}>
          {leaderboard.map((u, i) => (
            <div key={u.id} className={`${styles.lbRow} ${u.id === user?.id ? styles.lbYou : ''}`}>
              <span className={`${styles.lbRank} ${i === 0 ? styles.gold : i === 1 ? styles.silver : i === 2 ? styles.bronze : ''}`}>
                {i === 0 ? '🏆' : i + 1}
              </span>
              <div className={styles.lbUser}>
                {u.avatar_url ? <img src={u.avatar_url} className={styles.lbAvatar} alt="" /> : <div className={styles.lbAvatarFallback}>{(u.username || '?')[0]}</div>}
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
        />
      )}

      {showChampionPicker && (
        <ChampionPicker
          current={profile}
          onSave={saveChampion}
          onClose={() => setShowChampionPicker(false)}
        />
      )}
    </>
  )
}
