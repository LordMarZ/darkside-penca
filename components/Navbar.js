'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '../lib/supabase'
import MultiverseBar from './MultiverseBar'
import styles from './Navbar.module.css'

export default function Navbar({ user }) {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const links = [
    { href: '/dashboard', label: 'INICIO', icon: '🏠' },
    { href: '/fixture', label: 'FIXTURE', icon: '📅' },
    { href: '/leaderboard', label: 'RANKING', icon: '🏆' },
    { href: '/quiz', label: 'QUIZ', icon: '🧠' },
  ]

  return (
    <>
      <MultiverseBar />
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>⚽</div>
          <div>
            <div className={styles.logoText}>DARKSIDE BROS</div>
            <span className={styles.logoSub}>PENCA MUNDIAL 2026</span>
          </div>
        </div>

        <div className={styles.tabs}>
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.tab} ${pathname === l.href ? styles.active : ''}`}
            >
              <span className={styles.tabIcon}>{l.icon}</span>
              {l.label}
            </Link>
          ))}
        </div>

        {user && (
          <div className={styles.userArea}>
            <img
              src={user.user_metadata?.avatar_url || '/default-avatar.png'}
              alt="avatar"
              className={styles.avatar}
            />
            <button className={styles.logoutBtn} onClick={handleLogout}>
              SALIR
            </button>
          </div>
        )}
      </nav>
    </>
  )
}
