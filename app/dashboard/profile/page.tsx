'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { Loader2, Save } from 'lucide-react'
import { CEFR_META } from '@/types'
import type { CEFRLevel, TestType } from '@/types'
import { cn } from '@/lib/utils'

const LEVELS: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
const TESTS: TestType[] = ['IELTS', 'TOEFL', 'PTE', 'TOEIC', 'DUOLINGO', 'CAMBRIDGE']

export default function ProfilePage() {
  const [name, setName] = useState('')
  const [level, setLevel] = useState<CEFRLevel>('B1')
  const [targetTest, setTargetTest] = useState<TestType | ''>('')
  const [targetScore, setTargetScore] = useState('')
  const [examDate, setExamDate] = useState('')
  const [dailyGoal, setDailyGoal] = useState(30)
  const [loading, setLoading] = useState(false)
  const [initLoading, setInitLoading] = useState(true)
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const { data: p } = await supabase.from('profiles').select('*').eq('id', user.id).single()
      if (p) {
        setName(p.full_name ?? '')
        setLevel((p.current_level ?? 'B1') as CEFRLevel)
        setTargetTest((p.target_test ?? '') as TestType | '')
        setTargetScore(p.target_score ?? '')
        setExamDate(p.exam_date ?? '')
        setDailyGoal(p.daily_goal_minutes ?? 30)
      }
      setInitLoading(false)
    }
    load()
  }, [supabase])

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Not authenticated')
      const { error } = await supabase.from('profiles').update({
        full_name: name,
        current_level: level,
        target_test: targetTest || null,
        target_score: targetScore || null,
        exam_date: examDate || null,
        daily_goal_minutes: dailyGoal,
      }).eq('id', user.id)
      if (error) throw error
      toast.success('Profile saved!')
      router.refresh()
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : 'Failed to save')
    } finally {
      setLoading(false)
    }
  }

  if (initLoading) return (
    <div className="flex items-center justify-center h-40">
      <Loader2 className="w-5 h-5 animate-spin text-surface-400" />
    </div>
  )

  return (
    <div className="max-w-2xl space-y-6 pb-6">
      <div>
        <h1 className="page-header">Profile & Settings</h1>
        <p className="text-surface-500 text-sm mt-1">Customize your learning profile and daily goals.</p>
      </div>

      <form onSubmit={handleSave} className="space-y-5">
        {/* Personal */}
        <div className="card p-5">
          <h2 className="section-title mb-4">Personal</h2>
          <div>
            <label className="label">Full name</label>
            <input className="input" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" />
          </div>
        </div>

        {/* Current level */}
        <div className="card p-5">
          <h2 className="section-title mb-4">Current English level</h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {LEVELS.map(l => {
              const meta = CEFR_META[l]
              const isActive = level === l
              return (
                <button key={l} type="button" onClick={() => setLevel(l)}
                  className={cn(
                    'p-3 rounded-xl border text-center transition-all duration-150',
                    isActive ? 'border-current' : 'border-surface-200 hover:border-surface-300 dark:hover:border-surface-600 text-surface-600'
                  )}
                  style={isActive ? { backgroundColor: meta.bgColor, color: meta.color, borderColor: meta.borderColor } : {}}>
                  <div className="text-base font-bold">{l}</div>
                  <div className="text-xs mt-0.5 opacity-70">{meta.label}</div>
                </button>
              )
            })}
          </div>
          <div className="mt-3 p-3 rounded-xl text-sm"
            style={{ backgroundColor: CEFR_META[level].bgColor, color: CEFR_META[level].color }}>
            {CEFR_META[level].description}
            <div className="mt-1 text-xs opacity-70">
              IELTS: {CEFR_META[level].ieltsRange} · TOEFL: {CEFR_META[level].toeflRange}
            </div>
          </div>
        </div>

        {/* Target test */}
        <div className="card p-5">
          <h2 className="section-title mb-4">Target test</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            <button type="button" onClick={() => setTargetTest('')}
              className={cn('px-3 py-2 rounded-xl border text-sm font-medium transition-all duration-150',
                targetTest === '' ? 'bg-surface-900 text-white border-surface-900' : 'border-surface-200 text-surface-600 hover:border-surface-300 dark:hover:border-surface-600')}>
              None / General
            </button>
            {TESTS.map(t => (
              <button key={t} type="button" onClick={() => setTargetTest(t)}
                className={cn('px-3 py-2 rounded-xl border text-sm font-medium transition-all duration-150',
                  targetTest === t ? 'bg-brand-600 text-white border-brand-600' : 'border-surface-200 text-surface-600 hover:border-surface-300 dark:hover:border-surface-600')}>
                {t}
              </button>
            ))}
          </div>

          {targetTest && (
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="label">Target score</label>
                <input className="input" value={targetScore}
                  onChange={e => setTargetScore(e.target.value)}
                  placeholder={targetTest === 'IELTS' ? 'e.g. 7.0' : targetTest === 'TOEFL' ? 'e.g. 100' : 'Target score'} />
              </div>
              <div>
                <label className="label">Exam date</label>
                <input type="date" className="input" value={examDate}
                  onChange={e => setExamDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]} />
              </div>
            </div>
          )}
        </div>

        {/* Daily goal */}
        <div className="card p-5">
          <h2 className="section-title mb-4">
            Daily goal: <span className="text-brand-600">{dailyGoal} minutes</span>
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-xs text-surface-400">15m</span>
            <input type="range" min="15" max="180" step="15" value={dailyGoal}
              onChange={e => setDailyGoal(parseInt(e.target.value))}
              className="flex-1 accent-brand-600" />
            <span className="text-xs text-surface-400">3h</span>
          </div>
          <div className="flex justify-between text-xs text-surface-400 mt-2">
            {[15, 30, 45, 60, 90, 120, 180].map(g => (
              <button key={g} type="button" onClick={() => setDailyGoal(g)}
                className={cn('px-2 py-1 rounded transition-colors', dailyGoal === g ? 'text-brand-600 dark:text-brand-400 font-medium' : 'hover:text-surface-700 dark:hover:text-surface-300')}>
                {g}m
              </button>
            ))}
          </div>
        </div>

        <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3">
          {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</> : <><Save className="w-4 h-4" /> Save profile</>}
        </button>
      </form>
    </div>
  )
}
