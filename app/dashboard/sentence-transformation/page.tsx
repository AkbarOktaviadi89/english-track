import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import SentenceTransformationClient from '@/components/modules/SentenceTransformationClient'

export default async function SentenceTransformationPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  return (
    <div className="space-y-6 pb-6">
      <div>
        <h1 className="page-header">Sentence Transformation</h1>
        <p className="text-surface-500 text-sm mt-1">
          Rewrite each sentence using the keyword given so that it means the same thing — exactly the format used in Cambridge and IELTS Use of English.
        </p>
      </div>
      <SentenceTransformationClient />
    </div>
  )
}
