import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import StudyPlanClient from '@/components/modules/StudyPlanClient'
import { ALL_PLANS, getRecommendedPlan } from '@/lib/study-plans'
import type { CEFRLevel } from '@/types'

export default async function StudyPlanPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('current_level, target_test')
    .eq('id', user.id)
    .single()

  // Fetch saved progress for ALL plans
  const { data: progressRows } = await supabase
    .from('study_plan_progress')
    .select('plan_id, task_id, completed')
    .eq('user_id', user.id)

  // Convert to nested map: planId → taskId → completed
  const progressMap: Record<string, Record<string, boolean>> = {}
  progressRows?.forEach(r => {
    if (!progressMap[r.plan_id]) progressMap[r.plan_id] = {}
    progressMap[r.plan_id][r.task_id] = r.completed
  })

  const level = (profile?.current_level ?? 'B1') as CEFRLevel
  const recommended = getRecommendedPlan(level, profile?.target_test ?? null)

  return (
    <div className="space-y-6 pb-6">
      <div>
        <h1 className="page-header">Study Plan</h1>
        <p className="text-surface-500 text-sm mt-1">
          Structured week-by-week learning paths. Pick a plan and check off tasks as you complete them.
        </p>
      </div>
      <StudyPlanClient
        plans={ALL_PLANS}
        recommendedPlanId={recommended.id}
        progressMap={progressMap}
        userId={user.id}
      />
    </div>
  )
}
