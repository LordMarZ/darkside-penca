'use client'
import styles from './MatchCard.module.css'

export default function MatchCard({ match, prediction, onPredict, showDate = true }) {
  const isOpen = !match.result
  const pred = prediction

  return (
    <div className={`${styles.card} ${pred ? styles.predicted : ''}`} onClick={() => isOpen && onPredict && onPredict(match)}>
      {pred && <span className={styles.checkBadge}>✓</span>}
      <div className={styles.inner}>
        <div className={styles.team}>
          <span className={styles.flag}>{match.homeF}</span>
          <span className={styles.name}>{match.home}</span>
        </div>
        <div className={styles.center}>
          {match.result ? (
            <div className={styles.result}>{match.result.score_home} - {match.result.score_away}</div>
          ) : (
            <div className={styles.vs}>VS</div>
          )}
          {showDate && <div className={styles.meta}>{match.date.slice(5)} · {match.time}</div>}
          {pred && <div className={styles.predLabel}>{pred.score_home}-{pred.score_away}</div>}
          {pred?.pts_earned > 0 && <div className={styles.pts}>+{pred.pts_earned}pts</div>}
        </div>
        <div className={`${styles.team} ${styles.right}`}>
          <span className={styles.flag}>{match.awayF}</span>
          <span className={styles.name}>{match.away}</span>
        </div>
      </div>
      {showDate && <div className={styles.venue}>{match.venue}</div>}
    </div>
  )
}
