export type Register = 'formal' | 'informal' | 'neutral'
export type IdiomCategory =
  | 'time'        | 'effort'      | 'success'    | 'relationships'
  | 'communication' | 'decisions' | 'work'       | 'money'
  | 'problems'    | 'thinking'

export interface Idiom {
  id: string
  phrase: string
  meaning: string
  example: string
  register: Register
  level: 'B1' | 'B2' | 'C1'
  category: IdiomCategory
  tip?: string
}

export interface PhrasalVerb {
  id: string
  verb: string          // base verb (e.g. "give")
  phrasal: string       // full phrasal verb (e.g. "give up")
  meaning: string
  example: string
  register: Register
  level: 'B1' | 'B2' | 'C1'
  separable: boolean    // "put off the meeting" vs "come across"
  tip?: string
}

export const IDIOM_CATEGORIES: Record<IdiomCategory, string> = {
  time:           'Time & Speed',
  effort:         'Effort & Challenge',
  success:        'Success & Failure',
  relationships:  'Relationships',
  communication:  'Communication',
  decisions:      'Decisions',
  work:           'Work & Career',
  money:          'Money & Finance',
  problems:       'Problems & Issues',
  thinking:       'Thinking & Ideas',
}

// ─────────────────────────────────────────────────────────────────
// IDIOMS
// ─────────────────────────────────────────────────────────────────
export const IDIOMS: Idiom[] = [

  // Time & Speed
  { id: 'i_01', phrase: 'In the long run', meaning: 'Over a long period of time; eventually', example: 'In the long run, investing in education pays off far more than short-term training.', register: 'neutral', level: 'B2', category: 'time', tip: 'IELTS-safe: can be used in formal essays.' },
  { id: 'i_02', phrase: 'At the eleventh hour', meaning: 'At the very last possible moment', example: 'The deal was saved at the eleventh hour after a final round of negotiations.', register: 'neutral', level: 'B2', category: 'time' },
  { id: 'i_03', phrase: 'In no time', meaning: 'Very quickly; very soon', example: 'With the right strategy, you can improve your score in no time.', register: 'informal', level: 'B1', category: 'time' },
  { id: 'i_04', phrase: 'Time flies', meaning: 'Time passes very quickly', example: '"Time flies when you\'re having fun" — but it\'s also true when you\'re deeply focused on work.', register: 'informal', level: 'B1', category: 'time' },
  { id: 'i_05', phrase: 'From time to time', meaning: 'Occasionally; not regularly', example: 'From time to time, the government reviews its education policy.', register: 'neutral', level: 'B1', category: 'time', tip: 'IELTS Speaking: a natural way to express "sometimes" with more sophistication.' },
  { id: 'i_06', phrase: 'In the nick of time', meaning: 'Just before it is too late', example: 'The ambulance arrived in the nick of time to prevent further complications.', register: 'neutral', level: 'B2', category: 'time' },

  // Effort & Challenge
  { id: 'i_07', phrase: 'Bite the bullet', meaning: 'Endure a painful or difficult situation bravely', example: 'He hated public speaking, but he bit the bullet and presented to 500 people.', register: 'informal', level: 'B2', category: 'effort' },
  { id: 'i_08', phrase: 'Hit a wall', meaning: 'Encounter a serious obstacle that stops progress', example: 'After six months of revision, I hit a wall and couldn\'t seem to improve my score.', register: 'informal', level: 'B2', category: 'effort', tip: 'Very common in IELTS Speaking when discussing challenges.' },
  { id: 'i_09', phrase: 'Uphill battle', meaning: 'A difficult task that requires a lot of effort', example: 'Reducing carbon emissions without international cooperation is an uphill battle.', register: 'neutral', level: 'B2', category: 'effort', tip: 'Good for IELTS Writing Task 2 when discussing challenges.' },
  { id: 'i_10', phrase: 'Go the extra mile', meaning: 'Do more than what is required or expected', example: 'Teachers who go the extra mile for their students often have a lasting positive impact.', register: 'neutral', level: 'B2', category: 'effort' },
  { id: 'i_11', phrase: 'Bite off more than you can chew', meaning: 'Take on a task that is too large or difficult to handle', example: 'She took three jobs simultaneously and quickly realised she had bitten off more than she could chew.', register: 'informal', level: 'B2', category: 'effort' },
  { id: 'i_12', phrase: 'Push the envelope', meaning: 'Exceed normal limits; innovate beyond accepted boundaries', example: 'Silicon Valley companies are constantly pushing the envelope in artificial intelligence.', register: 'neutral', level: 'C1', category: 'effort' },

  // Success & Failure
  { id: 'i_13', phrase: 'Rise to the occasion', meaning: 'Perform well under pressure or in a challenging situation', example: 'Despite her nerves, she rose to the occasion and delivered a flawless presentation.', register: 'neutral', level: 'B2', category: 'success' },
  { id: 'i_14', phrase: 'Fall flat', meaning: 'Fail to have the intended effect; be unsuccessful', example: 'The government\'s attempt to increase public trust fell completely flat.', register: 'neutral', level: 'B2', category: 'success', tip: 'Useful in IELTS Task 2 when discussing failed policies.' },
  { id: 'i_15', phrase: 'Make or break', meaning: 'Crucial for either success or total failure', example: 'The final interview was a make-or-break moment for her career.', register: 'neutral', level: 'B2', category: 'success' },
  { id: 'i_16', phrase: 'Go from strength to strength', meaning: 'Become progressively more successful', example: 'The renewable energy sector has gone from strength to strength over the past decade.', register: 'formal', level: 'C1', category: 'success', tip: 'Excellent for formal writing and IELTS Band 7+ essays.' },
  { id: 'i_17', phrase: 'Back to square one', meaning: 'Having to start again after a failure', example: 'When the funding fell through, the research team was back to square one.', register: 'informal', level: 'B1', category: 'success' },
  { id: 'i_18', phrase: 'Hit the jackpot', meaning: 'Achieve a great success, often unexpectedly', example: 'They hit the jackpot when their app went viral in Asia.', register: 'informal', level: 'B2', category: 'success' },

  // Relationships
  { id: 'i_19', phrase: 'See eye to eye', meaning: 'Agree completely with someone', example: 'The two leaders rarely see eye to eye on environmental policy.', register: 'neutral', level: 'B2', category: 'relationships' },
  { id: 'i_20', phrase: 'Bury the hatchet', meaning: 'End a conflict and make peace', example: 'After years of trade disputes, the two countries finally buried the hatchet.', register: 'neutral', level: 'B2', category: 'relationships' },
  { id: 'i_21', phrase: 'Get along like a house on fire', meaning: 'Have an excellent, immediate friendship', example: 'I was nervous about meeting my new colleagues, but we got along like a house on fire.', register: 'informal', level: 'B2', category: 'relationships' },
  { id: 'i_22', phrase: 'Burn bridges', meaning: 'Permanently damage a relationship, making it impossible to return', example: 'Leaving a job badly can burn bridges that are difficult to rebuild.', register: 'neutral', level: 'B2', category: 'relationships', tip: 'IELTS Speaking: "I would never want to burn bridges professionally."' },
  { id: 'i_23', phrase: 'Rock the boat', meaning: 'Disturb a stable situation by raising problems', example: 'He hesitated to rock the boat by challenging his manager\'s approach.', register: 'informal', level: 'B2', category: 'relationships' },
  { id: 'i_24', phrase: 'The ball is in your court', meaning: 'It is now your responsibility to take the next action', example: 'I\'ve submitted the proposal. The ball is in their court now.', register: 'informal', level: 'B2', category: 'relationships' },

  // Communication
  { id: 'i_25', phrase: 'Beat around the bush', meaning: 'Avoid getting to the main point; speak indirectly', example: 'Stop beating around the bush and tell me what you actually think of the plan.', register: 'informal', level: 'B2', category: 'communication' },
  { id: 'i_26', phrase: 'Hit the nail on the head', meaning: 'Describe something exactly correctly', example: 'She hit the nail on the head when she said the company\'s main problem was communication.', register: 'neutral', level: 'B2', category: 'communication' },
  { id: 'i_27', phrase: 'Read between the lines', meaning: 'Understand the implied meaning beyond what is stated', example: 'Reading between the lines, it\'s clear that the government plans to raise taxes.', register: 'neutral', level: 'B2', category: 'communication', tip: 'Good for IELTS Reading strategies discussion.' },
  { id: 'i_28', phrase: 'Let the cat out of the bag', meaning: 'Accidentally reveal a secret', example: 'He let the cat out of the bag when he mentioned the surprise party.', register: 'informal', level: 'B1', category: 'communication' },
  { id: 'i_29', phrase: 'Speak your mind', meaning: 'Express your opinion freely and directly', example: 'In a healthy democracy, citizens should feel free to speak their minds.', register: 'neutral', level: 'B1', category: 'communication' },
  { id: 'i_30', phrase: 'Put your foot in it', meaning: 'Accidentally say something embarrassing or tactless', example: 'She really put her foot in it when she asked when the baby was due — the woman wasn\'t pregnant.', register: 'informal', level: 'B2', category: 'communication' },

  // Decisions
  { id: 'i_31', phrase: 'On the fence', meaning: 'Undecided; not yet committed to either side', example: 'Many voters are still on the fence about which party to support.', register: 'neutral', level: 'B2', category: 'decisions', tip: 'IELTS Speaking: "I\'m still somewhat on the fence about this issue."' },
  { id: 'i_32', phrase: 'Take the plunge', meaning: 'Commit to a risky or difficult action after hesitating', example: 'She finally took the plunge and quit her job to start her own business.', register: 'informal', level: 'B2', category: 'decisions' },
  { id: 'i_33', phrase: 'Keep your options open', meaning: 'Avoid committing to one choice so you can choose later', example: 'It\'s wise to keep your options open when considering career paths.', register: 'neutral', level: 'B2', category: 'decisions' },
  { id: 'i_34', phrase: 'A double-edged sword', meaning: 'Something with both advantages and disadvantages', example: 'Social media is a double-edged sword: it connects people but also spreads misinformation.', register: 'neutral', level: 'B2', category: 'decisions', tip: 'Excellent for IELTS Task 2 discussion essays on technology or globalisation.' },
  { id: 'i_35', phrase: 'Weigh the pros and cons', meaning: 'Carefully consider both advantages and disadvantages', example: 'Before investing, it is essential to weigh the pros and cons of each option.', register: 'neutral', level: 'B1', category: 'decisions' },
  { id: 'i_36', phrase: 'Jump the gun', meaning: 'Act too soon, before the right moment', example: 'The company jumped the gun by launching the product before it was fully tested.', register: 'informal', level: 'B2', category: 'decisions' },

  // Work & Career
  { id: 'i_37', phrase: 'Burn the midnight oil', meaning: 'Work late into the night', example: 'Students burn the midnight oil before exams, but this often reduces performance.', register: 'informal', level: 'B1', category: 'work' },
  { id: 'i_38', phrase: 'Learn the ropes', meaning: 'Learn the basics of a new job or activity', example: 'It took a few months to learn the ropes, but now she handles projects independently.', register: 'informal', level: 'B1', category: 'work' },
  { id: 'i_39', phrase: 'Pull your weight', meaning: 'Do your fair share of the work', example: 'Team projects only succeed when every member pulls their weight.', register: 'informal', level: 'B2', category: 'work' },
  { id: 'i_40', phrase: 'Cut corners', meaning: 'Do something the cheapest or easiest way, compromising quality', example: 'Cutting corners on safety can have catastrophic consequences in the construction industry.', register: 'neutral', level: 'B2', category: 'work' },
  { id: 'i_41', phrase: 'Think outside the box', meaning: 'Think creatively and unconventionally', example: 'The most successful entrepreneurs are those who think outside the box.', register: 'neutral', level: 'B1', category: 'work', tip: 'Very common in IELTS — but use with variety, not repeatedly.' },
  { id: 'i_42', phrase: 'Under the radar', meaning: 'Not attracting attention; working quietly without notice', example: 'The small company operated under the radar for years before attracting major investment.', register: 'neutral', level: 'B2', category: 'work' },

  // Money & Finance
  { id: 'i_43', phrase: 'Cost an arm and a leg', meaning: 'Be extremely expensive', example: 'Private healthcare in many countries costs an arm and a leg.', register: 'informal', level: 'B1', category: 'money' },
  { id: 'i_44', phrase: 'Tighten one\'s belt', meaning: 'Spend less money; live more frugally', example: 'Many households had to tighten their belts during the economic recession.', register: 'neutral', level: 'B2', category: 'money', tip: 'IELTS Task 2: useful when discussing austerity or financial hardship.' },
  { id: 'i_45', phrase: 'Break even', meaning: 'Earn exactly as much as you spend; make neither profit nor loss', example: 'It took the start-up three years to break even.', register: 'neutral', level: 'B2', category: 'money' },
  { id: 'i_46', phrase: 'Make ends meet', meaning: 'Earn just enough money to cover basic expenses', example: 'With rising inflation, many families struggle to make ends meet.', register: 'neutral', level: 'B1', category: 'money' },
  { id: 'i_47', phrase: 'Foot the bill', meaning: 'Pay for something, especially a large expense', example: 'Taxpayers are ultimately left to foot the bill for government overspending.', register: 'neutral', level: 'B2', category: 'money' },

  // Problems & Issues
  { id: 'i_48', phrase: 'The tip of the iceberg', meaning: 'A small visible part of a much larger hidden problem', example: 'The reported cases of corruption are just the tip of the iceberg.', register: 'neutral', level: 'B2', category: 'problems', tip: 'Excellent for IELTS Task 2 when introducing a widespread social issue.' },
  { id: 'i_49', phrase: 'Sweep under the rug', meaning: 'Hide or ignore a problem rather than addressing it', example: 'Governments often sweep environmental problems under the rug to avoid public pressure.', register: 'neutral', level: 'B2', category: 'problems' },
  { id: 'i_50', phrase: 'The elephant in the room', meaning: 'An obvious serious problem that everyone ignores', example: 'Inequality remains the elephant in the room in discussions about economic growth.', register: 'neutral', level: 'B2', category: 'problems', tip: 'Very impactful in IELTS Task 2 introductions or conclusions.' },
  { id: 'i_51', phrase: 'A drop in the ocean', meaning: 'A tiny contribution to a very large problem', example: 'Individual recycling efforts, while admirable, are a drop in the ocean compared to industrial waste.', register: 'neutral', level: 'B2', category: 'problems' },
  { id: 'i_52', phrase: 'A vicious circle', meaning: 'A situation where one problem causes another, which then makes the first worse', example: 'Poverty and poor education form a vicious circle that is difficult to break.', register: 'neutral', level: 'B2', category: 'problems', tip: 'IELTS Band 7 vocabulary — clear, precise, and academic-appropriate.' },
  { id: 'i_53', phrase: 'Nip it in the bud', meaning: 'Stop a problem before it becomes serious', example: 'Mental health issues should be nipped in the bud through early intervention.', register: 'neutral', level: 'B2', category: 'problems' },

  // Thinking & Ideas
  { id: 'i_54', phrase: 'See the big picture', meaning: 'Understand the overall situation rather than just the details', example: 'Good leaders can see the big picture even when dealing with day-to-day challenges.', register: 'neutral', level: 'B2', category: 'thinking' },
  { id: 'i_55', phrase: 'Food for thought', meaning: 'Something that makes you think seriously', example: 'The documentary provided plenty of food for thought about the future of energy.', register: 'neutral', level: 'B2', category: 'thinking' },
  { id: 'i_56', phrase: 'On the same page', meaning: 'In agreement; having a shared understanding', example: 'Before starting the project, it\'s important that all stakeholders are on the same page.', register: 'neutral', level: 'B2', category: 'thinking' },
  { id: 'i_57', phrase: 'In the same boat', meaning: 'In the same difficult situation as others', example: 'During the pandemic, people around the world were in the same boat.', register: 'informal', level: 'B1', category: 'thinking' },
  { id: 'i_58', phrase: 'Shed light on', meaning: 'Clarify or reveal something previously unknown or unclear', example: 'This research sheds new light on the relationship between sleep and academic performance.', register: 'formal', level: 'C1', category: 'thinking', tip: 'IELTS Band 7+ — excellent in academic essays.' },
]

// ─────────────────────────────────────────────────────────────────
// PHRASAL VERBS
// ─────────────────────────────────────────────────────────────────
export const PHRASAL_VERBS: PhrasalVerb[] = [

  // GIVE
  { id: 'pv_01', verb: 'give', phrasal: 'give up', meaning: 'Stop trying to do something; abandon an effort', example: 'Despite repeated setbacks, she refused to give up on her research.', register: 'neutral', level: 'B1', separable: false, tip: 'Very common in IELTS Speaking: "I would never give up on my goals."' },
  { id: 'pv_02', verb: 'give', phrasal: 'give in', meaning: 'Yield to pressure; accept defeat', example: 'After months of protests, the government finally gave in to demands.', register: 'neutral', level: 'B2', separable: false },
  { id: 'pv_03', verb: 'give', phrasal: 'give away', meaning: 'Give for free; reveal something accidentally', example: 'His expression gave away the fact that he already knew the outcome.', register: 'neutral', level: 'B2', separable: true },
  { id: 'pv_04', verb: 'give', phrasal: 'give out', meaning: 'Distribute; stop functioning', example: 'The engine finally gave out after 300,000 kilometres.', register: 'neutral', level: 'B2', separable: true },

  // TAKE
  { id: 'pv_05', verb: 'take', phrasal: 'take on', meaning: 'Accept a responsibility; hire someone', example: 'The company took on 200 new employees following the merger.', register: 'neutral', level: 'B2', separable: true },
  { id: 'pv_06', verb: 'take', phrasal: 'take over', meaning: 'Assume control of something', example: 'Automation is gradually taking over tasks previously performed by humans.', register: 'neutral', level: 'B2', separable: true },
  { id: 'pv_07', verb: 'take', phrasal: 'take up', meaning: 'Start a new hobby; occupy time or space', example: 'She took up yoga after realising she needed to manage stress better.', register: 'neutral', level: 'B1', separable: true },
  { id: 'pv_08', verb: 'take', phrasal: 'take off', meaning: 'Remove clothing; become suddenly successful; (of a plane) depart', example: 'The app took off after a positive review from a major tech influencer.', register: 'neutral', level: 'B1', separable: true },

  // LOOK
  { id: 'pv_09', verb: 'look', phrasal: 'look after', meaning: 'Take care of someone or something', example: 'Governments have a responsibility to look after the welfare of their citizens.', register: 'neutral', level: 'B1', separable: false, tip: 'Can replace "care for" in IELTS Writing for variety.' },
  { id: 'pv_10', verb: 'look', phrasal: 'look into', meaning: 'Investigate or research something', example: 'Authorities are looking into the cause of the data breach.', register: 'neutral', level: 'B2', separable: false },
  { id: 'pv_11', verb: 'look', phrasal: 'look forward to', meaning: 'Anticipate something with pleasure', example: 'I look forward to seeing the results of this innovative programme.', register: 'neutral', level: 'B1', separable: false, tip: 'Always followed by noun or gerund (-ing), never infinitive.' },
  { id: 'pv_12', verb: 'look', phrasal: 'look up to', meaning: 'Admire and respect someone', example: 'Young people often look up to athletes and celebrities as role models.', register: 'neutral', level: 'B2', separable: false },
  { id: 'pv_13', verb: 'look', phrasal: 'look down on', meaning: 'Regard someone as inferior', example: 'Some employers look down on candidates from less prestigious universities.', register: 'neutral', level: 'B2', separable: false },

  // PUT
  { id: 'pv_14', verb: 'put', phrasal: 'put off', meaning: 'Postpone; cause someone to dislike something', example: 'The project was put off due to a lack of funding.', register: 'neutral', level: 'B1', separable: true, tip: 'IELTS: "Governments should not put off addressing climate change."' },
  { id: 'pv_15', verb: 'put', phrasal: 'put up with', meaning: 'Tolerate something unpleasant', example: 'Workers should not have to put up with unsafe conditions in the workplace.', register: 'neutral', level: 'B2', separable: false },
  { id: 'pv_16', verb: 'put', phrasal: 'put forward', meaning: 'Propose or suggest an idea', example: 'Several solutions were put forward during the conference.', register: 'formal', level: 'B2', separable: true },
  { id: 'pv_17', verb: 'put', phrasal: 'put across', meaning: 'Communicate an idea effectively', example: 'The most important skill in presentations is putting your ideas across clearly.', register: 'neutral', level: 'C1', separable: true },

  // COME
  { id: 'pv_18', verb: 'come', phrasal: 'come across', meaning: 'Find or meet by chance; give a particular impression', example: 'She comes across as confident, even in stressful situations.', register: 'neutral', level: 'B2', separable: false, tip: '"Come across as" = give an impression. Very useful in IELTS Speaking.' },
  { id: 'pv_19', verb: 'come', phrasal: 'come up with', meaning: 'Think of an idea or plan', example: 'Engineers came up with an innovative solution to reduce plastic waste.', register: 'neutral', level: 'B2', separable: false },
  { id: 'pv_20', verb: 'come', phrasal: 'come to terms with', meaning: 'Gradually accept a difficult situation', example: 'Many workers struggle to come to terms with job losses caused by automation.', register: 'neutral', level: 'B2', separable: false },
  { id: 'pv_21', verb: 'come', phrasal: 'come about', meaning: 'Happen; occur', example: 'How did such significant social change come about so quickly?', register: 'neutral', level: 'B2', separable: false },

  // CARRY
  { id: 'pv_22', verb: 'carry', phrasal: 'carry out', meaning: 'Execute, perform, or conduct something', example: 'The organisation will carry out a comprehensive survey of public attitudes.', register: 'formal', level: 'B2', separable: true, tip: 'IELTS-safe alternative to "do": "carry out research, carry out a study".' },
  { id: 'pv_23', verb: 'carry', phrasal: 'carry on', meaning: 'Continue doing something', example: 'Despite the economic difficulties, the country must carry on with its reform agenda.', register: 'neutral', level: 'B1', separable: false },
  { id: 'pv_24', verb: 'carry', phrasal: 'get carried away', meaning: 'Become so enthusiastic that you lose control or proportion', example: 'Politicians sometimes get carried away with ambitious promises they cannot keep.', register: 'informal', level: 'B2', separable: false },

  // BREAK
  { id: 'pv_25', verb: 'break', phrasal: 'break down', meaning: 'Stop working; have an emotional collapse; analyse in detail', example: 'The data can be broken down by age, gender, and region.', register: 'neutral', level: 'B2', separable: true, tip: '"Break down" = analyse is very useful in IELTS Writing Task 1.' },
  { id: 'pv_26', verb: 'break', phrasal: 'break through', meaning: 'Make a major discovery or overcome a significant barrier', example: 'Scientists have broken through a major barrier in cancer research.', register: 'neutral', level: 'B2', separable: false },
  { id: 'pv_27', verb: 'break', phrasal: 'break out', meaning: 'Begin suddenly (conflict, disease); escape', example: 'A new variant of the virus broke out in several countries simultaneously.', register: 'neutral', level: 'B2', separable: false },
  { id: 'pv_28', verb: 'break', phrasal: 'break up', meaning: 'End a relationship; divide into smaller parts', example: 'The monopoly was broken up by regulators to encourage competition.', register: 'neutral', level: 'B1', separable: true },

  // RUN
  { id: 'pv_29', verb: 'run', phrasal: 'run out of', meaning: 'Have no more of something remaining', example: 'At current consumption rates, fossil fuel reserves will run out within decades.', register: 'neutral', level: 'B1', separable: false },
  { id: 'pv_30', verb: 'run', phrasal: 'run into', meaning: 'Meet someone by chance; encounter a problem', example: 'The project ran into serious difficulties when the lead researcher left.', register: 'neutral', level: 'B2', separable: false },
  { id: 'pv_31', verb: 'run', phrasal: 'run away from', meaning: 'Avoid dealing with a problem or responsibility', example: 'Governments that run away from difficult decisions lose public credibility.', register: 'neutral', level: 'B2', separable: false },

  // GET
  { id: 'pv_32', verb: 'get', phrasal: 'get over', meaning: 'Recover from something; overcome an obstacle', example: 'It took several years to get over the economic effects of the pandemic.', register: 'neutral', level: 'B1', separable: false },
  { id: 'pv_33', verb: 'get', phrasal: 'get across', meaning: 'Successfully communicate an idea', example: 'A good teacher gets complex ideas across in a way that students can understand.', register: 'neutral', level: 'B2', separable: true },
  { id: 'pv_34', verb: 'get', phrasal: 'get away with', meaning: 'Do something wrong without facing punishment', example: 'Large corporations often get away with environmental violations due to inadequate enforcement.', register: 'neutral', level: 'B2', separable: false },
  { id: 'pv_35', verb: 'get', phrasal: 'get along with', meaning: 'Have a harmonious relationship with someone', example: 'The ability to get along with diverse colleagues is increasingly valued by employers.', register: 'neutral', level: 'B1', separable: false },

  // SET
  { id: 'pv_36', verb: 'set', phrasal: 'set up', meaning: 'Establish or arrange something', example: 'The government set up a committee to investigate the causes of the financial crisis.', register: 'neutral', level: 'B2', separable: true },
  { id: 'pv_37', verb: 'set', phrasal: 'set back', meaning: 'Delay or hinder the progress of something', example: 'The pandemic set back progress on sustainable development goals by years.', register: 'neutral', level: 'B2', separable: true, tip: 'Also a noun: "a major setback" — useful in IELTS.' },
  { id: 'pv_38', verb: 'set', phrasal: 'set out', meaning: 'Begin a journey or task with a clear intention', example: 'This paper sets out to examine the relationship between inequality and educational outcomes.', register: 'formal', level: 'C1', separable: false },

  // BRING
  { id: 'pv_39', verb: 'bring', phrasal: 'bring about', meaning: 'Cause something to happen', example: 'Only fundamental policy changes can bring about the transformation needed.', register: 'formal', level: 'B2', separable: true, tip: 'IELTS Band 7 alternative to "cause" or "lead to".' },
  { id: 'pv_40', verb: 'bring', phrasal: 'bring up', meaning: 'Raise a child; raise a topic in conversation', example: 'The issue of funding was brought up several times during the summit.', register: 'neutral', level: 'B1', separable: true },
  { id: 'pv_41', verb: 'bring', phrasal: 'bring forward', meaning: 'Move something to an earlier date; propose', example: 'In light of recent events, the meeting has been brought forward to Tuesday.', register: 'formal', level: 'B2', separable: true },

  // WORK
  { id: 'pv_42', verb: 'work', phrasal: 'work out', meaning: 'Exercise; solve a problem; happen in a certain way', example: 'If the negotiations work out, both sides will benefit significantly.', register: 'neutral', level: 'B1', separable: true },
  { id: 'pv_43', verb: 'work', phrasal: 'work towards', meaning: 'Make progress toward a goal', example: 'All nations must work towards a global agreement on carbon emissions.', register: 'neutral', level: 'B2', separable: false },

  // TURN
  { id: 'pv_44', verb: 'turn', phrasal: 'turn down', meaning: 'Refuse an offer; reduce the volume', example: 'The proposal was turned down by the board due to insufficient evidence.', register: 'neutral', level: 'B1', separable: true },
  { id: 'pv_45', verb: 'turn', phrasal: 'turn out', meaning: 'Result in a certain way; prove to be', example: 'The programme turned out to be far more effective than initially anticipated.', register: 'neutral', level: 'B2', separable: false },
  { id: 'pv_46', verb: 'turn', phrasal: 'turn up', meaning: 'Appear or arrive; increase the volume', example: 'New evidence turned up that completely changed the investigation\'s direction.', register: 'neutral', level: 'B2', separable: true },

  // CALL
  { id: 'pv_47', verb: 'call', phrasal: 'call off', meaning: 'Cancel something that was planned', example: 'The summit was called off at the last minute due to security concerns.', register: 'neutral', level: 'B2', separable: true },
  { id: 'pv_48', verb: 'call', phrasal: 'call for', meaning: 'Demand or require something', example: 'The crisis calls for immediate international cooperation.', register: 'formal', level: 'B2', separable: false, tip: '"Calls for" is excellent academic vocabulary for IELTS Writing.' },
  { id: 'pv_49', verb: 'call', phrasal: 'call into question', meaning: 'Cause doubt about something; challenge', example: 'These findings call into question the validity of previous research.', register: 'formal', level: 'C1', separable: false },

  // DRAW
  { id: 'pv_50', verb: 'draw', phrasal: 'draw on', meaning: 'Use something as a resource or inspiration', example: 'Good writers draw on their own experiences to create authentic narratives.', register: 'formal', level: 'C1', separable: false, tip: 'Excellent for academic writing: "This essay draws on recent studies..."' },
  { id: 'pv_51', verb: 'draw', phrasal: 'draw up', meaning: 'Prepare a document or plan in detail', example: 'A new international treaty on climate is being drawn up by negotiators.', register: 'formal', level: 'C1', separable: true },
  { id: 'pv_52', verb: 'draw', phrasal: 'draw a conclusion', meaning: 'Reach a decision based on available evidence', example: 'From the data, we can draw the conclusion that income inequality is rising.', register: 'formal', level: 'B2', separable: false },
]
