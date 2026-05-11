import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import type { CEFRLevel } from '@/types'
import MaterialsClient from '@/components/modules/MaterialsClient'

export default async function MaterialsPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('current_level')
    .eq('id', user.id)
    .single()

  const currentLevel = (profile?.current_level ?? 'B1') as CEFRLevel

  return (
    <div className="space-y-6 pb-6">
      <div>
        <h1 className="page-header">Learning Materials</h1>
        <p className="text-surface-500 text-sm mt-1">Curated resources for every skill and level — websites, books, apps, podcasts, and more.</p>
      </div>
      <MaterialsClient currentLevel={currentLevel} />
    </div>
  )
}
