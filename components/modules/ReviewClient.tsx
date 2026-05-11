'use client'

import { useState, useTransition } from 'react'
import { createClient } from '@/lib/supabase/client'
import { CEFR_META } from '@/types'
import type { VocabWord } from '@/types'
import { RotateCcw, ThumbsUp, RefreshCw, Trophy, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import toast from 'react-hot-toast'
import Link from 'next/link'

interface Props {
  words: VocabWord[]
  userId: string
}

// Spaced repetition intervals in days per review_count milestone
const INTERVALS = [1, 3, 7, 14, 30]

function addDays(days: number): string {
  const d = new Date()
  d.setDate(d.getDate() + days)
  return d.toISOString().split('T')[0]
}

export default function ReviewClient({ words, userId }: Props) {
  const [queue, setQueue] = useState<VocabWord[]>(words)
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [results, setResults] = useState<{ word: string; got: boolean }[]>([])
  const [done, setDone] = useState(false)
  const [, startTransition] = useTransition()
  const supabase = createClient()

  const current = queue[index]
  const total = queue.length
  const progress = total > 0 ? ((index) / total) * 100 : 0

  function advance(got: boolean) {
    setResults(prev => [...prev, { word: current.word, got }])
    const nextReviewCount = got ? current.review_count + 1 : Math.max(0, current.review_count - 1)
    const interval = INTERVALS[Math.min(nextReviewCount, INTERVALS.length - 1)]
    const mastered = nextReviewCount >= INTERVALS.length

    startTransition(async () => {
      await supabase
        .from('vocabulary')
        .update({
          review_count: nextReviewCount,
          mastered,
          next_review: addDays(interval),
        })
        .eq('id', current.id)
        .eq('user_id', userId)
    })

    if (got) toast.success('Great!', { duration: 800 })
    else toast('Keep practicing!', { icon: '📖', duration: 800 })

    const next = index + 1
    if (next >= total) {
      setDone(true)
    } else {
      setFlipped(false)
      setTimeout(() => setIndex(next), 50)
    }
  }

  function restart() {
    setQueue(words)
    setIndex(0)
    setFlipped(false)
    setResults([])
    setDone(false)
  }

  if (words.length === 0) {
    return (
      <div className="card p-12 text-center">
        <RotateCcw className="w-10 h-10 text-surface-300 mx-auto mb-3" />
        <h3 className="font-semibold text-surface-900 mb-2">No words to review</h3>
        <p className="text-surface-500 text-sm mb-5">Add vocabulary words first, then come back here to review them.</p>
        <Link href="/dashboard/vocabulary" className="btn-primary">Go to Vocabulary →</Link>
      </div>
    )
  }

  if (done) {
    const correct = results.filter(r => r.got).length
    const pct = Math.round((correct / total) * 100)
    return (
      <div className="card p-10 text-center max-w-md mx-auto">
        <Trophy className="w-12 h-12 text-amber-400 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-surface-900 mb-1">Review complete!</h2>
        <p className="text-surface-500 text-sm mb-6">
          You got <strong className="text-brand-600">{correct} of {total}</strong> words correct ({pct}%)
        </p>
        <div className="progress-bar mb-6">
          <div className="progress-fill bg-brand-500" style={{ width: `${pct}%` }} />
        </div>
        <div className="space-y-1.5 text-left mb-6 max-h-48 overflow-y-auto scrollbar-thin">
          {results.map((r, i) => (
            <div key={i} className={cn('flex items-center justify-between text-sm px-3 py-1.5 rounded-lg',
              r.got ? 'text-brand-700 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/30' : 'text-red-600 bg-red-50 dark:bg-red-950/20')}>
              <span>{r.word}</span>
              <span>{r.got ? '✓' : '✗'}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          <button onClick={restart} className="btn-secondary flex-1 justify-center">
            <RefreshCw className="w-4 h-4" /> Review again
          </button>
          <Link href="/dashboard/vocabulary" className="btn-primary flex-1 justify-center">
            Vocabulary <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    )
  }

  const levelMeta = CEFR_META[current.level]

  return (
    <div className="max-w-lg mx-auto space-y-6">
      {/* Progress */}
      <div>
        <div className="flex items-center justify-between text-sm text-surface-500 mb-2">
          <span>{index + 1} of {total}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill bg-brand-500 transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Card */}
      <div
        className="cursor-pointer select-none"
        style={{ perspective: '1000px' }}
        onClick={() => setFlipped(f => !f)}
      >
        <div className={cn(
          'card p-8 min-h-56 flex flex-col items-center justify-center text-center transition-all duration-500 relative',
          'hover:shadow-card'
        )}
          style={{ transform: flipped ? 'rotateY(0deg)' : 'rotateY(0deg)' }}>
          {!flipped ? (
            <>
              <div className="flex gap-2 mb-4">
                <span className="badge" style={{ backgroundColor: levelMeta.bgColor, color: levelMeta.color }}>{current.level}</span>
                <span className="badge bg-surface-100 text-surface-600 capitalize">{current.category}</span>
              </div>
              <h2 className="text-3xl font-bold text-surface-900 mb-3">{current.word}</h2>
              <p className="text-sm text-surface-400">Tap to reveal definition</p>
            </>
          ) : (
            <>
              <div className="flex gap-2 mb-4">
                <span className="badge" style={{ backgroundColor: levelMeta.bgColor, color: levelMeta.color }}>{current.level}</span>
              </div>
              <p className="text-lg text-surface-700 font-medium mb-3">{current.definition}</p>
              {current.example && (
                <p className="text-sm text-surface-400 italic border-l-2 border-surface-200 pl-3 text-left">
                  "{current.example}"
                </p>
              )}
            </>
          )}
        </div>
      </div>

      {/* Action buttons — only show after flip */}
      {flipped ? (
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => advance(false)}
            className="flex flex-col items-center gap-1.5 py-4 rounded-2xl border-2 border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-900 text-red-600 dark:text-red-400 font-medium hover:bg-red-100 dark:hover:bg-red-950/40 transition-colors">
            <span className="text-2xl">✗</span>
            <span className="text-sm">Still learning</span>
          </button>
          <button
            onClick={() => advance(true)}
            className="flex flex-col items-center gap-1.5 py-4 rounded-2xl border-2 border-brand-200 bg-brand-50 dark:bg-brand-950/30 dark:border-brand-900 text-brand-700 dark:text-brand-400 font-medium hover:bg-brand-100 dark:hover:bg-brand-950/50 transition-colors">
            <ThumbsUp className="w-6 h-6" />
            <span className="text-sm">Got it!</span>
          </button>
        </div>
      ) : (
        <p className="text-center text-xs text-surface-400">Flip the card first, then rate your recall</p>
      )}

      {/* Skip */}
      <div className="text-center">
        <button onClick={() => { setFlipped(false); setTimeout(() => setIndex(i => i + 1 < total ? i + 1 : i), 50) }}
          className="text-xs text-surface-400 hover:text-surface-600 underline">
          Skip this word
        </button>
      </div>
    </div>
  )
}
