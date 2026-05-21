'use client'
import styles from './MultiverseBar.module.css'

// Las URLs de tus apps del Multiverse Darkside
// Cambiá estas URLs por las reales de cada app en producción
const APPS = [
  {
    id: 'penca',
    label: 'PENCA',
    icon: '⚽',
    sub: 'Mundial 2026',
    href: null, // null = app actual
    color: '#cc1111',
  },
  {
    id: 'cuponera',
    label: 'CUPONERA',
    icon: '☕',
    sub: 'Café Darkside',
    href: process.env.NEXT_PUBLIC_CUPONERA_URL || 'https://cuponera.darkside.com',
    color: '#c9a227',
  },
  {
    id: 'duomity',
    label: 'DUOMITY',
    icon: '🎮',
    sub: 'Quiz Geek',
    href: process.env.NEXT_PUBLIC_DUOMITY_URL || 'https://duomity.darkside.com',
    color: '#4a90d9',
  },
]

export default function MultiverseBar() {
  return (
    <div className={styles.bar}>
      <span className={styles.label}>DARKSIDE UNIVERSE</span>
      <div className={styles.apps}>
        {APPS.map(app => (
          app.href ? (
            <a
              key={app.id}
              href={app.href}
              className={styles.app}
              title={app.sub}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.appIcon}>{app.icon}</span>
              <span className={styles.appLabel}>{app.label}</span>
            </a>
          ) : (
            <div key={app.id} className={`${styles.app} ${styles.active}`} title={app.sub}>
              <span className={styles.appIcon}>{app.icon}</span>
              <span className={styles.appLabel}>{app.label}</span>
            </div>
          )
        ))}
      </div>
    </div>
  )
}
