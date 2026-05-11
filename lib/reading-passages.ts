import type { CEFRLevel } from '@/types'

export type QuestionType = 'tfng' | 'multiple_choice' | 'sentence_completion'

export interface ReadingQuestion {
  id: string
  type: QuestionType
  question: string
  options?: string[]   // T/F/NG or 4-option MC
  answer: string       // exact answer string
  explanation: string  // why this is correct
}

export interface ReadingPassage {
  id: string
  title: string
  topic: string
  level: CEFRLevel
  wordCount: number
  text: string         // paragraphs separated by \n\n
  questions: ReadingQuestion[]
}

export const READING_PASSAGES: ReadingPassage[] = [

  // ─── A2 ──────────────────────────────────────────────────────

  {
    id: 'a2_coffee',
    title: 'Coffee: The World\'s Most Popular Drink',
    topic: 'Culture & Society',
    level: 'A2',
    wordCount: 210,
    text: `Coffee is one of the most widely consumed beverages in the world. Every day, people drink more than two billion cups of coffee globally. It is particularly popular in Europe and North America, although consumption is also rising rapidly in Asia.

The coffee plant originally comes from Ethiopia in Africa. According to legend, a goat herder named Kaldi noticed that his goats became very energetic after eating berries from a certain tree. He brought these berries to a local monastery, where monks made a hot drink from them. They discovered that the drink helped them stay awake during long evening prayers.

Coffee was first traded commercially in the Arabian Peninsula during the fifteenth century. By the seventeenth century, coffeehouses had become common in major European cities such as London, Paris, and Vienna. These establishments were important social meeting places where people discussed politics, business, and ideas.

Today, Brazil produces more coffee than any other country in the world, followed by Vietnam and Colombia. The global coffee industry is worth over 100 billion dollars annually. Scientists have also found that moderate coffee consumption — between two and four cups per day — may have several health benefits, including a reduced risk of type 2 diabetes and improved cognitive function.`,
    questions: [
      {
        id: 'a2c_1', type: 'tfng',
        question: 'More than two billion cups of coffee are consumed worldwide each day.',
        options: ['True', 'False', 'Not Given'],
        answer: 'True',
        explanation: 'The text states: "Every day, people drink more than two billion cups of coffee globally."',
      },
      {
        id: 'a2c_2', type: 'tfng',
        question: 'Coffee consumption in Asia is currently higher than in Europe.',
        options: ['True', 'False', 'Not Given'],
        answer: 'Not Given',
        explanation: 'The text says consumption is "rising rapidly in Asia" but does not compare current levels between Asia and Europe.',
      },
      {
        id: 'a2c_3', type: 'tfng',
        question: 'The first coffeehouses in Europe appeared in the sixteenth century.',
        options: ['True', 'False', 'Not Given'],
        answer: 'False',
        explanation: 'The text says coffeehouses became common in the seventeenth century — one century later than the statement claims.',
      },
      {
        id: 'a2c_4', type: 'multiple_choice',
        question: 'According to the passage, why did monks begin drinking coffee?',
        options: [
          'To improve their health and reduce disease',
          'To stay awake during long evening prayers',
          'Because it was widely traded in their region',
          'Because they enjoyed its pleasant taste',
        ],
        answer: 'To stay awake during long evening prayers',
        explanation: 'The text states: "They discovered that the drink helped them stay awake during long evening prayers."',
      },
      {
        id: 'a2c_5', type: 'multiple_choice',
        question: 'Which country produces the most coffee in the world?',
        options: ['Vietnam', 'Ethiopia', 'Colombia', 'Brazil'],
        answer: 'Brazil',
        explanation: 'The text clearly states: "Brazil produces more coffee than any other country in the world."',
      },
      {
        id: 'a2c_6', type: 'multiple_choice',
        question: 'What health benefit of moderate coffee consumption is mentioned in the passage?',
        options: [
          'Lower blood pressure',
          'Improved vision',
          'Reduced risk of type 2 diabetes',
          'Stronger bones',
        ],
        answer: 'Reduced risk of type 2 diabetes',
        explanation: 'The passage mentions "a reduced risk of type 2 diabetes and improved cognitive function" as potential health benefits.',
      },
    ],
  },

  {
    id: 'a2_libraries',
    title: 'Public Libraries in the Digital Age',
    topic: 'Education & Technology',
    level: 'A2',
    wordCount: 198,
    text: `Public libraries have existed for thousands of years, but their role is changing in the modern world. In the past, libraries were primarily places where people could borrow books. Today, many libraries offer much more than just books. They provide computers with internet access, spaces for community meetings, and educational workshops for people of all ages.

Despite predictions that the internet would make libraries unnecessary, the number of library visitors has remained stable in many countries. Research shows that libraries are particularly important for people who cannot afford their own computers or internet connections. In the United Kingdom, for example, approximately one in ten adults relies on public libraries to access the internet.

Libraries are also adapting by offering digital lending services. Users can now borrow e-books and audiobooks directly to their devices without visiting the library building. However, some librarians argue that the physical library still has an important role to play. They point out that many people find it difficult to concentrate at home and come to libraries to study in a quiet, focused environment.

Governments in some countries have reduced funding for public libraries in recent years, leading to the closure of many branches. Supporters of libraries argue that these cuts have a serious negative impact on local communities, particularly for elderly and low-income residents.`,
    questions: [
      {
        id: 'a2l_1', type: 'tfng',
        question: 'Public libraries have only existed for the last one hundred years.',
        options: ['True', 'False', 'Not Given'],
        answer: 'False',
        explanation: 'The text states "Public libraries have existed for thousands of years" — not one hundred years.',
      },
      {
        id: 'a2l_2', type: 'tfng',
        question: 'In the UK, around 10% of adults use public libraries to access the internet.',
        options: ['True', 'False', 'Not Given'],
        answer: 'True',
        explanation: '"approximately one in ten adults relies on public libraries to access the internet" — one in ten = approximately 10%.',
      },
      {
        id: 'a2l_3', type: 'tfng',
        question: 'The number of people visiting libraries has decreased significantly since the internet became widely available.',
        options: ['True', 'False', 'Not Given'],
        answer: 'False',
        explanation: 'The text says the number of visitors "has remained stable in many countries" — it has not decreased significantly.',
      },
      {
        id: 'a2l_4', type: 'multiple_choice',
        question: 'According to the passage, why do some people choose to study in libraries rather than at home?',
        options: [
          'They do not have access to books at home',
          'Libraries offer free coffee and refreshments',
          'They find it easier to concentrate in a quiet environment',
          'Libraries have faster internet connections',
        ],
        answer: 'They find it easier to concentrate in a quiet environment',
        explanation: 'The text says: "many people find it difficult to concentrate at home and come to libraries to study in a quiet, focused environment."',
      },
      {
        id: 'a2l_5', type: 'multiple_choice',
        question: 'What problem has affected public libraries in some countries recently?',
        options: [
          'A shortage of librarians',
          'Reduced government funding leading to closures',
          'A decline in book quality',
          'Competition from private bookshops',
        ],
        answer: 'Reduced government funding leading to closures',
        explanation: '"Governments in some countries have reduced funding for public libraries in recent years, leading to the closure of many branches."',
      },
    ],
  },

  // ─── B1 ──────────────────────────────────────────────────────

  {
    id: 'b1_green_spaces',
    title: 'The Hidden Benefits of Urban Green Spaces',
    topic: 'Environment & Health',
    level: 'B1',
    wordCount: 285,
    text: `In recent decades, urban planners and public health researchers have paid increasing attention to the role of green spaces — parks, gardens, forests, and other natural areas — within cities. A growing body of evidence suggests that access to these environments has measurable benefits for both physical and mental health.

Studies conducted in several European countries have found that people who live within walking distance of a park are significantly more likely to engage in regular physical exercise than those who do not. This is particularly significant given that physical inactivity is one of the leading risk factors for cardiovascular disease and type 2 diabetes in developed nations.

The mental health benefits of green spaces may be even more substantial. Research published in leading scientific journals has demonstrated that spending as little as twenty minutes in a natural environment can measurably reduce levels of the stress hormone cortisol. Urban residents who have regular access to parks report lower rates of anxiety and depression compared to those living in areas with limited green space.

Beyond individual health, green spaces provide important environmental functions. Trees and plants absorb carbon dioxide from the atmosphere and release oxygen. They also reduce the urban heat island effect — the phenomenon by which cities are significantly warmer than surrounding rural areas due to the concentration of heat-absorbing materials like concrete and tarmac.

Despite these well-documented benefits, green spaces are often among the first casualties of urban development. As cities expand to accommodate growing populations, parks and gardens are frequently replaced by housing, roads, and commercial buildings. Many urban planners and health researchers argue that this represents a false economy: the cost of treating preventable health conditions related to inactive, stressful urban living far exceeds the value of the land used for green spaces.`,
    questions: [
      {
        id: 'b1g_1', type: 'tfng',
        question: 'Research has shown that green spaces have benefits for health.',
        options: ['True', 'False', 'Not Given'],
        answer: 'True',
        explanation: '"A growing body of evidence suggests that access to these environments has measurable benefits for both physical and mental health."',
      },
      {
        id: 'b1g_2', type: 'tfng',
        question: 'Physical inactivity is the single most important cause of heart disease in developed countries.',
        options: ['True', 'False', 'Not Given'],
        answer: 'False',
        explanation: 'The text says physical inactivity is "one of the leading risk factors" — not the single most important cause.',
      },
      {
        id: 'b1g_3', type: 'tfng',
        question: 'Twenty minutes in a natural environment is sufficient to reduce stress hormone levels.',
        options: ['True', 'False', 'Not Given'],
        answer: 'True',
        explanation: '"spending as little as twenty minutes in a natural environment can measurably reduce levels of the stress hormone cortisol."',
      },
      {
        id: 'b1g_4', type: 'tfng',
        question: 'The urban heat island effect occurs because cities produce more heat than rural areas.',
        options: ['True', 'False', 'Not Given'],
        answer: 'Not Given',
        explanation: 'The text explains the effect is due to heat-absorbing materials like concrete, not that cities produce more heat. The exact cause mechanism stated in the question is not confirmed.',
      },
      {
        id: 'b1g_5', type: 'multiple_choice',
        question: 'What does the author mean by "a false economy" in the final paragraph?',
        options: [
          'Green spaces do not produce economic value',
          'The cost of losing green spaces outweighs the financial gain',
          'Urban development is always economically beneficial',
          'Land prices in cities are artificially high',
        ],
        answer: 'The cost of losing green spaces outweighs the financial gain',
        explanation: '"False economy" refers to a saving that actually costs more in the long run. Here, the author argues that healthcare costs from removing green spaces exceed the land value gained.',
      },
      {
        id: 'b1g_6', type: 'multiple_choice',
        question: 'According to the passage, which group is most affected by the loss of urban green spaces?',
        options: [
          'Urban planners and architects',
          'People living in rural areas',
          'Urban residents generally',
          'Children and elderly people specifically',
        ],
        answer: 'Urban residents generally',
        explanation: 'The passage consistently discusses the impact on urban residents as a whole, rather than a specific subgroup.',
      },
    ],
  },

  {
    id: 'b1_fast_fashion',
    title: 'Fast Fashion: Style at What Cost?',
    topic: 'Environment & Society',
    level: 'B1',
    wordCount: 278,
    text: `The fashion industry has undergone a dramatic transformation over the past thirty years. Where consumers once purchased a small number of high-quality garments that would last for many years, they now buy considerably more clothes, often wearing each item only a handful of times before discarding it. This model, known as "fast fashion," has made stylish clothing more affordable and accessible, but it has also created significant environmental and social problems.

Fast fashion companies succeed by bringing new designs to market with extraordinary speed. While traditional fashion houses released two collections per year — one for spring/summer and one for autumn/winter — some fast fashion retailers now produce as many as fifty-two micro-seasons annually. This encourages consumers to view clothing as disposable, constantly seeking the next trend rather than maintaining a smaller, more durable wardrobe.

The environmental consequences are considerable. The fashion industry is responsible for approximately 10% of global carbon dioxide emissions, making it one of the largest polluters on the planet. The production of synthetic fibres, such as polyester, relies heavily on fossil fuels. Furthermore, when these garments are washed, they release tiny plastic fibres — known as microplastics — into water systems, where they enter the food chain.

The social dimension of fast fashion is equally troubling. To keep prices low, many brands outsource production to factories in low-income countries where wages are minimal and working conditions are frequently poor. In 2013, the collapse of the Rana Plaza garment factory in Bangladesh, which killed more than 1,100 workers, brought international attention to the dangerous conditions faced by the people who make cheap clothes for Western consumers.`,
    questions: [
      {
        id: 'b1f_1', type: 'tfng',
        question: 'Fast fashion has made clothing more expensive for the average consumer.',
        options: ['True', 'False', 'Not Given'],
        answer: 'False',
        explanation: 'The text says fast fashion "has made stylish clothing more affordable and accessible" — the opposite of more expensive.',
      },
      {
        id: 'b1f_2', type: 'tfng',
        question: 'Some fast fashion retailers produce clothing for up to fifty-two fashion seasons each year.',
        options: ['True', 'False', 'Not Given'],
        answer: 'True',
        explanation: '"some fast fashion retailers now produce as many as fifty-two micro-seasons annually."',
      },
      {
        id: 'b1f_3', type: 'tfng',
        question: 'Microplastics from clothing can affect human health through the food chain.',
        options: ['True', 'False', 'Not Given'],
        answer: 'Not Given',
        explanation: 'The text says microplastics "enter the food chain" but does not specifically state they affect human health.',
      },
      {
        id: 'b1f_4', type: 'tfng',
        question: 'More than one thousand people died in the Rana Plaza factory disaster.',
        options: ['True', 'False', 'Not Given'],
        answer: 'True',
        explanation: '"the collapse of the Rana Plaza garment factory in Bangladesh, which killed more than 1,100 workers" — 1,100 is more than 1,000.',
      },
      {
        id: 'b1f_5', type: 'multiple_choice',
        question: 'According to the passage, what is the main reason fast fashion companies keep prices low?',
        options: [
          'They use cheaper synthetic materials',
          'They reduce the number of fashion seasons',
          'They outsource production to factories in low-income countries',
          'They import raw materials from developing nations',
        ],
        answer: 'They outsource production to factories in low-income countries',
        explanation: '"To keep prices low, many brands outsource production to factories in low-income countries where wages are minimal."',
      },
      {
        id: 'b1f_6', type: 'multiple_choice',
        question: 'The passage suggests that the change in fashion consumption patterns has been driven primarily by:',
        options: [
          'Consumer demand for more environmentally friendly clothing',
          'The desire for constantly changing, affordable new styles',
          'Improvements in the quality of manufactured garments',
          'Government policies encouraging sustainable production',
        ],
        answer: 'The desire for constantly changing, affordable new styles',
        explanation: 'The passage describes how fast fashion encourages consumers to constantly seek new trends, supported by frequent new collections and low prices.',
      },
    ],
  },

  // ─── B2 ──────────────────────────────────────────────────────

  {
    id: 'b2_social_media',
    title: 'Social Media and the Architecture of Attention',
    topic: 'Technology & Psychology',
    level: 'B2',
    wordCount: 340,
    text: `Social media platforms have fundamentally altered the information landscape, raising urgent questions about their effects on democracy, mental health, and the very nature of human attention. What began as tools for social connection have evolved into extraordinarily sophisticated systems for capturing and monetising human attention — systems whose design principles, critics argue, are fundamentally at odds with individual and social wellbeing.

The business model underpinning most social media platforms is straightforward: the more time users spend on the platform, the more data is collected and the more advertising can be served. To maximise engagement, platforms employ what are known as "variable reward" mechanisms — the same psychological principle that makes slot machines so compelling. Users never know whether the next scroll will reveal a deeply satisfying post, a piece of genuinely useful information, or simply another advertisement. This uncertainty keeps people returning, again and again, in search of the next reward.

Former insiders have described how design decisions are deliberately calibrated to exploit psychological vulnerabilities. Notifications are timed to create anxiety about missed social interactions. Metrics such as "likes" and follower counts activate the brain's reward circuitry in ways that can create genuine dependency. Studies have found that the mere presence of a smartphone on a desk — even when switched off — measurably reduces cognitive capacity, as the brain expends mental resources resisting the urge to check for updates.

The implications for democracy are particularly alarming. Algorithms designed to maximise engagement tend to promote content that triggers strong emotional responses — outrage, fear, and indignation — because such content generates more interactions than measured, nuanced analysis. As a result, users are systematically exposed to a more extreme and emotionally charged version of public debate than exists in reality. The cumulative effect is a fragmentation of shared reality, with different groups inhabiting entirely separate information ecosystems.

Responses to these concerns have been varied. Some researchers advocate for significant regulatory intervention, arguing that the current situation represents a form of market failure in which private profit comes at unacceptable social cost. Others suggest that improved digital literacy — teaching users to recognise and resist manipulative design — offers a more sustainable solution.`,
    questions: [
      {
        id: 'b2s_1', type: 'tfng',
        question: 'Social media platforms were originally designed primarily to generate advertising revenue.',
        options: ['True', 'False', 'Not Given'],
        answer: 'False',
        explanation: '"What began as tools for social connection have evolved into..." — they were not originally designed for advertising.',
      },
      {
        id: 'b2s_2', type: 'tfng',
        question: 'The "variable reward" mechanism used by social media is similar to the design principle of slot machines.',
        options: ['True', 'False', 'Not Given'],
        answer: 'True',
        explanation: '"platforms employ what are known as \'variable reward\' mechanisms — the same psychological principle that makes slot machines so compelling."',
      },
      {
        id: 'b2s_3', type: 'tfng',
        question: 'Research has shown that even a switched-off phone near a person can affect their thinking ability.',
        options: ['True', 'False', 'Not Given'],
        answer: 'True',
        explanation: '"Studies have found that the mere presence of a smartphone on a desk — even when switched off — measurably reduces cognitive capacity."',
      },
      {
        id: 'b2s_4', type: 'tfng',
        question: 'The author believes that improved digital literacy is the best solution to the problems described.',
        options: ['True', 'False', 'Not Given'],
        answer: 'Not Given',
        explanation: 'The author presents digital literacy as one view among others, but does not express a personal opinion on which solution is best.',
      },
      {
        id: 'b2s_5', type: 'multiple_choice',
        question: 'According to the passage, why do social media algorithms tend to promote emotionally extreme content?',
        options: [
          'Because users specifically request more dramatic content',
          'Because emotional content generates more interactions, boosting engagement metrics',
          'Because advertisers pay more for emotionally engaging content',
          'Because algorithms are designed to reflect users\' existing beliefs',
        ],
        answer: 'Because emotional content generates more interactions, boosting engagement metrics',
        explanation: '"Algorithms designed to maximise engagement tend to promote content that triggers strong emotional responses...because such content generates more interactions than measured, nuanced analysis."',
      },
      {
        id: 'b2s_6', type: 'multiple_choice',
        question: 'The phrase "separate information ecosystems" (paragraph 4) suggests that different groups of people:',
        options: [
          'Prefer different types of social media platforms',
          'Have fundamentally different political values',
          'Are exposed to largely different versions of reality online',
          'Choose to consume news from different sources',
        ],
        answer: 'Are exposed to largely different versions of reality online',
        explanation: 'The passage describes "fragmentation of shared reality" leading to different groups "inhabiting entirely separate information ecosystems" — meaning they see different realities online.',
      },
      {
        id: 'b2s_7', type: 'sentence_completion',
        question: 'The business model of social media platforms depends on maximising ___, which allows more data collection and advertising.',
        options: ['user engagement', 'content quality', 'platform revenue', 'user satisfaction'],
        answer: 'user engagement',
        explanation: '"the more time users spend on the platform, the more data is collected and the more advertising can be served" — this describes maximising user engagement (time spent).',
      },
    ],
  },

  {
    id: 'b2_automation',
    title: 'Automation, Employment, and the Future of Work',
    topic: 'Economy & Technology',
    level: 'B2',
    wordCount: 328,
    text: `The accelerating development of artificial intelligence and robotics has reignited a long-standing debate about the relationship between technology and employment. While technological pessimists warn of widespread job displacement on an unprecedented scale, optimists counter that, as in previous industrial revolutions, new technologies will ultimately create more jobs than they destroy. The reality, as is often the case with complex economic phenomena, is likely to be considerably more nuanced.

Historical precedent offers mixed signals. The mechanisation of agriculture in the nineteenth and early twentieth centuries eliminated millions of farm labouring jobs, yet simultaneously gave rise to entirely new industries — manufacturing, transportation, and eventually the vast service sector that now dominates developed economies. The same pattern of creative destruction, as economist Joseph Schumpeter termed it, accompanied the introduction of computers in the latter decades of the twentieth century. Administrative roles diminished, while entirely new categories of employment — software engineering, data analysis, digital marketing — emerged.

However, there are reasons to believe that the current wave of automation may be qualitatively different. Previous technological shifts tended to eliminate routine, manual tasks while creating demand for higher-order cognitive skills — analysis, creativity, interpersonal communication. Artificial intelligence is now beginning to replicate not just manual labour but precisely these higher cognitive functions. Machine learning algorithms outperform human radiologists at identifying certain cancers; legal software can review contracts more accurately and rapidly than junior lawyers; language models can produce competent journalistic copy.

The policy challenge this presents is significant. Even if total employment remains stable in aggregate, the transition costs borne by workers whose skills become obsolete will be substantial. History suggests that these costs are rarely distributed equitably: workers in geographic regions dependent on industries disrupted by automation tend to suffer persistent unemployment, depressed wages, and associated social problems, even as workers in growing sectors in other regions prosper.`,
    questions: [
      {
        id: 'b2a_1', type: 'tfng',
        question: 'The author takes a definitive position, arguing that automation will cause significant job losses.',
        options: ['True', 'False', 'Not Given'],
        answer: 'False',
        explanation: 'The author says "the reality...is likely to be considerably more nuanced" — a balanced view, not a definitive pessimistic position.',
      },
      {
        id: 'b2a_2', type: 'tfng',
        question: 'The mechanisation of agriculture in the 19th century eliminated jobs in farming.',
        options: ['True', 'False', 'Not Given'],
        answer: 'True',
        explanation: '"The mechanisation of agriculture...eliminated millions of farm labouring jobs."',
      },
      {
        id: 'b2a_3', type: 'tfng',
        question: 'Joseph Schumpeter invented the term "creative destruction" to describe modern AI.',
        options: ['True', 'False', 'Not Given'],
        answer: 'False',
        explanation: 'Schumpeter described the pattern generally, not specifically about modern AI. He lived in the early-to-mid 20th century, long before modern AI.',
      },
      {
        id: 'b2a_4', type: 'tfng',
        question: 'AI systems can now perform some tasks better than trained human professionals.',
        options: ['True', 'False', 'Not Given'],
        answer: 'True',
        explanation: '"Machine learning algorithms outperform human radiologists at identifying certain cancers" — outperform = do better than.',
      },
      {
        id: 'b2a_5', type: 'multiple_choice',
        question: 'According to the passage, what makes the current wave of automation potentially different from previous technological shifts?',
        options: [
          'It is happening more slowly than previous technological changes',
          'It is affecting higher cognitive functions, not just manual tasks',
          'It is concentrated in the manufacturing sector',
          'It is creating more new jobs than previous revolutions',
        ],
        answer: 'It is affecting higher cognitive functions, not just manual tasks',
        explanation: '"Previous technological shifts tended to eliminate routine, manual tasks...Artificial intelligence is now beginning to replicate not just manual labour but precisely these higher cognitive functions."',
      },
      {
        id: 'b2a_6', type: 'multiple_choice',
        question: 'The word "equitably" (final paragraph) most closely means:',
        options: ['Efficiently', 'Fairly', 'Rapidly', 'Transparently'],
        answer: 'Fairly',
        explanation: '"Equitably" means in a way that is fair and just — the passage suggests that the costs of automation are NOT shared fairly.',
      },
      {
        id: 'b2a_7', type: 'sentence_completion',
        question: 'Workers in regions dependent on automated industries tend to experience persistent ___ and depressed wages.',
        options: ['unemployment', 'migration', 'retraining', 'inequality'],
        answer: 'unemployment',
        explanation: '"workers in geographic regions dependent on industries disrupted by automation tend to suffer persistent unemployment, depressed wages."',
      },
    ],
  },

  // ─── C1 ──────────────────────────────────────────────────────

  {
    id: 'c1_cognitive',
    title: 'Cognitive Load and the Limits of Learning',
    topic: 'Psychology & Education',
    level: 'C1',
    wordCount: 378,
    text: `Cognitive load theory, first developed by educational psychologist John Sweller in the 1980s, has become one of the most influential frameworks for understanding how humans learn and why certain instructional approaches are more effective than others. The theory's central premise is that human working memory — the system responsible for temporarily holding and manipulating information — is severely limited in its capacity. Effective learning depends, therefore, on designing instruction in ways that minimise unnecessary cognitive burden while ensuring that the genuinely important elements of a task receive adequate mental resources.

Sweller identified three distinct types of cognitive load. Intrinsic load refers to the inherent complexity of the material being learned — the number of elements that must be processed simultaneously and the relationships between them. Complex topics, by definition, impose higher intrinsic load than simpler ones, and this cannot be eliminated, though it can be reduced by breaking material into smaller components. Extraneous load, by contrast, arises from poor instructional design: presenting information in ways that require learners to expend mental effort on activities unrelated to learning — searching for relevant information in a poorly organised text, for example, or deciphering poorly formatted diagrams. Finally, germane load refers to the cognitive effort involved in constructing mental schemas — the organised knowledge structures that allow information to be stored efficiently in long-term memory.

From an instructional design perspective, the implications are significant. Educational materials should be designed to minimise extraneous load — through clear organisation, appropriate worked examples, and the strategic use of visual and verbal information — while optimising germane load, the productive cognitive effort that actually builds understanding. The theory also predicts that, as learners become more expert in a domain, the instructional approaches that benefit novices may actually impede their further development — a phenomenon Sweller termed the "expertise reversal effect."

Cognitive load theory has not been without its critics. Some researchers argue that working memory capacity is more dynamic and context-dependent than the theory suggests, and that emotional and motivational factors — largely absent from the original framework — play a crucial role in determining how effectively cognitive resources are deployed. Others have raised concerns about the theory's practical application: designing genuinely low-extraneous-load instructional materials requires considerable expertise, and in many real-world educational settings, such careful design is simply not feasible. Nevertheless, the framework continues to inform evidence-based approaches to curriculum design, teacher training, and educational technology.`,
    questions: [
      {
        id: 'c1c_1', type: 'tfng',
        question: 'John Sweller developed cognitive load theory in the 1990s.',
        options: ['True', 'False', 'Not Given'],
        answer: 'False',
        explanation: '"first developed by educational psychologist John Sweller in the 1980s" — not the 1990s.',
      },
      {
        id: 'c1c_2', type: 'tfng',
        question: 'Intrinsic cognitive load can be completely removed by effective instructional design.',
        options: ['True', 'False', 'Not Given'],
        answer: 'False',
        explanation: '"this cannot be eliminated, though it can be reduced by breaking material into smaller components" — it can be reduced, not eliminated.',
      },
      {
        id: 'c1c_3', type: 'tfng',
        question: 'Germane load is the cognitive effort involved in building long-term knowledge structures.',
        options: ['True', 'False', 'Not Given'],
        answer: 'True',
        explanation: '"germane load refers to the cognitive effort involved in constructing mental schemas — the organised knowledge structures that allow information to be stored efficiently in long-term memory."',
      },
      {
        id: 'c1c_4', type: 'tfng',
        question: 'Critics of cognitive load theory argue that emotions play no role in learning.',
        options: ['True', 'False', 'Not Given'],
        answer: 'False',
        explanation: 'Critics argue that "emotional and motivational factors...play a crucial role in determining how effectively cognitive resources are deployed" — i.e., they argue emotions DO play a role.',
      },
      {
        id: 'c1c_5', type: 'multiple_choice',
        question: 'What does the "expertise reversal effect" described in the passage refer to?',
        options: [
          'The finding that experts learn more slowly than beginners',
          'The phenomenon where instructional methods effective for beginners may hinder advanced learners',
          'The way in which expert knowledge gradually declines over time',
          'The tendency for experts to revert to beginner-level performance under stress',
        ],
        answer: 'The phenomenon where instructional methods effective for beginners may hinder advanced learners',
        explanation: '"as learners become more expert in a domain, the instructional approaches that benefit novices may actually impede their further development — a phenomenon Sweller termed the \'expertise reversal effect.\'"',
      },
      {
        id: 'c1c_6', type: 'multiple_choice',
        question: 'According to the passage, what is a practical limitation of applying cognitive load theory in real educational settings?',
        options: [
          'Teachers lack the motivation to implement its principles',
          'The theory has been disproven by more recent research',
          'Designing appropriate materials requires expertise that is not always available',
          'Schools lack the technology needed to implement low-load instruction',
        ],
        answer: 'Designing appropriate materials requires expertise that is not always available',
        explanation: '"designing genuinely low-extraneous-load instructional materials requires considerable expertise, and in many real-world educational settings, such careful design is simply not feasible."',
      },
      {
        id: 'c1c_7', type: 'sentence_completion',
        question: 'Cognitive load theory identifies ___ load as arising from poorly designed instruction rather than from the complexity of the subject matter itself.',
        options: ['extraneous', 'intrinsic', 'germane', 'working'],
        answer: 'extraneous',
        explanation: '"Extraneous load...arises from poor instructional design: presenting information in ways that require learners to expend mental effort on activities unrelated to learning."',
      },
      {
        id: 'c1c_8', type: 'sentence_completion',
        question: 'Effective learning, according to the theory, requires adequate management of ___ memory, which has a severely limited capacity.',
        options: ['working', 'long-term', 'semantic', 'episodic'],
        answer: 'working',
        explanation: '"human working memory — the system responsible for temporarily holding and manipulating information — is severely limited in its capacity."',
      },
    ],
  },

  {
    id: 'c1_carbon',
    title: 'Carbon Pricing: Theory, Practice, and Political Reality',
    topic: 'Economics & Environment',
    level: 'C1',
    wordCount: 365,
    text: `Among the policy instruments proposed to address climate change, carbon pricing — the practice of attaching an explicit financial cost to greenhouse gas emissions — has attracted considerable attention from economists and policymakers alike. The theoretical case is elegant: by making the environmental costs of fossil fuel combustion visible in market prices, carbon pricing creates incentives for businesses and individuals to reduce emissions through the most economically efficient means available, without governments needing to specify precisely how this should be achieved.

Two principal approaches to carbon pricing have been implemented in practice. Carbon taxes directly assign a fixed price to each tonne of carbon dioxide equivalent emitted. This provides certainty about the price of emissions but uncertainty about the quantity that will be reduced. Emissions trading systems (ETS), by contrast, establish a cap on total permitted emissions and allocate permits that companies may buy, sell, or surrender. This provides certainty about the quantity of emissions reduced but uncertainty about the price. The European Union's Emissions Trading System, established in 2005, is the world's largest carbon market and covers approximately 40% of EU greenhouse gas emissions.

Despite the theoretical appeal and growing adoption, carbon pricing faces substantial practical and political challenges. Economically, there is significant debate about the appropriate price level: most estimates suggest that current prices in existing carbon markets are far too low to drive the scale of investment needed to limit warming to 1.5°C above pre-industrial levels. The International Monetary Fund has estimated that a global carbon price of at least $75 per tonne by 2030 would be required, a level that only a handful of jurisdictions currently approach.

Politically, carbon pricing is among the most contentious of environmental policies. Because carbon costs are ultimately passed on to consumers through higher energy and product prices, they are perceived — often correctly — as regressive, disproportionately affecting lower-income households that spend a higher proportion of their income on energy. Several high-profile attempts to introduce or strengthen carbon pricing have been abandoned or reversed in the face of public opposition, including the "yellow vest" protests in France triggered in part by proposed fuel tax increases.`,
    questions: [
      {
        id: 'c1p_1', type: 'tfng',
        question: 'Carbon pricing requires governments to specify precisely how businesses should reduce their emissions.',
        options: ['True', 'False', 'Not Given'],
        answer: 'False',
        explanation: '"without governments needing to specify precisely how this should be achieved" — this is the opposite of what the text says.',
      },
      {
        id: 'c1p_2', type: 'tfng',
        question: 'A carbon tax provides certainty about the amount of emissions that will be reduced.',
        options: ['True', 'False', 'Not Given'],
        answer: 'False',
        explanation: '"Carbon taxes...provides certainty about the price of emissions but uncertainty about the quantity that will be reduced."',
      },
      {
        id: 'c1p_3', type: 'tfng',
        question: 'The EU Emissions Trading System covers less than half of the EU\'s greenhouse gas emissions.',
        options: ['True', 'False', 'Not Given'],
        answer: 'True',
        explanation: '"covers approximately 40% of EU greenhouse gas emissions" — 40% is less than 50%, i.e., less than half.',
      },
      {
        id: 'c1p_4', type: 'tfng',
        question: 'The IMF recommends a global carbon price of $75 per tonne or higher by 2030.',
        options: ['True', 'False', 'Not Given'],
        answer: 'True',
        explanation: '"The International Monetary Fund has estimated that a global carbon price of at least $75 per tonne by 2030 would be required."',
      },
      {
        id: 'c1p_5', type: 'multiple_choice',
        question: 'The word "regressive" (final paragraph) in the context of carbon pricing most likely means:',
        options: [
          'Ineffective at reducing carbon emissions',
          'Placing a proportionally higher burden on lower-income groups',
          'Moving backwards towards less sustainable policies',
          'Meeting with political opposition',
        ],
        answer: 'Placing a proportionally higher burden on lower-income groups',
        explanation: 'The passage explains that carbon costs are "regressive" because they "disproportionately affect lower-income households that spend a higher proportion of their income on energy."',
      },
      {
        id: 'c1p_6', type: 'multiple_choice',
        question: 'What key difference does the passage identify between carbon taxes and emissions trading systems?',
        options: [
          'Carbon taxes are more widely used than ETS globally',
          'Carbon taxes set a price; ETS sets a quantity limit',
          'ETS systems generate more government revenue than carbon taxes',
          'Carbon taxes are more effective at reducing total emissions',
        ],
        answer: 'Carbon taxes set a price; ETS sets a quantity limit',
        explanation: '"Carbon taxes directly assign a fixed price...Emissions trading systems...establish a cap on total permitted emissions." Price certainty vs quantity certainty.',
      },
      {
        id: 'c1p_7', type: 'sentence_completion',
        question: 'Most economists agree that current carbon prices are too ___ to drive the level of investment needed to meet climate targets.',
        options: ['low', 'high', 'unstable', 'complex'],
        answer: 'low',
        explanation: '"most estimates suggest that current prices in existing carbon markets are far too low to drive the scale of investment needed."',
      },
      {
        id: 'c1p_8', type: 'sentence_completion',
        question: 'Public opposition, including protests in France, has led some governments to ___ their carbon pricing plans.',
        options: ['abandon', 'strengthen', 'redesign', 'accelerate'],
        answer: 'abandon',
        explanation: '"Several high-profile attempts to introduce or strengthen carbon pricing have been abandoned or reversed in the face of public opposition."',
      },
    ],
  },

]
