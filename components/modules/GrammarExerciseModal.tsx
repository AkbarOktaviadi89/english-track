'use client'

import { useState } from 'react'
import { X, CheckCircle2, XCircle, ChevronRight, Trophy, RefreshCw } from 'lucide-react'
import type { GrammarEntry } from '@/lib/grammar-reference'
import { GRAMMAR_EXERCISES } from '@/lib/grammar-exercises'
import { cn } from '@/lib/utils'

interface Props {
  entry: GrammarEntry
  onClose: () => void
}

type Status = 'idle' | 'correct' | 'wrong'

export default function GrammarExerciseModal({ entry, onClose }: Props) {
  const exercises = GRAMMAR_EXERCISES[entry.id] ?? []
  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState('')
  const [selected, setSelected] = useState<number | null>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const [results, setResults] = useState<{ correct: boolean; userAnswer: string }[]>([])

  const ex = exercises[index]

  function normalise(s: string) {
    return s.trim().toLowerCase().replace(/['"]/g, '')
  }

  function check() {
    if (!ex) return
    let correct = false
    let userAnswer = ''

    if (ex.type === 'choose') {
      if (selected === null) return
      userAnswer = ex.options![selected]
      correct = normalise(userAnswer) === normalise(ex.answer)
    } else {
      userAnswer = answer
      // For fill/correct: accept if answer is contained in the correct answer or vice versa (flexible)
      const userNorm = normalise(userAnswer)
      const correctNorm = normalise(ex.answer)
      // Accept multiple possible answers separated by /
      const possibleAnswers = ex.answer.split('/').map(a => normalise(a.trim()))
      correct = possibleAnswers.some(a => userNorm === a || userNorm.includes(a) || a.includes(userNorm))
    }

    setStatus(correct ? 'correct' : 'wrong')
    if (correct) setScore(s => s + 1)
    setResults(prev => [...prev, { correct, userAnswer }])
  }

  function next() {
    const nextIndex = index + 1
    if (nextIndex >= exercises.length) {
      setDone(true)
    } else {
      setIndex(nextIndex)
      setAnswer('')
      setSelected(null)
      setStatus('idle')
    }
  }

  function restart() {
    setIndex(0)
    setAnswer('')
    setSelected(null)
    setStatus('idle')
    setScore(0)
    setDone(false)
    setResults([])
  }

  const pct = exercises.length > 0 ? Math.round((score / exercises.length) * 100) : 0

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="card w-full max-w-lg shadow-elevated animate-in max-h-[90vh] flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-surface-200 flex-shrink-0">
          <div>
            <p className="text-xs text-surface-400 font-medium uppercase tracking-wide">Grammar Practice</p>
            <h2 className="font-semibold text-surface-900 text-base">{entry.title}</h2>
          </div>
          <button onClick={onClose} className="text-surface-400 hover:text-surface-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
          {exercises.length === 0 ? (
            <div className="text-center py-8 text-surface-400 text-sm">
              No exercises available for this grammar rule yet.
            </div>
          ) : done ? (
            /* Results screen */
            <div className="text-center">
              <div className={cn('w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl',
                pct === 100 ? 'bg-brand-50' : pct >= 60 ? 'bg-amber-50' : 'bg-red-50')}>
                {pct === 100 ? '🎉' : pct >= 60 ? '💪' : '📖'}
              </div>
              <p className="text-2xl font-bold text-surface-900 mb-1">{score} / {exercises.length}</p>
              <p className="text-sm text-surface-500 mb-2">
                {pct === 100 ? 'Perfect! You nailed it.' : pct >= 60 ? 'Good job — review the ones you missed.' : 'Keep practising — re-read the rule and try again.'}
              </p>
              <div className="progress-bar mb-6 mx-auto max-w-32">
                <div className="progress-fill bg-brand-500" style={{ width: `${pct}%` }} />
              </div>

              {/* Per-question recap */}
              <div className="space-y-1.5 mb-6 text-left">
                {exercises.map((e, i) => {
                  const r = results[i]
                  return (
                    <div key={e.id} className={cn('flex items-start gap-2 text-xs px-3 py-2 rounded-lg',
                      r?.correct ? 'bg-brand-50 text-brand-700' : 'bg-red-50 text-red-700')}>
                      {r?.correct
                        ? <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                        : <XCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />}
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{e.question.replace(/\n/g, ' ')}</p>
                        {!r?.correct && <p className="text-red-600 mt-0.5">✓ {e.answer}</p>}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="flex gap-3">
                <button onClick={restart} className="btn-secondary flex-1 justify-center">
                  <RefreshCw className="w-4 h-4" /> Try again
                </button>
                <button onClick={onClose} className="btn-primary flex-1 justify-center">Done</button>
              </div>
            </div>
          ) : (
            /* Exercise screen */
            <div>
              {/* Progress */}
              <div className="flex items-center justify-between text-xs text-surface-400 mb-2">
                <span>{index + 1} of {exercises.length}</span>
                <span className="font-medium text-brand-600">{score} correct</span>
              </div>
              <div className="progress-bar mb-5">
                <div className="progress-fill bg-brand-500" style={{ width: `${(index / exercises.length) * 100}%` }} />
              </div>

              {/* Type badge */}
              <span className={cn('badge text-xs mb-4 inline-flex', {
                'fill': 'bg-blue-100 text-blue-700',
                'choose': 'bg-violet-100 text-violet-700',
                'correct': 'bg-amber-100 text-amber-700',
              }[ex.type])}>
                {ex.type === 'fill' ? '✏️ Fill in the blank' : ex.type === 'choose' ? '☑️ Choose the correct answer' : '🔍 Correct the error'}
              </span>

              {/* Question */}
              <p className="text-base font-semibold text-surface-900 mb-5 leading-relaxed">
                {ex.question}
              </p>

              {/* Answer input */}
              {ex.type === 'choose' && ex.options ? (
                <div className="space-y-2.5 mb-5">
                  {ex.options.map((opt, i) => {
                    const isSelected = selected === i
                    const revealed = status !== 'idle'
                    const isCorrect = normalise(opt) === normalise(ex.answer)
                    return (
                      <button key={i} onClick={() => !revealed && setSelected(i)}
                        disabled={revealed}
                        className={cn(
                          'w-full text-left px-4 py-3 rounded-xl border text-sm transition-all',
                          !revealed && 'border-surface-200 hover:border-brand-300 hover:bg-brand-50',
                          revealed && isCorrect && 'border-brand-400 bg-brand-50 text-brand-800',
                          revealed && isSelected && !isCorrect && 'border-red-400 bg-red-50 text-red-700',
                          revealed && !isSelected && !isCorrect && 'opacity-40 border-surface-200',
                          !revealed && isSelected && 'border-brand-400 bg-brand-50'
                        )}>
                        <span className="font-semibold mr-2 text-surface-400">{String.fromCharCode(65 + i)}.</span>
                        {opt}
                        {revealed && isCorrect && <span className="float-right text-brand-600">✓</span>}
                        {revealed && isSelected && !isCorrect && <span className="float-right text-red-500">✗</span>}
                      </button>
                    )
                  })}
                </div>
              ) : (
                <div className="mb-5">
                  <input
                    className={cn('input text-base', {
                      idle: '',
                      correct: 'border-brand-400 bg-brand-50 text-brand-800',
                      wrong: 'border-red-400 bg-red-50 text-red-700',
                    }[status])}
                    placeholder={ex.type === 'fill' ? 'Type your answer…' : 'Type the corrected sentence…'}
                    value={answer}
                    onChange={e => status === 'idle' && setAnswer(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && status === 'idle' && check()}
                    disabled={status !== 'idle'}
                    autoFocus
                  />
                </div>
              )}

              {/* Feedback */}
              {status !== 'idle' && (
                <div className={cn('rounded-xl px-4 py-3 mb-5 text-sm',
                  status === 'correct' ? 'bg-brand-50 border border-brand-200 text-brand-800' : 'bg-red-50 border border-red-200 text-red-800')}>
                  <div className="flex items-center gap-2 font-semibold mb-1">
                    {status === 'correct'
                      ? <><CheckCircle2 className="w-4 h-4 text-brand-600" /> Correct!</>
                      : <><XCircle className="w-4 h-4 text-red-500" /> Not quite</>}
                  </div>
                  {status === 'wrong' && (
                    <p className="mb-1">✓ <span className="font-medium">{ex.answer}</span></p>
                  )}
                  <p className="text-xs opacity-80">{ex.explanation}</p>
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-3">
                {status === 'idle' ? (
                  <button onClick={check}
                    disabled={ex.type === 'choose' ? selected === null : !answer.trim()}
                    className="btn-primary flex-1 justify-center py-3">
                    Check answer
                  </button>
                ) : (
                  <button onClick={next} className="btn-primary flex-1 justify-center py-3">
                    {index + 1 < exercises.length ? <>Next <ChevronRight className="w-4 h-4" /></> : <><Trophy className="w-4 h-4" /> See results</>}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
