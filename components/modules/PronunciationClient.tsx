'use client'

import { useState, useCallback } from 'react'
import { IPA_SOUNDS, MINIMAL_PAIRS, CONNECTED_SPEECH } from '@/lib/pronunciation'
import type { IPASound } from '@/lib/pronunciation'
import { Volume2, ChevronDown, ChevronUp, CheckCircle2, XCircle, RotateCcw } from 'lucide-react'
import { cn } from '@/lib/utils'

type Tab = 'ipa' | 'pairs' | 'connected'

// Web Speech API TTS
function speak(text: string, rate = 0.85) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const utt = new SpeechSynthesisUtterance(text)
  utt.lang = 'en-GB'
  utt.rate = rate
  utt.pitch = 1
  window.speechSynthesis.speak(utt)
}

// ─── IPA Section ─────────────────────────────────────────────

const TYPE_ORDER: IPASound['type'][] = [
  'vowel_short', 'vowel_long', 'diphthong',
  'consonant_unvoiced', 'consonant_voiced', 'other',
]
const TYPE_LABELS: Record<IPASound['type'], string> = {
  vowel_short:        'Short Vowels',
  vowel_long:         'Long Vowels',
  diphthong:          'Diphthongs',
  consonant_unvoiced: 'Unvoiced Consonants',
  consonant_voiced:   'Voiced Consonants',
  other:              'Nasals, Laterals & Approximants',
}
const TYPE_COLORS: Record<IPASound['type'], string> = {
  vowel_short:        'bg-blue-50   border-blue-200   text-blue-700',
  vowel_long:         'bg-violet-50 border-violet-200 text-violet-700',
  diphthong:          'bg-indigo-50 border-indigo-200 text-indigo-700',
  consonant_unvoiced: 'bg-rose-50   border-rose-200   text-rose-700',
  consonant_voiced:   'bg-orange-50 border-orange-200 text-orange-700',
  other:              'bg-teal-50   border-teal-200   text-teal-700',
}

function IPACard({ sound, onClick, active }: { sound: IPASound; onClick: () => void; active: boolean }) {
  const col = TYPE_COLORS[sound.type]
  return (
    <button onClick={onClick}
      className={cn(
        'border rounded-xl p-3 text-left transition-all hover:shadow-sm w-full',
        active ? col + ' shadow-card' : 'border-surface-200 bg-white hover:border-surface-300',
      )}>
      <div className="flex items-center justify-between mb-1">
        <span className="text-2xl font-bold font-mono tracking-tight leading-none">{sound.symbol}</span>
        <button onClick={e => { e.stopPropagation(); speak(sound.exampleWord) }}
          className="text-surface-400 hover:text-brand-600 transition-colors">
          <Volume2 className="w-4 h-4" />
        </button>
      </div>
      <p className="text-xs font-medium text-surface-700">{sound.exampleWord}</p>
      <p className="text-xs text-surface-400 font-mono">{sound.exampleIPA}</p>
    </button>
  )
}

function IPASection() {
  const [activeSymbol, setActiveSymbol] = useState<string | null>(null)
  const activeSound = IPA_SOUNDS.find(s => s.symbol === activeSymbol)

  return (
    <div className="space-y-6">
      {TYPE_ORDER.map(type => {
        const sounds = IPA_SOUNDS.filter(s => s.type === type)
        return (
          <div key={type}>
            <h3 className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">
              {TYPE_LABELS[type]}
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2">
              {sounds.map(s => (
                <IPACard key={s.symbol} sound={s}
                  active={activeSymbol === s.symbol}
                  onClick={() => setActiveSymbol(prev => prev === s.symbol ? null : s.symbol)} />
              ))}
            </div>
          </div>
        )
      })}

      {/* Detail panel */}
      {activeSound && (
        <div className={cn('rounded-2xl border p-5 space-y-3 transition-all', TYPE_COLORS[activeSound.type])}>
          <div className="flex items-center gap-4">
            <span className="text-5xl font-bold font-mono">{activeSound.symbol}</span>
            <div>
              <p className="text-lg font-semibold">{activeSound.exampleWord}</p>
              <p className="text-sm font-mono opacity-70">{activeSound.exampleIPA}</p>
            </div>
            <button onClick={() => speak(activeSound.exampleWord, 0.7)}
              className="ml-auto flex items-center gap-2 px-4 py-2 rounded-xl bg-white bg-opacity-60 hover:bg-opacity-100 transition-all text-sm font-medium">
              <Volume2 className="w-4 h-4" /> Listen
            </button>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 pt-1">
            <div className="bg-white bg-opacity-50 rounded-xl p-3">
              <p className="text-xs font-semibold uppercase tracking-wide opacity-60 mb-1">Mouth position</p>
              <p className="text-sm leading-relaxed">{activeSound.description}</p>
            </div>
            <div className="bg-white bg-opacity-50 rounded-xl p-3">
              <p className="text-xs font-semibold uppercase tracking-wide opacity-60 mb-1">Learner tip</p>
              <p className="text-sm leading-relaxed">{activeSound.tip}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Minimal Pairs Section ────────────────────────────────────

function MinimalPairsSection() {
  const [filter, setFilter] = useState<'easy' | 'medium' | 'hard' | 'all'>('all')
  const [quizMode, setQuizMode] = useState(false)
  const [qIdx, setQIdx] = useState(0)
  const [picked, setPicked] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [total, setTotal] = useState(0)

  const pool = MINIMAL_PAIRS.filter(p => filter === 'all' || p.difficulty === filter)
  const pair = pool[qIdx % pool.length]

  const DIFFICULTY_COLORS = {
    easy:   'bg-green-50  text-green-700  border-green-200',
    medium: 'bg-amber-50  text-amber-700  border-amber-200',
    hard:   'bg-red-50    text-red-700    border-red-200',
  }

  function pickAnswer(word: string) {
    if (picked) return
    setPicked(word)
    const isCorrect = word === pair.wordA  // wordA is always the "target" in quiz mode
    if (isCorrect) setScore(s => s + 1)
    setTotal(t => t + 1)
  }

  function next() {
    setPicked(null)
    setQIdx(i => (i + 1) % pool.length)
  }

  function resetQuiz() {
    setPicked(null)
    setQIdx(0)
    setScore(0)
    setTotal(0)
  }

  if (!pair) return null

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex items-center gap-2 flex-wrap">
        {(['all', 'easy', 'medium', 'hard'] as const).map(d => (
          <button key={d} onClick={() => { setFilter(d); resetQuiz() }}
            className={cn('badge border text-xs py-1 px-3 capitalize',
              filter === d
                ? d === 'all' ? 'bg-surface-900 text-white border-surface-900' : DIFFICULTY_COLORS[d as 'easy' | 'medium' | 'hard']
                : 'bg-surface-100 text-surface-600 border-surface-200')}>
            {d}
          </button>
        ))}
        <button onClick={() => { setQuizMode(m => !m); resetQuiz() }}
          className="btn-secondary text-xs ml-auto">
          {quizMode ? 'Browse mode' : 'Quiz mode'}
        </button>
        {quizMode && total > 0 && (
          <>
            <span className="text-sm font-semibold text-surface-900">{score}/{total}</span>
            <button onClick={resetQuiz} className="btn-ghost text-xs"><RotateCcw className="w-3.5 h-3.5" /></button>
          </>
        )}
      </div>

      {quizMode ? (
        /* Quiz: hear the word, identify it */
        <div className="card p-6 space-y-5">
          <div className="text-center space-y-2">
            <p className="text-xs text-surface-400 uppercase tracking-wide">Which word do you hear?</p>
            <span className="badge text-xs border" style={{}} >{pair.contrast}</span>
            <div className="flex justify-center gap-4 mt-3">
              <button onClick={() => speak(pair.wordA, 0.75)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-100 hover:bg-surface-200 text-sm font-medium transition-all">
                <Volume2 className="w-4 h-4 text-brand-600" /> Hear word A
              </button>
              <button onClick={() => speak(pair.wordB, 0.75)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-100 hover:bg-surface-200 text-sm font-medium transition-all">
                <Volume2 className="w-4 h-4 text-violet-600" /> Hear word B
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[pair.wordA, pair.wordB].map(word => {
              const isCorrect = word === pair.wordA
              const selected = picked === word
              return (
                <button key={word} onClick={() => pickAnswer(word)}
                  disabled={!!picked}
                  className={cn(
                    'p-4 rounded-xl border text-center font-semibold text-lg transition-all',
                    !picked && 'border-surface-200 hover:border-brand-400 hover:bg-brand-50',
                    picked && selected && isCorrect && 'border-brand-400 bg-brand-50 text-brand-800',
                    picked && selected && !isCorrect && 'border-red-400 bg-red-50 text-red-700',
                    picked && !selected && isCorrect && 'border-brand-400 bg-brand-50 text-brand-600',
                    picked && !selected && !isCorrect && 'opacity-40 border-surface-100',
                  )}>
                  {word}
                  {picked && selected && isCorrect && <CheckCircle2 className="inline w-4 h-4 ml-2 text-brand-600" />}
                  {picked && selected && !isCorrect && <XCircle className="inline w-4 h-4 ml-2 text-red-500" />}
                </button>
              )
            })}
          </div>
          {picked && (
            <div className="space-y-2">
              <p className="text-sm text-surface-500 text-center">
                {pair.wordA}: <span className="font-mono text-brand-700">{pair.ipaA}</span> — {pair.tipA}
              </p>
              <p className="text-sm text-surface-500 text-center">
                {pair.wordB}: <span className="font-mono text-violet-700">{pair.ipaB}</span> — {pair.tipB}
              </p>
              <button onClick={next} className="btn-primary w-full justify-center mt-2">
                Next pair →
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Browse: all pairs as cards */
        <div className="grid sm:grid-cols-2 gap-3">
          {pool.map(p => (
            <div key={p.id} className="card p-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className={cn('badge text-xs border capitalize', DIFFICULTY_COLORS[p.difficulty])}>
                  {p.difficulty}
                </span>
                <span className="badge text-xs bg-surface-100 text-surface-500">{p.contrast}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { word: p.wordA, ipa: p.ipaA, tip: p.tipA, example: p.exampleA, color: 'brand' },
                  { word: p.wordB, ipa: p.ipaB, tip: p.tipB, example: p.exampleB, color: 'violet' },
                ].map(item => (
                  <div key={item.word} className={cn('rounded-xl p-3 space-y-1.5',
                    item.color === 'brand' ? 'bg-brand-50 border border-brand-100' : 'bg-violet-50 border border-violet-100')}>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-surface-900">{item.word}</span>
                      <button onClick={() => speak(item.word, 0.8)}
                        className="text-surface-400 hover:text-brand-600">
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-xs font-mono text-surface-500">{item.ipa}</p>
                    <p className="text-xs text-surface-500 italic leading-relaxed">"{item.example}"</p>
                    <p className="text-xs text-surface-600">{item.tip}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Connected Speech Section ─────────────────────────────────

function ConnectedSpeechSection() {
  const [open, setOpen] = useState<string | null>(CONNECTED_SPEECH[0].name)

  return (
    <div className="space-y-2">
      {CONNECTED_SPEECH.map(pattern => {
        const isOpen = open === pattern.name
        return (
          <div key={pattern.name} className="card overflow-hidden">
            <button onClick={() => setOpen(isOpen ? null : pattern.name)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-surface-50 transition-colors">
              <div>
                <p className="font-semibold text-surface-900 text-sm">{pattern.name}</p>
                <p className="text-xs text-surface-500 mt-0.5">{pattern.description}</p>
              </div>
              {isOpen ? <ChevronUp className="w-4 h-4 text-surface-400 flex-shrink-0 ml-3" />
                       : <ChevronDown className="w-4 h-4 text-surface-400 flex-shrink-0 ml-3" />}
            </button>
            {isOpen && (
              <div className="border-t border-surface-200 p-4 space-y-4">
                <div className="rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
                  <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">Rule</p>
                  <p className="text-sm text-amber-800">{pattern.rule}</p>
                </div>
                <div className="space-y-2">
                  {pattern.examples.map((ex, i) => (
                    <div key={i} className="rounded-xl bg-surface-50 border border-surface-200 p-3 space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-medium text-surface-900">{ex.normal}</span>
                        <span className="text-surface-300">→</span>
                        <span className="text-sm font-mono text-brand-700">{ex.spoken}</span>
                        <button onClick={() => speak(ex.normal, 1.0)}
                          className="ml-auto text-surface-400 hover:text-brand-600">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-xs text-surface-500">{ex.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────

export default function PronunciationClient() {
  const [tab, setTab] = useState<Tab>('ipa')

  const tabs: { key: Tab; label: string }[] = [
    { key: 'ipa',       label: 'IPA Chart' },
    { key: 'pairs',     label: 'Minimal Pairs' },
    { key: 'connected', label: 'Connected Speech' },
  ]

  return (
    <div className="space-y-5">
      {/* Browser support notice */}
      <div className="rounded-xl bg-surface-50 border border-surface-200 px-4 py-3 flex items-start gap-2 text-xs text-surface-500">
        <Volume2 className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
        <span>Audio uses your browser's built-in speech synthesis (Web Speech API). Click any <Volume2 className="inline w-3 h-3" /> icon or "Listen" button to hear the word pronounced in British English.</span>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-surface-100 rounded-xl p-1">
        {tabs.map(t => (
          <button key={t.key} onClick={() => setTab(t.key)}
            className={cn('flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all',
              tab === t.key
                ? 'bg-white text-surface-900 shadow-sm'
                : 'text-surface-500 hover:text-surface-700')}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'ipa'       && <IPASection />}
      {tab === 'pairs'     && <MinimalPairsSection />}
      {tab === 'connected' && <ConnectedSpeechSection />}
    </div>
  )
}
