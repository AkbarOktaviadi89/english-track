export type ListeningSection = 1 | 2 | 3 | 4
export type QuestionType = 'form_completion' | 'note_completion' | 'multiple_choice' | 'matching'

export interface ScriptLine {
  speaker: string   // "A", "B", "C", "Narrator"
  text: string
  pauseMs?: number  // silence after this line (default 400ms)
}

export interface ListeningQuestion {
  id: string
  number: number
  type: QuestionType
  question: string
  options?: string[]   // for multiple_choice and matching
  answer: string       // exact string to match (case-insensitive)
  explanation: string
  maxWords?: number    // for completion tasks
}

export interface ListeningTrack {
  id: string
  section: ListeningSection
  title: string
  topic: string
  context: string        // brief situation description shown before audio
  readingTimeSecs: number
  script: ScriptLine[]
  questions: ListeningQuestion[]
  speakerLabels: Record<string, string>  // "A" → "Customer", "B" → "Receptionist"
}

// Speaker voice profiles (applied via Web Speech API)
export const SPEAKER_PROFILES: Record<string, { rate: number; pitch: number }> = {
  A:        { rate: 1.0,  pitch: 1.15 },
  B:        { rate: 0.97, pitch: 0.85 },
  C:        { rate: 1.02, pitch: 1.05 },
  D:        { rate: 0.95, pitch: 0.80 },
  Narrator: { rate: 0.88, pitch: 1.00 },
}

export const LISTENING_TRACKS: ListeningTrack[] = [

  // ─── Section 1 ────────────────────────────────────────────────
  // Conversation · everyday social/transactional

  {
    id: 's1_gym',
    section: 1,
    title: 'Joining a Fitness Centre',
    topic: 'Everyday Life',
    context: 'A woman is calling a fitness centre to enquire about membership options. Listen and complete the membership form.',
    readingTimeSecs: 30,
    speakerLabels: { A: 'Receptionist', B: 'Customer (Sarah)', Narrator: 'Narrator' },
    questions: [
      {
        id: 's1g_1', number: 1, type: 'form_completion', maxWords: 2,
        question: 'Surname: ___',
        answer: 'Whitfield',
        explanation: 'Sarah says "It\'s Whitfield — W-H-I-T-F-I-E-L-D."',
      },
      {
        id: 's1g_2', number: 2, type: 'form_completion', maxWords: 2,
        question: 'Membership type: ___ membership',
        answer: 'premium',
        explanation: 'Sarah initially asks about standard but then chooses premium after hearing about the pool access.',
      },
      {
        id: 's1g_3', number: 3, type: 'form_completion', maxWords: 2,
        question: 'Payment: monthly by ___ order',
        answer: 'standing',
        explanation: 'The receptionist confirms "we\'ll set that up as a standing order."',
      },
      {
        id: 's1g_4', number: 4, type: 'form_completion', maxWords: 3,
        question: 'Start date: the ___ of next month',
        answer: 'first',
        explanation: 'Sarah asks to start on the first of next month, not the fifteenth as she initially considered.',
      },
      {
        id: 's1g_5', number: 5, type: 'form_completion', maxWords: 2,
        question: 'Locker number: ___',
        answer: '47',
        explanation: 'The receptionist assigns locker 47, not 74 — she corrects herself: "four-seven, not seven-four."',
      },
      {
        id: 's1g_6', number: 6, type: 'multiple_choice',
        question: 'What does Sarah say about the car park?',
        options: [
          'She will use it every visit',
          'She needs a permit to use it',
          'She will not use it as she cycles to the centre',
          'She was not aware the centre had a car park',
        ],
        answer: 'She will not use it as she cycles to the centre',
        explanation: 'Sarah says "Actually, I cycle in, so I won\'t need the car park at all."',
      },
    ],
    script: [
      { speaker: 'Narrator', text: 'Section 1. You will hear a woman calling a fitness centre to enquire about membership. First, you have some time to look at Questions 1 to 6.', pauseMs: 3000 },
      { speaker: 'Narrator', text: 'Now listen carefully and answer Questions 1 to 6.', pauseMs: 1000 },
      { speaker: 'A', text: 'Good morning, Riverside Fitness Centre, how can I help you?' },
      { speaker: 'B', text: 'Oh, hello. I\'d like to ask about joining the centre, please.' },
      { speaker: 'A', text: 'Of course! I can take your details now if you like. Could I start with your surname?' },
      { speaker: 'B', text: 'Yes, it\'s Whitfield — W-H-I-T-F-I-E-L-D.' },
      { speaker: 'A', text: 'Whitfield, got it. And which membership were you interested in? We have standard, which gives you gym and class access, or premium, which also includes the swimming pool and sauna.' },
      { speaker: 'B', text: 'I was thinking about standard, actually. But — does the premium include the pool at all times, or just certain hours?' },
      { speaker: 'A', text: 'Full pool access, seven days a week, from six in the morning until nine at night.' },
      { speaker: 'B', text: 'In that case, I think I\'d rather go for the premium. I do like a swim after work.' },
      { speaker: 'A', text: 'Excellent choice. Now, how would you prefer to pay? We offer monthly direct debit or an annual upfront payment.' },
      { speaker: 'B', text: 'Monthly is easier for me. Can I do that by standing order from my bank?' },
      { speaker: 'A', text: 'Absolutely, we\'ll set that up as a standing order. When would you like to start? We can begin from any date.' },
      { speaker: 'B', text: 'I was thinking the fifteenth — but actually, it would be simpler to start on the first of next month. Can I do that?' },
      { speaker: 'A', text: 'No problem at all. The first it is. Now, let me assign you a locker. You\'ll have locker... forty-seven. That\'s four-seven, not seven-four — I always mix those up.', pauseMs: 600 },
      { speaker: 'B', text: 'Four-seven, perfect. And is there parking at the centre? I didn\'t see a car park when I came past.' },
      { speaker: 'A', text: 'There is — it\'s round the back. Parking is included with premium membership, so you wouldn\'t need to pay separately.' },
      { speaker: 'B', text: 'Actually, I cycle in, so I won\'t need the car park at all. But good to know. Are there secure bike racks?' },
      { speaker: 'A', text: 'Yes, covered bike racks right by the main entrance. Anything else I can help with?' },
      { speaker: 'B', text: 'I think that covers everything. Thank you so much.' },
      { speaker: 'A', text: 'Our pleasure. We look forward to seeing you on the first!' },
      { speaker: 'Narrator', text: 'That is the end of Section 1.', pauseMs: 1000 },
    ],
  },

  {
    id: 's1_library',
    section: 1,
    title: 'University Library Enquiry',
    topic: 'Education',
    context: 'A student is speaking with a library assistant about borrowing services and facilities. Listen and complete the notes.',
    readingTimeSecs: 30,
    speakerLabels: { A: 'Library Assistant', B: 'Student (James)', Narrator: 'Narrator' },
    questions: [
      {
        id: 's1l_1', number: 1, type: 'note_completion', maxWords: 2,
        question: 'Standard loan period: ___ weeks',
        answer: '3',
        explanation: 'The assistant says "standard loans are three weeks, renewable once online."',
      },
      {
        id: 's1l_2', number: 2, type: 'note_completion', maxWords: 2,
        question: 'Maximum books at one time: ___',
        answer: '12',
        explanation: '"You can have up to twelve items on loan at any one time."',
      },
      {
        id: 's1l_3', number: 3, type: 'note_completion', maxWords: 3,
        question: 'Interlibrary loan fee: ___ per item',
        answer: '£2.50',
        explanation: 'The assistant says the fee is "two pounds fifty per item" — not two pounds as James first thought.',
      },
      {
        id: 's1l_4', number: 4, type: 'multiple_choice',
        question: 'Which room does James need for group study?',
        options: [
          'Room 14 on the ground floor',
          'Room 4 on the first floor',
          'Room 40 on the second floor',
          'Room 14 on the second floor',
        ],
        answer: 'Room 14 on the ground floor',
        explanation: '"Group study rooms are on the ground floor — room numbers begin with G, so it\'s G14, not just 14."',
      },
      {
        id: 's1l_5', number: 5, type: 'note_completion', maxWords: 2,
        question: 'Printing cost per page (colour): ___ pence',
        answer: '20',
        explanation: '"Colour printing is twenty pence a page, black and white is five."',
      },
      {
        id: 's1l_6', number: 6, type: 'multiple_choice',
        question: 'What does the assistant say about silent study areas?',
        options: [
          'They are available on every floor',
          'They are only on the third floor',
          'Phones must be switched off completely',
          'Food and hot drinks are permitted',
        ],
        answer: 'They are only on the third floor',
        explanation: '"Strict silent study is the third floor only — you\'ll see the signs."',
      },
    ],
    script: [
      { speaker: 'Narrator', text: 'Section 1. You will hear a student speaking with a university library assistant. First, look at Questions 1 to 6.', pauseMs: 3000 },
      { speaker: 'Narrator', text: 'Now listen and answer the questions.', pauseMs: 1000 },
      { speaker: 'B', text: 'Excuse me — I\'ve just enrolled and I\'m not sure how the library loans work.' },
      { speaker: 'A', text: 'Happy to help. So, standard loans are three weeks, renewable once online through your student portal — you don\'t need to come in.' },
      { speaker: 'B', text: 'And how many books can I have out at once?' },
      { speaker: 'A', text: 'Up to twelve items on loan at any one time. That includes books, DVDs, and journal issues.' },
      { speaker: 'B', text: 'What if the book I need isn\'t here? Can you get it from another library?' },
      { speaker: 'A', text: 'Yes, we offer an interlibrary loan service. There is a small charge — two pounds fifty per item.' },
      { speaker: 'B', text: 'Oh, I thought it was two pounds flat.' },
      { speaker: 'A', text: 'No, it\'s two fifty, I\'m afraid. It covers the postage from the lending institution.' },
      { speaker: 'B', text: 'Fair enough. I also need a room to meet with my project group — is there somewhere we can book?' },
      { speaker: 'A', text: 'Group study rooms are on the ground floor. They\'re labelled with a G prefix, so it would be G14, for example — not just room 14. You book them online up to a week in advance.' },
      { speaker: 'B', text: 'Great. And what about printing? I need to print quite a lot this term.' },
      { speaker: 'A', text: 'Colour printing is twenty pence a page, black and white is five pence. You top up your print credit at the self-service machines by the entrance.' },
      { speaker: 'B', text: 'And are there quiet areas? I find the ground floor quite noisy.' },
      { speaker: 'A', text: 'Strict silent study is the third floor only — you\'ll see the signs. Phones on silent, no food. The other floors are quiet but you can have a whispered conversation.' },
      { speaker: 'B', text: 'That\'s exactly what I needed to know. Thank you.' },
      { speaker: 'Narrator', text: 'That is the end of Section 1.', pauseMs: 1000 },
    ],
  },

  // ─── Section 2 ────────────────────────────────────────────────
  // Monologue · everyday social context

  {
    id: 's2_tour',
    section: 2,
    title: 'City Walking Tour Introduction',
    topic: 'Tourism & Culture',
    context: 'A tour guide is introducing a walking tour of the city centre to a group of visitors. Listen and answer the questions.',
    readingTimeSecs: 30,
    speakerLabels: { A: 'Tour Guide', Narrator: 'Narrator' },
    questions: [
      {
        id: 's2t_1', number: 1, type: 'multiple_choice',
        question: 'How long does the walking tour last?',
        options: [
          'One and a half hours',
          'Two hours',
          'Two and a half hours',
          'Three hours',
        ],
        answer: 'Two hours',
        explanation: '"The tour takes exactly two hours — we\'ll be back here by half past eleven."',
      },
      {
        id: 's2t_2', number: 2, type: 'note_completion', maxWords: 2,
        question: 'The oldest building on the tour is the ___ Gate.',
        answer: 'Roman',
        explanation: '"Our first stop is the Roman Gate, the oldest surviving structure in the city, dating from the second century."',
      },
      {
        id: 's2t_3', number: 3, type: 'note_completion', maxWords: 3,
        question: 'The market was originally built for selling ___.',
        answer: 'wool and cloth',
        explanation: '"The market hall was built in 1847, originally for the sale of wool and cloth."',
      },
      {
        id: 's2t_4', number: 4, type: 'multiple_choice',
        question: 'What does the guide say about photography?',
        options: [
          'Photography is banned inside all buildings',
          'Flash photography is not allowed inside the cathedral',
          'A permit is required for professional photography',
          'Visitors may not photograph other tourists',
        ],
        answer: 'Flash photography is not allowed inside the cathedral',
        explanation: '"Inside the cathedral, please avoid using flash photography — it damages the medieval pigments."',
      },
      {
        id: 's2t_5', number: 5, type: 'note_completion', maxWords: 2,
        question: 'Free Wi-Fi password: ___',
        answer: 'CITYGUIDE',
        explanation: '"The password is CITYGUIDE — all one word, all capitals."',
      },
      {
        id: 's2t_6', number: 6, type: 'multiple_choice',
        question: 'Where should visitors go if they get separated from the group?',
        options: [
          'Return to the starting point',
          'Wait at the nearest landmark',
          'Phone the tour office number',
          'Proceed to the final stop',
        ],
        answer: 'Wait at the nearest landmark',
        explanation: '"If you do get separated, please wait at the nearest named landmark — do not try to find us."',
      },
    ],
    script: [
      { speaker: 'Narrator', text: 'Section 2. You will hear a tour guide introducing a city walking tour. First, look at Questions 1 to 6.', pauseMs: 3000 },
      { speaker: 'Narrator', text: 'Now listen carefully.', pauseMs: 1000 },
      { speaker: 'A', text: 'Good morning everyone, and welcome to Hartley City Walks! My name is Julia and I\'ll be your guide today. Before we set off, just a few quick points to make sure we all have a great experience.', pauseMs: 400 },
      { speaker: 'A', text: 'The tour takes exactly two hours — we\'ll be back here, at the fountain, by half past eleven. We\'ll be covering about four kilometres on foot, so comfortable shoes are definitely recommended.', pauseMs: 400 },
      { speaker: 'A', text: 'Our first stop is the Roman Gate, just five minutes from here — the oldest surviving structure in the city, dating from the second century. After that, we\'ll pass through the medieval quarter before reaching the cathedral.', pauseMs: 400 },
      { speaker: 'A', text: 'Inside the cathedral, please avoid using flash photography — it damages the medieval pigments in the frescoes. You\'re very welcome to take photos otherwise, just with flash off.', pauseMs: 400 },
      { speaker: 'A', text: 'From the cathedral we\'ll walk down to the market hall, which was built in 1847, originally for the sale of wool and cloth. These days it\'s a food market, and we\'ll have a short break there so you can grab a coffee or a snack.', pauseMs: 400 },
      { speaker: 'A', text: 'A few practical things: you\'ll find today\'s route on the city\'s app — download it now if you haven\'t already. For free Wi-Fi throughout the city centre, the password is CITYGUIDE — all one word, all capitals.', pauseMs: 400 },
      { speaker: 'A', text: 'And finally — if for any reason you get separated from the group, please do not try to find us. We move at different speeds and you\'ll just end up getting more lost. Instead, wait at the nearest named landmark and call me on the number on your information sheet. Someone will come to you.', pauseMs: 400 },
      { speaker: 'A', text: 'Right — any questions before we begin? No? Wonderful. Follow me, then!' },
      { speaker: 'Narrator', text: 'That is the end of Section 2.', pauseMs: 1000 },
    ],
  },

  // ─── Section 3 ────────────────────────────────────────────────
  // Conversation · academic / training context

  {
    id: 's3_research',
    section: 3,
    title: 'Research Project Discussion',
    topic: 'Academic',
    context: 'Two students, Maya and Tom, are meeting with their supervisor, Dr. Chen, to discuss their research project on urban transport. Listen and answer the questions.',
    readingTimeSecs: 35,
    speakerLabels: { A: 'Dr. Chen (Supervisor)', B: 'Maya', C: 'Tom', Narrator: 'Narrator' },
    questions: [
      {
        id: 's3r_1', number: 1, type: 'multiple_choice',
        question: 'What does Dr. Chen say is the main weakness of their current methodology?',
        options: [
          'The sample size is too small',
          'The survey questions are leading',
          'They have only used quantitative data',
          'The timeframe of data collection is too short',
        ],
        answer: 'They have only used quantitative data',
        explanation: '"You\'ve relied entirely on quantitative data — numbers without context. You\'re missing the lived experience of commuters."',
      },
      {
        id: 's3r_2', number: 2, type: 'multiple_choice',
        question: 'What does Maya suggest as a solution to the methodology problem?',
        options: [
          'Extending the survey period',
          'Conducting follow-up interviews',
          'Increasing the sample size',
          'Using a different statistical model',
        ],
        answer: 'Conducting follow-up interviews',
        explanation: '"Could we do follow-up interviews with a subset of our survey respondents?"',
      },
      {
        id: 's3r_3', number: 3, type: 'note_completion', maxWords: 3,
        question: 'Dr. Chen recommends reading the work of ___.',
        answer: 'Professor Lund',
        explanation: '"Have a look at Professor Lund\'s work on mixed-methods transport research — it\'s very applicable."',
      },
      {
        id: 's3r_4', number: 4, type: 'multiple_choice',
        question: 'What does Tom say about their deadline?',
        options: [
          'He is confident they will meet it',
          'He wants to request an extension',
          'He thinks they need to cut one section',
          'He is worried the interviews will take too long',
        ],
        answer: 'He is worried the interviews will take too long',
        explanation: '"My concern is the timeline. If we add interviews now, I\'m not sure we can finish by the fifteenth."',
      },
      {
        id: 's3r_5', number: 5, type: 'note_completion', maxWords: 2,
        question: 'The draft must be submitted by the ___.',
        answer: '22nd',
        explanation: '"The department has agreed to move your submission deadline to the twenty-second."',
      },
      {
        id: 's3r_6', number: 6, type: 'multiple_choice',
        question: 'What does Dr. Chen say about the literature review?',
        options: [
          'It is too long and should be shortened',
          'It needs more recent sources',
          'It is well-structured and needs no changes',
          'It should be moved to an appendix',
        ],
        answer: 'It needs more recent sources',
        explanation: '"Your literature review is solid, but I\'d like to see more sources from the last five years — the field has moved quickly."',
      },
    ],
    script: [
      { speaker: 'Narrator', text: 'Section 3. You will hear two students discussing their research project with their university supervisor. First, look at Questions 1 to 6.', pauseMs: 3500 },
      { speaker: 'Narrator', text: 'Now listen carefully.', pauseMs: 1000 },
      { speaker: 'A', text: 'Come in, Maya, Tom. Thanks for sending the draft over. I\'ve had a chance to read it properly. Overall, there\'s some strong work here, but I do have some concerns I want to discuss.' },
      { speaker: 'B', text: 'Of course. We\'re keen to hear your feedback.' },
      { speaker: 'A', text: 'My main concern is methodological. You\'ve relied entirely on quantitative data — numbers without context. You\'ve surveyed five hundred commuters about journey times and satisfaction scores, which is valuable. But you\'re missing the lived experience of commuters. The why behind the numbers.' },
      { speaker: 'C', text: 'I see what you mean. We did discuss qualitative methods early on, but we felt the survey would give us broader coverage.' },
      { speaker: 'A', text: 'Coverage isn\'t the only goal. The richness of your findings is limited when everything is a number.' },
      { speaker: 'B', text: 'Could we address that now? We still have time before submission. Could we do follow-up interviews with a subset of our survey respondents — maybe twenty or thirty people?' },
      { speaker: 'A', text: 'That\'s exactly the kind of mixed-methods approach I\'d recommend. Have a look at Professor Lund\'s work on mixed-methods transport research — it\'s very applicable to what you\'re doing.', pauseMs: 500 },
      { speaker: 'C', text: 'My concern is the timeline. If we add interviews now, I\'m not sure we can finish by the fifteenth.' },
      { speaker: 'A', text: 'I\'ve spoken to the department about that, actually. Given the scope of your project, they\'ve agreed to move your submission deadline to the twenty-second. That gives you an extra week.' },
      { speaker: 'B', text: 'Oh, that\'s a relief. Thank you.' },
      { speaker: 'A', text: 'Now, on the literature review — it\'s well-structured, and your argument develops logically. But I\'d like to see more sources from the last five years. The field has moved quickly, particularly around autonomous vehicles and smart transit data.' },
      { speaker: 'C', text: 'We found it hard to access some of the newer journals. Is there a way to get access through the library?' },
      { speaker: 'A', text: 'I\'ll email the library liaison — she can usually sort out temporary access. That shouldn\'t hold you up.' },
      { speaker: 'B', text: 'This has been really helpful. We have a much clearer picture of what needs to change.' },
      { speaker: 'A', text: 'Good. Send me a revised outline by Friday and we\'ll check you\'re on track before you do the interviews.' },
      { speaker: 'Narrator', text: 'That is the end of Section 3.', pauseMs: 1000 },
    ],
  },

  // ─── Section 4 ────────────────────────────────────────────────
  // Academic monologue · lecture

  {
    id: 's4_sleep',
    section: 4,
    title: 'The Science of Sleep',
    topic: 'Psychology & Health',
    context: 'You will hear part of a university lecture on the psychology of sleep and its effects on cognitive performance. Listen and complete the notes.',
    readingTimeSecs: 40,
    speakerLabels: { A: 'Lecturer (Dr. Morris)', Narrator: 'Narrator' },
    questions: [
      {
        id: 's4s_1', number: 1, type: 'note_completion', maxWords: 2,
        question: 'Adults require between ___ hours of sleep per night.',
        answer: '7 and 9',
        explanation: '"The recommended sleep duration for adults is between seven and nine hours per night."',
      },
      {
        id: 's4s_2', number: 2, type: 'note_completion', maxWords: 3,
        question: 'REM sleep is essential for ___ consolidation.',
        answer: 'memory',
        explanation: '"REM sleep — Rapid Eye Movement — is particularly important for memory consolidation."',
      },
      {
        id: 's4s_3', number: 3, type: 'multiple_choice',
        question: 'What does Dr. Morris say about the effect of sleep deprivation on decision-making?',
        options: [
          'It only affects complex decisions, not simple ones',
          'It impairs both speed and accuracy equally',
          'People overestimate their own impairment',
          'People underestimate how impaired they are',
        ],
        answer: 'People underestimate how impaired they are',
        explanation: '"Crucially, sleep-deprived individuals consistently underestimate their own impairment — they feel fine, but their performance data tells a different story."',
      },
      {
        id: 's4s_4', number: 4, type: 'note_completion', maxWords: 2,
        question: 'Cortisol levels peak at approximately ___ in the morning.',
        answer: '8 am',
        explanation: '"Cortisol, the primary stress hormone, typically peaks at around eight in the morning."',
      },
      {
        id: 's4s_5', number: 5, type: 'multiple_choice',
        question: 'Which group does Dr. Morris say is most affected by chronic sleep deprivation?',
        options: [
          'Elderly people over seventy',
          'Adolescents and young adults',
          'Shift workers in healthcare',
          'University students during examination periods',
        ],
        answer: 'Adolescents and young adults',
        explanation: '"The group most severely affected is adolescents and young adults, whose circadian rhythms are biologically shifted later."',
      },
      {
        id: 's4s_6', number: 6, type: 'note_completion', maxWords: 3,
        question: 'Blue light suppresses the release of ___.',
        answer: 'melatonin',
        explanation: '"Blue light from screens suppresses the release of melatonin — the hormone that signals to the brain that it is time to sleep."',
      },
      {
        id: 's4s_7', number: 7, type: 'multiple_choice',
        question: 'What is Dr. Morris\'s view on napping?',
        options: [
          'Naps are harmful to night-time sleep quality',
          'Short naps can improve afternoon performance',
          'Naps should last at least one hour to be effective',
          'Only people over fifty should take naps',
        ],
        answer: 'Short naps can improve afternoon performance',
        explanation: '"A short nap — between ten and twenty minutes — taken before three in the afternoon can restore alertness and improve performance for the rest of the day."',
      },
      {
        id: 's4s_8', number: 8, type: 'note_completion', maxWords: 3,
        question: 'Sleep-deprived individuals show reduced activity in the ___ cortex.',
        answer: 'prefrontal',
        explanation: '"Brain imaging studies show significantly reduced activity in the prefrontal cortex — the region responsible for rational thought and impulse control."',
      },
    ],
    script: [
      { speaker: 'Narrator', text: 'Section 4. You will hear part of a university lecture on the psychology of sleep. First, look at Questions 1 to 8.', pauseMs: 4000 },
      { speaker: 'Narrator', text: 'Now listen carefully.', pauseMs: 1000 },
      { speaker: 'A', text: 'Good afternoon. Today we\'re looking at sleep — specifically, what happens when we don\'t get enough of it, and why that matters far more than most people realise.', pauseMs: 400 },
      { speaker: 'A', text: 'Let\'s begin with the basics. The recommended sleep duration for adults is between seven and nine hours per night. This is not a cultural preference or a historical norm — it\'s a biological requirement shaped by millions of years of evolution.', pauseMs: 400 },
      { speaker: 'A', text: 'Sleep has several distinct stages, and each serves a different function. Deep slow-wave sleep is when the body repairs tissue and consolidates physical learning. REM sleep — Rapid Eye Movement — is particularly important for memory consolidation. During REM, the brain replays the day\'s experiences, moving information from short-term working memory into long-term storage.', pauseMs: 400 },
      { speaker: 'A', text: 'Now, what happens when we\'re sleep-deprived? The cognitive effects are well-documented and frankly alarming. Reaction times slow. Attention lapses increase. Decision-making becomes impaired. But here\'s the critical point: sleep-deprived individuals consistently underestimate their own impairment. They feel fine. They\'ll tell you they\'re managing. But their performance data tells a different story.', pauseMs: 400 },
      { speaker: 'A', text: 'There\'s also a hormonal dimension. Cortisol, the primary stress hormone, typically peaks at around eight in the morning — this is part of the mechanism that wakes us up. Insufficient sleep disrupts this cortisol rhythm, which has knock-on effects for mood, immune function, and metabolic regulation.', pauseMs: 400 },
      { speaker: 'A', text: 'The group most severely affected by chronic sleep deprivation is adolescents and young adults. This isn\'t simply laziness or poor discipline — their circadian rhythms are biologically shifted later, meaning their bodies naturally want to sleep and wake later than older adults. Early school and university start times work directly against this biological reality.', pauseMs: 400 },
      { speaker: 'A', text: 'A major contributor to modern sleep problems is exposure to artificial light, particularly blue light from screens. Blue light suppresses the release of melatonin — the hormone that signals to the brain that it is time to sleep. Using a phone or laptop in the hour before bed can delay sleep onset by forty to ninety minutes.', pauseMs: 400 },
      { speaker: 'A', text: 'What about strategies to manage daytime sleepiness? A short nap — between ten and twenty minutes — taken before three in the afternoon can restore alertness and improve performance for the rest of the day. Longer naps, or naps taken later, risk disrupting night-time sleep, so timing matters.', pauseMs: 400 },
      { speaker: 'A', text: 'Finally, for those of you interested in the neuroscience: brain imaging studies of sleep-deprived subjects show significantly reduced activity in the prefrontal cortex — the region responsible for rational thought, planning, and impulse control. Essentially, your brain on insufficient sleep behaves more like a teenage brain, in the clinical sense — more reactive, less considered.', pauseMs: 400 },
      { speaker: 'A', text: 'We\'ll pick this up next week when we look at sleep disorders specifically. For now, the key takeaway: sleep is not optional. It\'s infrastructure.', pauseMs: 300 },
      { speaker: 'Narrator', text: 'That is the end of Section 4.', pauseMs: 1000 },
    ],
  },

]
