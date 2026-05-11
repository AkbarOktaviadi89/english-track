'use client'

import { useState, useTransition } from 'react'
import { createClient } from '@/lib/supabase/client'
import { COLLOCATIONS, COLLOC_GROUPS } from '@/lib/collocations'
import type { CollocCategory } from '@/lib/collocations'
import { CEFR_META } from '@/types'
import type { CEFRLevel } from '@/types'
import { BookMarked, Check, Search, XCircle, ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import toast from 'react-hot-toast'

interface Props {
  savedPhrases: Set<string>
  userId: string
}

const CAT_TABS: { id: CollocCategory | 'all'; label: string }[] = [
  { id: 'all',      label: 'All' },
  { id: 'verb_noun', label: 'Verb + Noun' },
  { id: 'adj_noun',  label: 'Adj + Noun' },
  { id: 'adv_adj',   label: 'Adv + Adj' },
  { id: 'verb_adv',  label: 'Verb + Adv' },
]

const LEVELS: CEFRLevel[] = ['A2', 'B1', 'B2', 'C1']

// Verb+Noun base words in preferred order
const VERB_GROUPS = ['make', 'do', 'have', 'take', 'give', 'get', 'bring', 'come', 'carry', 'run']

export default function CollocationsClient({ savedPhrases: initialSaved, userId }: Props) {
  const [saved, setSaved] = useState<Set<string>>(initialSaved)
  const [search, setSearch] = useState('')
  const [activeTab, setActiveTab] = useState<CollocCategory | 'all'>('verb_noun')
  const [activeGroup, setActiveGroup] = useState<string>('make')
  const [filterLevel, setFilterLevel] = useState<CEFRLevel | 'all'>('all')
  const [expanded, setExpanded] = useState<string | null>(null)
  const [, startTransition] = useTransition()
  const supabase = createClient()

  // Filter logic
  const filtered = COLLOCATIONS.filter(c => {
    if (activeTab !== 'all' && c.category !== activeTab) return false
    if (activeTab === 'verb_noun' && !search && c.baseWord !== activeGroup) return false
    if (activeTab === 'adj_noun' && c.baseWord !== 'adj') return false
    if ((activeTab === 'adv_adj' || activeTab === 'verb_adv') && c.baseWord !== 'adv') return false
    if (filterLevel !== 'all' && c.level !== filterLevel) return false
    if (search) {
      const q = search.toLowerCase()
      return c.phrase.toLowerCase().includes(q) || c.meaning.toLowerCase().includes(q)
    }
    return true
  })

  async function saveColloc(phrase: string, meaning: string, example: string, level: CEFRLevel) {
    if (saved.has(phrase.toLowerCase())) { toast('Already saved', { icon: '✓' }); return }
    setSaved(prev => new Set([...Array.from(prev), phrase.toLowerCase()]))
    startTransition(async () => {
      const { error } = await supabase.from('phrases').insert({
        user_id: userId, phrase, meaning, example,
        category: 'academic', level, mastered: false,
      })
      if (error && error.code !== '23505') {
        setSaved(prev => { const s = new Set(Array.from(prev)); s.delete(phrase.toLowerCase()); return s })
        toast.error('Failed to save')
      } else {
        toast.success('Saved to Phrase Bank!')
      }
    })
  }

  return (
    <div>
      {/* Category tabs */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-1 scrollbar-thin">
        {CAT_TABS.map(tab => (
          <button key={tab.id}
            onClick={() => { setActiveTab(tab.id); setSearch(''); setActiveGroup('make') }}
            className={cn('flex-shrink-0 px-4 py-2 rounded-xl border text-sm font-medium transition-all',
              activeTab === tab.id ? 'bg-surface-900 text-white border-surface-900' : 'border-surface-200 text-surface-600 hover:border-surface-300')}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search + level filter */}
      <div className="card p-4 mb-5 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
          <input className="input pl-9" placeholder="Search collocations…"
            value={search} onChange={e => { setSearch(e.target.value); if (e.target.value) setActiveTab('all') }} />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          <button onClick={() => setFilterLevel('all')}
            className={cn('badge border text-xs py-1', filterLevel === 'all' ? 'bg-surface-900 text-white border-surface-900' : 'bg-surface-100 text-surface-600 border-surface-200')}>
            All levels
          </button>
          {LEVELS.map(l => {
            const m = CEFR_META[l]
            return (
              <button key={l} onClick={() => setFilterLevel(filterLevel === l ? 'all' : l)}
                className="badge border text-xs py-1"
                style={filterLevel === l ? { backgroundColor: m.color, color: '#fff', borderColor: m.color } : { backgroundColor: m.bgColor, color: m.color, borderColor: m.borderColor }}>
                {l}
              </button>
            )
          })}
        </div>
      </div>

      {/* Verb group selector (only for verb_noun tab without search) */}
      {activeTab === 'verb_noun' && !search && (
        <div className="flex gap-2 mb-4 flex-wrap">
          {VERB_GROUPS.map(v => {
            const g = COLLOC_GROUPS[v]
            const count = COLLOCATIONS.filter(c => c.category === 'verb_noun' && c.baseWord === v && (filterLevel === 'all' || c.level === filterLevel)).length
            const active = activeGroup === v
            return (
              <button key={v} onClick={() => setActiveGroup(v)}
                className={cn('flex items-center gap-1.5 px-3.5 py-2 rounded-xl border text-sm font-bold transition-all',
                  active ? 'shadow-card' : 'border-surface-200 hover:border-surface-300')}
                style={active ? { backgroundColor: g.color + '15', color: g.color, borderColor: g.color + '50' } : {}}>
                {v}
                <span className="text-xs font-normal opacity-60">({count})</span>
              </button>
            )
          })}
        </div>
      )}

      {/* Make vs Do banner */}
      {activeTab === 'verb_noun' && !search && (activeGroup === 'make' || activeGroup === 'do') && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 mb-4 text-xs text-amber-800">
          <strong>Quick rule:</strong> Use <strong>make</strong> for creating, deciding, or producing something. Use <strong>do</strong> for activities, work, or tasks. Many common mistakes happen here!
        </div>
      )}

      <p className="text-xs text-surface-400 mb-3">{filtered.length} collocations</p>

      {/* Results */}
      {filtered.length === 0 && (
        <div className="card p-10 text-center text-surface-400 text-sm">No collocations match your filters.</div>
      )}

      <div className="space-y-2">
        {filtered.map(c => {
          const isSaved = saved.has(c.phrase.toLowerCase())
          const isExpanded = expanded === c.id
          const lm = CEFR_META[c.level]
          const grp = COLLOC_GROUPS[c.baseWord] ?? COLLOC_GROUPS['adj']

          return (
            <div key={c.id} className="card overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3">
                {/* Expand */}
                <button onClick={() => setExpanded(isExpanded ? null : c.id)} className="flex-shrink-0">
                  {isExpanded ? <ChevronUp className="w-4 h-4 text-surface-400" /> : <ChevronDown className="w-4 h-4 text-surface-400" />}
                </button>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <span className="font-bold text-surface-900 text-sm">{c.phrase}</span>
                    <span className="badge text-xs" style={{ backgroundColor: grp.color + '15', color: grp.color }}>
                      {grp.label}
                    </span>
                    <span className="badge text-xs" style={{ backgroundColor: lm.bgColor, color: lm.color }}>{c.level}</span>
                  </div>
                  <p className="text-xs text-surface-600">{c.meaning}</p>
                  {c.wrong && (
                    <p className="text-xs text-red-500 mt-0.5 flex items-center gap-1">
                      <XCircle className="w-3 h-3 flex-shrink-0" /> Not: <span className="line-through">{c.wrong}</span>
                    </p>
                  )}
                </div>

                {/* Save */}
                <button onClick={() => saveColloc(c.phrase, c.meaning, c.example, c.level)}
                  disabled={isSaved}
                  className={cn('flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border flex-shrink-0 transition-all',
                    isSaved ? 'bg-brand-50 border-brand-200 text-brand-600 cursor-default' : 'border-surface-200 text-surface-500 hover:border-brand-300 hover:text-brand-600 hover:bg-brand-50')}>
                  {isSaved ? <Check className="w-3 h-3" /> : <BookMarked className="w-3 h-3" />}
                </button>
              </div>

              {/* Expanded example */}
              {isExpanded && (
                <div className="border-t border-surface-200 px-4 py-3 bg-surface-100/50">
                  <p className="text-xs text-surface-500 italic leading-relaxed">"{c.example}"</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
