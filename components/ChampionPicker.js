'use client'
import { useState } from 'react'
import styles from './ChampionPicker.module.css'

// Fase de grupos del Mundial 2026 termina el 27/06 — luego de esa fecha
// no se puede cambiar el pronóstico de campeón/goleador
const GROUP_STAGE_END = '2026-06-27T23:59:59-03:00'

const TEAMS = [
  { name: 'Argentina', flag: '🇦🇷' },
  { name: 'Brasil', flag: '🇧🇷' },
  { name: 'Francia', flag: '🇫🇷' },
  { name: 'España', flag: '🇪🇸' },
  { name: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
  { name: 'Portugal', flag: '🇵🇹' },
  { name: 'Alemania', flag: '🇩🇪' },
  { name: 'Uruguay', flag: '🇺🇾' },
  { name: 'Países Bajos', flag: '🇳🇱' },
  { name: 'Bélgica', flag: '🇧🇪' },
  { name: 'EEUU', flag: '🇺🇸' },
  { name: 'México', flag: '🇲🇽' },
  { name: 'Colombia', flag: '🇨🇴' },
  { name: 'Turquía', flag: '🇹🇷' },
  { name: 'Japón', flag: '🇯🇵' },
  { name: 'Marruecos', flag: '🇲🇦' },
]

const SCORERS = [
  'Lionel Messi', 'Kylian Mbappé', 'Erling Haaland', 'Vinicius Jr.',
  'Harry Kane', 'Cristiano Ronaldo', 'Lautaro Martínez', 'Rodrigo',
  'Bukayo Saka', 'Pedri', 'Raphinha', 'Antoine Griezmann',
  'Darwin Núñez', 'Dusan Vlahovic', 'Takefusa Kubo', 'Ferran Torres',
]

export default function ChampionPicker({ current, onSave, onClose }) {
  const [champion, setChampion] = useState(current?.champion_pick || '')
  const [scorer, setScorer] = useState(current?.top_scorer_pick || '')
  const [saving, setSaving] = useState(false)

  const locked = new Date() >= new Date(GROUP_STAGE_END)

  async function handleSave() {
    if (locked) return
    if (!champion) { alert('Elegí un campeón'); return }
    setSaving(true)
    await onSave(champion, scorer)
    setSaving(false)
  }

  return (
    <div className={styles.overlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>✕</button>

        <div className={styles.title}>PRONÓSTICOS PRE-TORNEO</div>
        <div className={styles.sub}>
          {locked
            ? '🔒 La fase de grupos terminó — ya no se pueden modificar'
            : 'Solo podés cambiarlos antes que termine la fase de grupos'}
        </div>

        <div className={styles.section}>
          <div className={styles.sectionLabel}>
            🏆 CAMPEÓN DEL MUNDIAL <span className={styles.pts}>+10 pts si acertás</span>
          </div>
          <div className={styles.teamGrid}>
            {TEAMS.map(t => (
              <button
                key={t.name}
                className={`${styles.teamBtn} ${champion === t.name ? styles.selected : ''}`}
                onClick={() => !locked && setChampion(t.name)}
                disabled={locked}
              >
                <span className={styles.teamFlag}>{t.flag}</span>
                <span className={styles.teamName}>{t.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionLabel}>
            ⚽ GOLEADOR DEL TORNEO <span className={styles.pts}>+5 pts si acertás</span>
          </div>
          <select
            className={styles.scorerSelect}
            value={scorer}
            onChange={e => setScorer(e.target.value)}
            disabled={locked}
          >
            <option value="">— Elegí un jugador —</option>
            {SCORERS.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {!locked && (
          <button className={styles.saveBtn} onClick={handleSave} disabled={saving || !champion}>
            {saving ? 'GUARDANDO...' : '⚽ CONFIRMAR PRONÓSTICOS'}
          </button>
        )}
      </div>
    </div>
  )
}