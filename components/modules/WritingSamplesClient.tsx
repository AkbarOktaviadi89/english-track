'use client'

import { useState } from 'react'
import { WRITING_SAMPLES } from '@/lib/writing-samples'
import type { Band, BandVersion } from '@/lib/writing-samples'
import { CheckCircle2, AlertCircle, Lightbulb, BookOpen, ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

const BAND_COLORS: Record<Band, { bg: string; text: string; border: string }> = {
  '5.0': { bg: '#fef2f2', text: '#dc2626', border: '#fca5a5' },
  '6.5': { bg: '#fffbeb', text: '#b45309', border: '#fcd34d' },
  '7.5': { bg: '#f0fdf4', text: '#16a34a', border: '#86efac' },
}

const ANNOTATION_COLORS = {
  strength: { bg: '#f0fdf4', border: '#86efac', icon: <CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />, label: 'Strength' },
  weakness: { bg: '#fef2f2', border: '#fca5a5', icon: <AlertCircle className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />, label: 'Issue' },
  tip:      { bg: '#fffbeb', border: '#fcd34d', icon: <Lightbulb className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />, label: 'Tip' },
}

export default function WritingSamplesClient() {
  const [activePrompt, setActivePrompt] = useState(WRITING_SAMPLES[0].id)
  const [activeBand, setActiveBand] = useState<Band>('7.5')
  const [showAnnotations, setShowAnnotations] = useState(true)
  const [expandedEssay, setExpandedEssay] = useState(false)
  const [compareMode, setCompareMode] = useState(false)

  const prompt = WRITING_SAMPLES.find(p => p.id === activePrompt)!
  const version = prompt.versions.find(v => v.band === activeBand)!
  const bands: Band[] = ['5.0', '6.5', '7.5']

  function switchPrompt(id: string) {
    setActivePrompt(id)
    setExpandedEssay(false)
    setCompareMode(false)
  }

  return (
    <div>
      {/* Prompt selector */}
      <div className="mb-6">
        <p className="label">Select a prompt</p>
        <div className="grid sm:grid-cols-2 gap-2">
          {WRITING_SAMPLES.map(p => (
            <button key={p.id} onClick={() => switchPrompt(p.id)}
              className={cn('p-3 rounded-xl border text-left transition-all',
                activePrompt === p.id
                  ? p.type === 'task1' ? 'border-blue-400 bg-blue-50' : 'border-brand-400 bg-brand-50'
                  : 'border-surface-200 bg-white hover:border-surface-300')}>
              <div className="flex items-center gap-2 mb-1">
                <span className={cn('badge text-xs font-bold',
                  p.type === 'task1' ? 'bg-blue-100 text-blue-700' : 'bg-brand-100 text-brand-700')}>
                  {p.type === 'task1' ? 'Task 1' : 'Task 2'}
                </span>
              </div>
              <p className="text-sm font-semibold text-surface-900">{p.title}</p>
              <p className="text-xs text-surface-500 mt-0.5 line-clamp-1">{p.taskDescription}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Prompt text */}
      <div className="card p-4 mb-5">
        <p className="text-xs font-semibold text-surface-400 uppercase tracking-wide mb-2">Prompt</p>
        <p className="text-sm text-surface-800 leading-relaxed">{prompt.prompt}</p>
        <p className="text-xs text-surface-400 mt-2 italic">{prompt.taskDescription}</p>
      </div>

      {/* Band selector + controls */}
      <div className="flex items-center gap-3 flex-wrap mb-5">
        <div className="flex gap-2">
          {bands.map(band => {
            const bc = BAND_COLORS[band]
            return (
              <button key={band} onClick={() => { setActiveBand(band); setCompareMode(false) }}
                className={cn('px-4 py-2 rounded-xl border text-sm font-bold transition-all',
                  !compareMode && activeBand === band ? 'shadow-card' : 'opacity-60 hover:opacity-100')}
                style={!compareMode && activeBand === band
                  ? { backgroundColor: bc.bg, color: bc.text, borderColor: bc.border }
                  : { borderColor: bc.border, color: bc.text, backgroundColor: 'transparent' }}>
                Band {band}
              </button>
            )
          })}
        </div>
        <button onClick={() => setCompareMode(m => !m)}
          className={cn('px-4 py-2 rounded-xl border text-sm font-medium transition-all',
            compareMode ? 'bg-surface-900 text-white border-surface-900' : 'border-surface-200 text-surface-600 hover:border-surface-400')}>
          {compareMode ? '← Single view' : '⇄ Compare all bands'}
        </button>
      </div>

      {/* SINGLE VIEW */}
      {!compareMode && (
        <div className="space-y-4">
          {/* Essay */}
          <div className="card overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-surface-200">
              <div className="flex items-center gap-2">
                <span className="badge font-bold" style={{ backgroundColor: BAND_COLORS[activeBand].bg, color: BAND_COLORS[activeBand].text, borderColor: BAND_COLORS[activeBand].border }}>
                  Band {activeBand}
                </span>
                <span className="text-xs text-surface-400">{version.wordCount} words</span>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setShowAnnotations(a => !a)}
                  className="text-xs font-medium text-surface-500 hover:text-surface-800 flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  {showAnnotations ? 'Hide' : 'Show'} annotations
                </button>
                <button onClick={() => setExpandedEssay(e => !e)}
                  className="text-xs font-medium text-surface-500 hover:text-surface-800 flex items-center gap-1">
                  {expandedEssay ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
            <div className={cn('px-5 py-4 text-sm text-surface-700 leading-relaxed whitespace-pre-line', !expandedEssay && 'max-h-52 overflow-hidden relative')}>
              {version.essay}
              {!expandedEssay && (
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
              )}
            </div>
            {!expandedEssay && (
              <button onClick={() => setExpandedEssay(true)}
                className="w-full py-2 text-xs font-medium text-brand-600 hover:text-brand-700 border-t border-surface-200 bg-surface-50">
                Read full essay ↓
              </button>
            )}
          </div>

          {/* Annotations */}
          {showAnnotations && version.annotations.length > 0 && (
            <div className="card p-5">
              <h3 className="font-semibold text-surface-900 text-sm mb-3">Phrase-by-phrase annotations</h3>
              <div className="space-y-2.5">
                {version.annotations.map((ann, i) => {
                  const ac = ANNOTATION_COLORS[ann.type]
                  return (
                    <div key={i} className="rounded-xl border p-3 space-y-1.5" style={{ backgroundColor: ac.bg, borderColor: ac.border }}>
                      <div className="flex items-start gap-2">
                        {ac.icon}
                        <p className="text-xs font-semibold" style={{ color: ann.type === 'strength' ? '#16a34a' : ann.type === 'weakness' ? '#dc2626' : '#b45309' }}>
                          {ac.label}
                        </p>
                      </div>
                      <p className="text-xs font-mono text-surface-800 italic bg-white/60 px-2 py-1 rounded-lg leading-relaxed">
                        "…{ann.phrase}…"
                      </p>
                      <p className="text-xs text-surface-700">{ann.comment}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Strengths & Weaknesses */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card p-4">
              <div className="flex items-center gap-1.5 mb-3">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <h3 className="font-semibold text-surface-900 text-sm">Strengths</h3>
              </div>
              <ul className="space-y-1.5">
                {version.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-surface-700">
                    <span className="text-green-500 flex-shrink-0">✓</span> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-4">
              <div className="flex items-center gap-1.5 mb-3">
                <AlertCircle className="w-4 h-4 text-red-500" />
                <h3 className="font-semibold text-surface-900 text-sm">Weaknesses</h3>
              </div>
              <ul className="space-y-1.5">
                {version.weaknesses.map((w, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-surface-700">
                    <span className="text-red-400 flex-shrink-0">✗</span> {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Examiner note */}
          <div className="rounded-xl border border-violet-200 bg-violet-50 p-4">
            <div className="flex items-center gap-1.5 mb-2">
              <Lightbulb className="w-3.5 h-3.5 text-violet-600" />
              <p className="text-xs font-semibold text-violet-700 uppercase tracking-wide">Examiner's Note</p>
            </div>
            <p className="text-sm text-violet-900 leading-relaxed">{version.examinerNote}</p>
          </div>
        </div>
      )}

      {/* COMPARE MODE */}
      {compareMode && (
        <div className="space-y-6">
          {bands.map(band => {
            const v = prompt.versions.find(x => x.band === band)!
            const bc = BAND_COLORS[band]
            return (
              <div key={band} className="card overflow-hidden">
                <div className="px-5 py-3 border-b border-surface-200 flex items-center gap-3">
                  <span className="badge font-bold" style={{ backgroundColor: bc.bg, color: bc.text, borderColor: bc.border }}>
                    Band {band}
                  </span>
                  <span className="text-xs text-surface-400">{v.wordCount} words</span>
                </div>
                <div className="px-5 py-4 text-sm text-surface-700 leading-relaxed whitespace-pre-line max-h-64 overflow-y-auto scrollbar-thin">
                  {v.essay}
                </div>
                <div className="px-5 py-3 border-t border-surface-200 bg-surface-50">
                  <p className="text-xs text-surface-600 italic">{v.examinerNote}</p>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
