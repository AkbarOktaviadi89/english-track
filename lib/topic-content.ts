export interface TopicExample {
  lines: string[]   // dialogue lines or a single sentence
  note?: string     // grammar/usage note
}

export interface QuizQuestion {
  q: string
  options: string[]
  answer: number    // 0-indexed correct answer
}

export interface TopicContent {
  explanation: string
  keyPoints: string[]
  examples: TopicExample[]
  tips: string[]
  quiz?: QuizQuestion[]
}

export const TOPIC_CONTENT: Record<string, TopicContent> = {

  // ─── A1 · Basic Communication ─────────────────────────────────

  a1_greet: {
    explanation: `Greetings are the starting point of every English conversation. English has both formal greetings (used with strangers, bosses, or in professional settings) and informal ones (used with friends and family). Knowing when to use each is just as important as knowing the words themselves.`,
    keyPoints: [
      '"Hello" works in any situation; "Hi" and "Hey" are informal only',
      '"How are you?" is a social ritual — the expected reply is "Fine, thanks" or "Good, thanks", not a real health update',
      'Meeting someone for the first time: "Nice to meet you" — seeing them again: "Nice to see you again"',
      'Goodbyes: "Bye / Goodbye" (neutral) · "See you later / See you soon" (casual) · "Take care" (warm)',
      'Time-based greetings: "Good morning" (before noon) · "Good afternoon" (noon–6 pm) · "Good evening" (after 6 pm)',
    ],
    examples: [
      {
        lines: ['A: Hi! I\'m Sara. What\'s your name?', 'B: Nice to meet you, Sara. I\'m David.'],
        note: '"I\'m" is more natural than "My name is" in casual conversation.',
      },
      {
        lines: ['A: Good morning, Mr. Lee. How are you?', 'B: Very well, thank you. And you?'],
        note: 'Formal setting — use full names or titles.',
      },
      {
        lines: ['A: Hey! Long time no see! How have you been?', 'B: I\'ve been great! You look good!'],
        note: '"Long time no see" = it has been a while since we last met.',
      },
      {
        lines: ['A: It was lovely meeting you. Take care!', 'B: You too! See you around!'],
      },
    ],
    tips: [
      'Practise greetings out loud every day — say them to a mirror until they feel automatic.',
      'Watch the first 2 minutes of any English TV show or film and notice which greetings are used and why.',
      'When you meet anyone today, try greeting them in English first, even if you switch language afterwards.',
    ],
    quiz: [
      {
        q: 'Your colleague says "How are you?" — which reply is most natural?',
        options: ['I am twenty-five years old.', 'Fine, thanks! How about you?', 'My name is Tom.', 'Yes, I do.'],
        answer: 1,
      },
      {
        q: 'You are meeting your professor for the first time. Which greeting is appropriate?',
        options: ['Hey! What\'s up?', 'Good morning, Professor. Nice to meet you.', 'Hi, how ya doing?', 'Wassup!'],
        answer: 1,
      },
    ],
  },

  a1_numbers: {
    explanation: `Numbers in English follow predictable patterns once you learn the base words. They appear constantly in daily life — telling the time, discussing prices, giving phone numbers, and talking about dates. Mastering numbers early frees up mental energy for everything else.`,
    keyPoints: [
      'Cardinal numbers (1, 2, 3…) answer "How many?" — Ordinal numbers (1st, 2nd, 3rd…) answer "Which position?"',
      'Teens: thirteen to nineteen — note the "-teen" suffix and stress on the second syllable (thirTEEN)',
      'Tens: twenty, thirty, forty (NOT fourty), fifty, sixty, seventy, eighty, ninety',
      'Dates: say the day as ordinal — "the fifth of March" or "March fifth"',
      'Time: "3:15" = "three fifteen" or "quarter past three"; "3:45" = "three forty-five" or "quarter to four"',
    ],
    examples: [
      {
        lines: ['A: What time does the train leave?', 'B: It leaves at half past seven — 7:30.'],
        note: '"Half past" = 30 minutes after the hour.',
      },
      {
        lines: ['A: When is your birthday?', 'B: It\'s on the twenty-third of August.'],
        note: 'Always use ordinal numbers for dates: 1st, 2nd, 3rd, 4th…',
      },
      {
        lines: ['A: How much is it?', 'B: It\'s nineteen ninety-nine — $19.99.'],
        note: 'Prices: say each part separately. "$1,250" = "one thousand two hundred and fifty dollars".',
      },
      {
        lines: ['A: What\'s your phone number?', 'B: It\'s 0812-3456-7890. Say each digit individually.'],
      },
    ],
    tips: [
      'Practise by reading prices, phone numbers, and dates out loud whenever you see them.',
      'Listen to English radio or podcasts that mention numbers (news, sports scores) and try to catch them.',
      'Write out your own phone number, birthday, and address in English — these are numbers you\'ll say constantly.',
    ],
    quiz: [
      {
        q: 'How do you say 3:45 in English?',
        options: ['Three and forty-five', 'Quarter to four', 'Forty-five past three', 'Three quarter'],
        answer: 1,
      },
      {
        q: 'Which spelling is correct?',
        options: ['Fourty', 'Forty', 'Fourtie', 'Fourtee'],
        answer: 1,
      },
    ],
  },

  a1_personal: {
    explanation: `Talking about yourself is usually the first real conversation you have in English. Questions about name, age, nationality, job, and family come up immediately when meeting new people. Having confident, natural answers ready makes a great first impression and opens the door to deeper conversation.`,
    keyPoints: [
      'Key questions to answer: What\'s your name? Where are you from? What do you do? How old are you? Are you married?',
      'Nationality vs country: "I\'m from Indonesia" (country) — "I\'m Indonesian" (nationality adjective)',
      'Job/occupation: "I\'m a teacher" (indefinite article before job) — NOT "I\'m teacher"',
      'Use "I work at/for [company]" and "I study at [school]" for more detail',
      'You can politely avoid questions: "I\'d rather not say" or simply redirect — "How about you?"',
    ],
    examples: [
      {
        lines: [
          'A: So, tell me about yourself.',
          'B: Sure! My name\'s Rina. I\'m from Jakarta, Indonesia. I\'m a graphic designer.',
        ],
        note: '"Tell me about yourself" is a common opener — practise a 3-sentence answer.',
      },
      {
        lines: ['A: What do you do?', 'B: I\'m a nurse. I work at the city hospital.'],
        note: 'Always use "a" or "an" before your job: a doctor, an engineer, a student.',
      },
      {
        lines: ['A: Are you married?', 'B: No, I\'m single. And you?'],
        note: 'Redirecting with "And you?" keeps the conversation going naturally.',
      },
    ],
    tips: [
      'Write a 5-sentence "personal profile" in English and memorise it — use it as your default self-introduction.',
      'Record yourself saying your introduction on your phone and listen back — does it sound natural?',
      'Look up the English adjective for your nationality if you don\'t know it (Indonesian, Thai, Vietnamese, etc.).',
    ],
    quiz: [
      {
        q: 'Which sentence is grammatically correct?',
        options: ['I\'m engineer.', 'I\'m a engineer.', 'I\'m an engineer.', 'I engineer.'],
        answer: 2,
      },
      {
        q: 'Someone asks "Where are you from?" — what is the best answer?',
        options: ['I am from 1995.', 'I\'m from Vietnam. I\'m Vietnamese.', 'I working in Hanoi.', 'Yes, I am.'],
        answer: 1,
      },
    ],
  },

  a1_questions: {
    explanation: `Question words (also called "Wh- words") are the building blocks of English conversation. They let you gather information, show interest, and keep dialogue flowing. At A1 level, mastering six core question words will cover the vast majority of everyday situations.`,
    keyPoints: [
      'Who = person · What = thing/action · Where = place · When = time · Why = reason · How = manner/degree',
      'Yes/No questions: move the auxiliary verb before the subject — "Are you…?" / "Do you…?" / "Can she…?"',
      '"How" combines with adjectives: How old? How much? How many? How long? How often? How far?',
      'Question word order: Question word + auxiliary + subject + main verb — "Where do you live?"',
      'Rising intonation for Yes/No questions; falling intonation for Wh- questions in standard English',
    ],
    examples: [
      {
        lines: ['A: What is your favourite food?', 'B: I love noodles — especially spicy ones.'],
        note: '"What" asks about things, ideas, or choices.',
      },
      {
        lines: ['A: Where do you study?', 'B: I study at the University of Gadjah Mada in Yogyakarta.'],
        note: '"Do you…?" is the standard Yes/No question with most verbs.',
      },
      {
        lines: ['A: How often do you exercise?', 'B: About three times a week.'],
        note: '"How often" asks about frequency — always, sometimes, rarely, never…',
      },
      {
        lines: ['A: Why are you learning English?', 'B: Because I want to study abroad next year.'],
        note: 'Answers to "why" usually start with "Because…" or "To + verb…".',
      },
    ],
    tips: [
      'Create 10 questions about your own life (where you live, what you eat, how you commute) and practise answering them.',
      'When you watch English videos, try to identify which question word is being used and why.',
      'Use the "question game" — take any topic and write one question for each of the 6 Wh- words.',
    ],
    quiz: [
      {
        q: 'Which question asks about a PLACE?',
        options: ['When does it start?', 'Who told you?', 'Where is the station?', 'Why did you go?'],
        answer: 2,
      },
      {
        q: 'Which is the correct question form?',
        options: ['You do where live?', 'Where do you live?', 'Where you do live?', 'Do where you live?'],
        answer: 1,
      },
    ],
  },

  a1_phonics: {
    explanation: `English pronunciation does not always match spelling — this surprises many learners. However, there are consistent patterns. Understanding the phonetic alphabet (IPA) and basic sound rules helps you pronounce new words correctly even before hearing them, and massively improves both speaking and listening comprehension.`,
    keyPoints: [
      'English has 44 sounds (phonemes) but only 26 letters — some letters make multiple sounds',
      'Short vowels: /æ/ (cat), /ɛ/ (bed), /ɪ/ (sit), /ɒ/ (hot), /ʌ/ (cup) — sharp, clipped sounds',
      'Long vowels: /eɪ/ (cake), /iː/ (feet), /aɪ/ (night), /əʊ/ (go), /juː/ (cute)',
      'Word stress is crucial — changing stress changes meaning: REcord (noun) vs reCORD (verb)',
      'The schwa /ə/ is the most common English sound — the "uh" in "about", "the", "sofa"',
    ],
    examples: [
      {
        lines: ['"GH" can be silent: "night", "right", "through"'],
        note: 'GH after a vowel digraph is almost always silent in modern English.',
      },
      {
        lines: ['"EA" makes different sounds: "eat" /iː/ vs "bread" /ɛ/ vs "great" /eɪ/'],
        note: 'Context and common words help — there\'s no single rule for every case.',
      },
      {
        lines: ['"The" sounds like /ðə/ before consonants and /ðiː/ before vowels'],
        note: '"The apple" = "thee apple" · "The book" = "thuh book".',
      },
      {
        lines: ['Minimal pairs: "ship" /ʃɪp/ vs "sheep" /ʃiːp/ — one sound, completely different meaning'],
        note: 'Minimal pair practice trains your ear to hear the difference.',
      },
    ],
    tips: [
      'Install a dictionary app that shows IPA transcriptions (like Cambridge Dictionary) — check pronunciation for every new word.',
      'Practise minimal pairs daily: ship/sheep, live/leave, bit/beat, full/fool.',
      'Record yourself reading a short paragraph and compare it to a native speaker recording of the same text.',
    ],
    quiz: [
      {
        q: 'The word "night" — the letters "gh" are…',
        options: ['Pronounced /g/', 'Pronounced /f/', 'Silent', 'Pronounced /h/'],
        answer: 2,
      },
      {
        q: 'Which word contains the schwa /ə/ sound?',
        options: ['cat', 'about', 'see', 'hot'],
        answer: 1,
      },
    ],
  },

  a1_colors: {
    explanation: `Colour, shape, and size vocabulary are among the most practical adjectives in English. They appear in shopping, describing objects, giving directions, and everyday small talk. In English, adjectives come BEFORE the noun — this is the opposite of many other languages and is one of the most common A1 mistakes.`,
    keyPoints: [
      'Adjective order in English: Opinion → Size → Shape → Colour → Origin → Material → Noun',
      'Common colours: red, orange, yellow, green, blue, purple, pink, brown, black, white, grey/gray',
      'Shades: light blue, dark green, bright red, pale yellow — add light/dark/bright/pale before colour',
      'Common shapes: square, circle/round, triangle, rectangle/rectangular, oval, star-shaped',
      'Size adjectives: big/large, small/little, tall, short, long, wide, narrow, thick, thin',
    ],
    examples: [
      {
        lines: ['I have a small red bag.'],
        note: 'Size (small) comes before colour (red) before noun (bag).',
      },
      {
        lines: ['She wore a beautiful long blue dress.'],
        note: 'Opinion (beautiful) → Size (long) → Colour (blue) → Noun (dress).',
      },
      {
        lines: ['A: What does the sign look like?', 'B: It\'s a large round yellow circle with black letters.'],
        note: 'Describing objects accurately is essential for giving directions and shopping.',
      },
      {
        lines: ['The table is rectangular and made of dark brown wood.'],
      },
    ],
    tips: [
      'Look around the room right now and describe 5 objects using at least 2 adjectives each.',
      'When shopping online in English, notice how products are described — this is excellent real-world practice.',
      'Play "20 questions" in English with a friend — use colour, shape, and size as clues.',
    ],
    quiz: [
      {
        q: 'Which sentence has the correct adjective order?',
        options: [
          'A red big car',
          'A big red car',
          'A car red big',
          'A big car red',
        ],
        answer: 1,
      },
      {
        q: '"Light blue" means…',
        options: ['Very bright blue', 'A softer, paler shade of blue', 'Dark navy blue', 'Glowing blue'],
        answer: 1,
      },
    ],
  },

  a1_family: {
    explanation: `Family vocabulary is one of the first things English learners need because it comes up in almost every social conversation. English is relatively simple here compared to many languages — it doesn't distinguish between maternal and paternal relatives in everyday speech, and the same words are used regardless of age or seniority.`,
    keyPoints: [
      'Immediate family: parents (mother/mom, father/dad), siblings (brother, sister), children (son, daughter)',
      'Extended family: grandparents, grandchildren, aunts, uncles, cousins, nieces, nephews',
      '"In-law" = family by marriage: mother-in-law, father-in-law, brother-in-law, sister-in-law',
      '"Step-" = family by remarriage: stepmother, stepfather, stepbrother, stepsister',
      'Half-brother/half-sister = share one parent; only child = no brothers or sisters',
    ],
    examples: [
      {
        lines: [
          'A: Do you have any siblings?',
          'B: Yes, I have one older brother and two younger sisters.',
        ],
        note: '"Sibling" is the gender-neutral word for brother or sister.',
      },
      {
        lines: ['My mother\'s sister is my aunt, and her children are my cousins.'],
        note: 'English uses the same word "cousin" for male and female cousins.',
      },
      {
        lines: [
          'A: Are you an only child?',
          'B: No, I have a half-brother. We share the same father.',
        ],
      },
      {
        lines: ['My grandparents have four grandchildren — my brother, my two cousins, and me.'],
      },
    ],
    tips: [
      'Draw your own family tree in English and label every person with their relationship to you.',
      'Describe a family member to a study partner without saying their name — they guess who it is.',
      'Watch a family-themed English sitcom (like Modern Family) and note how characters refer to each other.',
    ],
    quiz: [
      {
        q: 'What do you call your mother\'s sister?',
        options: ['Niece', 'Aunt', 'Cousin', 'Sister-in-law'],
        answer: 1,
      },
      {
        q: 'An "only child" means…',
        options: ['The eldest child', 'A child with no siblings', 'A child with one sibling', 'A single parent\'s child'],
        answer: 1,
      },
    ],
  },

  a1_food: {
    explanation: `Food vocabulary is immediately useful — ordering meals, shopping, describing preferences, and making plans all revolve around food. English has an enormous food vocabulary borrowed from many cultures, but a core set of ~100 words will handle the vast majority of daily situations. Expressing likes, dislikes, and dietary needs confidently is a key A1 communication goal.`,
    keyPoints: [
      'Likes: "I love…" / "I really like…" / "I enjoy…" — Dislikes: "I don\'t like…" / "I can\'t stand…"',
      'Dietary needs: vegetarian (no meat), vegan (no animal products), halal, gluten-free, allergic to…',
      'Ordering: "I\'d like…" / "Can I have…?" / "I\'ll have the…" — all polite and correct',
      'Meals: breakfast, brunch, lunch, dinner/supper — snack is a small meal between main ones',
      'Cooking methods: boiled, fried, grilled, baked, steamed, raw — essential for menus and recipes',
    ],
    examples: [
      {
        lines: [
          'A: What would you like to order?',
          'B: I\'d like the grilled chicken with rice, please. And a glass of water.',
        ],
        note: '"I\'d like" (I would like) is polite — more formal than "I want".',
      },
      {
        lines: [
          'A: Are you vegetarian?',
          'B: No, but I don\'t eat pork. Do you have any halal options?',
        ],
      },
      {
        lines: ['I love spicy food, but I can\'t stand olives — I find them too salty.'],
        note: '"Can\'t stand" = really dislike. Very common in spoken English.',
      },
      {
        lines: [
          'A: How do you like your eggs?',
          'B: Scrambled, please. With toast.',
        ],
        note: '"How do you like your…?" asks about preference, not an opinion.',
      },
    ],
    tips: [
      'Next time you look at a restaurant menu (even in your language), try to identify and name the dishes in English.',
      'Learn the 20 foods you eat most often in English — these will cover most of your daily needs.',
      'When watching cooking videos on YouTube, switch to English audio or subtitles.',
    ],
    quiz: [
      {
        q: 'Which is the most polite way to order food?',
        options: ['Give me the pasta.', 'I want pasta.', 'I\'d like the pasta, please.', 'Pasta for me.'],
        answer: 2,
      },
      {
        q: 'A "vegetarian" person does not eat…',
        options: ['Eggs', 'Milk', 'Fish', 'Meat'],
        answer: 3,
      },
    ],
  },

  a1_routines: {
    explanation: `Describing your daily routine is one of the most common A1 speaking tasks — in job interviews, language classes, and social conversations. Daily routine vocabulary combines present simple tense with time expressions and sequence words, making it perfect practice for multiple grammar points at once.`,
    keyPoints: [
      'Sequence words: first, then, after that, next, finally — connect routine steps logically',
      'Frequency adverbs: always (100%), usually/normally (80%), often (60%), sometimes (40%), rarely (20%), never (0%)',
      'Time expressions: in the morning, at noon, in the afternoon, in the evening, at night, at midnight',
      'Common routine verbs: wake up, get up, have a shower, get dressed, have breakfast, commute, work/study, have lunch, exercise, cook dinner, relax, go to bed',
      'Frequency adverbs go BEFORE the main verb but AFTER "be": "I usually walk" / "She is always late"',
    ],
    examples: [
      {
        lines: [
          'I usually wake up at six thirty. First, I have a shower, then I get dressed.',
          'After that, I have breakfast and check my phone.',
        ],
        note: 'Sequence words (first, then, after that) make routines easy to follow.',
      },
      {
        lines: [
          'A: Do you exercise?',
          'B: Yes, I go running three times a week, usually in the morning before work.',
        ],
      },
      {
        lines: ['I rarely cook — I normally order food or eat at the canteen near my office.'],
        note: '"Rarely" comes before the main verb "cook".',
      },
    ],
    tips: [
      'Write out your full daily routine in English — start simple (10 sentences) and add detail each week.',
      'Use a daily planner in English — write your schedule using the vocabulary from this topic.',
      'Describe your morning routine to a timer: try to speak for 60 seconds without stopping.',
    ],
    quiz: [
      {
        q: 'Which sentence uses the frequency adverb correctly?',
        options: [
          'I go always to the gym.',
          'Always I go to the gym.',
          'I always go to the gym.',
          'I go to always the gym.',
        ],
        answer: 2,
      },
      {
        q: 'What does "rarely" mean?',
        options: ['Always', 'Often', 'Almost never', 'Sometimes'],
        answer: 2,
      },
    ],
  },

  a1_verbs: {
    explanation: `The most common English verbs appear in almost every sentence you will ever say or write. At A1 level, a core set of 50 high-frequency verbs gives you the tools to express most basic ideas. Many of these are irregular in the past tense — learning their forms now pays dividends at every future level.`,
    keyPoints: [
      'Regular verbs: add -ed for past (walk → walked, work → worked, study → studied)',
      'Key irregular verbs: be (was/were), have (had), go (went), get (got), make (made), say (said), know (knew), think (thought)',
      'Modal verbs (no -s in third person): can, could, will, would, should, must, might',
      'Phrasal verbs from core verbs are very common: get up, wake up, turn on, put on, take off, look at, look for',
      'Collocations matter: "make a mistake" NOT "do a mistake" — "do homework" NOT "make homework"',
    ],
    examples: [
      {
        lines: ['I go to work by bus. She goes by train. They go on foot.'],
        note: 'Third person singular (he/she/it) always takes -s with regular verbs in present simple.',
      },
      {
        lines: ['I need to get up early, get dressed, and get to the office by 8.'],
        note: '"Get" is one of the most versatile verbs: get up, get dressed, get to (arrive at), get ready.',
      },
      {
        lines: [
          'Make: make a coffee, make a call, make a decision, make friends',
          'Do: do exercise, do the dishes, do homework, do a course',
        ],
        note: 'Make vs Do is a classic confusion — learn each as a fixed phrase.',
      },
    ],
    tips: [
      'Download a list of the 50 most common English verbs and learn 5 per day with example sentences.',
      'Focus on irregular past tense forms — create flashcards with base form on front, past on back.',
      'Practise "make vs do" collocations by listing 10 things you do in a day using only these two verbs.',
    ],
    quiz: [
      {
        q: 'Which is correct?',
        options: ['She make a mistake.', 'She maked a mistake.', 'She made a mistake.', 'She did a mistake.'],
        answer: 2,
      },
      {
        q: '"Do homework" or "make homework"?',
        options: ['Make homework', 'Do homework', 'Both are correct', 'Neither — use "complete homework"'],
        answer: 1,
      },
    ],
  },

  // ─── A1 · Foundation Grammar ──────────────────────────────────

  a1_present: {
    explanation: `The present simple is the most important tense to master first. It describes habits, routines, facts, and permanent situations. Unlike many languages, English requires a special form for the third person singular (he/she/it) — forgetting the -s is one of the most common A1 mistakes.`,
    keyPoints: [
      'Structure: Subject + base verb — "I work", "You live", "We eat"',
      'Third person singular (he/she/it): add -s or -es — "She works", "He watches", "It goes"',
      'Spelling rules: verbs ending in -ch, -sh, -s, -x, -o → add -es (watch→watches, do→does)',
      'Negatives: Subject + do/does + not + base verb — "I don\'t like", "She doesn\'t know"',
      'Questions: Do/Does + subject + base verb? — "Do you work?" / "Does he live here?"',
    ],
    examples: [
      { lines: ['I live in Jakarta. I work at a hospital. I start work at eight.'], note: 'Present simple for permanent situations and routines.' },
      { lines: ['She teaches English at a university. She doesn\'t teach on Fridays.'], note: '"Teaches" (not "teach") — third person singular always takes -s/-es.' },
      { lines: ['A: Do you drink coffee?', 'B: Yes, I do. I drink three cups a day.'], note: 'Short answers: "Yes, I do" / "No, I don\'t" — never "Yes, I drink."' },
      { lines: ['Water boils at 100 degrees Celsius. The sun rises in the east.'], note: 'Present simple for facts and scientific truths.' },
    ],
    tips: [
      'Write 10 sentences about your daily habits — every sentence must be correct present simple.',
      'Practise the third person -s by describing a friend\'s routine: "She gets up at 7, she has breakfast..."',
      'Do a quick self-check: every time you use "he/she/it" as subject, confirm the verb has -s.',
    ],
    quiz: [
      { q: 'Which sentence is grammatically correct?', options: ['She work at a bank.', 'She works at a bank.', 'She working at a bank.', 'She is work at a bank.'], answer: 1 },
      { q: 'How do you make "watch" negative with "he"?', options: ['He don\'t watches TV.', 'He doesn\'t watches TV.', 'He doesn\'t watch TV.', 'He not watch TV.'], answer: 2 },
    ],
  },

  a1_articles: {
    explanation: `Articles (a, an, the) are small but critical words. "A/an" is indefinite — any one of something. "The" is definite — a specific thing both speaker and listener know. Many Asian languages have no articles at all, making this one of the trickiest A1 challenges for those learners.`,
    keyPoints: [
      '"a" before consonant sounds: a book, a university (u sounds like "you"), a European',
      '"an" before vowel sounds: an apple, an hour (h is silent), an MBA',
      '"a/an" = first mention or one of many — "I saw a dog."',
      '"the" = specific, already mentioned, or unique — "The dog was huge."',
      'No article: plural generalisations ("Dogs are loyal") and uncountable nouns ("Water is essential")',
    ],
    examples: [
      { lines: ['I bought a book yesterday. The book was about history.'], note: 'First mention = "a book" → second mention = "the book".' },
      { lines: ['She is an engineer. She works at the Toyota factory.'], note: '"an engineer" — indefinite job. "the Toyota factory" — specific, known factory.' },
      { lines: ['The sun is a star. The moon orbits the Earth.'], note: 'Unique objects in context use "the" even without prior mention.' },
    ],
    tips: [
      'When you learn a new noun, always learn it with its article: "a table", "an umbrella" — make it a habit.',
      'Notice articles in everything you read in English — ask yourself why "a" or "the" is used here.',
      'Trick: if you can say "that specific one", use "the". If not, use "a/an" or nothing.',
    ],
    quiz: [
      { q: '"She is ___ honest person."', options: ['a', 'an', 'the', 'no article'], answer: 1 },
      { q: '"I have a cat and ___ dog. ___ cat is black."', options: ['a / The', 'a / A', 'the / A', 'the / The'], answer: 0 },
    ],
  },

  a1_plural: {
    explanation: `Making nouns plural in English follows mostly regular patterns, but enough irregular forms exist that they must be memorised. Errors with plurals are immediately noticeable. Getting these right early builds a strong grammatical foundation for every level above.`,
    keyPoints: [
      'Regular: add -s — book→books, chair→chairs, day→days',
      'Ends in -s, -sh, -ch, -x, -z: add -es — bus→buses, dish→dishes, watch→watches',
      'Ends in consonant + -y: change y→i, add -es — city→cities, baby→babies (but: day→days)',
      'Irregular (must memorise): man→men, woman→women, child→children, tooth→teeth, foot→feet, person→people',
      'Uncountable nouns have NO plural: information, advice, water, money, furniture, news',
    ],
    examples: [
      { lines: ['I have two children. They lost three teeth last month.'], note: 'Never say "childs" or "tooths" — among the most common A1 errors.' },
      { lines: ['The leaves fall off the trees every autumn.'], note: 'leaf → leaves. Same pattern: life → lives, wife → wives.' },
      { lines: ['Uncountable: "Can you give me some advice?" NOT "some advices"'], note: '"Information", "advice", "news", "furniture" are always singular.' },
    ],
    tips: [
      'Make a list of irregular plurals you find hardest and review them daily for one week.',
      'Remember: information, advice, news, furniture, and equipment are ALWAYS singular — never take -s.',
      'Practise by writing 5 sentences that each use two different irregular plural forms.',
    ],
    quiz: [
      { q: 'What is the plural of "child"?', options: ['Childs', 'Childrens', 'Children', 'Childes'], answer: 2 },
      { q: 'Which word CANNOT be made plural?', options: ['Book', 'Information', 'Chair', 'City'], answer: 1 },
    ],
  },

  a1_pronouns: {
    explanation: `Pronouns replace nouns to avoid repetition. English pronouns change form depending on their grammatical role — subject (I do it), object (give it to me), or possessive (it's mine). Getting these right is essential because they appear in every sentence.`,
    keyPoints: [
      'Subject: I, you, he, she, it, we, they — the doer of the action',
      'Object: me, you, him, her, it, us, them — the receiver of the action',
      'Possessive adjective (before noun): my, your, his, her, its, our, their — "This is my bag"',
      'Possessive pronoun (standalone): mine, yours, his, hers, ours, theirs — "This bag is mine"',
      'Critical: "its" (possessive, no apostrophe) ≠ "it\'s" (it is)',
    ],
    examples: [
      { lines: ['She gave him a gift. He thanked her immediately.'], note: 'Subject: She, He — Object: him, her. The form changes with role.' },
      { lines: ['This is my phone. That one is yours. Mine is the blue one.'], note: '"My phone" (adjective before noun) vs "mine" (stands alone).' },
      { lines: ['The company updated its website. They announced it themselves.'], note: '"Its" = possessive. "It\'s" = it is — completely different.' },
    ],
    tips: [
      'The most common error: "its" vs "it\'s" — write 5 sentences using each to feel the difference.',
      'Practice: take any paragraph and replace all the nouns with correct pronouns.',
      'Say a sentence, then replace the subject noun with a pronoun — do this 20 times.',
    ],
    quiz: [
      { q: 'Choose the correct sentence:', options: ['Give it to I.', 'Give it to me.', 'Give it to my.', 'Give it to mine.'], answer: 1 },
      { q: '"The dog wagged ___ tail."', options: ['it\'s', 'its\'', 'its', 'their'], answer: 2 },
    ],
  },

  a1_adjectives: {
    explanation: `Basic adjectives let you describe the world with precision. In English, adjectives don't change form for singular/plural or gender — one form fits all. The key challenge is correct placement (before the noun or after "be") and using intensifiers like "very", "quite", and "really".`,
    keyPoints: [
      'Adjectives are invariable: "a tall man", "a tall woman", "tall people" — same form always',
      'Attributive position (before noun): "a beautiful city", "an old car"',
      'Predicative position (after be/feel/look/seem): "The city is beautiful", "He looks tired"',
      'Common opposites: big/small · hot/cold · fast/slow · easy/difficult · cheap/expensive',
      'Gradable intensifiers: very, quite, really, extremely, a bit, fairly + adjective',
    ],
    examples: [
      { lines: ['It\'s a long, difficult exam. I feel nervous.'], note: '"Long" and "difficult" = before noun. "Nervous" = after "feel".' },
      { lines: ['The restaurant is quite cheap but the food is really delicious.'], note: '"Quite" softens; "really" strengthens. Both come before the adjective.' },
      { lines: ['Italian cars are beautiful. Japanese cars are reliable. Both are expensive!'], note: 'Nationality adjectives (Italian, Japanese) work as regular adjectives.' },
    ],
    tips: [
      'Learn adjectives in opposite pairs — knowing "cheap" helps you contrast with "expensive" immediately.',
      'Pick 5 objects near you and describe each using 3 adjectives in one sentence.',
      'Watch any English YouTube video for 5 minutes and write down every adjective you hear.',
    ],
    quiz: [
      { q: 'Which is correct?', options: ['It is a book interesting.', 'It is an interesting book.', 'It is a interestingly book.', 'It is book interesting.'], answer: 1 },
      { q: '"The coffee is ___ cold."', options: ['very', 'many', 'much', 'a lot'], answer: 0 },
    ],
  },

  // ─── A2 · Everyday Situations ─────────────────────────────────

  a2_shopping: {
    explanation: `Shopping vocabulary is immediately practical — markets, malls, online stores, and returns. English shopping conversations follow predictable patterns, so once you learn the key phrases you can handle almost any retail situation confidently. This topic also introduces polite request forms used across all social situations.`,
    keyPoints: [
      'Asking price: "How much is this?" / "How much does it cost?" / "What\'s the price?"',
      'Trying things: "Can I try this on?" (clothes) / "Do you have this in a larger size?"',
      'Paying: "I\'ll take it." / "Can I pay by card?" / "Can I have a receipt?"',
      'Returns: "I\'d like to return this." / "It\'s defective." / "It doesn\'t fit."',
      'Quantities: "a dozen" (12), "half a kilo", "a couple of" (2 or a few)',
    ],
    examples: [
      { lines: ['A: How much is this jacket?', 'B: It\'s £45.', 'A: Do you have it in blue, in a medium?'], note: 'Standard sequence: price → availability → size/colour.' },
      { lines: ['A: I\'d like to return this. It doesn\'t fit.', 'B: Do you have the receipt?', 'A: Yes, here it is.'] },
      { lines: ['Can I pay by card, or is it cash only?'], note: '"Cash only" is still common in smaller shops and markets.' },
    ],
    tips: [
      'Role-play a shopping scenario — one person is the customer, one the shopkeeper, then swap.',
      'Browse an English-language online store and practise reading product descriptions aloud.',
      'Learn the names of common shops: supermarket, pharmacy, bakery, newsagent, department store.',
    ],
    quiz: [
      { q: 'How do you ask if a shop accepts card payment?', options: ['Do you have a card?', 'Can I pay by card?', 'Is card OK money?', 'Have you a card machine?'], answer: 1 },
      { q: '"A dozen" means…', options: ['6', '10', '12', '20'], answer: 2 },
    ],
  },

  a2_directions: {
    explanation: `Giving and understanding directions is a vital survival skill in English-speaking environments. English directions combine relative direction (left/right), landmarks (opposite the bank), and distance (a 5-minute walk). The passive voice appears naturally here: "It's located next to the post office."`,
    keyPoints: [
      'Asking: "Excuse me, how do I get to…?" / "Where is the nearest…?" / "Is it far?"',
      'Turning: "Turn left/right at the traffic lights" / "Take the first turning on the left"',
      'Distance: "About 200 metres" / "A 5-minute walk" / "Just around the corner"',
      'Landmarks: "opposite", "next to", "between X and Y", "in front of", "behind", "on the corner of"',
      'Transport: "Take the number 7 bus" / "Get off at Central Station" / "Change at King\'s Cross"',
    ],
    examples: [
      { lines: ['A: How do I get to the library?', 'B: Go straight ahead, turn left at the traffic lights. It\'s on your right, opposite the park.'], note: '"On your right/left" = from your perspective as you walk.' },
      { lines: ['A: Is it far?', 'B: About ten minutes on foot. You can\'t miss it — big red building.'], note: '"You can\'t miss it" = very obvious and easy to find.' },
    ],
    tips: [
      'Look up directions to a real place in English on Google Maps — write them down and say them aloud.',
      'Practise by giving someone directions to your home, school, or office in English.',
      'Master these prepositions: opposite, next to, between, beside, in front of, behind, around the corner from.',
    ],
    quiz: [
      { q: '"Just around the corner" means…', options: ['Very far away', 'Very close', 'Behind a corner', 'Turn right at the corner'], answer: 1 },
      { q: 'How do you tell someone which stop to exit a bus?', options: ['Stop here', 'Get off at Central Station', 'Leave the bus now', 'Exit stop Central'], answer: 1 },
    ],
  },

  a2_health: {
    explanation: `Health vocabulary lets you describe symptoms, visit a doctor, and buy medicine — essential for real emergencies and daily conversations. Being precise about symptoms (sharp pain vs dull ache; for 3 days vs suddenly) helps doctors treat you and impresses in IELTS Speaking Part 1.`,
    keyPoints: [
      'Symptoms: "I have a headache / stomachache / sore throat / fever / cold / cough / runny nose"',
      '"I feel…": tired, dizzy, nauseous, weak, unwell — general feeling descriptions',
      'Duration: "I\'ve had this for three days" / "It started yesterday" / "It comes and goes"',
      '"Ache" (dull ongoing pain) vs "pain" vs "hurt" (verb: "My knee hurts")',
      'Medicine instructions: "Take one tablet three times a day" / "Apply twice daily"',
    ],
    examples: [
      { lines: ['A: What seems to be the problem?', 'B: I have a terrible headache and a fever. I\'ve felt like this since yesterday.'], note: '"What seems to be the problem?" = standard doctor\'s opening question.' },
      { lines: ['A: Does it hurt here?', 'B: Yes — a sharp pain when I breathe in deeply.'], note: '"Sharp pain" (sudden, stabbing) vs "dull ache" (persistent, low-level).' },
      { lines: ['I\'m allergic to penicillin. Are there any alternative antibiotics?'], note: 'Always mention allergies early in a medical consultation.' },
    ],
    tips: [
      'Learn 20 body parts and 10 common illnesses — these cover most A2 medical situations.',
      'Practise describing a fictional illness using at least 3 different symptom expressions.',
      'Read the English instructions on a medicine box — practise understanding dosage and warnings.',
    ],
    quiz: [
      { q: '"I have a sore throat" means…', options: ['My throat is bleeding', 'My throat feels painful', 'I lost my voice', 'I have a fever'], answer: 1 },
      { q: 'Which correctly describes how long you\'ve had a symptom?', options: ['I have this since yesterday.', 'I\'ve had this since yesterday.', 'I had this since yesterday.', 'I am have this since yesterday.'], answer: 1 },
    ],
  },

  a2_weather: {
    explanation: `Weather is genuinely the most common small-talk topic in English — especially in British culture. Beyond social use, weather vocabulary appears in travel, planning, and IELTS reading. It also introduces useful adjective-noun collocations (heavy rain, strong wind) that transfer to many other contexts.`,
    keyPoints: [
      'Nouns: sun, cloud, rain, wind, snow, fog, storm, hail, thunder, lightning',
      'Adjective forms: sunny, cloudy, rainy, windy, snowy, foggy, stormy, icy, humid, chilly, mild',
      '"It\'s + adjective": "It\'s sunny" — NOT "It rains" for current weather',
      'Forecasting: "It\'s going to rain" / "It might snow" / "There\'s a chance of fog"',
      'Collocations: "heavy rain", "strong wind", "light breeze", "thick fog", "clear skies"',
    ],
    examples: [
      { lines: ['A: How\'s the weather there?', 'B: It\'s been really humid — about 35 degrees every day.'], note: 'Small talk about weather is extremely common in British English.' },
      { lines: ['The forecast says it\'s going to be cloudy with a chance of showers this afternoon.'], note: '"Showers" = short periods of light rain. "Heavy rain" = prolonged and intense.' },
      { lines: ['I love spring — it\'s mild and the days are getting longer.'], note: '"Mild" = pleasantly warm, not too hot or cold.' },
    ],
    tips: [
      'Check BBC Weather daily and read the English forecast aloud.',
      'Describe today\'s weather in 3 sentences: temperature, sky, and how it feels.',
      'Learn the four seasons and typical weather in your country described in English.',
    ],
    quiz: [
      { q: 'Which correctly describes CURRENT rain?', options: ['It rains.', 'It\'s raining.', 'It rain.', 'Weather rains.'], answer: 1 },
      { q: '"Mild weather" means…', options: ['Very cold', 'Very hot', 'Pleasantly moderate temperature', 'Windy and stormy'], answer: 2 },
    ],
  },

  a2_work: {
    explanation: `Work and study vocabulary is essential for IELTS Speaking Part 1 and everyday social conversation. Describing your profession, responsibilities, and schedule in English is one of the first things you need in any international context — job interviews, networking, or simply meeting new people.`,
    keyPoints: [
      'Jobs: "I work as a…" or "I\'m a…" — "I work as an accountant" / "I\'m a software developer"',
      'Location: "I work at/for [company]" / "I work in [city/industry]"',
      'Schedule: "work nine to five", "work shifts", "work from home", "work overtime", "work part-time"',
      'Responsibilities: "I\'m in charge of…", "I deal with…", "My main role is…", "I\'m responsible for…"',
      'Studies: "I study [subject] at [university]" / "I\'m in my second year of…"',
    ],
    examples: [
      { lines: ['A: What do you do?', 'B: I work as a nurse. I do shift work — sometimes nights.'], note: '"What do you do?" = What is your job? Most common A2 personal question.' },
      { lines: ['I\'m responsible for managing social media for three brands. It\'s quite demanding.'], note: '"Demanding" = requires a lot of effort. Very useful workplace adjective.' },
      { lines: ['I study architecture at university. My favourite subject is structural design.'], note: '"Study" for academic subjects; "work as" / "work in" for jobs.' },
    ],
    tips: [
      'Prepare a 60-second description of your job or studies — this is IELTS Part 1 core preparation.',
      'Learn 10 job titles common in your field and describe their responsibilities in one sentence.',
      'Study LinkedIn profiles of people in your industry — excellent real-world work vocabulary source.',
    ],
    quiz: [
      { q: 'Which sentence talks about a job correctly?', options: ['I am work engineer.', 'I work as an engineer.', 'I am engineer.', 'I am as engineer.'], answer: 1 },
      { q: '"Work overtime" means…', options: ['Work from home', 'Work extra hours beyond your schedule', 'Work part-time', 'Work at night'], answer: 1 },
    ],
  },

  // ─── A2 · Expanding Grammar ───────────────────────────────────

  a2_past: {
    explanation: `The past simple describes completed actions in the past. It's used constantly in storytelling, conversation, and writing. The major challenge is irregular verbs — these don't follow the -ed rule and must be memorised individually. There are about 150 common irregulars, but the top 30 cover most everyday speech.`,
    keyPoints: [
      'Regular verbs: add -ed — walked, talked, studied (y→ied), stopped (double consonant)',
      'Irregular verbs: go→went, see→saw, take→took, give→gave, come→came, have→had, say→said',
      'Negatives: Subject + didn\'t + BASE form — "I didn\'t go" NOT "I didn\'t went"',
      'Questions: Did + subject + BASE form? — "Did you see it?" NOT "Did you saw it?"',
      'Time markers: yesterday, last week, ago, in 2020, when I was young, at that time',
    ],
    examples: [
      { lines: ['I went to Bali last summer. We stayed at a small hotel near the beach.'], note: '"Go→went" (irregular), "stay→stayed" (regular). Both describe completed past events.' },
      { lines: ['A: Did you watch the game last night?', 'B: No, I didn\'t. I worked late.'], note: 'After "didn\'t" and "did", always use the BASE FORM — "didn\'t watch", not "didn\'t watched".' },
      { lines: ['She studied medicine for six years and graduated in 2018.'], note: 'Both actions are complete — past simple for sequences of finished events.' },
    ],
    tips: [
      'Learn irregular past forms in sound groups: think/thought, bring/brought, buy/bought, teach/taught.',
      'Write a short paragraph about what you did last weekend — focus on getting past forms right.',
      'Create a "story chain" where each sentence uses a different irregular verb in past simple.',
    ],
    quiz: [
      { q: '"I ___ to the cinema yesterday."', options: ['go', 'goes', 'went', 'gone'], answer: 2 },
      { q: 'Which negative is correct?', options: ['She didn\'t went.', 'She didn\'t go.', 'She not went.', 'She doesn\'t went.'], answer: 1 },
    ],
  },

  a2_cont: {
    explanation: `The present continuous describes actions happening right now, temporary situations, or future arrangements. The crucial skill is knowing when to choose it over present simple — they are not interchangeable and the choice changes meaning completely.`,
    keyPoints: [
      'Structure: Subject + am/is/are + verb-ing — "I am working", "She is studying"',
      'Use 1 — happening now: "I\'m writing an email at the moment"',
      'Use 2 — temporary situation: "I\'m staying with my parents this month" (not permanently)',
      'Use 3 — future arrangement: "I\'m meeting Sara at 7 tonight" (already planned)',
      'Stative verbs NEVER use -ing: know, believe, love, hate, want, need, understand, seem',
    ],
    examples: [
      { lines: ['A: What are you doing?', 'B: I\'m cooking dinner. Can I call you back?'], note: 'Action happening right now at the moment of speaking.' },
      { lines: ['She\'s working from home this week because her office is being renovated.'], note: 'Temporary situation (not her permanent arrangement).' },
      { lines: ['❌ "I\'m knowing the answer." ✓ "I know the answer."'], note: '"Know" is a stative verb — describes a state, not an action. Never use -ing.' },
    ],
    tips: [
      'Describe what 5 people around you are doing right now using present continuous.',
      'Memorise the list of stative verbs (know, want, love, believe…) — these never take -ing in simple contexts.',
      'Use your calendar — describe tomorrow\'s plans using present continuous for each item.',
    ],
    quiz: [
      { q: '"She ___ very hard for her exam this week."', options: ['studies', 'is studying', 'study', 'studying'], answer: 1 },
      { q: 'Which sentence is INCORRECT?', options: ['I am writing a report.', 'They are leaving tomorrow.', 'I am knowing the answer.', 'He is working from home.'], answer: 2 },
    ],
  },

  a2_compare: {
    explanation: `Comparative and superlative adjectives are essential for IELTS Task 1 (comparing chart data), everyday decisions, and describing differences. English uses two systems depending on adjective syllable count — learning which system applies is the first step.`,
    keyPoints: [
      'One syllable: add -er/-est — tall→taller/tallest; big→bigger/biggest (double consonant)',
      'Two+ syllables: more/most — expensive→more expensive/most expensive',
      'Two-syllable -y adjectives: y→i, add -er/-est — happy→happier/happiest',
      'Irregulars: good→better/best; bad→worse/worst; far→further/furthest',
      'Comparisons: "X is taller than Y" / "X is the tallest" / "X is as tall as Y"',
    ],
    examples: [
      { lines: ['The new phone is much more powerful than the old one, but also more expensive.'], note: '"Much more" intensifies — "much bigger", "far more interesting".' },
      { lines: ['This coffee shop is cheaper than the one on Main Street, and the coffee is better.'], note: '"Better" = irregular comparative of "good". Never say "more good".' },
      { lines: ['Taking the train is just as fast as driving, but much less stressful.'], note: '"As + adjective + as" = equal. "Less + adjective" = negative comparison.' },
    ],
    tips: [
      'Compare 5 pairs of things you know (two cities, two phones) using at least 3 comparatives each.',
      'IELTS Task 1 practice: "The graph shows that X is significantly higher than Y in 2020."',
      'Make a personal "top 3" list of anything (films, foods, places) using superlatives.',
    ],
    quiz: [
      { q: 'What is the comparative of "good"?', options: ['Gooder', 'More good', 'Better', 'Best'], answer: 2 },
      { q: 'Which is correct?', options: ['London is more big than Paris.', 'London is bigger than Paris.', 'London is biggest than Paris.', 'London is most big than Paris.'], answer: 1 },
    ],
  },

  a2_modal: {
    explanation: `Modal verbs modify the main verb to express ability, permission, possibility, advice, and obligation. They are some of the most versatile verbs in English — mastering just five modals at A2 gives you enormous communicative range. One key rule: modals are NEVER followed by "to" (except "ought to" and "have to", which are semi-modals).`,
    keyPoints: [
      'can = ability ("I can swim") or informal permission ("Can I leave?")',
      'could = past ability ("I could run fast as a child") or polite request ("Could you help?")',
      'should = advice ("You should see a doctor") or recommendation',
      'must = strong necessity ("You must wear a seatbelt") or logical deduction ("She must be tired")',
      'might/may = possibility ("It might rain") or formal permission ("May I come in?")',
    ],
    examples: [
      { lines: ['A: Could you open the window, please?', 'B: Of course. No problem.'], note: '"Could you…?" is more polite than "Can you…?" — use in formal contexts.' },
      { lines: ['You should try the new Thai restaurant — the food is amazing.'], note: '"Should" for advice — the person doesn\'t have to follow it, but it\'s recommended.' },
      { lines: ['It might snow tomorrow. You should take a warm jacket just in case.'], note: '"Might" ≈ 30–50% possibility. Paired with "should" for practical advice.' },
    ],
    tips: [
      'Write 3 rules for a fictional place using "must" and "must not" — practises obligation language.',
      'Ask 5 polite requests using "Could you…?" and notice how people respond.',
      'Plan your week using "might" for uncertain activities and "will" for definite ones.',
    ],
    quiz: [
      { q: 'Which sentence gives polite advice?', options: ['You must eat less sugar.', 'You should eat less sugar.', 'You might eat less sugar.', 'You can eat less sugar.'], answer: 1 },
      { q: '"Could you pass the salt?" — "could" expresses…', options: ['Past ability', 'Possibility', 'Polite request', 'Strong obligation'], answer: 2 },
    ],
  },

  a2_prep: {
    explanation: `Prepositions of time and place are small words with enormous impact. Choosing wrong — "on Monday" vs "in Monday" — immediately signals a grammar gap. Fortunately, the main time prepositions follow clear patterns that can be remembered with one simple rule: IN for longer periods, ON for days, AT for specific times.`,
    keyPoints: [
      'IN: months, years, seasons, periods — "in July", "in 2023", "in summer", "in the morning"',
      'ON: specific days and dates — "on Monday", "on 3rd April", "on Christmas Day"',
      'AT: specific times and fixed phrases — "at 3 pm", "at night", "at noon", "at the weekend"',
      'Place IN: inside spaces — "in a room", "in a car", "in Jakarta"',
      'Place ON: surfaces — "on the table", "on the floor", "on the wall"',
    ],
    examples: [
      { lines: ['I was born in 1998, on a Tuesday, at six in the morning.'], note: 'Year → IN; day → ON; time → AT. All three in one sentence.' },
      { lines: ['The meeting is on Friday at 2 pm. Please be in the conference room.'], note: 'Day → ON; time → AT; enclosed space → IN.' },
      { lines: ['I usually relax at the weekend. In summer, I go hiking in the mountains.'], note: '"At the weekend" (British); "on the weekend" (American) — both accepted.' },
    ],
    tips: [
      'Remember: IN (big period) → ON (day) → AT (exact time). Specificity increases left to right.',
      'Write a personal timeline: "I started school in 2005, on 1st September, at 8 am."',
      'Make 10 sentences describing where things are in your room using in/on/at/next to/under.',
    ],
    quiz: [
      { q: '"I\'ll see you ___ Friday ___ 3 o\'clock."', options: ['in / in', 'on / at', 'at / on', 'in / at'], answer: 1 },
      { q: '"The keys are ___ the table."', options: ['in', 'at', 'on', 'by'], answer: 2 },
    ],
  },

  // ─── A2 · Receptive Skills ─────────────────────────────────────

  a2_signs: {
    explanation: `Reading short texts, notices, and signs is an essential real-world A2 skill. English notices use compressed language — "No entry", "Out of order", "Max 2 items" — that differs from conversational English. Understanding these quickly prevents mistakes in real-life situations and is tested in Cambridge A2 Key and early IELTS.`,
    keyPoints: [
      'Notices use imperatives: "Keep off the grass", "Do not disturb", "Press in case of emergency"',
      'Abbreviations: CCTV (cameras), ATM (cash machine), PTO (please turn over), N/A (not applicable)',
      'Warning language: "Caution — wet floor", "Warning: high voltage", "Danger — do not enter"',
      'Information signs: "Open / Closed", "Push / Pull", "In / Out of service", "Entrance / Exit"',
      'Menu language: starters / mains / desserts; "served with", "contains nuts", "v" = vegetarian',
    ],
    examples: [
      { lines: ['"Lift out of service. Please use the stairs."'], note: '"Out of service" = not working/available. The lift is broken.' },
      { lines: ['"Strictly no parking between 8am–6pm Mon–Sat. Penalty: £80 fine."'], note: 'Formal notice: "strictly", "penalty". Identify the restriction and consequence.' },
      { lines: ['"All items must be returned within 28 days with receipt."'], note: '"Must be returned" = passive obligation. Common in shops and libraries.' },
    ],
    tips: [
      'Take photos of English signs you encounter and look up any unfamiliar words.',
      'When you see a sign in English, ask: Warning? Information? Rule? What must you do?',
      'Practise with Cambridge A2 Key official practice tests — they contain authentic notices.',
    ],
    quiz: [
      { q: '"Out of order" on a machine means…', options: ['Reserved for staff', 'The machine is not working', 'Place orders here', 'Out of stock'], answer: 1 },
      { q: '"No entry" means…', options: ['You may enter', 'You cannot enter this area', 'Enter from another door', 'Entry is free'], answer: 1 },
    ],
  },

  a2_email: {
    explanation: `Writing emails and messages is one of the most practical A2 skills. English emails follow clear conventions — opening, body, and closing — that differ between formal and informal contexts. At A2, focus on simple informal emails to friends and basic formal requests using polite, clear language.`,
    keyPoints: [
      'Informal opening: "Hi [name]," / "Hey Sara," — Formal: "Dear Mr. Lee," / "Dear Sir/Madam,"',
      'Opening line: "Hope you\'re well!" (informal) / "I am writing to enquire about…" (formal)',
      'Closing: informal → "Best wishes / Take care / See you soon!" — formal → "Yours sincerely / Faithfully"',
      '"Yours sincerely" when you know the name; "Yours faithfully" when you don\'t (Dear Sir/Madam)',
      'One idea per paragraph. Short, clear sentences. Use bullet points for lists.',
    ],
    examples: [
      { lines: ['Hi Tom,', 'Hope you\'re well! Are you free this Saturday evening?', 'We\'re having a small get-together at my place.', 'Let me know if you can make it!', 'Best, Sara'], note: 'Informal: casual greeting, friendly tone, clear purpose, warm close.' },
      { lines: ['Dear Mr. Johnson,', 'I am writing to enquire about your English course.', 'Could you please send me information about the start dates and fees?', 'Yours sincerely, Ana Santos'], note: 'Formal: title + surname, formal opening, polite request, correct close.' },
    ],
    tips: [
      'Write one practice email per day — alternate between formal and informal.',
      'Read 5 sample emails from Cambridge preparation books and note the structure.',
      'Create templates for your most common emails (enquiry, reply, invitation).',
    ],
    quiz: [
      { q: 'You don\'t know the name of the recipient. How do you close?', options: ['Yours sincerely', 'Best wishes', 'Yours faithfully', 'Kind regards'], answer: 2 },
      { q: 'Which is the correct informal email opening?', options: ['Dear Sir,', 'To Whom It May Concern,', 'Hi Maria,', 'Greetings, Human,'], answer: 2 },
    ],
  },

  a2_listen: {
    explanation: `At A2 level you're learning to process slow, clearly spoken English in everyday situations. The key is identifying the main idea and specific information without needing to understand every single word. Listening strategies — predicting, focusing on keywords, ignoring unknown words — are as important as vocabulary.`,
    keyPoints: [
      'Before listening: read the questions first and predict the type of answer (name, number, time, place)',
      'During listening: focus on keywords and numbers — you won\'t always catch every word',
      '"Signpost" words signal structure: "First...", "However...", "The main point is...", "In conclusion..."',
      'Speakers often repeat important information — listen for the second, clearer version',
      'Connected speech: "want to" sounds like "wanna", "going to" like "gonna" in natural speech',
    ],
    examples: [
      { lines: ['Listen for GIST first: What is this conversation about?'], note: 'Gist = general understanding. You don\'t need every word to get the topic.' },
      { lines: ['"I\'d like to reserve a table for — actually, make that four people, for Saturday."'], note: 'Real speech has hesitation and self-corrections. Focus on the final answer.' },
      { lines: ['Listen for DETAIL: specific names, times, numbers, or facts mentioned.'], note: 'Detail questions: "What time does the shop open?" "How much is it?"' },
    ],
    tips: [
      'Use BBC Learning English "6 Minute English" — listen once for gist, again for detail.',
      'Listen to the same clip 3 times: 1st topic, 2nd details, 3rd with transcript to check.',
      'Don\'t pause constantly — train yourself to keep listening even when you miss something.',
    ],
    quiz: [
      { q: 'Listening for "gist" means…', options: ['Understanding every word', 'Getting the general topic and main idea', 'Writing everything down', 'Translating as you listen'], answer: 1 },
      { q: 'What should you do BEFORE a listening exercise?', options: ['Listen without reading questions', 'Read questions and predict answers', 'Translate questions to your language', 'Write as fast as possible'], answer: 1 },
    ],
  },

  a2_match: {
    explanation: `Matching exercises — connecting descriptions to pictures, headings to paragraphs, or sentences to contexts — appear in Cambridge A2 Key and early IELTS. They test your ability to understand meaning through synonyms and context rather than exact word-for-word matching. This skill transfers directly to IELTS Reading.`,
    keyPoints: [
      'Strategy: read all options first, then make confident matches — don\'t linger on any one item',
      'Look for synonyms: the description won\'t use the exact words from the picture or text',
      'Process of elimination: confirm easy matches first — the harder ones become fewer options',
      'Context clues: surrounding words and logic help even when individual words are unknown',
      'Task types: picture-word, heading-paragraph, sentence halves, sign-meaning',
    ],
    examples: [
      { lines: ['Picture: someone running on a track in a stadium', 'Options: A) playing football  B) swimming  C) doing athletics  D) cycling'], note: '"Doing athletics" matches — stadium + running = athletics. Eliminate others by context.' },
      { lines: ['Sign: "No food or drinks allowed beyond this point."', 'Meaning: A) Restaurant entrance  B) Area where eating is prohibited  C) Checkout area'], note: '"Allowed beyond this point" = not permitted past here. Match to B.' },
    ],
    tips: [
      'Practise with Cambridge A2 Key practice tests — they have official matching exercises with answer keys.',
      'When reading any text, try to match each paragraph to a one-sentence summary.',
      'Always use elimination: cross out options you\'ve already matched to reduce choices quickly.',
    ],
    quiz: [
      { q: 'When should you use "process of elimination" in a matching task?', options: ['Only at the start', 'After making your confident matches first', 'Only for the last question', 'Never — work sequentially always'], answer: 1 },
      { q: 'Why don\'t matching exercises use the exact same words in question and text?', options: ['It\'s a translation exercise', 'To test understanding of meaning and synonyms, not just exact words', 'To make it easier', 'It\'s a test design error'], answer: 1 },
    ],
  },

  a2_fill: {
    explanation: `Gap-fill exercises appear in almost every English exam at A2 and above. They test grammar (verb forms, articles, prepositions) and vocabulary (collocations, fixed phrases). The key strategy is reading the full sentence for context before attempting the gap — the answer is almost always signalled by what comes before and after.`,
    keyPoints: [
      'Always read the whole sentence before filling the gap — context determines the answer',
      'Identify what type of word is needed: verb form, noun, adjective, preposition, or article',
      'For verbs: check tense (past/present?), form (infinitive/-ing?), and subject agreement',
      'Preposition gaps are often fixed phrases: "look forward to", "depend on", "interested in"',
      'After filling: re-read the complete sentence — does it make grammatical and logical sense?',
    ],
    examples: [
      { lines: ['She _____ (go) to the gym every morning before work. → goes'], note: 'Third person singular present simple → add -s.' },
      { lines: ['I\'m looking forward _____ seeing you. → to'], note: '"Look forward to + -ing" is a fixed phrase. "To" must be followed by gerund (-ing).' },
      { lines: ['It was _____ hot day that we stayed inside. → such a'], note: '"Such a + adjective + noun" for intensity. "So" is for "so + adjective" only.' },
    ],
    tips: [
      'For every gap: 1) What type of word? 2) What comes before/after? 3) Is there a fixed phrase?',
      'Keep a list of fixed preposition phrases (depend on, interested in, good at) — these recur constantly.',
      'After any gap-fill, re-read the whole text aloud — errors become obvious when read naturally.',
    ],
    quiz: [
      { q: '"I am interested _____ learning photography."', options: ['to', 'for', 'in', 'about'], answer: 2 },
      { q: '"She _____ worked here for five years." (present perfect)', options: ['is', 'was', 'has', 'have'], answer: 2 },
    ],
  },

  // ─── B1 · Fluency Building ─────────────────────────────────────

  b1_opinions: {
    explanation: `Expressing opinions confidently and politely is the backbone of B1 speaking and writing. English distinguishes between personal opinions ("I think…"), widely held views ("Many people believe…"), and speculative statements ("It could be argued that…"). IELTS Speaking Part 3 and TOEFL Independent Writing depend heavily on this language.`,
    keyPoints: [
      'Personal opinion: "I think/believe/feel that…", "In my opinion/view…", "As far as I\'m concerned…"',
      'Partial agreement: "That\'s true to some extent, but…", "I see your point, however…"',
      'Disagreement (polite): "I\'m not sure I agree because…", "With respect, I think…"',
      'Giving reasons: always follow your opinion with "because", "since", "as", or "due to"',
      'Hedging (less direct): "It seems to me that…", "I tend to think that…", "I would say that…"',
    ],
    examples: [
      { lines: ['In my opinion, public transport is far more efficient than private cars, because it reduces both traffic and pollution.'], note: 'Structure: opinion phrase + point + reason. Always expand beyond one clause.' },
      { lines: ['A: Do you think social media is good for society?', 'B: I think it has both benefits and drawbacks. On one hand, it connects people. On the other, it can spread misinformation.'], note: 'Balanced opinion — shows higher-level thinking than a simple yes/no.' },
      { lines: ['I see your point, but I\'m not entirely convinced because the evidence suggests otherwise.'], note: 'Polite disagreement — acknowledge the other view before countering it.' },
    ],
    tips: [
      'Practise the "Opinion + Reason + Example" formula: state your view, say why, then give a real-world example.',
      'Record yourself answering 5 opinion questions for 30–60 seconds each — listen back for filler words.',
      'Read IELTS model essays and underline every opinion phrase — notice the variety used.',
    ],
    quiz: [
      { q: 'Which phrase introduces a personal opinion?', options: ['It is a fact that', 'Studies show that', 'In my view,', 'Everyone agrees that'], answer: 2 },
      { q: 'After stating an opinion, what should always follow?', options: ['A question', 'A reason or explanation', 'A summary', 'An apology'], answer: 1 },
    ],
  },

  b1_narrate: {
    explanation: `Narrating past experiences fluently is a core B1 skill — it appears in IELTS Speaking Part 2 (the cue card), TOEFL Integrated tasks, and everyday conversation. Effective narration uses past tenses correctly, logical sequence markers, and descriptive language to bring a story to life.`,
    keyPoints: [
      'Past simple for completed sequential events: "We arrived, checked in, then went to the beach."',
      'Past continuous for background/interrupted action: "I was reading when the power went out."',
      'Past perfect for earlier past events: "By the time we got there, the show had already started."',
      'Sequence markers: First / Then / After that / Next / Meanwhile / Eventually / Finally / In the end',
      'Adding detail: "The thing is…", "What made it special was…", "What surprised me most was…"',
    ],
    examples: [
      { lines: ['Last year I visited Kyoto. I had been planning the trip for months, so I was incredibly excited. We arrived early in the morning and immediately went to Fushimi Inari. It was stunning.'], note: 'Past perfect ("had been planning") sets up the background before the main story.' },
      { lines: ['I was walking home when I suddenly heard a loud noise. I turned around and saw that a car had hit a wall.'], note: '"Was walking" (ongoing background) + "heard" (sudden interruption) = past continuous + past simple.' },
      { lines: ['A: Tell me about a time you overcame a challenge.', 'B: Well, when I was at university, I had to give a presentation to 200 people. I was terrified, but I practised every day for two weeks, and in the end it went really well.'] },
    ],
    tips: [
      'Practise IELTS Part 2 style: choose a past experience and speak about it for 2 minutes without stopping.',
      'Write a short story (150 words) using all 3 past tenses — highlight which tense you used and why.',
      'Record your narration and count how many different sequence markers you used — aim for at least 5.',
    ],
    quiz: [
      { q: '"I was eating dinner when the phone ___."', options: ['rings', 'rang', 'had rung', 'is ringing'], answer: 1 },
      { q: 'Which tense shows an action completed BEFORE another past action?', options: ['Past simple', 'Past continuous', 'Past perfect', 'Present perfect'], answer: 2 },
    ],
  },

  b1_explain: {
    explanation: `Giving clear reasons and explanations separates B1 speakers from A2 ones. IELTS Speaking Part 3 and TOEFL speaking tasks specifically reward structured, extended reasoning. The key is connecting your main point to specific examples and consequences using a variety of cause-and-effect language.`,
    keyPoints: [
      'Cause → effect: "Because of X, Y happens." / "X leads to Y." / "X results in Y."',
      'Introducing reasons: "because", "since", "as", "due to + noun", "owing to + noun"',
      'Introducing consequences: "therefore", "as a result", "consequently", "this means that"',
      'Explaining clearly: "What I mean is…", "In other words…", "To put it simply…"',
      'Giving examples: "For example…", "For instance…", "Such as…", "A case in point is…"',
    ],
    examples: [
      { lines: ['Learning English opens more career opportunities, since most international companies require it. As a result, professionals who speak English tend to earn higher salaries.'], note: '"Since" introduces reason; "as a result" introduces consequence.' },
      { lines: ['Due to rising fuel costs, many people are switching to electric vehicles. This means that charging infrastructure is now expanding rapidly.'], note: '"Due to + noun phrase" — not followed by a clause. "Owing to" works the same way.' },
      { lines: ['A: Why do you think people move to cities?', 'B: Mainly because cities offer better job opportunities. For instance, most headquarters of large companies are in urban areas, which creates more positions.'], note: 'Structured: reason + specific example. This is IELTS Band 6+ territory.' },
    ],
    tips: [
      'Practise the "P-E-E" method: Point → Evidence → Explanation. Use it for every paragraph you write.',
      'Write 5 cause-and-effect sentences about topics you know: environment, technology, education.',
      'Listen to an English news programme and identify every time a journalist gives a reason or consequence.',
    ],
    quiz: [
      { q: '"___ the heavy rain, the match was cancelled." Which phrase fits?', options: ['Because', 'Due to', 'Since', 'Therefore'], answer: 1 },
      { q: '"X leads to Y" means…', options: ['X is better than Y', 'X causes Y', 'X and Y are similar', 'Y happened before X'], answer: 1 },
    ],
  },

  b1_describe: {
    explanation: `Describing people and places vividly is essential for IELTS Speaking Part 2, TOEFL Integrated tasks, and IELTS Writing Task 1. Effective description uses sensory language, precise vocabulary, and structure — not just a random list of adjectives. The goal is to paint a picture for someone who cannot see what you are describing.`,
    keyPoints: [
      'People: physical (height, build, hair, eyes) → personality (outgoing, reserved, thoughtful) → role/relationship',
      'Places: location → size/scale → main features → atmosphere/feeling → why it matters',
      'Sensory language: what you see, hear, smell, feel — creates immersive description',
      'Precise adjectives: instead of "nice" use pleasant, charming, vibrant, serene, breathtaking, cozy',
      'Relative clauses add detail: "It\'s a city that never sleeps" / "She\'s the kind of person who…"',
    ],
    examples: [
      { lines: ['My grandmother is a small, energetic woman in her seventies with short white hair and bright eyes. She\'s one of the most generous people I know — she always puts others first.'], note: 'Physical → personality → specific quality. Structured and vivid.' },
      { lines: ['Ubud is a small town in central Bali surrounded by rice terraces and rainforest. The atmosphere is calm and artistic — you can hear gamelan music drifting from temples nearby.'], note: 'Location → surroundings → atmosphere → sensory detail.' },
      { lines: ['IELTS Part 2: "Describe a place you would like to visit." Structure: where it is, what it looks like, why you want to go there, how it makes you feel.'] },
    ],
    tips: [
      'Ban yourself from using "nice", "good", "beautiful", "bad" for one week — replace with precise alternatives.',
      'Describe a photo or painting in English for 2 minutes without stopping — record yourself.',
      'Read travel writing in English (Lonely Planet, National Geographic) and note descriptive techniques.',
    ],
    quiz: [
      { q: 'Which adjective is most PRECISE for describing a calm, peaceful place?', options: ['Nice', 'Good', 'Serene', 'OK'], answer: 2 },
      { q: 'When describing a place, which order works best?', options: ['Feelings → size → location', 'Location → features → atmosphere', 'Atmosphere → feelings → history', 'History → features → your opinion'], answer: 1 },
    ],
  },

  b1_unexpected: {
    explanation: `Handling unexpected questions gracefully is what separates prepared speakers from fluent ones. In IELTS Speaking and real conversation, you'll regularly face questions you haven't rehearsed. Having a set of "buying time" strategies and recovery phrases prevents silence, shows confidence, and actually impresses examiners.`,
    keyPoints: [
      'Buying time: "That\'s an interesting question…", "Let me think about that for a moment…", "Hmm, I\'ve never really thought about that before, but…"',
      'Clarifying: "Do you mean…?", "Could you rephrase that?", "Are you asking about…?"',
      'Partial answers: "I\'m not completely sure, but I think…", "I don\'t know the exact figure, but roughly…"',
      'Redirecting: "I\'m not really an expert on that, but from my own experience…"',
      'Never say nothing — any answer is better than silence in an English speaking exam',
    ],
    examples: [
      { lines: ['A: What do you think will happen to traditional crafts in the next 50 years?', 'B: That\'s a really interesting question. I haven\'t thought about it before, but I suppose they might disappear unless governments actively protect them. What do you think?'], note: 'Bought time → gave a speculative answer → redirected. Professional and fluent.' },
      { lines: ['A: What are the main causes of urban homelessness?', 'B: Hmm, I\'m not really an expert, but from what I\'ve read, the main factors seem to be housing costs and mental health support. I\'d imagine economic policy plays a big role too.'], note: '"Seem to be" and "I\'d imagine" are hedging — they signal uncertainty without shutting down.' },
    ],
    tips: [
      'Practise with a partner: they give you a random question, you must respond within 3 seconds using a "buying time" phrase.',
      'List 5 buying-time phrases and memorise them until they\'re automatic — you want them ready without thinking.',
      'Watch IELTS examiner videos on YouTube and notice how examiners react to different responses.',
    ],
    quiz: [
      { q: 'In a speaking exam, if you don\'t know the answer, you should…', options: ['Stay silent and wait', 'Say "I don\'t know" and stop', 'Buy time then give a partial or speculative answer', 'Ask the examiner for help'], answer: 2 },
      { q: 'Which phrase buys time most naturally?', options: ['"I cannot answer that."', '"That\'s an interesting question. Let me think…"', '"Wait, please."', '"I didn\'t study this topic."'], answer: 1 },
    ],
  },

  // ─── B1 · Intermediate Grammar ─────────────────────────────────

  b1_perfvpast: {
    explanation: `The distinction between present perfect and past simple is one of the most tested and most confused grammar points in English. The choice signals something profound: whether the past event connects to the present (perfect) or is completely finished and disconnected from now (simple). Getting this right is worth at least half a band in IELTS writing.`,
    keyPoints: [
      'Past simple: finished action with a specific time — "I visited Paris in 2019." (completed, disconnected)',
      'Present perfect: past action with present relevance — "I have visited Paris." (experience, still relevant)',
      'Present perfect: unfinished time periods — "I haven\'t eaten anything today." (today isn\'t over)',
      'Key words for perfect: already, yet, just, ever, never, recently, since, for, so far, up to now',
      'Key words for past simple: yesterday, last week, ago, in + year, when, at that time',
    ],
    examples: [
      { lines: ['I have lived in Jakarta for 5 years. (I still live here)', 'I lived in Jakarta for 5 years. (I no longer live there)'], note: 'The tense choice completely changes the meaning — present situation changes.' },
      { lines: ['A: Have you ever tried sushi?', 'B: Yes, I tried it last summer when I was in Tokyo.'], note: '"Have you ever" asks about life experience (perfect). "Last summer" triggers past simple in the answer.' },
      { lines: ['The government has recently announced new climate targets. Scientists have welcomed the news.'], note: 'News and recent events use present perfect — they\'re still relevant now.' },
    ],
    tips: [
      'Ask yourself: "Does the speaker care WHEN it happened?" YES → past simple. NO → present perfect.',
      'Write 10 sentence pairs — same basic meaning in both tenses — and notice how the nuance shifts.',
      'In IELTS Writing Task 2, use present perfect for recent global trends and past simple for historical examples.',
    ],
    quiz: [
      { q: '"I ___ this film last night." Which tense?', options: ['have watched', 'have been watching', 'watched', 'watch'], answer: 2 },
      { q: '"She ___ three novels so far this year." Which tense?', options: ['wrote', 'has written', 'is writing', 'had written'], answer: 1 },
    ],
  },

  b1_passive: {
    explanation: `The passive voice moves the focus from who does the action to what is done — or to the action itself. It's essential in academic and formal writing (where the agent often doesn't matter), and in news English ("Three people were arrested"). At B1, master the basic tense forms; at B2+, learn the full range of passive constructions.`,
    keyPoints: [
      'Structure: Subject + be (in correct tense) + past participle — "The report was written by Ali"',
      'Present passive: "The meeting is held every Monday." (ongoing situation, no specific agent)',
      'Past passive: "The bridge was built in 1890." (historical fact, agent unknown or unimportant)',
      'Future passive: "The results will be announced tomorrow."',
      '"By + agent" is OPTIONAL — only include it when the agent is important or surprising',
    ],
    examples: [
      { lines: ['Active: The government introduced new laws last year.', 'Passive: New laws were introduced last year. (by the government)'], note: 'The passive omits the agent when it\'s either obvious or unimportant.' },
      { lines: ['English is spoken by over 1.5 billion people worldwide.'], note: 'Scientific/academic fact — passive makes the claim sound more objective.' },
      { lines: ['Your application has been received and is being reviewed by our team.'], note: 'Present perfect passive + present continuous passive. Common in formal letters.' },
    ],
    tips: [
      'Take any active sentence you\'ve written and convert it to passive — check if the passive version sounds more natural.',
      'Read BBC News and highlight passive constructions — note what was omitted (the "by" phrase) and why.',
      'In IELTS Academic Writing Task 1, use passives for graphs/processes: "The water is filtered, then stored."',
    ],
    quiz: [
      { q: '"The Eiffel Tower ___ in 1889." Which is correct?', options: ['built', 'was built', 'has built', 'is built'], answer: 1 },
      { q: 'When should you include "by + agent" in a passive sentence?', options: ['Always', 'Never', 'When the agent is obvious', 'When the agent is important or surprising'], answer: 3 },
    ],
  },

  b1_cond12: {
    explanation: `Conditionals express what happens (or would happen) under certain conditions. Type 1 talks about real, possible future situations; Type 2 about imaginary or unlikely ones. These two types cover the vast majority of everyday conditional usage and are essential for IELTS and TOEFL writing tasks.`,
    keyPoints: [
      'Type 0 (always true): If + present simple, present simple — "If you heat ice, it melts."',
      'Type 1 (real future): If + present simple, will + base — "If it rains, I\'ll stay home."',
      'Type 2 (unreal/hypothetical): If + past simple, would + base — "If I had more time, I would travel."',
      '"Were" is more formal than "was" in Type 2: "If I were you, I would apply." (IELTS style)',
      'The "if" clause can come second: "I\'ll call you if I finish early."',
    ],
    examples: [
      { lines: ['If you study consistently, your English will improve dramatically.'], note: 'Type 1 — realistic, achievable condition. "Will" in the result clause.' },
      { lines: ['If I were the president, I would invest heavily in renewable energy.'], note: 'Type 2 — hypothetical. "Were" (not "was") is correct in formal/exam English.' },
      { lines: ['If you boil water at 100°C, it evaporates. (Type 0 — scientific fact)'] },
      { lines: ['I\'d buy a bigger house if I earned more money. (Type 2 — reversed order)'], note: 'Result clause first — common and natural. Same meaning either way.' },
    ],
    tips: [
      'Practise by completing: "If I could change one thing about my city, I would…" — IELTS Part 3 style.',
      'Write 5 Type 1 conditionals about your real plans and 5 Type 2 about imaginary scenarios.',
      'Remember: In Type 2, NEVER say "If I would…" — the "if" clause always uses past simple.',
    ],
    quiz: [
      { q: '"If she ___ harder, she will pass the exam." (Type 1)', options: ['studies', 'studied', 'would study', 'will study'], answer: 0 },
      { q: '"If I were a doctor, I ___ work in rural areas." (Type 2)', options: ['will', 'would', 'could have', 'am'], answer: 1 },
    ],
  },

  b1_reported: {
    explanation: `Reported (indirect) speech is used to relay what someone said without quoting their exact words. It requires backshifting tenses and changing pronouns and time expressions. This grammar point appears in IELTS Writing when referencing sources, and in everyday English when passing on information.`,
    keyPoints: [
      'Backshifting: present simple → past simple, past simple → past perfect, will → would, can → could',
      'Say vs tell: "She said (that) she was tired." — "She told me (that) she was tired."',
      'Pronouns change: "I am ready" → He said he was ready. (first person → third person)',
      'Time expressions change: "tomorrow" → the next day, "yesterday" → the day before, "now" → then',
      'Reporting questions: "Are you ready?" → She asked if/whether I was ready. (no auxiliary inversion)',
    ],
    examples: [
      { lines: ['Direct: "I will call you tomorrow." → Reported: She said she would call me the next day.'], note: 'will → would, tomorrow → the next day, you → me.' },
      { lines: ['Direct: "Do you speak French?" → Reported: He asked if I spoke French.'], note: 'Yes/No questions use "if" or "whether". No auxiliary inversion.' },
      { lines: ['Direct: "Don\'t be late!" → Reported: The teacher told us not to be late.'], note: 'Reported imperatives: tell/ask + object + (not) to + infinitive.' },
    ],
    tips: [
      'Watch a short English interview, then write a summary using reported speech — "She said that…", "He explained that…"',
      'Practise the most common backshifting pairs as flashcards: will/would, can/could, is/was, have/had.',
      'In IELTS Writing Task 2, use: "It is argued that…", "Researchers suggest that…" — formal reported speech.',
    ],
    quiz: [
      { q: '"I can help you." → She said she ___ help me.', options: ['can', 'could', 'will', 'would'], answer: 1 },
      { q: '"Are you coming?" → He asked ___ I was coming.', options: ['that', 'if', 'what', 'whether I am'], answer: 1 },
    ],
  },

  b1_relative: {
    explanation: `Relative clauses add information about a noun using words like "who", "which", "that", "where", and "whose". They allow you to pack more information into one sentence — a key feature of B1+ writing complexity. IELTS and TOEFL writing examiners look for "grammatical range" and relative clauses are a primary indicator of it.`,
    keyPoints: [
      'Defining (no commas): identifies which one — "The man who called me is my boss."',
      'Non-defining (with commas): adds extra info — "My boss, who is very experienced, called me."',
      'who/that = for people; which/that = for things; whose = possessive; where = place',
      'In defining clauses, "that" can replace "who" or "which" in informal English',
      'Non-defining clauses CANNOT use "that" — must use who/which/whose/where',
    ],
    examples: [
      { lines: ['The book that changed my life was written by a Japanese author.'], note: 'Defining clause — tells us WHICH book. No commas.' },
      { lines: ['Tokyo, which is the capital of Japan, has a population of over 13 million.'], note: 'Non-defining clause — adds extra info about Tokyo. Commas required.' },
      { lines: ['The professor whose research I admire is speaking at the conference next week.'], note: '"Whose" = possessive. "The professor\'s research I admire" → "The professor whose research I admire".' },
    ],
    tips: [
      'Practise combining short sentences using relative clauses: "I have a friend. She speaks 5 languages." → "I have a friend who speaks 5 languages."',
      'Aim for one relative clause per paragraph in IELTS writing — it demonstrates grammatical range.',
      'Commas are the key to defining vs non-defining — practise spotting which type appears in English texts you read.',
    ],
    quiz: [
      { q: '"The city ___ I was born is now very different."', options: ['who', 'which', 'where', 'whose'], answer: 2 },
      { q: 'Which sentence uses a non-defining relative clause?', options: ['The car that I bought is red.', 'Students who study hard pass.', 'My sister, who lives in London, is visiting.', 'The book which I read was interesting.'], answer: 2 },
    ],
  },

  // ─── B1 · Academic Readiness ──────────────────────────────────

  b1_skimming: {
    explanation: `Skimming (reading for gist) and scanning (searching for specific information) are reading strategies that dramatically reduce the time you spend on reading tasks. In IELTS Reading, you have 60 minutes for 40 questions across 3 passages — you cannot read everything word by word. These strategies are non-negotiable for Band 6+.`,
    keyPoints: [
      'Skimming: read the title, first sentence of each paragraph, and conclusion — takes 2–3 minutes per passage',
      'Scanning: move your eyes quickly over the text looking for a specific name, date, or keyword',
      'Don\'t read every word: your brain can extract meaning from the first and last words of most sentences',
      'Topic sentences (first sentence of each paragraph) contain the main idea — read these carefully',
      'Signpost words predict what follows: "However" = contrast, "Therefore" = conclusion, "For example" = example',
    ],
    examples: [
      { lines: ['Skimming exercise: read only the first sentence of each paragraph in a 500-word article.', 'Can you answer: What is the article about? What are the 3 main points?'], note: 'If you can answer both, you\'ve successfully skimmed.' },
      { lines: ['Scanning exercise: find the year the Eiffel Tower was built in a 3-paragraph text.', 'Don\'t read — let your eye move until it catches a 4-digit number.'], note: 'Scanning targets a specific type of information — numbers, proper nouns, capitalised words.' },
    ],
    tips: [
      'Time yourself skimming a BBC News article — aim to understand the main topic in under 90 seconds.',
      'In IELTS, always read the questions first, then scan the passage — never read then look at questions.',
      'Practise scanning by finding specific facts in Wikipedia articles — how fast can you locate a date or name?',
    ],
    quiz: [
      { q: 'What is "scanning" used for?', options: ['Understanding the overall meaning', 'Finding specific information quickly', 'Checking grammar in a text', 'Reading every word carefully'], answer: 1 },
      { q: 'In IELTS Reading, what should you read FIRST?', options: ['The first paragraph', 'The questions', 'The title and headings only', 'The last paragraph'], answer: 1 },
    ],
  },

  b1_notetake: {
    explanation: `Note-taking while listening is a skill that requires you to simultaneously understand, select, abbreviate, and write — all at speed. It's tested in IELTS Section 3 & 4, TOEFL Integrated tasks, and is essential for understanding lectures. Effective note-taking focuses on key information, not complete sentences.`,
    keyPoints: [
      'Write key words and phrases, NOT full sentences — speed is more important than completeness',
      'Use abbreviations: w/ (with), b/c (because), → (leads to), = (equals), e.g. (for example), ≠ (not equal)',
      'Use symbols for numbers and units: % (percent), > (more than), < (less than), ~ (approximately)',
      'Organise by indentation: main point → supporting detail → example',
      'Leave gaps and come back — missing one detail is better than missing the next three',
    ],
    examples: [
      { lines: ['Lecture sentence: "The Industrial Revolution, which began in Britain in the late 18th century, fundamentally transformed both the economy and society."', 'Notes: Ind. Revolution → Britain → late 18C → major change: econ + society'], note: 'Reduced from 22 words to 9 meaningful units. Same key facts.' },
      { lines: ['Signal phrases to write down immediately: "The main point is…", "Most importantly…", "Don\'t forget that…", "This will be on the exam…"'], note: 'Lecturers signal what matters. Train yourself to react instantly to these phrases.' },
    ],
    tips: [
      'Watch a 5-minute TED Talk and take notes using only abbreviations — then check if your notes make sense after.',
      'Create your own abbreviation system and use it consistently — consistency is more important than standard symbols.',
      'In IELTS, practise completing notes forms with the audio — the questions give you the structure, you fill in key details.',
    ],
    quiz: [
      { q: 'What is the most important principle of effective note-taking while listening?', options: ['Write every word', 'Write only key words and phrases', 'Write in full sentences', 'Record everything to listen later'], answer: 1 },
      { q: 'What should you do if you miss a detail while taking notes?', options: ['Stop and rewind', 'Leave a gap and keep listening', 'Give up on that section', 'Ask the speaker to repeat'], answer: 1 },
    ],
  },

  b1_paragraph: {
    explanation: `A well-structured paragraph is the fundamental unit of academic writing. Every IELTS and TOEFL essay paragraph follows a predictable pattern that examiners look for. Mastering paragraph structure at B1 means your writing becomes logical, easy to follow, and much easier to score highly on coherence and cohesion criteria.`,
    keyPoints: [
      'Structure: Topic sentence → Supporting sentences → Example/Evidence → Concluding/linking sentence',
      'Topic sentence: states the ONE main idea of the paragraph — one clear, arguable claim',
      'Supporting sentences: explain and develop the main idea with reasons and details',
      'Example: specific, real-world evidence — "For example…", "A study by X found that…"',
      'Each paragraph = ONE main idea. If a new idea appears, start a new paragraph.',
    ],
    examples: [
      { lines: [
        'Topic: Regular exercise has significant mental health benefits.',
        'Support: Physical activity releases endorphins, which reduce stress and improve mood.',
        'Example: For instance, a 2020 study found that 30 minutes of walking daily reduced symptoms of depression by 25%.',
        'Conclusion: This suggests that exercise should be integrated into mental health treatment plans.'
      ], note: 'T-S-E-C structure. Clear, focused, and evidence-based.' },
      { lines: ['Weak: "Exercise is good. It helps you. Many people exercise. It\'s important."'], note: 'No structure, no development, no evidence. This is C grade writing.' },
    ],
    tips: [
      'Practise the "one paragraph, one idea" rule — if you can\'t summarise your paragraph in one sentence, it needs editing.',
      'Write 5 body paragraphs on different topics using the T-S-E-C structure exactly.',
      'Read IELTS model essays and identify the topic sentence of each paragraph — they\'re always the first sentence.',
    ],
    quiz: [
      { q: 'What is the purpose of a "topic sentence"?', options: ['To give an example', 'To state the main idea of the paragraph', 'To conclude the essay', 'To introduce a counter-argument'], answer: 1 },
      { q: 'How many main ideas should each paragraph contain?', options: ['As many as possible', 'Two or three', 'One', 'None — just examples'], answer: 2 },
    ],
  },

  b1_cohesion: {
    explanation: `Coherence means your writing makes logical sense as a whole. Cohesion means the sentences are grammatically connected. Both are explicitly graded in IELTS Writing (25% of the score) and TOEFL. A well-argued essay that uses no linking language reads like a list of disconnected facts — cohesion turns ideas into an argument.`,
    keyPoints: [
      'Addition: furthermore, moreover, in addition, also, as well as, not only… but also',
      'Contrast: however, nevertheless, on the other hand, in contrast, although, despite, whereas',
      'Cause: because, since, as, due to, owing to, as a result of',
      'Effect: therefore, consequently, as a result, thus, hence, this means that',
      'Reference: use pronouns (it, they, this, these) to refer back to previously mentioned nouns',
    ],
    examples: [
      { lines: ['Poor: "Cars are convenient. Cars cause pollution. Governments should act."', 'Better: "While cars are undeniably convenient, they cause significant pollution. Therefore, governments must take decisive action to regulate their use."'], note: '"While" (contrast) + pronoun reference ("they") + "therefore" (consequence) = cohesive argument.' },
      { lines: ['Furthermore, studies have consistently shown that urban green spaces reduce stress. In addition, they improve air quality and support local biodiversity.'], note: '"Furthermore" adds a new point. "In addition" adds another. Avoid starting every sentence with "Also".' },
    ],
    tips: [
      'Highlight all linking words in a model IELTS essay — count them and note the variety used.',
      'Write 3 paragraphs on one topic: one using only "Also", one using only "However", one with full variety — compare them.',
      'Avoid overusing "Firstly, Secondly, Thirdly, Finally" — mix in other connectors for a higher band.',
    ],
    quiz: [
      { q: 'Which connector introduces a contrasting idea?', options: ['Furthermore', 'Therefore', 'However', 'In addition'], answer: 2 },
      { q: '"Coherence" in writing means…', options: ['Using many long words', 'Ideas are logically connected and flow well', 'Having no grammar errors', 'Writing long paragraphs'], answer: 1 },
    ],
  },

  b1_awl: {
    explanation: `The Academic Word List (AWL), developed by Averil Coxhead, contains 570 word families that appear frequently across academic texts in all disciplines. Learning these words is one of the highest-return investments for IELTS and TOEFL candidates — they boost Reading comprehension, Writing vocabulary scores, and Listening in academic sections simultaneously.`,
    keyPoints: [
      'AWL is organised in 10 sublists by frequency — Sublist 1 is most common: analyse, approach, area, assess, assume',
      'Each "word family" includes the noun, verb, adjective, and adverb forms — learn all four',
      'AWL words rarely appear alone — learn them in phrases: "conduct research", "significant increase", "key factor"',
      'Words to prioritise first: analyse, concept, data, define, establish, factor, focus, indicate, method, theory',
      'AWL differs from General Service List (GSL) — it covers words specific to academic, not everyday, English',
    ],
    examples: [
      { lines: ['Analyse (v) → analysis (n) → analytical (adj) → analytically (adv)', 'Usage: "The researchers analysed the data and their analysis revealed a significant pattern."'], note: 'Learn the whole word family — IELTS tests all forms.' },
      { lines: ['High-frequency AWL collocations:', '"conduct an analysis", "significant factor", "key issue", "establish a link", "indicate a trend"'], note: 'Collocations make your writing sound natural — not just correct.' },
      { lines: ['IELTS Task 2: "Economic inequality is a significant factor in determining social mobility…"'], note: 'AWL words ("significant", "factor", "determine") elevate the vocabulary score immediately.' },
    ],
    tips: [
      'Download the full AWL from the Victoria University website — study 10 words per day with collocations.',
      'Use Quizlet or Anki to create flashcards — include a sentence using each word in context, not just a definition.',
      'While reading academic texts, highlight every AWL word you find — this shows you which ones appear most in your field.',
    ],
    quiz: [
      { q: 'What is the AWL (Academic Word List)?', options: ['A list of the 1000 most common English words', 'A list of words that appear frequently in academic texts', 'A grammar guide for academic writing', 'A list of words used in everyday conversation'], answer: 1 },
      { q: 'Which is an AWL word?', options: ['The', 'And', 'Analyse', 'Because'], answer: 2 },
    ],
  },

  // ─── B2 · Advanced Expression ─────────────────────────────────

  b2_nuance: {
    explanation: `Hedging language — making statements sound less absolute — is a hallmark of academic and professional English at B2+. Native speakers and IELTS Band 7+ candidates rarely state things as absolute facts unless they are certain. Hedging makes your arguments sound more considered, more credible, and more academically appropriate.`,
    keyPoints: [
      'Modal hedges: "may", "might", "could", "would" — "This could suggest that…", "It might be that…"',
      'Cognitive verb hedges: "It seems/appears that…", "It is thought that…", "Researchers believe that…"',
      'Adverbial hedges: "arguably", "presumably", "generally", "typically", "to some extent"',
      'Degree hedges: "somewhat", "fairly", "relatively", "rather", "to a certain degree"',
      'Attribution: "According to X…", "As X argues…", "X suggests that…" — distance from the claim',
    ],
    examples: [
      { lines: ['Absolute (weak): "Social media destroys relationships."', 'Hedged (strong): "It could be argued that social media has, in some cases, undermined the quality of interpersonal relationships."'], note: 'The hedged version is paradoxically stronger — it sounds more credible and harder to refute.' },
      { lines: ['According to recent studies, regular exercise may reduce the risk of depression by up to 30%, although further research is needed to establish causation.'], note: '"May reduce" + "up to" + "although further research is needed" = triple hedging. Excellent academic style.' },
    ],
    tips: [
      'Read The Economist or academic abstracts and highlight every hedging word or phrase you find.',
      'Take a paragraph you\'ve written and add appropriate hedges — does it sound more authoritative?',
      'In IELTS Task 2, every claim you make should have at least one hedge unless it\'s universally accepted fact.',
    ],
    quiz: [
      { q: 'Why do academic writers use hedging language?', options: ['To show they don\'t know the answer', 'To make claims sound more measured and credible', 'To avoid being interesting', 'To confuse the reader'], answer: 1 },
      { q: 'Which sentence uses hedging correctly?', options: ['Social media is ruining society.', 'Social media has arguably contributed to certain social problems.', 'Everyone hates social media.', 'Social media is definitely dangerous always.'], answer: 1 },
    ],
  },

  b2_register: {
    explanation: `Register is the level of formality matched to the social context. Choosing the wrong register — texting slang in a job application, or overly formal language with a friend — creates a negative impression even when the grammar is correct. B2 learners must actively control register, not just use English that "feels natural".`,
    keyPoints: [
      'Formal (academic/professional): full forms, no contractions, Latinate vocabulary, passive voice',
      'Semi-formal (workplace email, reports): clear, professional, contractions acceptable',
      'Informal (friends, chat): contractions, slang, phrasal verbs, ellipsis ("Going?" not "Are you going?")',
      'Formal vocabulary pairs: use/utilise, buy/purchase, show/demonstrate, think/consider, get/obtain',
      'IELTS Writing: always formal. IELTS Speaking: semi-formal (natural but not slangy)',
    ],
    examples: [
      { lines: ['Informal: "Hey, wanna grab lunch tomorrow? I\'m free after 12."', 'Formal: "I would like to propose a lunch meeting for tomorrow, at your earliest convenience after midday."'], note: 'Same invitation — wildly different register. Formal in informal context = strange. Vice versa = rude.' },
      { lines: ['IELTS Writing — wrong: "I think governments gotta spend more on education, it\'s a no-brainer."', 'IELTS Writing — right: "It is arguable that governments should allocate greater resources to education."'], note: 'Contractions, slang ("gotta", "no-brainer"), and informal phrasing lose marks in IELTS Task 2.' },
    ],
    tips: [
      'Write the same message (e.g., apologising for being late) in three registers: text to a friend, email to a colleague, letter to a professor.',
      'Read a formal email and rewrite it informally — then try the reverse. Notice what specifically changes.',
      'In IELTS Writing, never use: contractions (I\'m, don\'t), conversational phrases (a lot of, kind of), or first person in Task 1.',
    ],
    quiz: [
      { q: 'Which phrase is APPROPRIATE for a formal academic essay?', options: ['I think it\'s pretty obvious that...', 'Lots of people believe...', 'It is widely acknowledged that...', 'Everyone knows...'], answer: 2 },
      { q: 'In IELTS Writing Task 2, which should you avoid?', options: ['Passive voice', 'Contractions (e.g. "don\'t")', 'Complex sentences', 'Connectors'], answer: 1 },
    ],
  },

  b2_argue: {
    explanation: `Effective argumentation — making a clear claim, supporting it with evidence, addressing the opposing view, and drawing a conclusion — is the foundation of IELTS Task 2, TOEFL Writing, and any professional debate. At B2, you move from simply stating opinions to constructing a structured, logically sound argument.`,
    keyPoints: [
      'Claim: a clear, debatable statement — "X is more important than Y because…"',
      'Evidence: facts, statistics, research, or logical reasoning that support your claim',
      'Concession: acknowledge the strongest counter-argument — "While it is true that…, nevertheless…"',
      'Rebuttal: explain why the counter-argument doesn\'t change your conclusion',
      'Conclusion: restate your position in new words, don\'t introduce new ideas',
    ],
    examples: [
      { lines: [
        'Claim: Remote work is more productive than office work.',
        'Evidence: Studies show remote workers complete 13% more tasks than office counterparts (Stanford, 2015).',
        'Concession: While collaboration can suffer without face-to-face contact,',
        'Rebuttal: modern tools such as video conferencing largely mitigate this limitation.',
        'Conclusion: Overall, the productivity gains of remote work outweigh the collaborative drawbacks.'
      ] },
    ],
    tips: [
      'Practise the "Concede-Rebut" pattern: "While X is true, Y demonstrates that…" — this alone boosts IELTS Task Response.',
      'Read editorial articles in The Guardian or BBC — identify each element of the argument structure.',
      'Write one IELTS Task 2 response per week and map your argument: claim → evidence → concession → rebuttal → conclusion.',
    ],
    quiz: [
      { q: 'What is a "concession" in an argument?', options: ['Your main claim', 'Admitting a point in favour of the opposing view', 'Your conclusion', 'A type of evidence'], answer: 1 },
      { q: '"While social media has benefits, its drawbacks outweigh them." This sentence structure…', options: ['Is too informal for essays', 'Makes a concession then states the main argument', 'Is grammatically incorrect', 'Only states one side'], answer: 1 },
    ],
  },

  b2_complex: {
    explanation: `Complex sentence structures are a key differentiator between B1 and B2 writing. IELTS and TOEFL writing examiners look for a "wide range of complex structures used accurately" for Band 7+. This means combining multiple clause types — relative, adverbial, nominal, and participle — in a controlled, accurate way.`,
    keyPoints: [
      'Adverbial clauses: "Although/While/Unless/As long as/Provided that + clause, main clause"',
      'Nominal clauses (what/that as subject): "What concerns most experts is the speed of change."',
      'Participle clauses: "Having studied the data, the researchers concluded that…" (formal, reduced)',
      'Fronted elements: "Not until the 20th century did women gain the right to vote." (inversion for emphasis)',
      'Multiple embeddings: "The policy, which was introduced last year despite widespread opposition, has yet to show results."',
    ],
    examples: [
      { lines: ['Simple: "Technology is changing work. This is a problem for some workers."', 'Complex: "Although technology is transforming the workplace at an unprecedented pace, many workers lack the skills required to adapt."'], note: '"Although" subordinates one idea, creating sophistication without losing clarity.' },
      { lines: ['Having considered all available evidence, the committee decided to postpone the vote.'], note: 'Participle clause — formal, compact, and impressive in academic writing.' },
      { lines: ['What remains unclear is whether the economic benefits of automation will be distributed equitably.'], note: '"What" nominal clause as subject — a very high-level structure for B2+ writing.' },
    ],
    tips: [
      'Choose one complex structure per week and practise writing 10 sentences using it correctly before moving on.',
      'In IELTS essays, aim for 1–2 genuinely complex sentences per paragraph — accuracy over quantity.',
      'Read complex sentences in academic papers and try to "simplify" them — this shows you understand the structure.',
    ],
    quiz: [
      { q: '"Having finished the report, she sent it to her manager." What type of clause is "Having finished the report"?', options: ['Relative clause', 'Nominal clause', 'Participial clause', 'Conditional clause'], answer: 2 },
      { q: 'Which sentence uses a complex structure correctly?', options: ['Although but he tried hard.', 'Although he tried hard, he failed.', 'He tried hard although but failed.', 'Although, he tried hard.'], answer: 1 },
    ],
  },

  b2_idioms: {
    explanation: `Idiomatic expressions make English sound natural and native. At B2, you're expected to understand and occasionally use common idioms appropriately. The key is knowing when they're appropriate (speaking, informal writing) and when they're not (academic essays). Overusing idioms or using them in wrong contexts actually lowers your IELTS score.`,
    keyPoints: [
      'Common categories: time ("in the long run", "from time to time"), effort ("go the extra mile", "bite the bullet")',
      'Problem idioms: "hit a wall", "the ball is in your court", "back to square one", "bite off more than you can chew"',
      'Success/failure: "rise to the occasion", "fall flat", "make or break", "go from strength to strength"',
      'Context rule: use idioms in IELTS Speaking — avoid them in IELTS Academic Writing Task 1 and 2',
      'Misused idioms: "It\'s raining cats and dogs" — extremely cliché. Prefer less-known, more natural expressions',
    ],
    examples: [
      { lines: ['A: How\'s the project going?', 'B: We hit a wall last week with the data, but we\'ve worked through it. Fingers crossed we meet the deadline.'], note: '"Hit a wall" = encountered a major obstacle. "Fingers crossed" = hoping for good luck. Natural spoken English.' },
      { lines: ['Learning a language is a marathon, not a sprint. In the long run, consistent daily practice will outperform intensive cramming sessions.'], note: '"In the long run" = over an extended period. Acceptable even in semi-formal writing.' },
    ],
    tips: [
      'Learn idioms in context from real conversations, films, or podcasts — not from lists alone.',
      'For every idiom you learn, note: 1) What does it mean? 2) Is it formal or informal? 3) Can I use it in IELTS?',
      'Practise by replacing "very difficult" with an idiom in 5 different sentences: "uphill battle", "tough nut to crack", "no easy feat".',
    ],
    quiz: [
      { q: '"Back to square one" means…', options: ['Starting over from the beginning', 'Making great progress', 'Solving the final problem', 'Taking a short break'], answer: 0 },
      { q: 'Where should you generally AVOID using idioms?', options: ['IELTS Speaking', 'Casual conversation', 'IELTS Academic Writing Task 2', 'Text messages to friends'], answer: 2 },
    ],
  },

  // ─── B2 · Advanced Grammar ────────────────────────────────────

  b2_allcond: {
    explanation: `Mastering all four conditional types — plus mixed conditionals — gives you complete command of hypothetical and real situations in English. Mixed conditionals, which combine elements of Type 2 and Type 3, are particularly valued in IELTS Band 7+ writing because they show sophisticated understanding of time and reality.`,
    keyPoints: [
      'Type 0 (always true): If + present, present — "If you mix red and blue, you get purple."',
      'Type 1 (real future): If + present, will — "If you practise daily, you will improve."',
      'Type 2 (unreal present/future): If + past, would — "If I had more money, I would travel."',
      'Type 3 (unreal past): If + past perfect, would have — "If I had studied harder, I would have passed."',
      'Mixed: If + past perfect (unreal past), would + base (present consequence) — "If I had studied medicine, I would be a doctor now."',
    ],
    examples: [
      { lines: ['Type 3: If the government had invested in renewables earlier, we would not be facing this energy crisis now.'], note: 'Criticism of past decision using Type 3 — common in IELTS Task 2 arguments.' },
      { lines: ['Mixed: If I had taken that job offer in Singapore, I would be living there now.'], note: 'Past condition (didn\'t take job) → present consequence (not living there). Mixed conditional.' },
      { lines: ['Unless governments act immediately, climate change will cause irreversible damage. (Type 1)'], note: '"Unless" = "If not" — a common alternative in academic and formal English.' },
    ],
    tips: [
      'Practise mixed conditionals with personal regrets: "If I had studied X, I would be Y now."',
      'In IELTS Task 2, use Type 3 to discuss historical policy failures — it demonstrates grammatical range.',
      'Learn "unless", "provided that", "as long as", "on condition that" — all introduce conditional clauses.',
    ],
    quiz: [
      { q: '"If she ___ the deadline, she would have kept the job." (Type 3)', options: ['met', 'had met', 'would meet', 'has met'], answer: 1 },
      { q: '"If I had saved more money last year, I ___ afford a house now." (Mixed)', options: ['can', 'could have', 'would', 'will'], answer: 2 },
    ],
  },

  b2_advpass: {
    explanation: `Advanced passive constructions go far beyond "was built" — they include passive infinitives, passive gerunds, impersonal passive reporting structures, and double object passives. These structures dominate academic and journalistic English, and using them accurately signals C1-level grammatical control even at B2.`,
    keyPoints: [
      'Impersonal reporting passive: "It is believed/thought/claimed/argued/expected/known that…"',
      'Double passive: "She is said to have discovered it." / "He is thought to be living abroad."',
      'Passive infinitive: "The document needs to be signed." / "It remains to be seen whether…"',
      'Passive gerund: "Being criticised in public is deeply uncomfortable."',
      'Causative "have/get": "I had my car repaired." / "She got her hair cut." (passive in meaning)',
    ],
    examples: [
      { lines: ['It is widely believed that climate change poses an existential threat to coastal communities.'], note: '"It is believed that" = formal, objective academic claim. Avoids "I think" or "everyone thinks".' },
      { lines: ['The CEO is reported to have resigned following the financial scandal.'], note: '"Is reported to have" = double object passive. Very common in news English.' },
      { lines: ['Having been overlooked for promotion three times, she decided to change companies.'], note: 'Passive participial clause — signals high grammatical range in writing.' },
    ],
    tips: [
      'Read BBC or Reuters headlines and identify every passive construction — news English is full of them.',
      'In IELTS Writing Task 2, replace "People think that" with "It is widely thought that" — instant register upgrade.',
      'Practise "it is said/believed/reported/claimed + that" with 10 different current events.',
    ],
    quiz: [
      { q: '"___ that the economy will recover by next year." (formal passive)', options: ['People say', 'It is said', 'They believe', 'Everyone thinks'], answer: 1 },
      { q: '"She got her car ___." (causative)', options: ['repair', 'repairing', 'repaired', 'to repair'], answer: 2 },
    ],
  },

  b2_inversion: {
    explanation: `Inversion — placing the auxiliary verb before the subject — is used for emphasis, formal effect, and after certain negative or limiting adverbs. It's one of the most striking markers of sophisticated written English. A single well-placed inversion in an IELTS essay immediately signals Band 7+ grammatical range to an examiner.`,
    keyPoints: [
      'After negative/limiting adverbs at the start: Never, Rarely, Seldom, Hardly, No sooner, Not only, Little',
      'Structure: negative adverb + auxiliary + subject + main verb',
      '"Rarely does she miss a deadline." (NOT "Rarely she misses…")',
      '"Not only did he pass, but he also achieved the highest score."',
      '"So + adjective + be + subject": "So serious was the situation that the CEO was called in."',
    ],
    examples: [
      { lines: ['Never before has the world faced such a complex combination of environmental and social crises.'], note: '"Never before + has/have/had + subject" — extremely powerful opening for an essay.' },
      { lines: ['Not only does regular exercise improve physical health, but it also significantly enhances mental wellbeing.'], note: '"Not only does" — note the inversion after "not only", but normal word order after "but also".' },
      { lines: ['Hardly had she sat down when the phone rang.'], note: '"Hardly had + subject + past participle + when" — sequence inversion for dramatic narrative effect.' },
    ],
    tips: [
      'Memorise 5 inversion openers and practise writing one essay paragraph starting with each.',
      'In IELTS Task 2 conclusions, try: "Only by [action] can society [achieve goal]." — impresses examiners.',
      'Read The Economist or academic introductions and look for inversions — note the effect they create.',
    ],
    quiz: [
      { q: '"Rarely ___ such dedication in a student." (inversion)', options: ['I see', 'do I see', 'I have seen', 'I saw'], answer: 1 },
      { q: 'Which sentence uses inversion correctly?', options: ['Never she has been late.', 'Never has she been late.', 'She never has been late.', 'Never she been late has.'], answer: 1 },
    ],
  },

  b2_participle: {
    explanation: `Participial clauses reduce two clauses into one compact structure, making writing feel more sophisticated and less repetitive. They are common in formal written English — academic papers, quality journalism, and literary prose. Using them accurately in IELTS writing is a clear Band 7 indicator.`,
    keyPoints: [
      'Present participle (-ing): simultaneous action or reason — "Walking down the street, she noticed a shop."',
      'Past participle (-ed): passive meaning or completed action — "Written in 1984, the novel remains relevant."',
      'Perfect participle: action completed before the main verb — "Having finished the report, he submitted it."',
      'Subject must be the same for both clauses — a "dangling participle" is a common advanced error',
      'Negative: "Not knowing the answer, she remained silent." (Not + -ing)',
    ],
    examples: [
      { lines: ['Having reviewed the available evidence, the committee concluded that further investment was necessary.'], note: '"Having reviewed" (perfect participle) = the review was completed before the conclusion.' },
      { lines: ['Surrounded by dense forest, the village receives little sunlight in winter.'], note: 'Past participle ("surrounded") has passive meaning — the village is surrounded.' },
      { lines: ['❌ "Walking to work, the rain began to fall." (dangling — rain wasn\'t walking)', '✓ "Walking to work, she was caught in a sudden downpour."'], note: 'The subject of the participle MUST match the subject of the main clause.' },
    ],
    tips: [
      'Convert 10 pairs of short sentences into single sentences using participial clauses.',
      'Check for dangling participles whenever you write one — ask: who/what is doing the action in the -ing clause?',
      'Read formal report writing and legal English — these use participial clauses very frequently.',
    ],
    quiz: [
      { q: '"___ the exam, she felt a wave of relief." (Perfect participial)', options: ['Finished', 'Having finished', 'She finished', 'To finish'], answer: 1 },
      { q: 'Which sentence has a DANGLING participle?', options: ['Having studied hard, she passed the exam.', 'Running to the station, the train left without him.', 'Exhausted by the journey, the team rested.', 'Not knowing the way, she asked for directions.'], answer: 1 },
    ],
  },

  b2_mixed: {
    explanation: `Academic and professional texts use a deliberate mix of tenses to establish timeframes, signal relevance, and show change over time. The ability to use tenses strategically — not just accurately — is what pushes a writer from B1 to B2+. IELTS Writing Task 1 in particular requires precise tense control across multiple time periods.`,
    keyPoints: [
      'Present simple: facts, general truths, analysis ("The data shows…", "This indicates that…")',
      'Past simple: historical events and specific completed periods ("In 2010, production fell sharply.")',
      'Present perfect: recent events, trends up to now ("Prices have risen steadily since 2015.")',
      'Future forms: predictions and projections ("Output is expected to increase by 2030.")',
      'IELTS Task 1 rule: match the tense to the timeframe shown on the graph — don\'t mix accidentally',
    ],
    examples: [
      { lines: ['The graph shows that sales rose sharply between 2015 and 2018. Since then, they have stabilised at around 50,000 units per year. Experts predict that demand will continue to grow throughout the next decade.'], note: 'Past simple (2015–18) → present perfect (since then) → future (prediction). Perfectly controlled.' },
      { lines: ['Academic writing: "Research conducted in the 1990s suggested X. However, more recent studies have shown that Y."'], note: 'Past simple for older research + present perfect for recent findings = precise academic signalling.' },
    ],
    tips: [
      'In IELTS Task 1, always check the dates on the graph before writing — never use future tense for past data.',
      'Write a 150-word IELTS Task 1 response for any graph you find online — focus purely on tense accuracy.',
      'Read the grammar of tense choice in academic writing guides (e.g., Oxford Academic Writing) — one chapter on this transforms your writing.',
    ],
    quiz: [
      { q: 'For data from 2010–2020 on an IELTS Task 1 graph, use…', options: ['Future simple', 'Present simple only', 'Past simple', 'Present perfect only'], answer: 2 },
      { q: '"Sales ___ significantly since the new product launched." (up to now)', options: ['increase', 'increased', 'have increased', 'will increase'], answer: 2 },
    ],
  },

  // ─── B2 · Test-Ready Skills ────────────────────────────────────

  b2_essay: {
    explanation: `IELTS Task 2 and TOEFL Independent Writing essays follow a predictable structure that, once mastered, can be deployed for almost any prompt. The structure itself is not just a template — it reflects how logical academic argument is constructed. Understanding WHY each section exists makes the structure feel natural rather than mechanical.`,
    keyPoints: [
      'Introduction: paraphrase prompt → thesis (your position) — NEVER copy the question word-for-word',
      'Body paragraph 1: strongest argument supporting your thesis + evidence + example',
      'Body paragraph 2: second argument OR acknowledgement of opposing view + rebuttal',
      'Conclusion: restate thesis in new words → wider implication or call to action — no new ideas',
      'IELTS word count: Task 2 = 250 words minimum. TOEFL Independent = 300 words. Going over is fine.',
    ],
    examples: [
      { lines: [
        'Prompt: "Some people believe children should be allowed to use smartphones at school. Discuss both views and give your opinion."',
        'Introduction: "The question of whether smartphones should be permitted in educational settings has become increasingly contentious. While some argue these devices enhance learning, I believe the drawbacks outweigh the benefits."',
      ], note: 'Paraphrase (not copy) → both sides acknowledged → clear opinion in thesis.' },
      { lines: [
        'Conclusion: "In conclusion, while smartphones undoubtedly offer certain educational advantages, their potential for distraction and misuse makes them unsuitable for regular classroom use. Schools should instead explore dedicated educational technology with appropriate controls."'
      ], note: 'Restates position → extends with a practical solution. Does not introduce new evidence.' },
    ],
    tips: [
      'Time yourself strictly: IELTS Task 2 = 40 minutes. Plan (5 min) → write (30 min) → proofread (5 min).',
      'Practise paraphrasing the prompt before writing — never copy exact words. This affects your Task Achievement score.',
      'Write one full essay per week and analyse it against IELTS Band Descriptors — identify your weakest criterion.',
    ],
    quiz: [
      { q: 'In an IELTS Task 2 conclusion, you should…', options: ['Introduce new evidence', 'Copy the introduction', 'Restate your thesis in new words', 'Write a new argument'], answer: 2 },
      { q: 'What is the minimum word count for IELTS Writing Task 2?', options: ['150 words', '200 words', '250 words', '300 words'], answer: 2 },
    ],
  },

  b2_integrated: {
    explanation: `TOEFL Integrated Writing and Speaking tasks require you to read and/or listen to academic material, then synthesise it in your response. This tests a fundamentally different skill from independent writing — you must accurately represent source material rather than generate your own arguments, while demonstrating critical thinking about how the sources relate.`,
    keyPoints: [
      'Task structure: Read passage (3 min) → Listen to lecture (2 min) → Write 150–225 words synthesising both',
      'The lecture ALWAYS challenges, qualifies, or expands on the reading — never fully agrees',
      'Use reporting language: "The reading states…", "The lecturer argues…", "In contrast to the passage…"',
      'Never give your own opinion — only report and relate what the sources say',
      'Organise by point of comparison: reading point A → lecture response to A (×3 points)',
    ],
    examples: [
      { lines: [
        'Reading: "Ancient megaliths were built for astronomical purposes."',
        'Lecture: "While the reading suggests astronomical use, new archaeological evidence points to ceremonial burial practices."',
        'Your response: "The reading claims that megaliths served astronomical functions. However, the lecturer challenges this view, presenting evidence that suggests they were primarily used for ceremonial burials."'
      ], note: '"The reading claims" + "However, the lecturer challenges" = clear synthesis with contrast.' },
    ],
    tips: [
      'Take notes during both the reading and the lecture — the lecture will address the same 3 points as the reading in order.',
      'Practise at ETS TOEFL\'s official prep materials — they have authentic integrated task samples.',
      'Time yourself: 20 minutes for integrated writing. Accuracy and synthesis matter more than word count.',
    ],
    quiz: [
      { q: 'In TOEFL Integrated Writing, what is your main task?', options: ['Write your own opinion on the topic', 'Summarise only the reading', 'Synthesise and relate the reading and the lecture', 'Argue against both sources'], answer: 2 },
      { q: 'In TOEFL Integrated tasks, the lecture\'s relationship to the reading is always…', options: ['Full agreement', 'Challenge, qualification, or expansion', 'Unrelated', 'A summary'], answer: 1 },
    ],
  },

  b2_acadread: {
    explanation: `Advanced academic reading strategies go beyond skimming and scanning. At B2, you need to infer implied meaning, identify the author's purpose and bias, track argument development across a long text, and distinguish fact from opinion. These skills are tested heavily in IELTS Reading Passages 2 and 3, and in TOEFL Academic Reading.`,
    keyPoints: [
      'Inference: the answer is not stated directly — you must draw a logical conclusion from what IS written',
      'Author\'s purpose: to inform, argue, critique, compare, evaluate, or entertain — identify the verb',
      'Fact vs opinion: facts can be verified; opinions are signalled by "I believe", "arguably", "may", "tend to"',
      'Paragraph function: does this paragraph introduce, support, contrast, concede, or conclude?',
      'Paraphrase detection: IELTS answers use different words from the question — match meaning, not words',
    ],
    examples: [
      { lines: ['"Although the study\'s findings were widely praised, several methodological limitations remain unaddressed."'], note: 'Implied meaning: the study has problems that undermine its credibility, despite praise.' },
      { lines: ['IELTS question: "The writer suggests that urban farming…"', '"Suggests" = inference question. Don\'t look for the phrase "urban farming is..." — look for implied meaning.'], note: '"Suggests", "implies", "infers" all signal inference questions — read between the lines.' },
    ],
    tips: [
      'After reading any English article, write 3 things the author implies but doesn\'t state directly.',
      'Practise IELTS True/False/Not Given carefully — "Not Given" is NOT the same as "False". The text simply doesn\'t address it.',
      'For IELTS Passage 3, read the questions before the text — it saves critical time on the hardest passage.',
    ],
    quiz: [
      { q: 'An "inference" question asks you to…', options: ['Find exact words from the text', 'Draw a logical conclusion from what is implied', 'Summarise the passage', 'Identify the author\'s name'], answer: 1 },
      { q: '"Not Given" in IELTS True/False/Not Given means…', options: ['The statement is false', 'The text contradicts the statement', 'The text doesn\'t address the statement', 'The writer is uncertain'], answer: 2 },
    ],
  },

  b2_listenadv: {
    explanation: `Advanced listening at B2 means processing authentic native speech — varied accents, natural pace, conversational overlap, and academic complexity — without transcripts or simplified audio. IELTS Sections 3 and 4, and TOEFL Academic Listening, operate at this level. The challenge shifts from vocabulary to processing speed and academic content comprehension.`,
    keyPoints: [
      'IELTS Section 4: 10-minute academic monologue with no pause — requires sustained concentration',
      'TOEFL Listening: lectures with a professor + students asking questions; campus conversations',
      'Academic listening challenges: technical vocabulary, hedged language, speaker interaction, implied meaning',
      'Accent variety: IELTS uses British, Australian, North American, and other accents — practise all of them',
      'Signpost language for lectures: "Today we\'ll be looking at…", "The key point here is…", "Moving on to…"',
    ],
    examples: [
      { lines: ['IELTS Section 4 signals to note immediately:', '"There are three main factors…" → expect exactly 3 points', '"What\'s interesting is…" → about to give key content', '"Contrary to what you might expect…" → a surprising / counterintuitive fact'] },
      { lines: ['TOEFL: professor asks "What do you think accounts for this?" — student is about to give an answer that the listening question likely tests.'], note: 'Speakers signal important content through questions, pauses, and emphasis. Train your ear.' },
    ],
    tips: [
      'Listen to TED talks, BBC Radio 4 documentaries, and MIT OpenCourseWare lectures — all genuine B2+ input.',
      'Shadow (repeat aloud immediately after) native speakers — this builds processing speed dramatically.',
      'Practise IELTS Section 4 and TOEFL Listening with strict timing — no pausing, no rewinding.',
    ],
    quiz: [
      { q: 'In IELTS Listening Section 4, you should expect…', options: ['A conversation between two friends', 'A 10-minute academic monologue with no break', 'An interview with a public figure', 'Short news clips'], answer: 1 },
      { q: 'Hearing "There are three main causes of this phenomenon" tells you…', options: ['The speaker will give many examples', 'You need to note exactly 3 causes', 'The topic is changing', 'The speaker is uncertain'], answer: 1 },
    ],
  },

  b2_speakflu: {
    explanation: `Speaking fluency at B2 means sustaining extended speech without long pauses, producing a variety of complex structures accurately, and self-correcting naturally. It's distinct from accuracy — you can be accurate but stilted, or fluent but imprecise. IELTS Speaking Band 7 specifically rewards natural, unhesitant speech with minimal loss of coherence.`,
    keyPoints: [
      'Fluency markers: fillers used appropriately — "well", "you know", "actually", "I mean", "sort of"',
      'Self-correction: "I went — sorry, I mean I\'m going — to the conference next week." (natural, not penalised)',
      'Coherent extended turns: use discourse markers to organise your speech as you speak',
      'Pace: slight pauses for thinking are fine — long silences (3+ seconds) are not',
      'IELTS Band 7 descriptor: "speaks at length without noticeable effort"; "uses a range of connectives"',
    ],
    examples: [
      { lines: ['A: How has technology changed the way people communicate?', 'B: Well, I think it\'s had a massive impact, actually. On one hand, it\'s made communication much faster and more accessible — I mean, you can video call someone on the other side of the world in seconds. On the other hand, some people argue it\'s made us less connected in a deeper sense…'], note: 'Natural fillers, connectors, hedging, and extended response. This is IELTS Band 7 speaking.' },
    ],
    tips: [
      'Record 2-minute monologues on any topic daily — count the seconds of silence and try to reduce them each week.',
      'Listen back to your recordings and note: Do you use a variety of connectors? Do you self-correct naturally?',
      'Practise "thinking aloud" — when you don\'t know what to say next, use a filler phrase rather than going silent.',
    ],
    quiz: [
      { q: 'In IELTS Speaking, a natural self-correction is…', options: ['A serious error', 'Penalised heavily', 'A normal feature of fluent speech', 'Only acceptable in Part 1'], answer: 2 },
      { q: 'Which behaviour most negatively affects IELTS Speaking fluency scores?', options: ['Using fillers like "well"', 'Long silences of 3+ seconds', 'Self-correcting mid-sentence', 'Answering at length'], answer: 1 },
    ],
  },

  // ─── C1 · Sophisticated Communication ─────────────────────────

  c1_implied: {
    explanation: `At C1, much of what English communicates is not in the words themselves but in the subtext — what the speaker implies, withholds, or signals indirectly. Understanding implied meaning requires deep cultural knowledge, contextual awareness, and the ability to read tone. This is the difference between translating English and truly understanding it.`,
    keyPoints: [
      'Understatement: saying less than you mean — "That was rather unfortunate." (= it was a disaster)',
      'Irony: meaning the opposite of what you say — "Oh great, another Monday." (= not great at all)',
      'Implicature: the implied meaning — "Have you done the dishes?" implies "Please do the dishes."',
      'Hedged criticism: "Your draft is interesting, but I wonder if the argument could be developed further."',
      'Politeness strategies: "It might be worth considering…" = a polite but clear suggestion',
    ],
    examples: [
      { lines: ['"He\'s not the sharpest tool in the shed." (irony/understatement)'], note: 'A tool that\'s not sharp is dull — implying the person is not very intelligent. Indirect but clear to native speakers.' },
      { lines: ['Manager: "You might want to reconsider that approach."'], note: 'The implicature: the approach is wrong, and you should change it — phrased as a suggestion, but functions as a directive.' },
      { lines: ['"This essay has some interesting ideas." (from a professor)'], note: 'Subtext: the essay has problems. "Interesting" without elaboration is often a polite negative in academic feedback.' },
    ],
    tips: [
      'Watch British comedy (The Office UK, Fawlty Towers) — the humour relies almost entirely on understatement and irony.',
      'Practise identifying implicature in emails — when someone says "I\'ll take a look when I get a chance", what do they really mean?',
      'Read advice emails and letters in English newspapers — writers signal implied meaning constantly.',
    ],
    quiz: [
      { q: '"That presentation was quite adequate." What does "quite adequate" imply?', options: ['It was excellent', 'It was acceptable but not impressive', 'It failed completely', 'The speaker loved it'], answer: 1 },
      { q: 'Understatement means…', options: ['Exaggerating to make a point', 'Saying less than you actually mean', 'Being very direct', 'Using technical language'], answer: 1 },
    ],
  },

  c1_discourse: {
    explanation: `Academic discourse has its own conventions that differ significantly from everyday English — and even from formal business writing. Understanding these conventions allows you to produce text that sounds genuinely academic rather than just formal. C1 learners must move from writing "correctly" to writing in the way that academics actually communicate.`,
    keyPoints: [
      'Academic English prefers impersonal constructions: "It is argued that…" rather than "I think…"',
      'Hedging is the default: rarely make absolute claims — "tends to", "may suggest", "appears to indicate"',
      'Citations signal authority: "As Smith (2018) demonstrates…", "According to recent meta-analyses…"',
      'Nominalisation converts verbs to nouns: "analyse" → "analysis"; "differ" → "difference" — more formal',
      'Passive voice backgrounds the agent: "The samples were collected" (who collected doesn\'t matter)',
    ],
    examples: [
      { lines: ['Everyday: "Scientists think that climate change is getting worse."', 'Academic: "A growing body of evidence suggests that the rate of climate change may be accelerating beyond initial projections."'], note: 'Hedging + nominalisation + impersonal = academic register.' },
      { lines: ['Nominalisation: "We failed to consider the implications." → "The failure to consider the implications…"'], note: '"The failure" (noun) instead of "failed" (verb) — more formal and more cohesive.' },
    ],
    tips: [
      'Read academic abstracts in your field daily — note every convention you observe: hedge, passive, nominalisation, citation.',
      'Practise converting everyday sentences to academic register — this builds a "code-switching" reflex.',
      'For IELTS Academic Writing Task 2, aim for 70% impersonal constructions and 30% personal (with hedging).',
    ],
    quiz: [
      { q: 'What is "nominalisation" in academic writing?', options: ['Using shorter sentences', 'Converting verbs/adjectives to nouns for a more formal tone', 'Writing in the passive voice', 'Using technical vocabulary'], answer: 1 },
      { q: 'Which is more appropriate for academic writing?', options: ['"I think this policy is wrong."', '"It could be argued that this policy has significant limitations."', '"This policy sucks."', '"Everyone knows this policy fails."'], answer: 1 },
    ],
  },

  c1_profwrite: {
    explanation: `Professional writing — reports, proposals, executive summaries, and business emails — uses a distinct register that is formal but clear, structured but not academic. At C1, you're expected to write these efficiently and accurately for real workplace contexts. The key principle: maximum information, minimum words, zero ambiguity.`,
    keyPoints: [
      'Executive summary: 1 page max — key findings, recommendations, and impact. Written last, read first.',
      'Business report structure: Introduction → Findings/Analysis → Conclusions → Recommendations',
      'Proposals: problem statement → proposed solution → budget/resources → expected outcomes → timeline',
      'Business email tone: direct but professional — "I would like to request" not "I want"',
      'Clarity techniques: bullet points, headings, bold key information, active voice where possible',
    ],
    examples: [
      { lines: [
        'Executive Summary extract:',
        '"This report examines customer satisfaction levels across Q3 2024. Key findings indicate a 15% decline in satisfaction scores, driven primarily by delivery delays. It is recommended that logistics partnerships be reviewed and an internal escalation process be established by January 2025."'
      ], note: 'Precise, structured, past tense for findings, recommendations are clear and actionable.' },
      { lines: ['"Please find attached the revised proposal for your review. I would appreciate your feedback by Friday 15th, to allow sufficient time for revisions before the board meeting."'], note: 'Professional email: direct purpose, specific deadline, polite but not overly formal.' },
    ],
    tips: [
      'Read real annual reports and business proposals online (many are publicly available) — study their structure.',
      'Write a mock report on a topic in your field — have a native-speaking colleague or AI review the register.',
      'Learn the standard phrases for each section: "This report aims to…", "The findings indicate…", "It is recommended that…".',
    ],
    quiz: [
      { q: 'An "executive summary" is…', options: ['The full report', 'A brief overview of key findings and recommendations', 'A letter of introduction', 'The appendix'], answer: 1 },
      { q: 'In professional writing, what is the most important principle?', options: ['Use many technical terms', 'Maximum information, minimum words, zero ambiguity', 'Write long paragraphs to show expertise', 'Use formal academic hedging throughout'], answer: 1 },
    ],
  },

  c1_debate: {
    explanation: `Formal debate and critical thinking require a structured approach to argumentation that goes beyond everyday opinion-sharing. At C1, you must anticipate counter-arguments, concede appropriately, distinguish strong from weak evidence, and identify logical fallacies in others' arguments. These skills are directly tested in IELTS Speaking Part 3 and TOEFL Speaking Task 3/4.`,
    keyPoints: [
      'Anticipating objections: "One might argue that X, however the evidence suggests Y."',
      'Conceding and rebutting: "While X is valid, it does not account for Y, which undermines the conclusion."',
      'Logical fallacies to avoid: ad hominem, slippery slope, false dichotomy, straw man, appeal to authority',
      'Strong evidence hierarchy: peer-reviewed research > expert opinion > anecdote > personal belief',
      'Reframing: "The real question here is not X but Y" — shifts debate to stronger ground',
    ],
    examples: [
      { lines: ['Straw man (fallacy): "People who support online education want to eliminate all human teachers."', 'Rebuttal: "That misrepresents the position — advocates of online education see it as a complement to, not a replacement for, traditional teaching."'], note: 'Identifying and naming fallacies strengthens your position instantly in formal debate.' },
      { lines: ['Strong concede + rebut: "Granted, economic growth is a legitimate policy priority. Nevertheless, growth achieved at the cost of environmental stability is ultimately self-defeating."'], note: '"Granted" concedes fully before the strong rebuttal — more persuasive than simple negation.' },
    ],
    tips: [
      'Listen to Intelligence Squared debates — note how speakers handle unexpected objections.',
      'Practise "steelmanning": argue the strongest version of the opposite position before rebutting it.',
      'For IELTS Part 3, always acknowledge complexity before giving your view — examiners reward nuanced thinking.',
    ],
    quiz: [
      { q: 'A "straw man" argument means…', options: ['Presenting a weak version of your own argument', 'Misrepresenting the opposing view to make it easier to attack', 'Using anecdotal evidence', 'Appealing to emotion'], answer: 1 },
      { q: 'In formal debate, "conceding" a point means…', options: ['Losing the argument', 'Acknowledging a valid point in the opposing view', 'Changing your position', 'Asking a question'], answer: 1 },
    ],
  },

  c1_cultural: {
    explanation: `Language is inseparable from culture. At C1, you must navigate British vs American vs Australian conventions in spelling, vocabulary, and social norms — and understand that politeness strategies vary dramatically. A direct request that's considered normal in American English may seem rude in British English, and vice versa. Cultural competence completes linguistic competence.`,
    keyPoints: [
      'British English tends toward more indirect politeness: "I wonder if you might…" = please do this now',
      'American English tends toward more direct but warm communication: "Let\'s do X" = a suggestion, not a command',
      'Spelling differences: British (colour, analyse, travelling) vs American (color, analyze, traveling)',
      'Vocabulary differences: flat/apartment, lift/elevator, biscuit/cookie, pavement/sidewalk, rubbish/garbage',
      'Social taboos vary: in British culture, discussing salary or asking someone\'s age is more sensitive than in some other cultures',
    ],
    examples: [
      { lines: ['British email: "I was wondering if it might be possible to discuss this further at your earliest convenience."', 'American email: "Can we schedule a call this week to discuss?"'], note: 'Same request — British uses multiple layers of hedging; American is direct but friendly.' },
      { lines: ['British understatement: "It\'s a bit chilly today." (when it\'s -5°C)', 'British overstatement = irony: "Oh, brilliant timing." (said when something goes wrong)'], note: 'British understatement and irony are everywhere — misreading them causes serious miscommunication.' },
    ],
    tips: [
      'Listen to BBC Radio 4 (British) and NPR (American) on the same topic — notice vocabulary and tone differences.',
      'Read the Cambridge Guide to English Usage to understand the breadth of British vs American variation.',
      'When writing internationally, choose one variety and be consistent — never mix spellings.',
    ],
    quiz: [
      { q: 'A British colleague says "That\'s quite good." In British culture, this likely means…', options: ['Excellent work', 'Acceptable but not outstanding', 'A total failure', 'They are unsure'], answer: 1 },
      { q: 'Which is the British English spelling?', options: ['Color', 'Organize', 'Travelling', 'Airplane'], answer: 2 },
    ],
  },

  // ─── C1 · Near-Native Reading ─────────────────────────────────

  c1_dense: {
    explanation: `Dense academic texts — research papers, legal documents, and philosophical treatises — pack maximum information into minimum space. Sentences are long, clauses are embedded, vocabulary is specialised, and hedging is pervasive. At C1, reading these is a skill you can build systematically, not a mystery reserved for native speakers.`,
    keyPoints: [
      'Identify the main verb: in long sentences, strip away embedded clauses to find subject + verb + object first',
      'Nominalised language: "the allocation of resources" means someone allocated resources — unpack it',
      'Heavy pre-modification: "a rapidly evolving, AI-driven, cross-disciplinary research paradigm" = adjectives before noun',
      'Dense information packaging: one paragraph may contain 4–5 arguments — slow reading is appropriate here',
      'Reference tracking: pronouns ("this", "such", "which") refer to specific earlier nouns — always identify them',
    ],
    examples: [
      { lines: ['"The extent to which cultural capital, as operationalised by Bourdieu, predicts educational outcomes remains contested within the sociological literature."'], note: 'Break it down: What is contested? → whether cultural capital predicts educational outcomes. Who contests it? → sociologists.' },
      { lines: ['"It has been suggested, albeit with some methodological reservations, that early childhood interventions may yield disproportionately high returns relative to later-stage investments."'], note: 'Core claim: early childhood interventions may give better returns. Everything else is hedging and qualification.' },
    ],
    tips: [
      'Practise reading abstracts from journals in your field — 1 per day. Summarise in 2 simple sentences.',
      'Use the "kernel sentence" technique: strip every sentence to subject + verb + object before reading again.',
      'Don\'t look up every word — use context and structure to infer meaning. Build your tolerance for ambiguity.',
    ],
    quiz: [
      { q: 'When reading a dense academic sentence, what should you identify first?', options: ['The longest word', 'The main subject, verb, and object', 'The embedded relative clauses', 'The hedging language'], answer: 1 },
      { q: '"Nominalised language" in academic texts means…', options: ['Using many pronouns', 'Converting verbs and adjectives into nouns', 'Writing very long paragraphs', 'Using passive voice only'], answer: 1 },
    ],
  },

  c1_infer: {
    explanation: `Inference — understanding what is implied rather than stated — becomes the dominant reading skill at C1. In IELTS Reading and TOEFL, inference questions are the hardest and most discriminating. Developing a systematic approach to inference, rather than guessing, is what allows C1 learners to answer these questions reliably.`,
    keyPoints: [
      'Inference is a logical conclusion: "A is true, B is true, therefore C must also be true"',
      'Look for: what would have to be true for this statement to be true?',
      'Signal words for inference questions: "suggests", "implies", "can be inferred", "it is likely that"',
      'Avoid over-inference: only conclusions that MUST follow from the text — not possible, not likely, but necessary',
      'Process of elimination: identify what the text definitely does NOT imply — narrow the options',
    ],
    examples: [
      { lines: ['"The company\'s profits fell by 40% in 2023, coinciding with the launch of several competitor products."'], note: 'What can be inferred? The competitive landscape likely contributed to falling profits. What cannot? That the company will close — the text doesn\'t say that.' },
      { lines: ['"Despite receiving no formal training, she consistently outperformed her peers."'], note: 'Inference: she is exceptionally talented. The word "despite" signals that something unexpected happened — natural ability despite lack of training.' },
    ],
    tips: [
      'For every inference question, find the specific sentence(s) in the text that justify your answer.',
      'Practise with IELTS/TOEFL "Implied meaning" question sets — they\'re designed to train exactly this skill.',
      'Ask: "Does the text REQUIRE this conclusion, or just ALLOW it?" Only required conclusions are valid inferences.',
    ],
    quiz: [
      { q: '"She had eaten everything on the plate." What can be inferred?', options: ['She was still hungry', 'She enjoyed the food OR was very hungry', 'The food was cooked by her', 'She will eat again soon'], answer: 1 },
      { q: 'An inference question asks you to find…', options: ['A directly stated fact', 'A logical conclusion based on what is implied', 'The author\'s personal history', 'A grammatical error'], answer: 1 },
    ],
  },

  c1_critical: {
    explanation: `Critical analysis means evaluating the strength, logic, and credibility of an argument — not simply summarising it. At C1, you should be able to identify assumptions, assess evidence quality, spot biased reasoning, and recognise logical fallacies in any text. This skill underpins every C1-level task from IELTS Task 2 to PhD research.`,
    keyPoints: [
      'Identify the claim: what is the author arguing? (explicit or implicit)',
      'Evaluate evidence: Is it recent? Peer-reviewed? From a biased source? Based on correlation or causation?',
      'Spot assumptions: what does the argument assume to be true without proving it?',
      'Assess logic: does the conclusion follow from the evidence? Is there a logical leap?',
      'Recognise bias: confirmation bias, selection bias, funding bias, ideological bias',
    ],
    examples: [
      { lines: ['"A study found that people who eat breakfast earn more money. Therefore, eating breakfast causes financial success."'], note: 'Logical error: correlation ≠ causation. Both may be caused by a third factor (e.g., discipline). This is a classic critical thinking trap.' },
      { lines: ['"According to the Tobacco Research Institute, smoking has not been conclusively linked to cancer."'], note: 'Source bias: the Tobacco Research Institute has a financial interest in this conclusion. The source must always be evaluated.' },
    ],
    tips: [
      'For any argument you read, ask: 1) What is claimed? 2) What evidence is given? 3) Are there assumptions? 4) Is the logic sound?',
      'Read FullFact.org or Snopes — they model critical analysis of public claims in accessible English.',
      'Practise identifying correlation vs causation in news articles — this is one of the most common logical errors in public discourse.',
    ],
    quiz: [
      { q: '"A causes B" when the data only shows they happen together is an example of…', options: ['Strong evidence', 'Correlation confused with causation', 'A logical inference', 'Confirmation bias'], answer: 1 },
      { q: 'When evaluating evidence, "source bias" means…', options: ['The source is too long', 'The source has a personal or financial interest in the conclusion', 'The source is in a foreign language', 'The source is very old'], answer: 1 },
    ],
  },

  c1_speed: {
    explanation: `Speed reading is not about skipping words — it's about eliminating subvocalisation (reading aloud in your head), reducing fixation time per word, and widening your visual span. At C1, reading academic English at 350–450 words per minute with high comprehension is achievable and necessary for IELTS 60-minute Reading and TOEFL's dense passages.`,
    keyPoints: [
      'Subvocalisation (reading every word in your head) is the main limiter — trained readers process chunks',
      'Fixation: your eye stops 3–5 times per line — reducing fixation points to 2–3 speeds reading',
      'Chunking: read phrases as single units — "the evidence suggests" not "the" + "evidence" + "suggests"',
      'Comprehension check: speed without comprehension is useless — always test retention after each passage',
      'Realistic targets: 250 wpm (average) → 350 wpm (good reader) → 400+ wpm (fluent C1)',
    ],
    examples: [
      { lines: ['Exercise 1: Time yourself reading a 500-word article. Divide 500 by minutes taken = your current wpm.'] },
      { lines: ['Exercise 2: Read a paragraph, then close it and write down 5 key facts. If you can\'t, you read too fast.'], note: 'Speed means nothing without retention. Always validate comprehension after any speed reading exercise.' },
      { lines: ['Chunking practice: read these as single units → "a growing body of evidence" | "suggests that" | "the rate of change" | "may be accelerating"'], note: 'Chunk on meaning boundaries, not fixed word counts.' },
    ],
    tips: [
      'Use a pen or finger to guide your eyes across the page — it reduces regressions (re-reading) by up to 30%.',
      'Practise with Spreeder or RSVP apps for 10 minutes daily — they force faster processing without eye control.',
      'In IELTS Reading, aim for under 18 minutes per passage — 54 minutes for 3 passages, 6 minutes to check.',
    ],
    quiz: [
      { q: '"Subvocalisation" means…', options: ['Reading out loud to others', 'Silently pronouncing every word in your head as you read', 'Taking notes while reading', 'Re-reading difficult sections'], answer: 1 },
      { q: 'What should always accompany speed reading training?', options: ['A timer only', 'Comprehension testing', 'Dictionary use', 'Translation practice'], answer: 1 },
    ],
  },

  c1_specvocab: {
    explanation: `At C1, general vocabulary is no longer the bottleneck — discipline-specific vocabulary is. Each academic field has its own technical lexicon that must be learned in context. The approach changes from "learn new words" to "learn how experts in this field talk" — through reading authentic texts in your target domain.`,
    keyPoints: [
      'Domain lexicons: law (jurisprudence, precedent, tort), medicine (aetiology, prognosis, pathology), economics (fiscal, monetary, liquidity)',
      'Technical terms have precise meanings that differ from everyday use: "critical" (decisive), "significant" (statistically meaningful), "theory" (well-tested explanation)',
      'Word families in technical domains: diagnose → diagnosis → diagnostic → diagnostically',
      'Collocation in specialist fields: "conduct a study", "publish findings", "replicate results", "cite a source"',
      'Corpus tools: COCA, Sketch Engine — show how words are actually used in specific domains',
    ],
    examples: [
      { lines: ['"Significant" in statistics ≠ "important" in everyday English — it means the result is unlikely to have occurred by chance (p < 0.05).'], note: 'Many academic words have technical meanings that differ from ordinary usage. Never assume you know.' },
      { lines: ['Law: "The court held that the defendant\'s actions constituted a breach of the duty of care."'], note: '"Held" (ruled), "constituted" (amounted to), "breach" (violation), "duty of care" (legal obligation). All specialist terms.' },
    ],
    tips: [
      'Read one academic paper or textbook chapter per week in your field — keep a vocabulary notebook of specialist terms.',
      'Learn collocations, not just definitions: "conduct research" not "do research" in formal academic contexts.',
      'Use COCA corpus to check how technical terms are actually used — search for a word and read 20 real examples.',
    ],
    quiz: [
      { q: 'In academic research, "significant" specifically means…', options: ['Very important', 'Statistically unlikely to be due to chance', 'Large in size', 'Widely known'], answer: 1 },
      { q: 'The best way to learn discipline-specific vocabulary is…', options: ['Memorising word lists', 'Reading authentic texts in your target domain', 'Translating from your language', 'Using a general dictionary only'], answer: 1 },
    ],
  },

  // ─── C1 · High-Stakes Test Prep ───────────────────────────────

  c1_ielts75: {
    explanation: `IELTS Band 7.5 requires consistently high performance across all four skills, with particular strength in lexical resource and grammatical range. The jump from Band 6.5 to 7.5 is not about knowing more vocabulary — it's about deploying what you know more precisely, more naturally, and with fewer errors under exam conditions.`,
    keyPoints: [
      'Lexical Resource (Band 7+): use uncommon vocabulary appropriately — "precipitate", "ameliorate", "discernible"',
      'Grammatical Range (Band 7+): complex structures used accurately — conditionals, inversions, passive, participles',
      'Task Achievement: answer ALL parts of the question — many Band 6 responses miss a sub-question',
      'Coherence: topic sentences, linking devices, and clear paragraph structure are non-negotiable at 7+',
      'Avoiding over-memorised phrases: examiners deduct for scripted language — "In today\'s fast-paced society…"',
    ],
    examples: [
      { lines: ['Band 6 response: "I think technology is good because it helps people."', 'Band 7.5 response: "Technology has undeniably transformed the way we communicate, enabling instantaneous global connectivity that was inconceivable just decades ago."'], note: 'Same basic idea — but Band 7.5 uses a complex clause, precise vocabulary, and a historical perspective.' },
      { lines: ['Avoid clichés: "In today\'s modern world…", "It goes without saying…", "As a matter of fact…"'], note: 'These signal a memorised template, not genuine language ability. Examiners are trained to spot them.' },
    ],
    tips: [
      'Record yourself doing a Speaking Part 3 answer — count complex structures and uncommon vocabulary items used accurately.',
      'For Writing Task 2, use the IELTS Band Descriptors to self-assess each essay before checking model answers.',
      'Target your weakest criterion exclusively for 2 weeks — don\'t try to improve everything at once.',
    ],
    quiz: [
      { q: 'What is the biggest difference between Band 6.5 and Band 7.5 writing?', options: ['Longer essays', 'More precise vocabulary and accurate complex structures', 'More personal opinions', 'Fewer paragraphs'], answer: 1 },
      { q: 'Why do examiners mark down heavily memorised phrases like "In today\'s fast-paced world…"?', options: ['They are grammatically incorrect', 'They suggest the candidate is not producing genuine language', 'They are too informal', 'They make essays too short'], answer: 1 },
    ],
  },

  c1_toefl95: {
    explanation: `TOEFL iBT scores of 95+ require strong performance across all four sections simultaneously. Unlike IELTS, TOEFL rewards academic English specifically — formal register, precise vocabulary, integrated task synthesis, and sustained spoken delivery in under 45 seconds. Understanding the unique format and scoring of each section is essential.`,
    keyPoints: [
      'Reading (22–30 points): 3–4 passages, 10 questions each, 54–72 minutes; inference and rhetorical purpose are the hardest',
      'Listening (22–30 points): 3–4 lectures + 2–3 conversations; notes are critical for integrated tasks',
      'Speaking (0–30 points): 4 tasks — 1 independent (45 seconds) + 3 integrated (60 seconds)',
      'Writing (0–30 points): 1 integrated (150–225 words, 20 min) + 1 academic discussion (150+ words, 10 min)',
      'Score targets: 95 = roughly Reading 24 + Listening 24 + Speaking 23 + Writing 24',
    ],
    examples: [
      { lines: ['TOEFL Speaking Task 1 (independent, 45 seconds):', '"Some people prefer to study alone. Others prefer to study in groups. Which do you prefer and why?"', 'Template: "I prefer [option] because [reason 1] and [reason 2]. For example, [specific example]. Therefore, [restate preference]."'], note: '45 seconds = roughly 120 words. Practise until your template is automatic and your examples are ready.' },
      { lines: ['TOEFL Academic Discussion (new task):', 'A professor posts a discussion question. Two students respond. You write your opinion (150+ words, 10 min).'], note: 'This task rewards clear opinion + supporting argument. Do not just summarise the students\' views.' },
    ],
    tips: [
      'Use ETS\'s official TOEFL Prep Plus book — it contains the most authentic practice material available.',
      'For Speaking, record 20 Task 1 responses and listen back — self-assess delivery, content, and fluency.',
      'Focus your preparation on whichever section gives you the most points shortfall — not on your strongest.',
    ],
    quiz: [
      { q: 'In TOEFL Speaking Task 1, you have approximately how long to speak?', options: ['15 seconds', '30 seconds', '45 seconds', '2 minutes'], answer: 2 },
      { q: 'In TOEFL Integrated Writing, you should…', options: ['Give your personal opinion', 'Summarise only the reading passage', 'Synthesise the reading and lecture', 'Argue against both sources'], answer: 2 },
    ],
  },

  c1_complex: {
    explanation: `At C1, "complex task responses" means producing writing that fully addresses every dimension of a prompt — not just the surface question, but its unstated implications, nuances, and counterpoints. IELTS Band 8 and TOEFL 27+ require demonstrating that you can handle multi-layered academic tasks with both accuracy and genuine intellectual engagement.`,
    keyPoints: [
      'Full task achievement means addressing every sub-question, including implied ones',
      'Intellectual depth: don\'t just state a position — anticipate objections and address them preemptively',
      'Lexical sophistication: use precise, uncommon vocabulary with natural collocations (not just big words)',
      'Structural complexity: multi-clause sentences with accurate punctuation; varied sentence length',
      'In IELTS Task 1 (Band 8+): all key features, accurate data description, clear overview, no opinion',
    ],
    examples: [
      { lines: [
        'Prompt: "Governments should prioritise economic development over environmental protection."',
        'Surface response: argue for or against.',
        'Complex response: question the false dichotomy — reframe as "how can development and protection be co-pursued?" This alone demonstrates C1+ reasoning.'
      ], note: 'C1 thinkers challenge the premise when appropriate. This is explicitly rewarded in IELTS Band 8 Task Achievement.' },
      { lines: ['"It is somewhat reductive to frame this as a binary choice. A more nuanced position might be that…"'], note: '"Reductive", "binary", "nuanced" — C1 meta-vocabulary for discussing the terms of a debate.' },
    ],
    tips: [
      'Before writing any task, ask: "What is the examiner REALLY testing with this prompt?" — look beyond the surface.',
      'Practise writing the same Task 2 prompt at Band 6, Band 7, and Band 8 level — understand what changes at each level.',
      'Read IELTS Band 8 and 9 sample essays and reverse-engineer why they scored that high.',
    ],
    quiz: [
      { q: 'What distinguishes a Band 8 IELTS essay from Band 7?', options: ['It is longer', 'It uses more technical vocabulary', 'It shows intellectual depth, precise language, and full task achievement', 'It has fewer grammar errors'], answer: 2 },
      { q: '"Questioning the false dichotomy" in an essay argument means…', options: ['Refusing to answer the question', 'Challenging the assumption that only two options exist', 'Agreeing with both sides equally', 'Using complex vocabulary'], answer: 1 },
    ],
  },

  c1_proofread: {
    explanation: `Proofreading is not just checking spelling — it's a systematic review process that catches grammatical errors, register inconsistencies, unclear pronoun references, and structural weaknesses. At C1, you should be your own editor. IELTS and TOEFL give you time at the end of writing tasks — using those 5 minutes effectively can move you half a band.`,
    keyPoints: [
      'Read for grammar: subject-verb agreement, tense consistency, article use, prepositions',
      'Read for vocabulary: correct collocations? Appropriate register? No repeated words?',
      'Read for coherence: does each paragraph have one clear topic? Are transitions logical?',
      'Read aloud in your head: errors that eyes skip become obvious when "heard"',
      'Common errors to target: missing articles, wrong prepositions, tense shifts, dangling modifiers',
    ],
    examples: [
      { lines: [
        'Before: "The government should investing more money in renewable energy because it helps to reduce carbon emission and make the environment better."',
        'After: "Governments should invest more significantly in renewable energy, as it would contribute to reducing carbon emissions and mitigating environmental degradation."'
      ], note: 'Fixed: modal verb form, vocabulary precision, collocation, article, and register.' },
      { lines: ['Proofreading sequence: 1) Grammar 2) Vocabulary 3) Coherence 4) Word count'], note: 'A systematic sequence prevents you from trying to check everything at once and missing things.' },
    ],
    tips: [
      'Create a personal "error checklist" of your 5 most frequent mistakes — check for each one deliberately.',
      'Practise timed proofreading: write an essay, then correct it in 5 minutes flat — simulate exam conditions.',
      'Swap essays with a study partner and mark each other\'s work — other people\'s errors train your eye.',
    ],
    quiz: [
      { q: 'What is the most effective proofreading strategy?', options: ['Read as fast as possible', 'Check grammar, vocabulary, and coherence systematically', 'Only check for spelling', 'Only read the conclusion'], answer: 1 },
      { q: 'In IELTS Writing, approximately how much time should you allocate to proofreading?', options: ['No time — just write', '1 minute', '5 minutes', 'Half the total time'], answer: 2 },
    ],
  },

  c1_timed: {
    explanation: `Time pressure is a separate skill from language ability. Many learners whose English is genuinely at C1 underperform on timed exams because they haven't practised under realistic conditions. Timed writing practice builds the ability to plan quickly, commit to ideas under pressure, and write at a sustainable pace without over-thinking every sentence.`,
    keyPoints: [
      'IELTS Writing total: 60 minutes — Task 1: 20 min (150+ words), Task 2: 40 min (250+ words)',
      'TOEFL Writing: Integrated 20 min + Academic Discussion 10 min',
      'Planning time: IELTS Task 2: 5 minutes planning, 30 minutes writing, 5 minutes proofreading',
      'Writing speed benchmark: aim for 20+ words per minute for IELTS — 250 words in 12 minutes',
      'The danger of perfectionism: a complete B+ essay scores higher than an incomplete A essay',
    ],
    examples: [
      { lines: [
        'Time budget for IELTS Task 2 (40 minutes):',
        '0–5 min: Analyse prompt, choose position, plan 2 body paragraphs',
        '5–35 min: Write introduction + 2 body paragraphs + conclusion',
        '35–40 min: Proofread — fix grammar, check word count'
      ], note: 'Committing to this time budget in every practice session builds automatic timing instincts.' },
      { lines: ['Common mistake: spending 15 minutes on a perfect introduction — then rushing or not finishing the essay.'], note: 'A mediocre introduction with two strong body paragraphs beats a perfect introduction with no conclusion.' },
    ],
    tips: [
      'Do every practice essay under strict exam conditions: no dictionary, no pausing, strict time limit.',
      'Count your words after every timed practice — know your average writing speed in words per minute.',
      'Simulate the full exam: do Task 1 + Task 2 back to back with no break, once per week.',
    ],
    quiz: [
      { q: 'For IELTS Writing Task 2, how should you allocate 40 minutes?', options: ['All writing, no planning', '5 plan + 30 write + 5 proofread', '20 plan + 20 write', '10 introduction + 30 body'], answer: 1 },
      { q: 'What is the danger of perfectionism in a timed writing exam?', options: ['Your vocabulary improves too much', 'You may not finish the essay, losing marks for incomplete responses', 'Your grammar becomes too correct', 'The examiner gets suspicious'], answer: 1 },
    ],
  },

  // ─── C2 · Mastery Refinement ──────────────────────────────────

  c2_style: {
    explanation: `Stylistic control at C2 means being able to consciously shift your writing voice — from academic formality to personal narrative to journalistic precision — while maintaining correctness in all registers. This is not just knowing different styles; it's having such deep command that you can switch fluidly and purposefully, the way a professional author would.`,
    keyPoints: [
      'Academic: impersonal, hedged, nominalised, passive, Latinate vocabulary, no contractions',
      'Literary: concrete imagery, varied sentence rhythm, figurative language, first person narrative',
      'Journalistic: active voice, short punchy sentences, direct quotes, concrete facts, inverted pyramid structure',
      'Legal: precise, unambiguous, conditional ("shall", "must", "provided that"), defined terms',
      'Style is audience-driven: who reads this? What do they need? Tone follows purpose.',
    ],
    examples: [
      { lines: [
        'Same idea in three styles:',
        'Academic: "The empirical evidence strongly suggests that prolonged screen exposure may contribute to diminished attentional capacity in adolescents."',
        'Journalistic: "Too much screen time is harming teenagers\' ability to concentrate, a major new study warns."',
        'Personal essay: "I watch my daughter scroll for hours, and I wonder what we\'ve lost."'
      ], note: 'Same facts, radically different style. C2 switches between them at will.' },
    ],
    tips: [
      'Choose one style per week to practise: write 300 words exclusively in that register on any topic.',
      'Translate the same paragraph between three styles — this builds active style-switching awareness.',
      'Read widely across genres: academic papers, quality newspapers, personal essays, literary fiction — all in one week.',
    ],
    quiz: [
      { q: 'Which feature is characteristic of journalistic style?', options: ['Long complex sentences', 'Impersonal passive voice throughout', 'Short active sentences and concrete facts', 'Heavy use of nominalisation'], answer: 2 },
      { q: 'Stylistic control at C2 means…', options: ['Using only academic English perfectly', 'Switching between registers fluidly and purposefully', 'Avoiding all informal language', 'Memorising many fixed phrases'], answer: 1 },
    ],
  },

  c2_pragmatic: {
    explanation: `Pragmatic competence is knowing what to say, when to say it, to whom, and how — beyond the grammatical and lexical dimensions of language. It's the difference between someone who "speaks English" and someone who "communicates in English". At C2, pragmatic failures (saying the right words in the wrong context) are more damaging than grammatical errors.`,
    keyPoints: [
      'Speech acts: requesting, declining, apologising, complimenting, criticising — each has its own conventions',
      'Face-saving: native speakers avoid direct rejection — "I\'ll think about it" often means "no"',
      'Indirect speech acts: "It\'s cold in here" may be a request to close the window, not a weather observation',
      'Sociolinguistic norms: formality levels vary by relationship, setting, topic, and culture',
      'Silence: what is NOT said is as communicative as what is said — knowing when to stay silent is C2',
    ],
    examples: [
      { lines: ['"We should do this again sometime." (British English)'], note: 'This often means nothing specific — it\'s a polite closing, not a genuine invitation. Pragmatic knowledge prevents misunderstanding.' },
      { lines: ['Apology conventions: "I\'m so sorry for any inconvenience this may have caused."'], note: 'The passive ("may have caused") and the hedge ("any inconvenience") distance the speaker from full responsibility. Standard in British professional apologies.' },
      { lines: ['Compliments: accepting them directly is awkward in some cultures — in English, both accepting and deflecting are acceptable: "Oh, thank you!" OR "Oh, it\'s nothing, really."'] },
    ],
    tips: [
      'Watch British and American chat shows — notice how hosts and guests negotiate turn-taking, compliments, and disagreement.',
      'Keep a "pragmatics journal": note any English interaction where what was said differed from what was meant.',
      'Study speech act theory briefly — it gives you a systematic framework for understanding indirect communication.',
    ],
    quiz: [
      { q: '"That\'s an interesting idea." (in a British professional meeting) most likely means…', options: ['I love this idea, let\'s do it!', 'The idea has problems that need to be addressed', 'I don\'t understand the idea', 'This is the best idea I\'ve heard'], answer: 1 },
      { q: 'Pragmatic competence refers to…', options: ['Perfect grammar', 'Knowing what to say, when, to whom, and how in context', 'Large vocabulary', 'Accurate pronunciation'], answer: 1 },
    ],
  },

  c2_zeroerror: {
    explanation: `Near-zero error in writing doesn't mean never making mistakes — it means your error rate in complex production is low enough that it no longer affects comprehension or credibility. C2 writers self-monitor constantly, catching and correcting errors in real time, and have internalised enough grammar that correct forms are automatic for simple structures.`,
    keyPoints: [
      'High-frequency errors that persist to C2: article errors (especially with abstract nouns), preposition errors in fixed phrases, tense consistency in long texts',
      'Self-monitoring: C2 speakers notice and correct errors mid-sentence, naturally, without disruption',
      'Complex structure accuracy: the longer and more embedded the sentence, the higher the error risk',
      'Editing vs proofreading: editing restructures; proofreading fixes surface errors — both are needed',
      'Corpus tools for accuracy: Netspeak, Sketch Engine, COCA — check natural collocations before committing',
    ],
    examples: [
      { lines: [
        'Persistent C2 challenge — abstract nouns with/without article:',
        '✓ "Education is important." (general concept = no article)',
        '✓ "The education system needs reform." (specific system = the)',
        '✓ "An education is a privilege." (individual instance = a)',
      ], note: 'Even at C2, abstract noun article choice causes errors. Knowing the rule isn\'t enough — you must internalise the pattern.' },
      { lines: ['Corpus check: "interested in" or "interested about"?', 'COCA shows "interested in" appears 50,000 times; "interested about" appears 200 times.'], note: 'Corpus data resolves collocation uncertainty instantly — faster and more reliable than guessing.' },
    ],
    tips: [
      'Identify your 3 most persistent error types and write a targeted exercise for each — address root causes, not symptoms.',
      'Use Grammarly Advanced or ProWritingAid on your writing — but understand WHY it flags something, not just accept the fix.',
      'Read your writing backwards (last sentence first) — it forces you to see each sentence independently, catching errors your brain autocorrects when reading forward.',
    ],
    quiz: [
      { q: '"Education is important" vs "The education in this country needs reform" — the difference is…', options: ['One is wrong', 'General concept (no article) vs specific instance (the)', 'Formal vs informal register', 'Passive vs active voice'], answer: 1 },
      { q: 'What does "near-zero error" at C2 realistically mean?', options: ['Absolutely no errors ever', 'Errors are rare and do not affect comprehension or credibility', 'Only grammar errors remain', 'Errors are acceptable in informal writing only'], answer: 1 },
    ],
  },

  c2_accent: {
    explanation: `Accent refinement at C2 is entirely optional — all accents are valid in English. However, if intelligibility is a concern, or if you aspire to a specific variety (RP British, General American), systematic work on segmental (individual sounds) and suprasegmental (rhythm, stress, intonation) features can make your speech significantly clearer and more natural-sounding to native listeners.`,
    keyPoints: [
      'RP (Received Pronunciation): prestige British accent — "BBC English". Characterised by non-rhoticity (no /r/ after vowels)',
      'General American (GA): standard American broadcast accent. Rhotic (pronounces /r/ in all positions)',
      'Segmental work: individual sounds — /θ/ (thing), /ð/ (this), /æ/ vs /ɑ/ (trap vs father)',
      'Suprasegmental work: word stress (REcord vs reCORD), sentence stress, connected speech, intonation',
      'The goal is intelligibility and confidence, not eliminating your accent entirely — that\'s neither necessary nor desirable',
    ],
    examples: [
      { lines: ['Connected speech features: "Did you eat yet?" sounds like "Dijya eet yet?" in natural American speech.'], note: 'Assimilation, elision, and liaison — these are not "lazy speech", they are features of natural fluent English.' },
      { lines: ['Intonation: rising at end of statement = uncertainty. Falling = certainty. Rising-falling = challenge or sarcasm.'], note: 'Wrong intonation changes meaning: "That\'s nice↗" (genuine) vs "That\'s nice↘" (sarcastic).' },
    ],
    tips: [
      'Record yourself reading the same passage monthly and compare recordings — document your progress.',
      'Use Forvo.com to hear how native speakers from different countries pronounce the same word.',
      'Mimic technique: choose one speaker you admire, record them, then record yourself doing the same passage — compare.',
    ],
    quiz: [
      { q: 'Is it necessary to eliminate your native accent to speak excellent English?', options: ['Yes, absolutely', 'Only for formal contexts', 'No — intelligibility and clarity are the goals, not accent elimination', 'Only if you want Band 9 IELTS'], answer: 2 },
      { q: '"Suprasegmental" features of pronunciation include…', options: ['Individual vowel and consonant sounds', 'Stress, rhythm, intonation, and connected speech patterns', 'Spelling and vocabulary', 'Grammar rules'], answer: 1 },
    ],
  },

  c2_specialized: {
    explanation: `At C2, you may need to operate in highly specialised domains — legal, medical, financial, or scientific contexts — where vocabulary is dense, technical, and high-stakes. Errors in specialist vocabulary can have serious real-world consequences (in law or medicine especially). The approach at this level is deep domain immersion, not just word-list memorisation.`,
    keyPoints: [
      'Legal English: "shall" (obligation), "whereas" (given that), "hereinafter" (from now on referred to as), "notwithstanding" (despite)',
      'Medical English: "acute" (sudden and severe) vs "chronic" (long-term); "aetiology" (cause); "prognosis" (expected outcome)',
      'Financial English: "liquidity" (ease of converting to cash), "hedge" (reduce risk), "dividend" (profit share), "leverage" (using debt to amplify returns)',
      'Scientific writing: "methodology", "hypothesis", "replication", "peer-reviewed", "meta-analysis", "statistical significance"',
      'Domain corpora exist for each field — use them to check natural usage in context',
    ],
    examples: [
      { lines: ['"The claimant alleges that the defendant breached the contractual terms as stipulated in clause 4.3."'], note: '"Claimant" (person making the claim), "alleges" (claims without proof yet), "stipulated" (specifically stated). All precise legal vocabulary.' },
      { lines: ['"The patient presented with acute dyspnoea and bilateral lower-limb oedema, consistent with early-stage congestive heart failure."'], note: 'Medical report language: symptoms described precisely using Latin/Greek terminology.' },
    ],
    tips: [
      'Read authentic texts in your target domain: medical case reports, legal judgements, financial annual reports.',
      'Subscribe to a specialist newsletter or podcast in English in your field — immersion over isolated vocabulary study.',
      'Practise writing in your specialist domain and ask a native-speaking professional to review for naturalness.',
    ],
    quiz: [
      { q: 'In medical English, "acute" means…', options: ['Happening over many years', 'Sudden and severe', 'Mildly uncomfortable', 'Related to the ear'], answer: 1 },
      { q: 'In legal English, "notwithstanding" means…', options: ['Because of', 'In addition to', 'Despite / regardless of', 'Concerning'], answer: 2 },
    ],
  },

  // ─── C2 · Native-Level Listening ──────────────────────────────

  c2_fast: {
    explanation: `Native English speakers speak at 150–180 words per minute in conversation, up to 220 wpm in excited speech. They use extensive connected speech — words merge, sounds drop, and syllables reduce. Understanding fast native speech requires retraining your ear at the phonological level, not just learning more vocabulary.`,
    keyPoints: [
      'Assimilation: sounds change when adjacent — "ten boys" sounds like "tem boys" (/n/→/m/ before /b/)',
      'Elision: sounds disappear — "next day" → "nexday", "last time" → "lastime"',
      'Weak forms: function words reduce to schwa — "can" → /kən/, "to" → /tə/, "for" → /fə/',
      'Liaison: final consonant links to next word\'s vowel — "an apple" → "a-napple"',
      'Common reductions: "going to" → "gonna", "want to" → "wanna", "don\'t know" → "dunno", "could have" → "coulda"',
    ],
    examples: [
      { lines: ['"I\'m gonna have to get it done before he gets back." — phonetically:'], note: '"Gonna" (going to) + "have to" (hafta) + "gets back" (liaison). In print it looks complex — in native speech it\'s one fast stream.' },
      { lines: ['"Didja eat yet?" = "Did you eat yet?" — /j/ between words causes assimilation'], note: 'Once you know the phonological rules, fast speech becomes decodable — it\'s systematic, not random.' },
    ],
    tips: [
      'Use Elllo.org\'s speed-up function or YouTube\'s 1.25× playback — build tolerance for faster speech gradually.',
      'Listen to unscripted podcasts (Joe Rogan, This American Life, Radiolab) — no simplified speech, no script.',
      'Shadowing at 1× speed first, then 1.1×, then 1.25× — follow the natural rhythm of native speakers.',
    ],
    quiz: [
      { q: '"Gonna" is a reduced form of…', options: ['Got a', 'Gone to', 'Going to', 'Getting on'], answer: 2 },
      { q: 'In connected speech, "elision" means…', options: ['Sounds merge together', 'Sounds are dropped completely', 'Weak vowel sounds are used', 'Words are spoken very slowly'], answer: 1 },
    ],
  },

  c2_humor: {
    explanation: `Humour in English relies on timing, cultural reference, wordplay, irony, and shared knowledge. Understanding it signals deep cultural and linguistic integration — it's the last frontier for many advanced learners. Unlike vocabulary and grammar, humour cannot be learned from textbooks alone; it requires immersion in authentic cultural contexts.`,
    keyPoints: [
      'Irony: saying the opposite of what you mean — context and tone signal the real meaning',
      'Wordplay (puns): exploiting double meanings — "I used to be a banker, but I lost interest."',
      'Understatement: British comedy staple — a catastrophe described as "a bit unfortunate"',
      'Sarcasm: irony with a sharper edge — "Oh, brilliant. Another meeting." (clearly not brilliant)',
      'Cultural reference: humour often depends on shared cultural knowledge — films, history, current events',
    ],
    examples: [
      { lines: ['"I\'m reading a book about anti-gravity. It\'s impossible to put down." (pun)'], note: '"Put down" = stop reading / physically set down. The pun works because a book about anti-gravity would float.' },
      { lines: ['Dry British understatement: (After a terrible presentation fails completely) "Well, that could have gone better."'], note: 'The massive understatement IS the joke. Saying "that was catastrophic" would kill the humour.' },
      { lines: ['"I asked the librarian if the library had books about paranoia. She whispered: \'They\'re right behind you.\'"'], note: 'Combines unexpected answer + theatrical delivery. Understanding this requires knowing library culture AND being surprised by the punchline.' },
    ],
    tips: [
      'Watch British panel shows (QI, Would I Lie to You, Mock the Week) and American late-night shows — humour in context.',
      'When you hear a joke you don\'t understand, look it up — understanding why it\'s funny teaches cultural knowledge.',
      'Don\'t try to be funny — first aim to understand English humour. The ability to produce it comes naturally after.',
    ],
    quiz: [
      { q: 'Which type of humour says the OPPOSITE of what is meant?', options: ['Pun', 'Sarcasm/Irony', 'Understatement', 'Cultural reference'], answer: 1 },
      { q: '"I used to be a baker, but I couldn\'t make enough dough." This is a…', options: ['Cultural reference', 'Pun', 'Sarcasm', 'Understatement'], answer: 1 },
    ],
  },

  c2_podcast: {
    explanation: `Unscripted podcasts represent the most authentic form of native English available — natural pace, genuine connected speech, diverse accents, conversational interruptions, and zero simplification. At C2, engaging with these without transcripts tests and develops the top level of listening comprehension, far beyond any exam preparation material.`,
    keyPoints: [
      'Unscripted speech features: filled pauses ("um", "uh", "like"), restarts, repairs, overlaps',
      'Conversation analysis: turn-taking cues, topic shifts, implicit shared knowledge',
      'Genre diversity: narrative podcasts, debate shows, academic lectures, comedy, documentary — each has different language features',
      'Active listening strategies at C2: predicting, evaluating, inferring — not just decoding words',
      'Recommended: This American Life, Radiolab, Freakonomics, Hardcore History, 99% Invisible, Stuff You Should Know',
    ],
    examples: [
      { lines: ['This American Life (narrative journalism): rich storytelling, literary English, emotional register — excellent for narrative vocabulary and cultural knowledge.'] },
      { lines: ['Hardcore History (Dan Carlin): complex historical analysis, academic vocabulary, very long-form — demands sustained concentration of 4–6 hours per episode. Ultimate C2 challenge.'], note: 'If you can follow a 5-hour unscripted episode of Hardcore History with high comprehension, your English is genuinely C2.' },
    ],
    tips: [
      'Listen to 20 minutes of an unscripted podcast daily with no transcript — just listen.',
      'Once per week, listen to the same 5-minute clip twice: once blind, once with transcript — measure the gap.',
      'Choose a podcast topic you\'re genuinely curious about — motivation makes sustained input sustainable.',
    ],
    quiz: [
      { q: 'Why are unscripted podcasts better C2 listening practice than exam listening materials?', options: ['They are shorter', 'They represent authentic native speech with natural features that exam materials simplify', 'They are easier to understand', 'They use simpler vocabulary'], answer: 1 },
      { q: '"Filled pauses" in unscripted speech (like "um", "uh", "like") indicate…', options: ['Poor English', 'The speaker is thinking or planning their next words — a natural feature of all native speech', 'A scripted text being read', 'A non-native speaker'], answer: 1 },
    ],
  },

  c2_lecture: {
    explanation: `Academic lectures at full speed — Oxford, MIT, Harvard OpenCourseWare — represent the gold standard of academic English listening. They combine dense technical vocabulary, complex argument structures, interactive Q&A, and speaker-specific idiosyncrasies. Engaging with these regularly at C2 maintains and extends academic English at its highest level.`,
    keyPoints: [
      'Lecture macro-structure: introduction (context, objectives) → development (argument, evidence) → synthesis (conclusions, implications)',
      'Lecturer hedging language: "it\'s worth noting that", "I would argue", "the evidence seems to suggest" — signals the main claim',
      'Q&A language: "That\'s a great question, and actually…", "I\'m glad you raised that, because…"',
      'Discipline variation: lectures in humanities differ from sciences — argument-driven vs data-driven structures',
      'Note-taking at C2: structured, hierarchical, with critical evaluation — not transcription',
    ],
    examples: [
      { lines: ['MIT OpenCourseWare — Introduction to Algorithms: dense, fast, technical, assumes mathematical background. Ideal for STEM C2 learners.'] },
      { lines: ['Oxford Union debates: political and philosophical arguments at the highest level of formal English oratory. Excellent for argument structure and advanced vocabulary.'], note: 'Available free on YouTube. Each debate models sophisticated C1-C2 argumentation in action.' },
    ],
    tips: [
      'Watch one full academic lecture per week from MIT, Yale, Oxford, or Harvard OpenCourseWare — without subtitles.',
      'After each lecture, write a 200-word summary from memory — this tests both comprehension and production.',
      'Focus on how the lecturer STRUCTURES the argument, not just what they say — this teaches academic discourse patterns.',
    ],
    quiz: [
      { q: 'What distinguishes an academic lecture from a standard presentation at C2 level?', options: ['It is shorter', 'It has dense technical content, complex argument structure, and assumes significant background knowledge', 'It uses simpler vocabulary', 'It is always in British English'], answer: 1 },
      { q: 'At C2 level, note-taking during a lecture should be…', options: ['Verbatim transcription', 'Structured and hierarchical with critical evaluation', 'Only key words', 'Not necessary — just listen'], answer: 1 },
    ],
  },

  c2_dialect: {
    explanation: `English has dozens of regional dialects that differ significantly from standard varieties in vocabulary, grammar, and pronunciation. At C2, you encounter these in authentic media, travel, and professional contexts. The ability to adapt to dialectal variation — without needing it all repeated — marks genuine near-native proficiency.`,
    keyPoints: [
      'Scottish English: "aye" (yes), "wee" (small), "braw" (excellent), "-nae" suffix (don\'t = dinnae, won\'t = willnae)',
      'Irish English: "grand" (fine), "gas" (funny), "deadly" (excellent), "sure" as a filler',
      'Australian English: "arvo" (afternoon), "reckon" (think), "ta" (thanks), rising intonation on statements (AQI)',
      'Indian English: "do one thing" (let me suggest), different tense usage ("I am knowing"), tag question "isn\'t it?"',
      'African-American Vernacular English (AAVE): distinct grammar rules ("he been gone"), important for cultural literacy',
    ],
    examples: [
      { lines: ['"I\'m just away to the shops. Can I get ye anything? It\'s pure Baltic out there." (Scottish)'], note: '"Away to" = going to; "ye" = you; "pure Baltic" = extremely cold. Context makes meaning clear even without prior knowledge.' },
      { lines: ['"She\'s deadly craic, so she is." (Irish)'], note: '"Deadly" = excellent; "craic" = fun/entertainment; "so she is" = emphatic tag. Three Irish-specific features in one sentence.' },
    ],
    tips: [
      'Watch TV shows set in different English-speaking regions: Line of Duty (Northern Irish), Happy Valley (Yorkshire), Fargo (Minnesotan American).',
      'Don\'t try to speak a dialect — focus on receptive understanding first. Active use can seem inauthentic.',
      'When you encounter an unfamiliar dialect feature, look it up — build a mental map of regional variation.',
    ],
    quiz: [
      { q: 'In Australian English, "arvo" means…', options: ['Morning', 'Afternoon', 'Evening', 'Early'], answer: 1 },
      { q: 'Why is it important to understand dialectal variation at C2?', options: ['To speak with a regional accent', 'To communicate authentically across different English-speaking contexts without confusion', 'To pass the IELTS exam', 'To correct others\' English'], answer: 1 },
    ],
  },

  // ─── C2 · Expert Production ───────────────────────────────────

  c2_research: {
    explanation: `Research paper writing in English follows the IMRaD structure (Introduction, Methods, Results, and Discussion) and adheres to strict disciplinary conventions. At C2, you're expected to write papers that are not just linguistically accurate but epistemically credible — making claims at the right level of certainty, citing sources correctly, and contributing meaningfully to a field.`,
    keyPoints: [
      'IMRaD structure: Introduction (why), Methods (how), Results (what), Discussion (what it means)',
      'Introduction funnel: broad field context → specific gap → your research question/hypothesis',
      'Methods: passive voice, past tense, enough detail for replication — "Participants were randomly assigned to…"',
      'Results: report objectively, no interpretation — "Table 1 shows a statistically significant increase (p < 0.05)"',
      'Discussion: interpret results, acknowledge limitations, suggest future research, connect to existing literature',
    ],
    examples: [
      { lines: [
        'Discussion opening (good): "The findings of the present study suggest that X, which aligns with the theoretical framework proposed by Smith (2018). However, contrary to the hypothesised relationship between A and B, the data indicate that…"'
      ], note: 'Connects to existing literature ("aligns with") → handles unexpected findings ("contrary to") → hedges appropriately ("suggest"). All C2 features.' },
      { lines: ['Limitation section: "Several limitations of this study warrant acknowledgement. The sample was limited to undergraduate students, which may restrict the generalisability of the findings."'], note: '"Warrant acknowledgement" and "restrict generalisability" — academic hedging and precise collocations.' },
    ],
    tips: [
      'Read 5 papers in your field specifically for their Discussion sections — these are the hardest to write and the richest language source.',
      'Use the AWL and subject-specific vocabulary systematically — make sure your claims are appropriately hedged.',
      'Learn the APA or Chicago citation style in full — citation errors in academic papers damage credibility.',
    ],
    quiz: [
      { q: 'What does IMRaD stand for?', options: ['Introduction, Main points, Results, Analysis, Discussion', 'Introduction, Methods, Results, and Discussion', 'Idea, Method, Research, and Data', 'Introduction, Motivation, Research, Arguments, Decision'], answer: 1 },
      { q: 'In the Results section of a research paper, you should…', options: ['Interpret and explain your findings', 'Report findings objectively without interpretation', 'Give your personal opinion', 'Suggest future research directions'], answer: 1 },
    ],
  },

  c2_public: {
    explanation: `Public speaking at C2 is about structure, charisma, clarity, and authentic delivery — not perfect grammar. The goal is to persuade, inspire, or inform a live audience while managing nerves, adapting to feedback, and maintaining presence. TED-style delivery has become the global standard for high-impact English public speaking.`,
    keyPoints: [
      'TED structure: hook (story/surprising fact) → context → main idea (the "idea worth spreading") → evidence → call to action',
      'Vocal variety: pitch, pace, volume, pause — pausing before a key point is more powerful than filling silence',
      'Physical presence: eye contact, open gestures, controlled movement, stance',
      'Authenticity: personal stories, genuine conviction, vulnerability — audiences connect with humans not performers',
      'Opening lines: the first 30 seconds determine engagement — start with a question, story, or surprising statistic',
    ],
    examples: [
      { lines: [
        'Weak opening: "Today I\'m going to talk to you about climate change."',
        'Strong opening: "In 2017, I watched the village where my grandparents were born disappear underwater. That\'s when I understood that climate change isn\'t a future problem. It\'s happening now."'
      ], note: 'The story creates immediate emotional connection. The audience is engaged before the argument even begins.' },
      { lines: ['"The question I want you to carry with you today is this: [pause 3 seconds] What are you waiting for?"'], note: 'Strategic pause before the key line. Silence creates tension and makes the message memorable.' },
    ],
    tips: [
      'Watch 10 TED talks and analyse: What was the hook? What was the structure? What made it memorable?',
      'Practise delivering a 5-minute talk on something you know deeply — record and self-assess for pace, pauses, and eye contact.',
      'Join a Toastmasters club if available — the structured feedback from real audiences is irreplaceable.',
    ],
    quiz: [
      { q: 'What is the purpose of a strategic pause in public speaking?', options: ['To forget what to say', 'To fill time', 'To create tension and make the next words more memorable', 'To check your notes'], answer: 2 },
      { q: 'TED-style structure begins with…', options: ['The main argument', 'A comprehensive review of the literature', 'A hook — a story, question, or surprising fact', 'A formal introduction of credentials'], answer: 2 },
    ],
  },

  c2_paraphrase: {
    explanation: `Simultaneous paraphrasing — rephrasing ideas in real time without changing their meaning — is an interpreter-level skill that also serves writers and speakers at C2. It requires deep semantic knowledge (knowing many ways to express the same idea), fluency (fast retrieval), and precision (not losing or distorting meaning). It's the ultimate vocabulary test.`,
    keyPoints: [
      'Lexical substitution: replace words with synonyms while preserving meaning — "crucial" → "vital", "fundamental", "indispensable"',
      'Structural paraphrase: change sentence structure — active to passive, clause to noun phrase',
      'Concept paraphrase: restate the whole idea in different words — "She was very hungry" → "She hadn\'t eaten in hours"',
      'Avoiding distortion: paraphrases must not add, remove, or change meaning — this is the hardest part',
      'Context sensitivity: the right paraphrase depends on register, audience, and purpose',
    ],
    examples: [
      { lines: [
        'Original: "The policy had catastrophic consequences for the poorest communities."',
        'Paraphrase 1 (lexical): "The measure had devastating effects on the most vulnerable populations."',
        'Paraphrase 2 (structural): "The most vulnerable populations were catastrophically affected by the policy."',
        'Paraphrase 3 (concept): "Those already living in poverty suffered most severely from the new legislation."'
      ], note: 'Three valid paraphrases — each preserves meaning while changing form. C2 can produce all three instantly.' },
    ],
    tips: [
      'Practise "synonym chains" — take a concept and express it 5 different ways without a dictionary.',
      'Paraphrase news headlines into your own words before reading the article — then compare your version with the original.',
      'For IELTS Writing, paraphrase every quotation you\'d like to use rather than copying — it also boosts your lexical resource score.',
    ],
    quiz: [
      { q: 'The most important rule of paraphrasing is…', options: ['Use only formal vocabulary', 'Use as many synonyms as possible', 'Preserve the original meaning without distortion', 'Make it shorter than the original'], answer: 2 },
      { q: 'Paraphrasing "She was exhausted" as "She hadn\'t slept in days" is an example of…', options: ['Lexical substitution', 'Structural paraphrase', 'Concept paraphrase', 'Over-generalisation'], answer: 2 },
    ],
  },

  c2_creative: {
    explanation: `Creative writing in English — fiction, poetry, personal essays — requires control of all linguistic resources simultaneously: precise vocabulary, varied rhythm, figurative language, narrative perspective, and emotional resonance. At C2, this is the highest expression of language mastery: using English not just to communicate but to create something that moves people.`,
    keyPoints: [
      'Show, don\'t tell: "She was sad" → "She stared at the ceiling for an hour, tracing cracks with her eyes."',
      'Sentence rhythm: vary length — short sentences create urgency; long, flowing sentences create contemplation.',
      'Figurative language: metaphor, simile, personification, synesthesia — used precisely, not overloaded',
      'Voice: the narrator\'s perspective, personality, and relationship with the reader — consistent and distinctive',
      'Revision: first drafts are not creative failures — great writing is rewriting. Read Strunk & White.',
    ],
    examples: [
      { lines: [
        '"Tell" version: "The city was loud and chaotic."',
        '"Show" version: "The intersection threw together car horns, a vendor\'s shout, the percussion of a jackhammer, and from an upstairs window, someone practising scales — over and over, never right."'
      ], note: '"Show" creates the experience for the reader rather than reporting it. This is the central skill of literary writing.' },
      { lines: ['Rhythm example: "She ran. The door slammed. Gone." vs "She ran through the corridor, her footsteps echoing against the cold marble floors, and the door closed behind her with a finality that seemed to seal her fate."'], note: 'Short sentences = urgency. Long sentence = reflection. Both can be right — the choice depends on the effect you want.' },
    ],
    tips: [
      'Read widely: Cormac McCarthy for economy, Virginia Woolf for stream of consciousness, Kazuo Ishiguro for emotional restraint.',
      'Write 100 words of fiction every day — the constraint forces precision and creativity simultaneously.',
      'Join a writing workshop (online or in person) — external feedback on creative work is irreplaceable.',
    ],
    quiz: [
      { q: '"Show, don\'t tell" in creative writing means…', options: ['Use more adjectives', 'Create the experience through specific sensory details rather than stating emotions directly', 'Never explain anything', 'Write longer sentences'], answer: 1 },
      { q: 'Short sentences in creative writing typically create a feeling of…', options: ['Calmness and reflection', 'Urgency and tension', 'Detailed description', 'Intellectual distance'], answer: 1 },
    ],
  },

  c2_teach: {
    explanation: `The ability to explain grammar rules and language nuance to learners is the highest proof of linguistic mastery — if you can teach it, you truly understand it. Language teaching readiness at C2 means being able to articulate why something is correct or incorrect, adapt explanations to different learning levels, and demonstrate the gap between rule and exception in natural English.`,
    keyPoints: [
      'Meta-language: the vocabulary used to talk about language — "subject", "clause", "register", "collocation", "aspect"',
      'Explaining rules simply: the best grammar explanations use examples first, rules second',
      'Awareness of exceptions: English has many — teaching a rule without acknowledging its exceptions misleads learners',
      'Adapting to level: the same concept explained differently to A1 vs C1 — vocabulary, complexity, and examples all change',
      'Corrective feedback: when and how to correct is as important as knowing what is correct',
    ],
    examples: [
      { lines: [
        'Teaching present perfect to a B1 learner:',
        '"Think of present perfect as a bridge between the past and now. \'I have lived here for 5 years\' — I started in the past, and I\'m still here now. That bridge is the present perfect."'
      ], note: 'Metaphor (bridge) + example → meaning before rule. Excellent pedagogical technique.' },
      { lines: [
        'Adapting explanation for A1: "Use \'have + past participle\' when the past connects to now."',
        'Adapting for C1: "The present perfect expresses an anterior event with current relevance — contrast with simple past, which isolates the event temporally."'
      ], note: 'Same grammar point — radically different metalanguage and complexity. C2 can produce both.' },
    ],
    tips: [
      'Try explaining a grammar rule to someone who doesn\'t speak English — any confusion in your explanation reveals gaps in your own understanding.',
      'Write a 200-word explanation of a complex grammar point (e.g., reported speech) for a B1 learner — clear, simple, accurate.',
      'Teaching English professionally (even briefly) is the most accelerated path to C2 consolidation — it forces systematic mastery.',
    ],
    quiz: [
      { q: 'What does "meta-language" mean in language teaching?', options: ['Speaking very quietly', 'The vocabulary used to describe and discuss language itself', 'Non-verbal communication', 'Advanced academic vocabulary'], answer: 1 },
      { q: 'Why should grammar explanations typically give examples BEFORE rules?', options: ['Rules are too complex for learners', 'Examples create concrete understanding that makes the rule memorable and meaningful', 'Rules are always wrong', 'Examples are shorter than rules'], answer: 1 },
    ],
  },

}


