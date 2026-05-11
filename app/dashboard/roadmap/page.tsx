import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { CEFR_CURRICULUM } from '@/lib/curriculum'
import { CEFR_META } from '@/types'
import type { CEFRLevel } from '@/types'
import RoadmapClient from '@/components/modules/RoadmapClient'

export default async function RoadmapPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('current_level')
    .eq('id', user.id)
    .single()

  const { data: topicRows } = await supabase
    .from('topic_progress')
    .select('topic_key, completed')
    .eq('user_id', user.id)

  const topicProgress: Record<string, boolean> = {}
  topicRows?.forEach(r => { topicProgress[r.topic_key] = r.completed })

  const currentLevel = (profile?.current_level ?? 'B1') as CEFRLevel
  const levels = Object.keys(CEFR_CURRICULUM) as CEFRLevel[]

  // Completion stats per level
  const levelStats = levels.map(level => {
    const curriculum = CEFR_CURRICULUM[level]
    const allTopics = curriculum.phases.flatMap(p => p.topics)
    const done = allTopics.filter(t => topicProgress[t.key]).length
    return { level, total: allTopics.length, done }
  })

  return (
    <div className="space-y-6 pb-6">
      <div>
        <h1 className="page-header">General English Roadmap</h1>
        <p className="text-surface-500 text-sm mt-1">CEFR A1 → C2 curriculum. Check off topics as you master them.</p>
      </div>

      {/* Level overview pills */}
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-3">
        {levelStats.map(({ level, total, done }) => {
          const meta = CEFR_META[level]
          const isCurrent = level === currentLevel
          const pct = Math.round((done / total) * 100)
          return (
            <div key={level} className="card p-3 text-center relative"
              style={isCurrent ? { outline: `2px solid ${meta.color}`, outlineOffset: '2px' } : {}}>
              {isCurrent && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs font-medium px-2 py-0.5 rounded-full text-white"
                  style={{ backgroundColor: meta.color }}>
                  Current
                </div>
              )}
              <div className="text-lg font-bold mt-1" style={{ color: meta.color }}>{level}</div>
              <div className="text-xs text-surface-500 mb-2">{meta.label}</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${pct}%`, backgroundColor: meta.color }} />
              </div>
              <div className="text-xs text-surface-400 mt-1">{done}/{total}</div>
            </div>
          )
        })}
      </div>

      <RoadmapClient
        currentLevel={currentLevel}
        curriculum={CEFR_CURRICULUM}
        initialProgress={topicProgress}
        userId={user.id}
      />
    </div>
  )
}
