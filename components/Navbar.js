'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { createClient } from '../lib/supabase'
import styles from './Navbar.module.css'

const UNIVERSE_APPS = [
  { id: 'penca', label: 'PENCA MUNDIAL', sub: 'Pronósticos 2026', icon: '⚽', href: null },
  { id: 'cuponera', label: 'CUPONERA', sub: 'Café Darkside', icon: '☕', href: 'https://darkside-cafe.vercel.app/tarjeta' },
  { id: 'duomity', label: 'DUOMITY GEEK', sub: 'Quiz de universos', icon: '🎮', href: process.env.NEXT_PUBLIC_DUOMITY_URL || '#' },
]

export default function Navbar({ user }) {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()
  const [menuOpen, setMenuOpen] = useState(false)

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const links = [
    { href: '/dashboard', label: 'INICIO', icon: '🏠' },
    { href: '/fixture', label: 'FIXTURE', icon: '📅' },
    { href: '/leaderboard', label: 'RANKING', icon: '🏆' },
    { href: '/quiz', label: 'QUIZ DEL DIA', icon: '🧠' },
  ]

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
        <img src="/Logo.png" alt="Darkside Bros" className={styles.logoImg} />
        <span className={styles.logoSub}>PENCA MUNDIAL 2026</span>
      </div>

        <div className={styles.tabs}>
          {links.map(l => (
            <Link key={l.href} href={l.href} className={`${styles.tab} ${pathname === l.href ? styles.active : ''}`}>
              <span className={styles.tabIcon}>{l.icon}</span>
              {l.label}
            </Link>
          ))}
        </div>

        <div className={styles.right}>
          {user && <img src={user.user_metadata?.avatar_url || '/default-avatar.png'} alt="avatar" className={styles.avatar} />}
          <button className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ''}`} onClick={() => setMenuOpen(v => !v)} title="Darkside Universe">
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <>
          <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
          <div className={styles.dropdown}>
            <div className={styles.dropTitle}>🌌 DARKSIDE UNIVERSE</div>
            <div className={styles.dropApps}>
              {UNIVERSE_APPS.map(app => (
                app.href ? (
                  <a key={app.id} href={app.href} className={styles.dropApp} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
                    <span className={styles.dropIcon}>{app.icon}</span>
                    <div>
                      <div className={styles.dropLabel}>{app.label}</div>
                      <div className={styles.dropSub}>{app.sub}</div>
                    </div>
                    <span className={styles.dropArrow}>→</span>
                  </a>
                ) : (
                  <div key={app.id} className={`${styles.dropApp} ${styles.dropActive}`}>
                    <span className={styles.dropIcon}>{app.icon}</span>
                    <div>
                      <div className={styles.dropLabel}>{app.label}</div>
                      <div className={styles.dropSub}>{app.sub}</div>
                    </div>
                    <span className={styles.dropCurrent}>AQUÍ</span>
                  </div>
                )
              ))}
            </div>
            {user && <button className={styles.dropLogout} onClick={handleLogout}>CERRAR SESIÓN</button>}
          </div>
        </>
      )}
    </>
  )
}