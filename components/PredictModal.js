'use client'
import { useState, useEffect } from 'react'
import styles from './PredictModal.module.css'

export default function PredictModal({ match, existing, onSave, onClose, onNext, nextMatch }) {
  const [h, setH] = useState('')
  const [a, setA] = useState('')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  // Resetear al cambiar de partido
  useEffect(() => {
    setH(existing?.score_home !== undefined ? String(existing.score_home) : '')
    setA(existing?.score_away !== undefined ? String(existing.score_away) : '')
    setSaved(false)
  }, [match?.id])

  if (!match) return null

  function handleChange(val, setter) {
    const clean = val.replace(/\D/g, '').slice(0, 2)
    setter(clean)
  }

  async function handleSave() {
    setSaving(true)
    await onSave(match.id, parseInt(h) || 0, parseInt(a) || 0)
    setSaving(false)
    setSaved(true)
  }

  function handleNext() {
    if (onNext && nextMatch) {
      onNext(nextMatch)
    }
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

        <div className={styles.matchMeta}>
          {match.date.slice(5).replace('-', '/')} · {match.time}hs · GRP {match.group}
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

        {saved ? (
          <div className={styles.savedState}>
            <div className={styles.savedMsg}>✓ PRONOSTICO GUARDADO</div>
            {nextMatch && onNext ? (
              <button className={styles.nextBtn} onClick={handleNext}>
                PRÓXIMO PARTIDO →
                <div className={styles.nextMatchPreview}>
                  {nextMatch.homeF} {nextMatch.home} vs {nextMatch.away} {nextMatch.awayF}
                </div>
              </button>
            ) : (
              <button className={styles.closeBtn} onClick={onClose}>CERRAR</button>
            )}
          </div>
        ) : (
          <button className={styles.saveBtn} onClick={handleSave} disabled={saving}>
            {saving ? 'GUARDANDO...' : '⚽ GUARDAR PRONOSTICO'}
          </button>
        )}
      </div>
    </div>
  )
}
