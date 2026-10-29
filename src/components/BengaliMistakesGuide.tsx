import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, Volume2, Search, Sparkles } from 'lucide-react';
import { COMMON_BENGALI_MISTAKES, BengaliEnglishMistake } from '../utils/srsEngine';

interface BengaliMistakesGuideProps {
  onSpeak: (text: string, isSlow?: boolean) => void;
  isSlowAudio: boolean;
}

export const BengaliMistakesGuide: React.FC<BengaliMistakesGuideProps> = ({ onSpeak, isSlowAudio }) => {
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState<string>('');

  const filtered = COMMON_BENGALI_MISTAKES.filter(item => {
    const matchesFilter = filter === 'all' || item.category === filter;
    const matchesSearch =
      item.wrong.toLowerCase().includes(search.toLowerCase()) ||
      item.correct.toLowerCase().includes(search.toLowerCase()) ||
      item.bengaliNote.includes(search);
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between">
        <div className="space-y-2 z-10 max-w-xl text-center sm:text-left">
          <span className="bg-white/20 backdrop-blur-md text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider text-amber-100 flex items-center gap-1.5 w-fit mx-auto sm:mx-0">
            <Sparkles className="w-3.5 h-3.5" /> সাধারণ ভুল ও নেটিভ টেকনিক
          </span>
          <h2 className="text-2xl sm:text-3xl font-black leading-tight">
            বাঙালিদের সাধারণ ইংরেজি ভুল ও সঠিক নেটিভ নিয়ম
          </h2>
          <p className="text-amber-100 text-xs sm:text-sm font-medium leading-relaxed">
            বাংলা থেকে আক্ষরিক অনুবাদের কারণে আমরা হরহামেশাই কিছু ভুল করি। এগুলো শুধরে নিলেই ইংরেজি হবে ১০০% প্রফেশনাল!
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-3xl border-2 border-slate-200 p-5 shadow-sm flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="ভুল বা নিয়ম খুঁজুন..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl border-2 border-slate-200 focus:border-amber-500 focus:outline-none font-bold text-sm bg-slate-50"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          {[
            ['all', 'সকল ভুল'],
            ['grammar', 'গ্রামার'],
            ['vocabulary', 'শব্দচয়ন'],
            ['idiom', 'ইডিয়াম'],
          ].map(([k, label]) => (
            <button
              key={k}
              onClick={() => setFilter(k)}
              className={`px-4 py-2.5 rounded-2xl border-2 font-black text-xs transition-all cursor-pointer ${
                filter === k
                  ? 'bg-amber-500 border-amber-700 text-white'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-amber-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Mistakes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border-2 border-slate-200 hover:border-amber-400 p-5 shadow-sm space-y-3 transition-all"
          >
            {/* Wrong vs Correct Box */}
            <div className="space-y-2">
              {/* Wrong */}
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center justify-between text-rose-900">
                <div className="flex items-center gap-2">
                  <span className="text-rose-500 font-black text-sm">❌ ভুল:</span>
                  <span className="font-extrabold text-sm line-through opacity-85">"{item.wrong}"</span>
                </div>
              </div>

              {/* Correct */}
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between text-emerald-950">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-black text-sm">✅ সঠিক:</span>
                  <span className="font-black text-base">{item.correct}</span>
                </div>
                <button
                  onClick={() => onSpeak(item.correct, isSlowAudio)}
                  className="p-1.5 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 cursor-pointer shadow-xs"
                  title="উচ্চারণ শুনুন"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Bengali Note & Explanation */}
            <div className="space-y-1 pt-1">
              <p className="text-xs font-black text-slate-800">
                💡 {item.bengaliNote}
              </p>
              <p className="text-[11px] font-semibold text-slate-500 leading-relaxed">
                {item.explanation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
