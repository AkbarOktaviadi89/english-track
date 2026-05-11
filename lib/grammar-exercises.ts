export type ExerciseType = 'fill' | 'choose' | 'correct'

export interface Exercise {
  id: string
  type: ExerciseType
  question: string      // use ___ for fill-in gaps
  options?: string[]    // for 'choose' type (4 options)
  answer: string        // exact correct answer
  explanation: string   // why it's correct
}

export const GRAMMAR_EXERCISES: Record<string, Exercise[]> = {

  // ─── Present Simple ──────────────────────────────────────────
  present_simple: [
    {
      id: 'ps_1', type: 'fill',
      question: 'She ___ (work) at a hospital in the city centre.',
      answer: 'works',
      explanation: 'Third person singular (she) needs -s: works.',
    },
    {
      id: 'ps_2', type: 'choose',
      question: 'Which sentence is grammatically correct?',
      options: ['He don\'t like coffee.', 'He doesn\'t likes coffee.', 'He doesn\'t like coffee.', 'He not like coffee.'],
      answer: 'He doesn\'t like coffee.',
      explanation: 'Negative: subject + doesn\'t + base verb (no -s after doesn\'t).',
    },
    {
      id: 'ps_3', type: 'correct',
      question: 'Find and correct the error: "Do she speak French?"',
      answer: 'Does she speak French?',
      explanation: '"Does" is used for he/she/it questions, not "Do".',
    },
    {
      id: 'ps_4', type: 'fill',
      question: 'Water ___ (boil) at 100 degrees Celsius.',
      answer: 'boils',
      explanation: 'Scientific facts use present simple. Third person (water = it) takes -s.',
    },
    {
      id: 'ps_5', type: 'choose',
      question: 'Complete: "I ___ always ___ breakfast before work."',
      options: ['do / eat', 'am / eating', 'always / eat', 'have / eaten'],
      answer: 'do / eat',
      explanation: 'Present simple + frequency adverb: subject + always + base verb. (Or simply: "I always eat...")',
    },
  ],

  // ─── Present Perfect vs Past Simple ─────────────────────────
  present_perfect: [
    {
      id: 'pp_1', type: 'choose',
      question: '"I ___ Paris in 2019." Which is correct?',
      options: ['have visited', 'visited', 'was visiting', 'had visited'],
      answer: 'visited',
      explanation: '"In 2019" is a specific past time → past simple. Present perfect cannot be used with a finished time marker.',
    },
    {
      id: 'pp_2', type: 'correct',
      question: 'Correct the error: "I have seen him yesterday."',
      answer: 'I saw him yesterday.',
      explanation: '"Yesterday" is a finished past time → past simple. Present perfect cannot be used with "yesterday".',
    },
    {
      id: 'pp_3', type: 'fill',
      question: 'She ___ (live) in Tokyo since 2018. She still lives there.',
      answer: 'has lived',
      explanation: '"Since 2018" + still ongoing → present perfect. "Has lived" bridges past to present.',
    },
    {
      id: 'pp_4', type: 'choose',
      question: '"Have you ever ___ sushi?"',
      options: ['try', 'tried', 'trying', 'tries'],
      answer: 'tried',
      explanation: 'Present perfect uses past participle (tried). "Have you ever + past participle" = life experience.',
    },
    {
      id: 'pp_5', type: 'choose',
      question: 'Which sentence talks about a CURRENT situation?',
      options: [
        'I lived here for 10 years.',
        'I have lived here for 10 years.',
        'I was living here for 10 years.',
        'I had lived here for 10 years.',
      ],
      answer: 'I have lived here for 10 years.',
      explanation: 'Present perfect (have lived) = started in past, still true now. Past simple (lived) = finished, I no longer live here.',
    },
  ],

  // ─── Past Continuous vs Past Simple ─────────────────────────
  past_continuous: [
    {
      id: 'pc_1', type: 'fill',
      question: 'I ___ (watch) TV when the phone rang.',
      answer: 'was watching',
      explanation: 'Past continuous (was watching) = background action interrupted by past simple (rang).',
    },
    {
      id: 'pc_2', type: 'choose',
      question: '"While she ___ a shower, someone knocked at the door."',
      options: ['took', 'was taking', 'has taken', 'takes'],
      answer: 'was taking',
      explanation: '"While" introduces the ongoing background action → past continuous.',
    },
    {
      id: 'pc_3', type: 'correct',
      question: 'Correct: "I was seeing him at the party last night."',
      answer: 'I saw him at the party last night.',
      explanation: '"See" (in the sense of noticing/meeting) is a stative verb — it does not take continuous form.',
    },
    {
      id: 'pc_4', type: 'fill',
      question: 'At 9pm yesterday, they ___ (have) dinner with friends.',
      answer: 'were having',
      explanation: '"At 9pm yesterday" asks what was in progress at that moment → past continuous.',
    },
    {
      id: 'pc_5', type: 'choose',
      question: 'Which sentence correctly uses both past tenses?',
      options: [
        'She cooked when I was arriving.',
        'She was cooking when I arrived.',
        'She was cooking when I was arriving.',
        'She cooked when I arrived.',
      ],
      answer: 'She was cooking when I arrived.',
      explanation: 'Background action (cooking) = past continuous. Interrupting event (I arrived) = past simple.',
    },
  ],

  // ─── Future Forms ────────────────────────────────────────────
  future_forms: [
    {
      id: 'ff_1', type: 'choose',
      question: 'You look at dark clouds and say: "It ___ rain."',
      options: ['will', 'is going to', 'is raining', 'rains'],
      answer: 'is going to',
      explanation: 'Evidence visible right now → "be going to" for predictions. "Will" is for general predictions without present evidence.',
    },
    {
      id: 'ff_2', type: 'fill',
      question: 'A: "What would you like?" B: "I ___ have the pasta, please."',
      answer: 'will',
      explanation: 'Spontaneous decision made at the moment of speaking → "will".',
    },
    {
      id: 'ff_3', type: 'correct',
      question: 'Correct: "I will have a meeting at 3pm tomorrow." (arranged plan)',
      answer: "I'm having / I have a meeting at 3pm tomorrow.",
      explanation: 'Fixed arrangements use present continuous or present simple, not "will".',
    },
    {
      id: 'ff_4', type: 'choose',
      question: '"The conference ___ on Monday at 9am." (official schedule)',
      options: ['will start', 'is going to start', 'starts', 'is starting'],
      answer: 'starts',
      explanation: 'Timetabled/scheduled events use present simple for future.',
    },
    {
      id: 'ff_5', type: 'fill',
      question: 'I ___ (go) to study medicine next year. I applied last month.',
      answer: 'am going to',
      explanation: 'Already decided plan (applied last month) → "be going to", not "will".',
    },
  ],

  // ─── All Conditionals ────────────────────────────────────────
  conditionals_all: [
    {
      id: 'cond_1', type: 'fill',
      question: 'If it ___ (rain) tomorrow, I will stay home. (Type 1)',
      answer: 'rains',
      explanation: 'Type 1: If + present simple, will + base. The "if" clause uses present simple, never "will".',
    },
    {
      id: 'cond_2', type: 'correct',
      question: 'Correct this Type 2: "If I would have more time, I would travel."',
      answer: 'If I had more time, I would travel.',
      explanation: 'Type 2 "if" clause uses past simple, NOT "would". Never "if I would...".',
    },
    {
      id: 'cond_3', type: 'choose',
      question: '"If she ___ the interview, she would have got the job." (Type 3)',
      options: ['prepared for', 'had prepared for', 'prepares for', 'would prepare for'],
      answer: 'had prepared for',
      explanation: 'Type 3: If + past perfect, would have + past participle. Unreal past situation.',
    },
    {
      id: 'cond_4', type: 'fill',
      question: 'If I ___ (study) medicine, I would be a doctor now. (Mixed conditional)',
      answer: 'had studied',
      explanation: 'Mixed conditional: past condition (had studied) + present consequence (would be now).',
    },
    {
      id: 'cond_5', type: 'choose',
      question: '"___ you work harder, you will achieve better results." (Type 1)',
      options: ['If', 'Unless', 'Provided that', 'All of the above'],
      answer: 'All of the above',
      explanation: '"If", "unless" (= if not), and "provided that" can all introduce Type 1 conditions.',
    },
  ],

  // ─── Passive Voice ───────────────────────────────────────────
  passive_all: [
    {
      id: 'pass_1', type: 'fill',
      question: 'The Eiffel Tower ___ (design) by Gustave Eiffel in 1889.',
      answer: 'was designed',
      explanation: 'Past passive: was/were + past participle. Subject (Tower) receives the action.',
    },
    {
      id: 'pass_2', type: 'correct',
      question: 'Correct: "The book was wrote by a famous author."',
      answer: 'The book was written by a famous author.',
      explanation: '"Write" is irregular: write → wrote → written. Passive uses the past participle (written).',
    },
    {
      id: 'pass_3', type: 'choose',
      question: 'Formal/impersonal way to say "People believe the economy will improve":',
      options: [
        'The economy believed to improve.',
        'It is believed that the economy will improve.',
        'People are believed the economy will improve.',
        'The economy is believed improving.',
      ],
      answer: 'It is believed that the economy will improve.',
      explanation: 'Impersonal reporting passive: "It is believed/thought/said/reported + that-clause".',
    },
    {
      id: 'pass_4', type: 'fill',
      question: 'The results ___ (announce) next week at the ceremony.',
      answer: 'will be announced',
      explanation: 'Future passive: will be + past participle.',
    },
    {
      id: 'pass_5', type: 'choose',
      question: 'When should you include "by + agent" in a passive sentence?',
      options: [
        'Always',
        'Never',
        'When the agent is obvious',
        'When the agent is important or surprising',
      ],
      answer: 'When the agent is important or surprising',
      explanation: 'Omit "by + agent" when it\'s obvious or unimportant. Include it when the identity of the agent adds meaning.',
    },
  ],

  // ─── Modal Verbs ─────────────────────────────────────────────
  modals: [
    {
      id: 'mod_1', type: 'correct',
      question: 'Correct: "She can to swim very well."',
      answer: 'She can swim very well.',
      explanation: 'Modal verbs (can, should, must, will…) are always followed by the base verb without "to".',
    },
    {
      id: 'mod_2', type: 'choose',
      question: '"You ___ see a doctor — that cough sounds serious."',
      options: ['must', 'should', 'might', 'can'],
      answer: 'should',
      explanation: '"Should" = advice/recommendation. "Must" = strong obligation. "Should" is more appropriate for personal advice.',
    },
    {
      id: 'mod_3', type: 'fill',
      question: 'The package ___ be here by now — I sent it three days ago.',
      answer: 'must',
      explanation: '"Must" for logical deduction: strong certainty based on evidence.',
    },
    {
      id: 'mod_4', type: 'choose',
      question: '"___ you pass the salt, please?" Which is most polite?',
      options: ['Can', 'Could', 'Will', 'Must'],
      answer: 'Could',
      explanation: '"Could you…?" is more polite than "Can you…?" because it uses a more tentative form.',
    },
    {
      id: 'mod_5', type: 'choose',
      question: '"It ___ rain later — there are some dark clouds." (possibility, not certain)',
      options: ['must', 'will', 'might', 'should'],
      answer: 'might',
      explanation: '"Might" expresses uncertainty (~30–50% chance). "Will" is too certain; "must" means logical deduction.',
    },
  ],

  // ─── Articles ────────────────────────────────────────────────
  articles: [
    {
      id: 'art_1', type: 'fill',
      question: 'She is ___ engineer. She works at ___ Toyota factory.',
      answer: 'an / the',
      explanation: '"An engineer" = any engineer (indefinite). "The Toyota factory" = specific, known factory (definite).',
    },
    {
      id: 'art_2', type: 'correct',
      question: 'Correct: "I live in the London and work in the city."',
      answer: 'I live in London and work in the city.',
      explanation: 'Most city/country names have no article. "The city" is fine (specific, known context).',
    },
    {
      id: 'art_3', type: 'choose',
      question: '"___ honesty is the best policy." (general truth)',
      options: ['A', 'An', 'The', 'no article'],
      answer: 'no article',
      explanation: 'Generalisations with abstract nouns take no article. Honesty (in general) has no "the".',
    },
    {
      id: 'art_4', type: 'fill',
      question: 'I saw ___ dog this morning. ___ dog was wearing a red collar.',
      answer: 'a / The',
      explanation: 'First mention = "a dog" (new information). Second mention = "The dog" (both speaker and listener now know which one).',
    },
    {
      id: 'art_5', type: 'choose',
      question: '"She plays ___ piano very well."',
      options: ['a', 'an', 'the', 'no article'],
      answer: 'the',
      explanation: 'Musical instruments use "the": play the piano, the guitar, the violin.',
    },
  ],

  // ─── Relative Clauses ────────────────────────────────────────
  relative_clauses: [
    {
      id: 'rel_1', type: 'fill',
      question: 'The student ___ won the prize is from Brazil.',
      answer: 'who',
      explanation: '"Who" = for people in defining relative clauses.',
    },
    {
      id: 'rel_2', type: 'correct',
      question: 'Correct: "My mother, that is a doctor, lives in London."',
      answer: 'My mother, who is a doctor, lives in London.',
      explanation: '"That" cannot be used in non-defining relative clauses (those with commas). Use "who" for people.',
    },
    {
      id: 'rel_3', type: 'choose',
      question: '"That\'s the city ___ I grew up."',
      options: ['who', 'which', 'where', 'whose'],
      answer: 'where',
      explanation: '"Where" = for places in relative clauses.',
    },
    {
      id: 'rel_4', type: 'fill',
      question: 'Tokyo, ___ is Japan\'s capital, has a population of over 13 million.',
      answer: 'which',
      explanation: 'Non-defining clause (with commas) about a thing → "which", not "that".',
    },
    {
      id: 'rel_5', type: 'correct',
      question: 'Correct: "The report which I wrote it is on your desk."',
      answer: 'The report which I wrote is on your desk.',
      explanation: 'Remove the pronoun "it" — it is already represented by "which" in the relative clause.',
    },
  ],

  // ─── Participial Clauses ─────────────────────────────────────
  participle_clauses: [
    {
      id: 'part_1', type: 'choose',
      question: '"___ the exam, students were free to leave."',
      options: ['Finishing', 'Having finished', 'Finished', 'To finish'],
      answer: 'Having finished',
      explanation: 'Perfect participle (having + past participle) = action completed before the main verb.',
    },
    {
      id: 'part_2', type: 'correct',
      question: 'Fix the dangling participle: "Walking to work, the rain started to fall."',
      answer: 'Walking to work, I was caught in the rain.',
      explanation: 'The subject of the participial clause must match the main clause. The rain was not walking!',
    },
    {
      id: 'part_3', type: 'fill',
      question: '___ in 1889, the Eiffel Tower has become a global symbol of France.',
      answer: 'Built',
      explanation: 'Past participle (Built) = passive meaning: the tower was built. Correct subject: Eiffel Tower.',
    },
    {
      id: 'part_4', type: 'choose',
      question: '"___ the answer, she remained silent."',
      options: ['Not knowing', 'Not known', 'Having not known', 'Without knowing'],
      answer: 'Not knowing',
      explanation: 'Negative participial clause: "Not + verb-ing" = because she did not know.',
    },
    {
      id: 'part_5', type: 'choose',
      question: 'Which sentence uses a participial clause correctly?',
      options: [
        'Arriving late, the exam had already started.',
        'Arriving late, she missed the introduction.',
        'Having arrived late, the exam was over.',
        'She arriving late, the teacher was angry.',
      ],
      answer: 'Arriving late, she missed the introduction.',
      explanation: 'The subject (she) must be the one doing the action (arriving late). Options A and C have dangling participles.',
    },
  ],

  // ─── Adverbial Clauses ───────────────────────────────────────
  adverbial_clauses: [
    {
      id: 'adv_1', type: 'correct',
      question: 'Correct: "Although she tried hard, but she failed."',
      answer: 'Although she tried hard, she failed.',
      explanation: '"Although" and "but" cannot be used together — they both signal contrast. Use one or the other.',
    },
    {
      id: 'adv_2', type: 'fill',
      question: '___ you book early, you will get a better price. (condition)',
      answer: 'If / Provided that / As long as',
      explanation: '"If", "provided that", and "as long as" all introduce conditional adverbial clauses.',
    },
    {
      id: 'adv_3', type: 'choose',
      question: '"___ the project was challenging, the team completed it on time."',
      options: ['Because', 'Although', 'So that', 'Unless'],
      answer: 'Although',
      explanation: '"Although" introduces a contrast: the challenge is unexpected given the successful completion.',
    },
    {
      id: 'adv_4', type: 'correct',
      question: 'Correct: "Despite she worked hard, she did not get promoted."',
      answer: 'Despite working hard, she did not get promoted.',
      explanation: '"Despite" must be followed by a noun or gerund (-ing), NOT by "she" or a full clause. Use "although" for a full clause.',
    },
    {
      id: 'adv_5', type: 'choose',
      question: '"She studied hard ___ she could pass the exam."',
      options: ['although', 'because', 'so that', 'unless'],
      answer: 'so that',
      explanation: '"So that" introduces a purpose clause — the reason for the action.',
    },
  ],

  // ─── Reported Speech ─────────────────────────────────────────
  reported_speech: [
    {
      id: 'rep_1', type: 'fill',
      question: 'Direct: "I am tired." → She said she ___ tired.',
      answer: 'was',
      explanation: 'Backshifting: am → was. Present simple shifts to past simple in reported speech.',
    },
    {
      id: 'rep_2', type: 'correct',
      question: 'Correct: "He asked where did I live."',
      answer: 'He asked where I lived.',
      explanation: 'Reported questions use normal word order (no auxiliary inversion) and backshifted tense.',
    },
    {
      id: 'rep_3', type: 'fill',
      question: 'Direct: "I will call you tomorrow." → She said she ___ call me the next day.',
      answer: 'would',
      explanation: '"Will" backshifts to "would" in reported speech. "Tomorrow" → "the next day".',
    },
    {
      id: 'rep_4', type: 'choose',
      question: '"She ___ me that she was leaving early."',
      options: ['said', 'told', 'spoke', 'talked'],
      answer: 'told',
      explanation: '"Tell" requires an indirect object (me, him, her, us): "told me". "Said" does not: "said that".',
    },
    {
      id: 'rep_5', type: 'choose',
      question: 'Reported question: "Are you coming?" → He asked ___',
      options: [
        'that I was coming.',
        'if I was coming.',
        'if was I coming.',
        'whether I am coming.',
      ],
      answer: 'if I was coming.',
      explanation: 'Yes/No questions use "if" or "whether" + normal word order + backshifted tense.',
    },
  ],

  // ─── Comparatives & Superlatives ─────────────────────────────
  comparatives: [
    {
      id: 'comp_1', type: 'correct',
      question: 'Correct: "This is the most best solution we have."',
      answer: 'This is the best solution we have.',
      explanation: '"Best" is already a superlative (good → better → best). Never say "most best".',
    },
    {
      id: 'comp_2', type: 'fill',
      question: 'London is ___ expensive ___ Paris, but both are world-class cities.',
      answer: 'more / than',
      explanation: '"Expensive" (3 syllables) → use "more expensive than" for comparison.',
    },
    {
      id: 'comp_3', type: 'choose',
      question: '"The ___ you practise, the ___ you will become."',
      options: ['more / better', 'most / best', 'much / well', 'bigger / good'],
      answer: 'more / better',
      explanation: '"The more X, the more Y" pattern uses comparative forms.',
    },
    {
      id: 'comp_4', type: 'fill',
      question: 'She is not ___ tall ___ her brother. (equal comparison)',
      answer: 'as / as',
      explanation: 'Equal comparison: "as + adjective + as". Not as tall as = they are different heights.',
    },
    {
      id: 'comp_5', type: 'choose',
      question: '"This route is ___ faster than driving." (big difference)',
      options: ['a little', 'slightly', 'much', 'as'],
      answer: 'much',
      explanation: '"Much faster" = big difference. "Slightly faster" = small difference. "A bit faster" = very small.',
    },
  ],

  // ─── Gerund vs Infinitive ─────────────────────────────────────
  gerund_infinitive: [
    {
      id: 'ger_1', type: 'correct',
      question: 'Correct: "I enjoy to read novels in the evenings."',
      answer: 'I enjoy reading novels in the evenings.',
      explanation: '"Enjoy" is always followed by a gerund (-ing), never an infinitive.',
    },
    {
      id: 'ger_2', type: 'fill',
      question: 'She suggested ___ (go) to the restaurant on the corner.',
      answer: 'going',
      explanation: '"Suggest" + gerund: "suggested going". Never "suggested to go".',
    },
    {
      id: 'ger_3', type: 'choose',
      question: '"I remember ___ the keys on the table." (I recall doing this)',
      options: ['to put', 'putting', 'put', 'to putting'],
      answer: 'putting',
      explanation: '"Remember + gerund" = recall a past action. "Remember + infinitive" = don\'t forget a future task.',
    },
    {
      id: 'ger_4', type: 'fill',
      question: 'He decided ___ (apply) for the scholarship.',
      answer: 'to apply',
      explanation: '"Decide" is followed by an infinitive (to + base verb): "decided to apply".',
    },
    {
      id: 'ger_5', type: 'correct',
      question: 'Correct: "She is interested in to learn photography."',
      answer: 'She is interested in learning photography.',
      explanation: 'After prepositions (in, on, at, about, for…), always use a gerund (-ing), not infinitive.',
    },
  ],

  // ─── Discourse Markers ────────────────────────────────────────
  discourse_markers: [
    {
      id: 'disc_1', type: 'choose',
      question: '"The policy has benefits. ___, it also has significant drawbacks."',
      options: ['Furthermore', 'However', 'Therefore', 'In addition'],
      answer: 'However',
      explanation: '"However" introduces a contrasting idea. The sentence moves from positive (benefits) to negative (drawbacks).',
    },
    {
      id: 'disc_2', type: 'correct',
      question: 'Correct: "Although she tried hard, but she succeeded."',
      answer: 'Although she tried hard, she succeeded. / She tried hard, but she succeeded.',
      explanation: '"Although" and "but" both signal contrast — use only one. They cannot appear together.',
    },
    {
      id: 'disc_3', type: 'fill',
      question: 'Rising sea levels are a major concern. ___, many coastal cities face flooding risks.',
      answer: 'As a result / Consequently / Therefore',
      explanation: 'These consequence markers (as a result, consequently, therefore) link cause to effect.',
    },
    {
      id: 'disc_4', type: 'correct',
      question: 'Correct: "Despite she worked hard, she did not get promoted."',
      answer: 'Despite working hard, she did not get promoted.',
      explanation: '"Despite" + noun or gerund. "Despite + clause" is wrong. Use "although" for a full clause.',
    },
    {
      id: 'disc_5', type: 'choose',
      question: '"Smoking causes cancer. ___, it leads to heart disease." (adding equally important point)',
      options: ['However', 'Therefore', 'Moreover', 'Despite'],
      answer: 'Moreover',
      explanation: '"Moreover" and "furthermore" add a new point of equal or greater importance.',
    },
  ],

  // ─── Inversion ───────────────────────────────────────────────
  inversion: [
    {
      id: 'inv_1', type: 'correct',
      question: 'Correct: "Never she has been late for work."',
      answer: 'Never has she been late for work.',
      explanation: 'After "Never" at the start, invert auxiliary + subject: Never + has + she.',
    },
    {
      id: 'inv_2', type: 'fill',
      question: 'Not only ___ he pass the exam, but he also achieved the top score.',
      answer: 'did',
      explanation: '"Not only + did + subject + base verb": "Not only did he pass..."',
    },
    {
      id: 'inv_3', type: 'choose',
      question: '"Rarely ___ such dedication in a student."',
      options: ['I see', 'do I see', 'I have seen', 'have I seen'],
      answer: 'do I see',
      explanation: '"Rarely" triggers inversion: Rarely + do/does/did + subject + verb.',
    },
    {
      id: 'inv_4', type: 'correct',
      question: 'Correct: "Hardly she had arrived when the trouble began."',
      answer: 'Hardly had she arrived when the trouble began.',
      explanation: '"Hardly + had + subject + past participle + when": Hardly had she arrived...',
    },
    {
      id: 'inv_5', type: 'fill',
      question: 'So serious ___ the situation that the CEO was called in immediately.',
      answer: 'was',
      explanation: '"So + adjective + was + subject": So serious was the situation... (formal emphasis)',
    },
  ],

}
