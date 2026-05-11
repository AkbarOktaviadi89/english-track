import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { IELTS_TOPICS } from '@/lib/ielts-vocabulary'
import IELTSVocabClient from '@/components/modules/IELTSVocabClient'

export default async function IELTSVocabPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  // Get words already saved by this user to avoid duplicates
  const { data: saved } = await supabase
    .from('vocabulary')
    .select('word')
    .eq('user_id', user.id)

  const savedWords = new Set((saved ?? []).map(r => r.word.toLowerCase()))

  return (
    <div className="space-y-6 pb-6">
      <div>
        <h1 className="page-header">IELTS Topic Vocabulary</h1>
        <p className="text-surface-500 text-sm mt-1">
          300 essential words across 15 IELTS topics. Save individual words or import an entire topic to your Vocabulary list.
        </p>
      </div>
      <IELTSVocabClient
        topics={IELTS_TOPICS}
        savedWords={savedWords}
        userId={user.id}
      />
    </div>
  )
}
