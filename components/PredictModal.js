'use client'
import { useState } from 'react'
import styles from './PredictModal.module.css'

export default function PredictModal({ match, existing, onSave, onClose }) {
  const [h, setH] = useState(existing?.score_home ?? '')
  const [a, setA] = useState(existing?.score_away ?? '')
  const [saving, setSaving] = useState(false)

  if (!match) return null

  function handleChange(val, setter) {
    // Solo números, máximo 2 dígitos
    const clean = val.replace(/\D/g, '').slice(0, 2)
    setter(clean)
  }

  async function handleSave() {
    setSaving(true)
    await onSave(match.id, parseInt(h) || 0, parseInt(a) || 0)
    setSaving(false)
    onClose()
  }

  return (
    <div className={styles.overlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>✕</button>
        <div className={styles.title}>TU PRONOSTICO</div>

        <div className={styles.matchInfo}>
          <div className={styles.team}>
            <span className={styles.flag}>{match.homeF}</span>
            <span className={styles.teamName}>{match.home}</span>
          </div>
          <span className={styles.vsText}>VS</span>
          <div className={`${styles.team} ${styles.right}`}>
            <span className={styles.flag}>{match.awayF}</span>
            <span className={styles.teamName}>{match.away}</span>
          </div>
        </div>

        <div className={styles.hint}>INGRESÁ EL MARCADOR QUE PREDECÍS</div>

        <div className={styles.scoreRow}>
          <input
            className={styles.scoreInput}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={2}
            placeholder="0"
            value={h}
            onChange={e => handleChange(e.target.value, setH)}
          />
          <span className={styles.dash}>-</span>
          <input
            className={styles.scoreInput}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={2}
            placeholder="0"
            value={a}
            onChange={e => handleChange(e.target.value, setA)}
          />
        </div>

        <div className={styles.badges}>
          <span className={styles.badge}>Exacto <strong>5pts</strong></span>
          <span className={styles.badge}>Dif.goles <strong>3pts</strong></span>
          <span className={styles.badge}>Ganador <strong>1pt</strong></span>
        </div>

        <button className={styles.saveBtn} onClick={handleSave} disabled={saving}>
          {saving ? 'GUARDANDO...' : '⚽ GUARDAR PRONOSTICO'}
        </button>
      </div>
    </div>
  )
}
