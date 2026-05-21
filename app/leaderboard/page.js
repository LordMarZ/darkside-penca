'use client'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'
import { createClient } from '../../lib/supabase'
import { useRouter } from 'next/navigation'
import Navbar from '../../components/Navbar'
import styles from './leaderboard.module.css'

export default function LeaderboardPage() {
  const supabase = createClient()
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [lb, setLb] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { router.push('/login'); return }
      setUser(session.user)

      const { data } = await supabase
        .from('profiles')
        .select('id, username, avatar_url, total_pts, streak_exact_best')
        .order('total_pts', { ascending: false })
      setLb(data || [])
      setLoading(false)
    }
    load()
  }, [])

  const medals = ['🏆','🥈','🥉']

  if (loading) return <div style={{ display:'flex',alignItems:'center',justifyContent:'center',minHeight:'100vh',color:'var(--muted)',letterSpacing:2 }}>CARGANDO...</div>

  return (
    <>
      <Navbar user={user} />
      <main className={styles.main}>
        <div className={styles.pageTitle}>RANKING GENERAL</div>

        <div className={styles.table}>
          <div className={styles.header}>
            <span>#</span>
            <span>JUGADOR</span>
            <span style={{textAlign:'center'}}>MEJOR RACHA</span>
            <span style={{textAlign:'right'}}>PUNTOS</span>
          </div>
          {lb.map((u, i) => (
            <div key={u.id} className={`${styles.row} ${u.id === user?.id ? styles.you : ''}`}>
              <span className={`${styles.rank} ${i===0?styles.g1:i===1?styles.g2:i===2?styles.g3:''}`}>
                {medals[i] || i + 1}
              </span>
              <div className={styles.userInfo}>
                {u.avatar_url
                  ? <img src={u.avatar_url} className={styles.avatar} alt="" />
                  : <div className={styles.avatarFb}>{(u.username||'?')[0]}</div>
                }
                <div>
                  <div className={styles.username}>{u.username || 'Usuario'}</div>
                  {u.id === user?.id && <div className={styles.youTag}>TU</div>}
                </div>
              </div>
              <span className={styles.streak}>{u.streak_exact_best || 0}</span>
              <span className={styles.pts}>{u.total_pts}</span>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
