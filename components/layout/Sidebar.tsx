'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard, Map, BookOpen, Activity,
  TrendingUp, Headphones, BookMarked, Library, RotateCcw,
  MessageSquareText, GraduationCap, PenLine, CalendarDays, ListChecks, Sparkles, Mic, FileText
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { UserProfile } from '@/types'
import { CEFR_META } from '@/types'

const NAV = [
  { href: '/dashboard',             label: 'Dashboard',    icon: LayoutDashboard },
  { href: '/dashboard/study-plan', label: 'Study Plan',   icon: CalendarDays    },
  { href: '/dashboard/roadmap',    label: 'Roadmap',      icon: Map             },
  { href: '/dashboard/lessons',    label: 'Test Curricula', icon: BookOpen      },
  { href: '/dashboard/materials',  label: 'Materials',    icon: Library         },
  { href: '/dashboard/vocabulary',  label: 'Vocabulary',    icon: BookMarked         },
  { href: '/dashboard/ielts-vocab', label: 'IELTS Vocab',  icon: ListChecks         },
  { href: '/dashboard/idioms',           label: 'Idioms & PVs',   icon: Sparkles  },
  { href: '/dashboard/speaking-practice', label: 'Speaking Bank',  icon: Mic       },
  { href: '/dashboard/phrases',     label: 'Phrase Bank',  icon: MessageSquareText  },
  { href: '/dashboard/review',     label: 'Vocab Review',  icon: RotateCcw          },
  { href: '/dashboard/grammar',    label: 'Grammar Ref',   icon: GraduationCap      },
  { href: '/dashboard/writing',         label: 'AI Writing',    icon: PenLine   },
  { href: '/dashboard/writing-samples', label: 'Model Essays',  icon: FileText  },
  { href: '/dashboard/practice',   label: 'Log Session',   icon: Headphones         },
  { href: '/dashboard/progress',   label: 'Progress',      icon: Activity           },
]

export default function Sidebar({ profile }: { profile: UserProfile | null }) {
  const pathname = usePathname()

  const level = profile?.current_level ?? 'B1'
  const meta = CEFR_META[level as keyof typeof CEFR_META]

  return (
    <aside className="hidden lg:flex fixed inset-y-0 left-0 w-64 bg-white border-r border-surface-200 flex-col z-30">
      {/* Logo */}
      <div className="h-14 flex items-center px-6 border-b border-surface-100 flex-shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-brand-600 flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-semibold text-surface-900">EngTrack</span>
        </div>
      </div>

      {/* Level badge */}
      {profile && (
        <div className="px-4 py-2.5 mx-3 mt-3 rounded-xl border" style={{ backgroundColor: meta.bgColor, borderColor: meta.borderColor }}>
          <div className="text-xs font-medium opacity-70" style={{ color: meta.color }}>Current level</div>
          <div className="text-sm font-semibold" style={{ color: meta.color }}>{level} — {meta.label}</div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 px-3 py-3 space-y-0.5 overflow-y-auto scrollbar-thin">
        {NAV.map(({ href, label, icon: Icon }) => {
          const active = pathname === href
          return (
            <Link key={href} href={href} className={cn('sidebar-link', active && 'active')}>
              <Icon className="w-4 h-4 flex-shrink-0" />
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Bottom — just branding */}
      <div className="p-4 border-t border-surface-100">
        <p className="text-xs text-surface-400 text-center">EngTrack · English Tracker</p>
      </div>
    </aside>
  )
}
