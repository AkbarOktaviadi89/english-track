import type { CEFRLevel } from '@/types'

export interface ClozeGap {
  answer: string          // correct answer (case-insensitive check)
  options: string[]       // 4 options for multiple-choice mode (includes answer)
  explanation: string     // why this answer is correct
  hint?: string           // optional grammar hint
}

export interface ClozePassage {
  id: string
  title: string
  topic: string
  level: CEFRLevel
  // Text uses {{1}}, {{2}}… as gap markers. Count must match gaps array length.
  text: string
  gaps: ClozeGap[]
}

export const CLOZE_PASSAGES: ClozePassage[] = [

  // ─── A2 ──────────────────────────────────────────────────────

  {
    id: 'a2_01',
    title: 'Smartphones and Daily Life',
    topic: 'Technology',
    level: 'A2',
    text: `Most people {{1}} their smartphones for at least two hours every day. They check social media, send messages, and look {{2}} the latest news. However, many parents are {{3}} about how much time their children spend on devices. They believe that too much screen time can {{4}} sleep quality and make it harder to concentrate at school. {{5}} these concerns, the number of smartphone users continues to grow rapidly, and experts predict this trend will continue {{6}} the next decade.`,
    gaps: [
      { answer: 'use', options: ['use', 'using', 'used', 'to use'], explanation: '"Most people" + base verb: "use". Present simple for habits and facts.', hint: 'Present simple — habit' },
      { answer: 'at', options: ['at', 'for', 'to', 'on'], explanation: '"Look at" is a fixed phrasal verb meaning to direct your eyes towards something.', hint: 'Phrasal verb: look at' },
      { answer: 'worried', options: ['worried', 'worry', 'worrying', 'worries'], explanation: '"Be worried about" = feel concerned. Adjective after "are": worried.', hint: 'Adjective after "be"' },
      { answer: 'affect', options: ['affect', 'effect', 'effects', 'affected'], explanation: '"Affect" is the verb (to have an impact on). "Effect" is the noun.', hint: 'affect (verb) vs effect (noun)' },
      { answer: 'Despite', options: ['Despite', 'Although', 'However', 'Because'], explanation: '"Despite + noun phrase" = even though. "Although" needs a full clause after it.', hint: 'Despite + noun phrase' },
      { answer: 'for', options: ['for', 'during', 'in', 'since'], explanation: '"For the next decade" = throughout the next ten years. "For" with a period of time.', hint: 'for + time period' },
    ],
  },

  {
    id: 'a2_02',
    title: 'A Healthy Lifestyle',
    topic: 'Health',
    level: 'A2',
    text: `Doctors recommend {{1}} at least 30 minutes of exercise every day to stay healthy. Walking, swimming, and cycling are all {{2}} ways to keep fit. It is also important to eat a {{3}} diet with plenty of fruit, vegetables, and whole grains. Many people find it difficult to avoid {{4}} food that is high in sugar and fat, especially when they are busy or stressed. Getting enough sleep is {{5}} important — most adults need between seven and nine hours {{6}} night.`,
    gaps: [
      { answer: 'doing', options: ['doing', 'to do', 'do', 'done'], explanation: '"Recommend + gerund (-ing)": recommend doing. Never "recommend to do".', hint: 'recommend + gerund' },
      { answer: 'excellent', options: ['excellent', 'excellence', 'excelling', 'excel'], explanation: 'Before a noun, use the adjective form: "excellent ways". "Excellence" is a noun.', hint: 'adjective before noun' },
      { answer: 'balanced', options: ['balanced', 'balance', 'balancing', 'balances'], explanation: '"A balanced diet" is a fixed collocation — one of the most common in health English.', hint: 'fixed collocation: balanced diet' },
      { answer: 'eating', options: ['eating', 'eat', 'to eat', 'eaten'], explanation: '"Avoid + gerund (-ing)": avoid eating. Modal verbs/certain verbs take gerund.', hint: 'avoid + gerund' },
      { answer: 'equally', options: ['equally', 'equal', 'equality', 'equalling'], explanation: '"Equally important" = adverb modifying an adjective. Adverbs modify adjectives.', hint: 'adverb + adjective' },
      { answer: 'per', options: ['per', 'every', 'each', 'a'], explanation: '"Per night" = each night. "Per" is formal; "a night" is also correct but less formal.', hint: 'per / a + time unit' },
    ],
  },

  // ─── B1 ──────────────────────────────────────────────────────

  {
    id: 'b1_01',
    title: 'The Rise of Remote Working',
    topic: 'Work',
    level: 'B1',
    text: `The COVID-19 pandemic {{1}} the way millions of people work, with remote working becoming the norm rather than the exception. Many employees discovered that they could {{2}} their tasks just as effectively from home, {{3}} the need for a daily commute. However, working from home is not without its challenges. Some people struggle to {{4}} their professional and personal lives, particularly when their home also serves as their office. {{5}}, companies are now adopting hybrid models that allow staff to split their time {{6}} the office and home, offering the benefits of both environments.`,
    gaps: [
      { answer: 'transformed', options: ['transformed', 'has transformed', 'transforms', 'was transforming'], explanation: 'Past simple for a completed historical change. "The pandemic transformed" = it happened and finished.', hint: 'past simple — completed past event' },
      { answer: 'complete', options: ['complete', 'completing', 'completed', 'to complete'], explanation: '"Could + base verb": could complete. Modal verbs are always followed by the base form.', hint: 'modal verb + base form' },
      { answer: 'eliminating', options: ['eliminating', 'eliminated', 'eliminate', 'elimination'], explanation: 'Participial clause giving the result: "...from home, eliminating the need..." = thereby eliminating.', hint: 'participial clause (result)' },
      { answer: 'separate', options: ['separate', 'separation', 'separated', 'separately'], explanation: '"Struggle to + base verb": struggle to separate. Infinitive after "struggle to".', hint: 'struggle to + infinitive' },
      { answer: 'Consequently', options: ['Consequently', 'Nevertheless', 'Furthermore', 'Although'], explanation: '"Consequently" introduces a result or effect. The hybrid model is a consequence of the challenges mentioned.', hint: 'result/consequence connector' },
      { answer: 'between', options: ['between', 'among', 'across', 'through'], explanation: '"Split time between X and Y" = divide time between two options. "Between" is used with two things.', hint: 'between two options' },
    ],
  },

  {
    id: 'b1_02',
    title: 'Social Media and Young People',
    topic: 'Society',
    level: 'B1',
    text: `Social media platforms {{1}} an increasingly important part of young people's lives over the past decade. While these platforms allow users to stay {{2}} with friends and share experiences, there is growing evidence that excessive use can have a negative {{3}} on mental health. Studies have shown that teenagers who spend more than three hours a day on social media are significantly more likely to {{4}} symptoms of anxiety and depression. {{5}} this, many schools are introducing "digital wellbeing" programmes to help students develop a healthier {{6}} to technology.`,
    gaps: [
      { answer: 'have become', options: ['have become', 'became', 'are becoming', 'had become'], explanation: '"Over the past decade" + present perfect: an ongoing change up to now. "Have become" is correct.', hint: 'present perfect with "over the past decade"' },
      { answer: 'connected', options: ['connected', 'connect', 'connecting', 'connection'], explanation: '"Stay connected" = remain in contact. Fixed collocation. Adjective after "stay".', hint: 'stay + adjective' },
      { answer: 'impact', options: ['impact', 'affect', 'effect', 'influence'], explanation: '"Negative impact on" is a fixed collocation. "Effect on" also works but "impact" is stronger in academic writing.', hint: 'collocation: impact on' },
      { answer: 'experience', options: ['experience', 'experiencing', 'have experienced', 'experiences'], explanation: '"More likely to + base verb": likely to experience. Infinitive after "likely to".', hint: 'likely to + base verb' },
      { answer: 'In response to', options: ['In response to', 'Despite', 'As a result of', 'In contrast to'], explanation: '"In response to" = as a reaction to. Schools are responding to the problem by introducing programmes.', hint: 'reaction/response connector' },
      { answer: 'relationship', options: ['relationship', 'relation', 'relating', 'relative'], explanation: '"Relationship to/with technology" = how one interacts with it. "Relation" is possible but "relationship" is more natural here.', hint: 'collocation: relationship with/to' },
    ],
  },

  {
    id: 'b1_03',
    title: 'The Importance of Forests',
    topic: 'Environment',
    level: 'B1',
    text: `Forests cover approximately 31% of the world's land surface and {{1}} a vital role in maintaining ecological balance. They absorb carbon dioxide from the atmosphere, {{2}} in the regulation of global climate. In addition to this, forests are home to more than 80% of the world's {{3}} species of animals, plants, and insects. {{4}}, vast areas of forest are being destroyed every year, primarily to {{5}} land for agriculture and urban development. If this trend continues, scientists warn that many species will {{6}} extinct within the next fifty years.`,
    gaps: [
      { answer: 'play', options: ['play', 'make', 'do', 'give'], explanation: '"Play a role" = a fixed collocation. Never "make/do a role". Very common in academic writing.', hint: 'collocation: play a role' },
      { answer: 'helping', options: ['helping', 'help', 'helped', 'to help'], explanation: 'Participial clause: "...from the atmosphere, helping in the regulation..." = thereby helping.', hint: 'participial clause' },
      { answer: 'terrestrial', options: ['terrestrial', 'land', 'natural', 'physical'], explanation: '"Terrestrial species" = species living on land (from Latin terra = earth). Academic vocabulary for IELTS.', hint: 'academic vocabulary' },
      { answer: 'However', options: ['However', 'Therefore', 'Furthermore', 'In addition'], explanation: '"However" introduces a contrast. The positive facts about forests contrast with their destruction.', hint: 'contrast connector' },
      { answer: 'clear', options: ['clear', 'use', 'develop', 'build'], explanation: '"Clear land" = remove trees to make land available. "Clear" collocates specifically with land/forests.', hint: 'collocation: clear land' },
      { answer: 'become', options: ['become', 'go', 'turn', 'get'], explanation: '"Become extinct" = a fixed collocation. "Go extinct" is also acceptable. Never "get extinct".', hint: 'collocation: become extinct' },
    ],
  },

  {
    id: 'b1_04',
    title: 'Learning a Second Language',
    topic: 'Education',
    level: 'B1',
    text: `Learning a second language is one of the most {{1}} investments a person can make in their personal development. Research consistently shows that bilingual individuals tend to have better cognitive flexibility, {{2}} them to switch between tasks more efficiently. Moreover, speaking a second language opens up professional opportunities that would otherwise be {{3}} reach. Many employers actively {{4}} candidates who can communicate in more than one language, particularly in international business environments. Despite the challenges involved, the most effective approach is to immerse {{5}} in the language as much as possible — through media, conversation, and daily practice — rather than {{6}} solely on formal classroom instruction.`,
    gaps: [
      { answer: 'valuable', options: ['valuable', 'value', 'valued', 'valuing'], explanation: '"Most valuable investments" — superlative adjective before noun.', hint: 'superlative adjective' },
      { answer: 'allowing', options: ['allowing', 'allowed', 'allow', 'allows'], explanation: 'Participial clause: "...cognitive flexibility, allowing them to switch..." = which allows them.', hint: 'participial clause: result' },
      { answer: 'out of', options: ['out of', 'beyond', 'outside', 'away from'], explanation: '"Out of reach" = fixed idiom meaning not achievable/accessible.', hint: 'idiom: out of reach' },
      { answer: 'seek', options: ['seek', 'search', 'look', 'find'], explanation: '"Actively seek candidates" = formal verb for searching. "Seek" collocates with candidates, opportunities, solutions.', hint: 'formal collocation: seek candidates' },
      { answer: 'yourself', options: ['yourself', 'themselves', 'oneself', 'itself'], explanation: '"Immerse yourself" = reflexive pronoun. Subject is "you" (implied by the imperative "immerse").', hint: 'reflexive pronoun with immerse' },
      { answer: 'relying', options: ['relying', 'rely', 'relied', 'to rely'], explanation: '"Rather than + gerund": rather than relying. Gerund follows "rather than" in most constructions.', hint: 'rather than + gerund' },
    ],
  },

  // ─── B2 ──────────────────────────────────────────────────────

  {
    id: 'b2_01',
    title: 'Artificial Intelligence in Healthcare',
    topic: 'Technology',
    level: 'B2',
    text: `Artificial intelligence is {{1}} to transform healthcare in ways that were previously unimaginable. Machine learning algorithms can now analyse medical images with a {{2}} of accuracy that rivals, and in some cases surpasses, that of experienced clinicians. {{3}}, AI-powered diagnostic tools could significantly reduce the time taken to identify conditions such as cancer, potentially saving millions of lives. However, the widespread {{4}} of AI in clinical settings raises important ethical questions. Critics argue that over-reliance on automated systems may {{5}} the role of human judgement, which remains essential in complex cases where empathy and contextual understanding are {{6}}.`,
    gaps: [
      { answer: 'poised', options: ['poised', 'ready', 'prepared', 'set'], explanation: '"Poised to + infinitive" = on the verge of, about to do something significant. Formal academic expression.', hint: 'be poised to + infinitive' },
      { answer: 'degree', options: ['degree', 'level', 'amount', 'quantity'], explanation: '"A degree of accuracy" = fixed collocation. "Level of accuracy" also works but "degree" is more precise academically.', hint: 'collocation: a degree of' },
      { answer: 'Consequently', options: ['Consequently', 'In contrast', 'Nevertheless', 'Conversely'], explanation: '"Consequently" introduces a logical result. The diagnostic ability leads to faster identification.', hint: 'logical consequence connector' },
      { answer: 'adoption', options: ['adoption', 'adaption', 'adaptation', 'adopting'], explanation: '"Widespread adoption of" = nominalisation of "adopt". Very common in academic writing about technology.', hint: 'nominalisation: adopt → adoption' },
      { answer: 'undermine', options: ['undermine', 'reduce', 'weaken', 'diminish'], explanation: '"Undermine the role of" = gradually damage or make less effective. Stronger and more precise than "reduce".', hint: 'precise verb: undermine' },
      { answer: 'indispensable', options: ['indispensable', 'necessary', 'important', 'required'], explanation: '"Indispensable" = absolutely necessary; impossible to do without. Higher register than "important" or "necessary".', hint: 'C1 vocabulary: indispensable' },
    ],
  },

  {
    id: 'b2_02',
    title: 'Urbanisation and Housing',
    topic: 'Society',
    level: 'B2',
    text: `Rapid urbanisation has created acute housing shortages in cities across the globe, with demand consistently {{1}} the available supply. In major metropolitan areas, property prices have {{2}} to levels that are completely out of reach for average earners, forcing many to commute for hours or live in substandard accommodation. Several factors {{3}} to this crisis, including restrictive zoning laws, inadequate infrastructure investment, and the concentration of economic opportunities in urban centres. Addressing the problem will require a {{4}} approach that combines increased housing construction with improved transport links to satellite towns. {{5}}, without meaningful policy intervention, the gap between housing supply and demand is likely to {{6}} further, exacerbating social inequality.`,
    gaps: [
      { answer: 'outstripping', options: ['outstripping', 'exceeding', 'surpassing', 'overtaking'], explanation: '"Demand outstripping supply" = growing faster than and leaving behind. "Outstrip" specifically implies one thing racing ahead of another.', hint: 'precise verb: outstrip (demand > supply)' },
      { answer: 'risen', options: ['risen', 'raised', 'rose', 'raising'], explanation: '"Have risen" = present perfect of "rise" (intransitive). "Raise" is transitive — you raise something. Prices rise on their own.', hint: 'rise (intransitive) vs raise (transitive)' },
      { answer: 'contribute', options: ['contribute', 'led', 'caused', 'resulted'], explanation: '"Several factors contribute to" = present simple for a current, ongoing situation. "Contributed" would imply the factors no longer operate.', hint: 'present simple for ongoing causes' },
      { answer: 'multi-faceted', options: ['multi-faceted', 'complex', 'comprehensive', 'diverse'], explanation: '"Multi-faceted approach" = addressing multiple dimensions simultaneously. Collocates strongly with "approach" in policy writing.', hint: 'academic collocation: multi-faceted approach' },
      { answer: 'Otherwise', options: ['Otherwise', 'Consequently', 'Furthermore', 'In addition'], explanation: '"Otherwise" = if this does not happen. The sentence sets a condition (policy intervention) and states what happens without it.', hint: 'conditional connector: otherwise' },
      { answer: 'widen', options: ['widen', 'grow', 'increase', 'expand'], explanation: '"Gap widening" = specific collocation. "The gap widens/narrows" — always use "widen/narrow" with "gap".', hint: 'collocation: gap widens/narrows' },
    ],
  },

  {
    id: 'b2_03',
    title: 'Renewable Energy Transition',
    topic: 'Environment',
    level: 'B2',
    text: `The global transition to renewable energy sources is {{1}} pace, driven by falling technology costs and increasing awareness of climate change. Solar and wind power have become the cheapest forms of new electricity generation in most parts of the world, {{2}} the economic case for continued investment in fossil fuels. However, the intermittent {{3}} of renewables — they produce electricity only when the sun shines or the wind blows — presents a significant engineering challenge. To address this, governments are investing heavily in grid-scale battery storage and {{4}} power infrastructure across national boundaries. {{5}} the scale of investment required, there is growing consensus among economists that the long-term {{6}} benefits of decarbonisation will substantially outweigh the transition costs.`,
    gaps: [
      { answer: 'gathering', options: ['gathering', 'gaining', 'picking', 'building'], explanation: '"Gathering pace" = fixed idiom meaning accelerating, gaining momentum. Cannot substitute "gaining" here — that phrase is "gaining ground".', hint: 'idiom: gather pace' },
      { answer: 'undermining', options: ['undermining', 'challenging', 'destroying', 'questioning'], explanation: 'Participial clause: "...in most parts of the world, undermining the economic case..." = which undermines.', hint: 'participial clause: consequence' },
      { answer: 'nature', options: ['nature', 'character', 'feature', 'quality'], explanation: '"Intermittent nature of renewables" = the characteristic quality of being intermittent. "Nature" collocates with abstract properties.', hint: 'collocation: the nature of' },
      { answer: 'interconnecting', options: ['interconnecting', 'linking', 'joining', 'networking'], explanation: '"Interconnecting power infrastructure" = connecting power systems across regions. More precise than "linking" in energy contexts.', hint: 'technical vocabulary: interconnect' },
      { answer: 'Despite', options: ['Despite', 'Because of', 'Given', 'Although'], explanation: '"Despite the scale" = even though the investment is large. Contrast between cost and expected benefit.', hint: 'despite + noun phrase (contrast)' },
      { answer: 'economic', options: ['economic', 'economical', 'economics', 'economically'], explanation: '"Economic benefits" = relating to the economy (large scale). "Economical" means cost-effective/frugal — a different meaning.', hint: 'economic (adj) vs economical (adj)' },
    ],
  },

  // ─── C1 ──────────────────────────────────────────────────────

  {
    id: 'c1_01',
    title: 'The Psychology of Decision-Making',
    topic: 'Science',
    level: 'C1',
    text: `Classical economic theory long {{1}} that individuals make rational decisions based on complete information and a clear understanding of their own preferences. This model has, however, been {{2}} undermined by decades of research in behavioural economics. Daniel Kahneman and Amos Tversky demonstrated {{3}} that human judgement is systematically distorted by cognitive biases — predictable patterns of error that {{4}} from the mental shortcuts, or heuristics, that the brain uses to process information rapidly. One particularly {{5}} finding is that people are disproportionately influenced by potential losses rather than equivalent gains, a phenomenon known as loss aversion. These insights have {{6}} implications for public policy, suggesting that how choices are presented — their "architecture" — can be as influential as the choices themselves.`,
    gaps: [
      { answer: 'assumed', options: ['assumed', 'argued', 'suggested', 'proposed'], explanation: '"Long assumed" = believed as a background assumption without question. "Assumed" implies it was taken for granted, not merely argued.', hint: 'precise verb: assume (taken for granted)' },
      { answer: 'convincingly', options: ['convincingly', 'thoroughly', 'substantially', 'effectively'], explanation: '"Convincingly undermined" = the undermining is persuasive to any observer. "Convincingly" collocates strongly with words like "demonstrated", "undermined", "argued".', hint: 'adverb collocation: convincingly undermined' },
      { answer: 'empirically', options: ['empirically', 'experimentally', 'practically', 'theoretically'], explanation: '"Demonstrated empirically" = through observation and experiment (not theory). Key distinction in academic writing.', hint: 'academic adverb: empirically (based on evidence)' },
      { answer: 'stem', options: ['stem', 'arise', 'emerge', 'derive'], explanation: '"Stem from" = originate from/be caused by. Fixed phrasal verb. "Arise from" is also possible but "stem from" is more precise for systematic causes.', hint: 'phrasal verb: stem from (originate from)' },
      { answer: 'counterintuitive', options: ['counterintuitive', 'surprising', 'unexpected', 'remarkable'], explanation: '"Counterintuitive" = contrary to what common sense would suggest. Technical psychological/academic term.', hint: 'C1 vocabulary: counterintuitive' },
      { answer: 'profound', options: ['profound', 'significant', 'major', 'considerable'], explanation: '"Profound implications" = deep, far-reaching consequences. "Profound" collocates with "implications", "impact", "effect" at C1+ level.', hint: 'collocation: profound implications' },
    ],
  },

  {
    id: 'c1_02',
    title: 'The Future of Democracy',
    topic: 'Politics',
    level: 'C1',
    text: `Democratic institutions across the world are facing {{1}} scrutiny as public trust in governments, media, and electoral systems has {{2}} over the past two decades. The rise of social media has {{3}} this erosion by creating environments in which misinformation spreads rapidly and citizens are exposed primarily to viewpoints that reinforce their existing beliefs — a phenomenon researchers term the "filter bubble". Some political theorists argue that democratic systems are inherently {{4}} to manipulation in an information-saturated environment, where the sheer volume of content makes critical evaluation increasingly difficult. Others, however, maintain that democracy has survived {{5}} crises throughout history and that the current challenges, {{6}} as they are, should be viewed as opportunities to strengthen, rather than abandon, the principles of accountable governance.`,
    gaps: [
      { answer: 'unprecedented', options: ['unprecedented', 'considerable', 'intense', 'extraordinary'], explanation: '"Unprecedented scrutiny" = scrutiny of a kind never seen before. Implies current challenges are historically unique.', hint: 'C1 vocabulary: unprecedented (never happened before)' },
      { answer: 'eroded', options: ['eroded', 'declined', 'fallen', 'dropped'], explanation: '"Trust has eroded" = been gradually worn away. "Erode" specifically implies gradual, irreversible weakening — stronger than "declined".', hint: 'precise verb: erode (gradual weakening)' },
      { answer: 'accelerated', options: ['accelerated', 'worsened', 'deepened', 'intensified'], explanation: '"Accelerated this erosion" = made it happen faster. Social media speeds up existing trends.', hint: 'precise verb: accelerate (make faster)' },
      { answer: 'vulnerable', options: ['vulnerable', 'susceptible', 'exposed', 'open'], explanation: '"Vulnerable to manipulation" = can be harmed by. "Susceptible to" also correct but "vulnerable" implies structural weakness.', hint: 'vulnerable to (structural weakness)' },
      { answer: 'existential', options: ['existential', 'fundamental', 'major', 'profound'], explanation: '"Existential crises" = crises that threatened the very existence of democracy. Precise philosophical/political vocabulary.', hint: 'C1 vocabulary: existential (threatening existence)' },
      { answer: 'formidable', options: ['formidable', 'serious', 'significant', 'considerable'], explanation: '"Formidable as they are" = despite being very serious and difficult to overcome. "Formidable" implies power and difficulty that commands respect.', hint: 'C1 vocabulary: formidable (powerful and difficult)' },
    ],
  },

]
