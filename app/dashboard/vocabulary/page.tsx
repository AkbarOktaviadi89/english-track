import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import type { VocabWord } from '@/types'
import VocabularyClient from '@/components/modules/VocabularyClient'

export default async function VocabularyPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: words } = await supabase
    .from('vocabulary')
    .select('id, word, definition, example, level, category, mastered, review_count, next_review')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-6 pb-6">
      <div>
        <h1 className="page-header">Vocabulary</h1>
        <p className="text-surface-500 text-sm mt-1">Save words you encounter while studying. Mark them mastered as you learn them.</p>
      </div>
      <VocabularyClient initialWords={(words ?? []) as VocabWord[]} userId={user.id} />
    </div>
  )
}
