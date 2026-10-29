import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Flame, Heart, Trophy, Star, Play, Volume2, CheckCircle2, XCircle,
  ArrowRight, RotateCcw, Award, BookOpen, User, Home, Sparkles, Check,
  Zap, Search, VolumeX, Settings, ShieldCheck, RefreshCw, BarChart2,
  Bookmark, ChevronRight, HelpCircle, FastForward, Turtle, Layers, Compass,
  Info, ChevronLeft, ExternalLink, Target, Gift, Shield, Phone, Mic, Plus, Brain,
  Menu, X, MessageCircle, Copy, Download, Smartphone
} from 'lucide-react';

import {
  ALL_WORDS_DATABASE,
  ALL_CATEGORIES,
  WordItem,
  SENTENCE_BANK,
  SENTENCE_CATEGORIES,
  SentenceItem,
  ALL_CURRICULUM_PATH,
  CORE_MODULES,
  WORD_MODULES,
  SENT_MODULES,
  STAGES,
  DAILY_QUESTS,
  STREAK_MILESTONES,
  ACHIEVEMENTS,
  CurriculumModule,
  Lesson,
  Question
} from './data/curriculumData';

import {
  SrsCard,
  INITIAL_SRS_CARDS,
  getTodayKey,
  getDueSrsCards
} from './utils/srsEngine';

import { SrsReviewDeck } from './components/SrsReviewDeck';
import { VoiceSpeakingLab } from './components/VoiceSpeakingLab';
import { BengaliMistakesGuide } from './components/BengaliMistakesGuide';

export const TALHA_BELAL_PHONE = '01987573397';
export const TALHA_BELAL_FB = 'https://www.facebook.com/talha.belal.92';

// ==========================================
// 1. ROBUST AUDIO & SOUND SYNTHESIZER
// ==========================================
export const playSound = (type: 'correct' | 'wrong' | 'complete' | 'levelup' | 'reward' | 'gem') => {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'correct') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.1);
      osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } else if (type === 'wrong') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.setValueAtTime(164.81, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } else if (type === 'complete' || type === 'levelup' || type === 'reward') {
      const notes = type === 'levelup' ? [523.25, 659.25, 783.99, 1046.50, 1318.51] : [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const noteOsc = ctx.createOscillator();
        const noteGain = ctx.createGain();
        noteOsc.type = 'triangle';
        noteOsc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
        noteGain.gain.setValueAtTime(0.2, ctx.currentTime + idx * 0.08);
        noteGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + idx * 0.08 + 0.3);
        noteOsc.connect(noteGain);
        noteGain.connect(ctx.destination);
        noteOsc.start(ctx.currentTime + idx * 0.08);
        noteOsc.stop(ctx.currentTime + idx * 0.08 + 0.3);
      });
    } else if (type === 'gem') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(987.77, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1318.51, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    }
  } catch {}
};

// Pre-cached voices & voice listener
let cachedVoices: SpeechSynthesisVoice[] = [];
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  const updateVoices = () => {
    try {
      cachedVoices = window.speechSynthesis.getVoices();
    } catch {}
  };
  updateVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = updateVoices;
  }
}

// Global active utterance reference to prevent premature garbage collection in Chrome/Safari
let activeUtterance: SpeechSynthesisUtterance | null = null;

export const speakText = (text: string, isSlow = false) => {
  if (!text || !text.trim()) return;
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
      window.speechSynthesis.cancel();
    } catch {}

    // Clean any bracketed phonetics or smart quotes
    const cleanText = text
      .replace(/\[.*?\]/g, '')
      .replace(/[“’”‘`]/g, '"')
      .trim();

    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-US';
    utterance.rate = isSlow ? 0.65 : 0.88;
    utterance.pitch = 1.0;

    try {
      const voices = cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices();
      const englishVoice =
        voices.find(v => (v.lang === 'en-US' || v.lang === 'en_US') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.default)) ||
        voices.find(v => v.lang.startsWith('en-US') || v.lang.startsWith('en_US')) ||
        voices.find(v => v.lang.startsWith('en'));
      if (englishVoice) {
        utterance.voice = englishVoice;
      }
    } catch {}

    activeUtterance = utterance;
    (window as any).__fluentlyUtterance = utterance;

    utterance.onend = () => {
      activeUtterance = null;
      (window as any).__fluentlyUtterance = null;
    };
    utterance.onerror = (e) => {
      console.warn('SpeechSynthesis error:', e);
      activeUtterance = null;
      (window as any).__fluentlyUtterance = null;
    };

    try {
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis speak error', e);
    }
  }
};

// Robust helper to extract speakable English text from ANY question type
export const getSpokenTextForQuestion = (q?: Question | null): string => {
  if (!q) return '';
  if (q.questionEn && q.questionEn.trim()) return q.questionEn.trim();
  if (q.audioText && q.audioText.trim()) return q.audioText.trim();

  // 1. Check prompt quotes: straight single/double, smart/curly quotes, backticks
  const quoteMatch = q.prompt.match(/["'“‘`]([a-zA-Z0-9\s.,?!'-]+)["'”’`]/);
  if (quoteMatch && quoteMatch[1] && quoteMatch[1].trim()) {
    return quoteMatch[1].trim();
  }

  // 2. Answer can be array of words (reorder questions)
  if (Array.isArray(q.answer) && q.answer.length > 0) {
    const joined = q.answer.join(' ').trim();
    if (/^[a-zA-Z\s.,?!'-]+$/.test(joined)) {
      return joined;
    }
  }

  // 3. Answer can be an English string
  if (typeof q.answer === 'string' && /^[a-zA-Z\s.,?!'-]+$/.test(q.answer.trim())) {
    return q.answer.trim();
  }

  // 4. Words array in reorder questions
  if (Array.isArray(q.words) && q.words.length > 0) {
    const joinedWords = q.words.join(' ').trim();
    if (/^[a-zA-Z\s.,?!'-]+$/.test(joinedWords)) {
      return joinedWords;
    }
  }

  // 5. Pairs in matching questions
  if (q.pairs && q.pairs.length > 0) {
    return q.pairs.map(p => p.en).join(', ');
  }

  // 6. Look for English options
  if (Array.isArray(q.options)) {
    const enOpt = q.options.find(opt => /^[a-zA-Z\s.,?!'-]{2,}$/.test(opt.trim()));
    if (enOpt) return enOpt.trim();
  }

  // 7. Extract English phrase from prompt
  const enMatch = q.prompt.match(/[a-zA-Z]{2,}(?:\s+[a-zA-Z]{2,})*/g);
  if (enMatch && enMatch.length > 0) {
    return enMatch.join(' ');
  }

  return '';
};

// ==========================================
// 2. FLUENTLY DESIGN CSS CONSTANTS
// ==========================================
const DUO_CSS = String.raw`
.rk { font-family: 'Nunito', 'Hind Siliguri', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #4B4B4B; background: #F8FAFC; }
.rk .text-slate-800 { color: #2D3748; }
.rk .duo-node { transition: transform .08s, box-shadow .08s; }
.rk .duo-node:active { transform: translateY(4px); box-shadow: 0 1px 0 rgba(0,0,0,.25) !important; }
.rk :focus-visible { outline: 3px solid #1CB0F6; outline-offset: 2px; }
@media (prefers-reduced-motion: reduce) { .rk * { animation: none !important; } }
`;

const UNIT_COLORS = [
  ['#1CB0F6', '#1899D6'],
  ['#6366F1', '#4F46E5'],
  ['#CE82FF', '#A568CC'],
  ['#FF9600', '#CC7800'],
  ['#FF4B4B', '#D33131'],
  ['#2B70C9', '#1E5298']
];

const bnNum = (n: number) => String(n).replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[Number(d)]);
const dayKey = (d = new Date()) => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
const calcStreak = (days: string[] = []) => {
  const set = new Set(days);
  let n = 0;
  const d = new Date();
  if (!set.has(dayKey(d))) d.setDate(d.getDate() - 1);
  while (set.has(dayKey(d))) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
};
const daysAgo = (key: string | null) => (key ? Math.round((new Date(dayKey()).getTime() - new Date(key).getTime()) / 86400000) : null);
const agoText = (n: number | null) => (n === null ? '' : n === 0 ? 'আজকে' : `${n} দিন আগে`);
const DAILY_GOAL = 50;
const LEVEL_TITLES = ['শিক্ষানবিস', 'আগ্রহী', 'অগ্রগামী', 'সাহসী', 'দক্ষ', 'সাবলীল', 'নেটিভ মাস্টার'];
const levelTitle = (lv: number) => LEVEL_TITLES[Math.min(lv - 1, LEVEL_TITLES.length - 1)];
const COMBO_MSGS = ['', '', 'কম্বো x2!', 'দারুণ x3! +বোনাস', 'অসাধারণ x4! +বোনাস', 'নেটিভ স্পিড x5! +বোনাস'];
const buzz = (ms: number | number[]) => { try { navigator.vibrate && navigator.vibrate(ms); } catch {} };

const Confetti = () => {
  const bits = useMemo(() => Array.from({ length: 48 }, (_, i) => ({
    left: Math.random() * 100,
    delay: Math.random() * 0.8,
    dur: 2 + Math.random() * 1.8,
    color: ['#0ea5e9', '#facc15', '#f43f5e', '#6366f1', '#06b6d4', '#f97316'][i % 6],
    rot: Math.random() * 360
  })), []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-50">
      {bits.map((b, i) => (
        <span
          key={i}
          className="fl-confetti"
          style={{
            left: `${b.left}%`,
            background: b.color,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.dur}s`,
            transform: `rotate(${b.rot}deg)`
          }}
        />
      ))}
    </div>
  );
};

const PAGE_SIZE = 20;
const loadPage = (k: string) => {
  try {
    return Math.max(1, parseInt(JSON.parse(localStorage.getItem('fluently_pages_v4') || '{}')[k], 10) || 1);
  } catch {
    return 1;
  }
};
const savePage = (k: string, v: number) => {
  try {
    const o = JSON.parse(localStorage.getItem('fluently_pages_v4') || '{}');
    o[k] = v;
    localStorage.setItem('fluently_pages_v4', JSON.stringify(o));
  } catch {}
};

interface PagerProps {
  page: number;
  total: number;
  onChange: (p: number) => void;
}

const Pager: React.FC<PagerProps> = ({ page, total, onChange }) => {
  if (total <= 1) return null;
  const nums: number[] = [];
  const add = (n: number) => { if (n >= 1 && n <= total && !nums.includes(n)) nums.push(n); };
  add(1);
  for (let n = page - 2; n <= page + 2; n++) add(n);
  add(total);
  nums.sort((a, b) => a - b);
  const items: (number | string)[] = [];
  nums.forEach((n, i) => {
    if (i > 0 && n - nums[i - 1] > 1) items.push('gap' + n);
    items.push(n);
  });
  const btn = 'min-w-[40px] h-10 px-3 rounded-xl border-2 font-black text-sm transition-all cursor-pointer';

  return (
    <div className="bg-white rounded-3xl border-2 border-slate-200 p-4 space-y-3">
      <p className="text-center text-xs font-extrabold text-slate-500">পৃষ্ঠা {page} / {total}</p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          disabled={page <= 1}
          onClick={() => onChange(page - 1)}
          className={`${btn} flex items-center gap-1 border-slate-200 text-slate-600 disabled:opacity-40`}
          aria-label="Previous Page"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        {items.map(n => typeof n === 'string'
          ? <span key={n} className="text-slate-400 font-black">…</span>
          : (
            <button
              key={n}
              onClick={() => onChange(n)}
              className={`${btn} ${n === page ? 'bg-sky-500 border-sky-700 text-white' : 'bg-white border-slate-200 text-slate-600 hover:border-sky-400'}`}
            >
              {n}
            </button>
          ))}
        <button
          disabled={page >= total}
          onClick={() => onChange(page + 1)}
          className={`${btn} flex items-center gap-1 border-slate-200 text-slate-600 disabled:opacity-40`}
          aria-label="Next Page"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// ==========================================
// 3. MAIN APP COMPONENT
// ==========================================
export default function App() {
  interface UserStatsState {
    xp: number;
    gems: number;
    hearts: number;
    maxHearts: number;
    completedLessons: string[];
    level: number;
    savedWords: WordItem[];
    savedSentences: number[];
    daily: Record<string, { xp: number; lessons: number; correct: number; total: number; sec: number }>;
    history: Record<string, { attempts: number; best: number; last: number; lastDate: string }>;
    exams: { date: string; pct: number; total: number }[];
    activeDays: string[];
    streakFreezes: number;
    claimedStreakMilestones: number[];
    claimedQuests: Record<string, string>;
  }

  const DEFAULT_STATS: UserStatsState = {
    xp: 0,
    gems: 30,
    hearts: 5,
    maxHearts: 5,
    completedLessons: [],
    level: 1,
    savedWords: [],
    savedSentences: [],
    daily: {},
    history: {},
    exams: [],
    activeDays: [],
    streakFreezes: 1,
    claimedStreakMilestones: [],
    claimedQuests: {}
  };

  const [userStats, setUserStats] = useState<UserStatsState>(() => {
    try {
      const saved = localStorage.getItem('fluently_stats_v5');
      if (saved) return { ...DEFAULT_STATS, ...JSON.parse(saved) };
    } catch {}
    return DEFAULT_STATS;
  });

  // Persistent Spaced Repetition System (SRS) Deck
  const [srsCards, setSrsCards] = useState<SrsCard[]>(() => {
    try {
      const saved = localStorage.getItem('fluently_srs_deck_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    return INITIAL_SRS_CARDS;
  });

  useEffect(() => {
    localStorage.setItem('fluently_srs_deck_v2', JSON.stringify(srsCards));
  }, [srsCards]);

  // Settings State
  const [isSlowAudio, setIsSlowAudio] = useState<boolean>(() => {
    try {
      return JSON.parse(localStorage.getItem('fluently_settings_v4') || '{}').slow || false;
    } catch {
      return false;
    }
  });
  const [fontSize, setFontSize] = useState<string>(() => {
    try {
      return JSON.parse(localStorage.getItem('fluently_settings_v4') || '{}').font || 'normal';
    } catch {
      return 'normal';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('fluently_settings_v4', JSON.stringify({ slow: isSlowAudio, font: fontSize }));
    } catch {}
  }, [isSlowAudio, fontSize]);

  // Save Stats to LocalStorage
  useEffect(() => {
    localStorage.setItem('fluently_stats_v5', JSON.stringify(userStats));
  }, [userStats]);

  // Navigation State
  const [activeTab, setActiveTab] = useState<'path' | 'srs' | 'speaking' | 'dictionary' | 'sentences' | 'mistakes' | 'leaderboard' | 'profile' | 'about' | 'lesson'>('path');

  // Stage & Path Filters (CEFR 50 Master Modules)
  const [selectedStage, setSelectedStage] = useState<string>('all');

  // Right-side Menu Drawer State (Frees up mobile bottom space!)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Active Lesson State
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [reorderedWords, setReorderedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({});
  const [selectedEn, setSelectedEn] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [lessonXpEarned, setLessonXpEarned] = useState(0);
  const [lessonCorrect, setLessonCorrect] = useState(0);
  const lessonStartRef = useRef(Date.now());
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [comboToast, setComboToast] = useState('');
  const levelAtStartRef = useRef(1);

  // Modals
  const [showStreakModal, setShowStreakModal] = useState(false);
  const [showQuestsModal, setShowQuestsModal] = useState(false);
  const [showInstallModal, setShowInstallModal] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [addedToast, setAddedToast] = useState<string | null>(null);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    const handlePrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handlePrompt);
    return () => window.removeEventListener('beforeinstallprompt', handlePrompt);
  }, []);

  // Dictionary Search & Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [wordPage, setWordPage] = useState(() => loadPage('words'));

  // Sentence Bank Filters
  const [sentCat, setSentCat] = useState('All');
  const [sentLevel, setSentLevel] = useState('All');
  const [sentSearch, setSentSearch] = useState('');
  const [showBn, setShowBn] = useState(true);
  const [onlySaved, setOnlySaved] = useState(false);
  const [sentPage, setSentPage] = useState(() => loadPage('sents'));

  // Handle Question Initialization
  useEffect(() => {
    if (activeLesson) {
      const q = activeLesson.questions[questionIdx];
      setIsAnswerChecked(false);
      setSelectedOpt(null);
      setSelectedEn(null);
      setMatchedPairs({});

      if (q && q.type === 'reorder') {
        const shuffled = [...(q.words || [])].sort(() => Math.random() - 0.5);
        setAvailableWords(shuffled);
        setReorderedWords([]);
      }
    }
  }, [activeLesson, questionIdx]);

  // Lesson Trigger
  const startLesson = (lesson: Lesson) => {
    const modId = lesson.moduleId || ALL_CURRICULUM_PATH.find(m => m.lessons.some(l => l.id === lesson.id))?.id;
    setActiveLesson({ ...lesson, moduleId: modId });
    setLessonCorrect(0);
    lessonStartRef.current = Date.now();
    levelAtStartRef.current = userStats.level;
    setCombo(0);
    setBestCombo(0);
    setComboToast('');
    setQuestionIdx(0);
    setShowSummary(false);
    setLessonXpEarned(0);
    setActiveTab('lesson');
    setIsMenuOpen(false);
  };

  const startModule = (m: CurriculumModule) => startLesson({
    id: m.id + '_all',
    moduleId: m.id,
    title: m.title,
    xp: m.lessons.reduce((n, l) => n + l.xp, 0),
    questions: m.lessons.flatMap(l => l.questions)
  });

  const startExam = () => {
    const pool = ALL_CURRICULUM_PATH.flatMap(m => m.lessons.flatMap(l => l.questions));
    const picked = [...pool].sort(() => Math.random() - 0.5).slice(0, 10);
    startLesson({ id: 'exam', title: 'মডেল টেস্ট পরীক্ষা (Exam)', xp: 40, isExam: true, questions: picked });
  };

  const handleRefillHearts = () => {
    if (userStats.hearts >= userStats.maxHearts) return;
    setUserStats(prev => ({ ...prev, hearts: prev.maxHearts }));
    playSound('correct');
  };

  const handleBuyStreakFreeze = () => {
    if (userStats.gems < 20) {
      alert('পর্যাপ্ত জেমস নেই!');
      return;
    }
    setUserStats(prev => ({
      ...prev,
      gems: prev.gems - 20,
      streakFreezes: prev.streakFreezes + 1
    }));
    playSound('gem');
  };

  const handleClaimStreakMilestone = (m: typeof STREAK_MILESTONES[0]) => {
    if (userStats.claimedStreakMilestones.includes(m.days)) return;
    const currentStreak = calcStreak(userStats.activeDays);
    if (currentStreak < m.days) return;
    setUserStats(prev => ({
      ...prev,
      xp: prev.xp + m.xp,
      gems: prev.gems + m.gems,
      claimedStreakMilestones: [...prev.claimedStreakMilestones, m.days]
    }));
    playSound('reward');
  };

  const handleClaimQuest = (q: typeof DAILY_QUESTS[0]) => {
    const today = dayKey();
    if (userStats.claimedQuests[q.id] === today) return;
    setUserStats(prev => ({
      ...prev,
      xp: prev.xp + q.xp,
      gems: prev.gems + q.gems,
      claimedQuests: { ...prev.claimedQuests, [q.id]: today }
    }));
    playSound('gem');
  };

  // Add Item to Spaced Repetition System (SRS) Deck
  const handleAddToSrs = (item: { english: string; bengali: string; phonetic?: string; category: string; level: string; type: 'word' | 'sentence'; id: string | number }) => {
    const cardId = `${item.type}_${item.id}`;
    if (srsCards.some(c => c.id === cardId)) {
      setAddedToast(`"${item.english}" ইতিমধ্যে ডেক-এ আছে!`);
      setTimeout(() => setAddedToast(null), 2000);
      return;
    }

    const newCard: SrsCard = {
      id: cardId,
      type: item.type,
      english: item.english,
      bengali: item.bengali,
      phonetic: item.phonetic,
      category: item.category,
      level: item.level,
      repetition: 0,
      intervalDays: 1,
      easeFactor: 2.5,
      dueDate: getTodayKey(),
      historyCount: 0
    };

    setSrsCards(prev => [newCard, ...prev]);
    playSound('gem');
    setAddedToast(`"${item.english}" মেমোরি ডেক-এ যোগ হয়েছে!`);
    setTimeout(() => setAddedToast(null), 2500);
  };

  // Copy phone number on About tab
  const handleCopyPhone = () => {
    try {
      navigator.clipboard.writeText(TALHA_BELAL_PHONE);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    } catch {}
  };

  // Lesson Checking
  const handleCheckAnswer = () => {
    if (isAnswerChecked || !activeLesson) return;
    const currentQ = activeLesson.questions[questionIdx];
    let correct = false;
    if (currentQ.type === 'mcq' || currentQ.type === 'listening') {
      correct = selectedOpt === currentQ.answer;
    } else if (currentQ.type === 'reorder') {
      correct = JSON.stringify(reorderedWords) === JSON.stringify(currentQ.answer);
    } else if (currentQ.type === 'matching') {
      correct = Object.keys(matchedPairs).length === (currentQ.pairs?.length || 0);
    }

    setIsCorrect(correct);
    setIsAnswerChecked(true);

    if (correct) {
      playSound('correct');
      buzz(30);
      const nc = combo + 1;
      const bonus = nc >= 3 ? 5 : 0;
      setCombo(nc);
      setBestCombo(b => Math.max(b, nc));
      setComboToast(COMBO_MSGS[Math.min(nc, 5)] || '');
      setLessonXpEarned(prev => prev + 10 + bonus);
      setLessonCorrect(prev => prev + 1);
    } else {
      playSound('wrong');
      buzz([60, 40, 60]);
      setCombo(0);
      setComboToast('');
      setUserStats(prev => ({
        ...prev,
        hearts: Math.max(0, prev.hearts - 1)
      }));
    }
  };

  const handleNextQuestion = () => {
    if (!activeLesson) return;
    if (questionIdx + 1 < activeLesson.questions.length) {
      setQuestionIdx(prev => prev + 1);
    } else {
      playSound('complete');
      setShowSummary(true);
      const totalXpGained = activeLesson.xp + lessonXpEarned;
      const pct = Math.round((lessonCorrect / activeLesson.questions.length) * 100);
      const today = dayKey();
      const secs = Math.min(3600, Math.round((Date.now() - lessonStartRef.current) / 1000));

      setUserStats(prev => {
        const h = { ...(prev.history || {}) };
        const bump = (key: string) => {
          const o = h[key] || { attempts: 0, best: 0, last: 0, lastDate: today };
          h[key] = { attempts: o.attempts + 1, best: Math.max(o.best, pct), last: pct, lastDate: today };
        };
        if (!activeLesson.isExam) {
          if (!activeLesson.id.endsWith('_all')) bump(activeLesson.id);
          if (activeLesson.moduleId) bump(activeLesson.moduleId);
        }
        const dy = { ...(prev.daily || {}) };
        const d0 = dy[today] || { xp: 0, lessons: 0, correct: 0, total: 0, sec: 0 };
        dy[today] = {
          xp: d0.xp + totalXpGained,
          lessons: d0.lessons + 1,
          correct: d0.correct + lessonCorrect,
          total: d0.total + activeLesson.questions.length,
          sec: d0.sec + secs
        };

        const xp = prev.xp + totalXpGained;
        const newGems = prev.gems + (pct === 100 ? 5 : 2);

        return {
          ...prev,
          daily: dy,
          xp,
          gems: newGems,
          level: Math.floor(xp / 100) + 1,
          history: h,
          exams: activeLesson.isExam ? [...(prev.exams || []), { date: today, pct, total: activeLesson.questions.length }] : (prev.exams || []),
          completedLessons: activeLesson.isExam || activeLesson.id.endsWith('_all') ? prev.completedLessons : Array.from(new Set([...prev.completedLessons, activeLesson.id])),
          activeDays: Array.from(new Set([...(prev.activeDays || []), today]))
        };
      });
    }
  };

  const toggleSaveWord = (wordObj: WordItem) => {
    setUserStats(prev => {
      const exists = prev.savedWords.some(w => w.id === wordObj.id);
      const updated = exists
        ? prev.savedWords.filter(w => w.id !== wordObj.id)
        : [...prev.savedWords, wordObj];
      return { ...prev, savedWords: updated };
    });
  };

  const toggleSaveSentence = (id: number) => {
    setUserStats(prev => {
      const cur = prev.savedSentences || [];
      return { ...prev, savedSentences: cur.includes(id) ? cur.filter(x => x !== id) : [...cur, id] };
    });
  };

  // Filtered Sentences
  const filteredSentences = useMemo(() => SENTENCE_BANK.filter(x =>
    (sentCat === 'All' || x.category === sentCat) &&
    (sentLevel === 'All' || x.level === sentLevel) &&
    (!onlySaved || (userStats.savedSentences || []).includes(x.id)) &&
    (x.en.toLowerCase().includes(sentSearch.toLowerCase()) || x.bn.includes(sentSearch))
  ), [sentCat, sentLevel, sentSearch, onlySaved, userStats.savedSentences]);

  const sentenceOfTheDay = SENTENCE_BANK[(new Date().getDate() * 7) % SENTENCE_BANK.length];

  // Filtered Words
  const filteredWords = useMemo(() => {
    return ALL_WORDS_DATABASE.filter(w => {
      const matchesSearch = w.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
        w.bn.includes(searchTerm) ||
        (w.phonetic || '').includes(searchTerm);
      const matchesCat = selectedCategory === 'All' || w.category === selectedCategory;
      const matchesLvl = selectedLevel === 'All' || w.level === selectedLevel;
      return matchesSearch && matchesCat && matchesLvl;
    });
  }, [searchTerm, selectedCategory, selectedLevel]);

  const totalWordPages = Math.max(1, Math.ceil(filteredWords.length / PAGE_SIZE));
  const curWordPage = Math.min(wordPage, totalWordPages);
  const pagedWords = filteredWords.slice((curWordPage - 1) * PAGE_SIZE, curWordPage * PAGE_SIZE);

  const totalSentPages = Math.max(1, Math.ceil(filteredSentences.length / PAGE_SIZE));
  const curSentPage = Math.min(sentPage, totalSentPages);
  const pagedSents = filteredSentences.slice((curSentPage - 1) * PAGE_SIZE, curSentPage * PAGE_SIZE);

  const goWordPage = (p: number) => {
    setWordPage(p);
    savePage('words', p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const goSentPage = (p: number) => {
    setSentPage(p);
    savePage('sents', p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hist = userStats.history || {};
  const pctNow = activeLesson ? Math.round((lessonCorrect / activeLesson.questions.length) * 100) : 0;
  const weakModules = ALL_CURRICULUM_PATH.filter(m => hist[m.id] && (hist[m.id].last < 70 || (daysAgo(hist[m.id].lastDate) ?? 0) >= 3))
    .sort((a, b) => hist[a.id].last - hist[b.id].last).slice(0, 3);

  // Master Path Filter
  const displayedModules = useMemo(() => {
    if (selectedStage === 'all') {
      return CORE_MODULES;
    } else if (selectedStage === 'word') {
      return WORD_MODULES;
    } else if (selectedStage === 'sent') {
      return SENT_MODULES;
    } else {
      return CORE_MODULES.filter(m => m.stageId === selectedStage);
    }
  }, [selectedStage]);

  // Stage Progress Calculation (50 Core Modules: 10 per stage)
  const stageProgress = useMemo(() => {
    return STAGES.map(stage => {
      const stageMods = CORE_MODULES.filter(m => m.stageId === stage.id);
      const stageLessons = stageMods.flatMap(m => m.lessons);
      const completed = stageLessons.filter(l => userStats.completedLessons.includes(l.id)).length;
      const total = stageLessons.length;
      const pct = total ? Math.round((completed / total) * 100) : 0;
      return { ...stage, completed, total, pct };
    });
  }, [userStats.completedLessons]);

  const currentStreak = calcStreak(userStats.activeDays);
  const todayXp = (userStats.daily || {})[dayKey()]?.xp || 0;
  const todayLessons = (userStats.daily || {})[dayKey()]?.lessons || 0;
  const dueSrsCount = getDueSrsCards(srsCards, getTodayKey()).length;

  return (
    <div className={`rk min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between selection:bg-sky-200 ${fontSize === 'large' ? 'text-lg' : 'text-base'}`}>
      <style>{DUO_CSS}</style>
      <style>{`
        @keyframes flFall { 0% { top: -5%; opacity: 1; } 100% { top: 105%; opacity: 0.9; } }
        .fl-confetti { position: absolute; top: -5%; width: 10px; height: 14px; border-radius: 2px; animation: flFall linear forwards; }
        @keyframes flPop { 0% { transform: scale(.6); opacity: 0; } 60% { transform: scale(1.15); } 100% { transform: scale(1); opacity: 1; } }
        .fl-pop { animation: flPop .35s ease-out; }
      `}</style>

      {/* Quick Toast for SRS addition */}
      {addedToast && (
        <div className="fixed top-18 right-4 z-50 bg-slate-900/90 text-white font-extrabold text-xs px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 animate-fadeIn border border-slate-700">
          <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
          <span>{addedToast}</span>
        </div>
      )}

      {/* ================= TOP BRAND HEADER ================= */}
      <header className="sticky top-0 z-40 bg-white border-b-2 border-slate-200 shadow-xs px-3 sm:px-4 py-2.5">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-2">
          {/* Logo & Brand Title */}
          <div
            onClick={() => setActiveTab('path')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-sky-400 flex items-center justify-center text-white font-black text-xl shadow-md group-hover:scale-105 transition-transform">
              F
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-slate-800 group-hover:text-sky-600 transition-colors">
                Fluently
              </span>
              <span className="hidden sm:block text-[9px] font-extrabold uppercase tracking-widest text-sky-600">
                ৫০টি মাস্টার মডিউল • {ALL_WORDS_DATABASE.length} শব্দ
              </span>
            </div>
          </div>

          {/* Gamification Stats & Right-side Menu Trigger */}
          <div className="flex items-center space-x-1 sm:space-x-2.5 font-black text-xs sm:text-sm shrink-0">
            {/* Streak */}
            <button
              onClick={() => setShowStreakModal(true)}
              title="দৈনিক স্ট্রিক দেখুন"
              className="flex items-center space-x-1 text-amber-500 bg-amber-50 px-2 py-1 rounded-full border border-amber-200 shadow-xs hover:bg-amber-100 transition-all cursor-pointer shrink-0"
            >
              <Flame className="w-3.5 h-3.5 fill-amber-500 animate-pulse" />
              <span>{currentStreak}</span>
            </button>

            {/* Gems */}
            <div
              title="জেমস সংখ্যা"
              className="flex items-center space-x-1 text-cyan-600 bg-cyan-50 px-2 py-1 rounded-full border border-cyan-200 shadow-xs shrink-0"
            >
              <span className="text-xs">💎</span>
              <span>{userStats.gems}</span>
            </div>

            {/* XP (shown on sm screens and up) */}
            <div className="hidden sm:flex items-center space-x-1 text-yellow-600 bg-yellow-50 px-2.5 py-1 rounded-full border border-yellow-200 shadow-xs shrink-0">
              <Zap className="w-4 h-4 fill-yellow-500" />
              <span>{userStats.xp}</span>
            </div>

            {/* Hearts */}
            <button
              onClick={handleRefillHearts}
              title="হার্ট রিফিল করুন"
              className="flex items-center space-x-1 text-rose-500 bg-rose-50 px-2 py-1 rounded-full border border-rose-200 hover:bg-rose-100 transition-colors shadow-xs cursor-pointer shrink-0"
            >
              <Heart className="w-3.5 h-3.5 fill-rose-500" />
              <span>{userStats.hearts}</span>
            </button>

            {/* RIGHT SIDE MENU BAR TRIGGER (Frees up bottom mobile space!) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl sm:rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-black text-xs sm:text-sm shadow-xs border-b-2 border-sky-700 active:border-b-0 active:translate-y-1 transition-all cursor-pointer shrink-0"
              aria-label="Open Right Side Navigation Menu"
            >
              <Menu className="w-4 h-4" />
              <span>মেনু</span>
            </button>
          </div>
        </div>
      </header>

      {/* ================= RIGHT-SIDE SLIDE-OVER NAVIGATION DRAWER ================= */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end animate-fadeIn">
          {/* Backdrop */}
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            aria-hidden="true"
          />

          {/* Drawer Container */}
          <div
            className="relative w-72 sm:w-80 max-w-[85vw] bg-white h-full shadow-2xl flex flex-col justify-between p-5 overflow-y-auto z-10 border-l-2 border-slate-200"
            role="dialog"
            aria-modal="true"
            aria-label="Side Navigation Menu"
          >
            <div className="space-y-5">
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center space-x-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-sky-500 text-white font-black text-xl flex items-center justify-center shadow-xs">
                    F
                  </div>
                  <div>
                    <span className="font-black text-lg text-slate-800">Fluently</span>
                    <span className="block text-[10px] font-extrabold text-sky-600">নেটিভ ইংরেজি শিক্ষা</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="space-y-1.5">
                {[
                  { id: 'path', label: 'পাঠ (৫০টি মাস্টার মডিউল)', icon: Home, color: 'text-sky-600' },
                  { id: 'srs', label: 'মেমোরি রিভিশন (SRS)', badge: dueSrsCount > 0 ? `${dueSrsCount} টি বাকি` : undefined, icon: Brain, color: 'text-violet-600' },
                  { id: 'speaking', label: 'স্পিকিং ও উচ্চারণ ল্যাব', icon: Mic, color: 'text-emerald-600' },
                  { id: 'dictionary', label: `শব্দকোষ (${ALL_WORDS_DATABASE.length})`, icon: BookOpen, color: 'text-sky-600' },
                  { id: 'sentences', label: `বাক্য সম্ভার (${SENTENCE_BANK.length})`, icon: Sparkles, color: 'text-blue-600' },
                  { id: 'mistakes', label: 'সাধারণ ভুল ও নিয়ম', icon: Award, color: 'text-amber-600' },
                  { id: 'leaderboard', label: 'লিডারবোর্ড ও অর্জন', icon: Trophy, color: 'text-yellow-600' },
                  { id: 'profile', label: 'শিক্ষার্থী প্রোফাইল', icon: User, color: 'text-indigo-600' },
                  { id: 'about', label: 'অ্যাপ পরিচিতি ও ফাউন্ডার', icon: Info, color: 'text-slate-600' },
                ].map(item => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id as any);
                        setIsMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between p-3 rounded-2xl font-black text-sm transition-all cursor-pointer ${
                        isActive
                          ? 'bg-sky-50 border-2 border-sky-400 text-sky-900 shadow-xs'
                          : 'bg-white border-2 border-transparent text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-5 h-5 ${item.color}`} />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 border border-rose-200">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>

              {/* Install / Mobile App Button */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setShowInstallModal(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-600 to-sky-600 text-white font-black text-xs shadow-md border-b-2 border-emerald-700 active:translate-y-0.5 cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 bg-white/20 rounded-xl">
                      <Smartphone className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left">
                      <span className="block leading-tight">অ্যাপ ইনস্টল ও ডেপ্লয়</span>
                      <span className="block text-[10px] text-teal-100 font-bold">Android APK ও লাইভ লিঙ্ক</span>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="pt-4 border-t border-slate-100 space-y-1.5 text-center">
              <p className="text-xs font-black text-slate-700">Fluently v2.5</p>
              <p className="text-[11px] font-bold text-slate-400">বাঙালি জাতির জন্য বিশ্বমানের ইংরেজি শিক্ষা</p>
            </div>
          </div>
        </div>
      )}

      {/* ================= APP INSTALL & DEPLOYMENT MODAL ================= */}
      {showInstallModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border-2 border-slate-200 max-w-lg w-full p-6 space-y-5 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-fadeIn">
            <button
              onClick={() => setShowInstallModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
            >
              <XCircle className="w-6 h-6" />
            </button>

            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-gradient-to-tr from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto text-white shadow-lg shadow-sky-500/20">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-800">
                মোবাইল অ্যাপ ইনস্টল ও ডেপ্লয়মেন্ট
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-500">
                Fluently অ্যাপটি সরাসরি আপনার ফোনে ইনস্টল করুন অথবা APK ফাইল তৈরি করুন
              </p>
            </div>

            {/* Live Hosted Link Card */}
            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  ক্লাউডে লাইভ ডিপ্লয়েড লিঙ্ক:
                </span>
                <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                  সরাসরি অ্যাক্সেসযোগ্য
                </span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={window.location.origin}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-mono text-slate-700 select-all"
                />
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.origin);
                    setCopiedUrl(true);
                    setTimeout(() => setCopiedUrl(false), 2000);
                  }}
                  className="px-3 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-xl text-xs font-black shrink-0 flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  {copiedUrl ? 'কপি হয়েছে!' : 'কপি'}
                </button>
              </div>
            </div>

            {/* Direct Complete ZIP Download for Local VS Code & GitHub */}
            <div className="bg-gradient-to-r from-indigo-50 to-sky-50 border-2 border-indigo-200 rounded-2xl p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-indigo-900 flex items-center gap-1.5">
                  <Download className="w-4 h-4 text-indigo-600" />
                  সম্পূর্ণ সোর্স কোড জিপ (ZIP)
                </span>
                <span className="text-[10px] font-black bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">
                  VS Code & GitHub রেডি
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium">
                কম্পিউটারে <code className="bg-white px-1.5 py-0.5 rounded text-[11px] font-mono text-rose-600">src/data/</code> ফোল্ডারে এই ২টি ফাইল প্রয়োজন (৩,২০৫টি শব্দ ও ১,০৬০টি বাক্য):
              </p>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="/wordsData.ts"
                  download="wordsData.ts"
                  className="py-2 px-3 bg-white hover:bg-slate-50 text-indigo-700 font-bold text-[11px] rounded-lg border border-indigo-200 shadow-sm flex items-center justify-center gap-1.5 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  wordsData.ts
                </a>
                <a
                  href="/sentencesData.ts"
                  download="sentencesData.ts"
                  className="py-2 px-3 bg-white hover:bg-slate-50 text-indigo-700 font-bold text-[11px] rounded-lg border border-indigo-200 shadow-sm flex items-center justify-center gap-1.5 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  sentencesData.ts
                </a>
              </div>
              <a
                href="/fluently-complete.zip"
                download="fluently-complete.zip"
                className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs rounded-xl shadow-md border-b-2 border-indigo-800 flex items-center justify-center gap-2 cursor-pointer transition-all active:translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                📥 সম্পূর্ণ প্রজেক্টের ZIP ডাউনলোড করুন (fluently-complete.zip)
              </a>
            </div>

            {/* Native 1-Click Install Button if supported */}
            {installPrompt && (
              <button
                onClick={async () => {
                  try {
                    await installPrompt.prompt();
                    const choice = await installPrompt.userChoice;
                    if (choice.outcome === 'accepted') {
                      setInstallPrompt(null);
                      setShowInstallModal(false);
                    }
                  } catch {}
                }}
                className="w-full py-3.5 px-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-sm rounded-2xl shadow-lg shadow-emerald-500/20 border-b-4 border-emerald-700 flex items-center justify-center gap-2 cursor-pointer transition-all active:translate-y-1 active:border-b-0"
              >
                <Download className="w-5 h-5" />
                📲 এক ক্লিকে ফোনে ইনস্টল করুন (Install Now)
              </button>
            )}

            {/* Methods Accordion / Cards */}
            <div className="space-y-3 pt-1">
              {/* Option 1: Android PWA */}
              <div className="border-2 border-slate-200 rounded-2xl p-4 bg-white space-y-2">
                <h4 className="font-black text-sm text-slate-800 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-black">1</span>
                  অ্যান্ড্রয়েড ফোনে অ্যাপ হিসেবে ব্যবহার (PWA)
                </h4>
                <ol className="text-xs text-slate-600 space-y-1.5 list-decimal list-inside font-medium pl-1">
                  <li>আপনার ফোনের <strong>Google Chrome</strong> ব্রাউজারে লাইভ লিঙ্কটি খুলুন।</li>
                  <li>উপরে ডানদিকের <strong>তিনটি ডট মেনু (⋮)</strong> চাপুন।</li>
                  <li><strong>"Install app"</strong> বা <strong>"Add to Home screen"</strong> চাপুন।</li>
                  <li>ফোনের অ্যাপ ড্রয়ার ও হোমস্ক্রিনে Fluently অ্যাপ হিসেবে যুক্ত হয়ে যাবে!</li>
                </ol>
              </div>

              {/* Option 2: iPhone iOS */}
              <div className="border-2 border-slate-200 rounded-2xl p-4 bg-white space-y-2">
                <h4 className="font-black text-sm text-slate-800 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-black">2</span>
                  আইফোন ও আইপ্যাডে অ্যাপ হিসেবে ব্যবহার (iOS)
                </h4>
                <ol className="text-xs text-slate-600 space-y-1.5 list-decimal list-inside font-medium pl-1">
                  <li>আইফোনের <strong>Safari</strong> ব্রাউজারে লিঙ্কটি খুলুন।</li>
                  <li>নিচে মাঝখানের <strong>Share আইকন (⎋)</strong> চাপুন।</li>
                  <li>নিচে স্ক্রল করে <strong>"Add to Home Screen"</strong> অপশনে চাপুন।</li>
                  <li>উপরের ডানদিকে <strong>"Add"</strong> চাপলে হোমস্ক্রিনে অ্যাপ আইকন চলে আসবে।</li>
                </ol>
              </div>

              {/* Option 3: APK & Google Play Store */}
              <div className="border-2 border-slate-200 rounded-2xl p-4 bg-white space-y-2">
                <h4 className="font-black text-sm text-slate-800 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black">3</span>
                  গুগল প্লে স্টোর ও APK ফাইল ডাউনলোড (PWABuilder)
                </h4>
                <p className="text-xs text-slate-600 font-medium">
                  আপনি কোনো কোডিং ছাড়াই সরাসরি Android APK এবং Google Play Store-এর জন্য AAB বানাতে পারবেন:
                </p>
                <ol className="text-xs text-slate-600 space-y-1.5 list-decimal list-inside font-medium pl-1">
                  <li>কম্পিউটার বা ফোনে <a href="https://www.pwabuilder.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline font-bold">PWABuilder.com</a> সাইটে যান।</li>
                  <li>উপরের বক্সে আপনার অ্যাপের লাইভ লিংক পেস্ট করে <strong>"Start"</strong> চাপুন।</li>
                  <li><strong>"Package for Stores"</strong> বাটনে ক্লিক করে <strong>"Android"</strong> সিলেক্ট করুন।</li>
                  <li>এটি সম্পূর্ণ সাইন করা <strong>.APK</strong> ও <strong>.AAB</strong> ফাইল ডাউনলোড করে দিবে যা প্লে স্টোরে আপলোড করতে পারবেন!</li>
                </ol>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setShowInstallModal(false)}
                className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs rounded-xl cursor-pointer"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Streak Rewards Modal */}
      {showStreakModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border-2 border-slate-200 max-w-md w-full p-6 space-y-5 shadow-2xl relative animate-fadeIn">
            <button
              onClick={() => setShowStreakModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
            >
              <XCircle className="w-6 h-6" />
            </button>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto text-3xl text-amber-600 border-2 border-amber-300">
                🔥
              </div>
              <h3 className="text-2xl font-black text-slate-800">স্ট্রিক রিওয়ার্ডস (Streak Rewards)</h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-500">
                প্রতিদিন অন্তত একটি লেসন শেষ করে স্ট্রিক বজায় রাখুন।
              </p>
            </div>

            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-black text-amber-800 uppercase tracking-wider">বর্তমান স্ট্রিক</p>
                <p className="text-2xl font-black text-amber-600">{currentStreak} দিন</p>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1 text-xs font-black px-2.5 py-1 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-300">
                  <Shield className="w-3.5 h-3.5" /> ফ্রিজ: {userStats.streakFreezes}
                </span>
                <p className="text-[10px] font-bold text-slate-500 mt-1">একদিন মিস হলেও স্ট্রিক কাটবে না</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">মাইলস্টোন বোনাস</h4>
              {STREAK_MILESTONES.map(m => {
                const isClaimed = userStats.claimedStreakMilestones.includes(m.days);
                const canClaim = currentStreak >= m.days && !isClaimed;
                return (
                  <div
                    key={m.days}
                    className={`flex items-center justify-between p-3 rounded-2xl border-2 transition-all ${
                      isClaimed
                        ? 'bg-slate-50 border-slate-200 opacity-70'
                        : canClaim
                        ? 'bg-amber-50 border-amber-400 shadow-sm'
                        : 'bg-white border-slate-200'
                    }`}
                  >
                    <div>
                      <p className="font-extrabold text-sm text-slate-800">{m.badge} {m.title}</p>
                      <p className="text-xs font-semibold text-slate-500">
                        +{m.xp} XP • +{m.gems} 💎 • {m.rewardName}
                      </p>
                    </div>
                    {isClaimed ? (
                      <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-xl border border-emerald-200 flex items-center gap-1">
                        <Check className="w-3 h-3 stroke-[3]" /> অর্জিত
                      </span>
                    ) : canClaim ? (
                      <button
                        onClick={() => handleClaimStreakMilestone(m)}
                        className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white font-black text-xs rounded-xl shadow-sm border-b-2 border-amber-700 cursor-pointer"
                      >
                        দাবি করুন
                      </button>
                    ) : (
                      <span className="text-xs font-bold text-slate-400">
                        বাকি {m.days - currentStreak} দিন
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="font-black text-xs text-slate-800">স্ট্রিক প্রটেকশন কিনুন (Streak Freeze)</p>
                <p className="text-[11px] font-bold text-slate-400">২০টি জেমস দিয়ে সুরক্ষিত করুন</p>
              </div>
              <button
                onClick={handleBuyStreakFreeze}
                disabled={userStats.gems < 20}
                className="px-3.5 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-black text-xs rounded-xl border-b-2 border-cyan-700 disabled:opacity-50 flex items-center gap-1 cursor-pointer"
              >
                ২০ 💎 কিনুন
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MAIN CONTENT AREA ================= */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-6">
        {/* ---------------- TAB 1: FLUENTLY MASTER CURRICULUM PATH ---------------- */}
        {activeTab === 'path' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between">
              <div className="space-y-3 z-10 max-w-xl text-center sm:text-left">
                <span className="bg-white/20 backdrop-blur-md text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider text-sky-100">
                  ৫০টি মাস্টার মডিউল • C1 লেভেল ফ্লুয়েন্সি
                </span>
                <h1 className="text-2xl sm:text-4xl font-black leading-tight">
                  শুরু থেকে নেটিভদের মতো সাবলীল ইংরেজি শিখুন
                </h1>
                <p className="text-sky-100 text-xs sm:text-sm font-medium">
                  সিইএফআর স্ট্যান্ডার্ড (A1 থেকে C1) কারিকুলাম, স্পেসড রিপিটিশন মেমোরি এবং ভয়েস স্পিকিং ল্যাব।
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-1 justify-center sm:justify-start">
                  <button
                    onClick={() => setActiveTab('srs')}
                    className="px-3.5 py-2 rounded-xl bg-violet-500 hover:bg-violet-600 text-white font-black text-xs shadow-md border-b-2 border-violet-700 flex items-center gap-1.5 cursor-pointer"
                  >
                    <Brain className="w-3.5 h-3.5" /> মেমোরি রিভিশন ({dueSrsCount} টি বাকি)
                  </button>
                  <button
                    onClick={() => setActiveTab('speaking')}
                    className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs shadow-md border-b-2 border-emerald-700 flex items-center gap-1.5 cursor-pointer"
                  >
                    <Mic className="w-3.5 h-3.5" /> ভয়েস ল্যাব
                  </button>
                  <button
                    onClick={() => setShowQuestsModal(true)}
                    className="px-3.5 py-2 rounded-xl bg-white text-sky-700 font-extrabold text-xs shadow-md border-b-2 border-sky-200 flex items-center gap-1 hover:bg-sky-50 transition-all cursor-pointer"
                  >
                    <Target className="w-3.5 h-3.5" /> দৈনিক টাস্ক
                  </button>
                </div>
              </div>

              <div className="mt-6 sm:mt-0 z-10 flex flex-col items-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-3xl flex items-center justify-center border-4 border-white/30 backdrop-blur-md text-5xl shadow-2xl mb-2">
                  🏆
                </div>
                <div className="bg-white text-sky-700 font-extrabold text-xs px-3 py-1.5 rounded-full shadow-md">
                  লেভেল {userStats.level} • {levelTitle(userStats.level)}
                </div>
                <div className="w-32 mt-2">
                  <div className="h-2.5 bg-white/25 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-300 rounded-full transition-all duration-700" style={{ width: `${userStats.xp % 100}%` }} />
                  </div>
                  <p className="text-[10px] font-bold text-sky-100 mt-1 text-center">পরবর্তী লেভেল: {100 - (userStats.xp % 100)} XP বাকি</p>
                </div>
              </div>
            </div>

            {/* CEFR Progression Progress Tracker */}
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-5 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-800 flex items-center gap-2">
                    <Compass className="w-5 h-5 text-sky-600" />
                    আন্তর্জাতিক সিইএফআর কোর্স প্রগ্রেস (A1 থেকে C1)
                  </h3>
                  <p className="text-xs font-semibold text-slate-500">
                    প্রতিটি স্টেজ সম্পন্ন করার মাধ্যমে ধীরে ধীরে ইংরেজি আপনার দ্বিতীয় মাতৃভাষা হয়ে উঠবে।
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-extrabold text-slate-600">
                  <span className="bg-sky-50 text-sky-700 px-3 py-1 rounded-xl border border-sky-200">
                    শব্দ: {userStats.savedWords.length} / {ALL_WORDS_DATABASE.length}
                  </span>
                  <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-xl border border-emerald-200">
                    বাক্য: {userStats.savedSentences.length} / {SENTENCE_BANK.length}
                  </span>
                </div>
              </div>

              {/* Progress bars for A1, A2, B1, B2, C1 */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-1">
                {stageProgress.map(st => (
                  <div key={st.id} className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-base">{st.icon}</span>
                      <span className="text-[11px] font-black" style={{ color: st.color }}>{st.pct}%</span>
                    </div>
                    <div>
                      <p className="font-extrabold text-xs text-slate-800 truncate">{st.tag}</p>
                      <p className="text-[10px] font-bold text-slate-400">{st.completed}/{st.total} শেষ</p>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${st.pct}%`, backgroundColor: st.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Goal & Quests Card */}
            {(() => {
              const pct = Math.min(100, Math.round((todayXp / DAILY_GOAL) * 100));
              const done = todayXp >= DAILY_GOAL;
              const R = 34, C = 2 * Math.PI * R;
              return (
                <div className={`rounded-3xl p-5 border-2 shadow-xs flex flex-col sm:flex-row items-center gap-5 ${done ? 'bg-sky-50 border-sky-300' : 'bg-white border-slate-200'}`}>
                  <div className="relative w-20 h-20 shrink-0">
                    <svg viewBox="0 0 80 80" className="w-20 h-20 -rotate-90">
                      <circle cx="40" cy="40" r={R} fill="none" stroke="#e2e8f0" strokeWidth="9" />
                      <circle cx="40" cy="40" r={R} fill="none" stroke={done ? '#0ea5e9' : '#f59e0b'} strokeWidth="9" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C * (1 - pct / 100)} style={{ transition: 'stroke-dashoffset .8s ease' }} />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center font-black text-slate-700 text-sm">
                      {done ? 'পূর্ণ' : `${pct}%`}
                    </div>
                  </div>
                  <div className="flex-1 space-y-1 text-center sm:text-left">
                    <h3 className="font-black text-slate-800">
                      {done ? 'আজকের লক্ষ্য সম্পন্ন হয়েছে!' : 'আজকের টার্গেট (Daily Goal)'}
                    </h3>
                    <p className="text-sm font-bold text-slate-500">
                      {todayXp} / {DAILY_GOAL} XP {done ? 'অর্জিত!' : `(আর মাত্র ${DAILY_GOAL - todayXp} XP প্রয়োজন)`}
                    </p>
                    <p className="text-xs font-bold text-amber-600">
                      {currentStreak > 0 ? `ধারাবাহিক স্ট্রিক: ${currentStreak} দিন ${done ? 'সুরক্ষিত!' : 'ধরে রাখতে লেসন শেষ করুন!'}` : 'আজ থেকেই আপনার দৈনিক স্ট্রিক শুরু করুন!'}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowQuestsModal(true)}
                    className="shrink-0 px-4 py-2.5 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-black text-xs border-b-4 border-sky-700 active:border-b-0 active:translate-y-1 transition-all cursor-pointer"
                  >
                    দৈনিক টাস্ক দেখুন
                  </button>
                </div>
              );
            })()}

            {/* Daily Quests Modal */}
            {showQuestsModal && (
              <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl border-2 border-slate-200 max-w-md w-full p-6 space-y-5 shadow-2xl relative animate-fadeIn">
                  <button
                    onClick={() => setShowQuestsModal(false)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                  >
                    <XCircle className="w-6 h-6" />
                  </button>
                  <div className="text-center space-y-1">
                    <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto text-3xl">🎯</div>
                    <h3 className="text-xl font-black text-slate-800">দৈনিক কোয়েস্ট (Daily Quests)</h3>
                    <p className="text-xs text-slate-500 font-semibold">টাস্ক শেষ করে বাড়িয়ে নিন XP ও মূল্যবান রত্ন (Gems)!</p>
                  </div>
                  <div className="space-y-3">
                    {DAILY_QUESTS.map(q => {
                      const today = dayKey();
                      const isClaimed = userStats.claimedQuests[q.id] === today;
                      let progress = 0;
                      if (q.type === 'lessons') progress = todayLessons;
                      else if (q.type === 'words') progress = userStats.savedWords.length;
                      else if (q.type === 'streak') progress = currentStreak > 0 ? 1 : 0;
                      else if (q.type === 'score') progress = Object.values(hist).some(h => h.lastDate === today && h.last >= 80) ? 1 : 0;

                      const canClaim = progress >= q.target && !isClaimed;
                      return (
                        <div key={q.id} className="p-3.5 rounded-2xl border-2 border-slate-200 flex items-center justify-between gap-3">
                          <div className="space-y-1">
                            <p className="font-extrabold text-sm text-slate-800 flex items-center gap-1.5">
                              <span>{q.icon}</span> {q.title}
                            </p>
                            <p className="text-xs font-bold text-slate-400">
                              অগ্রগতি: {Math.min(progress, q.target)}/{q.target} • পুরস্কার: +{q.xp} XP ও +{q.gems} 💎
                            </p>
                          </div>
                          <div>
                            {isClaimed ? (
                              <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                                সংগৃহীত
                              </span>
                            ) : canClaim ? (
                              <button
                                onClick={() => handleClaimQuest(q)}
                                className="px-3.5 py-1.5 bg-sky-500 hover:bg-sky-600 text-white font-black text-xs rounded-xl shadow-xs border-b-2 border-sky-700 cursor-pointer"
                              >
                                দাবি করুন
                              </button>
                            ) : (
                              <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-xl">
                                বাকি আছে
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Path Modules List */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h2 className="text-xl sm:text-2xl font-black text-slate-800 flex items-center gap-2">
                  <Compass className="w-6 h-6 text-sky-600" />
                  ফ্লুয়েন্টলি মাস্টার কারিকুলাম পাথ (৫০টি মূল মডিউল)
                </h2>
                <span className="text-xs font-bold text-slate-400">
                  {userStats.completedLessons.length} / {ALL_CURRICULUM_PATH.reduce((n, m) => n + m.lessons.length, 0)} সম্পন্ন
                </span>
              </div>

              {/* Weak Modules Review Alert */}
              {weakModules.length > 0 && (
                <div className="bg-rose-50 border-2 border-rose-200 rounded-3xl p-5 space-y-3">
                  <h3 className="font-black text-rose-700 flex items-center gap-2">⚠️ দুর্বল টপিকসমূহ (Needs Practice)</h3>
                  {weakModules.map(m => {
                    const st = hist[m.id];
                    const ago = daysAgo(st.lastDate);
                    return (
                      <div key={m.id} className="flex items-center justify-between gap-3 bg-white rounded-2xl border border-rose-200 p-3">
                        <div>
                          <p className="font-extrabold text-sm text-slate-800">{m.icon} {m.title}</p>
                          <p className="text-xs font-semibold text-rose-600">
                            {st.last < 70 ? `সর্বশেষ স্কোর: ${st.last}% (পুনরাবৃত্তি প্রয়োজন)` : `সর্বশেষ: ${st.last}%`} • {agoText(ago)}
                          </p>
                        </div>
                        <button
                          onClick={() => startModule(m)}
                          className="px-3 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-black text-xs whitespace-nowrap cursor-pointer"
                        >
                          অনুশীলন করুন
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Progression Stage Tabs */}
              <div className="flex flex-wrap gap-2">
                {[
                  ['all', 'সব মূল মডিউল (৫০টি)'],
                  ['A1', 'লেভেল A1 প্রারম্ভিক'],
                  ['A2', 'লেভেল A2 মৌলিক'],
                  ['B1', 'লেভেল B1 মধ্যম'],
                  ['B2', 'লেভেল B2 উচ্চ-মধ্যম'],
                  ['C1', 'লেভেল C1 নেটিভ ফ্লুয়েন্সি'],
                  ['word', `শব্দকোষ মডিউল (${ALL_WORDS_DATABASE.length})`],
                  ['sent', `বাক্য মডিউল (${SENTENCE_BANK.length})`]
                ].map(([k, label]) => (
                  <button
                    key={k}
                    onClick={() => setSelectedStage(k)}
                    className={`px-3.5 py-2 rounded-2xl border-2 font-black text-xs sm:text-sm transition-all cursor-pointer ${
                      selectedStage === k
                        ? 'bg-sky-500 border-sky-700 text-white'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-sky-400'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Path Units & Wavy Circular Nodes */}
              <div className="space-y-10">
                {displayedModules.map((module, mi) => {
                  const pal = UNIT_COLORS[mi % UNIT_COLORS.length];
                  const doneN = module.lessons.filter(l => userStats.completedLessons.includes(l.id)).length;
                  const nextIdx = module.lessons.findIndex(l => !userStats.completedLessons.includes(l.id));

                  return (
                    <section key={module.id} className="space-y-5">
                      <div
                        className="rounded-2xl p-4 flex items-center justify-between gap-3 text-white"
                        style={{ background: pal[0], borderBottom: `5px solid ${pal[1]}` }}
                      >
                        <div>
                          <p className="text-xs font-extrabold opacity-90">
                            {module.stageName || (module.kind === 'core' ? `মডিউল ${module.kindNo}` : module.kind === 'word' ? 'শব্দকোষ মডিউল' : 'বাক্য মডিউল')} • {doneN}/{module.lessons.length} সম্পন্ন
                          </p>
                          <h3 className="text-lg font-black leading-tight">{module.icon} {module.title}</h3>
                          <p className="text-sm font-semibold opacity-90">{module.desc}</p>
                        </div>
                        {module.kind === 'core' && (
                          <button
                            onClick={() => startModule(module)}
                            className="shrink-0 px-3 py-2 rounded-xl bg-white font-black text-xs cursor-pointer shadow-xs"
                            style={{ color: pal[1], borderBottom: '4px solid #E5E5E5' }}
                          >
                            সব এক সাথে
                          </button>
                        )}
                      </div>

                      {/* Wavy Interactive Nodes */}
                      <div className="flex flex-col items-center gap-6 py-2">
                        {module.lessons.map((lesson, li) => {
                          const lh = hist[lesson.id];
                          const isDone = userStats.completedLessons.includes(lesson.id);
                          const isNext = li === nextIdx;
                          const off = Math.round(Math.sin(li * 0.9) * 48);

                          return (
                            <div key={lesson.id} className="relative flex flex-col items-center" style={{ transform: `translateX(${off}px)` }}>
                              {isNext && (
                                <div
                                  className="absolute -top-10 px-3 py-1.5 rounded-xl bg-white border-2 border-slate-200 font-black text-sm whitespace-nowrap animate-bounce shadow-md"
                                  style={{ color: pal[1] }}
                                >
                                  শুরু করুন!
                                </div>
                              )}
                              <button
                                onClick={() => startLesson(lesson)}
                                title={lesson.title}
                                aria-label={lesson.title}
                                className="duo-node w-[72px] h-[72px] rounded-full flex items-center justify-center text-white cursor-pointer"
                                style={{
                                  background: isDone ? '#FFC800' : pal[0],
                                  boxShadow: `0 6px 0 ${isDone ? '#E5A800' : pal[1]}`
                                }}
                              >
                                {isDone ? (
                                  <Check className="w-8 h-8 stroke-[4]" />
                                ) : lesson.isExam ? (
                                  <Trophy className="w-8 h-8 fill-current" />
                                ) : (
                                  <Play className="w-7 h-7 fill-current ml-1" />
                                )}
                              </button>
                              <p className="text-center text-xs font-extrabold text-slate-600 mt-3 max-w-[130px] leading-tight">
                                {lesson.title}
                              </p>
                              {lh && (
                                <span className="text-[11px] font-bold text-amber-600">
                                  {lh.last}% • +{lesson.xp} XP
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ---------------- TAB 2: SPACED REPETITION (SRS) REVIEW DECK ---------------- */}
        {activeTab === 'srs' && (
          <SrsReviewDeck
            cards={srsCards}
            onUpdateCards={setSrsCards}
            onReward={(xp, gems) => {
              setUserStats(prev => ({
                ...prev,
                xp: prev.xp + xp,
                gems: prev.gems + gems,
                level: Math.floor((prev.xp + xp) / 100) + 1
              }));
            }}
            onSpeak={speakText}
            isSlowAudio={isSlowAudio}
            onOpenWords={() => setActiveTab('dictionary')}
          />
        )}

        {/* ---------------- TAB 3: VOICE SPEAKING LAB ---------------- */}
        {activeTab === 'speaking' && (
          <VoiceSpeakingLab
            onReward={(xp, gems) => {
              setUserStats(prev => ({
                ...prev,
                xp: prev.xp + xp,
                gems: prev.gems + gems,
                level: Math.floor((prev.xp + xp) / 100) + 1
              }));
            }}
            onSpeak={speakText}
            isSlowAudio={isSlowAudio}
            onPlaySound={playSound}
          />
        )}

        {/* ---------------- TAB 4: BENGALI COMMON MISTAKES & NATIVE SECRETS ---------------- */}
        {activeTab === 'mistakes' && (
          <BengaliMistakesGuide
            onSpeak={speakText}
            isSlowAudio={isSlowAudio}
          />
        )}

        {/* ---------------- TAB 5: 3,200+ WORD BANK ---------------- */}
        {activeTab === 'dictionary' && (
          <div className="space-y-6 animate-fadeIn pb-8">
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-sky-600" />
                    {ALL_WORDS_DATABASE.length} শব্দকোষ (Oxford & CEFR Vocab Bank)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    সঠিক অর্থ, পার্টস অব স্পিচ, বাংলা উচ্চারণ ও স্পেসড রিপিটিশন মেমোরি সংযোজন।
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-2xl font-bold text-xs text-sky-700">
                    বুকমার্ক: {userStats.savedWords.length} টি
                  </div>
                  <button
                    onClick={() => setActiveTab('srs')}
                    className="px-3.5 py-1.5 bg-violet-50 hover:bg-violet-100 border border-violet-200 text-violet-700 font-extrabold text-xs rounded-2xl flex items-center gap-1 cursor-pointer"
                  >
                    <Brain className="w-3.5 h-3.5" /> মেমোরি ডেক ({srsCards.length})
                  </button>
                </div>
              </div>

              {/* Search input & filters */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <div className="relative flex-1">
                  <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="ইংরেজি শব্দ বা বাংলা অর্থ খুঁজুন..."
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value); setWordPage(1); }}
                    className="w-full pl-11 pr-4 py-3 rounded-2xl border-2 border-slate-200 focus:border-sky-500 focus:outline-none font-bold text-sm bg-slate-50"
                  />
                </div>
                <select
                  value={selectedLevel}
                  onChange={(e) => { setSelectedLevel(e.target.value); setWordPage(1); }}
                  className="px-4 py-3 rounded-2xl border-2 border-slate-200 bg-slate-50 font-bold text-sm focus:outline-none focus:border-sky-500 cursor-pointer"
                >
                  <option value="All">সকল লেভেল (CEFR)</option>
                  <option value="A1">A1 প্রারম্ভিক</option>
                  <option value="A2">A2 প্রাথমিক</option>
                  <option value="B1">B1 মধ্যম</option>
                  <option value="B2">B2 উচ্চ-মধ্যম</option>
                  <option value="C1">C1 অগ্রগামী</option>
                </select>
                <select
                  value={selectedCategory}
                  onChange={(e) => { setSelectedCategory(e.target.value); setWordPage(1); }}
                  className="px-4 py-3 rounded-2xl border-2 border-slate-200 bg-slate-50 font-bold text-sm focus:outline-none focus:border-sky-500 cursor-pointer"
                >
                  <option value="All">সকল ক্যাটাগরি ({ALL_CATEGORIES.length})</option>
                  {ALL_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between px-1 text-xs font-extrabold text-slate-500">
              <span>পৃষ্ঠা {curWordPage} / {totalWordPages}</span>
              <span>দেখাচ্ছে {filteredWords.length ? (curWordPage - 1) * PAGE_SIZE + 1 : 0}-{Math.min(curWordPage * PAGE_SIZE, filteredWords.length)} / মোট {filteredWords.length} টি</span>
            </div>

            {/* Word Grid Display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {pagedWords.map((item) => {
                const isSaved = userStats.savedWords.some(w => w.id === item.id);
                const isInSrs = srsCards.some(c => c.id === `word_${item.id}`);

                return (
                  <div key={item.id} className="bg-white rounded-2xl border-2 border-slate-200 p-4 shadow-xs hover:border-sky-400 transition-all space-y-2 relative group">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[10px] font-extrabold text-sky-600 bg-sky-50 border border-sky-200 rounded-full px-2 py-0.5">#{item.id}</span>
                          <span className="text-[10px] font-extrabold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-full px-2 py-0.5">{item.level}</span>
                          <span className="text-[10px] font-extrabold text-slate-500 bg-slate-100 rounded-full px-2 py-0.5">{item.category}</span>
                        </div>
                        <h4 className="font-black text-lg text-slate-800 mt-1">{item.word}</h4>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.pos}</span>
                      </div>

                      <div className="flex items-center space-x-1">
                        <button
                          onClick={() => speakText(item.word, isSlowAudio)}
                          className="p-2 bg-sky-50 text-sky-600 rounded-xl hover:bg-sky-100 transition-colors cursor-pointer"
                          title="উচ্চারণ শুনুন"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => toggleSaveWord(item)}
                          className={`p-2 rounded-xl transition-colors cursor-pointer ${
                            isSaved ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-400 hover:text-slate-600'
                          }`}
                          title="বুকমার্ক করুন"
                        >
                          <Bookmark className="w-4 h-4 fill-current" />
                        </button>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-2 flex items-center justify-between text-xs sm:text-sm">
                      <span className="font-extrabold text-sky-700">{item.bn}</span>
                      {item.phonetic && <span className="text-slate-400 font-semibold italic">[{item.phonetic}]</span>}
                    </div>

                    {/* Quick Add to Spaced Repetition Button */}
                    <div className="pt-1">
                      <button
                        onClick={() => handleAddToSrs({
                          id: item.id,
                          type: 'word',
                          english: item.word,
                          bengali: item.bn,
                          phonetic: item.phonetic,
                          category: item.category,
                          level: item.level
                        })}
                        className={`w-full py-1.5 px-2.5 rounded-xl text-[11px] font-extrabold flex items-center justify-center gap-1 transition-all cursor-pointer ${
                          isInSrs
                            ? 'bg-violet-50 text-violet-700 border border-violet-200'
                            : 'bg-slate-50 hover:bg-violet-50 text-slate-600 hover:text-violet-700 border border-slate-200'
                        }`}
                      >
                        <Brain className="w-3.5 h-3.5 text-violet-600" />
                        {isInSrs ? 'মেমোরি ডেক-এ আছে' : '+ মেমোরি ডেক-এ যুক্ত করুন'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <Pager page={curWordPage} total={totalWordPages} onChange={goWordPage} />
            {filteredWords.length === 0 && (
              <div className="bg-white rounded-3xl p-8 text-center border-2 border-slate-200 space-y-2">
                <HelpCircle className="w-10 h-10 text-slate-300 mx-auto" />
                <p className="font-bold text-slate-600">কোনো শব্দ পাওয়া যায়নি!</p>
              </div>
            )}
          </div>
        )}

        {/* ---------------- TAB 6: 1,060+ SENTENCE BANK ---------------- */}
        {activeTab === 'sentences' && (
          <div className="space-y-6 animate-fadeIn pb-8">
            {/* Sentence of the day */}
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl p-5 text-white shadow-lg flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-sky-100">আজকের বিশেষ বাক্য • Sentence of the Day</span>
                <p className="text-xl font-black mt-1">{sentenceOfTheDay.en}</p>
                <p className="text-sm font-bold text-sky-100">{sentenceOfTheDay.bn}</p>
              </div>
              <button
                onClick={() => speakText(sentenceOfTheDay.en, isSlowAudio)}
                className="p-3 bg-white/20 hover:bg-white/30 rounded-2xl cursor-pointer"
                title="শুনুন"
              >
                <Volume2 className="w-6 h-6" />
              </button>
            </div>

            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-sky-600" />
                    দৈনন্দিন বাস্তব বাক্য সম্ভার ({SENTENCE_BANK.length} টি বাক্য)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    অফিস, বিমানবন্দর, হোটেল, ডাক্তার, কেনাকাটা ও বাস্তব জীবনের কথপোকথন।
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => { setOnlySaved(v => !v); setSentPage(1); }}
                    className={`px-4 py-2 rounded-2xl font-bold text-xs border-2 flex items-center gap-1.5 cursor-pointer ${
                      onlySaved ? 'bg-amber-100 border-amber-400 text-amber-700' : 'bg-slate-50 border-slate-200 text-slate-600'
                    }`}
                  >
                    <Bookmark className="w-4 h-4 fill-current" /> বুকমার্ক ({(userStats.savedSentences || []).length})
                  </button>
                  <button
                    onClick={() => setShowBn(v => !v)}
                    className={`px-4 py-2 rounded-2xl font-bold text-xs border-2 cursor-pointer ${
                      showBn ? 'bg-sky-50 border-sky-300 text-sky-700' : 'bg-amber-50 border-amber-300 text-amber-700'
                    }`}
                  >
                    {showBn ? 'অর্থ লুকান' : 'অর্থ দেখুন'}
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  value={sentSearch}
                  onChange={(e) => { setSentSearch(e.target.value); setSentPage(1); }}
                  placeholder="ইংরেজি বাক্য বা বাংলা অর্থ খুঁজুন..."
                  className="flex-1 px-4 py-3 rounded-2xl border-2 border-slate-200 focus:border-sky-500 focus:outline-none font-bold text-sm bg-slate-50"
                />

                <select
                  value={sentLevel}
                  onChange={(e) => { setSentLevel(e.target.value); setSentPage(1); }}
                  className="px-4 py-3 rounded-2xl border-2 border-slate-200 bg-slate-50 font-bold text-sm focus:outline-none focus:border-sky-500 cursor-pointer"
                >
                  <option value="All">সকল লেভেল (CEFR)</option>
                  <option value="A1">A1 প্রারম্ভিক</option>
                  <option value="A2">A2 প্রাথমিক</option>
                  <option value="B1">B1 মধ্যম</option>
                  <option value="B2">B2 উচ্চ-মধ্যম</option>
                  <option value="C1">C1 অগ্রগামী</option>
                </select>

                <select
                  value={sentCat}
                  onChange={(e) => { setSentCat(e.target.value); setSentPage(1); }}
                  className="px-4 py-3 rounded-2xl border-2 border-slate-200 bg-slate-50 font-bold text-sm focus:outline-none focus:border-sky-500 cursor-pointer"
                >
                  <option value="All">সকল বিষয় ({SENTENCE_CATEGORIES.length})</option>
                  {SENTENCE_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between px-1 text-xs font-extrabold text-slate-500">
              <span>পৃষ্ঠা {curSentPage} / {totalSentPages}</span>
              <span>দেখাচ্ছে {filteredSentences.length ? (curSentPage - 1) * PAGE_SIZE + 1 : 0}-{Math.min(curSentPage * PAGE_SIZE, filteredSentences.length)} / মোট {filteredSentences.length} টি</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pagedSents.map(x => {
                const isInSrs = srsCards.some(c => c.id === `sentence_${x.id}`);
                return (
                  <div key={x.id} className="bg-white rounded-2xl border-2 border-slate-200 p-4 shadow-xs hover:border-sky-400 transition-all flex flex-col justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[10px] font-extrabold text-sky-600 bg-sky-50 border border-sky-200 rounded-full px-2 py-0.5">#{x.id}</span>
                        <span className="text-[10px] font-extrabold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-full px-2 py-0.5">{x.level}</span>
                        <span className="text-[10px] font-extrabold text-slate-500 bg-slate-100 rounded-full px-2 py-0.5">{x.category}</span>
                      </div>
                      <p className="font-black text-slate-800 text-base">{x.en}</p>
                      {showBn && <p className="text-sm font-bold text-sky-700">{x.bn}</p>}
                    </div>

                    <div className="border-t border-slate-100 pt-2 flex items-center justify-between gap-2">
                      <button
                        onClick={() => handleAddToSrs({
                          id: x.id,
                          type: 'sentence',
                          english: x.en,
                          bengali: x.bn,
                          category: x.category,
                          level: x.level
                        })}
                        className={`py-1.5 px-2.5 rounded-xl text-[11px] font-extrabold flex items-center gap-1 transition-all cursor-pointer ${
                          isInSrs
                            ? 'bg-violet-50 text-violet-700 border border-violet-200'
                            : 'bg-slate-50 hover:bg-violet-50 text-slate-600 hover:text-violet-700 border border-slate-200'
                        }`}
                      >
                        <Brain className="w-3.5 h-3.5 text-violet-600" />
                        {isInSrs ? 'ডেক-এ আছে' : '+ মেমোরি ডেক'}
                      </button>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => speakText(x.en, false)}
                          className="p-1.5 bg-sky-50 text-sky-600 rounded-xl hover:bg-sky-100 cursor-pointer"
                          title="স্বাভাবিক উচ্চারণ শুনুন"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => speakText(x.en, true)}
                          className="p-1.5 bg-slate-100 text-slate-500 rounded-xl hover:bg-slate-200 cursor-pointer"
                          title="ধীরে শুনুন (Slow Audio)"
                        >
                          <Turtle className="w-4 h-4 text-emerald-600" />
                        </button>
                        <button
                          onClick={() => toggleSaveSentence(x.id)}
                          className={`p-1.5 rounded-xl cursor-pointer ${
                            (userStats.savedSentences || []).includes(x.id)
                              ? 'bg-amber-100 text-amber-600'
                              : 'bg-slate-100 text-slate-400 hover:text-slate-600'
                          }`}
                          title="বুকমার্ক করুন"
                        >
                          <Bookmark className="w-4 h-4 fill-current" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <Pager page={curSentPage} total={totalSentPages} onChange={goSentPage} />
            {filteredSentences.length === 0 && (
              <p className="text-center font-bold text-slate-500 py-8">কোনো বাক্য পাওয়া যায়নি।</p>
            )}
          </div>
        )}

        {/* ---------------- TAB 7: LEADERBOARD & ACHIEVEMENTS ---------------- */}
        {activeTab === 'leaderboard' && (
          <div className="space-y-6 animate-fadeIn pb-8">
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs space-y-6">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto text-3xl text-yellow-600 shadow-inner border-2 border-yellow-300">
                  🏆
                </div>
                <h2 className="text-2xl font-black text-slate-800">সাপ্তাহিক লিডারবোর্ড (Weekly Leaderboard)</h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">লেসন শেষ করে ও অনুশীলন করে শীর্ষস্থানে পৌঁছান!</p>
              </div>

              <div className="space-y-3">
                {[
                  { rank: 1, name: 'তানভীর আহমেদ', xp: 580, level: 6, avatar: '👨‍💼' },
                  { rank: 2, name: 'আপনি (You)', xp: userStats.xp, level: userStats.level, avatar: '🎓', isUser: true },
                  { rank: 3, name: 'নুসরাত জাহান', xp: 420, level: 5, avatar: '👩‍🏫' },
                  { rank: 4, name: 'রাকিব হাসান', xp: 340, level: 4, avatar: '👨‍🎓' },
                  { rank: 5, name: 'সাদিয়া আক্তার', xp: 220, level: 3, avatar: '👩‍💻' }
                ].sort((a, b) => b.xp - a.xp).map((user, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between p-4 rounded-2xl border-2 font-bold ${
                      user.isUser ? 'bg-sky-50 border-sky-400 text-sky-900 shadow-xs' : 'bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm ${
                        idx === 0 ? 'bg-yellow-400 text-slate-900' : idx === 1 ? 'bg-slate-300 text-slate-800' : 'bg-amber-600 text-white'
                      }`}>
                        #{idx + 1}
                      </span>
                      <span className="text-2xl">{user.avatar}</span>
                      <div>
                        <p className="font-extrabold text-sm sm:text-base">{user.name}</p>
                        <span className="text-xs text-slate-400 font-semibold">লেভেল {user.level} • {levelTitle(user.level)}</span>
                      </div>
                    </div>
                    <span className="font-black text-amber-500 text-sm sm:text-base flex items-center gap-1">
                      <Zap className="w-4 h-4 fill-amber-500" /> {user.xp} XP
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements & Badges Grid */}
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs space-y-4">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2">
                <Award className="w-6 h-6 text-amber-500" />
                অর্জন ও মেডেলসমূহ (Achievements)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {ACHIEVEMENTS.map(ach => {
                  let isUnlocked = false;
                  if (ach.type === 'lessons') isUnlocked = userStats.completedLessons.length >= ach.req;
                  else if (ach.type === 'words') isUnlocked = userStats.savedWords.length >= ach.req;
                  else if (ach.type === 'streak') isUnlocked = currentStreak >= ach.req;
                  else if (ach.type === 'sentences') isUnlocked = userStats.savedSentences.length >= ach.req;
                  else if (ach.type === 'xp') isUnlocked = userStats.xp >= ach.req;
                  else if (ach.type === 'exam') isUnlocked = (userStats.exams || []).some(e => e.pct >= 70);
                  else if (ach.type === 'perfect') isUnlocked = Object.values(hist).some(h => h.best === 100);

                  return (
                    <div
                      key={ach.id}
                      className={`p-4 rounded-2xl border-2 text-center space-y-1 transition-all ${
                        isUnlocked
                          ? 'bg-amber-50/70 border-amber-300 shadow-xs'
                          : 'bg-slate-50 border-slate-200 opacity-50'
                      }`}
                    >
                      <div className="text-3xl mb-1">{ach.icon}</div>
                      <h4 className="font-black text-sm text-slate-800">{ach.title}</h4>
                      <p className="text-[11px] font-bold text-slate-500">{ach.desc}</p>
                      <span className={`inline-block text-[10px] font-black px-2 py-0.5 rounded-full mt-2 ${
                        isUnlocked ? 'bg-amber-200 text-amber-900' : 'bg-slate-200 text-slate-500'
                      }`}>
                        {isUnlocked ? 'আনলকড' : 'লকড'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ---------------- TAB 8: PROFILE ---------------- */}
        {activeTab === 'profile' && (
          <div className="space-y-6 animate-fadeIn pb-8">
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-xs space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-sky-400 to-sky-600 flex items-center justify-center text-4xl text-white shadow-md">
                  👨‍🎓
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-800">শিক্ষার্থী ড্যাশবোর্ড</h2>
                  <p className="text-xs text-slate-400 font-bold">Fluently Learner Profile • লেভেল {userStats.level} ({levelTitle(userStats.level)})</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-3">
                  <p className="text-xl sm:text-2xl font-black text-yellow-600">{userStats.xp}</p>
                  <p className="text-[11px] font-bold text-slate-500">মোট XP</p>
                </div>
                <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-3">
                  <p className="text-xl sm:text-2xl font-black text-cyan-600">{userStats.gems}</p>
                  <p className="text-[11px] font-bold text-slate-500">জেমস 💎</p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3">
                  <p className="text-xl sm:text-2xl font-black text-amber-600">{currentStreak}</p>
                  <p className="text-[11px] font-bold text-slate-500">স্ট্রিক দিন</p>
                </div>
                <div className="bg-violet-50 border border-violet-200 rounded-2xl p-3">
                  <p className="text-xl sm:text-2xl font-black text-violet-600">{srsCards.length}</p>
                  <p className="text-[11px] font-bold text-slate-500">SRS মেমোরি</p>
                </div>
              </div>

              {/* Practice Model Exam */}
              <div className="border-t border-slate-100 pt-6 space-y-3">
                <h3 className="font-black text-base text-slate-800 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-500" />
                  মডেল টেস্ট পরীক্ষা (Full Practice Exam)
                </h3>
                <p className="text-xs text-slate-500 font-semibold">
                  ১০টি র্যান্ডম বাছাইকৃত প্রশ্ন দিয়ে নিজের সার্বিক প্রস্তুতি যাচাই করুন।
                </p>
                <button
                  onClick={startExam}
                  className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-black py-3.5 rounded-2xl border-b-4 border-indigo-700 active:border-b-0 active:translate-y-1 transition-all cursor-pointer"
                >
                  পরীক্ষা শুরু করুন (Take Exam)
                </button>
                {(userStats.exams || []).length > 0 && (
                  <div className="space-y-2 pt-2">
                    {[...userStats.exams].reverse().slice(0, 5).map((e, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-2xl border border-slate-200 text-sm font-bold">
                        <span className="text-slate-600">{e.date} ({agoText(daysAgo(e.date))})</span>
                        <span className={e.pct >= 70 ? 'text-sky-600 font-black' : 'text-rose-600 font-black'}>
                          {e.pct}% • {e.pct >= 70 ? 'উত্তীর্ণ' : 'ফেল'}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 7 Day Study Tracking */}
              <div className="border-t border-slate-100 pt-6 space-y-3">
                <h3 className="font-black text-base text-slate-800">গত ৭ দিনের পড়ার রেকর্ড</h3>
                {Array.from({ length: 7 }, (_, i) => dayKey(new Date(Date.now() - i * 86400000))).map(k => {
                  const d = (userStats.daily || {})[k];
                  return (
                    <div key={k} className={`flex items-center justify-between p-3 rounded-2xl border text-sm font-bold ${d ? 'bg-sky-50 border-sky-200 text-slate-800' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                      <span>{k} {k === dayKey() && '(আজকে)'}</span>
                      <span>{d ? `${d.xp} XP • ${d.lessons} লেসন • ${Math.max(1, Math.round(d.sec / 60))} মিনিট • ${Math.round((d.correct / Math.max(1, d.total)) * 100)}%` : 'পড়া হয়নি'}</span>
                    </div>
                  );
                })}
              </div>

              {/* Preferences Settings */}
              <div className="border-t border-slate-100 pt-6 space-y-4">
                <h3 className="font-black text-base text-slate-800 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-sky-600" /> সেটিংস ও পছন্দসমূহ
                </h3>
                {/* Slow Audio Toggle */}
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="flex items-center space-x-3">
                    <Turtle className="w-6 h-6 text-sky-600" />
                    <div>
                      <p className="font-bold text-sm text-slate-800">ধীর গতির অডিও (Slow Audio Mode)</p>
                      <span className="text-xs text-slate-500">নতুনদের জন্য স্পষ্ট ও ধীরে অডিও বাজবে</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsSlowAudio(!isSlowAudio)}
                    className={`px-4 py-2 rounded-xl font-bold text-xs transition-colors cursor-pointer ${
                      isSlowAudio ? 'bg-sky-500 text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {isSlowAudio ? 'চালু আছে (ON)' : 'বন্ধ আছে (OFF)'}
                  </button>
                </div>

                {/* Font Size Toggle */}
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="flex items-center space-x-3">
                    <Layers className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-bold text-sm text-slate-800">ফন্ট সাইজ (Font Size)</p>
                      <span className="text-xs text-slate-500">লেখার আকার বড় বা স্বাভাবিক রাখুন</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
                    className="px-4 py-2 bg-slate-200 font-bold text-xs text-slate-700 rounded-xl hover:bg-slate-300 cursor-pointer"
                  >
                    {fontSize === 'normal' ? 'স্বাভাবিক (Normal)' : 'বড় (Large)'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ---------------- TAB 9: ABOUT & FOUNDER CONTACT (ONLY 1 PLACE!) ---------------- */}
        {activeTab === 'about' && (
          <div className="space-y-6 animate-fadeIn pb-8">
            <div className="rounded-3xl p-6 sm:p-8 text-white text-center space-y-3" style={{ background: '#1CB0F6', borderBottom: '6px solid #1899D6' }}>
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white text-sky-600 flex items-center justify-center font-black text-4xl shadow-md">F</div>
              <h2 className="text-3xl font-black tracking-tight">Fluently</h2>
              <p className="font-bold text-sky-50 max-w-md mx-auto">বাঙালিদের জন্য তৈরি সর্বাধুনিক ইংরেজি শিক্ষা প্ল্যাটফর্ম</p>
              <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                <div className="bg-white/20 rounded-2xl py-2">
                  <p className="text-xl font-black">{ALL_WORDS_DATABASE.length}</p>
                  <p className="text-[11px] font-bold">শব্দ</p>
                </div>
                <div className="bg-white/20 rounded-2xl py-2">
                  <p className="text-xl font-black">{SENTENCE_BANK.length}</p>
                  <p className="text-[11px] font-bold">বাক্য</p>
                </div>
                <div className="bg-white/20 rounded-2xl py-2">
                  <p className="text-xl font-black">{ALL_CURRICULUM_PATH.reduce((n, m) => n + m.lessons.length, 0)}</p>
                  <p className="text-[11px] font-bold">লেসন</p>
                </div>
              </div>
            </div>

            {/* Founder Card - Exact 1 Place featuring Talha Belal's Phone 01987573397 and Facebook */}
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 space-y-5">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-sky-600">উদ্যোক্তা ও প্রতিষ্ঠাতা</h3>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-sky-500 text-white flex items-center justify-center text-3xl font-black border-b-4 border-sky-700 shrink-0">TB</div>
                <div>
                  <h4 className="text-2xl font-black text-slate-800">তালহা বেলাল (Talha Belal)</h4>
                  <p className="text-sm font-bold text-slate-500">Founder & Visionary, Fluently</p>
                  <p className="text-sm font-extrabold text-emerald-700 mt-1 flex items-center gap-1.5">
                    <Phone className="w-4 h-4" /> মোবাইল নম্বর: {TALHA_BELAL_PHONE}
                  </p>
                </div>
              </div>

              {/* Single Contact Row with Direct Call, WhatsApp, Copy, and Facebook */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* Call Button */}
                <a
                  href={`tel:${TALHA_BELAL_PHONE}`}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-xs border-b-4 border-emerald-800 active:border-b-0 active:translate-y-1 transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4" />
                    <span>কল দিন: {TALHA_BELAL_PHONE}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </a>

                {/* WhatsApp Chat */}
                <a
                  href={`https://wa.me/88${TALHA_BELAL_PHONE}?text=${encodeURIComponent('আসসালামু আলাইকুম তালহা ভাই, Fluently অ্যাপ নিয়ে আপনার সাথে কথা বলতে চাই।')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-sm shadow-xs border-b-4 border-emerald-800 active:border-b-0 active:translate-y-1 transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageCircle className="w-4 h-4" />
                    <span>হোয়াটসঅ্যাপে চ্যাট করুন</span>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-70" />
                </a>

                {/* 1-Click Copy Number */}
                <button
                  onClick={handleCopyPhone}
                  className={`flex items-center justify-between p-3.5 rounded-2xl border-2 font-black text-sm transition-all cursor-pointer ${
                    copiedPhone ? 'bg-emerald-50 border-emerald-400 text-emerald-800' : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-sky-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-600 stroke-[3]" /> : <Copy className="w-4 h-4 text-slate-500" />}
                    <span>{copiedPhone ? 'নম্বর কপি হয়েছে!' : `কপি করুন: ${TALHA_BELAL_PHONE}`}</span>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-lg bg-white border border-slate-200 text-slate-500">
                    {copiedPhone ? 'কপি সম্পন্ন' : 'কপি'}
                  </span>
                </button>

                {/* Facebook Profile Link */}
                <a
                  href={TALHA_BELAL_FB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-black text-sm shadow-xs border-b-4 border-sky-700 active:border-b-0 active:translate-y-1 transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.6c0-.9.3-1.5 1.6-1.5H16.7V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.5V21h3z" />
                    </svg>
                    <span>ফেসবুক প্রোফাইল</span>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-70" />
                </a>
              </div>

              {/* Install and APK info link in About tab */}
              <div className="pt-2 border-t border-slate-100">
                <button
                  onClick={() => setShowInstallModal(true)}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-emerald-500 via-teal-600 to-sky-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-xs sm:text-sm rounded-2xl shadow-md border-b-4 border-emerald-700 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4" />
                    <span>📲 ফোনে অ্যাপ ইনস্টল ও APK তৈরির গাইড দেখুন</span>
                  </div>
                  <Download className="w-4 h-4 opacity-80" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 space-y-3">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2"><Target className="w-6 h-6 text-sky-600" /> কেন Fluently সেরা?</h3>
              <p className="text-sm sm:text-base font-semibold text-slate-600 leading-relaxed">
                ঐতিহ্যগত ব্যাকরণের নিরস মুখস্থ পদ্ধতির বদলে Fluently স্পেসড রিপিটিশন মেমোরি অ্যালগরিদম এবং ভয়েস স্পিকিং ল্যাব ব্যবহারের মাধ্যমে প্রতিটি শব্দ ও বাক্যকে আপনার স্থায়ী স্মৃতিতে গেঁথে দেয়।
              </p>
              <p className="text-sm sm:text-base font-semibold text-slate-600 leading-relaxed">
                তালহা বেলালের প্রত্যক্ষ তত্ত্বাবধানে Fluently গড়ে উঠেছে যেন একজন শিক্ষার্থী ঘরে বসেই কোনো কোচিং ছাড়াই আন্তর্জাতিক মানে সাবলীল ইংরেজি বলতে ও লিখতে পারে।
              </p>
            </div>

            <p className="text-center text-xs font-bold text-slate-400 pb-2">© {new Date().getFullYear()} Fluently • Founded by Talha Belal</p>
          </div>
        )}

        {/* ---------------- TAB 10: ACTIVE LESSON SCREEN ---------------- */}
        {activeTab === 'lesson' && activeLesson && (
          <div className="max-w-2xl mx-auto space-y-6 animate-fadeIn pb-8">
            {/* Top Progress Bar & Exit */}
            {!showSummary && (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setActiveTab('path')}
                  className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 cursor-pointer"
                  aria-label="Exit Lesson"
                >
                  <XCircle className="w-8 h-8" />
                </button>
                <div className="flex-1 bg-slate-200 rounded-full h-4 overflow-hidden border border-slate-300">
                  <div
                    className="bg-sky-500 h-full rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${((questionIdx) / activeLesson.questions.length) * 100}%` }}
                  />
                </div>
                {combo >= 2 && (
                  <div key={combo} className="fl-pop flex items-center gap-1 bg-orange-100 border border-orange-300 text-orange-600 font-black text-sm px-3 py-1 rounded-full">
                    <Flame className="w-4 h-4 fill-orange-500" /> x{combo}
                  </div>
                )}
              </div>
            )}

            {/* LESSON SUMMARY VIEW WHEN COMPLETED */}
            {showSummary ? (
              <div className="bg-white rounded-3xl border-2 border-slate-200 p-8 text-center space-y-6 shadow-xl my-8">
                {pctNow >= 60 && <Confetti />}
                <div className="w-24 h-24 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto text-5xl shadow-inner border-4 border-yellow-300 animate-bounce">
                  🎉
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-800">লেসন সম্পন্ন হয়েছে!</h2>
                  <p className="text-slate-500 mt-1 font-bold">
                    {activeLesson.isExam
                      ? (pctNow >= 70 ? 'অভিনন্দন! আপনি পরীক্ষায় উত্তীর্ণ হয়েছেন!' : 'আরেকটু ভালো করার সুযোগ আছে, আবার চেষ্টা করুন।')
                      : pctNow >= 80
                      ? 'অসাধারণ পারফরম্যান্স! আপনি দারুণ এগোচ্ছেন।'
                      : pctNow >= 60
                      ? 'ভালো প্রচেষ্টা! নিয়মিত অনুশীলন চালিয়ে যান।'
                      : 'লেসনটি আবার রিভিশন দেওয়ার পরামর্শ রইল।'}
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3 text-center">
                    <span className="text-[10px] font-bold text-amber-600 uppercase">অর্জিত XP</span>
                    <p className="text-xl font-black text-amber-700">+{activeLesson.xp + lessonXpEarned}</p>
                  </div>
                  <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-3 text-center">
                    <span className="text-[10px] font-bold text-cyan-600 uppercase">রত্ন</span>
                    <p className="text-xl font-black text-cyan-700">+{pctNow === 100 ? 5 : 2} 💎</p>
                  </div>
                  <div className="bg-sky-50 border border-sky-200 rounded-2xl p-3 text-center">
                    <span className="text-[10px] font-bold text-sky-600 uppercase">নির্ভুলতা</span>
                    <p className="text-xl font-black text-sky-700">{pctNow}%</p>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {pctNow === 100 && <span className="fl-pop bg-yellow-100 text-yellow-700 border border-yellow-300 font-black text-xs px-3 py-1.5 rounded-full">১০০% নিখুঁত স্কোর!</span>}
                  {bestCombo >= 3 && <span className="fl-pop bg-orange-100 text-orange-700 border border-orange-300 font-black text-xs px-3 py-1.5 rounded-full">সেরা কম্বো x{bestCombo}</span>}
                  {userStats.level > levelAtStartRef.current && <span className="fl-pop bg-indigo-100 text-indigo-700 border border-indigo-300 font-black text-xs px-3 py-1.5 rounded-full">নতুন লেভেল! {levelTitle(userStats.level)}</span>}
                </div>
                <div className="space-y-3">
                  <button
                    onClick={() => startLesson(activeLesson)}
                    className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-black py-4 rounded-2xl shadow-lg border-b-4 border-indigo-700 active:border-b-0 active:translate-y-1 transition-all text-lg cursor-pointer"
                  >
                    আবার অনুশীলন করুন
                  </button>
                  <button
                    onClick={() => setActiveTab('path')}
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white font-black py-4 rounded-2xl shadow-lg border-b-4 border-sky-700 active:border-b-0 active:translate-y-1 transition-all text-lg cursor-pointer"
                  >
                    পরবর্তী পাঠে যান
                  </button>
                </div>
              </div>
            ) : (
              /* ACTIVE QUESTION CARD WITH BULLETPROOF "শুনুন" BUTTON */
              <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-8 shadow-xs space-y-6 min-h-[400px] flex flex-col justify-between">
                {(() => {
                  const q = activeLesson.questions[questionIdx];
                  if (!q) return null;
                  const speakableText = getSpokenTextForQuestion(q);

                  return (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase tracking-wider text-slate-400 bg-slate-100 px-3.5 py-1.5 rounded-full">
                          প্রশ্ন {questionIdx + 1} / {activeLesson.questions.length}
                        </span>
                        {speakableText && (
                          <button
                            onClick={() => speakText(speakableText, isSlowAudio)}
                            className="flex items-center gap-1.5 text-xs font-bold text-sky-600 bg-sky-50 hover:bg-sky-100 px-3 py-1.5 rounded-full border border-sky-200 transition-colors cursor-pointer"
                            title="উচ্চারণ শুনুন"
                          >
                            <Volume2 className="w-4 h-4" /> শুনুন {isSlowAudio && '(Slow)'}
                          </button>
                        )}
                      </div>
                      <h2 className="text-lg sm:text-xl font-extrabold text-slate-800">
                        {q.prompt}
                      </h2>
                      {/* Display Main English Phrase */}
                      {q.questionEn && q.type !== 'listening' && (
                        <div className="flex items-center space-x-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                          <button
                            onClick={() => speakText(q.questionEn || '', isSlowAudio)}
                            className="p-3 bg-sky-500 hover:bg-sky-600 text-white rounded-xl shadow-xs transition-transform active:scale-95 cursor-pointer"
                            title="উচ্চারণ শুনুন"
                          >
                            <Volume2 className="w-5 h-5" />
                          </button>
                          <span className="text-xl font-black tracking-wide text-slate-800">
                            "{q.questionEn}"
                          </span>
                        </div>
                      )}

                      {/* QUESTION TYPE 1: MULTIPLE CHOICE */}
                      {q.type === 'mcq' && q.options && (
                        <div className="grid grid-cols-1 gap-3 pt-2">
                          {q.options.map((opt, idx) => (
                            <button
                              key={idx}
                              onClick={() => setSelectedOpt(opt)}
                              className={`w-full p-4 rounded-2xl border-2 text-left font-bold text-base transition-all flex items-center justify-between cursor-pointer ${
                                selectedOpt === opt
                                  ? 'border-sky-500 bg-sky-50 text-sky-900 shadow-xs'
                                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                              }`}
                            >
                              <span>{opt}</span>
                              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                selectedOpt === opt ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-300'
                              }`}>
                                {selectedOpt === opt && <Check className="w-4 h-4 stroke-[3]" />}
                              </div>
                            </button>
                          ))}
                        </div>
                      )}

                      {/* QUESTION TYPE 2: REORDER (WORD TILES) */}
                      {q.type === 'reorder' && (
                        <div className="space-y-6 pt-2">
                          <div className="min-h-[75px] bg-slate-50 rounded-2xl border-2 border-dashed border-slate-300 p-3 flex flex-wrap gap-2 items-center">
                            {reorderedWords.length === 0 ? (
                              <span className="text-slate-400 text-xs sm:text-sm font-medium italic">
                                শব্দগুলো ক্রমানুসারে সাজাতে নিচের টাইলগুলোতে ক্লিক করুন
                              </span>
                            ) : (
                              reorderedWords.map((word, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => {
                                    setReorderedWords(prev => prev.filter((_, i) => i !== idx));
                                    setAvailableWords(prev => [...prev, word]);
                                  }}
                                  className="bg-white border-2 border-slate-200 px-3.5 py-2 rounded-xl text-slate-800 font-bold shadow-xs hover:border-rose-300 transition-colors cursor-pointer"
                                >
                                  {word}
                                </button>
                              ))
                            )}
                          </div>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {availableWords.map((word, idx) => (
                              <button
                                key={idx}
                                onClick={() => {
                                  setAvailableWords(prev => prev.filter((_, i) => i !== idx));
                                  setReorderedWords(prev => [...prev, word]);
                                }}
                                className="bg-slate-100 hover:bg-slate-200 border-2 border-slate-300 text-slate-800 font-extrabold px-4 py-2.5 rounded-2xl shadow-xs transition-all text-base cursor-pointer"
                              >
                                {word}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* QUESTION TYPE 3: LISTENING PRACTICE */}
                      {q.type === 'listening' && q.audioText && q.options && (
                        <div className="space-y-6 text-center pt-2">
                          <button
                            onClick={() => speakText(q.audioText || '', isSlowAudio)}
                            className="mx-auto w-24 h-24 bg-sky-500 hover:bg-sky-600 text-white rounded-3xl flex items-center justify-center shadow-lg border-b-4 border-sky-700 active:translate-y-1 transition-all group cursor-pointer"
                            title="উচ্চারণ শুনুন"
                          >
                            <Volume2 className="w-12 h-12 group-hover:scale-110 transition-transform" />
                          </button>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {q.options.map((opt, idx) => (
                              <button
                                key={idx}
                                onClick={() => setSelectedOpt(opt)}
                                className={`p-4 rounded-2xl border-2 font-bold text-slate-700 transition-all cursor-pointer ${
                                  selectedOpt === opt
                                    ? 'border-sky-500 bg-sky-50 text-sky-900 shadow-xs'
                                    : 'border-slate-200 bg-white hover:border-slate-300'
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* QUESTION TYPE 4: PAIR MATCHING */}
                      {q.type === 'matching' && q.pairs && (
                        <div className="grid grid-cols-2 gap-4 pt-2">
                          <div className="space-y-2">
                            <span className="text-xs font-bold text-slate-400 block text-center mb-1 uppercase">ENGLISH</span>
                            {q.pairs.map((pair, idx) => {
                              const isMatched = !!matchedPairs[pair.en];
                              const isSelected = selectedEn === pair.en;
                              return (
                                <button
                                  key={idx}
                                  disabled={isMatched}
                                  onClick={() => {
                                    setSelectedEn(pair.en);
                                    speakText(pair.en, isSlowAudio);
                                  }}
                                  className={`w-full p-3.5 rounded-xl border-2 font-bold text-sm transition-all cursor-pointer ${
                                    isMatched
                                      ? 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed opacity-50'
                                      : isSelected
                                      ? 'border-sky-500 bg-sky-50 text-sky-900'
                                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                                  }`}
                                >
                                  {pair.en}
                                </button>
                              );
                            })}
                          </div>
                          <div className="space-y-2">
                            <span className="text-xs font-bold text-slate-400 block text-center mb-1 uppercase">বাংলা অর্থ</span>
                            {q.pairs.map((pair, idx) => {
                              const matchedEn = Object.keys(matchedPairs).find(key => matchedPairs[key] === pair.bn);
                              return (
                                <button
                                  key={idx}
                                  disabled={!!matchedEn}
                                  onClick={() => {
                                    if (selectedEn && q.pairs) {
                                      const targetPair = q.pairs.find(p => p.en === selectedEn);
                                      if (targetPair && targetPair.bn === pair.bn) {
                                        setMatchedPairs(prev => ({ ...prev, [selectedEn]: pair.bn }));
                                        playSound('correct');
                                      } else {
                                        playSound('wrong');
                                      }
                                      setSelectedEn(null);
                                    }
                                  }}
                                  className={`w-full p-3.5 rounded-xl border-2 font-bold text-sm transition-all cursor-pointer ${
                                    matchedEn
                                      ? 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed opacity-50'
                                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                                  }`}
                                >
                                  {pair.bn}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}

                {/* BOTTOM ACTION BUTTON / FEEDBACK FOOTER */}
                <div className="pt-4 border-t border-slate-100">
                  {isAnswerChecked && (
                    <div className={`p-4 rounded-2xl mb-4 flex items-start space-x-3 ${
                      isCorrect ? 'bg-sky-100 border border-sky-300 text-sky-900' : 'bg-rose-100 border border-rose-300 text-rose-900'
                    }`}>
                      {isCorrect ? (
                        <CheckCircle2 className="w-6 h-6 text-sky-600 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
                      )}
                      <div className="space-y-1">
                        <h4 className="font-extrabold text-base">
                          {isCorrect ? 'সঠিক উত্তর!' : 'ভুল হয়েছে!'}
                        </h4>
                        {isCorrect && comboToast && <p className="fl-pop text-sm font-black text-orange-600">{comboToast}</p>}
                        {activeLesson.questions[questionIdx]?.hint && (
                          <p className="text-xs font-semibold opacity-90">
                            ব্যাখ্যা: {activeLesson.questions[questionIdx].hint}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                  {!isAnswerChecked ? (
                    <button
                      onClick={handleCheckAnswer}
                      className="w-full bg-sky-500 hover:bg-sky-600 text-white font-black py-4 rounded-2xl shadow-md border-b-4 border-sky-700 active:border-b-0 active:translate-y-1 transition-all text-base cursor-pointer"
                    >
                      যাচাই করুন (Check Answer)
                    </button>
                  ) : (
                    <button
                      onClick={handleNextQuestion}
                      className={`w-full font-black py-4 rounded-2xl shadow-md border-b-4 active:border-b-0 active:translate-y-1 transition-all text-base text-white cursor-pointer ${
                        isCorrect ? 'bg-sky-500 hover:bg-sky-600 border-sky-700' : 'bg-rose-500 hover:bg-rose-600 border-rose-700'
                      }`}
                    >
                      পরবর্তী (Continue)
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
