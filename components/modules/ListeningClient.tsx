'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { LISTENING_TRACKS, SPEAKER_PROFILES } from '@/lib/listening-practice'
import type { ListeningTrack } from '@/lib/listening-practice'
import {
  Play, Square, CheckCircle2, XCircle, RotateCcw,
  Trophy, Eye, EyeOff, Volume2, VolumeX, Clock,
  AlertTriangle, ChevronRight, Headphones
} from 'lucide-react'
import { cn } from '@/lib/utils'

type Phase = 'select' | 'reading' | 'playing' | 'answering' | 'results' | 'review'

const SECTION_META = {
  1: { label: 'Section 1', desc: 'Social conversation', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  2: { label: 'Section 2', desc: 'Monologue', color: 'bg-violet-50 text-violet-700 border-violet-200' },
  3: { label: 'Section 3', desc: 'Academic discussion', color: 'bg-teal-50 text-teal-700 border-teal-200' },
  4: { label: 'Section 4', desc: 'Academic lecture', color: 'bg-orange-50 text-orange-700 border-orange-200' },
}

// ─── TTS Engine ────────────────────────────────────────────────

function useTTS() {
  const synthRef = useRef<SpeechSynthesis | null>(null)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)
  const [speaking, setSpeaking] = useState(false)
  const [supported, setSupported] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      synthRef.current = window.speechSynthesis
    } else {
      setSupported(false)
    }
    return () => { synthRef.current?.cancel() }
  }, [])

  const speak = useCallback((
    track: ListeningTrack,
    onEnd: () => void,
    onProgress?: (lineIdx: number) => void,
  ) => {
    if (!synthRef.current) return
    const synth: SpeechSynthesis = synthRef.current

    synth.cancel()
    setSpeaking(true)

    const lines = track.script

    function speakLine(idx: number) {
      if (idx >= lines.length) {
        setSpeaking(false)
        onEnd()
        return
      }
      const line = lines[idx]
      onProgress?.(idx)

      const utt = new SpeechSynthesisUtterance(line.text)
      utt.lang = 'en-GB'
      const profile = SPEAKER_PROFILES[line.speaker] ?? SPEAKER_PROFILES['Narrator']
      utt.rate = profile.rate
      utt.pitch = profile.pitch

      utt.onend = () => {
        const pause = line.pauseMs ?? 380
        setTimeout(() => speakLine(idx + 1), pause)
      }
      utt.onerror = () => speakLine(idx + 1)

      utteranceRef.current = utt
      synth.speak(utt)
    }

    speakLine(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const stop = useCallback(() => {
    synthRef.current?.cancel()
    setSpeaking(false)
  }, [])

  return { speak, stop, speaking, supported }
}

// ─── Countdown timer ───────────────────────────────────────────

function useCountdown(seconds: number, onDone: () => void) {
  const [remaining, setRemaining] = useState(seconds)
  const [active, setActive] = useState(false)
  const ref = useRef<ReturnType<typeof setInterval> | null>(null)

  function start() {
    setRemaining(seconds)
    setActive(true)
    ref.current = setInterval(() => {
      setRemaining(r => {
        if (r <= 1) {
          clearInterval(ref.current!)
          setActive(false)
          onDone()
          return 0
        }
        return r - 1
      })
    }, 1000)
  }

  function skip() {
    clearInterval(ref.current!)
    setActive(false)
    setRemaining(0)
    onDone()
  }

  useEffect(() => () => clearInterval(ref.current!), [])
  return { remaining, active, start, skip }
}

// ─── Main Component ────────────────────────────────────────────

export default function ListeningClient() {
  const [phase, setPhase] = useState<Phase>('select')
  const [trackId, setTrackId] = useState<string | null>(null)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [currentLine, setCurrentLine] = useState(-1)
  const [showScript, setShowScript] = useState(false)
  const [played, setPlayed] = useState(false)
  const [sectionFilter, setSectionFilter] = useState<1 | 2 | 3 | 4 | 0>(0)

  const tts = useTTS()
  const track = trackId ? LISTENING_TRACKS.find(t => t.id === trackId) : null

  const countdown = useCountdown(
    track?.readingTimeSecs ?? 30,
    () => { if (phase === 'reading') startAudio() }
  )

  const score = track
    ? track.questions.filter(q => (answers[q.id] ?? '').trim().toLowerCase() === q.answer.toLowerCase()).length
    : 0
  const total = track?.questions.length ?? 0
  const allAnswered = track ? track.questions.every(q => (answers[q.id] ?? '').trim().length > 0) : false

  function selectTrack(id: string) {
    setTrackId(id)
    setAnswers({})
    setCurrentLine(-1)
    setShowScript(false)
    setPlayed(false)
    setPhase('reading')
    countdown.start()
  }

  function startAudio() {
    if (!track) return
    setPhase('playing')
    setPlayed(true)
    tts.speak(track, () => setPhase('answering'), idx => setCurrentLine(idx))
  }

  function stopAudio() {
    tts.stop()
    setPhase('answering')
  }

  function submit() {
    tts.stop()
    setPhase('results')
  }

  function reset() {
    tts.stop()
    setAnswers({})
    setCurrentLine(-1)
    setShowScript(false)
    setPlayed(false)
    setPhase('select')
    setTrackId(null)
  }

  function setAnswer(qId: string, val: string) {
    setAnswers(prev => ({ ...prev, [qId]: val }))
  }

  const visibleTracks = sectionFilter === 0
    ? LISTENING_TRACKS
    : LISTENING_TRACKS.filter(t => t.section === sectionFilter)

  // ── SELECT phase ──────────────────────────────────────────────
  if (phase === 'select') {
    return (
      <div className="space-y-5">
        {!tts.supported && (
          <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 flex items-start gap-2 text-sm text-amber-800">
            <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            Your browser does not support Web Speech API. Try Chrome or Edge for audio playback.
          </div>
        )}

        <div className="rounded-xl bg-surface-50 border border-surface-200 px-4 py-3 flex items-start gap-2 text-xs text-surface-500">
          <Headphones className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
          Audio uses browser text-to-speech (British English). Use headphones for best experience. Each track plays once — like the real IELTS exam.
        </div>

        {/* Section filter */}
        <div className="flex flex-wrap gap-2">
          {([0, 1, 2, 3, 4] as const).map(s => {
            const active = sectionFilter === s
            return (
              <button key={s} onClick={() => setSectionFilter(s)}
                className={cn('badge border text-xs py-1 px-3',
                  active ? 'bg-surface-900 text-white border-surface-900' : 'bg-surface-50 text-surface-600 border-surface-200 hover:border-surface-300')}>
                {s === 0 ? 'All sections' : `Section ${s}`}
              </button>
            )
          })}
        </div>

        {/* Track grid */}
        <div className="grid sm:grid-cols-2 gap-3">
          {visibleTracks.map(t => {
            const sm = SECTION_META[t.section]
            return (
              <button key={t.id} onClick={() => selectTrack(t.id)}
                className="card p-4 text-left hover:shadow-card transition-all group">
                <div className="flex items-start gap-3">
                  <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0', sm.color.split(' ')[0])}>
                    <Headphones className={cn('w-5 h-5', sm.color.split(' ')[1])} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className={cn('badge text-xs border', sm.color)}>{sm.label}</span>
                      <span className="text-xs text-surface-400">{sm.desc}</span>
                    </div>
                    <p className="font-semibold text-surface-900 text-sm leading-snug">{t.title}</p>
                    <p className="text-xs text-surface-400 mt-0.5">{t.topic} · {t.questions.length} questions · {Math.ceil(t.readingTimeSecs / 10) * 10}s reading time</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-surface-300 group-hover:text-brand-600 flex-shrink-0 transition-colors" />
                </div>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  if (!track) return null

  const sm = SECTION_META[track.section]

  // ── READING phase ─────────────────────────────────────────────
  if (phase === 'reading') {
    return (
      <div className="space-y-5 max-w-2xl">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-600" />
              <span className="font-bold text-amber-800 text-lg">{countdown.remaining}s</span>
              <span className="text-sm text-amber-700">reading time</span>
            </div>
            <button onClick={countdown.skip} className="btn-secondary text-xs">
              Ready — start audio
            </button>
          </div>
          <div className="w-full h-2 rounded-full bg-amber-200 overflow-hidden">
            <div className="h-full rounded-full bg-amber-500 transition-all"
              style={{ width: `${(countdown.remaining / track.readingTimeSecs) * 100}%` }} />
          </div>
          <p className="text-xs text-amber-700">Study the questions below before the audio begins. The audio will play once automatically when the timer ends.</p>
        </div>

        <TrackHeader track={track} sm={sm} onBack={reset} />
        <QuestionList track={track} answers={answers} setAnswer={setAnswer} submitted={false} phase={phase} />
      </div>
    )
  }

  // ── PLAYING phase ─────────────────────────────────────────────
  if (phase === 'playing') {
    const line = currentLine >= 0 ? track.script[currentLine] : null
    return (
      <div className="space-y-5 max-w-2xl">
        <div className="rounded-2xl border border-brand-200 bg-brand-50 p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500" />
              </div>
              <span className="font-bold text-brand-800">Audio playing…</span>
            </div>
            <button onClick={stopAudio} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-surface-200 text-xs text-surface-600 hover:border-surface-300">
              <Square className="w-3.5 h-3.5" /> Stop & answer
            </button>
          </div>
          {line && (
            <div className="rounded-xl bg-white border border-brand-100 px-4 py-3">
              <p className="text-xs text-surface-400 mb-1">{track.speakerLabels[line.speaker] ?? line.speaker}</p>
              <p className="text-sm text-surface-800 italic">"{line.text}"</p>
            </div>
          )}
          <p className="text-xs text-brand-600">Answer questions as you listen. The audio plays once only.</p>
        </div>

        <TrackHeader track={track} sm={sm} onBack={reset} />
        <QuestionList track={track} answers={answers} setAnswer={setAnswer} submitted={false} phase={phase} />
      </div>
    )
  }

  // ── ANSWERING phase ───────────────────────────────────────────
  if (phase === 'answering') {
    return (
      <div className="space-y-5 max-w-2xl">
        <div className="rounded-xl border border-surface-200 bg-surface-50 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-surface-600">
            <VolumeX className="w-4 h-4 text-surface-400" />
            Audio finished. Review and complete your answers.
          </div>
          <span className="text-xs text-surface-400">{Object.keys(answers).length}/{total} answered</span>
        </div>

        <TrackHeader track={track} sm={sm} onBack={reset} />
        <QuestionList track={track} answers={answers} setAnswer={setAnswer} submitted={false} phase={phase} />

        <button onClick={submit}
          className="btn-primary w-full justify-center py-3 text-sm">
          Submit answers ({Object.keys(answers).length}/{total})
        </button>
      </div>
    )
  }

  // ── RESULTS + REVIEW phase ────────────────────────────────────
  const pct = Math.round((score / total) * 100)
  return (
    <div className="space-y-5 max-w-2xl">
      {/* Score */}
      <div className={cn('rounded-2xl border p-5 flex items-center gap-4',
        pct === 100 ? 'bg-brand-50 border-brand-200' : pct >= 70 ? 'bg-amber-50 border-amber-200' : 'bg-red-50 border-red-200')}>
        <span className="text-4xl">{pct === 100 ? '🎉' : pct >= 70 ? '💪' : '📖'}</span>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-0.5">
            <Trophy className="w-5 h-5 text-amber-500" />
            <span className="text-2xl font-bold text-surface-900">{score} / {total}</span>
            <span className="text-sm text-surface-400">({pct}%)</span>
          </div>
          <p className="text-sm text-surface-500">
            {pct === 100 ? 'Perfect — excellent listening!' : pct >= 70 ? 'Good result. Review the explanations below.' : 'Review the answers and try again.'}
          </p>
        </div>
        <button onClick={reset} className="btn-secondary text-xs flex-shrink-0">
          <RotateCcw className="w-3.5 h-3.5" /> New track
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button onClick={() => setShowScript(s => !s)} className="btn-secondary text-xs">
          {showScript ? <><EyeOff className="w-3.5 h-3.5" /> Hide script</> : <><Eye className="w-3.5 h-3.5" /> Read script</>}
        </button>
        <button onClick={() => { tts.stop(); tts.speak(track, () => {}, () => {}) }}
          disabled={tts.speaking}
          className="btn-ghost text-xs">
          <Volume2 className="w-3.5 h-3.5" /> {tts.speaking ? 'Playing…' : 'Listen again'}
        </button>
        {tts.speaking && (
          <button onClick={tts.stop} className="btn-ghost text-xs">
            <Square className="w-3.5 h-3.5" /> Stop
          </button>
        )}
      </div>

      {/* Script */}
      {showScript && (
        <div className="card p-5 space-y-2">
          <p className="text-xs font-semibold text-surface-500 uppercase tracking-wide mb-3">Full Script</p>
          {track.script.map((line, i) => {
            if (line.speaker === 'Narrator') return (
              <p key={i} className="text-xs text-surface-400 italic">{line.text}</p>
            )
            return (
              <div key={i} className="flex gap-2">
                <span className="text-xs font-bold text-surface-500 w-24 flex-shrink-0">
                  {track.speakerLabels[line.speaker] ?? line.speaker}:
                </span>
                <p className="text-sm text-surface-700 leading-relaxed">"{line.text}"</p>
              </div>
            )
          })}
        </div>
      )}

      <TrackHeader track={track} sm={sm} onBack={reset} />
      <QuestionList track={track} answers={answers} setAnswer={setAnswer} submitted={true} phase={phase} />
    </div>
  )
}

// ─── Sub-components ────────────────────────────────────────────

function TrackHeader({ track, sm, onBack }: {
  track: ListeningTrack
  sm: typeof SECTION_META[1]
  onBack: () => void
}) {
  return (
    <div className="card p-4">
      <div className="flex items-start gap-3">
        <button onClick={onBack} className="btn-ghost text-xs py-1 px-2 flex-shrink-0">← Back</button>
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className={cn('badge text-xs border', sm.color)}>{sm.label}</span>
            <span className="text-xs text-surface-400">{sm.desc}</span>
          </div>
          <p className="font-semibold text-surface-900 text-sm">{track.title}</p>
          <p className="text-xs text-surface-400 mt-0.5">{track.context}</p>
        </div>
      </div>
      {/* Speaker key */}
      <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-surface-100">
        {Object.entries(track.speakerLabels).filter(([k]) => k !== 'Narrator').map(([key, label]) => (
          <span key={key} className="badge text-xs bg-surface-50 text-surface-600 border-surface-200">
            {key} = {label}
          </span>
        ))}
      </div>
    </div>
  )
}

function QuestionList({ track, answers, setAnswer, submitted, phase }: {
  track: ListeningTrack
  answers: Record<string, string>
  setAnswer: (id: string, val: string) => void
  submitted: boolean
  phase: Phase
}) {
  return (
    <div className="space-y-3">
      {track.questions.map(q => {
        const val = answers[q.id] ?? ''
        const isCorrect = submitted && val.trim().toLowerCase() === q.answer.toLowerCase()
        const isWrong = submitted && val.trim().length > 0 && !isCorrect
        const isMissed = submitted && val.trim().length === 0

        return (
          <div key={q.id} className={cn('card p-4 space-y-3 transition-all',
            submitted && isCorrect && 'border-brand-300',
            submitted && (isWrong || isMissed) && 'border-red-200')}>

            <div className="flex items-start gap-2">
              <span className="w-6 h-6 rounded-full bg-surface-100 text-surface-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {q.number}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="badge text-xs bg-surface-100 text-surface-500">
                    {q.type === 'form_completion' ? 'Form' : q.type === 'note_completion' ? 'Notes' : q.type === 'multiple_choice' ? 'Multiple Choice' : 'Matching'}
                  </span>
                  {q.maxWords && <span className="text-xs text-surface-400">max {q.maxWords} word{q.maxWords > 1 ? 's' : ''}</span>}
                  {submitted && (isCorrect ? <CheckCircle2 className="w-4 h-4 text-brand-600" /> : <XCircle className="w-4 h-4 text-red-500" />)}
                </div>
                <p className="text-sm font-medium text-surface-900">{q.question}</p>
              </div>
            </div>

            {/* Input */}
            {q.type === 'multiple_choice' ? (
              <div className="space-y-2 ml-8">
                {(q.options ?? []).map(opt => {
                  const selected = val === opt
                  const correct = opt === q.answer
                  return (
                    <button key={opt} onClick={() => !submitted && setAnswer(q.id, opt)}
                      disabled={submitted}
                      className={cn(
                        'w-full text-left px-3 py-2 rounded-xl border text-sm transition-all',
                        !submitted && !selected && 'border-surface-200 hover:border-brand-300 hover:bg-brand-50',
                        !submitted && selected && 'border-brand-400 bg-brand-50',
                        submitted && correct && 'border-brand-400 bg-brand-50 text-brand-800',
                        submitted && selected && !correct && 'border-red-400 bg-red-50 text-red-700',
                        submitted && !selected && !correct && 'opacity-40 border-surface-100',
                      )}>
                      {opt}
                      {submitted && correct && <CheckCircle2 className="inline w-3.5 h-3.5 ml-2 text-brand-600" />}
                      {submitted && selected && !correct && <XCircle className="inline w-3.5 h-3.5 ml-2 text-red-500" />}
                    </button>
                  )
                })}
              </div>
            ) : (
              <div className="ml-8">
                <input
                  value={val}
                  onChange={e => setAnswer(q.id, e.target.value)}
                  disabled={submitted}
                  placeholder={`Answer (max ${q.maxWords ?? 3} words)…`}
                  className={cn(
                    'w-full border rounded-xl px-3 py-2 text-sm outline-none transition-all',
                    !submitted && 'border-surface-300 focus:border-brand-400 bg-white',
                    submitted && isCorrect && 'border-brand-400 bg-brand-50 text-brand-800',
                    submitted && isWrong && 'border-red-400 bg-red-50 text-red-700',
                    submitted && isMissed && 'border-red-200 bg-red-50 text-surface-400',
                  )}
                />
              </div>
            )}

            {/* Explanation */}
            {submitted && (
              <div className={cn('ml-8 rounded-lg p-3 text-xs leading-relaxed',
                isCorrect ? 'bg-brand-50 text-brand-800' : 'bg-red-50 text-red-800')}>
                {!isCorrect && (
                  <p className="font-semibold mb-1">✓ Correct answer: "{q.answer}"</p>
                )}
                {q.explanation}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
