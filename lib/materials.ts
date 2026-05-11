import type { CEFRLevel, Skill } from '@/types'

export interface Material {
  id: string
  title: string
  description: string
  type: 'website' | 'youtube' | 'book' | 'app' | 'podcast' | 'course'
  skill: Skill
  url?: string
  free: boolean
  recommended?: boolean
}

export const MATERIALS: Record<CEFRLevel, Material[]> = {
  A1: [
    { id: 'a1-l1', title: 'BBC Learning English – The Flatmates', description: 'Simple dialogues with audio and text for absolute beginners, covering everyday situations.', type: 'website', skill: 'listening', url: 'https://www.bbc.co.uk/learningenglish/english/features/the-flatmates', free: true, recommended: true },
    { id: 'a1-l2', title: 'EnglishClass101 (A1 Lessons)', description: 'Short audio lessons with vocabulary and grammar explanations at a beginner-friendly pace.', type: 'youtube', skill: 'listening', url: 'https://www.youtube.com/c/EnglishClass101', free: true },
    { id: 'a1-r1', title: 'British Council – Reading A1', description: 'Simple reading texts with comprehension exercises built for A1 learners.', type: 'website', skill: 'reading', url: 'https://learnenglish.britishcouncil.org/skills/reading/a1-reading', free: true, recommended: true },
    { id: 'a1-r2', title: 'Oxford Bookworms Starter', description: 'Graded readers with a 250-word vocabulary — short, illustrated stories for beginners.', type: 'book', skill: 'reading', free: false },
    { id: 'a1-w1', title: 'British Council – Writing A1', description: 'Basic writing tasks: personal forms, short messages, and simple postcards with model answers.', type: 'website', skill: 'writing', url: 'https://learnenglish.britishcouncil.org/skills/writing/a1-writing', free: true },
    { id: 'a1-s1', title: 'Duolingo', description: 'Gamified speaking exercises with pronunciation practice — perfect for building first speaking confidence.', type: 'app', skill: 'speaking', url: 'https://www.duolingo.com', free: true, recommended: true },
    { id: 'a1-v1', title: 'Anki – Basic English Deck', description: '2,000 most common English words with spaced repetition for efficient memorization.', type: 'app', skill: 'vocabulary', url: 'https://apps.ankiweb.net', free: true, recommended: true },
    { id: 'a1-v2', title: 'Quizlet – A1 Vocabulary Sets', description: 'Flashcard sets for colors, numbers, greetings, and everyday objects.', type: 'website', skill: 'vocabulary', url: 'https://quizlet.com', free: true },
    { id: 'a1-g1', title: 'English Grammar in Use (Blue)', description: 'Cambridge elementary grammar book — present simple, articles, pronouns with clear exercises.', type: 'book', skill: 'grammar', free: false, recommended: true },
    { id: 'a1-g2', title: 'British Council – Grammar A1', description: 'Basic grammar lessons online: present tense, numbers, articles — with practice exercises.', type: 'website', skill: 'grammar', url: 'https://learnenglish.britishcouncil.org/grammar/a1-a2-grammar', free: true },
  ],
  A2: [
    { id: 'a2-l1', title: 'BBC 6 Minute English', description: '6-minute audio episodes on everyday topics with full transcripts — ideal for A2 listening.', type: 'podcast', skill: 'listening', url: 'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english', free: true, recommended: true },
    { id: 'a2-l2', title: 'ESL Pod', description: 'Slow, clear English dialogues on everyday situations with detailed vocabulary explanations.', type: 'podcast', skill: 'listening', url: 'https://www.eslpod.com', free: true },
    { id: 'a2-r1', title: 'News in Levels (Level 1–2)', description: 'Real news rewritten in three difficulty levels — use Level 1 and 2 for A2 practice.', type: 'website', skill: 'reading', url: 'https://www.newsinlevels.com', free: true, recommended: true },
    { id: 'a2-r2', title: 'Oxford Bookworms Level 1', description: 'Graded readers with a 400-word vocabulary — engaging short stories and classic retellings.', type: 'book', skill: 'reading', free: false },
    { id: 'a2-w1', title: 'British Council – Writing A2', description: 'Simple emails, descriptions, and short essays with model answers and tips.', type: 'website', skill: 'writing', url: 'https://learnenglish.britishcouncil.org/skills/writing/a2-writing', free: true },
    { id: 'a2-w2', title: 'Grammarly', description: 'AI writing assistant that checks basic grammar and spelling as you write in real time.', type: 'app', skill: 'writing', url: 'https://www.grammarly.com', free: true, recommended: true },
    { id: 'a2-s1', title: 'HelloTalk', description: 'Language exchange app — practice speaking with native English speakers via text and voice.', type: 'app', skill: 'speaking', url: 'https://www.hellotalk.com', free: true, recommended: true },
    { id: 'a2-s2', title: 'italki (Community Tutors)', description: 'Practice speaking with affordable community tutors or language exchange partners.', type: 'website', skill: 'speaking', url: 'https://www.italki.com', free: false },
    { id: 'a2-v1', title: 'Memrise – English Course', description: 'Vocabulary learning with native-speaker video clips and spaced repetition — very engaging.', type: 'app', skill: 'vocabulary', url: 'https://www.memrise.com', free: true, recommended: true },
    { id: 'a2-v2', title: 'WordReference', description: 'Comprehensive dictionary with example sentences, pronunciation, and forum discussions.', type: 'website', skill: 'vocabulary', url: 'https://www.wordreference.com', free: true },
    { id: 'a2-g1', title: 'English Grammar in Use (Blue)', description: 'Units 1–50 cover A2 grammar: past tenses, comparatives, prepositions, and much more.', type: 'book', skill: 'grammar', free: false, recommended: true },
    { id: 'a2-g2', title: 'Perfect English Grammar', description: 'Clear grammar explanations with free printable exercises — great for self-study at A2.', type: 'website', skill: 'grammar', url: 'https://www.perfect-english-grammar.com', free: true },
  ],
  B1: [
    { id: 'b1-l1', title: 'TED-Ed', description: 'Short animated educational videos on diverse topics — great for B1 comprehension practice.', type: 'youtube', skill: 'listening', url: 'https://www.youtube.com/teded', free: true, recommended: true },
    { id: 'b1-l2', title: 'VOA Learning English', description: 'News and features in slower, clearer English specifically designed for intermediate learners.', type: 'website', skill: 'listening', url: 'https://learningenglish.voanews.com', free: true },
    { id: 'b1-l3', title: 'Elllo.org', description: 'Thousands of listening exercises with audio, transcripts, and comprehension questions.', type: 'website', skill: 'listening', url: 'https://www.elllo.org', free: true },
    { id: 'b1-r1', title: 'Breaking News English', description: 'Current events articles at 7 reading levels with exercises — a B1 classic resource.', type: 'website', skill: 'reading', url: 'https://www.breakingnewsenglish.com', free: true, recommended: true },
    { id: 'b1-r2', title: 'Oxford Bookworms Level 3', description: 'Graded readers with a 1,000-word vocabulary: classic novels and modern stories.', type: 'book', skill: 'reading', free: false },
    { id: 'b1-w1', title: 'Write & Improve (Cambridge)', description: 'AI-powered writing feedback tool by Cambridge — perfect for structured B1 writing practice.', type: 'website', skill: 'writing', url: 'https://writeandimprove.com', free: true, recommended: true },
    { id: 'b1-w2', title: 'IELTS Liz – Writing Guide', description: 'Free IELTS writing lessons with model answers and task-by-task guidance for Task 1 & 2.', type: 'website', skill: 'writing', url: 'https://ieltsliz.com/ielts-writing', free: true },
    { id: 'b1-s1', title: 'ELSA Speak', description: 'AI pronunciation coach with detailed feedback on individual sounds and intonation patterns.', type: 'app', skill: 'speaking', url: 'https://elsaspeak.com', free: false, recommended: true },
    { id: 'b1-s2', title: 'italki (Professional Tutors)', description: 'Book sessions with professional teachers for structured speaking practice and correction.', type: 'website', skill: 'speaking', url: 'https://www.italki.com', free: false },
    { id: 'b1-v1', title: 'Vocabulary.com', description: 'Adaptive vocabulary learning with word definitions in context — quizzes reinforce retention.', type: 'website', skill: 'vocabulary', url: 'https://www.vocabulary.com', free: true, recommended: true },
    { id: 'b1-v2', title: 'English Collocations in Use (Intermediate)', description: 'Learn common word combinations essential for natural, fluent English expression.', type: 'book', skill: 'vocabulary', free: false },
    { id: 'b1-g1', title: 'English Grammar in Use (Red)', description: 'Intermediate grammar: conditionals, modals, passive voice, reported speech — essential at B1.', type: 'book', skill: 'grammar', free: false, recommended: true },
    { id: 'b1-g2', title: 'Grammar Girl Podcast', description: 'Short, practical grammar tips in podcast format — entertaining and easy to follow at B1.', type: 'podcast', skill: 'grammar', url: 'https://www.quickanddirtytips.com/grammar-girl', free: true },
  ],
  B2: [
    { id: 'b2-l1', title: 'BBC Radio 4 Podcasts', description: 'In-depth discussions, documentaries, and dramas in authentic British English.', type: 'podcast', skill: 'listening', url: 'https://www.bbc.co.uk/radio4', free: true, recommended: true },
    { id: 'b2-l2', title: 'TED Talks', description: 'Full-length talks on technology, design, and science — challenging but very rewarding.', type: 'youtube', skill: 'listening', url: 'https://www.ted.com', free: true },
    { id: 'b2-l3', title: 'Real English Conversations', description: 'Authentic conversations between native speakers on everyday topics — no scripting.', type: 'podcast', skill: 'listening', url: 'https://realenglishconversations.com/podcast', free: true },
    { id: 'b2-r1', title: 'The Guardian', description: 'Authentic British journalism — read articles to build academic and current-affairs vocabulary.', type: 'website', skill: 'reading', url: 'https://www.theguardian.com', free: true, recommended: true },
    { id: 'b2-r2', title: 'Readlang', description: 'Click any word for an instant translation while reading — saves to flashcards automatically.', type: 'website', skill: 'reading', url: 'https://readlang.com', free: true },
    { id: 'b2-w1', title: 'IELTS Simon', description: 'Band 7–8 model essays with detailed examiner analysis — essential for B2 IELTS writing.', type: 'website', skill: 'writing', url: 'https://ielts-simon.com', free: true, recommended: true },
    { id: 'b2-w2', title: 'Academic Word List (AWL)', description: '570 word families essential for IELTS and TOEFL writing tasks — learn them systematically.', type: 'website', skill: 'writing', url: 'https://www.victoria.ac.nz/lals/resources/academicwordlist', free: true },
    { id: 'b2-s1', title: 'Speechling', description: 'Record yourself speaking and receive feedback from native-speaker coaches.', type: 'website', skill: 'speaking', url: 'https://speechling.com', free: true, recommended: true },
    { id: 'b2-s2', title: 'Cambly', description: 'On-demand video chats with native English speakers from the US, UK, and Australia.', type: 'app', skill: 'speaking', url: 'https://www.cambly.com', free: false },
    { id: 'b2-v1', title: 'Academic Vocabulary in Use', description: 'Cambridge book focusing on academic and professional vocabulary — essential for B2+.', type: 'book', skill: 'vocabulary', free: false, recommended: true },
    { id: 'b2-v2', title: 'Linguee', description: 'Context-based dictionary showing real translated sentences — great for precise word choice.', type: 'website', skill: 'vocabulary', url: 'https://www.linguee.com', free: true },
    { id: 'b2-g1', title: 'Advanced Grammar in Use', description: 'Cambridge grammar for B2–C1: inversion, cleft sentences, advanced conditionals.', type: 'book', skill: 'grammar', free: false, recommended: true },
    { id: 'b2-g2', title: 'BBC – The Grammar Gameshow', description: 'Entertaining quiz show format testing advanced grammar — fun and educational.', type: 'youtube', skill: 'grammar', url: 'https://www.bbc.co.uk/learningenglish/english/features/the-grammar-gameshow', free: true },
  ],
  C1: [
    { id: 'c1-l1', title: 'NPR Podcasts', description: 'Planet Money, Hidden Brain, Radiolab — high-quality American journalism for advanced listeners.', type: 'podcast', skill: 'listening', url: 'https://www.npr.org/podcasts', free: true, recommended: true },
    { id: 'c1-l2', title: 'Intelligence Squared Debates', description: 'Oxford-style debates on complex global topics — excellent for academic listening at C1.', type: 'podcast', skill: 'listening', url: 'https://www.intelligencesquared.com', free: true },
    { id: 'c1-r1', title: 'The Economist', description: 'Complex geopolitical and economic analysis in precise, formal English — a C1 benchmark read.', type: 'website', skill: 'reading', url: 'https://www.economist.com', free: false, recommended: true },
    { id: 'c1-r2', title: 'Project Gutenberg', description: 'Free classic literature — read authentic English from Dickens, Austen, and more.', type: 'website', skill: 'reading', url: 'https://www.gutenberg.org', free: true },
    { id: 'c1-w1', title: 'Purdue OWL', description: 'Comprehensive academic writing guide — APA, MLA, research papers, and more from Purdue University.', type: 'website', skill: 'writing', url: 'https://owl.purdue.edu', free: true, recommended: true },
    { id: 'c1-w2', title: 'Cambridge CAE Writing Guide', description: 'C1 Advanced writing tasks: essays, proposals, reports, and reviews with model answers.', type: 'website', skill: 'writing', url: 'https://learnenglish.britishcouncil.org', free: true },
    { id: 'c1-s1', title: 'Toastmasters International', description: 'Join a local club to practice structured, formal public speaking — real C1 fluency builder.', type: 'website', skill: 'speaking', url: 'https://www.toastmasters.org', free: false, recommended: true },
    { id: 'c1-s2', title: 'Speak Confident English Podcast', description: 'Strategies for professional-level English communication, presentations, and negotiation.', type: 'podcast', skill: 'speaking', url: 'https://www.speakconfidentenglish.com/podcast', free: true },
    { id: 'c1-v1', title: 'English Vocabulary in Use (Advanced)', description: 'Cambridge book covering idioms, formal vocabulary, and word formation at C1 level.', type: 'book', skill: 'vocabulary', free: false, recommended: true },
    { id: 'c1-v2', title: 'Merriam-Webster Word of the Day', description: 'Daily vocabulary expansion with etymology, usage examples, and quizzes from a trusted source.', type: 'website', skill: 'vocabulary', url: 'https://www.merriam-webster.com/word-of-the-day', free: true },
    { id: 'c1-g1', title: "Swan's Practical English Usage", description: 'The definitive grammar reference used by teachers worldwide — answers every C1 grammar question.', type: 'book', skill: 'grammar', free: false, recommended: true },
    { id: 'c1-g2', title: 'Advanced Grammar in Use', description: 'Final units cover ellipsis, emphasis, discourse markers — ideal for C1 grammar refinement.', type: 'book', skill: 'grammar', free: false },
  ],
  C2: [
    { id: 'c2-l1', title: 'BBC World Service', description: 'Live global broadcasting in authentic, unmodified English across news, drama, and features.', type: 'podcast', skill: 'listening', url: 'https://www.bbc.co.uk/worldservice', free: true, recommended: true },
    { id: 'c2-l2', title: 'Philosophy Bites', description: 'Short interviews with leading philosophers on complex ideas — a demanding C2 listening challenge.', type: 'podcast', skill: 'listening', url: 'https://philosophybites.com', free: true },
    { id: 'c2-r1', title: 'JSTOR (Academic Journals)', description: 'Read peer-reviewed academic papers on your field of interest — the true C2 reading challenge.', type: 'website', skill: 'reading', url: 'https://www.jstor.org', free: true, recommended: true },
    { id: 'c2-r2', title: 'The New Yorker', description: 'Sophisticated long-form journalism, fiction, and criticism in refined, nuanced American English.', type: 'website', skill: 'reading', url: 'https://www.newyorker.com', free: false },
    { id: 'c2-w1', title: "The Elements of Style (Strunk & White)", description: 'Classic guide to clear, elegant English writing — essential reading for any C2 writer.', type: 'book', skill: 'writing', free: false, recommended: true },
    { id: 'c2-w2', title: 'Cambridge CPE Writing Guide', description: 'C2 Proficiency writing: articles, essays, and reviews requiring nuanced, precise expression.', type: 'website', skill: 'writing', url: 'https://www.cambridgeenglish.org', free: true },
    { id: 'c2-s1', title: 'Preply (Specialized Tutors)', description: 'Find tutors specializing in business, legal, or academic English for C2-level refinement.', type: 'website', skill: 'speaking', url: 'https://preply.com', free: false, recommended: true },
    { id: 'c2-s2', title: 'TED Talk Analysis', description: 'Study rhetoric, pacing, and delivery of top TED speakers — then record yourself emulating them.', type: 'youtube', skill: 'speaking', url: 'https://www.ted.com', free: true },
    { id: 'c2-v1', title: 'Cambridge Idioms Dictionary', description: 'Comprehensive guide to idiomatic expressions used by educated native speakers in real contexts.', type: 'book', skill: 'vocabulary', free: false, recommended: true },
    { id: 'c2-v2', title: 'Wordhippo', description: 'Find synonyms, antonyms, rhymes, and sentence examples to fine-tune sophisticated word choice.', type: 'website', skill: 'vocabulary', url: 'https://www.wordhippo.com', free: true },
    { id: 'c2-g1', title: 'COCA (English Corpus)', description: 'Search real corpus data to see how words and grammatical structures are actually used by native speakers.', type: 'website', skill: 'grammar', url: 'https://www.english-corpora.org/coca', free: true, recommended: true },
    { id: 'c2-g2', title: 'A Comprehensive Grammar of English', description: 'Quirk et al. — the academic reference grammar used by linguistics researchers at the highest level.', type: 'book', skill: 'grammar', free: false },
  ],
}
