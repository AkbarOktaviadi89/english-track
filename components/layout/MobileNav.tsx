'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, CalendarDays, BookMarked, Headphones, Activity } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { UserProfile } from '@/types'

const NAV = [
  { href: '/dashboard',             label: 'Home',     icon: LayoutDashboard },
  { href: '/dashboard/study-plan', label: 'Plan',     icon: CalendarDays    },
  { href: '/dashboard/vocabulary', label: 'Vocab',    icon: BookMarked      },
  { href: '/dashboard/practice',   label: 'Log',      icon: Headphones      },
  { href: '/dashboard/progress',   label: 'Progress', icon: Activity        },
]

export default function MobileNav({ profile }: { profile: UserProfile | null }) {
  const pathname = usePathname()
  void profile

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white border-t border-surface-200 z-30">
      <nav className="flex">
        {NAV.map(({ href, label, icon: Icon }) => {
          const active = pathname === href
          return (
            <Link key={href} href={href} className={cn(
              'flex-1 flex flex-col items-center gap-1 py-2.5 text-xs font-medium transition-colors',
              active
                ? 'text-brand-600 dark:text-brand-400'
                : 'text-surface-400'
            )}>
              <Icon className="w-5 h-5" />
              {label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
