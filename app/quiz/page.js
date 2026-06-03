'use client'
import { useEffect, useState, useRef, useCallback } from 'react'
import { createClient } from '../../lib/supabase'
import { useRouter } from 'next/navigation'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { QUIZ_DAYS, getDayQuiz, calcQuizPoints } from '../../data/quiz'
import styles from './quiz.module.css'

const TIMER_SECONDS = 20

export default function QuizPage() {
  const supabase = createClient()
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Estado del día
  const [currentDay, setCurrentDay] = useState(null)   // día a jugar
  const [completedDays, setCompletedDays] = useState([]) // días ya jugados

  // Estado del quiz en curso
  const [quizActive, setQuizActive] = useState(false)
  const [questionIdx, setQuestionIdx] = useState(0)
  const [answers, setAnswers] = useState({})            // { questionId: optIdx }
  const [selected, setSelected] = useState(null)        // opción seleccionada en esta pregunta
  const [revealed, setRevealed] = useState(false)       // mostrar correcto/incorrecto
  const [timer, setTimer] = useState(TIMER_SECONDS)
  const [timerRunning, setTimerRunning] = useState(false)
  const timerRef = useRef(null)

  // Estado de resultado
  const [finished, setFinished] = useState(false)
  const [result, setResult] = useState(null)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    async function load() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { router.push('/login'); return }
      setUser(session.user)

      // Cargar días completados
      const { data: attempts } = await supabase
        .from('quiz_attempts')
        .select('quiz_day')
        .eq('user_id', session.user.id)
        .order('quiz_day', { ascending: true })

      const done = attempts?.map(a => a.quiz_day) || []
      setCompletedDays(done)

      // Determinar qué día jugar: el siguiente al último completado
      const nextDay = done.length === 0 ? 1 : done[done.length - 1] + 1
      const maxDay = QUIZ_DAYS.length
      setCurrentDay(Math.min(nextDay, maxDay))
      setLoading(false)
    }
    load()
  }, [])

  // Timer
  const startTimer = useCallback(() => {
    setTimer(TIMER_SECONDS)
    setTimerRunning(true)
  }, [])

  const stopTimer = useCallback(() => {
    setTimerRunning(false)
    if (timerRef.current) clearInterval(timerRef.current)
  }, [])

  useEffect(() => {
    if (!timerRunning) return
    timerRef.current = setInterval(() => {
      setTimer(t => {
        if (t <= 1) {
          clearInterval(timerRef.current)
          setTimerRunning(false)
          handleTimeout()
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(timerRef.current)
  }, [timerRunning, questionIdx])

  function handleTimeout() {
    // Tiempo agotado — marcar como sin respuesta y revelar
    setRevealed(true)
    setTimeout(() => nextQuestion(), 1500)
  }

  function startQuiz() {
    setQuizActive(true)
    setQuestionIdx(0)
    setAnswers({})
    setSelected(null)
    setRevealed(false)
    setFinished(false)
    setResult(null)
    startTimer()
  }

  function selectAnswer(optIdx) {
    if (revealed) return
    stopTimer()
    setSelected(optIdx)
    const dayData = getDayQuiz(currentDay)
    const question = dayData.questions[questionIdx]
    const newAnswers = { ...answers, [question.id]: optIdx }
    setAnswers(newAnswers)
    setRevealed(true)
    setTimeout(() => nextQuestion(newAnswers), 1500)
  }

  function nextQuestion(currentAnswers) {
    const dayData = getDayQuiz(currentDay)
    const nextIdx = questionIdx + 1
    if (nextIdx >= dayData.questions.length) {
      // Terminamos
      finishQuiz(currentAnswers || answers)
    } else {
      setQuestionIdx(nextIdx)
      setSelected(null)
      setRevealed(false)
      startTimer()
    }
  }

  async function finishQuiz(finalAnswers) {
    stopTimer()
    const dayData = getDayQuiz(currentDay)
    const correct = dayData.questions.filter(q => finalAnswers[q.id] === q.a).length
    const pts = calcQuizPoints(correct)
    setFinished(true)
    setResult({ correct, pts, total: dayData.questions.length })
    setSaving(true)
    try {
      await fetch('/api/quiz-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quiz_day: currentDay, correct, total: dayData.questions.length, answers: finalAnswers }),
      })
    } catch {}
    setSaving(false)
  }

  if (loading) return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', minHeight:'100vh', color:'var(--muted)', letterSpacing:2 }}>CARGANDO...</div>
  )

  const dayData = getDayQuiz(currentDay)
  const question = dayData?.questions[questionIdx]

  // ── PANTALLA: SELECCIONAR DÍA ─────────────────────────────
  if (!quizActive && !finished) {
    return (
      <>
        <Navbar user={user} />
        <main className={styles.main}>
          <div className={styles.header}>
            <div className={styles.title}>QUIZ DEL DIA</div>
            <div className={styles.subtitle}>10 preguntas · 20 seg por pregunta · 1 intento por día</div>
          </div>

          <div className={styles.scoreLegend}>
            <div className={styles.scorePill}>10-9 correctas = <strong>+3 pts</strong></div>
            <div className={styles.scorePill}>8 correctas = <strong>+2 pts</strong></div>
            <div className={styles.scorePill}>7 correctas = <strong>+1 pt</strong></div>
          </div>

          {/* Día actual a jugar */}
          <div className={styles.dayCard}>
            <div className={styles.dayBadge}>SIGUIENTE</div>
            <div className={styles.dayNum}>DÍA {currentDay}</div>
            <div className={styles.dayTheme}>{dayData?.theme}</div>
            <button className={styles.startBtn} onClick={startQuiz}>
              ⚽ JUGAR AHORA
            </button>
          </div>

          {/* Historial */}
          {completedDays.length > 0 && (
            <div className={styles.histSection}>
              <div className={styles.histTitle}>DÍAS COMPLETADOS</div>
              <div className={styles.histGrid}>
                {completedDays.map(d => (
                  <div key={d} className={styles.histDay}>
                    <div className={styles.histDayNum}>{d}</div>
                    <div className={styles.histCheck}>✓</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginBottom: 32 }} />
        </main>
        <Footer />
      </>
    )
  }

  // ── PANTALLA: RESULTADO FINAL ─────────────────────────────
  if (finished && result) {
    const percentage = Math.round((result.correct / result.total) * 100)
    return (
      <>
        <Navbar user={user} />
        <main className={styles.main}>
          <div className={styles.header}>
            <div className={styles.title}>DÍA {currentDay} — RESULTADO</div>
            <div className={styles.dayThemeSmall}>{dayData?.theme}</div>
          </div>

          <div className={`${styles.resultBox} ${result.pts > 0 ? styles.resultWin : styles.resultMiss}`}>
            <div className={styles.resultScore}>{result.correct}/{result.total}</div>
            <div className={styles.resultMsg}>
              {result.correct >= 9 ? 'MAESTRO MUNDIAL 🏆' : result.correct >= 8 ? 'GRAN CONOCEDOR ⭐' : result.correct >= 7 ? 'BUEN NIVEL 👍' : 'SEGUÍ INTENTANDO 💪'}
            </div>
            {result.pts > 0
              ? <div className={styles.resultPts}>+{result.pts} PUNTOS GANADOS</div>
              : <div className={styles.resultPts} style={{ color: 'var(--muted)' }}>Sin puntos esta vez</div>
            }
          </div>

          {currentDay < QUIZ_DAYS.length ? (
            <div className={styles.nextDayTeaser}>
              <div className={styles.nextDayLabel}>PRÓXIMO DÍA</div>
              <div className={styles.nextDayTheme}>{QUIZ_DAYS.find(d => d.day === currentDay + 1)?.theme}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>Disponible cuando vuelvas</div>
            </div>
          ) : (
            <div className={styles.nextDayTeaser}>
              <div className={styles.nextDayLabel}>🎉 ¡COMPLETASTE LOS 30 DÍAS!</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4 }}>Sos un verdadero Maestro Mundial</div>
            </div>
          )}

          <button className={styles.startBtn} style={{ marginTop: 24 }} onClick={() => router.push('/dashboard')}>
            VOLVER AL INICIO
          </button>
        </main>
        <Footer />
      </>
    )
  }

  // ── PANTALLA: QUIZ EN CURSO ───────────────────────────────
  const timerPct = (timer / TIMER_SECONDS) * 100
  const timerColor = timer > 10 ? 'var(--green)' : timer > 5 ? '#f0a500' : 'var(--red)'

  return (
    <>
      <Navbar user={user} />
      <main className={styles.main}>

        {/* Header del quiz */}
        <div className={styles.quizHeader}>
          <div className={styles.quizDay}>DÍA {currentDay} — {dayData?.theme}</div>
          <div className={styles.quizProgress}>{questionIdx + 1} / {dayData?.questions.length}</div>
        </div>

        {/* Barra de progreso de preguntas */}
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${((questionIdx) / dayData.questions.length) * 100}%` }} />
        </div>

        {/* Timer */}
        <div className={styles.timerWrap}>
          <div className={styles.timerBar}>
            <div className={styles.timerFill} style={{ width: `${timerPct}%`, background: timerColor, transition: 'width 1s linear, background 0.5s' }} />
          </div>
          <div className={styles.timerNum} style={{ color: timerColor }}>{timer}s</div>
        </div>

        {/* Pregunta */}
        <div className={styles.qCard}>
          <div className={styles.qText}>{question?.q}</div>
          <div className={styles.opts}>
            {question?.opts.map((opt, optIdx) => {
              let cls = styles.opt
              if (revealed) {
                if (optIdx === question.a) cls += ' ' + styles.optCorrect
                else if (selected === optIdx && optIdx !== question.a) cls += ' ' + styles.optWrong
              } else if (selected === optIdx) {
                cls += ' ' + styles.optSelected
              }
              return (
                <button key={optIdx} className={cls} onClick={() => selectAnswer(optIdx)} disabled={revealed}>
                  <span className={styles.optLetter}>{['A','B','C','D'][optIdx]}</span>
                  {opt}
                </button>
              )
            })}
          </div>
        </div>

        {revealed && !finished && (
          <div className={styles.revealMsg} style={{ color: selected === question?.a ? 'var(--green2)' : 'var(--red2)' }}>
            {selected === undefined || selected === null
              ? '⏰ Tiempo agotado'
              : selected === question?.a ? '✓ ¡Correcto!' : `✗ Era: ${question?.opts[question?.a]}`
            }
          </div>
        )}
      </main>
    </>
  )
}
