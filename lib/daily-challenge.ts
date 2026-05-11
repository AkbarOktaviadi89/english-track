import { IELTS_TOPICS } from './ielts-vocabulary'
import { GRAMMAR_EXERCISES } from './grammar-exercises'
import { COLLOCATIONS } from './collocations'
import { PRESET_PHRASES } from './phrase-data'
import { CLOZE_PASSAGES } from './cloze-tests'

export type ChallengeType = 'word' | 'grammar' | 'collocation' | 'phrase' | 'cloze'

export interface WordChallenge {
  type: 'word'
  word: string
  definition: string
  example: string
  level: string
  topic: string
  options: string[]   // 4 definitions, one correct
  answerIndex: number
}

export interface GrammarChallenge {
  type: 'grammar'
  question: string
  options: string[]
  answerIndex: number
  explanation: string
  grammarId: string
}

export interface CollocationChallenge {
  type: 'collocation'
  sentence: string    // sentence with ___ gap
  phrase: string      // full collocation (correct)
  options: string[]   // 4 verb options
  answerIndex: number
  explanation: string
  meaning: string
}

export interface PhraseChallenge {
  type: 'phrase'
  situation: string   // context prompt
  phrase: string      // the phrase to learn
  meaning: string
  example: string
  options: string[]   // 4 meanings, one correct
  answerIndex: number
}

export interface ClozeChallenge {
  type: 'cloze'
  passageTitle: string
  context: string     // sentence with ___
  options: string[]
  answerIndex: number
  explanation: string
  hint?: string
}

export type DailyChallenge =
  | WordChallenge
  | GrammarChallenge
  | CollocationChallenge
  | PhraseChallenge
  | ClozeChallenge

// Seeded pseudo-random using date string
function seededRandom(seed: number): () => number {
  let s = seed
  return () => {
    s = (s * 16807 + 0) % 2147483647
    return (s - 1) / 2147483646
  }
}

function getDayNumber(dateStr: string): number {
  const d = new Date(dateStr)
  const start = new Date(d.getFullYear(), 0, 0)
  return Math.floor((d.getTime() - start.getTime()) / 86400000)
}

function pickN<T>(arr: T[], n: number, rand: () => number): T[] {
  const copy = [...arr]
  const result: T[] = []
  for (let i = 0; i < n && copy.length > 0; i++) {
    const idx = Math.floor(rand() * copy.length)
    result.push(copy.splice(idx, 1)[0])
  }
  return result
}

function shuffle<T>(arr: T[], rand: () => number): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

// ─── Build challenges ─────────────────────────────────────────

function buildWordChallenge(seed: number): WordChallenge {
  const rand = seededRandom(seed)
  const topicIdx = Math.floor(rand() * IELTS_TOPICS.length)
  const topic = IELTS_TOPICS[topicIdx]
  const wordIdx = Math.floor(rand() * topic.words.length)
  const target = topic.words[wordIdx]

  // Pick 3 other definitions as distractors
  const allWords = IELTS_TOPICS.flatMap(t => t.words).filter(w => w.word !== target.word)
  const distractors = pickN(allWords, 3, rand).map(w => w.definition)
  const options = shuffle([target.definition, ...distractors], rand)
  const answerIndex = options.indexOf(target.definition)

  return {
    type: 'word',
    word: target.word,
    definition: target.definition,
    example: target.example,
    level: target.level,
    topic: topic.title,
    options,
    answerIndex,
  }
}

function buildGrammarChallenge(seed: number): GrammarChallenge {
  const rand = seededRandom(seed + 1000)
  const allExercises = Object.entries(GRAMMAR_EXERCISES).flatMap(([gid, exs]) =>
    exs.filter(e => e.type === 'choose').map(e => ({ ...e, grammarId: gid }))
  )
  const idx = Math.floor(rand() * allExercises.length)
  const ex = allExercises[idx]
  const options = shuffle(ex.options ?? [], rand)
  const answerIndex = options.indexOf(ex.answer)
  return {
    type: 'grammar',
    question: ex.question,
    options,
    answerIndex,
    explanation: ex.explanation,
    grammarId: ex.grammarId,
  }
}

function buildCollocationChallenge(seed: number): CollocationChallenge {
  const rand = seededRandom(seed + 2000)
  // Only verb+noun collocations with a wrong version (makes for better quiz)
  const candidates = COLLOCATIONS.filter(c => c.category === 'verb_noun' && c.wrong)
  const idx = Math.floor(rand() * candidates.length)
  const c = candidates[idx]

  // Build options: correct verb + 3 wrong verbs
  const correctVerb = c.phrase.split(' ')[0]
  const wrongVerbs = ['make', 'do', 'have', 'take', 'give', 'get', 'bring', 'come', 'run', 'carry']
    .filter(v => v !== correctVerb)
  const distractors = pickN(wrongVerbs, 3, rand)
  const options = shuffle([correctVerb, ...distractors], rand)
  const answerIndex = options.indexOf(correctVerb)

  // Create sentence with gap using the phrase
  const gappedPhrase = c.phrase.replace(correctVerb, '___')
  const exampleGapped = c.example.replace(new RegExp(`\\b${c.phrase}\\b`, 'i'), gappedPhrase)

  return {
    type: 'collocation',
    sentence: exampleGapped,
    phrase: c.phrase,
    options,
    answerIndex,
    explanation: `"${c.phrase}" is the correct collocation. ${c.wrong ? `❌ Not: "${c.wrong}".` : ''}`,
    meaning: c.meaning,
  }
}

function buildPhraseChallenge(seed: number): PhraseChallenge {
  const rand = seededRandom(seed + 3000)
  const idx = Math.floor(rand() * PRESET_PHRASES.length)
  const target = PRESET_PHRASES[idx]

  const distractorPhrases = PRESET_PHRASES.filter((_, i) => i !== idx)
  const distractors = pickN(distractorPhrases, 3, rand).map(p => p.meaning)
  const options = shuffle([target.meaning, ...distractors], rand)
  const answerIndex = options.indexOf(target.meaning)

  return {
    type: 'phrase',
    situation: `What does this phrase mean?`,
    phrase: target.phrase,
    meaning: target.meaning,
    example: target.example,
    options,
    answerIndex,
  }
}

function buildClozeChallenge(seed: number): ClozeChallenge {
  const rand = seededRandom(seed + 4000)
  const passageIdx = Math.floor(rand() * CLOZE_PASSAGES.length)
  const passage = CLOZE_PASSAGES[passageIdx]
  const gapIdx = Math.floor(rand() * passage.gaps.length)
  const gap = passage.gaps[gapIdx]

  // Extract the sentence containing this gap
  const parts = passage.text.split(/\{\{\d+\}\}/)
  const before = parts[gapIdx] ?? ''
  const after = parts[gapIdx + 1] ?? ''
  const beforeTrimmed = before.split(/[.!?]/).slice(-2).join('.').trim()
  const afterTrimmed = after.split(/[.!?]/)[0].trim()
  const context = `${beforeTrimmed} ___ ${afterTrimmed}`.trim()

  const options = shuffle(gap.options, rand)
  const answerIndex = options.indexOf(gap.answer)

  return {
    type: 'cloze',
    passageTitle: passage.title,
    context,
    options,
    answerIndex,
    explanation: gap.explanation,
    hint: gap.hint,
  }
}

// Rotate challenge types by day of week
const CHALLENGE_ROTATION: ChallengeType[] = [
  'word',         // Monday
  'grammar',      // Tuesday
  'collocation',  // Wednesday
  'phrase',       // Thursday
  'cloze',        // Friday
  'word',         // Saturday (extra vocab day)
  'grammar',      // Sunday
]

export function getTodayChallenge(dateStr?: string): DailyChallenge {
  const date = dateStr ?? new Date().toISOString().split('T')[0]
  const dayNum = getDayNumber(date)
  const seed = dayNum * 31337  // deterministic seed from day

  // Day of week (0=Sunday, 1=Monday…)
  const dow = new Date(date).getDay()
  const challengeType = CHALLENGE_ROTATION[dow]

  switch (challengeType) {
    case 'word':        return buildWordChallenge(seed)
    case 'grammar':     return buildGrammarChallenge(seed)
    case 'collocation': return buildCollocationChallenge(seed)
    case 'phrase':      return buildPhraseChallenge(seed)
    case 'cloze':       return buildClozeChallenge(seed)
  }
}

export const CHALLENGE_TYPE_META: Record<ChallengeType, { label: string; color: string; emoji: string; description: string }> = {
  word:        { label: 'Word of the Day', color: '#259775', emoji: '📚', description: 'Expand your IELTS vocabulary' },
  grammar:     { label: 'Grammar Check',   color: '#7c3aed', emoji: '✏️', description: 'Test your grammar knowledge' },
  collocation: { label: 'Collocation',     color: '#d97706', emoji: '🔗', description: 'Make or do? Get it right.' },
  phrase:      { label: 'Phrase Bank',     color: '#db2777', emoji: '💬', description: 'Learn an academic phrase' },
  cloze:       { label: 'Fill the Gap',    color: '#2563eb', emoji: '📝', description: 'Vocabulary in context' },
}
