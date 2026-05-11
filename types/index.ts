// ─── User & Auth ───────────────────────────────────────────────
export interface UserProfile {
  id: string
  email: string
  full_name: string
  avatar_url?: string
  current_level: CEFRLevel
  target_test: TestType | null
  target_score: string | null
  exam_date: string | null
  daily_goal_minutes: number
  streak_count: number
  total_minutes: number
  created_at: string
  updated_at: string
}

// ─── CEFR & Levels ─────────────────────────────────────────────
export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'

export const CEFR_META: Record<CEFRLevel, {
  label: string
  color: string
  bgColor: string
  borderColor: string
  textColor: string
  description: string
  ieltsRange: string
  toeflRange: string
}> = {
  A1: {
    label: 'Beginner',
    color: '#259775',
    bgColor: '#eef9f4',
    borderColor: '#aee3cb',
    textColor: '#113f33',
    description: 'Basic user — familiar expressions and simple phrases',
    ieltsRange: 'Below 4.0',
    toeflRange: 'Below 32',
  },
  A2: {
    label: 'Elementary',
    color: '#2563eb',
    bgColor: '#eff6ff',
    borderColor: '#bfdbfe',
    textColor: '#1e3a8a',
    description: 'Basic user — simple and routine exchanges',
    ieltsRange: '4.0–4.5',
    toeflRange: '32–45',
  },
  B1: {
    label: 'Intermediate',
    color: '#d97706',
    bgColor: '#fffbeb',
    borderColor: '#fde68a',
    textColor: '#78350f',
    description: 'Independent user — familiar topics and personal interests',
    ieltsRange: '5.0–5.5',
    toeflRange: '46–71',
  },
  B2: {
    label: 'Upper-Intermediate',
    color: '#db2777',
    bgColor: '#fdf2f8',
    borderColor: '#f9a8d4',
    textColor: '#831843',
    description: 'Independent user — complex texts and native interaction',
    ieltsRange: '6.0–7.0',
    toeflRange: '72–94',
  },
  C1: {
    label: 'Advanced',
    color: '#7c3aed',
    bgColor: '#f5f3ff',
    borderColor: '#c4b5fd',
    textColor: '#4c1d95',
    description: 'Proficient user — flexible, effective use for academic & professional purposes',
    ieltsRange: '7.5–8.0',
    toeflRange: '95–113',
  },
  C2: {
    label: 'Mastery',
    color: '#475569',
    bgColor: '#f8fafc',
    borderColor: '#cbd5e1',
    textColor: '#1e293b',
    description: 'Proficient user — express with precision, near-native fluency',
    ieltsRange: '8.5–9.0',
    toeflRange: '114–120',
  },
}

// ─── Test Types ─────────────────────────────────────────────────
export type TestType = 'IELTS' | 'TOEFL' | 'PTE' | 'TOEIC' | 'DUOLINGO' | 'CAMBRIDGE'

export type Skill = 'listening' | 'reading' | 'writing' | 'speaking' | 'vocabulary' | 'grammar'

export const SKILL_META: Record<Skill, { label: string; color: string; icon: string }> = {
  listening:  { label: 'Listening',  color: '#259775', icon: 'Headphones' },
  reading:    { label: 'Reading',    color: '#2563eb', icon: 'BookOpen'   },
  writing:    { label: 'Writing',    color: '#d97706', icon: 'PenLine'    },
  speaking:   { label: 'Speaking',   color: '#db2777', icon: 'Mic'        },
  vocabulary: { label: 'Vocabulary', color: '#7c3aed', icon: 'Layers'     },
  grammar:    { label: 'Grammar',    color: '#475569', icon: 'Braces'     },
}

// ─── Study Sessions ─────────────────────────────────────────────
export interface StudySession {
  id: string
  user_id: string
  date: string
  duration_minutes: number
  category: TestType | 'GENERAL' | 'VOCAB' | 'SPEAKING_PRACTICE' | 'LISTENING_IMMERSION'
  skill: Skill
  notes: string
  material_ref?: string
  created_at: string
}

// ─── Roadmap / Curriculum ───────────────────────────────────────
export interface RoadmapPhase {
  id: string
  level: CEFRLevel
  phase_number: number
  title: string
  duration_weeks: number
  topics: RoadmapTopic[]
}

export interface RoadmapTopic {
  id: string
  title: string
  skill: Skill
  description: string
  resources: Resource[]
}

export interface Resource {
  title: string
  type: 'video' | 'article' | 'exercise' | 'podcast' | 'book'
  url?: string
  free: boolean
}

// ─── Test Curriculum ────────────────────────────────────────────
export interface TestModule {
  id: string
  test: TestType
  module_number: number
  title: string
  skill: Skill
  description: string
  tips: string[]
  duration_weeks: number
  difficulty: 'foundation' | 'intermediate' | 'advanced'
}

export interface UserTestProgress {
  id: string
  user_id: string
  test: TestType
  module_id: string
  completed: boolean
  score?: number
  notes?: string
  completed_at?: string
}

// ─── Vocabulary ─────────────────────────────────────────────────
export interface VocabWord {
  id: string
  word: string
  definition: string
  example: string
  level: CEFRLevel
  category: 'academic' | 'general' | 'business' | 'ielts' | 'toefl'
  mastered: boolean
  review_count: number
  next_review?: string
}

// ─── Progress & Analytics ───────────────────────────────────────
export interface WeeklyStats {
  week: string
  total_minutes: number
  sessions: number
  skill_breakdown: Record<Skill, number>
}

export interface SkillScore {
  skill: Skill
  estimated_level: CEFRLevel
  minutes_practiced: number
  last_practiced?: string
}
