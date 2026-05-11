import GrammarClient from '@/components/modules/GrammarClient'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function GrammarPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  return (
    <div className="space-y-6 pb-6">
      <div>
        <h1 className="page-header">Grammar Reference</h1>
        <p className="text-surface-500 text-sm mt-1">
          Quick reference for 15 essential grammar rules — with formulas, examples, and common mistakes to avoid.
        </p>
      </div>
      <GrammarClient />
    </div>
  )
}
