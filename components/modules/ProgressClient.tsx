'use client'

import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { SKILL_META, CEFR_META } from '@/types'
import type { Skill, CEFRLevel } from '@/types'
import { BookOpen, Trash2, Download, Share2, X, Flame, Clock, Zap, Star } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import Heatmap from '@/components/ui/Heatmap'

interface Session {
  id: string; date: string; duration_minutes: number
  category: string; skill: string; notes: string
}

interface Profile {
  total_minutes?: number
  streak_count?: number
  daily_goal_minutes?: number
  current_level?: string
  target_test?: string | null
  full_name?: string
}

interface Props {
  sessions: Session[]
  skillMinutes: Record<string, number>
  weeklyData: Array<{ week: string; minutes: number }>
  catMinutes: Record<string, number>
  dailyMinutes: Record<string, number>
  profile: Profile | null
  skillMeta: typeof SKILL_META
}

export default function ProgressClient({ sessions, skillMinutes, weeklyData, catMinutes, dailyMinutes, profile }: Props) {
  const [filter, setFilter] = useState<Skill | 'all'>('all')
  const [showShare, setShowShare] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const filtered = filter === 'all' ? sessions : sessions.filter(s => s.skill === filter)
  const totalHours = Math.round((profile?.total_minutes ?? 0) / 60 * 10) / 10
  const maxSkill = Math.max(1, ...Object.values(skillMinutes))
  const skills = Object.keys(SKILL_META) as Skill[]

  async function deleteSession(id: string) {
    if (!confirm('Delete this session?')) return
    const { error } = await supabase.from('study_sessions').delete().eq('id', id)
    if (error) toast.error('Failed to delete')
    else { toast.success('Session deleted'); router.refresh() }
  }

  function exportCSV() {
    const header = 'Date,Duration (min),Category,Skill,Notes\n'
    const rows = sessions.map(s =>
      `${s.date},${s.duration_minutes},${s.category},${s.skill},"${(s.notes ?? '').replace(/"/g, '""')}"`
    ).join('\n')
    const blob = new Blob([header + rows], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `engtrack-sessions-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    URL.revokeObjectURL(url)
    toast.success('CSV downloaded!')
  }

  const topSkill = Object.entries(skillMinutes).sort((a, b) => b[1] - a[1])[0]
  const avgSession = sessions.length > 0
    ? Math.round(sessions.reduce((s, r) => s + r.duration_minutes, 0) / sessions.length)
    : 0

  return (
    <div className="space-y-6">
      {/* Summary stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: 'Total hours', value: `${totalHours}h` },
          { label: 'Total sessions', value: sessions.length },
          { label: 'Avg session', value: `${avgSession}m` },
          { label: 'Best skill', value: topSkill ? SKILL_META[topSkill[0] as Skill].label : '—' },
        ].map(({ label, value }) => (
          <div key={label} className="stat-card">
            <p className="text-2xl font-semibold text-surface-900">{value}</p>
            <p className="text-xs text-surface-500 mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Export + Share */}
      <div className="flex gap-2 justify-end">
        <button onClick={exportCSV} className="btn-secondary">
          <Download className="w-4 h-4" /> Export CSV
        </button>
        <button onClick={() => setShowShare(true)} className="btn-secondary">
          <Share2 className="w-4 h-4" /> Share progress
        </button>
      </div>

      {/* Heatmap */}
      <div className="card p-5">
        <Heatmap dailyMinutes={dailyMinutes} />
      </div>

      {/* Weekly bar chart */}
      <div className="card p-5">
        <h2 className="section-title mb-5">Weekly study time (last 8 weeks)</h2>
        {sessions.length > 0 ? (
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyData} barSize={24}>
              <XAxis dataKey="week" tick={{ fontSize: 11, fill: '#a8b0a8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#a8b0a8' }} axisLine={false} tickLine={false} unit="m" />
              <Tooltip
                contentStyle={{ borderRadius: 10, border: '1px solid #e4e7e4', fontSize: 13 }}
                formatter={(v: number) => [`${v} min`, 'Study time']} />
              <Bar dataKey="minutes" radius={[6, 6, 0, 0]}>
                {weeklyData.map((_, i) => (
                  <Cell key={i} fill={i === weeklyData.length - 1 ? '#259775' : '#aee3cb'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-[200px] flex items-center justify-center text-surface-400 text-sm">
            No data yet — log your first session
          </div>
        )}
      </div>

      {/* Skill breakdown */}
      <div className="card p-5">
        <h2 className="section-title mb-4">Skill breakdown (all time)</h2>
        <div className="space-y-3">
          {skills.map(skill => {
            const min = skillMinutes[skill] ?? 0
            const pct = Math.round((min / maxSkill) * 100)
            const sm = SKILL_META[skill]
            return (
              <div key={skill} className="flex items-center gap-3">
                <div className="w-20 text-sm text-surface-600 flex-shrink-0">{sm.label}</div>
                <div className="flex-1 progress-bar">
                  <div className="progress-fill" style={{ width: `${pct}%`, backgroundColor: sm.color }} />
                </div>
                <div className="w-16 text-xs text-surface-500 text-right">{min} min</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Category breakdown */}
      {Object.keys(catMinutes).length > 0 && (
        <div className="card p-5">
          <h2 className="section-title mb-4">Study focus breakdown</h2>
          <div className="flex flex-wrap gap-2">
            {Object.entries(catMinutes)
              .sort((a, b) => b[1] - a[1])
              .map(([cat, min]) => (
                <div key={cat} className="flex items-center gap-2 bg-surface-50 border border-surface-200 rounded-xl px-3 py-2">
                  <span className="text-sm font-medium text-surface-700">{cat.replace('_', ' ')}</span>
                  <span className="text-xs text-surface-400">{min}m</span>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Session history */}
      <div className="card p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="section-title">Session history</h2>
          <div className="flex gap-1 flex-wrap">
            {(['all', ...skills] as Array<Skill | 'all'>).map(s => (
              <button key={s}
                onClick={() => setFilter(s)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                  filter === s ? 'bg-surface-900 text-white' : 'text-surface-500 hover:bg-surface-100 dark:hover:bg-surface-800'
                }`}>
                {s === 'all' ? 'All' : SKILL_META[s].label}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-8 text-surface-400 text-sm">No sessions yet</div>
        ) : (
          <div className="space-y-0">
            {filtered.map((session, i) => {
              const sm = SKILL_META[session.skill as Skill]
              return (
                <div key={session.id}
                  className={`flex items-center gap-3 py-3 ${i < filtered.length - 1 ? 'border-b border-surface-100' : ''}`}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: sm.color + '18' }}>
                    <BookOpen className="w-4 h-4" style={{ color: sm.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-surface-900 truncate">{session.notes}</p>
                    <p className="text-xs text-surface-400">{session.date} · {session.category} · {sm.label}</p>
                  </div>
                  <span className="text-sm font-medium text-surface-600 flex-shrink-0">{session.duration_minutes}m</span>
                  <button onClick={() => deleteSession(session.id)}
                    className="p-1.5 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-lg text-surface-300 hover:text-red-500 transition-colors flex-shrink-0">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Share Card Modal */}
      {showShare && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="card w-full max-w-sm shadow-elevated animate-in">
            <div className="flex items-center justify-between p-5 border-b border-surface-100">
              <h2 className="section-title text-base">Share your progress</h2>
              <button onClick={() => setShowShare(false)} className="text-surface-400 hover:text-surface-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* The shareable card */}
            <div id="share-card" className="p-5 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-brand-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <div>
                  <p className="font-semibold text-surface-900 text-sm">EngTrack Progress</p>
                  <p className="text-xs text-surface-400">{profile?.full_name ?? 'Learner'}</p>
                </div>
                {profile?.current_level && (() => {
                  const m = CEFR_META[profile.current_level as CEFRLevel]
                  return (
                    <span className="ml-auto badge text-xs" style={{ backgroundColor: m.bgColor, color: m.color }}>
                      {profile.current_level} · {m.label}
                    </span>
                  )
                })()}
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="text-center p-3 bg-surface-50 rounded-xl">
                  <Flame className="w-4 h-4 text-orange-500 mx-auto mb-1" />
                  <p className="text-lg font-bold text-surface-900">{profile?.streak_count ?? 0}</p>
                  <p className="text-xs text-surface-400">Day streak</p>
                </div>
                <div className="text-center p-3 bg-surface-50 rounded-xl">
                  <Clock className="w-4 h-4 text-blue-500 mx-auto mb-1" />
                  <p className="text-lg font-bold text-surface-900">{totalHours}h</p>
                  <p className="text-xs text-surface-400">Total</p>
                </div>
                <div className="text-center p-3 bg-surface-50 rounded-xl">
                  <Zap className="w-4 h-4 text-violet-500 mx-auto mb-1" />
                  <p className="text-lg font-bold text-surface-900">{sessions.length}</p>
                  <p className="text-xs text-surface-400">Sessions</p>
                </div>
              </div>

              {topSkill && (
                <div className="flex items-center gap-2 p-3 bg-brand-50 dark:bg-brand-950/40 rounded-xl border border-brand-200 dark:border-brand-900">
                  <Star className="w-4 h-4 text-brand-600" />
                  <span className="text-sm text-brand-700 dark:text-brand-400">
                    Top skill: <strong>{SKILL_META[topSkill[0] as Skill].label}</strong> — {topSkill[1]} min
                  </span>
                </div>
              )}

              {profile?.target_test && (
                <p className="text-xs text-surface-400 text-center">Working towards: <strong className="text-surface-600">{profile.target_test}</strong></p>
              )}
            </div>

            <div className="px-5 pb-5 space-y-2">
              <p className="text-xs text-surface-400 text-center">Take a screenshot to share this card</p>
              <button onClick={() => setShowShare(false)} className="btn-secondary w-full justify-center">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
