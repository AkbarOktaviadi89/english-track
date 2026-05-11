import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import IdiomsClient from '@/components/modules/IdiomsClient'

export default async function IdiomsPage() {
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
        <h1 className="page-header">Idioms & Phrasal Verbs</h1>
        <p className="text-surface-500 text-sm mt-1">
          58 idioms and 52 phrasal verbs essential for IELTS Band 7+ speaking and writing. Save any to your Phrase Bank.
        </p>
      </div>
      <IdiomsClient savedPhrases={savedPhrases} userId={user.id} />
    </div>
  )
}
