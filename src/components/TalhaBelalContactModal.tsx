import React, { useState } from 'react';
import { Phone, MessageCircle, Copy, Check, ExternalLink, X, ShieldCheck, HeartHandshake, Award } from 'lucide-react';

interface TalhaBelalContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TALHA_BELAL_PHONE = '01987573397';
export const TALHA_BELAL_INTL_PHONE = '+8801987573397';
export const TALHA_BELAL_FB = 'https://www.facebook.com/talha.belal.92';

export const TalhaBelalContactModal: React.FC<TalhaBelalContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(TALHA_BELAL_PHONE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div
        className="bg-white rounded-3xl border-2 border-slate-200 max-w-md w-full p-6 space-y-5 shadow-2xl relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-founder-title"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close Contact Modal"
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Founder Header */}
        <div className="text-center space-y-2 pt-2">
          <div className="relative inline-block">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-sky-500 to-blue-600 text-white flex items-center justify-center text-3xl font-black border-4 border-white shadow-lg mx-auto">
              TB
            </div>
            <span className="absolute bottom-0 right-0 bg-emerald-500 text-white p-1 rounded-full border-2 border-white shadow-sm" title="ভেরিফাইড ফাউন্ডার">
              <ShieldCheck className="w-4 h-4" />
            </span>
          </div>
          <div>
            <h3 id="contact-founder-title" className="text-2xl font-black text-slate-800">
              তালহা বেলাল (Talha Belal)
            </h3>
            <p className="text-xs font-bold text-sky-600 uppercase tracking-widest flex items-center justify-center gap-1">
              <Award className="w-3.5 h-3.5" /> Founder & Lead Mentor, Fluently
            </p>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-500 max-w-xs mx-auto leading-relaxed">
            ইংরেজি শেখায় কোনো জড়তা, কোর্স সম্পর্কিত প্রশ্ন বা পরামর্শের জন্য সরাসরি কথা বলুন।
          </p>
        </div>

        {/* Contact Actions Grid */}
        <div className="space-y-3 pt-1">
          {/* Direct Phone Call Button */}
          <a
            href={`tel:${TALHA_BELAL_PHONE}`}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-black text-sm shadow-md border-b-4 border-emerald-700 active:border-b-0 active:translate-y-1 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-emerald-100">সরাসরি কল করুন</p>
                <p className="text-base font-black tracking-wider">{TALHA_BELAL_PHONE}</p>
              </div>
            </div>
            <span className="text-xs font-extrabold bg-white/20 px-3 py-1.5 rounded-xl">
              কল দিন
            </span>
          </a>

          {/* WhatsApp Chat Button */}
          <a
            href={`https://wa.me/88${TALHA_BELAL_PHONE}?text=${encodeURIComponent('আসসালামু আলাইকুম তালহা ভাই, Fluently অ্যাপ দিয়ে ইংরেজি শেখা সম্পর্কে জানতে চাই।')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-sm shadow-md border-b-4 border-emerald-800 active:border-b-0 active:translate-y-1 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-emerald-100">হোয়াটসঅ্যাপে চ্যাট করুন</p>
                <p className="text-base font-black tracking-wider">{TALHA_BELAL_PHONE}</p>
              </div>
            </div>
            <span className="text-xs font-extrabold bg-white/20 px-3 py-1.5 rounded-xl flex items-center gap-1">
              WhatsApp <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </a>

          {/* 1-Click Copy Phone Number */}
          <button
            onClick={handleCopy}
            className={`w-full flex items-center justify-between p-3.5 rounded-2xl border-2 font-black text-sm transition-all cursor-pointer ${
              copied
                ? 'bg-emerald-50 border-emerald-400 text-emerald-800'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-sky-300'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-200/60 flex items-center justify-center text-slate-600">
                {copied ? <Check className="w-5 h-5 text-emerald-600 stroke-[3]" /> : <Copy className="w-5 h-5" />}
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-400">নাম্বার কপি করুন</p>
                <p className="text-base font-black tracking-wider text-slate-800">{TALHA_BELAL_PHONE}</p>
              </div>
            </div>
            <span className="text-xs font-extrabold px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-600">
              {copied ? 'কপি হয়েছে!' : 'কপি করুন'}
            </span>
          </button>

          {/* Facebook Profile Link */}
          <a
            href={TALHA_BELAL_FB}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-2xl bg-sky-50 hover:bg-sky-100 border-2 border-sky-200 text-sky-800 font-black text-sm transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.6c0-.9.3-1.5 1.6-1.5H16.7V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.5V21h3z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-sky-600">অফিশিয়াল ফেসবুক প্রোফাইল</p>
                <p className="text-sm font-black">fb.com/talha.belal.92</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-sky-600" />
          </a>
        </div>

        {/* Motivational Footer */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3 text-center space-y-1">
          <p className="text-xs font-extrabold text-amber-900 flex items-center justify-center gap-1.5">
            <HeartHandshake className="w-4 h-4 text-amber-600" />
            "বাঙালি জাতি যেন বিশ্বমঞ্চে বুক ফুলিয়ে নির্ভয়ে ইংরেজিতে কথা বলতে পারে — এটাই Fluently-র লক্ষ্য।"
          </p>
        </div>
      </div>
    </div>
  );
};
