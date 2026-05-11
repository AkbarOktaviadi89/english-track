import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import {
  Flame, Clock, Target, BookOpen,
  TrendingUp, ChevronRight, Zap, Calendar, Bell
} from 'lucide-react'
import Link from 'next/link'
import { CEFR_META, SKILL_META } from '@/types'
import type { CEFRLevel, Skill } from '@/types'

export default async function DashboardPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

  const { data: sessions } = await supabase
    .from('study_sessions')
    .select('*')
    .eq('user_id', user.id)
    .gte('date', thirtyDaysAgo.toISOString().split('T')[0])
    .order('date', { ascending: false })

  const totalMinutes = sessions?.reduce((s, r) => s + r.duration_minutes, 0) ?? 0
  const sessionCount = sessions?.length ?? 0

  const skillMinutes: Record<string, number> = {}
  sessions?.forEach(s => {
    skillMinutes[s.skill] = (skillMinutes[s.skill] ?? 0) + s.duration_minutes
  })
  const maxSkillMin = Math.max(1, ...Object.values(skillMinutes))

  const last7 = Array.from({ length: 7 }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - (6 - i))
    return d.toISOString().split('T')[0]
  })
  const weeklyMap: Record<string, number> = {}
  sessions?.forEach(s => { weeklyMap[s.date] = (weeklyMap[s.date] ?? 0) + s.duration_minutes })
  const weeklyData = last7.map(date => ({ date, minutes: weeklyMap[date] ?? 0 }))
  const weeklyMax = Math.max(1, ...weeklyData.map(d => d.minutes))

  const level = (profile?.current_level ?? 'B1') as CEFRLevel
  const meta = CEFR_META[level]
  const today = new Date().toISOString().split('T')[0]
  const studiedToday = (sessions ?? []).some(s => s.date === today)
  const goal = profile?.daily_goal_minutes ?? 30
  const todayMin = weeklyMap[today] ?? 0
  const goalPct = Math.min(100, Math.round((todayMin / goal) * 100))
  const skills = Object.keys(SKILL_META) as Skill[]

  const firstName = profile?.full_name?.split(' ')[0] ?? ''

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="page-header">
          {studiedToday ? 'Keep it up' : 'Ready to study'}{firstName ? `, ${firstName}` : ''}!
        </h1>
        <p className="text-surface-500 text-sm mt-1">
          {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Reminder banner */}
      {!studiedToday && (
        <Link href="/dashboard/practice"
          className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-950/50 transition-colors">
          <Bell className="w-5 h-5 flex-shrink-0 text-amber-500" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">No session logged today</p>
            <p className="text-xs opacity-70 mt-0.5">Daily goal: {goal} min — tap to log a session</p>
          </div>
          <ChevronRight className="w-4 h-4 flex-shrink-0 opacity-50" />
        </Link>
      )}

      {/* Daily goal */}
      <div className="card p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-brand-600" />
            <span className="text-sm font-medium text-surface-700">Today&apos;s goal</span>
          </div>
          <span className="text-sm text-surface-500">{todayMin} / {goal} min</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill bg-brand-500" style={{ width: `${goalPct}%` }} />
        </div>
        <p className="text-xs text-surface-400 mt-2">
          {goalPct >= 100 ? '🎉 Goal reached today!' : `${goal - todayMin} min remaining`}
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { icon: Flame,      bg: 'bg-orange-50 dark:bg-orange-950/30', iconCls: 'text-orange-500', value: profile?.streak_count ?? 0,                label: 'Day streak'      },
          { icon: Clock,      bg: 'bg-blue-50 dark:bg-blue-950/30',     iconCls: 'text-blue-500',   value: Math.round(totalMinutes / 60),             label: 'Hours this month'},
          { icon: Zap,        bg: 'bg-violet-50 dark:bg-violet-950/30', iconCls: 'text-violet-500', value: sessionCount,                              label: 'Sessions (30d)'  },
          { icon: TrendingUp, bg: 'bg-teal-50 dark:bg-teal-950/30',     iconCls: 'text-teal-500',   value: profile?.target_test ?? '—',               label: 'Target test'     },
        ].map(({ icon: Icon, bg, iconCls, value, label }) => (
          <div key={label} className="stat-card">
            <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center mb-3`}>
              <Icon className={`w-4 h-4 ${iconCls}`} />
            </div>
            <p className="text-2xl font-semibold text-surface-900">{value}</p>
            <p className="text-xs text-surface-500 mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Weekly activity */}
        <div className="card p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-5">
            <h2 className="section-title">Weekly activity</h2>
            <Calendar className="w-4 h-4 text-surface-400" />
          </div>
          <div className="flex items-end gap-2 h-28">
            {weeklyData.map(({ date, minutes }) => {
              const height = Math.max(4, Math.round((minutes / weeklyMax) * 100))
              const isToday = date === today
              const dayLabel = new Date(date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short' })
              return (
                <div key={date} className="flex-1 flex flex-col items-center gap-1.5">
                  <div className="w-full flex items-end justify-center" style={{ height: '96px' }}>
                    <div
                      className="w-full rounded-t-lg transition-all duration-500"
                      style={{
                        height: `${height}%`,
                        backgroundColor: isToday ? '#259775' : minutes > 0 ? '#aee3cb' : 'rgba(148,163,148,0.15)',
                        minHeight: '4px',
                      }}
                    />
                  </div>
                  <span className="text-xs text-surface-400">{dayLabel}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Quick actions */}
        <div className="card p-5">
          <h2 className="section-title mb-4">Quick actions</h2>
          <div className="space-y-2">
            <Link href="/dashboard/practice" className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium bg-brand-600 hover:bg-brand-700 text-white transition-all active:scale-[0.98]">
              Log a session <ChevronRight className="w-4 h-4 opacity-70" />
            </Link>
            <Link href="/dashboard/roadmap" className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium bg-surface-900 hover:bg-surface-800 dark:hover:bg-surface-600 text-white transition-all active:scale-[0.98]">
              View roadmap <ChevronRight className="w-4 h-4 opacity-70" />
            </Link>
            <Link href="/dashboard/review" className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium bg-violet-600 hover:bg-violet-700 text-white transition-all active:scale-[0.98]">
              Vocab review <ChevronRight className="w-4 h-4 opacity-70" />
            </Link>
          </div>
        </div>
      </div>

      {/* Skill breakdown */}
      <div className="card p-5">
        <div className="flex items-center justify-between mb-5">
          <h2 className="section-title">Skill breakdown (30 days)</h2>
          <Link href="/dashboard/progress" className="text-sm text-brand-600 dark:text-brand-400 font-medium hover:text-brand-700 dark:hover:text-brand-300">
            Full progress →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map(skill => {
            const minutes = skillMinutes[skill] ?? 0
            const pct = Math.round((minutes / maxSkillMin) * 100)
            const sm = SKILL_META[skill]
            return (
              <div key={skill} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-surface-700">{sm.label}</span>
                  <span className="text-surface-400 text-xs">{minutes} min</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${pct}%`, backgroundColor: sm.color }} />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Recent sessions */}
      {sessionCount > 0 && (
        <div className="card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="section-title">Recent sessions</h2>
            <Link href="/dashboard/progress" className="text-sm text-brand-600 dark:text-brand-400 font-medium hover:text-brand-700 dark:hover:text-brand-300">
              View all →
            </Link>
          </div>
          <div>
            {(sessions ?? []).slice(0, 5).map((session, i) => {
              const sm = SKILL_META[session.skill as Skill]
              return (
                <div key={session.id} className={`flex items-center gap-4 py-3 ${i < 4 ? 'border-b border-surface-100' : ''}`}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: sm.color + '20' }}>
                    <BookOpen className="w-4 h-4" style={{ color: sm.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-surface-900 truncate">{session.notes || session.category}</p>
                    <p className="text-xs text-surface-400">{session.date} · {sm.label}</p>
                  </div>
                  <span className="text-sm font-medium text-surface-600 flex-shrink-0">{session.duration_minutes}m</span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Empty state */}
      {sessionCount === 0 && (
        <div className="card p-10 text-center">
          <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950/30 flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-6 h-6 text-brand-600" />
          </div>
          <h3 className="font-semibold text-surface-900 mb-2">No sessions yet</h3>
          <p className="text-surface-500 text-sm mb-5 max-w-xs mx-auto">
            Log your first study session to start tracking your English progress.
          </p>
          <Link href="/dashboard/practice" className="btn-primary">Log first session →</Link>
        </div>
      )}
    </div>
  )
}
