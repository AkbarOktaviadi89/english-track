import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import CollocationsClient from '@/components/modules/CollocationsClient'

export default async function CollocationsPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: saved } = await supabase
    .from('phrases')
    .select('phrase')
    .eq('user_id', user.id)

  const savedPhrases = new Set((saved ?? []).map(r => r.phrase.toLowerCase()))

  return (
    <div className="space-y-6 pb-6">
      <div>
        <h1 className="page-header">Collocations</h1>
        <p className="text-surface-500 text-sm mt-1">
          Word combinations that native speakers use naturally — make vs do, heavy rain not strong rain. Essential for IELTS Band 7+ writing and speaking.
        </p>
      </div>
      <CollocationsClient savedPhrases={savedPhrases} userId={user.id} />
    </div>
  )
}
