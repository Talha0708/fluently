/**
 * Spaced Repetition System (SRS) Engine based on SuperMemo SM-2 & Leitner Algorithms
 * Designed for Bengali English Learners to achieve permanent fluency and native retention.
 */

export type SrsRating = 'again' | 'hard' | 'good' | 'easy';

export interface SrsCard {
  id: string; // e.g., 'w_12' or 's_45'
  type: 'word' | 'sentence';
  english: string;
  bengali: string;
  phonetic?: string;
  category: string;
  level: string; // 'A1' | 'A2' | 'B1' | 'B2' | 'C1'
  repetition: number;
  intervalDays: number;
  easeFactor: number;
  dueDate: string; // YYYY-MM-DD
  lastReviewedDate?: string;
  historyCount: number;
}

export interface SrsStats {
  total: number;
  dueToday: number;
  learning: number;
  review: number;
  mastered: number;
  retentionRate: number;
}

export interface BengaliEnglishMistake {
  id: number;
  wrong: string;
  correct: string;
  bengaliNote: string;
  explanation: string;
  category: 'grammar' | 'vocabulary' | 'pronunciation' | 'idiom';
}

/**
 * Get current date string in local YYYY-MM-DD format
 */
export const getTodayKey = (d = new Date()): string => {
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
};

/**
 * Add days to a given YYYY-MM-DD string
 */
export const addDays = (dateStr: string, days: number): string => {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return getTodayKey(d);
};

/**
 * Calculate next review schedule using SM-2 algorithm
 */
export const scheduleNextReview = (
  card: SrsCard,
  rating: SrsRating,
  currentDateStr = getTodayKey()
): SrsCard => {
  let { repetition, intervalDays, easeFactor, historyCount } = card;
  historyCount += 1;

  if (rating === 'again') {
    repetition = 0;
    intervalDays = 1;
    easeFactor = Math.max(1.3, easeFactor - 0.2);
  } else if (rating === 'hard') {
    repetition = Math.max(1, repetition);
    intervalDays = Math.max(1, Math.round(intervalDays * 1.2));
    easeFactor = Math.max(1.3, easeFactor - 0.15);
  } else if (rating === 'good') {
    if (repetition === 0) {
      intervalDays = 1;
    } else if (repetition === 1) {
      intervalDays = 3;
    } else {
      intervalDays = Math.round(intervalDays * easeFactor);
    }
    repetition += 1;
  } else if (rating === 'easy') {
    if (repetition === 0) {
      intervalDays = 3;
    } else if (repetition === 1) {
      intervalDays = 7;
    } else {
      intervalDays = Math.round(intervalDays * easeFactor * 1.3);
    }
    repetition += 1;
    easeFactor = Math.min(2.8, easeFactor + 0.15);
  }

  const nextDueDate = addDays(currentDateStr, intervalDays);

  return {
    ...card,
    repetition,
    intervalDays,
    easeFactor: Math.round(easeFactor * 100) / 100,
    dueDate: nextDueDate,
    lastReviewedDate: currentDateStr,
    historyCount,
  };
};

/**
 * Filter cards that are due for review today or overdue
 */
export const getDueSrsCards = (cards: SrsCard[], today = getTodayKey()): SrsCard[] => {
  return cards.filter(card => card.dueDate <= today);
};

/**
 * Compute aggregate statistics for the SRS deck
 */
export const computeSrsStats = (cards: SrsCard[], today = getTodayKey()): SrsStats => {
  const total = cards.length;
  if (total === 0) {
    return { total: 0, dueToday: 0, learning: 0, review: 0, mastered: 0, retentionRate: 100 };
  }

  let dueToday = 0;
  let learning = 0;
  let review = 0;
  let mastered = 0;

  cards.forEach(c => {
    if (c.dueDate <= today) {
      dueToday += 1;
    }
    if (c.repetition === 0) {
      learning += 1;
    } else if (c.intervalDays >= 21) {
      mastered += 1;
    } else {
      review += 1;
    }
  });

  const matureCards = cards.filter(c => c.historyCount > 1);
  const successfulCards = matureCards.filter(c => c.repetition >= 2);
  const retentionRate = matureCards.length > 0
    ? Math.round((successfulCards.length / matureCards.length) * 100)
    : 100;

  return {
    total,
    dueToday,
    learning,
    review,
    mastered,
    retentionRate,
  };
};

/**
 * Pronunciation accuracy comparison for Voice Speaking Lab
 * Computes case-insensitive word similarity between spoken text and target text
 */
export const computeSpeechAccuracy = (spoken: string, target: string): number => {
  const clean = (s: string) =>
    s
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .trim()
      .split(/\s+/)
      .filter(Boolean);

  const spokenWords = clean(spoken);
  const targetWords = clean(target);

  if (targetWords.length === 0) return 100;
  if (spokenWords.length === 0) return 0;

  let matched = 0;
  const targetCopy = [...targetWords];

  spokenWords.forEach(w => {
    const idx = targetCopy.indexOf(w);
    if (idx !== -1) {
      matched += 1;
      targetCopy.splice(idx, 1);
    }
  });

  const precision = matched / spokenWords.length;
  const recall = matched / targetWords.length;
  const f1 = (precision + recall) > 0 ? (2 * precision * recall) / (precision + recall) : 0;

  return Math.min(100, Math.round(f1 * 100));
};

/**
 * Curated list of 15 essential Common Bengali English Mistakes with native corrections
 */
export const COMMON_BENGALI_MISTAKES: BengaliEnglishMistake[] = [
  {
    id: 1,
    wrong: 'I am agree with you.',
    correct: 'I agree with you.',
    bengaliNote: 'বাংলায় "আমি একমত" ভেবে am যোগ করা ভুল। Agree নিজেই একটি Verb।',
    explanation: '"Agree" is an action verb in English, not an adjective. Saying "I am agree" is grammatically incorrect.',
    category: 'grammar',
  },
  {
    id: 2,
    wrong: 'He told to me the truth.',
    correct: 'He told me the truth.',
    bengaliNote: 'Tell/Told এর পর সরাসরি object বসে, "to" বসে না।',
    explanation: '"Tell" takes a direct object ("told me"). Use "to" with "said" ("He said to me").',
    category: 'grammar',
  },
  {
    id: 3,
    wrong: 'I took admission in college.',
    correct: 'I got admitted to college.',
    bengaliNote: 'ভর্তি হওয়া বোঝাতে "take admission" নয়, "get admitted to" সঠিক।',
    explanation: 'Native English speakers use "get admitted to" or "enrolled in", not "took admission".',
    category: 'vocabulary',
  },
  {
    id: 4,
    wrong: 'Open the fan / Put off the light.',
    correct: 'Turn on the fan / Turn off the light.',
    bengaliNote: 'ফ্যান বা লাইট অন-অফ করতে Turn on / Switch on এবং Turn off ব্যবহার করুন।',
    explanation: 'Electronic appliances are turned on/off, not opened/closed.',
    category: 'vocabulary',
  },
  {
    id: 5,
    wrong: 'Why you are crying?',
    correct: 'Why are you crying?',
    bengaliNote: 'প্রশ্নবোধক বাক্যে Wh-word এর পর আগে Auxiliary Verb (are) আসবে।',
    explanation: 'In question syntax, the auxiliary verb precedes the subject: "Why are you...", not "Why you are...".',
    category: 'grammar',
  },
  {
    id: 6,
    wrong: 'He graduated since two years.',
    correct: 'He graduated two years ago.',
    bengaliNote: 'অতীতের নির্দিষ্ট সময়কাল আগে বোঝাতে "ago" ব্যবহার হয়, "since" নয়।',
    explanation: '"Ago" is used for past completed time duration; "since" is used with a starting point continuing to now.',
    category: 'grammar',
  },
  {
    id: 7,
    wrong: 'I cut the phone.',
    correct: 'I hung up the phone.',
    bengaliNote: 'ফোন কেটে দেওয়া বোঝাতে "hang up" সঠিক ইংরেজি।',
    explanation: 'To end a phone call is to "hang up", never "cut the phone".',
    category: 'idiom',
  },
  {
    id: 8,
    wrong: 'I am seeing a bird.',
    correct: 'I see a bird.',
    bengaliNote: 'See, hear, understand ইত্যাদি Stative verb সাধারণত Continuous tense এ হয় না।',
    explanation: 'Sensory perception verbs like "see" and "hear" are stative and usually take simple present.',
    category: 'grammar',
  },
  {
    id: 9,
    wrong: 'She does not knows English.',
    correct: 'She does not know English.',
    bengaliNote: 'Does/Doesn\'t এর পর মূল verb এর সাথে আর s/es যোগ হয় না।',
    explanation: 'After the auxiliary "does", the main verb always reverts to base form ("know").',
    category: 'grammar',
  },
  {
    id: 10,
    wrong: 'I will give an exam tomorrow.',
    correct: 'I will take/sit for an exam tomorrow.',
    bengaliNote: 'শিক্ষার্থী পরীক্ষা দিলে "take an exam" আর শিক্ষক পরীক্ষা নিলে "give an exam"।',
    explanation: 'Students "take" or "sit for" an exam; teachers "give" or administer the exam.',
    category: 'vocabulary',
  },
  {
    id: 11,
    wrong: 'He is my cousin brother.',
    correct: 'He is my cousin.',
    bengaliNote: 'ইংরেজিতে Cousin এর সাথে brother বা sister বলা বাহুল্য ও অশুদ্ধ।',
    explanation: '"Cousin" already conveys the relative relationship; "cousin brother" is Indian/Bangladeshi slang.',
    category: 'vocabulary',
  },
  {
    id: 12,
    wrong: 'I am looking forward to meet you.',
    correct: 'I am looking forward to meeting you.',
    bengaliNote: '"Look forward to" ফ্রেজের পর verb এর সাথে সর্বদা ing যোগ হয়।',
    explanation: 'The phrase "look forward to" ends in a preposition, so it requires a gerund ("meeting").',
    category: 'grammar',
  },
];

/**
 * Initial Seed SRS cards for new users so the review queue has immediate high-value cards
 */
export const INITIAL_SRS_CARDS: SrsCard[] = [
  {
    id: 'w_1',
    type: 'word',
    english: 'Hello',
    bengali: 'হ্যালো / নমস্কার',
    phonetic: 'হ্যালৌ',
    category: 'Basics',
    level: 'A1',
    repetition: 1,
    intervalDays: 1,
    easeFactor: 2.5,
    dueDate: getTodayKey(),
    historyCount: 1,
  },
  {
    id: 'w_3',
    type: 'word',
    english: 'Thank you',
    bengali: 'আপনাকে ধন্যবাদ',
    phonetic: 'থ্যাঙ্ক ইউ',
    category: 'Basics',
    level: 'A1',
    repetition: 1,
    intervalDays: 1,
    easeFactor: 2.5,
    dueDate: getTodayKey(),
    historyCount: 1,
  },
  {
    id: 's_8',
    type: 'sentence',
    english: 'I usually wake up at six.',
    bengali: 'আমি সাধারণত ছয়টায় ঘুম থেকে উঠি।',
    category: 'Daily',
    level: 'A1',
    repetition: 0,
    intervalDays: 1,
    easeFactor: 2.5,
    dueDate: getTodayKey(),
    historyCount: 0,
  },
  {
    id: 's_15',
    type: 'sentence',
    english: 'How much is this shirt?',
    bengali: 'এই শার্টটির দাম কত?',
    category: 'Shopping',
    level: 'A1',
    repetition: 0,
    intervalDays: 1,
    easeFactor: 2.5,
    dueDate: getTodayKey(),
    historyCount: 0,
  },
  {
    id: 'w_794',
    type: 'word',
    english: 'Piece of cake',
    bengali: 'খুবই সহজ কাজ',
    phonetic: 'পিস অব কেইক',
    category: 'Idioms',
    level: 'B2',
    repetition: 0,
    intervalDays: 1,
    easeFactor: 2.5,
    dueDate: getTodayKey(),
    historyCount: 0,
  },
  {
    id: 's_37',
    type: 'sentence',
    english: 'Thank you for your valuable feedback.',
    bengali: 'আপনার মূল্যবান মতামতের জন্য ধন্যবাদ।',
    category: 'Office',
    level: 'B2',
    repetition: 0,
    intervalDays: 1,
    easeFactor: 2.5,
    dueDate: getTodayKey(),
    historyCount: 0,
  },
];
