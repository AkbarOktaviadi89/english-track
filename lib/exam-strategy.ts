export type IELTSSection = 'reading' | 'writing' | 'listening' | 'speaking'

export interface StrategyTip {
  title: string
  body: string
  type: 'timing' | 'approach' | 'trap' | 'band' | 'checklist'
}

export interface StrategyCard {
  id: string
  section: IELTSSection
  title: string
  subtitle: string
  icon: string
  overview: string
  format: string[]         // bullet points describing the test format
  tips: StrategyTip[]
}

export const STRATEGY_CARDS: StrategyCard[] = [

  // ─── Reading ──────────────────────────────────────────────────

  {
    id: 'reading_overview',
    section: 'reading',
    title: 'Reading Overview',
    subtitle: '60 minutes · 3 passages · 40 questions',
    icon: '📖',
    overview: 'The IELTS Academic Reading test has three increasingly difficult passages totalling 2,000–2,750 words. All 40 questions must be answered in 60 minutes — there is no extra transfer time.',
    format: [
      'Passage 1: ~650 words — general factual topic (e.g. history, science)',
      'Passage 2: ~750 words — more analytical or discursive',
      'Passage 3: ~900 words — most complex; often contains abstract argument',
      'Question types: T/F/NG, YNNG, Matching Headings, Matching Features, Matching Sentence Endings, Multiple Choice, Sentence/Summary/Note Completion, Short Answer',
      'Each correct answer = 1 mark. No penalty for wrong answers.',
    ],
    tips: [
      {
        title: 'The 18-Minute Rule',
        type: 'timing',
        body: 'Allocate roughly 18 minutes per passage: 3 min skim + 12 min answer + 3 min review. Passage 3 is harder — start it with at least 20 minutes remaining if you can. Never spend more than 2 minutes on a single question; skip and return.',
      },
      {
        title: 'Skim First, Then Read Strategically',
        type: 'approach',
        body: 'Before reading: (1) Read the title and first sentence of each paragraph (≈90 seconds). (2) Read the questions — not the options yet. (3) Underline keywords in each question. Now return to the text and locate only the relevant sections. You will never have time to read every word carefully.',
      },
      {
        title: 'T/F/NG: The Most Common Mistake',
        type: 'trap',
        body: 'NOT GIVEN means the text neither confirms nor denies the statement — it simply does not address it. FALSE means the text directly contradicts the statement. Students often mark NG as F or F as NG. Ask yourself: "Does the text say anything about this?" If no → NG. If yes and it contradicts → F.',
      },
      {
        title: 'Matching Headings: Work Backwards',
        type: 'approach',
        body: 'Start with the easiest paragraph — usually the one with the most distinctive topic. Read its first and last sentence only. Eliminate headings that are too broad, too narrow, or only mentioned in passing. If stuck, move on and use the process of elimination at the end.',
      },
      {
        title: 'Sentence / Summary Completion',
        type: 'approach',
        body: 'The text is paraphrased in the question — your job is to spot the paraphrase. Circle the key noun in the question ("the main reason why…"), then scan for its synonym in the text. Copy words EXACTLY from the text (do not change word forms). Respect the word limit — "no more than three words" means 1, 2, or 3 words only.',
      },
      {
        title: 'Band 8–9 Strategy',
        type: 'band',
        body: 'To reach Band 8+ you need 36+/40. The margin is extremely thin. The most common errors at Band 7–7.5 are: (1) confusing F and NG, (2) writing too many words in completion tasks, (3) not reading the question carefully enough (e.g. "in the first paragraph" — many students ignore such constraints). Slow down by 10 seconds per question at this level.',
      },
    ],
  },

  {
    id: 'reading_question_types',
    section: 'reading',
    title: 'Question Type Strategies',
    subtitle: 'How to approach each question type',
    icon: '🎯',
    overview: 'Different question types require very different strategies. Using the wrong approach wastes time and loses marks.',
    format: [
      'T/F/NG and Y/N/NG: factual or opinion-based, answers in order',
      'Matching Headings: paragraph-level, not in order',
      'Matching Features / Information: scanning task, not in order',
      'Multiple Choice: paraphrase recognition',
      'Completion tasks: exact word(s) from text, in order',
    ],
    tips: [
      {
        title: 'Are Answers in Order?',
        type: 'approach',
        body: 'YES (answers follow text order): T/F/NG, Y/N/NG, Sentence Completion, Summary Completion, Note Completion, Short Answer. NO (not necessarily in order): Matching Headings, Matching Features, Matching Sentence Endings, Multiple Choice. Knowing this tells you whether to scan linearly or search globally.',
      },
      {
        title: 'Multiple Choice: Eliminate First',
        type: 'approach',
        body: 'Read the question stem (not the options). Find the relevant section in the text. Read that section carefully. Then look at the options — eliminate the clearly wrong ones first. Common traps: (a) an option uses words from the text but changes the meaning, (b) an option is true but answers a different question.',
      },
      {
        title: 'Matching Features: Use a Grid',
        type: 'approach',
        body: 'Write the list of features (e.g. researchers A–E) vertically. Scan the text for each name/concept. When you find it, note which statements match. Some features may match more than one statement; some statements may not be used. Work from the statements you are most confident about first.',
      },
      {
        title: 'Short Answer Questions',
        type: 'trap',
        body: '"Write NO MORE THAN TWO WORDS" — if your answer is three words, it is wrong even if the meaning is right. Check: articles ("the", "a") count as words. Numbers written as digits ("6") count as one word. A hyphenated compound ("well-known") usually counts as one word.',
      },
    ],
  },

  // ─── Writing ──────────────────────────────────────────────────

  {
    id: 'writing_overview',
    section: 'writing',
    title: 'Writing Overview',
    subtitle: '60 minutes · Task 1 (20 min) + Task 2 (40 min)',
    icon: '✍️',
    overview: 'Task 2 is worth double the marks of Task 1. Always prioritise Task 2. Both tasks are assessed on four criteria: Task Achievement/Response, Coherence & Cohesion, Lexical Resource, and Grammatical Range & Accuracy.',
    format: [
      'Task 1: Describe a graph, chart, table, diagram, map, or process. Minimum 150 words.',
      'Task 2: Write a discursive essay responding to a point of view, argument, or problem. Minimum 250 words.',
      'Task 1 is worth 33% of your Writing score; Task 2 is worth 67%.',
      'Each task is scored Band 1–9 on 4 criteria; scores are averaged.',
      'You may write in pen or pencil. Underlining is fine. Cross out unwanted text neatly.',
    ],
    tips: [
      {
        title: 'Time Allocation',
        type: 'timing',
        body: 'Spend 20 minutes on Task 1 and 40 minutes on Task 2. Do Task 2 first if you tend to run out of time — it is worth more marks. If you do Task 1 first: 2 min plan + 15 min write + 3 min check. Task 2: 5 min plan + 30 min write + 5 min check.',
      },
      {
        title: 'Task 1: The 3-Sentence Overview',
        type: 'approach',
        body: 'Every Task 1 response needs an Overview — 2–3 sentences identifying the main trend(s) without specific data. This is the single most important paragraph for Task Achievement. Write it second (after the Introduction), before Body paragraphs. Examiner tip: most Band 6 scripts lack a clear overview.',
      },
      {
        title: 'Task 2: Plan Before You Write',
        type: 'approach',
        body: '5 minutes of planning saves more time than it costs. Write: (1) your thesis in one sentence, (2) 2 main points with one supporting example each, (3) a counter-argument (for discussion essays). A planned essay scores higher on Coherence & Cohesion because the logical structure is clear from the first paragraph.',
      },
      {
        title: 'The Band 7 Vocabulary Trap',
        type: 'trap',
        body: 'Using rare words incorrectly drops your Lexical Resource score below Band 6. Examiners value accurate use of a range of vocabulary over ambitious but incorrect vocabulary. If you are not 100% sure how to use a word, use a simpler alternative. "Numerous" is fine; "myriad" used incorrectly is a penalty.',
      },
      {
        title: 'Coherence & Cohesion: Connectors vs. Paragraphing',
        type: 'band',
        body: 'Most Band 6 students overuse linking words ("Furthermore", "Moreover", "Additionally" three times in one paragraph). Band 7+ is achieved by clear paragraphing with one central idea per paragraph, smooth pronoun reference, and appropriate connectors — not by counting connectors. Use a discourse marker at most once per paragraph.',
      },
      {
        title: 'Word Count: Quantity vs. Quality',
        type: 'trap',
        body: 'There is no upper word limit. However, longer essays do not automatically score higher. A well-argued 280-word Task 2 scores higher than a rambling 350-word essay with repetition. Below 250 words: automatic penalty on Task Achievement. Aim for 265–290 words for Task 2.',
      },
      {
        title: 'Final Check Checklist',
        type: 'checklist',
        body: 'Task 1: ✓ Overview paragraph present ✓ Data selected (not all data) ✓ Comparisons made ✓ No opinion or future speculation. Task 2: ✓ Both sides addressed if discussion essay ✓ Clear thesis ✓ Each body paragraph has one main idea + support ✓ Conclusion restates thesis differently ✓ No contractions (don\'t → do not) ✓ No bullet points.',
      },
    ],
  },

  {
    id: 'writing_task1',
    section: 'writing',
    title: 'Task 1: Data Description',
    subtitle: 'Graphs, charts, tables, diagrams, maps, processes',
    icon: '📊',
    overview: 'Task 1 requires accurate description and comparison of data, not analysis or opinion. The key skill is selecting and grouping significant information.',
    format: [
      'Bar chart / Line graph: trends over time or comparisons',
      'Pie chart: proportions (always compare largest and smallest)',
      'Table: multi-variable data (identify the most striking figures)',
      'Process diagram: steps in a sequence (passive voice, sequencing language)',
      'Map: changes between two periods (compare old vs new)',
      'Mixed charts: two chart types — describe separately then link',
    ],
    tips: [
      {
        title: 'The 4-Paragraph Structure',
        type: 'approach',
        body: 'Para 1 (Introduction): Paraphrase the question — do NOT copy it. Change: "The graph shows" → "The bar chart illustrates" or "The line graph depicts". Para 2 (Overview): 2–3 sentences on the biggest trends — no data yet. Para 3–4 (Body): Specific data with comparisons, grouped logically. Avoid listing every data point.',
      },
      {
        title: 'Language for Trends',
        type: 'approach',
        body: 'Rise: increased, grew, rose, climbed, surged, jumped (sharply, dramatically, steadily, gradually, slightly). Fall: decreased, declined, dropped, fell, plummeted. Stable: remained stable/constant, levelled off, plateaued. Peak: reached a peak/high of, peaked at. Trough: fell to a low of, bottomed out at.',
      },
      {
        title: 'Process / Map: Key Differences',
        type: 'approach',
        body: 'Process diagram: Use passive voice ("the material is heated", "water is filtered"). Use sequencing adverbs (first, then, subsequently, finally, at this stage). Do NOT write an overview with data — write an overview describing the number of stages. Map: Compare past vs present systematically. Use "where X once stood, there is now Y".',
      },
    ],
  },

  {
    id: 'writing_task2',
    section: 'writing',
    title: 'Task 2: Essay Types',
    subtitle: 'Opinion, Discussion, Problem-Solution, Two-Part',
    icon: '📝',
    overview: 'Misidentifying the essay type is one of the most common reasons for low Task Achievement scores. Each type has a different required structure.',
    format: [
      'Opinion essay: "To what extent do you agree or disagree?" — state a clear position',
      'Discussion essay: "Discuss both views and give your opinion" — two sides + your view',
      'Problem-Solution: "What are the causes? What solutions can you suggest?"',
      'Advantages-Disadvantages: "Do the advantages outweigh the disadvantages?"',
      'Two-Part Question: "Why is this? What can be done?" — answer both parts equally',
    ],
    tips: [
      {
        title: 'Opinion Essay Structure',
        type: 'approach',
        body: 'Intro: Paraphrase + clear thesis ("I strongly agree that…" or "While X, I believe Y…"). Body 1: Main reason supporting your view + example. Body 2: Second reason + example. (Optional: acknowledge counter-argument in one sentence and refute it.) Conclusion: Restate thesis + final thought. Do NOT present "both sides equally" — this loses Task Achievement marks.',
      },
      {
        title: 'Discussion Essay: The Common Error',
        type: 'trap',
        body: '"Discuss both views" means you MUST present both views with roughly equal weight AND give your opinion. Giving only one view = Band 5 Task Achievement. Giving both views without your opinion = Band 5. Your opinion can appear in the introduction AND conclusion, or be woven into one of the body paragraphs.',
      },
      {
        title: 'Problem-Solution: Cause-Effect Chain',
        type: 'approach',
        body: 'Structure: (1) Causes paragraph — two causes with explanation. (2) Solutions paragraph — one solution per cause, showing how it addresses the cause. Do not offer generic solutions ("governments should take action") — be specific ("increasing public transport subsidies would reduce car dependency").',
      },
      {
        title: 'Two-Part Question: Word Count Balance',
        type: 'trap',
        body: 'If the question has two parts ("Why is this happening? What can individuals do?"), write roughly equal body paragraphs for each. A common error is spending 200 words on Part 1 and only 50 words on Part 2 — this drops Task Achievement below Band 6.',
      },
    ],
  },

  // ─── Listening ────────────────────────────────────────────────

  {
    id: 'listening_overview',
    section: 'listening',
    title: 'Listening Overview',
    subtitle: '30 minutes audio + 10 minutes transfer · 4 sections · 40 questions',
    icon: '🎧',
    overview: 'The IELTS Listening test plays each recording once only. You have 10 minutes at the end to transfer answers to the answer sheet. Sections 1–2 use everyday social/transactional language; Sections 3–4 use academic/training contexts.',
    format: [
      'Section 1: Conversation between two speakers — everyday social context (e.g. booking, enquiry)',
      'Section 2: Monologue — everyday social context (e.g. tour guide, announcement)',
      'Section 3: Conversation between 2–4 speakers — educational or training context',
      'Section 4: Academic monologue — lecture or talk',
      'Question types: form/note/table/flow chart completion, multiple choice, matching, map/plan labelling',
    ],
    tips: [
      {
        title: 'Use the Reading Time',
        type: 'approach',
        body: 'Before each section, you are given time to read the questions. Use every second of it. Underline keywords and predict the type of answer (a name? a price? a place? a reason?). Knowing what you are listening for before the audio starts is the single most effective listening strategy.',
      },
      {
        title: 'Write While You Listen',
        type: 'approach',
        body: 'Do not wait until the speaker finishes — write your answer as you hear it. If you miss an answer, leave a blank and move forward immediately. Never spend mental energy on a missed answer while the recording continues — you will miss the next answer too.',
      },
      {
        title: 'Distractors: The Change of Mind',
        type: 'trap',
        body: 'IELTS deliberately uses distractors — a speaker mentions an answer and then corrects themselves ("The meeting is on Monday… actually, it\'s Tuesday"). Always write the FINAL answer given. If you hear a correction, cross out your previous answer immediately.',
      },
      {
        title: 'Spelling and Word Forms',
        type: 'trap',
        body: 'Spelling errors cost marks even if the meaning is clear. In completion tasks, the word must match exactly: correct spelling, correct word form, correct number (singular/plural). During transfer time, check: (1) all spellings, (2) singular vs plural, (3) that you have not exceeded the word limit.',
      },
      {
        title: 'Section 4: Lecture Strategy',
        type: 'approach',
        body: 'Section 4 has no break in the middle and is the most difficult. The speaker often uses signpost language: "I\'d like to begin with…", "Turning now to…", "In conclusion…". These tell you when a new answer is about to appear. Read ahead to the next 2–3 questions whenever the speaker pauses or transitions.',
      },
      {
        title: 'Transfer Time: 10 Minutes',
        type: 'timing',
        body: 'Use the full 10 minutes. Priority order: (1) Transfer all answers from your question paper. (2) Check spelling of every answer. (3) Check singular/plural. (4) Check word count in completion tasks. (5) Fill in any blanks with your best guess — there is no penalty for wrong answers.',
      },
    ],
  },

  // ─── Speaking ─────────────────────────────────────────────────

  {
    id: 'speaking_overview',
    section: 'speaking',
    title: 'Speaking Overview',
    subtitle: '11–14 minutes · 3 parts · Face-to-face with an examiner',
    icon: '🗣️',
    overview: 'Speaking is assessed by a trained examiner in a one-to-one interview. It is recorded. You are scored on Fluency & Coherence, Lexical Resource, Grammatical Range & Accuracy, and Pronunciation.',
    format: [
      'Part 1 (4–5 min): Familiar topics — introduce yourself, answer questions about everyday life',
      'Part 2 (3–4 min): Individual long turn — speak for 1–2 minutes from a cue card; 1 minute to prepare',
      'Part 3 (4–5 min): Discussion — abstract, complex follow-up questions on Part 2 topic',
    ],
    tips: [
      {
        title: 'Fluency Over Accuracy at Band 7+',
        type: 'band',
        body: 'At Band 7, examiners prioritise fluency and coherence over perfect grammar. A grammatical error that does not interrupt communication costs fewer marks than a long, uncomfortable pause. Speak continuously; self-correct briefly ("I mean…") but do not stop and restart entire sentences.',
      },
      {
        title: 'Part 1: Extend, Don\'t Just Answer',
        type: 'approach',
        body: 'Part 1 questions are simple but require developed answers. Formula: Answer + Reason + Example (ARE). "Do you enjoy cooking?" → "Yes, I really do [A]. I find it relaxing after a long day [R], and I\'ve recently started making Italian food from scratch — pasta especially [E]." Aim for 2–4 sentences per answer.',
      },
      {
        title: 'Part 2: Use the 1-Minute Preparation',
        type: 'timing',
        body: 'Do not start speaking immediately. Use all 60 seconds. Write 4–5 bullet points on the notepad: who, what, when, where, and how you felt. Plan your ending — many candidates run out of things to say at 90 seconds. Having a prepared conclusion ("What I remember most about this is…") keeps you speaking for the full 2 minutes.',
      },
      {
        title: 'Part 2: The 4-Bullet Structure',
        type: 'approach',
        body: 'The cue card tells you exactly what to cover. Address each bullet point in order. Each bullet = approximately 30 seconds. If the card says "describe a book you have read", cover: what the book was → when/where you read it → what it was about → why you would recommend it. Examiners notice if you ignore a bullet point.',
      },
      {
        title: 'Part 3: Argue, Don\'t Just Describe',
        type: 'approach',
        body: 'Part 3 tests your ability to discuss abstract ideas. Instead of describing ("Some people use public transport"), analyse and argue ("I think the shift towards public transport reflects broader changes in environmental attitudes, particularly among younger urban populations"). Use hedging language: "It could be argued that…", "I would suggest that…", "From my perspective…".',
      },
      {
        title: 'Pronunciation: What is Actually Assessed',
        type: 'band',
        body: 'You are NOT assessed on having a British or American accent. You ARE assessed on: intelligibility (can the examiner understand you?), consistent use of features (word stress, sentence stress, intonation), and phoneme accuracy. Common errors that cost marks: confusing /l/ and /r/, dropping word-final consonants, placing stress on the wrong syllable ("PROgress" vs "proGRESS").',
      },
      {
        title: 'Fillers vs. Pauses',
        type: 'trap',
        body: 'Using "um", "uh", "like" frequently signals lack of fluency. Instead, use thinking phrases that sound natural: "That\'s an interesting question…", "Let me think about that for a moment…", "It\'s hard to say, but I suppose…". These give you 2–3 seconds to think without hurting your fluency score.',
      },
    ],
  },

  // ─── Band Score Guide ─────────────────────────────────────────

  {
    id: 'band_guide',
    section: 'reading',
    title: 'Band Score Guide: Reading & Listening',
    subtitle: 'How raw scores convert to bands',
    icon: '📈',
    overview: 'Reading and Listening are each scored out of 40. The raw score is converted to a Band score. The conversion is not linear — gaining marks becomes harder at higher bands.',
    format: [
      'Band 9: 39–40 / 40',
      'Band 8.5: 37–38 / 40',
      'Band 8: 35–36 / 40',
      'Band 7.5: 33–34 / 40',
      'Band 7: 30–32 / 40',
      'Band 6.5: 27–29 / 40',
      'Band 6: 23–26 / 40',
      'Band 5.5: 19–22 / 40',
      'Band 5: 15–18 / 40',
    ],
    tips: [
      {
        title: 'The Band 6→7 Jump',
        type: 'band',
        body: 'Going from Band 6 to Band 7 in Reading requires getting 4–7 more questions correct. The most efficient way: (1) Eliminate careless errors — re-read your answer before moving on. (2) Master T/F/NG — most Band 6 candidates lose 3+ marks here. (3) Respect word limits in completion tasks — a correct answer with too many words scores 0.',
      },
      {
        title: 'The Band 7→8 Jump',
        type: 'band',
        body: 'From 30–32 to 35–36 correct: (1) You need 4–5 more right answers — almost always from the hardest questions in Passage 3. (2) Practice Matching Headings under time pressure — this is where Band 7 candidates most often drop marks at Passage 3 difficulty. (3) Work on inference questions — "What does the writer imply?".',
      },
      {
        title: 'Overall Band Score Calculation',
        type: 'approach',
        body: 'Your overall IELTS band is the average of your 4 section scores, rounded to the nearest half-band. Example: R7.5 + W6.5 + L7.5 + S7.0 = 28.5 ÷ 4 = 7.125 → rounds to 7.0. Implication: a very strong performance in one section cannot compensate for a very weak one. All four must be developed together.',
      },
    ],
  },

]
