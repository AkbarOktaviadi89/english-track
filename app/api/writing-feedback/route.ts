import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

const SYSTEM_PROMPT = `You are an expert English writing tutor specialising in IELTS, TOEFL, and academic English. Analyse the student's writing and return ONLY a valid JSON object (no markdown, no explanation outside JSON) in this exact format:

{
  "estimatedLevel": "B2",
  "bandEstimate": "6.5",
  "overallComment": "One sentence overall assessment.",
  "strengths": ["strength 1", "strength 2", "strength 3"],
  "grammarIssues": [
    { "original": "exact text from student", "suggestion": "corrected version", "explanation": "why it's wrong" }
  ],
  "vocabularyUpgrades": [
    { "original": "word/phrase used", "better": "more academic/precise alternative", "reason": "why it's better" }
  ],
  "structureFeedback": "One paragraph about essay/paragraph structure.",
  "topSuggestions": ["Most important improvement 1", "Most important improvement 2", "Most important improvement 3"]
}

Rules:
- estimatedLevel: one of A1/A2/B1/B2/C1/C2
- bandEstimate: IELTS band 1.0-9.0 (only if task type is IELTS or TOEFL, otherwise null)
- grammarIssues: max 5 most important issues only
- vocabularyUpgrades: max 4 suggestions
- topSuggestions: exactly 3 actionable improvements
- Be encouraging but honest. Identify the 3 most impactful improvements.`

export async function POST(req: NextRequest) {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { text, taskType } = await req.json() as { text: string; taskType: string }
    if (!text || text.trim().length < 30) {
      return NextResponse.json({ error: 'Text too short — write at least 30 characters.' }, { status: 400 })
    }

    const apiKey = process.env.OPENROUTER_API_KEY
    if (!apiKey) return NextResponse.json({ error: 'AI feedback not configured (missing OPENROUTER_API_KEY).' }, { status: 500 })

    const userPrompt = `Task type: ${taskType}\nWord count: ${text.split(/\s+/).length}\n\nStudent's writing:\n${text}`

    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://engtrack.app',
        'X-Title': 'EngTrack Writing Feedback',
      },
      body: JSON.stringify({
        model: process.env.OPENROUTER_MODEL ?? 'meta-llama/llama-3.1-8b-instruct:free',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userPrompt },
        ],
        max_tokens: 1200,
        temperature: 0.3,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('OpenRouter error:', err)
      return NextResponse.json({ error: 'AI service error — please try again.' }, { status: 502 })
    }

    const data = await res.json()
    const raw = data.choices?.[0]?.message?.content ?? ''

    // Extract JSON from response (handle markdown code blocks)
    const jsonMatch = raw.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      return NextResponse.json({ error: 'Could not parse AI response — please try again.' }, { status: 502 })
    }

    const feedback = JSON.parse(jsonMatch[0])

    // Optionally save to DB
    await supabase.from('writing_submissions').insert({
      user_id: user.id,
      task_type: taskType,
      content: text,
      word_count: text.split(/\s+/).length,
      feedback,
      band_estimate: feedback.bandEstimate ?? null,
    }).select()

    return NextResponse.json({ feedback })
  } catch (e) {
    console.error('Writing feedback error:', e)
    return NextResponse.json({ error: 'Something went wrong — please try again.' }, { status: 500 })
  }
}
