'use client'

import { useState, useTransition } from 'react'
import { createClient } from '@/lib/supabase/client'
import { CEFR_CURRICULUM } from '@/lib/curriculum'
import { CEFR_META, SKILL_META } from '@/types'
import type { CEFRLevel, Skill } from '@/types'
import { CheckCircle2, Circle, ChevronDown, ChevronUp, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'
import toast from 'react-hot-toast'
import TopicModal from '@/components/modules/TopicModal'
import { TOPIC_CONTENT } from '@/lib/topic-content'

interface Props {
  currentLevel: CEFRLevel
  curriculum: typeof CEFR_CURRICULUM
  initialProgress: Record<string, boolean>
  userId: string
}

interface StudyTarget {
  key: string
  title: string
  desc: string
  skill: Skill
  level: CEFRLevel
}

export default function RoadmapClient({ currentLevel, curriculum, initialProgress, userId }: Props) {
  const [activeLevel, setActiveLevel] = useState<CEFRLevel>(currentLevel)
  const [progress, setProgress] = useState(initialProgress)
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})
  const [studyTarget, setStudyTarget] = useState<StudyTarget | null>(null)
  const [, startTransition] = useTransition()
  const supabase = createClient()
  const levels = Object.keys(curriculum) as CEFRLevel[]

  async function toggleTopic(key: string) {
    const newVal = !progress[key]
    setProgress(prev => ({ ...prev, [key]: newVal }))
    startTransition(async () => {
      const { error } = await supabase
        .from('topic_progress')
        .upsert({
          user_id: userId,
          topic_key: key,
          completed: newVal,
          completed_at: newVal ? new Date().toISOString() : null,
        }, { onConflict: 'user_id,topic_key' })
      if (error) {
        setProgress(prev => ({ ...prev, [key]: !newVal }))
        toast.error('Failed to save — please try again')
      } else {
        toast.success(newVal ? 'Topic marked as done!' : 'Unmarked')
      }
    })
  }

  const cur = curriculum[activeLevel]
  const meta = CEFR_META[activeLevel]

  return (
    <div>
      {/* Level tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1 scrollbar-thin">
        {levels.map(level => {
          const m = CEFR_META[level]
          const isActive = level === activeLevel
          return (
            <button key={level} onClick={() => setActiveLevel(level)}
              className={cn(
                'flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150 border',
                isActive ? 'border-current' : 'border-surface-200 text-surface-500 hover:border-surface-300'
              )}
              style={isActive ? { backgroundColor: m.bgColor, color: m.color, borderColor: m.borderColor } : {}}>
              {level} · {m.label}
            </button>
          )
        })}
      </div>

      {/* Level header */}
      <div className="card p-5 mb-4" style={{ borderLeft: `4px solid ${meta.color}` }}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-surface-900">{cur.tagline}</h2>
            <p className="text-sm text-surface-500 mt-1">Estimated: {cur.duration}</p>
          </div>
          <div className="flex gap-4 text-right flex-shrink-0">
            <div>
              <p className="text-xs text-surface-400">IELTS</p>
              <p className="text-sm font-semibold text-surface-700">{cur.ielts}</p>
            </div>
            <div>
              <p className="text-xs text-surface-400">TOEFL</p>
              <p className="text-sm font-semibold text-surface-700">{cur.toefl}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Phases */}
      <div className="space-y-3">
        {cur.phases.map((phase, pi) => {
          const phaseKey = `${activeLevel}_${pi}`
          const isOpen = expanded[phaseKey] !== false
          const done = phase.topics.filter(t => progress[t.key]).length
          const pct = Math.round((done / phase.topics.length) * 100)
          const sm = SKILL_META[phase.skill]

          return (
            <div key={phaseKey} className="card overflow-hidden">
              {/* Phase header */}
              <button
                onClick={() => setExpanded(prev => ({ ...prev, [phaseKey]: !isOpen }))}
                className="w-full flex items-center gap-3 p-4 hover:bg-surface-100 transition-colors text-left">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: sm.color + '18', color: sm.color }}>
                  <span className="text-xs font-bold">{pi + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-surface-900 text-sm">{phase.title}</span>
                    <span className="badge text-xs" style={{ backgroundColor: sm.color + '18', color: sm.color }}>
                      {sm.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="progress-bar flex-1" style={{ maxWidth: '120px' }}>
                      <div className="progress-fill" style={{ width: `${pct}%`, backgroundColor: sm.color }} />
                    </div>
                    <span className="text-xs text-surface-400">{done}/{phase.topics.length}</span>
                  </div>
                </div>
                {isOpen
                  ? <ChevronUp className="w-4 h-4 text-surface-400 flex-shrink-0" />
                  : <ChevronDown className="w-4 h-4 text-surface-400 flex-shrink-0" />}
              </button>

              {/* Topics list */}
              {isOpen && (
                <div className="border-t border-surface-200 divide-y divide-surface-200">
                  {phase.topics.map(topic => {
                    const isDone = !!progress[topic.key]
                    const hasContent = !!TOPIC_CONTENT[topic.key]
                    return (
                      <div key={topic.key} className="flex items-center gap-3 px-4 py-3 hover:bg-surface-100 transition-colors">
                        {/* Checkbox toggle */}
                        <button onClick={() => toggleTopic(topic.key)} className="flex-shrink-0">
                          {isDone
                            ? <CheckCircle2 className="w-4 h-4" style={{ color: sm.color }} />
                            : <Circle className="w-4 h-4 text-surface-300 hover:text-surface-500 transition-colors" />}
                        </button>

                        {/* Topic info */}
                        <div className="flex-1 min-w-0">
                          <p className={cn('text-sm font-medium', isDone ? 'text-surface-400 line-through' : 'text-surface-800')}>
                            {topic.title}
                          </p>
                          <p className="text-xs text-surface-400 mt-0.5">{topic.desc}</p>
                        </div>

                        {/* Study button */}
                        <button
                          onClick={() => setStudyTarget({ key: topic.key, title: topic.title, desc: topic.desc, skill: phase.skill as Skill, level: activeLevel })}
                          className={cn(
                            'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium flex-shrink-0 transition-all',
                            hasContent
                              ? 'hover:text-white border border-current'
                              : 'text-surface-300 border border-surface-200 cursor-default'
                          )}
                          style={hasContent ? { color: sm.color, borderColor: sm.color + '60' } : {}}
                          disabled={!hasContent}
                          title={hasContent ? 'Open lesson' : 'Content coming soon'}>
                          <BookOpen className="w-3 h-3" />
                          {hasContent ? 'Study' : 'Soon'}
                        </button>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Topic modal */}
      {studyTarget && (
        <TopicModal
          topicKey={studyTarget.key}
          topicTitle={studyTarget.title}
          topicDesc={studyTarget.desc}
          skill={studyTarget.skill}
          level={studyTarget.level}
          isDone={!!progress[studyTarget.key]}
          onClose={() => setStudyTarget(null)}
          onToggleDone={() => toggleTopic(studyTarget.key)}
        />
      )}
    </div>
  )
}
