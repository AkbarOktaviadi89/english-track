import type { CEFRLevel, TestType, Skill } from '@/types'

// ─── CEFR General English Curriculum ─────────────────────────

export const CEFR_CURRICULUM: Record<CEFRLevel, {
  label: string
  tagline: string
  duration: string
  ielts: string
  toefl: string
  color: string
  bg: string
  border: string
  text: string
  phases: Array<{
    title: string
    skill: Skill
    topics: Array<{ key: string; title: string; desc: string }>
  }>
}> = {
  A1: {
    label: 'Beginner', tagline: 'Start your English journey', duration: '2–4 months',
    ielts: '< 4.0', toefl: '< 32', color: '#259775', bg: '#eef9f4', border: '#aee3cb', text: '#113f33',
    phases: [
      {
        title: 'Basic Communication', skill: 'speaking',
        topics: [
          { key: 'a1_greet', title: 'Greetings & introductions', desc: 'Hello, my name is..., Nice to meet you' },
          { key: 'a1_numbers', title: 'Numbers, dates & time', desc: 'Cardinal, ordinal numbers; days, months' },
          { key: 'a1_personal', title: 'Personal information', desc: 'Name, age, nationality, job, family' },
          { key: 'a1_questions', title: 'Simple questions', desc: 'What, who, where, when, how old' },
          { key: 'a1_phonics', title: 'Alphabet & pronunciation', desc: 'Letter sounds, stress, intonation basics' },
        ],
      },
      {
        title: 'Core Vocabulary', skill: 'vocabulary',
        topics: [
          { key: 'a1_colors', title: 'Colors, shapes & sizes', desc: 'Descriptive adjectives for everyday objects' },
          { key: 'a1_family', title: 'Family members', desc: 'Mother, father, siblings, extended family' },
          { key: 'a1_food', title: 'Food & drinks', desc: 'Common foods, ordering, expressing likes' },
          { key: 'a1_routines', title: 'Daily routines', desc: 'Morning to evening routine vocabulary' },
          { key: 'a1_verbs', title: 'Core verbs (50)', desc: 'be, have, go, like, want, need, can, do' },
        ],
      },
      {
        title: 'Foundation Grammar', skill: 'grammar',
        topics: [
          { key: 'a1_present', title: 'Present simple tense', desc: 'I work, She lives, They eat — habits & facts' },
          { key: 'a1_articles', title: 'Articles: a, an, the', desc: 'When and how to use each article correctly' },
          { key: 'a1_plural', title: 'Singular & plural nouns', desc: 'Regular (-s, -es) and irregular (child/children)' },
          { key: 'a1_pronouns', title: 'Personal & possessive pronouns', desc: 'I/me/my, he/him/his, they/them/their' },
          { key: 'a1_adjectives', title: 'Basic adjectives', desc: 'Big/small, old/new, good/bad, hot/cold' },
        ],
      },
    ],
  },
  A2: {
    label: 'Elementary', tagline: 'Build everyday fluency', duration: '3–5 months',
    ielts: '4.0–4.5', toefl: '32–45', color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe', text: '#1e3a8a',
    phases: [
      {
        title: 'Everyday Situations', skill: 'speaking',
        topics: [
          { key: 'a2_shopping', title: 'Shopping & money', desc: 'Prices, buying, comparing items' },
          { key: 'a2_directions', title: 'Directions & transport', desc: 'Asking for & giving directions, public transport' },
          { key: 'a2_health', title: 'Health & body', desc: 'Body parts, illness, doctor visits' },
          { key: 'a2_weather', title: 'Weather & environment', desc: 'Describing weather, seasons, climate' },
          { key: 'a2_work', title: 'Work & school life', desc: 'Job vocabulary, school subjects, schedule' },
        ],
      },
      {
        title: 'Expanding Grammar', skill: 'grammar',
        topics: [
          { key: 'a2_past', title: 'Past simple tense', desc: 'Regular (-ed) and irregular verbs in past' },
          { key: 'a2_cont', title: 'Present continuous', desc: 'I am working — actions happening now' },
          { key: 'a2_compare', title: 'Comparative adjectives', desc: 'Bigger than, more expensive than' },
          { key: 'a2_modal', title: 'Modal verbs', desc: 'Can, could, should, must, might' },
          { key: 'a2_prep', title: 'Prepositions of time & place', desc: 'In, on, at, before, after, between' },
        ],
      },
      {
        title: 'Receptive Skills', skill: 'listening',
        topics: [
          { key: 'a2_signs', title: 'Short texts & signs', desc: 'Notices, menus, timetables, forms' },
          { key: 'a2_email', title: 'Simple emails & messages', desc: 'Informal correspondence, text messages' },
          { key: 'a2_listen', title: 'Listening: slow clear speech', desc: 'Simple dialogues, announcements' },
          { key: 'a2_match', title: 'Matching pictures to text', desc: 'Visual comprehension exercises' },
          { key: 'a2_fill', title: 'Gap-fill exercises', desc: 'Fill-in-the-blank with grammar & vocabulary' },
        ],
      },
    ],
  },
  B1: {
    label: 'Intermediate', tagline: 'IELTS 5.0–5.5 threshold', duration: '4–6 months',
    ielts: '5.0–5.5', toefl: '46–71', color: '#d97706', bg: '#fffbeb', border: '#fde68a', text: '#78350f',
    phases: [
      {
        title: 'Fluency Building', skill: 'speaking',
        topics: [
          { key: 'b1_opinions', title: 'Expressing opinions', desc: 'I think, In my opinion, I agree/disagree because...' },
          { key: 'b1_narrate', title: 'Narrating past experiences', desc: 'Telling stories, using linkers: first, then, finally' },
          { key: 'b1_explain', title: 'Giving reasons & explanations', desc: 'Because, so, therefore, as a result' },
          { key: 'b1_describe', title: 'Describing people & places', desc: 'Detailed descriptions with adjective order' },
          { key: 'b1_unexpected', title: 'Handling unexpected questions', desc: 'Buying time: That\'s a good question, Let me think...' },
        ],
      },
      {
        title: 'Intermediate Grammar', skill: 'grammar',
        topics: [
          { key: 'b1_perfvpast', title: 'Present perfect vs past simple', desc: 'I have visited vs I visited — key difference' },
          { key: 'b1_passive', title: 'Passive voice (basic)', desc: 'The book was written by Orwell' },
          { key: 'b1_cond12', title: 'Conditionals type 1 & 2', desc: 'If it rains... / If I were you...' },
          { key: 'b1_reported', title: 'Reported speech', desc: 'She said that she was tired...' },
          { key: 'b1_relative', title: 'Relative clauses', desc: 'who, which, that, where, whose' },
        ],
      },
      {
        title: 'Academic Readiness', skill: 'reading',
        topics: [
          { key: 'b1_skimming', title: 'Skimming & scanning', desc: 'Find main ideas fast; locate specific information' },
          { key: 'b1_notetake', title: 'Note-taking while listening', desc: 'Keywords, abbreviations, symbols' },
          { key: 'b1_paragraph', title: 'Paragraph structure', desc: 'Topic sentence, supporting details, concluding' },
          { key: 'b1_cohesion', title: 'Coherence & cohesion', desc: 'Linking words, pronouns, repetition avoidance' },
          { key: 'b1_awl', title: 'Academic vocabulary (500 words)', desc: 'AWL sublists 1–3: analyze, concept, data...' },
        ],
      },
    ],
  },
  B2: {
    label: 'Upper-Intermediate', tagline: 'IELTS 6.0–7.0 territory', duration: '5–8 months',
    ielts: '6.0–7.0', toefl: '72–94', color: '#db2777', bg: '#fdf2f8', border: '#f9a8d4', text: '#831843',
    phases: [
      {
        title: 'Advanced Expression', skill: 'speaking',
        topics: [
          { key: 'b2_nuance', title: 'Nuance & hedging language', desc: 'It could be argued, There is some evidence...' },
          { key: 'b2_register', title: 'Formal vs informal register', desc: 'Adapting language to context and audience' },
          { key: 'b2_argue', title: 'Argumentation & counter-argument', desc: 'While X is true, Y suggests a different view' },
          { key: 'b2_complex', title: 'Complex sentence structures', desc: 'Subordinate clauses, multiple clause sentences' },
          { key: 'b2_idioms', title: 'Idiomatic expressions', desc: '50 natural idioms that sound native, not textbook' },
        ],
      },
      {
        title: 'Advanced Grammar', skill: 'grammar',
        topics: [
          { key: 'b2_allcond', title: 'All conditional types (0–3 + mixed)', desc: 'If I had known, I would have gone' },
          { key: 'b2_advpass', title: 'Advanced passive voice', desc: 'It is believed that, It has been reported...' },
          { key: 'b2_inversion', title: 'Inversion & emphasis', desc: 'Never have I seen, Rarely does she...' },
          { key: 'b2_participle', title: 'Participle clauses', desc: 'Having finished the work, he left early' },
          { key: 'b2_mixed', title: 'Mixed tenses in context', desc: 'Academic texts use a range of tenses strategically' },
        ],
      },
      {
        title: 'Test-Ready Skills', skill: 'writing',
        topics: [
          { key: 'b2_essay', title: 'IELTS/TOEFL essay structure', desc: 'Intro → body paragraphs → conclusion formula' },
          { key: 'b2_integrated', title: 'Integrated writing tasks', desc: 'Read + listen + synthesize for TOEFL writing' },
          { key: 'b2_acadread', title: 'Academic reading strategies', desc: 'Inference, implied meaning, author\'s purpose' },
          { key: 'b2_listenadv', title: 'Advanced listening for detail', desc: 'Accent variety, fast speech, academic lectures' },
          { key: 'b2_speakflu', title: 'Speaking fluency & coherence', desc: 'Flow naturally without long pauses or repetition' },
        ],
      },
    ],
  },
  C1: {
    label: 'Advanced', tagline: 'IELTS 7.5–8.0 range', duration: '6–10 months',
    ielts: '7.5–8.0', toefl: '95–113', color: '#7c3aed', bg: '#f5f3ff', border: '#c4b5fd', text: '#4c1d95',
    phases: [
      {
        title: 'Sophisticated Communication', skill: 'speaking',
        topics: [
          { key: 'c1_implied', title: 'Implied meaning & subtext', desc: 'What is not said; irony, understatement, implication' },
          { key: 'c1_discourse', title: 'Academic discourse conventions', desc: 'How academics write & speak differently' },
          { key: 'c1_profwrite', title: 'Professional writing', desc: 'Reports, proposals, executive summaries' },
          { key: 'c1_debate', title: 'Debate & critical thinking', desc: 'Anticipate objections, refute, concede & rebut' },
          { key: 'c1_cultural', title: 'Cultural nuance', desc: 'British vs American vs Australian; politeness strategies' },
        ],
      },
      {
        title: 'Near-Native Reading', skill: 'reading',
        topics: [
          { key: 'c1_dense', title: 'Dense academic texts', desc: 'Research papers, legal documents, dense arguments' },
          { key: 'c1_infer', title: 'Inferring from context', desc: 'Guess meaning without a dictionary' },
          { key: 'c1_critical', title: 'Critical analysis of arguments', desc: 'Evaluate strength, bias, logical fallacies' },
          { key: 'c1_speed', title: 'Speed reading techniques', desc: '400+ words/minute with high comprehension' },
          { key: 'c1_specvocab', title: 'Discipline-specific vocabulary', desc: 'Law, medicine, economics, technology domains' },
        ],
      },
      {
        title: 'High-Stakes Test Prep', skill: 'writing',
        topics: [
          { key: 'c1_ielts75', title: 'IELTS band 7.5+ strategies', desc: 'Lexical resource, grammatical range, task achievement' },
          { key: 'c1_toefl95', title: 'TOEFL 95+ techniques', desc: 'Integrated tasks, academic discussion, timing' },
          { key: 'c1_complex', title: 'Complex task responses', desc: 'Full marks criteria for each test type' },
          { key: 'c1_proofread', title: 'Proofreading & self-editing', desc: 'Catch your own errors before submission' },
          { key: 'c1_timed', title: 'Timed writing practice', desc: 'Full essays under strict time conditions' },
        ],
      },
    ],
  },
  C2: {
    label: 'Mastery', tagline: 'Near-native proficiency', duration: 'Ongoing refinement',
    ielts: '8.5–9.0', toefl: '114–120', color: '#475569', bg: '#f8fafc', border: '#cbd5e1', text: '#1e293b',
    phases: [
      {
        title: 'Mastery Refinement', skill: 'writing',
        topics: [
          { key: 'c2_style', title: 'Stylistic variation & register control', desc: 'Switch seamlessly from academic to casual to formal' },
          { key: 'c2_pragmatic', title: 'Pragmatic competence', desc: 'What to say, when, to whom — social precision' },
          { key: 'c2_zeroerror', title: 'Near-zero error in writing', desc: 'Exceptional accuracy in complex written production' },
          { key: 'c2_accent', title: 'Accent refinement (optional)', desc: 'Closer to RP or General American — your choice' },
          { key: 'c2_specialized', title: 'Specialized vocabulary domains', desc: 'Legal, medical, financial, scientific precision' },
        ],
      },
      {
        title: 'Native-Level Listening', skill: 'listening',
        topics: [
          { key: 'c2_fast', title: 'Fast native speech', desc: 'Connected speech: gonna, wanna, dunno, didja' },
          { key: 'c2_humor', title: 'Humor, sarcasm & irony', desc: 'Understanding what is meant vs what is said' },
          { key: 'c2_podcast', title: 'Podcasts without transcripts', desc: 'Complex unscripted conversations at full speed' },
          { key: 'c2_lecture', title: 'Academic lectures at full speed', desc: 'Oxford/MIT lectures — no simplified English' },
          { key: 'c2_dialect', title: 'Dialectal variation', desc: 'Scottish, Irish, Australian, Indian English accents' },
        ],
      },
      {
        title: 'Expert Production', skill: 'speaking',
        topics: [
          { key: 'c2_research', title: 'Research paper writing', desc: 'IMRaD structure, citations, academic argument' },
          { key: 'c2_public', title: 'Public speaking & presentation', desc: 'TED-style structure, charisma, clarity' },
          { key: 'c2_paraphrase', title: 'Simultaneous paraphrasing', desc: 'Rephrase in real-time — interpreter-level skill' },
          { key: 'c2_creative', title: 'Creative writing in English', desc: 'Fiction, poetry, personal essays' },
          { key: 'c2_teach', title: 'Language teaching readiness', desc: 'Explain grammar rules & nuance to learners' },
        ],
      },
    ],
  },
}

// ─── Test Curricula ───────────────────────────────────────────

export const TEST_CURRICULA: Record<TestType, {
  name: string
  full_name: string
  scale: string
  passing: string
  color: string
  bg: string
  description: string
  modules: Array<{
    id: string
    number: string
    title: string
    skill: Skill
    difficulty: 'foundation' | 'intermediate' | 'advanced'
    duration: string
    description: string
    tips: string[]
  }>
}> = {
  IELTS: {
    name: 'IELTS', full_name: 'IELTS Academic', scale: 'Band 0–9',
    passing: 'Band 7.0 (most postgrad programs)',
    color: '#c2410c', bg: '#fff7ed',
    description: 'The world\'s most popular English proficiency test. Taken by 3.5 million people annually. Required by most UK, Australian, and Canadian universities.',
    modules: [
      { id: 'ielts_l1', number: '01', title: 'Listening: Section 1 & 2', skill: 'listening', difficulty: 'foundation', duration: '2 weeks',
        description: 'Social conversations and monologues. Section 1: two-person dialogue (e.g., booking, enquiry). Section 2: single speaker on a general topic. Focus: form completion, multiple choice, matching.',
        tips: ['Read questions before the audio starts', 'Predict the type of answer (name, number, date)', 'Watch out for distractors — speakers often correct themselves', 'Spelling counts — practice common tricky words'] },
      { id: 'ielts_l2', number: '02', title: 'Listening: Section 3 & 4', skill: 'listening', difficulty: 'advanced', duration: '3 weeks',
        description: 'Academic discussions and monologues. Section 3: up to 4 speakers in academic context. Section 4: university-style lecture. Significantly harder — requires note-taking and inference.',
        tips: ['Section 4 has no break — stay focused for 10 minutes straight', 'Listen for signpost language: "Moving on...", "In contrast..."', 'Don\'t leave blanks — educated guess is better than nothing', 'Practice with BBC Radio 4 or TED talks'] },
      { id: 'ielts_r1', number: '03', title: 'Reading: Passage 1', skill: 'reading', difficulty: 'foundation', duration: '2 weeks',
        description: 'Descriptive or narrative text, less technical. 13 questions. Common tasks: True/False/Not Given, multiple choice, matching sentence endings.',
        tips: ['Always read the question FIRST, then find in text', 'True/False/Not Given is different from Yes/No/Not Given', '"Not Given" means the text simply doesn\'t mention it', 'Time yourself: ~18 minutes per passage'] },
      { id: 'ielts_r2', number: '04', title: 'Reading: Passage 2 & 3', skill: 'reading', difficulty: 'advanced', duration: '3 weeks',
        description: 'Complex argumentative and academic texts. Passage 3 is the hardest in the test. Matching headings, sentence completion, diagram labelling.',
        tips: ['Matching headings: read paragraph first, then match', 'Paraphrase is key — the text will use different words than the question', 'Passage 3 often has abstract academic language — don\'t panic', 'AWL knowledge is crucial here'] },
      { id: 'ielts_w1', number: '05', title: 'Writing Task 1: Data Description', skill: 'writing', difficulty: 'intermediate', duration: '3 weeks',
        description: 'Describe a graph, chart, table, diagram, or process in 150+ words. 20 minutes. Graded on: Task Achievement, Coherence, Lexical Resource, Grammatical Range.',
        tips: ['NEVER give your personal opinion in Task 1', 'Always open with a paraphrase of the question', 'Identify the main trend — don\'t list every number', 'Use appropriate language: "a sharp increase", "remained stable"'] },
      { id: 'ielts_w2', number: '06', title: 'Writing Task 2: Essay', skill: 'writing', difficulty: 'advanced', duration: '4 weeks',
        description: 'Argumentative, discussion, or problem-solution essay. 250+ words, 40 minutes. Worth twice as many marks as Task 1. 4 essay types: Opinion, Discussion, Advantages/Disadvantages, Problem/Solution.',
        tips: ['Clear position from the first paragraph', 'Each body paragraph = one main idea + development + example', 'Don\'t use "I" in formal academic essays — "It could be argued..."', 'Proofread the last 3 minutes — fix obvious errors'] },
      { id: 'ielts_s1', number: '07', title: 'Speaking Part 1: Introduction', skill: 'speaking', difficulty: 'foundation', duration: '1 week',
        description: 'Questions about yourself, home, family, work/study, hobbies. 4–5 minutes. Conversational pace. Examiner is looking for natural, extended answers.',
        tips: ['Never answer with just Yes or No', 'Expand every answer: direct answer + reason + example', 'Speak naturally, not like you\'re reading a script', 'It\'s fine to say "Actually, I\'ve never thought about that..."'] },
      { id: 'ielts_s2', number: '08', title: 'Speaking Part 2: Long Turn', skill: 'speaking', difficulty: 'intermediate', duration: '2 weeks',
        description: 'Cue card topic — speak for 1–2 minutes. 1 minute to prepare. Cover all bullet points on the card. Examiner will ask 1–2 follow-up questions.',
        tips: ['Use your 1 minute to write 3–4 keyword notes, not full sentences', 'Structure: context → description → feeling → relevance', 'If you lose track, use: "As I was saying..."', 'Eye contact with the examiner shows confidence'] },
      { id: 'ielts_s3', number: '09', title: 'Speaking Part 3: Discussion', skill: 'speaking', difficulty: 'advanced', duration: '2 weeks',
        description: 'Abstract discussion linked to Part 2 topic. 4–5 minutes. Examiner pushes deeper: "Why do you think...?", "How has this changed...?". Must demonstrate C1 language use.',
        tips: ['Speculate when needed: "I would imagine...", "It\'s possible that..."', 'Agree and extend: "Yes, and furthermore..."', 'Disagree politely: "That\'s interesting, although I feel..."', 'Aim for 2–3 sentence answers minimum'] },
      { id: 'ielts_v', number: '10', title: 'Academic Word List (AWL)', skill: 'vocabulary', difficulty: 'intermediate', duration: '6 weeks',
        description: '570 word families that appear across all academic disciplines. Essential for Reading and Writing bands above 6.5. Sublists 1–3 are highest frequency.',
        tips: ['Learn words in context, not isolated definitions', 'AWL Sublist 1: analyze, concept, data, establish, evidence', 'Use Quizlet or Anki with spaced repetition', 'Practice using AWL words in your own sentences daily'] },
    ],
  },
  TOEFL: {
    name: 'TOEFL', full_name: 'TOEFL iBT', scale: '0–120',
    passing: '100+ for top US/Australian universities',
    color: '#1d4ed8', bg: '#eff6ff',
    description: 'Preferred by US universities. All sections are computer-based and integrated. 3-hour test measuring academic English in a university context.',
    modules: [
      { id: 'toefl_r1', number: '01', title: 'Reading: Passage comprehension', skill: 'reading', difficulty: 'foundation', duration: '2 weeks',
        description: '3–4 academic passages (~700 words each). 10 questions per passage. Question types: factual, negative factual, vocabulary in context, sentence simplification, insert text.',
        tips: ['Read the passage first — don\'t skim', 'Vocabulary questions: substitute each option back into the sentence', '"Insert text" questions: look for pronoun reference or logical flow', 'Wrong answers are designed to be almost right — read carefully'] },
      { id: 'toefl_r2', number: '02', title: 'Reading: Rhetorical purpose', skill: 'reading', difficulty: 'advanced', duration: '2 weeks',
        description: 'Understanding why the author includes specific information. "The author mentions X in paragraph 3 in order to..." — requires deeper inference.',
        tips: ['Ask: Is this an example? A contrast? A definition? A cause?', 'Rhetorical purpose signals: "For instance", "However", "This suggests"', 'The answer is never literally in the passage — you must infer', 'Practice with TOEFL Official Guide passages'] },
      { id: 'toefl_l1', number: '03', title: 'Listening: Academic lectures', skill: 'listening', difficulty: 'advanced', duration: '3 weeks',
        description: '2–3 lectures, 4–6 minutes each. Authentic university style with false starts, interruptions. Professor often uses examples, analogies. 6 questions per lecture.',
        tips: ['Note-taking is allowed and essential', 'Listen for organizational signals: "today we\'re going to...", "the key point here is..."', 'Professors often correct themselves or hedge: "well, sort of..."', 'Attitude questions: HOW does the professor feel about the topic?'] },
      { id: 'toefl_l2', number: '04', title: 'Listening: Campus conversations', skill: 'listening', difficulty: 'intermediate', duration: '2 weeks',
        description: 'Student-professor or student-staff office conversations. 3 minutes. Focus on PURPOSE of the conversation and what ACTION is needed.',
        tips: ['Listen for the student\'s problem or question', 'The solution is often in the last part of the conversation', 'Listen for implicit attitude: frustrated, relieved, confused', 'Practice with TOEFL TPO tests (most authentic practice material)'] },
      { id: 'toefl_s1', number: '05', title: 'Speaking: Independent task', skill: 'speaking', difficulty: 'foundation', duration: '2 weeks',
        description: 'Express and defend your opinion on a familiar topic. 15 seconds prep, 45 seconds response. Clear structure essential: position → reason 1 → reason 2 (+ example).',
        tips: ['Don\'t change your mind mid-answer', 'Template: "I personally believe X because first... and second..."', 'Practice filling exactly 44–45 seconds (not cutting short)', 'Record yourself — listen for fillers: "um", "uh", "like"'] },
      { id: 'toefl_s2', number: '06', title: 'Speaking: Integrated tasks (2–4)', skill: 'speaking', difficulty: 'advanced', duration: '3 weeks',
        description: 'Read text + listen to lecture/conversation → speak synthesizing both. Task 2: campus situation. Task 3: academic concept. Task 4: lecture summary.',
        tips: ['Note key points from BOTH reading and listening', 'Don\'t express your personal opinion — just report accurately', 'Task 4 (lecture summary): use professor\'s examples directly', 'Scoring is on delivery + language use + topic development'] },
      { id: 'toefl_w1', number: '07', title: 'Writing: Integrated task', skill: 'writing', difficulty: 'intermediate', duration: '3 weeks',
        description: 'Read 300-word passage → listen to 2-minute lecture (which contradicts or qualifies the reading) → write 150–225 words explaining how the lecture relates to the reading.',
        tips: ['The lecture will ALWAYS challenge or cast doubt on the reading', 'Structure: intro → lecture point 1 vs reading point 1 → etc.', 'Do NOT give your own opinion', 'Use: "The lecturer argues that... while the reading claims that..."'] },
      { id: 'toefl_w2', number: '08', title: 'Writing: Academic discussion', skill: 'writing', difficulty: 'advanced', duration: '3 weeks',
        description: 'Read a professor\'s question and two student responses → contribute to the discussion in 150+ words. 10 minutes. New in 2023 (replaced Independent Writing).',
        tips: ['Engage with BOTH student posts — don\'t just address the professor\'s prompt', 'Add a new perspective, don\'t just agree with one student', 'Demonstrate vocabulary range and grammatical variety', 'Aim for 180–250 words for a higher score'] },
      { id: 'toefl_nt', number: '09', title: 'Note-taking system', skill: 'listening', difficulty: 'intermediate', duration: '2 weeks',
        description: 'TOEFL demands systematic note-taking for all listening tasks. Without an efficient system, you will not remember key details during speaking and writing tasks.',
        tips: ['Develop personal shorthand: w/ = with, b/c = because, → = causes', 'Use Cornell Method: main notes | key questions | summary', 'Practice taking notes without looking at the paper', 'Review and rewrite notes immediately after each practice session'] },
      { id: 'toefl_int', number: '10', title: 'Integrated skill synthesis', skill: 'grammar', difficulty: 'advanced', duration: '2 weeks',
        description: 'Every TOEFL task combines 2+ skills simultaneously. This separates TOEFL from IELTS. You must listen AND take notes AND speak AND write — often from the same input.',
        tips: ['Practice the full test under real conditions at least twice', 'Time yourself strictly — TOEFL is very precise about timing', 'Simulated environment: no phone, no noise, proper headset', 'Use official TOEFL practice tests (TPO 1–54 available)'] },
    ],
  },
  PTE: {
    name: 'PTE', full_name: 'PTE Academic', scale: '10–90',
    passing: '65+ for Australian PR; 79+ for top universities',
    color: '#065f46', bg: '#ecfdf5',
    description: 'Fully computer-scored (AI). Fast results within 48 hours. Increasingly popular for Australian migration. 2-hour adaptive test.',
    modules: [
      { id: 'pte_ra', number: '01', title: 'Read Aloud', skill: 'speaking', difficulty: 'foundation', duration: '2 weeks',
        description: 'Read a text (50–60 words) with 35–40 seconds prep. Scored on Content, Fluency, AND Pronunciation — affects both Speaking AND Reading scores.',
        tips: ['Read the text silently first during prep time', 'Aim for consistent rhythm — don\'t rush at the end', 'Mispronouncing is better than pausing', 'Microphone sensitivity: speak clearly at normal volume'] },
      { id: 'pte_rs', number: '02', title: 'Repeat Sentence', skill: 'listening', difficulty: 'intermediate', duration: '2 weeks',
        description: 'Hear a sentence (3–9 seconds) and repeat it exactly. Tests memory span and pronunciation. One of the highest-impact item types for overall score.',
        tips: ['Focus on chunking: hear in phrases, not word by word', 'If you miss words, keep going — don\'t go silent', 'Memory span practice: start with 5-word sentences, work up to 15', 'Score is affected by both content accuracy AND delivery'] },
      { id: 'pte_di', number: '03', title: 'Describe Image', skill: 'speaking', difficulty: 'intermediate', duration: '3 weeks',
        description: '25 seconds prep, 40 seconds response. Bar charts, line graphs, pie charts, maps, flow charts. Template-based approach works very well here.',
        tips: ['Template: "The image shows... Overall, the most notable feature is... Specifically..."', 'Name the highest and lowest values', 'Describe trends, not every single data point', 'Practice with 5 image types: bar, line, pie, map, process'] },
      { id: 'pte_rl', number: '04', title: 'Re-tell Lecture', skill: 'listening', difficulty: 'advanced', duration: '3 weeks',
        description: 'Hear a 60–90 second academic lecture + image. Speak for 40 seconds summarizing it. Most complex speaking item — requires simultaneous listening and note-taking.',
        tips: ['Note: topic, main points, supporting details, conclusion', 'Your re-tell doesn\'t need to be perfect — coherence matters most', 'Template: "The lecture discusses... The speaker explains... In conclusion..."', 'Practice with university lecture podcasts'] },
      { id: 'pte_swt', number: '05', title: 'Summarize Written Text', skill: 'writing', difficulty: 'advanced', duration: '3 weeks',
        description: 'Read passage (200–300 words) → write ONE sentence of 5–75 words summarizing the main point. 10 minutes. One sentence only — grammatically complex.',
        tips: ['Use a complex sentence: "Although X, Y, which results in Z"', 'Include the main idea — not every detail', 'Check: is it truly ONE grammatical sentence?', 'Avoid starting with "It" — be specific about the subject'] },
      { id: 'pte_e', number: '06', title: 'Write Essay', skill: 'writing', difficulty: 'intermediate', duration: '3 weeks',
        description: '200–300 words in 20 minutes on an argumentative topic. Shorter than IELTS but faster pace. Graded by AI on content, form, grammar, vocabulary, spelling.',
        tips: ['Structure: intro (2 sent) + body ×2 (3–4 sent each) + conclusion (2 sent)', 'Use varied sentence structures — AI rewards grammatical range', 'No grammar checker here — proofread yourself', 'Aim for 250 words — not more, not less'] },
      { id: 'pte_r', number: '07', title: 'Reading: Multiple item types', skill: 'reading', difficulty: 'intermediate', duration: '3 weeks',
        description: 'Multiple choice (single/multiple), Reorder Paragraphs, Reading Fill in the Blanks, Reading-Writing Fill in the Blanks. No single passage — variety of short texts.',
        tips: ['Reorder Paragraphs: find the topic sentence (usually no pronoun reference)', 'R-W Fill Blanks: context + grammar + collocation all matter', 'Multiple answer multiple choice: all correct answers must be selected', 'Time management: FIB items take longest — budget accordingly'] },
      { id: 'pte_hiw', number: '08', title: 'Listening: Highlight Incorrect Words', skill: 'listening', difficulty: 'advanced', duration: '2 weeks',
        description: 'Listen to audio while reading transcript. Click words that differ from what the speaker says. 2–3 incorrect words per item. Demands split attention.',
        tips: ['Read the transcript before audio starts (you have time)', 'Substituted words are often same part of speech (noun→noun)', 'Words changed: synonyms, near-homophones, or semantically related', 'Don\'t second-guess — trust your first instinct'] },
      { id: 'pte_ai', number: '09', title: 'AI scoring system', skill: 'grammar', difficulty: 'foundation', duration: '1 week',
        description: 'PTE is 100% AI-scored. Understanding how the AI works helps you optimize your responses. AI evaluates: Fluency, Pronunciation, Content, Form, Grammar, Vocabulary, Spelling.',
        tips: ['Fluency = smooth delivery without long pauses (NOT speed)', 'Pronunciation is rated on intelligibility, not native accent', 'Content: include all key points — omissions reduce score', 'Enabling skills: Oral Fluency and Pronunciation affect 6+ item types'] },
      { id: 'pte_time', number: '10', title: 'Timing & test strategy', skill: 'grammar', difficulty: 'intermediate', duration: '1 week',
        description: 'PTE has strict per-item time limits. The test is adaptive — difficulty adjusts. Items are mixed, not grouped by skill. You cannot go back to previous items.',
        tips: ['Download official PTE Scored Practice Tests (most accurate simulation)', 'Speaking items: if you go silent for 3 seconds, microphone stops', 'Don\'t leave any item blank — attempted = possible partial credit', 'Use the Pearson English app for daily micro-practice'] },
    ],
  },
  TOEIC: {
    name: 'TOEIC', full_name: 'TOEIC L&R', scale: '10–990',
    passing: '785+ (Level 6) for multinational companies',
    color: '#b45309', bg: '#fffbeb',
    description: 'Workplace English proficiency test. 2 hours, 200 questions. Listening (100 Q, 45 min) + Reading (100 Q, 75 min). No speaking or writing sections.',
    modules: [
      { id: 'toeic_p1', number: '01', title: 'Part 1: Photographs', skill: 'listening', difficulty: 'foundation', duration: '1 week',
        description: '6 photographs. Each has 4 spoken descriptions — choose the most accurate. Straightforward but has common traps.',
        tips: ['Photo traps: similar sounds (work/walk), homophones', 'Eliminate options that mention objects NOT in the photo', 'Focus on subject + action + location', 'Common patterns: someone is (verb)-ing, The (object) is (location)'] },
      { id: 'toeic_p2', number: '02', title: 'Part 2: Question-Response', skill: 'listening', difficulty: 'foundation', duration: '2 weeks',
        description: '25 questions. Hear a statement or question + 3 responses. Choose the most appropriate reply. Very fast pace.',
        tips: ['Wh- questions: who=person, what=thing/action, when=time, where=place', 'Watch for indirect answers: Q: "Is the meeting at 3?" A: "It\'s been rescheduled"', 'Don\'t be fooled by repeated words from the question', 'Tone of voice can indicate the correct answer'] },
      { id: 'toeic_p3', number: '03', title: 'Part 3: Conversations', skill: 'listening', difficulty: 'intermediate', duration: '2 weeks',
        description: '39 questions (13 conversations × 3 questions). Two or three speakers in workplace situations. Questions ask about: topic, purpose, next action, specific detail.',
        tips: ['Read questions AND answer choices before audio', 'Conversations follow a script: problem → discussion → solution', '"What will the man probably do next?" — answer is often near the end', 'Graphic questions: look at the visual while listening'] },
      { id: 'toeic_p4', number: '04', title: 'Part 4: Short Talks', skill: 'listening', difficulty: 'advanced', duration: '2 weeks',
        description: '30 questions (10 monologues × 3 questions). Announcements, voicemails, advertisements, news reports. Single speaker — predict topic from question before audio.',
        tips: ['Opening words reveal the text type: "Good morning, this is a message for..."', 'Graphic items: the key information is NEVER stated outright in the audio', 'Purpose questions: why is the speaker calling/announcing?', 'Practice with business podcasts and corporate announcement recordings'] },
      { id: 'toeic_p5', number: '05', title: 'Part 5: Incomplete Sentences', skill: 'reading', difficulty: 'foundation', duration: '3 weeks',
        description: '30 questions. Fill one blank per sentence with the grammatically correct option. Tests: verb tense, prepositions, conjunctions, vocabulary, word form.',
        tips: ['Word form: is the blank a noun, verb, adjective, or adverb?', 'Time yourself: no more than 30 seconds per question', 'Preposition questions: learn verb+preposition collocations', 'If unsure about grammar, read all 4 options in the sentence'] },
      { id: 'toeic_p6', number: '06', title: 'Part 6: Text Completion', skill: 'reading', difficulty: 'intermediate', duration: '2 weeks',
        description: '16 questions (4 texts × 4 blanks). Like Part 5 but within a full text — context matters more. One question type is "insert a sentence."',
        tips: ['Read the entire text once before filling any blank', 'Sentence insertion: check logical flow before AND after the blank', 'Discourse connectors matter: "In addition", "However", "Therefore"', 'The text type (email, notice, report) affects appropriate language register'] },
      { id: 'toeic_p7', number: '07', title: 'Part 7: Reading Comprehension', skill: 'reading', difficulty: 'advanced', duration: '4 weeks',
        description: '54 questions. Single passages (29 Q) + double/triple passages (25 Q). Business emails, advertisements, forms, articles, reviews. Most time-consuming section.',
        tips: ['Read question types first: NOT/TRUE questions require full reading; detail questions can be answered by scanning', 'Double passages: one question will connect information from BOTH texts', 'Time killer: don\'t spend more than 2 minutes per question', 'Intent questions: "Why did X send the email?" — look at the context'] },
      { id: 'toeic_bv', number: '08', title: 'Business vocabulary', skill: 'vocabulary', difficulty: 'intermediate', duration: '4 weeks',
        description: 'TOEIC vocabulary is domain-specific. Mastering these domains dramatically improves all section scores: HR, Finance, Marketing, Sales, Logistics, Manufacturing, Corporate Communications.',
        tips: ['HR: recruit, probation, incentive, appraisal, resignation', 'Finance: invoice, budget, forecast, revenue, expenditure', 'Marketing: campaign, target demographic, brand awareness, ROI', 'Logistics: shipment, inventory, consignment, freight, customs clearance'] },
      { id: 'toeic_dis', number: '09', title: 'Distractor awareness', skill: 'grammar', difficulty: 'advanced', duration: '2 weeks',
        description: 'TOEIC uses sophisticated distractors — wrong answers that sound almost right. Common patterns: homophones, partial matches, word association traps.',
        tips: ['Homophones: right/write, hear/here, sale/sail, there/their', 'Partial match: question mentions "office" — distractor mentions "officer"', 'Semantic trap: "The manager was fired" — distractor: "There was a fire"', 'Second-listen for corrections: "Oh, I mean next Tuesday, not Thursday"'] },
      { id: 'toeic_pace', number: '10', title: 'Pacing strategy', skill: 'grammar', difficulty: 'intermediate', duration: '1 week',
        description: '75 min Listening (~45 sec/question) + 75 min Reading (up to 2.5 min/passage question). You control your own pace for Reading only. Smart time allocation is essential.',
        tips: ['Part 5: 30 sec each max — if unsure, mark and move on', 'Part 6: 2 min per text', 'Part 7: prioritize — do shorter passages first, triple last', 'Set alarms: check the clock at Q141 (halfway through Part 7)'] },
    ],
  },
  DUOLINGO: {
    name: 'Duolingo', full_name: 'Duolingo English Test', scale: '10–160',
    passing: '120+ for US university admission',
    color: '#15803d', bg: '#f0fdf4',
    description: 'Online, at-home test. 1 hour total. AI-proctored via webcam. Results in 2 days. Accepted by 5,000+ institutions. Most affordable major English test (~$65 USD).',
    modules: [
      { id: 'det_rc', number: '01', title: 'Read and Complete', skill: 'reading', difficulty: 'foundation', duration: '1 week',
        description: 'Words with missing letters appear on screen — fill in the blanks to make real English words. Tests spelling, vocabulary breadth, word recognition speed.',
        tips: ['Time is very short — 1–2 seconds per item', 'Focus on word shape and common patterns (-tion, -ing, -ment)', 'Don\'t overthink — trust your instinct', 'Unusual words DO appear — broad vocabulary is essential'] },
      { id: 'det_rs', number: '02', title: 'Read and Select', skill: 'vocabulary', difficulty: 'foundation', duration: '1 week',
        description: 'Select all real English words from a list that includes non-words. Multiple correct answers per screen. Tests vocabulary range and word familiarity.',
        tips: ['Non-words often look plausible: "procilment", "hestrion"', 'Compound words count: "underestimate", "nevertheless"', 'When unsure, think: have you EVER seen this word in context?', 'Academic and literary words appear frequently'] },
      { id: 'det_lt', number: '03', title: 'Listen and Type', skill: 'listening', difficulty: 'intermediate', duration: '2 weeks',
        description: 'Hear a sentence, type it exactly. Scores accuracy of hearing AND spelling. Sentences range from simple to complex academic.',
        tips: ['Spelling matters — "recieve" vs "receive" will lose points', 'Punctuation is assessed — capitalize properly', 'Audio can be replayed once', 'If you miss a word, type your best guess — don\'t leave it blank'] },
      { id: 'det_ra', number: '04', title: 'Read Aloud', skill: 'speaking', difficulty: 'foundation', duration: '1 week',
        description: 'Read a sentence or short paragraph aloud. AI scores pronunciation, fluency, and prosody (natural rhythm and stress).',
        tips: ['Natural intonation is more valued than "perfect" accent', 'Stress content words: nouns, verbs, adjectives (not articles, prepositions)', 'Practice reading sentences at natural conversational pace', 'Rushing sounds robotic — AI can tell'] },
      { id: 'det_wap', number: '05', title: 'Write About the Photo', skill: 'writing', difficulty: 'foundation', duration: '1 week',
        description: 'See a photo for 1 minute, write 1 or more sentences describing it. Tests grammar, vocabulary, and ability to describe visual content in writing.',
        tips: ['Include: subject + action + setting', 'Use descriptive vocabulary: "A woman is carefully examining..."', 'Add details: time of day, visible objects, inferred context', 'Grammar accuracy is scored here — check before submitting'] },
      { id: 'det_sap', number: '06', title: 'Speak About the Photo', skill: 'speaking', difficulty: 'intermediate', duration: '1 week',
        description: 'See a photo for 20 seconds, speak for 30–90 seconds describing it. Similar to IELTS Speaking Part 2 but shorter and visual.',
        tips: ['Open with a strong overview: "This photo shows a busy urban street scene..."', 'Speculate about context: "It appears to be... which suggests..."', 'Fill all 90 seconds — don\'t go silent', 'Fillers hurt score: replace "um" with a slight pause'] },
      { id: 'det_lr', number: '07', title: 'Listen and Respond', skill: 'speaking', difficulty: 'advanced', duration: '2 weeks',
        description: 'Hear a question → record your answer for 30–90 seconds. Tests spontaneous speech production. Questions can be abstract or personal.',
        tips: ['Structure: position + reason + example + conclusion', 'You have 3 seconds to start — use that time to plan', 'Speak in complete sentences — avoid fragments', 'No penalty for short answers IF they are coherent and detailed'] },
      { id: 'det_iw', number: '08', title: 'Interactive Writing', skill: 'writing', difficulty: 'advanced', duration: '2 weeks',
        description: 'Read a discussion prompt → write 50–100 words in 5 minutes. Tests coherence, argumentation, and writing speed under pressure.',
        tips: ['Take a clear position in your first sentence', 'Develop ONE argument well rather than listing three weakly', 'Use connecting phrases: "This is significant because...", "For example..."', 'Leave 30 seconds to reread and fix errors'] },
      { id: 'det_format', number: '09', title: 'Test format & proctoring', skill: 'grammar', difficulty: 'foundation', duration: '1 week',
        description: 'DET is unique: AI-proctored at home via webcam + microphone. Understand the rules to avoid disqualification. Includes an unscored sample portion at the start.',
        tips: ['Room must be quiet, private, and well-lit', 'No headphones (built-in speakers OK), no additional screens', 'Webcam must be on throughout — looking away triggers a flag', 'The "interview" portion (last 10 min) is shared with institutions directly'] },
      { id: 'det_adaptive', number: '10', title: 'Adaptive difficulty', skill: 'grammar', difficulty: 'advanced', duration: '1 week',
        description: 'DET is computer-adaptive — correct answers trigger harder questions; wrong answers trigger easier ones. This means a perfect start matters enormously.',
        tips: ['Harder questions = more points — actively try your best on every item', 'Don\'t panic if questions seem very difficult — that\'s a good sign', 'No skipping or going back', 'The test auto-ends when it has enough data — it may be shorter than expected'] },
    ],
  },
  CAMBRIDGE: {
    name: 'Cambridge', full_name: 'Cambridge B2 First / C1 Advanced', scale: 'Grade A–U (40–90 score)',
    passing: 'B2 First: 160–179 (pass) | C1 Advanced: 180–210 (A)',
    color: '#6b21a8', bg: '#faf5ff',
    description: 'Certificate qualifications that never expire. Widely accepted in Europe and UK. Unlike IELTS/TOEFL, the certificate is permanent — not a one-time score.',
    modules: [
      { id: 'cam_r', number: '01', title: 'Reading & Use of English', skill: 'reading', difficulty: 'advanced', duration: '4 weeks',
        description: '7 parts, 75 minutes. Part 1: multiple choice cloze. Part 2: open cloze. Part 3: word formation. Part 4: key word transformation. Parts 5–7: reading comprehension.',
        tips: ['Word formation (Part 3): know all major affixes (un-, dis-, -ness, -ment)', 'Key word transformation (Part 4): 2–5 word limit, meaning must stay identical', 'Reading: skim for gist, then read questions carefully', 'Part 7 (multiple matching): scan for specific information quickly'] },
      { id: 'cam_w', number: '02', title: 'Writing', skill: 'writing', difficulty: 'advanced', duration: '4 weeks',
        description: '2 tasks, 80 minutes. Part 1: COMPULSORY essay. Part 2: choose from email/letter, report, review, article. Cambridge requires flexible register adaptation.',
        tips: ['Essay Part 1: always include both input points and add your own view', 'Reviews: describe AND evaluate, use vivid language', 'Register matching is explicitly tested — formal letter ≠ informal email', 'Word count: 140–190 words per task (C1: 220–260)'] },
      { id: 'cam_l', number: '03', title: 'Listening', skill: 'listening', difficulty: 'intermediate', duration: '3 weeks',
        description: '4 parts, ~40 minutes. Part 1: short extracts. Part 2: sentence completion. Part 3: multiple matching. Part 4: multiple choice. Speakers use a range of accents.',
        tips: ['Part 2 (sentence completion): answers are usually 1–3 words spoken directly', 'Part 3 (multiple matching): you hear 5 speakers, match to 8 options', 'Distractor speakers: a speaker might mention an option but NOT as their main point', 'Recordings play twice — take notes on first play, confirm on second'] },
      { id: 'cam_s', number: '04', title: 'Speaking', skill: 'speaking', difficulty: 'advanced', duration: '3 weeks',
        description: '4 parts with a partner, ~14 minutes. Part 1: interview. Part 2: individual long turn (compare photos). Part 3: collaborative task. Part 4: discussion.',
        tips: ['Part 2: compare AND speculate — "These photos both show... however..."', 'Part 3: invite your partner: "What do you think?", "Shall we move on?"', 'Assessed on: Grammar, Vocabulary, Discourse Management, Pronunciation, Interactive Communication', 'Don\'t dominate Part 3 — equal speaking time is expected'] },
      { id: 'cam_v', number: '05', title: 'Cambridge vocabulary depth', skill: 'vocabulary', difficulty: 'advanced', duration: '4 weeks',
        description: 'Cambridge tests vocabulary depth (nuance, collocation, register) more than breadth. C1 Advanced expects near-native word choice precision.',
        tips: ['Collocation is key: "make a decision" not "do a decision"', 'False friends for Indonesian speakers: actually ≠ currently', 'Phrasal verbs with multiple meanings: "take up", "bring up", "carry out"', 'Use English Vocabulary in Use C1–C2 (Cambridge Press) as your main resource'] },
      ...Array.from({length: 5}, (_, i) => ({
        id: `cam_x${i}`, number: `0${i+6}`, title: ['Word formation mastery', 'Key word transformation', 'Phrasal verbs & idioms', 'Collocations in depth', 'Exam technique & timing'][i],
        skill: ['grammar','grammar','vocabulary','vocabulary','grammar'][i] as Skill,
        difficulty: 'advanced' as const, duration: '2 weeks',
        description: ['Master all major affixes for word formation tasks', 'Transform sentences keeping exact meaning, 2–5 words', 'Essential phrasal verbs for C1 Advanced: 150 key items', 'Noun+verb+adjective collocations tested in Use of English', 'Full exam simulation with timing strategies per part'][i],
        tips: [['un-, dis-, mis-, re- + -ness, -ment, -tion, -ity, -al, -ous, -ive', 'Adjective→noun: happy→happiness, adjective→verb: broad→broaden'], ['Passive transformations are very common in Part 4', 'Reported speech, conditionals, comparatives — all tested'], ['Look up, look into, look after, look forward to — all different!', 'Get phrasal verb dictionaries or Quizlet IELTS/Cambridge packs'], ['Collocations: "heavy rain" (not "strong rain"), "make progress" (not "do progress")', 'Use a collocations dictionary: Oxford Collocations Dictionary'], ['Practice under timed conditions every week from month 2', 'Track which parts you lose most marks on — target those']][i],
      })),
    ],
  },
}
