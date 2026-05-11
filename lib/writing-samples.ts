export type TaskType = 'task1' | 'task2'
export type Band = '5.0' | '6.5' | '7.5'

export interface Annotation {
  phrase: string      // exact phrase from the essay
  type: 'strength' | 'weakness' | 'tip'
  comment: string
}

export interface BandVersion {
  band: Band
  wordCount: number
  essay: string
  annotations: Annotation[]
  strengths: string[]
  weaknesses: string[]
  examinerNote: string
}

export interface WritingPrompt {
  id: string
  type: TaskType
  title: string
  prompt: string
  taskDescription: string
  versions: BandVersion[]
}

export const WRITING_SAMPLES: WritingPrompt[] = [

  // ─────────────────────────────────────────────────────────────
  // TASK 2 · Prompt 1 — Smartphones in Schools
  // ─────────────────────────────────────────────────────────────
  {
    id: 't2_smartphones',
    type: 'task2',
    title: 'Smartphones in Schools',
    prompt: 'Some people believe that children should be allowed to use smartphones at school. Others think they should be banned. Discuss both views and give your own opinion.',
    taskDescription: 'Discussion essay — present both sides and give a clear personal position.',
    versions: [
      {
        band: '5.0',
        wordCount: 252,
        essay: `Nowadays, smartphones are very popular. Some people say children can use them at school but others say they should not. In this essay, I will discuss both views.

First, some people think smartphones are good for school. Students can use the internet to search information quickly. They can also use educational apps to learn. For example, there are many apps for learning maths and science. Also, smartphones allow students to contact their parents if there is an emergency.

However, other people think smartphones are bad at school. Students will be distracted and not pay attention in class. They might use social media or play games instead of studying. This can make their results get worse. Also, some students might use phones to cheat in exams, which is not fair.

In my opinion, I think smartphones should not be allowed in school. The disadvantages are more than the advantages. Students need to focus on their studies without distraction. They can use computers in the library if they need the internet. In conclusion, smartphones should be banned in schools because they cause too many problems.`,
        annotations: [
          { phrase: 'Nowadays, smartphones are very popular.', type: 'weakness', comment: 'Very generic opener — does not paraphrase the question or show understanding of the issue.' },
          { phrase: 'In this essay, I will discuss both views.', type: 'weakness', comment: 'This phrase is overly mechanical and does not include the writer\'s opinion, which a discussion essay requires in the introduction.' },
          { phrase: 'They can also use educational apps to learn.', type: 'weakness', comment: 'Very general — no specific example or development makes this unconvincing.' },
          { phrase: 'This can make their results get worse.', type: 'weakness', comment: 'Awkward collocation: "results get worse" → "academic performance deteriorate" or "grades decline".' },
          { phrase: 'The disadvantages are more than the advantages.', type: 'weakness', comment: 'Weak conclusion language — this is a simplistic way to state a position at IELTS level.' },
        ],
        strengths: [
          'Basic task is addressed — both views are presented',
          'Some use of cohesion: "Also", "However", "In conclusion"',
          'Answer has clear paragraph structure',
        ],
        weaknesses: [
          'Vocabulary is limited and repetitive ("bad", "good", "very popular")',
          'Grammar errors and weak collocations throughout',
          'Each argument is stated but not developed or supported with real evidence',
          'Introduction is formulaic and position is not clearly given until conclusion',
        ],
        examinerNote: 'This response achieves Band 5 because it addresses the task only partially. The arguments are underdeveloped, vocabulary is elementary, and grammar errors are frequent enough to reduce clarity.',
      },
      {
        band: '6.5',
        wordCount: 289,
        essay: `The question of whether mobile phones should be permitted in educational settings has become increasingly debated. While there are valid arguments on both sides, I believe the disadvantages of allowing smartphones in schools outweigh the benefits.

Those in favour of smartphone use argue that these devices provide instant access to educational resources. Students can look up information, use vocabulary apps, or access digital textbooks, potentially enhancing the learning experience. Furthermore, in emergency situations, the ability to contact parents or emergency services could be genuinely important.

On the other hand, opponents contend that smartphones are a major source of distraction. Research has consistently shown that the presence of a phone — even when not being used — reduces concentration and working memory. Moreover, unrestricted access to social media platforms during school hours can negatively affect students' academic performance and social development.

In my view, the potential for distraction significantly outweighs the educational benefits, particularly since most schools already provide computers for research purposes. However, I would not advocate for a complete ban; instead, a more balanced approach would be to allow smartphones during designated times, such as lunch breaks, while prohibiting use during lessons.

In conclusion, although smartphones offer certain advantages in educational contexts, their capacity to undermine focus and concentration makes them unsuitable for unrestricted classroom use. A carefully managed policy seems the most sensible solution.`,
        annotations: [
          { phrase: 'The question of whether mobile phones should be permitted in educational settings has become increasingly debated.', type: 'strength', comment: 'Good paraphrase of the prompt — avoids copying and uses more formal vocabulary.' },
          { phrase: 'Research has consistently shown that the presence of a phone — even when not being used — reduces concentration and working memory.', type: 'strength', comment: 'Good use of evidence reference. "Working memory" is precise, academic vocabulary.' },
          { phrase: 'I would not advocate for a complete ban', type: 'strength', comment: '"Advocate for" is a strong B2+ collocation, showing good lexical resource.' },
          { phrase: 'their capacity to undermine focus and concentration', type: 'strength', comment: '"Undermine" is a strong, precise verb — a clear step up from "reduce" or "hurt".' },
          { phrase: 'a more balanced approach would be to allow smartphones during designated times', type: 'tip', comment: 'Good nuanced position, but could be developed further with more specific reasoning or evidence.' },
        ],
        strengths: [
          'Clear position stated in introduction and consistently maintained',
          'Both views developed with some evidence and reasoning',
          'Good range of cohesive devices used accurately',
          'Vocabulary range is adequate with some precise choices',
        ],
        weaknesses: [
          'Some arguments could be developed further — the paragraph about educational benefits is thin',
          'Occasional repetition ("concentration and focus" — near-synonyms)',
          'The conclusion largely repeats points without extending them',
        ],
        examinerNote: 'This achieves Band 6.5 for its clear position, adequate development, and good vocabulary. To reach 7.0, the writer should develop each argument more fully and use a greater range of complex grammatical structures accurately.',
      },
      {
        band: '7.5',
        wordCount: 318,
        essay: `Whether smartphones should be permitted in schools is a question that has polarised educators, parents, and policymakers. While proponents highlight legitimate educational applications, I would argue that the case for restricting classroom use remains considerably stronger.

Advocates of smartphone access contend that these devices, used judiciously, can genuinely enrich the learning experience. Students can access primary sources, use language translation tools, or engage with adaptive learning platforms that respond to individual needs — capabilities that static textbooks cannot replicate. In emergency situations, the ability to contact family members provides reassurance for both students and parents.

Nonetheless, a growing body of cognitive research suggests that the mere proximity of a smartphone impairs working memory and sustained attention, regardless of whether the device is actively used. This finding is particularly alarming given that the capacity for deep, focused thought is precisely what formal education is designed to cultivate. Beyond cognitive effects, unsupervised social media access during school hours can expose adolescents to cyberbullying, inappropriate content, and the corrosive social comparisons that are consistently linked to declining mental health outcomes.

In my view, the appropriate response is not an outright ban — which may merely push usage underground — but a clearly defined, consistently enforced usage policy. Smartphones could reasonably be permitted in common areas during breaks while remaining off-limits during instructional time. This approach acknowledges the reality that these devices are embedded in young people's lives without surrendering the classroom to their most damaging tendencies.

Ultimately, the smartphone debate is a proxy for a deeper question about what schools are fundamentally for. If the answer is to develop curious, disciplined, and critically thinking individuals, then protecting attentional space from constant digital interruption seems not merely reasonable, but essential.`,
        annotations: [
          { phrase: 'has polarised educators, parents, and policymakers', type: 'strength', comment: '"Polarised" is a strong, precise word — much more sophisticated than "is debated by many people".' },
          { phrase: 'used judiciously', type: 'strength', comment: '"Judiciously" = with good judgement. Sophisticated adverb that adds precision and register.' },
          { phrase: 'a growing body of cognitive research suggests', type: 'strength', comment: 'Excellent academic phrase — references research without needing to cite a source. Shows academic writing convention.' },
          { phrase: 'the mere proximity of a smartphone impairs working memory', type: 'strength', comment: '"Proximity" and "impairs" are precise academic vocabulary. "Mere" adds rhetorical force.' },
          { phrase: 'not an outright ban — which may merely push usage underground', type: 'strength', comment: 'Elegant concession built into the recommendation. The em-dash creates a sophisticated embedded clause.' },
          { phrase: 'the smartphone debate is a proxy for a deeper question', type: 'strength', comment: 'Excellent conclusion technique — zooms out to a wider implication. "Proxy for" is C1+ vocabulary.' },
          { phrase: 'protecting attentional space from constant digital interruption', type: 'strength', comment: '"Attentional space" is a sophisticated phrase that lifts the conclusion to Band 8 territory.' },
        ],
        strengths: [
          'Wide range of sophisticated vocabulary used accurately throughout',
          'Arguments are fully developed with specific evidence and consequences',
          'Complex grammatical structures used naturally (embedded clauses, em-dashes, nominalisations)',
          'Position is nuanced — avoids a simplistic "ban or allow" binary',
          'Conclusion extends the argument rather than merely summarising it',
        ],
        weaknesses: [
          'Paragraph 2 (advocacy) could be slightly more concrete with specific apps or platforms',
          'Occasionally borders on overly elaborate — clarity should always take precedence',
        ],
        examinerNote: 'This achieves Band 7.5 through its range of sophisticated, accurate vocabulary, fully developed arguments, and consistent grammatical control. The conclusion — which zooms out to a wider philosophical question — is characteristic of Band 8 writing.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // TASK 2 · Prompt 2 — Inequality
  // ─────────────────────────────────────────────────────────────
  {
    id: 't2_inequality',
    type: 'task2',
    title: 'Wealth Inequality',
    prompt: 'In many countries, the gap between the rich and the poor is growing. What problems does this cause? What can governments do to reduce inequality?',
    taskDescription: 'Problem/Solution essay — identify problems caused by inequality, then propose solutions.',
    versions: [
      {
        band: '5.0',
        wordCount: 245,
        essay: `In many countries, there is a big difference between rich people and poor people. This is a big problem. In this essay, I will write about the problems and solutions.

The first problem is that poor people cannot get good education. Rich people can pay for private schools but poor people cannot. So rich people get better jobs and become more rich. Poor people stay poor. This is not fair.

Another problem is health. Rich people can afford good doctors and medicine. But poor people cannot pay for healthcare. So they get more sick and die younger. This makes more problems for the country.

To solve these problems, governments can do some things. Firstly, they should make education free for everyone. This helps poor students to have equal chances. Secondly, governments should provide free healthcare. This means all people can get medical help when they need it.

Also, governments can tax rich people more. This money can be used to help poor people. Some countries like Sweden do this and have less inequality.

In conclusion, inequality causes many problems like education and health problems. Governments can help by providing free education and healthcare and by taxing rich people more. I think this is very important for a fair society.`,
        annotations: [
          { phrase: 'there is a big difference between rich people and poor people. This is a big problem.', type: 'weakness', comment: 'Repetition of "big" and very simple sentence structures. No paraphrase of the prompt.' },
          { phrase: 'In this essay, I will write about the problems and solutions.', type: 'weakness', comment: 'Mechanical thesis statement — does not engage with the specific issues or show any analysis.' },
          { phrase: 'So rich people get better jobs and become more rich.', type: 'weakness', comment: 'Grammar error: "more rich" → "richer". Also the logic is very basic without development.' },
          { phrase: 'Some countries like Sweden do this and have less inequality.', type: 'tip', comment: 'Good instinct to use an example, but it needs development: HOW does taxation reduce inequality?' },
        ],
        strengths: [
          'Task addressed — both problems and solutions are present',
          'Basic paragraph organisation is evident',
          'Some connectives used: "Firstly", "Also", "In conclusion"',
        ],
        weaknesses: [
          'Very limited vocabulary with significant repetition',
          'Grammar errors throughout',
          'Arguments are stated but never explained or developed',
          'Examples are mentioned but not used to support analysis',
        ],
        examinerNote: 'This is a Band 5 response. The task is addressed only partially — the problems are identified but causes and consequences are not explored. Vocabulary is elementary and grammar errors are frequent.',
      },
      {
        band: '6.5',
        wordCount: 291,
        essay: `Growing wealth inequality is one of the defining challenges of the twenty-first century, creating a range of serious social, economic, and political consequences. This essay will examine these problems and suggest measures that governments could implement to address them.

The most significant consequence of widening inequality is reduced social mobility. When wealth becomes concentrated in the hands of a small minority, access to quality education, healthcare, and professional networks becomes tied to financial means rather than merit. This creates a self-reinforcing cycle in which disadvantaged children have fewer opportunities to escape poverty, regardless of their ability or effort. Politically, extreme inequality fuels resentment and erodes trust in democratic institutions, as citizens perceive the system as rigged in favour of the wealthy.

To reduce inequality, governments can employ several approaches. Progressive taxation — where higher earners pay proportionally more — can redistribute wealth while preserving incentives for economic activity. Investing in universal public services, particularly education and healthcare, ensures that life outcomes are not entirely determined by the circumstances of birth. Additionally, raising minimum wages addresses income inequality at its source, rather than merely redistributing after the fact.

In conclusion, unchecked inequality damages social cohesion, limits economic potential, and undermines democratic governance. A combination of fiscal policy reform and investment in public services represents the most sustainable path towards a more equitable society.`,
        annotations: [
          { phrase: 'Growing wealth inequality is one of the defining challenges of the twenty-first century', type: 'strength', comment: '"Defining challenges" is an excellent collocation. Much stronger than "a big problem".' },
          { phrase: 'a self-reinforcing cycle', type: 'strength', comment: 'Precise and sophisticated phrase — shows ability to describe complex processes.' },
          { phrase: 'Progressive taxation — where higher earners pay proportionally more', type: 'strength', comment: 'Good use of an embedded definition using a dash. Accurate and informative.' },
          { phrase: 'addressing income inequality at its source, rather than merely redistributing after the fact', type: 'strength', comment: '"Rather than merely" shows excellent contrastive reasoning and lexical precision.' },
          { phrase: 'unchecked inequality damages social cohesion, limits economic potential, and undermines democratic governance.', type: 'strength', comment: 'Strong three-part conclusion using different verbs for each noun. Shows grammatical range.' },
        ],
        strengths: [
          'Full task achievement — problems and solutions both clearly developed',
          'Good range of vocabulary with precise collocations',
          'Cohesive devices used naturally and accurately',
          'Ideas are logically linked and developed beyond mere statement',
        ],
        weaknesses: [
          'The problems paragraph could include a concrete example (statistics or country)',
          'The solutions section lists multiple points but some could be developed further',
          'Could show a more nuanced position on which approach is most effective',
        ],
        examinerNote: 'This response meets Band 6.5 requirements through consistent task achievement, good vocabulary range, and developing ideas logically. The progression from Band 6.5 to 7.0 would require fuller development of individual points and more sophisticated grammatical structures.',
      },
      {
        band: '7.5',
        wordCount: 325,
        essay: `Rising income inequality represents one of the most consequential trends in contemporary society, generating problems that span from individual life chances to the structural integrity of democracy itself. Addressing it effectively requires sustained, coordinated policy intervention rather than incremental measures.

The most far-reaching consequence of extreme inequality is the erosion of genuine meritocracy. When access to quality education, professional mentorship, and social capital is largely determined by the wealth of one's parents, talent becomes irrelevant to outcomes. The economist Raj Chetty's research demonstrates compellingly that social mobility in the United States has declined sharply as wealth concentration has increased — a pattern replicated across much of the developed world. Beyond individual harm, extreme inequality corrodes democratic legitimacy: when citizens perceive the political system as captured by wealthy interests, civic participation declines and populist movements fill the vacuum.

Effective policy responses must address both the symptoms and the structural causes. Progressive taxation with reduced avoidance loopholes can recover revenue currently lost to offshore arrangements, funding investments in early childhood education — arguably the highest-return intervention available. Wage policy reform, including robust minimum wage legislation and support for collective bargaining, addresses distributional inequality before redistribution becomes necessary. Nordic countries offer compelling evidence that these approaches can coexist with strong economic performance; the assumption that equality and growth are fundamentally in tension is largely ideological rather than empirical.

Ultimately, reducing inequality requires political will as much as policy innovation. The interests that benefit from the current distribution are well-organised and well-resourced in opposing change. However, the long-term costs of inaction — in social fragmentation, diminished human capital, and political instability — likely exceed any short-term costs of reform.`,
        annotations: [
          { phrase: 'spanning from individual life chances to the structural integrity of democracy itself', type: 'strength', comment: 'Excellent scope-setting sentence — "structural integrity" is C1 vocabulary used precisely.' },
          { phrase: 'sustained, coordinated policy intervention rather than incremental measures', type: 'strength', comment: '"Incremental" is a precise academic adjective. The contrast structure adds analytical sophistication.' },
          { phrase: 'The economist Raj Chetty\'s research demonstrates compellingly', type: 'strength', comment: 'Citing a named expert (even generally) adds academic credibility. "Demonstrates compellingly" is strong verb collocation.' },
          { phrase: 'populist movements fill the vacuum', type: 'strength', comment: 'Excellent, specific consequence — shows political understanding and precise vocabulary.' },
          { phrase: 'the assumption that equality and growth are fundamentally in tension is largely ideological rather than empirical', type: 'strength', comment: 'Outstanding analytical sentence — challenges a commonly held assumption using academic register. Band 8 writing.' },
          { phrase: 'The interests that benefit from the current distribution are well-organised and well-resourced in opposing change.', type: 'strength', comment: '"Well-organised and well-resourced" is a sophisticated parallel structure. This kind of systemic analysis distinguishes Band 7.5+ writing.' },
        ],
        strengths: [
          'Exceptional vocabulary range used accurately throughout ("corrodes", "compellingly", "incremental")',
          'Specific named evidence (Raj Chetty) gives credibility typically associated with Band 8',
          'Analysis goes beyond listing — challenges assumptions and identifies structural causes',
          'Conclusions extend to political implications, showing sophisticated thinking',
          'Complex grammatical structures used accurately and purposefully throughout',
        ],
        weaknesses: [
          'The essay is ambitious — the density of ideas occasionally risks overwhelming the reader',
          'The conclusion, while strong, introduces new points that could have been developed earlier',
        ],
        examinerNote: 'This response achieves Band 7.5–8.0 through its sophisticated vocabulary, named evidence, and analysis that goes beyond surface description to challenge structural assumptions. The writing demonstrates genuine intellectual engagement with the topic.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // TASK 2 · Prompt 3 — Technology complicating life
  // ─────────────────────────────────────────────────────────────
  {
    id: 't2_technology',
    type: 'task2',
    title: 'Technology & Modern Life',
    prompt: 'Some people argue that technology has made our lives more complicated rather than simpler. To what extent do you agree or disagree?',
    taskDescription: 'Opinion essay — take a clear position and justify it with developed arguments.',
    versions: [
      {
        band: '5.0',
        wordCount: 238,
        essay: `Many people say technology makes life more complicated. I think this is partly true but not completely. Technology is good and bad.

Technology is good because we can do many things faster. For example, we can send emails instead of letters. We can also shop online and pay with our phones. This saves time. Also, technology helps doctors to find diseases and save lives.

However, technology is also complicated. There are many different apps and devices and it is difficult to learn all of them. Old people especially have problems with technology. Also, we need to remember many passwords which is very stressful.

Another problem is that we have too much information. There are so many news websites and social media apps that we do not know which information is true. This creates confusion and stress.

I think technology makes life both simpler and more complicated. Simple tasks like shopping are easier, but other things like managing our digital life are more difficult. I think people should use technology carefully and not depend on it too much.

In conclusion, technology has both positive and negative effects. We need to balance the advantages with the disadvantages to use it well.`,
        annotations: [
          { phrase: 'I think this is partly true but not completely. Technology is good and bad.', type: 'weakness', comment: 'The position is vague — "partly true but not completely" is not a clear thesis for an opinion essay.' },
          { phrase: 'This saves time. Also, technology helps doctors...', type: 'weakness', comment: 'Jumping between very different ideas without adequate development of either point.' },
          { phrase: 'There are many different apps and devices and it is difficult to learn all of them.', type: 'weakness', comment: 'Valid point but presented as a simple observation — needs development: what are the consequences of this complexity?' },
          { phrase: 'I think technology makes life both simpler and more complicated.', type: 'weakness', comment: 'In an "opinion" essay, sitting on the fence throughout — without arguing WHY one outweighs the other — leads to lower Task Achievement scores.' },
        ],
        strengths: [
          'Task is addressed with both sides mentioned',
          'Some relevant examples provided',
          'Basic paragraph structure present',
        ],
        weaknesses: [
          'No clear, sustained position — the essay agrees and disagrees without commitment',
          'Arguments are superficial with no development of consequences',
          'Vocabulary is basic and repetitive',
          'Grammar is generally simple with limited complexity',
        ],
        examinerNote: 'Band 5. The lack of a sustained, clear position is the key weakness — opinion essays require a clear stance. The writer recognises both sides but does not develop either meaningfully.',
      },
      {
        band: '6.5',
        wordCount: 285,
        essay: `There is widespread debate about whether technology ultimately simplifies or complicates modern life. While I acknowledge that certain technologies have undeniably streamlined everyday tasks, I broadly agree that rapid technological change has introduced a layer of complexity that many people find challenging to navigate.

Proponents of technology point to genuine convenience gains: digital banking, instant communication, and online shopping have eliminated many time-consuming tasks. Healthcare has also been transformed, with diagnostic tools that were once exclusive to specialist facilities now available in general hospitals. These are not trivial improvements.

However, the same technologies that promise simplicity often demand significant cognitive investment. Managing multiple devices, accounts, and software subscriptions — each with its own interface and update cycle — creates a persistent mental burden. Furthermore, the information landscape has become almost unmanageable; distinguishing credible sources from misinformation requires a level of digital literacy that many people, particularly older generations, have not had the opportunity to develop. The paradox is that while each individual task may be simpler, the overall system is considerably more complex.

On balance, I believe that the net effect of technology has been to increase rather than decrease complexity, largely because technological change has outpaced society's capacity to adapt to it. The solution is not to reject technology, but to invest more deliberately in digital education and to design technology that is genuinely intuitive for all users, not only digital natives.`,
        annotations: [
          { phrase: 'I broadly agree that rapid technological change has introduced a layer of complexity', type: 'strength', comment: '"I broadly agree" signals a clear but qualified position. "A layer of complexity" is more precise than "complicated".' },
          { phrase: 'These are not trivial improvements.', type: 'strength', comment: 'Confident, concise sentence that acknowledges the other side without weakening the main argument.' },
          { phrase: 'The paradox is that while each individual task may be simpler, the overall system is considerably more complex.', type: 'strength', comment: 'Excellent analytical insight using "paradox" — this distinguishes a Band 6.5+ response from lower bands.' },
          { phrase: 'technological change has outpaced society\'s capacity to adapt', type: 'strength', comment: '"Outpaced" is a strong, precise verb. This idea could be a whole essay thesis on its own.' },
        ],
        strengths: [
          'Clear position maintained throughout — "broadly agree" with qualification',
          'Good range of vocabulary: "streamlined", "cognitive investment", "paradox"',
          'The "paradox" point is genuinely insightful',
          'Good use of concession: acknowledges opposing view without abandoning position',
        ],
        weaknesses: [
          'Healthcare example is stated but not specifically developed',
          'The solution in the final paragraph is slightly rushed — deserves a full paragraph',
          'Could include one specific statistic or study to add credibility',
        ],
        examinerNote: 'Strong Band 6.5. The "paradox" point and the nuanced position ("broadly agree") are the strengths. Reaching 7.0 requires fuller development of each point with specific evidence.',
      },
      {
        band: '7.5',
        wordCount: 320,
        essay: `The intuitive appeal of technology — the promise that each new device will finally deliver simplicity and efficiency — has arguably become one of modern life's most reliable disappointments. I would argue firmly that, taken as a whole, digital technology has dramatically increased the complexity of daily life, even as it has reduced the friction in isolated tasks.

The case for simplification rests on genuine gains: navigation apps have made getting lost nearly impossible, communication platforms have compressed distance to near-zero, and administrative processes that once required physical presence — banking, tax filing, booking appointments — can now be completed in minutes. These conveniences are real and should not be dismissed.

Yet the cumulative experience of technological life tells a different story. Consider what it means to maintain a contemporary digital existence: dozens of accounts, each requiring unique credentials; software that demands constant updates and occasionally breaks essential workflows; an information environment so saturated that discerning reliable signal from ambient noise has become a professional skill in itself. Cal Newport, the digital productivity researcher, has written extensively about what he terms "techno-maximalism" — the compulsive accumulation of tools whose marginal utility diminishes rapidly while their maintenance costs compound quietly.

The deeper irony is that the complexity is largely self-inflicted. Companies benefit commercially from engagement and dependency, and they design their products accordingly. The result is technologies that are, by design, difficult to fully disengage from — not because this serves users, but because it serves shareholders.

Simpler lives will not be delivered by more technology. They require deliberate resistance to the logic of perpetual digital expansion, and that resistance — increasingly — demands conscious effort that technology itself never required of us before.`,
        annotations: [
          { phrase: 'one of modern life\'s most reliable disappointments', type: 'strength', comment: 'Sophisticated, ironic opening that immediately signals high-level writing. "Reliable disappointments" is unexpected and memorable.' },
          { phrase: 'even as it has reduced the friction in isolated tasks', type: 'strength', comment: '"Reduced the friction" is a precise, technical metaphor from product design. Excellent vocabulary precision.' },
          { phrase: 'an information environment so saturated that discerning reliable signal from ambient noise has become a professional skill', type: 'strength', comment: 'Outstanding sentence — "ambient noise" (metaphor), "discerning" (C1 verb), "professional skill" (unexpected escalation). Band 8 writing.' },
          { phrase: 'Cal Newport, the digital productivity researcher, has written extensively about what he terms "techno-maximalism"', type: 'strength', comment: 'Named expert with specific named concept. This level of specificity is unusual and impressive in IELTS.' },
          { phrase: 'whose marginal utility diminishes rapidly while their maintenance costs compound quietly', type: 'strength', comment: '"Marginal utility" (economic term), "compound quietly" (powerful contrast of register). Exceptional word-level sophistication.' },
          { phrase: 'not because this serves users, but because it serves shareholders', type: 'strength', comment: 'Crisp, rhetorical parallel structure. The commercial critique gives the essay an unexpected analytical edge.' },
        ],
        strengths: [
          'Exceptional lexical sophistication — "ambient noise", "marginal utility", "techno-maximalism"',
          'The argument moves from concession → evidence → deeper systemic cause → conclusion: a sophisticated structure',
          'Named expert (Cal Newport) with specific concept demonstrates research awareness',
          'The conclusion extends the argument to a philosophical point rather than merely summarising',
          'Varied sentence structure including long, embedded clauses alongside short, punchy statements',
        ],
        weaknesses: [
          'The reference to Cal Newport is strong, but examiners may not recognise the name — briefly contextualising who he is (which the writer does) is important',
          'The final paragraph is philosophically strong but could be slightly more concrete',
        ],
        examinerNote: 'This response is at the upper boundary of Band 7.5 and touches Band 8. The vocabulary range is exceptional, the argument structure is sophisticated, and the use of a named authority with a specific concept is rare in IELTS essays.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // TASK 1 · Line Graph
  // ─────────────────────────────────────────────────────────────
  {
    id: 't1_energy',
    type: 'task1',
    title: 'Energy Consumption (Line Graph)',
    prompt: 'The graph below shows changes in energy consumption in three countries — Germany, Brazil, and Australia — between 1990 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    taskDescription: 'Line graph description — identify trends, compare data, include an overview.',
    versions: [
      {
        band: '5.0',
        wordCount: 154,
        essay: `The graph shows the energy consumption in Germany, Brazil and Australia from 1990 to 2020.

In 1990, Germany used the most energy at 400 units. Brazil used 150 units and Australia used 200 units. Germany's energy went down over the period. In 2020 Germany used 320 units.

Brazil's energy consumption went up a lot. It started at 150 units and went to 350 units in 2020. Now Brazil uses almost as much as Germany.

Australia's energy increased slowly. It went from 200 units to 260 units. The increase was not as big as Brazil.

In conclusion, Germany decreased but Brazil and Australia increased. Brazil had the biggest increase.`,
        annotations: [
          { phrase: 'The graph shows the energy consumption in Germany, Brazil and Australia from 1990 to 2020.', type: 'weakness', comment: 'The introduction almost copies the prompt — you must paraphrase using different vocabulary and structure.' },
          { phrase: 'In 1990, Germany used the most energy at 400 units.', type: 'weakness', comment: 'Describing every data point without identifying the key trend — this is "data cataloguing" not analysis.' },
          { phrase: 'In conclusion', type: 'weakness', comment: 'Task 1 does not need "In conclusion" — use "Overall" or simply write the overview as the second sentence of the essay.' },
          { phrase: 'Germany decreased but Brazil and Australia increased.', type: 'tip', comment: 'This is a valid overview point but should appear near the beginning (as the second sentence), not at the end.' },
        ],
        strengths: [
          'Data is accurately described',
          'Three countries are all mentioned',
          'Word count is close to the minimum (150 words)',
        ],
        weaknesses: [
          'Introduction copies the prompt almost exactly — no paraphrase',
          'No overview sentence near the start',
          'Data is catalogued rather than analysed — no identification of the most significant trends',
          'Vocabulary for describing change is limited: only "went up", "went down", "increased"',
        ],
        examinerNote: 'Band 5. The main weaknesses are the lack of paraphrase in the introduction, no early overview, and treating each data point as equally important rather than selecting the key features.',
      },
      {
        band: '6.5',
        wordCount: 193,
        essay: `The line graph illustrates energy consumption patterns in Germany, Brazil, and Australia over a thirty-year period from 1990 to 2020.

Overall, the most notable trend is that energy use declined in Germany while rising significantly in Brazil, which overtook Germany as the highest consumer by the end of the period. Australia showed a more modest increase throughout.

In 1990, Germany had the highest consumption at approximately 400 units, followed by Australia at 200 units, and Brazil at the lowest level of around 150 units. Germany's figures then fell steadily, reaching approximately 320 units by 2020 — a decline of roughly 20%.

Brazil, by contrast, experienced dramatic growth. Consumption rose sharply from 150 units in 1990 to around 360 units in 2020, representing a more than twofold increase. This growth was particularly steep between 2000 and 2015.

Australia's consumption grew gradually from 200 units to approximately 260 units over the same period, making it the least dramatic change of the three countries.`,
        annotations: [
          { phrase: 'illustrates energy consumption patterns', type: 'strength', comment: '"Illustrates patterns" is better than "shows" — more precise and academic.' },
          { phrase: 'the most notable trend is that energy use declined in Germany while rising significantly in Brazil, which overtook Germany', type: 'strength', comment: 'Excellent overview — identifies the KEY comparative feature (overtaking) rather than just listing individual trends.' },
          { phrase: 'a decline of roughly 20%', type: 'strength', comment: 'Good use of approximate percentage to show analytical thinking rather than just quoting raw data.' },
          { phrase: 'a more than twofold increase', type: 'strength', comment: '"Twofold" is sophisticated language for data description — much better than "two times bigger".' },
          { phrase: 'This growth was particularly steep between 2000 and 2015.', type: 'strength', comment: 'Identifying the specific period of steepest growth shows accurate reading of the graph.' },
        ],
        strengths: [
          'Good paraphrase in introduction',
          'Overview appears in second paragraph — correct placement',
          'Uses a range of vocabulary for change: "declined", "dramatic growth", "gradually"',
          'Comparative analysis between countries is clear',
        ],
        weaknesses: [
          'Could include slightly more precise data at key turning points',
          '"More modest increase" in the overview could be quantified',
        ],
        examinerNote: 'Strong Band 6.5. The overview is well-placed and identifies the most significant comparative feature. To reach 7.0, add more specific data at key turning points and use a wider range of grammatical structures.',
      },
      {
        band: '7.5',
        wordCount: 211,
        essay: `The line graph tracks energy consumption across three countries — Germany, Brazil, and Australia — over the three decades from 1990 to 2020.

The dominant narrative is one of reversal: Germany, which began the period as by far the largest consumer, saw its consumption fall steadily, while Brazil's dramatic growth meant the two countries had converged to roughly equal levels by 2020. Australia experienced comparatively modest growth throughout.

In 1990, Germany consumed approximately 400 units — more than double Brazil's 150 units — while Australia occupied an intermediate position at around 200 units. Germany's trajectory was consistently downward over the thirty-year period, declining to approximately 320 units by 2020, representing a fall of around 20%.

Brazil's trajectory was the most striking of the three. From its relatively low starting point, consumption accelerated sharply — particularly between 2000 and 2015 — ultimately reaching approximately 360 units in 2020, a near-threefold increase. This surge effectively closed what had been a substantial gap with Germany.

Australia's consumption, meanwhile, grew at a measured pace, rising from 200 units to approximately 260 units — an increase of 30% that, while consistent, was dwarfed by Brazil's transformation.`,
        annotations: [
          { phrase: 'The dominant narrative is one of reversal', type: 'strength', comment: '"Dominant narrative" and "reversal" are sophisticated framing devices. This is analytical language that immediately signals Band 7+ writing.' },
          { phrase: 'Germany, which began the period as by far the largest consumer, saw its consumption fall steadily', type: 'strength', comment: 'Excellent relative clause construction that embeds both historical context and the main trend efficiently.' },
          { phrase: 'Germany consumed approximately 400 units — more than double Brazil\'s 150 units', type: 'strength', comment: 'Using a ratio ("more than double") instead of just listing numbers shows strong analytical skill.' },
          { phrase: 'a near-threefold increase', type: 'strength', comment: '"Near-threefold" is precise and sophisticated — "near" acknowledges it\'s not exactly three times.' },
          { phrase: 'dwarfed by Brazil\'s transformation', type: 'strength', comment: '"Dwarfed" is a vivid, precise verb for comparison. "Transformation" frames Brazil\'s change as structurally significant.' },
        ],
        strengths: [
          'Analytical framing device in the overview: "narrative of reversal"',
          'Uses ratios and proportional language throughout ("double", "near-threefold")',
          '"Dwarfed" is precise and vivid — sophisticated comparative vocabulary',
          'Embedded relative clauses increase grammatical complexity naturally',
          'Data is selected wisely — key turning points identified rather than every data point',
        ],
        weaknesses: [
          'Minimal — the essay is a model of Task 1 writing at this level',
          'Could briefly acknowledge if any year-specific anomalies exist in the graph',
        ],
        examinerNote: 'Band 7.5. This response is distinguished by its analytical framing ("dominant narrative of reversal") and its sophisticated vocabulary for data comparison ("near-threefold", "dwarfed"). These features elevate it above competent description into genuine analysis.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // TASK 2 · Prompt 4 — Remote Work
  // ─────────────────────────────────────────────────────────────
  {
    id: 't2_remote',
    type: 'task2',
    title: 'Remote Working',
    prompt: 'Many employers now allow their staff to work from home. Do the advantages of working from home outweigh the disadvantages?',
    taskDescription: 'Advantages/Disadvantages essay — clearly argue whether advantages outweigh disadvantages.',
    versions: [
      {
        band: '5.0',
        wordCount: 242,
        essay: `Working from home has become very popular especially after COVID-19. There are many advantages and disadvantages.

The main advantage is that people can save time because they do not need to travel to work. This saves money too because they do not need to pay for transport. Also, people can work in comfortable clothes at home and they can start work earlier or later. This is called flexible working.

Another advantage is for parents. Parents can look after their children while working from home. This is good for families.

However, there are also disadvantages. People who work from home may feel lonely because they are not with their colleagues. Also, it is harder to separate work and home life. Some people work too many hours because they never leave the office.

Also, some jobs cannot be done from home. For example, doctors and teachers need to be in their workplace. So remote working is not possible for everyone.

I think the advantages are bigger than the disadvantages. Working from home gives people more freedom and saves time. But companies need to make sure employees stay connected with each other.

In conclusion, remote working has more advantages than disadvantages, but it depends on the job.`,
        annotations: [
          { phrase: 'Working from home has become very popular especially after COVID-19.', type: 'weakness', comment: 'Generic opener — does not engage with the specific question of whether advantages outweigh disadvantages.' },
          { phrase: 'Also, people can work in comfortable clothes at home', type: 'weakness', comment: 'This is a very minor and informal point — not appropriate for an IELTS essay arguing a case.' },
          { phrase: 'Parents can look after their children while working from home.', type: 'weakness', comment: 'Underdeveloped — does not discuss whether this is actually productive or what the trade-offs are.' },
          { phrase: 'I think the advantages are bigger than the disadvantages.', type: 'weakness', comment: 'Position appears late (paragraph 6) and is not well-integrated into the argument. Should be in the introduction.' },
        ],
        strengths: ['Both advantages and disadvantages are presented', 'Some coherence through basic connectives', 'The point about some jobs not being remote-possible shows some critical thinking'],
        weaknesses: ['Position stated too late and not clearly maintained', 'Some trivial points (comfortable clothes) undermine the essay\'s seriousness', 'Arguments are not developed or linked to consequences', 'Very limited academic vocabulary'],
        examinerNote: 'Band 5. The key weakness is that the position is unclear — this essay seems to be a "discuss both views" essay rather than clearly arguing one side outweighs the other. Stronger Task Achievement would require a clearer, earlier thesis.',
      },
      {
        band: '6.5',
        wordCount: 280,
        essay: `The shift towards remote working, dramatically accelerated by the COVID-19 pandemic, has transformed how millions of people structure their professional lives. On balance, I believe the advantages of working from home outweigh the disadvantages, provided certain conditions are met.

The most compelling argument in favour of remote work is the recovery of productive time. Commuting to offices in major cities can consume one to two hours daily — time that remote workers can redirect towards work, family, or personal wellbeing. Related to this, the flexibility to work during one's most productive hours, rather than adhering to standardised office schedules, can improve both output quality and employee satisfaction.

However, the disadvantages are significant and should not be minimised. Physical separation from colleagues can impede the spontaneous collaboration that drives innovation — the informal conversation at the printer or in the corridor that evolves into a creative solution. Additionally, maintaining clear boundaries between professional and personal space becomes genuinely difficult at home, which research indicates is associated with higher rates of burnout.

Nonetheless, these drawbacks are increasingly manageable. Video conferencing platforms and asynchronous communication tools have partially replicated office interaction, and many companies now implement "hybrid" models that capture the benefits of both environments.

In conclusion, remote working offers clear benefits in terms of productivity and quality of life, with drawbacks that, while real, are increasingly addressable through thoughtful organisational design. The advantages therefore outweigh the disadvantages.`,
        annotations: [
          { phrase: 'The shift towards remote working, dramatically accelerated by the COVID-19 pandemic', type: 'strength', comment: '"Accelerated" as a past participle — good complex structure. "Dramatically accelerated" is a strong collocation.' },
          { phrase: 'The most compelling argument in favour of remote work is the recovery of productive time.', type: 'strength', comment: 'Strong topic sentence — identifies the key argument with precise vocabulary ("recovery of productive time").' },
          { phrase: 'the informal conversation at the printer or in the corridor that evolves into a creative solution', type: 'strength', comment: 'Excellent specific example that develops the abstract point about spontaneous collaboration.' },
          { phrase: 'drawbacks that, while real, are increasingly addressable through thoughtful organisational design', type: 'strength', comment: 'The concession structure ("while real") and "increasingly addressable" shows the writer\'s controlled, nuanced voice.' },
        ],
        strengths: ['Clear position in introduction and maintained throughout', 'Good range of vocabulary: "impede", "burnout", "asynchronous"', 'Arguments are developed beyond simple statement', 'Concession point is handled elegantly'],
        weaknesses: ['The hybrid model point at the end is briefly mentioned but deserves earlier and fuller development', 'Statistics could strengthen the commuting argument'],
        examinerNote: 'Band 6.5 — strong task achievement with well-developed arguments. The specific example about the corridor conversation is excellent and shows a Band 7 instinct. Fuller development of the hybrid solution would strengthen it further.',
      },
      {
        band: '7.5',
        wordCount: 322,
        essay: `Remote working, once a niche arrangement for specific roles or exceptional circumstances, has become a standard feature of professional life across many industries. Having weighed the evidence, I believe its advantages substantially outweigh the disadvantages — though this conclusion is not unconditional.

The primary benefit is the redistribution of time from commuting to more valuable activities. In many major cities, commuters spend between one and two hours daily in transit — time that, when recovered, can be directed towards both professional productivity and the kind of restorative personal activities that sustained performance requires. There is also evidence that many knowledge workers perform at higher levels in controlled home environments, free from the open-plan office interruptions that fragment concentration.

The most legitimate concern is the attrition of the informal social infrastructure that offices provide. Spontaneous collaboration — the hallway conversation that becomes a breakthrough idea — is genuinely difficult to replicate digitally, and there is reasonable evidence that remote-only environments can disadvantage junior employees who rely disproportionately on proximity to senior colleagues for learning and visibility. The isolation risk is also real; not everyone has a home environment conducive to focused work, and for some individuals, the office represents their primary source of social contact.

These are not trivial concerns. However, they are largely addressable through hybrid working models, which — when thoughtfully implemented — can capture the restorative benefits of home working while preserving the relational benefits of periodic physical presence. The binary framing of "remote or office" increasingly misrepresents how most knowledge workers actually experience this question.

The net verdict is that remote working, treated as an option rather than an obligation, substantially benefits most knowledge workers, their employers, and — through reduced commuter traffic — the urban environments they previously congested.`,
        annotations: [
          { phrase: 'I believe its advantages substantially outweigh the disadvantages — though this conclusion is not unconditional.', type: 'strength', comment: 'Excellent thesis — clear position with important qualification. "Not unconditional" is sophisticated hedging.' },
          { phrase: 'the redistribution of time from commuting to more valuable activities', type: 'strength', comment: '"Redistribution" frames the argument in economic terms — more sophisticated than "saving time".' },
          { phrase: 'the informal social infrastructure that offices provide', type: 'strength', comment: '"Social infrastructure" is a precise, academic metaphor. Nominalisation of a complex idea.' },
          { phrase: 'The binary framing of "remote or office" increasingly misrepresents how most knowledge workers actually experience this question.', type: 'strength', comment: 'This sentence challenges the question\'s premise — a mark of Band 8 analytical sophistication. "Binary framing" is excellent vocabulary.' },
          { phrase: 'the urban environments they previously congested', type: 'strength', comment: 'Elegant final note — "congested" used as a verb (not an adjective) is precise and unexpected. A strong ending.' },
        ],
        strengths: ['Position is qualified in a sophisticated way: "not unconditional"', '"Binary framing" challenges the premise of the question — Band 8 analytical move', '"Social infrastructure" is a precise, memorable metaphor', 'The concluding sentence extends the argument to environmental impact — unexpected and impressive', 'Arguments are fully developed with specific consequences'],
        weaknesses: ['The essay is dense — occasionally risks sacrificing clarity for sophistication', 'Could include one specific statistic to support the productivity claim'],
        examinerNote: 'Upper Band 7.5. The phrase "binary framing increasingly misrepresents" is one of the strongest analytical moves possible in an IELTS essay, challenging the question\'s implicit premise. The environmental point in the conclusion is a genuine surprise that elevates the response.',
      },
    ],
  },

]
