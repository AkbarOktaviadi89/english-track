import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import AWLClient from '@/components/modules/AWLClient'

export default async function AWLPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  return (
    <div className="space-y-6 pb-6">
      <div>
        <h1 className="page-header">AWL Exercises</h1>
        <p className="text-surface-500 text-sm mt-1">
          Practice the 570 Academic Word List (AWL) families in context — gap fills, definition matching, and word form exercises essential for IELTS Academic.
        </p>
      </div>
      <AWLClient />
    </div>
  )
}
