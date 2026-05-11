import type { CEFRLevel } from '@/types'

export interface ErrorWord {
  wordIndex: number   // 0-based index in words array
  wrong: string       // the word as it appears (may be multi-token stored as one display unit)
  correct: string     // the correct replacement
  explanation: string // why it is wrong
  category: string    // e.g. "subject-verb agreement", "tense", "collocation"
}

export interface ErrorPassage {
  id: string
  title: string
  topic: string
  level: CEFRLevel
  // Raw text — words are split on spaces for rendering.
  // Punctuation is attached to the word before it.
  text: string
  errors: ErrorWord[]  // must reference correct wordIndex positions in split(text)
}

// Helper used only at data-definition time to label which word indices have errors.
// Actual runtime splitting happens in the component.

export const ERROR_PASSAGES: ErrorPassage[] = [

  // ─── A2 ──────────────────────────────────────────────────────

  {
    id: 'a2_01',
    title: 'My Morning Routine',
    topic: 'Daily Life',
    level: 'A2',
    text: 'Every morning I wakes up at seven o\'clock and goes to the bathroom. I brush my teeths and wash my face with cold water. After that, I makes breakfast — usually eggs and toast. I always drinks a cup of coffee before I leave the house. Yesterday, I forget my bag and I had to go back.',
    errors: [
      { wordIndex: 3,  wrong: 'wakes',  correct: 'wake',   explanation: 'Subject "I" → base form: "I wake up". "Wakes" is for he/she/it.', category: 'subject-verb agreement' },
      { wordIndex: 7,  wrong: 'goes',   correct: 'go',     explanation: '"I go" — not "goes". Third person -s only for he/she/it.', category: 'subject-verb agreement' },
      { wordIndex: 13, wrong: 'teeths', correct: 'teeth',  explanation: '"Teeth" is already irregular plural. "Teeths" does not exist.', category: 'irregular plural' },
      { wordIndex: 24, wrong: 'makes',  correct: 'make',   explanation: '"I make breakfast" — base form with "I".', category: 'subject-verb agreement' },
      { wordIndex: 30, wrong: 'drinks', correct: 'drink',  explanation: '"I drink" — not "drinks".', category: 'subject-verb agreement' },
      { wordIndex: 40, wrong: 'forget', correct: 'forgot', explanation: '"Yesterday" signals past simple. Irregular verb: forget → forgot.', category: 'past tense' },
    ],
  },

  {
    id: 'a2_02',
    title: 'A Visit to the Market',
    topic: 'Shopping & Food',
    level: 'A2',
    text: 'Last Saturday, my mother and I go to the market to buy some vegetables. There were a lot of peoples shopping there. We buyed some tomatoes, onions, and carrots. The tomatoes was very fresh and cheap. My mother payed five dollars for everything. We was very happy with our shopping.',
    errors: [
      { wordIndex: 5,  wrong: 'go',      correct: 'went',  explanation: '"Last Saturday" = past. "Go" → irregular past "went".', category: 'past tense' },
      { wordIndex: 13, wrong: 'peoples', correct: 'people',explanation: '"People" is already plural — "peoples" is incorrect in this context.', category: 'irregular plural' },
      { wordIndex: 17, wrong: 'buyed',   correct: 'bought',explanation: '"Buy" is irregular: buy → bought. "Buyed" does not exist.', category: 'irregular past tense' },
      { wordIndex: 24, wrong: 'was',     correct: 'were',  explanation: '"The tomatoes" = plural subject → "were". "Was" is for singular.', category: 'subject-verb agreement' },
      { wordIndex: 29, wrong: 'payed',   correct: 'paid',  explanation: '"Pay" is irregular: pay → paid. "Payed" is not standard.', category: 'irregular past tense' },
      { wordIndex: 34, wrong: 'was',     correct: 'were',  explanation: '"We" = plural → "were". "We were very happy."', category: 'subject-verb agreement' },
    ],
  },

  // ─── B1 ──────────────────────────────────────────────────────

  {
    id: 'b1_01',
    title: 'Living in a City vs. the Countryside',
    topic: 'Society & Lifestyle',
    level: 'B1',
    text: 'Many people prefers to live in cities because there are more job opportunities and facilities. However, city life can be very stressful and expensive. The pollution levels in most big cities have risen dramatic in recent decades. On the other hand, living in the countryside is more quiet and peaceful, but people often struggle to find works. Despite of these challenges, many families decide to move away from cities every year to enjoy a slower pace of life.',
    errors: [
      { wordIndex: 2,  wrong: 'prefers',  correct: 'prefer',     explanation: '"Many people" is plural → base form "prefer". No -s with plural subjects.', category: 'subject-verb agreement' },
      { wordIndex: 26, wrong: 'dramatic', correct: 'dramatically',explanation: '"Risen" is a verb — it needs an adverb to modify it: "risen dramatically".', category: 'adjective vs adverb' },
      { wordIndex: 33, wrong: 'quiet',    correct: 'quieter',    explanation: 'Comparative: "more quiet" is not standard. Use "quieter" (one-syllable adjective adds -er).', category: 'comparative adjective' },
      { wordIndex: 42, wrong: 'works',    correct: 'work',       explanation: '"Work" as an uncountable noun (employment) has no plural: "find work", not "find works".', category: 'uncountable noun' },
      { wordIndex: 44, wrong: 'Despite of', correct: 'Despite', explanation: '"Despite" is a preposition followed directly by a noun — never "despite of". "In spite of" is the two-word alternative.', category: 'preposition usage' },
    ],
  },

  {
    id: 'b1_02',
    title: 'The Benefits of Learning Languages',
    topic: 'Education',
    level: 'B1',
    text: 'Learning a foreign language has many advantages for students. First, it improve their chances of finding a good job in the future. Employers are looking for workers who can speak more than one language. In addition, learning a language helps people to understand other cultures more good. Research shows that bilingual people are often better in problem-solving and have a greater concentration abilities. Finally, studying a language abroad can be a very excitement experience that builds confidence.',
    errors: [
      { wordIndex: 9,  wrong: 'improve',      correct: 'improves',     explanation: '"It" (singular) → "improves". Third person singular present simple needs -s.', category: 'subject-verb agreement' },
      { wordIndex: 27, wrong: 'good',         correct: 'well',         explanation: '"Understand" is a verb — it needs an adverb: "understand more well" → "understand more well" is awkward; correct is "understand better" or "understand other cultures more deeply". "Good" is an adjective, not an adverb.', category: 'adjective vs adverb' },
      { wordIndex: 32, wrong: 'in',           correct: 'at',           explanation: '"Better at + gerund/noun" — the correct preposition. "Better in" is not standard in this context.', category: 'preposition usage' },
      { wordIndex: 37, wrong: 'concentration', correct: 'concentration', explanation: 'This is correct — but "abilities" should be singular: "concentration ability" or the phrase should be "greater powers of concentration".', category: 'noun agreement' },
      { wordIndex: 42, wrong: 'excitement',   correct: 'exciting',     explanation: '"Excitement" is a noun. Before a noun, use the adjective form: "exciting experience".', category: 'adjective vs noun' },
    ],
  },

  {
    id: 'b1_03',
    title: 'Technology in the Workplace',
    topic: 'Work & Technology',
    level: 'B1',
    text: 'Over the past decade, technology has changed the way we work in dramatically ways. Many routine tasks that use to be done by humans are now performed by machines or software. This means that workers need to continuosly update their skills to remain competitive. Although technology has created some new jobs, a lot of people are worried about loosing their positions. Companies that fail adapting to new technologies may find that they quickly become out of date.',
    errors: [
      { wordIndex: 9,  wrong: 'dramatically', correct: 'dramatic',    explanation: 'Before a noun ("ways"), use an adjective: "in dramatic ways". "Dramatically" is an adverb.', category: 'adjective vs adverb' },
      { wordIndex: 14, wrong: 'use',          correct: 'used',        explanation: '"Used to be done" — "used to" indicates a past habit. "Use to" is incorrect.', category: 'used to' },
      { wordIndex: 23, wrong: 'continuosly',  correct: 'continuously',explanation: 'Spelling error: "continuously" (from "continuous").', category: 'spelling' },
      { wordIndex: 33, wrong: 'loosing',      correct: 'losing',      explanation: '"Lose" (verb) → "losing". "Loosing" is not a standard word. Common error: loose (adjective) ≠ lose (verb).', category: 'spelling / word confusion' },
      { wordIndex: 38, wrong: 'adapting',     correct: 'to adapt',    explanation: '"Fail to do something" — "fail" must be followed by "to + infinitive", not a gerund.', category: 'verb pattern' },
    ],
  },

  // ─── B2 ──────────────────────────────────────────────────────

  {
    id: 'b2_01',
    title: 'The Impact of Social Media on Democracy',
    topic: 'Politics & Technology',
    level: 'B2',
    text: 'Social media platforms have fundamentally alter the way political information is shared and consumed. Algorithms that prioritise engagement tend to amplify content that provocates strong emotional responses, regardless of its accuracy. This has led to a phenomenon know as the "filter bubble", in which users are primarily exposed to viewpoints that reinforce their existing beliefs. Critics argue that this selective exposure makes it increasingly difficulty for citizens to access balanced information. Consequentially, many democracies are now grappling with how to regulate these powerful platforms without undermining freedom of expression.',
    errors: [
      { wordIndex: 5,  wrong: 'alter',         correct: 'altered',       explanation: '"Have altered" = present perfect. After "have/has", use the past participle: "altered", not the base form "alter".', category: 'perfect aspect' },
      { wordIndex: 13, wrong: 'provocates',    correct: 'provokes',      explanation: '"Provoke" is the correct verb; "provocate" does not exist in standard English. Third person singular: "provokes".', category: 'word form / false verb' },
      { wordIndex: 21, wrong: 'know',          correct: 'known',         explanation: '"Known as" — past participle in passive construction: "a phenomenon known as". "Know" is the base form.', category: 'past participle' },
      { wordIndex: 33, wrong: 'difficulty',    correct: 'difficult',     explanation: '"Increasingly difficult" — adjective needed (modifying the implied situation). "Difficulty" is a noun.', category: 'adjective vs noun' },
      { wordIndex: 36, wrong: 'Consequentially', correct: 'Consequently', explanation: '"Consequently" = as a result (discourse connector). "Consequentially" is not standard; it means "importantly" in legal contexts.', category: 'word confusion' },
    ],
  },

  {
    id: 'b2_02',
    title: 'Urban Planning and the Environment',
    topic: 'Environment & Society',
    level: 'B2',
    text: 'As cities continue to expand, urban planners face the challenge of balancing economic development with environment sustainability. One approach that have gained considerable attention is the concept of the "15-minute city", in which all essential services are within walking or cycling distance from residents\' homes. Proponents argue that this model significantly reduces carbon emissions and promotes physical activity among citizen. However, critics point out that implementing such plans requires substantial invest in public transport and infrastructure, which many cities simply cannot afford. Nevertheless, the idea continues to gain traction among both planners and the general publicly.',
    errors: [
      { wordIndex: 10, wrong: 'environment',  correct: 'environmental', explanation: '"Environmental sustainability" — adjective needed before a noun. "Environment" is a noun, not an adjective.', category: 'word form' },
      { wordIndex: 15, wrong: 'have',         correct: 'has',           explanation: '"One approach that has gained..." — "approach" is singular, so the relative clause verb must be singular: "has", not "have".', category: 'subject-verb agreement' },
      { wordIndex: 35, wrong: 'citizen',      correct: 'citizens',      explanation: '"Among citizens" — plural needed after "among" (= more than one person).', category: 'noun number' },
      { wordIndex: 43, wrong: 'invest',       correct: 'investment',    explanation: '"Substantial investment" — noun needed after an adjective. "Invest" is a verb.', category: 'word form / nominalisation' },
      { wordIndex: 53, wrong: 'publicly',     correct: 'public',        explanation: '"The general public" = the noun phrase for ordinary people. "Publicly" is an adverb and cannot follow "the general".', category: 'word form' },
    ],
  },

  // ─── C1 ──────────────────────────────────────────────────────

  {
    id: 'c1_01',
    title: 'The Ethics of Artificial Intelligence',
    topic: 'Technology & Ethics',
    level: 'C1',
    text: 'The rapid proliferation of artificial intelligence systems has raised profound ethical questions that governments and technologists are only begin to grapple with. Central among these concerns is the question of algorithmic bias: datasets used to train AI models frequently reflect historical inequalities, causing systems to perpetuate — and at times to intensify — the very discriminations they were ostensibly designed to overcome. Furthermore, the increasing deployment of AI in consequential domains such as healthcare, criminal justice, and financial services has made transparent and accountably essential, yet few jurisdictions have established adequate regulatory frameworks. In the absence of meaningful oversight, the risk is not merely that individual systems will malfunction, but that the widespread adopting of opaque decision-making processes will systematically erode public trust in institutional authority.',
    errors: [
      { wordIndex: 14, wrong: 'begin',         correct: 'beginning',    explanation: '"Are only beginning to grapple" — continuous form needed after "are". "Begin" is the base form.', category: 'continuous aspect' },
      { wordIndex: 30, wrong: 'discriminations',correct: 'discrimination', explanation: '"Discrimination" as an abstract concept is uncountable — it has no plural form in this usage.', category: 'uncountable noun' },
      { wordIndex: 42, wrong: 'accountably',   correct: 'accountability', explanation: '"Transparency and accountability" — two nouns needed as compound subjects. "Accountably" is an adverb; the noun is "accountability".', category: 'word form / nominalisation' },
      { wordIndex: 55, wrong: 'adopting',      correct: 'adoption',     explanation: '"The widespread adoption of" — nominalisation: the noun "adoption" is required after the determiner "the" and adjective "widespread". "Adopting" is a gerund/verb form.', category: 'nominalisation' },
      { wordIndex: 60, wrong: 'erode',         correct: 'erodes',       explanation: '"The risk is that...the adoption will systematically erode" — the subject of this embedded clause is "the adoption" (singular), so the verb should be "erodes" in present tense for a general statement of risk. Alternatively, "will erode" is also acceptable; the error is using bare "erode" after a modal-free singular subject in present simple.', category: 'subject-verb agreement' },
    ],
  },

  {
    id: 'c1_02',
    title: 'Global Supply Chains and Resilience',
    topic: 'Economics & Business',
    level: 'C1',
    text: 'The COVID-19 pandemic exposed the fragile of global supply chains that had been constructed over decades of economic globalisation. Manufacturers who had embraced just-in-time production — a system minimising inventory by delivering components precisely when needed — founded themselves acutely vulnerable when disruptions struck multiple links in the chain simultaneously. The crisis prompted many corporations to fundamentally reconsidering their procurement strategies, with some opting to nearshore or repatriate elements of production previously offshored to low-cost jurisdictions. Economists note, however, that the transition from efficiency-optimised to resilience-optimised supply chains inevitably involves trade-offs: redundancy and diversification come at a cost that is ultimately borned by consumers and shareholders alike.',
    errors: [
      { wordIndex: 4,  wrong: 'fragile',      correct: 'fragility',    explanation: '"The fragility of global supply chains" — noun needed after the definite article "the". "Fragile" is an adjective.', category: 'word form / nominalisation' },
      { wordIndex: 20, wrong: 'founded',      correct: 'found',        explanation: '"Found themselves" = discovered themselves to be. Not "founded" (= established an organisation). Past simple of "find" is "found", but the context is "find" not "found" (establish).', category: 'word confusion' },
      { wordIndex: 36, wrong: 'reconsidering',correct: 'reconsider',   explanation: '"Prompted many corporations to reconsider" — "prompt + object + to + infinitive". After "to" in this construction, use the base infinitive, not a gerund.', category: 'verb pattern' },
      { wordIndex: 56, wrong: 'borned',       correct: 'borne',        explanation: '"Borne by consumers" — past participle of "bear" (to carry/absorb a cost). "Born" = given birth to; "borne" = carried/absorbed. "Borned" does not exist.', category: 'irregular past participle' },
    ],
  },

]
