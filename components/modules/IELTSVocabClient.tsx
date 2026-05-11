'use client'

import { useState, useTransition } from 'react'
import { createClient } from '@/lib/supabase/client'
import type { IELTSTopic, IELTSWord } from '@/lib/ielts-vocabulary'
import { CEFR_META } from '@/types'
import type { CEFRLevel } from '@/types'
import { Download, Check, Search, BookMarked, ChevronDown, ChevronUp, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import toast from 'react-hot-toast'

interface Props {
  topics: IELTSTopic[]
  savedWords: Set<string>
  userId: string
}

const LEVELS: CEFRLevel[] = ['B1', 'B2', 'C1']

export default function IELTSVocabClient({ topics, savedWords: initialSaved, userId }: Props) {
  const [saved, setSaved] = useState<Set<string>>(new Set(initialSaved))
  const [activeTopic, setActiveTopic] = useState(topics[0].id)
  const [search, setSearch] = useState('')
  const [filterLevel, setFilterLevel] = useState<CEFRLevel | 'all'>('all')
  const [expandedWords, setExpandedWords] = useState<Set<string>>(new Set())
  const [importing, setImporting] = useState(false)
  const [, startTransition] = useTransition()
  const supabase = createClient()

  const topic = topics.find(t => t.id === activeTopic)!

  const filtered = topic.words.filter(w => {
    if (filterLevel !== 'all' && w.level !== filterLevel) return false
    if (search) {
      const q = search.toLowerCase()
      return w.word.toLowerCase().includes(q) || w.definition.toLowerCase().includes(q)
    }
    return true
  })

  const savedCount = topic.words.filter(w => saved.has(w.word.toLowerCase())).length
  const allSaved = savedCount === topic.words.length

  async function saveWord(word: IELTSWord) {
    if (saved.has(word.word.toLowerCase())) return
    setSaved(prev => new Set([...prev, word.word.toLowerCase()]))
    startTransition(async () => {
      const { error } = await supabase.from('vocabulary').insert({
        user_id: userId,
        word: word.word,
        definition: word.definition,
        example: word.example,
        level: word.level,
        category: 'ielts',
        mastered: false,
        review_count: 0,
      })
      if (error && error.code !== '23505') {
        setSaved(prev => { const s = new Set(prev); s.delete(word.word.toLowerCase()); return s })
        toast.error(`Failed to save "${word.word}"`)
      }
    })
  }

  async function importAll() {
    const toImport = topic.words.filter(w => !saved.has(w.word.toLowerCase()))
    if (toImport.length === 0) { toast('All words already saved', { icon: '✓' }); return }
    setImporting(true)
    try {
      const rows = toImport.map(w => ({
        user_id: userId,
        word: w.word,
        definition: w.definition,
        example: w.example,
        level: w.level,
        category: 'ielts',
        mastered: false,
        review_count: 0,
      }))
      const { error } = await supabase.from('vocabulary').upsert(rows, { onConflict: 'user_id,word', ignoreDuplicates: true })
      if (error) throw error
      setSaved(prev => new Set([...prev, ...toImport.map(w => w.word.toLowerCase())]))
      toast.success(`${toImport.length} words added to Vocabulary!`)
    } catch {
      toast.error('Import failed — please try again')
    } finally {
      setImporting(false)
    }
  }

  function toggleExpand(word: string) {
    setExpandedWords(prev => {
      const s = new Set(prev)
      s.has(word) ? s.delete(word) : s.add(word)
      return s
    })
  }

  return (
    <div>
      {/* Topic grid */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-6">
        {topics.map(t => {
          const tSaved = t.words.filter(w => saved.has(w.word.toLowerCase())).length
          const pct = Math.round((tSaved / t.words.length) * 100)
          const active = t.id === activeTopic
          return (
            <button key={t.id} onClick={() => { setActiveTopic(t.id); setSearch(''); setFilterLevel('all') }}
              className={cn('p-2.5 rounded-xl border text-center transition-all',
                active ? 'border-current shadow-card' : 'border-surface-200 bg-white hover:border-surface-300')}
              style={active ? { backgroundColor: t.color + '15', borderColor: t.color } : {}}>
              <div className="text-xl mb-1">{t.emoji}</div>
              <p className="text-xs font-medium text-surface-800 leading-tight">{t.title}</p>
              <div className="progress-bar mt-1.5">
                <div className="progress-fill" style={{ width: `${pct}%`, backgroundColor: active ? t.color : '#aee3cb' }} />
              </div>
              <p className="text-xs text-surface-400 mt-0.5">{tSaved}/{t.words.length}</p>
            </button>
          )
        })}
      </div>

      {/* Topic header */}
      <div className="card p-5 mb-5" style={{ borderLeft: `4px solid ${topic.color}` }}>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{topic.emoji}</span>
              <h2 className="text-lg font-semibold text-surface-900">{topic.title}</h2>
            </div>
            <p className="text-sm text-surface-500">{topic.description}</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="text-center">
              <p className="text-2xl font-bold" style={{ color: topic.color }}>{savedCount}</p>
              <p className="text-xs text-surface-400">/ {topic.words.length} saved</p>
            </div>
            <button onClick={importAll} disabled={importing || allSaved}
              className={cn('flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-all',
                allSaved
                  ? 'bg-brand-50 border-brand-200 text-brand-700 cursor-default'
                  : 'text-white border-transparent')}
              style={!allSaved ? { backgroundColor: topic.color } : {}}>
              {importing ? <Loader2 className="w-4 h-4 animate-spin" /> : allSaved ? <><Check className="w-4 h-4" /> All saved</> : <><Download className="w-4 h-4" /> Import all</>}
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-4 flex-wrap">
        <div className="relative flex-1 min-w-48">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
          <input className="input pl-9 py-2 text-sm" placeholder="Search words…"
            value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <div className="flex gap-1.5">
          <button onClick={() => setFilterLevel('all')}
            className={cn('badge border text-xs py-1.5 px-3', filterLevel === 'all' ? 'bg-surface-900 text-white border-surface-900' : 'bg-white text-surface-600 border-surface-200')}>
            All
          </button>
          {LEVELS.map(l => {
            const m = CEFR_META[l]
            return (
              <button key={l} onClick={() => setFilterLevel(filterLevel === l ? 'all' : l)}
                className="badge border text-xs py-1.5 px-3"
                style={filterLevel === l
                  ? { backgroundColor: m.color, color: '#fff', borderColor: m.color }
                  : { backgroundColor: m.bgColor, color: m.color, borderColor: m.borderColor }}>
                {l}
              </button>
            )
          })}
        </div>
      </div>

      <p className="text-xs text-surface-400 mb-3">{filtered.length} words</p>

      {/* Word list */}
      <div className="space-y-2">
        {filtered.map(word => {
          const isSaved = saved.has(word.word.toLowerCase())
          const isExpanded = expandedWords.has(word.word)
          const lm = CEFR_META[word.level]
          return (
            <div key={word.word} className={cn('card overflow-hidden transition-all', isSaved && 'opacity-75')}>
              <div className="flex items-center gap-3 p-3.5">
                {/* Expand toggle */}
                <button onClick={() => toggleExpand(word.word)} className="flex-shrink-0">
                  {isExpanded
                    ? <ChevronUp className="w-4 h-4 text-surface-400" />
                    : <ChevronDown className="w-4 h-4 text-surface-400" />}
                </button>

                {/* Word info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-surface-900 text-sm">{word.word}</span>
                    <span className="text-xs text-surface-400 italic">{word.partOfSpeech}</span>
                    <span className="badge text-xs" style={{ backgroundColor: lm.bgColor, color: lm.color }}>{word.level}</span>
                  </div>
                  <p className="text-xs text-surface-600 mt-0.5 line-clamp-1">{word.definition}</p>
                </div>

                {/* Save button */}
                <button onClick={() => saveWord(word)} disabled={isSaved}
                  className={cn('flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border flex-shrink-0 transition-all',
                    isSaved
                      ? 'bg-brand-50 border-brand-200 text-brand-700 cursor-default'
                      : 'border-surface-200 text-surface-600 hover:border-brand-400 hover:text-brand-600 hover:bg-brand-50')}>
                  {isSaved ? <><Check className="w-3 h-3" /> Saved</> : <><BookMarked className="w-3 h-3" /> Save</>}
                </button>
              </div>

              {/* Expanded detail */}
              {isExpanded && (
                <div className="border-t border-surface-200 px-4 py-3 bg-surface-100/50 space-y-2">
                  <p className="text-sm text-surface-700 leading-relaxed">{word.definition}</p>
                  <p className="text-xs text-surface-500 italic border-l-2 border-surface-300 pl-2.5">
                    "{word.example}"
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
