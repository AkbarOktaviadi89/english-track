import type { CEFRLevel, Skill } from '@/types'

export type TaskType = 'topic' | 'grammar' | 'vocabulary' | 'material' | 'practice' | 'phrase' | 'writing'

export interface PlanTask {
  id: string
  type: TaskType
  title: string
  description: string
  duration: number    // minutes
  skill: Skill
  link: string        // internal route
  detail?: string     // extra context (e.g. specific topic key or grammar id)
}

export interface PlanWeek {
  week: number
  theme: string
  summary: string
  tasks: PlanTask[]
}

export interface StudyPlan {
  id: string
  title: string
  subtitle: string
  description: string
  fromLevel: CEFRLevel
  toLevel: CEFRLevel
  durationWeeks: number
  color: string
  weeks: PlanWeek[]
}

// ─── Helper ──────────────────────────────────────────────────

function t(
  week: number, n: number,
  type: TaskType, skill: Skill,
  title: string, description: string, duration: number, link: string, detail?: string
): PlanTask {
  return { id: `${week}_${n}`, type, title, description, duration, skill, link, detail }
}

// ─── PLAN 1: 3-Month Beginner Roadmap (A1 Starter) ───────────
// Follows the user's exact roadmap: basic vocab → simple present →
// listening → daily sentences → past tense → speaking → shadowing →
// videos → simple conversation → reading → think in English

export const PLAN_STARTER: StudyPlan = {
  id: 'starter_a1',
  title: '3-Month Beginner Roadmap',
  subtitle: 'A1 → A2 Foundation',
  description: 'Start from zero and build a solid English foundation in 3 months. Covers basic vocab, grammar essentials, listening, speaking, and reading — exactly the structured path beginners need.',
  fromLevel: 'A1',
  toLevel: 'A2',
  durationWeeks: 12,
  color: '#259775',
  weeks: [
    {
      week: 1, theme: 'Basic Communication',
      summary: 'Learn how to greet people, introduce yourself, and say what you see.',
      tasks: [
        t(1,1,'topic','speaking','Greetings & Introductions','Study the lesson, do the examples, try the quiz.',20,'/dashboard/roadmap','a1_greet'),
        t(1,2,'vocabulary','vocabulary','Add 10 basic words','Add 10 everyday words to your Vocabulary list (hello, house, eat, go, work…).',15,'/dashboard/vocabulary'),
        t(1,3,'grammar','grammar','Present Simple — the basics','Read the Present Simple entry in Grammar Reference.',15,'/dashboard/grammar','present_simple'),
        t(1,4,'practice','listening','Listen 15 min (Beginner)','Open Materials → A1 → Listening. Listen to BBC Flatmates or EnglishClass101.',15,'/dashboard/materials'),
      ],
    },
    {
      week: 2, theme: 'Numbers, Dates & Personal Info',
      summary: 'Talk about yourself — age, job, nationality. Count and tell the time.',
      tasks: [
        t(2,1,'topic','speaking','Numbers, Dates & Time','Study the lesson and quiz.',20,'/dashboard/roadmap','a1_numbers'),
        t(2,2,'topic','speaking','Personal Information','Study how to introduce yourself fully.',20,'/dashboard/roadmap','a1_personal'),
        t(2,3,'vocabulary','vocabulary','Add 10 more words','Focus on jobs, numbers, and nationalities.',15,'/dashboard/vocabulary'),
        t(2,4,'practice','speaking','Make 5 sentences today','Log a 15-min session: write 5 sentences about yourself in English.',15,'/dashboard/practice'),
      ],
    },
    {
      week: 3, theme: 'Simple Questions & Core Verbs',
      summary: 'Ask and answer basic questions. Learn the 50 most common verbs.',
      tasks: [
        t(3,1,'topic','speaking','Simple Questions (Wh- words)','Study Who/What/Where/When/Why/How.',20,'/dashboard/roadmap','a1_questions'),
        t(3,2,'topic','vocabulary','Core Verbs — the 50 most important','Study verbs: go, have, make, do, get, say, know…',25,'/dashboard/roadmap','a1_verbs'),
        t(3,3,'grammar','grammar','Articles: a, an, the','Read the Articles entry — one of the most common error areas.',15,'/dashboard/grammar','articles'),
        t(3,4,'practice','speaking','Daily sentence habit','Every day this week: write 3 English sentences about your day.',10,'/dashboard/practice'),
      ],
    },
    {
      week: 4, theme: 'Colors, Family & Food',
      summary: 'Describe the world around you. Talk about family and food.',
      tasks: [
        t(4,1,'topic','vocabulary','Colors, Shapes & Sizes','Adjectives for describing objects.',20,'/dashboard/roadmap','a1_colors'),
        t(4,2,'topic','vocabulary','Family Members','Learn all family vocabulary.',20,'/dashboard/roadmap','a1_family'),
        t(4,3,'topic','vocabulary','Food & Drinks','Order food, express preferences.',20,'/dashboard/roadmap','a1_food'),
        t(4,4,'practice','listening','Listening practice — 20 min','Listen to A1 material. Focus on understanding main ideas.',20,'/dashboard/practice'),
      ],
    },
    {
      week: 5, theme: 'Daily Routines & Present Simple',
      summary: 'Describe your daily life fluently. Master present simple fully.',
      tasks: [
        t(5,1,'topic','speaking','Daily Routines','First, then, after that, finally…',20,'/dashboard/roadmap','a1_routines'),
        t(5,2,'topic','grammar','Present Simple (full study)','Study the lesson and quiz in Roadmap.',25,'/dashboard/roadmap','a1_present'),
        t(5,3,'vocabulary','vocabulary','Vocabulary review','Do a spaced repetition review of all saved words.',15,'/dashboard/review'),
        t(5,4,'practice','speaking','Describe your routine (60 sec)','Log a speaking session: describe your full day in English.',15,'/dashboard/practice'),
      ],
    },
    {
      week: 6, theme: 'Past Simple — What Happened?',
      summary: 'Talk about the past. Describe events that already happened.',
      tasks: [
        t(6,1,'grammar','grammar','Past Simple vs Present Perfect','Read the Grammar Reference entry carefully.',20,'/dashboard/grammar','present_perfect'),
        t(6,2,'topic','grammar','Past Simple (A2 Roadmap)','Study with examples and quiz.',25,'/dashboard/roadmap','a2_past'),
        t(6,3,'vocabulary','vocabulary','Add 10 irregular past verbs','Add went, saw, made, had, gave… to Vocabulary.',15,'/dashboard/vocabulary'),
        t(6,4,'practice','writing','Write about yesterday','Log a writing session: write 5 sentences about what you did yesterday.',15,'/dashboard/practice'),
      ],
    },
    {
      week: 7, theme: 'Health, Shopping & Directions',
      summary: 'Practical vocabulary for real-life situations.',
      tasks: [
        t(7,1,'topic','speaking','Shopping & Money','Prices, buying, returning items.',20,'/dashboard/roadmap','a2_shopping'),
        t(7,2,'topic','speaking','Directions & Transport','Ask and give directions.',20,'/dashboard/roadmap','a2_directions'),
        t(7,3,'topic','speaking','Health & Body','Symptoms and doctor visits.',20,'/dashboard/roadmap','a2_health'),
        t(7,4,'material','listening','Watch an English video (A2)','Open Materials → A2 → Listening. Watch a short video with subtitles.',20,'/dashboard/materials'),
      ],
    },
    {
      week: 8, theme: 'Simple Speaking — Start Talking',
      summary: 'Begin speaking English. Use shadowing to copy native speakers.',
      tasks: [
        t(8,1,'topic','grammar','Modal Verbs','Can, could, should, must, might.',20,'/dashboard/roadmap','a2_modal'),
        t(8,2,'material','speaking','Start shadowing (10 min/day)','Open Materials → A2 → Speaking. Use Duolingo or HelloTalk. Repeat what you hear.',15,'/dashboard/materials'),
        t(8,3,'phrase','speaking','Learn 5 Opinion phrases','Browse Phrase Bank → IELTS Speaking. Save 5 phrases.',15,'/dashboard/phrases'),
        t(8,4,'practice','speaking','Shadowing session log','Log a 20-min practice: spend it shadowing an English audio.',20,'/dashboard/practice'),
      ],
    },
    {
      week: 9, theme: 'Comparatives & Present Continuous',
      summary: 'Compare things. Talk about what\'s happening right now.',
      tasks: [
        t(9,1,'grammar','grammar','Comparatives & Superlatives','Better, more expensive, the most…',20,'/dashboard/grammar','comparatives'),
        t(9,2,'topic','grammar','Present Continuous','Actions happening now + temporary situations.',25,'/dashboard/roadmap','a2_cont'),
        t(9,3,'vocabulary','vocabulary','Vocabulary quiz','Test yourself on all saved words.',10,'/dashboard/vocabulary'),
        t(9,4,'practice','reading','Read a short article (A2)','Open Materials → A2 → Reading. Read one article from News in Levels (Level 1).',20,'/dashboard/practice'),
      ],
    },
    {
      week: 10, theme: 'Simple Reading & Listening',
      summary: 'Start consuming real English content at a manageable level.',
      tasks: [
        t(10,1,'topic','reading','Listening Strategies','Learn to listen for gist and detail.',20,'/dashboard/roadmap','a2_listen'),
        t(10,2,'material','reading','Read 2 articles this week','News in Levels Level 2 or Breaking News English (Easiest level).',25,'/dashboard/materials'),
        t(10,3,'topic','listening','Short texts & Signs','Read real English notices and signs.',15,'/dashboard/roadmap','a2_signs'),
        t(10,4,'practice','listening','Listening + note-taking','Log 20-min session: listen to 6 Minute English and write 3 key facts.',20,'/dashboard/practice'),
      ],
    },
    {
      week: 11, theme: 'Simple Conversation',
      summary: 'Start having simple conversations. Respond to common questions.',
      tasks: [
        t(11,1,'topic','grammar','Prepositions of Time & Place','In/on/at — master the basics.',20,'/dashboard/roadmap','a2_prep'),
        t(11,2,'phrase','speaking','Learn 5 conversation phrases','Browse Phrase Bank → IELTS Speaking. Save 5 more phrases.',15,'/dashboard/phrases'),
        t(11,3,'material','speaking','Practice with a language partner','Open Materials → A2 → Speaking → HelloTalk or italki.',20,'/dashboard/materials'),
        t(11,4,'practice','speaking','30-min conversation practice','Find a partner or use an app. Log the session.',30,'/dashboard/practice'),
      ],
    },
    {
      week: 12, theme: 'Think in English — Final Review',
      summary: 'The last week. Review everything and start thinking directly in English.',
      tasks: [
        t(12,1,'vocabulary','vocabulary','Final vocabulary review','Review all mastered + unmastered words.',20,'/dashboard/review'),
        t(12,2,'writing','writing','Write about your 3 months','Use AI Writing Feedback: write a paragraph about what you\'ve learned.',30,'/dashboard/writing'),
        t(12,3,'practice','speaking','English day challenge','Log a 45-min session: try to think and speak ONLY in English for one full hour today.',45,'/dashboard/practice'),
        t(12,4,'material','speaking','Plan what\'s next','Open Materials → B1 → choose one resource to start next month.',15,'/dashboard/materials'),
      ],
    },
  ],
}

// ─── PLAN 2: B1 → B2 IELTS Preparation (12 weeks) ────────────

export const PLAN_IELTS_PREP: StudyPlan = {
  id: 'ielts_b1',
  title: 'IELTS Foundation — 3 Months',
  subtitle: 'B1 → B2 · Target Band 6.0–6.5',
  description: 'Structured IELTS preparation for B1 learners. Covers all four skills (Reading, Listening, Writing, Speaking) with weekly practice tasks linked to real IELTS techniques.',
  fromLevel: 'B1',
  toLevel: 'B2',
  durationWeeks: 12,
  color: '#2563eb',
  weeks: [
    {
      week: 1, theme: 'IELTS Overview & Reading Strategies',
      summary: 'Understand the IELTS format. Learn skimming and scanning.',
      tasks: [
        t(1,1,'topic','reading','Skimming & Scanning','Core reading strategies for IELTS.',20,'/dashboard/roadmap','b1_skimming'),
        t(1,2,'grammar','grammar','Present Perfect vs Past Simple','The most tested tense pair in IELTS Writing.',20,'/dashboard/grammar','present_perfect'),
        t(1,3,'phrase','reading','Learn 5 IELTS Writing phrases','Browse Phrase Bank → IELTS Writing.',15,'/dashboard/phrases'),
        t(1,4,'practice','reading','Reading practice — 20 min','Find a B1 reading passage and practise skimming.',20,'/dashboard/practice'),
      ],
    },
    {
      week: 2, theme: 'IELTS Listening: Sections 1 & 2',
      summary: 'Learn how to predict answers and catch keywords in IELTS Listening.',
      tasks: [
        t(2,1,'topic','listening','Listening Strategies','Gist, detail, signpost words.',20,'/dashboard/roadmap','b1_notetake'),
        t(2,2,'material','listening','IELTS Listening practice','Open Materials → B1 → Listening. Listen with Cambridge IELTS practice.',20,'/dashboard/materials'),
        t(2,3,'grammar','grammar','Passive Voice','Essential for IELTS Writing Task 1.',20,'/dashboard/grammar','passive_all'),
        t(2,4,'practice','listening','IELTS Listening session','Log 30-min: complete an official IELTS Listening practice test.',30,'/dashboard/practice'),
      ],
    },
    {
      week: 3, theme: 'IELTS Writing Task 1 — Data Description',
      summary: 'Describe graphs and charts accurately. Learn key vocabulary.',
      tasks: [
        t(3,1,'phrase','writing','Learn Data Description phrases','Browse Phrase Bank → Data Description. Save 8 phrases.',20,'/dashboard/phrases'),
        t(3,2,'topic','writing','IELTS Writing Task structure','Study the B2 essay structure topic.',20,'/dashboard/roadmap','b2_essay'),
        t(3,3,'writing','writing','Write a Task 1 (150 words)','Use AI Writing Feedback. Describe any graph or chart.',30,'/dashboard/writing'),
        t(3,4,'practice','writing','Second Task 1 practice','Log a 20-min writing session.',20,'/dashboard/practice'),
      ],
    },
    {
      week: 4, theme: 'IELTS Writing Task 2 — Essay Structure',
      summary: 'Learn the IELTS Task 2 structure. Write your first complete essay.',
      tasks: [
        t(4,1,'topic','writing','Essay Structure (B2)','Introduction, body paragraphs, conclusion.',25,'/dashboard/roadmap','b2_essay'),
        t(4,2,'topic','writing','Paragraph Structure','Topic sentence, support, example, link.',20,'/dashboard/roadmap','b1_paragraph'),
        t(4,3,'phrase','writing','Learn 8 Opinion phrases','Browse Phrase Bank → Opinion & Argument.',15,'/dashboard/phrases'),
        t(4,4,'writing','writing','Write a full Task 2 essay','250 words. Use AI Feedback. Target Band 6.',40,'/dashboard/writing'),
      ],
    },
    {
      week: 5, theme: 'IELTS Speaking Part 1',
      summary: 'Answer questions about yourself naturally and fluently.',
      tasks: [
        t(5,1,'topic','speaking','Expressing Opinions','I think / In my view / It seems…',20,'/dashboard/roadmap','b1_opinions'),
        t(5,2,'phrase','speaking','Learn 6 Speaking phrases','Browse Phrase Bank → IELTS Speaking.',15,'/dashboard/phrases'),
        t(5,3,'material','speaking','Speaking practice resource','Open Materials → B1 → Speaking → ELSA Speak or italki.',15,'/dashboard/materials'),
        t(5,4,'practice','speaking','Speaking Part 1 mock (20 min)','Record yourself answering 5 Part 1 questions. Log the session.',20,'/dashboard/practice'),
      ],
    },
    {
      week: 6, theme: 'Conditionals & Complex Grammar',
      summary: 'Master conditionals for Writing Task 2 and Speaking Part 3.',
      tasks: [
        t(6,1,'grammar','grammar','All Conditional Types','Type 1, 2, 3, and mixed.',25,'/dashboard/grammar','conditionals_all'),
        t(6,2,'grammar','grammar','Relative Clauses','Add complexity to your writing.',20,'/dashboard/grammar','relative_clauses'),
        t(6,3,'vocabulary','vocabulary','AWL — 20 new academic words','Add 20 words from the Academic Word List.',20,'/dashboard/vocabulary'),
        t(6,4,'writing','writing','Task 2 — use 2 complex structures','Write 250 words and include at least 2 conditional sentences.',35,'/dashboard/writing'),
      ],
    },
    {
      week: 7, theme: 'IELTS Reading — Passage 2',
      summary: 'Handle longer, more complex reading passages.',
      tasks: [
        t(7,1,'topic','reading','Academic Reading Strategies','Inference, implied meaning, author purpose.',20,'/dashboard/roadmap','b2_acadread'),
        t(7,2,'material','reading','Read a B2 article','Open Materials → B2 → Reading. The Guardian or Readlang.',25,'/dashboard/materials'),
        t(7,3,'vocabulary','vocabulary','Vocabulary review — AWL','Review all recent vocabulary additions.',15,'/dashboard/review'),
        t(7,4,'practice','reading','Timed Reading (18 min)','Complete one IELTS Reading passage under time pressure.',20,'/dashboard/practice'),
      ],
    },
    {
      week: 8, theme: 'Cohesion & Discourse Markers',
      summary: 'Connect ideas properly. Raise your Coherence & Cohesion score.',
      tasks: [
        t(8,1,'topic','writing','Coherence & Cohesion','Linking words, pronouns, paragraph flow.',20,'/dashboard/roadmap','b1_cohesion'),
        t(8,2,'phrase','writing','Learn 8 Discourse Markers','Browse Phrase Bank → Discourse Markers.',15,'/dashboard/phrases'),
        t(8,3,'grammar','grammar','Discourse Markers (full reference)','Study the grammar entry.',15,'/dashboard/grammar','discourse_markers'),
        t(8,4,'writing','writing','Rewrite a previous essay','Take a previous Task 2 and rewrite it focusing on connectors.',30,'/dashboard/writing'),
      ],
    },
    {
      week: 9, theme: 'IELTS Speaking Part 2 — Cue Card',
      summary: 'Speak for 2 minutes on any topic. Use narrative and description.',
      tasks: [
        t(9,1,'topic','speaking','Narrating Past Experiences','Sequencing, past tenses, vivid detail.',25,'/dashboard/roadmap','b1_narrate'),
        t(9,2,'topic','speaking','Describing People & Places','Precise vocabulary for description.',20,'/dashboard/roadmap','b1_describe'),
        t(9,3,'phrase','speaking','Learn 5 more Speaking phrases','Phrase Bank → IELTS Speaking.',15,'/dashboard/phrases'),
        t(9,4,'practice','speaking','Part 2 mock — 3 cue cards','Practise 3 cue card topics (2 min each). Record yourself.',25,'/dashboard/practice'),
      ],
    },
    {
      week: 10, theme: 'IELTS Speaking Part 3 & Handling Questions',
      summary: 'Discuss abstract topics. Handle unexpected questions confidently.',
      tasks: [
        t(10,1,'topic','speaking','Handling Unexpected Questions','Buying time, partial answers, rephrasing.',20,'/dashboard/roadmap','b1_unexpected'),
        t(10,2,'topic','speaking','Giving Reasons & Explanations','Because, since, as a result, this leads to…',20,'/dashboard/roadmap','b1_explain'),
        t(10,3,'phrase','speaking','Hedging Language','Browse Phrase Bank → Hedging.',15,'/dashboard/phrases'),
        t(10,4,'practice','speaking','Part 3 mock discussion (20 min)','Record yourself discussing 3 abstract topics.',20,'/dashboard/practice'),
      ],
    },
    {
      week: 11, theme: 'Full IELTS Mock Preparation',
      summary: 'Simulate exam conditions. Identify your weakest area.',
      tasks: [
        t(11,1,'practice','reading','Timed Reading test (60 min)','3 passages, 40 questions, strict time. Log the session.',60,'/dashboard/practice'),
        t(11,2,'writing','writing','Task 1 + Task 2 under time','20 min Task 1 + 40 min Task 2. AI feedback on both.',60,'/dashboard/writing'),
        t(11,3,'practice','listening','Timed Listening test','4 sections, 40 questions. Log the session.',45,'/dashboard/practice'),
        t(11,4,'practice','speaking','Speaking mock — all 3 parts','Simulate the full Speaking test with a partner or alone.',15,'/dashboard/practice'),
      ],
    },
    {
      week: 12, theme: 'Final Review & Exam Strategy',
      summary: 'Lock in your strategies. Focus on your weakest skill this week.',
      tasks: [
        t(12,1,'vocabulary','vocabulary','Final vocabulary review','Review all words + phrases.',20,'/dashboard/review'),
        t(12,2,'phrase','writing','Review saved phrases','Memorise your top 10 most useful phrases.',15,'/dashboard/phrases'),
        t(12,3,'writing','writing','Final essay practice','One more full Task 2 for AI feedback. Target Band 6.5.',40,'/dashboard/writing'),
        t(12,4,'practice','speaking','Confidence session','Log 30 min: talk about any topic continuously in English.',30,'/dashboard/practice'),
      ],
    },
  ],
}

// ─── PLAN 3: B2 → C1 (IELTS 7.0+) ───────────────────────────

export const PLAN_IELTS_ADVANCED: StudyPlan = {
  id: 'ielts_b2',
  title: 'IELTS Advanced — 3 Months',
  subtitle: 'B2 → C1 · Target Band 7.0–7.5',
  description: 'For learners who already have Band 6.0–6.5 and want to break into 7.0+. Focuses on lexical precision, grammatical range, and advanced reading/listening strategies.',
  fromLevel: 'B2',
  toLevel: 'C1',
  durationWeeks: 12,
  color: '#7c3aed',
  weeks: [
    { week: 1, theme: 'Lexical Resource — Vocabulary Precision', summary: 'Replace vague words with precise academic vocabulary.', tasks: [
      t(1,1,'topic','vocabulary','Academic Vocabulary (AWL)','Learn AWL Sublists 1–3.',25,'/dashboard/roadmap','b1_awl'),
      t(1,2,'vocabulary','vocabulary','Add 15 AWL words this week','Focus on: analyse, concept, factor, indicate, method.',20,'/dashboard/vocabulary'),
      t(1,3,'phrase','writing','Academic Writing phrases','Phrase Bank → Academic Writing. Save 8.',15,'/dashboard/phrases'),
      t(1,4,'writing','writing','Task 2 — vocabulary focus','Write 280 words. AI feedback. Target: no basic words.',40,'/dashboard/writing'),
    ]},
    { week: 2, theme: 'Grammatical Range — Complex Structures', summary: 'Use inversion, participles, and nominalization accurately.', tasks: [
      t(2,1,'grammar','grammar','Inversion & Emphasis','Never has..., Not only did...',20,'/dashboard/grammar','inversion'),
      t(2,2,'grammar','grammar','Participial Clauses','Having finished..., Written in...',20,'/dashboard/grammar','participle_clauses'),
      t(2,3,'topic','grammar','Complex Sentence Structures','B2 Roadmap: complex sentences.',25,'/dashboard/roadmap','b2_complex'),
      t(2,4,'writing','writing','Task 2 with complex structures','Include inversion, participial clause, and relative clause.',40,'/dashboard/writing'),
    ]},
    { week: 3, theme: 'Hedging & Academic Register', summary: 'Write like an academic. Sound credible, not absolute.', tasks: [
      t(3,1,'topic','writing','Nuance & Hedging Language','May suggest, it could be argued…',20,'/dashboard/roadmap','b2_nuance'),
      t(3,2,'topic','writing','Formal vs Informal Register','Academic writing vs spoken English.',20,'/dashboard/roadmap','b2_register'),
      t(3,3,'phrase','writing','Hedging Language phrases','Phrase Bank → Hedging. Save 8.',15,'/dashboard/phrases'),
      t(3,4,'writing','writing','Essay with hedging','Every claim in your essay must be hedged.',35,'/dashboard/writing'),
    ]},
    { week: 4, theme: 'Argumentation — Concede & Rebut', summary: 'Build watertight arguments with concessions and rebuttals.', tasks: [
      t(4,1,'topic','writing','Argumentation & Counter-argument','While X is true, Y demonstrates…',20,'/dashboard/roadmap','b2_argue'),
      t(4,2,'phrase','writing','Cause & Effect phrases','Phrase Bank → Cause & Effect. Save 6.',15,'/dashboard/phrases'),
      t(4,3,'writing','writing','Discussion essay (both views)','Present both sides + clear opinion. 280+ words.',40,'/dashboard/writing'),
      t(4,4,'practice','writing','Second essay this week','Maximise writing practice: 2 essays = much faster improvement.',40,'/dashboard/practice'),
    ]},
    { week: 5, theme: 'IELTS Reading — Passage 3 Level', summary: 'Tackle the hardest IELTS passages confidently.', tasks: [
      t(5,1,'topic','reading','Advanced Academic Reading','Inference, author purpose, text structure.',20,'/dashboard/roadmap','b2_acadread'),
      t(5,2,'topic','reading','Critical Analysis of Arguments','Identify assumptions and logical gaps.',20,'/dashboard/roadmap','c1_critical'),
      t(5,3,'material','reading','Read The Economist or Guardian','Open Materials → B2/C1 → Reading.',30,'/dashboard/materials'),
      t(5,4,'practice','reading','Passage 3 timed (20 min)','Complete a Cambridge IELTS Passage 3 under strict time.',20,'/dashboard/practice'),
    ]},
    { week: 6, theme: 'IELTS Listening — Sections 3 & 4', summary: 'Academic discussions and lectures at full speed.', tasks: [
      t(6,1,'topic','listening','Advanced Listening for Detail','Accent variety, fast speech, academic.',20,'/dashboard/roadmap','b2_listenadv'),
      t(6,2,'material','listening','TED Talk + notes','Watch one TED Talk. Take structured notes.',30,'/dashboard/materials'),
      t(6,3,'practice','listening','Section 4 mock (10 min)','IELTS Section 4 — 10-min academic monologue.',15,'/dashboard/practice'),
      t(6,4,'practice','listening','Full listening test','Sections 1–4. Log the session.',45,'/dashboard/practice'),
    ]},
    { week: 7, theme: 'Speaking Fluency & Band 7 Delivery', summary: 'Sound natural, not rehearsed. Aim for Band 7 fluency.', tasks: [
      t(7,1,'topic','speaking','Speaking Fluency & Coherence','Natural speech, fillers, self-correction.',20,'/dashboard/roadmap','b2_speakflu'),
      t(7,2,'phrase','speaking','Idiomatic Expressions (5)','Browse Phrase Bank or learn from B2 Roadmap.',15,'/dashboard/phrases'),
      t(7,3,'topic','speaking','Idiomatic Expressions','Natural English idioms.',20,'/dashboard/roadmap','b2_idioms'),
      t(7,4,'practice','speaking','Speaking all 3 parts (35 min)','Record yourself. Listen back for fluency gaps.',35,'/dashboard/practice'),
    ]},
    { week: 8, theme: 'Task 1 — Data Mastery', summary: 'Describe complex graphs, maps, and processes with precision.', tasks: [
      t(8,1,'phrase','writing','All Data Description phrases','Browse Phrase Bank → Data Description. Master all 8.',15,'/dashboard/phrases'),
      t(8,2,'topic','writing','Mixed Tenses in Context','Use tenses strategically in Task 1.',20,'/dashboard/roadmap','b2_mixed'),
      t(8,3,'writing','writing','Task 1 — complex chart','Two graphs or a map + process. AI feedback.',25,'/dashboard/writing'),
      t(8,4,'writing','writing','Second Task 1 practice','Another chart type (bar, pie, line, process).',25,'/dashboard/writing'),
    ]},
    { week: 9, theme: 'Task 2 Mastery — Full Range', summary: 'Write Band 7+ essays using the full range of structures.', tasks: [
      t(9,1,'topic','writing','IELTS Band 7.5+ Strategies','Lexical resource, range, task achievement.',25,'/dashboard/roadmap','c1_ielts75'),
      t(9,2,'topic','writing','Timed Writing Practice','Exam conditions — no pausing.',20,'/dashboard/roadmap','c1_timed'),
      t(9,3,'writing','writing','Timed Task 2 (40 min strict)','No dictionary. No pausing. AI feedback.',40,'/dashboard/writing'),
      t(9,4,'topic','writing','Proofreading & Self-editing','Catch your own errors.',15,'/dashboard/roadmap','c1_proofread'),
    ]},
    { week: 10, theme: 'Full Mock Test — Week 1', summary: 'First full 3-hour IELTS simulation.', tasks: [
      t(10,1,'practice','reading','Reading test — 60 min','3 passages. Strict timing.',60,'/dashboard/practice'),
      t(10,2,'writing','writing','Task 1 + Task 2 — 60 min','20 min + 40 min. No AI until after.',60,'/dashboard/writing'),
      t(10,3,'practice','listening','Listening test — 40 min','4 sections. Log the session.',45,'/dashboard/practice'),
      t(10,4,'practice','speaking','Full Speaking mock','All 3 parts. Record yourself.',20,'/dashboard/practice'),
    ]},
    { week: 11, theme: 'Analyse Results & Fix Weak Areas', summary: 'Target your weakest skill from the mock test.', tasks: [
      t(11,1,'vocabulary','vocabulary','AWL deep review','Review all saved academic words.',20,'/dashboard/review'),
      t(11,2,'writing','writing','Targeted Task 2 rewrite','Take your weakest essay and rewrite it.',40,'/dashboard/writing'),
      t(11,3,'material','reading','Academic reading immersion','30 min reading The Economist or JSTOR.',30,'/dashboard/materials'),
      t(11,4,'practice','speaking','Speaking fluency drill','30-min uninterrupted speaking on 3 topics.',30,'/dashboard/practice'),
    ]},
    { week: 12, theme: 'Final Preparation & Confidence', summary: 'Last push. Consolidate everything. You\'re ready.', tasks: [
      t(12,1,'vocabulary','vocabulary','Final review — all words','Review vocabulary and phrase bank.',20,'/dashboard/review'),
      t(12,2,'phrase','writing','Final phrases check','Read through all saved phrases once more.',15,'/dashboard/phrases'),
      t(12,3,'writing','writing','Final full essay','One last Task 2. Target your personal best.',40,'/dashboard/writing'),
      t(12,4,'practice','speaking','Confidence session','45 min speaking practice. You\'re ready.',45,'/dashboard/practice'),
    ]},
  ],
}

export const ALL_PLANS: StudyPlan[] = [PLAN_STARTER, PLAN_IELTS_PREP, PLAN_IELTS_ADVANCED]

export function getRecommendedPlan(level: CEFRLevel, targetTest: string | null): StudyPlan {
  if (level === 'A1' || level === 'A2') return PLAN_STARTER
  if (level === 'B2' || level === 'C1') return PLAN_IELTS_ADVANCED
  return PLAN_IELTS_PREP
}
