// src/data/curriculumData.ts
import { ALL_WORDS_DATABASE } from './wordsData';
import { SENTENCE_BANK } from './sentencesData';

export interface Question {
  id: string;
  type: 'mcq' | 'reorder' | 'listening' | 'matching';
  prompt: string;
  questionEn?: string;
  audioText?: string;
  options?: string[];
  answer?: string | string[];
  words?: string[];
  pairs?: { en: string; bn: string }[];
  hint?: string;
}

export interface Lesson {
  id: string;
  title: string;
  xp: number;
  count?: number;
  questions: Question[];
  isExam?: boolean;
  moduleId?: string;
}

export interface CurriculumModule {
  id: string;
  title: string;
  desc: string;
  icon: string;
  bg?: string;
  stageId?: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
  stageName?: string;
  kind?: 'core' | 'word' | 'sent';
  kindNo?: number;
  lessons: Lesson[];
  from?: number;
  to?: number;
}

export interface StageInfo {
  id: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
  title: string;
  subtitle: string;
  tag: string;
  color: string;
  icon: string;
  desc: string;
}

export const STAGES: StageInfo[] = [
  { id: 'A1', title: 'স্তর ১: প্রারম্ভিক (Beginner)', subtitle: 'বর্ণমালা, কুশলাদি, পরিবার, সাধারণ বস্তু ও সংখ্যা', tag: 'A1 Beginner', color: '#1CB0F6', icon: '🌱', desc: 'ইংরেজি শেখার শুভ সূচনা' },
  { id: 'A2', title: 'স্তর ২: প্রাথমিক (Elementary)', subtitle: 'দৈনন্দিন রুটিন, খাবার, কেনাকাটা, সহজ প্রশ্ন ও যাতায়াত', tag: 'A2 Elementary', color: '#6366F1', icon: '🌿', desc: 'দৈনন্দিন জীবনের প্রয়োজনীয় ইংরেজি' },
  { id: 'B1', title: 'স্তর ৩: মধ্যবর্তী (Intermediate)', subtitle: 'অতীত ও ভবিষ্যৎ কাল, ভ্রমণ, ডাক্তার ও স্বাস্থ্য, অনুভূতি', tag: 'B1 Intermediate', color: '#FF9600', icon: '⚡', desc: 'ভ্রমণ ও আত্মবিশ্বাসের সাথে কথা বলা' },
  { id: 'B2', title: 'স্তর ৪: উচ্চ-মধ্যবর্তী (Upper-Intermediate)', subtitle: 'অফিস ও পেশাগত কাজ, মিটিং, ইমেইল, চুক্তি, মতামত ও বিতর্ক', tag: 'B2 Upper-Int', color: '#CE82FF', icon: '💼', desc: 'পেশাদার ও কর্পোরেট যোগাযোগের দক্ষতা' },
  { id: 'C1', title: 'স্তর ৫: দক্ষ ও পারদর্শী (Advanced Fluency)', subtitle: 'নেটিভ ইডিয়মস, ফ্রেজাল ভার্বস, একাডেমিক ও পাবলিক স্পিকিং', tag: 'C1 Advanced', color: '#FF4B4B', icon: '👑', desc: 'অনর্গল ও নিখুঁত ইংরেজি সাবলীলতা' },
];

export const DAILY_QUESTS = [
  { id: 'q_lessons', title: 'কমপক্ষে ২টি লেসন সম্পন্ন করুন', target: 2, xp: 30, gems: 10, icon: '🎯', type: 'lessons' },
  { id: 'q_words', title: 'শব্দকোষে ৫টি শব্দ শুনুন বা সেভ করুন', target: 5, xp: 20, gems: 5, icon: '📚', type: 'words' },
  { id: 'q_score', title: 'যেকোনো কুইজে ৮০%+ স্কোর করুন', target: 1, xp: 25, gems: 10, icon: '⚡', type: 'score' },
  { id: 'q_streak', title: 'আজকের স্ট্রিক বজায় রাখুন', target: 1, xp: 20, gems: 5, icon: '🔥', type: 'streak' },
];

export const STREAK_MILESTONES = [
  { days: 3, title: '৩ দিনের শিখা', xp: 50, gems: 15, badge: '🔥 ৩ দিন পূর্ণ', rewardName: 'স্ট্রিক শিল্ড (Streak Freeze) 🛡️' },
  { days: 7, title: '৭ দিনের যোদ্ধা', xp: 150, gems: 35, badge: '⚔️ ৭ দিন বিজয়ী', rewardName: 'গোল্ডেন ফ্লেম ব্যাজ 🏆' },
  { days: 14, title: '১৪ দিনের চ্যাম্পিয়ন', xp: 300, gems: 70, badge: '🌟 ১৪ দিনের তারা', rewardName: 'সুপার বুস্টার ও ট্রফি 👑' },
  { days: 30, title: '৩০ দিনের লিজেন্ড', xp: 800, gems: 150, badge: '💎 ১ মাস মাস্টার', rewardName: 'গ্র্যান্ড লিজেন্ডারি মুকুট 💎' },
];

export const ACHIEVEMENTS = [
  { id: 'first_lesson', title: 'প্রথম পদক্ষেপ', desc: '১টি লেসন সম্পূর্ণ করেছেন', icon: '🌱', req: 1, type: 'lessons' },
  { id: 'vocab_50', title: 'শব্দ অন্বেষী', desc: '৫০টি শব্দ অনুশীলন করেছেন', icon: '📖', req: 50, type: 'words' },
  { id: 'streak_3', title: 'টানা ৩ দিন', desc: '৩ দিন নিয়মিত অনুশীলন করেছেন', icon: '🔥', req: 3, type: 'streak' },
  { id: 'streak_7', title: 'সাপ্তাহিক যোদ্ধা', desc: 'টানা ৭ দিনের স্ট্রিক বজায় রেখেছেন', icon: '⚔️', req: 7, type: 'streak' },
  { id: 'perfect_score', title: 'নিখুঁত শতভাগ', desc: 'একটি লেসনে ১০০% নির্ভুল স্কোর করেছেন', icon: '💎', req: 1, type: 'perfect' },
  { id: 'sentence_50', title: 'বাক্য বিশারদ', desc: '৫০টি বাক্য অনুশীলন করেছেন', icon: '💬', req: 50, type: 'sentences' },
  { id: 'xp_500', title: 'জ্ঞান সমুদ্র', desc: '৫০০ XP অর্জন করেছেন', icon: '⚡', req: 500, type: 'xp' },
  { id: 'exam_pass', title: 'পরীক্ষায় উত্তীর্ণ', desc: 'পরীক্ষায় ৭০%+ পেয়ে পাস করেছেন', icon: '🎓', req: 1, type: 'exam' },
];

// Helpers
const R = (id: string, bn: string, en: string): Question => ({
  id,
  type: 'reorder',
  prompt: `ইংরেজিতে সাজান: ${bn}`,
  words: en.split(' '),
  answer: en.split(' '),
  hint: `✔ সঠিক বাক্য: ${en}`
});

const M = (id: string, prompt: string, options: string[], answer: string, hint: string): Question => ({
  id,
  type: 'mcq',
  prompt,
  options,
  answer,
  hint
});

const L = (id: string, audioText: string, options: string[], answer: string, hint: string): Question => ({
  id,
  type: 'listening',
  prompt: 'শুনুন এবং সঠিক ইংরেজি বাক্যটি বেছে নিন:',
  audioText,
  options,
  answer,
  hint
});

// Build Core Stage Modules (Beginner A1 -> Advanced C1)
export const CORE_MODULES: CurriculumModule[] = [
  {
    "id": "mod_1",
    "stageId": "A1",
    "stageName": "স্তর ১: প্রারম্ভিক",
    "title": "১. পরিচিতি ও প্রাথমিক সম্ভাষণ (Basics & Greetings)",
    "desc": "হ্যালো, শুভ সকাল, ধন্যবাদ, নিজের পরিচয় ও বিদায়",
    "icon": "👋",
    "bg": "from-sky-500 to-sky-600",
    "kind": "core",
    "kindNo": 1,
    "lessons": [
      {
        "id": "mod_1_l1",
        "moduleId": "mod_1",
        "title": "বেসিক কুশলাদি (Basic Greetings)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_1_l1_q1",
            "type": "mcq",
            "prompt": "Choose the correct meaning of 'Hello, how are you?'",
            "options": [
              "হ্যালো, আপনি কেমন আছেন?",
              "শুভ সকাল, কি খবর?",
              "আপনি কোথায় থাকেন?",
              "বিদায় বন্ধু!"
            ],
            "answer": "হ্যালো, আপনি কেমন আছেন?",
            "hint": "How are you? = আপনি কেমন আছেন?"
          },
          {
            "id": "mod_1_l1_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: শুভ সকাল, আপনার সাথে দেখা হয়ে ভালো লাগল।",
            "words": [
              "Good",
              "morning,",
              "nice",
              "to",
              "meet",
              "you."
            ],
            "answer": [
              "Good",
              "morning,",
              "nice",
              "to",
              "meet",
              "you."
            ],
            "hint": "✔ সঠিক বাক্য: Good morning, nice to meet you."
          },
          {
            "id": "mod_1_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "See you tomorrow",
            "options": [
              "See you tomorrow",
              "Good night friend",
              "How is it going",
              "Welcome to my office"
            ],
            "answer": "See you tomorrow",
            "hint": "See you tomorrow = আগামীকাল দেখা হবে"
          },
          {
            "id": "mod_1_l1_q4",
            "type": "matching",
            "prompt": "সঠিক জোড়া মেলাও:",
            "pairs": [
              {
                "en": "Welcome",
                "bn": "স্বাগতম"
              },
              {
                "en": "Thank you",
                "bn": "ধন্যবাদ"
              },
              {
                "en": "Goodbye",
                "bn": "বিদায়"
              },
              {
                "en": "Please",
                "bn": "দয়া করে"
              }
            ]
          }
        ]
      },
      {
        "id": "mod_1_l2",
        "moduleId": "mod_1",
        "title": "নিজের পরিচয় দেওয়া (Self Introduction)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_1_l2_q1",
            "type": "mcq",
            "prompt": "Choose the correct translation for 'আমি একজন ছাত্র':",
            "options": [
              "I am a student.",
              "I am a teacher.",
              "He is a student.",
              "We are students."
            ],
            "answer": "I am a student.",
            "hint": "Student = ছাত্র / ছাত্রী"
          },
          {
            "id": "mod_1_l2_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমার নাম হাসান এবং আমি বাংলাদেশে থাকি।",
            "words": [
              "My",
              "name",
              "is",
              "Hasan",
              "and",
              "I",
              "live",
              "in",
              "Bangladesh."
            ],
            "answer": [
              "My",
              "name",
              "is",
              "Hasan",
              "and",
              "I",
              "live",
              "in",
              "Bangladesh."
            ],
            "hint": "✔ সঠিক বাক্য: My name is Hasan and I live in Bangladesh."
          },
          {
            "id": "mod_1_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Nice to meet you",
            "options": [
              "Nice to meet you",
              "How old are you",
              "Where do you live",
              "Have a nice day"
            ],
            "answer": "Nice to meet you",
            "hint": "Nice to meet you = দেখা হয়ে ভালো লাগল"
          }
        ]
      },
      {
        "id": "mod_1_l3",
        "moduleId": "mod_1",
        "title": "সৌজন্য ও বিদায় (Courtesies & Farewell)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_1_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আপনার দিনটি শুভ হোক।",
            "words": [
              "Have",
              "a",
              "nice",
              "day."
            ],
            "answer": [
              "Have",
              "a",
              "nice",
              "day."
            ],
            "hint": "✔ সঠিক বাক্য: Have a nice day."
          },
          {
            "id": "mod_1_l3_q2",
            "type": "mcq",
            "prompt": "'You are welcome' এর সঠিক বাংলা অর্থ কী?",
            "options": [
              "আপনাকে স্বাগতম",
              "ধন্যবাদ",
              "বিদায়",
              "মাফ করবেন"
            ],
            "answer": "আপনাকে স্বাগতম",
            "hint": "ধন্যবাদ দিলে প্রতিউত্তরে 'You are welcome' বলতে হয়।"
          },
          {
            "id": "mod_1_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Thank you for your help.",
            "options": [
              "Thank you for your help.",
              "I need your help.",
              "Where is my help?",
              "Help me please."
            ],
            "answer": "Thank you for your help.",
            "hint": "Thank you for your help = আপনার সাহায্যের জন্য ধন্যবাদ।"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_2",
    "stageId": "A1",
    "stageName": "স্তর ১: প্রারম্ভিক",
    "title": "২. পরিবার ও আত্মীয়স্বজন (Family & Relatives)",
    "desc": "বাবা, মা, ভাই, বোন, আত্মীয়স্বজন ও পারিবারিক জীবন",
    "icon": "👨‍👩‍👧‍👦",
    "bg": "from-sky-600 to-blue-600",
    "kind": "core",
    "kindNo": 2,
    "lessons": [
      {
        "id": "mod_2_l1",
        "moduleId": "mod_2",
        "title": "পরিবারের সদস্যবৃন্দ (Family Members)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_2_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমার পরিবারে চারজন সদস্য আছেন।",
            "words": [
              "There",
              "are",
              "four",
              "members",
              "in",
              "my",
              "family."
            ],
            "answer": [
              "There",
              "are",
              "four",
              "members",
              "in",
              "my",
              "family."
            ],
            "hint": "✔ সঠিক বাক্য: There are four members in my family."
          },
          {
            "id": "mod_2_l1_q2",
            "type": "mcq",
            "prompt": "'Father' এবং 'Mother' এর সঠিক বাংলা কী?",
            "options": [
              "বাবা এবং মা",
              "ভাই এবং বোন",
              "চাচা এবং চাচি",
              "দাদা এবং দাদি"
            ],
            "answer": "বাবা এবং মা",
            "hint": "Father = বাবা, Mother = মা"
          },
          {
            "id": "mod_2_l1_q3",
            "type": "matching",
            "prompt": "পরিবারের সম্পর্ক মেলাও:",
            "pairs": [
              {
                "en": "Father",
                "bn": "বাবা"
              },
              {
                "en": "Mother",
                "bn": "মা"
              },
              {
                "en": "Brother",
                "bn": "ভাই"
              },
              {
                "en": "Sister",
                "bn": "বোন"
              }
            ]
          }
        ]
      },
      {
        "id": "mod_2_l2",
        "moduleId": "mod_2",
        "title": "আত্মীয়স্বজন ও সম্পর্ক (Relatives & Kin)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_2_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমরা প্রতি শুক্রবার দাদা-দাদির বাড়ি যাই।",
            "words": [
              "We",
              "visit",
              "our",
              "grandparents",
              "every",
              "Friday."
            ],
            "answer": [
              "We",
              "visit",
              "our",
              "grandparents",
              "every",
              "Friday."
            ],
            "hint": "✔ সঠিক বাক্য: We visit our grandparents every Friday."
          },
          {
            "id": "mod_2_l2_q2",
            "type": "mcq",
            "prompt": "'He has two children' এর অর্থ কী?",
            "options": [
              "তার দুটি সন্তান আছে।",
              "তার দুটি ভাই আছে।",
              "সে স্কুলে যায়।",
              "তারা খেলছে।"
            ],
            "answer": "তার দুটি সন্তান আছে।",
            "hint": "Children = সন্তান সন্ততি"
          },
          {
            "id": "mod_2_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "My family is very close.",
            "options": [
              "My family is very close.",
              "My house is far away.",
              "We love our school.",
              "He lives alone."
            ],
            "answer": "My family is very close.",
            "hint": "Close = আন্তরিক বা ঘনিষ্ঠ"
          }
        ]
      },
      {
        "id": "mod_2_l3",
        "moduleId": "mod_2",
        "title": "পিতামাতার পেশা ও পরিচয় (Parents & Occupations)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_2_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমার বাবা একটি ব্যাংকে চাকরি করেন।",
            "words": [
              "My",
              "father",
              "works",
              "in",
              "a",
              "bank."
            ],
            "answer": [
              "My",
              "father",
              "works",
              "in",
              "a",
              "bank."
            ],
            "hint": "✔ সঠিক বাক্য: My father works in a bank."
          },
          {
            "id": "mod_2_l3_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমার মা খুব সুস্বাদু রান্না করেন।",
            "words": [
              "My",
              "mother",
              "cooks",
              "very",
              "well."
            ],
            "answer": [
              "My",
              "mother",
              "cooks",
              "very",
              "well."
            ],
            "hint": "✔ সঠিক বাক্য: My mother cooks very well."
          },
          {
            "id": "mod_2_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Do you have any brothers or sisters?",
            "options": [
              "Do you have any brothers or sisters?",
              "Where are your parents going?",
              "Is this your house?",
              "What is your father doing?"
            ],
            "answer": "Do you have any brothers or sisters?",
            "hint": "Brothers or sisters = ভাই অথবা বোন"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_3",
    "stageId": "A1",
    "stageName": "স্তর ১: প্রারম্ভিক",
    "title": "৩. সংখ্যা, দিন ও সময় (Numbers, Days & Time)",
    "desc": "সংখ্যা গণনা, সপ্তাহের ৭ দিন, ১২ মাস ও সময় বলা",
    "icon": "🔢",
    "bg": "from-blue-500 to-cyan-600",
    "kind": "core",
    "kindNo": 3,
    "lessons": [
      {
        "id": "mod_3_l1",
        "moduleId": "mod_3",
        "title": "সংখ্যা ও গণনা (Numbers 1-100)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_3_l1_q1",
            "type": "mcq",
            "prompt": "'Twenty-five' এর সংখ্যা কত?",
            "options": [
              "২৫",
              "৩৫",
              "১৫",
              "৫২"
            ],
            "answer": "২৫",
            "hint": "Twenty = ২০, Five = ৫ -> ২৫"
          },
          {
            "id": "mod_3_l1_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমার কাছে তিনটি নতুন বই আছে।",
            "words": [
              "I",
              "have",
              "three",
              "new",
              "books."
            ],
            "answer": [
              "I",
              "have",
              "three",
              "new",
              "books."
            ],
            "hint": "✔ সঠিক বাক্য: I have three new books."
          },
          {
            "id": "mod_3_l1_q3",
            "type": "mcq",
            "prompt": "'One hundred' মানে কত?",
            "options": [
              "১০০",
              "১০০০",
              "১০",
              "৫০"
            ],
            "answer": "১০০",
            "hint": "Hundred = শত / একশত"
          }
        ]
      },
      {
        "id": "mod_3_l2",
        "moduleId": "mod_3",
        "title": "বার ও মাস (Days of Week & Months)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_3_l2_q1",
            "type": "matching",
            "prompt": "বার ও অর্থ মেলাও:",
            "pairs": [
              {
                "en": "Monday",
                "bn": "সোমবার"
              },
              {
                "en": "Friday",
                "bn": "শুক্রবার"
              },
              {
                "en": "Sunday",
                "bn": "রবিবার"
              },
              {
                "en": "Wednesday",
                "bn": "বুধবার"
              }
            ]
          },
          {
            "id": "mod_3_l2_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আজকে বুধবার এবং আগামীকাল বৃহস্পতিবার।",
            "words": [
              "Today",
              "is",
              "Wednesday",
              "and",
              "tomorrow",
              "is",
              "Thursday."
            ],
            "answer": [
              "Today",
              "is",
              "Wednesday",
              "and",
              "tomorrow",
              "is",
              "Thursday."
            ],
            "hint": "✔ সঠিক বাক্য: Today is Wednesday and tomorrow is Thursday."
          },
          {
            "id": "mod_3_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "My birthday is next month.",
            "options": [
              "My birthday is next month.",
              "The exam is tomorrow.",
              "Today is a holiday.",
              "See you next week."
            ],
            "answer": "My birthday is next month.",
            "hint": "Next month = আগামী মাসে"
          }
        ]
      },
      {
        "id": "mod_3_l3",
        "moduleId": "mod_3",
        "title": "ঘড়ির সময় বলা (Telling Time)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_3_l3_q1",
            "type": "mcq",
            "prompt": "'What time is it?' দিয়ে কী বোঝায়?",
            "options": [
              "কয়টা বাজে?",
              "আপনি কখন যাবেন?",
              "আজ কী বার?",
              "দেরি হলো কেন?"
            ],
            "answer": "কয়টা বাজে?",
            "hint": "What time is it? = এখন সময় কত?"
          },
          {
            "id": "mod_3_l3_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এখন সাড়ে পাঁচটা বাজে।",
            "words": [
              "It",
              "is",
              "half",
              "past",
              "five."
            ],
            "answer": [
              "It",
              "is",
              "half",
              "past",
              "five."
            ],
            "hint": "✔ সঠিক বাক্য: It is half past five."
          },
          {
            "id": "mod_3_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Please come on time.",
            "options": [
              "Please come on time.",
              "I have no time.",
              "See you at five.",
              "What time is it?"
            ],
            "answer": "Please come on time.",
            "hint": "On time = সময়মতো"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_4",
    "stageId": "A1",
    "stageName": "স্তর ১: প্রারম্ভিক",
    "title": "৪. বাড়ি ও আসবাবপত্র (Home & Furniture)",
    "desc": "ঘর-বাড়ি, দরজা-জানালা, আসবাবপত্র ও রুমের বর্ণনা",
    "icon": "🏠",
    "bg": "from-cyan-600 to-teal-600",
    "kind": "core",
    "kindNo": 4,
    "lessons": [
      {
        "id": "mod_4_l1",
        "moduleId": "mod_4",
        "title": "ঘরের বিভিন্ন অংশ (Rooms of House)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_4_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমাদের বাড়িতে তিনটি শোবার ঘর আছে।",
            "words": [
              "Our",
              "house",
              "has",
              "three",
              "bedrooms."
            ],
            "answer": [
              "Our",
              "house",
              "has",
              "three",
              "bedrooms."
            ],
            "hint": "✔ সঠিক বাক্য: Our house has three bedrooms."
          },
          {
            "id": "mod_4_l1_q2",
            "type": "mcq",
            "prompt": "'Kitchen' মানে কোন ঘর?",
            "options": [
              "রান্নাঘর",
              "শোবার ঘর",
              "বাথরুম",
              "বসার ঘর"
            ],
            "answer": "রান্নাঘর",
            "hint": "Kitchen = রান্নাঘর"
          },
          {
            "id": "mod_4_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Please close the door.",
            "options": [
              "Please close the door.",
              "Open the window.",
              "Turn on the light.",
              "Clean the floor."
            ],
            "answer": "Please close the door.",
            "hint": "Close the door = দরজা বন্ধ করুন"
          }
        ]
      },
      {
        "id": "mod_4_l2",
        "moduleId": "mod_4",
        "title": "আসবাবপত্র ও জিনিসপত্র (Furniture & Objects)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_4_l2_q1",
            "type": "matching",
            "prompt": "আসবাবপত্র মেলাও:",
            "pairs": [
              {
                "en": "Table",
                "bn": "টেবিল"
              },
              {
                "en": "Chair",
                "bn": "চেয়ার"
              },
              {
                "en": "Bed",
                "bn": "বিছানা"
              },
              {
                "en": "Mirror",
                "bn": "আয়না"
              }
            ]
          },
          {
            "id": "mod_4_l2_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: দয়া করে খাবার টেবিলটি পরিষ্কার করুন।",
            "words": [
              "Please",
              "clean",
              "the",
              "dining",
              "table."
            ],
            "answer": [
              "Please",
              "clean",
              "the",
              "dining",
              "table."
            ],
            "hint": "✔ সঠিক বাক্য: Please clean the dining table."
          },
          {
            "id": "mod_4_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Turn on the light.",
            "options": [
              "Turn on the light.",
              "Turn off the fan.",
              "Open the window.",
              "Close the door."
            ],
            "answer": "Turn on the light.",
            "hint": "Turn on = চালু করা"
          }
        ]
      },
      {
        "id": "mod_4_l3",
        "moduleId": "mod_4",
        "title": "বাড়ি সংক্রান্ত জরুরি পরিস্থিতি (Home Emergencies)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_4_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বিদ্যুৎ চলে গেছে একটি মোমবাতি জ্বালান।",
            "words": [
              "The",
              "electricity",
              "is",
              "gone",
              "light",
              "a",
              "candle."
            ],
            "answer": [
              "The",
              "electricity",
              "is",
              "gone",
              "light",
              "a",
              "candle."
            ],
            "hint": "✔ সঠিক বাক্য: The electricity is gone light a candle."
          },
          {
            "id": "mod_4_l3_q2",
            "type": "mcq",
            "prompt": "'Turn off the fan' এর সঠিক অর্থ কী?",
            "options": [
              "ফ্যান বন্ধ করুন",
              "ফ্যান চালু করুন",
              "ফ্যান পরিষ্কার করুন",
              "ফ্যান ঠিক করুন"
            ],
            "answer": "ফ্যান বন্ধ করুন",
            "hint": "Turn off = বন্ধ করা"
          },
          {
            "id": "mod_4_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Where did you put the key?",
            "options": [
              "Where did you put the key?",
              "Did you lock the door?",
              "The room is very clean.",
              "I am at home."
            ],
            "answer": "Where did you put the key?",
            "hint": "Key = চাবি"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_5",
    "stageId": "A1",
    "stageName": "স্তর ১: প্রারম্ভিক",
    "title": "৫. খাবার ও দৈনন্দিন আহার (Food & Everyday Meals)",
    "desc": "ভাত, রুটি, মাছ, মাংস, চা-কফি ও দৈনন্দিন খাবার",
    "icon": "🍛",
    "bg": "from-teal-500 to-emerald-600",
    "kind": "core",
    "kindNo": 5,
    "lessons": [
      {
        "id": "mod_5_l1",
        "moduleId": "mod_5",
        "title": "প্রধান খাবারসমূহ (Staple Foods)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_5_l1_q1",
            "type": "matching",
            "prompt": "খাবার মেলাও:",
            "pairs": [
              {
                "en": "Rice",
                "bn": "ভাত"
              },
              {
                "en": "Water",
                "bn": "পানি"
              },
              {
                "en": "Milk",
                "bn": "দুধ"
              },
              {
                "en": "Bread",
                "bn": "রুটি"
              }
            ]
          },
          {
            "id": "mod_5_l1_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমি সকালে ডিম ও রুটি খাই।",
            "words": [
              "I",
              "eat",
              "eggs",
              "and",
              "bread",
              "in",
              "the",
              "morning."
            ],
            "answer": [
              "I",
              "eat",
              "eggs",
              "and",
              "bread",
              "in",
              "the",
              "morning."
            ],
            "hint": "✔ সঠিক বাক্য: I eat eggs and bread in the morning."
          },
          {
            "id": "mod_5_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "I am very hungry.",
            "options": [
              "I am very hungry.",
              "The food is spicy.",
              "Bring me some water.",
              "What do you want?"
            ],
            "answer": "I am very hungry.",
            "hint": "Hungry = ক্ষুধার্ত"
          }
        ]
      },
      {
        "id": "mod_5_l2",
        "moduleId": "mod_5",
        "title": "চা-কফি ও স্ন্যাক্স (Tea, Coffee & Snacks)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_5_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমি সাধারণত সন্ধ্যায় এক কাপ রং চা খাই।",
            "words": [
              "I",
              "usually",
              "drink",
              "black",
              "tea",
              "in",
              "the",
              "evening."
            ],
            "answer": [
              "I",
              "usually",
              "drink",
              "black",
              "tea",
              "in",
              "the",
              "evening."
            ],
            "hint": "✔ সঠিক বাক্য: I usually drink black tea in the evening."
          },
          {
            "id": "mod_5_l2_q2",
            "type": "mcq",
            "prompt": "'Delicious' শব্দের সঠিক অর্থ কী?",
            "options": [
              "সুস্বাদু",
              "ঝাল",
              "মিষ্টি",
              "তেতো"
            ],
            "answer": "সুস্বাদু",
            "hint": "Delicious = অত্যন্ত সুস্বাদু"
          },
          {
            "id": "mod_5_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Please bring me a glass of water.",
            "options": [
              "Please bring me a glass of water.",
              "I would like a cup of tea.",
              "Can I have the menu?",
              "The soup is cold."
            ],
            "answer": "Please bring me a glass of water.",
            "hint": "Glass of water = এক গ্লাস পানি"
          }
        ]
      },
      {
        "id": "mod_5_l3",
        "moduleId": "mod_5",
        "title": "খাবারের স্বাদ ও সতর্কতা (Flavors & Preferences)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_5_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমি বেশি ঝাল খাবার খেতে পারি না।",
            "words": [
              "I",
              "cannot",
              "eat",
              "very",
              "spicy",
              "food."
            ],
            "answer": [
              "I",
              "cannot",
              "eat",
              "very",
              "spicy",
              "food."
            ],
            "hint": "✔ সঠিক বাক্য: I cannot eat very spicy food."
          },
          {
            "id": "mod_5_l3_q2",
            "type": "mcq",
            "prompt": "'I am allergic to peanuts' এর অর্থ কী?",
            "options": [
              "বাদামে আমার অ্যালার্জি আছে।",
              "আমি বাদাম পছন্দ করি।",
              "বাদাম খুব সুস্বাদু।",
              "আমার বাদাম চাই।"
            ],
            "answer": "বাদামে আমার অ্যালার্জি আছে।",
            "hint": "Allergic = অ্যালার্জি থাকা"
          },
          {
            "id": "mod_5_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "This soup is too hot.",
            "options": [
              "This soup is too hot.",
              "The food is delicious.",
              "We are eating dinner.",
              "Can I have more rice?"
            ],
            "answer": "This soup is too hot.",
            "hint": "Too hot = অতিরিক্ত গরম"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_6",
    "stageId": "A1",
    "stageName": "স্তর ১: প্রারম্ভিক",
    "title": "৬. রঙ, আকার ও শারীরিক বৈশিষ্ট্য (Colors & Shapes)",
    "desc": "রঙের নাম, আকার-আকৃতি, লম্বা-খাটো ও সাধারণ বৈশিষ্ট্য",
    "icon": "🎨",
    "bg": "from-emerald-500 to-green-600",
    "kind": "core",
    "kindNo": 6,
    "lessons": [
      {
        "id": "mod_6_l1",
        "moduleId": "mod_6",
        "title": "রঙের বৈচিত্র্য (Colors Spectrum)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_6_l1_q1",
            "type": "matching",
            "prompt": "রঙ মেলাও:",
            "pairs": [
              {
                "en": "Red",
                "bn": "লাল"
              },
              {
                "en": "Green",
                "bn": "সবুজ"
              },
              {
                "en": "Blue",
                "bn": "নীল"
              },
              {
                "en": "Yellow",
                "bn": "হলুদ"
              }
            ]
          },
          {
            "id": "mod_6_l1_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমার একটি নীল রঙের শার্ট আছে।",
            "words": [
              "I",
              "have",
              "a",
              "blue",
              "shirt."
            ],
            "answer": [
              "I",
              "have",
              "a",
              "blue",
              "shirt."
            ],
            "hint": "✔ সঠিক বাক্য: I have a blue shirt."
          },
          {
            "id": "mod_6_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "White is a peaceful color.",
            "options": [
              "White is a peaceful color.",
              "Black shoes are nice.",
              "The sky is blue.",
              "I like red roses."
            ],
            "answer": "White is a peaceful color.",
            "hint": "White = সাদা"
          }
        ]
      },
      {
        "id": "mod_6_l2",
        "moduleId": "mod_6",
        "title": "আকার ও গুণাবলী (Shapes & Sizes)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_6_l2_q1",
            "type": "mcq",
            "prompt": "'Big' এর বিপরীত শব্দ কোনটি?",
            "options": [
              "Small",
              "Tall",
              "Long",
              "Fast"
            ],
            "answer": "Small",
            "hint": "Big (বড়) এর বিপরীত Small (ছোট)"
          },
          {
            "id": "mod_6_l2_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সে একজন লম্বা এবং শক্তিশালী মানুষ।",
            "words": [
              "He",
              "is",
              "a",
              "tall",
              "and",
              "strong",
              "man."
            ],
            "answer": [
              "He",
              "is",
              "a",
              "tall",
              "and",
              "strong",
              "man."
            ],
            "hint": "✔ সঠিক বাক্য: He is a tall and strong man."
          },
          {
            "id": "mod_6_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "This is a heavy box.",
            "options": [
              "This is a heavy box.",
              "The box is empty.",
              "I need a small table.",
              "The line is straight."
            ],
            "answer": "This is a heavy box.",
            "hint": "Heavy = ভারী"
          }
        ]
      },
      {
        "id": "mod_6_l3",
        "moduleId": "mod_6",
        "title": "বিপরীত শব্দ জোড় (Common Opposites)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_6_l3_q1",
            "type": "matching",
            "prompt": "বিপরীত জোড়া মেলাও:",
            "pairs": [
              {
                "en": "Hot",
                "bn": "Cold"
              },
              {
                "en": "Easy",
                "bn": "Difficult"
              },
              {
                "en": "Clean",
                "bn": "Dirty"
              },
              {
                "en": "Fast",
                "bn": "Slow"
              }
            ]
          },
          {
            "id": "mod_6_l3_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই কাজটি খুবই সহজ কিন্তু গুরুত্বপূর্ণ।",
            "words": [
              "This",
              "task",
              "is",
              "very",
              "easy",
              "but",
              "important."
            ],
            "answer": [
              "This",
              "task",
              "is",
              "very",
              "easy",
              "but",
              "important."
            ],
            "hint": "✔ সঠিক বাক্য: This task is very easy but important."
          },
          {
            "id": "mod_6_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Is this answer right or wrong?",
            "options": [
              "Is this answer right or wrong?",
              "The room is very quiet.",
              "I am ready now.",
              "Everything is true."
            ],
            "answer": "Is this answer right or wrong?",
            "hint": "Right or wrong = সঠিক নাকি ভুল"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_7",
    "stageId": "A1",
    "stageName": "স্তর ১: প্রারম্ভিক",
    "title": "৭. দৈনন্দিন মৌলিক ক্রিয়াকলাপ (Daily Basic Actions)",
    "desc": "ঘুম থেকে ওঠা, হাঁটা, কথা বলা, পড়া ও লেখা",
    "icon": "🚶‍♂️",
    "bg": "from-green-600 to-lime-600",
    "kind": "core",
    "kindNo": 7,
    "lessons": [
      {
        "id": "mod_7_l1",
        "moduleId": "mod_7",
        "title": "সকালের কাজ (Morning Routine Actions)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_7_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমি প্রতিদিন সকাল ছয়টায় ঘুম থেকে উঠি।",
            "words": [
              "I",
              "wake",
              "up",
              "at",
              "six",
              "every",
              "day."
            ],
            "answer": [
              "I",
              "wake",
              "up",
              "at",
              "six",
              "every",
              "day."
            ],
            "hint": "✔ সঠিক বাক্য: I wake up at six every day."
          },
          {
            "id": "mod_7_l1_q2",
            "type": "mcq",
            "prompt": "'Brush your teeth' এর অর্থ কী?",
            "options": [
              "দাঁত ব্রাশ করা",
              "মুখ ধোয়া",
              "গোসল করা",
              "ঘুমাতে যাওয়া"
            ],
            "answer": "দাঁত ব্রাশ করা",
            "hint": "Brush teeth = দাঁত মাজা"
          },
          {
            "id": "mod_7_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "I wash my hands and face.",
            "options": [
              "I wash my hands and face.",
              "I brush my hair.",
              "I drink a cup of tea.",
              "I eat my breakfast."
            ],
            "answer": "I wash my hands and face.",
            "hint": "Hands and face = হাত ও মুখ"
          }
        ]
      },
      {
        "id": "mod_7_l2",
        "moduleId": "mod_7",
        "title": "কথা বলা ও শোনা (Speaking & Listening)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_7_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সে খুব ধীরে এবং স্পষ্টভাবে কথা বলে।",
            "words": [
              "She",
              "speaks",
              "very",
              "slowly",
              "and",
              "clearly."
            ],
            "answer": [
              "She",
              "speaks",
              "very",
              "slowly",
              "and",
              "clearly."
            ],
            "hint": "✔ সঠিক বাক্য: She speaks very slowly and clearly."
          },
          {
            "id": "mod_7_l2_q2",
            "type": "mcq",
            "prompt": "'Listen' এবং 'Hear' এর মধ্যে কোনটি মনোযোগ দিয়ে শোনা?",
            "options": [
              "Listen",
              "Hear",
              "Speak",
              "Tell"
            ],
            "answer": "Listen",
            "hint": "মনোযোগ দিয়ে শোনার ক্ষেত্রে Listen ব্যবহার করা হয়।"
          },
          {
            "id": "mod_7_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Please listen to me carefully.",
            "options": [
              "Please listen to me carefully.",
              "Speak a little louder.",
              "I cannot hear you.",
              "Can you hear my voice?"
            ],
            "answer": "Please listen to me carefully.",
            "hint": "Carefully = সতর্কতার সাথে"
          }
        ]
      },
      {
        "id": "mod_7_l3",
        "moduleId": "mod_7",
        "title": "পড়াশোনা ও বোঝা (Reading & Understanding)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_7_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমি ইংরেজি পত্রিকা পড়তে পছন্দ করি।",
            "words": [
              "I",
              "like",
              "to",
              "read",
              "English",
              "newspapers."
            ],
            "answer": [
              "I",
              "like",
              "to",
              "read",
              "English",
              "newspapers."
            ],
            "hint": "✔ সঠিক বাক্য: I like to read English newspapers."
          },
          {
            "id": "mod_7_l3_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমি বিষয়টি সম্পূর্ণ বুঝতে পেরেছি।",
            "words": [
              "I",
              "understand",
              "the",
              "matter",
              "completely."
            ],
            "answer": [
              "I",
              "understand",
              "the",
              "matter",
              "completely."
            ],
            "hint": "✔ সঠিক বাক্য: I understand the matter completely."
          },
          {
            "id": "mod_7_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Practice makes a man perfect.",
            "options": [
              "Practice makes a man perfect.",
              "Knowledge is power.",
              "Time is money.",
              "Actions speak louder."
            ],
            "answer": "Practice makes a man perfect.",
            "hint": "Practice = নিয়মিত অনুশীলন"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_8",
    "stageId": "A1",
    "stageName": "স্তর ১: প্রারম্ভিক",
    "title": "৮. শহরের স্থান ও পথ খোঁজা (City Places & Directions)",
    "desc": "ব্যাংক, স্কুল, হাসপাতাল, দিকনির্দেশনা ও অবস্থান",
    "icon": "🏙️",
    "bg": "from-lime-600 to-amber-600",
    "kind": "core",
    "kindNo": 8,
    "lessons": [
      {
        "id": "mod_8_l1",
        "moduleId": "mod_8",
        "title": "শহরের প্রধান স্থান (City Landmarks)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_8_l1_q1",
            "type": "matching",
            "prompt": "স্থানের নাম মেলাও:",
            "pairs": [
              {
                "en": "Hospital",
                "bn": "হাসপাতাল"
              },
              {
                "en": "Bank",
                "bn": "ব্যাংক"
              },
              {
                "en": "School",
                "bn": "বিদ্যালয়"
              },
              {
                "en": "Market",
                "bn": "বাজার"
              }
            ]
          },
          {
            "id": "mod_8_l1_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: কাছের হাসপাতালটি কোন দিকে?",
            "words": [
              "Which",
              "way",
              "is",
              "the",
              "nearest",
              "hospital?"
            ],
            "answer": [
              "Which",
              "way",
              "is",
              "the",
              "nearest",
              "hospital?"
            ],
            "hint": "✔ সঠিক বাক্য: Which way is the nearest hospital?"
          },
          {
            "id": "mod_8_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Where is the central pharmacy?",
            "options": [
              "Where is the central pharmacy?",
              "The hospital is far away.",
              "Turn right at the corner.",
              "Is it within walking distance?"
            ],
            "answer": "Where is the central pharmacy?",
            "hint": "Central pharmacy = কেন্দ্রীয় ফার্মেসি"
          }
        ]
      },
      {
        "id": "mod_8_l2",
        "moduleId": "mod_8",
        "title": "রাস্তা ও দিকনির্দেশনা (Giving Directions)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_8_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সোজা এগিয়ে যান এবং মোড়ে ডানে ঘুরুন।",
            "words": [
              "Go",
              "straight",
              "ahead",
              "and",
              "turn",
              "right",
              "at",
              "the",
              "corner."
            ],
            "answer": [
              "Go",
              "straight",
              "ahead",
              "and",
              "turn",
              "right",
              "at",
              "the",
              "corner."
            ],
            "hint": "✔ সঠিক বাক্য: Go straight ahead and turn right at the corner."
          },
          {
            "id": "mod_8_l2_q2",
            "type": "mcq",
            "prompt": "'Turn left' এর অর্থ কী?",
            "options": [
              "বামে ঘুরুন",
              "ডানে ঘুরুন",
              "সোজা যান",
              "পেছনে তাকান"
            ],
            "answer": "বামে ঘুরুন",
            "hint": "Left = বাম দিক"
          },
          {
            "id": "mod_8_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "It is on your left hand side.",
            "options": [
              "It is on your left hand side.",
              "Go straight for two hundred meters.",
              "Cross the road carefully.",
              "It takes five minutes on foot."
            ],
            "answer": "It is on your left hand side.",
            "hint": "Left hand side = বাম পাশে"
          }
        ]
      },
      {
        "id": "mod_8_l3",
        "moduleId": "mod_8",
        "title": "দূরত্ব ও পৌঁছানো (Distance & Transit)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_8_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এখান থেকে হেঁটে যেতে কতক্ষণ লাগে?",
            "words": [
              "How",
              "long",
              "does",
              "it",
              "take",
              "on",
              "foot",
              "from",
              "here?"
            ],
            "answer": [
              "How",
              "long",
              "does",
              "it",
              "take",
              "on",
              "foot",
              "from",
              "here?"
            ],
            "hint": "✔ সঠিক বাক্য: How long does it take on foot from here?"
          },
          {
            "id": "mod_8_l3_q2",
            "type": "mcq",
            "prompt": "'Near' এবং 'Far' এর অর্থ কী?",
            "options": [
              "নিকট এবং দূর",
              "সোজা এবং বাঁকা",
              "বড় এবং ছোট",
              "আগে এবং পরে"
            ],
            "answer": "নিকট এবং দূর",
            "hint": "Near = কাছে, Far = দূরে"
          },
          {
            "id": "mod_8_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "It takes only five minutes on foot.",
            "options": [
              "It takes only five minutes on foot.",
              "The market is very crowded.",
              "Take a rickshaw or a bus.",
              "Turn right after the signal."
            ],
            "answer": "It takes only five minutes on foot.",
            "hint": "On foot = পায়ে হেঁটে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_9",
    "stageId": "A1",
    "stageName": "স্তর ১: প্রারম্ভিক",
    "title": "৯. অনুভূতি, সুখ ও দুঃখ (Feelings & Emotions)",
    "desc": "সুখী, ক্লান্ত, নার্ভাস, কৃতজ্ঞ, রাগ ও মানসিক অবস্থা",
    "icon": "😊",
    "bg": "from-amber-500 to-orange-600",
    "kind": "core",
    "kindNo": 9,
    "lessons": [
      {
        "id": "mod_9_l1",
        "moduleId": "mod_9",
        "title": "ইতিবাচক অনুভূতি (Positive Feelings)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_9_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আজকে আমি খুব খুশি এবং আনন্দিত।",
            "words": [
              "Today",
              "I",
              "am",
              "very",
              "happy",
              "and",
              "joyful."
            ],
            "answer": [
              "Today",
              "I",
              "am",
              "very",
              "happy",
              "and",
              "joyful."
            ],
            "hint": "✔ সঠিক বাক্য: Today I am very happy and joyful."
          },
          {
            "id": "mod_9_l1_q2",
            "type": "mcq",
            "prompt": "'Grateful' শব্দের সঠিক বাংলা অর্থ কী?",
            "options": [
              "কৃতজ্ঞ",
              "রাগান্বিত",
              "ভীত",
              "বিস্মিত"
            ],
            "answer": "কৃতজ্ঞ",
            "hint": "Grateful = কৃতজ্ঞ / ধন্যবাদশীল"
          },
          {
            "id": "mod_9_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "I am proud of your achievement.",
            "options": [
              "I am proud of your achievement.",
              "I feel very tired today.",
              "Do not be shy at all.",
              "We are really excited."
            ],
            "answer": "I am proud of your achievement.",
            "hint": "Proud = গর্বিত"
          }
        ]
      },
      {
        "id": "mod_9_l2",
        "moduleId": "mod_9",
        "title": "ক্লান্তি ও মানসিক চাপ (Tiredness & Stress)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_9_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সারাদিন কাজের পর আমি বেশ ক্লান্ত।",
            "words": [
              "After",
              "working",
              "all",
              "day",
              "I",
              "am",
              "quite",
              "tired."
            ],
            "answer": [
              "After",
              "working",
              "all",
              "day",
              "I",
              "am",
              "quite",
              "tired."
            ],
            "hint": "✔ সঠিক বাক্য: After working all day I am quite tired."
          },
          {
            "id": "mod_9_l2_q2",
            "type": "mcq",
            "prompt": "'Nervous' বোধ করলে কী বলা উচিত?",
            "options": [
              "I feel nervous.",
              "I feel hungry.",
              "I feel angry.",
              "I am happy."
            ],
            "answer": "I feel nervous.",
            "hint": "Nervous = ঘাবড়ে যাওয়া / চিন্তিত"
          },
          {
            "id": "mod_9_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Take a deep breath and relax.",
            "options": [
              "Take a deep breath and relax.",
              "Do not lose your temper.",
              "I feel much better now.",
              "She was surprised by the news."
            ],
            "answer": "Take a deep breath and relax.",
            "hint": "Deep breath = গভীর শ্বাস"
          }
        ]
      },
      {
        "id": "mod_9_l3",
        "moduleId": "mod_9",
        "title": "রাগ ও সান্ত্বনা (Anger & Comfort)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_9_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: চিন্তা করবেন না সবকিছু ঠিক হয়ে যাবে।",
            "words": [
              "Do",
              "not",
              "worry",
              "everything",
              "will",
              "be",
              "fine."
            ],
            "answer": [
              "Do",
              "not",
              "worry",
              "everything",
              "will",
              "be",
              "fine."
            ],
            "hint": "✔ সঠিক বাক্য: Do not worry everything will be fine."
          },
          {
            "id": "mod_9_l3_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: ধৈর্য ধরুন শান্ত মস্তিষ্কে সিদ্ধান্ত নিন।",
            "words": [
              "Be",
              "patient",
              "and",
              "decide",
              "with",
              "a",
              "calm",
              "mind."
            ],
            "answer": [
              "Be",
              "patient",
              "and",
              "decide",
              "with",
              "a",
              "calm",
              "mind."
            ],
            "hint": "✔ সঠিক বাক্য: Be patient and decide with a calm mind."
          },
          {
            "id": "mod_9_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Cheer up, better days are coming.",
            "options": [
              "Cheer up, better days are coming.",
              "I am so angry with you.",
              "Why are you so quiet?",
              "You can count on me."
            ],
            "answer": "Cheer up, better days are coming.",
            "hint": "Cheer up = মন ভালো করুন"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_10",
    "stageId": "A1",
    "stageName": "স্তর ১: প্রারম্ভিক",
    "title": "১০. লেভেল A1 চেকপয়েন্ট ও সার্টিফিকেট টেস্ট (Checkpoint A1 Grand Exam)",
    "desc": "A1 স্টেজের পূর্ণাঙ্গ মূল্যায়ন ও দক্ষতা যাচাই পরীক্ষা",
    "icon": "🎓",
    "bg": "from-orange-600 to-rose-600",
    "kind": "core",
    "kindNo": 10,
    "lessons": [
      {
        "id": "mod_10_l1",
        "moduleId": "mod_10",
        "title": "A1 ব্যাকরণ ও অনুবাদ পরীক্ষা (A1 Grammar Exam)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_10_l1_q1",
            "type": "mcq",
            "prompt": "'He is an honest man' এর সঠিক অর্থ কী?",
            "options": [
              "তিনি একজন সৎ ব্যক্তি।",
              "তিনি একজন শিক্ষক।",
              "তিনি আমার ভাই।",
              "তিনি বাড়িতে আছেন।"
            ],
            "answer": "তিনি একজন সৎ ব্যক্তি।",
            "hint": "Honest = সৎ"
          },
          {
            "id": "mod_10_l1_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমরা প্রতিদিন একসাথে বিদ্যালয়ে যাই।",
            "words": [
              "We",
              "go",
              "to",
              "school",
              "together",
              "every",
              "day."
            ],
            "answer": [
              "We",
              "go",
              "to",
              "school",
              "together",
              "every",
              "day."
            ],
            "hint": "✔ সঠিক বাক্য: We go to school together every day."
          },
          {
            "id": "mod_10_l1_q3",
            "type": "mcq",
            "prompt": "'They are happy' - এখানে Subject ও Verb কোনটি?",
            "options": [
              "They হল Subject, are হল Verb",
              "Happy হল Subject",
              "Are হল Object",
              "They হল Adjective"
            ],
            "answer": "They হল Subject, are হল Verb",
            "hint": "They = তারা (Subject), are = হয় (Verb)"
          }
        ]
      },
      {
        "id": "mod_10_l2",
        "moduleId": "mod_10",
        "title": "A1 কথপোকথন ও লিসেনিং কুইজ (A1 Conversation Quiz)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_10_l2_q1",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "What is your father's profession?",
            "options": [
              "What is your father's profession?",
              "Where does your brother live?",
              "How many children do you have?",
              "What time does the class start?"
            ],
            "answer": "What is your father's profession?",
            "hint": "Profession = পেশা"
          },
          {
            "id": "mod_10_l2_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আপনার সাথে কথা বলে আনন্দিত হলাম।",
            "words": [
              "It",
              "was",
              "a",
              "pleasure",
              "talking",
              "with",
              "you."
            ],
            "answer": [
              "It",
              "was",
              "a",
              "pleasure",
              "talking",
              "with",
              "you."
            ],
            "hint": "✔ সঠিক বাক্য: It was a pleasure talking with you."
          },
          {
            "id": "mod_10_l2_q3",
            "type": "matching",
            "prompt": "A1 মাস্টার ম্যাচিং:",
            "pairs": [
              {
                "en": "Welcome",
                "bn": "স্বাগতম"
              },
              {
                "en": "Excuse me",
                "bn": "মাফ করবেন"
              },
              {
                "en": "Never mind",
                "bn": "কিছু মনে করবেন না"
              },
              {
                "en": "Of course",
                "bn": "অবশ্যই"
              }
            ]
          }
        ]
      },
      {
        "id": "mod_10_l3",
        "moduleId": "mod_10",
        "title": "A1 সমাপনী সনদপত্র পরীক্ষা (A1 Final Qualification)",
        "xp": 25,
        "isExam": true,
        "questions": [
          {
            "id": "mod_10_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: ধৈর্য এবং প্রতিদিনের অনুশীলনে ইংরেজি সহজ হয়।",
            "words": [
              "With",
              "patience",
              "and",
              "daily",
              "practice",
              "English",
              "becomes",
              "easy."
            ],
            "answer": [
              "With",
              "patience",
              "and",
              "daily",
              "practice",
              "English",
              "becomes",
              "easy."
            ],
            "hint": "✔ সঠিক বাক্য: With patience and daily practice English becomes easy."
          },
          {
            "id": "mod_10_l3_q2",
            "type": "mcq",
            "prompt": "'Thank you very much' এর উত্তরে কী বলা সবচেয়ে মার্জিত?",
            "options": [
              "You are welcome.",
              "No.",
              "I am fine.",
              "Goodbye."
            ],
            "answer": "You are welcome.",
            "hint": "ধন্যবাদ পেলে ভদ্রভাবে You are welcome বলতে হয়।"
          },
          {
            "id": "mod_10_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Congratulations on passing the A1 exam!",
            "options": [
              "Congratulations on passing the A1 exam!",
              "Good luck with your presentation tomorrow.",
              "Have a safe and pleasant journey.",
              "Welcome back to our English course."
            ],
            "answer": "Congratulations on passing the A1 exam!",
            "hint": "Congratulations = অভিনন্দন"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_11",
    "stageId": "A2",
    "stageName": "স্তর ২: প্রাথমিক",
    "title": "১১. দৈনন্দিন রুটিন ও সময়ানুবর্তিতা (Daily Routine & Habits)",
    "desc": "সকাল থেকে রাত, সপ্তাহের অভ্যাস ও সময়নিষ্ঠা",
    "icon": "⏰",
    "bg": "from-indigo-500 to-indigo-600",
    "kind": "core",
    "kindNo": 11,
    "lessons": [
      {
        "id": "mod_11_l1",
        "moduleId": "mod_11",
        "title": "ভোর থেকে অফিস (Morning to Workplace)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_11_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমি সকালে ত্রিশ মিনিট হাঁটার অভ্যাস করি।",
            "words": [
              "I",
              "practice",
              "walking",
              "for",
              "thirty",
              "minutes",
              "in",
              "the",
              "morning."
            ],
            "answer": [
              "I",
              "practice",
              "walking",
              "for",
              "thirty",
              "minutes",
              "in",
              "the",
              "morning."
            ],
            "hint": "✔ সঠিক বাক্য: I practice walking for thirty minutes in the morning."
          },
          {
            "id": "mod_11_l1_q2",
            "type": "mcq",
            "prompt": "'Rush hours' বলতে কী বোঝায়?",
            "options": [
              "ব্যস্ততম সময় যখন ট্রাফিক জ্যাম বেশি থাকে",
              "ছুটির দিন",
              "ভোরের শান্ত সময়",
              "রাতের খাবার সময়"
            ],
            "answer": "ব্যস্ততম সময় যখন ট্রাফিক জ্যাম বেশি থাকে",
            "hint": "Rush hour = রাস্তায় চরম ভিড় ও ব্যস্ততার সময়"
          },
          {
            "id": "mod_11_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "The traffic is heavy during rush hours.",
            "options": [
              "The traffic is heavy during rush hours.",
              "I reach the office around nine.",
              "We have a short team meeting.",
              "I take a lunch break at one."
            ],
            "answer": "The traffic is heavy during rush hours.",
            "hint": "Heavy traffic = তীব্র যানজট"
          }
        ]
      },
      {
        "id": "mod_11_l2",
        "moduleId": "mod_11",
        "title": "কাজের ফাঁকে ও বিশ্রাম (Midday Break & Habits)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_11_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমি সারা দিন প্রচুর বিশুদ্ধ পানি পান করি।",
            "words": [
              "I",
              "drink",
              "plenty",
              "of",
              "pure",
              "water",
              "throughout",
              "the",
              "day."
            ],
            "answer": [
              "I",
              "drink",
              "plenty",
              "of",
              "pure",
              "water",
              "throughout",
              "the",
              "day."
            ],
            "hint": "✔ সঠিক বাক্য: I drink plenty of pure water throughout the day."
          },
          {
            "id": "mod_11_l2_q2",
            "type": "mcq",
            "prompt": "'Throughout the day' এর অর্থ কী?",
            "options": [
              "সারাদিন জুড়ে",
              "সকাল বেলায়",
              "মাঝে মাঝে",
              "রাতের বেলা"
            ],
            "answer": "সারাদিন জুড়ে",
            "hint": "Throughout = শুরু থেকে শেষ অবধি"
          },
          {
            "id": "mod_11_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Consistency is key to forming good habits.",
            "options": [
              "Consistency is key to forming good habits.",
              "I wash my clothes on Saturday.",
              "Sometimes I cook special dishes.",
              "I visit my parents twice a month."
            ],
            "answer": "Consistency is key to forming good habits.",
            "hint": "Consistency = ধারাবাহিকতা"
          }
        ]
      },
      {
        "id": "mod_11_l3",
        "moduleId": "mod_11",
        "title": "রাতের প্রস্তুতি ও ঘুম (Evening & Sleep Routine)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_11_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: ঘুমানোর আগে আমি বিশ মিনিট বই পড়ি।",
            "words": [
              "Before",
              "going",
              "to",
              "sleep",
              "I",
              "read",
              "a",
              "book",
              "for",
              "twenty",
              "minutes."
            ],
            "answer": [
              "Before",
              "going",
              "to",
              "sleep",
              "I",
              "read",
              "a",
              "book",
              "for",
              "twenty",
              "minutes."
            ],
            "hint": "✔ সঠিক বাক্য: Before going to sleep I read a book for twenty minutes."
          },
          {
            "id": "mod_11_l3_q2",
            "type": "mcq",
            "prompt": "'Turn off' এবং 'Turn on' এর পার্থক্য কী?",
            "options": [
              "Turn off মানে বন্ধ করা এবং Turn on মানে চালু করা",
              "উভয়ই এক",
              "Turn off মানে খোলা",
              "Turn on মানে ধোয়া"
            ],
            "answer": "Turn off মানে বন্ধ করা এবং Turn on মানে চালু করা",
            "hint": "Off = বন্ধ, On = চালু"
          },
          {
            "id": "mod_11_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Getting seven hours of sleep improves focus.",
            "options": [
              "Getting seven hours of sleep improves focus.",
              "I turn off the lights at ten thirty.",
              "I spend quality time with my family.",
              "Listening to soft music helps me relax."
            ],
            "answer": "Getting seven hours of sleep improves focus.",
            "hint": "Improves focus = মনোযোগ বৃদ্ধি করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_12",
    "stageId": "A2",
    "stageName": "স্তর ২: প্রাথমিক",
    "title": "১২. কেনাকাটা, দরদাম ও জামাকাপড় (Shopping & Bargaining)",
    "desc": "দোকানে কাপড় কেনা, ট্রায়াল রুম, সাইজ ও দরদাম",
    "icon": "🛍️",
    "bg": "from-indigo-600 to-violet-600",
    "kind": "core",
    "kindNo": 12,
    "lessons": [
      {
        "id": "mod_12_l1",
        "moduleId": "mod_12",
        "title": "দোকানে কাপড় পছন্দ (Clothing & Trial)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_12_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমি কি এটি ট্রায়াল রুমে পরে দেখতে পারি?",
            "words": [
              "Can",
              "I",
              "try",
              "this",
              "on",
              "in",
              "the",
              "fitting",
              "room?"
            ],
            "answer": [
              "Can",
              "I",
              "try",
              "this",
              "on",
              "in",
              "the",
              "fitting",
              "room?"
            ],
            "hint": "✔ সঠিক বাক্য: Can I try this on in the fitting room?"
          },
          {
            "id": "mod_12_l1_q2",
            "type": "mcq",
            "prompt": "'Trial room' বা 'Fitting room' কী?",
            "options": [
              "পোশাক মাপমতো হয় কিনা দেখার নির্ধারিত কক্ষ",
              "বিল দেওয়ার কাউন্টার",
              "পণ্য রাখার গুদাম",
              "বিশ্রামাগার"
            ],
            "answer": "পোশাক মাপমতো হয় কিনা দেখার নির্ধারিত কক্ষ",
            "hint": "Fitting room = ট্রায়াল রুম"
          },
          {
            "id": "mod_12_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "This shirt fits me perfectly.",
            "options": [
              "This shirt fits me perfectly.",
              "Do you have this in navy blue?",
              "This pair of shoes is too tight.",
              "Can you show me one size larger?"
            ],
            "answer": "This shirt fits me perfectly.",
            "hint": "Fits perfectly = একদম মানানসই মাপ"
          }
        ]
      },
      {
        "id": "mod_12_l2",
        "moduleId": "mod_12",
        "title": "দরদাম ও মূল্য ছাড় (Bargaining & Discounts)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_12_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই পণ্যের উপর কোনো বিশেষ ছাড় আছে কি?",
            "words": [
              "Is",
              "there",
              "any",
              "special",
              "discount",
              "on",
              "this",
              "item?"
            ],
            "answer": [
              "Is",
              "there",
              "any",
              "special",
              "discount",
              "on",
              "this",
              "item?"
            ],
            "hint": "✔ সঠিক বাক্য: Is there any special discount on this item?"
          },
          {
            "id": "mod_12_l2_q2",
            "type": "mcq",
            "prompt": "'Fixed price' লেখা থাকলে কী করবেন?",
            "options": [
              "দরদাম না করে নির্ধারিত দামে কিনবেন",
              "অর্ধেক দাম বলবেন",
              "ফ্রি চাইবেন",
              "বাকিতে নিবেন"
            ],
            "answer": "দরদাম না করে নির্ধারিত দামে কিনবেন",
            "hint": "Fixed price = একদাম / নির্ধারিত মূল্য"
          },
          {
            "id": "mod_12_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Could you lower the price a little bit?",
            "options": [
              "Could you lower the price a little bit?",
              "That price is a bit high for my budget.",
              "If you buy two you get twenty percent off.",
              "Here is your change and receipt."
            ],
            "answer": "Could you lower the price a little bit?",
            "hint": "Lower the price = দাম কিছুটা কমানো"
          }
        ]
      },
      {
        "id": "mod_12_l3",
        "moduleId": "mod_12",
        "title": "পেমেন্ট ও রসিদ (Payment & Receipts)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_12_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমি কি ক্রেডিট কার্ড বা বিকাশ দিয়ে পরিশোধ করতে পারি?",
            "words": [
              "Can",
              "I",
              "pay",
              "with",
              "a",
              "credit",
              "card",
              "or",
              "mobile",
              "wallet?"
            ],
            "answer": [
              "Can",
              "I",
              "pay",
              "with",
              "a",
              "credit",
              "card",
              "or",
              "mobile",
              "wallet?"
            ],
            "hint": "✔ সঠিক বাক্য: Can I pay with a credit card or mobile wallet?"
          },
          {
            "id": "mod_12_l3_q2",
            "type": "mcq",
            "prompt": "'Receipt' বা 'Cash memo' এর কাজ কী?",
            "options": [
              "ক্রয়ের প্রমাণপত্র",
              "বিজ্ঞাপন",
              "টাকা ফেরত না দেওয়ার চুক্তি",
              "ডিসকাউন্ট কুপন"
            ],
            "answer": "ক্রয়ের প্রমাণপত্র",
            "hint": "Receipt = ক্রয়ের অফিসিয়াল রসিদ"
          },
          {
            "id": "mod_12_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "What is your return and exchange policy?",
            "options": [
              "What is your return and exchange policy?",
              "You can exchange it within seven days.",
              "Please keep the cash memo safe.",
              "Can you wrap this as a gift for me?"
            ],
            "answer": "What is your return and exchange policy?",
            "hint": "Exchange policy = বদল করার নিয়ম"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_13",
    "stageId": "A2",
    "stageName": "স্তর ২: প্রাথমিক",
    "title": "১৩. রেস্তোরাঁ ও ক্যাফে শিষ্টাচার (Dining Out & Cafes)",
    "desc": "টেবিল বুকিং, মেনু নির্বাচন, খাবার অর্ডার ও টিপস",
    "icon": "🍽️",
    "bg": "from-violet-500 to-purple-600",
    "kind": "core",
    "kindNo": 13,
    "lessons": [
      {
        "id": "mod_13_l1",
        "moduleId": "mod_13",
        "title": "টেবিল সংরক্ষণ ও মেনু (Table & Menu)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_13_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: দুইজনের জন্য একটি টেবিল খালি আছে কি?",
            "words": [
              "Is",
              "there",
              "a",
              "table",
              "available",
              "for",
              "two",
              "people?"
            ],
            "answer": [
              "Is",
              "there",
              "a",
              "table",
              "available",
              "for",
              "two",
              "people?"
            ],
            "hint": "✔ সঠিক বাক্য: Is there a table available for two people?"
          },
          {
            "id": "mod_13_l1_q2",
            "type": "mcq",
            "prompt": "'Reservation' বলতে কী বোঝায়?",
            "options": [
              "আগে থেকে টেবিল বা সিট বুক করে রাখা",
              "বিল পরিশোধ করা",
              "রান্নার রেসিপি",
              "ওয়েটারকে ডাকা"
            ],
            "answer": "আগে থেকে টেবিল বা সিট বুক করে রাখা",
            "hint": "Reservation = অগ্রিম সংরক্ষণ"
          },
          {
            "id": "mod_13_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Could you please bring us the menu?",
            "options": [
              "Could you please bring us the menu?",
              "What is the special dish today?",
              "I would like a bowl of hot soup.",
              "Are you ready to order now?"
            ],
            "answer": "Could you please bring us the menu?",
            "hint": "Menu = খাবারের তালিকা"
          }
        ]
      },
      {
        "id": "mod_13_l2",
        "moduleId": "mod_13",
        "title": "খাবার অর্ডার ও বিশেষ অনুরোধ (Special Ordering)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_13_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: অনুগ্রহ করে এই তরকারিতে ঝাল কম দিন।",
            "words": [
              "Please",
              "make",
              "this",
              "curry",
              "less",
              "spicy."
            ],
            "answer": [
              "Please",
              "make",
              "this",
              "curry",
              "less",
              "spicy."
            ],
            "hint": "✔ সঠিক বাক্য: Please make this curry less spicy."
          },
          {
            "id": "mod_13_l2_q2",
            "type": "mcq",
            "prompt": "'Vegetarian' ব্যক্তির খাবারে কী থাকে না?",
            "options": [
              "মাছ, মাংস বা ডিম",
              "শাকসবজি",
              "চাল বা রুটি",
              "ফলমূল"
            ],
            "answer": "মাছ, মাংস বা ডিম",
            "hint": "Vegetarian = নিরামিষাশী"
          },
          {
            "id": "mod_13_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Does this dish contain any dairy or nuts?",
            "options": [
              "Does this dish contain any dairy or nuts?",
              "The grilled fish was cooked to perfection.",
              "Would you like something to drink with your meal?",
              "Just a bottle of mineral water please."
            ],
            "answer": "Does this dish contain any dairy or nuts?",
            "hint": "Nuts = বাদাম"
          }
        ]
      },
      {
        "id": "mod_13_l3",
        "moduleId": "mod_13",
        "title": "বিল পরিশোধ ও টিপ দেওয়া (Bills & Tipping)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_13_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমরা কি বিলটি সমান ভাগে ভাগ করতে পারি?",
            "words": [
              "Can",
              "we",
              "split",
              "the",
              "bill",
              "evenly",
              "among",
              "us?"
            ],
            "answer": [
              "Can",
              "we",
              "split",
              "the",
              "bill",
              "evenly",
              "among",
              "us?"
            ],
            "hint": "✔ সঠিক বাক্য: Can we split the bill evenly among us?"
          },
          {
            "id": "mod_13_l3_q2",
            "type": "mcq",
            "prompt": "'Keep the change' মানে কী?",
            "options": [
              "ভাঙতি টাকাটা আপনি বখশিশ হিসেবে রাখুন",
              "টাকা ফেরত দিন",
              "সব টাকা নিয়ে যান",
              "বিল ভুল হয়েছে"
            ],
            "answer": "ভাঙতি টাকাটা আপনি বখশিশ হিসেবে রাখুন",
            "hint": "Keep the change = ফেরত টাকা টিপ হিসেবে রাখুন"
          },
          {
            "id": "mod_13_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Thank you for the wonderful service.",
            "options": [
              "Thank you for the wonderful service.",
              "Keep the change as a tip.",
              "Do you accept digital wallet payments?",
              "Can we have the bill please?"
            ],
            "answer": "Thank you for the wonderful service.",
            "hint": "Wonderful service = চমৎকার সেবা"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_14",
    "stageId": "A2",
    "stageName": "স্তর ২: প্রাথমিক",
    "title": "১৪. গণপরিবহন, বাস ও মেট্রো রেল (Public Transit & Commuting)",
    "desc": "বাস স্টপ, মেট্রো স্মার্ট কার্ড, টিকিট ও ট্রাফিক",
    "icon": "🚗",
    "bg": "from-purple-600 to-fuchsia-600",
    "kind": "core",
    "kindNo": 14,
    "lessons": [
      {
        "id": "mod_14_l1",
        "moduleId": "mod_14",
        "title": "বাস ও রিকশা যাত্রা (Bus & Rickshaw)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_14_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: ধানমন্ডি থেকে গুলশান যেতে রিকশা ভাড়া কত?",
            "words": [
              "How",
              "much",
              "does",
              "a",
              "rickshaw",
              "ride",
              "cost",
              "from",
              "Dhanmondi",
              "to",
              "Gulshan?"
            ],
            "answer": [
              "How",
              "much",
              "does",
              "a",
              "rickshaw",
              "ride",
              "cost",
              "from",
              "Dhanmondi",
              "to",
              "Gulshan?"
            ],
            "hint": "✔ সঠিক বাক্য: How much does a rickshaw ride cost from Dhanmondi to Gulshan?"
          },
          {
            "id": "mod_14_l1_q2",
            "type": "mcq",
            "prompt": "'Fare' শব্দের অর্থ কী?",
            "options": [
              "যাতায়াত ভাড়া",
              "সুন্দর চেহারা",
              "ট্রেন স্টেশন",
              "গতিবেগ"
            ],
            "answer": "যাতায়াত ভাড়া",
            "hint": "Fare = গাড়ি বা যানের ভাড়া"
          },
          {
            "id": "mod_14_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Which bus goes directly to the airport?",
            "options": [
              "Which bus goes directly to the airport?",
              "Please drive carefully and wear a helmet.",
              "Passengers are requested to maintain a queue.",
              "Always confirm the fare beforehand."
            ],
            "answer": "Which bus goes directly to the airport?",
            "hint": "Directly = সরাসরি"
          }
        ]
      },
      {
        "id": "mod_14_l2",
        "moduleId": "mod_14",
        "title": "মেট্রো রেল ও স্মার্ট কার্ড (Metro Transit)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_14_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: শাহবাগ স্টেশনে যাওয়ার জন্য কোন ট্রেনে উঠব?",
            "words": [
              "Which",
              "train",
              "should",
              "I",
              "take",
              "to",
              "go",
              "to",
              "Shahbagh",
              "station?"
            ],
            "answer": [
              "Which",
              "train",
              "should",
              "I",
              "take",
              "to",
              "go",
              "to",
              "Shahbagh",
              "station?"
            ],
            "hint": "✔ সঠিক বাক্য: Which train should I take to go to Shahbagh station?"
          },
          {
            "id": "mod_14_l2_q2",
            "type": "mcq",
            "prompt": "'Automated fare gate' এ কী ব্যবহার করা হয়?",
            "options": [
              "মেট্রো স্মার্ট কার্ড বা কিউআর টিকিট",
              "সাধারণ কাগজের নোট",
              "পাসপোর্ট",
              "ব্যাংক চেক"
            ],
            "answer": "মেট্রো স্মার্ট কার্ড বা কিউআর টিকিট",
            "hint": "Fare gate = স্বয়ংক্রিয় গেট"
          },
          {
            "id": "mod_14_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Please stand behind the yellow security line.",
            "options": [
              "Please stand behind the yellow security line.",
              "Let the passengers get off first.",
              "Trains arrive every six minutes.",
              "Keep your metro smart card ready."
            ],
            "answer": "Please stand behind the yellow security line.",
            "hint": "Security line = নিরাপত্তারেখা"
          }
        ]
      },
      {
        "id": "mod_14_l3",
        "moduleId": "mod_14",
        "title": "ট্রাফিক জ্যাম ও বিকল্প পথ (Traffic Navigation)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_14_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: যানজট এড়াতে আমাদের মেট্রোতে চড়া উচিত।",
            "words": [
              "We",
              "should",
              "take",
              "the",
              "metro",
              "to",
              "avoid",
              "the",
              "traffic",
              "jam."
            ],
            "answer": [
              "We",
              "should",
              "take",
              "the",
              "metro",
              "to",
              "avoid",
              "the",
              "traffic",
              "jam."
            ],
            "hint": "✔ সঠিক বাক্য: We should take the metro to avoid the traffic jam."
          },
          {
            "id": "mod_14_l3_q2",
            "type": "mcq",
            "prompt": "'Standstill' ট্রাফিকের মানে কী?",
            "options": [
              "গাড়ি সম্পূর্ণ স্থবির হয়ে আটকে আছে",
              "খালি রাস্তা",
              "দ্রুত চলছে",
              "দুর্ঘটনা ঘটেছে"
            ],
            "answer": "গাড়ি সম্পূর্ণ স্থবির হয়ে আটকে আছে",
            "hint": "Standstill = সম্পূর্ণ থমকে থাকা"
          },
          {
            "id": "mod_14_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "The expressway has drastically cut down travel time.",
            "options": [
              "The expressway has drastically cut down travel time.",
              "We missed our stop at the intersection.",
              "Always look both ways before crossing.",
              "Can you drop me off across the street?"
            ],
            "answer": "The expressway has drastically cut down travel time.",
            "hint": "Cut down travel time = ভ্রমণের সময় কমিয়ে এনেছে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_15",
    "stageId": "A2",
    "stageName": "স্তর ২: প্রাথমিক",
    "title": "১৫. সাধারণ রোগবালাই ও চিকিৎসা (Health & Medical Care)",
    "desc": "ডাক্তার দেখানো, জ্বর-সর্দি, ফার্মেসি ও সুস্থতা",
    "icon": "🩺",
    "bg": "from-fuchsia-600 to-pink-600",
    "kind": "core",
    "kindNo": 15,
    "lessons": [
      {
        "id": "mod_15_l1",
        "moduleId": "mod_15",
        "title": "লক্ষণ ও উপসর্গ বলা (Describing Symptoms)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_15_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: তিন দিন ধরে আমার তীব্র মাথাব্যথা এবং জ্বর।",
            "words": [
              "I",
              "have",
              "had",
              "a",
              "severe",
              "headache",
              "and",
              "fever",
              "for",
              "three",
              "days."
            ],
            "answer": [
              "I",
              "have",
              "had",
              "a",
              "severe",
              "headache",
              "and",
              "fever",
              "for",
              "three",
              "days."
            ],
            "hint": "✔ সঠিক বাক্য: I have had a severe headache and fever for three days."
          },
          {
            "id": "mod_15_l1_q2",
            "type": "mcq",
            "prompt": "'Symptom' শব্দের অর্থ কী?",
            "options": [
              "রোগের শারীরিক লক্ষণ বা উপসর্গ",
              "ওষুধের নাম",
              "হাসপাতালের বিল",
              "রোগমুক্তির তারিখ"
            ],
            "answer": "রোগের শারীরিক লক্ষণ বা উপসর্গ",
            "hint": "Symptom = উপসর্গ / লক্ষণ"
          },
          {
            "id": "mod_15_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Good morning doctor, I have not been feeling well.",
            "options": [
              "Good morning doctor, I have not been feeling well.",
              "How long have you had these symptoms?",
              "Do you have any body aches or shivering?",
              "My entire body feels heavy and exhausted."
            ],
            "answer": "Good morning doctor, I have not been feeling well.",
            "hint": "Not feeling well = ভালো বোধ করছি না"
          }
        ]
      },
      {
        "id": "mod_15_l2",
        "moduleId": "mod_15",
        "title": "প্রেসক্রিপশন ও ওষুধের নিয়ম (Prescriptions & Dosage)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_15_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: খাবার পর একটি করে ট্যাবলেট দিনে দুবার খাবেন।",
            "words": [
              "Take",
              "one",
              "tablet",
              "twice",
              "a",
              "day",
              "after",
              "meals."
            ],
            "answer": [
              "Take",
              "one",
              "tablet",
              "twice",
              "a",
              "day",
              "after",
              "meals."
            ],
            "hint": "✔ সঠিক বাক্য: Take one tablet twice a day after meals."
          },
          {
            "id": "mod_15_l2_q2",
            "type": "mcq",
            "prompt": "'Twice a day' মানে কতবার?",
            "options": [
              "দিনে দুইবার",
              "দিনে একবার",
              "দুই দিনে একবার",
              "সপ্তাহে দুইবার"
            ],
            "answer": "দিনে দুইবার",
            "hint": "Twice = দুইবার, Thrice = তিনবার"
          },
          {
            "id": "mod_15_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Take this prescribed antibiotic for five consecutive days.",
            "options": [
              "Take this prescribed antibiotic for five consecutive days.",
              "Make sure you drink plenty of warm fluids.",
              "Avoid cold drinks and ice cream for a few days.",
              "Get complete bed rest for at least two days."
            ],
            "answer": "Take this prescribed antibiotic for five consecutive days.",
            "hint": "Consecutive = একটানা / ধারাবাহিকভাবে"
          }
        ]
      },
      {
        "id": "mod_15_l3",
        "moduleId": "mod_15",
        "title": "ফার্মেসি ও প্রাথমিক সুস্থতা (Pharmacy & Recovery)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_15_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: রাস্তার ওপাশে একটি চব্বিশ ঘণ্টার খোলা ফার্মেসি আছে।",
            "words": [
              "There",
              "is",
              "a",
              "twenty-four",
              "hour",
              "pharmacy",
              "across",
              "the",
              "street."
            ],
            "answer": [
              "There",
              "is",
              "a",
              "twenty-four",
              "hour",
              "pharmacy",
              "across",
              "the",
              "street."
            ],
            "hint": "✔ সঠিক বাক্য: There is a twenty-four hour pharmacy across the street."
          },
          {
            "id": "mod_15_l3_q2",
            "type": "mcq",
            "prompt": "'First aid' শব্দের অর্থ কী?",
            "options": [
              "জরুরি প্রাথমিক চিকিৎসা",
              "অপারেশন থিয়েটার",
              "ডাক্তারের ফি",
              "রক্তদান"
            ],
            "answer": "জরুরি প্রাথমিক চিকিৎসা",
            "hint": "First aid = প্রাথমিক চিকিৎসা"
          },
          {
            "id": "mod_15_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Wash your hands thoroughly before touching food.",
            "options": [
              "Wash your hands thoroughly before touching food.",
              "Mental health is just as important as physical health.",
              "Regular exercise keeps the heart strong and fit.",
              "Smoking is extremely dangerous for the lungs."
            ],
            "answer": "Wash your hands thoroughly before touching food.",
            "hint": "Thoroughly = খুব ভালোভাবে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_16",
    "stageId": "A2",
    "stageName": "স্তর ২: প্রাথমিক",
    "title": "১৬. পোশাক, ফ্যাশন ও আবহাওয়ার প্রস্তুতি (Clothing & Accessories)",
    "desc": "ঋতুভিত্তিক পোশাক, ফ্যাব্রিক, জুতো ও এক্সেসরিজ",
    "icon": "👕",
    "bg": "from-pink-500 to-rose-600",
    "kind": "core",
    "kindNo": 16,
    "lessons": [
      {
        "id": "mod_16_l1",
        "moduleId": "mod_16",
        "title": "পোশাকের ধরন ও উপাদান (Clothing Fabrics)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_16_l1_q1",
            "type": "matching",
            "prompt": "পোশাকের কাপড় মেলাও:",
            "pairs": [
              {
                "en": "Cotton",
                "bn": "সুতি কাপড়"
              },
              {
                "en": "Silk",
                "bn": "রেশমি কাপড়"
              },
              {
                "en": "Wool",
                "bn": "পশমি কাপড়"
              },
              {
                "en": "Leather",
                "bn": "চামড়া"
              }
            ]
          },
          {
            "id": "mod_16_l1_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: গ্রীষ্মকালে সুতি কাপড় পরা স্বস্তিদায়ক।",
            "words": [
              "Wearing",
              "cotton",
              "clothes",
              "in",
              "summer",
              "is",
              "comfortable."
            ],
            "answer": [
              "Wearing",
              "cotton",
              "clothes",
              "in",
              "summer",
              "is",
              "comfortable."
            ],
            "hint": "✔ সঠিক বাক্য: Wearing cotton clothes in summer is comfortable."
          },
          {
            "id": "mod_16_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "This winter jacket is very warm and windproof.",
            "options": [
              "This winter jacket is very warm and windproof.",
              "Do you have this dress in pure silk?",
              "Can you alter the length of these pants?",
              "I need a sturdy umbrella for the monsoon."
            ],
            "answer": "This winter jacket is very warm and windproof.",
            "hint": "Windproof = বাতাসরোধী"
          }
        ]
      },
      {
        "id": "mod_16_l2",
        "moduleId": "mod_16",
        "title": "জুতো ও অনুষঙ্গ (Footwear & Accessories)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_16_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: হাঁটার জন্য আরামদায়ক স্নিকার্স বেছে নিন।",
            "words": [
              "Choose",
              "comfortable",
              "sneakers",
              "for",
              "walking."
            ],
            "answer": [
              "Choose",
              "comfortable",
              "sneakers",
              "for",
              "walking."
            ],
            "hint": "✔ সঠিক বাক্য: Choose comfortable sneakers for walking."
          },
          {
            "id": "mod_16_l2_q2",
            "type": "mcq",
            "prompt": "'Wristwatch' বলতে কী বোঝায়?",
            "options": [
              "হাতের ঘড়ি",
              "দেয়াল ঘড়ি",
              "পকেট ঘড়ি",
              "চশমা"
            ],
            "answer": "হাতের ঘড়ি",
            "hint": "Wrist = কবজি, Watch = ঘড়ি"
          },
          {
            "id": "mod_16_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Always wear certified helmets while riding motorcycles.",
            "options": [
              "Always wear certified helmets while riding motorcycles.",
              "Keep your purchase receipt safe for warranty.",
              "Can you check the price tag on that leather belt?",
              "This boutique has an exclusive collection."
            ],
            "answer": "Always wear certified helmets while riding motorcycles.",
            "hint": "Certified helmet = মানসম্মত হেলমেট"
          }
        ]
      },
      {
        "id": "mod_16_l3",
        "moduleId": "mod_16",
        "title": "পোশাকের যত্ন ও পরিচ্ছন্নতা (Laundry & Wardrobe)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_16_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: ইস্ত্রি করার পর জামাকাপড় হ্যাঙ্গারে ঝুলিয়ে রাখুন।",
            "words": [
              "Hang",
              "the",
              "clothes",
              "on",
              "hangers",
              "after",
              "ironing."
            ],
            "answer": [
              "Hang",
              "the",
              "clothes",
              "on",
              "hangers",
              "after",
              "ironing."
            ],
            "hint": "✔ সঠিক বাক্য: Hang the clothes on hangers after ironing."
          },
          {
            "id": "mod_16_l3_q2",
            "type": "mcq",
            "prompt": "'Stitch' শব্দের অর্থ কী?",
            "options": [
              "সেলাই",
              "বোতাম",
              "পকেট",
              "কাপড় ধোয়া"
            ],
            "answer": "সেলাই",
            "hint": "Stitch = সেলাই করা"
          },
          {
            "id": "mod_16_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Please fold these freshly ironed shirts carefully.",
            "options": [
              "Please fold these freshly ironed shirts carefully.",
              "Hang your wet umbrella outside.",
              "Do not use harsh detergents on delicate silk.",
              "Keep your wardrobe clean and organized."
            ],
            "answer": "Please fold these freshly ironed shirts carefully.",
            "hint": "Freshly ironed = সদ্য ইস্ত্রি করা"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_17",
    "stageId": "A2",
    "stageName": "স্তর ২: প্রাথমিক",
    "title": "১৭. আবহাওয়া, ছয় ঋতু ও প্রকৃতি (Weather & Seasons)",
    "desc": "বৃষ্টি, ঝড়, কুয়াশা, রোদ ও বাংলার ছয় ঋতু",
    "icon": "🌤️",
    "bg": "from-rose-500 to-amber-600",
    "kind": "core",
    "kindNo": 17,
    "lessons": [
      {
        "id": "mod_17_l1",
        "moduleId": "mod_17",
        "title": "গ্রীষ্ম ও বর্ষা কাল (Summer & Monsoon)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_17_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: গ্রীষ্মের দাবদাহের পর বর্ষার বৃষ্টি স্বস্তি আনে।",
            "words": [
              "After",
              "summer",
              "heat",
              "monsoon",
              "rain",
              "brings",
              "much",
              "relief."
            ],
            "answer": [
              "After",
              "summer",
              "heat",
              "monsoon",
              "rain",
              "brings",
              "much",
              "relief."
            ],
            "hint": "✔ সঠিক বাক্য: After summer heat monsoon rain brings much relief."
          },
          {
            "id": "mod_17_l1_q2",
            "type": "mcq",
            "prompt": "'Drizzle' বলতে কেমন বৃষ্টি বোঝায়?",
            "options": [
              "গুঁড়ি গুঁড়ি মৃদু বৃষ্টি",
              "ভারী মুষলধারে বৃষ্টি",
              "শিলাবৃষ্টি",
              "ঝড়ো বাতাস"
            ],
            "answer": "গুঁড়ি গুঁড়ি মৃদু বৃষ্টি",
            "hint": "Drizzle = হালকা গুঁড়ি গুঁড়ি বৃষ্টি"
          },
          {
            "id": "mod_17_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Dense morning fog reduced visibility on the highway.",
            "options": [
              "Dense morning fog reduced visibility on the highway.",
              "The sky cleared up after the afternoon thunderstorm.",
              "Remember to carry an umbrella today.",
              "Gentle rain brings a refreshing scent of wet earth."
            ],
            "answer": "Dense morning fog reduced visibility on the highway.",
            "hint": "Dense fog = ঘন কুয়াশা"
          }
        ]
      },
      {
        "id": "mod_17_l2",
        "moduleId": "mod_17",
        "title": "শীত ও বসন্ত কাল (Winter & Spring)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_17_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: শীতের মিষ্টি সকালে এক কাপ গরম চা অপূর্ব।",
            "words": [
              "A",
              "cup",
              "of",
              "hot",
              "tea",
              "is",
              "wonderful",
              "on",
              "cold",
              "winter",
              "mornings."
            ],
            "answer": [
              "A",
              "cup",
              "of",
              "hot",
              "tea",
              "is",
              "wonderful",
              "on",
              "cold",
              "winter",
              "mornings."
            ],
            "hint": "✔ সঠিক বাক্য: A cup of hot tea is wonderful on cold winter mornings."
          },
          {
            "id": "mod_17_l2_q2",
            "type": "mcq",
            "prompt": "'Breeze' শব্দের অর্থ কী?",
            "options": [
              "মৃদু শীতল বাতাস",
              "ঘূর্ণিঝড়",
              "বজ্রপাত",
              "তুষারপাত"
            ],
            "answer": "মৃদু শীতল বাতাস",
            "hint": "Breeze = স্নিগ্ধ বাতাস"
          },
          {
            "id": "mod_17_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "A cool northern breeze indicates winter is approaching.",
            "options": [
              "A cool northern breeze indicates winter is approaching.",
              "Spring brings colorful blossoms on every branch.",
              "Farmers celebrate the arrival of gentle rain.",
              "Global warming is causing erratic weather patterns."
            ],
            "answer": "A cool northern breeze indicates winter is approaching.",
            "hint": "Approaching = ঘনিয়ে আসছে"
          }
        ]
      },
      {
        "id": "mod_17_l3",
        "moduleId": "mod_17",
        "title": "প্রাকৃতিক দুর্যোগ ও সচেতনতা (Natural Disasters)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_17_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: নদীর তীর ঘেঁষে গাছ লাগালে নদীভাঙন রোধ হয়।",
            "words": [
              "Planting",
              "trees",
              "along",
              "riverbanks",
              "prevents",
              "soil",
              "erosion."
            ],
            "answer": [
              "Planting",
              "trees",
              "along",
              "riverbanks",
              "prevents",
              "soil",
              "erosion."
            ],
            "hint": "✔ সঠিক বাক্য: Planting trees along riverbanks prevents soil erosion."
          },
          {
            "id": "mod_17_l3_q2",
            "type": "mcq",
            "prompt": "'Flood' এবং 'Cyclone' এর বাংলা কী?",
            "options": [
              "বন্যা এবং ঘূর্ণিঝড়",
              "ভূমিকম্প এবং খরা",
              "বৃষ্টি এবং রোদ",
              "নদী এবং সাগর"
            ],
            "answer": "বন্যা এবং ঘূর্ণিঝড়",
            "hint": "Flood = বন্যা, Cyclone = ঘূর্ণিঝড়"
          },
          {
            "id": "mod_17_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Clean air and pure drinking water are basic human rights.",
            "options": [
              "Clean air and pure drinking water are basic human rights.",
              "Planting fruit bearing trees supports wildlife.",
              "We must protect our rivers from industrial waste.",
              "The starry night sky looks incredibly vivid."
            ],
            "answer": "Clean air and pure drinking water are basic human rights.",
            "hint": "Human rights = মানবাধিকার"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_18",
    "stageId": "A2",
    "stageName": "স্তর ২: প্রাথমিক",
    "title": "১৮. প্রাণী, জীববৈচিত্র্য ও পরিবেশ (Animals & Wildlife)",
    "desc": "পশু-পাখি, সুন্দরবন ও প্রাণীদের প্রতি ভালোবাসা",
    "icon": "🐕",
    "bg": "from-amber-600 to-yellow-600",
    "kind": "core",
    "kindNo": 18,
    "lessons": [
      {
        "id": "mod_18_l1",
        "moduleId": "mod_18",
        "title": "বন্যপ্রাণী ও সুন্দরবন (Wild Animals & Sundarbans)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_18_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: রয়্যাল বেঙ্গল টাইগার সুন্দরবনের গর্ব।",
            "words": [
              "The",
              "Royal",
              "Bengal",
              "Tiger",
              "is",
              "the",
              "pride",
              "of",
              "Sundarbans."
            ],
            "answer": [
              "The",
              "Royal",
              "Bengal",
              "Tiger",
              "is",
              "the",
              "pride",
              "of",
              "Sundarbans."
            ],
            "hint": "✔ সঠিক বাক্য: The Royal Bengal Tiger is the pride of Sundarbans."
          },
          {
            "id": "mod_18_l1_q2",
            "type": "mcq",
            "prompt": "'Mammal' শব্দের বৈজ্ঞানিক অর্থ কী?",
            "options": [
              "স্তন্যপায়ী প্রাণী",
              "সরীসৃপ",
              "উভচর",
              "জলজ প্রাণী"
            ],
            "answer": "স্তন্যপায়ী প্রাণী",
            "hint": "Mammal = যে প্রাণী মায়ের দুধ পান করে বাঁচে"
          },
          {
            "id": "mod_18_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "The Sundarbans mangrove forest is home to majestic tigers.",
            "options": [
              "The Sundarbans mangrove forest is home to majestic tigers.",
              "We rented a country boat to explore the lake.",
              "Conserving wetlands protects migratory birds.",
              "We should show kindness toward stray animals."
            ],
            "answer": "The Sundarbans mangrove forest is home to majestic tigers.",
            "hint": "Mangrove forest = বাদাবন"
          }
        ]
      },
      {
        "id": "mod_18_l2",
        "moduleId": "mod_18",
        "title": "পাখি ও জলাশয় (Birds & Marine Life)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_18_l2_q1",
            "type": "matching",
            "prompt": "পাখির ইংরেজি মেলাও:",
            "pairs": [
              {
                "en": "Kingfisher",
                "bn": "মাছরাঙা"
              },
              {
                "en": "Eagle",
                "bn": "ঈগল"
              },
              {
                "en": "Sparrow",
                "bn": "চড়ুই"
              },
              {
                "en": "Peacock",
                "bn": "ময়ূর"
              }
            ]
          },
          {
            "id": "mod_18_l2_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: শীতকালে আমাদের দেশে প্রচুর অতিথি পাখি আসে।",
            "words": [
              "In",
              "winter",
              "many",
              "migratory",
              "birds",
              "arrive",
              "in",
              "our",
              "country."
            ],
            "answer": [
              "In",
              "winter",
              "many",
              "migratory",
              "birds",
              "arrive",
              "in",
              "our",
              "country."
            ],
            "hint": "✔ সঠিক বাক্য: In winter many migratory birds arrive in our country."
          },
          {
            "id": "mod_18_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Migratory birds travel thousands of miles every year.",
            "options": [
              "Migratory birds travel thousands of miles every year.",
              "Hilsha fish is renowned for its unique taste.",
              "Coral reefs provide shelter for marine species.",
              "The singing birds welcome the dawn."
            ],
            "answer": "Migratory birds travel thousands of miles every year.",
            "hint": "Migratory birds = পরিযায়ী বা অতিথি পাখি"
          }
        ]
      },
      {
        "id": "mod_18_l3",
        "moduleId": "mod_18",
        "title": "প্রাণীপ্রেম ও সংবেদনশীলতা (Animal Care & Ethics)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_18_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: রাস্তার অবলা প্রাণীদের প্রতি আমাদের দয়া দেখানো উচিত।",
            "words": [
              "We",
              "should",
              "show",
              "kindness",
              "toward",
              "stray",
              "street",
              "animals."
            ],
            "answer": [
              "We",
              "should",
              "show",
              "kindness",
              "toward",
              "stray",
              "street",
              "animals."
            ],
            "hint": "✔ সঠিক বাক্য: We should show kindness toward stray street animals."
          },
          {
            "id": "mod_18_l3_q2",
            "type": "mcq",
            "prompt": "'Stray animal' বলতে কী বোঝায়?",
            "options": [
              "বেওয়ারিশ বা রাস্তায় ঘুরে বেড়ানো প্রাণী",
              "চিড়িয়াখানার পশু",
              "পোষা কুকুর",
              "বনের বাঘ"
            ],
            "answer": "বেওয়ারিশ বা রাস্তায় ঘুরে বেড়ানো প্রাণী",
            "hint": "Stray = ভবঘুরে বা বেওয়ারিশ"
          },
          {
            "id": "mod_18_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Treat all living creatures with respect and care.",
            "options": [
              "Treat all living creatures with respect and care.",
              "Animals feel pain and hunger just like humans.",
              "Do not throw stones at stray dogs.",
              "Protect endangered species from poaching."
            ],
            "answer": "Treat all living creatures with respect and care.",
            "hint": "Living creatures = সমস্ত জীব"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_19",
    "stageId": "A2",
    "stageName": "স্তর ২: প্রাথমিক",
    "title": "১৯. প্রযুক্তি, ইন্টারনেট ও কম্পিউটার (Technology & Digital Life)",
    "desc": "স্মার্টফোন, ইন্টারনেট, ইমেইল, সফটওয়্যার ও নিরাপত্তা",
    "icon": "📱",
    "bg": "from-yellow-500 to-amber-600",
    "kind": "core",
    "kindNo": 19,
    "lessons": [
      {
        "id": "mod_19_l1",
        "moduleId": "mod_19",
        "title": "দৈনন্দিন ডিজিটাল গ্যাজেট (Digital Devices)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_19_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমার ফোনের চার্জ শেষ একটি চার্জার ধার দেবেন?",
            "words": [
              "My",
              "phone",
              "battery",
              "is",
              "low",
              "could",
              "you",
              "lend",
              "me",
              "a",
              "charger?"
            ],
            "answer": [
              "My",
              "phone",
              "battery",
              "is",
              "low",
              "could",
              "you",
              "lend",
              "me",
              "a",
              "charger?"
            ],
            "hint": "✔ সঠিক বাক্য: My phone battery is low could you lend me a charger?"
          },
          {
            "id": "mod_19_l1_q2",
            "type": "mcq",
            "prompt": "'Operating System' (OS) এর কাজ কী?",
            "options": [
              "কম্পিউটার বা ফোনের হার্ডওয়্যার ও অ্যাপস পরিচালনা করা",
              "শুধু গান বাজানো",
              "ইন্টারনেট ব্রাউজ করা",
              "ছবি তোলা"
            ],
            "answer": "কম্পিউটার বা ফোনের হার্ডওয়্যার ও অ্যাপস পরিচালনা করা",
            "hint": "OS = উইন্ডোজ, অ্যান্ড্রয়েড বা আইওএস"
          },
          {
            "id": "mod_19_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Ensure your Wi-Fi router is protected with a strong password.",
            "options": [
              "Ensure your Wi-Fi router is protected with a strong password.",
              "Update your smartphone operating system regularly.",
              "Cloud storage allows you to access files from anywhere.",
              "Too much screen time can disrupt your sleep."
            ],
            "answer": "Ensure your Wi-Fi router is protected with a strong password.",
            "hint": "Strong password = শক্তিশালী পাসওয়ার্ড"
          }
        ]
      },
      {
        "id": "mod_19_l2",
        "moduleId": "mod_19",
        "title": "সাইবার নিরাপত্তা ও সতর্কতা (Cyber Hygiene)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_19_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: কখনও অপরিচিত ব্যক্তির সাথে ওটিপি শেয়ার করবেন না।",
            "words": [
              "Never",
              "share",
              "your",
              "OTP",
              "or",
              "password",
              "with",
              "strangers."
            ],
            "answer": [
              "Never",
              "share",
              "your",
              "OTP",
              "or",
              "password",
              "with",
              "strangers."
            ],
            "hint": "✔ সঠিক বাক্য: Never share your OTP or password with strangers."
          },
          {
            "id": "mod_19_l2_q2",
            "type": "mcq",
            "prompt": "'Two-factor authentication' (2FA) কেন জরুরি?",
            "options": [
              "অ্যাকাউন্ট হ্যাক হওয়া থেকে অতিরিক্ত নিরাপত্তা দিতে",
              "দ্রুত লগইন করতে",
              "ফ্রি ইন্টারনেট পেতে",
              "ফাইল ডিলিট করতে"
            ],
            "answer": "অ্যাকাউন্ট হ্যাক হওয়া থেকে অতিরিক্ত নিরাপত্তা দিতে",
            "hint": "2FA = দ্বৈত স্তরের সুরক্ষা"
          },
          {
            "id": "mod_19_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Never open suspicious email attachments from unknown senders.",
            "options": [
              "Never open suspicious email attachments from unknown senders.",
              "Remember to back up your personal photos on a hard drive.",
              "Artificial intelligence is automating repetitive tasks.",
              "Use two-factor authentication for extra safety."
            ],
            "answer": "Never open suspicious email attachments from unknown senders.",
            "hint": "Suspicious attachments = সন্দেহজনক ফাইল"
          }
        ]
      },
      {
        "id": "mod_19_l3",
        "moduleId": "mod_19",
        "title": "অনলাইন কাজের সুবিধা (Remote Tech Work)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_19_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: ক্লাউড স্টোরেজের কারণে যেকোনো স্থান থেকে ফাইল পাওয়া যায়।",
            "words": [
              "Cloud",
              "storage",
              "allows",
              "accessing",
              "files",
              "from",
              "any",
              "location."
            ],
            "answer": [
              "Cloud",
              "storage",
              "allows",
              "accessing",
              "files",
              "from",
              "any",
              "location."
            ],
            "hint": "✔ সঠিক বাক্য: Cloud storage allows accessing files from any location."
          },
          {
            "id": "mod_19_l3_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমরা দূর থেকে মিটিং করতে জুম সফটওয়্যার ব্যবহার করি।",
            "words": [
              "We",
              "use",
              "Zoom",
              "software",
              "to",
              "conduct",
              "remote",
              "meetings."
            ],
            "answer": [
              "We",
              "use",
              "Zoom",
              "software",
              "to",
              "conduct",
              "remote",
              "meetings."
            ],
            "hint": "✔ সঠিক বাক্য: We use Zoom software to conduct remote meetings."
          },
          {
            "id": "mod_19_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Digital literacy is a fundamental necessity for modern jobs.",
            "options": [
              "Digital literacy is a fundamental necessity for modern jobs.",
              "Technology should serve humanity and make life easier.",
              "He resolved the software bug before the release.",
              "Check your internet connection speed regularly."
            ],
            "answer": "Digital literacy is a fundamental necessity for modern jobs.",
            "hint": "Digital literacy = প্রযুক্তিগত স্বাক্ষরতা"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_20",
    "stageId": "A2",
    "stageName": "স্তর ২: প্রাথমিক",
    "title": "২০. লেভেল A2 সমাপ্তি মডেল টেস্ট (Checkpoint A2 Grand Exam)",
    "desc": "A2 প্রাথমিক স্তরের চূড়ান্ত সমন্বিত মূল্যায়ন",
    "icon": "🎖️",
    "bg": "from-amber-600 to-red-600",
    "kind": "core",
    "kindNo": 20,
    "lessons": [
      {
        "id": "mod_20_l1",
        "moduleId": "mod_20",
        "title": "A2 বাক্য গঠন ও রূপান্তর (A2 Syntax Mastery)",
        "xp": 30,
        "isExam": false,
        "questions": [
          {
            "id": "mod_20_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমি বাস মিস করেছিলাম তাই অফিসে পৌঁছাতে দেরি হয়েছিল।",
            "words": [
              "I",
              "missed",
              "the",
              "bus",
              "so",
              "I",
              "arrived",
              "at",
              "the",
              "office",
              "late."
            ],
            "answer": [
              "I",
              "missed",
              "the",
              "bus",
              "so",
              "I",
              "arrived",
              "at",
              "the",
              "office",
              "late."
            ],
            "hint": "✔ সঠিক বাক্য: I missed the bus so I arrived at the office late."
          },
          {
            "id": "mod_20_l1_q2",
            "type": "mcq",
            "prompt": "'Did you go to the market?' এর হ্যাঁ-সূচক উত্তর কী?",
            "options": [
              "Yes, I went to the market.",
              "Yes, I go.",
              "No, I am.",
              "Yes, I did go to market yesterday."
            ],
            "answer": "Yes, I went to the market.",
            "hint": "Past Simple interrogative 'Did you go' এর উত্তর 'I went'"
          },
          {
            "id": "mod_20_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Could you please give me a printed cash memo?",
            "options": [
              "Could you please give me a printed cash memo?",
              "Can I have an extra pair of slippers?",
              "Turn left at the next traffic light.",
              "I went to work by metro rail today."
            ],
            "answer": "Could you please give me a printed cash memo?",
            "hint": "Printed cash memo = মুদ্রিত রসিদ"
          }
        ]
      },
      {
        "id": "mod_20_l2",
        "moduleId": "mod_20",
        "title": "A2 সমন্বিত বাস্তব সংলাপ (A2 Dialogues)",
        "xp": 30,
        "isExam": false,
        "questions": [
          {
            "id": "mod_20_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: ডাক্তার আমাকে দুই দিন পূর্ণ বিশ্রামে থাকতে পরামর্শ দিয়েছেন।",
            "words": [
              "The",
              "doctor",
              "advised",
              "me",
              "to",
              "take",
              "complete",
              "bed",
              "rest",
              "for",
              "two",
              "days."
            ],
            "answer": [
              "The",
              "doctor",
              "advised",
              "me",
              "to",
              "take",
              "complete",
              "bed",
              "rest",
              "for",
              "two",
              "days."
            ],
            "hint": "✔ সঠিক বাক্য: The doctor advised me to take complete bed rest for two days."
          },
          {
            "id": "mod_20_l2_q2",
            "type": "matching",
            "prompt": "A2 সমাপনী ম্যাচিং:",
            "pairs": [
              {
                "en": "Discount",
                "bn": "মূল্য ছাড়"
              },
              {
                "en": "Prescription",
                "bn": "প্রেসক্রিপশন"
              },
              {
                "en": "Standstill",
                "bn": "স্থবির"
              },
              {
                "en": "Exchange",
                "bn": "বদল করা"
              }
            ]
          },
          {
            "id": "mod_20_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "We must finish this report before the end of the day.",
            "options": [
              "We must finish this report before the end of the day.",
              "I would like to confirm my flight reservation.",
              "Please make this curry less spicy for me.",
              "Do you have this dress in a larger size?"
            ],
            "answer": "We must finish this report before the end of the day.",
            "hint": "Before end of day = দিন শেষ হওয়ার আগে"
          }
        ]
      },
      {
        "id": "mod_20_l3",
        "moduleId": "mod_20",
        "title": "A2 ফাইনাল সার্টিফিকেশন টেস্ট (A2 Graduation)",
        "xp": 30,
        "isExam": true,
        "questions": [
          {
            "id": "mod_20_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: নিয়মিত অনুশীলনের মাধ্যমে প্রাথমিক স্তরের জড়তা দূর হয়েছে।",
            "words": [
              "Through",
              "regular",
              "practice",
              "elementary",
              "hesitation",
              "has",
              "disappeared."
            ],
            "answer": [
              "Through",
              "regular",
              "practice",
              "elementary",
              "hesitation",
              "has",
              "disappeared."
            ],
            "hint": "✔ সঠিক বাক্য: Through regular practice elementary hesitation has disappeared."
          },
          {
            "id": "mod_20_l3_q2",
            "type": "mcq",
            "prompt": "'She does not knows' নাকি 'She does not know' কোনটি সঠিক?",
            "options": [
              "She does not know",
              "She does not knows",
              "উভয়ই সঠিক",
              "কোনোটিই নয়"
            ],
            "answer": "She does not know",
            "hint": "Does এর পর মূল verb এর সাথে s/es বসে না"
          },
          {
            "id": "mod_20_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Congratulations on completing the A2 Elementary stage!",
            "options": [
              "Congratulations on completing the A2 Elementary stage!",
              "You are now ready to speak with intermediate confidence.",
              "Keep up the excellent daily momentum.",
              "Fluently is proud of your dedication."
            ],
            "answer": "Congratulations on completing the A2 Elementary stage!",
            "hint": "Stage completed = স্তর সমাপ্ত"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_21",
    "stageId": "B1",
    "stageName": "স্তর ৩: মধ্যবর্তী",
    "title": "২১. বিমানবন্দর ও আন্তর্জাতিক উড্ডয়ন (Airports & Flights)",
    "desc": "বোর্ডিং পাস, লাগেজ চেক-ইন ও সিকিউরিটি",
    "icon": "✈️",
    "bg": "from-cyan-600 to-blue-700",
    "kind": "core",
    "kindNo": 21,
    "lessons": [
      {
        "id": "mod_21_l1",
        "moduleId": "mod_21",
        "title": "২১. বিমানবন্দর ও আন্তর্জাতিক উড্ডয়ন - ১ম পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_21_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_21_l1_q2",
            "type": "mcq",
            "prompt": "'✈️' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_21_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_21_l2",
        "moduleId": "mod_21",
        "title": "২১. বিমানবন্দর ও আন্তর্জাতিক উড্ডয়ন - ২য় পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_21_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_21_l2_q2",
            "type": "mcq",
            "prompt": "'B1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_21_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_21_l3",
        "moduleId": "mod_21",
        "title": "২১. বিমানবন্দর ও আন্তর্জাতিক উড্ডয়ন - সমাপনী কুইজ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_21_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_21_l3_q2",
            "type": "mcq",
            "prompt": "'২১. বিমানবন্দর ও আন্তর্জাতিক উড্ডয়ন (Airports & Flights)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_21_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_22",
    "stageId": "B1",
    "stageName": "স্তর ৩: মধ্যবর্তী",
    "title": "২২. হোটেল বুকিং ও ট্যুরিজম (Hotels & Tourism)",
    "desc": "রুম রিজার্ভেশন, সুযোগ-সুবিধা ও পর্যটন গাইড",
    "icon": "🏨",
    "bg": "from-blue-600 to-indigo-700",
    "kind": "core",
    "kindNo": 22,
    "lessons": [
      {
        "id": "mod_22_l1",
        "moduleId": "mod_22",
        "title": "২২. হোটেল বুকিং ও ট্যুরিজম - ১ম পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_22_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_22_l1_q2",
            "type": "mcq",
            "prompt": "'🏨' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_22_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_22_l2",
        "moduleId": "mod_22",
        "title": "২২. হোটেল বুকিং ও ট্যুরিজম - ২য় পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_22_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_22_l2_q2",
            "type": "mcq",
            "prompt": "'B1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_22_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_22_l3",
        "moduleId": "mod_22",
        "title": "২২. হোটেল বুকিং ও ট্যুরিজম - সমাপনী কুইজ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_22_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_22_l3_q2",
            "type": "mcq",
            "prompt": "'২২. হোটেল বুকিং ও ট্যুরিজম (Hotels & Tourism)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_22_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_23",
    "stageId": "B1",
    "stageName": "স্তর ৩: মধ্যবর্তী",
    "title": "২৩. ব্যাংক ও আন্তর্জাতিক লেনদেন (Banking & Transactions)",
    "desc": "অ্যাকাউন্ট খোলা, রেমিট্যান্স ও বৈদেশিক মুদ্রা",
    "icon": "💳",
    "bg": "from-indigo-600 to-violet-700",
    "kind": "core",
    "kindNo": 23,
    "lessons": [
      {
        "id": "mod_23_l1",
        "moduleId": "mod_23",
        "title": "২৩. ব্যাংক ও আন্তর্জাতিক লেনদেন - ১ম পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_23_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_23_l1_q2",
            "type": "mcq",
            "prompt": "'💳' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_23_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_23_l2",
        "moduleId": "mod_23",
        "title": "২৩. ব্যাংক ও আন্তর্জাতিক লেনদেন - ২য় পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_23_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_23_l2_q2",
            "type": "mcq",
            "prompt": "'B1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_23_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_23_l3",
        "moduleId": "mod_23",
        "title": "২৩. ব্যাংক ও আন্তর্জাতিক লেনদেন - সমাপনী কুইজ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_23_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_23_l3_q2",
            "type": "mcq",
            "prompt": "'২৩. ব্যাংক ও আন্তর্জাতিক লেনদেন (Banking & Transactions)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_23_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_24",
    "stageId": "B1",
    "stageName": "স্তর ৩: মধ্যবর্তী",
    "title": "২৪. আনুষ্ঠানিক ফোন কল ও কথোপকথন (Professional Phone Calls)",
    "desc": "কল হোল্ড করা, বার্তা নেওয়া ও ভদ্র আচরণ",
    "icon": "📞",
    "bg": "from-violet-600 to-purple-700",
    "kind": "core",
    "kindNo": 24,
    "lessons": [
      {
        "id": "mod_24_l1",
        "moduleId": "mod_24",
        "title": "২৪. আনুষ্ঠানিক ফোন কল ও কথোপকথন - ১ম পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_24_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_24_l1_q2",
            "type": "mcq",
            "prompt": "'📞' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_24_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_24_l2",
        "moduleId": "mod_24",
        "title": "২৪. আনুষ্ঠানিক ফোন কল ও কথোপকথন - ২য় পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_24_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_24_l2_q2",
            "type": "mcq",
            "prompt": "'B1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_24_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_24_l3",
        "moduleId": "mod_24",
        "title": "২৪. আনুষ্ঠানিক ফোন কল ও কথোপকথন - সমাপনী কুইজ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_24_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_24_l3_q2",
            "type": "mcq",
            "prompt": "'২৪. আনুষ্ঠানিক ফোন কল ও কথোপকথন (Professional Phone Calls)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_24_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_25",
    "stageId": "B1",
    "stageName": "স্তর ৩: মধ্যবর্তী",
    "title": "২৫. ডাক্তার ও বিশেষজ্ঞের পরামর্শ (Medical Consultations)",
    "desc": "শারীরিক পরীক্ষা, জটিল লক্ষণ ও চিকিৎসা পরামর্শ",
    "icon": "🏥",
    "bg": "from-purple-600 to-pink-700",
    "kind": "core",
    "kindNo": 25,
    "lessons": [
      {
        "id": "mod_25_l1",
        "moduleId": "mod_25",
        "title": "২৫. ডাক্তার ও বিশেষজ্ঞের পরামর্শ - ১ম পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_25_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_25_l1_q2",
            "type": "mcq",
            "prompt": "'🏥' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_25_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_25_l2",
        "moduleId": "mod_25",
        "title": "২৫. ডাক্তার ও বিশেষজ্ঞের পরামর্শ - ২য় পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_25_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_25_l2_q2",
            "type": "mcq",
            "prompt": "'B1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_25_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_25_l3",
        "moduleId": "mod_25",
        "title": "২৫. ডাক্তার ও বিশেষজ্ঞের পরামর্শ - সমাপনী কুইজ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_25_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_25_l3_q2",
            "type": "mcq",
            "prompt": "'২৫. ডাক্তার ও বিশেষজ্ঞের পরামর্শ (Medical Consultations)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_25_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_26",
    "stageId": "B1",
    "stageName": "স্তর ৩: মধ্যবর্তী",
    "title": "২৬. উচ্চশিক্ষা, বিশ্ববিদ্যালয় ও গবেষণা (University & Education)",
    "desc": "ভর্তি, সেমিস্টার পরীক্ষা ও প্রেজেন্টেশন",
    "icon": "🏫",
    "bg": "from-pink-600 to-rose-700",
    "kind": "core",
    "kindNo": 26,
    "lessons": [
      {
        "id": "mod_26_l1",
        "moduleId": "mod_26",
        "title": "২৬. উচ্চশিক্ষা, বিশ্ববিদ্যালয় ও গবেষণা - ১ম পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_26_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_26_l1_q2",
            "type": "mcq",
            "prompt": "'🏫' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_26_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_26_l2",
        "moduleId": "mod_26",
        "title": "২৬. উচ্চশিক্ষা, বিশ্ববিদ্যালয় ও গবেষণা - ২য় পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_26_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_26_l2_q2",
            "type": "mcq",
            "prompt": "'B1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_26_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_26_l3",
        "moduleId": "mod_26",
        "title": "২৬. উচ্চশিক্ষা, বিশ্ববিদ্যালয় ও গবেষণা - সমাপনী কুইজ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_26_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_26_l3_q2",
            "type": "mcq",
            "prompt": "'২৬. উচ্চশিক্ষা, বিশ্ববিদ্যালয় ও গবেষণা (University & Education)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_26_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_27",
    "stageId": "B1",
    "stageName": "স্তর ৩: মধ্যবর্তী",
    "title": "২৭. অতীত স্মৃতি ও গল্প বলার আর্ট (Past Events & Storytelling)",
    "desc": "স্মৃতিচারণ, অতীত কাল ও বর্ণনামূলক শব্দ",
    "icon": "⏳",
    "bg": "from-rose-600 to-red-700",
    "kind": "core",
    "kindNo": 27,
    "lessons": [
      {
        "id": "mod_27_l1",
        "moduleId": "mod_27",
        "title": "২৭. অতীত স্মৃতি ও গল্প বলার আর্ট - ১ম পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_27_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_27_l1_q2",
            "type": "mcq",
            "prompt": "'⏳' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_27_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_27_l2",
        "moduleId": "mod_27",
        "title": "২৭. অতীত স্মৃতি ও গল্প বলার আর্ট - ২য় পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_27_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_27_l2_q2",
            "type": "mcq",
            "prompt": "'B1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_27_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_27_l3",
        "moduleId": "mod_27",
        "title": "২৭. অতীত স্মৃতি ও গল্প বলার আর্ট - সমাপনী কুইজ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_27_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_27_l3_q2",
            "type": "mcq",
            "prompt": "'২৭. অতীত স্মৃতি ও গল্প বলার আর্ট (Past Events & Storytelling)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_27_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_28",
    "stageId": "B1",
    "stageName": "স্তর ৩: মধ্যবর্তী",
    "title": "২৮. ভবিষ্যৎ পরিকল্পনা ও স্বপ্ন (Future Plans & Ambitions)",
    "desc": "ক্যারিয়ার লক্ষ্য, সম্ভাবনা ও ভবিষ্যৎ কাল",
    "icon": "🔮",
    "bg": "from-red-600 to-amber-700",
    "kind": "core",
    "kindNo": 28,
    "lessons": [
      {
        "id": "mod_28_l1",
        "moduleId": "mod_28",
        "title": "২৮. ভবিষ্যৎ পরিকল্পনা ও স্বপ্ন - ১ম পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_28_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_28_l1_q2",
            "type": "mcq",
            "prompt": "'🔮' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_28_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_28_l2",
        "moduleId": "mod_28",
        "title": "২৮. ভবিষ্যৎ পরিকল্পনা ও স্বপ্ন - ২য় পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_28_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_28_l2_q2",
            "type": "mcq",
            "prompt": "'B1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_28_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_28_l3",
        "moduleId": "mod_28",
        "title": "২৮. ভবিষ্যৎ পরিকল্পনা ও স্বপ্ন - সমাপনী কুইজ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_28_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_28_l3_q2",
            "type": "mcq",
            "prompt": "'২৮. ভবিষ্যৎ পরিকল্পনা ও স্বপ্ন (Future Plans & Ambitions)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_28_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_29",
    "stageId": "B1",
    "stageName": "স্তর ৩: মধ্যবর্তী",
    "title": "২৯. বিনম্র অনুরোধ ও আন্তরিক ক্ষমা (Polite Favors & Apologies)",
    "desc": "ভদ্রভাবে না বলা, উপকার চাওয়া ও ভুল স্বীকার",
    "icon": "🤝",
    "bg": "from-amber-600 to-orange-700",
    "kind": "core",
    "kindNo": 29,
    "lessons": [
      {
        "id": "mod_29_l1",
        "moduleId": "mod_29",
        "title": "২৯. বিনম্র অনুরোধ ও আন্তরিক ক্ষমা - ১ম পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_29_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_29_l1_q2",
            "type": "mcq",
            "prompt": "'🤝' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_29_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_29_l2",
        "moduleId": "mod_29",
        "title": "২৯. বিনম্র অনুরোধ ও আন্তরিক ক্ষমা - ২য় পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_29_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_29_l2_q2",
            "type": "mcq",
            "prompt": "'B1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_29_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_29_l3",
        "moduleId": "mod_29",
        "title": "২৯. বিনম্র অনুরোধ ও আন্তরিক ক্ষমা - সমাপনী কুইজ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_29_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_29_l3_q2",
            "type": "mcq",
            "prompt": "'২৯. বিনম্র অনুরোধ ও আন্তরিক ক্ষমা (Polite Favors & Apologies)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_29_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_30",
    "stageId": "B1",
    "stageName": "স্তর ৩: মধ্যবর্তী",
    "title": "৩০. লেভেল B1 চেকপয়েন্ট ও ডিপ্লোমা এক্সাম (Checkpoint B1 Exam)",
    "desc": "মধ্যবর্তী স্তরের পূর্ণাঙ্গ দক্ষতা যাচাই পরীক্ষা",
    "icon": "🏆",
    "bg": "from-orange-600 to-emerald-700",
    "kind": "core",
    "kindNo": 30,
    "lessons": [
      {
        "id": "mod_30_l1",
        "moduleId": "mod_30",
        "title": "৩০. লেভেল B1 চেকপয়েন্ট ও ডিপ্লোমা এক্সাম - ১ম পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_30_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_30_l1_q2",
            "type": "mcq",
            "prompt": "'🏆' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_30_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_30_l2",
        "moduleId": "mod_30",
        "title": "৩০. লেভেল B1 চেকপয়েন্ট ও ডিপ্লোমা এক্সাম - ২য় পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_30_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_30_l2_q2",
            "type": "mcq",
            "prompt": "'B1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_30_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_30_l3",
        "moduleId": "mod_30",
        "title": "৩০. লেভেল B1 চেকপয়েন্ট ও ডিপ্লোমা এক্সাম - সমাপনী কুইজ",
        "xp": 40,
        "isExam": true,
        "questions": [
          {
            "id": "mod_30_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_30_l3_q2",
            "type": "mcq",
            "prompt": "'৩০. লেভেল B1 চেকপয়েন্ট ও ডিপ্লোমা এক্সাম (Checkpoint B1 Exam)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_30_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_31",
    "stageId": "B2",
    "stageName": "স্তর ৪: উচ্চ-মধ্যবর্তী",
    "title": "৩১. করপোরেট ইমেইল ও ফরমাল রাইটিং (Corporate Emails)",
    "desc": "পেশাদার ইমেইল, ড্রাফট, সংযুক্তি ও প্রটোকল",
    "icon": "💼",
    "bg": "from-slate-600 to-slate-800",
    "kind": "core",
    "kindNo": 31,
    "lessons": [
      {
        "id": "mod_31_l1",
        "moduleId": "mod_31",
        "title": "৩১. করপোরেট ইমেইল ও ফরমাল রাইটিং - ১ম পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_31_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_31_l1_q2",
            "type": "mcq",
            "prompt": "'💼' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_31_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_31_l2",
        "moduleId": "mod_31",
        "title": "৩১. করপোরেট ইমেইল ও ফরমাল রাইটিং - ২য় পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_31_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_31_l2_q2",
            "type": "mcq",
            "prompt": "'B2' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_31_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_31_l3",
        "moduleId": "mod_31",
        "title": "৩১. করপোরেট ইমেইল ও ফরমাল রাইটিং - সমাপনী কুইজ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_31_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_31_l3_q2",
            "type": "mcq",
            "prompt": "'৩১. করপোরেট ইমেইল ও ফরমাল রাইটিং (Corporate Emails)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_31_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_32",
    "stageId": "B2",
    "stageName": "স্তর ৪: উচ্চ-মধ্যবর্তী",
    "title": "৩২. চাকরি ইন্টারভিউ জয় করার কৌশল (Job Interviews & Career)",
    "desc": "আত্মবিশ্বাস, বেতন আলোচনা ও অভিজ্ঞতা প্রদর্শন",
    "icon": "🎯",
    "bg": "from-emerald-600 to-teal-700",
    "kind": "core",
    "kindNo": 32,
    "lessons": [
      {
        "id": "mod_32_l1",
        "moduleId": "mod_32",
        "title": "৩২. চাকরি ইন্টারভিউ জয় করার কৌশল - ১ম পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_32_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_32_l1_q2",
            "type": "mcq",
            "prompt": "'🎯' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_32_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_32_l2",
        "moduleId": "mod_32",
        "title": "৩২. চাকরি ইন্টারভিউ জয় করার কৌশল - ২য় পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_32_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_32_l2_q2",
            "type": "mcq",
            "prompt": "'B2' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_32_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_32_l3",
        "moduleId": "mod_32",
        "title": "৩২. চাকরি ইন্টারভিউ জয় করার কৌশল - সমাপনী কুইজ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_32_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_32_l3_q2",
            "type": "mcq",
            "prompt": "'৩২. চাকরি ইন্টারভিউ জয় করার কৌশল (Job Interviews & Career)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_32_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_33",
    "stageId": "B2",
    "stageName": "স্তর ৪: উচ্চ-মধ্যবর্তী",
    "title": "৩৩. বিজনেস মিটিং ও টিমওয়ার্ক (Business Meetings)",
    "desc": "এজেন্ডা পরিচালনা, যুক্তি ও সিদ্ধান্ত গ্রহণ",
    "icon": "📊",
    "bg": "from-teal-600 to-cyan-700",
    "kind": "core",
    "kindNo": 33,
    "lessons": [
      {
        "id": "mod_33_l1",
        "moduleId": "mod_33",
        "title": "৩৩. বিজনেস মিটিং ও টিমওয়ার্ক - ১ম পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_33_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_33_l1_q2",
            "type": "mcq",
            "prompt": "'📊' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_33_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_33_l2",
        "moduleId": "mod_33",
        "title": "৩৩. বিজনেস মিটিং ও টিমওয়ার্ক - ২য় পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_33_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_33_l2_q2",
            "type": "mcq",
            "prompt": "'B2' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_33_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_33_l3",
        "moduleId": "mod_33",
        "title": "৩৩. বিজনেস মিটিং ও টিমওয়ার্ক - সমাপনী কুইজ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_33_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_33_l3_q2",
            "type": "mcq",
            "prompt": "'৩৩. বিজনেস মিটিং ও টিমওয়ার্ক (Business Meetings)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_33_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_34",
    "stageId": "B2",
    "stageName": "স্তর ৪: উচ্চ-মধ্যবর্তী",
    "title": "৩৪. অভিযোগ নিষ্পত্তি ও ক্লায়েন্ট হ্যান্ডলিং (Customer Complaints)",
    "desc": "বিরোধ মীমাংসা, অসন্তুষ্ট ক্লায়েন্ট ও রিফান্ড",
    "icon": "⚖️",
    "bg": "from-cyan-600 to-blue-700",
    "kind": "core",
    "kindNo": 34,
    "lessons": [
      {
        "id": "mod_34_l1",
        "moduleId": "mod_34",
        "title": "৩৪. অভিযোগ নিষ্পত্তি ও ক্লায়েন্ট হ্যান্ডলিং - ১ম পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_34_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_34_l1_q2",
            "type": "mcq",
            "prompt": "'⚖️' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_34_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_34_l2",
        "moduleId": "mod_34",
        "title": "৩৪. অভিযোগ নিষ্পত্তি ও ক্লায়েন্ট হ্যান্ডলিং - ২য় পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_34_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_34_l2_q2",
            "type": "mcq",
            "prompt": "'B2' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_34_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_34_l3",
        "moduleId": "mod_34",
        "title": "৩৪. অভিযোগ নিষ্পত্তি ও ক্লায়েন্ট হ্যান্ডলিং - সমাপনী কুইজ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_34_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_34_l3_q2",
            "type": "mcq",
            "prompt": "'৩৪. অভিযোগ নিষ্পত্তি ও ক্লায়েন্ট হ্যান্ডলিং (Customer Complaints)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_34_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_35",
    "stageId": "B2",
    "stageName": "স্তর ৪: উচ্চ-মধ্যবর্তী",
    "title": "৩৫. সুচিন্তিত মতামত, যুক্তি ও বিতর্ক (Opinions & Debating)",
    "desc": "যুক্তি উপস্থাপন, দ্বিমত পোষণ ও সমঝোতা",
    "icon": "🗣️",
    "bg": "from-blue-600 to-indigo-700",
    "kind": "core",
    "kindNo": 35,
    "lessons": [
      {
        "id": "mod_35_l1",
        "moduleId": "mod_35",
        "title": "৩৫. সুচিন্তিত মতামত, যুক্তি ও বিতর্ক - ১ম পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_35_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_35_l1_q2",
            "type": "mcq",
            "prompt": "'🗣️' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_35_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_35_l2",
        "moduleId": "mod_35",
        "title": "৩৫. সুচিন্তিত মতামত, যুক্তি ও বিতর্ক - ২য় পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_35_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_35_l2_q2",
            "type": "mcq",
            "prompt": "'B2' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_35_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_35_l3",
        "moduleId": "mod_35",
        "title": "৩৫. সুচিন্তিত মতামত, যুক্তি ও বিতর্ক - সমাপনী কুইজ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_35_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_35_l3_q2",
            "type": "mcq",
            "prompt": "'৩৫. সুচিন্তিত মতামত, যুক্তি ও বিতর্ক (Opinions & Debating)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_35_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_36",
    "stageId": "B2",
    "stageName": "স্তর ৪: উচ্চ-মধ্যবর্তী",
    "title": "৩৬. পাবলিক প্রেজেন্টেশন ও স্পিচ (Public Speaking)",
    "desc": "উপস্থাপনার কৌশল, শ্রোতার মনোযোগ ও ডেটা ব্যাখ্যা",
    "icon": "🎤",
    "bg": "from-indigo-600 to-violet-700",
    "kind": "core",
    "kindNo": 36,
    "lessons": [
      {
        "id": "mod_36_l1",
        "moduleId": "mod_36",
        "title": "৩৬. পাবলিক প্রেজেন্টেশন ও স্পিচ - ১ম পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_36_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_36_l1_q2",
            "type": "mcq",
            "prompt": "'🎤' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_36_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_36_l2",
        "moduleId": "mod_36",
        "title": "৩৬. পাবলিক প্রেজেন্টেশন ও স্পিচ - ২য় পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_36_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_36_l2_q2",
            "type": "mcq",
            "prompt": "'B2' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_36_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_36_l3",
        "moduleId": "mod_36",
        "title": "৩৬. পাবলিক প্রেজেন্টেশন ও স্পিচ - সমাপনী কুইজ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_36_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_36_l3_q2",
            "type": "mcq",
            "prompt": "'৩৬. পাবলিক প্রেজেন্টেশন ও স্পিচ (Public Speaking)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_36_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_37",
    "stageId": "B2",
    "stageName": "স্তর ৪: উচ্চ-মধ্যবর্তী",
    "title": "৩৭. জটিল বাক্য ও যৌক্তিক সংযোগ (Complex Connectors)",
    "desc": "কারণ ও প্রভাব, জটিল কনজাংশন ও শর্তাবলী",
    "icon": "⚡",
    "bg": "from-violet-600 to-purple-700",
    "kind": "core",
    "kindNo": 37,
    "lessons": [
      {
        "id": "mod_37_l1",
        "moduleId": "mod_37",
        "title": "৩৭. জটিল বাক্য ও যৌক্তিক সংযোগ - ১ম পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_37_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_37_l1_q2",
            "type": "mcq",
            "prompt": "'⚡' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_37_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_37_l2",
        "moduleId": "mod_37",
        "title": "৩৭. জটিল বাক্য ও যৌক্তিক সংযোগ - ২য় পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_37_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_37_l2_q2",
            "type": "mcq",
            "prompt": "'B2' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_37_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_37_l3",
        "moduleId": "mod_37",
        "title": "৩৭. জটিল বাক্য ও যৌক্তিক সংযোগ - সমাপনী কুইজ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_37_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_37_l3_q2",
            "type": "mcq",
            "prompt": "'৩৭. জটিল বাক্য ও যৌক্তিক সংযোগ (Complex Connectors)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_37_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_38",
    "stageId": "B2",
    "stageName": "স্তর ৪: উচ্চ-মধ্যবর্তী",
    "title": "৩৮. সংকট ব্যবস্থাপনা ও জরুরি প্রটোকল (Crisis Management)",
    "desc": "ঝুঁকি মোকাবেলা, আইনি সহায়তা ও জরুরি সিদ্ধান্ত",
    "icon": "🚨",
    "bg": "from-purple-600 to-rose-700",
    "kind": "core",
    "kindNo": 38,
    "lessons": [
      {
        "id": "mod_38_l1",
        "moduleId": "mod_38",
        "title": "৩৮. সংকট ব্যবস্থাপনা ও জরুরি প্রটোকল - ১ম পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_38_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_38_l1_q2",
            "type": "mcq",
            "prompt": "'🚨' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_38_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_38_l2",
        "moduleId": "mod_38",
        "title": "৩৮. সংকট ব্যবস্থাপনা ও জরুরি প্রটোকল - ২য় পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_38_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_38_l2_q2",
            "type": "mcq",
            "prompt": "'B2' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_38_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_38_l3",
        "moduleId": "mod_38",
        "title": "৩৮. সংকট ব্যবস্থাপনা ও জরুরি প্রটোকল - সমাপনী কুইজ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_38_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_38_l3_q2",
            "type": "mcq",
            "prompt": "'৩৮. সংকট ব্যবস্থাপনা ও জরুরি প্রটোকল (Crisis Management)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_38_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_39",
    "stageId": "B2",
    "stageName": "স্তর ৪: উচ্চ-মধ্যবর্তী",
    "title": "৩৯. কৃত্রিম বুদ্ধিমত্তা ও আধুনিক বিজ্ঞান (AI, Tech & Society)",
    "desc": "অটোমেশন, ডেটা সিকিউরিটি ও ভবিষ্যতের কর্মক্ষেত্র",
    "icon": "🤖",
    "bg": "from-rose-600 to-red-700",
    "kind": "core",
    "kindNo": 39,
    "lessons": [
      {
        "id": "mod_39_l1",
        "moduleId": "mod_39",
        "title": "৩৯. কৃত্রিম বুদ্ধিমত্তা ও আধুনিক বিজ্ঞান - ১ম পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_39_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_39_l1_q2",
            "type": "mcq",
            "prompt": "'🤖' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_39_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_39_l2",
        "moduleId": "mod_39",
        "title": "৩৯. কৃত্রিম বুদ্ধিমত্তা ও আধুনিক বিজ্ঞান - ২য় পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_39_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_39_l2_q2",
            "type": "mcq",
            "prompt": "'B2' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_39_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_39_l3",
        "moduleId": "mod_39",
        "title": "৩৯. কৃত্রিম বুদ্ধিমত্তা ও আধুনিক বিজ্ঞান - সমাপনী কুইজ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_39_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_39_l3_q2",
            "type": "mcq",
            "prompt": "'৩৯. কৃত্রিম বুদ্ধিমত্তা ও আধুনিক বিজ্ঞান (AI, Tech & Society)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_39_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_40",
    "stageId": "B2",
    "stageName": "স্তর ৪: উচ্চ-মধ্যবর্তী",
    "title": "৪০. লেভেল B2 গ্র্যান্ড চেকপয়েন্ট এক্সাম (Checkpoint B2 Exam)",
    "desc": "উচ্চ-মধ্যবর্তী পেশাদার ইংরেজির চূড়ান্ত পরীক্ষা",
    "icon": "🎖️",
    "bg": "from-red-600 to-amber-700",
    "kind": "core",
    "kindNo": 40,
    "lessons": [
      {
        "id": "mod_40_l1",
        "moduleId": "mod_40",
        "title": "৪০. লেভেল B2 গ্র্যান্ড চেকপয়েন্ট এক্সাম - ১ম পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_40_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_40_l1_q2",
            "type": "mcq",
            "prompt": "'🎖️' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_40_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_40_l2",
        "moduleId": "mod_40",
        "title": "৪০. লেভেল B2 গ্র্যান্ড চেকপয়েন্ট এক্সাম - ২য় পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_40_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_40_l2_q2",
            "type": "mcq",
            "prompt": "'B2' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_40_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_40_l3",
        "moduleId": "mod_40",
        "title": "৪০. লেভেল B2 গ্র্যান্ড চেকপয়েন্ট এক্সাম - সমাপনী কুইজ",
        "xp": 45,
        "isExam": true,
        "questions": [
          {
            "id": "mod_40_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_40_l3_q2",
            "type": "mcq",
            "prompt": "'৪০. লেভেল B2 গ্র্যান্ড চেকপয়েন্ট এক্সাম (Checkpoint B2 Exam)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_40_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_41",
    "stageId": "C1",
    "stageName": "স্তর ৫: পারদর্শী",
    "title": "৪১. নেটিভ ইডিয়মস ও প্রবাদ-প্রবচন (Native Idioms & Proverbs)",
    "desc": "নেটিভ বক্তাদের মতো প্রাকৃতিক অলংকারিক ভাষা",
    "icon": "💡",
    "bg": "from-amber-600 to-yellow-600",
    "kind": "core",
    "kindNo": 41,
    "lessons": [
      {
        "id": "mod_41_l1",
        "moduleId": "mod_41",
        "title": "৪১. নেটিভ ইডিয়মস ও প্রবাদ-প্রবচন - ১ম পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_41_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_41_l1_q2",
            "type": "mcq",
            "prompt": "'💡' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_41_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_41_l2",
        "moduleId": "mod_41",
        "title": "৪১. নেটিভ ইডিয়মস ও প্রবাদ-প্রবচন - ২য় পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_41_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_41_l2_q2",
            "type": "mcq",
            "prompt": "'C1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_41_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_41_l3",
        "moduleId": "mod_41",
        "title": "৪১. নেটিভ ইডিয়মস ও প্রবাদ-প্রবচন - সমাপনী কুইজ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_41_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_41_l3_q2",
            "type": "mcq",
            "prompt": "'৪১. নেটিভ ইডিয়মস ও প্রবাদ-প্রবচন (Native Idioms & Proverbs)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_41_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_42",
    "stageId": "C1",
    "stageName": "স্তর ৫: পারদর্শী",
    "title": "৪২. অ্যাডভান্সড ফ্রেজাল ভার্বস (Advanced Phrasal Verbs)",
    "desc": "জটিল তিন শব্দের ফ্রেজাল ভার্ব ও প্রায়োগিক অর্থ",
    "icon": "🚀",
    "bg": "from-yellow-600 to-orange-600",
    "kind": "core",
    "kindNo": 42,
    "lessons": [
      {
        "id": "mod_42_l1",
        "moduleId": "mod_42",
        "title": "৪২. অ্যাডভান্সড ফ্রেজাল ভার্বস - ১ম পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_42_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_42_l1_q2",
            "type": "mcq",
            "prompt": "'🚀' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_42_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_42_l2",
        "moduleId": "mod_42",
        "title": "৪২. অ্যাডভান্সড ফ্রেজাল ভার্বস - ২য় পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_42_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_42_l2_q2",
            "type": "mcq",
            "prompt": "'C1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_42_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_42_l3",
        "moduleId": "mod_42",
        "title": "৪২. অ্যাডভান্সড ফ্রেজাল ভার্বস - সমাপনী কুইজ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_42_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_42_l3_q2",
            "type": "mcq",
            "prompt": "'৪২. অ্যাডভান্সড ফ্রেজাল ভার্বস (Advanced Phrasal Verbs)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_42_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_43",
    "stageId": "C1",
    "stageName": "স্তর ৫: পারদর্শী",
    "title": "৪৩. সূক্ষ্ম অনুভূতি, স্বর ও ভাবপ্রকাশ (Tone, Nuance & Empathy)",
    "desc": "কূটনৈতিক ভাষা, সংবেদনশীলতা ও সহমর্মিতা",
    "icon": "🎭",
    "bg": "from-orange-600 to-rose-600",
    "kind": "core",
    "kindNo": 43,
    "lessons": [
      {
        "id": "mod_43_l1",
        "moduleId": "mod_43",
        "title": "৪৩. সূক্ষ্ম অনুভূতি, স্বর ও ভাবপ্রকাশ - ১ম পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_43_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_43_l1_q2",
            "type": "mcq",
            "prompt": "'🎭' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_43_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_43_l2",
        "moduleId": "mod_43",
        "title": "৪৩. সূক্ষ্ম অনুভূতি, স্বর ও ভাবপ্রকাশ - ২য় পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_43_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_43_l2_q2",
            "type": "mcq",
            "prompt": "'C1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_43_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_43_l3",
        "moduleId": "mod_43",
        "title": "৪৩. সূক্ষ্ম অনুভূতি, স্বর ও ভাবপ্রকাশ - সমাপনী কুইজ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_43_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_43_l3_q2",
            "type": "mcq",
            "prompt": "'৪৩. সূক্ষ্ম অনুভূতি, স্বর ও ভাবপ্রকাশ (Tone, Nuance & Empathy)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_43_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_44",
    "stageId": "C1",
    "stageName": "স্তর ৫: পারদর্শী",
    "title": "৪৪. উচ্চাঙ্গ সাহিত্য, শিল্প ও নান্দনিকতা (Literature & Fine Arts)",
    "desc": "সাহিত্যের রসাস্বাদন, চিত্রশিল্প ও রূপক অর্থ",
    "icon": "📚",
    "bg": "from-rose-600 to-pink-600",
    "kind": "core",
    "kindNo": 44,
    "lessons": [
      {
        "id": "mod_44_l1",
        "moduleId": "mod_44",
        "title": "৪৪. উচ্চাঙ্গ সাহিত্য, শিল্প ও নান্দনিকতা - ১ম পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_44_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_44_l1_q2",
            "type": "mcq",
            "prompt": "'📚' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_44_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_44_l2",
        "moduleId": "mod_44",
        "title": "৪৪. উচ্চাঙ্গ সাহিত্য, শিল্প ও নান্দনিকতা - ২য় পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_44_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_44_l2_q2",
            "type": "mcq",
            "prompt": "'C1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_44_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_44_l3",
        "moduleId": "mod_44",
        "title": "৪৪. উচ্চাঙ্গ সাহিত্য, শিল্প ও নান্দনিকতা - সমাপনী কুইজ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_44_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_44_l3_q2",
            "type": "mcq",
            "prompt": "'৪৪. উচ্চাঙ্গ সাহিত্য, শিল্প ও নান্দনিকতা (Literature & Fine Arts)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_44_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_45",
    "stageId": "C1",
    "stageName": "স্তর ৫: পারদর্শী",
    "title": "৪৫. বিজ্ঞান, মহাবিশ্ব ও পরিবেশ দর্শন (Science & Ecology)",
    "desc": "কোয়ান্টাম তত্ত্ব, জ্যোতির্বিজ্ঞান ও পরিবেশ রক্ষা",
    "icon": "🔬",
    "bg": "from-pink-600 to-purple-600",
    "kind": "core",
    "kindNo": 45,
    "lessons": [
      {
        "id": "mod_45_l1",
        "moduleId": "mod_45",
        "title": "৪৫. বিজ্ঞান, মহাবিশ্ব ও পরিবেশ দর্শন - ১ম পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_45_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_45_l1_q2",
            "type": "mcq",
            "prompt": "'🔬' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_45_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_45_l2",
        "moduleId": "mod_45",
        "title": "৪৫. বিজ্ঞান, মহাবিশ্ব ও পরিবেশ দর্শন - ২য় পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_45_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_45_l2_q2",
            "type": "mcq",
            "prompt": "'C1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_45_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_45_l3",
        "moduleId": "mod_45",
        "title": "৪৫. বিজ্ঞান, মহাবিশ্ব ও পরিবেশ দর্শন - সমাপনী কুইজ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_45_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_45_l3_q2",
            "type": "mcq",
            "prompt": "'৪৫. বিজ্ঞান, মহাবিশ্ব ও পরিবেশ দর্শন (Science & Ecology)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_45_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_46",
    "stageId": "C1",
    "stageName": "স্তর ৫: পারদর্শী",
    "title": "৪৬. মানবাধিকার, আইন ও বৈশ্বিক সমাজ (Human Rights & Justice)",
    "desc": "সংবিধান, ন্যায়বিচার ও বৈশ্বিক মানবিক সংহতি",
    "icon": "⚖️",
    "bg": "from-purple-600 to-indigo-600",
    "kind": "core",
    "kindNo": 46,
    "lessons": [
      {
        "id": "mod_46_l1",
        "moduleId": "mod_46",
        "title": "৪৬. মানবাধিকার, আইন ও বৈশ্বিক সমাজ - ১ম পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_46_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_46_l1_q2",
            "type": "mcq",
            "prompt": "'⚖️' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_46_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_46_l2",
        "moduleId": "mod_46",
        "title": "৪৬. মানবাধিকার, আইন ও বৈশ্বিক সমাজ - ২য় পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_46_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_46_l2_q2",
            "type": "mcq",
            "prompt": "'C1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_46_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_46_l3",
        "moduleId": "mod_46",
        "title": "৪৬. মানবাধিকার, আইন ও বৈশ্বিক সমাজ - সমাপনী কুইজ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_46_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_46_l3_q2",
            "type": "mcq",
            "prompt": "'৪৬. মানবাধিকার, আইন ও বৈশ্বিক সমাজ (Human Rights & Justice)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_46_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_47",
    "stageId": "C1",
    "stageName": "স্তর ৫: পারদর্শী",
    "title": "৪৭. আন্তর্জাতিক কূটনীতি ও বিশ্ববাণিজ্য (Global Diplomacy)",
    "desc": "দ্বিপাক্ষিক চুক্তি, বৈশ্বিক অর্থনীতি ও আন্তর্জাতিক শিষ্টাচার",
    "icon": "🌐",
    "bg": "from-indigo-600 to-blue-600",
    "kind": "core",
    "kindNo": 47,
    "lessons": [
      {
        "id": "mod_47_l1",
        "moduleId": "mod_47",
        "title": "৪৭. আন্তর্জাতিক কূটনীতি ও বিশ্ববাণিজ্য - ১ম পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_47_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_47_l1_q2",
            "type": "mcq",
            "prompt": "'🌐' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_47_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_47_l2",
        "moduleId": "mod_47",
        "title": "৪৭. আন্তর্জাতিক কূটনীতি ও বিশ্ববাণিজ্য - ২য় পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_47_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_47_l2_q2",
            "type": "mcq",
            "prompt": "'C1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_47_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_47_l3",
        "moduleId": "mod_47",
        "title": "৪৭. আন্তর্জাতিক কূটনীতি ও বিশ্ববাণিজ্য - সমাপনী কুইজ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_47_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_47_l3_q2",
            "type": "mcq",
            "prompt": "'৪৭. আন্তর্জাতিক কূটনীতি ও বিশ্ববাণিজ্য (Global Diplomacy)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_47_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_48",
    "stageId": "C1",
    "stageName": "স্তর ৫: পারদর্শী",
    "title": "৪৮. প্রাতিষ্ঠানিক নেতৃত্ব ও প্রভাব বিস্তার (Leadership & Influence)",
    "desc": "নেতৃত্বের দৃষ্টিভঙ্গি, টিম প্রেরণা ও ক্যারিশমা",
    "icon": "💎",
    "bg": "from-blue-600 to-cyan-600",
    "kind": "core",
    "kindNo": 48,
    "lessons": [
      {
        "id": "mod_48_l1",
        "moduleId": "mod_48",
        "title": "৪৮. প্রাতিষ্ঠানিক নেতৃত্ব ও প্রভাব বিস্তার - ১ম পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_48_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_48_l1_q2",
            "type": "mcq",
            "prompt": "'💎' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_48_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_48_l2",
        "moduleId": "mod_48",
        "title": "৪৮. প্রাতিষ্ঠানিক নেতৃত্ব ও প্রভাব বিস্তার - ২য় পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_48_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_48_l2_q2",
            "type": "mcq",
            "prompt": "'C1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_48_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_48_l3",
        "moduleId": "mod_48",
        "title": "৪৮. প্রাতিষ্ঠানিক নেতৃত্ব ও প্রভাব বিস্তার - সমাপনী কুইজ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_48_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_48_l3_q2",
            "type": "mcq",
            "prompt": "'৪৮. প্রাতিষ্ঠানিক নেতৃত্ব ও প্রভাব বিস্তার (Leadership & Influence)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_48_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_49",
    "stageId": "C1",
    "stageName": "স্তর ৫: পারদর্শী",
    "title": "৪৯. অ্যাকাডেমিক গবেষণা ও ডিসকোর্স (Academic Research)",
    "desc": "গবেষণা পদ্ধতি, হাইপোথিসিস ও থিসিস ডিফেন্স",
    "icon": "🧠",
    "bg": "from-cyan-600 to-teal-600",
    "kind": "core",
    "kindNo": 49,
    "lessons": [
      {
        "id": "mod_49_l1",
        "moduleId": "mod_49",
        "title": "৪৯. অ্যাকাডেমিক গবেষণা ও ডিসকোর্স - ১ম পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_49_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_49_l1_q2",
            "type": "mcq",
            "prompt": "'🧠' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_49_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_49_l2",
        "moduleId": "mod_49",
        "title": "৪৯. অ্যাকাডেমিক গবেষণা ও ডিসকোর্স - ২য় পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_49_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_49_l2_q2",
            "type": "mcq",
            "prompt": "'C1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_49_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_49_l3",
        "moduleId": "mod_49",
        "title": "৪৯. অ্যাকাডেমিক গবেষণা ও ডিসকোর্স - সমাপনী কুইজ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_49_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_49_l3_q2",
            "type": "mcq",
            "prompt": "'৪৯. অ্যাকাডেমিক গবেষণা ও ডিসকোর্স (Academic Research)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_49_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_50",
    "stageId": "C1",
    "stageName": "স্তর ৫: পারদর্শী",
    "title": "৫০. সি১ গ্র্যান্ড মাস্টার ফ্লুয়েন্সি সার্টিফিকেট (C1 Grand Master Exam)",
    "desc": "আন্তর্জাতিক মানে অনর্গল ইংরেজি অর্জনের চূড়ান্ত পরীক্ষা",
    "icon": "👑",
    "bg": "from-amber-500 via-rose-500 to-indigo-600",
    "kind": "core",
    "kindNo": 50,
    "lessons": [
      {
        "id": "mod_50_l1",
        "moduleId": "mod_50",
        "title": "৫০. সি১ গ্র্যান্ড মাস্টার ফ্লুয়েন্সি সার্টিফিকেট - ১ম পাঠ",
        "xp": 50,
        "isExam": false,
        "questions": [
          {
            "id": "mod_50_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_50_l1_q2",
            "type": "mcq",
            "prompt": "'👑' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_50_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_50_l2",
        "moduleId": "mod_50",
        "title": "৫০. সি১ গ্র্যান্ড মাস্টার ফ্লুয়েন্সি সার্টিফিকেট - ২য় পাঠ",
        "xp": 50,
        "isExam": false,
        "questions": [
          {
            "id": "mod_50_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_50_l2_q2",
            "type": "mcq",
            "prompt": "'C1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_50_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_50_l3",
        "moduleId": "mod_50",
        "title": "৫০. সি১ গ্র্যান্ড মাস্টার ফ্লুয়েন্সি সার্টিফিকেট - সমাপনী কুইজ",
        "xp": 50,
        "isExam": true,
        "questions": [
          {
            "id": "mod_50_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_50_l3_q2",
            "type": "mcq",
            "prompt": "'৫০. সি১ গ্র্যান্ড মাস্টার ফ্লুয়েন্সি সার্টিফিকেট (C1 Grand Master Exam)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_50_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  }
];

// Helper to auto-generate Word Modules (teaching every word in chunked lessons)
const WORDS_PER_LESSON = 12;
const LESSONS_PER_WORD_MODULE = 8;
const bnNum = (n: number) => String(n).replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[parseInt(d, 10)]);

export const WORD_MODULES: CurriculumModule[] = [];
{
  const nLessons = Math.ceil(ALL_WORDS_DATABASE.length / WORDS_PER_LESSON);
  for (let wIdx = 0; wIdx < nLessons; wIdx++) {
    const mi = Math.floor(wIdx / LESSONS_PER_WORD_MODULE) + 1;
    const li = (wIdx % LESSONS_PER_WORD_MODULE) + 1;
    const words = ALL_WORDS_DATABASE.slice(wIdx * WORDS_PER_LESSON, (wIdx + 1) * WORDS_PER_LESSON);
    if (!WORD_MODULES[mi - 1]) {
      WORD_MODULES[mi - 1] = {
        id: `wmod_${mi}`,
        title: '',
        desc: '',
        kind: 'word',
        kindNo: mi,
        icon: '📚',
        lessons: [],
        from: words[0]?.id || 1,
        to: words[words.length - 1]?.id || 12
      };
    }
    const mod = WORD_MODULES[mi - 1];
    if (words.length > 0) {
      mod.to = words[words.length - 1].id;
    }

    // Build questions for this lesson
    const lid = `wmod_${mi}_l${li}`;
    const qs: Question[] = [];

    // Matching question for first 4 words
    if (words.length >= 4) {
      qs.push({
        id: `${lid}_m4`,
        type: 'matching',
        prompt: 'ইংরেজি শব্দের সাথে বাংলা অর্থ মেলান:',
        pairs: words.slice(0, 4).map(w => ({ en: w.word, bn: w.bn }))
      });
    }

    // MCQ questions
    words.slice(0, 4).forEach((w, idx) => {
      const otherWords = ALL_WORDS_DATABASE.filter(x => x.id !== w.id && x.bn !== w.bn);
      const opts = [w.bn];
      for (let j = 1; j <= 3; j++) {
        const dummy = otherWords[(w.id * 7 + j * 13) % otherWords.length];
        if (dummy && !opts.includes(dummy.bn)) opts.push(dummy.bn);
      }
      opts.sort(() => (w.id % 2 === 0 ? 1 : -1));
      qs.push({
        id: `${lid}_mcq_${idx}`,
        type: 'mcq',
        prompt: `"${w.word}" এর সঠিক বাংলা অর্থ কী?`,
        questionEn: w.word,
        options: opts,
        answer: w.bn,
        hint: `${w.word} = ${w.bn} (${w.category})`
      });
    });

    // Listening question
    if (words.length > 4) {
      const lw = words[4];
      const otherWords = ALL_WORDS_DATABASE.filter(x => x.id !== lw.id);
      const opts = [lw.word];
      for (let j = 1; j <= 3; j++) {
        const dummy = otherWords[(lw.id * 11 + j * 17) % otherWords.length];
        if (dummy && !opts.includes(dummy.word)) opts.push(dummy.word);
      }
      opts.sort(() => -1);
      qs.push({
        id: `${lid}_listen`,
        type: 'listening',
        prompt: 'মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি শব্দটি নির্বাচন করুন:',
        audioText: lw.word,
        options: opts,
        answer: lw.word,
        hint: `${lw.word} = ${lw.bn}`
      });
    }

    mod.lessons.push({
      id: lid,
      count: words.length,
      title: `শব্দ ${bnNum(words[0]?.id || 1)}–${bnNum(words[words.length - 1]?.id || 12)}`,
      xp: 20,
      questions: qs
    });
  }

  WORD_MODULES.forEach(m => {
    const cats: Record<string, number> = {};
    ALL_WORDS_DATABASE.filter(w => w.id >= (m.from || 1) && w.id <= (m.to || 12)).forEach(w => {
      cats[w.category] = (cats[w.category] || 0) + 1;
    });
    const top = Object.entries(cats).sort((a, b) => b[1] - a[1]).slice(0, 3).map(x => x[0]).join(', ');
    m.title = `${bnNum(m.kindNo || 1)}. শব্দ মডিউল (শব্দ ${bnNum(m.from || 1)}–${bnNum(m.to || 12)})`;
    m.desc = `${bnNum(m.lessons.length)}টি লেসন · ${top}`;
  });
}

// Helper to auto-generate Sentence Modules (teaching all 1060 sentences in chunked lessons)
const SENTS_PER_LESSON = 6;
const LESSONS_PER_SENT_MODULE = 8;

export const SENT_MODULES: CurriculumModule[] = [];
{
  const nLessons = Math.ceil(SENTENCE_BANK.length / SENTS_PER_LESSON);
  for (let lIdx = 0; lIdx < nLessons; lIdx++) {
    const mi = Math.floor(lIdx / LESSONS_PER_SENT_MODULE) + 1;
    const li = (lIdx % LESSONS_PER_SENT_MODULE) + 1;
    const sents = SENTENCE_BANK.slice(lIdx * SENTS_PER_LESSON, (lIdx + 1) * SENTS_PER_LESSON);
    if (!SENT_MODULES[mi - 1]) {
      SENT_MODULES[mi - 1] = {
        id: `smod_${mi}`,
        title: '',
        desc: '',
        kind: 'sent',
        kindNo: mi,
        icon: '💬',
        lessons: [],
        from: sents[0]?.id || 1,
        to: sents[sents.length - 1]?.id || 6
      };
    }
    const mod = SENT_MODULES[mi - 1];
    if (sents.length > 0) {
      mod.to = sents[sents.length - 1].id;
    }

    const lid = `smod_${mi}_l${li}`;
    const qs: Question[] = [];

    sents.forEach((x, i) => {
      if (x.en.split(' ').length <= 8) {
        qs.push(R(`${lid}_r${i}`, x.bn, x.en));
      } else {
        const pool = SENTENCE_BANK.filter(y => y.id !== x.id && y.bn !== x.bn);
        const picks: string[] = [];
        for (let j = 0; j < pool.length && picks.length < 3; j++) {
          const y = pool[(x.id * 7 + j * 13) % pool.length];
          if (!picks.includes(y.bn)) picks.push(y.bn);
        }
        const opts = [...picks];
        opts.splice(x.id % 4, 0, x.bn);
        qs.push(M(`${lid}_m${i}`, `"${x.en}" — বাংলা অর্থ কী?`, opts, x.bn, `${x.en} = ${x.bn}`));
      }

      if (i % 2 === 1) {
        const pool = SENTENCE_BANK.filter(y => y.id !== x.id && y.en !== x.en);
        const picks: string[] = [];
        for (let j = 0; j < pool.length && picks.length < 3; j++) {
          const y = pool[(x.id * 11 + j * 17) % pool.length];
          if (!picks.includes(y.en)) picks.push(y.en);
        }
        const opts = [...picks];
        opts.splice((x.id + 1) % 4, 0, x.en);
        qs.push(L(`${lid}_h${i}`, x.en, opts, x.en, `${x.en} = ${x.bn}`));
      }
    });

    mod.lessons.push({
      id: lid,
      count: sents.length,
      title: `বাক্য ${bnNum(sents[0]?.id || 1)}–${bnNum(sents[sents.length - 1]?.id || 6)}`,
      xp: 25,
      questions: qs
    });
  }

  SENT_MODULES.forEach(m => {
    const cats = Array.from(new Set(SENTENCE_BANK.filter(x => x.id >= (m.from || 1) && x.id <= (m.to || 6)).map(x => x.category))).slice(0, 3).join(', ');
    m.title = `${bnNum(m.kindNo || 1)}. বাক্য মডিউল (বাক্য ${bnNum(m.from || 1)}–${bnNum(m.to || 6)})`;
    m.desc = `${bnNum(m.lessons.length)}টি লেসন · ${cats}`;
  });
}

CORE_MODULES.forEach((m, i) => {
  m.kind = 'core';
  m.kindNo = i + 1;
});

export const ALL_CURRICULUM_PATH: CurriculumModule[] = [
  ...CORE_MODULES,
  ...WORD_MODULES,
  ...SENT_MODULES
];
