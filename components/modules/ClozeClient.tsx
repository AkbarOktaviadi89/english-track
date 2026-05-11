'use client'

import { useState, useRef } from 'react'
import { CLOZE_PASSAGES } from '@/lib/cloze-tests'
import { CEFR_META } from '@/types'
import type { CEFRLevel } from '@/types'
import {
  CheckCircle2, XCircle, RotateCcw, ChevronRight,
  Trophy, Lightbulb, Eye, EyeOff, ToggleLeft, ToggleRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

type Mode = 'multiple_choice' | 'open'
type GapState = 'idle' | 'correct' | 'wrong'

const LEVELS: CEFRLevel[] = ['A2', 'B1', 'B2', 'C1']

function parseText(text: string): (string | number)[] {
  const parts: (string | number)[] = []
  const regex = /\{\{(\d+)\}\}/g
  let last = 0
  let match
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index))
    parts.push(parseInt(match[1]) - 1) // 0-indexed gap number
    last = match.index + match[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts
}

export default function ClozeClient() {
  const [activeId, setActiveId] = useState(CLOZE_PASSAGES[0].id)
  const [mode, setMode] = useState<Mode>('multiple_choice')
  const [filterLevel, setFilterLevel] = useState<CEFRLevel | 'all'>('all')
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [gapStates, setGapStates] = useState<Record<number, GapState>>({})
  const [submitted, setSubmitted] = useState(false)
  const [showHints, setShowHints] = useState(false)
  const inputRefs = useRef<Record<number, HTMLInputElement>>({})

  const passage = CLOZE_PASSAGES.find(p => p.id === activeId)!
  const parts = parseText(passage.text)
  const lm = CEFR_META[passage.level]

  const score = submitted
    ? passage.gaps.filter((g, i) => gapStates[i] === 'correct').length
    : 0
  const total = passage.gaps.length

  function selectPassage(id: string) {
    setActiveId(id)
    setAnswers({})
    setGapStates({})
    setSubmitted(false)
    setShowHints(false)
  }

  function handleAnswer(idx: number, value: string) {
    if (submitted) return
    setAnswers(prev => ({ ...prev, [idx]: value }))
    if (mode === 'multiple_choice') checkGap(idx, value)
  }

  function checkGap(idx: number, value: string) {
    const correct = passage.gaps[idx].answer.toLowerCase()
    const userVal = value.trim().toLowerCase()
    const isCorrect = userVal === correct
    setGapStates(prev => ({ ...prev, [idx]: isCorrect ? 'correct' : 'wrong' }))
    return isCorrect
  }

  function submitAll() {
    const newStates: Record<number, GapState> = {}
    passage.gaps.forEach((g, i) => {
      const userVal = (answers[i] ?? '').trim().toLowerCase()
      newStates[i] = userVal === g.answer.toLowerCase() ? 'correct' : 'wrong'
    })
    setGapStates(newStates)
    setSubmitted(true)
  }

  function reset() {
    setAnswers({})
    setGapStates({})
    setSubmitted(false)
    setShowHints(false)
  }

  const allAnswered = passage.gaps.every((_, i) => (answers[i] ?? '').trim().length > 0)
  const filtered = CLOZE_PASSAGES.filter(p => filterLevel === 'all' || p.level === filterLevel)

  return (
    <div className="space-y-5">
      {/* Passage selector */}
      <div className="card p-4">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <p className="text-sm font-medium text-surface-700">Filter:</p>
          {(['all', ...LEVELS] as (CEFRLevel | 'all')[]).map(l => {
            const active = filterLevel === l
            if (l === 'all') return (
              <button key="all" onClick={() => setFilterLevel('all')}
                className={cn('badge border text-xs py-1 px-3', active ? 'bg-surface-900 text-white border-surface-900' : 'bg-surface-100 text-surface-600 border-surface-200')}>
                All levels
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
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {filtered.map(p => {
            const m = CEFR_META[p.level]
            const active = p.id === activeId
            return (
              <button key={p.id} onClick={() => selectPassage(p.id)}
                className={cn('p-3 rounded-xl border text-left transition-all',
                  active ? 'border-current shadow-card' : 'border-surface-200 hover:border-surface-300')}
                style={active ? { backgroundColor: m.bgColor, borderColor: m.borderColor } : {}}>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="badge text-xs font-bold" style={{ color: m.color }}>{p.level}</span>
                </div>
                <p className="text-xs font-semibold text-surface-900 leading-tight">{p.title}</p>
                <p className="text-xs text-surface-400 mt-0.5">{p.topic} · {p.gaps.length} gaps</p>
              </button>
            )
          })}
        </div>
      </div>

      {/* Mode toggle + controls */}
      <div className="flex items-center gap-3 flex-wrap">
        <button onClick={() => { setMode(m => m === 'multiple_choice' ? 'open' : 'multiple_choice'); reset() }}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-surface-200 bg-white text-sm font-medium text-surface-700 hover:border-surface-300 transition-all">
          {mode === 'multiple_choice'
            ? <><ToggleRight className="w-5 h-5 text-brand-600" /> Multiple Choice</>
            : <><ToggleLeft className="w-5 h-5 text-surface-400" /> Open Cloze</>}
        </button>
        {submitted && (
          <button onClick={() => setShowHints(h => !h)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-surface-200 bg-white text-sm font-medium text-surface-600 hover:border-surface-300">
            {showHints ? <><EyeOff className="w-4 h-4" /> Hide explanations</> : <><Eye className="w-4 h-4" /> Show explanations</>}
          </button>
        )}
        <button onClick={reset} className="btn-ghost text-xs">
          <RotateCcw className="w-3.5 h-3.5" /> Reset
        </button>
        {submitted && (
          <div className="ml-auto flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            <span className="font-bold text-surface-900">{score}/{total}</span>
            <span className="text-xs text-surface-400">correct</span>
          </div>
        )}
      </div>

      {/* Passage card */}
      <div className="card p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-surface-200">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="badge font-bold text-xs" style={{ backgroundColor: lm.bgColor, color: lm.color, borderColor: lm.borderColor }}>
                {passage.level} · {lm.label}
              </span>
              <span className="badge text-xs bg-surface-100 text-surface-600">{passage.topic}</span>
            </div>
            <h2 className="font-semibold text-surface-900">{passage.title}</h2>
          </div>
          <div className="ml-auto text-right text-xs text-surface-400 flex-shrink-0">
            <p>{passage.gaps.length} gaps</p>
            <p className={cn(mode === 'multiple_choice' ? 'text-brand-600' : 'text-violet-600')}>
              {mode === 'multiple_choice' ? '4 choices' : 'Type answer'}
            </p>
          </div>
        </div>

        {/* Passage text with gaps */}
        <div className="text-base text-surface-800 leading-[2.4] select-none">
          {parts.map((part, pi) => {
            if (typeof part === 'string') return <span key={pi}>{part}</span>
            const gapIdx = part
            const gap = passage.gaps[gapIdx]
            const state = gapStates[gapIdx] ?? 'idle'
            const val = answers[gapIdx] ?? ''

            if (mode === 'multiple_choice') {
              return (
                <span key={pi} className="inline-flex flex-wrap gap-1 mx-1 align-middle">
                  <span className="text-xs text-surface-400 mr-0.5 font-mono">({gapIdx + 1})</span>
                  {gap.options.map(opt => {
                    const isSelected = val === opt
                    const correct = opt === gap.answer
                    const revealed = state !== 'idle'
                    return (
                      <button key={opt} onClick={() => handleAnswer(gapIdx, opt)}
                        disabled={state !== 'idle'}
                        className={cn(
                          'px-2.5 py-0.5 rounded-lg border text-sm font-medium transition-all',
                          !revealed && !isSelected && 'border-surface-200 text-surface-700 hover:border-brand-400 hover:bg-brand-50',
                          !revealed && isSelected && 'border-brand-400 bg-brand-50 text-brand-800',
                          revealed && correct && 'border-brand-400 bg-brand-50 text-brand-800',
                          revealed && isSelected && !correct && 'border-red-400 bg-red-50 text-red-700',
                          revealed && !isSelected && !correct && 'opacity-30 border-surface-100'
                        )}>
                        {opt}
                        {revealed && correct && <CheckCircle2 className="inline w-3 h-3 ml-1 text-brand-600" />}
                        {revealed && isSelected && !correct && <XCircle className="inline w-3 h-3 ml-1 text-red-500" />}
                      </button>
                    )
                  })}
                </span>
              )
            }

            // Open cloze
            return (
              <span key={pi} className="inline-flex items-center mx-1 align-middle">
                <span className="text-xs text-surface-400 mr-0.5 font-mono">({gapIdx + 1})</span>
                <input
                  ref={el => { if (el) inputRefs.current[gapIdx] = el }}
                  value={val}
                  onChange={e => handleAnswer(gapIdx, e.target.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' && !submitted) {
                      const next = gapIdx + 1
                      if (next < passage.gaps.length) inputRefs.current[next]?.focus()
                    }
                  }}
                  disabled={submitted}
                  placeholder="___"
                  className={cn(
                    'border rounded-lg px-2 py-0.5 text-sm font-medium outline-none transition-all w-28 text-center',
                    state === 'idle' && 'border-surface-300 focus:border-brand-400 bg-white',
                    state === 'correct' && 'border-brand-400 bg-brand-50 text-brand-800',
                    state === 'wrong' && 'border-red-400 bg-red-50 text-red-700',
                  )}
                />
                {state === 'correct' && <CheckCircle2 className="w-4 h-4 text-brand-500 ml-1 flex-shrink-0" />}
                {state === 'wrong' && <XCircle className="w-4 h-4 text-red-500 ml-1 flex-shrink-0" />}
              </span>
            )
          })}
        </div>

        {/* Submit button (open cloze mode only) */}
        {mode === 'open' && !submitted && (
          <button onClick={submitAll} disabled={!allAnswered}
            className="btn-primary mt-6 w-full justify-center">
            <ChevronRight className="w-4 h-4" /> Check all answers
          </button>
        )}

        {/* Score banner */}
        {submitted && (
          <div className={cn('mt-6 rounded-xl p-4 flex items-center gap-4',
            score === total ? 'bg-brand-50 border border-brand-200' : score >= total * 0.7 ? 'bg-amber-50 border border-amber-200' : 'bg-red-50 border border-red-200')}>
            <span className="text-3xl">{score === total ? '🎉' : score >= total * 0.7 ? '💪' : '📖'}</span>
            <div>
              <p className="font-bold text-surface-900 text-lg">{score} / {total} correct</p>
              <p className="text-sm text-surface-500">
                {score === total ? 'Perfect! Excellent work.' : score >= total * 0.7 ? 'Good — review the explanations below.' : 'Review the passage and try again.'}
              </p>
            </div>
            <button onClick={reset} className="btn-secondary ml-auto text-xs flex-shrink-0">
              <RotateCcw className="w-3.5 h-3.5" /> Try again
            </button>
          </div>
        )}
      </div>

      {/* Explanations */}
      {submitted && showHints && (
        <div className="card p-5">
          <h3 className="font-semibold text-surface-900 text-sm mb-4">Answer Explanations</h3>
          <div className="space-y-3">
            {passage.gaps.map((gap, i) => {
              const correct = gapStates[i] === 'correct'
              return (
                <div key={i} className={cn('rounded-xl border p-3 space-y-1.5',
                  correct ? 'bg-brand-50 border-brand-200' : 'bg-red-50 border-red-200')}>
                  <div className="flex items-center gap-2">
                    {correct
                      ? <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                      : <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />}
                    <span className="text-xs font-semibold text-surface-600">Gap {i + 1}</span>
                    <span className="badge text-xs font-bold bg-white" style={{ color: correct ? '#16a34a' : '#dc2626' }}>
                      ✓ {gap.answer}
                    </span>
                    {gap.hint && (
                      <span className="badge text-xs bg-violet-50 text-violet-600 ml-auto">{gap.hint}</span>
                    )}
                  </div>
                  <p className="text-xs text-surface-700 leading-relaxed">{gap.explanation}</p>
                  {!correct && (
                    <p className="text-xs text-red-600">Your answer: "{answers[i] || '(blank)'}"</p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Hint tip */}
      {!submitted && (
        <div className="flex items-start gap-2 text-xs text-surface-400">
          <Lightbulb className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
          <span>
            {mode === 'multiple_choice'
              ? 'Pilih jawaban untuk setiap gap. Feedback langsung muncul.'
              : 'Ketik jawaban di setiap kotak. Tekan Enter untuk pindah ke gap berikutnya. Klik "Check all answers" setelah selesai.'}
          </span>
        </div>
      )}
    </div>
  )
}
