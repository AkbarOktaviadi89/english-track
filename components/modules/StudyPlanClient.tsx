'use client'

import { useState, useTransition } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import type { StudyPlan, PlanTask, TaskType } from '@/lib/study-plans'
import { CEFR_META, SKILL_META } from '@/types'
import {
  BookOpen, GraduationCap, BookMarked, Library,
  Headphones, MessageSquareText, PenLine,
  ChevronDown, ChevronUp, CheckCircle2, Circle,
  Trophy, CalendarDays, Clock, Flame
} from 'lucide-react'
import { cn } from '@/lib/utils'
import toast from 'react-hot-toast'

interface Props {
  plans: StudyPlan[]
  recommendedPlanId: string
  progressMap: Record<string, Record<string, boolean>>
  userId: string
}

const TASK_ICONS: Record<TaskType, React.ReactNode> = {
  topic:      <BookOpen className="w-3.5 h-3.5" />,
  grammar:    <GraduationCap className="w-3.5 h-3.5" />,
  vocabulary: <BookMarked className="w-3.5 h-3.5" />,
  material:   <Library className="w-3.5 h-3.5" />,
  practice:   <Headphones className="w-3.5 h-3.5" />,
  phrase:     <MessageSquareText className="w-3.5 h-3.5" />,
  writing:    <PenLine className="w-3.5 h-3.5" />,
}

const TASK_COLORS: Record<TaskType, string> = {
  topic:      '#259775',
  grammar:    '#7c3aed',
  vocabulary: '#2563eb',
  material:   '#0891b2',
  practice:   '#d97706',
  phrase:     '#db2777',
  writing:    '#059669',
}

export default function StudyPlanClient({ plans, recommendedPlanId, progressMap, userId }: Props) {
  const [activePlanId, setActivePlanId] = useState(recommendedPlanId)
  const [progress, setProgress] = useState(progressMap)
  const [expandedWeeks, setExpandedWeeks] = useState<Record<number, boolean>>({ 1: true })
  const [, startTransition] = useTransition()
  const supabase = createClient()

  const plan = plans.find(p => p.id === activePlanId) ?? plans[0]
  const planProgress = progress[plan.id] ?? {}

  // Calculate stats
  const totalTasks = plan.weeks.reduce((s, w) => s + w.tasks.length, 0)
  const completedTasks = Object.values(planProgress).filter(Boolean).length
  const completedWeeks = plan.weeks.filter(w => w.tasks.every(t => planProgress[t.id])).length

  // Determine current week (first incomplete week, or last week)
  const currentWeek = plan.weeks.find(w => !w.tasks.every(t => planProgress[t.id]))?.week ?? plan.weeks.length
  const totalMinutes = plan.weeks.reduce((s, w) => s + w.tasks.reduce((ws, t) => ws + t.duration, 0), 0)

  function toggleTask(task: PlanTask) {
    const current = planProgress[task.id] ?? false
    const newVal = !current
    setProgress(prev => ({
      ...prev,
      [plan.id]: { ...(prev[plan.id] ?? {}), [task.id]: newVal },
    }))
    startTransition(async () => {
      const { error } = await supabase
        .from('study_plan_progress')
        .upsert({
          user_id: userId,
          plan_id: plan.id,
          task_id: task.id,
          completed: newVal,
          completed_at: newVal ? new Date().toISOString() : null,
        }, { onConflict: 'user_id,plan_id,task_id' })
      if (error) {
        setProgress(prev => ({
          ...prev,
          [plan.id]: { ...(prev[plan.id] ?? {}), [task.id]: !newVal },
        }))
        toast.error('Failed to save')
      } else {
        if (newVal) {
          const weekTasks = plan.weeks.find(w => w.tasks.some(t => t.id === task.id))?.tasks ?? []
          const weekDone = weekTasks.every(t => t.id === task.id ? true : planProgress[t.id])
          if (weekDone) toast.success('Week complete! 🎉', { duration: 2000 })
          else toast.success('Task done!', { duration: 1000 })
        }
      }
    })
  }

  const lm = CEFR_META[plan.fromLevel]
  const pct = Math.round((completedTasks / totalTasks) * 100)

  return (
    <div>
      {/* Plan selector */}
      <div className="flex gap-3 mb-6 overflow-x-auto pb-1 scrollbar-thin">
        {plans.map(p => {
          const active = p.id === activePlanId
          const rec = p.id === recommendedPlanId
          const pm = progress[p.id] ?? {}
          const done = Object.values(pm).filter(Boolean).length
          const total = p.weeks.reduce((s, w) => s + w.tasks.length, 0)
          return (
            <button key={p.id} onClick={() => setActivePlanId(p.id)}
              className={cn('flex-shrink-0 px-4 py-3 rounded-2xl border text-left transition-all min-w-44',
                active ? 'border-current shadow-card' : 'border-surface-200 hover:border-surface-300 bg-white')}
              style={active ? { backgroundColor: p.color + '12', borderColor: p.color } : {}}>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-xs font-bold" style={{ color: active ? p.color : '#64748b' }}>
                  {p.fromLevel} → {p.toLevel}
                </span>
                {rec && <span className="badge text-xs bg-amber-100 text-amber-700">Recommended</span>}
              </div>
              <p className="text-sm font-semibold text-surface-900 leading-tight">{p.title}</p>
              <div className="progress-bar mt-2">
                <div className="progress-fill" style={{ width: `${Math.round((done / total) * 100)}%`, backgroundColor: p.color }} />
              </div>
              <p className="text-xs text-surface-400 mt-1">{done}/{total} tasks</p>
            </button>
          )
        })}
      </div>

      {/* Plan header */}
      <div className="card p-5 mb-5" style={{ borderLeft: `4px solid ${plan.color}` }}>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-lg font-semibold text-surface-900">{plan.title}</h2>
              <span className="badge text-xs" style={{ backgroundColor: lm.bgColor, color: lm.color }}>
                {plan.fromLevel} → {plan.toLevel}
              </span>
            </div>
            <p className="text-sm text-surface-500">{plan.description}</p>
          </div>
          <div className="flex gap-4 text-center flex-shrink-0">
            <div>
              <p className="text-2xl font-bold" style={{ color: plan.color }}>{pct}%</p>
              <p className="text-xs text-surface-400">Done</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-surface-900">{completedWeeks}/{plan.durationWeeks}</p>
              <p className="text-xs text-surface-400">Weeks</p>
            </div>
          </div>
        </div>
        <div className="progress-bar mt-4">
          <div className="progress-fill transition-all duration-700" style={{ width: `${pct}%`, backgroundColor: plan.color }} />
        </div>

        {/* Stats row */}
        <div className="flex gap-5 mt-4 text-sm">
          <div className="flex items-center gap-1.5 text-surface-600">
            <CalendarDays className="w-4 h-4 text-surface-400" />
            <span>{plan.durationWeeks} weeks</span>
          </div>
          <div className="flex items-center gap-1.5 text-surface-600">
            <Clock className="w-4 h-4 text-surface-400" />
            <span>~{Math.round(totalMinutes / 60)}h total</span>
          </div>
          <div className="flex items-center gap-1.5 text-surface-600">
            <Flame className="w-4 h-4 text-orange-400" />
            <span>Week {currentWeek} now</span>
          </div>
          {completedTasks === totalTasks && (
            <div className="flex items-center gap-1.5 text-brand-600 font-medium ml-auto">
              <Trophy className="w-4 h-4" /> Plan complete!
            </div>
          )}
        </div>
      </div>

      {/* Weeks */}
      <div className="space-y-3">
        {plan.weeks.map(week => {
          const weekDone = week.tasks.filter(t => planProgress[t.id]).length
          const weekTotal = week.tasks.length
          const weekComplete = weekDone === weekTotal
          const isCurrent = week.week === currentWeek
          const isOpen = expandedWeeks[week.week] ?? false

          return (
            <div key={week.week}
              className="card overflow-hidden transition-all"
              style={isCurrent ? { outline: `2px solid ${plan.color}`, outlineOffset: '2px' } : {}}>

              {/* Week header */}
              <button
                onClick={() => setExpandedWeeks(prev => ({ ...prev, [week.week]: !isOpen }))}
                className="w-full flex items-center gap-3 p-4 hover:bg-surface-100 transition-colors text-left">

                {/* Week number */}
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
                  style={weekComplete
                    ? { backgroundColor: plan.color, color: '#fff' }
                    : isCurrent
                      ? { backgroundColor: plan.color + '20', color: plan.color }
                      : { backgroundColor: '#f1f3f1', color: '#838b83' }}>
                  {weekComplete ? <CheckCircle2 className="w-4 h-4" /> : week.week}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium text-surface-900 text-sm">Week {week.week}: {week.theme}</span>
                    {isCurrent && (
                      <span className="badge text-xs font-semibold text-white"
                        style={{ backgroundColor: plan.color }}>This week</span>
                    )}
                    {weekComplete && (
                      <span className="badge text-xs bg-brand-50 text-brand-700">✓ Complete</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="progress-bar flex-1 max-w-24">
                      <div className="progress-fill" style={{ width: `${Math.round((weekDone / weekTotal) * 100)}%`, backgroundColor: plan.color }} />
                    </div>
                    <span className="text-xs text-surface-400">{weekDone}/{weekTotal} tasks</span>
                  </div>
                </div>

                {isOpen ? <ChevronUp className="w-4 h-4 text-surface-400 flex-shrink-0" />
                  : <ChevronDown className="w-4 h-4 text-surface-400 flex-shrink-0" />}
              </button>

              {/* Tasks */}
              {isOpen && (
                <div className="border-t border-surface-200">
                  {/* Week summary */}
                  <div className="px-4 py-2.5 bg-surface-100">
                    <p className="text-xs text-surface-600 italic">{week.summary}</p>
                  </div>

                  <div className="divide-y divide-surface-200">
                    {week.tasks.map(task => {
                      const done = planProgress[task.id] ?? false
                      const sm = SKILL_META[task.skill]
                      const color = TASK_COLORS[task.type]

                      return (
                        <div key={task.id} className={cn('flex items-center gap-3 px-4 py-3 transition-colors', done && 'bg-surface-100/50')}>
                          {/* Checkbox */}
                          <button onClick={() => toggleTask(task)} className="flex-shrink-0">
                            {done
                              ? <CheckCircle2 className="w-5 h-5" style={{ color: plan.color }} />
                              : <Circle className="w-5 h-5 text-surface-300 hover:text-surface-500 transition-colors" />}
                          </button>

                          {/* Task info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                              <span className="badge text-xs" style={{ backgroundColor: color + '15', color }}>
                                <span className="flex items-center gap-1">{TASK_ICONS[task.type]} {task.type}</span>
                              </span>
                              <span className="badge text-xs" style={{ backgroundColor: sm.color + '15', color: sm.color }}>
                                {sm.label}
                              </span>
                              <span className="text-xs text-surface-400">{task.duration} min</span>
                            </div>
                            <p className={cn('text-sm font-medium', done ? 'text-surface-400 line-through' : 'text-surface-800')}>
                              {task.title}
                            </p>
                            <p className="text-xs text-surface-500 mt-0.5 leading-snug">{task.description}</p>
                          </div>

                          {/* Open link */}
                          <Link href={task.link}
                            className="flex-shrink-0 px-2.5 py-1.5 rounded-lg text-xs font-medium border border-surface-200 text-surface-600 hover:border-brand-300 hover:text-brand-600 hover:bg-brand-50 transition-all">
                            Open →
                          </Link>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
