'use client'

import { useState, useMemo } from 'react'
import { AWL_QUESTIONS, AWL_SUBLIST_INFO } from '@/lib/awl-exercises'
import type { AWLSublist, QuestionType } from '@/lib/awl-exercises'
import {
  CheckCircle2, XCircle, RotateCcw, Trophy,
  BookOpen, ChevronRight, Shuffle, Eye, EyeOff
} from 'lucide-react'
import { cn } from '@/lib/utils'

const SUBLIST_OPTIONS: (AWLSublist | 'all')[] = ['all', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const TYPE_LABELS: Record<QuestionType, string> = {
  gap_fill:         'Gap Fill',
  definition_match: 'Definition Match',
  word_form:        'Word Form',
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function AWLClient() {
  const [sublist, setSublist] = useState<AWLSublist | 'all'>('all')
  const [typeFilter, setTypeFilter] = useState<QuestionType | 'all'>('all')
  const [qIdx, setQIdx] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [showDef, setShowDef] = useState(false)
  const [score, setScore] = useState(0)
  const [total, setTotal] = useState(0)
  const [shuffleSeed, setShuffleSeed] = useState(0)

  const pool = useMemo(() => {
    let qs = AWL_QUESTIONS
    if (sublist !== 'all') qs = qs.filter(q => q.sublist === sublist)
    if (typeFilter !== 'all') qs = qs.filter(q => q.type === typeFilter)
    return shuffle(qs)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sublist, typeFilter, shuffleSeed])

  const q = pool[qIdx % Math.max(pool.length, 1)]

  const isCorrect = selected === q?.answer
  const checked = selected !== null

  function pick(opt: string) {
    if (checked) return
    setSelected(opt)
    if (opt === q.answer) setScore(s => s + 1)
    setTotal(t => t + 1)
  }

  function next() {
    setSelected(null)
    setShowDef(false)
    setQIdx(i => (i + 1) % pool.length)
  }

  function reset() {
    setSelected(null)
    setShowDef(false)
    setQIdx(0)
    setScore(0)
    setTotal(0)
    setShuffleSeed(s => s + 1)
  }

  if (!q) return (
    <div className="card p-6 text-center text-surface-400 text-sm">
      No exercises match the selected filters.
    </div>
  )

  const info = AWL_SUBLIST_INFO[q.sublist]
  const progress = ((qIdx % pool.length) + 1) / pool.length

  const renderedSentence = q.sentence
    ? q.sentence.replace('{{gap}}', '___')
    : null

  return (
    <div className="space-y-5 max-w-2xl">

      {/* Filters */}
      <div className="card p-4 space-y-3">
        {/* Sublist filter */}
        <div>
          <p className="text-xs font-semibold text-surface-500 uppercase tracking-wide mb-2">Sublist</p>
          <div className="flex flex-wrap gap-1.5">
            {SUBLIST_OPTIONS.map(sl => {
              const active = sublist === sl
              return (
                <button key={sl} onClick={() => { setSublist(sl); reset() }}
                  className={cn('badge border text-xs py-1 px-2.5 transition-all',
                    active
                      ? 'bg-brand-600 text-white border-brand-600'
                      : 'bg-surface-50 text-surface-600 border-surface-200 hover:border-surface-300')}>
                  {sl === 'all' ? 'All' : `SL${sl}`}
                </button>
              )
            })}
          </div>
          {sublist !== 'all' && (
            <p className="text-xs text-surface-400 mt-1.5">
              {AWL_SUBLIST_INFO[sublist].frequency} {AWL_SUBLIST_INFO[sublist].description}
            </p>
          )}
        </div>
        {/* Type filter */}
        <div>
          <p className="text-xs font-semibold text-surface-500 uppercase tracking-wide mb-2">Question Type</p>
          <div className="flex flex-wrap gap-1.5">
            {(['all', 'gap_fill', 'definition_match', 'word_form'] as const).map(t => {
              const active = typeFilter === t
              return (
                <button key={t} onClick={() => { setTypeFilter(t); reset() }}
                  className={cn('badge border text-xs py-1 px-2.5',
                    active
                      ? 'bg-surface-900 text-white border-surface-900'
                      : 'bg-surface-50 text-surface-600 border-surface-200 hover:border-surface-300')}>
                  {t === 'all' ? 'All types' : TYPE_LABELS[t]}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Progress + score */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1.5 rounded-full bg-surface-100 overflow-hidden">
          <div className="h-full rounded-full bg-brand-400 transition-all" style={{ width: `${progress * 100}%` }} />
        </div>
        <span className="text-xs text-surface-400">{(qIdx % pool.length) + 1}/{pool.length}</span>
        {total > 0 && (
          <div className="flex items-center gap-1.5">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-bold text-surface-900">{score}/{total}</span>
          </div>
        )}
        <button onClick={() => { reset() }} className="btn-ghost text-xs p-1.5" title="Shuffle">
          <Shuffle className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Question card */}
      <div className="card p-6 space-y-5">

        {/* Header */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="badge text-xs bg-brand-50 text-brand-700 border-brand-200 font-bold">
            AWL · SL{q.sublist}
          </span>
          <span className="badge text-xs bg-surface-100 text-surface-500">
            {TYPE_LABELS[q.type]}
          </span>
          <span className="badge text-xs bg-surface-50 text-surface-400">{q.domain}</span>
          <div className="ml-auto font-mono text-lg font-bold text-surface-900">{q.headword}</div>
        </div>

        {/* Sentence / prompt */}
        {q.type === 'gap_fill' || q.type === 'word_form' ? (
          <div className="rounded-xl bg-surface-50 border border-surface-200 px-5 py-4">
            <p className="text-xs text-surface-400 uppercase tracking-wide font-semibold mb-2">Complete the sentence</p>
            <p className="text-base text-surface-900 leading-relaxed font-medium">
              {renderedSentence}
            </p>
          </div>
        ) : (
          <div className="rounded-xl bg-surface-50 border border-surface-200 px-5 py-4">
            <p className="text-xs text-surface-400 uppercase tracking-wide font-semibold mb-2">
              Choose the best definition of:
            </p>
            <p className="text-2xl font-bold text-surface-900 font-mono">{q.headword}</p>
          </div>
        )}

        {/* Options */}
        <div className="space-y-2">
          {q.options.map((opt, i) => {
            const letters = ['A', 'B', 'C', 'D']
            const sel = selected === opt
            const correct = opt === q.answer
            const revealed = checked
            return (
              <button key={opt} onClick={() => pick(opt)}
                disabled={checked}
                className={cn(
                  'w-full text-left px-4 py-3 rounded-xl border text-sm flex items-start gap-3 transition-all',
                  !revealed && !sel && 'border-surface-200 hover:border-brand-300 hover:bg-brand-50',
                  !revealed && sel && 'border-brand-400 bg-brand-50',
                  revealed && correct && 'border-brand-400 bg-brand-50 text-brand-800',
                  revealed && sel && !correct && 'border-red-400 bg-red-50 text-red-700',
                  revealed && !sel && !correct && 'opacity-40 border-surface-100',
                )}>
                <span className={cn(
                  'w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0',
                  !revealed && 'bg-surface-100 text-surface-600',
                  revealed && correct && 'bg-brand-500 text-white',
                  revealed && sel && !correct && 'bg-red-500 text-white',
                  revealed && !sel && !correct && 'bg-surface-100 text-surface-400',
                )}>
                  {letters[i]}
                </span>
                <span className="flex-1 leading-relaxed">{opt}</span>
                {revealed && correct && <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />}
                {revealed && sel && !correct && <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />}
              </button>
            )
          })}
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
                {isCorrect ? 'Correct!' : `Correct answer: "${q.answer}"`}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-surface-400 flex-shrink-0" />
              <p className="text-xs text-surface-700 leading-relaxed">{q.explanation}</p>
            </div>
          </div>
        )}

        {/* Definition toggle */}
        <div className="flex items-center gap-3">
          {checked && (
            <button onClick={next} className="btn-primary text-sm">
              Next <ChevronRight className="w-4 h-4" />
            </button>
          )}
          <button onClick={() => setShowDef(d => !d)} className="btn-ghost text-xs ml-auto">
            {showDef ? <><EyeOff className="w-3.5 h-3.5" /> Hide</> : <><Eye className="w-3.5 h-3.5" /> Definition</>}
          </button>
        </div>

        {showDef && (
          <div className="rounded-xl bg-violet-50 border border-violet-200 px-4 py-3">
            <p className="text-xs font-semibold text-violet-600 uppercase tracking-wide mb-1">Definition</p>
            <p className="text-sm text-violet-900">{q.definition}</p>
          </div>
        )}
      </div>

      {/* Session stats */}
      {total >= 5 && (
        <div className="card p-4 flex items-center gap-4">
          <Trophy className="w-5 h-5 text-amber-500 flex-shrink-0" />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-semibold text-surface-900">Session accuracy</span>
              <span className="text-sm font-bold text-brand-600">{Math.round((score / total) * 100)}%</span>
            </div>
            <div className="h-2 rounded-full bg-surface-100 overflow-hidden">
              <div className="h-full rounded-full bg-brand-500 transition-all"
                style={{ width: `${(score / total) * 100}%` }} />
            </div>
          </div>
          <button onClick={reset} className="btn-ghost text-xs">
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </button>
        </div>
      )}

      <p className="text-xs text-surface-400">
        ✦ The Academic Word List (Coxhead, 2000) contains 570 word families covering ~10% of all words in academic texts. Sublist 1 is the most frequent — start there.
      </p>
    </div>
  )
}
