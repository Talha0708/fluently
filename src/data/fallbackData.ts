// src/data/fallbackData.ts
// Emergency safe fallback data to guarantee 100% build success on Vercel even if huge files are omitted

export interface WordItem {
  id: number;
  word: string;
  bn: string;
  phonetic?: string;
  pos: string;
  category: string;
  level: string;
}

export interface SentenceItem {
  id: number;
  category: string;
  en: string;
  bn: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
}

export const ALL_WORDS_DATABASE: WordItem[] = [
  { id: 1, word: "Hello", bn: "হ্যালো / ওহে", phonetic: "হ্যালো", pos: "interjection", category: "Basics", level: "A1" },
  { id: 2, word: "Good Morning", bn: "শুভ সকাল", phonetic: "গুড মর্নিং", pos: "phrase", category: "Basics", level: "A1" },
  { id: 3, word: "Thank you", bn: "ধন্যবাদ", phonetic: "থ্যাংক ইউ", pos: "phrase", category: "Basics", level: "A1" },
  { id: 4, word: "Welcome", bn: "স্বাগতম", phonetic: "ওয়েলকাম", pos: "interjection", category: "Basics", level: "A1" },
  { id: 5, word: "Please", bn: "দয়া করে", phonetic: "প্লিজ", pos: "adverb", category: "Basics", level: "A1" },
  { id: 6, word: "Friend", bn: "বন্ধু", phonetic: "ফ্রেন্ড", pos: "noun", category: "People", level: "A1" },
  { id: 7, word: "Family", bn: "পরিবার", phonetic: "ফ্যামিলি", pos: "noun", category: "People", level: "A1" },
  { id: 8, word: "Water", bn: "পানি", phonetic: "ওয়াটার", pos: "noun", category: "Food", level: "A1" },
  { id: 9, word: "Food", bn: "খাবার", phonetic: "ফুড", pos: "noun", category: "Food", level: "A1" },
  { id: 10, word: "Book", bn: "বই", phonetic: "বুক", pos: "noun", category: "Education", level: "A1" },
  { id: 11, word: "School", bn: "বিদ্যালয়", phonetic: "স্কুল", pos: "noun", category: "Education", level: "A1" },
  { id: 12, word: "Work", bn: "কাজ", phonetic: "ওয়ার্ক", pos: "noun", category: "Work", level: "A1" }
];

export const ALL_CATEGORIES: string[] = Array.from(new Set(ALL_WORDS_DATABASE.map(w => w.category)));

export const SENTENCE_BANK: SentenceItem[] = [
  { id: 1, category: "Greetings", en: "How have you been?", bn: "আপনি কেমন ছিলেন?", level: "A1" },
  { id: 2, category: "Greetings", en: "It is nice to see you again.", bn: "আবার দেখা হয়ে ভালো লাগল।", level: "A1" },
  { id: 3, category: "Greetings", en: "Let me introduce myself.", bn: "আমাকে নিজের পরিচয় দিতে দিন।", level: "A1" },
  { id: 4, category: "Greetings", en: "I am glad to meet you.", bn: "আপনার সাথে পরিচিত হয়ে খুশি।", level: "A1" },
  { id: 5, category: "Greetings", en: "Thank you for your help.", bn: "আপনার সাহায্যের জন্য ধন্যবাদ।", level: "A1" },
  { id: 6, category: "Conversation", en: "Where do you live?", bn: "আপনি কোথায় বাস করেন?", level: "A1" }
];

export const SENTENCE_CATEGORIES: string[] = Array.from(new Set(SENTENCE_BANK.map(s => s.category)));
