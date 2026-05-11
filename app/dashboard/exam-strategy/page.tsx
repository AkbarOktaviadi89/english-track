import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import ExamStrategyClient from '@/components/modules/ExamStrategyClient'

export default async function ExamStrategyPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  return (
    <div className="space-y-6 pb-6">
      <div>
        <h1 className="page-header">Exam Strategy Guide</h1>
        <p className="text-surface-500 text-sm mt-1">
          Proven strategies for all four IELTS sections — timing, question-type approaches, common traps, and band-score tips. Bookmark cards you want to review before exam day.
        </p>
      </div>
      <ExamStrategyClient />
    </div>
  )
}
