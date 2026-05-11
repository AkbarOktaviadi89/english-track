'use client'

import { useState } from 'react'
import { GRAMMAR_REFERENCE, GRAMMAR_CATEGORIES } from '@/lib/grammar-reference'
import { GRAMMAR_EXERCISES } from '@/lib/grammar-exercises'
import type { GrammarCategory, GrammarEntry } from '@/lib/grammar-reference'
import { CEFR_META } from '@/types'
import type { CEFRLevel } from '@/types'
import { Search, ChevronDown, ChevronUp, AlertCircle, CheckCircle2, Dumbbell } from 'lucide-react'
import { cn } from '@/lib/utils'
import GrammarExerciseModal from '@/components/modules/GrammarExerciseModal'

const LEVELS: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

export default function GrammarClient() {
  const [search, setSearch] = useState('')
  const [filterCat, setFilterCat] = useState<GrammarCategory | 'all'>('all')
  const [practiceEntry, setPracticeEntry] = useState<GrammarEntry | null>(null)
  const [filterLevel, setFilterLevel] = useState<CEFRLevel | 'all'>('all')
  const [expanded, setExpanded] = useState<string | null>(null)

  const filtered = GRAMMAR_REFERENCE.filter(r => {
    if (filterCat !== 'all' && r.category !== filterCat) return false
    if (filterLevel !== 'all' && r.level !== filterLevel) return false
    if (search) {
      const q = search.toLowerCase()
      return r.title.toLowerCase().includes(q) ||
        r.explanation.toLowerCase().includes(q) ||
        r.rules.some(x => x.toLowerCase().includes(q))
    }
    return true
  })

  const cats = Object.entries(GRAMMAR_CATEGORIES) as [GrammarCategory, string][]

  return (
    <div>
      {/* Filters */}
      <div className="card p-4 mb-5 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
          <input className="input pl-9" placeholder="Search grammar rules…"
            value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <div className="flex flex-wrap gap-1.5">
          <button onClick={() => setFilterCat('all')}
            className={cn('badge border text-xs py-1', filterCat === 'all' ? 'bg-surface-900 text-white border-surface-900' : 'bg-surface-100 text-surface-600 border-surface-200')}>
            All topics
          </button>
          {cats.map(([key, label]) => (
            <button key={key} onClick={() => setFilterCat(filterCat === key ? 'all' : key)}
              className={cn('badge border text-xs py-1', filterCat === key ? 'bg-surface-800 text-white border-surface-800' : 'text-surface-600 border-surface-200 hover:border-surface-400')}>
              {label}
            </button>
          ))}
        </div>
        <div className="flex gap-1.5 flex-wrap">
          <button onClick={() => setFilterLevel('all')}
            className={cn('badge border text-xs', filterLevel === 'all' ? 'bg-surface-900 text-white border-surface-900' : 'bg-surface-100 text-surface-600 border-surface-200')}>
            All levels
          </button>
          {LEVELS.map(l => {
            const m = CEFR_META[l]
            return (
              <button key={l} onClick={() => setFilterLevel(filterLevel === l ? 'all' : l)}
                className="badge border text-xs"
                style={filterLevel === l
                  ? { backgroundColor: m.color, color: '#fff', borderColor: m.color }
                  : { backgroundColor: m.bgColor, color: m.color, borderColor: m.borderColor }}>
                {l}
              </button>
            )
          })}
        </div>
      </div>

      <p className="text-xs text-surface-400 mb-3">{filtered.length} rule{filtered.length !== 1 ? 's' : ''} found</p>

      {/* Grammar entries */}
      <div className="space-y-2.5">
        {filtered.length === 0 && (
          <div className="card p-10 text-center text-surface-400 text-sm">No grammar rules match your search.</div>
        )}
        {filtered.map(entry => {
          const isOpen = expanded === entry.id
          const lm = CEFR_META[entry.level]
          const catLabel = GRAMMAR_CATEGORIES[entry.category]
          return (
            <div key={entry.id} className="card overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-2 p-4">
                <button
                  onClick={() => setExpanded(isOpen ? null : entry.id)}
                  className="flex-1 flex items-center gap-3 hover:bg-surface-100 -m-1 p-1 rounded-xl transition-colors text-left min-w-0">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="badge text-xs" style={{ backgroundColor: lm.bgColor, color: lm.color }}>{entry.level}</span>
                      <span className="badge text-xs bg-surface-100 text-surface-600">{catLabel}</span>
                      {GRAMMAR_EXERCISES[entry.id]?.length > 0 && (
                        <span className="badge text-xs bg-violet-50 text-violet-600">
                          {GRAMMAR_EXERCISES[entry.id].length} exercises
                        </span>
                      )}
                    </div>
                    <p className="font-semibold text-surface-900 text-sm">{entry.title}</p>
                    {!isOpen && <p className="text-xs text-surface-500 mt-0.5 line-clamp-1">{entry.explanation}</p>}
                  </div>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-surface-400 flex-shrink-0" />
                    : <ChevronDown className="w-4 h-4 text-surface-400 flex-shrink-0" />}
                </button>
                {GRAMMAR_EXERCISES[entry.id]?.length > 0 && (
                  <button
                    onClick={() => setPracticeEntry(entry)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-violet-600 text-white hover:bg-violet-700 transition-colors flex-shrink-0">
                    <Dumbbell className="w-3.5 h-3.5" /> Practice
                  </button>
                )}
              </div>

              {/* Expanded content */}
              {isOpen && (
                <div className="border-t border-surface-200 p-5 space-y-5">
                  {/* Formula */}
                  {entry.formula && (
                    <div className="rounded-xl bg-surface-100 px-4 py-3">
                      <p className="text-xs font-semibold text-surface-500 uppercase tracking-wide mb-1">Formula</p>
                      <pre className="text-sm font-mono text-surface-800 whitespace-pre-wrap">{entry.formula}</pre>
                    </div>
                  )}

                  {/* Explanation */}
                  <div>
                    <p className="text-xs font-semibold text-surface-500 uppercase tracking-wide mb-2">Explanation</p>
                    <p className="text-sm text-surface-700 leading-relaxed">{entry.explanation}</p>
                  </div>

                  {/* Rules */}
                  <div>
                    <p className="text-xs font-semibold text-surface-500 uppercase tracking-wide mb-2">Key Rules</p>
                    <ul className="space-y-2">
                      {entry.rules.map((rule, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold text-brand-700">{i + 1}</span>
                          <span className="text-sm text-surface-700">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Examples */}
                  <div>
                    <p className="text-xs font-semibold text-surface-500 uppercase tracking-wide mb-2">Examples</p>
                    <div className="space-y-2">
                      {entry.examples.map((ex, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-surface-700 italic">{ex}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Common mistakes */}
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                    <div className="flex items-center gap-1.5 mb-2">
                      <AlertCircle className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                      <p className="text-xs font-semibold text-red-700 uppercase tracking-wide">Common Mistakes</p>
                    </div>
                    <div className="space-y-1.5">
                      {entry.mistakes.map((m, i) => (
                        <p key={i} className="text-sm text-red-800 font-mono leading-snug">{m}</p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Exercise modal */}
      {practiceEntry && (
        <GrammarExerciseModal
          entry={practiceEntry}
          onClose={() => setPracticeEntry(null)}
        />
      )}
    </div>
  )
}
