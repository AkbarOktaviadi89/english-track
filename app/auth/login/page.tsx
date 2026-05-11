'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { BookOpen, Headphones, Mic, PenLine, Layers, TrendingUp, ArrowRight, Loader2 } from 'lucide-react'

export default function LoginPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      if (mode === 'signup') {
        const { error } = await supabase.auth.signUp({
          email, password,
          options: { data: { full_name: name } }
        })
        if (error) throw error
        toast.success('Account created! Please check your email.')
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
        router.push('/dashboard')
        router.refresh()
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Something went wrong'
      toast.error(msg)
    } finally {
      setLoading(false)
    }
  }

  const features = [
    { icon: TrendingUp, label: 'Track daily progress', color: 'text-brand-600', bg: 'bg-brand-50' },
    { icon: BookOpen, label: 'IELTS & TOEFL roadmaps', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: Layers, label: 'CEFR A1–C2 curriculum', color: 'text-violet-600', bg: 'bg-violet-50' },
    { icon: Headphones, label: 'Skill-based practice logs', color: 'text-amber-600', bg: 'bg-amber-50' },
    { icon: Mic, label: 'Speaking & vocab tracker', color: 'text-pink-600', bg: 'bg-pink-50' },
    { icon: PenLine, label: 'Writing progress metrics', color: 'text-teal-600', bg: 'bg-teal-50' },
  ]

  return (
    <div className="min-h-screen bg-surface-50 flex">
      {/* Left — branding (always dark, uses fixed colors outside CSS variable system) */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 border-r"
        style={{ backgroundColor: '#0d110d', borderColor: '#1e241e' }}>
        <div>
          <div className="flex items-center gap-2.5 mb-16">
            <div className="w-9 h-9 rounded-xl bg-brand-500 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-semibold text-lg">EngTrack</span>
          </div>
          <h1 className="text-4xl font-semibold text-white leading-tight mb-4">
            Master English.<br />
            <span className="text-brand-400">Track every step.</span>
          </h1>
          <p className="text-lg leading-relaxed mb-12" style={{ color: '#a8b0a8' }}>
            Structured roadmaps for IELTS, TOEFL, PTE, TOEIC, and general English — all in one platform.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {features.map(({ icon: Icon, label, color, bg }) => (
              <div key={label} className="flex items-center gap-3 rounded-xl px-4 py-3"
                style={{ backgroundColor: '#1a1f1a' }}>
                <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-4 h-4 ${color}`} />
                </div>
                <span className="text-sm" style={{ color: '#cdd2cd' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm" style={{ color: '#636b63' }}>Built for serious English learners. No distractions.</p>
      </div>

      {/* Right — form */}
      <div className="flex-1 flex items-center justify-center p-6 bg-surface-50">
        <div className="w-full max-w-md animate-in">
          {/* Mobile logo */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="w-8 h-8 rounded-xl bg-brand-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-surface-900">EngTrack</span>
          </div>

          <h2 className="text-2xl font-semibold text-surface-900 mb-1">
            {mode === 'login' ? 'Welcome back' : 'Start your journey'}
          </h2>
          <p className="text-surface-500 text-sm mb-8">
            {mode === 'login' ? 'Sign in to continue your progress.' : 'Create your free account today.'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="label">Full name</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
              </div>
            )}
            <div>
              <label className="label">Email</label>
              <input
                className="input"
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                minLength={8}
              />
            </div>

            <button type="submit" disabled={loading} className="btn-primary w-full justify-center mt-2">
              {loading
                ? <><Loader2 className="w-4 h-4 animate-spin" /> Please wait</>
                : <>{mode === 'login' ? 'Sign in' : 'Create account'} <ArrowRight className="w-4 h-4" /></>
              }
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-surface-500">
            {mode === 'login' ? (
              <>Don&apos;t have an account?{' '}
                <button onClick={() => setMode('signup')} className="text-brand-600 font-medium hover:text-brand-700">
                  Sign up free
                </button>
              </>
            ) : (
              <>Already have an account?{' '}
                <button onClick={() => setMode('login')} className="text-brand-600 font-medium hover:text-brand-700">
                  Sign in
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
