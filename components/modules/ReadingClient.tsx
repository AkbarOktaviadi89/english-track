'use client'

import { useState, useRef } from 'react'
import { READING_PASSAGES } from '@/lib/reading-passages'
import { CEFR_META } from '@/types'
import type { CEFRLevel } from '@/types'
import {
  CheckCircle2, XCircle, RotateCcw, Trophy,
  Timer, Play, Square, Clock, Eye, EyeOff
} from 'lucide-react'
import { cn } from '@/lib/utils'

const LEVELS: CEFRLevel[] = ['A2', 'B1', 'B2', 'C1']
const TFNG_OPTIONS = ['True', 'False', 'Not Given']

function useTimer() {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)
  const ref = useRef<ReturnType<typeof setInterval> | null>(null)

  function start() {
    setRunning(true)
    ref.current = setInterval(() => setSeconds(s => s + 1), 1000)
  }
  function stop() {
    setRunning(false)
    if (ref.current) clearInterval(ref.current)
  }
  function reset() { stop(); setSeconds(0) }

  const display = `${Math.floor(seconds / 60).toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`
  return { seconds, running, display, start, stop, reset }
}

export default function ReadingClient() {
  const [activeId, setActiveId] = useState(READING_PASSAGES[0].id)
  const [filterLevel, setFilterLevel] = useState<CEFRLevel | 'all'>('all')
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [showExplanations, setShowExplanations] = useState(false)
  const timer = useTimer()

  const passage = READING_PASSAGES.find(p => p.id === activeId)!
  const lm = CEFR_META[passage.level]

  const score = submitted
    ? passage.questions.filter(q => answers[q.id] === q.answer).length
    : 0
  const total = passage.questions.length

  function selectPassage(id: string) {
    setActiveId(id)
    setAnswers({})
    setSubmitted(false)
    setShowExplanations(false)
    timer.reset()
  }

  function setAnswer(qId: string, value: string) {
    if (submitted) return
    setAnswers(prev => ({ ...prev, [qId]: value }))
  }

  function submit() {
    timer.stop()
    setSubmitted(true)
  }

  function reset() {
    setAnswers({})
    setSubmitted(false)
    setShowExplanations(false)
    timer.reset()
  }

  const allAnswered = passage.questions.every(q => answers[q.id])
  const filtered = READING_PASSAGES.filter(p => filterLevel === 'all' || p.level === filterLevel)
  const pct = submitted ? Math.round((score / total) * 100) : 0

  return (
    <div className="space-y-5">
      {/* Passage selector */}
      <div className="card p-4">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          {(['all', ...LEVELS] as (CEFRLevel | 'all')[]).map(l => {
            const active = filterLevel === l
            if (l === 'all') return (
              <button key="all" onClick={() => setFilterLevel('all')}
                className={cn('badge border text-xs py-1 px-3', active ? 'bg-surface-900 text-white border-surface-900' : 'bg-surface-100 text-surface-600 border-surface-200')}>
                All
              </button>
            )
            const m = CEFR_META[l]
            return (
              <button key={l} onClick={() => setFilterLevel(active ? 'all' : l)}
                className="badge border text-xs py-1 px-3"
                style={active ? { backgroundColor: m.color, color: '#fff', borderColor: m.color } : { backgroundColor: m.bgColor, color: m.color, borderColor: m.borderColor }}>
                {l}
              </button>
            )
          })}
        </div>
        <div className="grid sm:grid-cols-2 gap-2">
          {filtered.map(p => {
            const m = CEFR_META[p.level]
            const active = p.id === activeId
            return (
              <button key={p.id} onClick={() => selectPassage(p.id)}
                className={cn('p-3 rounded-xl border text-left transition-all',
                  active ? 'border-current shadow-card' : 'border-surface-200 hover:border-surface-300')}
                style={active ? { backgroundColor: m.bgColor, borderColor: m.borderColor } : {}}>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="badge text-xs font-bold" style={{ color: m.color }}>{p.level}</span>
                  <span className="text-xs text-surface-400">{p.wordCount} words · {p.questions.length} Qs</span>
                </div>
                <p className="text-xs font-semibold text-surface-900 leading-tight">{p.title}</p>
                <p className="text-xs text-surface-400">{p.topic}</p>
              </button>
            )
          })}
        </div>
      </div>

      {/* Timer + controls */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-surface-200 bg-white">
          <Clock className="w-4 h-4 text-surface-400" />
          <span className="text-sm font-mono font-semibold text-surface-800">{timer.display}</span>
          {!timer.running && !submitted
            ? <button onClick={timer.start} className="text-brand-600 hover:text-brand-700"><Play className="w-4 h-4" /></button>
            : timer.running
              ? <button onClick={timer.stop} className="text-red-500 hover:text-red-600"><Square className="w-4 h-4" /></button>
              : null}
        </div>
        <button onClick={reset} className="btn-ghost text-xs"><RotateCcw className="w-3.5 h-3.5" /> Reset</button>
        {submitted && (
          <button onClick={() => setShowExplanations(e => !e)} className="btn-secondary text-xs">
            {showExplanations ? <><EyeOff className="w-3.5 h-3.5" /> Hide answers</> : <><Eye className="w-3.5 h-3.5" /> Show answers</>}
          </button>
        )}
        {submitted && (
          <div className="ml-auto flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            <span className="font-bold text-surface-900 text-lg">{score}/{total}</span>
            <span className="text-xs text-surface-400">({pct}%)</span>
          </div>
        )}
      </div>

      {/* Main content: passage + questions */}
      <div className="grid lg:grid-cols-2 gap-5 items-start">

        {/* Passage */}
        <div className="card p-5 lg:sticky lg:top-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="badge font-bold text-xs" style={{ backgroundColor: lm.bgColor, color: lm.color, borderColor: lm.borderColor }}>
              {passage.level} · {lm.label}
            </span>
            <span className="badge text-xs bg-surface-100 text-surface-600">{passage.topic}</span>
          </div>
          <h2 className="font-semibold text-surface-900 mb-3 leading-snug">{passage.title}</h2>
          <div className="text-sm text-surface-700 leading-relaxed space-y-3 max-h-[60vh] overflow-y-auto scrollbar-thin pr-1">
            {passage.text.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <p className="text-xs text-surface-400 mt-3 text-right">{passage.wordCount} words</p>
        </div>

        {/* Questions */}
        <div className="space-y-4">
          {passage.questions.map((q, qi) => {
            const userAnswer = answers[q.id]
            const isCorrect = submitted && userAnswer === q.answer
            const isWrong = submitted && userAnswer && userAnswer !== q.answer

            return (
              <div key={q.id} className={cn('card p-4 transition-all',
                submitted && isCorrect && 'border-brand-300',
                submitted && isWrong && 'border-red-300')}>

                {/* Question header */}
                <div className="flex items-start gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-surface-100 text-surface-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {qi + 1}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="badge text-xs bg-surface-100 text-surface-500">
                        {q.type === 'tfng' ? 'T/F/NG' : q.type === 'multiple_choice' ? 'Multiple Choice' : 'Sentence Completion'}
                      </span>
                      {submitted && (isCorrect
                        ? <CheckCircle2 className="w-4 h-4 text-brand-600" />
                        : isWrong ? <XCircle className="w-4 h-4 text-red-500" /> : null)}
                    </div>
                    <p className="text-sm font-medium text-surface-900 leading-relaxed">{q.question}</p>
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-2">
                  {(q.type === 'tfng' ? TFNG_OPTIONS : q.options ?? []).map(opt => {
                    const selected = userAnswer === opt
                    const correct = opt === q.answer
                    const revealed = submitted
                    return (
                      <button key={opt} onClick={() => setAnswer(q.id, opt)}
                        disabled={submitted}
                        className={cn(
                          'w-full text-left px-3 py-2.5 rounded-xl border text-sm transition-all',
                          !revealed && !selected && 'border-surface-200 hover:border-brand-300 hover:bg-brand-50',
                          !revealed && selected && 'border-brand-400 bg-brand-50 text-brand-800',
                          revealed && correct && 'border-brand-400 bg-brand-50 text-brand-800 font-medium',
                          revealed && selected && !correct && 'border-red-400 bg-red-50 text-red-700',
                          revealed && !selected && !correct && 'opacity-40 border-surface-100',
                        )}>
                        {opt}
                        {revealed && correct && <CheckCircle2 className="inline w-3.5 h-3.5 ml-2 text-brand-600" />}
                        {revealed && selected && !correct && <XCircle className="inline w-3.5 h-3.5 ml-2 text-red-500" />}
                      </button>
                    )
                  })}
                </div>

                {/* Explanation */}
                {submitted && showExplanations && (
                  <div className={cn('mt-3 rounded-lg p-3 text-xs leading-relaxed',
                    isCorrect ? 'bg-brand-50 text-brand-800' : 'bg-red-50 text-red-800')}>
                    {!isCorrect && userAnswer && (
                      <p className="font-semibold mb-1">✓ Correct: "{q.answer}"</p>
                    )}
                    {q.explanation}
                  </div>
                )}
              </div>
            )
          })}

          {/* Submit */}
          {!submitted && (
            <button onClick={submit} disabled={!allAnswered}
              className="btn-primary w-full justify-center py-3 text-sm">
              Submit all answers ({Object.keys(answers).length}/{total} answered)
            </button>
          )}

          {/* Score banner */}
          {submitted && (
            <div className={cn('rounded-2xl p-5 flex items-center gap-4 border',
              pct === 100 ? 'bg-brand-50 border-brand-200' :
              pct >= 70 ? 'bg-amber-50 border-amber-200' : 'bg-red-50 border-red-200')}>
              <span className="text-4xl">{pct === 100 ? '🎉' : pct >= 70 ? '💪' : '📖'}</span>
              <div>
                <p className="text-xl font-bold text-surface-900">{score} / {total}</p>
                <p className="text-sm text-surface-500">
                  {pct === 100 ? 'Perfect score!' :
                   pct >= 70 ? 'Well done — review the explanations.' :
                   'Read the passage carefully and try again.'}
                </p>
                {timer.seconds > 0 && (
                  <p className="text-xs text-surface-400 mt-0.5">⏱ Time: {timer.display}</p>
                )}
              </div>
              <button onClick={reset} className="btn-secondary ml-auto text-xs flex-shrink-0">
                <RotateCcw className="w-3.5 h-3.5" /> Try again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
