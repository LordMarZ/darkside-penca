import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        <div className={styles.brand}>
          <img src="/logo.png" alt="Darkside Bros" className={styles.footerLogo} />
          <div className={styles.brandSub}>Café · Coleccionables · Comunidad</div>
    </div>   
    
        <div className={styles.col}>
          <div className={styles.colTitle}>UBICACIÓN</div>
          <a href="https://maps.google.com/?q=Soriano+1062+Montevideo" target="_blank" rel="noopener noreferrer" className={styles.link}>
            📍 Soriano 1062 · Montevideo
          </a>
          <a href="https://wa.me/59892211177" target="_blank" rel="noopener noreferrer" className={styles.link}>
            💬 092 211 177
          </a>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>REDES</div>
          <a href="https://www.instagram.com/darksidebros/" target="_blank" rel="noopener noreferrer" className={styles.link}>
            📸 @darksidebros
          </a>
          <a href="https://www.instagram.com/darksidebroscafe/" target="_blank" rel="noopener noreferrer" className={styles.link}>
            📸 @darksidebroscafe
          </a>
        </div>

      </div>
      <div className={styles.copy}>© 2026 Darkside Bros · Todos los derechos reservados</div>
    </footer>
  )
}