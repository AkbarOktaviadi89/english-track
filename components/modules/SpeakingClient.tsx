'use client'

import { useState, useEffect, useRef } from 'react'
import { PART1_TOPICS, PART2_CARDS, PART3_SETS } from '@/lib/speaking-prompts'
import { Timer, Play, Square, RotateCcw, Eye, EyeOff, ChevronDown, ChevronUp, Lightbulb, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'

type Tab = 'part1' | 'part2' | 'part3'

// ─── Timer Hook ───────────────────────────────────────────────
function useTimer(seconds: number) {
  const [remaining, setRemaining] = useState(seconds)
  const [running, setRunning] = useState(false)
  const [done, setDone] = useState(false)
  const ref = useRef<ReturnType<typeof setInterval> | null>(null)

  function start() {
    setRemaining(seconds)
    setDone(false)
    setRunning(true)
  }
  function stop() { setRunning(false) }
  function reset() { setRunning(false); setRemaining(seconds); setDone(false) }

  useEffect(() => {
    if (running) {
      ref.current = setInterval(() => {
        setRemaining(r => {
          if (r <= 1) { clearInterval(ref.current!); setRunning(false); setDone(true); return 0 }
          return r - 1
        })
      }, 1000)
    } else {
      if (ref.current) clearInterval(ref.current)
    }
    return () => { if (ref.current) clearInterval(ref.current) }
  }, [running])

  const pct = Math.round(((seconds - remaining) / seconds) * 100)
  const display = `${Math.floor(remaining / 60)}:${String(remaining % 60).padStart(2, '0')}`
  return { remaining, running, done, start, stop, reset, pct, display }
}

// ─── Timer Widget ─────────────────────────────────────────────
function TimerWidget({ label, seconds, color }: { label: string; seconds: number; color: string }) {
  const t = useTimer(seconds)
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl border border-surface-200 bg-surface-100/50">
      <div className="relative w-12 h-12 flex-shrink-0">
        <svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e4e7e4" strokeWidth="3" />
          <circle cx="18" cy="18" r="15.9" fill="none" stroke={color} strokeWidth="3"
            strokeDasharray={`${t.pct} ${100 - t.pct}`}
            strokeLinecap="round" className="transition-all duration-1000" />
        </svg>
        <span className={cn('absolute inset-0 flex items-center justify-center text-xs font-bold', t.done ? 'text-red-500' : 'text-surface-700')}>
          {t.done ? '✓' : t.display}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-surface-700">{label}</p>
        <p className="text-xs text-surface-400">{Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, '0')} total</p>
      </div>
      <div className="flex gap-1.5">
        {!t.running && !t.done && <button onClick={t.start} className="w-7 h-7 rounded-lg flex items-center justify-center bg-brand-600 text-white hover:bg-brand-700 transition-colors"><Play className="w-3 h-3" /></button>}
        {t.running && <button onClick={t.stop} className="w-7 h-7 rounded-lg flex items-center justify-center bg-red-500 text-white hover:bg-red-600 transition-colors"><Square className="w-3 h-3" /></button>}
        <button onClick={t.reset} className="w-7 h-7 rounded-lg flex items-center justify-center border border-surface-200 text-surface-500 hover:bg-surface-100 transition-colors"><RotateCcw className="w-3 h-3" /></button>
      </div>
    </div>
  )
}

export default function SpeakingClient() {
  const [tab, setTab] = useState<Tab>('part1')
  const [selectedP1, setSelectedP1] = useState(PART1_TOPICS[0].id)
  const [selectedP2, setSelectedP2] = useState(PART2_CARDS[0].id)
  const [selectedP3, setSelectedP3] = useState(PART3_SETS[0].id)
  const [showSample, setShowSample] = useState<Record<string, boolean>>({})
  const [expandedQ, setExpandedQ] = useState<string | null>(null)

  const p1 = PART1_TOPICS.find(t => t.id === selectedP1)!
  const p2 = PART2_CARDS.find(c => c.id === selectedP2)!
  const p3 = PART3_SETS.find(s => s.id === selectedP3)!

  function toggleSample(key: string) {
    setShowSample(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const TAB_INFO = {
    part1: { label: 'Part 1', sublabel: 'Short answers · 30–45 sec', color: '#259775' },
    part2: { label: 'Part 2', sublabel: 'Cue card · 1 min prep + 2 min', color: '#2563eb' },
    part3: { label: 'Part 3', sublabel: 'Discussion · 60–90 sec', color: '#7c3aed' },
  }

  return (
    <div>
      {/* Part tabs */}
      <div className="flex gap-2 mb-6">
        {(Object.entries(TAB_INFO) as [Tab, { label: string; sublabel: string; color: string }][]).map(([key, info]) => (
          <button key={key} onClick={() => setTab(key)}
            className={cn('flex-1 py-3 rounded-xl border text-center transition-all',
              tab === key ? 'border-current shadow-card' : 'border-surface-200 bg-white hover:border-surface-300')}
            style={tab === key ? { backgroundColor: info.color + '12', borderColor: info.color } : {}}>
            <p className="text-sm font-semibold" style={tab === key ? { color: info.color } : { color: '#4e554e' }}>{info.label}</p>
            <p className="text-xs text-surface-400 mt-0.5">{info.sublabel}</p>
          </button>
        ))}
      </div>

      {/* ─── PART 1 ─────────────────────────────────────────── */}
      {tab === 'part1' && (
        <div className="space-y-5">
          {/* Topic selector */}
          <div>
            <p className="label">Choose a topic</p>
            <div className="flex flex-wrap gap-2">
              {PART1_TOPICS.map(t => (
                <button key={t.id} onClick={() => { setSelectedP1(t.id); setShowSample({}) }}
                  className={cn('px-3 py-2 rounded-xl border text-sm font-medium transition-all',
                    selectedP1 === t.id ? 'bg-brand-600 text-white border-brand-600' : 'border-surface-200 text-surface-700 hover:border-surface-300')}>
                  {t.emoji} {t.topic}
                </button>
              ))}
            </div>
          </div>

          {/* Info box */}
          <div className="rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 flex items-start gap-2">
            <Lightbulb className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-brand-800">
              <strong>Part 1 tips:</strong> Answer in 2–3 sentences. Always expand with a reason or example — never give one-word answers. Aim for 30–45 seconds per question.
            </p>
          </div>

          {/* Questions */}
          <div className="space-y-3">
            {p1.questions.map((q, i) => {
              const key = `p1_${p1.id}_${i}`
              const open = showSample[key]
              return (
                <div key={i} className="card p-4">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-surface-900 mb-3">"{q}"</p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <TimerWidget label="Speaking time" seconds={45} color="#259775" />
                        <button onClick={() => toggleSample(key)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-surface-200 text-surface-600 hover:bg-surface-50 transition-all">
                          {open ? <><EyeOff className="w-3.5 h-3.5" /> Hide sample</> : <><Eye className="w-3.5 h-3.5" /> Show Band 7 sample</>}
                        </button>
                      </div>
                      {open && (
                        <div className="mt-3 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3">
                          <p className="text-xs font-semibold text-blue-700 mb-1.5 uppercase tracking-wide">Band 7 Sample</p>
                          <p className="text-sm text-blue-900 leading-relaxed italic">
                            "Try to speak naturally about your own experience. Key phrases to use: <strong>personally, I tend to…</strong> / <strong>what I find is…</strong> / <strong>I suppose it depends on…</strong>"
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* ─── PART 2 ─────────────────────────────────────────── */}
      {tab === 'part2' && (
        <div className="space-y-5">
          {/* Card selector */}
          <div>
            <p className="label">Choose a cue card</p>
            <div className="flex flex-wrap gap-2">
              {PART2_CARDS.map(c => (
                <button key={c.id} onClick={() => { setSelectedP2(c.id); setShowSample({}) }}
                  className={cn('px-3 py-2 rounded-xl border text-sm font-medium transition-all',
                    selectedP2 === c.id ? 'bg-blue-600 text-white border-blue-600' : 'border-surface-200 text-surface-700 hover:border-surface-300')}>
                  {c.emoji} {c.topic}
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 flex items-start gap-2">
            <Timer className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-800">
              <strong>Part 2 format:</strong> You get 1 minute to prepare, then speak for up to 2 minutes. Cover all bullet points. The examiner will then ask 1–2 short follow-up questions.
            </p>
          </div>

          {/* Cue card */}
          <div className="card p-5 border-l-4" style={{ borderLeftColor: '#2563eb' }}>
            <p className="text-xs font-semibold text-surface-400 uppercase tracking-wide mb-2">Cue Card</p>
            <p className="text-base font-semibold text-surface-900 mb-3">{p2.instruction}</p>
            <p className="text-xs text-surface-500 mb-2">You should say:</p>
            <ul className="space-y-1.5 mb-4">
              {p2.bulletPoints.map((bp, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-surface-700">
                  <span className="text-blue-500 font-bold flex-shrink-0">•</span> {bp}
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-3">
              <TimerWidget label="Preparation" seconds={60} color="#d97706" />
              <TimerWidget label="Speaking" seconds={120} color="#2563eb" />
            </div>
          </div>

          {/* Follow-up */}
          <div className="rounded-xl border border-surface-200 bg-surface-100/50 px-4 py-3">
            <p className="text-xs font-semibold text-surface-500 uppercase tracking-wide mb-1">Follow-up question</p>
            <p className="text-sm text-surface-800 italic">"{p2.followUp}"</p>
          </div>

          {/* Sample answers */}
          <div className="card p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-surface-900 text-sm">Sample Answers</h3>
              <button onClick={() => toggleSample('p2_samples')}
                className="flex items-center gap-1.5 text-xs font-medium text-surface-500 hover:text-surface-700">
                {showSample['p2_samples'] ? <><EyeOff className="w-3.5 h-3.5" /> Hide</> : <><Eye className="w-3.5 h-3.5" /> Show</>}
              </button>
            </div>
            {showSample['p2_samples'] && (
              <div className="space-y-4">
                <div>
                  <p className="badge text-xs bg-amber-100 text-amber-700 mb-2">Band 6 answer</p>
                  <p className="text-sm text-surface-700 leading-relaxed italic">"{p2.band6Sample}"</p>
                </div>
                <div className="border-t border-surface-200 pt-4">
                  <p className="badge text-xs bg-brand-100 text-brand-700 mb-2">Band 7 answer</p>
                  <p className="text-sm text-surface-700 leading-relaxed italic">"{p2.band7Sample}"</p>
                </div>
              </div>
            )}
          </div>

          {/* Key vocab + tip */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card p-4">
              <div className="flex items-center gap-1.5 mb-3">
                <BookOpen className="w-3.5 h-3.5 text-brand-600" />
                <p className="text-xs font-semibold text-surface-700 uppercase tracking-wide">Key Vocabulary</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p2.keyVocab.map(v => (
                  <span key={v} className="badge text-xs bg-brand-50 text-brand-700">{v}</span>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <div className="flex items-center gap-1.5 mb-2">
                <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide">Examiner Tip</p>
              </div>
              <p className="text-xs text-amber-800 leading-relaxed">{p2.examinerTip}</p>
            </div>
          </div>
        </div>
      )}

      {/* ─── PART 3 ─────────────────────────────────────────── */}
      {tab === 'part3' && (
        <div className="space-y-5">
          {/* Set selector */}
          <div>
            <p className="label">Choose a discussion topic</p>
            <div className="flex flex-wrap gap-2">
              {PART3_SETS.map(s => (
                <button key={s.id} onClick={() => { setSelectedP3(s.id); setShowSample({}); setExpandedQ(null) }}
                  className={cn('px-3 py-2 rounded-xl border text-sm font-medium transition-all',
                    selectedP3 === s.id ? 'bg-violet-600 text-white border-violet-600' : 'border-surface-200 text-surface-700 hover:border-surface-300')}>
                  {s.emoji} {s.topic}
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="rounded-xl border border-violet-200 bg-violet-50 px-4 py-3 flex items-start gap-2">
            <Lightbulb className="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-violet-800">
              <strong>Part 3 tips:</strong> Give extended, well-structured answers (60–90 seconds). Use hedging language: <em>"I would argue that…"</em>, <em>"It depends on…"</em>, <em>"To some extent…"</em>. Show balanced thinking — acknowledge complexity.
            </p>
          </div>

          {/* Questions */}
          <div className="space-y-3">
            {p3.questions.map((q, i) => {
              const key = `p3_${p3.id}_${i}`
              const isExpanded = expandedQ === key
              return (
                <div key={i} className="card overflow-hidden">
                  <div className="flex items-start gap-3 p-4">
                    <span className="w-6 h-6 rounded-full bg-violet-100 text-violet-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-surface-900 mb-3">"{q.question}"</p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <TimerWidget label="Speaking time" seconds={90} color="#7c3aed" />
                        <button onClick={() => setExpandedQ(isExpanded ? null : key)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-surface-200 text-surface-600 hover:bg-surface-50 transition-all">
                          {isExpanded ? <><ChevronUp className="w-3.5 h-3.5" /> Hide model</> : <><Eye className="w-3.5 h-3.5" /> Band 7 model</>}
                        </button>
                      </div>
                    </div>
                  </div>
                  {isExpanded && (
                    <div className="border-t border-surface-200 px-5 py-4 bg-surface-100/50 space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-violet-600 uppercase tracking-wide mb-2">Band 7+ Model Answer</p>
                        <p className="text-sm text-surface-700 leading-relaxed">{q.modelAnswer}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-surface-500 uppercase tracking-wide mb-2">Key phrases used</p>
                        <div className="flex flex-wrap gap-1.5">
                          {q.keyPhrases.map(kp => (
                            <span key={kp} className="badge text-xs bg-violet-50 text-violet-700 italic">"{kp}"</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
