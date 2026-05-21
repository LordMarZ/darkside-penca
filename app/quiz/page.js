'use client'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'
import { createClient } from '../../lib/supabase'
import { useRouter } from 'next/navigation'
import Navbar from '../../components/Navbar'
import { getDailyQuiz } from '../../data/quiz'
import { calcQuizPoints } from '../../lib/points'
import styles from './quiz.module.css'

export default function QuizPage() {
  const supabase = createClient()
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [result, setResult] = useState(null)
  const [existingAttempt, setExistingAttempt] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  const today = new Date().toISOString().slice(0, 10)

  useEffect(() => {
    async function load() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { router.push('/login'); return }
      setUser(session.user)

      const { data: attempt } = await supabase
        .from('quiz_attempts')
        .select('*')
        .eq('user_id', session.user.id)
        .eq('quiz_date', today)
        .single()

      if (attempt) {
        setExistingAttempt(attempt)
        setSubmitted(true)
        setResult({ correct: attempt.correct, pts: attempt.pts_earned })
        // Restaurar respuestas previas para mostrar correctas/incorrectas
        if (attempt.answers) setAnswers(attempt.answers)
      }

      setQuestions(getDailyQuiz(today))
      setLoading(false)
    }
    load()
  }, [])

  function selectAnswer(qId, optIdx) {
    if (submitted) return
    setAnswers(prev => ({ ...prev, [qId]: optIdx }))
  }

  async function handleSubmit() {
    if (Object.keys(answers).length < questions.length) {
      alert('Respondé todas las preguntas antes de enviar')
      return
    }

    setSaving(true)
    const correct = questions.filter(q => answers[q.id] === q.a).length
    const pts = calcQuizPoints(correct)

    try {
      // Usar la API route del servidor (fix del bug de increment)
      const res = await fetch('/api/quiz-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          quiz_date: today,
          correct,
          total: questions.length,
          answers,
        }),
      })

      const data = await res.json()
      if (!res.ok) {
        alert(data.error || 'Error al guardar')
        setSaving(false)
        return
      }

      setResult({ correct, pts: data.pts })
      setSubmitted(true)
    } catch (err) {
      alert('Error de conexión')
    }
    setSaving(false)
  }

  const catLabels = { historia: 'Historia', jugadores: 'Jugadores', sedes: 'Sedes 2026', selecciones: 'Selecciones' }

  if (loading) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', color: 'var(--muted)', letterSpacing: 2 }}>
      CARGANDO...
    </div>
  )

  return (
    <>
      <Navbar user={user} />
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.title}>QUIZ DEL DIA</div>
          <div className={styles.date}>{today}</div>
          <div className={styles.subtitle}>10 preguntas mundialistas · 1 intento por dia</div>
        </div>

        <div className={styles.scoreLegend}>
          <div className={styles.scorePill}>10 o 9 correctas = <strong>+3 pts</strong></div>
          <div className={styles.scorePill}>8 correctas = <strong>+2 pts</strong></div>
          <div className={styles.scorePill}>7 correctas = <strong>+1 pt</strong></div>
        </div>

        {submitted && result && (
          <div className={`${styles.resultBox} ${result.pts > 0 ? styles.resultWin : styles.resultMiss}`}>
            <div className={styles.resultScore}>{result.correct}/10</div>
            <div className={styles.resultMsg}>
              {result.correct >= 9 ? 'MAESTRO MUNDIAL' : result.correct >= 8 ? 'GRAN CONOCEDOR' : result.correct >= 7 ? 'BUEN NIVEL' : 'SEGUI INTENTANDO'}
            </div>
            {result.pts > 0
              ? <div className={styles.resultPts}>+{result.pts} PUNTOS GANADOS</div>
              : <div className={styles.resultPts} style={{ color: 'var(--muted)' }}>Sin puntos esta vez</div>
            }
            {existingAttempt && <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 8 }}>Ya habias completado el quiz de hoy</div>}
          </div>
        )}

        <div className={styles.questions}>
          {questions.map((q, idx) => {
            return (
              <div key={q.id} className={styles.qCard}>
                <div className={styles.qMeta}>
                  <span className={styles.qNum}>{idx + 1}</span>
                  <span className={styles.qCat}>{catLabels[q.cat] || q.cat}</span>
                </div>
                <div className={styles.qText}>{q.q}</div>
                <div className={styles.opts}>
                  {q.opts.map((opt, optIdx) => {
                    let cls = styles.opt
                    if (submitted) {
                      if (optIdx === q.a) cls += ' ' + styles.optCorrect
                      else if (answers[q.id] === optIdx && optIdx !== q.a) cls += ' ' + styles.optWrong
                    } else if (answers[q.id] === optIdx) {
                      cls += ' ' + styles.optSelected
                    }
                    return (
                      <button key={optIdx} className={cls} onClick={() => selectAnswer(q.id, optIdx)} disabled={submitted}>
                        <span className={styles.optLetter}>{['A', 'B', 'C', 'D'][optIdx]}</span>
                        {opt}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {!submitted && (
          <button className={styles.submitBtn} onClick={handleSubmit} disabled={saving}>
            {saving ? 'GUARDANDO...' : `ENVIAR RESPUESTAS (${Object.keys(answers).length}/${questions.length})`}
          </button>
        )}
      </main>
      <Footer />
    </>
  )
}
