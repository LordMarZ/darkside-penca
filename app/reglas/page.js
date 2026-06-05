'use client'
import { useEffect, useState } from 'react'
import { createClient } from '../../lib/supabase'
import { useRouter } from 'next/navigation'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import styles from './reglas.module.css'

const REGLAS = [
  {
    icon: '🎯',
    title: 'MARCADOR EXACTO',
    pts: '+5 puntos',
    desc: 'Acertás el resultado exacto del partido. Ej: predeciste 2-1 y terminó 2-1.',
    color: '#ffcf40',
  },
  {
    icon: '📊',
    title: 'DIFERENCIA EXACTA',
    pts: '+3 puntos',
    desc: 'Acertás quién ganó y por cuántos goles de diferencia. Ej: predeciste 2-0 y terminó 3-1 (ambos ganaron por 2).',
    color: '#c0c0c0',
  },
  {
    icon: '✅',
    title: 'SOLO EL GANADOR',
    pts: '+1 punto',
    desc: 'Acertás quién gana o que termina empatado, pero no la diferencia.',
    color: '#cd7f32',
  },
  {
    icon: '⏰',
    title: 'PRONOSTICO ANTICIPADO',
    pts: '+2 puntos extra',
    desc: 'Si cargás tu pronóstico con más de 24hs de anticipación y acertás algo, ganás 2 puntos extra.',
    color: '#4a90d9',
  },
  {
    icon: '🔥',
    title: 'RACHA DE EXACTOS',
    pts: '+3, +6, +9... puntos extra',
    desc: 'Si acertás marcadores exactos consecutivos, ganás puntos extra acumulativos por cada uno de la racha.',
    color: '#cc1111',
  },
  {
    icon: '🏆',
    title: 'CAMPEÓN DEL MUNDIAL',
    pts: '+10 puntos',
    desc: 'Si elegís el campeón correcto antes que empiece el torneo, ganás 10 puntos al final.',
    color: '#ffcf40',
  },
  {
    icon: '⚽',
    title: 'GOLEADOR DEL TORNEO',
    pts: '+5 puntos',
    desc: 'Si elegís el goleador correcto antes que empiece el torneo, ganás 5 puntos al final.',
    color: '#44cc44',
  },
]

const FAQ = [
  { q: '¿Hasta cuándo puedo cargar mi pronóstico?', a: 'Hasta el minuto que empieza el partido. Una vez que arranca, no podés modificarlo.' },
  { q: '¿Puedo cambiar mi pronóstico?', a: 'Sí, podés editarlo tantas veces como quieras antes de que empiece el partido.' },
  { q: '¿Cómo se desempata el ranking?', a: 'En caso de empate en puntos, gana el que tenga mayor racha de exactos y luego mayor cantidad de pronósticos cargados.' },
  { q: '¿Cuándo se acreditan los puntos?', a: 'Los puntos se acreditan automáticamente después de que el admin carga el resultado oficial de cada partido.' },
  { q: '¿El quiz suma puntos al ranking?', a: 'No, el quiz es una actividad separada. Es solo por diversión y no afecta el ranking de la penca.' },
]

export default function ReglasPage() {
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
          <div className={styles.title}>REGLAS</div>
          <div className={styles.subtitle}>Cómo ganar puntos en la Penca Mundial 2026</div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>SISTEMA DE PUNTOS</div>
          <div className={styles.reglasList}>
            {REGLAS.map((r, i) => (
              <div key={i} className={styles.reglaCard} style={{ borderLeftColor: r.color }}>
                <div className={styles.reglaLeft}>
                  <span className={styles.reglaIcon}>{r.icon}</span>
                  <div>
                    <div className={styles.reglaTitle}>{r.title}</div>
                    <div className={styles.reglaDesc}>{r.desc}</div>
                  </div>
                </div>
                <div className={styles.reglaPts} style={{ color: r.color }}>{r.pts}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>PREGUNTAS FRECUENTES</div>
          <div className={styles.faqList}>
            {FAQ.map((f, i) => (
              <div key={i} className={styles.faqCard}>
                <div className={styles.faqQ}>❓ {f.q}</div>
                <div className={styles.faqA}>{f.a}</div>
              </div>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
