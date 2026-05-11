'use client'

import { useState } from 'react'
import { Loader2, Send, AlertCircle, CheckCircle2, TrendingUp, BookOpen, Lightbulb, ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import toast from 'react-hot-toast'

const TASK_TYPES = [
  { id: 'IELTS Task 2',     label: 'IELTS Task 2 Essay',     desc: 'Opinion, Discussion, Problem/Solution, or Advantage/Disadvantage' },
  { id: 'IELTS Task 1',     label: 'IELTS Task 1 Report',    desc: 'Describe a graph, chart, map, or process' },
  { id: 'TOEFL Essay',      label: 'TOEFL Essay',            desc: 'Independent or Integrated writing task' },
  { id: 'General Writing',  label: 'General Writing',         desc: 'Any paragraph, email, letter, or essay' },
  { id: 'Business Email',   label: 'Business Email',          desc: 'Professional email or formal letter' },
]

interface FeedbackData {
  estimatedLevel: string
  bandEstimate: string | null
  overallComment: string
  strengths: string[]
  grammarIssues: { original: string; suggestion: string; explanation: string }[]
  vocabularyUpgrades: { original: string; better: string; reason: string }[]
  structureFeedback: string
  topSuggestions: string[]
}

interface HistoryItem {
  id: string
  task_type: string
  word_count: number
  band_estimate: string | null
  created_at: string
}

interface Props { history: HistoryItem[] }

const LEVEL_COLORS: Record<string, string> = {
  A1: '#259775', A2: '#2563eb', B1: '#d97706', B2: '#db2777', C1: '#7c3aed', C2: '#475569',
}

export default function WritingClient({ history }: Props) {
  const [taskType, setTaskType] = useState('IELTS Task 2')
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState<FeedbackData | null>(null)
  const [error, setError] = useState('')
  const [showHistory, setShowHistory] = useState(false)

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0
  const minWords = taskType.includes('Task 1') ? 150 : taskType.includes('Task 2') ? 250 : 100

  async function handleSubmit() {
    if (wordCount < 20) { toast.error('Write at least 20 words before submitting.'); return }
    setLoading(true)
    setError('')
    setFeedback(null)
    try {
      const res = await fetch('/api/writing-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, taskType }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error ?? 'Something went wrong'); return }
      setFeedback(data.feedback)
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    } catch {
      setError('Network error — please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  const levelColor = feedback ? (LEVEL_COLORS[feedback.estimatedLevel] ?? '#475569') : '#259775'

  return (
    <div className="max-w-3xl space-y-5">
      {/* Task type selector */}
      <div className="card p-5">
        <label className="label">Task type</label>
        <div className="grid sm:grid-cols-2 gap-2">
          {TASK_TYPES.map(t => (
            <button key={t.id} onClick={() => setTaskType(t.id)}
              className={cn('p-3 rounded-xl border text-left transition-all',
                taskType === t.id ? 'border-brand-500 bg-brand-50' : 'border-surface-200 hover:border-surface-300')}>
              <p className={cn('text-sm font-medium', taskType === t.id ? 'text-brand-700' : 'text-surface-800')}>{t.label}</p>
              <p className="text-xs text-surface-500 mt-0.5">{t.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Writing area */}
      <div className="card p-5">
        <div className="flex items-center justify-between mb-2">
          <label className="label mb-0">Your writing</label>
          <div className="flex items-center gap-3 text-xs text-surface-400">
            <span className={cn('font-medium', wordCount >= minWords ? 'text-brand-600' : 'text-surface-500')}>
              {wordCount} / {minWords} words min
            </span>
          </div>
        </div>
        <textarea
          className="input min-h-56 resize-y font-sans leading-relaxed"
          placeholder={`Start writing your ${taskType} here…\n\nTip: Write your best attempt — the AI will give feedback on what to improve.`}
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <div className="flex items-center justify-between mt-3">
          <p className="text-xs text-surface-400">
            {taskType.includes('IELTS') && wordCount > 0 && wordCount < minWords
              ? `⚠ IELTS ${taskType.includes('Task 1') ? 'Task 1' : 'Task 2'} requires at least ${minWords} words`
              : 'Write as much as you like — more text = better feedback'}
          </p>
          <button onClick={handleSubmit} disabled={loading || wordCount < 20} className="btn-primary">
            {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Analysing…</> : <><Send className="w-4 h-4" /> Get Feedback</>}
          </button>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-start gap-3 p-4 rounded-2xl border border-red-200 bg-red-50 text-red-700">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-sm">Could not get feedback</p>
            <p className="text-xs mt-0.5">{error}</p>
            {error.includes('OPENROUTER_API_KEY') && (
              <p className="text-xs mt-1">Add <code className="bg-red-100 px-1 rounded">OPENROUTER_API_KEY=your_key</code> to your <code>.env.local</code> file. Get a free key at openrouter.ai</p>
            )}
          </div>
        </div>
      )}

      {/* Feedback display */}
      {feedback && (
        <div className="space-y-4 animate-in">
          {/* Score banner */}
          <div className="card p-5 flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 text-white text-lg font-bold"
              style={{ backgroundColor: levelColor }}>
              {feedback.estimatedLevel}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 flex-wrap">
                <p className="font-semibold text-surface-900 text-lg">{feedback.estimatedLevel} Level</p>
                {feedback.bandEstimate && (
                  <span className="badge text-sm font-bold px-3 py-1" style={{ backgroundColor: levelColor + '20', color: levelColor }}>
                    IELTS Band {feedback.bandEstimate}
                  </span>
                )}
              </div>
              <p className="text-sm text-surface-600 mt-1">{feedback.overallComment}</p>
            </div>
          </div>

          {/* Strengths */}
          <div className="card p-5">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-4 h-4 text-brand-600" />
              <h3 className="font-semibold text-surface-900 text-sm">What you did well</h3>
            </div>
            <ul className="space-y-2">
              {feedback.strengths.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-surface-700">
                  <span className="text-brand-500 font-bold flex-shrink-0">✓</span> {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Grammar issues */}
          {feedback.grammarIssues.length > 0 && (
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                <h3 className="font-semibold text-surface-900 text-sm">Grammar ({feedback.grammarIssues.length} issue{feedback.grammarIssues.length !== 1 ? 's' : ''})</h3>
              </div>
              <div className="space-y-3">
                {feedback.grammarIssues.map((g, i) => (
                  <div key={i} className="rounded-xl bg-surface-100 p-3 space-y-1.5">
                    <div className="flex items-start gap-2 text-xs flex-wrap">
                      <span className="line-through text-red-600 font-mono bg-red-50 px-1.5 py-0.5 rounded">"{g.original}"</span>
                      <span className="text-surface-400">→</span>
                      <span className="text-brand-700 font-mono bg-brand-50 px-1.5 py-0.5 rounded">"{g.suggestion}"</span>
                    </div>
                    <p className="text-xs text-surface-600">{g.explanation}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Vocabulary upgrades */}
          {feedback.vocabularyUpgrades.length > 0 && (
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-violet-500" />
                <h3 className="font-semibold text-surface-900 text-sm">Vocabulary upgrades</h3>
              </div>
              <div className="space-y-3">
                {feedback.vocabularyUpgrades.map((v, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <div className="flex items-center gap-2 flex-wrap flex-1">
                      <span className="text-surface-500 font-medium">"{v.original}"</span>
                      <span className="text-surface-300">→</span>
                      <span className="text-violet-700 font-semibold">"{v.better}"</span>
                    </div>
                    <p className="text-xs text-surface-500 flex-shrink-0 max-w-48">{v.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Structure feedback */}
          <div className="card p-5">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-blue-500" />
              <h3 className="font-semibold text-surface-900 text-sm">Structure & organisation</h3>
            </div>
            <p className="text-sm text-surface-700 leading-relaxed">{feedback.structureFeedback}</p>
          </div>

          {/* Top suggestions */}
          <div className="card p-5 border-l-4" style={{ borderLeftColor: levelColor }}>
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <h3 className="font-semibold text-surface-900 text-sm">Top 3 improvements for next time</h3>
            </div>
            <ol className="space-y-2">
              {feedback.topSuggestions.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-surface-700">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>

          <div className="text-center">
            <button onClick={() => { setFeedback(null); setText('') }} className="btn-secondary">
              Write something new
            </button>
          </div>
        </div>
      )}

      {/* History */}
      {history.length > 0 && (
        <div className="card overflow-hidden">
          <button onClick={() => setShowHistory(h => !h)}
            className="w-full flex items-center justify-between p-5 hover:bg-surface-100 transition-colors text-left">
            <h3 className="font-semibold text-surface-900 text-sm">Previous submissions ({history.length})</h3>
            {showHistory ? <ChevronUp className="w-4 h-4 text-surface-400" /> : <ChevronDown className="w-4 h-4 text-surface-400" />}
          </button>
          {showHistory && (
            <div className="border-t border-surface-200 divide-y divide-surface-200">
              {history.map(h => (
                <div key={h.id} className="flex items-center gap-4 px-5 py-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-surface-900">{h.task_type}</p>
                    <p className="text-xs text-surface-400">{h.word_count} words · {new Date(h.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                  </div>
                  {h.band_estimate && (
                    <span className="badge text-xs font-bold bg-brand-50 text-brand-700">Band {h.band_estimate}</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
