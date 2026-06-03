import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logoWrap}>
          <img src="/Logo.png" alt="Darkside Bros" className={styles.logo} />
          <div className={styles.tagline}>DARKSIDE BROS CAFÉ · MONTEVIDEO</div>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <div className={styles.colTitle}>CONTACTO</div>
            <a href="https://maps.google.com/?q=Soriano+1062+Montevideo" target="_blank" rel="noopener noreferrer" className={styles.link}>
              <span>📍</span> Soriano 1062, Mvd
            </a>
            <a href="https://wa.me/59892211177" target="_blank" rel="noopener noreferrer" className={styles.link}>
              <span>📱</span> +598 092 211 177
            </a>
            <div className={styles.link} style={{ cursor:'default', color:'#4a5568' }}>
              <span>🕐</span> Lun–Vie 9–20h · Sáb 10–19h
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>SEGUINOS</div>
            <a href="https://www.instagram.com/darksidebros/" target="_blank" rel="noopener noreferrer" className={styles.link}>
              <span>📷</span> @darksidebros
            </a>
            <a href="https://www.instagram.com/darksidebroscafe/" target="_blank" rel="noopener noreferrer" className={styles.link}>
              <span>☕</span> @darksidebroscafe
            </a>
            <a href="https://www.darksidebros.com.uy" target="_blank" rel="noopener noreferrer" className={styles.link}>
              <span>🌐</span> darksidebros.com.uy
            </a>
          </div>
        </div>
      </div>

      <div className={styles.copy}>
        © 2026 Darkside Bros Café — Montevideo, Uruguay
      </div>
    </footer>
  )
}
