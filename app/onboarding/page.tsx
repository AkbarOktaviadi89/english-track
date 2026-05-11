'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { CEFR_META } from '@/types'
import type { CEFRLevel, TestType } from '@/types'
import { cn } from '@/lib/utils'
import { TrendingUp, ChevronRight, Check } from 'lucide-react'
import toast from 'react-hot-toast'

const LEVELS: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
const TESTS: (TestType | '')[] = ['', 'IELTS', 'TOEFL', 'PTE', 'TOEIC', 'DUOLINGO', 'CAMBRIDGE']

const STEPS = ['Welcome', 'Your level', 'Target test', 'Daily goal']

export default function OnboardingPage() {
  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const [level, setLevel] = useState<CEFRLevel>('B1')
  const [test, setTest] = useState<TestType | ''>('')
  const [goal, setGoal] = useState(30)
  const [saving, setSaving] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  async function finish() {
    setSaving(true)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Not authenticated')
      const { error } = await supabase.from('profiles').update({
        full_name: name.trim() || 'Learner',
        current_level: level,
        target_test: test || null,
        daily_goal_minutes: goal,
      }).eq('id', user.id)
      if (error) throw error
      toast.success('Welcome to EngTrack!')
      router.push('/dashboard')
    } catch {
      toast.error('Something went wrong — please try again')
      setSaving(false)
    }
  }

  const progress = ((step + 1) / STEPS.length) * 100

  return (
    <div className="min-h-screen bg-surface-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Logo */}
        <div className="flex items-center gap-2.5 justify-center mb-8">
          <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-xl text-surface-900">EngTrack</span>
        </div>

        {/* Progress bar */}
        <div className="progress-bar mb-2">
          <div className="progress-fill bg-brand-500 transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
        <p className="text-xs text-surface-400 text-right mb-6">Step {step + 1} of {STEPS.length}</p>

        <div className="card p-7 shadow-elevated">
          {/* Step 0 — Name */}
          {step === 0 && (
            <div className="space-y-5">
              <div>
                <h1 className="text-2xl font-semibold text-surface-900">Welcome! Let's set up your profile</h1>
                <p className="text-surface-500 text-sm mt-2">Takes less than 2 minutes. You can change everything later.</p>
              </div>
              <div>
                <label className="label">What's your name?</label>
                <input className="input text-base" placeholder="e.g. Budi Santoso" value={name}
                  onChange={e => setName(e.target.value)} autoFocus />
              </div>
              <button className="btn-primary w-full justify-center py-3"
                onClick={() => setStep(1)}>
                Continue <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Step 1 — CEFR Level */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <h1 className="text-2xl font-semibold text-surface-900">What's your current English level?</h1>
                <p className="text-surface-500 text-sm mt-2">Choose your honest self-assessment — you can update this anytime.</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {LEVELS.map(l => {
                  const m = CEFR_META[l]
                  const active = level === l
                  return (
                    <button key={l} onClick={() => setLevel(l)}
                      className={cn('p-4 rounded-xl border text-left transition-all', active ? 'border-current' : 'border-surface-200 hover:border-surface-300')}
                      style={active ? { backgroundColor: m.bgColor, borderColor: m.borderColor } : {}}>
                      <div className="text-base font-bold" style={{ color: m.color }}>{l}</div>
                      <div className="text-xs text-surface-500 mt-0.5">{m.label}</div>
                      <div className="text-xs text-surface-400 mt-1 leading-tight">{m.ieltsRange !== 'Below 4.0' ? `IELTS ${m.ieltsRange}` : 'Beginner'}</div>
                    </button>
                  )
                })}
              </div>
              <div className="flex gap-3">
                <button className="btn-secondary flex-1 justify-center" onClick={() => setStep(0)}>Back</button>
                <button className="btn-primary flex-1 justify-center py-3" onClick={() => setStep(2)}>
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2 — Target test */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <h1 className="text-2xl font-semibold text-surface-900">Do you have a target exam?</h1>
                <p className="text-surface-500 text-sm mt-2">Optional — helps us show relevant tips and modules.</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {TESTS.map(t => {
                  const active = test === t
                  return (
                    <button key={t || 'none'} onClick={() => setTest(t)}
                      className={cn('px-4 py-3 rounded-xl border text-sm font-medium transition-all',
                        active ? 'bg-brand-600 text-white border-brand-600' : 'border-surface-200 text-surface-700 hover:border-surface-300')}>
                      {t || 'No exam / General'}
                    </button>
                  )
                })}
              </div>
              <div className="flex gap-3">
                <button className="btn-secondary flex-1 justify-center" onClick={() => setStep(1)}>Back</button>
                <button className="btn-primary flex-1 justify-center py-3" onClick={() => setStep(3)}>
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3 — Daily goal */}
          {step === 3 && (
            <div className="space-y-5">
              <div>
                <h1 className="text-2xl font-semibold text-surface-900">Set your daily study goal</h1>
                <p className="text-surface-500 text-sm mt-2">Consistency beats intensity. Even 15 minutes a day adds up.</p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[15, 30, 45, 60, 90, 120].map(g => (
                  <button key={g} onClick={() => setGoal(g)}
                    className={cn('py-4 rounded-xl border text-center transition-all',
                      goal === g ? 'bg-brand-600 text-white border-brand-600' : 'border-surface-200 text-surface-700 hover:border-surface-300')}>
                    <div className="text-lg font-bold">{g}</div>
                    <div className="text-xs mt-0.5">min/day</div>
                  </button>
                ))}
              </div>
              <div className="p-4 rounded-xl bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-900 text-sm text-brand-700 dark:text-brand-400">
                {goal} min/day = ~{Math.round(goal * 30 / 60)} hours/month of practice
              </div>
              <div className="flex gap-3">
                <button className="btn-secondary flex-1 justify-center" onClick={() => setStep(2)}>Back</button>
                <button className="btn-primary flex-1 justify-center py-3" disabled={saving} onClick={finish}>
                  <Check className="w-4 h-4" />
                  {saving ? 'Setting up…' : "Let's go!"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
