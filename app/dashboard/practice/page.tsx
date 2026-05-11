'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { Loader2, Plus, Clock, BookOpen, Headphones, Mic, PenLine, Layers, Braces } from 'lucide-react'
import { SKILL_META } from '@/types'
import type { Skill } from '@/types'
import { cn } from '@/lib/utils'

const CATEGORIES = [
  'GENERAL', 'IELTS', 'TOEFL', 'PTE', 'TOEIC', 'DUOLINGO', 'CAMBRIDGE',
  'VOCAB', 'SPEAKING_PRACTICE', 'LISTENING_IMMERSION',
]

const SKILL_ICONS: Record<Skill, React.ReactNode> = {
  listening:  <Headphones className="w-4 h-4" />,
  reading:    <BookOpen className="w-4 h-4" />,
  writing:    <PenLine className="w-4 h-4" />,
  speaking:   <Mic className="w-4 h-4" />,
  vocabulary: <Layers className="w-4 h-4" />,
  grammar:    <Braces className="w-4 h-4" />,
}

const QUICK_DURATIONS = [15, 30, 45, 60, 90, 120]

export default function PracticePage() {
  const [category, setCategory] = useState('IELTS')
  const [skill, setSkill] = useState<Skill>('listening')
  const [duration, setDuration] = useState(30)
  const [notes, setNotes] = useState('')
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const skills = Object.keys(SKILL_META) as Skill[]

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!notes.trim()) { toast.error('Add a short note about what you studied'); return }
    setLoading(true)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Not authenticated')

      const { error } = await supabase.from('study_sessions').insert({
        user_id: user.id,
        date,
        duration_minutes: duration,
        category,
        skill,
        notes: notes.trim(),
      })
      if (error) throw error

      // Update streak & total minutes on profile
      const { data: profile } = await supabase
        .from('profiles')
        .select('total_minutes, streak_count, updated_at')
        .eq('id', user.id)
        .single()

      if (profile) {
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        const lastUpdate = new Date(profile.updated_at).toDateString()
        const isConsecutive = lastUpdate === yesterday.toDateString() || lastUpdate === new Date().toDateString()

        await supabase.from('profiles').update({
          total_minutes: profile.total_minutes + duration,
          streak_count: isConsecutive ? profile.streak_count + 1 : 1,
        }).eq('id', user.id)
      }

      toast.success(`Session logged! ${duration} min of ${SKILL_META[skill].label}`)
      setNotes('')
      router.refresh()
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : 'Failed to save')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl space-y-6 pb-6">
      <div>
        <h1 className="page-header">Log a Study Session</h1>
        <p className="text-surface-500 text-sm mt-1">Record what you studied today to track your progress.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Date */}
        <div className="card p-5">
          <label className="label">Date</label>
          <input type="date" className="input" value={date}
            onChange={e => setDate(e.target.value)}
            max={new Date().toISOString().split('T')[0]} />
        </div>

        {/* Category */}
        <div className="card p-5">
          <label className="label">What did you study?</label>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button key={cat} type="button"
                onClick={() => setCategory(cat)}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-150',
                  category === cat
                    ? 'bg-brand-600 text-white border-brand-600'
                    : 'border-surface-200 text-surface-600 hover:border-surface-300 dark:hover:border-surface-600'
                )}>
                {cat.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Skill */}
        <div className="card p-5">
          <label className="label">Which skill?</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {skills.map(s => {
              const sm = SKILL_META[s]
              const isActive = skill === s
              return (
                <button key={s} type="button"
                  onClick={() => setSkill(s)}
                  className={cn(
                    'flex items-center gap-2.5 px-3 py-3 rounded-xl border text-sm font-medium transition-all duration-150',
                    isActive ? 'border-current text-white' : 'border-surface-200 text-surface-600 hover:border-surface-300 dark:hover:border-surface-600'
                  )}
                  style={isActive ? { backgroundColor: sm.color, borderColor: sm.color } : {}}>
                  <span style={isActive ? { color: 'white' } : { color: sm.color }}>
                    {SKILL_ICONS[s]}
                  </span>
                  {sm.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Duration */}
        <div className="card p-5">
          <label className="label">
            Duration: <span className="text-brand-600 font-semibold">{duration} minutes</span>
          </label>
          <div className="flex gap-2 mb-3 flex-wrap">
            {QUICK_DURATIONS.map(d => (
              <button key={d} type="button"
                onClick={() => setDuration(d)}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-150',
                  duration === d
                    ? 'bg-brand-600 text-white border-brand-600'
                    : 'border-surface-200 text-surface-600 hover:border-surface-300 dark:hover:border-surface-600'
                )}>
                {d}m
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-surface-400" />
            <input type="range" min="5" max="300" step="5" value={duration}
              onChange={e => setDuration(parseInt(e.target.value))}
              className="flex-1 accent-brand-600" />
            <input type="number" min="1" max="480" value={duration}
              onChange={e => setDuration(parseInt(e.target.value) || 30)}
              className="input w-20 text-center" />
          </div>
        </div>

        {/* Notes */}
        <div className="card p-5">
          <label className="label">What did you cover? <span className="text-surface-400 font-normal">(required)</span></label>
          <textarea
            className="input min-h-[100px] resize-none"
            placeholder="e.g. IELTS Writing Task 2 — practiced opinion essay structure, used 3 body paragraph template..."
            value={notes}
            onChange={e => setNotes(e.target.value)}
            rows={4}
          />
          <p className="text-xs text-surface-400 mt-1.5">Be specific — you'll thank yourself when reviewing progress later.</p>
        </div>

        <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3">
          {loading
            ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</>
            : <><Plus className="w-4 h-4" /> Save session</>
          }
        </button>
      </form>
    </div>
  )
}
