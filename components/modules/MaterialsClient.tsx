'use client'

import { useState } from 'react'
import { MATERIALS } from '@/lib/materials'
import type { Material } from '@/lib/materials'
import { CEFR_META, SKILL_META } from '@/types'
import type { CEFRLevel, Skill } from '@/types'
import { ExternalLink, Globe, Youtube, BookOpen, Smartphone, Mic, GraduationCap, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

const LEVELS: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
const SKILL_LIST: Skill[] = ['listening', 'reading', 'writing', 'speaking', 'vocabulary', 'grammar']
const SKILLS: (Skill | 'all')[] = ['all', ...SKILL_LIST]

const TYPE_ICON: Record<Material['type'], React.ReactNode> = {
  website: <Globe className="w-3.5 h-3.5" />,
  youtube: <Youtube className="w-3.5 h-3.5" />,
  book: <BookOpen className="w-3.5 h-3.5" />,
  app: <Smartphone className="w-3.5 h-3.5" />,
  podcast: <Mic className="w-3.5 h-3.5" />,
  course: <GraduationCap className="w-3.5 h-3.5" />,
}

const TYPE_COLORS: Record<Material['type'], string> = {
  website: '#2563eb',
  youtube: '#dc2626',
  book: '#7c3aed',
  app: '#059669',
  podcast: '#d97706',
  course: '#0891b2',
}

export default function MaterialsClient({ currentLevel }: { currentLevel: CEFRLevel }) {
  const [activeLevel, setActiveLevel] = useState<CEFRLevel>(currentLevel)
  const [activeSkill, setActiveSkill] = useState<Skill | 'all'>('all')

  const all = MATERIALS[activeLevel]
  const filtered = activeSkill === 'all' ? all : all.filter(m => m.skill === activeSkill)

  const grouped = SKILL_LIST.reduce<Record<string, Material[]>>((acc, skill) => {
    const items = filtered.filter(m => m.skill === skill)
    if (items.length) acc[skill] = items
    return acc
  }, {})

  const meta = CEFR_META[activeLevel]

  return (
    <div>
      {/* Level tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1 scrollbar-thin">
        {LEVELS.map(level => {
          const m = CEFR_META[level]
          const isActive = level === activeLevel
          return (
            <button key={level} onClick={() => setActiveLevel(level)}
              className={cn('flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150 border')}
              style={isActive
                ? { backgroundColor: m.bgColor, color: m.color, borderColor: m.borderColor }
                : { borderColor: '#e2e8f0', color: '#64748b' }}>
              {level} · {m.label}
            </button>
          )
        })}
      </div>

      {/* Level summary bar */}
      <div className="card p-4 mb-6 flex items-center justify-between gap-4" style={{ borderLeft: `4px solid ${meta.color}` }}>
        <div>
          <p className="font-semibold text-surface-900">{activeLevel} — {meta.label}</p>
          <p className="text-sm text-surface-500 mt-0.5">{meta.description}</p>
        </div>
        <div className="flex gap-4 text-right text-xs flex-shrink-0">
          <div>
            <p className="text-surface-400">IELTS</p>
            <p className="font-semibold text-surface-700">{meta.ieltsRange}</p>
          </div>
          <div>
            <p className="text-surface-400">TOEFL</p>
            <p className="font-semibold text-surface-700">{meta.toeflRange}</p>
          </div>
        </div>
      </div>

      {/* Skill filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {SKILLS.map(skill => {
          const isActive = activeSkill === skill
          if (skill === 'all') {
            return (
              <button key="all" onClick={() => setActiveSkill('all')}
                className={cn('badge border text-sm py-1 px-3', isActive ? 'bg-surface-900 text-white border-surface-900' : 'bg-white text-surface-600 border-surface-200')}>
                All skills
              </button>
            )
          }
          const sm = SKILL_META[skill as Skill]
          return (
            <button key={skill} onClick={() => setActiveSkill(isActive ? 'all' : skill as Skill)}
              className="badge border text-sm py-1 px-3"
              style={isActive
                ? { backgroundColor: sm.color, color: '#fff', borderColor: sm.color }
                : { color: sm.color, borderColor: `${sm.color}40`, backgroundColor: `${sm.color}12` }}>
              {sm.label}
            </button>
          )
        })}
      </div>

      {/* Materials grouped by skill */}
      {activeSkill === 'all' ? (
        <div className="space-y-8">
          {Object.entries(grouped).map(([skill, items]) => {
            const sm = SKILL_META[skill as Skill]
            return (
              <section key={skill}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: sm.color }} />
                  <h2 className="section-title text-base">{sm.label}</h2>
                </div>
                <MaterialGrid items={items} />
              </section>
            )
          })}
        </div>
      ) : (
        <MaterialGrid items={filtered} />
      )}
    </div>
  )
}

function MaterialGrid({ items }: { items: Material[] }) {
  if (items.length === 0) return (
    <p className="text-sm text-surface-400 py-4">No materials for this selection.</p>
  )
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(m => <MaterialCard key={m.id} material={m} />)}
    </div>
  )
}

function MaterialCard({ material: m }: { material: Material }) {
  const typeColor = TYPE_COLORS[m.type]
  const sm = SKILL_META[m.skill]
  return (
    <div className="card p-4 flex flex-col gap-3 hover:shadow-card transition-all">
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          <span className="badge capitalize" style={{ backgroundColor: `${typeColor}15`, color: typeColor }}>
            <span className="flex items-center gap-1">{TYPE_ICON[m.type]} {m.type}</span>
          </span>
          <span className="badge" style={{ backgroundColor: `${sm.color}12`, color: sm.color }}>
            {sm.label}
          </span>
        </div>
        {m.recommended && (
          <span className="flex items-center gap-1 text-amber-600 flex-shrink-0" title="Recommended">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          </span>
        )}
      </div>

      <div className="flex-1">
        <p className="font-semibold text-surface-900 text-sm leading-snug">{m.title}</p>
        <p className="text-xs text-surface-500 mt-1.5 leading-relaxed">{m.description}</p>
      </div>

      <div className="flex items-center justify-between gap-2 mt-auto pt-1 border-t border-surface-100">
        <span className={cn('text-xs font-medium', m.free ? 'text-brand-600' : 'text-surface-400')}>
          {m.free ? 'Free' : 'Paid'}
        </span>
        {m.url ? (
          <a href={m.url} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-brand-600 hover:text-brand-700 transition-colors">
            Open <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <span className="text-xs text-surface-400">Search online</span>
        )}
      </div>
    </div>
  )
}
