import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { getTodayChallenge, CHALLENGE_TYPE_META } from '@/lib/daily-challenge'
import DailyChallengeClient from '@/components/modules/DailyChallengeClient'

export default async function ChallengePage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const today = new Date().toISOString().split('T')[0]
  const challenge = getTodayChallenge(today)
  const meta = CHALLENGE_TYPE_META[challenge.type]

  // Check if already completed today
  const { data: completion } = await supabase
    .from('daily_completions')
    .select('completed, score')
    .eq('user_id', user.id)
    .eq('date', today)
    .single()

  // Streak: count consecutive days with completion
  const { data: completions } = await supabase
    .from('daily_completions')
    .select('date, completed')
    .eq('user_id', user.id)
    .eq('completed', true)
    .order('date', { ascending: false })
    .limit(60)

  let streak = 0
  if (completions && completions.length > 0) {
    const cur = new Date(today)
    for (const row of completions) {
      const rowDate = new Date(row.date)
      const diff = Math.round((cur.getTime() - rowDate.getTime()) / 86400000)
      if (diff === streak) streak++
      else break
    }
  }

  return (
    <div className="space-y-6 pb-6 max-w-xl mx-auto">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">{meta.emoji}</span>
          <h1 className="page-header">{meta.label}</h1>
        </div>
        <p className="text-surface-500 text-sm">{meta.description} · {today}</p>
      </div>

      <DailyChallengeClient
        challenge={challenge}
        userId={user.id}
        today={today}
        alreadyCompleted={completion?.completed ?? false}
        streak={streak}
      />
    </div>
  )
}
