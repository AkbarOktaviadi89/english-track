'use client'

import { useState } from 'react'
import { STRATEGY_CARDS } from '@/lib/exam-strategy'
import type { IELTSSection, StrategyTip } from '@/lib/exam-strategy'
import {
  Bookmark, BookmarkCheck, ChevronDown, ChevronUp, Clock,
  Target, AlertTriangle, Star, CheckSquare
} from 'lucide-react'
import { cn } from '@/lib/utils'

type SectionFilter = IELTSSection | 'all' | 'bookmarks'

const SECTIONS: { key: IELTSSection | 'all'; label: string; icon: string; color: string }[] = [
  { key: 'all',       label: 'All Sections', icon: '📚', color: 'bg-surface-900 text-white' },
  { key: 'reading',   label: 'Reading',      icon: '📖', color: 'bg-blue-600   text-white' },
  { key: 'writing',   label: 'Writing',      icon: '✍️', color: 'bg-violet-600 text-white' },
  { key: 'listening', label: 'Listening',    icon: '🎧', color: 'bg-teal-600   text-white' },
  { key: 'speaking',  label: 'Speaking',     icon: '🗣️', color: 'bg-orange-600 text-white' },
]

const SECTION_COLORS: Record<IELTSSection, { bg: string; border: string; text: string; light: string }> = {
  reading:   { bg: 'bg-blue-600',   border: 'border-blue-200',   text: 'text-blue-700',   light: 'bg-blue-50' },
  writing:   { bg: 'bg-violet-600', border: 'border-violet-200', text: 'text-violet-700', light: 'bg-violet-50' },
  listening: { bg: 'bg-teal-600',   border: 'border-teal-200',   text: 'text-teal-700',   light: 'bg-teal-50' },
  speaking:  { bg: 'bg-orange-600', border: 'border-orange-200', text: 'text-orange-700', light: 'bg-orange-50' },
}

const TIP_TYPE_CONFIG: Record<StrategyTip['type'], { label: string; icon: typeof Clock; color: string }> = {
  timing:    { label: 'Timing',    icon: Clock,         color: 'text-blue-600   bg-blue-50   border-blue-200' },
  approach:  { label: 'Approach', icon: Target,        color: 'text-brand-700  bg-brand-50  border-brand-200' },
  trap:      { label: 'Trap',     icon: AlertTriangle, color: 'text-red-600    bg-red-50    border-red-200' },
  band:      { label: 'Band',     icon: Star,          color: 'text-amber-700  bg-amber-50  border-amber-200' },
  checklist: { label: 'Checklist',icon: CheckSquare,   color: 'text-teal-700   bg-teal-50   border-teal-200' },
}

function TipCard({ tip }: { tip: StrategyTip }) {
  const [open, setOpen] = useState(false)
  const cfg = TIP_TYPE_CONFIG[tip.type]
  const Icon = cfg.icon
  return (
    <div className={cn('rounded-xl border overflow-hidden transition-all', cfg.color.split(' ')[2])}>
      <button onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:opacity-90 transition-opacity">
        <span className={cn('flex items-center gap-1.5 badge text-xs font-semibold flex-shrink-0', cfg.color)}>
          <Icon className="w-3 h-3" /> {cfg.label}
        </span>
        <span className="text-sm font-semibold text-surface-900 flex-1">{tip.title}</span>
        {open
          ? <ChevronUp className="w-4 h-4 text-surface-400 flex-shrink-0" />
          : <ChevronDown className="w-4 h-4 text-surface-400 flex-shrink-0" />}
      </button>
      {open && (
        <div className={cn('px-4 pb-4 pt-1', cfg.color.split(' ')[1])}>
          <p className="text-sm text-surface-700 leading-relaxed whitespace-pre-line">{tip.body}</p>
        </div>
      )}
    </div>
  )
}

function StrategyCardView({ card, bookmarked, onBookmark }: {
  card: typeof STRATEGY_CARDS[0]
  bookmarked: boolean
  onBookmark: () => void
}) {
  const [expanded, setExpanded] = useState(false)
  const sc = SECTION_COLORS[card.section]

  return (
    <div className={cn('card overflow-hidden border', bookmarked && 'ring-2 ring-brand-300')}>
      {/* Card header */}
      <div className={cn('px-5 py-4 flex items-start gap-3', sc.light)}>
        <span className="text-2xl flex-shrink-0">{card.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className={cn('badge text-xs font-bold capitalize', sc.light, sc.text, sc.border)}>
              {card.section}
            </span>
          </div>
          <h3 className="font-bold text-surface-900 leading-snug">{card.title}</h3>
          <p className="text-xs text-surface-500 mt-0.5">{card.subtitle}</p>
        </div>
        <button onClick={onBookmark}
          className={cn('flex-shrink-0 p-1.5 rounded-lg transition-all',
            bookmarked ? 'text-brand-600 bg-brand-50' : 'text-surface-300 hover:text-surface-500')}>
          {bookmarked
            ? <BookmarkCheck className="w-5 h-5" />
            : <Bookmark className="w-5 h-5" />}
        </button>
      </div>

      {/* Overview */}
      <div className="px-5 py-4 border-t border-surface-100">
        <p className="text-sm text-surface-700 leading-relaxed">{card.overview}</p>
      </div>

      {/* Format bullets */}
      <div className="px-5 pb-3 border-t border-surface-100">
        <button onClick={() => setExpanded(e => !e)}
          className="flex items-center gap-2 text-xs font-semibold text-surface-500 uppercase tracking-wide py-3 w-full text-left hover:text-surface-700">
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          {expanded ? 'Hide' : 'Show'} format details + {card.tips.length} strategy tips
        </button>

        {expanded && (
          <div className="space-y-4 pb-2">
            {/* Format */}
            <ul className="space-y-1.5">
              {card.format.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-surface-600">
                  <span className={cn('w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0', sc.bg)} />
                  {f}
                </li>
              ))}
            </ul>
            {/* Tips */}
            <div className="space-y-2 pt-2 border-t border-surface-100">
              <p className="text-xs font-semibold text-surface-500 uppercase tracking-wide">Strategies</p>
              {card.tips.map((tip, i) => (
                <TipCard key={i} tip={tip} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function ExamStrategyClient() {
  const [filter, setFilter] = useState<SectionFilter>('all')
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set())

  function toggleBookmark(id: string) {
    setBookmarks(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const visible = STRATEGY_CARDS.filter(c => {
    if (filter === 'bookmarks') return bookmarks.has(c.id)
    if (filter === 'all') return true
    return c.section === filter
  })

  const tipTotal = STRATEGY_CARDS.reduce((sum, c) => sum + c.tips.length, 0)

  return (
    <div className="space-y-5">

      {/* Section tabs */}
      <div className="flex flex-wrap gap-2">
        {SECTIONS.map(s => {
          const active = filter === s.key
          return (
            <button key={s.key} onClick={() => setFilter(s.key)}
              className={cn(
                'flex items-center gap-1.5 px-4 py-2 rounded-xl border text-sm font-medium transition-all',
                active ? s.color + ' border-transparent shadow-sm' : 'bg-white border-surface-200 text-surface-600 hover:border-surface-300',
              )}>
              <span>{s.icon}</span> {s.label}
            </button>
          )
        })}
        <button onClick={() => setFilter('bookmarks')}
          className={cn(
            'flex items-center gap-1.5 px-4 py-2 rounded-xl border text-sm font-medium transition-all',
            filter === 'bookmarks'
              ? 'bg-brand-600 text-white border-transparent shadow-sm'
              : 'bg-white border-surface-200 text-surface-600 hover:border-surface-300',
          )}>
          <BookmarkCheck className="w-4 h-4" />
          Bookmarks {bookmarks.size > 0 && `(${bookmarks.size})`}
        </button>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 text-xs text-surface-400">
        <span>{STRATEGY_CARDS.length} cards · {tipTotal} strategy tips</span>
        {bookmarks.size > 0 && (
          <span className="text-brand-600 font-medium">{bookmarks.size} bookmarked</span>
        )}
      </div>

      {/* Cards */}
      {visible.length === 0 ? (
        <div className="card p-8 text-center space-y-2">
          <p className="text-2xl">🔖</p>
          <p className="text-sm font-medium text-surface-700">No bookmarks yet</p>
          <p className="text-xs text-surface-400">Click the bookmark icon on any card to save it here.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {visible.map(card => (
            <StrategyCardView
              key={card.id}
              card={card}
              bookmarked={bookmarks.has(card.id)}
              onBookmark={() => toggleBookmark(card.id)}
            />
          ))}
        </div>
      )}

      {/* Exam day tip */}
      <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-violet-50 border border-brand-200 p-5 space-y-2">
        <p className="text-sm font-bold text-surface-900">📅 Exam Day Essentials</p>
        <ul className="space-y-1.5">
          {[
            'Arrive 30 minutes early. Bring passport (or the ID used for registration) — nothing else accepted.',
            'Reading & Writing: Do NOT underline or write on the question paper in the actual exam if you are sitting on paper — use the margins. On computer, use the highlighter tool.',
            'Listening: You can write on the question booklet during the test. Use the 10-minute transfer time — do not rush it.',
            'Speaking: The examiner cannot give you a higher score for trying to impress them. Speak naturally and clearly.',
            'Overall: Guess every blank — there is no negative marking on any IELTS section.',
          ].map((t, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-surface-700">
              <span className="text-brand-500 font-bold flex-shrink-0">✓</span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
