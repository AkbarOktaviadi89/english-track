'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import type { DailyChallenge } from '@/lib/daily-challenge'
import { CHALLENGE_TYPE_META } from '@/lib/daily-challenge'
import { CheckCircle2, XCircle, Flame, Trophy, Eye, EyeOff, RotateCcw } from 'lucide-react'
import { cn } from '@/lib/utils'
import toast from 'react-hot-toast'

interface Props {
  challenge: DailyChallenge
  userId: string
  today: string
  alreadyCompleted: boolean
  streak: number
}

export default function DailyChallengeClient({ challenge, userId, today, alreadyCompleted, streak }: Props) {
  const [selected, setSelected] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(alreadyCompleted)
  const [correct, setCorrect] = useState<boolean | null>(null)
  const [showExample, setShowExample] = useState(false)
  const [saving, setSaving] = useState(false)
  const supabase = createClient()
  const meta = CHALLENGE_TYPE_META[challenge.type]

  const CORRECT_IDX = (() => {
    if (challenge.type === 'word')        return challenge.answerIndex
    if (challenge.type === 'grammar')     return challenge.answerIndex
    if (challenge.type === 'collocation') return challenge.answerIndex
    if (challenge.type === 'phrase')      return challenge.answerIndex
    if (challenge.type === 'cloze')       return challenge.answerIndex
    return 0
  })()

  async function handleSelect(idx: number) {
    if (submitted) return
    setSelected(idx)
    const isCorrect = idx === CORRECT_IDX
    setCorrect(isCorrect)
    setSubmitted(true)
    setSaving(true)
    try {
      await supabase.from('daily_completions').upsert({
        user_id: userId,
        date: today,
        challenge_type: challenge.type,
        score: isCorrect ? 1 : 0,
        completed: true,
      }, { onConflict: 'user_id,date' })
      if (isCorrect) toast.success('Correct! 🎉', { duration: 1500 })
    } catch {
      // non-blocking
    } finally {
      setSaving(false)
    }
  }

  const options = (() => {
    if (challenge.type === 'word')        return challenge.options
    if (challenge.type === 'grammar')     return challenge.options
    if (challenge.type === 'collocation') return challenge.options
    if (challenge.type === 'phrase')      return challenge.options
    if (challenge.type === 'cloze')       return challenge.options
    return []
  })()

  const explanation = (() => {
    if (challenge.type === 'grammar')     return challenge.explanation
    if (challenge.type === 'collocation') return challenge.explanation
    if (challenge.type === 'cloze')       return challenge.explanation
    if (challenge.type === 'word')        return `"${challenge.word}" means: ${challenge.definition}`
    if (challenge.type === 'phrase')      return `"${challenge.phrase}" means: ${challenge.meaning}`
    return ''
  })()

  return (
    <div className="space-y-4">
      {/* Streak */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-50 border border-orange-200">
          <Flame className="w-4 h-4 text-orange-500" />
          <span className="text-sm font-bold text-orange-700">{streak} day streak</span>
        </div>
        {alreadyCompleted && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-50 border border-brand-200">
            <CheckCircle2 className="w-4 h-4 text-brand-600" />
            <span className="text-sm font-medium text-brand-700">Completed today</span>
          </div>
        )}
      </div>

      {/* Challenge card */}
      <div className="card p-5 space-y-4">

        {/* Type badge */}
        <div className="flex items-center gap-2">
          <span className="text-xl">{meta.emoji}</span>
          <span className="badge font-semibold text-xs" style={{ backgroundColor: meta.color + '18', color: meta.color }}>
            {meta.label}
          </span>
        </div>

        {/* Question */}
        <div>
          {challenge.type === 'word' && (
            <div>
              <p className="text-xs text-surface-400 mb-1">Topic: {challenge.topic} · {challenge.level}</p>
              <p className="text-xl font-bold text-surface-900 mb-2">{challenge.word}</p>
              <p className="text-sm text-surface-600">Choose the correct definition:</p>
            </div>
          )}
          {challenge.type === 'grammar' && (
            <p className="text-base font-semibold text-surface-900 leading-relaxed">{challenge.question}</p>
          )}
          {challenge.type === 'collocation' && (
            <div>
              <p className="text-xs text-surface-400 mb-2">Fill in the correct verb:</p>
              <p className="text-base font-semibold text-surface-900 leading-relaxed">{challenge.sentence}</p>
              <p className="text-xs text-surface-500 mt-1 italic">Meaning: {challenge.meaning}</p>
            </div>
          )}
          {challenge.type === 'phrase' && (
            <div>
              <p className="text-xs text-surface-400 mb-2">{challenge.situation}</p>
              <p className="text-xl font-bold text-surface-900 italic mb-2">"{challenge.phrase}"</p>
              <p className="text-sm text-surface-600">What does this mean?</p>
            </div>
          )}
          {challenge.type === 'cloze' && (
            <div>
              <p className="text-xs text-surface-400 mb-1">From: {challenge.passageTitle}</p>
              <p className="text-base font-semibold text-surface-900 leading-relaxed mb-2">{challenge.context}</p>
              {challenge.hint && (
                <span className="badge text-xs bg-violet-50 text-violet-600">{challenge.hint}</span>
              )}
            </div>
          )}
        </div>

        {/* Options */}
        <div className="space-y-2">
          {options.map((opt, i) => {
            const isSelected = selected === i
            const isCorrect = i === CORRECT_IDX
            const revealed = submitted
            return (
              <button key={i} onClick={() => handleSelect(i)}
                disabled={submitted || saving}
                className={cn(
                  'w-full text-left px-4 py-3 rounded-xl border text-sm transition-all',
                  !revealed && 'border-surface-200 hover:border-brand-300 hover:bg-brand-50',
                  revealed && isCorrect && 'border-brand-400 bg-brand-50 text-brand-800 font-medium',
                  revealed && isSelected && !isCorrect && 'border-red-400 bg-red-50 text-red-700',
                  revealed && !isSelected && !isCorrect && 'opacity-40 border-surface-100',
                )}>
                <span className="font-semibold mr-2 text-surface-400">{String.fromCharCode(65 + i)}.</span>
                {opt}
                {revealed && isCorrect && <CheckCircle2 className="inline w-4 h-4 ml-2 text-brand-600" />}
                {revealed && isSelected && !isCorrect && <XCircle className="inline w-4 h-4 ml-2 text-red-500" />}
              </button>
            )
          })}
        </div>

        {/* Feedback */}
        {submitted && (
          <div className={cn('rounded-xl p-4',
            correct ? 'bg-brand-50 border border-brand-200' : 'bg-red-50 border border-red-200')}>
            <div className="flex items-center gap-2 mb-2">
              {correct
                ? <><CheckCircle2 className="w-4 h-4 text-brand-600" /><span className="text-sm font-semibold text-brand-700">Correct!</span></>
                : <><XCircle className="w-4 h-4 text-red-500" /><span className="text-sm font-semibold text-red-700">Not quite</span></>}
            </div>
            <p className="text-xs text-surface-700 leading-relaxed">{explanation}</p>

            {/* Show example for word/phrase challenges */}
            {(challenge.type === 'word' || challenge.type === 'phrase') && (
              <div className="mt-2">
                <button onClick={() => setShowExample(e => !e)}
                  className="text-xs font-medium text-surface-500 hover:text-surface-700 flex items-center gap-1">
                  {showExample ? <><EyeOff className="w-3.5 h-3.5" /> Hide example</> : <><Eye className="w-3.5 h-3.5" /> Show example</>}
                </button>
                {showExample && (
                  <p className="text-xs text-surface-600 italic mt-1.5 leading-relaxed">
                    {challenge.type === 'word' ? challenge.example : challenge.example}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Result banner */}
      {submitted && (
        <div className="flex items-center justify-between p-4 rounded-2xl border border-surface-200 bg-surface-50">
          <div className="flex items-center gap-3">
            <Trophy className="w-5 h-5 text-amber-500" />
            <div>
              <p className="text-sm font-semibold text-surface-900">
                {correct ? 'Challenge complete! +1 streak' : 'Keep going — come back tomorrow!'}
              </p>
              <p className="text-xs text-surface-400">New challenge tomorrow</p>
            </div>
          </div>
          <a href="/dashboard" className="btn-secondary text-xs px-3 py-2">
            Dashboard
          </a>
        </div>
      )}

      {/* Already completed — show answer */}
      {alreadyCompleted && !submitted && (
        <div className="card p-4 text-center">
          <CheckCircle2 className="w-8 h-8 text-brand-600 mx-auto mb-2" />
          <p className="text-sm font-medium text-surface-900">You already completed today's challenge!</p>
          <p className="text-xs text-surface-400 mt-1">Come back tomorrow for a new one.</p>
        </div>
      )}
    </div>
  )
}
