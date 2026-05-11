import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import ClozeClient from '@/components/modules/ClozeClient'

export default async function ClozePage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  return (
    <div className="space-y-6 pb-6">
      <div>
        <h1 className="page-header">Cloze Tests</h1>
        <p className="text-surface-500 text-sm mt-1">
          Fill in the gaps in graded passages (A2–C1). Switch between Multiple Choice and Open Cloze mode to match IELTS exam conditions.
        </p>
      </div>
      <ClozeClient />
    </div>
  )
}
