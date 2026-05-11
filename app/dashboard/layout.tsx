import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import Sidebar from '@/components/layout/Sidebar'
import MobileNav from '@/components/layout/MobileNav'
import TopBar from '@/components/layout/TopBar'

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  // New users without a name → onboarding
  if (!profile?.full_name) redirect('/onboarding')

  return (
    <div className="min-h-screen bg-surface-50 flex">
      <Sidebar profile={profile} />
      <div className="flex-1 flex flex-col min-w-0 lg:ml-64">
        <TopBar profile={profile} />
        <main className="flex-1 px-4 py-6 lg:px-8 lg:py-8 max-w-7xl w-full mx-auto pb-24 lg:pb-8">
          {children}
        </main>
        <MobileNav profile={profile} />
      </div>
    </div>
  )
}
