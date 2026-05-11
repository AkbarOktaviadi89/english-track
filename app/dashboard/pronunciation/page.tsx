import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import PronunciationClient from '@/components/modules/PronunciationClient'

export default async function PronunciationPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  return (
    <div className="space-y-6 pb-6">
      <div>
        <h1 className="page-header">Pronunciation Guide</h1>
        <p className="text-surface-500 text-sm mt-1">
          Interactive IPA chart, minimal pairs practice with browser audio, and connected speech patterns for natural fluency.
        </p>
      </div>
      <PronunciationClient />
    </div>
  )
}
