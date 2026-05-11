import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import ListeningClient from '@/components/modules/ListeningClient'

export default async function ListeningPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  return (
    <div className="space-y-6 pb-6">
      <div>
        <h1 className="page-header">Listening Practice</h1>
        <p className="text-surface-500 text-sm mt-1">
          IELTS-style listening exercises across all 4 section types. Audio plays once — just like the real exam. Use the reading time to study the questions first.
        </p>
      </div>
      <ListeningClient />
    </div>
  )
}
