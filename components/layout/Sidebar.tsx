'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { LucideIcon } from 'lucide-react'
import {
  LayoutDashboard, CalendarDays, Zap,
  Map, BookOpen, Library, GraduationCap,
  ListChecks, BookMarked, Sparkles, MessageSquareText, Link2,
  RotateCcw, Mic, PenLine, FileText, ClipboardList,
  Headphones, Activity,
  TrendingUp, RefreshCw, AlertTriangle, Radio,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { UserProfile } from '@/types'
import { CEFR_META } from '@/types'

interface NavItem {
  href: string
  label: string
  icon: LucideIcon
}

interface NavSection {
  label: string
  items: NavItem[]
}

const NAV_SECTIONS: NavSection[] = [
  {
    label: 'Overview',
    items: [
      { href: '/dashboard',            label: 'Dashboard',        icon: LayoutDashboard },
      { href: '/dashboard/challenge',  label: 'Daily Challenge',  icon: Zap             },
      { href: '/dashboard/study-plan', label: 'Study Plan',       icon: CalendarDays    },
    ],
  },
  {
    label: 'Learn',
    items: [
      { href: '/dashboard/roadmap',        label: 'Roadmap',        icon: Map            },
      { href: '/dashboard/lessons',        label: 'Test Curricula', icon: BookOpen       },
      { href: '/dashboard/materials',      label: 'Materials',      icon: Library        },
      { href: '/dashboard/grammar',        label: 'Grammar Ref',    icon: GraduationCap  },
      { href: '/dashboard/exam-strategy',  label: 'Exam Strategy',  icon: Zap            },
    ],
  },
  {
    label: 'Vocabulary',
    items: [
      { href: '/dashboard/ielts-vocab', label: 'IELTS Vocab',   icon: ListChecks       },
      { href: '/dashboard/vocabulary',  label: 'My Words',       icon: BookMarked       },
      { href: '/dashboard/idioms',        label: 'Idioms & PVs',  icon: Sparkles  },
      { href: '/dashboard/collocations', label: 'Collocations',  icon: Link2     },
      { href: '/dashboard/awl',          label: 'AWL Exercises', icon: GraduationCap },
      { href: '/dashboard/phrases',     label: 'Phrase Bank',    icon: MessageSquareText },
    ],
  },
  {
    label: 'Practice',
    items: [
      { href: '/dashboard/review',            label: 'Vocab Review', icon: RotateCcw      },
      { href: '/dashboard/listening',           label: 'Listening',    icon: Headphones     },
      { href: '/dashboard/cloze',             label: 'Cloze Tests',  icon: ClipboardList  },
      { href: '/dashboard/reading',                  label: 'Reading',            icon: BookOpen    },
      { href: '/dashboard/sentence-transformation', label: 'Sentence Transform', icon: RefreshCw   },
      { href: '/dashboard/error-correction',        label: 'Error Correction',   icon: AlertTriangle },
      { href: '/dashboard/pronunciation',           label: 'Pronunciation',      icon: Radio         },
      { href: '/dashboard/speaking-practice',       label: 'Speaking',           icon: Mic         },
      { href: '/dashboard/writing',           label: 'AI Writing',    icon: PenLine   },
      { href: '/dashboard/writing-samples',   label: 'Model Essays',  icon: FileText  },
    ],
  },
  {
    label: 'Track',
    items: [
      { href: '/dashboard/practice', label: 'Log Session', icon: Headphones },
      { href: '/dashboard/progress', label: 'Progress',    icon: Activity   },
    ],
  },
]

export default function Sidebar({ profile }: { profile: UserProfile | null }) {
  const pathname = usePathname()

  const level = profile?.current_level ?? 'B1'
  const meta = CEFR_META[level as keyof typeof CEFR_META]

  return (
    <aside className="hidden lg:flex fixed inset-y-0 left-0 w-64 bg-white border-r border-surface-200 flex-col z-30">

      {/* Logo */}
      <div className="h-14 flex items-center px-5 border-b border-surface-100 flex-shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-brand-600 flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-semibold text-surface-900">EngTrack</span>
        </div>
      </div>

      {/* Level badge */}
      {profile && (
        <div className="px-4 py-2.5 mx-3 mt-3 rounded-xl border flex-shrink-0"
          style={{ backgroundColor: meta.bgColor, borderColor: meta.borderColor }}>
          <div className="text-xs font-medium opacity-70" style={{ color: meta.color }}>Current level</div>
          <div className="text-sm font-semibold" style={{ color: meta.color }}>{level} — {meta.label}</div>
        </div>
      )}

      {/* Navigation — grouped sections */}
      <nav className="flex-1 overflow-y-auto scrollbar-thin py-3 px-3">
        {NAV_SECTIONS.map((section, si) => (
          <div key={section.label} className={si > 0 ? 'mt-4' : ''}>
            {/* Section label */}
            <p className="px-3 mb-1 text-[10px] font-semibold uppercase tracking-widest text-surface-400 select-none">
              {section.label}
            </p>

            {/* Items */}
            <div className="space-y-0.5">
              {section.items.map(({ href, label, icon: Icon }) => {
                const active = pathname === href
                return (
                  <Link key={href} href={href} className={cn('sidebar-link', active && 'active')}>
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    {label}
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-surface-100 flex-shrink-0">
        <p className="text-xs text-surface-400 text-center">EngTrack · English Learning Tracker</p>
      </div>
    </aside>
  )
}
