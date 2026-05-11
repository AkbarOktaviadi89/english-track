import type { CEFRLevel } from '@/types'

export type CollocCategory = 'verb_noun' | 'adj_noun' | 'adv_adj' | 'verb_adv'

export interface Collocation {
  id: string
  baseWord: string        // grouping key: "make", "do", "heavy", "highly"…
  phrase: string          // full collocation: "make a decision"
  meaning: string         // brief usage note
  example: string         // IELTS-level example sentence
  level: CEFRLevel
  category: CollocCategory
  wrong?: string          // common mistake version, e.g. "do a decision"
}

export const COLLOC_GROUPS: Record<string, { label: string; color: string }> = {
  // Verb + Noun groups
  make:  { label: 'make',  color: '#259775' },
  do:    { label: 'do',    color: '#2563eb' },
  have:  { label: 'have',  color: '#7c3aed' },
  take:  { label: 'take',  color: '#d97706' },
  give:  { label: 'give',  color: '#db2777' },
  get:   { label: 'get',   color: '#0891b2' },
  bring: { label: 'bring', color: '#dc2626' },
  come:  { label: 'come',  color: '#059669' },
  run:   { label: 'run',   color: '#9333ea' },
  carry: { label: 'carry', color: '#475569' },
  // Adj + Noun group
  adj:   { label: 'Adjective + Noun', color: '#b45309' },
  // Adverb collocations
  adv:   { label: 'Adverb + Adjective / Verb', color: '#4f46e5' },
}

export const COLLOCATIONS: Collocation[] = [

  // ─── MAKE ─────────────────────────────────────────────────────
  { id: 'mk_01', baseWord: 'make', phrase: 'make a decision', meaning: 'Decide something', example: 'Governments must make difficult decisions when balancing economic growth with environmental protection.', level: 'B1', category: 'verb_noun', wrong: 'do a decision' },
  { id: 'mk_02', baseWord: 'make', phrase: 'make a mistake', meaning: 'Do something wrong accidentally', example: 'It is important to learn from the mistakes made in previous policy implementations.', level: 'A2', category: 'verb_noun', wrong: 'do a mistake' },
  { id: 'mk_03', baseWord: 'make', phrase: 'make progress', meaning: 'Move forward / improve', example: 'Countries have made significant progress in reducing carbon emissions over the past decade.', level: 'B1', category: 'verb_noun', wrong: 'do progress' },
  { id: 'mk_04', baseWord: 'make', phrase: 'make an effort', meaning: 'Try hard to do something', example: 'Schools should make a concerted effort to integrate digital literacy into the curriculum.', level: 'B1', category: 'verb_noun', wrong: 'do an effort' },
  { id: 'mk_05', baseWord: 'make', phrase: 'make a contribution', meaning: 'Add value or help to something', example: 'Volunteering allows citizens to make a meaningful contribution to their communities.', level: 'B2', category: 'verb_noun', wrong: 'do a contribution' },
  { id: 'mk_06', baseWord: 'make', phrase: 'make a suggestion', meaning: 'Propose an idea', example: 'The committee made several practical suggestions to address the housing shortage.', level: 'B1', category: 'verb_noun', wrong: 'do a suggestion' },
  { id: 'mk_07', baseWord: 'make', phrase: 'make an argument', meaning: 'Present a reason or case', example: 'The author makes a compelling argument for greater investment in public transport.', level: 'B2', category: 'verb_noun', wrong: 'do an argument' },
  { id: 'mk_08', baseWord: 'make', phrase: 'make an assumption', meaning: 'Accept something as true without proof', example: 'Many economists make the assumption that human behaviour is fundamentally rational.', level: 'B2', category: 'verb_noun', wrong: 'do an assumption' },
  { id: 'mk_09', baseWord: 'make', phrase: 'make a distinction', meaning: 'Recognise or show a difference', example: 'It is important to make a clear distinction between correlation and causation.', level: 'C1', category: 'verb_noun', wrong: 'do a distinction' },
  { id: 'mk_10', baseWord: 'make', phrase: 'make an impact', meaning: 'Have a noticeable effect', example: 'Social media has made a profound impact on the way political campaigns are conducted.', level: 'B2', category: 'verb_noun', wrong: 'do an impact' },
  { id: 'mk_11', baseWord: 'make', phrase: 'make a difference', meaning: 'Have a positive effect', example: 'Even small individual actions can make a significant difference to the environment.', level: 'B1', category: 'verb_noun' },
  { id: 'mk_12', baseWord: 'make', phrase: 'make a point', meaning: 'Express a specific idea or argument', example: 'The speaker made the point that economic development alone cannot address social inequality.', level: 'B2', category: 'verb_noun' },
  { id: 'mk_13', baseWord: 'make', phrase: 'make a claim', meaning: 'Assert that something is true', example: 'The study makes the bold claim that screen time has no measurable effect on children\'s wellbeing.', level: 'B2', category: 'verb_noun' },
  { id: 'mk_14', baseWord: 'make', phrase: 'make use of', meaning: 'Utilise something effectively', example: 'Students should make full use of the resources available in university libraries.', level: 'B1', category: 'verb_noun' },
  { id: 'mk_15', baseWord: 'make', phrase: 'make sense of', meaning: 'Understand something complex', example: 'It can be difficult to make sense of conflicting information in the media.', level: 'B2', category: 'verb_noun' },

  // ─── DO ───────────────────────────────────────────────────────
  { id: 'do_01', baseWord: 'do', phrase: 'do research', meaning: 'Conduct a study or investigation', example: 'Researchers do extensive research before drawing any conclusions about causality.', level: 'B1', category: 'verb_noun', wrong: 'make research' },
  { id: 'do_02', baseWord: 'do', phrase: 'do damage', meaning: 'Cause harm', example: 'Air pollution can do irreparable damage to ecosystems over time.', level: 'B1', category: 'verb_noun', wrong: 'make damage' },
  { id: 'do_03', baseWord: 'do', phrase: 'do business', meaning: 'Engage in commercial activity', example: 'Many companies prefer to do business with partners who share their ethical values.', level: 'B1', category: 'verb_noun', wrong: 'make business' },
  { id: 'do_04', baseWord: 'do', phrase: 'do harm', meaning: 'Cause injury or damage', example: 'Excessive use of antibiotics can do serious harm to a patient\'s immune system.', level: 'B1', category: 'verb_noun', wrong: 'make harm' },
  { id: 'do_05', baseWord: 'do', phrase: 'do justice to', meaning: 'Represent or treat something fairly and fully', example: 'No brief summary can do justice to the complexity of this social issue.', level: 'C1', category: 'verb_noun' },
  { id: 'do_06', baseWord: 'do', phrase: 'do exercise', meaning: 'Engage in physical activity', example: 'Health authorities recommend that adults do at least 150 minutes of moderate exercise per week.', level: 'A2', category: 'verb_noun', wrong: 'make exercise' },
  { id: 'do_07', baseWord: 'do', phrase: 'do a course', meaning: 'Study on an educational programme', example: 'She decided to do a course in data analysis to improve her career prospects.', level: 'B1', category: 'verb_noun', wrong: 'make a course' },
  { id: 'do_08', baseWord: 'do', phrase: 'do without', meaning: 'Manage despite lacking something', example: 'During the energy crisis, households were asked to do without heating where possible.', level: 'B2', category: 'verb_noun' },
  { id: 'do_09', baseWord: 'do', phrase: 'do away with', meaning: 'Abolish or eliminate something', example: 'Many campaigners argue that governments should do away with fossil fuel subsidies entirely.', level: 'B2', category: 'verb_noun' },
  { id: 'do_10', baseWord: 'do', phrase: 'do good', meaning: 'Have a positive effect; benefit others', example: 'Non-governmental organisations do a great deal of good in underserved communities.', level: 'B1', category: 'verb_noun' },

  // ─── HAVE ─────────────────────────────────────────────────────
  { id: 'hv_01', baseWord: 'have', phrase: 'have an impact on', meaning: 'Affect something significantly', example: 'Urbanisation has had a profound impact on biodiversity in many regions.', level: 'B2', category: 'verb_noun', wrong: 'make an impact on' },
  { id: 'hv_02', baseWord: 'have', phrase: 'have access to', meaning: 'Be able to use or obtain something', example: 'Not all children have equal access to quality education and technology.', level: 'B1', category: 'verb_noun' },
  { id: 'hv_03', baseWord: 'have', phrase: 'have difficulty (in)', meaning: 'Find something hard to do', example: 'Many elderly people have difficulty adapting to rapidly changing technology.', level: 'B1', category: 'verb_noun', wrong: 'make difficulty' },
  { id: 'hv_04', baseWord: 'have', phrase: 'have a conversation', meaning: 'Talk with someone', example: 'It is important for leaders to have open conversations about systemic inequality.', level: 'B1', category: 'verb_noun', wrong: 'make a conversation' },
  { id: 'hv_05', baseWord: 'have', phrase: 'have an effect on', meaning: 'Cause a change in something', example: 'Regular exercise has a demonstrable effect on mental health outcomes.', level: 'B1', category: 'verb_noun' },
  { id: 'hv_06', baseWord: 'have', phrase: 'have a significant role', meaning: 'Be importantly involved in something', example: 'International organisations have a significant role in coordinating responses to climate change.', level: 'B2', category: 'verb_noun' },
  { id: 'hv_07', baseWord: 'have', phrase: 'have implications for', meaning: 'Be relevant to or affect something', example: 'The new legislation has far-reaching implications for how data is collected and stored.', level: 'C1', category: 'verb_noun' },
  { id: 'hv_08', baseWord: 'have', phrase: 'have a tendency to', meaning: 'Often do or experience something', example: 'People have a tendency to overestimate their own capabilities in unfamiliar situations.', level: 'B2', category: 'verb_noun' },
  { id: 'hv_09', baseWord: 'have', phrase: 'have the potential to', meaning: 'Be capable of doing something in the future', example: 'Renewable energy has the potential to meet all global electricity needs by 2050.', level: 'B2', category: 'verb_noun' },
  { id: 'hv_10', baseWord: 'have', phrase: 'have a bearing on', meaning: 'Be relevant to or influence something', example: 'A candidate\'s social background can have a significant bearing on their career prospects.', level: 'C1', category: 'verb_noun' },
  { id: 'hv_11', baseWord: 'have', phrase: 'have a command of', meaning: 'Be skilled and proficient in something', example: 'Candidates who have a strong command of data analysis are in high demand.', level: 'C1', category: 'verb_noun' },
  { id: 'hv_12', baseWord: 'have', phrase: 'have reservations about', meaning: 'Feel uncertain or doubtful about something', example: 'Many scientists have reservations about the long-term safety of gene-editing technology.', level: 'C1', category: 'verb_noun' },

  // ─── TAKE ─────────────────────────────────────────────────────
  { id: 'tk_01', baseWord: 'take', phrase: 'take action', meaning: 'Do something to address a problem', example: 'Governments must take immediate action to reduce plastic pollution in the oceans.', level: 'B1', category: 'verb_noun', wrong: 'make action' },
  { id: 'tk_02', baseWord: 'take', phrase: 'take responsibility', meaning: 'Accept accountability for something', example: 'Companies should take responsibility for the environmental impact of their supply chains.', level: 'B2', category: 'verb_noun', wrong: 'make responsibility' },
  { id: 'tk_03', baseWord: 'take', phrase: 'take part in', meaning: 'Participate in an activity or event', example: 'Students who take part in extracurricular activities develop stronger interpersonal skills.', level: 'B1', category: 'verb_noun', wrong: 'make part in' },
  { id: 'tk_04', baseWord: 'take', phrase: 'take into account', meaning: 'Consider something when making a decision', example: 'Any effective climate policy must take the economic impact on developing nations into account.', level: 'B2', category: 'verb_noun' },
  { id: 'tk_05', baseWord: 'take', phrase: 'take advantage of', meaning: 'Make full use of an opportunity', example: 'Many students fail to take full advantage of the support services offered by universities.', level: 'B2', category: 'verb_noun' },
  { id: 'tk_06', baseWord: 'take', phrase: 'take steps to', meaning: 'Act in order to achieve something', example: 'The organisation has taken concrete steps to reduce its carbon footprint by 40%.', level: 'B2', category: 'verb_noun' },
  { id: 'tk_07', baseWord: 'take', phrase: 'take a stance on', meaning: 'Express a clear position or view', example: 'Many celebrities are reluctant to take a public stance on controversial political issues.', level: 'B2', category: 'verb_noun' },
  { id: 'tk_08', baseWord: 'take', phrase: 'take precedence over', meaning: 'Be more important than something else', example: 'In emergency situations, public safety must take precedence over economic considerations.', level: 'C1', category: 'verb_noun' },
  { id: 'tk_09', baseWord: 'take', phrase: 'take a toll on', meaning: 'Have a damaging effect over time', example: 'Long working hours can take a significant toll on an employee\'s mental health.', level: 'B2', category: 'verb_noun' },
  { id: 'tk_10', baseWord: 'take', phrase: 'take for granted', meaning: 'Fail to appreciate the value of something', example: 'People in developed nations often take clean water and reliable healthcare for granted.', level: 'B2', category: 'verb_noun' },

  // ─── GIVE ─────────────────────────────────────────────────────
  { id: 'gv_01', baseWord: 'give', phrase: 'give rise to', meaning: 'Cause something to develop or appear', example: 'Rapid urbanisation has given rise to serious problems with housing affordability.', level: 'B2', category: 'verb_noun' },
  { id: 'gv_02', baseWord: 'give', phrase: 'give an indication of', meaning: 'Provide a sign or signal about something', example: 'The data gives a clear indication of the long-term trend in global temperatures.', level: 'B2', category: 'verb_noun' },
  { id: 'gv_03', baseWord: 'give', phrase: 'give priority to', meaning: 'Treat something as more important than others', example: 'Governments should give greater priority to preventive healthcare over treatment.', level: 'B2', category: 'verb_noun' },
  { id: 'gv_04', baseWord: 'give', phrase: 'give way to', meaning: 'Be replaced by something', example: 'Traditional manufacturing is gradually giving way to automated, AI-driven production.', level: 'C1', category: 'verb_noun' },
  { id: 'gv_05', baseWord: 'give', phrase: 'give credit to', meaning: 'Acknowledge someone\'s contribution', example: 'It is important to give appropriate credit to the researchers whose work formed the basis of this study.', level: 'B2', category: 'verb_noun' },
  { id: 'gv_06', baseWord: 'give', phrase: 'give grounds for', meaning: 'Provide a reason or justification', example: 'The evidence gives strong grounds for believing that the policy has been effective.', level: 'C1', category: 'verb_noun' },

  // ─── GET ──────────────────────────────────────────────────────
  { id: 'gt_01', baseWord: 'get', phrase: 'get to grips with', meaning: 'Start to understand or deal with something', example: 'Many students struggle to get to grips with the demands of academic writing.', level: 'B2', category: 'verb_noun' },
  { id: 'gt_02', baseWord: 'get', phrase: 'get to the root of', meaning: 'Identify the fundamental cause of a problem', example: 'To address poverty effectively, we must get to the root of structural inequality.', level: 'C1', category: 'verb_noun' },
  { id: 'gt_03', baseWord: 'get', phrase: 'get access to', meaning: 'Obtain the ability to use something', example: 'Millions of people in remote areas still cannot get access to reliable internet connectivity.', level: 'B1', category: 'verb_noun' },
  { id: 'gt_04', baseWord: 'get', phrase: 'get across', meaning: 'Successfully communicate an idea', example: 'Good teachers can get complex ideas across without oversimplifying them.', level: 'B2', category: 'verb_noun' },
  { id: 'gt_05', baseWord: 'get', phrase: 'get the most out of', meaning: 'Benefit as much as possible from something', example: 'To get the most out of studying abroad, students should immerse themselves in the local culture.', level: 'B2', category: 'verb_noun' },

  // ─── BRING ────────────────────────────────────────────────────
  { id: 'br_01', baseWord: 'bring', phrase: 'bring about', meaning: 'Cause something to happen', example: 'Only fundamental policy changes can bring about the transformation needed to address inequality.', level: 'B2', category: 'verb_noun' },
  { id: 'br_02', baseWord: 'bring', phrase: 'bring to light', meaning: 'Reveal something previously unknown', example: 'The investigation brought to light serious financial irregularities within the organisation.', level: 'B2', category: 'verb_noun' },
  { id: 'br_03', baseWord: 'bring', phrase: 'bring into question', meaning: 'Cause doubt about something', example: 'The new findings bring into question the validity of previous research in this field.', level: 'C1', category: 'verb_noun' },
  { id: 'br_04', baseWord: 'bring', phrase: 'bring to bear', meaning: 'Apply knowledge or experience to a situation', example: 'Leaders must bring all available expertise to bear when managing a complex crisis.', level: 'C1', category: 'verb_noun' },
  { id: 'br_05', baseWord: 'bring', phrase: 'bring into line with', meaning: 'Make something comply with a standard', example: 'The new regulations aim to bring corporate practices into line with international standards.', level: 'B2', category: 'verb_noun' },

  // ─── COME ─────────────────────────────────────────────────────
  { id: 'cm_01', baseWord: 'come', phrase: 'come to a conclusion', meaning: 'Reach a final judgement after consideration', example: 'After reviewing all available evidence, the panel came to a unanimous conclusion.', level: 'B2', category: 'verb_noun', wrong: 'make a conclusion' },
  { id: 'cm_02', baseWord: 'come', phrase: 'come to terms with', meaning: 'Accept a difficult situation', example: 'Many workers are still coming to terms with the disruption caused by automation.', level: 'B2', category: 'verb_noun' },
  { id: 'cm_03', baseWord: 'come', phrase: 'come into conflict with', meaning: 'Clash or disagree with', example: 'Economic objectives frequently come into conflict with environmental protection goals.', level: 'B2', category: 'verb_noun' },
  { id: 'cm_04', baseWord: 'come', phrase: 'come under scrutiny', meaning: 'Be examined critically', example: 'Social media companies have come under increasing scrutiny over data privacy practices.', level: 'C1', category: 'verb_noun' },
  { id: 'cm_05', baseWord: 'come', phrase: 'come at a cost', meaning: 'Have negative consequences or drawbacks', example: 'Rapid economic growth often comes at a significant environmental cost.', level: 'B2', category: 'verb_noun' },

  // ─── CARRY ────────────────────────────────────────────────────
  { id: 'cy_01', baseWord: 'carry', phrase: 'carry out', meaning: 'Perform or execute a task', example: 'The research team carried out a comprehensive analysis of 50 years of climate data.', level: 'B2', category: 'verb_noun' },
  { id: 'cy_02', baseWord: 'carry', phrase: 'carry weight', meaning: 'Be persuasive or influential', example: 'An argument backed by empirical evidence carries far more weight than anecdotal claims.', level: 'C1', category: 'verb_noun' },
  { id: 'cy_03', baseWord: 'carry', phrase: 'carry implications', meaning: 'Have consequences or significance', example: 'The Supreme Court\'s decision carries profound implications for privacy rights.', level: 'C1', category: 'verb_noun' },
  { id: 'cy_04', baseWord: 'carry', phrase: 'carry out reforms', meaning: 'Implement changes to a system', example: 'Several governments have pledged to carry out economic reforms to attract foreign investment.', level: 'B2', category: 'verb_noun' },

  // ─── RUN ──────────────────────────────────────────────────────
  { id: 'rn_01', baseWord: 'run', phrase: 'run the risk of', meaning: 'Face the possibility of something negative', example: 'Over-reliance on technology runs the risk of eroding essential human skills.', level: 'B2', category: 'verb_noun' },
  { id: 'rn_02', baseWord: 'run', phrase: 'run counter to', meaning: 'Be opposite to or contradict', example: 'The proposed legislation runs counter to the principles of individual freedom.', level: 'C1', category: 'verb_noun' },
  { id: 'rn_03', baseWord: 'run', phrase: 'run alongside', meaning: 'Exist or operate at the same time as', example: 'A digital literacy programme should run alongside traditional reading and writing instruction.', level: 'B2', category: 'verb_noun' },

  // ─── ADJECTIVE + NOUN ─────────────────────────────────────────
  { id: 'aj_01', baseWord: 'adj', phrase: 'heavy rain', meaning: 'Strong, persistent rainfall', example: 'Heavy rain caused widespread flooding across the coastal regions.', level: 'A2', category: 'adj_noun', wrong: 'strong rain / big rain' },
  { id: 'aj_02', baseWord: 'adj', phrase: 'heavy traffic', meaning: 'Dense, slow-moving road congestion', example: 'Heavy traffic in city centres is a major contributor to air pollution.', level: 'B1', category: 'adj_noun', wrong: 'strong traffic' },
  { id: 'aj_03', baseWord: 'adj', phrase: 'heavy emphasis on', meaning: 'Strong focus or attention given to something', example: 'The curriculum places a heavy emphasis on standardised testing rather than creative thinking.', level: 'B2', category: 'adj_noun' },
  { id: 'aj_04', baseWord: 'adj', phrase: 'strong argument', meaning: 'Persuasive, well-supported case', example: 'There is a strong argument for introducing a universal basic income in developed economies.', level: 'B2', category: 'adj_noun', wrong: 'powerful argument (less common)' },
  { id: 'aj_05', baseWord: 'adj', phrase: 'strong evidence', meaning: 'Compelling, well-documented proof', example: 'There is now strong evidence linking ultra-processed food consumption to chronic disease.', level: 'B2', category: 'adj_noun' },
  { id: 'aj_06', baseWord: 'adj', phrase: 'deep concern', meaning: 'Serious, heartfelt worry', example: 'Scientists have expressed deep concern about the rate at which Arctic ice is melting.', level: 'B2', category: 'adj_noun', wrong: 'big concern / strong concern' },
  { id: 'aj_07', baseWord: 'adj', phrase: 'sharp increase / rise', meaning: 'Sudden, steep upward change', example: 'There has been a sharp increase in the number of electric vehicles on the road since 2020.', level: 'B1', category: 'adj_noun', wrong: 'big increase (less precise)' },
  { id: 'aj_08', baseWord: 'adj', phrase: 'growing concern', meaning: 'Worry that is increasing over time', example: 'There is growing concern among health professionals about the rise of antibiotic resistance.', level: 'B2', category: 'adj_noun' },
  { id: 'aj_09', baseWord: 'adj', phrase: 'significant factor', meaning: 'An important element or cause', example: 'Poverty is a significant factor in determining educational outcomes.', level: 'B2', category: 'adj_noun' },
  { id: 'aj_10', baseWord: 'adj', phrase: 'key issue', meaning: 'A central, crucial problem', example: 'Access to clean water remains a key issue in many developing nations.', level: 'B1', category: 'adj_noun' },
  { id: 'aj_11', baseWord: 'adj', phrase: 'widespread concern', meaning: 'Worry felt by many people', example: 'The data breach caused widespread concern about the security of personal information.', level: 'B2', category: 'adj_noun' },
  { id: 'aj_12', baseWord: 'adj', phrase: 'mounting pressure', meaning: 'Increasing demands from others', example: 'Governments face mounting pressure to introduce stricter regulations on social media platforms.', level: 'C1', category: 'adj_noun' },
  { id: 'aj_13', baseWord: 'adj', phrase: 'high standard', meaning: 'A demanding, excellent level of quality', example: 'Universities are expected to maintain consistently high academic standards.', level: 'B1', category: 'adj_noun' },
  { id: 'aj_14', baseWord: 'adj', phrase: 'broad range of', meaning: 'A wide variety of things', example: 'The programme attracts a broad range of students from diverse socioeconomic backgrounds.', level: 'B2', category: 'adj_noun' },
  { id: 'aj_15', baseWord: 'adj', phrase: 'compelling evidence', meaning: 'Very persuasive and convincing proof', example: 'There is now compelling evidence that early childhood investment yields the highest returns.', level: 'C1', category: 'adj_noun' },

  // ─── ADVERB COLLOCATIONS ──────────────────────────────────────
  { id: 'av_01', baseWord: 'adv', phrase: 'deeply concerned', meaning: 'Very seriously worried', example: 'Environmental groups are deeply concerned about the government\'s decision to approve the pipeline.', level: 'B2', category: 'adv_adj', wrong: 'very deeply concerned (redundant)' },
  { id: 'av_02', baseWord: 'adv', phrase: 'highly effective', meaning: 'Working extremely well', example: 'Regular feedback has proven to be a highly effective tool for improving employee performance.', level: 'B2', category: 'adv_adj', wrong: 'very effective (acceptable but less formal)' },
  { id: 'av_03', baseWord: 'adv', phrase: 'closely linked to', meaning: 'Very directly connected or related', example: 'Educational attainment is closely linked to long-term economic outcomes.', level: 'B2', category: 'adv_adj' },
  { id: 'av_04', baseWord: 'adv', phrase: 'strongly recommend', meaning: 'Urge with conviction', example: 'The report strongly recommends that governments increase funding for renewable energy research.', level: 'B2', category: 'verb_adv' },
  { id: 'av_05', baseWord: 'adv', phrase: 'dramatically increase', meaning: 'Rise by a large amount suddenly', example: 'The cost of living has dramatically increased in most major cities over the past decade.', level: 'B2', category: 'verb_adv' },
  { id: 'av_06', baseWord: 'adv', phrase: 'widely regarded as', meaning: 'Generally considered by many people', example: 'Finland\'s education system is widely regarded as one of the most successful in the world.', level: 'B2', category: 'adv_adj' },
  { id: 'av_07', baseWord: 'adv', phrase: 'largely responsible for', meaning: 'Mainly the cause of something', example: 'Human activity is largely responsible for the accelerating loss of biodiversity.', level: 'B2', category: 'adv_adj' },
  { id: 'av_08', baseWord: 'adv', phrase: 'significantly affect', meaning: 'Have a notable impact on', example: 'Sleep deprivation significantly affects cognitive performance and decision-making ability.', level: 'B2', category: 'verb_adv' },
  { id: 'av_09', baseWord: 'adv', phrase: 'particularly relevant', meaning: 'Especially applicable or important', example: 'This finding is particularly relevant for policymakers working on educational reform.', level: 'B2', category: 'adv_adj' },
  { id: 'av_10', baseWord: 'adv', phrase: 'increasingly evident', meaning: 'Becoming more clear or obvious', example: 'It is becoming increasingly evident that mental health support is underfunded in most countries.', level: 'C1', category: 'adv_adj' },
  { id: 'av_11', baseWord: 'adv', phrase: 'fundamentally different', meaning: 'Different in the most basic and important way', example: 'The approach required here is fundamentally different from anything attempted before.', level: 'C1', category: 'adv_adj' },
  { id: 'av_12', baseWord: 'adv', phrase: 'consistently show', meaning: 'Repeatedly demonstrate the same result', example: 'Studies consistently show that exercise has both physical and psychological benefits.', level: 'B2', category: 'verb_adv' },

]
