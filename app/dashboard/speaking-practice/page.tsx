import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import SpeakingClient from '@/components/modules/SpeakingClient'

export default async function SpeakingPracticePage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  return (
    <div className="space-y-6 pb-6">
      <div>
        <h1 className="page-header">Speaking Prompt Bank</h1>
        <p className="text-surface-500 text-sm mt-1">
          IELTS Speaking Part 1, 2 & 3 practice. Use the built-in timer, then compare your answer with the Band 6 and Band 7 models.
        </p>
      </div>
      <SpeakingClient />
    </div>
  )
}
