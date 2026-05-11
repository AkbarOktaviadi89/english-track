import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import type { VocabWord } from '@/types'
import ReviewClient from '@/components/modules/ReviewClient'

export default async function ReviewPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const today = new Date().toISOString().split('T')[0]

  // Words due for review: not mastered OR next_review is today/past/null
  const { data: words } = await supabase
    .from('vocabulary')
    .select('id, word, definition, example, level, category, mastered, review_count, next_review')
    .eq('user_id', user.id)
    .eq('mastered', false)
    .or(`next_review.is.null,next_review.lte.${today}`)
    .order('review_count', { ascending: true })
    .limit(30)

  const totalVocab = await supabase
    .from('vocabulary')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', user.id)

  const due = (words ?? []) as VocabWord[]
  const masteredCount = await supabase
    .from('vocabulary')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', user.id)
    .eq('mastered', true)

  return (
    <div className="space-y-6 pb-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="page-header">Vocabulary Review</h1>
          <p className="text-surface-500 text-sm mt-1">
            Spaced repetition — flip each card and rate your recall.
          </p>
        </div>
        <div className="text-right text-sm hidden sm:block">
          <p className="font-semibold text-surface-900">{due.length} due today</p>
          <p className="text-surface-400 text-xs">
            {masteredCount.count ?? 0} mastered · {totalVocab.count ?? 0} total
          </p>
        </div>
      </div>

      {due.length > 0 && (
        <div className="flex gap-3 flex-wrap">
          {[
            { label: 'Due today', value: due.length, color: '#259775' },
            { label: 'Mastered', value: masteredCount.count ?? 0, color: '#2563eb' },
            { label: 'Total words', value: totalVocab.count ?? 0, color: '#7c3aed' },
          ].map(({ label, value, color }) => (
            <div key={label} className="stat-card flex-1 min-w-28">
              <p className="text-2xl font-semibold" style={{ color }}>{value}</p>
              <p className="text-xs text-surface-500 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      )}

      <ReviewClient words={due} userId={user.id} />
    </div>
  )
}
