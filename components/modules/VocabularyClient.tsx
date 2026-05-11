'use client'

import { useState, useTransition } from 'react'
import { createClient } from '@/lib/supabase/client'
import { CEFR_META } from '@/types'
import type { CEFRLevel, VocabWord } from '@/types'
import { Plus, Check, Trash2, X, BookMarked, Search, Brain, Trophy, RefreshCw } from 'lucide-react'
import { cn } from '@/lib/utils'
import toast from 'react-hot-toast'

type Category = 'academic' | 'general' | 'business' | 'ielts' | 'toefl'
type FilterStatus = 'all' | 'learning' | 'mastered'

const CATEGORIES: Category[] = ['academic', 'general', 'business', 'ielts', 'toefl']
const LEVELS: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

const CATEGORY_COLORS: Record<Category, string> = {
  academic: '#7c3aed',
  general: '#2563eb',
  business: '#d97706',
  ielts: '#259775',
  toefl: '#db2777',
}

interface Props {
  initialWords: VocabWord[]
  userId: string
}

interface AddForm {
  word: string
  definition: string
  example: string
  level: CEFRLevel
  category: Category
}

const EMPTY_FORM: AddForm = { word: '', definition: '', example: '', level: 'B1', category: 'general' }

interface QuizState {
  queue: VocabWord[]
  index: number
  choices: string[]
  selected: string | null
  results: { word: string; correct: boolean }[]
  done: boolean
}

function buildChoices(correct: VocabWord, all: VocabWord[]): string[] {
  const others = all.filter(w => w.id !== correct.id)
  const wrong = others.sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.definition)
  return [correct.definition, ...wrong].sort(() => Math.random() - 0.5)
}

export default function VocabularyClient({ initialWords, userId }: Props) {
  const [words, setWords] = useState<VocabWord[]>(initialWords)
  const [showAdd, setShowAdd] = useState(false)
  const [form, setForm] = useState<AddForm>(EMPTY_FORM)
  const [saving, setSaving] = useState(false)
  const [search, setSearch] = useState('')
  const [filterLevel, setFilterLevel] = useState<CEFRLevel | 'all'>('all')
  const [filterCat, setFilterCat] = useState<Category | 'all'>('all')
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all')
  const [quiz, setQuiz] = useState<QuizState | null>(null)
  const [, startTransition] = useTransition()
  const supabase = createClient()

  function startQuiz() {
    if (words.length < 4) { toast.error('Add at least 4 words to start a quiz'); return }
    const queue = [...words].sort(() => Math.random() - 0.5).slice(0, Math.min(10, words.length))
    setQuiz({
      queue,
      index: 0,
      choices: buildChoices(queue[0], words),
      selected: null,
      results: [],
      done: false,
    })
  }

  function selectAnswer(choice: string) {
    if (!quiz || quiz.selected !== null) return
    const current = quiz.queue[quiz.index]
    const correct = choice === current.definition
    setQuiz(q => q ? { ...q, selected: choice } : null)
    setTimeout(() => {
      setQuiz(q => {
        if (!q) return null
        const newResults = [...q.results, { word: current.word, correct }]
        const next = q.index + 1
        if (next >= q.queue.length) return { ...q, results: newResults, done: true, selected: choice }
        return {
          ...q,
          index: next,
          choices: buildChoices(q.queue[next], words),
          selected: null,
          results: newResults,
        }
      })
    }, 900)
  }

  const filtered = words.filter(w => {
    if (filterLevel !== 'all' && w.level !== filterLevel) return false
    if (filterCat !== 'all' && w.category !== filterCat) return false
    if (filterStatus === 'mastered' && !w.mastered) return false
    if (filterStatus === 'learning' && w.mastered) return false
    if (search && !w.word.toLowerCase().includes(search.toLowerCase()) &&
        !w.definition.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  const masteredCount = words.filter(w => w.mastered).length

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault()
    if (!form.word.trim() || !form.definition.trim()) {
      toast.error('Word and definition are required')
      return
    }
    setSaving(true)
    try {
      const { data, error } = await supabase
        .from('vocabulary')
        .insert({
          user_id: userId,
          word: form.word.trim(),
          definition: form.definition.trim(),
          example: form.example.trim(),
          level: form.level,
          category: form.category,
          mastered: false,
          review_count: 0,
        })
        .select('id, word, definition, example, level, category, mastered, review_count, next_review')
        .single()

      if (error) {
        if (error.code === '23505') toast.error('This word already exists in your list')
        else throw error
      } else if (data) {
        setWords(prev => [data as VocabWord, ...prev])
        setForm(EMPTY_FORM)
        setShowAdd(false)
        toast.success(`"${data.word}" added to your vocabulary!`)
      }
    } catch {
      toast.error('Failed to add word — please try again')
    } finally {
      setSaving(false)
    }
  }

  function toggleMastered(id: string) {
    const word = words.find(w => w.id === id)
    if (!word) return
    const newVal = !word.mastered
    setWords(prev => prev.map(w => w.id === id ? { ...w, mastered: newVal } : w))
    startTransition(async () => {
      const { error } = await supabase
        .from('vocabulary')
        .update({ mastered: newVal, review_count: word.review_count + (newVal ? 1 : 0) })
        .eq('id', id)
        .eq('user_id', userId)
      if (error) {
        setWords(prev => prev.map(w => w.id === id ? { ...w, mastered: !newVal } : w))
        toast.error('Failed to update — please try again')
      } else {
        toast.success(newVal ? 'Marked as mastered!' : 'Moved back to learning')
      }
    })
  }

  function deleteWord(id: string, word: string) {
    if (!confirm(`Delete "${word}" from your vocabulary?`)) return
    setWords(prev => prev.filter(w => w.id !== id))
    startTransition(async () => {
      const { error } = await supabase
        .from('vocabulary')
        .delete()
        .eq('id', id)
        .eq('user_id', userId)
      if (error) {
        toast.error('Failed to delete — please try again')
      } else {
        toast.success(`"${word}" removed`)
      }
    })
  }

  return (
    <div>
      {/* Stats + Add button */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4 text-sm text-surface-500">
          <span><span className="font-semibold text-surface-900">{words.length}</span> words</span>
          <span className="text-surface-300">·</span>
          <span><span className="font-semibold text-brand-600">{masteredCount}</span> mastered</span>
          <span className="text-surface-300">·</span>
          <span><span className="font-semibold text-surface-700">{words.length - masteredCount}</span> learning</span>
        </div>
        <div className="flex gap-2">
          <button onClick={startQuiz} className="btn-secondary">
            <Brain className="w-4 h-4" /> Quiz
          </button>
          <button onClick={() => setShowAdd(true)} className="btn-primary">
            <Plus className="w-4 h-4" /> Add Word
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="card p-4 mb-6 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
          <input
            className="input pl-9"
            placeholder="Search words or definitions…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setFilterLevel('all')} className={cn('badge border', filterLevel === 'all' ? 'bg-surface-900 text-white border-surface-900' : 'bg-white text-surface-600 border-surface-200')}>All levels</button>
          {LEVELS.map(l => {
            const m = CEFR_META[l]
            const active = filterLevel === l
            return (
              <button key={l} onClick={() => setFilterLevel(active ? 'all' : l)}
                className="badge border"
                style={active ? { backgroundColor: m.color, color: '#fff', borderColor: m.color } : { borderColor: m.borderColor, color: m.color, backgroundColor: m.bgColor }}>
                {l}
              </button>
            )
          })}
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setFilterCat('all')} className={cn('badge border capitalize', filterCat === 'all' ? 'bg-surface-900 text-white border-surface-900' : 'bg-white text-surface-600 border-surface-200')}>All categories</button>
          {CATEGORIES.map(cat => {
            const active = filterCat === cat
            const color = CATEGORY_COLORS[cat]
            return (
              <button key={cat} onClick={() => setFilterCat(active ? 'all' : cat)}
                className="badge border capitalize"
                style={active ? { backgroundColor: color, color: '#fff', borderColor: color } : { color, borderColor: `${color}40`, backgroundColor: `${color}12` }}>
                {cat}
              </button>
            )
          })}
        </div>
        <div className="flex gap-2">
          {(['all', 'learning', 'mastered'] as FilterStatus[]).map(s => (
            <button key={s} onClick={() => setFilterStatus(s)}
              className={cn('badge border capitalize', filterStatus === s ? 'bg-surface-900 text-white border-surface-900' : 'bg-white text-surface-600 border-surface-200')}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Word grid */}
      {filtered.length === 0 ? (
        <div className="card p-12 text-center">
          <BookMarked className="w-10 h-10 text-surface-300 mx-auto mb-3" />
          <p className="text-surface-500 text-sm">{words.length === 0 ? 'No words yet — add your first word above.' : 'No words match your filters.'}</p>
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(w => {
            const levelMeta = CEFR_META[w.level]
            const catColor = CATEGORY_COLORS[w.category as Category] ?? '#475569'
            return (
              <div key={w.id} className={cn('card p-4 flex flex-col gap-3 transition-all', w.mastered && 'opacity-75')}>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    <span className="badge" style={{ backgroundColor: levelMeta.bgColor, color: levelMeta.color }}>{w.level}</span>
                    <span className="badge capitalize" style={{ backgroundColor: `${catColor}12`, color: catColor }}>{w.category}</span>
                  </div>
                  <button onClick={() => deleteWord(w.id, w.word)} className="text-surface-300 hover:text-red-400 transition-colors flex-shrink-0">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div>
                  <p className="font-semibold text-surface-900 text-base">{w.word}</p>
                  <p className="text-sm text-surface-600 mt-0.5">{w.definition}</p>
                  {w.example && (
                    <p className="text-xs text-surface-400 mt-1.5 italic border-l-2 border-surface-200 pl-2">"{w.example}"</p>
                  )}
                </div>
                <button
                  onClick={() => toggleMastered(w.id)}
                  className={cn(
                    'flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-lg border transition-all mt-auto',
                    w.mastered
                      ? 'bg-brand-50 border-brand-200 text-brand-700 hover:bg-brand-100'
                      : 'bg-surface-50 border-surface-200 text-surface-500 hover:border-brand-300 hover:text-brand-600 hover:bg-brand-50'
                  )}>
                  <Check className={cn('w-3.5 h-3.5', w.mastered ? 'text-brand-600' : 'text-surface-400')} />
                  {w.mastered ? 'Mastered' : 'Mark as mastered'}
                </button>
              </div>
            )
          })}
        </div>
      )}

      {/* Quiz Modal */}
      {quiz && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="card w-full max-w-md p-6 shadow-xl animate-in">
            {!quiz.done ? (
              <>
                {/* Quiz header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-surface-500">{quiz.index + 1} / {quiz.queue.length}</span>
                  <button onClick={() => setQuiz(null)} className="text-surface-400 hover:text-surface-700"><X className="w-5 h-5" /></button>
                </div>
                <div className="progress-bar mb-5">
                  <div className="progress-fill bg-brand-500" style={{ width: `${((quiz.index) / quiz.queue.length) * 100}%` }} />
                </div>
                <h3 className="text-2xl font-bold text-surface-900 text-center mb-2">{quiz.queue[quiz.index].word}</h3>
                <p className="text-sm text-surface-400 text-center mb-6">Choose the correct definition</p>
                <div className="space-y-2.5">
                  {quiz.choices.map((choice, i) => {
                    const current = quiz.queue[quiz.index]
                    const isCorrect = choice === current.definition
                    const isSelected = quiz.selected === choice
                    const revealed = quiz.selected !== null
                    return (
                      <button key={i} onClick={() => selectAnswer(choice)} disabled={revealed}
                        className={cn(
                          'w-full text-left px-4 py-3 rounded-xl border text-sm transition-all',
                          !revealed && 'border-surface-200 hover:border-brand-300 hover:bg-brand-50 dark:hover:bg-brand-950/20',
                          revealed && isCorrect && 'border-brand-400 bg-brand-50 dark:bg-brand-950/30 text-brand-700 dark:text-brand-400',
                          revealed && isSelected && !isCorrect && 'border-red-400 bg-red-50 dark:bg-red-950/20 text-red-600',
                          revealed && !isSelected && !isCorrect && 'opacity-40'
                        )}>
                        {choice}
                      </button>
                    )
                  })}
                </div>
              </>
            ) : (
              <>
                {/* Quiz results */}
                <div className="text-center mb-5">
                  <Trophy className="w-10 h-10 text-amber-400 mx-auto mb-3" />
                  <h3 className="text-xl font-semibold text-surface-900">Quiz complete!</h3>
                  <p className="text-surface-500 text-sm mt-1">
                    {quiz.results.filter(r => r.correct).length} / {quiz.results.length} correct
                  </p>
                </div>
                <div className="space-y-1 mb-5 max-h-40 overflow-y-auto scrollbar-thin">
                  {quiz.results.map((r, i) => (
                    <div key={i} className={cn('flex items-center justify-between text-sm px-3 py-1.5 rounded-lg',
                      r.correct ? 'bg-brand-50 dark:bg-brand-950/30 text-brand-700 dark:text-brand-400' : 'bg-red-50 dark:bg-red-950/20 text-red-600')}>
                      <span>{r.word}</span>
                      <span>{r.correct ? '✓' : '✗'}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setQuiz(null)} className="btn-secondary flex-1 justify-center"><X className="w-4 h-4" /> Close</button>
                  <button onClick={startQuiz} className="btn-primary flex-1 justify-center"><RefreshCw className="w-4 h-4" /> Play again</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Add Word Modal */}
      {showAdd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="card w-full max-w-md p-6 shadow-xl animate-in">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold text-surface-900">Add New Word</h2>
              <button onClick={() => { setShowAdd(false); setForm(EMPTY_FORM) }} className="text-surface-400 hover:text-surface-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="label">Word <span className="text-red-400">*</span></label>
                <input className="input" placeholder="e.g. perseverance" value={form.word} onChange={e => setForm(p => ({ ...p, word: e.target.value }))} autoFocus />
              </div>
              <div>
                <label className="label">Definition <span className="text-red-400">*</span></label>
                <textarea className="input resize-none" rows={2} placeholder="What does it mean?" value={form.definition} onChange={e => setForm(p => ({ ...p, definition: e.target.value }))} />
              </div>
              <div>
                <label className="label">Example sentence</label>
                <input className="input" placeholder="e.g. Her perseverance paid off in the end." value={form.example} onChange={e => setForm(p => ({ ...p, example: e.target.value }))} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="label">Level</label>
                  <select className="input" value={form.level} onChange={e => setForm(p => ({ ...p, level: e.target.value as CEFRLevel }))}>
                    {LEVELS.map(l => <option key={l} value={l}>{l} – {CEFR_META[l].label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="label">Category</label>
                  <select className="input" value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value as Category }))}>
                    {CATEGORIES.map(c => <option key={c} value={c} className="capitalize">{c}</option>)}
                  </select>
                </div>
              </div>
              <div className="flex gap-3 pt-1">
                <button type="button" onClick={() => { setShowAdd(false); setForm(EMPTY_FORM) }} className="btn-secondary flex-1">Cancel</button>
                <button type="submit" disabled={saving} className="btn-primary flex-1">
                  {saving ? 'Saving…' : 'Add Word'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
