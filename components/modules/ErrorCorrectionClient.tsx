'use client'

import { useState } from 'react'
import { ERROR_PASSAGES } from '@/lib/error-correction'
import { CEFR_META } from '@/types'
import type { CEFRLevel } from '@/types'
import {
  CheckCircle2, XCircle, RotateCcw, Trophy,
  AlertTriangle, Eye, EyeOff, ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

const LEVELS: CEFRLevel[] = ['A2', 'B1', 'B2', 'C1']

type WordState = 'idle' | 'selected' | 'correct' | 'wrong' | 'missed'

interface UserAttempt {
  wordIndex: number
  correction: string
}

export default function ErrorCorrectionClient() {
  const [filterLevel, setFilterLevel] = useState<CEFRLevel | 'all'>('all')
  const [activeId, setActiveId] = useState(ERROR_PASSAGES[0].id)
  const [selected, setSelected] = useState<number | null>(null)
  const [correctionInput, setCorrectionInput] = useState('')
  const [attempts, setAttempts] = useState<UserAttempt[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [showExplanations, setShowExplanations] = useState(false)

  const pool = ERROR_PASSAGES.filter(p => filterLevel === 'all' || p.level === filterLevel)
  const passage = pool.find(p => p.id === activeId) ?? pool[0]

  if (!passage) return (
    <div className="card p-6 text-center text-surface-400 text-sm">
      No passages available for this level.
    </div>
  )

  const lm = CEFR_META[passage.level]
  const words = passage.text.split(' ')
  const errorIndices = new Set(passage.errors.map(e => e.wordIndex))

  // Build word states after submission
  function getWordState(idx: number): WordState {
    if (!submitted) {
      if (selected === idx) return 'selected'
      return 'idle'
    }
    const error = passage.errors.find(e => e.wordIndex === idx)
    const attempt = attempts.find(a => a.wordIndex === idx)
    if (error) {
      if (attempt && attempt.correction.trim().toLowerCase() === error.correct.toLowerCase()) return 'correct'
      return 'missed'
    }
    if (attempt) return 'wrong' // flagged a non-error word
    return 'idle'
  }

  function handleWordClick(idx: number) {
    if (submitted) return
    if (selected === idx) {
      setSelected(null)
      setCorrectionInput('')
      return
    }
    setSelected(idx)
    const existing = attempts.find(a => a.wordIndex === idx)
    setCorrectionInput(existing?.correction ?? '')
  }

  function submitCorrection() {
    if (selected === null || !correctionInput.trim()) return
    setAttempts(prev => {
      const without = prev.filter(a => a.wordIndex !== selected)
      return [...without, { wordIndex: selected, correction: correctionInput.trim() }]
    })
    setSelected(null)
    setCorrectionInput('')
  }

  function removeAttempt(idx: number) {
    setAttempts(prev => prev.filter(a => a.wordIndex !== idx))
  }

  function submitAll() {
    setSelected(null)
    setCorrectionInput('')
    setSubmitted(true)
  }

  function reset() {
    setSelected(null)
    setCorrectionInput('')
    setAttempts([])
    setSubmitted(false)
    setShowExplanations(false)
  }

  function selectPassage(id: string) {
    setActiveId(id)
    reset()
  }

  // Scoring
  const correctlyFound = passage.errors.filter(e => {
    const attempt = attempts.find(a => a.wordIndex === e.wordIndex)
    return attempt && attempt.correction.trim().toLowerCase() === e.correct.toLowerCase()
  }).length
  const falsePositives = attempts.filter(a => !errorIndices.has(a.wordIndex)).length
  const score = Math.max(0, correctlyFound - falsePositives)
  const total = passage.errors.length

  return (
    <div className="space-y-5">

      {/* Passage selector */}
      <div className="card p-4">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          {(['all', ...LEVELS] as (CEFRLevel | 'all')[]).map(l => {
            const active = filterLevel === l
            if (l === 'all') return (
              <button key="all" onClick={() => { setFilterLevel('all'); reset() }}
                className={cn('badge border text-xs py-1 px-3', active
                  ? 'bg-surface-900 text-white border-surface-900'
                  : 'bg-surface-100 text-surface-600 border-surface-200')}>
                All
              </button>
            )
            const m = CEFR_META[l]
            return (
              <button key={l} onClick={() => { setFilterLevel(active ? 'all' : l); reset() }}
                className="badge border text-xs py-1 px-3"
                style={active
                  ? { backgroundColor: m.color, color: '#fff', borderColor: m.color }
                  : { backgroundColor: m.bgColor, color: m.color, borderColor: m.borderColor }}>
                {l}
              </button>
            )
          })}
        </div>
        <div className="grid sm:grid-cols-2 gap-2">
          {pool.map(p => {
            const m = CEFR_META[p.level]
            const active = p.id === activeId
            return (
              <button key={p.id} onClick={() => selectPassage(p.id)}
                className={cn('p-3 rounded-xl border text-left transition-all',
                  active ? 'shadow-card border-current' : 'border-surface-200 hover:border-surface-300')}
                style={active ? { backgroundColor: m.bgColor, borderColor: m.borderColor } : {}}>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="badge text-xs font-bold" style={{ color: m.color }}>{p.level}</span>
                  <span className="text-xs text-surface-400">{p.errors.length} errors</span>
                </div>
                <p className="text-xs font-semibold text-surface-900 leading-tight">{p.title}</p>
                <p className="text-xs text-surface-400">{p.topic}</p>
              </button>
            )
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-1.5 text-sm text-surface-500">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <span>{passage.errors.length} errors hidden in this paragraph</span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          {attempts.length > 0 && !submitted && (
            <span className="text-xs text-brand-600 font-medium">{attempts.length} marked</span>
          )}
          {submitted && (
            <button onClick={() => setShowExplanations(e => !e)} className="btn-secondary text-xs">
              {showExplanations ? <><EyeOff className="w-3.5 h-3.5" /> Hide</> : <><Eye className="w-3.5 h-3.5" /> Explain</>}
            </button>
          )}
          <button onClick={reset} className="btn-ghost text-xs">
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </button>
        </div>
      </div>

      {/* Main passage card */}
      <div className="card p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge font-bold text-xs"
            style={{ backgroundColor: lm.bgColor, color: lm.color, borderColor: lm.borderColor }}>
            {passage.level} · {lm.label}
          </span>
          <span className="badge text-xs bg-surface-100 text-surface-600">{passage.topic}</span>
          <h2 className="text-sm font-semibold text-surface-900 ml-1">{passage.title}</h2>
        </div>

        {/* Paragraph with clickable words */}
        <div className="text-base text-surface-800 leading-[2.6]">
          {words.map((word, idx) => {
            const state = getWordState(idx)
            const attempt = attempts.find(a => a.wordIndex === idx)
            return (
              <span key={idx}>
                <button
                  onClick={() => handleWordClick(idx)}
                  disabled={submitted}
                  className={cn(
                    'inline rounded px-1 py-0.5 transition-all cursor-pointer text-base',
                    !submitted && 'hover:bg-amber-50 hover:text-amber-700',
                    state === 'selected' && 'bg-amber-100 text-amber-800 ring-2 ring-amber-400 rounded',
                    state === 'correct' && 'bg-brand-100 text-brand-700 line-through',
                    state === 'missed' && 'bg-red-100 text-red-700',
                    state === 'wrong' && 'bg-surface-200 text-surface-500 line-through',
                  )}>
                  {word}
                </button>
                {/* Show correction badge */}
                {attempt && !submitted && (
                  <sup>
                    <button onClick={() => removeAttempt(idx)}
                      className="ml-0.5 text-xs bg-amber-100 text-amber-700 rounded px-1 hover:bg-red-100 hover:text-red-600 transition-colors">
                      ✕ {attempt.correction}
                    </button>
                  </sup>
                )}
                {submitted && state === 'correct' && (
                  <sup className="ml-0.5 text-xs text-brand-600 font-semibold">{attempt?.correction}</sup>
                )}
                {submitted && state === 'missed' && (
                  <sup className="ml-0.5 text-xs text-red-600 font-semibold">
                    → {passage.errors.find(e => e.wordIndex === idx)?.correct}
                  </sup>
                )}
                {' '}
              </span>
            )
          })}
        </div>

        {/* Inline correction input */}
        {selected !== null && !submitted && (
          <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center gap-3">
            <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-xs text-amber-700 mb-1.5">
                You selected: <span className="font-bold">"{words[selected]}"</span> — type the correction:
              </p>
              <div className="flex items-center gap-2">
                <input
                  autoFocus
                  value={correctionInput}
                  onChange={e => setCorrectionInput(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') submitCorrection() }}
                  placeholder="correct word(s)…"
                  className="border border-amber-300 rounded-lg px-3 py-1.5 text-sm bg-white outline-none focus:border-amber-500 flex-1"
                />
                <button onClick={submitCorrection} disabled={!correctionInput.trim()}
                  className="btn-primary text-xs flex-shrink-0 py-1.5">
                  Mark <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button onClick={() => { setSelected(null); setCorrectionInput('') }}
                  className="btn-ghost text-xs">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Submit */}
        {!submitted && (
          <div className="mt-4 flex items-center gap-3">
            <button onClick={submitAll}
              className="btn-primary text-sm">
              Check my corrections
            </button>
            <p className="text-xs text-surface-400">
              {attempts.length === 0
                ? 'Click on words you think are wrong, then type the correction.'
                : `${attempts.length} word${attempts.length > 1 ? 's' : ''} marked — ready to check.`}
            </p>
          </div>
        )}

        {/* Score banner */}
        {submitted && (
          <div className={cn('mt-5 rounded-xl border p-4 flex items-center gap-4',
            score === total ? 'bg-brand-50 border-brand-200' :
            score >= total * 0.6 ? 'bg-amber-50 border-amber-200' : 'bg-red-50 border-red-200')}>
            <span className="text-3xl">{score === total ? '🎉' : score >= total * 0.6 ? '💪' : '📖'}</span>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <Trophy className="w-5 h-5 text-amber-500" />
                <span className="font-bold text-surface-900 text-xl">{score} / {total}</span>
              </div>
              <p className="text-sm text-surface-500">
                {correctlyFound} found correctly
                {falsePositives > 0 && ` · ${falsePositives} false positive${falsePositives > 1 ? 's' : ''}`}
              </p>
            </div>
            <button onClick={reset} className="btn-secondary text-xs ml-auto flex-shrink-0">
              <RotateCcw className="w-3.5 h-3.5" /> Try again
            </button>
          </div>
        )}
      </div>

      {/* Explanations */}
      {submitted && showExplanations && (
        <div className="card p-5 space-y-3">
          <h3 className="text-sm font-semibold text-surface-900">All Errors Explained</h3>
          {passage.errors.map(e => {
            const attempt = attempts.find(a => a.wordIndex === e.wordIndex)
            const found = attempt && attempt.correction.trim().toLowerCase() === e.correct.toLowerCase()
            return (
              <div key={e.wordIndex}
                className={cn('rounded-xl border p-3 space-y-1.5',
                  found ? 'bg-brand-50 border-brand-200' : 'bg-red-50 border-red-200')}>
                <div className="flex items-center gap-2 flex-wrap">
                  {found
                    ? <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                    : <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />}
                  <span className="text-xs line-through text-surface-400 font-mono">{e.wrong}</span>
                  <span className="text-xs">→</span>
                  <span className="text-xs font-bold text-surface-900 font-mono">{e.correct}</span>
                  <span className="badge text-xs bg-surface-100 text-surface-500 ml-auto">{e.category}</span>
                </div>
                <p className="text-xs text-surface-700 leading-relaxed">{e.explanation}</p>
                {!found && attempt && (
                  <p className="text-xs text-red-600">Your answer: "{attempt.correction}"</p>
                )}
                {!found && !attempt && (
                  <p className="text-xs text-red-600 italic">Not found.</p>
                )}
              </div>
            )
          })}
          {/* False positives */}
          {falsePositives > 0 && (
            <div className="rounded-xl border border-surface-200 bg-surface-50 p-3">
              <p className="text-xs font-semibold text-surface-600 mb-2">Words incorrectly flagged:</p>
              {attempts.filter(a => !errorIndices.has(a.wordIndex)).map(a => (
                <p key={a.wordIndex} className="text-xs text-surface-500">
                  "{words[a.wordIndex]}" → your correction: "{a.correction}" (no error here)
                </p>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tip */}
      {!submitted && (
        <p className="text-xs text-surface-400 leading-relaxed">
          ✦ Click any word you think is wrong to open a correction input. You can mark multiple words before checking. Click a marked word's ✕ badge to un-mark it.
        </p>
      )}
    </div>
  )
}
