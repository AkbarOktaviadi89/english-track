'use client'

import { useState, useRef } from 'react'
import { TRANSFORMATIONS } from '@/lib/sentence-transformations'
import { CEFR_META } from '@/types'
import type { CEFRLevel } from '@/types'
import {
  CheckCircle2, XCircle, RotateCcw, Trophy,
  Lightbulb, Eye, EyeOff, ChevronRight, ChevronLeft, BookOpen
} from 'lucide-react'
import { cn } from '@/lib/utils'

const LEVELS: CEFRLevel[] = ['B1', 'B2', 'C1']

const CATEGORY_LABELS: Record<string, string> = {
  passive:          'Passive Voice',
  reported_speech:  'Reported Speech',
  conditionals:     'Conditionals',
  comparatives:     'Comparatives',
  causative:        'Causative',
  modal_verbs:      'Modal Verbs',
  relative_clauses: 'Relative Clauses',
  inversion:        'Inversion',
  gerund_infinitive:'Gerund / Infinitive',
  phrasal_verbs:    'Phrasal Verbs',
}

function normalise(s: string) {
  return s.trim().toLowerCase()
    .replace(/['']/g, "'")
    .replace(/\s+/g, ' ')
    .replace(/[^\w\s']/g, '')
}

export default function SentenceTransformationClient() {
  const [filterLevel, setFilterLevel] = useState<CEFRLevel | 'all'>('all')
  const [idx, setIdx] = useState(0)
  const [input, setInput] = useState('')
  const [checked, setChecked] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [scores, setScores] = useState<Record<string, boolean>>({})
  const inputRef = useRef<HTMLInputElement>(null)

  const pool = TRANSFORMATIONS.filter(t => filterLevel === 'all' || t.level === filterLevel)
  const item = pool[idx % pool.length]

  if (!item) return null

  const lm = CEFR_META[item.level]
  const isCorrect = normalise(input) === normalise(item.answer)
  const attempted = Object.keys(scores).length
  const correct = Object.values(scores).filter(Boolean).length

  function check() {
    if (!input.trim()) return
    setChecked(true)
    setScores(prev => ({ ...prev, [item.id]: isCorrect }))
  }

  function next() {
    const newIdx = (idx + 1) % pool.length
    setIdx(newIdx)
    setInput('')
    setChecked(false)
    setShowHint(false)
    setShowExplanation(false)
    setTimeout(() => inputRef.current?.focus(), 50)
  }

  function prev() {
    const newIdx = (idx - 1 + pool.length) % pool.length
    setIdx(newIdx)
    setInput('')
    setChecked(false)
    setShowHint(false)
    setShowExplanation(false)
  }

  function handleFilterChange(l: CEFRLevel | 'all') {
    setFilterLevel(l)
    setIdx(0)
    setInput('')
    setChecked(false)
    setShowHint(false)
    setShowExplanation(false)
    setScores({})
  }

  const wordCount = input.trim() ? input.trim().split(/\s+/).length : 0
  const overLimit = wordCount > item.maxWords

  return (
    <div className="space-y-5 max-w-2xl">

      {/* Level filter + score */}
      <div className="flex items-center gap-3 flex-wrap">
        {(['all', ...LEVELS] as (CEFRLevel | 'all')[]).map(l => {
          const active = filterLevel === l
          if (l === 'all') return (
            <button key="all" onClick={() => handleFilterChange('all')}
              className={cn('badge border text-xs py-1 px-3', active
                ? 'bg-surface-900 text-white border-surface-900'
                : 'bg-surface-100 text-surface-600 border-surface-200')}>
              All levels
            </button>
          )
          const m = CEFR_META[l]
          return (
            <button key={l} onClick={() => handleFilterChange(l)}
              className="badge border text-xs py-1 px-3"
              style={active
                ? { backgroundColor: m.color, color: '#fff', borderColor: m.color }
                : { backgroundColor: m.bgColor, color: m.color, borderColor: m.borderColor }}>
              {l}
            </button>
          )
        })}
        {attempted > 0 && (
          <div className="ml-auto flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-semibold text-surface-900">{correct}/{attempted}</span>
            <span className="text-xs text-surface-400">this session</span>
          </div>
        )}
      </div>

      {/* Progress */}
      <div className="flex items-center gap-2 text-xs text-surface-400">
        <span>{(idx % pool.length) + 1} / {pool.length}</span>
        <div className="flex-1 h-1.5 rounded-full bg-surface-100 overflow-hidden">
          <div className="h-full rounded-full bg-brand-400 transition-all"
            style={{ width: `${(((idx % pool.length) + 1) / pool.length) * 100}%` }} />
        </div>
      </div>

      {/* Main card */}
      <div className="card p-6 space-y-5">

        {/* Header */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="badge font-bold text-xs"
            style={{ backgroundColor: lm.bgColor, color: lm.color, borderColor: lm.borderColor }}>
            {item.level} · {lm.label}
          </span>
          <span className="badge text-xs bg-surface-100 text-surface-500">
            {CATEGORY_LABELS[item.category] ?? item.category}
          </span>
          <span className="badge text-xs bg-violet-50 text-violet-600 ml-auto">
            max {item.maxWords} words
          </span>
        </div>

        {/* Original sentence */}
        <div>
          <p className="text-xs font-semibold text-surface-400 uppercase tracking-wide mb-1.5">Original</p>
          <p className="text-base text-surface-900 font-medium leading-relaxed">{item.original}</p>
        </div>

        {/* Keyword */}
        <div className="flex items-center gap-3">
          <p className="text-xs font-semibold text-surface-400 uppercase tracking-wide">Keyword</p>
          <span className="px-3 py-1 rounded-lg bg-surface-900 text-white text-sm font-bold tracking-wider">
            {item.keyword}
          </span>
        </div>

        {/* Rewrite area */}
        <div>
          <p className="text-xs font-semibold text-surface-400 uppercase tracking-wide mb-2">Rewrite</p>
          <div className="rounded-xl border border-surface-200 bg-surface-50 p-4 space-y-3">
            {/* Full sentence reconstruction */}
            <div className="text-sm text-surface-700 leading-relaxed">
              {item.prefix && <span>{item.prefix} </span>}
              <input
                ref={inputRef}
                value={input}
                onChange={e => { setInput(e.target.value); setChecked(false) }}
                onKeyDown={e => { if (e.key === 'Enter' && !checked) check() }}
                disabled={checked}
                placeholder={`…up to ${item.maxWords} words…`}
                className={cn(
                  'inline px-2 py-0.5 rounded-lg border text-sm font-medium outline-none transition-all min-w-[160px] w-48 text-center',
                  !checked && 'border-surface-300 bg-white focus:border-brand-400',
                  checked && isCorrect && 'border-brand-400 bg-brand-50 text-brand-800',
                  checked && !isCorrect && 'border-red-400 bg-red-50 text-red-700',
                )}
              />
              {item.suffix && <span> {item.suffix}</span>}
            </div>
            {/* Word count warning */}
            {input.trim() && (
              <p className={cn('text-xs', overLimit ? 'text-red-500' : 'text-surface-400')}>
                {wordCount} word{wordCount !== 1 ? 's' : ''} {overLimit ? `— exceeds ${item.maxWords}-word limit` : ''}
              </p>
            )}
          </div>
        </div>

        {/* Feedback */}
        {checked && (
          <div className={cn('rounded-xl border p-4 space-y-2',
            isCorrect ? 'bg-brand-50 border-brand-200' : 'bg-red-50 border-red-200')}>
            <div className="flex items-center gap-2">
              {isCorrect
                ? <CheckCircle2 className="w-5 h-5 text-brand-600" />
                : <XCircle className="w-5 h-5 text-red-500" />}
              <span className="font-semibold text-sm text-surface-900">
                {isCorrect ? 'Correct!' : 'Not quite.'}
              </span>
            </div>
            {!isCorrect && (
              <p className="text-sm text-surface-700">
                Model answer: <span className="font-semibold text-surface-900">
                  {item.prefix && `${item.prefix} `}{item.answer}{item.suffix && ` ${item.suffix}`}
                </span>
              </p>
            )}
          </div>
        )}

        {/* Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          {!checked && (
            <button onClick={check} disabled={!input.trim() || overLimit}
              className="btn-primary text-sm">
              Check answer
            </button>
          )}
          {checked && (
            <button onClick={next} className="btn-primary text-sm">
              Next <ChevronRight className="w-4 h-4" />
            </button>
          )}
          <button onClick={() => setShowHint(h => !h)}
            className="btn-ghost text-xs">
            <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
            {showHint ? 'Hide hint' : 'Show hint'}
          </button>
          {checked && (
            <button onClick={() => setShowExplanation(e => !e)}
              className="btn-ghost text-xs">
              {showExplanation ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              {showExplanation ? 'Hide' : 'Explanation'}
            </button>
          )}
          <div className="ml-auto flex items-center gap-1">
            <button onClick={prev} className="btn-ghost text-xs p-1.5">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={next} className="btn-ghost text-xs p-1.5">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hint */}
        {showHint && item.tip && (
          <div className="rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 flex items-start gap-2">
            <Lightbulb className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800 font-medium">{item.tip}</p>
          </div>
        )}

        {/* Explanation */}
        {checked && showExplanation && (
          <div className="rounded-xl bg-surface-50 border border-surface-200 px-4 py-3 flex items-start gap-2">
            <BookOpen className="w-4 h-4 text-surface-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-surface-700 leading-relaxed">{item.explanation}</p>
          </div>
        )}
      </div>

      {/* Session summary */}
      {attempted >= 5 && (
        <div className="card p-4">
          <p className="text-xs font-semibold text-surface-500 mb-2">Session Score</p>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-2 rounded-full bg-surface-100 overflow-hidden">
              <div className="h-full rounded-full bg-brand-500 transition-all"
                style={{ width: `${(correct / attempted) * 100}%` }} />
            </div>
            <span className="text-sm font-bold text-surface-900 w-16 text-right">
              {Math.round((correct / attempted) * 100)}%
            </span>
          </div>
          <p className="text-xs text-surface-400 mt-1">{correct} correct out of {attempted} attempted</p>
        </div>
      )}

      {/* Tip */}
      <p className="text-xs text-surface-400 flex items-start gap-1.5">
        <span className="text-surface-300 flex-shrink-0">✦</span>
        Use the keyword exactly as given (do not change its form). Your answer should not change the meaning of the original sentence. Press Enter to check.
      </p>
    </div>
  )
}
