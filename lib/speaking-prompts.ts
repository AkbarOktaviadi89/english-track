// ─── Part 1: Short answer questions (~30–45 seconds) ──────────

export interface Part1Topic {
  id: string
  topic: string
  emoji: string
  questions: string[]
}

// ─── Part 2: Cue card (1 min prep + 2 min speaking) ───────────

export interface Part2Card {
  id: string
  topic: string
  emoji: string
  instruction: string
  bulletPoints: string[]
  followUp: string
  band6Sample: string
  band7Sample: string
  keyVocab: string[]
  examinerTip: string
}

// ─── Part 3: Abstract discussion (~60–90 seconds per answer) ──

export interface Part3Question {
  question: string
  modelAnswer: string
  keyPhrases: string[]
}

export interface Part3Set {
  id: string
  linkedPart2: string
  topic: string
  emoji: string
  questions: Part3Question[]
}

// ─────────────────────────────────────────────────────────────────
// PART 1 DATA
// ─────────────────────────────────────────────────────────────────

export const PART1_TOPICS: Part1Topic[] = [
  {
    id: 'p1_work',
    topic: 'Work & Studies',
    emoji: '💼',
    questions: [
      'Do you work or are you a student?',
      'What do you do in your job / What do you study?',
      'Do you enjoy your work / studies? Why or why not?',
      'What would your ideal job be?',
      'Do you think your current work or studies will help you in the future?',
    ],
  },
  {
    id: 'p1_hometown',
    topic: 'Hometown & Living',
    emoji: '🏘️',
    questions: [
      'Where are you from originally?',
      'Do you live in a house or an apartment?',
      'What do you like most about where you live?',
      'Has your hometown changed much in recent years?',
      'Would you prefer to live in a city or in the countryside?',
    ],
  },
  {
    id: 'p1_daily',
    topic: 'Daily Life & Routines',
    emoji: '📅',
    questions: [
      'Describe your typical morning routine.',
      'What do you usually do in the evenings after work or school?',
      'Do you prefer to be busy or to have plenty of free time?',
      'Has your daily routine changed compared to a few years ago?',
      'What is the most important part of your day?',
    ],
  },
  {
    id: 'p1_hobbies',
    topic: 'Hobbies & Leisure',
    emoji: '🎯',
    questions: [
      'What do you enjoy doing in your free time?',
      'Have your hobbies changed since you were younger?',
      'Is it important to have hobbies? Why?',
      'Would you like to try any new hobbies in the future?',
      'Do you prefer active or relaxing hobbies?',
    ],
  },
  {
    id: 'p1_tech',
    topic: 'Technology & Internet',
    emoji: '📱',
    questions: [
      'How often do you use social media?',
      'What do you mainly use the internet for?',
      'Do you think people spend too much time on their phones?',
      'Are you good at using technology?',
      'How has technology changed the way you study or work?',
    ],
  },
  {
    id: 'p1_food',
    topic: 'Food & Cooking',
    emoji: '🍽️',
    questions: [
      'Do you enjoy cooking? Why or why not?',
      'What is your favourite type of food?',
      'Do you prefer eating at home or at a restaurant?',
      'Have your food habits changed in recent years?',
      'Is food important to the culture in your country?',
    ],
  },
  {
    id: 'p1_travel',
    topic: 'Travel & Transport',
    emoji: '✈️',
    questions: [
      'How do you usually travel around your city?',
      'Do you enjoy travelling? Where have you been?',
      'Would you prefer to travel alone or with others?',
      'What kind of places do you like to visit when travelling?',
      'Do you think travelling is important for personal development?',
    ],
  },
  {
    id: 'p1_music',
    topic: 'Music & Arts',
    emoji: '🎵',
    questions: [
      'What kind of music do you enjoy?',
      'Do you play any musical instruments or have you ever tried?',
      'Do you prefer listening to music alone or with others?',
      'Do you think music education should be compulsory in schools?',
      'How has music technology changed the way people listen to music?',
    ],
  },
  {
    id: 'p1_weather',
    topic: 'Weather & Seasons',
    emoji: '⛅',
    questions: [
      'What is the weather like in your country?',
      'What is your favourite season and why?',
      'Do you prefer hot or cold weather?',
      'Does the weather affect your mood?',
      'Has the weather in your country changed in recent years?',
    ],
  },
  {
    id: 'p1_sport',
    topic: 'Sports & Exercise',
    emoji: '⚽',
    questions: [
      'Do you enjoy watching or playing sports?',
      'Which sport is most popular in your country?',
      'How important do you think exercise is for health?',
      'Did you play sports when you were younger?',
      'Do you think children should be encouraged to do more physical activity?',
    ],
  },
]

// ─────────────────────────────────────────────────────────────────
// PART 2 DATA
// ─────────────────────────────────────────────────────────────────

export const PART2_CARDS: Part2Card[] = [
  {
    id: 'p2_person',
    topic: 'A Person You Admire',
    emoji: '👤',
    instruction: 'Describe a person you admire.',
    bulletPoints: [
      'Who this person is',
      'How you know or know about this person',
      'What qualities you admire in them',
      'And explain why this person inspires you',
    ],
    followUp: 'Why do you think this person is inspiring?',
    band6Sample: 'The person I admire most is my grandmother. She raised five children while working full-time, which I think is very impressive. She is very hardworking and always positive. I admire her because she never gives up and always helps others. She inspires me to be a better person.',
    band7Sample: 'The person I admire most is my grandmother. Despite raising five children while holding down a full-time job — something that would have been genuinely arduous in her era — she never complained. What I admire most is her quiet resilience; she faced considerable hardship without ever losing her sense of humour or her generosity. Honestly, she sets a standard I aspire to but rarely manage to meet.',
    keyVocab: ['resilience', 'aspire to', 'inspiring', 'admirable quality', 'role model', 'perseverance', 'dedication'],
    examinerTip: 'Use the full 2 minutes. Add specific details and personal feelings — "What I find particularly admirable is..." shows C1 vocabulary range.',
  },
  {
    id: 'p2_place',
    topic: 'A Place You Would Like to Visit',
    emoji: '🗺️',
    instruction: 'Describe a place you would like to visit.',
    bulletPoints: [
      'Where this place is',
      'Why you want to visit it',
      'What you would do there',
      'And explain why this place appeals to you',
    ],
    followUp: 'Do you think you will actually visit this place one day?',
    band6Sample: 'I have always wanted to visit Japan, especially Tokyo and Kyoto. I want to go there because it has an interesting mix of modern technology and traditional culture. I would visit famous temples and also try the local food. Japan appeals to me because it is so different from my own country.',
    band7Sample: 'I\'ve long been fascinated by Japan — specifically the contrast between the hypermodern chaos of Tokyo and the serene, centuries-old temples of Kyoto. What appeals to me most is this cultural duality: you can be immersed in cutting-edge technology one moment and meditating in a fifteenth-century garden the next. I\'d particularly want to visit during the cherry blossom season, which I\'ve heard transforms the cities into something genuinely otherworldly.',
    keyVocab: ['fascinated by', 'cultural heritage', 'immerse oneself in', 'serene', 'appeal to', 'architecture', 'atmosphere'],
    examinerTip: 'Use all four bullet points but don\'t just list — expand each one with personal reaction or feeling. "What appeals to me most is..." shows sophistication.',
  },
  {
    id: 'p2_event',
    topic: 'An Important Event in Your Life',
    emoji: '🎉',
    instruction: 'Describe an important event in your life.',
    bulletPoints: [
      'What the event was',
      'When and where it happened',
      'What happened during the event',
      'And explain why it was important to you',
    ],
    followUp: 'How did this event change you?',
    band6Sample: 'One of the most important events in my life was when I passed my university entrance exam. It happened when I was eighteen. I studied very hard for six months. When I got the results and saw I had passed, I felt very happy and proud. It was important because it opened many opportunities for my future.',
    band7Sample: 'One of the defining moments in my life was passing my university entrance exam. I had studied relentlessly for six months, often sacrificing weekends and social events, so when the results arrived, I was almost afraid to look. The moment I saw I\'d passed, this wave of relief and disbelief washed over me — I genuinely burst into tears. In hindsight, it wasn\'t just about the exam; it was the first time I understood that sustained effort really does pay off.',
    keyVocab: ['defining moment', 'relentlessly', 'sacrificing', 'in hindsight', 'sustained effort', 'turning point', 'milestone'],
    examinerTip: '"Defining moment" and "in hindsight" are Band 7+ vocabulary. Add emotional language — how it felt — to meet the Task Response criterion fully.',
  },
  {
    id: 'p2_challenge',
    topic: 'A Challenge You Overcame',
    emoji: '💪',
    instruction: 'Describe a challenge you have successfully dealt with.',
    bulletPoints: [
      'What the challenge was',
      'When you faced it',
      'How you dealt with it',
      'And explain what you learned from the experience',
    ],
    followUp: 'Do you think adversity builds character?',
    band6Sample: 'A big challenge I faced was learning a new language for work. At first it was very difficult and I felt frustrated. I practised every day for a year and took classes. Eventually I could use it in meetings. I learned that if you work hard and don\'t give up, you can achieve difficult things.',
    band7Sample: 'A significant challenge I faced was learning Mandarin to communicate with clients at work. Initially, the tonal system was utterly baffling — I kept accidentally saying the wrong word with potentially embarrassing results. What really helped was committing to thirty minutes of daily practice without exception, combined with regular exposure through podcasts and films. A year in, I finally held a business meeting in Mandarin, which was genuinely one of the more satisfying professional moments I\'ve had.',
    keyVocab: ['adversity', 'perseverance', 'resilience', 'baffling', 'commitment', 'gratifying', 'setback', 'overcome'],
    examinerTip: 'Use past narrative tenses accurately: past continuous for the ongoing situation, past simple for completed actions. Add specific details to sound authentic.',
  },
  {
    id: 'p2_object',
    topic: 'An Object Important to You',
    emoji: '📷',
    instruction: 'Describe an object that is important to you.',
    bulletPoints: [
      'What the object is',
      'Where you got it or how long you have had it',
      'How you use it or what you use it for',
      'And explain why it is important to you',
    ],
    followUp: 'Do you think material objects are too important in modern society?',
    band6Sample: 'One object that is very important to me is an old camera that my father gave me. He gave it to me when I was sixteen years old. I use it to take photos of special moments and places. It is important to me because it reminds me of my father and I have many good memories connected to it.',
    band7Sample: 'An object I genuinely treasure is an old film camera my father passed on to me when I was sixteen. It\'s a battered thing — the leather casing is cracked and it requires a degree of patience to operate — but that\'s almost the point. Every photograph taken with it demands thought and intentionality, which has shaped how I see and remember experiences. Beyond its practical value, it\'s a tangible connection to my father, and there\'s something irreplaceable about that.',
    keyVocab: ['treasure', 'sentimental value', 'tangible', 'irreplaceable', 'intentionality', 'reminisce', 'nostalgic'],
    examinerTip: 'Describe not just what the object is but your emotional relationship with it. "Tangible connection" and "irreplaceable" are excellent Band 7 lexical choices.',
  },
  {
    id: 'p2_skill',
    topic: 'A Skill You Want to Learn',
    emoji: '🎨',
    instruction: 'Describe a skill you would like to learn in the future.',
    bulletPoints: [
      'What the skill is',
      'Why you want to learn it',
      'How you would go about learning it',
      'And explain how this skill would benefit you',
    ],
    followUp: 'Do you think it\'s harder to learn new skills as you get older?',
    band6Sample: 'I have always wanted to learn to play the guitar. I want to learn because I love music and I think it would be a relaxing hobby. I would take lessons and practise every day. This skill would benefit me because it would help me relax after work and I could play music with friends.',
    band7Sample: 'One skill I\'ve long wanted to develop is playing the piano. There\'s something almost meditative about the way skilled pianists can lose themselves completely in a piece of music, and I\'d love to experience that. In practical terms, I\'d probably start with online lessons and commit to daily practice. Beyond the artistic satisfaction, I suspect the discipline required would transfer to other areas — learning an instrument is essentially just structured problem-solving applied to sound.',
    keyVocab: ['meditative', 'discipline', 'acquire', 'master', 'proficiency', 'dedicated practice', 'cognitive benefits'],
    examinerTip: 'Discuss WHY in depth — not just "I like it" but the deeper reason. "I suspect the discipline would transfer to other areas" shows abstract reasoning valued at Band 7+.',
  },
  {
    id: 'p2_book',
    topic: 'A Book or Film You Enjoyed',
    emoji: '📚',
    instruction: 'Describe a book or film that you found interesting.',
    bulletPoints: [
      'What the book or film is',
      'What it is about',
      'Why you chose to read or watch it',
      'And explain why you found it interesting',
    ],
    followUp: 'Do you think reading books is better than watching films? Why?',
    band6Sample: 'A film I really enjoyed is "The Pursuit of Happyness". It is about a man who is homeless and tries very hard to give a better life to his son. I watched it because a friend recommended it. I found it interesting because the story is very moving and it shows that hard work can lead to success.',
    band7Sample: 'A film that made a genuine impression on me is "The Pursuit of Happyness", based on the real story of Chris Gardner. What struck me most wasn\'t the predictable message about hard work and perseverance — it was the rawness with which it depicted the specific, humiliating details of poverty: the hostels, the queues, the constant mental arithmetic of survival. Will Smith\'s performance is extraordinarily restrained, which makes the emotional payoff considerably more powerful.',
    keyVocab: ['make an impression', 'moving', 'compelling', 'thought-provoking', 'protagonist', 'narrative arc', 'portrayal'],
    examinerTip: '"What struck me most was..." and "extraordinarily" signal Band 7+ vocabulary. Don\'t just describe the plot — give your critical interpretation.',
  },
  {
    id: 'p2_environment',
    topic: 'A Time You Spent Time in Nature',
    emoji: '🌲',
    instruction: 'Describe a time when you spent time in a natural environment.',
    bulletPoints: [
      'Where you were',
      'When this was and who you were with',
      'What you did there',
      'And explain how it made you feel',
    ],
    followUp: 'Do you think people in modern cities are too disconnected from nature?',
    band6Sample: 'Last year I went hiking in the mountains with some friends. We spent two days walking through forests and past waterfalls. The weather was perfect and the views were amazing. It made me feel very relaxed and happy, away from the noise and stress of the city. I think everyone should spend more time in nature.',
    band7Sample: 'Last summer I spent a week trekking through the highlands of northern Vietnam with a small group. What I didn\'t anticipate was just how profoundly quiet it would be — no traffic, no notifications, no background hum of city life. By the third day, I noticed I was sleeping better and thinking more clearly, which made me realise how much low-level noise I\'d simply normalised. It was genuinely restorative in a way I struggle to replicate in the city.',
    keyVocab: ['restorative', 'profoundly', 'immersed in', 'disconnect', 'serenity', 'tranquil', 'rejuvenating'],
    examinerTip: '"Profoundly quiet" and "genuinely restorative" are sophisticated collocations. Reflective language ("I realised", "I hadn\'t anticipated") shows self-awareness valued by examiners.',
  },
  {
    id: 'p2_technology',
    topic: 'A Piece of Technology You Use',
    emoji: '💻',
    instruction: 'Describe a piece of technology that you find particularly useful.',
    bulletPoints: [
      'What it is',
      'How long you have used it',
      'How you use it in your daily life',
      'And explain why you find it useful',
    ],
    followUp: 'Do you think society has become too dependent on technology?',
    band6Sample: 'I would like to talk about my smartphone, which I have used for about five years. I use it every day for many things — communicating with friends, accessing the internet, taking photos, and managing my schedule. It is very useful because it combines many tools into one device. I don\'t know how I would manage without it.',
    band7Sample: 'The technology I find most indispensable is my phone — not for social media, but specifically for its language learning apps. I\'ve been using apps like Anki and podcasts to study English for two years, and having everything accessible in my pocket means I can turn otherwise dead time — commutes, queues, waiting rooms — into productive study sessions. What I find remarkable is how dramatically this compresses the time needed to acquire vocabulary.',
    keyVocab: ['indispensable', 'integrate', 'seamlessly', 'productivity', 'accessible', 'compress time', 'leverage'],
    examinerTip: '"Indispensable" instead of "very useful" is a Band 7 vocabulary upgrade. Give a specific, personal use case rather than generic claims.',
  },
  {
    id: 'p2_change',
    topic: 'A Change You Would Make in Your Community',
    emoji: '🏙️',
    instruction: 'Describe a change you would like to see in your local community or town.',
    bulletPoints: [
      'What the change is',
      'Why this change is needed',
      'How you think it could be achieved',
      'And explain how it would benefit people',
    ],
    followUp: 'Who is ultimately responsible for improving local communities — residents or governments?',
    band6Sample: 'I would like to see more green spaces in my neighbourhood. At the moment, there are very few parks and trees. I think this change is needed because the area is very crowded and polluted. It could be achieved if the local government used empty land to build parks. This would benefit people by giving them places to relax and exercise.',
    band7Sample: 'One change I\'d genuinely advocate for is a cycling infrastructure network in my city — dedicated, physically separated lanes rather than the painted suggestions we currently have. The absence of safe cycling routes forces most people into cars, which creates a vicious circle of congestion and pollution. If the city invested in protected bike lanes connecting residential areas to business districts, I\'m convinced that a significant proportion of short car trips could be replaced within a generation.',
    keyVocab: ['advocate for', 'infrastructure', 'vicious circle', 'dedicated', 'implement', 'sustainable', 'urban planning'],
    examinerTip: 'Use conditional structures: "If X were implemented, Y would follow." This demonstrates grammatical range. "Vicious circle" is a high-impact idiom for this context.',
  },
]

// ─────────────────────────────────────────────────────────────────
// PART 3 DATA
// ─────────────────────────────────────────────────────────────────

export const PART3_SETS: Part3Set[] = [
  {
    id: 'p3_people',
    linkedPart2: 'p2_person',
    topic: 'Role Models & Success',
    emoji: '🌟',
    questions: [
      {
        question: 'What qualities do people generally admire in others?',
        modelAnswer: 'I think the qualities most commonly admired vary by culture, but broadly speaking, people tend to admire resilience — the ability to keep going under difficult circumstances — and genuine generosity. What\'s interesting is that academic or professional success alone rarely inspires deep admiration; it\'s the combination of achievement and integrity that tends to resonate. A person who succeeds while remaining humble and considerate of others is far more admired than someone who is simply talented.',
        keyPhrases: ['broadly speaking', 'tends to resonate', 'integrity', 'combination of X and Y'],
      },
      {
        question: 'Do you think celebrities are good role models for young people?',
        modelAnswer: 'I think it depends heavily on the individual celebrity and what they represent. Social media has given young people unprecedented access to public figures, which can be genuinely positive when those figures use their platform responsibly. However, the concern is that celebrity culture disproportionately rewards physical appearance, wealth, and notoriety — qualities that are poor guides for a fulfilling life. I\'d argue that young people benefit more from local role models — teachers, parents, community figures — whose values they can directly observe.',
        keyPhrases: ['it depends heavily on', 'disproportionately', 'unprecedented access', 'I\'d argue that'],
      },
      {
        question: 'Has the concept of a "role model" changed in modern society?',
        modelAnswer: 'Significantly, yes. Historically, role models tended to be figures from one\'s immediate environment — a parent, a teacher, a local leader. Social media has globalised the concept; a teenager in Jakarta might idolise a tech entrepreneur in Silicon Valley. On the positive side, this provides exposure to diverse paths and possibilities. The downside is that social media personalities often present a curated, unrealistic version of their lives, which can create damaging comparisons. So the concept has expanded, but the risks associated with it have also grown.',
        keyPhrases: ['significantly', 'historically', 'curated', 'damaging comparisons', 'on the positive side'],
      },
    ],
  },
  {
    id: 'p3_travel',
    linkedPart2: 'p2_place',
    topic: 'Travel & Globalisation',
    emoji: '🌍',
    questions: [
      {
        question: 'How has tourism changed in the past twenty years?',
        modelAnswer: 'The transformation has been remarkable. Budget airlines and online booking platforms have democratised travel, making it accessible to a much broader socioeconomic range of people than before. Social media has also changed where people go — Instagram has made certain "undiscovered" locations suddenly overcrowded. The positive consequence is that more people experience different cultures; the negative is that mass tourism is placing enormous pressure on heritage sites and local ecosystems. Venice and Barcelona are perhaps the most discussed examples of this phenomenon.',
        keyPhrases: ['democratised', 'socioeconomic', 'mass tourism', 'phenomenon', 'placing pressure on'],
      },
      {
        question: 'Do you think international travel always leads to greater understanding between cultures?',
        modelAnswer: 'Not automatically, no. There\'s a tempting assumption that simply being physically present in another country produces empathy and understanding, but I think that depends entirely on the quality of engagement. A tourist who stays in an international resort, eats familiar food, and interacts only with English-speaking staff hasn\'t genuinely encountered another culture. Meaningful cross-cultural understanding requires curiosity, humility, and a willingness to feel uncomfortable. Travel can facilitate that, but it doesn\'t guarantee it.',
        keyPhrases: ['not automatically', 'genuine encounter', 'cross-cultural', 'facilitate', 'willingness to'],
      },
      {
        question: 'What are the advantages and disadvantages of working abroad?',
        modelAnswer: 'Working abroad can be genuinely transformative — professionally, you gain exposure to different business cultures and practices, which tends to accelerate career development. On a personal level, navigating daily life in a foreign country builds a kind of practical resilience that\'s difficult to acquire any other way. The obvious drawbacks are distance from family and friends and the challenge of integrating socially, which can be isolating, particularly if you don\'t speak the local language fluently. On balance, I think the benefits tend to outweigh the costs for most people willing to invest the initial effort.',
        keyPhrases: ['transformative', 'on balance', 'tends to outweigh', 'isolating', 'practical resilience'],
      },
    ],
  },
  {
    id: 'p3_challenges',
    linkedPart2: 'p2_challenge',
    topic: 'Adversity & Personal Growth',
    emoji: '🌱',
    questions: [
      {
        question: 'Do you think adversity builds character, or is this idea too simplistic?',
        modelAnswer: 'I think it\'s partially true but considerably overstated. There\'s good psychological evidence that moderate challenges — what researchers call "desirable difficulties" — do promote resilience and growth. However, the romantic notion that "what doesn\'t kill you makes you stronger" ignores the reality that severe or prolonged adversity can be genuinely damaging, particularly for children. The key variable seems to be whether the individual has adequate support and resources to process the difficulty. Adversity without support can just as easily produce learned helplessness rather than resilience.',
        keyPhrases: ['partially true but overstated', 'the key variable', 'learned helplessness', 'psychological evidence'],
      },
      {
        question: 'How can parents prepare their children to face challenges?',
        modelAnswer: 'Research on child development suggests that what matters most is not shielding children from all difficulty but ensuring they develop a sense of self-efficacy — the belief that their actions make a difference. This comes from allowing age-appropriate challenges, offering support without solving every problem for them, and modelling good coping strategies yourself. I\'d also argue that teaching children to tolerate frustration without immediately giving up is perhaps the single most important skill for long-term wellbeing.',
        keyPhrases: ['self-efficacy', 'age-appropriate', 'modelling', 'long-term wellbeing', 'tolerate frustration'],
      },
      {
        question: 'Is failure seen differently in different cultures?',
        modelAnswer: 'Absolutely — attitudes towards failure vary enormously across cultures. In Silicon Valley, for instance, failure is often framed as a learning experience and even a badge of honour; the "fail fast, fail often" ethos is genuinely celebrated. In contrast, many East Asian educational cultures place such emphasis on academic success that failure carries considerable social stigma. Neither extreme is entirely healthy — the former can trivialise genuine mistakes, while the latter creates excessive fear of trying. A mature culture around failure probably sits somewhere between the two.',
        keyPhrases: ['varies enormously', 'ethos', 'social stigma', 'neither extreme', 'framed as'],
      },
    ],
  },
  {
    id: 'p3_technology',
    linkedPart2: 'p2_technology',
    topic: 'Technology & Society',
    emoji: '🤖',
    questions: [
      {
        question: 'How has technology changed the way people communicate?',
        modelAnswer: 'The transformation has been profound and somewhat paradoxical. On one hand, technology has made communication almost instantaneous across any distance — something that was inconceivable just thirty years ago. On the other hand, there is growing evidence that the quality of our interactions has suffered; text-based communication strips away tone, context, and nuance, leading to frequent misunderstandings. Perhaps the most concerning change is the way social media has made public shaming and harassment trivially easy, which has had measurable effects on mental health — particularly among adolescents.',
        keyPhrases: ['paradoxical', 'strips away nuance', 'measurable effects', 'inconceivable', 'profound'],
      },
      {
        question: 'Do you think artificial intelligence will replace human jobs?',
        modelAnswer: 'I think the honest answer is: yes, substantially, but probably not in the way most people imagine. History suggests that technological revolutions do eliminate categories of work — the mechanisation of agriculture being the most dramatic example — but simultaneously create new categories that were previously inconceivable. The concern isn\'t so much about total job loss but about the transition period: those whose jobs are automated first will need significant retraining and support. The distribution of AI\'s benefits is perhaps the more pressing question — will they accrue to owners of capital or to society broadly?',
        keyPhrases: ['substantially', 'transition period', 'accrue to', 'distribution of benefits', 'pressing question'],
      },
      {
        question: 'Should governments regulate social media companies more strictly?',
        modelAnswer: 'I believe some form of regulation is overdue, though the challenge is designing it effectively. The current situation is arguably untenable — platforms with billions of users operate with less accountability than a local newspaper. The strongest argument for regulation is the documented harm caused by algorithmic content promotion that prioritises engagement over accuracy, contributing to political polarisation and the spread of health misinformation. The counterargument centres on freedom of expression and the difficulty of governments acting as arbiters of truth. I\'d favour regulation focused on transparency and algorithmic accountability rather than content moderation per se.',
        keyPhrases: ['untenable', 'overdue', 'algorithmic accountability', 'per se', 'arbiters of'],
      },
    ],
  },
  {
    id: 'p3_environment',
    linkedPart2: 'p2_environment',
    topic: 'Environment & Climate',
    emoji: '🌿',
    questions: [
      {
        question: 'Why do you think many people are still not taking climate change seriously?',
        modelAnswer: 'I think several psychological factors are at play. Climate change operates on timescales that are poorly matched to human cognitive processing — we\'re wired to respond to immediate threats, not gradual ones. There\'s also the issue of psychological distance: the worst projected impacts seem geographically and temporally remote to people in wealthy nations, making it difficult to generate genuine urgency. Finally, decades of well-funded climate denial campaigns have created artificial uncertainty about the scientific consensus, giving people cognitive permission to delay action.',
        keyPhrases: ['psychological distance', 'cognitive processing', 'scientific consensus', 'artificial uncertainty', 'at play'],
      },
      {
        question: 'Is individual action on the environment meaningful, or does it require systemic change?',
        modelAnswer: 'I think this is sometimes presented as a false dichotomy. Individual behaviour undeniably matters — consumer choices collectively send powerful market signals — but framing climate change primarily as an individual responsibility issue has actually been deliberately promoted by fossil fuel interests to deflect political pressure from the industries responsible for the vast majority of emissions. Systemic change through legislation, taxation, and international agreements is almost certainly more impactful than asking individuals to recycle more conscientiously. However, the two are not mutually exclusive, and a society in which individuals genuinely care is more likely to generate the political will for systemic change.',
        keyPhrases: ['false dichotomy', 'deflect', 'systemic change', 'not mutually exclusive', 'political will'],
      },
      {
        question: 'What role should governments play in encouraging sustainable living?',
        modelAnswer: 'Governments have several tools available, ranging from the coercive to the nudge-based. Carbon taxes and regulation are perhaps the most powerful levers — pricing carbon correctly aligns economic incentives with environmental outcomes. Beyond that, governments can use public investment to make sustainable choices the cheaper default: subsidised public transport, incentives for electric vehicles, and well-funded renewable energy research all shift the cost calculus. The question of whether to mandate or incentivise is partly ideological, but evidence suggests that a combination of the two — making sustainable choices easy and affordable while raising the cost of environmentally damaging behaviour — tends to be most effective.',
        keyPhrases: ['cost calculus', 'coercive', 'carbon tax', 'align incentives', 'mandate or incentivise'],
      },
    ],
  },
  {
    id: 'p3_education',
    linkedPart2: 'p2_skill',
    topic: 'Education & Learning',
    emoji: '🎓',
    questions: [
      {
        question: 'What skills do you think will be most important for young people in the future?',
        modelAnswer: 'I\'d argue that meta-skills — skills about learning itself — will be more valuable than any specific technical knowledge, simply because the half-life of specific skills is shrinking rapidly. The ability to adapt, to learn new domains quickly, and to synthesise information from diverse sources seems increasingly essential. Beyond that, emotional intelligence — the ability to collaborate effectively, manage conflict, and communicate persuasively — is proving remarkably resistant to automation. Critical thinking and creativity are the other two I\'d highlight, because these are precisely the capacities that AI currently replicates least well.',
        keyPhrases: ['meta-skills', 'half-life of skills', 'synthesise', 'resistant to automation', 'I\'d argue that'],
      },
      {
        question: 'Do you think the education system adequately prepares young people for the real world?',
        modelAnswer: 'In many countries, the honest answer is probably no, though I recognise that\'s a controversial view. Most education systems still orient heavily around the acquisition and recall of information — a skill that is rapidly being made redundant by technology. What they tend to underinvest in is critical thinking, financial literacy, emotional intelligence, and — critically — the ability to deal with uncertainty and ambiguity. There are notable exceptions: some Nordic education systems, for instance, place considerable emphasis on project-based, collaborative learning with more relevance to adult life.',
        keyPhrases: ['orient heavily around', 'made redundant', 'underinvest in', 'notable exceptions', 'ambiguity'],
      },
      {
        question: 'Is it better to specialise early in education, or study a broad range of subjects?',
        modelAnswer: 'There are compelling arguments on both sides, and I suspect the optimal approach varies by individual temperament and by the demands of particular fields. Early specialisation makes sense in areas like elite sport, classical music performance, or mathematics, where deep immersion from an early age appears to confer significant advantages. For most domains, however, the evidence increasingly supports a broader foundation — what David Epstein calls the "match quality" argument: people who explore widely before committing tend to make better decisions about where their aptitudes and interests truly lie. A narrow education too early can close doors before you\'ve had a chance to identify which ones lead somewhere you actually want to go.',
        keyPhrases: ['compelling arguments on both sides', 'match quality', 'deep immersion', 'confer advantages', 'aptitudes'],
      },
    ],
  },
  {
    id: 'p3_society',
    linkedPart2: 'p2_change',
    topic: 'Society & Communities',
    emoji: '🏘️',
    questions: [
      {
        question: 'Do you think communities are stronger or weaker than they were fifty years ago?',
        modelAnswer: 'I\'d say the nature of community has shifted more than its strength has declined. Geographical communities — the neighbourhood, the local church, the village — have undeniably weakened in most industrialised countries, as mobility, longer working hours, and digital entertainment have reduced the shared daily rituals that once bound neighbours together. However, people are forming new kinds of community — interest-based, online, global — that provide many of the same functions: belonging, support, shared identity. Whether these digital communities are adequate substitutes for geographical ones is genuinely contested.',
        keyPhrases: ['shifted rather than declined', 'shared rituals', 'belonging', 'genuinely contested', 'substitutes for'],
      },
      {
        question: 'Who is more responsible for social problems — individuals or governments?',
        modelAnswer: 'I think this framing sets up a false opposition that lets one or the other off the hook. Individuals make choices, but those choices are profoundly shaped by the environment governments create — access to education, healthcare, employment opportunities, and physical safety. Research on poverty, for instance, consistently shows that removing financial stress substantially improves decision-making quality, suggesting that many "individual failures" are actually systemic ones in disguise. A more productive framing might ask: what conditions does government need to create so that individuals are genuinely empowered to make better choices?',
        keyPhrases: ['false opposition', 'profoundly shaped by', 'systemic', 'empowered to', 'in disguise'],
      },
      {
        question: 'How can governments encourage citizens to be more involved in their communities?',
        modelAnswer: 'The evidence on civic engagement suggests that people participate more when they believe their input genuinely makes a difference. So the first requirement is probably creating real mechanisms for participation — participatory budgeting, community consultation with actual consequences, and accessible local democracy. Beyond that, governments can facilitate community building through investment in shared public spaces: libraries, parks, community centres. The research is fairly consistent that mixed-use, walkable neighbourhoods with good public spaces generate significantly higher levels of social interaction and civic trust than car-dependent suburban environments.',
        keyPhrases: ['civic engagement', 'participatory budgeting', 'facilitate', 'mixed-use', 'civic trust'],
      },
    ],
  },
]
