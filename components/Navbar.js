'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { createClient } from '../lib/supabase'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { href: '/dashboard',   label: 'INICIO',       icon: '🏠' },
  { href: '/fixture',     label: 'FIXTURE',       icon: '📅' },
  { href: '/leaderboard', label: 'RANKING',       icon: '🏆' },
  { href: '/quiz',        label: 'QUIZ DEL DIA',  icon: '🧠' },
  { href: '/premios',     label: 'PREMIOS',       icon: '🎁' },
]

const UNIVERSE_APPS = [
  { id: 'cuponera', label: 'CUPONERA',    sub: 'Fidelidad & sellos',  icon: '☕', href: 'https://darkside-cafe.vercel.app/tarjeta' },
  { id: 'penca',    label: 'PENCA',       sub: 'Pronósticos 2026',    icon: '⚽', href: null },
  { id: 'duomity',  label: 'DUOMITY',     sub: 'Próximamente...',     icon: '🎮', href: null, disabled: true },
  { id: 'geek',     label: 'DUOMITY GEEK',sub: 'Quiz por universos',  icon: '🎯', href: 'https://darkside-duomity-geek.vercel.app/home' },
  { id: 'tienda',   label: 'TIENDA',      sub: 'darksidebros.com.uy', icon: '🛒', href: 'https://www.darksidebros.com.uy' },
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

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src="/Logo.png" alt="Darkside Bros" className={styles.logoImg} />
          <span className={styles.logoSub}>PENCA MUNDIAL 2026</span>
        </div>

        <div className={styles.right}>
          {user && <img src={user.user_metadata?.avatar_url || '/default-avatar.png'} alt="avatar" className={styles.avatar} />}
          <button
            className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menú"
          >
            <span className={`${styles.menuLine} ${menuOpen ? styles.lineTop : ''}`} />
            <span className={`${styles.menuLine} ${menuOpen ? styles.lineMid : ''}`} />
            <span className={`${styles.menuLine} ${menuOpen ? styles.lineBot : ''}`} />
          </button>
        </div>
      </nav>

      {/* Tab bar — solo desktop */}
      <div className={styles.tabBar}>
        {NAV_LINKS.map(l => (
          <Link key={l.href} href={l.href} className={`${styles.tab} ${pathname === l.href ? styles.active : ''}`}>
            <span className={styles.tabIcon}>{l.icon}</span>
            <span className={styles.tabLabel}>{l.label}</span>
          </Link>
        ))}
      </div>

      {/* Overlay */}
      {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)} />}

      {/* Side panel */}
      <div className={`${styles.panel} ${menuOpen ? styles.panelOpen : ''}`}>

        {/* Navegación */}
        <div className={styles.panelSection}>
          <div className={styles.panelSectionTitle}>NAVEGACIÓN</div>
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} className={`${styles.panelNavLink} ${pathname === l.href ? styles.panelNavActive : ''}`} onClick={() => setMenuOpen(false)}>
              <span className={styles.panelNavIcon}>{l.icon}</span>
              <span className={styles.panelNavLabel}>{l.label}</span>
              {pathname === l.href && <span className={styles.panelNavDot} />}
            </Link>
          ))}
        </div>

        <div className={styles.panelDivider} />

        {/* Universo */}
        <div className={styles.panelSection}>
          <div className={styles.panelSectionTitle}>🌌 DARKSIDE UNIVERSE</div>
          {UNIVERSE_APPS.map(app => {
            if (app.href) return (
              <a key={app.id} href={app.href} className={styles.panelApp} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
                <span className={styles.panelIcon}>{app.icon}</span>
                <div className={styles.panelAppInfo}>
                  <div className={styles.panelAppLabel}>{app.label}</div>
                  <div className={styles.panelAppSub}>{app.sub}</div>
                </div>
                <span className={styles.panelArrow}>→</span>
              </a>
            )
            if (app.disabled) return (
              <div key={app.id} className={styles.panelApp} style={{ opacity: 0.35 }}>
                <span className={styles.panelIcon}>{app.icon}</span>
                <div className={styles.panelAppInfo}>
                  <div className={styles.panelAppLabel}>{app.label}</div>
                  <div className={styles.panelAppSub}>{app.sub}</div>
                </div>
                <span style={{ fontSize: 9, color: '#4a5568', letterSpacing: 1 }}>PRONTO</span>
              </div>
            )
            return (
              <div key={app.id} className={`${styles.panelApp} ${styles.panelAppActive}`}>
                <span className={styles.panelIcon}>{app.icon}</span>
                <div className={styles.panelAppInfo}>
                  <div className={styles.panelAppLabel}>{app.label}</div>
                  <div className={styles.panelAppSub}>{app.sub}</div>
                </div>
                <span className={styles.panelHere}>AQUÍ</span>
              </div>
            )
          })}
        </div>

        <div className={styles.panelDivider} />

        {/* Footer info */}
        <div className={styles.panelFooter}>
          <div className={styles.panelContact}><span>📍</span> Soriano 1062, Montevideo</div>
          <div className={styles.panelContact}><span>📷</span> @darksidebroscafe</div>
        </div>

        {user && <button className={styles.panelLogout} onClick={handleLogout}>CERRAR SESIÓN</button>}
      </div>
    </>
  )
}
