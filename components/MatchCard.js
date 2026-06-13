'use client'
import Flag from './Flag'
import styles from './MatchCard.module.css'

function matchStarted(match) {
  return new Date() >= new Date(`${match.date}T${match.time}:00-03:00`)
}

export default function MatchCard({ match, prediction, onPredict, showDate = true }) {
  const started = matchStarted(match)
  const pred = prediction

  function handleClick() {
    if (started) return
    if (onPredict) onPredict(match)
  }

  // DD/MM en vez de MM/DD
  const [year, month, day] = match.date.split('-')

  return (
    <div
      className={`${styles.card} ${pred ? styles.predicted : ''} ${started ? styles.started : ''}`}
      onClick={handleClick}
    >
      {pred && <span className={styles.checkBadge}>✓</span>}
      {started && !pred && <span className={styles.lockedBadge}>🔒</span>}
      <div className={styles.inner}>
        <div className={styles.team}>
          <Flag country={match.home} size={28} />
          <span className={styles.name}>{match.home}</span>
        </div>
        <div className={styles.center}>
          {match.result ? (
            <div className={styles.result}>{match.result.score_home} - {match.result.score_away}</div>
          ) : (
            <div className={styles.vs}>{started ? '⏱' : 'VS'}</div>
          )}
          {showDate && <div className={styles.meta}>{day}/{month} · {match.time}</div>}
          {pred && <div className={styles.predLabel}>{pred.score_home}-{pred.score_away}</div>}
          {pred?.pts_earned > 0 && <div className={styles.pts}>+{pred.pts_earned}pts</div>}
        </div>
        <div className={`${styles.team} ${styles.right}`}>
          <Flag country={match.away} size={28} />
          <span className={styles.name}>{match.away}</span>
        </div>
      </div>
      {showDate && <div className={styles.venue}>{match.venue}</div>}
    </div>
  )
}