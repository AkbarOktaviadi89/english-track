'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { PlanTask } from '@/lib/study-plans'
import { TOPIC_CONTENT } from '@/lib/topic-content'
import { GRAMMAR_REFERENCE } from '@/lib/grammar-reference'
import { GRAMMAR_EXERCISES } from '@/lib/grammar-exercises'
import { MATERIALS } from '@/lib/materials'
import { PRESET_PHRASES, PHRASE_CATEGORIES } from '@/lib/phrase-data'
import type { PhraseCategory } from '@/lib/phrase-data'
import { CEFR_META, SKILL_META } from '@/types'
import type { CEFRLevel, Skill } from '@/types'
import {
  X, CheckCircle2, ChevronRight, Lightbulb, BookOpen,
  AlertCircle, ExternalLink, Play, RotateCcw,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import GrammarExerciseModal from '@/components/modules/GrammarExerciseModal'

interface Props {
  task: PlanTask
  planColor: string
  isDone: boolean
  onClose: () => void
  onToggleDone: () => void
}

// ─── Topic Panel ──────────────────────────────────────────────

function TopicPanel({ task }: { task: PlanTask }) {
  const content = TOPIC_CONTENT[task.detail ?? '']
  const sm = SKILL_META[task.skill]

  if (!content) {
    return (
      <div className="p-6 text-center text-surface-400 text-sm space-y-3">
        <BookOpen className="w-8 h-8 mx-auto text-surface-300" />
        <p>Konten untuk topik ini belum tersedia.</p>
        <Link href={task.link} className="btn-secondary inline-flex">
          Buka halaman Roadmap <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-5 p-5">
      <div>
        <p className="text-xs font-semibold text-surface-400 uppercase tracking-wide mb-2">Explanation</p>
        <p className="text-sm text-surface-700 leading-relaxed">{content.explanation}</p>
      </div>
      <div>
        <p className="text-xs font-semibold text-surface-400 uppercase tracking-wide mb-2">Key Points</p>
        <ul className="space-y-2">
          {content.keyPoints.map((pt, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
                style={{ backgroundColor: sm.color + '18', color: sm.color }}>{i + 1}</span>
              <span className="text-sm text-surface-700 leading-snug">{pt}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-semibold text-surface-400 uppercase tracking-wide">Examples</p>
        {content.examples.map((ex, i) => (
          <div key={i} className="rounded-xl border border-surface-200 overflow-hidden">
            <div className="px-4 py-3 space-y-1" style={{ backgroundColor: sm.color + '08' }}>
              {ex.lines.map((line, j) => (
                <p key={j} className="text-sm font-medium text-surface-800">{line}</p>
              ))}
            </div>
            {ex.note && (
              <div className="px-4 py-2 bg-surface-50 border-t border-surface-200">
                <p className="text-xs text-surface-500 italic">📝 {ex.note}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
        <div className="flex items-center gap-1.5 mb-2">
          <Lightbulb className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
          <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">Practice Tips</span>
        </div>
        <ul className="space-y-1.5">
          {content.tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-amber-800">
              <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-amber-500" /> {tip}
            </li>
          ))}
        </ul>
      </div>
      {content.quiz && content.quiz.length > 0 && (
        <MiniQuiz quiz={content.quiz} color={sm.color} />
      )}
    </div>
  )
}

// ─── Mini Quiz ────────────────────────────────────────────────

interface QuizQ { q: string; options: string[]; answer: number }

function MiniQuiz({ quiz, color }: { quiz: QuizQ[]; color: string }) {
  const [idx, setIdx] = useState(0)
  const [sel, setSel] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  function pick(i: number) {
    if (sel !== null) return
    setSel(i)
    if (i === quiz[idx].answer) setScore(s => s + 1)
    setTimeout(() => {
      if (idx + 1 >= quiz.length) setDone(true)
      else { setIdx(n => n + 1); setSel(null) }
    }, 900)
  }

  function restart() { setIdx(0); setSel(null); setScore(0); setDone(false) }

  return (
    <div className="rounded-xl border border-surface-200 p-4">
      <p className="text-xs font-semibold text-surface-500 uppercase tracking-wide mb-3">Quick Quiz</p>
      {done ? (
        <div className="text-center py-2">
          <p className="text-lg font-bold text-surface-900">{score}/{quiz.length}</p>
          <p className="text-xs text-surface-400 mb-3">{score === quiz.length ? '🎉 Perfect!' : 'Try again!'}</p>
          <button onClick={restart} className="btn-secondary text-xs px-3 py-1.5">
            <RotateCcw className="w-3 h-3" /> Retry
          </button>
        </div>
      ) : (
        <div>
          <p className="text-xs text-surface-400 mb-2">{idx + 1}/{quiz.length}</p>
          <p className="text-sm font-semibold text-surface-900 mb-3">{quiz[idx].q}</p>
          <div className="space-y-2">
            {quiz[idx].options.map((opt, i) => {
              const revealed = sel !== null
              const isCorrect = i === quiz[idx].answer
              const isSelected = sel === i
              return (
                <button key={i} onClick={() => pick(i)} disabled={revealed}
                  className={cn('w-full text-left px-3 py-2 rounded-lg border text-xs transition-all',
                    !revealed && 'border-surface-200 hover:border-brand-300 hover:bg-brand-50',
                    revealed && isCorrect && 'border-brand-400 bg-brand-50 text-brand-800',
                    revealed && isSelected && !isCorrect && 'border-red-400 bg-red-50 text-red-700',
                    revealed && !isSelected && !isCorrect && 'opacity-40'
                  )}>
                  <span className="font-semibold mr-1.5 text-surface-400">{String.fromCharCode(65 + i)}.</span>
                  {opt}
                  {revealed && isCorrect && <span className="ml-1 text-brand-600">✓</span>}
                  {revealed && isSelected && !isCorrect && <span className="ml-1 text-red-500">✗</span>}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Grammar Panel ────────────────────────────────────────────

function GrammarPanel({ task }: { task: PlanTask }) {
  const entry = GRAMMAR_REFERENCE.find(r => r.id === task.detail)
  const [showExercises, setShowExercises] = useState(false)

  if (!entry) return (
    <div className="p-6 text-center space-y-3">
      <p className="text-surface-400 text-sm">Buka Grammar Reference untuk aturan ini.</p>
      <Link href={task.link} className="btn-secondary inline-flex">
        Grammar Reference <ExternalLink className="w-3.5 h-3.5" />
      </Link>
    </div>
  )

  const hasExercises = (GRAMMAR_EXERCISES[entry.id]?.length ?? 0) > 0

  return (
    <div className="space-y-5 p-5">
      {entry.formula && (
        <div className="rounded-xl bg-surface-100 px-4 py-3">
          <p className="text-xs font-semibold text-surface-500 uppercase tracking-wide mb-1">Formula</p>
          <pre className="text-sm font-mono text-surface-800 whitespace-pre-wrap">{entry.formula}</pre>
        </div>
      )}
      <div>
        <p className="text-xs font-semibold text-surface-400 uppercase tracking-wide mb-2">Explanation</p>
        <p className="text-sm text-surface-700 leading-relaxed">{entry.explanation}</p>
      </div>
      <div>
        <p className="text-xs font-semibold text-surface-400 uppercase tracking-wide mb-2">Key Rules</p>
        <ul className="space-y-2">
          {entry.rules.map((r, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
              <span className="text-sm text-surface-700">{r}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-semibold text-surface-400 uppercase tracking-wide">Examples</p>
        {entry.examples.map((ex, i) => (
          <div key={i} className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-surface-700 italic">{ex}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-red-200 bg-red-50 p-4">
        <div className="flex items-center gap-1.5 mb-2">
          <AlertCircle className="w-3.5 h-3.5 text-red-500" />
          <p className="text-xs font-semibold text-red-700 uppercase tracking-wide">Common Mistakes</p>
        </div>
        {entry.mistakes.map((m, i) => (
          <p key={i} className="text-xs text-red-800 font-mono leading-snug">{m}</p>
        ))}
      </div>
      {hasExercises && (
        <button onClick={() => setShowExercises(true)}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium transition-colors">
          <Play className="w-4 h-4" /> Start exercises ({GRAMMAR_EXERCISES[entry.id].length} questions)
        </button>
      )}
      {showExercises && (
        <GrammarExerciseModal entry={entry} onClose={() => setShowExercises(false)} />
      )}
    </div>
  )
}

// ─── Materials Panel ──────────────────────────────────────────

function MaterialsPanel({ task }: { task: PlanTask }) {
  const level = task.link.includes('materials') ? 'B1' as CEFRLevel : 'A1' as CEFRLevel
  // Try to extract level from description
  const levelMatch = task.description.match(/\b(A1|A2|B1|B2|C1|C2)\b/)
  const targetLevel = (levelMatch?.[1] ?? 'B1') as CEFRLevel

  const allMaterials = MATERIALS[targetLevel] ?? MATERIALS['B1']
  const skillMaterials = allMaterials.filter(m => m.skill === task.skill).slice(0, 4)
  const materials = skillMaterials.length > 0 ? skillMaterials : allMaterials.slice(0, 4)

  const TYPE_LABELS: Record<string, string> = {
    website: '🌐', youtube: '▶️', book: '📖', app: '📱', podcast: '🎧', course: '🎓',
  }

  return (
    <div className="p-5 space-y-4">
      <p className="text-xs text-surface-500">
        Sumber belajar untuk <strong>{SKILL_META[task.skill].label}</strong> level <strong>{targetLevel}</strong>
      </p>
      {materials.map(m => (
        <div key={m.id} className="card p-4">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <p className="text-sm font-semibold text-surface-900 leading-snug">{m.title}</p>
            <span className="text-lg flex-shrink-0">{TYPE_LABELS[m.type] ?? '📄'}</span>
          </div>
          <p className="text-xs text-surface-500 leading-relaxed mb-2">{m.description}</p>
          <div className="flex items-center justify-between">
            <span className={cn('text-xs font-medium', m.free ? 'text-brand-600' : 'text-surface-400')}>
              {m.free ? 'Free' : 'Paid'}
            </span>
            {m.url ? (
              <a href={m.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-700">
                Buka <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span className="text-xs text-surface-400">Search online</span>
            )}
          </div>
        </div>
      ))}
      <Link href="/dashboard/materials" className="btn-secondary w-full justify-center text-xs">
        Lihat semua materials <ChevronRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  )
}

// ─── Phrase Panel ─────────────────────────────────────────────

function PhrasePanel({ task }: { task: PlanTask }) {
  const catMap: Record<string, PhraseCategory> = {
    speaking: 'ielts_speaking',
    writing: 'ielts_writing',
    reading: 'academic',
    listening: 'discourse',
    vocabulary: 'academic',
    grammar: 'discourse',
  }
  const cat = catMap[task.skill] ?? 'academic'
  const phrases = PRESET_PHRASES.filter(p => p.category === cat || p.category === 'discourse').slice(0, 6)
  const catMeta = PHRASE_CATEGORIES[cat]

  return (
    <div className="p-5 space-y-3">
      <p className="text-xs text-surface-500 mb-1">Frasa berguna untuk <strong>{SKILL_META[task.skill].label}</strong>:</p>
      {phrases.map((p, i) => (
        <div key={i} className="card p-3">
          <p className="text-sm font-semibold text-surface-900 italic mb-1">"{p.phrase}"</p>
          <p className="text-xs text-surface-600">{p.meaning}</p>
          {p.example && <p className="text-xs text-surface-400 mt-1 italic">{p.example.slice(0, 80)}…</p>}
          <span className="badge text-xs mt-2" style={{ backgroundColor: catMeta.color + '15', color: catMeta.color }}>
            {catMeta.label}
          </span>
        </div>
      ))}
      <Link href="/dashboard/phrases" className="btn-secondary w-full justify-center text-xs">
        Phrase Bank lengkap <ChevronRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  )
}

// ─── Generic Panel (vocabulary, practice, writing, review) ────

function GenericPanel({ task }: { task: PlanTask }) {
  const ICONS: Record<string, string> = {
    vocabulary: '📝', practice: '⏱️', writing: '✍️',
  }
  const DESCRIPTIONS: Record<string, string> = {
    vocabulary: 'Tambah kata baru yang kamu temui dan mark mastered setelah ingat.',
    practice:   'Catat sesi belajar kamu — kategori, skill, durasi, dan catatan.',
    writing:    'Tulis dan submit teks ke AI untuk mendapat feedback langsung.',
  }

  return (
    <div className="p-6 flex flex-col items-center text-center gap-4">
      <span className="text-5xl">{ICONS[task.type] ?? '📖'}</span>
      <div>
        <p className="font-semibold text-surface-900 mb-2">{task.title}</p>
        <p className="text-sm text-surface-500 leading-relaxed">
          {DESCRIPTIONS[task.type] ?? task.description}
        </p>
      </div>
      <Link href={task.link} className="btn-primary">
        Buka halaman <ExternalLink className="w-4 h-4" />
      </Link>
    </div>
  )
}

// ─── Main Panel ───────────────────────────────────────────────

export default function StudyTaskPanel({ task, planColor, isDone, onClose, onToggleDone }: Props) {
  const sm = SKILL_META[task.skill]
  const lm = CEFR_META['B1' as CEFRLevel] // fallback

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const TASK_TYPE_LABELS: Record<string, string> = {
    topic: 'Lesson', grammar: 'Grammar', material: 'Materials',
    vocabulary: 'Vocabulary', phrase: 'Phrases', practice: 'Log Session',
    writing: 'Writing', review: 'Review',
  }

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" onClick={onClose} />

      {/* Panel */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md flex flex-col bg-white shadow-elevated animate-in"
        style={{ animationDuration: '200ms' }}>

        {/* Header */}
        <div className="flex items-start gap-3 px-5 pt-5 pb-4 border-b border-surface-200 flex-shrink-0">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="badge text-xs font-semibold" style={{ backgroundColor: planColor + '18', color: planColor }}>
                {TASK_TYPE_LABELS[task.type] ?? task.type}
              </span>
              <span className="badge text-xs" style={{ backgroundColor: sm.color + '18', color: sm.color }}>
                {sm.label}
              </span>
              <span className="text-xs text-surface-400">{task.duration} min</span>
              {isDone && <span className="badge text-xs bg-brand-50 text-brand-700"><CheckCircle2 className="w-3 h-3 inline mr-0.5" />Done</span>}
            </div>
            <h2 className="font-semibold text-surface-900 text-base leading-snug">{task.title}</h2>
            <p className="text-xs text-surface-400 mt-0.5">{task.description}</p>
          </div>
          <button onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-surface-400 hover:text-surface-700 hover:bg-surface-100 flex-shrink-0">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto scrollbar-thin">
          {task.type === 'topic'      && <TopicPanel task={task} />}
          {task.type === 'grammar'    && <GrammarPanel task={task} />}
          {task.type === 'material'   && <MaterialsPanel task={task} />}
          {task.type === 'phrase'     && <PhrasePanel task={task} />}
          {(task.type === 'vocabulary' || task.type === 'practice' || task.type === 'writing') && (
            <GenericPanel task={task} />
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-surface-200 flex-shrink-0 flex items-center gap-3">
          <button onClick={onToggleDone}
            className={cn(
              'flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium border transition-all',
              isDone
                ? 'border-surface-200 text-surface-500 hover:bg-surface-50'
                : 'text-white border-transparent'
            )}
            style={isDone ? {} : { backgroundColor: planColor }}>
            <CheckCircle2 className="w-4 h-4" />
            {isDone ? 'Tandai belum selesai' : 'Tandai selesai'}
          </button>
          <button onClick={onClose} className="btn-secondary px-4">Tutup</button>
        </div>
      </div>
    </>
  )
}
