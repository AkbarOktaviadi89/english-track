'use client'

import { useState, useTransition } from 'react'
import { createClient } from '@/lib/supabase/client'
import { PRESET_PHRASES, PHRASE_CATEGORIES } from '@/lib/phrase-data'
import type { PhraseCategory } from '@/lib/phrase-data'
import type { CEFRLevel } from '@/types'
import { CEFR_META } from '@/types'
import { Plus, Check, Trash2, X, Search, BookOpen, Download } from 'lucide-react'
import { cn } from '@/lib/utils'
import toast from 'react-hot-toast'

interface SavedPhrase {
  id: string
  phrase: string
  meaning: string
  example: string
  category: string
  level: string
  mastered: boolean
}

interface Props {
  savedPhrases: SavedPhrase[]
  userId: string
}

const LEVELS: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

export default function PhraseBankClient({ savedPhrases, userId }: Props) {
  const [saved, setSaved] = useState<SavedPhrase[]>(savedPhrases)
  const [tab, setTab] = useState<'saved' | 'browse'>('browse')
  const [search, setSearch] = useState('')
  const [filterCat, setFilterCat] = useState<PhraseCategory | 'all'>('all')
  const [filterLevel, setFilterLevel] = useState<CEFRLevel | 'all'>('all')
  const [showAdd, setShowAdd] = useState(false)
  const [form, setForm] = useState({ phrase: '', meaning: '', example: '', category: 'academic' as PhraseCategory, level: 'B2' as CEFRLevel })
  const [saving, setSaving] = useState(false)
  const [, startTransition] = useTransition()
  const supabase = createClient()

  const savedIds = new Set(saved.map(p => p.phrase))

  // Filter preset phrases
  const filteredPreset = PRESET_PHRASES.filter(p => {
    if (filterCat !== 'all' && p.category !== filterCat) return false
    if (filterLevel !== 'all' && p.level !== filterLevel) return false
    if (search && !p.phrase.toLowerCase().includes(search.toLowerCase()) &&
        !p.meaning.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  // Filter saved phrases
  const filteredSaved = saved.filter(p => {
    if (filterCat !== 'all' && p.category !== filterCat) return false
    if (filterLevel !== 'all' && p.level !== filterLevel) return false
    if (search && !p.phrase.toLowerCase().includes(search.toLowerCase()) &&
        !p.meaning.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  async function savePhrase(phrase: typeof PRESET_PHRASES[0]) {
    if (savedIds.has(phrase.phrase)) {
      toast('Already saved', { icon: '✓' })
      return
    }
    try {
      const { data, error } = await supabase.from('phrases').insert({
        user_id: userId,
        phrase: phrase.phrase,
        meaning: phrase.meaning,
        example: phrase.example,
        category: phrase.category,
        level: phrase.level,
        mastered: false,
      }).select().single()
      if (error) throw error
      setSaved(prev => [data as SavedPhrase, ...prev])
      toast.success('Phrase saved!')
    } catch {
      toast.error('Failed to save phrase')
    }
  }

  async function handleAddCustom(e: React.FormEvent) {
    e.preventDefault()
    if (!form.phrase.trim() || !form.meaning.trim()) {
      toast.error('Phrase and meaning are required')
      return
    }
    setSaving(true)
    try {
      const { data, error } = await supabase.from('phrases').insert({
        user_id: userId, ...form,
        phrase: form.phrase.trim(),
        meaning: form.meaning.trim(),
        example: form.example.trim(),
        mastered: false,
      }).select().single()
      if (error) {
        if (error.code === '23505') toast.error('This phrase is already saved')
        else throw error
      } else {
        setSaved(prev => [data as SavedPhrase, ...prev])
        setForm({ phrase: '', meaning: '', example: '', category: 'academic', level: 'B2' })
        setShowAdd(false)
        toast.success('Custom phrase added!')
      }
    } catch {
      toast.error('Failed to save')
    } finally {
      setSaving(false)
    }
  }

  function toggleMastered(id: string) {
    const p = saved.find(x => x.id === id)
    if (!p) return
    const newVal = !p.mastered
    setSaved(prev => prev.map(x => x.id === id ? { ...x, mastered: newVal } : x))
    startTransition(async () => {
      await supabase.from('phrases').update({ mastered: newVal }).eq('id', id).eq('user_id', userId)
    })
  }

  function deletePhrase(id: string) {
    setSaved(prev => prev.filter(x => x.id !== id))
    startTransition(async () => {
      await supabase.from('phrases').delete().eq('id', id).eq('user_id', userId)
      toast.success('Phrase removed')
    })
  }

  const cats = Object.entries(PHRASE_CATEGORIES) as [PhraseCategory, { label: string; color: string }][]

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-2 mb-5">
        <button onClick={() => setTab('browse')}
          className={cn('px-4 py-2 rounded-xl text-sm font-medium transition-all border',
            tab === 'browse' ? 'bg-surface-900 text-white border-surface-900' : 'border-surface-200 text-surface-600 hover:border-surface-300')}>
          Browse ({PRESET_PHRASES.length})
        </button>
        <button onClick={() => setTab('saved')}
          className={cn('px-4 py-2 rounded-xl text-sm font-medium transition-all border',
            tab === 'saved' ? 'bg-surface-900 text-white border-surface-900' : 'border-surface-200 text-surface-600 hover:border-surface-300')}>
          My Phrases ({saved.length})
        </button>
        <button onClick={() => setShowAdd(true)} className="btn-primary ml-auto">
          <Plus className="w-4 h-4" /> Custom
        </button>
      </div>

      {/* Filters */}
      <div className="card p-4 mb-5 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
          <input className="input pl-9" placeholder="Search phrases or meanings…"
            value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <div className="flex flex-wrap gap-1.5">
          <button onClick={() => setFilterCat('all')}
            className={cn('badge border text-xs', filterCat === 'all' ? 'bg-surface-900 text-white border-surface-900' : 'bg-surface-100 text-surface-600 border-surface-200')}>
            All categories
          </button>
          {cats.map(([key, meta]) => (
            <button key={key} onClick={() => setFilterCat(filterCat === key ? 'all' : key)}
              className="badge border text-xs"
              style={filterCat === key
                ? { backgroundColor: meta.color, color: '#fff', borderColor: meta.color }
                : { color: meta.color, borderColor: meta.color + '40', backgroundColor: meta.color + '10' }}>
              {meta.label}
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

      {/* BROWSE TAB */}
      {tab === 'browse' && (
        <div className="space-y-2.5">
          {filteredPreset.length === 0 && (
            <div className="card p-10 text-center text-surface-400 text-sm">No phrases match your filters.</div>
          )}
          {filteredPreset.map((p, i) => {
            const catMeta = PHRASE_CATEGORIES[p.category]
            const lvlMeta = CEFR_META[p.level]
            const alreadySaved = savedIds.has(p.phrase)
            return (
              <div key={i} className="card p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="badge text-xs" style={{ backgroundColor: lvlMeta.bgColor, color: lvlMeta.color }}>{p.level}</span>
                      <span className="badge text-xs" style={{ backgroundColor: catMeta.color + '15', color: catMeta.color }}>{catMeta.label}</span>
                    </div>
                    <p className="font-semibold text-surface-900 text-sm italic">"{p.phrase}"</p>
                    <p className="text-xs text-surface-600 mt-1">{p.meaning}</p>
                    {p.example && <p className="text-xs text-surface-400 mt-1.5 leading-relaxed">{p.example}</p>}
                  </div>
                  <button onClick={() => savePhrase(p)} disabled={alreadySaved}
                    className={cn('flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium flex-shrink-0 border transition-all',
                      alreadySaved
                        ? 'bg-brand-50 border-brand-200 text-brand-600 cursor-default'
                        : 'border-surface-200 text-surface-600 hover:border-brand-400 hover:text-brand-600 hover:bg-brand-50')}>
                    {alreadySaved ? <><Check className="w-3 h-3" /> Saved</> : <><Download className="w-3 h-3" /> Save</>}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* SAVED TAB */}
      {tab === 'saved' && (
        <div className="space-y-2.5">
          {filteredSaved.length === 0 && (
            <div className="card p-10 text-center">
              <BookOpen className="w-8 h-8 text-surface-300 mx-auto mb-2" />
              <p className="text-surface-500 text-sm">
                {saved.length === 0 ? 'No phrases saved yet — browse and click Save on any phrase.' : 'No phrases match your filters.'}
              </p>
            </div>
          )}
          {filteredSaved.map(p => {
            const catMeta = PHRASE_CATEGORIES[p.category as PhraseCategory] ?? { label: p.category, color: '#475569' }
            const lvlMeta = CEFR_META[p.level as CEFRLevel] ?? CEFR_META['B2']
            return (
              <div key={p.id} className={cn('card p-4 transition-all', p.mastered && 'opacity-70')}>
                <div className="flex items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="badge text-xs" style={{ backgroundColor: lvlMeta.bgColor, color: lvlMeta.color }}>{p.level}</span>
                      <span className="badge text-xs" style={{ backgroundColor: catMeta.color + '15', color: catMeta.color }}>{catMeta.label}</span>
                      {p.mastered && <span className="badge text-xs bg-brand-50 text-brand-600">✓ Mastered</span>}
                    </div>
                    <p className="font-semibold text-surface-900 text-sm italic">"{p.phrase}"</p>
                    <p className="text-xs text-surface-600 mt-1">{p.meaning}</p>
                    {p.example && <p className="text-xs text-surface-400 mt-1.5 leading-relaxed">{p.example}</p>}
                  </div>
                  <div className="flex flex-col gap-1.5 flex-shrink-0">
                    <button onClick={() => toggleMastered(p.id)}
                      className={cn('flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all',
                        p.mastered ? 'bg-brand-50 border-brand-200 text-brand-600' : 'border-surface-200 text-surface-500 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600')}>
                      <Check className="w-3 h-3" /> {p.mastered ? 'Mastered' : 'Master'}
                    </button>
                    <button onClick={() => deletePhrase(p.id)}
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border border-surface-200 text-surface-400 hover:border-red-300 hover:text-red-500 hover:bg-red-50 transition-all">
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Add Custom Modal */}
      {showAdd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="card w-full max-w-md p-6 shadow-xl animate-in">
            <div className="flex items-center justify-between mb-4">
              <h2 className="section-title text-base">Add Custom Phrase</h2>
              <button onClick={() => setShowAdd(false)} className="text-surface-400 hover:text-surface-700"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleAddCustom} className="space-y-3.5">
              <div>
                <label className="label">Phrase <span className="text-red-400">*</span></label>
                <input className="input" placeholder='e.g. "It could be argued that"'
                  value={form.phrase} onChange={e => setForm(p => ({ ...p, phrase: e.target.value }))} autoFocus />
              </div>
              <div>
                <label className="label">Meaning / When to use <span className="text-red-400">*</span></label>
                <input className="input" placeholder="e.g. Introduces a view with some distance"
                  value={form.meaning} onChange={e => setForm(p => ({ ...p, meaning: e.target.value }))} />
              </div>
              <div>
                <label className="label">Example sentence</label>
                <input className="input" placeholder="Full sentence using the phrase"
                  value={form.example} onChange={e => setForm(p => ({ ...p, example: e.target.value }))} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="label">Category</label>
                  <select className="input" value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value as PhraseCategory }))}>
                    {cats.map(([key, meta]) => <option key={key} value={key}>{meta.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="label">Level</label>
                  <select className="input" value={form.level} onChange={e => setForm(p => ({ ...p, level: e.target.value as CEFRLevel }))}>
                    {LEVELS.map(l => <option key={l} value={l}>{l} – {CEFR_META[l].label}</option>)}
                  </select>
                </div>
              </div>
              <div className="flex gap-3 pt-1">
                <button type="button" onClick={() => setShowAdd(false)} className="btn-secondary flex-1">Cancel</button>
                <button type="submit" disabled={saving} className="btn-primary flex-1">{saving ? 'Saving…' : 'Add Phrase'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
