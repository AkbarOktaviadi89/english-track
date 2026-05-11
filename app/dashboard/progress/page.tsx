import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { SKILL_META } from '@/types'
import type { Skill } from '@/types'
import ProgressClient from '@/components/modules/ProgressClient'

export default async function ProgressPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: sessions } = await supabase
    .from('study_sessions')
    .select('*')
    .eq('user_id', user.id)
    .order('date', { ascending: false })

  const { data: profile } = await supabase
    .from('profiles')
    .select('current_level, target_test, total_minutes, streak_count, daily_goal_minutes')
    .eq('id', user.id)
    .single()

  // Skill totals
  const skillMinutes: Record<string, number> = {}
  sessions?.forEach(s => {
    skillMinutes[s.skill] = (skillMinutes[s.skill] ?? 0) + s.duration_minutes
  })

  // Weekly data — last 8 weeks
  const weeklyData: Array<{ week: string; minutes: number }> = []
  for (let w = 7; w >= 0; w--) {
    const end = new Date()
    end.setDate(end.getDate() - w * 7)
    const start = new Date(end)
    start.setDate(start.getDate() - 6)
    const startStr = start.toISOString().split('T')[0]
    const endStr = end.toISOString().split('T')[0]
    const weekMin = sessions
      ?.filter(s => s.date >= startStr && s.date <= endStr)
      .reduce((sum, s) => sum + s.duration_minutes, 0) ?? 0
    const label = start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    weeklyData.push({ week: label, minutes: weekMin })
  }

  // Category breakdown
  const catMinutes: Record<string, number> = {}
  sessions?.forEach(s => {
    catMinutes[s.category] = (catMinutes[s.category] ?? 0) + s.duration_minutes
  })

  // Daily minutes map for heatmap
  const dailyMinutes: Record<string, number> = {}
  sessions?.forEach(s => {
    dailyMinutes[s.date] = (dailyMinutes[s.date] ?? 0) + s.duration_minutes
  })

  return (
    <div className="space-y-6 pb-6">
      <div>
        <h1 className="page-header">Progress & Analytics</h1>
        <p className="text-surface-500 text-sm mt-1">All your study sessions and skill development over time.</p>
      </div>
      <ProgressClient
        sessions={sessions ?? []}
        skillMinutes={skillMinutes}
        weeklyData={weeklyData}
        catMinutes={catMinutes}
        dailyMinutes={dailyMinutes}
        profile={profile}
        skillMeta={SKILL_META}
      />
    </div>
  )
}
