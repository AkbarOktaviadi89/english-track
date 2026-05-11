'use client'

import { useState, useEffect } from 'react'
import { X, BookOpen, Lightbulb, MessageSquare, Target, ChevronRight, Check } from 'lucide-react'
import { TOPIC_CONTENT } from '@/lib/topic-content'
import { SKILL_META, CEFR_META } from '@/types'
import type { Skill, CEFRLevel } from '@/types'
import { cn } from '@/lib/utils'

interface Props {
  topicKey: string
  topicTitle: string
  topicDesc: string
  skill: Skill
  level: CEFRLevel
  isDone: boolean
  onClose: () => void
  onToggleDone: () => void
}

type Tab = 'learn' | 'examples' | 'quiz'

export default function TopicModal({ topicKey, topicTitle, topicDesc, skill, level, isDone, onClose, onToggleDone }: Props) {
  const [tab, setTab] = useState<Tab>('learn')
  const [quizIndex, setQuizIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [quizDone, setQuizDone] = useState(false)
  const [score, setScore] = useState(0)

  const content = TOPIC_CONTENT[topicKey]
  const sm = SKILL_META[skill]
  const lm = CEFR_META[level]

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // Reset quiz when topic changes
  useEffect(() => {
    setTab('learn')
    setQuizIndex(0)
    setSelected(null)
    setQuizDone(false)
    setScore(0)
  }, [topicKey])

  function handleAnswer(i: number) {
    if (selected !== null || !content?.quiz) return
    setSelected(i)
    const correct = i === content.quiz[quizIndex].answer
    if (correct) setScore(s => s + 1)

    setTimeout(() => {
      const next = quizIndex + 1
      if (next >= (content.quiz?.length ?? 0)) {
        setQuizDone(true)
      } else {
        setQuizIndex(next)
        setSelected(null)
      }
    }, 1100)
  }

  const hasQuiz = content?.quiz && content.quiz.length > 0

  const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'learn',    label: 'Lesson',   icon: <BookOpen className="w-3.5 h-3.5" /> },
    { id: 'examples', label: 'Examples', icon: <MessageSquare className="w-3.5 h-3.5" /> },
    ...(hasQuiz ? [{ id: 'quiz' as Tab, label: 'Quiz', icon: <Target className="w-3.5 h-3.5" /> }] : []),
  ]

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" onClick={onClose} />

      {/* Panel */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-lg flex flex-col bg-white shadow-elevated animate-in"
        style={{ animationDuration: '200ms' }}>

        {/* Header */}
        <div className="flex items-start gap-3 px-5 pt-5 pb-4 border-b border-surface-200 flex-shrink-0">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="badge text-xs font-semibold"
                style={{ backgroundColor: lm.bgColor, color: lm.color }}>
                {level}
              </span>
              <span className="badge text-xs"
                style={{ backgroundColor: sm.color + '18', color: sm.color }}>
                {sm.label}
              </span>
              {isDone && (
                <span className="badge text-xs bg-brand-50 text-brand-700">
                  <Check className="w-3 h-3" /> Completed
                </span>
              )}
            </div>
            <h2 className="text-lg font-semibold text-surface-900 leading-snug">{topicTitle}</h2>
            <p className="text-sm text-surface-500 mt-0.5">{topicDesc}</p>
          </div>
          <button onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-surface-400 hover:text-surface-700 hover:bg-surface-100 transition-colors flex-shrink-0 mt-0.5">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 px-5 py-2 border-b border-surface-200 flex-shrink-0">
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all',
                tab === t.id
                  ? 'bg-surface-900 text-white'
                  : 'text-surface-500 hover:text-surface-800 hover:bg-surface-100'
              )}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto scrollbar-thin px-5 py-5">
          {!content ? (
            <div className="text-center py-12">
              <BookOpen className="w-8 h-8 text-surface-300 mx-auto mb-3" />
              <p className="text-surface-500 text-sm font-medium">Materi segera hadir</p>
              <p className="text-surface-400 text-xs mt-1">Konten untuk topik ini sedang disiapkan.</p>
            </div>
          ) : (
            <>
              {/* LEARN TAB */}
              {tab === 'learn' && (
                <div className="space-y-5">
                  {/* Explanation */}
                  <div>
                    <h3 className="text-xs font-semibold text-surface-500 uppercase tracking-wide mb-2">Explanation</h3>
                    <p className="text-sm text-surface-700 leading-relaxed">{content.explanation}</p>
                  </div>

                  {/* Key points */}
                  <div>
                    <h3 className="text-xs font-semibold text-surface-500 uppercase tracking-wide mb-2">Key Points</h3>
                    <ul className="space-y-2">
                      {content.keyPoints.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
                            style={{ backgroundColor: sm.color + '18', color: sm.color }}>
                            {i + 1}
                          </span>
                          <span className="text-sm text-surface-700 leading-snug">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tips */}
                  <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                      <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">Practice Tips</span>
                    </div>
                    <ul className="space-y-1.5">
                      {content.tips.map((tip, i) => (
                        <li key={i} className="text-sm text-amber-800 flex items-start gap-2">
                          <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-amber-500" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* EXAMPLES TAB */}
              {tab === 'examples' && (
                <div className="space-y-4">
                  <h3 className="text-xs font-semibold text-surface-500 uppercase tracking-wide">Examples & Dialogues</h3>
                  {content.examples.map((ex, i) => (
                    <div key={i} className="rounded-xl border border-surface-200 overflow-hidden">
                      <div className="px-4 py-3 space-y-1" style={{ backgroundColor: sm.color + '08' }}>
                        {ex.lines.map((line, j) => (
                          <p key={j} className="text-sm font-medium text-surface-800 leading-relaxed">{line}</p>
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
              )}

              {/* QUIZ TAB */}
              {tab === 'quiz' && content.quiz && (
                <div>
                  {!quizDone ? (
                    <div className="space-y-5">
                      <div>
                        <div className="flex items-center justify-between text-xs text-surface-400 mb-2">
                          <span>Question {quizIndex + 1} of {content.quiz.length}</span>
                          <span>Score: {score}/{quizIndex}</span>
                        </div>
                        <div className="progress-bar mb-4">
                          <div className="progress-fill" style={{ width: `${(quizIndex / content.quiz.length) * 100}%`, backgroundColor: sm.color }} />
                        </div>
                        <p className="text-base font-semibold text-surface-900 mb-4">{content.quiz[quizIndex].q}</p>
                      </div>
                      <div className="space-y-2.5">
                        {content.quiz[quizIndex].options.map((opt, i) => {
                          const isSelected = selected === i
                          const isCorrect = i === content.quiz![quizIndex].answer
                          const revealed = selected !== null
                          return (
                            <button key={i} onClick={() => handleAnswer(i)} disabled={revealed}
                              className={cn(
                                'w-full text-left px-4 py-3 rounded-xl border text-sm transition-all',
                                !revealed && 'border-surface-200 hover:border-brand-300 hover:bg-brand-50',
                                revealed && isCorrect && 'border-brand-400 bg-brand-50 text-brand-800',
                                revealed && isSelected && !isCorrect && 'border-red-400 bg-red-50 text-red-700',
                                revealed && !isSelected && !isCorrect && 'opacity-40 border-surface-200'
                              )}>
                              <span className="font-medium mr-2">{String.fromCharCode(65 + i)}.</span>
                              {opt}
                              {revealed && isCorrect && <span className="ml-2 text-brand-600">✓</span>}
                              {revealed && isSelected && !isCorrect && <span className="ml-2 text-red-500">✗</span>}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className={cn('w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl',
                        score === content.quiz.length ? 'bg-brand-50' : 'bg-amber-50')}>
                        {score === content.quiz.length ? '🎉' : '📖'}
                      </div>
                      <p className="text-lg font-semibold text-surface-900 mb-1">
                        {score} / {content.quiz.length} correct
                      </p>
                      <p className="text-sm text-surface-500 mb-6">
                        {score === content.quiz.length ? 'Perfect score!' : 'Review the lesson and try again.'}
                      </p>
                      <button onClick={() => { setQuizIndex(0); setSelected(null); setQuizDone(false); setScore(0) }}
                        className="btn-secondary mx-auto">
                        Try again
                      </button>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-surface-200 flex-shrink-0 flex items-center gap-3">
          <button onClick={onToggleDone}
            className={cn(
              'flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium border transition-all',
              isDone
                ? 'border-surface-200 text-surface-500 hover:bg-surface-50'
                : 'text-white border-brand-600'
            )}
            style={isDone ? {} : { backgroundColor: SKILL_META[skill].color }}>
            <Check className="w-4 h-4" />
            {isDone ? 'Mark as incomplete' : 'Mark as complete'}
          </button>
          <button onClick={onClose} className="btn-secondary px-5">Close</button>
        </div>
      </div>
    </>
  )
}
