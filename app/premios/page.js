'use client'
import { useEffect, useState } from 'react'
import { createClient } from '../../lib/supabase'
import { useRouter } from 'next/navigation'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import styles from './premios.module.css'

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
        <div className={styles.comingSoon}>
          <div className={styles.icon}>🏆</div>
          <div className={styles.title}>PREMIOS</div>
          <div className={styles.badge}>PRÓXIMAMENTE</div>
          <div className={styles.desc}>
            Estamos cerrando los premios con nuestros sponsors.
            Volvé pronto para ver qué se lleva el campeón de la Penca.
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
