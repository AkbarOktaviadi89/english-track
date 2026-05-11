import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { TEST_CURRICULA } from '@/lib/curriculum'
import type { TestType } from '@/types'
import LessonsClient from '@/components/modules/LessonsClient'

export default async function LessonsPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('target_test')
    .eq('id', user.id)
    .single()

  const { data: moduleRows } = await supabase
    .from('test_module_progress')
    .select('test_type, module_id, completed, score, notes')
    .eq('user_id', user.id)

  const moduleProgress: Record<string, { completed: boolean; score?: number; notes?: string }> = {}
  moduleRows?.forEach(r => {
    moduleProgress[`${r.test_type}_${r.module_id}`] = {
      completed: r.completed, score: r.score, notes: r.notes,
    }
  })

  return (
    <div className="space-y-6 pb-6">
      <div>
        <h1 className="page-header">Test Curricula</h1>
        <p className="text-surface-500 text-sm mt-1">
          Structured learning modules for every major English test. Track your progress per module.
        </p>
      </div>
      <LessonsClient
        curricula={TEST_CURRICULA}
        initialProgress={moduleProgress}
        userId={user.id}
        defaultTest={(profile?.target_test as TestType) || 'IELTS'}
      />
    </div>
  )
}
