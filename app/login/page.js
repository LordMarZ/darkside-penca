'use client'
import { createClient } from '../../lib/supabase'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import styles from './login.module.css'

export default function LoginPage() {
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) router.push('/dashboard')
    })
  }, [])

  async function loginWithGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/dashboard` }
    })
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.logoStage}>
          <img src="/logo-bros2.png" alt="Darkside Bros" className={`${styles.logoImg} ${styles.logoBase}`} />
          <img src="/logo-bros.png" alt="" aria-hidden="true" className={`${styles.logoImg} ${styles.logoGlitch}`} />
        </div>
        <span className={styles.logoSub}>PENCA MUNDIAL 2026</span>
        <h1 className={styles.title}>UNITE A LA OSCURIDAD</h1>
        <p className={styles.desc}>
          Predeci los resultados del Mundial USA · MX · CA 2026
          y competi con toda la comunidad Darkside
        </p>
        <button className={styles.googleBtn} onClick={loginWithGoogle}>
          <svg width="18" height="18" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.6 20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.7-.4-4z"/>
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6 29.3 4 24 4c-7.7 0-14.4 4.3-17.7 10.7z"/>
            <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
            <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C41 34 44 29 44 24c0-1.3-.1-2.7-.4-4z"/>
          </svg>
          Continuar con Google
        </button>
      </div>
    </div>
  )
}
