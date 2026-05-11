import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import WritingSamplesClient from '@/components/modules/WritingSamplesClient'

export default async function WritingSamplesPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  return (
    <div className="space-y-6 pb-6">
      <div>
        <h1 className="page-header">IELTS Model Answers</h1>
        <p className="text-surface-500 text-sm mt-1">
          Compare Band 5, Band 6.5, and Band 7.5 essays on the same prompt — with detailed annotations showing exactly what makes the difference.
        </p>
      </div>
      <WritingSamplesClient />
    </div>
  )
}
