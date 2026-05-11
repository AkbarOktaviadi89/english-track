'use client'

import { useState, useTransition } from 'react'
import { createClient } from '@/lib/supabase/client'
import { TEST_CURRICULA } from '@/lib/curriculum'
import { SKILL_META } from '@/types'
import type { TestType, Skill } from '@/types'
import { CheckCircle2, Circle, ChevronDown, ChevronUp, Lightbulb } from 'lucide-react'
import { cn } from '@/lib/utils'
import toast from 'react-hot-toast'

interface Props {
  curricula: typeof TEST_CURRICULA
  initialProgress: Record<string, { completed: boolean; score?: number; notes?: string }>
  userId: string
  defaultTest: TestType
}

const DIFFICULTY_COLORS = {
  foundation: { bg: '#f0fdf4', text: '#15803d', label: 'Foundation' },
  intermediate: { bg: '#fffbeb', text: '#b45309', label: 'Intermediate' },
  advanced: { bg: '#fdf2f8', text: '#9d174d', label: 'Advanced' },
}

export default function LessonsClient({ curricula, initialProgress, userId, defaultTest }: Props) {
  const [activeTest, setActiveTest] = useState<TestType>(defaultTest)
  const [progress, setProgress] = useState(initialProgress)
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})
  const [, startTransition] = useTransition()
  const supabase = createClient()

  const tests = Object.keys(curricula) as TestType[]
  const cur = curricula[activeTest]

  async function toggleModule(moduleId: string) {
    const key = `${activeTest}_${moduleId}`
    const current = progress[key]
    const newCompleted = !current?.completed
    setProgress(prev => ({ ...prev, [key]: { ...prev[key], completed: newCompleted } }))

    startTransition(async () => {
      const { error } = await supabase
        .from('test_module_progress')
        .upsert({
          user_id: userId,
          test_type: activeTest,
          module_id: moduleId,
          completed: newCompleted,
          completed_at: newCompleted ? new Date().toISOString() : null,
        }, { onConflict: 'user_id,test_type,module_id' })
      if (error) {
        setProgress(prev => ({ ...prev, [key]: { ...prev[key], completed: !newCompleted } }))
        toast.error('Failed to save')
      } else {
        toast.success(newCompleted ? 'Module completed!' : 'Module unmarked')
      }
    })
  }

  const completedCount = cur.modules.filter(m => progress[`${activeTest}_${m.id}`]?.completed).length
  const totalCount = cur.modules.length
  const completionPct = Math.round((completedCount / totalCount) * 100)

  return (
    <div>
      {/* Test selector */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1 scrollbar-thin">
        {tests.map(test => {
          const c = curricula[test]
          const isActive = test === activeTest
          const done = c.modules.filter(m => progress[`${test}_${m.id}`]?.completed).length
          return (
            <button key={test}
              onClick={() => setActiveTest(test)}
              className={cn(
                'flex-shrink-0 flex flex-col items-start px-4 py-3 rounded-xl text-left border transition-all duration-150 text-surface-700',
                isActive ? 'border-current' : 'border-surface-200 hover:border-surface-300'
              )}
              style={isActive ? { backgroundColor: c.bg, color: c.color, borderColor: c.color + '60' } : {}}>
              <span className="text-sm font-semibold">{c.name}</span>
              <span className="text-xs opacity-70 mt-0.5">{done}/{c.modules.length} done</span>
            </button>
          )
        })}
      </div>

      {/* Test overview */}
      <div className="card p-5 mb-5" style={{ borderLeft: `4px solid ${cur.color}` }}>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h2 className="section-title text-base">{cur.full_name}</h2>
            <p className="text-sm text-surface-500 mt-1">{cur.description}</p>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-2xl font-bold" style={{ color: cur.color }}>{completionPct}%</div>
            <div className="text-xs text-surface-400">{completedCount}/{totalCount} modules</div>
          </div>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${completionPct}%`, backgroundColor: cur.color }} />
        </div>
        <div className="flex gap-6 mt-3 text-xs text-surface-500">
          <span>Scale: <strong className="text-surface-800">{cur.scale}</strong></span>
          <span>Target: <strong className="text-surface-800">{cur.passing}</strong></span>
        </div>
      </div>

      {/* Modules list */}
      <div className="space-y-3">
        {cur.modules.map(module => {
          const key = `${activeTest}_${module.id}`
          const isCompleted = progress[key]?.completed ?? false
          const isOpen = expanded[module.id] === true
          const sm = SKILL_META[module.skill as Skill]
          const diff = DIFFICULTY_COLORS[module.difficulty]

          return (
            <div key={module.id} className={cn(
              'card overflow-hidden transition-all duration-200',
              isCompleted && 'opacity-75'
            )}>
              {/* Module header */}
              <div className="flex items-center gap-3 p-4">
                <button onClick={() => toggleModule(module.id)} className="flex-shrink-0">
                  {isCompleted
                    ? <CheckCircle2 className="w-5 h-5" style={{ color: cur.color }} />
                    : <Circle className="w-5 h-5 text-surface-300 hover:text-surface-500 transition-colors" />
                  }
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xs font-mono text-surface-500">{module.number}</span>
                    <span className="text-sm font-medium text-surface-900">{module.title}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="skill-chip" style={{ backgroundColor: sm.color + '18', color: sm.color }}>
                      {sm.label}
                    </span>
                    <span className="skill-chip" style={{ backgroundColor: diff.bg, color: diff.text }}>
                      {diff.label}
                    </span>
                    <span className="text-xs text-surface-400">{module.duration}</span>
                  </div>
                </div>

                <button onClick={() => setExpanded(prev => ({ ...prev, [module.id]: !isOpen }))}
                  className="btn-ghost py-1 px-2 flex-shrink-0">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {/* Module details */}
              {isOpen && (
                <div className="border-t border-surface-200 p-4 space-y-4 bg-surface-100/50">
                  <p className="text-sm text-surface-600 leading-relaxed">{module.description}</p>

                  <div>
                    <div className="flex items-center gap-1.5 mb-2">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                      <span className="text-xs font-semibold text-surface-700 uppercase tracking-wide">Study tips</span>
                    </div>
                    <ul className="space-y-1.5">
                      {module.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-surface-600">
                          <span className="text-surface-400 mt-0.5 flex-shrink-0">→</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button onClick={() => toggleModule(module.id)}
                    className={cn('w-full py-2.5 rounded-xl text-sm font-medium transition-all duration-150 border',
                      isCompleted
                        ? 'border-surface-200 text-surface-500 hover:bg-surface-100'
                        : 'text-white'
                    )}
                    style={!isCompleted ? { backgroundColor: cur.color } : {}}>
                    {isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
