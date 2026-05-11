import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import ReadingClient from '@/components/modules/ReadingClient'

export default async function ReadingPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  return (
    <div className="space-y-6 pb-6">
      <div>
        <h1 className="page-header">Reading Practice</h1>
        <p className="text-surface-500 text-sm mt-1">
          Graded passages (A2–C1) with T/F/NG, multiple choice, and sentence completion — exactly the IELTS Reading question types.
        </p>
      </div>
      <ReadingClient />
    </div>
  )
}
