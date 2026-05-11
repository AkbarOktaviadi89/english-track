import type { CEFRLevel } from '@/types'

export interface PhraseItem {
  phrase: string
  meaning: string
  example: string
  category: PhraseCategory
  level: CEFRLevel
}

export type PhraseCategory =
  | 'discourse'
  | 'opinion'
  | 'ielts_writing'
  | 'ielts_speaking'
  | 'hedging'
  | 'data'
  | 'cause_effect'
  | 'compare'
  | 'academic'
  | 'toefl'

export const PHRASE_CATEGORIES: Record<PhraseCategory, { label: string; color: string }> = {
  discourse:      { label: 'Discourse Markers', color: '#2563eb' },
  opinion:        { label: 'Opinion & Argument', color: '#7c3aed' },
  ielts_writing:  { label: 'IELTS Writing',      color: '#259775' },
  ielts_speaking: { label: 'IELTS Speaking',     color: '#d97706' },
  hedging:        { label: 'Hedging Language',   color: '#db2777' },
  data:           { label: 'Data Description',   color: '#0891b2' },
  cause_effect:   { label: 'Cause & Effect',     color: '#dc2626' },
  compare:        { label: 'Compare & Contrast', color: '#9333ea' },
  academic:       { label: 'Academic Writing',   color: '#475569' },
  toefl:          { label: 'TOEFL / General',    color: '#059669' },
}

export const PRESET_PHRASES: PhraseItem[] = [

  // ─── Discourse Markers ───────────────────────────────────────
  { phrase: 'Furthermore,', meaning: 'Adds a stronger additional point', example: 'Furthermore, the environmental impact of this policy has been widely underestimated.', category: 'discourse', level: 'B1' },
  { phrase: 'Moreover,', meaning: 'Adds an equally important or stronger point', example: 'Moreover, studies have shown that this approach reduces costs by 30%.', category: 'discourse', level: 'B1' },
  { phrase: 'In addition,', meaning: 'Adds a supplementary point', example: 'In addition, the government has introduced several incentive schemes to encourage adoption.', category: 'discourse', level: 'B1' },
  { phrase: 'However,', meaning: 'Introduces a contrast or opposing point', example: 'However, not all experts agree with this interpretation of the data.', category: 'discourse', level: 'B1' },
  { phrase: 'Nevertheless,', meaning: 'Concedes a point but maintains a position', example: 'The task was challenging. Nevertheless, the team completed it ahead of schedule.', category: 'discourse', level: 'B2' },
  { phrase: 'On the other hand,', meaning: 'Introduces the contrasting side of an argument', example: 'On the other hand, proponents of the scheme argue that the long-term benefits are significant.', category: 'discourse', level: 'B1' },
  { phrase: 'As a result,', meaning: 'Introduces a consequence', example: 'As a result, unemployment rates fell to their lowest level in a decade.', category: 'discourse', level: 'B1' },
  { phrase: 'Consequently,', meaning: 'Formal way to introduce a consequence', example: 'Consequently, many businesses were forced to relocate overseas.', category: 'discourse', level: 'B2' },
  { phrase: 'For instance,', meaning: 'Introduces a specific example', example: 'Many countries have adopted green energy policies. For instance, Denmark now generates over 50% of its electricity from wind.', category: 'discourse', level: 'B1' },
  { phrase: 'In contrast,', meaning: 'Highlights a direct difference', example: 'In contrast, rural areas have seen a significant decline in population over the same period.', category: 'discourse', level: 'B1' },
  { phrase: 'That said,', meaning: 'Concedes a point before qualifying it', example: 'The results were promising. That said, further testing is needed before any conclusions can be drawn.', category: 'discourse', level: 'B2' },
  { phrase: 'To illustrate,', meaning: 'Introduces a concrete example to clarify a point', example: 'To illustrate, consider the case of Singapore, which transformed its economy in under 30 years.', category: 'discourse', level: 'B2' },

  // ─── Opinion & Argument ──────────────────────────────────────
  { phrase: 'In my opinion,', meaning: 'Introduces a personal view', example: 'In my opinion, stricter regulations are necessary to address this issue.', category: 'opinion', level: 'B1' },
  { phrase: 'It could be argued that', meaning: 'Introduces a view with some distance — less personal', example: 'It could be argued that the economic benefits of tourism outweigh the environmental costs.', category: 'opinion', level: 'B2' },
  { phrase: 'From my perspective,', meaning: 'Introduces a personal viewpoint', example: 'From my perspective, the most effective solution would be to invest in public education.', category: 'opinion', level: 'B1' },
  { phrase: 'It is widely believed that', meaning: 'Indicates a commonly held view', example: 'It is widely believed that early childhood education has a lasting impact on academic performance.', category: 'opinion', level: 'B2' },
  { phrase: 'Many people argue that', meaning: 'Presents a widely held argument', example: 'Many people argue that social media has done more harm than good to society.', category: 'opinion', level: 'B1' },
  { phrase: 'I would contend that', meaning: 'Formal way to assert a strong personal view', example: 'I would contend that the proposed solution fails to address the root cause of the problem.', category: 'opinion', level: 'C1' },
  { phrase: 'There is a growing consensus that', meaning: 'Signals emerging agreement among experts or the public', example: 'There is a growing consensus that remote work will become the norm in many industries.', category: 'opinion', level: 'C1' },
  { phrase: 'While it is true that X, Y', meaning: 'Concedes one point before asserting a stronger counter-point', example: 'While it is true that technology creates new jobs, it simultaneously displaces a greater number.', category: 'opinion', level: 'B2' },

  // ─── IELTS Writing Task 2 ────────────────────────────────────
  { phrase: 'This has led to', meaning: 'Introduces a consequence in a causal chain', example: 'Rapid urbanisation has led to increased pressure on housing, infrastructure, and public services.', category: 'ielts_writing', level: 'B2' },
  { phrase: 'One of the main reasons for this is', meaning: 'Identifies a key cause', example: 'One of the main reasons for this is the widespread availability of affordable technology.', category: 'ielts_writing', level: 'B1' },
  { phrase: 'The most significant factor is', meaning: 'Highlights the most important cause or element', example: 'The most significant factor is the lack of investment in public transport infrastructure.', category: 'ielts_writing', level: 'B2' },
  { phrase: 'The benefits of X far outweigh the drawbacks', meaning: 'States that advantages are more important than disadvantages', example: 'In my view, the benefits of international trade far outweigh the drawbacks for developing nations.', category: 'ielts_writing', level: 'B2' },
  { phrase: 'This trend can be attributed to', meaning: 'Explains the cause of a trend', example: 'This trend can be attributed to rising disposable incomes and changing consumer preferences.', category: 'ielts_writing', level: 'B2' },
  { phrase: 'It is essential that + subject + should', meaning: 'Strong recommendation or obligation', example: 'It is essential that governments should take immediate action to reduce carbon emissions.', category: 'ielts_writing', level: 'B2' },
  { phrase: 'To a large extent,', meaning: 'Indicates partial but strong agreement', example: 'To a large extent, the success of any education system depends on teacher quality and motivation.', category: 'ielts_writing', level: 'B2' },
  { phrase: 'In conclusion, while X, overall Y', meaning: 'Standard IELTS conclusion structure', example: 'In conclusion, while there are valid arguments on both sides, I believe the advantages of X ultimately outweigh the disadvantages.', category: 'ielts_writing', level: 'B2' },

  // ─── IELTS Speaking ──────────────────────────────────────────
  { phrase: "That's an interesting question.", meaning: 'Buys time while signalling engagement', example: "That's an interesting question. Let me think about it for a moment.", category: 'ielts_speaking', level: 'B1' },
  { phrase: 'To be honest,', meaning: 'Adds authenticity before giving a genuine opinion', example: 'To be honest, I\'m not entirely sure, but I think the main reason is probably economic pressure.', category: 'ielts_speaking', level: 'B1' },
  { phrase: "I'd have to say that", meaning: 'Natural way to introduce an opinion in speaking', example: "I'd have to say that living in a big city has both advantages and disadvantages.", category: 'ielts_speaking', level: 'B1' },
  { phrase: "What I mean is,", meaning: 'Clarifies or rephrases what you just said', example: "It can be quite stressful. What I mean is, the pace of modern life leaves little time for relaxation.", category: 'ielts_speaking', level: 'B1' },
  { phrase: "I suppose it depends on", meaning: 'Acknowledges complexity and qualifies your answer', example: "I suppose it depends on the individual circumstances, but generally speaking, I think X is preferable.", category: 'ielts_speaking', level: 'B2' },
  { phrase: "From what I've read / heard,", meaning: 'References external knowledge without claiming certainty', example: "From what I've read, the situation has improved significantly in recent years.", category: 'ielts_speaking', level: 'B2' },
  { phrase: "Having said that,", meaning: 'Introduces a contrasting point while maintaining a previous one', example: "It definitely has its challenges. Having said that, I think the rewards make it worthwhile.", category: 'ielts_speaking', level: 'B2' },
  { phrase: "As far as I'm concerned,", meaning: 'Introduces a firm personal opinion', example: "As far as I'm concerned, education should always be free at the point of access.", category: 'ielts_speaking', level: 'B2' },

  // ─── Hedging Language ────────────────────────────────────────
  { phrase: 'It seems / appears that', meaning: 'Suggests something is likely but not certain', example: 'It appears that the policy has had a limited effect on reducing emissions.', category: 'hedging', level: 'B2' },
  { phrase: 'This may suggest that', meaning: 'Cautious interpretation of evidence', example: 'This may suggest that the relationship between income and health is more complex than previously assumed.', category: 'hedging', level: 'B2' },
  { phrase: 'To some extent,', meaning: 'Acknowledges partial truth', example: 'To some extent, globalisation has contributed to the erosion of local cultures and traditions.', category: 'hedging', level: 'B2' },
  { phrase: 'Research seems to indicate that', meaning: 'Presents research findings cautiously', example: 'Research seems to indicate that bilingual children may develop stronger cognitive flexibility.', category: 'hedging', level: 'C1' },
  { phrase: 'It is generally thought that', meaning: 'Reports a widely held but not universal view', example: 'It is generally thought that early intervention produces better long-term outcomes.', category: 'hedging', level: 'B2' },
  { phrase: 'This could be attributed to', meaning: 'Suggests a possible cause without certainty', example: 'The decline in reading rates could be attributed to the rise of digital entertainment.', category: 'hedging', level: 'C1' },
  { phrase: 'It tends to be the case that', meaning: 'Describes a general pattern with exceptions', example: 'It tends to be the case that urban residents have greater access to healthcare facilities.', category: 'hedging', level: 'C1' },
  { phrase: 'Arguably,', meaning: 'Introduces a defensible but debatable claim', example: 'Arguably, the greatest challenge facing cities today is not climate change but inequality.', category: 'hedging', level: 'C1' },

  // ─── Data Description (IELTS Task 1) ────────────────────────
  { phrase: 'The graph/chart illustrates', meaning: 'Opens a Task 1 description', example: 'The graph illustrates the changes in global average temperature between 1980 and 2020.', category: 'data', level: 'B1' },
  { phrase: 'There was a significant increase in', meaning: 'Describes a notable rise', example: 'There was a significant increase in smartphone ownership between 2010 and 2015.', category: 'data', level: 'B1' },
  { phrase: 'X rose/fell sharply to', meaning: 'Describes a dramatic change to a specific value', example: 'Sales figures rose sharply to approximately 4 million units by the end of the period.', category: 'data', level: 'B1' },
  { phrase: 'X reached a peak of', meaning: 'Identifies the highest point', example: 'Energy consumption reached a peak of 350 terawatt-hours in 2018 before declining.', category: 'data', level: 'B2' },
  { phrase: 'X accounted for the largest proportion of', meaning: 'Identifies the biggest category in a pie/bar chart', example: 'Transport accounted for the largest proportion of carbon emissions, at 28%.', category: 'data', level: 'B2' },
  { phrase: 'Overall, the most notable trend is', meaning: 'Introduces the overview — most important sentence in Task 1', example: 'Overall, the most notable trend is the steady decline in coal usage and a corresponding rise in renewables.', category: 'data', level: 'B2' },
  { phrase: 'During the period shown,', meaning: 'Refers to the timeframe on the graph', example: 'During the period shown, the population of urban areas more than doubled.', category: 'data', level: 'B1' },
  { phrase: 'X and Y showed a similar pattern', meaning: 'Points out parallel trends', example: 'France and Germany showed a similar pattern, with both countries experiencing a sharp rise in 2015.', category: 'data', level: 'B2' },

  // ─── Cause & Effect ──────────────────────────────────────────
  { phrase: '... which has resulted in', meaning: 'Links an action to its consequence', example: 'Rapid deforestation has occurred, which has resulted in the displacement of indigenous communities.', category: 'cause_effect', level: 'B2' },
  { phrase: 'Due to X, Y has occurred', meaning: 'States a cause and its effect', example: 'Due to advances in medical technology, life expectancy has increased dramatically in most countries.', category: 'cause_effect', level: 'B1' },
  { phrase: 'As a consequence of', meaning: 'Formal way to introduce an effect', example: 'As a consequence of the financial crisis, many households were forced into austerity.', category: 'cause_effect', level: 'B2' },
  { phrase: 'The primary cause of X is', meaning: 'Identifies the most important cause', example: 'The primary cause of urban traffic congestion is the lack of investment in public transport alternatives.', category: 'cause_effect', level: 'B2' },
  { phrase: 'X stems from', meaning: 'Explains the origin of a problem', example: 'Much of the dissatisfaction among workers stems from a lack of recognition and career development opportunities.', category: 'cause_effect', level: 'C1' },
  { phrase: 'This accounts for', meaning: 'Explains why something is the case', example: 'The high dropout rate largely accounts for the low graduation statistics reported in this region.', category: 'cause_effect', level: 'C1' },

  // ─── Compare & Contrast ──────────────────────────────────────
  { phrase: 'Unlike X, Y', meaning: 'Highlights a key difference', example: 'Unlike traditional classroom learning, online education offers flexibility in terms of time and location.', category: 'compare', level: 'B1' },
  { phrase: 'Whereas X tends to..., Y generally...', meaning: 'Compares two contrasting tendencies', example: 'Whereas older generations tend to value job security, younger workers generally prioritise work-life balance.', category: 'compare', level: 'B2' },
  { phrase: 'Both X and Y share the characteristic of', meaning: 'Identifies a common feature', example: 'Both Finland and South Korea share the characteristic of high investment in teacher training and development.', category: 'compare', level: 'B2' },
  { phrase: 'The main difference between X and Y is', meaning: 'Directly states the key distinction', example: 'The main difference between public and private healthcare is who bears the cost of treatment.', category: 'compare', level: 'B1' },
  { phrase: 'In comparison with', meaning: 'Makes a formal comparison', example: 'In comparison with their European counterparts, American workers receive significantly less paid holiday.', category: 'compare', level: 'B2' },

  // ─── Academic Writing ────────────────────────────────────────
  { phrase: 'A growing body of evidence suggests', meaning: 'References increasing research support for a claim', example: 'A growing body of evidence suggests that screen time is negatively affecting children\'s sleep quality.', category: 'academic', level: 'C1' },
  { phrase: 'Research has consistently shown that', meaning: 'Indicates well-established research findings', example: 'Research has consistently shown that reading for pleasure improves both literacy and empathy.', category: 'academic', level: 'C1' },
  { phrase: 'It is worth noting that', meaning: 'Draws attention to an important but easily overlooked point', example: 'It is worth noting that the study was conducted during an atypical economic period.', category: 'academic', level: 'B2' },
  { phrase: 'This raises the question of', meaning: 'Points to an unanswered or problematic issue', example: 'This raises the question of whether current carbon targets are realistic given existing political constraints.', category: 'academic', level: 'C1' },
  { phrase: 'It remains unclear whether', meaning: 'Identifies an unresolved question in the field', example: 'It remains unclear whether these findings can be applied to broader populations beyond the study group.', category: 'academic', level: 'C1' },
  { phrase: 'The extent to which X is debatable', meaning: 'Signals that a claim is contested', example: 'The extent to which social media has influenced political polarisation is a matter of ongoing academic debate.', category: 'academic', level: 'C1' },
  { phrase: 'This is consistent with the view that', meaning: 'Links findings to a theoretical framework', example: 'This is consistent with the view that intrinsic motivation produces more durable learning outcomes than extrinsic reward.', category: 'academic', level: 'C1' },

  // ─── TOEFL / General Academic ────────────────────────────────
  { phrase: 'The reading states / The lecturer argues', meaning: 'TOEFL Integrated task attribution phrases', example: 'The reading states that fossil fuels remain the most cost-effective energy source. However, the lecturer argues that this fails to account for long-term environmental costs.', category: 'toefl', level: 'B2' },
  { phrase: 'In contrast to the reading,', meaning: 'TOEFL Integrated — signals the lecture\'s opposing view', example: 'In contrast to the reading, the lecturer suggests that the evidence for X is far less conclusive than claimed.', category: 'toefl', level: 'B2' },
  { phrase: 'According to recent studies,', meaning: 'References research without a specific citation', example: 'According to recent studies, over 60% of adults in developed countries report feeling chronically stressed.', category: 'toefl', level: 'B2' },
  { phrase: 'It is important to consider', meaning: 'Introduces a relevant factor or dimension', example: 'It is important to consider the long-term social consequences alongside the immediate economic benefits.', category: 'toefl', level: 'B2' },
  { phrase: 'One could argue that', meaning: 'Introduces a viewpoint with some distance', example: 'One could argue that the rapid pace of technological change has outstripped society\'s ability to adapt.', category: 'toefl', level: 'B2' },
]
