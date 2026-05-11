import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import WritingClient from '@/components/modules/WritingClient'

export default async function WritingPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: history } = await supabase
    .from('writing_submissions')
    .select('id, task_type, word_count, band_estimate, created_at')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(10)

  return (
    <div className="space-y-6 pb-6">
      <div>
        <h1 className="page-header">AI Writing Feedback</h1>
        <p className="text-surface-500 text-sm mt-1">
          Write any English text and get instant feedback on grammar, vocabulary, structure, and an estimated IELTS band — powered by AI.
        </p>
      </div>
      <WritingClient history={history ?? []} />
    </div>
  )
}
