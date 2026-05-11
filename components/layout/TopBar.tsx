'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Sun, Moon, LogOut, TrendingUp } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'
import { CEFR_META } from '@/types'
import type { UserProfile, CEFRLevel } from '@/types'

export default function TopBar({ profile }: { profile: UserProfile | null }) {
  const { theme, toggle } = useTheme()
  const router = useRouter()
  const supabase = createClient()

  async function signOut() {
    await supabase.auth.signOut()
    router.push('/auth/login')
  }

  const level = (profile?.current_level ?? 'B1') as CEFRLevel
  const meta = CEFR_META[level]
  const initials = profile?.full_name
    ? profile.full_name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()
    : '?'

  return (
    <header className="topbar">
      {/* Mobile logo — hidden on desktop (sidebar has logo) */}
      <div className="lg:hidden flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-brand-600 flex items-center justify-center flex-shrink-0">
          <TrendingUp className="w-3.5 h-3.5 text-white" />
        </div>
        <span className="font-semibold text-surface-900 text-sm">EngTrack</span>
      </div>

      {/* Desktop spacer */}
      <div className="hidden lg:block flex-1" />

      {/* Right side */}
      <div className="flex items-center gap-1 sm:gap-2 ml-auto">
        {/* Level badge — hidden on small screens */}
        {profile && (
          <span
            className="hidden sm:inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ backgroundColor: meta.bgColor, color: meta.color }}
          >
            {level} · {meta.label}
          </span>
        )}

        {/* Dark mode toggle */}
        <button
          onClick={toggle}
          className="w-8 h-8 flex items-center justify-center rounded-lg text-surface-500 hover:bg-surface-100 transition-colors"
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        {/* Avatar → Profile */}
        <Link
          href="/dashboard/profile"
          className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-xl hover:bg-surface-100 transition-colors group"
          title="Profile & Settings"
        >
          <div className="w-7 h-7 rounded-full bg-brand-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            {initials}
          </div>
          <span className="hidden sm:block text-sm font-medium text-surface-700 group-hover:text-surface-900 max-w-28 truncate">
            {profile?.full_name ?? 'Profile'}
          </span>
        </Link>

        {/* Sign out */}
        <button
          onClick={signOut}
          className="w-8 h-8 flex items-center justify-center rounded-lg text-surface-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
          title="Sign out"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    </header>
  )
}
