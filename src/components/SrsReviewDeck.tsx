import React, { useState } from 'react';
import {
  Brain,
  Sparkles,
  Volume2,
  CheckCircle2,
  RotateCcw,
  Plus,
  Trash2,
  Clock,
  Layers,
  ChevronRight,
  Target,
  Zap,
  Info,
  Turtle
} from 'lucide-react';
import {
  SrsCard,
  SrsRating,
  scheduleNextReview,
  getDueSrsCards,
  computeSrsStats,
  getTodayKey
} from '../utils/srsEngine';

interface SrsReviewDeckProps {
  cards: SrsCard[];
  onUpdateCards: (cards: SrsCard[]) => void;
  onReward: (xp: number, gems: number) => void;
  onSpeak: (text: string, isSlow?: boolean) => void;
  isSlowAudio: boolean;
  onOpenWords: () => void;
}

export const SrsReviewDeck: React.FC<SrsReviewDeckProps> = ({
  cards,
  onUpdateCards,
  onReward,
  onSpeak,
  isSlowAudio,
  onOpenWords,
}) => {
  const today = getTodayKey();
  const dueCards = getDueSrsCards(cards, today);
  const stats = computeSrsStats(cards, today);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeTab, setActiveTab] = useState<'review' | 'browse'>('review');

  const currentCard = dueCards[currentIndex];

  const handleRateCard = (rating: SrsRating) => {
    if (!currentCard) return;

    const updatedCard = scheduleNextReview(currentCard, rating, today);
    const updatedCards = cards.map(c => (c.id === currentCard.id ? updatedCard : c));
    onUpdateCards(updatedCards);

    // Reward XP & Gems
    const xpBonus = rating === 'easy' ? 8 : rating === 'good' ? 5 : rating === 'hard' ? 3 : 1;
    onReward(xpBonus, rating === 'easy' ? 1 : 0);

    setIsFlipped(false);
    if (currentIndex < dueCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Reached end of current due batch
      setCurrentIndex(0);
    }
  };

  const handleDeleteCard = (id: string) => {
    onUpdateCards(cards.filter(c => c.id !== id));
  };

  const getIntervalLabel = (card: SrsCard, rating: SrsRating): string => {
    if (rating === 'again') return '১ দিন পর';
    if (rating === 'hard') return `${Math.max(1, Math.round(card.intervalDays * 1.2))} দিন পর`;
    if (rating === 'good') {
      if (card.repetition === 0) return '১ দিন পর';
      if (card.repetition === 1) return '৩ দিন পর';
      return `${Math.round(card.intervalDays * card.easeFactor)} দিন পর`;
    }
    // Easy
    if (card.repetition === 0) return '৩ দিন পর';
    if (card.repetition === 1) return '৭ দিন পর';
    return `${Math.round(card.intervalDays * card.easeFactor * 1.3)} দিন পর`;
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* SRS Hero Banner */}
      <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between">
        <div className="space-y-3 z-10 max-w-xl text-center sm:text-left">
          <span className="bg-white/20 backdrop-blur-md text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider text-violet-100 flex items-center gap-1.5 w-fit mx-auto sm:mx-0">
            <Brain className="w-3.5 h-3.5" /> স্পেসড রিপিটিশন মেমোরি সিস্টেম (SRS)
          </span>
          <h2 className="text-2xl sm:text-3xl font-black leading-tight">
            যা শিখবেন, তা কোনোদিন ভুলবেন না!
          </h2>
          <p className="text-violet-100 text-xs sm:text-sm font-medium leading-relaxed">
            জার্মান সাইকোলজিস্ট এবিংহাউসের "স্মৃতি বিলোপ বক্ররেখা" (Forgetting Curve) ভেঙে মস্তিষ্কে দীর্ঘস্থায়ী মেমোরি তৈরি করে।
          </p>
        </div>

        {/* Aggregate Stats Badges */}
        <div className="mt-4 sm:mt-0 grid grid-cols-2 gap-2 text-center shrink-0">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl px-4 py-2.5">
            <p className="text-2xl font-black">{stats.dueToday}</p>
            <p className="text-[10px] font-bold text-violet-100 uppercase">আজকের রিভিশন</p>
          </div>
          <div className="bg-white/20 backdrop-blur-md rounded-2xl px-4 py-2.5">
            <p className="text-2xl font-black">{stats.mastered}</p>
            <p className="text-[10px] font-bold text-violet-100 uppercase">আয়ত্তে আছে</p>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex gap-2">
          <button
            onClick={() => { setActiveTab('review'); setIsFlipped(false); }}
            className={`px-4 py-2.5 rounded-2xl font-black text-xs sm:text-sm border-2 transition-all cursor-pointer ${
              activeTab === 'review'
                ? 'bg-violet-600 border-violet-800 text-white shadow-sm'
                : 'bg-white border-slate-200 text-slate-600 hover:border-violet-300'
            }`}
          >
            আজকের রিভিশন ({dueCards.length})
          </button>
          <button
            onClick={() => setActiveTab('browse')}
            className={`px-4 py-2.5 rounded-2xl font-black text-xs sm:text-sm border-2 transition-all cursor-pointer ${
              activeTab === 'browse'
                ? 'bg-violet-600 border-violet-800 text-white shadow-sm'
                : 'bg-white border-slate-200 text-slate-600 hover:border-violet-300'
            }`}
          >
            সকল কার্ড ({cards.length})
          </button>
        </div>

        <button
          onClick={onOpenWords}
          className="px-3.5 py-2 rounded-2xl bg-sky-50 hover:bg-sky-100 text-sky-700 font-extrabold text-xs border border-sky-300 flex items-center gap-1 cursor-pointer"
        >
          <Plus className="w-4 h-4" /> শব্দ যোগ করুন
        </button>
      </div>

      {/* TAB 1: ACTIVE REVIEW CARD */}
      {activeTab === 'review' && (
        <div>
          {dueCards.length > 0 && currentCard ? (
            <div className="max-w-xl mx-auto space-y-5">
              {/* Card Counter & Level Indicator */}
              <div className="flex items-center justify-between text-xs font-black text-slate-500 px-1">
                <span className="bg-slate-200/80 px-3 py-1 rounded-full">
                  কার্ড {currentIndex + 1} / {dueCards.length}
                </span>
                <span className="bg-violet-50 text-violet-700 border border-violet-200 px-3 py-1 rounded-full">
                  লেভেল {currentCard.level} • {currentCard.category}
                </span>
              </div>

              {/* 3D Flip Flashcard */}
              <div
                onClick={() => setIsFlipped(prev => !prev)}
                className="bg-white rounded-3xl border-2 border-slate-200 hover:border-violet-400 p-8 min-h-[300px] shadow-sm flex flex-col justify-between cursor-pointer transition-all relative select-none"
              >
                {/* Card Type Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-xl">
                    {currentCard.type === 'word' ? '🔤 Vocabulary Word' : '💬 Fluency Sentence'}
                  </span>
                  <span className="text-xs font-extrabold text-violet-600 flex items-center gap-1">
                    <RotateCcw className="w-3.5 h-3.5" /> ট্যাপ করে অর্থ দেখুন
                  </span>
                </div>

                {/* Front & Back Content */}
                <div className="text-center py-6 space-y-4">
                  {/* English Header */}
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
                    "{currentCard.english}"
                  </h3>

                  {/* Audio Controls */}
                  <div className="flex items-center justify-center gap-2" onClick={e => e.stopPropagation()}>
                    <button
                      onClick={() => onSpeak(currentCard.english, false)}
                      className="px-3.5 py-2 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-extrabold text-xs shadow-sm flex items-center gap-1.5 cursor-pointer"
                      title="স্বাভাবিক গতিতে শুনুন"
                    >
                      <Volume2 className="w-4 h-4" /> উচ্চারণ শুনুন
                    </button>
                    <button
                      onClick={() => onSpeak(currentCard.english, true)}
                      className="px-3.5 py-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-extrabold text-xs flex items-center gap-1.5 cursor-pointer"
                      title="ধীরে স্পষ্ট উচ্চারণ শুনুন"
                    >
                      <Turtle className="w-4 h-4 text-emerald-600" /> ধীর গতি
                    </button>
                  </div>

                  {/* Flipped Reveal Content */}
                  {isFlipped ? (
                    <div className="pt-4 border-t border-slate-100 space-y-2 animate-fadeIn">
                      <p className="text-xl sm:text-2xl font-black text-emerald-600">
                        {currentCard.bengali}
                      </p>
                      {currentCard.phonetic && (
                        <p className="text-xs font-bold text-slate-400">
                          বাংলা উচ্চারণ: <span className="text-slate-600">[{currentCard.phonetic}]</span>
                        </p>
                      )}
                      <p className="text-[11px] font-semibold text-slate-400">
                        মেমোরি ব্যবধান: {currentCard.intervalDays} দিন • পুনরাবৃত্তি: {currentCard.repetition} বার
                      </p>
                    </div>
                  ) : (
                    <p className="text-xs font-bold text-slate-400 italic pt-3">
                      (মনে করার চেষ্টা করুন, এরপর ট্যাপ করে নিশ্চিত হোন)
                    </p>
                  )}
                </div>

                {/* Footer hint */}
                <div className="text-center text-[10px] font-bold text-slate-400">
                  {isFlipped ? 'নিচের যেকোনো একটি রেটিং বেছে নিন' : 'অর্থ দেখতে কার্ডের যেকোনো জায়গায় ক্লিক করুন'}
                </div>
              </div>

              {/* SM-2 Spaced Repetition Rating Buttons */}
              {isFlipped && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 animate-fadeIn">
                  {/* Again */}
                  <button
                    onClick={() => handleRateCard('again')}
                    className="p-3.5 rounded-2xl bg-rose-50 hover:bg-rose-100 border-2 border-rose-300 text-rose-800 font-black text-xs flex flex-col items-center justify-center gap-1 cursor-pointer transition-all active:scale-95"
                  >
                    <span className="text-sm">🔴 আবার</span>
                    <span className="text-[10px] font-bold text-rose-600">{getIntervalLabel(currentCard, 'again')}</span>
                  </button>

                  {/* Hard */}
                  <button
                    onClick={() => handleRateCard('hard')}
                    className="p-3.5 rounded-2xl bg-amber-50 hover:bg-amber-100 border-2 border-amber-300 text-amber-800 font-black text-xs flex flex-col items-center justify-center gap-1 cursor-pointer transition-all active:scale-95"
                  >
                    <span className="text-sm">🟡 কঠিন</span>
                    <span className="text-[10px] font-bold text-amber-600">{getIntervalLabel(currentCard, 'hard')}</span>
                  </button>

                  {/* Good */}
                  <button
                    onClick={() => handleRateCard('good')}
                    className="p-3.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-300 text-emerald-800 font-black text-xs flex flex-col items-center justify-center gap-1 cursor-pointer transition-all active:scale-95"
                  >
                    <span className="text-sm">🟢 ভালো</span>
                    <span className="text-[10px] font-bold text-emerald-600">{getIntervalLabel(currentCard, 'good')}</span>
                  </button>

                  {/* Easy */}
                  <button
                    onClick={() => handleRateCard('easy')}
                    className="p-3.5 rounded-2xl bg-sky-50 hover:bg-sky-100 border-2 border-sky-300 text-sky-800 font-black text-xs flex flex-col items-center justify-center gap-1 cursor-pointer transition-all active:scale-95"
                  >
                    <span className="text-sm">🔵 সহজ</span>
                    <span className="text-[10px] font-bold text-sky-600">{getIntervalLabel(currentCard, 'easy')}</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* All Reviews Completed Today */
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-8 text-center space-y-5 max-w-md mx-auto shadow-sm">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-4xl border-2 border-emerald-300">
                🎉
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-slate-800">
                  আজকের সব রিভিশন সম্পন্ন!
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-500">
                  অসাধারণ প্রচেষ্টা! আপনার মস্তিষ্কে শব্দগুলো দীর্ঘস্থায়ী মেমোরিতে সংরক্ষিত হচ্ছে।
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs font-bold text-slate-600 space-y-1 text-left">
                <p className="flex items-center justify-between">
                  <span>মোট কার্ড সংখ্যা:</span>
                  <span className="font-black text-slate-800">{stats.total} টি</span>
                </p>
                <p className="flex items-center justify-between">
                  <span>পরিপূর্ণ আয়ত্তে (Mastered):</span>
                  <span className="font-black text-emerald-600">{stats.mastered} টি</span>
                </p>
                <p className="flex items-center justify-between">
                  <span>বর্তমান রিটেনশন রেট:</span>
                  <span className="font-black text-violet-600">{stats.retentionRate}%</span>
                </p>
              </div>

              <button
                onClick={onOpenWords}
                className="w-full bg-violet-600 hover:bg-violet-700 text-white font-black py-3.5 rounded-2xl shadow-md border-b-4 border-violet-800 active:border-b-0 active:translate-y-1 transition-all cursor-pointer text-sm"
              >
                নতুন শব্দ ডেক-এ যুক্ত করুন
              </button>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: BROWSE ALL CARDS IN DECK */}
      {activeTab === 'browse' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {cards.map(card => {
              const isDue = card.dueDate <= today;
              return (
                <div
                  key={card.id}
                  className={`bg-white rounded-2xl border-2 p-4 space-y-2 relative shadow-xs transition-all ${
                    isDue ? 'border-amber-300 bg-amber-50/30' : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                        {card.level} • {card.category}
                      </span>
                      <h4 className="font-black text-base text-slate-800 mt-1">{card.english}</h4>
                      <p className="font-bold text-sm text-emerald-700">{card.bengali}</p>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => onSpeak(card.english, isSlowAudio)}
                        className="p-1.5 bg-sky-50 text-sky-600 rounded-xl hover:bg-sky-100 cursor-pointer"
                        title="শুনুন"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteCard(card.id)}
                        className="p-1.5 bg-slate-100 text-slate-400 hover:text-rose-600 rounded-xl cursor-pointer"
                        title="ডেক থেকে সরান"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-2 flex items-center justify-between text-[11px] font-bold text-slate-400">
                    <span>ব্যবধান: {card.intervalDays} দিন</span>
                    <span className={isDue ? 'text-amber-600 font-extrabold' : 'text-slate-500'}>
                      {isDue ? 'আজকের জন্য তৈরি' : `পরবর্তী: ${card.dueDate}`}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {cards.length === 0 && (
            <p className="text-center font-bold text-slate-400 py-8">
              কোনো কার্ড ডেক-এ নেই। শব্দকোষ বা বাক্য ভান্ডার থেকে যেকোনো শব্দ সহজে যুক্ত করুন।
            </p>
          )}
        </div>
      )}
    </div>
  );
};
