import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import PhraseBankClient from '@/components/modules/PhraseBankClient'

export default async function PhrasesPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  // Fetch saved phrases (table may not exist yet — graceful fallback)
  const { data: phrases } = await supabase
    .from('phrases')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-6 pb-6">
      <div>
        <h1 className="page-header">Phrase Bank</h1>
        <p className="text-surface-500 text-sm mt-1">
          Save useful phrases for IELTS, TOEFL, academic writing, and speaking. Pre-loaded with 65+ essential phrases.
        </p>
      </div>
      <PhraseBankClient savedPhrases={phrases ?? []} userId={user.id} />
    </div>
  )
}
