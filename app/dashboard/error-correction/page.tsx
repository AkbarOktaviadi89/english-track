import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import ErrorCorrectionClient from '@/components/modules/ErrorCorrectionClient'

export default async function ErrorCorrectionPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  return (
    <div className="space-y-6 pb-6">
      <div>
        <h1 className="page-header">Error Correction</h1>
        <p className="text-surface-500 text-sm mt-1">
          Find the errors hidden in each paragraph. Click the incorrect word, then type the correction — the same skill tested in IELTS Writing self-editing.
        </p>
      </div>
      <ErrorCorrectionClient />
    </div>
  )
}
