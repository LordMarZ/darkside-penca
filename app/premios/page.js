'use client'
import { useEffect, useState } from 'react'
import { createClient } from '../../lib/supabase'
import { useRouter } from 'next/navigation'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import styles from './premios.module.css'

const PREMIOS = [
  {
    puesto: '🥇 1er Puesto',
    color: '#c9a227',
    items: [
      { sponsor: 'Darkside Bros Café', premio: 'Café gratis por 1 mes', logo: '☕' },
      // Agregá más premios acá
    ]
  },
  {
    puesto: '🥈 2do Puesto',
    color: '#c0c0c0',
    items: [
      { sponsor: 'Darkside Bros Café', premio: 'Vale consumición $500', logo: '🎫' },
    ]
  },
  {
    puesto: '🥉 3er Puesto',
    color: '#cd7f32',
    items: [
      { sponsor: 'Darkside Bros Café', premio: 'Vale consumición $300', logo: '🎫' },
    ]
  },
]

const SPONSORS = [
  // { nombre: 'Empresa XYZ', logo: '🏢', web: 'https://empresa.com', descripcion: 'Descripción breve' },
]

export default function PremiosPage() {
  const supabase = createClient()
  const router = useRouter()
  const [user, setUser] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) { router.push('/login'); return }
      setUser(session.user)
    })
  }, [])

  return (
    <>
      <Navbar user={user} />
      <main className={styles.main}>

        <div className={styles.header}>
          <div className={styles.title}>PREMIOS</div>
          <div className={styles.subtitle}>Los mejores pronosticadores del Mundial 2026 se llevan estos premios</div>
        </div>

        {/* Podio de premios */}
        <div className={styles.premiosGrid}>
          {PREMIOS.map((p, i) => (
            <div key={i} className={styles.premioCard} style={{ borderColor: p.color + '55' }}>
              <div className={styles.premioTitle} style={{ color: p.color }}>{p.puesto}</div>
              {p.items.map((item, j) => (
                <div key={j} className={styles.premioItem}>
                  <span className={styles.premioIcon}>{item.logo}</span>
                  <div>
                    <div className={styles.premioNombre}>{item.premio}</div>
                    <div className={styles.premioSponsor}>por {item.sponsor}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Sponsors */}
        {SPONSORS.length > 0 && (
          <>
            <div className={styles.sectionTitle}>SPONSORS</div>
            <div className={styles.sponsorsGrid}>
              {SPONSORS.map((s, i) => (
                <a key={i} href={s.web} target="_blank" rel="noopener noreferrer" className={styles.sponsorCard}>
                  <div className={styles.sponsorLogo}>{s.logo}</div>
                  <div className={styles.sponsorNombre}>{s.nombre}</div>
                  <div className={styles.sponsorDesc}>{s.descripcion}</div>
                </a>
              ))}
            </div>
          </>
        )}

        <div className={styles.disclaimer}>
          Los premios se entregan al finalizar la fase eliminatoria del Mundial 2026.
          Para reclamar el premio, el ganador deberá presentarse en Darkside Bros Café
          con la confirmación de su posición en el ranking.
        </div>

      </main>
      <Footer />
    </>
  )
}
