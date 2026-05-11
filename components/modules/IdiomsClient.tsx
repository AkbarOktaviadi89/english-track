'use client'

import { useState, useTransition } from 'react'
import { createClient } from '@/lib/supabase/client'
import { IDIOMS, PHRASAL_VERBS, IDIOM_CATEGORIES } from '@/lib/idioms-phrasal'
import type { IdiomCategory, Register } from '@/lib/idioms-phrasal'
import { CEFR_META } from '@/types'
import type { CEFRLevel } from '@/types'
import { Search, BookMarked, Check, ChevronDown, ChevronUp, Lightbulb, ArrowLeftRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import toast from 'react-hot-toast'

interface Props {
  savedPhrases: Set<string>
  userId: string
}

type Tab = 'idioms' | 'phrasal'

const REGISTER_COLORS: Record<Register, { bg: string; text: string; label: string }> = {
  formal:   { bg: '#eff6ff', text: '#1d4ed8', label: 'Formal' },
  informal: { bg: '#fef3c7', text: '#92400e', label: 'Informal' },
  neutral:  { bg: '#f0fdf4', text: '#166534', label: 'Neutral' },
}

const LEVEL_OPTIONS: (CEFRLevel | 'all')[] = ['all', 'B1', 'B2', 'C1']

// Get unique base verbs for phrasal verb filter
const BASE_VERBS = ['all', ...Array.from(new Set(PHRASAL_VERBS.map(p => p.verb))).sort()]
const IDIOM_CAT_OPTIONS: (IdiomCategory | 'all')[] = ['all', ...Object.keys(IDIOM_CATEGORIES) as IdiomCategory[]]

export default function IdiomsClient({ savedPhrases: initialSaved, userId }: Props) {
  const [tab, setTab] = useState<Tab>('idioms')
  const [saved, setSaved] = useState<Set<string>>(initialSaved)
  const [search, setSearch] = useState('')
  const [filterLevel, setFilterLevel] = useState<CEFRLevel | 'all'>('all')
  const [filterCat, setFilterCat] = useState<IdiomCategory | 'all'>('all')
  const [filterVerb, setFilterVerb] = useState('all')
  const [filterRegister, setFilterRegister] = useState<Register | 'all'>('all')
  const [expanded, setExpanded] = useState<string | null>(null)
  const [, startTransition] = useTransition()
  const supabase = createClient()

  function toggle(id: string) {
    setExpanded(prev => prev === id ? null : id)
  }

  async function saveToPhaseBank(phrase: string, meaning: string, example: string, level: CEFRLevel) {
    if (saved.has(phrase.toLowerCase())) { toast('Already in Phrase Bank', { icon: '✓' }); return }
    setSaved(prev => new Set([...Array.from(prev), phrase.toLowerCase()]))
    startTransition(async () => {
      const { error } = await supabase.from('phrases').insert({
        user_id: userId,
        phrase,
        meaning,
        example,
        category: tab === 'idioms' ? 'academic' : 'academic',
        level,
        mastered: false,
      })
      if (error && error.code !== '23505') {
        setSaved(prev => { const s = new Set(prev); s.delete(phrase.toLowerCase()); return s })
        toast.error('Failed to save')
      } else {
        toast.success('Saved to Phrase Bank!')
      }
    })
  }

  // Filter idioms
  const filteredIdioms = IDIOMS.filter(i => {
    if (filterLevel !== 'all' && i.level !== filterLevel) return false
    if (filterCat !== 'all' && i.category !== filterCat) return false
    if (filterRegister !== 'all' && i.register !== filterRegister) return false
    if (search) {
      const q = search.toLowerCase()
      return i.phrase.toLowerCase().includes(q) || i.meaning.toLowerCase().includes(q)
    }
    return true
  })

  // Filter phrasal verbs
  const filteredPV = PHRASAL_VERBS.filter(p => {
    if (filterLevel !== 'all' && p.level !== filterLevel) return false
    if (filterVerb !== 'all' && p.verb !== filterVerb) return false
    if (filterRegister !== 'all' && p.register !== filterRegister) return false
    if (search) {
      const q = search.toLowerCase()
      return p.phrasal.toLowerCase().includes(q) || p.meaning.toLowerCase().includes(q)
    }
    return true
  })

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-2 mb-5">
        {(['idioms', 'phrasal'] as Tab[]).map(t => (
          <button key={t} onClick={() => { setTab(t); setSearch(''); setExpanded(null) }}
            className={cn('px-5 py-2.5 rounded-xl text-sm font-medium border transition-all',
              tab === t ? 'bg-surface-900 text-white border-surface-900' : 'border-surface-200 text-surface-600 hover:border-surface-300')}>
            {t === 'idioms' ? `💬 Idioms (${IDIOMS.length})` : `🔗 Phrasal Verbs (${PHRASAL_VERBS.length})`}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="card p-4 mb-5 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
          <input className="input pl-9" placeholder={tab === 'idioms' ? 'Search idioms…' : 'Search phrasal verbs…'}
            value={search} onChange={e => setSearch(e.target.value)} />
        </div>

        {/* Level filter */}
        <div className="flex gap-1.5 flex-wrap">
          {LEVEL_OPTIONS.map(l => {
            const active = filterLevel === l
            if (l === 'all') return (
              <button key="all" onClick={() => setFilterLevel('all')}
                className={cn('badge border text-xs py-1', active ? 'bg-surface-900 text-white border-surface-900' : 'bg-surface-100 text-surface-600 border-surface-200')}>
                All levels
              </button>
            )
            const m = CEFR_META[l]
            return (
              <button key={l} onClick={() => setFilterLevel(active ? 'all' : l)}
                className="badge border text-xs py-1"
                style={active ? { backgroundColor: m.color, color: '#fff', borderColor: m.color } : { backgroundColor: m.bgColor, color: m.color, borderColor: m.borderColor }}>
                {l}
              </button>
            )
          })}
          {/* Register filter */}
          {(['all', 'formal', 'neutral', 'informal'] as (Register | 'all')[]).map(r => {
            const active = filterRegister === r
            const rc = r !== 'all' ? REGISTER_COLORS[r] : null
            return (
              <button key={r} onClick={() => setFilterRegister(active ? 'all' : r)}
                className={cn('badge border text-xs py-1 capitalize',
                  active && !rc ? 'bg-surface-900 text-white border-surface-900' : !rc ? 'bg-surface-100 text-surface-600 border-surface-200' : '')}
                style={rc && active ? { backgroundColor: rc.text, color: '#fff', borderColor: rc.text } : rc ? { backgroundColor: rc.bg, color: rc.text, borderColor: rc.text + '50' } : {}}>
                {r === 'all' ? 'All registers' : r}
              </button>
            )
          })}
        </div>

        {/* Category (idioms) or Base verb (phrasal) */}
        {tab === 'idioms' && (
          <div className="flex gap-1.5 flex-wrap">
            {IDIOM_CAT_OPTIONS.map(c => {
              const active = filterCat === c
              return (
                <button key={c} onClick={() => setFilterCat(active ? 'all' : c)}
                  className={cn('badge border text-xs py-1', active ? 'bg-surface-800 text-white border-surface-800' : 'bg-surface-100 text-surface-600 border-surface-200')}>
                  {c === 'all' ? 'All topics' : IDIOM_CATEGORIES[c]}
                </button>
              )
            })}
          </div>
        )}
        {tab === 'phrasal' && (
          <div className="flex gap-1.5 flex-wrap">
            {BASE_VERBS.map(v => {
              const active = filterVerb === v
              return (
                <button key={v} onClick={() => setFilterVerb(active ? 'all' : v)}
                  className={cn('badge border text-xs py-1 font-mono', active ? 'bg-surface-800 text-white border-surface-800' : 'bg-surface-100 text-surface-600 border-surface-200')}>
                  {v === 'all' ? 'All verbs' : v}
                </button>
              )
            })}
          </div>
        )}
      </div>

      <p className="text-xs text-surface-400 mb-3">
        {tab === 'idioms' ? filteredIdioms.length : filteredPV.length} results
      </p>

      {/* IDIOMS LIST */}
      {tab === 'idioms' && (
        <div className="space-y-2">
          {filteredIdioms.map(item => {
            const isOpen = expanded === item.id
            const isSaved = saved.has(item.phrase.toLowerCase())
            const rc = REGISTER_COLORS[item.register]
            const lm = CEFR_META[item.level]
            return (
              <div key={item.id} className="card overflow-hidden">
                <div className="flex items-center gap-3 p-3.5">
                  <button onClick={() => toggle(item.id)} className="flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-surface-400" /> : <ChevronDown className="w-4 h-4 text-surface-400" />}
                  </button>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                      <span className="font-semibold text-surface-900 text-sm italic">"{item.phrase}"</span>
                      <span className="badge text-xs" style={{ backgroundColor: lm.bgColor, color: lm.color }}>{item.level}</span>
                      <span className="badge text-xs" style={{ backgroundColor: rc.bg, color: rc.text }}>{rc.label}</span>
                    </div>
                    <p className="text-xs text-surface-600">{item.meaning}</p>
                  </div>
                  <button onClick={() => saveToPhaseBank(item.phrase, item.meaning, item.example, item.level)}
                    disabled={isSaved}
                    className={cn('flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border flex-shrink-0 transition-all',
                      isSaved ? 'bg-brand-50 border-brand-200 text-brand-600 cursor-default' : 'border-surface-200 text-surface-500 hover:border-brand-300 hover:text-brand-600 hover:bg-brand-50')}>
                    {isSaved ? <><Check className="w-3 h-3" /></> : <><BookMarked className="w-3 h-3" /></>}
                  </button>
                </div>
                {isOpen && (
                  <div className="border-t border-surface-200 px-4 py-3 bg-surface-100/50 space-y-2">
                    <p className="text-xs text-surface-500 italic border-l-2 border-surface-300 pl-2.5">"{item.example}"</p>
                    {item.tip && (
                      <div className="flex items-start gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-amber-800">{item.tip}</p>
                      </div>
                    )}
                    <p className="text-xs text-surface-400">Topic: {IDIOM_CATEGORIES[item.category]}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* PHRASAL VERBS LIST */}
      {tab === 'phrasal' && (
        <div className="space-y-2">
          {filteredPV.map(item => {
            const isOpen = expanded === item.id
            const isSaved = saved.has(item.phrasal.toLowerCase())
            const rc = REGISTER_COLORS[item.register]
            const lm = CEFR_META[item.level]
            return (
              <div key={item.id} className="card overflow-hidden">
                <div className="flex items-center gap-3 p-3.5">
                  <button onClick={() => toggle(item.id)} className="flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-surface-400" /> : <ChevronDown className="w-4 h-4 text-surface-400" />}
                  </button>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                      <span className="font-semibold text-surface-900 text-sm font-mono">{item.phrasal}</span>
                      <span className="badge text-xs" style={{ backgroundColor: lm.bgColor, color: lm.color }}>{item.level}</span>
                      <span className="badge text-xs" style={{ backgroundColor: rc.bg, color: rc.text }}>{rc.label}</span>
                      {item.separable && (
                        <span className="badge text-xs bg-violet-50 text-violet-600" title="This phrasal verb can be separated: 'put the meeting off'">
                          <ArrowLeftRight className="w-2.5 h-2.5" /> sep.
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-surface-600">{item.meaning}</p>
                  </div>
                  <button onClick={() => saveToPhaseBank(item.phrasal, item.meaning, item.example, item.level)}
                    disabled={isSaved}
                    className={cn('flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border flex-shrink-0 transition-all',
                      isSaved ? 'bg-brand-50 border-brand-200 text-brand-600 cursor-default' : 'border-surface-200 text-surface-500 hover:border-brand-300 hover:text-brand-600 hover:bg-brand-50')}>
                    {isSaved ? <><Check className="w-3 h-3" /></> : <><BookMarked className="w-3 h-3" /></>}
                  </button>
                </div>
                {isOpen && (
                  <div className="border-t border-surface-200 px-4 py-3 bg-surface-100/50 space-y-2">
                    <p className="text-xs text-surface-500 italic border-l-2 border-surface-300 pl-2.5">"{item.example}"</p>
                    {item.tip && (
                      <div className="flex items-start gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-amber-800">{item.tip}</p>
                      </div>
                    )}
                    <p className="text-xs text-surface-400">
                      Base verb: <strong className="font-mono">{item.verb}</strong> ·{' '}
                      {item.separable ? '"put the meeting off" or "put off the meeting"' : 'Cannot be separated'}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
