import type { CEFRLevel } from '@/types'

export type GrammarCategory =
  | 'tenses'
  | 'conditionals'
  | 'passive'
  | 'modals'
  | 'articles'
  | 'clauses'
  | 'reported'
  | 'comparatives'
  | 'gerund_inf'
  | 'discourse'
  | 'sentence_types'

export const GRAMMAR_CATEGORIES: Record<GrammarCategory, string> = {
  tenses:         'Tenses',
  conditionals:   'Conditionals',
  passive:        'Passive Voice',
  modals:         'Modal Verbs',
  articles:       'Articles',
  clauses:        'Clauses',
  reported:       'Reported Speech',
  comparatives:   'Comparatives',
  gerund_inf:     'Gerund vs Infinitive',
  discourse:      'Discourse Markers',
  sentence_types: 'Sentence Types',
}

export interface GrammarEntry {
  id: string
  title: string
  level: CEFRLevel
  category: GrammarCategory
  formula?: string
  explanation: string
  rules: string[]
  examples: string[]
  mistakes: string[]
}

export const GRAMMAR_REFERENCE: GrammarEntry[] = [

  // ─── TENSES ────────────────────────────────────────────────

  {
    id: 'present_simple',
    title: 'Present Simple',
    level: 'A1',
    category: 'tenses',
    formula: 'Subject + base verb (+ -s/-es for he/she/it)',
    explanation: 'Used for habits, routines, facts, and permanent situations. The most fundamental tense — mastering it is essential before moving to others.',
    rules: [
      'Affirmative: I/you/we/they work · He/she/it works (add -s/-es)',
      'Negative: I don\'t work · She doesn\'t work (base form after doesn\'t/don\'t)',
      'Question: Do you work? · Does she work? (base form after do/does)',
      'Third person -es for verbs ending in -ch, -sh, -s, -x, -o: watches, pushes, misses, mixes, goes',
      'Frequency adverbs go before main verb: "I always eat breakfast" · "She never drinks coffee"',
    ],
    examples: [
      'I work at a hospital. She doesn\'t drive to work.',
      'Water boils at 100°C. (scientific fact)',
      'Does he speak French? — Yes, he does.',
      'I usually wake up at 7, but today I woke up at 9.',
    ],
    mistakes: [
      '❌ She work here. ✓ She works here.',
      '❌ He doesn\'t works. ✓ He doesn\'t work.',
      '❌ Do she likes coffee? ✓ Does she like coffee?',
    ],
  },

  {
    id: 'present_perfect',
    title: 'Present Perfect vs Past Simple',
    level: 'B1',
    category: 'tenses',
    formula: 'Present Perfect: Subject + have/has + past participle\nPast Simple: Subject + past form',
    explanation: 'The most commonly confused tense pair. Present perfect connects the past to the present (current relevance). Past simple describes a completed event with no connection to now.',
    rules: [
      'Present perfect: experience ("I have been to Japan"), recent events ("She has just left"), unfinished time ("I haven\'t eaten today")',
      'Past simple: specific past time ("I went in 2019"), completed story ("She left at 3pm yesterday")',
      'Trigger words for perfect: already, yet, just, ever, never, recently, since, for, so far',
      'Trigger words for simple: yesterday, last week, in 2020, ago, when, at that time',
      '"For" + duration with both tenses — but meaning changes: "I have lived here for 5 years" (still here) vs "I lived here for 5 years" (no longer here)',
    ],
    examples: [
      'I have visited Paris. (life experience — when doesn\'t matter)',
      'I visited Paris in 2019. (specific completed trip)',
      'She has just arrived. (very recent — still relevant)',
      'Have you ever tried sushi? — Yes, I tried it last year in Tokyo.',
    ],
    mistakes: [
      '❌ I have seen him yesterday. ✓ I saw him yesterday.',
      '❌ Did you ever visit Japan? ✓ Have you ever visited Japan?',
      '❌ She lived here since 2020. ✓ She has lived here since 2020.',
    ],
  },

  {
    id: 'past_continuous',
    title: 'Past Continuous vs Past Simple',
    level: 'B1',
    category: 'tenses',
    formula: 'Past Continuous: was/were + verb-ing\nPast Simple: past form',
    explanation: 'Past continuous provides the background scene; past simple provides the action that interrupts or completes the story. Together they create natural English narrative.',
    rules: [
      'Past continuous = ongoing action in progress at a past moment: "At 8pm, I was cooking."',
      'Past simple = completed action or interruption: "The phone rang."',
      'Combination: "I was reading when the power went out." (continuous interrupted by simple)',
      '"While" introduces the continuous background; "when" introduces the interrupting action',
      'Past continuous also describes two parallel ongoing actions: "While she was studying, he was cooking."',
    ],
    examples: [
      'I was walking to work when I saw an accident.',
      'While I was having lunch, my boss called me.',
      'At 9am yesterday, she was presenting to the board.',
      'It was raining and the wind was blowing when they finally arrived.',
    ],
    mistakes: [
      '❌ I was seeing him yesterday. ✓ I saw him yesterday. ("See" is stative — no continuous)',
      '❌ While I studied, he cooked. ✓ While I was studying, he was cooking.',
    ],
  },

  {
    id: 'future_forms',
    title: 'Future Forms',
    level: 'A2',
    category: 'tenses',
    formula: 'will / be going to / Present Continuous / Present Simple',
    explanation: 'English has several ways to talk about the future, each signalling a different kind of certainty, intention, or arrangement. Choosing the wrong form changes the speaker\'s meaning significantly.',
    rules: [
      '"Will": spontaneous decisions ("I\'ll have the pasta"), predictions ("It will rain"), promises ("I\'ll help you")',
      '"Be going to": plans already decided ("I\'m going to apply for the job"), predictions with evidence ("Look at those clouds — it\'s going to rain")',
      'Present continuous: fixed arrangements ("I\'m flying to Singapore on Friday")',
      'Present simple: timetabled/scheduled events ("The train leaves at 7")',
      '"Won\'t" (will not) = refusal or negative prediction',
    ],
    examples: [
      'A: What would you like? B: I\'ll have the soup. (spontaneous — will)',
      'I\'m going to quit my job next month. (planned decision — going to)',
      'We\'re having dinner with clients on Thursday. (arrangement — present continuous)',
      'The conference starts at 9am. (schedule — present simple)',
    ],
    mistakes: [
      '❌ I will have a meeting at 3 tomorrow. ✓ I\'m having / I have a meeting at 3 tomorrow.',
      '❌ It will rain — look at those clouds! ✓ It\'s going to rain. (evidence present = going to)',
    ],
  },

  // ─── CONDITIONALS ─────────────────────────────────────────

  {
    id: 'conditionals_all',
    title: 'All Conditional Types',
    level: 'B2',
    category: 'conditionals',
    formula: 'Type 0: If + present, present\nType 1: If + present, will\nType 2: If + past, would\nType 3: If + past perfect, would have\nMixed: If + past perfect, would',
    explanation: 'Conditionals express hypothetical situations. The type chosen signals the speaker\'s assessment of how real or likely the situation is.',
    rules: [
      'Type 0 (universal truth): "If you heat ice, it melts."',
      'Type 1 (real future possibility): "If it rains, I will stay home." — the condition is possible',
      'Type 2 (unreal present/future): "If I had more money, I would travel." — hypothetical',
      'Type 3 (unreal past): "If I had studied harder, I would have passed." — past regret',
      'Mixed: past unreal condition + present consequence: "If I had taken that job, I would be in London now."',
      '"Unless" = "if not": "Unless you hurry, you\'ll miss the train."',
      '"Provided that / As long as / On condition that" all introduce conditional clauses',
    ],
    examples: [
      'Type 1: If she applies early, she will get a good price.',
      'Type 2: If I were the president, I would invest in renewable energy.',
      'Type 3: If he had left earlier, he would have caught the flight.',
      'Mixed: If I had studied medicine, I would be a doctor now.',
    ],
    mistakes: [
      '❌ If I would have more time, I would travel. ✓ If I had more time, I would travel.',
      '❌ If she would have known, she would have helped. ✓ If she had known, she would have helped.',
      '❌ If I would be you, I would apply. ✓ If I were you, I would apply.',
    ],
  },

  // ─── PASSIVE VOICE ─────────────────────────────────────────

  {
    id: 'passive_all',
    title: 'Passive Voice — All Forms',
    level: 'B1',
    category: 'passive',
    formula: 'Subject + be (correct tense) + past participle (+ by agent)',
    explanation: 'The passive removes the focus from who does the action and places it on what is done. Essential in academic and formal writing where the agent is unknown, unimportant, or obvious.',
    rules: [
      'Present: "English is spoken worldwide." / "The report is being written."',
      'Past: "The bridge was built in 1890." / "It was being repaired when we arrived."',
      'Present perfect: "The results have been announced."',
      'Future: "The report will be published next week."',
      '"By + agent" only when the agent is important or surprising',
      'Impersonal passive for reporting: "It is believed that…", "It has been reported that…"',
      'Double object passive: "She is said to have discovered it."',
    ],
    examples: [
      'The Eiffel Tower was designed by Gustave Eiffel.',
      'English is taught in most schools worldwide. (agent obvious — no "by" needed)',
      'It is widely believed that climate change poses an existential risk.',
      'The decision has been made. (by whom = irrelevant)',
    ],
    mistakes: [
      '❌ The book was wrote by her. ✓ The book was written by her.',
      '❌ It is believed by scientists that... ✓ Scientists believe that... OR It is believed that...',
      '❌ The report written by the committee. ✓ The report was written by the committee.',
    ],
  },

  // ─── MODAL VERBS ──────────────────────────────────────────

  {
    id: 'modals',
    title: 'Modal Verbs',
    level: 'A2',
    category: 'modals',
    formula: 'Subject + modal + base verb (never + to / never + -s)',
    explanation: 'Modal verbs modify the main verb to express ability, permission, possibility, obligation, and advice. They never change form and are always followed by the base form of the main verb.',
    rules: [
      'can: ability ("I can swim"), permission ("Can I leave?"), possibility ("It can get cold here")',
      'could: past ability ("I could run fast"), polite request ("Could you help?"), possibility ("It could rain")',
      'will: prediction ("It will snow"), decision ("I\'ll have coffee"), promise ("I\'ll call you")',
      'would: hypothetical ("I would travel"), polite request ("Would you mind?")',
      'should: advice ("You should see a doctor"), mild obligation, expectation ("She should be here")',
      'must: strong obligation ("You must wear a seatbelt"), logical deduction ("She must be tired")',
      'may/might: permission ("May I come in?"), possibility ("It might rain")',
    ],
    examples: [
      'Could you pass the salt, please? (polite request)',
      'You should visit a doctor — that cough sounds serious. (advice)',
      'The package must be here by now — I sent it three days ago. (deduction)',
      'It might snow tonight according to the forecast. (possibility)',
    ],
    mistakes: [
      '❌ She can to swim. ✓ She can swim.',
      '❌ You should to rest. ✓ You should rest.',
      '❌ He musts leave now. ✓ He must leave now.',
    ],
  },

  // ─── ARTICLES ──────────────────────────────────────────────

  {
    id: 'articles',
    title: 'Articles: a, an, the, zero',
    level: 'A1',
    category: 'articles',
    formula: 'a/an: indefinite (first mention, one of many)\nthe: definite (specific, both parties know which)\nzero: generalisations, uncountable nouns',
    explanation: 'Articles signal whether you\'re talking about something specific or general. This is one of the most persistent error areas for speakers of languages without articles.',
    rules: [
      '"a" before consonant sounds: a book, a university (u = "you" sound), a European country',
      '"an" before vowel sounds: an apple, an hour (h is silent), an MBA',
      '"the" when both speaker and listener know which specific one: "Close the door." / "Pass me the salt."',
      '"the" for unique things: the sun, the moon, the internet, the government',
      'Zero article: generalisations ("Dogs are loyal"), uncountable nouns ("Water is essential"), most proper nouns',
      'Second mention uses "the": "I saw a dog. The dog was huge."',
    ],
    examples: [
      'I need an umbrella — it\'s going to rain.',
      'The president announced new policies yesterday. (specific, known president)',
      'Music has the power to change moods. (generalisation — no article)',
      'I\'m a teacher. I work at the local school.',
    ],
    mistakes: [
      '❌ She is teacher. ✓ She is a teacher.',
      '❌ The honesty is the best policy. ✓ Honesty is the best policy.',
      '❌ I live in the London. ✓ I live in London.',
      '❌ Can you pass me salt? ✓ Can you pass me the salt? / Can you pass me some salt?',
    ],
  },

  // ─── CLAUSES ─────────────────────────────────────────────

  {
    id: 'relative_clauses',
    title: 'Relative Clauses',
    level: 'B1',
    category: 'clauses',
    formula: 'Noun + who/which/that/whose/where + information',
    explanation: 'Relative clauses add information about a noun. They can either identify which noun is meant (defining) or add extra information about an already-identified noun (non-defining).',
    rules: [
      'Defining (no commas): essential to identify which noun — "The man who called me is my boss."',
      'Non-defining (with commas): adds extra info — "My boss, who called me, is very demanding."',
      'who/that = people · which/that = things · whose = possessive · where = places · when = time',
      '"That" CANNOT replace "which" or "who" in non-defining clauses',
      'In defining clauses, the relative pronoun can be omitted when it\'s the object: "The film [that] I saw was brilliant."',
    ],
    examples: [
      'The student who won the prize is from Brazil. (defining)',
      'Tokyo, which is Japan\'s capital, has a population of 13 million. (non-defining)',
      'The professor whose research I admire is speaking today.',
      'That\'s the city where I grew up.',
    ],
    mistakes: [
      '❌ The city where I was born it is beautiful. ✓ The city where I was born is beautiful.',
      '❌ My mother, that is a doctor, lives in London. ✓ My mother, who is a doctor, lives in London.',
      '❌ The report which I wrote it is on your desk. ✓ The report which I wrote is on your desk.',
    ],
  },

  {
    id: 'participle_clauses',
    title: 'Participial Clauses',
    level: 'B2',
    category: 'clauses',
    formula: 'Present: verb-ing + rest of clause\nPast: past participle + rest of clause\nPerfect: having + past participle + rest of clause',
    explanation: 'Participial clauses reduce two clauses into one compact structure. They\'re common in formal writing and signal high grammatical range in IELTS and academic contexts.',
    rules: [
      'Present participle: simultaneous action or reason — "Turning left, I saw the entrance."',
      'Past participle: passive meaning — "Surrounded by mountains, the town is peaceful."',
      'Perfect participle: prior action — "Having reviewed the data, she submitted the report."',
      'The subject of the participle clause must match the main subject (dangling participle = error)',
      'Negative: "Not knowing the answer, she stayed silent."',
    ],
    examples: [
      'Having finished the exam, students were free to leave.',
      'Written in simple language, the report was accessible to all readers.',
      'Sitting by the window, she watched the rain fall.',
      'Not having eaten since morning, he ordered a large meal.',
    ],
    mistakes: [
      '❌ Walking to work, the rain started. ✓ Walking to work, I got caught in the rain. (subject must match)',
      '❌ Having been finishing the report, she left. ✓ Having finished the report, she left.',
    ],
  },

  {
    id: 'adverbial_clauses',
    title: 'Adverbial Clauses',
    level: 'B1',
    category: 'clauses',
    formula: 'Subordinating conjunction + subject + verb + (,) + main clause',
    explanation: 'Adverbial clauses modify the main verb, providing information about time, reason, condition, contrast, purpose, or result. They give sentences complexity and make arguments more nuanced.',
    rules: [
      'Time: when, while, as, before, after, until, as soon as — "Call me when you arrive."',
      'Reason: because, since, as, given that — "Since she arrived early, she got the best seat."',
      'Contrast: although, though, even though, while, whereas — "Although it was expensive, she bought it."',
      'Condition: if, unless, provided that, as long as — "I\'ll help unless I\'m busy."',
      'Purpose: so that, in order to — "She studied hard so that she could pass the exam."',
      'When the adverbial clause comes first, use a comma before the main clause',
    ],
    examples: [
      'Although the project was delayed, the team delivered excellent results.',
      'Since the meeting was cancelled, we have extra time to prepare.',
      'She practices every day so that she can reach Band 8.',
      'Unless you book in advance, you won\'t get a seat.',
    ],
    mistakes: [
      '❌ Although she tried hard, but she failed. ✓ Although she tried hard, she failed.',
      '❌ Because of she was late. ✓ Because she was late... OR Due to her lateness...',
    ],
  },

  // ─── REPORTED SPEECH ──────────────────────────────────────

  {
    id: 'reported_speech',
    title: 'Reported Speech',
    level: 'B1',
    category: 'reported',
    formula: 'say/tell + (that) + backshifted clause\nask + if/whether + backshifted clause (no inversion)',
    explanation: 'Reported speech relays what someone said without using their exact words. Tenses backshift, pronouns change, and time/place expressions update.',
    rules: [
      'Present simple → past simple: "I work here" → She said she worked there.',
      'Past simple → past perfect: "I went" → He said he had gone.',
      'Will → would, can → could, may → might, must → had to',
      '"say" = no indirect object: "She said (that) she was tired."',
      '"tell" = requires indirect object: "She told me (that) she was tired."',
      'Time changes: now→then, today→that day, tomorrow→the next day, yesterday→the previous day',
      'Reported questions use normal word order (no inversion): "Are you ready?" → He asked if she was ready.',
    ],
    examples: [
      '"I am leaving." → She said she was leaving.',
      '"Did you finish?" → He asked whether I had finished.',
      '"Don\'t be late!" → The manager told us not to be late.',
      '"I will call you tomorrow." → She said she would call me the next day.',
    ],
    mistakes: [
      '❌ She said me she was tired. ✓ She told me she was tired.',
      '❌ He asked where did I live. ✓ He asked where I lived.',
      '❌ She said she will come. ✓ She said she would come.',
    ],
  },

  // ─── COMPARATIVES ─────────────────────────────────────────

  {
    id: 'comparatives',
    title: 'Comparatives & Superlatives',
    level: 'A2',
    category: 'comparatives',
    formula: 'Short adjectives: -er than / the -est\nLong adjectives: more/less + adj + than / the most/least',
    explanation: 'Comparatives compare two things; superlatives compare one thing against all others in a group. Intensifiers like "much", "far", "slightly" and "a bit" modify the degree of comparison.',
    rules: [
      'One syllable: tall→taller/tallest; big→bigger/biggest (double consonant)',
      'Two syllable -y: happy→happier/happiest',
      'Two+ syllables: more expensive, most interesting',
      'Irregular: good→better/best · bad→worse/worst · far→further/furthest',
      'Intensifiers: "much/far bigger", "slightly taller", "a little more expensive"',
      'Equal comparison: "as + adjective + as" — "She is as tall as her brother."',
      '"The more X, the more Y" pattern: "The more you practise, the better you become."',
    ],
    examples: [
      'This route is much faster than the motorway.',
      'Tokyo is one of the most expensive cities in the world.',
      'The new model is slightly more efficient but far more expensive.',
      'The harder you work, the better your results will be.',
    ],
    mistakes: [
      '❌ She is more taller than me. ✓ She is taller than me.',
      '❌ This is the most best. ✓ This is the best.',
      '❌ He is more good at tennis. ✓ He is better at tennis.',
    ],
  },

  // ─── GERUND vs INFINITIVE ─────────────────────────────────

  {
    id: 'gerund_infinitive',
    title: 'Gerund vs Infinitive',
    level: 'B1',
    category: 'gerund_inf',
    formula: 'Gerund: verb + -ing (acts as a noun)\nInfinitive: to + base verb',
    explanation: 'Choosing gerund or infinitive after certain verbs changes both grammar and sometimes meaning. This is one of the most consistent sources of errors for learners at B1-B2 level.',
    rules: [
      'Verbs followed by gerund: enjoy, avoid, finish, consider, suggest, deny, recommend, practise, keep, mind',
      'Verbs followed by infinitive: want, hope, plan, decide, agree, refuse, manage, fail, offer, promise',
      'Verbs followed by both (same meaning): like, love, hate, begin, start, prefer',
      'Verbs followed by both (DIFFERENT meaning): remember, forget, try, stop, regret',
      '"Remember doing" = recall a past action; "remember to do" = not forget a future action',
      'After prepositions, always use gerund: "interested in learning", "good at speaking", "instead of studying"',
    ],
    examples: [
      'I enjoy reading academic papers. (enjoy + gerund)',
      'She decided to apply for the scholarship. (decide + infinitive)',
      'I remember meeting him at the conference. (recall a past event)',
      'Remember to submit your assignment by Friday. (don\'t forget a future task)',
    ],
    mistakes: [
      '❌ I enjoy to read. ✓ I enjoy reading.',
      '❌ She suggested to go earlier. ✓ She suggested going earlier.',
      '❌ He is interested in to learn. ✓ He is interested in learning.',
    ],
  },

  // ─── DISCOURSE MARKERS ────────────────────────────────────

  {
    id: 'discourse_markers',
    title: 'Discourse Markers & Cohesive Devices',
    level: 'B1',
    category: 'discourse',
    formula: '[Connector], + sentence OR sentence + [connector] + sentence',
    explanation: 'Discourse markers create logical connections between ideas. They are graded explicitly in IELTS Writing (Coherence & Cohesion criterion) and are essential for academic and professional writing at B1+.',
    rules: [
      'Addition: furthermore, moreover, in addition, additionally, besides',
      'Contrast: however, nevertheless, on the other hand, in contrast, that said, nonetheless',
      'Cause: because, since, as, due to + noun, owing to + noun, as a result of',
      'Effect: therefore, consequently, hence, thus, as a result, this means that',
      'Illustration: for example, for instance, such as, to illustrate, a case in point is',
      'Concession: although, despite (+ noun/-ing), even though, while, whereas',
      'Reference: this, these, such, it, they — use pronouns to avoid repetition',
    ],
    examples: [
      'The economy grew rapidly. However, inequality also increased significantly.',
      'Due to rising costs, many companies have moved manufacturing overseas.',
      'This approach has several advantages. Furthermore, it is cost-effective.',
      'Despite the challenges, the project was completed on time.',
    ],
    mistakes: [
      '❌ Although she tried hard, but she failed. ✓ Although she tried hard, she failed.',
      '❌ Despite she worked hard... ✓ Despite working hard... / Despite her hard work...',
      '❌ Furthermore but there is another issue. ✓ Furthermore, there is another issue.',
    ],
  },

  // ─── INVERSION ────────────────────────────────────────────

  {
    id: 'inversion',
    title: 'Inversion & Emphasis',
    level: 'B2',
    category: 'sentence_types',
    formula: 'Negative/limiting adverb + auxiliary + subject + main verb',
    explanation: 'Inversion places the auxiliary before the subject after certain negative or limiting adverbs. It\'s used for emphasis and formal effect — a single well-placed inversion in an essay instantly signals C1 grammatical range.',
    rules: [
      'After: Never, Rarely, Seldom, Hardly, Barely, No sooner, Little, Not only, Scarcely',
      'Structure: Never + have/has/had + subject + past participle',
      '"Not only did he pass, but he also achieved the highest score in the class."',
      '"So + adjective + be + subject": "So serious was the situation that the CEO resigned."',
      '"Only + prepositional phrase + auxiliary + subject": "Only in retrospect did I understand."',
    ],
    examples: [
      'Never before has the world faced such a complex environmental crisis.',
      'Rarely do students achieve such consistently high results.',
      'Not only is she brilliant, but she is also incredibly hardworking.',
      'Hardly had I arrived when the meeting was cancelled.',
    ],
    mistakes: [
      '❌ Never she has been late. ✓ Never has she been late.',
      '❌ Rarely they miss a deadline. ✓ Rarely do they miss a deadline.',
    ],
  },

]
