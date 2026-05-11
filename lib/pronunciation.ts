// ─── IPA Sounds ──────────────────────────────────────────────

export interface IPASound {
  symbol: string
  type: 'vowel_short' | 'vowel_long' | 'diphthong' | 'consonant_voiced' | 'consonant_unvoiced' | 'other'
  exampleWord: string
  exampleIPA: string
  description: string   // where/how mouth is positioned
  tip: string           // learner tip
}

export const IPA_SOUNDS: IPASound[] = [
  // Short vowels
  { symbol: 'ɪ', type: 'vowel_short',    exampleWord: 'sit',   exampleIPA: '/sɪt/',   description: 'High front, mouth slightly open', tip: 'Shorter and more relaxed than /iː/. Common in -tion, -ing endings.' },
  { symbol: 'e', type: 'vowel_short',    exampleWord: 'bed',   exampleIPA: '/bed/',   description: 'Mid front', tip: 'Like "ay" but cut short. Do not add a "y" glide at the end.' },
  { symbol: 'æ', type: 'vowel_short',    exampleWord: 'cat',   exampleIPA: '/kæt/',   description: 'Low front, mouth wide open', tip: 'Wider mouth than /e/. Key difference between "hat" and "het".' },
  { symbol: 'ʌ', type: 'vowel_short',    exampleWord: 'cup',   exampleIPA: '/kʌp/',   description: 'Mid central, neutral mouth', tip: 'Very common in stressed syllables. "up", "love", "come".' },
  { symbol: 'ɒ', type: 'vowel_short',    exampleWord: 'hot',   exampleIPA: '/hɒt/',   description: 'Low back, lips rounded', tip: 'British English. Lips rounded but jaw dropped wide.' },
  { symbol: 'ʊ', type: 'vowel_short',    exampleWord: 'book',  exampleIPA: '/bʊk/',   description: 'High back, lips loosely rounded', tip: 'Shorter and more relaxed than /uː/. "full", "put", "could".' },
  { symbol: 'ə', type: 'vowel_short',    exampleWord: 'about', exampleIPA: '/əˈbaʊt/',description: 'Mid central (schwa), completely neutral', tip: 'Most common sound in English. Every unstressed vowel can become /ə/.' },

  // Long vowels
  { symbol: 'iː', type: 'vowel_long',   exampleWord: 'see',   exampleIPA: '/siː/',   description: 'High front, lips spread', tip: 'Longer than /ɪ/. "eat", "people", "believe".' },
  { symbol: 'ɑː', type: 'vowel_long',   exampleWord: 'car',   exampleIPA: '/kɑː/',   description: 'Low back, mouth wide open', tip: 'Open throat. "father", "start", "dance" (British).' },
  { symbol: 'ɔː', type: 'vowel_long',   exampleWord: 'law',   exampleIPA: '/lɔː/',   description: 'Mid back, lips rounded', tip: '"thought", "more", "door", "four".' },
  { symbol: 'uː', type: 'vowel_long',   exampleWord: 'blue',  exampleIPA: '/bluː/',  description: 'High back, lips firmly rounded', tip: '"food", "through", "move". Longer than /ʊ/.' },
  { symbol: 'ɜː', type: 'vowel_long',   exampleWord: 'bird',  exampleIPA: '/bɜːd/',  description: 'Mid central, lips neutral', tip: 'Very common in -er, -ir, -ur spellings. "word", "learn", "nurse".' },

  // Diphthongs
  { symbol: 'eɪ', type: 'diphthong',    exampleWord: 'day',   exampleIPA: '/deɪ/',   description: 'Starts at /e/, glides to /ɪ/', tip: '"name", "say", "great". The key is the glide movement.' },
  { symbol: 'aɪ', type: 'diphthong',    exampleWord: 'my',    exampleIPA: '/maɪ/',   description: 'Starts at /a/, glides to /ɪ/', tip: '"time", "buy", "high". Wide mouth, then closing.' },
  { symbol: 'ɔɪ', type: 'diphthong',    exampleWord: 'boy',   exampleIPA: '/bɔɪ/',   description: 'Starts at /ɔ/, glides to /ɪ/', tip: '"choice", "voice", "noise".' },
  { symbol: 'əʊ', type: 'diphthong',    exampleWord: 'go',    exampleIPA: '/ɡəʊ/',   description: 'Starts at /ə/, glides to /ʊ/', tip: '"home", "know", "open". British English /oʊ/ in US.' },
  { symbol: 'aʊ', type: 'diphthong',    exampleWord: 'now',   exampleIPA: '/naʊ/',   description: 'Starts at /a/, glides to /ʊ/', tip: '"house", "out", "down". Wide mouth then rounding.' },
  { symbol: 'ɪə', type: 'diphthong',    exampleWord: 'near',  exampleIPA: '/nɪə/',   description: 'Starts at /ɪ/, glides to /ə/', tip: '"here", "ear", "idea".' },
  { symbol: 'eə', type: 'diphthong',    exampleWord: 'hair',  exampleIPA: '/heə/',   description: 'Starts at /e/, glides to /ə/', tip: '"there", "wear", "care".' },
  { symbol: 'ʊə', type: 'diphthong',    exampleWord: 'sure',  exampleIPA: '/ʃʊə/',   description: 'Starts at /ʊ/, glides to /ə/', tip: '"tour", "poor", "cure". Becoming rarer in modern British English.' },

  // Consonants — unvoiced
  { symbol: 'p',  type: 'consonant_unvoiced', exampleWord: 'pen',   exampleIPA: '/pen/',   description: 'Bilabial stop — lips together, release with air', tip: 'Aspirated at start of stressed syllable: pʰen. Silent in "psychology".' },
  { symbol: 't',  type: 'consonant_unvoiced', exampleWord: 'ten',   exampleIPA: '/ten/',   description: 'Alveolar stop — tongue tip behind upper teeth', tip: 'Glottalised before /n/ in British English: "button" /bʌʔn/.' },
  { symbol: 'k',  type: 'consonant_unvoiced', exampleWord: 'cat',   exampleIPA: '/kæt/',   description: 'Velar stop — back of tongue to soft palate', tip: 'Silent in "know", "knife". "c", "k", "ck", "ch" all spell /k/.' },
  { symbol: 'f',  type: 'consonant_unvoiced', exampleWord: 'fish',  exampleIPA: '/fɪʃ/',   description: 'Labiodental fricative — upper teeth on lower lip', tip: 'Also spelled "ph" (phone) and "gh" (rough).' },
  { symbol: 'θ',  type: 'consonant_unvoiced', exampleWord: 'think', exampleIPA: '/θɪŋk/',  description: 'Dental fricative — tongue between teeth', tip: 'Tongue touches top teeth lightly. Confusable with /f/ or /t/ for many learners.' },
  { symbol: 's',  type: 'consonant_unvoiced', exampleWord: 'sun',   exampleIPA: '/sʌn/',   description: 'Alveolar fricative — tongue near ridge, air streams through', tip: 'Do not confuse with /z/. "s" after voiceless consonants = /s/: cats.' },
  { symbol: 'ʃ',  type: 'consonant_unvoiced', exampleWord: 'ship',  exampleIPA: '/ʃɪp/',   description: 'Palato-alveolar fricative — tongue raised, lips forward', tip: '"sh", "ti" (nation), "ci" (musician), "ch" (French loanwords: chef).' },
  { symbol: 'tʃ', type: 'consonant_unvoiced', exampleWord: 'chair', exampleIPA: '/tʃeə/',  description: 'Affricate — stop + fricative combined', tip: '"ch", "tch". "watch", "match", "teacher".' },
  { symbol: 'h',  type: 'consonant_unvoiced', exampleWord: 'hat',   exampleIPA: '/hæt/',   description: 'Glottal fricative — breath with open glottis', tip: 'Silent in "hour", "honest", "heir". Weak /h/ in connected speech.' },

  // Consonants — voiced
  { symbol: 'b',  type: 'consonant_voiced',   exampleWord: 'bed',   exampleIPA: '/bed/',   description: 'Bilabial stop — like /p/ but with voice', tip: 'Silent at word end for some learners: do not drop it in "job", "rob".' },
  { symbol: 'd',  type: 'consonant_voiced',   exampleWord: 'dog',   exampleIPA: '/dɒɡ/',   description: 'Alveolar stop — like /t/ but with voice', tip: '"Flap" /ɾ/ in American English between vowels: "water" = /wɔːɾər/.' },
  { symbol: 'ɡ',  type: 'consonant_voiced',   exampleWord: 'go',    exampleIPA: '/ɡəʊ/',   description: 'Velar stop — like /k/ but with voice', tip: 'Silent in "-ng" at end of words: "sing" /sɪŋ/. "gh" is often silent.' },
  { symbol: 'v',  type: 'consonant_voiced',   exampleWord: 'voice', exampleIPA: '/vɔɪs/',  description: 'Labiodental fricative — like /f/ but with voice', tip: 'Common error: substituting /b/ for /v/. "very" ≠ "berry".' },
  { symbol: 'ð',  type: 'consonant_voiced',   exampleWord: 'this',  exampleIPA: '/ðɪs/',   description: 'Dental fricative — like /θ/ but with voice', tip: '"the", "this", "that", "them", "there". Voiced version of /θ/.' },
  { symbol: 'z',  type: 'consonant_voiced',   exampleWord: 'zoo',   exampleIPA: '/zuː/',   description: 'Alveolar fricative — like /s/ but with voice', tip: '"s" after voiced sounds = /z/: dogs /dɒɡz/, runs /rʌnz/.' },
  { symbol: 'ʒ',  type: 'consonant_voiced',   exampleWord: 'vision',exampleIPA: '/ˈvɪʒən/',description: 'Palato-alveolar fricative — like /ʃ/ but with voice', tip: '"s" in "measure", "treasure", "usual". "g" in "genre".' },
  { symbol: 'dʒ', type: 'consonant_voiced',   exampleWord: 'judge', exampleIPA: '/dʒʌdʒ/', description: 'Affricate — voiced version of /tʃ/', tip: '"j", "g" before e/i/y: "jump", "gym". "dge": "bridge".' },
  { symbol: 'm',  type: 'other',              exampleWord: 'man',   exampleIPA: '/mæn/',   description: 'Bilabial nasal — lips together, air through nose', tip: 'Silent in "autumn", "column". Syllabic in "prism" /ˈprɪzm̩/.' },
  { symbol: 'n',  type: 'other',              exampleWord: 'now',   exampleIPA: '/naʊ/',   description: 'Alveolar nasal — tongue on ridge, air through nose', tip: '"kn" is /n/: "know", "knight". Silent "n" after "m": "autumn".' },
  { symbol: 'ŋ',  type: 'other',              exampleWord: 'sing',  exampleIPA: '/sɪŋ/',   description: 'Velar nasal — back of tongue to soft palate', tip: 'No /g/ after /ŋ/ in "sing", "ring" (British). "-nk" = /ŋk/: "think".' },
  { symbol: 'l',  type: 'other',              exampleWord: 'leg',   exampleIPA: '/leɡ/',   description: 'Lateral approximant — tongue on ridge, air around sides', tip: '"Dark l" /ɫ/ before consonants: "milk", "cold". Syllabic: "bottle" /ˈbɒtl̩/.' },
  { symbol: 'r',  type: 'other',              exampleWord: 'red',   exampleIPA: '/red/',   description: 'Alveolar approximant — tongue curved, not touching', tip: 'Non-rhotic in British English: "car" /kɑː/. Never trill like Spanish.' },
  { symbol: 'w',  type: 'other',              exampleWord: 'wet',   exampleIPA: '/wet/',   description: 'Bilabial approximant — rounded lips, then open', tip: 'Silent in "write", "who". "wh" = /w/ in most British English.' },
  { symbol: 'j',  type: 'other',              exampleWord: 'yes',   exampleIPA: '/jes/',   description: 'Palatal approximant — tongue high and front', tip: '"y" = /j/. Also in "few" /fjuː/, "beauty" /ˈbjuːti/.' },
]

// ─── Minimal Pairs ────────────────────────────────────────────

export interface MinimalPair {
  id: string
  wordA: string
  wordB: string
  ipaA: string
  ipaB: string
  contrast: string     // which sounds differ, e.g. "/ɪ/ vs /iː/"
  tipA: string         // memory tip for word A
  tipB: string         // memory tip for word B
  exampleA: string     // sentence using word A
  exampleB: string     // sentence using word B
  difficulty: 'easy' | 'medium' | 'hard'
}

export const MINIMAL_PAIRS: MinimalPair[] = [
  // Vowel length
  { id: 'ship_sheep',   wordA: 'ship',   wordB: 'sheep',  ipaA: '/ʃɪp/',   ipaB: '/ʃiːp/',  contrast: '/ɪ/ vs /iː/', tipA: 'Short and relaxed: /ɪ/.',         tipB: 'Long and tense — smile wide: /iː/.', exampleA: 'The ship sailed at dawn.',        exampleB: 'The sheep grazed in the field.',       difficulty: 'easy' },
  { id: 'bit_beat',     wordA: 'bit',    wordB: 'beat',   ipaA: '/bɪt/',   ipaB: '/biːt/',  contrast: '/ɪ/ vs /iː/', tipA: 'Very short vowel.',                tipB: 'Hold the vowel longer.',             exampleA: 'He bit into the apple.',          exampleB: 'She beat the drum loudly.',            difficulty: 'easy' },
  { id: 'full_fool',    wordA: 'full',   wordB: 'fool',   ipaA: '/fʊl/',   ipaB: '/fuːl/',  contrast: '/ʊ/ vs /uː/', tipA: 'Loose lips, short sound.',         tipB: 'Tightly rounded lips, long sound.',  exampleA: 'My bag is full.',                 exampleB: "Don't be a fool.",                     difficulty: 'easy' },
  { id: 'pull_pool',    wordA: 'pull',   wordB: 'pool',   ipaA: '/pʊl/',   ipaB: '/puːl/',  contrast: '/ʊ/ vs /uː/', tipA: 'Like "book" vowel.',               tipB: 'Like "food" vowel.',                 exampleA: 'Pull the door open.',             exampleB: 'They swam in the pool.',               difficulty: 'easy' },
  { id: 'live_leave',   wordA: 'live',   wordB: 'leave',  ipaA: '/lɪv/',   ipaB: '/liːv/',  contrast: '/ɪ/ vs /iː/', tipA: '"Live" as in "to live" (verb).',   tipB: 'Long ee sound.',                     exampleA: 'Where do you live?',              exampleB: 'Please leave a message.',              difficulty: 'easy' },
  { id: 'bed_bad',      wordA: 'bed',    wordB: 'bad',    ipaA: '/bed/',   ipaB: '/bæd/',   contrast: '/e/ vs /æ/',  tipA: 'Mid mouth, like the letter "e".', tipB: 'Wide jaw drop — like a yawn.',       exampleA: 'She went to bed early.',          exampleB: 'That was a bad idea.',                 difficulty: 'easy' },
  { id: 'cat_cut',      wordA: 'cat',    wordB: 'cut',    ipaA: '/kæt/',   ipaB: '/kʌt/',   contrast: '/æ/ vs /ʌ/',  tipA: 'Front of mouth, wide jaw.',        tipB: 'Central, neutral mouth.',            exampleA: 'The cat sat on the mat.',         exampleB: 'She cut the paper in half.',           difficulty: 'medium' },

  // Consonants
  { id: 'think_sink',   wordA: 'think',  wordB: 'sink',   ipaA: '/θɪŋk/', ipaB: '/sɪŋk/',  contrast: '/θ/ vs /s/',  tipA: 'Tongue between teeth.',            tipB: 'Tongue behind teeth.',               exampleA: 'Think before you speak.',         exampleB: 'The ship began to sink.',              difficulty: 'medium' },
  { id: 'then_den',     wordA: 'then',   wordB: 'den',    ipaA: '/ðen/',   ipaB: '/den/',   contrast: '/ð/ vs /d/',  tipA: 'Tongue touches top teeth softly.', tipB: 'Tongue on alveolar ridge.',          exampleA: 'Then she smiled.',                exampleB: 'The fox ran to its den.',              difficulty: 'medium' },
  { id: 'three_free',   wordA: 'three',  wordB: 'free',   ipaA: '/θriː/', ipaB: '/friː/',  contrast: '/θ/ vs /f/',  tipA: 'Tongue between or on teeth.',      tipB: 'Upper teeth on lower lip.',          exampleA: 'I waited three hours.',           exampleB: 'You are free to go.',                  difficulty: 'medium' },
  { id: 'very_berry',   wordA: 'very',   wordB: 'berry',  ipaA: '/ˈveri/', ipaB: '/ˈberi/', contrast: '/v/ vs /b/',  tipA: 'Upper teeth touch lower lip.',     tipB: 'Both lips together.',                exampleA: 'That is very good.',              exampleB: 'She ate a berry.',                     difficulty: 'easy' },
  { id: 'rice_lice',    wordA: 'rice',   wordB: 'lice',   ipaA: '/raɪs/', ipaB: '/laɪs/',  contrast: '/r/ vs /l/',  tipA: 'Tongue does NOT touch the ridge.', tipB: 'Tongue tip touches the ridge.',      exampleA: 'We had rice for dinner.',         exampleB: 'The dog had lice.',                    difficulty: 'easy' },
  { id: 'right_light',  wordA: 'right',  wordB: 'light',  ipaA: '/raɪt/', ipaB: '/laɪt/',  contrast: '/r/ vs /l/',  tipA: 'Tongue curved back, not touching.',tipB: 'Tongue touches ridge firmly.',       exampleA: 'Turn right at the corner.',       exampleB: 'The light is on.',                     difficulty: 'easy' },

  // Hard contrasts
  { id: 'caught_coat',  wordA: 'caught', wordB: 'coat',   ipaA: '/kɔːt/', ipaB: '/kəʊt/',  contrast: '/ɔː/ vs /əʊ/', tipA: 'Long single vowel, lips rounded.',  tipB: 'Diphthong — starts mid, glides to /ʊ/.', exampleA: 'He caught the ball.',          exampleB: 'She wore a long coat.',                difficulty: 'hard' },
  { id: 'word_ward',    wordA: 'word',   wordB: 'ward',   ipaA: '/wɜːd/', ipaB: '/wɔːd/',  contrast: '/ɜː/ vs /ɔː/', tipA: 'Mid central — like a sigh.',       tipB: 'Back, rounded lips.',                exampleA: 'What does this word mean?',       exampleB: 'She works on the hospital ward.',      difficulty: 'hard' },
  { id: 'pin_bin',      wordA: 'pin',    wordB: 'bin',    ipaA: '/pɪn/',  ipaB: '/bɪn/',   contrast: '/p/ vs /b/',   tipA: 'No voice, burst of air.',          tipB: 'Voiced — feel the buzz in throat.',  exampleA: 'I lost my pin.',                  exampleB: 'Throw it in the bin.',                 difficulty: 'easy' },
  { id: 'fan_van',      wordA: 'fan',    wordB: 'van',    ipaA: '/fæn/',  ipaB: '/væn/',   contrast: '/f/ vs /v/',   tipA: 'Unvoiced — upper teeth on lip.',   tipB: 'Voiced — buzz with upper teeth.',    exampleA: 'She is a big fan.',               exampleB: 'The van is parked outside.',           difficulty: 'easy' },
]

// ─── Connected Speech Patterns ────────────────────────────────

export interface ConnectedSpeechPattern {
  name: string
  description: string
  rule: string
  examples: { normal: string; spoken: string; note: string }[]
}

export const CONNECTED_SPEECH: ConnectedSpeechPattern[] = [
  {
    name: 'Weak Forms',
    description: 'Function words (articles, prepositions, pronouns, auxiliaries) are reduced to /ə/ or similar in natural speech.',
    rule: 'Words like "a", "the", "of", "to", "and", "can", "have" lose their dictionary vowel and become very short.',
    examples: [
      { normal: 'a cup of tea',      spoken: '/ə kʌp əv tiː/',   note: '"a" = /ə/, "of" = /əv/' },
      { normal: 'I can see you',     spoken: '/aɪ kən siː jə/',  note: '"can" = /kən/, "you" = /jə/' },
      { normal: 'she must have gone',spoken: '/ʃə məst əv ɡɒn/', note: '"must" = /məst/, "have" = /əv/' },
    ],
  },
  {
    name: 'Linking (Consonant to Vowel)',
    description: 'When a word ending in a consonant is followed by a word starting with a vowel, the sounds link together.',
    rule: 'Final consonant + initial vowel → sounds blend into one unit. No pause between the words.',
    examples: [
      { normal: 'pick it up',   spoken: '/pɪk ɪ tʌp/',    note: 'Sounds like "picki-tup"' },
      { normal: 'an apple',     spoken: '/ə næpl/',        note: '"n" links to "apple"' },
      { normal: 'turn off',     spoken: '/tɜːn ɒf/',      note: '"n" links directly to "off"' },
    ],
  },
  {
    name: 'Intrusion',
    description: 'An extra sound (/j/, /w/, or /r/) is inserted between two vowels in connected speech to avoid a vowel hiatus.',
    rule: 'Vowel + vowel boundary → insert /j/ (after front vowels), /w/ (after back vowels), or /r/ (after /ə/, /ɑː/, /ɔː/ in British English).',
    examples: [
      { normal: 'I agree',      spoken: '/aɪ jə ˈɡriː/',   note: '/j/ inserted: "I-y-agree"' },
      { normal: 'go away',      spoken: '/ɡəʊ wə ˈweɪ/',   note: '/w/ inserted: "go-w-away"' },
      { normal: 'the idea of',  spoken: '/ðə aɪˈdɪər əv/', note: '/r/ inserted (British): "idea-r-of"' },
    ],
  },
  {
    name: 'Elision',
    description: 'Sounds disappear when they are between consonants in fast speech.',
    rule: 'Common elisions: final /t/ and /d/ before consonants, /h/ in weak pronouns, vowels in unstressed syllables.',
    examples: [
      { normal: 'next day',     spoken: '/neks deɪ/',      note: '/t/ elided: "nex day"' },
      { normal: 'last night',   spoken: '/lɑːs naɪt/',     note: '/t/ elided: "las night"' },
      { normal: 'he told her',  spoken: '/hi təʊl də/',    note: '/d/ elided, /h/ weakened' },
    ],
  },
  {
    name: 'Assimilation',
    description: 'A sound changes to become more like a neighbouring sound.',
    rule: 'Common: /n/ + /p,b,m/ → /m/; /n/ + /k,g/ → /ŋ/; /t/ + /j/ → /tʃ/; /d/ + /j/ → /dʒ/.',
    examples: [
      { normal: 'ten people',   spoken: '/tem piːpl/',     note: '/n/ → /m/ before /p/' },
      { normal: 'ten girls',    spoken: '/teŋ ɡɜːlz/',    note: '/n/ → /ŋ/ before /g/' },
      { normal: 'did you',      spoken: '/dɪdʒu/',         note: '/d/ + /j/ → /dʒ/: "didju"' },
    ],
  },
  {
    name: 'Contraction',
    description: 'Auxiliary verbs and negatives are reduced in informal and natural speech.',
    rule: 'Contractions are not just informal writing shortcuts — they reflect actual spoken rhythm. Using full forms sounds unnatural in conversation.',
    examples: [
      { normal: 'I am going',   spoken: '/aɪm ɡəʊɪŋ/',    note: '"I\'m" has one syllable, not two' },
      { normal: 'do not',       spoken: '/dəʊnt/',          note: '"don\'t" is one syllable' },
      { normal: 'should have',  spoken: '/ʃʊdəv/',          note: '"should\'ve" — NOT "should of"' },
    ],
  },
]
