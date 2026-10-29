import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Flame, Heart, Trophy, Star, Play, Volume2, CheckCircle2, XCircle, 
  ArrowRight, RotateCcw, Award, BookOpen, User, Home, Sparkles, Check, 
  Zap, Search, VolumeX, Settings, ShieldCheck, RefreshCw, BarChart2,
  Bookmark, ChevronRight, HelpCircle, FastForward, Turtle, Layers, Compass,
  Info, ChevronLeft, ExternalLink, Target
} from 'lucide-react';

// ==========================================
// 1. AUDIO & SOUND EFFECTS SYNTHESIZER
// ==========================================
const playSound = (type) => {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'correct') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.1); // E5
      osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.2); // G5
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } else if (type === 'wrong') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, ctx.currentTime); // A3
      osc.frequency.setValueAtTime(164.81, ctx.currentTime + 0.15); // E3
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } else if (type === 'complete') {
      const notes = [523.25, 659.25, 783.99, 1046.50];
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
    }
  } catch (e) {
    console.log('Web Audio disabled or blocked');
  }
};

const speakText = (text, isSlow = false) => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = isSlow ? 0.6 : 0.88;
    window.speechSynthesis.speak(utterance);
  }
};

// ==========================================
// 2. COMPREHENSIVE 1000+ WORD BANK DATABASE GENERATOR
// ==========================================
const BASE_DICTIONARY = [
  // Basics & Family
  { id: 1, word: 'Hello', bn: 'হ্যালো / ওহে', phonetic: 'হ্যালো', pos: 'interjection', category: 'Basics' },
  { id: 2, word: 'Good Morning', bn: 'শুভ সকাল', phonetic: 'গুড মর্নিং', pos: 'phrase', category: 'Basics' },
  { id: 3, word: 'Thank you', bn: 'ধন্যবাদ', phonetic: 'থ্যাংক ইউ', pos: 'phrase', category: 'Basics' },
  { id: 4, word: 'Welcome', bn: 'স্বাগতম', phonetic: 'ওয়েলকাম', pos: 'noun/verb', category: 'Basics' },
  { id: 5, word: 'Family', bn: 'পরিবার', phonetic: 'ফ্যামিলি', pos: 'noun', category: 'Family' },
  { id: 6, word: 'Father', bn: 'বাবা', phonetic: 'ফাদার', pos: 'noun', category: 'Family' },
  { id: 7, word: 'Mother', bn: 'মা', phonetic: 'মাদার', pos: 'noun', category: 'Family' },
  { id: 8, word: 'Brother', bn: 'ভাই', phonetic: 'ব্রাদার', pos: 'noun', category: 'Family' },
  { id: 9, word: 'Sister', bn: 'বোন', phonetic: 'সিস্টার', pos: 'noun', category: 'Family' },
  { id: 10, word: 'Friend', bn: 'বন্ধু', phonetic: 'ফ্রেন্ড', pos: 'noun', category: 'Social' },
  // Food & Objects
  { id: 11, word: 'Water', bn: 'পানি / জল', phonetic: 'ওয়াটার', pos: 'noun', category: 'Food' },
  { id: 12, word: 'Rice', bn: 'ভাত / চাল', phonetic: 'রাইস', pos: 'noun', category: 'Food' },
  { id: 13, word: 'Apple', bn: 'আপেল', phonetic: 'অ্যাপল', pos: 'noun', category: 'Food' },
  { id: 14, word: 'Bread', bn: 'রুটি', phonetic: 'ব্রেড', pos: 'noun', category: 'Food' },
  { id: 15, word: 'Book', bn: 'বই', phonetic: 'বুক', pos: 'noun', category: 'Objects' },
  { id: 16, word: 'Pen', bn: 'কলম', phonetic: 'পেন', pos: 'noun', category: 'Objects' },
  { id: 17, word: 'Chair', bn: 'চেয়ার / কেদারা', phonetic: 'চেয়ার', pos: 'noun', category: 'Objects' },
  { id: 18, word: 'Table', bn: 'টেবিল / মেজ', phonetic: 'টেবিল', pos: 'noun', category: 'Objects' },
  { id: 19, word: 'House', bn: 'বাড়ি / ঘর', phonetic: 'হাউস', pos: 'noun', category: 'Places' },
  { id: 20, word: 'School', bn: 'বিদ্যালয় / স্কুল', phonetic: 'স্কুল', pos: 'noun', category: 'Places' },
  // Verbs & Actions
  { id: 21, word: 'Eat', bn: 'খাওয়া', phonetic: 'ইট', pos: 'verb', category: 'Actions' },
  { id: 22, word: 'Drink', bn: 'পান করা', phonetic: 'ড্রিংক', pos: 'verb', category: 'Actions' },
  { id: 23, word: 'Read', bn: 'পড়া', phonetic: 'রিড', pos: 'verb', category: 'Actions' },
  { id: 24, word: 'Write', bn: 'লেখা', phonetic: 'রাইট', pos: 'verb', category: 'Actions' },
  { id: 25, word: 'Sleep', bn: 'ঘুমানো', phonetic: 'স্লিপ', pos: 'verb', category: 'Actions' },
  { id: 26, word: 'Walk', bn: 'হাঁটা', phonetic: 'ওয়াক', pos: 'verb', category: 'Actions' },
  { id: 27, word: 'Speak', bn: 'কথা বলা', phonetic: 'স্পিক', pos: 'verb', category: 'Actions' },
  { id: 28, word: 'Listen', bn: 'শোনা', phonetic: 'লিসেন', pos: 'verb', category: 'Actions' },
  { id: 29, word: 'Learn', bn: 'শেখা', phonetic: 'লার্ন', pos: 'verb', category: 'Actions' },
  { id: 30, word: 'Understand', bn: 'বুঝতে পারা', phonetic: 'আন্ডারস্ট্যান্ড', pos: 'verb', category: 'Actions' },
  // Office & Professional
  { id: 31, word: 'Meeting', bn: 'সভা / মিটিং', phonetic: 'মিটিং', pos: 'noun', category: 'Workplace' },
  { id: 32, word: 'Project', bn: 'প্রকল্প', phonetic: 'প্রজেক্ট', pos: 'noun', category: 'Workplace' },
  { id: 33, word: 'Manager', bn: 'ব্যবস্থাপক', phonetic: 'ম্যানেজার', pos: 'noun', category: 'Workplace' },
  { id: 34, word: 'Opportunity', bn: 'সুযোগ', phonetic: 'অপরচুনিটি', pos: 'noun', category: 'Workplace' },
  { id: 35, word: 'Success', bn: 'সাফল্য', phonetic: 'সাকসেস', pos: 'noun', category: 'General' },
  { id: 36, word: 'Experience', bn: 'অভিজ্ঞতা', phonetic: 'এক্সপেরিয়েন্স', pos: 'noun', category: 'Workplace' },
  { id: 37, word: 'Schedule', bn: 'সময়সূচী', phonetic: 'শিডিউল', pos: 'noun', category: 'Workplace' },
  { id: 38, word: 'Deadline', bn: 'সর্বশেষ সময়সীমা', phonetic: 'ডেডলাইন', pos: 'noun', category: 'Workplace' }
];

// Real word bank: "english=বাংলা" separated by | (no fake/placeholder words)
const WORD_BANK_RAW = {
  Actions: 'go=যাওয়া|come=আসা|see=দেখা|look=তাকানো|give=দেওয়া|take=নেওয়া|make=বানানো|do=করা|say=বলা|tell=জানানো|ask=জিজ্ঞাসা করা|answer=উত্তর দেওয়া|think=ভাবা|know=জানা|want=চাওয়া|need=দরকার হওয়া|like=পছন্দ করা|love=ভালোবাসা|help=সাহায্য করা|work=কাজ করা|play=খেলা|run=দৌড়ানো|sit=বসা|stand=দাঁড়ানো|open=খোলা|close=বন্ধ করা|buy=কেনা|sell=বিক্রি করা|pay=টাকা দেওয়া|wait=অপেক্ষা করা|call=ডাকা / ফোন করা|send=পাঠানো|bring=আনা|cook=রান্না করা|wash=ধোয়া|clean=পরিষ্কার করা|wear=পরা|wake=জাগা|start=শুরু করা|stop=থামা|finish=শেষ করা|try=চেষ্টা করা|use=ব্যবহার করা|find=খুঁজে পাওয়া|lose=হারানো|keep=রাখা|meet=দেখা করা|remember=মনে রাখা|forget=ভুলে যাওয়া|believe=বিশ্বাস করা|laugh=হাসা|cry=কাঁদা|sing=গান গাওয়া|dance=নাচা|drive=গাড়ি চালানো|travel=ভ্রমণ করা|visit=ঘুরে দেখা|live=বাস করা|teach=শেখানো|study=পড়াশোনা করা|swim=সাঁতার কাটা|jump=লাফানো|fall=পড়ে যাওয়া|push=ঠেলা|pull=টানা|break=ভাঙা|build=তৈরি করা|change=বদলানো|choose=বেছে নেওয়া|decide=সিদ্ধান্ত নেওয়া|agree=একমত হওয়া|explain=ব্যাখ্যা করা|share=ভাগ করা|join=যোগ দেওয়া|win=জেতা|enjoy=উপভোগ করা|hope=আশা করা|worry=দুশ্চিন্তা করা|borrow=ধার নেওয়া|lend=ধার দেওয়া|apply=আবেদন করা',
  Body: 'head=মাথা|face=মুখ|eye=চোখ|ear=কান|nose=নাক|mouth=মুখগহ্বর|tooth=দাঁত|hair=চুল|hand=হাত|finger=আঙুল|arm=বাহু|leg=পা|foot=পায়ের পাতা|heart=হৃদয়|stomach=পেট|back=পিঠ|neck=গলা|shoulder=কাঁধ|skin=ত্বক|blood=রক্ত|knee=হাঁটু|bone=হাড়|fever=জ্বর|pain=ব্যথা|cough=কাশি|headache=মাথাব্যথা|medicine=ওষুধ|doctor=ডাক্তার',
  Time: 'today=আজ|tomorrow=আগামীকাল|yesterday=গতকাল|now=এখন|morning=সকাল|afternoon=বিকাল|evening=সন্ধ্যা|night=রাত|day=দিন|week=সপ্তাহ|month=মাস|year=বছর|hour=ঘণ্টা|minute=মিনিট|always=সবসময়|never=কখনো না|sometimes=মাঝে মাঝে|early=তাড়াতাড়ি|late=দেরি|soon=শীঘ্রই|Monday=সোমবার|Tuesday=মঙ্গলবার|Wednesday=বুধবার|Thursday=বৃহস্পতিবার|Friday=শুক্রবার|Saturday=শনিবার|Sunday=রবিবার|one=এক|two=দুই|three=তিন|four=চার|five=পাঁচ|six=ছয়|seven=সাত|eight=আট|nine=নয়|ten=দশ|twenty=কুড়ি|hundred=একশো|thousand=হাজার|first=প্রথম',
  Adjectives: 'big=বড়|small=ছোট|long=লম্বা|short=খাটো|tall=উঁচু|hot=গরম|cold=ঠান্ডা|new=নতুন|old=পুরনো|good=ভালো|bad=খারাপ|happy=খুশি|sad=দুঃখিত|angry=রাগান্বিত|tired=ক্লান্ত|hungry=ক্ষুধার্ত|thirsty=তৃষ্ণার্ত|easy=সহজ|difficult=কঠিন|fast=দ্রুত|slow=ধীর|heavy=ভারী|light=হালকা|dirty=নোংরা|rich=ধনী|poor=গরিব|young=তরুণ|beautiful=সুন্দর|strong=শক্তিশালী|weak=দুর্বল|kind=দয়ালু|brave=সাহসী|clever=চালাক|lazy=অলস|quiet=শান্ত|loud=জোরালো|sweet=মিষ্টি|sour=টক|bitter=তেতো|spicy=ঝাল|fresh=তাজা|empty=খালি|full=পূর্ণ|safe=নিরাপদ|dangerous=বিপজ্জনক|busy=ব্যস্ত|ready=প্রস্তুত|true=সত্য|false=মিথ্যা|wrong=ভুল|right=সঠিক|same=একই|different=আলাদা|important=গুরুত্বপূর্ণ|possible=সম্ভব|careful=সতর্ক|sick=অসুস্থ|healthy=সুস্থ|wet=ভেজা|dry=শুকনো|dark=অন্ধকার|bright=উজ্জ্বল|red=লাল|blue=নীল|green=সবুজ|yellow=হলুদ|black=কালো|white=সাদা|orange=কমলা|pink=গোলাপি|brown=বাদামি',
  Food: 'milk=দুধ|tea=চা|coffee=কফি|egg=ডিম|fish=মাছ|meat=মাংস|chicken=মুরগি|vegetable=সবজি|fruit=ফল|potato=আলু|onion=পেঁয়াজ|tomato=টমেটো|garlic=রসুন|ginger=আদা|chili=কাঁচা মরিচ|salt=লবণ|sugar=চিনি|oil=তেল|butter=মাখন|banana=কলা|mango=আম|lemon=লেবু|grape=আঙুর|lentil=ডাল|soup=স্যুপ|breakfast=সকালের নাস্তা|lunch=দুপুরের খাবার|dinner=রাতের খাবার|snack=হালকা খাবার|cake=কেক|biscuit=বিস্কুট|juice=রস|spoon=চামচ|fork=কাঁটাচামচ|knife=ছুরি|plate=থালা|glass=গ্লাস|cup=কাপ|bowl=বাটি|delicious=সুস্বাদু|menu=মেনু|bill=বিল',
  Home: 'door=দরজা|window=জানালা|room=কক্ষ|kitchen=রান্নাঘর|bathroom=বাথরুম|bed=বিছানা|roof=ছাদ|wall=দেয়াল|floor=মেঝে|key=চাবি|lamp=বাতি|fan=পাখা|clock=ঘড়ি|phone=ফোন|computer=কম্পিউটার|television=টেলিভিশন|bag=ব্যাগ|umbrella=ছাতা|shoes=জুতা|shirt=শার্ট|pants=প্যান্ট|dress=জামা|hat=টুপি|glasses=চশমা|mirror=আয়না|soap=সাবান|towel=তোয়ালে|blanket=কম্বল|pillow=বালিশ|paper=কাগজ|pencil=পেন্সিল|notebook=খাতা|money=টাকা / অর্থ|box=বাক্স|picture=ছবি|camera=ক্যামেরা|gift=উপহার',
  Travel: 'city=শহর|village=গ্রাম|country=দেশ|road=রাস্তা|market=বাজার|shop=দোকান|hospital=হাসপাতাল|bank=ব্যাংক|mosque=মসজিদ|temple=মন্দির|park=পার্ক|river=নদী|bridge=সেতু|airport=বিমানবন্দর|station=স্টেশন|bus=বাস|train=ট্রেন|car=গাড়ি|bicycle=সাইকেল|rickshaw=রিকশা|boat=নৌকা|plane=বিমান|ticket=টিকিট|passport=পাসপোর্ট|hotel=হোটেল|restaurant=রেস্তোরাঁ|library=গ্রন্থাগার|field=মাঠ|map=মানচিত্র|straight=সোজা|near=কাছে|far=দূরে|here=এখানে|there=সেখানে|up=উপরে|down=নিচে|inside=ভিতরে|outside=বাইরে|between=মাঝখানে',
  Nature: 'sun=সূর্য|moon=চাঁদ|star=তারা|sky=আকাশ|cloud=মেঘ|rain=বৃষ্টি|wind=বাতাস|storm=ঝড়|flood=বন্যা|tree=গাছ|flower=ফুল|leaf=পাতা|grass=ঘাস|mountain=পাহাড়|sea=সমুদ্র|lake=হ্রদ|forest=বন|earth=পৃথিবী|fire=আগুন|summer=গ্রীষ্ম|winter=শীত|spring=বসন্ত|weather=আবহাওয়া|dog=কুকুর|cat=বিড়াল|cow=গরু|goat=ছাগল|horse=ঘোড়া|bird=পাখি|tiger=বাঘ|elephant=হাতি|monkey=বাঁদর|snake=সাপ|mosquito=মশা|butterfly=প্রজাপতি|duck=হাঁস',
  Workplace: 'teacher=শিক্ষক|student=শিক্ষার্থী|class=ক্লাস|exam=পরীক্ষা|lesson=পাঠ|homework=বাড়ির কাজ|language=ভাষা|word=শব্দ|sentence=বাক্য|job=চাকরি|salary=বেতন|company=প্রতিষ্ঠান|team=দল|boss=বস|customer=গ্রাহক|email=ইমেইল|report=প্রতিবেদন|document=নথি|price=দাম|office=অফিস|interview=সাক্ষাৎকার|engineer=প্রকৌশলী|farmer=কৃষক|driver=চালক|police=পুলিশ|lawyer=আইনজীবী|shopkeeper=দোকানদার|worker=শ্রমিক|nurse=নার্স',
  Phrases: 'Please=দয়া করে|Sorry=দুঃখিত|Excuse me=মাফ করবেন|Yes=হ্যাঁ|No=না|Good night=শুভ রাত্রি|Goodbye=বিদায়|How are you=আপনি কেমন আছেন?|I am fine=আমি ভালো আছি|What is your name=আপনার নাম কী?|My name is=আমার নাম…|Nice to meet you=আপনার সাথে দেখা হয়ে ভালো লাগল|I do not understand=আমি বুঝতে পারছি না|Say it again=আবার বলুন|Speak slowly=ধীরে বলুন|How much is this=এটার দাম কত?|Where is the toilet=টয়লেট কোথায়?|What time is it=কয়টা বাজে?|Help me=আমাকে সাহায্য করুন|Congratulations=অভিনন্দন|Good luck=শুভকামনা|No problem=সমস্যা নেই|I agree=আমি একমত|Take care=নিজের যত্ন নিন|See you later=পরে দেখা হবে|What is this=এটা কী?|Can you help me=আপনি কি আমাকে সাহায্য করতে পারবেন?|Where do you live=আপনি কোথায় থাকেন?|I am from Bangladesh=আমি বাংলাদেশ থেকে এসেছি',
  Grammar: 'I=আমি|you=তুমি / আপনি|he=সে (পুরুষ)|she=সে (মহিলা)|it=এটা|we=আমরা|they=তারা|my=আমার|your=তোমার|this=এই|that=ওই|what=কী|where=কোথায়|when=কখন|why=কেন|who=কে|how=কীভাবে|which=কোনটি|and=এবং|but=কিন্তু|or=অথবা|because=কারণ|if=যদি|with=সাথে|without=ছাড়া|for=জন্য|from=থেকে|very=খুব|also=ও|not=না|can=পারা|will=করবে|must=অবশ্যই|many=অনেক|few=অল্প|all=সব|some=কিছু|more=আরও|only=শুধু',
  Family: 'grandfather=দাদা / নানা|grandmother=দাদি / নানি|uncle=চাচা / মামা|aunt=চাচি / খালা|son=ছেলে (সন্তান)|daughter=মেয়ে (সন্তান)|husband=স্বামী|wife=স্ত্রী|baby=শিশু|child=সন্তান|boy=বালক|girl=বালিকা|man=পুরুষ|woman=নারী|neighbor=প্রতিবেশী|guest=অতিথি|parents=বাবা-মা|relative=আত্মীয়|people=মানুষ|name=নাম|age=বয়স',
  Feelings: 'afraid=ভীত|surprised=অবাক|proud=গর্বিত|lonely=একাকী|nervous=নার্ভাস|excited=উত্তেজিত|worried=চিন্তিত|confused=বিভ্রান্ত|shy=লাজুক|jealous=ঈর্ষান্বিত|grateful=কৃতজ্ঞ|bored=বিরক্ত|calm=শান্ত মনের|polite=বিনয়ী|honest=সৎ|generous=উদার|patient=ধৈর্যশীল|serious=গম্ভীর|funny=মজার|friendly=বন্ধুসুলভ|famous=বিখ্যাত|smart=বুদ্ধিমান|selfish=স্বার্থপর|lucky=ভাগ্যবান',
  Money: 'cheap=সস্তা|expensive=দামি|discount=ছাড়|receipt=রসিদ|cash=নগদ টাকা|card=কার্ড|coin=মুদ্রা|size=মাপ|color=রং|quality=মান|order=অর্ডার|delivery=ডেলিভারি|account=হিসাব|loan=ঋণ|tax=কর|profit=লাভ|loss=ক্ষতি|cost=খরচ|budget=বাজেট|save=সঞ্চয় করা|spend=খরচ করা|earn=আয় করা|rent=ভাড়া|shopping=কেনাকাটা|bargain=দরদাম করা|wallet=মানিব্যাগ',
  Actions_2: 'arrive=পৌঁছানো|leave=ছেড়ে যাওয়া|return=ফিরে আসা|enter=প্রবেশ করা|follow=অনুসরণ করা|catch=ধরা|throw=ছোড়া|hold=ধরে রাখা|cut=কাটা|fill=ভরা|pour=ঢালা|mix=মেশানো|boil=ফোটানো|fry=ভাজা|bake=সেঁকা|taste=স্বাদ নেওয়া|smell=গন্ধ পাওয়া|touch=ছোঁয়া|hear=শুনতে পাওয়া|shout=চিৎকার করা|whisper=ফিসফিস করা|hug=আলিঙ্গন করা|hide=লুকানো|show=দেখানো|count=গোনা|measure=মাপা|compare=তুলনা করা|check=যাচাই করা|fix=মেরামত করা|grow=বড় হওয়া|protect=রক্ষা করা|accept=গ্রহণ করা|refuse=প্রত্যাখ্যান করা|allow=অনুমতি দেওয়া|invite=আমন্ত্রণ জানানো|celebrate=উদযাপন করা|prepare=প্রস্তুত করা|practice=অনুশীলন করা|improve=উন্নতি করা|solve=সমাধান করা|manage=পরিচালনা করা|create=সৃষ্টি করা|collect=সংগ্রহ করা|rest=বিশ্রাম নেওয়া|relax=আরাম করা|brush=ব্রাশ করা',
  Workplace_2: 'colleague=সহকর্মী|department=বিভাগ|presentation=উপস্থাপনা|proposal=প্রস্তাবনা|contract=চুক্তি|client=ক্লায়েন্ট|goal=লক্ষ্য|plan=পরিকল্পনা|task=কাজ (দায়িত্ব)|result=ফলাফল|problem=সমস্যা|solution=সমাধান|idea=ধারণা|skill=দক্ষতা|training=প্রশিক্ষণ|promotion=পদোন্নতি|resign=পদত্যাগ করা|hire=নিয়োগ দেওয়া|candidate=প্রার্থী|vacancy=শূন্যপদ|resume=জীবনবৃত্তান্ত|reply=উত্তর দেওয়া|attach=সংযুক্ত করা|regards=শুভেচ্ছা|approve=অনুমোদন করা|request=অনুরোধ|urgent=জরুরি|available=উপলব্ধ|responsible=দায়িত্বশীল|professional=পেশাদার|confident=আত্মবিশ্বাসী|reliable=নির্ভরযোগ্য|feedback=মতামত|progress=অগ্রগতি',
  Life: 'life=জীবন|world=বিশ্ব|time=সময়|place=জায়গা|thing=জিনিস|way=পথ / উপায়|reason=কারণ|question=প্রশ্ন|story=গল্প|news=খবর|music=সংগীত|movie=চলচ্চিত্র|game=খেলা|sport=ক্রীড়া|football=ফুটবল|cricket=ক্রিকেট|party=অনুষ্ঠান|festival=উৎসব|holiday=ছুটি|birthday=জন্মদিন|wedding=বিয়ে|dream=স্বপ্ন|secret=গোপন কথা|luck=ভাগ্য|peace=শান্তি|war=যুদ্ধ|law=আইন|rule=নিয়ম|freedom=স্বাধীনতা|religion=ধর্ম|history=ইতিহাস|science=বিজ্ঞান|math=গণিত|art=শিল্প|society=সমাজ|government=সরকার|election=নির্বাচন|uniform=ইউনিফর্ম|university=বিশ্ববিদ্যালয়|subject=বিষয়',
  Tech: 'internet=ইন্টারনেট|website=ওয়েবসাইট|password=পাসওয়ার্ড|message=বার্তা|video=ভিডিও|screen=পর্দা|battery=ব্যাটারি|charger=চার্জার|download=ডাউনলোড করা|online=অনলাইন|app=অ্যাপ|signal=সিগন্যাল',
  Grammar_2: 'well=ভালোভাবে|really=সত্যিই|maybe=হয়তো|usually=সাধারণত|often=প্রায়ই|already=ইতিমধ্যে|still=এখনও|again=আবার|together=একসাথে|almost=প্রায়|enough=যথেষ্ট|quite=বেশ|even=এমনকি|just=মাত্র|instead=বদলে|however=তবে|therefore=তাই|although=যদিও|until=পর্যন্ত|during=চলাকালীন|before=আগে|after=পরে|around=চারপাশে|behind=পিছনে|under=নিচে|above=উপরে|across=পেরিয়ে|through=মধ্য দিয়ে|against=বিরুদ্ধে|among=মধ্যে|beside=পাশে|toward=দিকে|every=প্রতিটি|each=প্রত্যেক|another=আরেকটি|other=অন্য|both=উভয়|none=কেউ না|anything=যেকোনো কিছু|nothing=কিছুই না|everything=সবকিছু|someone=কেউ|everyone=সবাই',
  Phrases_2: 'I am lost=আমি পথ হারিয়েছি|Call the police=পুলিশ ডাকুন|I need a doctor=আমার ডাক্তার দরকার|I am sick=আমি অসুস্থ|Where is the bus stop=বাস স্টপ কোথায়?|How far is it=এটা কত দূরে?|I want to go to the airport=আমি বিমানবন্দরে যেতে চাই|Do you speak English=আপনি কি ইংরেজি বলতে পারেন?|I speak a little English=আমি অল্প ইংরেজি বলতে পারি|What does this mean=এর মানে কী?|How do you say this in English=এটা ইংরেজিতে কীভাবে বলে?|Can I have the menu=আমি কি মেনুটা পেতে পারি?|I would like some water=আমি একটু পানি চাই|The bill please=বিলটা দিন, দয়া করে|It is delicious=এটা সুস্বাদু|Can I try this=আমি কি এটা চেষ্টা করে দেখতে পারি?|Do you have a smaller size=আপনার কাছে কি ছোট সাইজ আছে?|Can you give a discount=একটু ছাড় দেওয়া যাবে?|I will take it=আমি এটা নেব|Just a moment=এক মুহূর্ত|Of course=অবশ্যই|I think so=আমার তাই মনে হয়|I am not sure=আমি নিশ্চিত নই|It does not matter=কিছু যায় আসে না|What happened=কী হয়েছে?|Be careful=সাবধান|Hurry up=তাড়াতাড়ি করুন|Come in=ভিতরে আসুন|Have a seat=বসুন|Welcome back=আবার স্বাগতম|Happy birthday=শুভ জন্মদিন|Best wishes=শুভেচ্ছা রইল|Thank you very much=অনেক ধন্যবাদ|You are welcome=কিছু না / আপনাকেও স্বাগতম|I miss you=আমি তোমাকে মিস করি|Good job=চমৎকার কাজ|Cheer up=মন খারাপ করো না',
  Idioms: 'Piece of cake=অতি সহজ কাজ|Break a leg=শুভকামনা (অনুষ্ঠানের আগে)|Hit the books=মন দিয়ে পড়তে বসা|Under the weather=শরীর ভালো না|Once in a blue moon=কালেভদ্রে|Spill the beans=গোপন কথা ফাঁস করা|Cost an arm and a leg=অনেক দামি|Call it a day=আজকের মতো কাজ শেষ করা|Better late than never=না হওয়ার চেয়ে দেরিতে হওয়া ভালো|Actions speak louder than words=কথার চেয়ে কাজ বড়|Easier said than done=বলা সহজ, করা কঠিন|Time is money=সময়ই টাকা|Practice makes perfect=অনুশীলনেই দক্ষতা|Look on the bright side=ভালো দিকটা দেখো|Keep in touch=যোগাযোগ রেখো|The ball is in your court=এখন সিদ্ধান্ত আপনার',
  Clothes: 'jacket=জ্যাকেট|sweater=সোয়েটার|socks=মোজা|scarf=স্কার্ফ|belt=বেল্ট|saree=শাড়ি|lungi=লুঙ্গি|sandals=স্যান্ডেল|pocket=পকেট|button=বোতাম|zipper=জিপার|cotton=সুতি কাপড়|silk=রেশম|gloves=দস্তানা|tie=টাই|suit=স্যুট|necklace=হার|watch=হাতঘড়ি|bracelet=বালা',
  Home_2: 'sofa=সোফা|cupboard=আলমারি|shelf=তাক|curtain=পর্দা|carpet=কার্পেট|stairs=সিঁড়ি|balcony=বারান্দা|garden=বাগান|gate=ফটক|yard=উঠোন|bucket=বালতি|pot=হাঁড়ি|pan=কড়াই|kettle=কেটলি|stove=চুলা|refrigerator=ফ্রিজ|oven=ওভেন|broom=ঝাড়ু|rope=দড়ি|ladder=মই|hammer=হাতুড়ি|nail=পেরেক|scissors=কাঁচি|needle=সুই|candle=মোমবাতি|match=দেশলাই|toilet=টয়লেট|tap=কল|bulb=বাল্ব|electricity=বিদ্যুৎ|gas=গ্যাস',
  Workplace_3: 'pilot=পাইলট|singer=গায়ক|artist=শিল্পী|writer=লেখক|actor=অভিনেতা|journalist=সাংবাদিক|accountant=হিসাবরক্ষক|dentist=দন্তচিকিৎসক|pharmacist=ঔষধবিক্রেতা|mechanic=মিস্ত্রি|electrician=ইলেকট্রিশিয়ান|tailor=দর্জি|barber=নাপিত|guard=প্রহরী|soldier=সৈনিক|judge=বিচারক|scientist=বিজ্ঞানী|businessman=ব্যবসায়ী|fisherman=জেলে|carpenter=কাঠমিস্ত্রি|waiter=ওয়েটার|clerk=কেরানি|president=রাষ্ট্রপতি|minister=মন্ত্রী|citizen=নাগরিক|volunteer=স্বেচ্ছাসেবক',
  Travel_2: 'pharmacy=ফার্মেসি|post office=ডাকঘর|police station=থানা|court=আদালত|factory=কারখানা|stadium=স্টেডিয়াম|cinema=সিনেমা হল|museum=জাদুঘর|playground=খেলার মাঠ|bakery=বেকারি|supermarket=সুপারমার্কেট|bus stop=বাস স্টপ|traffic=যানজট|corner=মোড়|address=ঠিকানা|neighborhood=পাড়া|island=দ্বীপ|beach=সমুদ্রসৈকত|desert=মরুভূমি|waterfall=জলপ্রপাত|capital=রাজধানী|border=সীমান্ত',
  Nature_2: 'rabbit=খরগোশ|deer=হরিণ|lion=সিংহ|bear=ভালুক|fox=শিয়াল|wolf=নেকড়ে|rat=ইঁদুর|frog=ব্যাঙ|fly=মাছি|ant=পিঁপড়া|bee=মৌমাছি|spider=মাকড়সা|crow=কাক|parrot=টিয়া|eagle=ঈগল|owl=পেঁচা|sparrow=চড়ুই|peacock=ময়ূর|crocodile=কুমির|turtle=কচ্ছপ|whale=তিমি|wing=ডানা|tail=লেজ|nest=বাসা|seed=বীজ|root=শিকড়|branch=ডাল|rose=গোলাপ|lotus=পদ্ম|jasmine=বেলি ফুল|sand=বালি|stone=পাথর|soil=মাটি|rainbow=রামধনু|thunder=বজ্র|lightning=বিদ্যুৎচমক|fog=কুয়াশা|heat=তাপ|earthquake=ভূমিকম্প|wave=ঢেউ',
  Actions_3: 'bite=কামড়ানো|burn=পোড়ানো|chase=তাড়া করা|cheat=ঠকানো|copy=নকল করা|dig=খোঁড়া|dive=ডুব দেওয়া|escape=পালানো|fight=ঝগড়া করা|float=ভাসা|freeze=জমে যাওয়া|guess=অনুমান করা|hurt=আঘাত করা|kick=লাথি মারা|knock=কড়া নাড়া|lie=মিথ্যা বলা|marry=বিয়ে করা|melt=গলে যাওয়া|notice=লক্ষ করা|obey=মান্য করা|offer=প্রস্তাব দেওয়া|own=মালিক হওয়া|pack=গুছিয়ে নেওয়া|park=গাড়ি রাখা|pick=তোলা|promise=প্রতিশ্রুতি দেওয়া|punish=শাস্তি দেওয়া|repair=মেরামত করা|scold=বকা দেওয়া|search=খোঁজা|shake=ঝাঁকানো|shine=জ্বলজ্বল করা|slip=পিছলে যাওয়া|smoke=ধূমপান করা|sneeze=হাঁচি দেওয়া|spell=বানান করা|steal=চুরি করা|stir=নাড়া|suffer=কষ্ট পাওয়া|swallow=গেলা|trust=ভরসা করা|turn=ঘোরা|warn=সতর্ক করা|weigh=ওজন করা|wish=ইচ্ছা করা|wrap=মোড়ানো|yawn=হাই তোলা|bend=বাঁকানো',
  Adjectives_3: 'ancient=প্রাচীন|modern=আধুনিক|local=স্থানীয়|foreign=বিদেশি|public=সর্বজনীন|private=ব্যক্তিগত|common=সাধারণ|special=বিশেষ|normal=স্বাভাবিক|natural=প্রাকৃতিক|simple=সরল|clear=স্পষ্ট|correct=শুদ্ধ|perfect=নিখুঁত|total=মোট|final=চূড়ান্ত|main=প্রধান|real=আসল|silent=নীরব|smooth=মসৃণ|rough=অমসৃণ|sharp=ধারালো|flat=সমতল|round=গোল|narrow=সরু|loose=ঢিলা|tight=আঁটসাঁট|soft=নরম|hard=শক্ত|rare=বিরল|valuable=মূল্যবান|useful=উপকারী|useless=অকেজো|harmful=ক্ষতিকর|equal=সমান|certain=নিশ্চিত|foolish=বোকা|gentle=কোমল|rude=অভদ্র|cruel=নিষ্ঠুর|innocent=নির্দোষ|guilty=দোষী|alive=জীবিত|dead=মৃত|awake=জাগ্রত|asleep=ঘুমন্ত',
  Verbs: 'went=গিয়েছিল|came=এসেছিল|saw=দেখেছিল|ate=খেয়েছিল|drank=পান করেছিল|wrote=লিখেছিল|took=নিয়েছিল|gave=দিয়েছিল|made=বানিয়েছিল|said=বলেছিল|told=জানিয়েছিল|knew=জানত|thought=ভেবেছিল|bought=কিনেছিল|sold=বিক্রি করেছিল|ran=দৌড়েছিল|sat=বসেছিল|stood=দাঁড়িয়েছিল|slept=ঘুমিয়েছিল|woke=জেগেছিল|met=দেখা করেছিল|found=খুঁজে পেয়েছিল|lost=হারিয়েছিল|began=শুরু করেছিল|brought=এনেছিল|sent=পাঠিয়েছিল|spoke=কথা বলেছিল|heard=শুনেছিল|felt=অনুভব করেছিল|paid=টাকা দিয়েছিল|won=জিতেছিল|did=করেছিল|was=ছিল (একবচন)|were=ছিল (বহুবচন)|had=ছিল / ছিল আছে|been=হয়েছে|gone=গেছে|eaten=খাওয়া হয়েছে|seen=দেখা হয়েছে|written=লেখা হয়েছে',
  Phrases_3: 'I want to=আমি চাই…|I like to=আমি পছন্দ করি…|I have to=আমাকে করতে হবে|I am going to=আমি করতে যাচ্ছি|I cannot=আমি পারি না|I did not=আমি করিনি|Did you=তুমি কি করেছিলে?|Will you=তুমি কি করবে?|There is=আছে (একবচন)|There are=আছে (বহুবচন)|Let me=আমাকে করতে দিন|Let us=চলুন আমরা|Would you like=আপনি কি চান?|Could you=আপনি কি করতে পারেন?|May I=আমি কি পারি?|I used to=আমি আগে করতাম|It is time to=এখন … করার সময়|How about=…কেমন হয়?|What about=…সম্পর্কে কী?|I feel like=আমার ইচ্ছে করছে|I look forward to=আমি অপেক্ষায় আছি|As soon as possible=যত দ্রুত সম্ভব|In my opinion=আমার মতে|For example=যেমন|In fact=আসলে|By the way=প্রসঙ্গত|At the moment=এই মুহূর্তে|On time=সময়মতো|In the end=শেষে|First of all=প্রথমত',
  Life_2: 'distance=দূরত্ব|speed=গতি|weight=ওজন|height=উচ্চতা|shape=আকার|line=রেখা|circle=বৃত্ত|top=চূড়া|bottom=তলদেশ|side=পাশ|center=কেন্দ্র|edge=কিনারা|part=অংশ|half=অর্ধেক|group=দল|list=তালিকা|page=পৃষ্ঠা|letter=চিঠি|number=সংখ্যা|noise=আওয়াজ|shadow=ছায়া|dust=ধুলো|mud=কাদা|garbage=আবর্জনা|accident=দুর্ঘটনা|emergency=জরুরি অবস্থা|danger=বিপদ|exercise=ব্যায়াম|ambulance=অ্যাম্বুলেন্স|appointment=অ্যাপয়েন্টমেন্ট|prescription=প্রেসক্রিপশন|tablet=ট্যাবলেট|injection=ইনজেকশন|surgery=অস্ত্রোপচার|disease=রোগ|virus=ভাইরাস|vaccine=টিকা|allergy=অ্যালার্জি|pressure=চাপ|stress=মানসিক চাপ|habit=অভ্যাস|attitude=মনোভাব|choice=পছন্দ|chance=সম্ভাবনা|risk=ঝুঁকি|failure=ব্যর্থতা|effort=প্রচেষ্টা|courage=সাহস|fear=ভয়|anger=রাগ|joy=আনন্দ|sorrow=দুঃখ|friendship=বন্ধুত্ব|respect=সম্মান|duty=কর্তব্য|knowledge=জ্ঞান|wisdom=প্রজ্ঞা|memory=স্মৃতি|future=ভবিষ্যৎ|past=অতীত|present=বর্তমান|moment=মুহূর্ত|century=শতাব্দী|season=ঋতু|date=তারিখ|calendar=ক্যালেন্ডার',
  Phrasal: 'give up=হাল ছেড়ে দেওয়া|look for=খোঁজা|look after=দেখাশোনা করা|turn on=চালু করা|turn off=বন্ধ করা|get up=ঘুম থেকে ওঠা|sit down=বসে পড়া|stand up=উঠে দাঁড়ানো|come back=ফিরে আসা|go out=বাইরে যাওয়া|pick up=তুলে নেওয়া|put on=পরা|take off=খুলে ফেলা|find out=জানতে পারা|wake up=ঘুম থেকে জাগা|fill in=পূরণ করা|run out of=ফুরিয়ে যাওয়া|get along with=মিলেমিশে চলা|carry on=চালিয়ে যাওয়া|set up=প্রতিষ্ঠা করা|figure out=বুঝে ফেলা|break down=নষ্ট হয়ে যাওয়া|call off=বাতিল করা|check in=নিবন্ধন করা|check out=বের হওয়া|hang out=আড্ডা দেওয়া|show up=হাজির হওয়া|try on=পরে দেখা|work out=ব্যায়াম করা|give back=ফেরত দেওয়া|throw away=ফেলে দেওয়া|calm down=শান্ত হওয়া|slow down=গতি কমানো|speed up=গতি বাড়ানো',
  Grammar_3: 'moreover=তাছাড়া|meanwhile=ইতিমধ্যে|otherwise=অন্যথায়|besides=এছাড়াও|finally=অবশেষে|suddenly=হঠাৎ|luckily=ভাগ্যক্রমে|unfortunately=দুর্ভাগ্যবশত|actually=আসলে|probably=সম্ভবত|certainly=নিশ্চয়ই|especially=বিশেষ করে|exactly=ঠিক তাই|completely=সম্পূর্ণভাবে|carefully=সাবধানে|quickly=তাড়াতাড়ি|slowly=ধীরে|easily=সহজে|hardly=কদাচিৎ|nearly=প্রায়|recently=সম্প্রতি|immediately=সঙ্গে সঙ্গে|forever=চিরকাল|anymore=আর (না)|anywhere=যেকোনো জায়গায়|somewhere=কোথাও|nowhere=কোথাও না|whenever=যখনই|whatever=যাই হোক|whether=কিনা|unless=যদি না|since=যেহেতু / থেকে|while=যখন|than=চেয়ে|so=তাই|then=তারপর|either=যেকোনো একটি|neither=কোনোটিই না',
  Travel_3: 'newspaper=সংবাদপত্র|magazine=ম্যাগাজিন|headline=শিরোনাম|advertisement=বিজ্ঞাপন|luggage=মালপত্র|suitcase=সুটকেস|route=পথ|journey=যাত্রা|tour=ভ্রমণ|tourist=পর্যটক|guide=গাইড|souvenir=স্মারক|reservation=বুকিং|refund=ফেরত|complaint=অভিযোগ|service=সেবা|tip=বখশিশ',
  Food_2: 'appetite=ক্ষুধা|recipe=রান্নার পদ্ধতি|ingredient=উপাদান|flavor=স্বাদ|dessert=মিষ্টান্ন|beverage=পানীয়|vegetarian=নিরামিষভোজী|noodles=নুডলস|sandwich=স্যান্ডউইচ|pizza=পিৎজা|burger=বার্গার|ice cream=আইসক্রিম|chocolate=চকলেট|honey=মধু|pepper=মরিচ|spice=মশলা|curry=তরকারি|yogurt=দই|sweets=মিষ্টি',
};

const generateFullWordBank = () => {
  const POS_BY_CAT = { Actions: 'verb', Adjectives: 'adjective', Feelings: 'adjective', Phrases: 'phrase', Verbs: 'verb', Phrasal: 'phrasal verb', Idioms: 'idiom', Grammar: 'grammar' };
  const seen = new Set(BASE_DICTIONARY.map(w => w.word.toLowerCase()));
  const list = [...BASE_DICTIONARY];
  let id = list.length + 1;
  Object.entries(WORD_BANK_RAW).forEach(([key0, raw]) => {
    const category = key0.split('_')[0];
    raw.split('|').forEach(entry => {
      const [word, bn] = entry.split('=');
      const key = word.trim().toLowerCase();
      if (!word || !bn || seen.has(key)) return;
      seen.add(key);
      list.push({ id: id++, word: word.trim(), bn: bn.trim(), phonetic: '', pos: POS_BY_CAT[category] || 'noun', category });
    });
  });
  return list;
};

const ALL_WORDS_DATABASE = generateFullWordBank();
const ALL_CATEGORIES = Array.from(new Set(ALL_WORDS_DATABASE.map(w => w.category)));


// ==========================================
// 3. CURRICULUM MODULES & LESSONS DATA
// ==========================================
// ==========================================
// SENTENCE BANK: category|English|বাংলা
// ==========================================
const SENTENCE_RAW = `Greetings|How have you been?|আপনি কেমন ছিলেন?
Greetings|It is nice to see you again.|আবার দেখা হয়ে ভালো লাগল।
Greetings|Let me introduce myself.|আমাকে নিজের পরিচয় দিতে দিন।
Greetings|I am glad to meet you.|আপনার সাথে পরিচিত হয়ে খুশি।
Greetings|Thank you for your help.|আপনার সাহায্যের জন্য ধন্যবাদ।
Greetings|I am sorry for being late.|দেরি করার জন্য দুঃখিত।
Greetings|Have a nice day.|আপনার দিনটি শুভ হোক।
Daily|I usually wake up at six.|আমি সাধারণত ছয়টায় উঠি।
Daily|I have breakfast at eight.|আমি আটটায় সকালের নাস্তা করি।
Daily|I go to work by bus.|আমি বাসে করে কাজে যাই।
Daily|I am watching TV right now.|আমি এখন টিভি দেখছি।
Daily|She is cooking dinner.|সে রাতের খাবার রান্না করছে।
Daily|We play football on Fridays.|আমরা শুক্রবারে ফুটবল খেলি।
Daily|I go to bed at eleven.|আমি এগারোটায় ঘুমাতে যাই।
Shopping|How much is this shirt?|এই শার্টটির দাম কত?
Shopping|It is too expensive for me.|এটা আমার জন্য অনেক দামি।
Shopping|Do you have this in a bigger size?|এটা কি বড় সাইজে আছে?
Shopping|Can I pay by card?|আমি কি কার্ডে টাকা দিতে পারি?
Shopping|Please give me a receipt.|দয়া করে আমাকে একটা রসিদ দিন।
Shopping|I am just looking, thank you.|আমি শুধু দেখছি, ধন্যবাদ।
Shopping|Could you give me a discount?|আপনি কি আমাকে ছাড় দিতে পারেন?
Travel|Which bus goes to the station?|কোন বাসটি স্টেশনে যায়?
Travel|How long does it take to get there?|সেখানে যেতে কতক্ষণ লাগে?
Travel|Please stop here.|দয়া করে এখানে থামুন।
Travel|I have lost my passport.|আমি আমার পাসপোর্ট হারিয়ে ফেলেছি।
Travel|Is this seat taken?|এই সিটটি কি খালি?
Travel|Turn left at the corner.|মোড়ে বামে ঘুরুন।
Travel|I would like to book a room.|আমি একটি রুম বুক করতে চাই।
Travel|What time does the train leave?|ট্রেন কয়টায় ছাড়ে?
Office|I would like to schedule a meeting.|আমি একটি মিটিং ঠিক করতে চাই।
Office|Could you send me the report?|আপনি কি আমাকে প্রতিবেদনটি পাঠাতে পারেন?
Office|I will get back to you soon.|আমি শীঘ্রই আপনাকে জানাব।
Office|The deadline is next Monday.|সময়সীমা আগামী সোমবার।
Office|I agree with your idea.|আমি আপনার ধারণার সাথে একমত।
Office|Let us discuss this tomorrow.|চলুন এটা আগামীকাল আলোচনা করি।
Office|I need more time to finish this.|এটা শেষ করতে আমার আরও সময় দরকার।
Office|Thank you for your valuable feedback.|আপনার মূল্যবান মতামতের জন্য ধন্যবাদ।
Health|I have a headache.|আমার মাথাব্যথা করছে।
Health|I need to see a doctor.|আমাকে ডাক্তার দেখাতে হবে।
Health|Take this medicine twice a day.|এই ওষুধ দিনে দুইবার খান।
Health|You should drink more water.|আপনার আরও পানি পান করা উচিত।
Health|I feel dizzy.|আমার মাথা ঘুরছে।
Health|Please call an ambulance.|দয়া করে অ্যাম্বুলেন্স ডাকুন।
Health|Get well soon.|তাড়াতাড়ি সুস্থ হয়ে উঠুন।
Opinions|In my opinion, this is a good plan.|আমার মতে, এটা ভালো পরিকল্পনা।
Opinions|I do not agree with you.|আমি আপনার সাথে একমত নই।
Opinions|That sounds interesting.|এটা শুনতে মজার লাগছে।
Opinions|I am not sure about that.|এ বিষয়ে আমি নিশ্চিত নই।
Opinions|It depends on the situation.|এটা পরিস্থিতির উপর নির্ভর করে।
Opinions|I hope everything goes well.|আশা করি সব ভালো হবে।
Opinions|I am proud of you.|আমি তোমার জন্য গর্বিত।
Family|My family is very close.|আমার পরিবার খুব ঘনিষ্ঠ।
Family|I live with my parents.|আমি বাবা-মায়ের সাথে থাকি।
Family|My brother is older than me.|আমার ভাই আমার চেয়ে বড়।
Family|She is my younger sister.|সে আমার ছোট বোন।
Family|We visit our grandparents every Friday.|আমরা প্রতি শুক্রবার দাদা-দাদির কাছে যাই।
Family|My mother cooks very well.|আমার মা খুব ভালো রান্না করেন।
Family|He has two children.|তার দুইটি সন্তান আছে।
Family|Do you have any brothers or sisters?|তোমার কি কোনো ভাইবোন আছে?
Family|My father works in a bank.|আমার বাবা ব্যাংকে কাজ করেন।
Family|We are having guests today.|আজ আমাদের বাড়িতে অতিথি আসছেন।
Food|I am very hungry.|আমি খুব ক্ষুধার্ত।
Food|What would you like to eat?|আপনি কী খেতে চান?
Food|The food is really tasty.|খাবারটা সত্যিই সুস্বাদু।
Food|Can I have some more rice?|আমি কি আরও একটু ভাত পেতে পারি?
Food|I do not eat spicy food.|আমি ঝাল খাবার খাই না।
Food|Please bring me a glass of water.|দয়া করে আমাকে এক গ্লাস পানি দিন।
Food|I am allergic to peanuts.|আমার চিনাবাদামে অ্যালার্জি আছে।
Food|Let us order something to eat.|চলুন খাওয়ার জন্য কিছু অর্ডার করি।
Food|I usually drink tea in the evening.|আমি সাধারণত সন্ধ্যায় চা খাই।
Food|This soup is too hot.|এই স্যুপটা অনেক গরম।
School|Open your books, please.|দয়া করে তোমাদের বই খোলো।
School|I did not understand the lesson.|আমি পাঠটি বুঝতে পারিনি।
School|Can you explain it again?|আপনি কি আবার বুঝিয়ে বলতে পারেন?
School|I have an exam tomorrow.|আমার আগামীকাল পরীক্ষা আছে।
School|Please write your name here.|দয়া করে এখানে আপনার নাম লিখুন।
School|She studies English every night.|সে প্রতি রাতে ইংরেজি পড়ে।
School|I forgot my homework at home.|আমি বাড়িতে হোমওয়ার্ক ভুলে এসেছি।
School|May I ask a question?|আমি কি একটি প্রশ্ন করতে পারি?
School|The class starts at nine.|ক্লাস নয়টায় শুরু হয়।
School|You did a great job.|তুমি দারুণ করেছ।
Weather|It is very hot today.|আজ খুব গরম।
Weather|It looks like it will rain.|মনে হচ্ছে বৃষ্টি হবে।
Weather|The weather is nice.|আবহাওয়াটা সুন্দর।
Weather|It is cold in the morning.|সকালে ঠান্ডা থাকে।
Weather|Do not forget your umbrella.|ছাতা নিতে ভুলবেন না।
Weather|There was a big storm last night.|গত রাতে বড় ঝড় হয়েছিল।
Weather|The sun is shining.|সূর্য উঠেছে।
Weather|Winter is my favorite season.|শীত আমার প্রিয় ঋতু।
Friends|What are you doing this weekend?|এই সপ্তাহান্তে তুমি কী করছ?
Friends|Do you want to come with me?|তুমি কি আমার সাথে আসতে চাও?
Friends|I had a great time today.|আজ আমার সময়টা দারুণ কেটেছে।
Friends|You can count on me.|তুমি আমার উপর ভরসা করতে পারো।
Friends|Let us take a photo together.|চলুন একসাথে একটা ছবি তুলি।
Friends|I miss my old friends.|আমি আমার পুরনো বন্ধুদের মিস করি।
Friends|Why are you so quiet today?|আজ তুমি এত চুপ কেন?
Friends|That is a good idea.|এটা ভালো একটা ধারণা।
Friends|I am sorry, I did not mean it.|দুঃখিত, আমি ইচ্ছা করে বলিনি।
Friends|Do not worry, everything will be fine.|চিন্তা করো না, সব ঠিক হয়ে যাবে।
Phone|Hello, who is speaking?|হ্যালো, কে বলছেন?
Phone|Can I speak to Mr. Rahman?|আমি কি রহমান সাহেবের সাথে কথা বলতে পারি?
Phone|I cannot hear you clearly.|আমি আপনাকে পরিষ্কার শুনতে পাচ্ছি না।
Phone|Please hold on for a moment.|দয়া করে এক মুহূর্ত অপেক্ষা করুন।
Phone|I will call you back later.|আমি পরে আপনাকে ফোন করব।
Phone|My battery is low.|আমার ব্যাটারি কমে গেছে।
Phone|Please send me a message.|দয়া করে আমাকে একটা মেসেজ পাঠান।
Phone|The network is very slow.|নেটওয়ার্ক খুব ধীর।
Phone|What is your phone number?|আপনার ফোন নম্বর কত?
Phone|I am on the way.|আমি রাস্তায় আছি।
Money|Can you lend me some money?|আপনি কি আমাকে কিছু টাকা ধার দিতে পারেন?
Money|I need to save more money.|আমাকে আরও টাকা জমাতে হবে।
Money|How much do I owe you?|আমি আপনাকে কত টাকা দেব?
Money|Do you accept cash?|আপনারা কি নগদ টাকা নেন?
Money|I want to open a bank account.|আমি একটি ব্যাংক অ্যাকাউন্ট খুলতে চাই।
Money|The price is reasonable.|দামটা যুক্তিসঙ্গত।
Money|I spent too much this month.|এই মাসে আমি অনেক বেশি খরচ করেছি।
Money|Please check the bill again.|দয়া করে বিলটা আবার দেখুন।
Emergency|Help! Please help me!|বাঁচাও! দয়া করে আমাকে সাহায্য করুন!
Emergency|There is a fire!|আগুন লেগেছে!
Emergency|Call the police now.|এখনই পুলিশ ডাকুন।
Emergency|I have been robbed.|আমার জিনিস ছিনতাই হয়েছে।
Emergency|Someone is hurt.|কেউ আহত হয়েছে।
Emergency|I am lost, can you help me?|আমি পথ হারিয়েছি, আপনি কি সাহায্য করতে পারেন?
Emergency|Where is the nearest hospital?|সবচেয়ে কাছের হাসপাতাল কোথায়?
Emergency|It is an emergency.|এটা জরুরি অবস্থা।
Home|I am at home right now.|আমি এখন বাড়িতে আছি।
Home|Please close the door.|দয়া করে দরজাটা বন্ধ করুন।
Home|Turn on the light.|বাতিটা জ্বালিয়ে দাও।
Home|Turn off the fan.|পাখাটা বন্ধ করো।
Home|The kitchen is very clean.|রান্নাঘরটা খুব পরিষ্কার।
Home|I need to wash my clothes.|আমাকে আমার কাপড় ধুতে হবে।
Home|Where did you put the key?|তুমি চাবিটা কোথায় রেখেছ?
Home|Our house has three rooms.|আমাদের বাড়িতে তিনটি ঘর আছে।
Home|Please clean the table.|দয়া করে টেবিলটা পরিষ্কার করো।
Home|The electricity is gone.|বিদ্যুৎ চলে গেছে।
Home|Let us watch a movie tonight.|চলো আজ রাতে একটা সিনেমা দেখি।
Work|I start work at nine.|আমি নয়টায় কাজ শুরু করি।
Work|I am working on a new project.|আমি একটি নতুন প্রজেক্টে কাজ করছি।
Work|My boss is very kind.|আমার বস খুব দয়ালু।
Work|I have a meeting at three.|তিনটায় আমার একটি মিটিং আছে।
Work|I will finish it by Friday.|আমি এটা শুক্রবারের মধ্যে শেষ করব।
Work|Can I take a day off?|আমি কি একদিন ছুটি নিতে পারি?
Work|I am looking for a new job.|আমি নতুন চাকরি খুঁজছি।
Work|I have five years of experience.|আমার পাঁচ বছরের অভিজ্ঞতা আছে।
Work|Please send me your resume.|দয়া করে আপনার জীবনবৃত্তান্ত পাঠান।
Work|I work from home today.|আজ আমি বাড়ি থেকে কাজ করছি।
Work|Thank you for this opportunity.|এই সুযোগের জন্য ধন্যবাদ।
Hobbies|I like to read books.|আমি বই পড়তে পছন্দ করি।
Hobbies|She loves to sing.|সে গান গাইতে ভালোবাসে।
Hobbies|Do you play cricket?|তুমি কি ক্রিকেট খেলো?
Hobbies|I enjoy cooking at home.|আমি বাড়িতে রান্না করতে উপভোগ করি।
Hobbies|We go for a walk every evening.|আমরা প্রতি সন্ধ্যায় হাঁটতে যাই।
Hobbies|I am learning to swim.|আমি সাঁতার শিখছি।
Hobbies|He likes to draw pictures.|সে ছবি আঁকতে পছন্দ করে।
Hobbies|My hobby is gardening.|আমার শখ বাগান করা।
Hobbies|I listen to music every day.|আমি প্রতিদিন গান শুনি।
Hobbies|They are playing in the field.|তারা মাঠে খেলছে।
Hobbies|I want to learn English.|আমি ইংরেজি শিখতে চাই।
Transport|Where is the bus stop?|বাস স্টপ কোথায়?
Transport|The bus is late today.|আজ বাসটি দেরি করছে।
Transport|I take a rickshaw to the market.|আমি বাজারে রিকশায় যাই।
Transport|Please drive slowly.|দয়া করে আস্তে গাড়ি চালান।
Transport|How much is the fare?|ভাড়া কত?
Transport|There is a lot of traffic.|অনেক যানজট।
Transport|I missed the train.|আমি ট্রেন মিস করেছি।
Transport|Does this bus go to Dhaka?|এই বাস কি ঢাকা যায়?
Transport|I will go by train.|আমি ট্রেনে যাব।
Transport|Please wear your seat belt.|দয়া করে সিট বেল্ট পরুন।
Transport|Let us take a taxi.|চলুন একটা ট্যাক্সি নিই।
Directions|How do I get to the hospital?|হাসপাতালে কীভাবে যাব?
Directions|Go straight ahead.|সোজা সামনে যান।
Directions|Turn right at the next corner.|পরের মোড়ে ডানে ঘুরুন।
Directions|It is near the bank.|এটা ব্যাংকের কাছেই।
Directions|It is on your left.|এটা আপনার বাম দিকে।
Directions|Is it far from here?|এটা কি এখান থেকে দূরে?
Directions|Can you show me on the map?|আপনি কি আমাকে মানচিত্রে দেখাতে পারেন?
Directions|Cross the road carefully.|সাবধানে রাস্তা পার হোন।
Directions|It takes ten minutes on foot.|হেঁটে যেতে দশ মিনিট লাগে।
Directions|I think I am going the wrong way.|আমার মনে হয় আমি ভুল পথে যাচ্ছি।
Directions|It is opposite the school.|এটা স্কুলের উল্টো দিকে।
Hotel|I have a reservation.|আমার একটি বুকিং আছে।
Hotel|Do you have any rooms available?|আপনাদের কি কোনো রুম খালি আছে?
Hotel|How much is the room per night?|রুমের ভাড়া রাতপ্রতি কত?
Hotel|What time is check out?|চেক-আউট কখন?
Hotel|Is breakfast included?|সকালের নাস্তা কি অন্তর্ভুক্ত?
Hotel|The room is too noisy.|রুমটা অনেক গোলমালের।
Hotel|Can I have an extra blanket?|আমি কি একটা বাড়তি কম্বল পেতে পারি?
Hotel|The air conditioner is not working.|এয়ার কন্ডিশনার কাজ করছে না।
Hotel|Please wake me up at six.|দয়া করে আমাকে ছয়টায় জাগিয়ে দিন।
Hotel|I would like to extend my stay.|আমি আমার থাকার মেয়াদ বাড়াতে চাই।
Hotel|Where is the lift?|লিফট কোথায়?
Bank|I want to withdraw some money.|আমি কিছু টাকা তুলতে চাই।
Bank|I would like to deposit this cheque.|আমি এই চেকটি জমা দিতে চাই।
Bank|What is the interest rate?|সুদের হার কত?
Bank|I forgot my PIN.|আমি আমার পিন ভুলে গেছি।
Bank|My card is not working.|আমার কার্ড কাজ করছে না।
Bank|Please fill out this form.|দয়া করে এই ফর্মটি পূরণ করুন।
Bank|I need to send money abroad.|আমাকে বিদেশে টাকা পাঠাতে হবে।
Bank|What is my account balance?|আমার অ্যাকাউন্টে কত টাকা আছে?
Bank|Do I need an appointment?|আমার কি অ্যাপয়েন্টমেন্ট লাগবে?
Bank|Please sign here.|দয়া করে এখানে সই করুন।
Restaurant|A table for two, please.|দুইজনের জন্য একটি টেবিল দিন।
Restaurant|Can I see the menu?|আমি কি মেনুটা দেখতে পারি?
Restaurant|I will have the chicken curry.|আমি মুরগির তরকারি নেব।
Restaurant|Could we have the bill, please?|আমরা কি বিলটা পেতে পারি?
Restaurant|The food is cold.|খাবারটা ঠান্ডা।
Restaurant|I ordered tea, not coffee.|আমি চা অর্ডার করেছিলাম, কফি নয়।
Restaurant|Is this dish vegetarian?|এই খাবারটি কি নিরামিষ?
Restaurant|Please pack the rest for me.|দয়া করে বাকিটা আমার জন্য প্যাক করে দিন।
Restaurant|Can we sit near the window?|আমরা কি জানালার কাছে বসতে পারি?
Restaurant|What do you recommend?|আপনি কী খেতে বলবেন?
Restaurant|Everything was wonderful.|সবকিছু চমৎকার ছিল।
Feelings|I am so happy today.|আজ আমি খুব খুশি।
Feelings|I feel very tired.|আমি খুব ক্লান্ত বোধ করছি।
Feelings|I am a little nervous.|আমি একটু নার্ভাস।
Feelings|She is angry with me.|সে আমার উপর রেগে আছে।
Feelings|I am really excited about the trip.|আমি ভ্রমণ নিয়ে সত্যিই উত্তেজিত।
Feelings|He looks sad.|তাকে দুঃখী দেখাচ্ছে।
Feelings|I am afraid of the dark.|আমি অন্ধকারকে ভয় পাই।
Feelings|I feel lonely sometimes.|আমি মাঝে মাঝে একা বোধ করি।
Feelings|Do not be shy.|লজ্জা পেও না।
Feelings|I am grateful for your support.|আপনার সহযোগিতার জন্য আমি কৃতজ্ঞ।
Feelings|I feel much better now.|আমি এখন অনেক ভালো বোধ করছি।
Time|What time is it?|কয়টা বাজে?
Time|It is half past five.|সাড়ে পাঁচটা বাজে।
Time|See you at seven o'clock.|সাতটায় দেখা হবে।
Time|I am free in the afternoon.|আমি বিকেলে ফ্রি আছি।
Time|The shop opens at ten.|দোকান দশটায় খোলে।
Time|I have been waiting for an hour.|আমি এক ঘণ্টা ধরে অপেক্ষা করছি।
Time|We are running out of time.|আমাদের সময় ফুরিয়ে আসছে।
Time|Please come on time.|দয়া করে সময়মতো আসুন।
Time|I will be back in five minutes.|আমি পাঁচ মিনিটে ফিরব।
Time|Today is Wednesday.|আজ বুধবার।
Time|My birthday is next month.|আমার জন্মদিন আগামী মাসে।`;
const SENTENCE_BANK = SENTENCE_RAW.split('\n').map((line, i) => {
  const [category, en, bn] = line.split('|');
  return { id: i + 1, category, en, bn };
});
const SENTENCE_CATEGORIES = Array.from(new Set(SENTENCE_BANK.map(x => x.category)));

// Helpers: R = sentence making (Bengali -> arrange English words), M = multiple choice
const R = (id, bn, en) => ({ id, type: 'reorder', prompt: `ইংরেজিতে সাজান: ${bn}`, words: en.split(' '), answer: en.split(' '), hint: `✔ সঠিক বাক্য: ${en}` });
const M = (id, prompt, options, answer, hint) => ({ id, type: 'mcq', prompt, options, answer, hint });

const CURRICULUM_PATH = [
  {
    id: 'mod_1',
    title: '১. মৌলিক ও অভিবাদন (Basics & Greetings)',
    desc: 'দৈনন্দিন অভিবাদন, পরিবার এবং প্রাথমিক পরিচিতি',
    icon: '👋',
    bg: 'from-sky-500 to-sky-600',
    lessons: [
      {
        id: 'l1_1',
        title: 'সাধারণ কুশলাদি (Basic Greetings)',
        xp: 20,
        questions: [
          {
            id: 'q1',
            type: 'mcq',
            prompt: 'Choose the correct meaning of "Hello, how are you?"',
            questionEn: 'Hello, how are you?',
            options: ['হ্যালো, আপনি কেমন আছেন?', 'শুভ সকাল, কোথায় যাচ্ছেন?', 'আপনার নাম কি?', 'আমি ভালো আছি!'],
            answer: 'হ্যালো, আপনি কেমন আছেন?',
            hint: '"How are you?" এর বাংলা হলো "আপনি কেমন আছেন?"'
          },
          {
            id: 'q2',
            type: 'reorder',
            prompt: 'Translate to Bengali (শব্দ সাজিয়ে বাক্য বানান):',
            questionEn: 'Good morning, nice to meet you.',
            words: ['শুভ', 'সকাল,', 'আপনার', 'সাথে', 'দেখা', 'হয়ে', 'ভালো', 'লাগল।'],
            answer: ['শুভ', 'সকাল,', 'আপনার', 'সাথে', 'দেখা', 'হয়ে', 'ভালো', 'লাগল।'],
            hint: 'Good morning = শুভ সকাল, Nice to meet you = আপনার সাথে দেখা হয়ে ভালো লাগল।'
          },
          {
            id: 'q3',
            type: 'listening',
            prompt: 'Listen to the audio and choose the exact English phrase:',
            audioText: 'See you tomorrow',
            options: ['See you tomorrow', 'Good night friend', 'How is it going', 'Welcome to my office'],
            answer: 'See you tomorrow',
            hint: '"See you tomorrow" শব্দের অর্থ "আগামীকাল আবার দেখা হবে"।'
          },
          {
            id: 'q4',
            type: 'matching',
            prompt: 'Match English words with Bengali meanings:',
            pairs: [
              { en: 'Welcome', bn: 'স্বাগতম' },
              { en: 'Thank you', bn: 'ধন্যবাদ' },
              { en: 'Goodbye', bn: 'বিদায়' },
              { en: 'Please', bn: 'দয়া করে' }
            ]
          }
        ]
      },
      {
        id: 'l1_2',
        title: 'পরিবার ও পরিচয় (Family & Intro)',
        xp: 25,
        questions: [
          {
            id: 'q5',
            type: 'mcq',
            prompt: 'Choose the correct translation for "আমি একজন শিক্ষার্থী":',
            questionEn: 'I am a student.',
            options: ['I am a student.', 'I am a teacher.', 'He is a student.', 'We are students.'],
            answer: 'I am a student.',
            hint: 'Student = শিক্ষার্থী / ছাত্র-ছাত্রী।'
          },
          {
            id: 'q6',
            type: 'reorder',
            prompt: 'Translate to English (ইংরেজিতে রূপান্তর করুন):',
            questionEn: 'আমার পরিবারে চারজন সদস্য আছে।',
            words: ['There', 'are', 'four', 'members', 'in', 'my', 'family.'],
            answer: ['There', 'are', 'four', 'members', 'in', 'my', 'family.'],
            hint: 'Members = সদস্য, Family = পরিবার।'
          }
        ]
      }
    ]
  },
  {
    id: 'mod_2',
    title: '২. প্রয়োজনীয় শব্দাবলী (Essential Vocab)',
    desc: 'খাবার, স্থান, সময় এবং দৈনন্দিন কাজের পরিচিতি',
    icon: '🍎',
    bg: 'from-blue-500 to-cyan-600',
    lessons: [
      {
        id: 'l2_1',
        title: 'খাবার ও ডাইনিং (Food & Dining)',
        xp: 25,
        questions: [
          {
            id: 'q7',
            type: 'matching',
            prompt: 'Match food items correctly:',
            pairs: [
              { en: 'Water', bn: 'পানি' },
              { en: 'Rice', bn: 'ভাত' },
              { en: 'Milk', bn: 'দুধ' },
              { en: 'Bread', bn: 'রুটি' }
            ]
          },
          {
            id: 'q8',
            type: 'mcq',
            prompt: 'Translate: "I would like to order a glass of water."',
            questionEn: 'I would like to order a glass of water.',
            options: [
              'আমি এক গ্লাস পানি অর্ডার করতে চাই।',
              'আমি চা পছন্দ করি।',
              'পানি অনেক ঠাণ্ডা।',
              'আমি এক গ্লাস দুধ চাই।'
            ],
            answer: 'আমি এক গ্লাস পানি অর্ডার করতে চাই।',
            hint: '"I would like to..." কোনো কিছু নম্রভাবে চাওয়ার বাক্য।'
          }
        ]
      }
    ]
  },
  {
    id: 'mod_3',
    title: '৩. ব্যাকরণ ও বাক্য গঠন (Grammar & Tenses)',
    desc: 'Tense, Verb forms, Preposition এবং প্রশ্ন তৈরি',
    icon: '⚡',
    bg: 'from-amber-500 to-orange-600',
    lessons: [
      {
        id: 'l3_1',
        title: 'Present Continuous Tense (চলমান বর্তমান)',
        xp: 30,
        questions: [
          {
            id: 'q9',
            type: 'reorder',
            prompt: 'Translate to Bengali:',
            questionEn: 'She is reading a book right now.',
            words: ['সে', 'এখন', 'একটি', 'বই', 'পড়ছে।'],
            answer: ['সে', 'এখন', 'একটি', 'বই', 'পড়ছে।'],
            hint: 'Reading = পড়ছে (বর্তমানে কাজটা চলছে)'
          },
          {
            id: 'q10',
            type: 'mcq',
            prompt: '"They are playing football" - সঠিক অর্থ বেছে নিন:',
            questionEn: 'They are playing football.',
            options: ['তারা ফুটবল খেলছে।', 'তারা ফুটবল খেলেছিল।', 'তারা ফুটবল খেলবে।', 'আমরা মাঠে ফুটবল খেলি।'],
            answer: 'তারা ফুটবল খেলছে।',
            hint: 'Subject (They) + are + verb-ing (playing) = খেলছে।'
          }
        ]
      }
    ]
  },
  {
    id: 'mod_4',
    title: '৪. দৈনন্দিন কথোপকথন (Everyday Conversations)',
    desc: 'কেনাকাটা, দিকনির্দেশনা এবং ডাক্তার বা হাসপাতালে কথা বলা',
    icon: '🗣️',
    bg: 'from-violet-500 to-purple-600',
    lessons: [
      {
        id: 'l4_1',
        title: 'কেনাকাটা (Shopping & Money)',
        xp: 30,
        questions: [
          {
            id: 'q11',
            type: 'mcq',
            prompt: 'How to ask price in English politely?',
            questionEn: 'How much does this cost?',
            options: [
              'এটার দাম কত?',
              'এটা কোথায় পাওয়া যাবে?',
              'আপনার দোকান কখন খোলে?',
              'আমি এটা কিনতে চাই না।'
            ],
            answer: 'এটার দাম কত?',
            hint: '"How much does this cost?" = এটার দাম কত?'
          }
        ]
      }
    ]
  },
  {
    id: 'mod_5',
    title: '৫. প্রফেশনাল ও অফিস ইংলিশ (Workplace English)',
    desc: 'ইমেইল লেখা, জব ইন্টারভিউ ও কর্পোরেট প্রেজেন্টেশন',
    icon: '💼',
    bg: 'from-sky-500 to-indigo-600',
    lessons: [
      {
        id: 'l5_1',
        title: 'ইন্টারভিউ ও প্রফেশনাল পরিচয়',
        xp: 35,
        questions: [
          {
            id: 'q12',
            type: 'mcq',
            prompt: 'How to politely present your experience in an interview?',
            questionEn: 'I have three years of experience in project management.',
            options: [
              'প্রজেক্ট ম্যানেজমেন্টে আমার তিন বছরের অভিজ্ঞতা রয়েছে।',
              'আমি তিন বছর ধরে প্রজেক্ট বন্ধ রেখেছি।',
              'আমার কোন কাজের অভিজ্ঞতা নেই।',
              'আমি প্রজেক্টে কাজ করতে পছন্দ করি না।'
            ],
            answer: 'প্রজেক্ট ম্যানেজমেন্টে আমার তিন বছরের অভিজ্ঞতা রয়েছে।',
            hint: 'Experience = অভিজ্ঞতা, Project Management = প্রজেক্ট পরিচালনা।'
          }
        ]
      }
    ]
  },
  {
    id: 'mod_6',
    title: '৬. অ্যাডভান্সড ইডিয়ম ও ফ্রেজ (Advanced Expressions)',
    desc: 'সহজ প্রবাদ ও নেটিভ বক্তাদের ব্যবহৃত সুন্দর বাক্য',
    icon: '🚀',
    bg: 'from-rose-500 to-pink-600',
    lessons: [
      {
        id: 'l6_1',
        title: 'নেটিভ স্টাইলের বাগধারা (Native Idioms)',
        xp: 40,
        questions: [
          {
            id: 'q13',
            type: 'mcq',
            prompt: 'What does "Piece of cake" mean in conversation?',
            questionEn: 'This test is a piece of cake!',
            options: [
              'এই পরীক্ষাটি অত্যন্ত সহজ!',
              'পরীক্ষাটি কেকের মতো মিষ্টি।',
              'পরীক্ষায় কেক প্রদান করা হয়েছে।',
              'পরীক্ষাটি অনেক কঠিন।'
            ],
            answer: 'এই পরীক্ষাটি অত্যন্ত সহজ!',
            hint: '"Piece of cake" একটি Idiom যার অর্থ অত্যন্ত সহজ কাজ।'
          }
        ]
      }
    ]
  },
  {
    id: 'mod_7', title: '৭. বাক্য গঠন: শুরু করি (Sentence Making)', desc: 'I am / He is / I have দিয়ে সহজ বাক্য বানানো', icon: '✍️', bg: 'from-blue-500 to-sky-600',
    lessons: [
      { id: 'l7_1', title: 'am / is / are দিয়ে বাক্য', xp: 30, questions: [
        R('s1', 'আমি একজন ছাত্র।', 'I am a student.'),
        R('s2', 'সে একজন শিক্ষিকা।', 'She is a teacher.'),
        R('s3', 'তারা আমার বন্ধু।', 'They are my friends.'),
        R('s4', 'এটা একটা বই।', 'This is a book.'),
        M('s5', '"He is not at home" এর অর্থ কী?', ['সে বাড়িতে নেই।', 'সে বাড়িতে আছে।', 'সে বাড়ি যাচ্ছে।', 'সে বাড়ি ছিল।'], 'সে বাড়িতে নেই।', 'not = না')
      ]},
      { id: 'l7_2', title: 'have / want / like দিয়ে বাক্য', xp: 30, questions: [
        R('s6', 'আমার একটি নতুন ফোন আছে।', 'I have a new phone.'),
        R('s7', 'আমি এক গ্লাস পানি চাই।', 'I want a glass of water.'),
        R('s8', 'তার দুইটি ভাই আছে।', 'He has two brothers.'),
        R('s9', 'আমরা চা পছন্দ করি।', 'We like tea.')
      ]}
    ]
  },
  {
    id: 'mod_8', title: '৮. দৈনন্দিন রুটিন (Daily Routine)', desc: 'Present Simple Tense দিয়ে প্রতিদিনের কাজের বাক্য', icon: '⏰', bg: 'from-orange-500 to-red-500',
    lessons: [
      { id: 'l8_1', title: 'আমার প্রতিদিনের কাজ', xp: 30, questions: [
        R('d1', 'আমি সকালে ঘুম থেকে উঠি।', 'I wake up in the morning.'),
        R('d2', 'সে প্রতিদিন স্কুলে যায়।', 'She goes to school every day.'),
        R('d3', 'আমরা রাতে ভাত খাই।', 'We eat rice at night.'),
        R('d4', 'তিনি অফিসে কাজ করেন।', 'He works in an office.'),
        M('d5', '"She goes" এ goes কেন হলো?', ['He/She/It এর সাথে verb এ s/es যোগ হয়', 'কারণ এটি অতীত কাল', 'কারণ এটি ভবিষ্যৎ কাল', 'কোনো কারণ নেই'], 'He/She/It এর সাথে verb এ s/es যোগ হয়', 'I/You/We/They এর সাথে verb অপরিবর্তিত থাকে।')
      ]}
    ]
  },
  {
    id: 'mod_9', title: '৯. প্রশ্ন ও না-বাচক বাক্য (Questions & Negatives)', desc: 'What, Where, Why দিয়ে প্রশ্ন এবং do not / cannot', icon: '❓', bg: 'from-cyan-500 to-blue-600',
    lessons: [
      { id: 'l9_1', title: 'প্রশ্ন বানানো', xp: 35, questions: [
        R('q1', 'তুমি কোথায় থাকো?', 'Where do you live?'),
        R('q2', 'তোমার নাম কী?', 'What is your name?'),
        R('q3', 'আমি চা পছন্দ করি না।', 'I do not like tea.'),
        R('q4', 'সে কি ইংরেজি বলতে পারে?', 'Can she speak English?'),
        M('q5', '"Why are you late?" এর অর্থ কী?', ['তুমি দেরি করেছ কেন?', 'তুমি কখন এসেছ?', 'তুমি কোথায় ছিলে?', 'তুমি কে?'], 'তুমি দেরি করেছ কেন?', 'Why = কেন')
      ]}
    ]
  },
  {
    id: 'mod_10', title: '১০. অতীত ও ভবিষ্যৎ (Past & Future)', desc: 'went, wrote, will go দিয়ে অতীত ও ভবিষ্যতের বাক্য', icon: '🕰️', bg: 'from-indigo-500 to-violet-600',
    lessons: [
      { id: 'l10_1', title: 'Past ও Future বাক্য', xp: 35, questions: [
        R('p1', 'আমি গতকাল বাজারে গিয়েছিলাম।', 'I went to the market yesterday.'),
        R('p2', 'সে একটি চিঠি লিখেছিল।', 'She wrote a letter.'),
        R('p3', 'আমি আগামীকাল তোমাকে ফোন করব।', 'I will call you tomorrow.'),
        R('p4', 'তারা পরের সপ্তাহে ঢাকা যাবে।', 'They will go to Dhaka next week.')
      ]}
    ]
  },
  {
    id: 'mod_11', title: '১১. ভ্রমণ ও রেস্তোরাঁ (Travel & Restaurant)', desc: 'পথ জিজ্ঞাসা, টিকিট কাটা ও খাবার অর্ডার করার বাক্য', icon: '✈️', bg: 'from-sky-500 to-cyan-600',
    lessons: [
      { id: 'l11_1', title: 'ভ্রমণ ও খাবারের বাক্য', xp: 35, questions: [
        R('t1', 'বিমানবন্দর কোথায়?', 'Where is the airport?'),
        R('t2', 'আমি একটি টিকিট কিনতে চাই।', 'I want to buy a ticket.'),
        R('t3', 'আমি কি মেনুটা পেতে পারি?', 'Can I have the menu?'),
        R('t4', 'এটা খুব সুস্বাদু।', 'It is very delicious.')
      ]}
    ]
  },
  {
    id: 'mod_12', title: '১২. অফিস ইমেইল ও মিটিং (Office Sentences)', desc: 'ইমেইল, মিটিং ও কাজের আপডেটের জন্য পেশাদার বাক্য', icon: '📧', bg: 'from-slate-600 to-slate-800',
    lessons: [
      { id: 'l12_1', title: 'ইমেইল ও মিটিং', xp: 40, questions: [
        R('o1', 'আমি আগামীকাল মিটিংয়ে থাকব।', 'I will be in the meeting tomorrow.'),
        R('o2', 'দয়া করে সংযুক্ত ফাইলটি দেখুন।', 'Please find the attached file.'),
        R('o3', 'আপনার উত্তরের জন্য ধন্যবাদ।', 'Thank you for your reply.'),
        R('o4', 'আমরা সময়মতো কাজ শেষ করব।', 'We will finish the work on time.'),
        M('o5', 'ইমেইলের শেষে "Best regards" কেন লেখা হয়?', ['শেষে শুভেচ্ছা জানাতে', 'শুরুতে অভিবাদন জানাতে', 'বিষয় লিখতে', 'কখনোই লেখা হয় না'], 'শেষে শুভেচ্ছা জানাতে', 'Regards = শুভেচ্ছা')
      ]}
    ]
  },
  {
    id: 'mod_13', title: '১৩. মতামত ও আলোচনা (Opinions)', desc: 'একমত/দ্বিমত প্রকাশ ও নিজের মত বলা', icon: '💬', bg: 'from-fuchsia-500 to-pink-600',
    lessons: [
      { id: 'l13_1', title: 'নিজের মত প্রকাশ', xp: 35, questions: [
        R('op1', 'আমার মতে এটা একটা ভালো পরিকল্পনা।', 'In my opinion this is a good plan.'),
        R('op2', 'আমি আপনার সাথে একমত নই।', 'I do not agree with you.'),
        R('op3', 'এটা পরিস্থিতির উপর নির্ভর করে।', 'It depends on the situation.'),
        R('op4', 'আমি আশা করি সব ভালো হবে।', 'I hope everything goes well.'),
        M('op5', '"I am not sure" এর অর্থ কী?', ['আমি নিশ্চিত নই।', 'আমি খুব খুশি।', 'আমি রাজি আছি।', 'আমি জানি।'], 'আমি নিশ্চিত নই।', 'sure = নিশ্চিত')
      ]}
    ]
  },
  {
    id: 'mod_14', title: '১৪. স্বাস্থ্য ও জরুরি অবস্থা (Health & Emergency)', desc: 'ডাক্তারের কাছে ও বিপদে বলার জরুরি বাক্য', icon: '🏥', bg: 'from-red-500 to-rose-600',
    lessons: [
      { id: 'l14_1', title: 'ডাক্তার ও জরুরি সাহায্য', xp: 40, questions: [
        R('h1', 'আমার মাথাব্যথা করছে।', 'I have a headache.'),
        R('h2', 'আমাকে ডাক্তার দেখাতে হবে।', 'I need to see a doctor.'),
        R('h3', 'দয়া করে অ্যাম্বুলেন্স ডাকুন।', 'Please call an ambulance.'),
        R('h4', 'আপনার আরও পানি পান করা উচিত।', 'You should drink more water.'),
        M('h5', '"Get well soon" কখন বলা হয়?', ['কেউ অসুস্থ হলে সুস্থতা কামনায়', 'কারো জন্মদিনে', 'বিদায় নেওয়ার সময়', 'খাবার চাওয়ার সময়'], 'কেউ অসুস্থ হলে সুস্থতা কামনায়', 'Get well soon = তাড়াতাড়ি সুস্থ হয়ে উঠুন')
      ]}
    ]
  },
  {
    id: 'mod_15', title: '১৫. ফোন ও আড্ডা (Phone & Chat)', desc: 'বন্ধুদের সাথে ফোনে ও মেসেজে কথা বলা', icon: '📱', bg: 'from-lime-500 to-sky-600',
    lessons: [
      { id: 'l15_1', title: 'ফোনে কথা', xp: 35, questions: [
        R('c1', 'আমি তোমাকে পরে ফোন করব।', 'I will call you later.'),
        R('c2', 'তুমি কি আজ ফ্রি আছো?', 'Are you free today?'),
        R('c3', 'চলো আগামীকাল দেখা করি।', 'Let us meet tomorrow.'),
        R('c4', 'আমি রাস্তায় আছি।', 'I am on the way.')
      ]}
    ]
  }
];

// ==========================================
// AUTO-GENERATED PRACTICE STEPS (10-20 min per module)
// Each module gets 4 extra steps built from the Sentence Bank + Word Bank.
// ==========================================
const MODULE_SENT_CATS = {
  mod_1: ['Greetings', 'Family'], mod_2: ['Food', 'Restaurant'], mod_3: ['Daily', 'Time'], mod_4: ['Shopping', 'Money'],
  mod_5: ['Office', 'Work'], mod_6: ['Opinions', 'Feelings'], mod_7: ['Family', 'Home'], mod_8: ['Daily', 'Hobbies'],
  mod_9: ['School', 'Friends'], mod_10: ['Time', 'Weather'], mod_11: ['Travel', 'Directions', 'Hotel', 'Transport'],
  mod_12: ['Office', 'Work', 'Bank'], mod_13: ['Opinions', 'Friends'], mod_14: ['Health', 'Emergency'], mod_15: ['Phone', 'Friends']
};
const MODULE_WORD_CATS = {
  mod_1: ['Basics', 'Family'], mod_2: ['Food'], mod_3: ['Actions', 'Grammar'], mod_4: ['Money', 'Clothes'],
  mod_5: ['Workplace'], mod_6: ['Feelings', 'Adjectives'], mod_7: ['Family', 'Home'], mod_8: ['Actions', 'Time'],
  mod_9: ['Workplace', 'Life'], mod_10: ['Time', 'Verbs'], mod_11: ['Travel'], mod_12: ['Workplace', 'Tech'],
  mod_13: ['Phrases', 'Idioms'], mod_14: ['Body', 'Life'], mod_15: ['Phrases', 'Tech']
};
CURRICULUM_PATH.forEach(m => {
  const sents = SENTENCE_BANK.filter(x => (MODULE_SENT_CATS[m.id] || []).includes(x.category) && x.en.split(' ').length <= 9);
  const words = ALL_WORDS_DATABASE.filter(w => (MODULE_WORD_CATS[m.id] || []).includes(w.category) && w.bn);
  if (!sents.length || words.length < 4) return;
  for (let l = 0; l < 4; l++) {
    const qs = [];
    const sq = (i) => { const x = sents[(l * 4 + i) % sents.length]; return R(`${m.id}_g${l}_s${i}`, x.bn, x.en); };
    const wq = (i) => {
      const idx = (l * 7 + i * 3 + m.id.length) % words.length;
      const w = words[idx];
      const opts = [w.bn];
      [5, 11, 17, 23].forEach(o => { const d = words[(idx + o) % words.length]; if (opts.length < 4 && !opts.includes(d.bn)) opts.push(d.bn); });
      const pos = (l + i) % opts.length;
      const ordered = opts.filter(o => o !== w.bn); ordered.splice(pos, 0, w.bn);
      return M(`${m.id}_g${l}_w${i}`, `"${w.word}" এর বাংলা অর্থ কী?`, ordered, w.bn, `${w.word} = ${w.bn}`);
    };
    qs.push(sq(0), sq(1), wq(0), sq(2), sq(3), wq(1));
    m.lessons.push({ id: `${m.id}_g${l + 1}`, title: `অনুশীলন ধাপ ${l + 1}`, xp: 30, questions: qs });
  }
});


// ==========================================
// WORD & SENTENCE LEARNING MODULES (auto-generated)
// Every single word of the Word Bank (1284) and every sentence of the
// Sentence Bank is taught in order, lesson by lesson, inside modules.
// Add more words/sentences above and new lessons/modules appear automatically.
// ==========================================
const WORDS_PER_LESSON = 12;
const LESSONS_PER_WORD_MODULE = 9;
const SENTS_PER_LESSON = 6;
const LESSONS_PER_SENT_MODULE = 8;
const bnNum = (n) => String(n).replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d]);
const rot = (arr, k) => arr.map((_, i) => arr[(i + k) % arr.length]);

CURRICULUM_PATH.forEach((m, i) => { m.kind = 'core'; m.kindNo = i + 1; });

const buildWordLesson = (words, mi, li) => {
  const lid = `wmod_${mi}_l${li}`;
  const wordsByCat = {};
  ALL_WORDS_DATABASE.forEach(w => { (wordsByCat[w.category] = wordsByCat[w.category] || []).push(w); });
  const mcq = (w, k, reverse) => {
    const pool = (wordsByCat[w.category] || []).filter(x => x.id !== w.id && x.bn !== w.bn);
    const fallback = ALL_WORDS_DATABASE.filter(x => x.id !== w.id && x.bn !== w.bn);
    const picks = [];
    const tryAdd = (x) => { const v = reverse ? x.word : x.bn; if (x && v && !picks.includes(v) && picks.length < 3) picks.push(v); };
    for (let j = 0; j < pool.length && picks.length < 3; j++) tryAdd(pool[(w.id * 7 + j * 5 + k) % pool.length]);
    for (let j = 0; j < fallback.length && picks.length < 3; j++) tryAdd(fallback[(w.id * 13 + j * 11 + k) % fallback.length]);
    const correct = reverse ? w.word : w.bn;
    const opts = [...picks]; opts.splice((w.id + k) % 4, 0, correct);
    return M(`${lid}_m${k}`, reverse ? `"${w.bn}" এর ইংরেজি কী?` : `"${w.word}" এর বাংলা অর্থ কী?`, opts, correct, `${w.word} = ${w.bn}`);
  };
  const listen = (w, k) => {
    const pool = ALL_WORDS_DATABASE.filter(x => x.id !== w.id && x.word.toLowerCase() !== w.word.toLowerCase());
    const picks = [];
    for (let j = 0; j < pool.length && picks.length < 3; j++) { const x = pool[(w.id * 17 + j * 19 + k) % pool.length]; if (!picks.includes(x.word)) picks.push(x.word); }
    const opts = [...picks]; opts.splice((w.id + k) % 4, 0, w.word);
    return { id: `${lid}_h${k}`, type: 'listening', prompt: 'শুনুন এবং সঠিক ইংরেজি শব্দটি বেছে নিন:', audioText: w.word, options: opts, answer: w.word, hint: `${w.word} = ${w.bn}` };
  };
  const match = (grp, k) => {
    const seenBn = new Set(); const pairs = [];
    grp.forEach(w => { if (!seenBn.has(w.bn)) { seenBn.add(w.bn); pairs.push({ en: w.word, bn: w.bn }); } });
    return { id: `${lid}_x${k}`, type: 'matching', prompt: 'ইংরেজি শব্দের সাথে বাংলা অর্থ মেলান:', pairs };
  };
  const g = [words.slice(0, 4), words.slice(4, 8), words.slice(8, 12)];
  const qs = [];
  g.forEach((grp, gi) => {
    if (!grp.length) return;
    qs.push(match(grp, gi));
    if (grp[0]) qs.push(mcq(grp[0], gi * 3, false));
    if (grp[1]) qs.push(mcq(grp[1], gi * 3 + 1, true));
    if (grp[2]) qs.push(listen(grp[2], gi * 3 + 2));
  });
  return qs;
};

const WORD_MODULES = [];
{
  const nLessons = Math.ceil(ALL_WORDS_DATABASE.length / WORDS_PER_LESSON);
  for (let L = 0; L < nLessons; L++) {
    const mi = Math.floor(L / LESSONS_PER_WORD_MODULE) + 1;
    const li = (L % LESSONS_PER_WORD_MODULE) + 1;
    const words = ALL_WORDS_DATABASE.slice(L * WORDS_PER_LESSON, (L + 1) * WORDS_PER_LESSON);
    if (!WORD_MODULES[mi - 1]) WORD_MODULES[mi - 1] = { id: `wmod_${mi}`, kind: 'word', kindNo: mi, icon: '📚', lessons: [], from: words[0].id, to: 0 };
    const mod = WORD_MODULES[mi - 1];
    mod.to = words[words.length - 1].id;
    mod.lessons.push({
      id: `wmod_${mi}_l${li}`, count: words.length,
      title: `শব্দ ${bnNum(words[0].id)}–${bnNum(words[words.length - 1].id)}`,
      xp: 20, questions: buildWordLesson(words, mi, li)
    });
  }
  WORD_MODULES.forEach(m => {
    const cats = {};
    ALL_WORDS_DATABASE.filter(w => w.id >= m.from && w.id <= m.to).forEach(w => { cats[w.category] = (cats[w.category] || 0) + 1; });
    const top = Object.entries(cats).sort((a, b) => b[1] - a[1]).slice(0, 3).map(x => x[0]).join(', ');
    m.title = `${bnNum(m.kindNo)}. শব্দ মডিউল (শব্দ ${bnNum(m.from)}–${bnNum(m.to)})`;
    m.desc = `${bnNum(m.lessons.length)}টি লেসন · ${top}`;
  });
}

const buildSentLesson = (sents, mi, li) => {
  const lid = `smod_${mi}_l${li}`;
  const qs = [];
  sents.forEach((x, i) => {
    if (x.en.split(' ').length <= 10) {
      qs.push(R(`${lid}_r${i}`, x.bn, x.en));
    } else {
      const pool = SENTENCE_BANK.filter(y => y.id !== x.id && y.bn !== x.bn);
      const picks = [];
      for (let j = 0; j < pool.length && picks.length < 3; j++) { const y = pool[(x.id * 7 + j * 13) % pool.length]; if (!picks.includes(y.bn)) picks.push(y.bn); }
      const opts = [...picks]; opts.splice(x.id % 4, 0, x.bn);
      qs.push(M(`${lid}_m${i}`, `"${x.en}" — বাংলা অর্থ কী?`, opts, x.bn, `${x.en} = ${x.bn}`));
    }
    if (i % 2 === 1) {
      const pool = SENTENCE_BANK.filter(y => y.id !== x.id && y.en !== x.en);
      const picks = [];
      for (let j = 0; j < pool.length && picks.length < 3; j++) { const y = pool[(x.id * 11 + j * 17) % pool.length]; if (!picks.includes(y.en)) picks.push(y.en); }
      const opts = [...picks]; opts.splice((x.id + 1) % 4, 0, x.en);
      qs.push({ id: `${lid}_h${i}`, type: 'listening', prompt: 'শুনুন এবং সঠিক বাক্যটি বেছে নিন:', audioText: x.en, options: opts, answer: x.en, hint: `${x.en} = ${x.bn}` });
    }
  });
  return qs;
};

const SENT_MODULES = [];
{
  const nLessons = Math.ceil(SENTENCE_BANK.length / SENTS_PER_LESSON);
  for (let L = 0; L < nLessons; L++) {
    const mi = Math.floor(L / LESSONS_PER_SENT_MODULE) + 1;
    const li = (L % LESSONS_PER_SENT_MODULE) + 1;
    const sents = SENTENCE_BANK.slice(L * SENTS_PER_LESSON, (L + 1) * SENTS_PER_LESSON);
    if (!SENT_MODULES[mi - 1]) SENT_MODULES[mi - 1] = { id: `smod_${mi}`, kind: 'sent', kindNo: mi, icon: '💬', lessons: [], from: sents[0].id, to: 0 };
    const mod = SENT_MODULES[mi - 1];
    mod.to = sents[sents.length - 1].id;
    mod.lessons.push({
      id: `smod_${mi}_l${li}`, count: sents.length,
      title: `বাক্য ${bnNum(sents[0].id)}–${bnNum(sents[sents.length - 1].id)}`,
      xp: 25, questions: buildSentLesson(sents, mi, li)
    });
  }
  SENT_MODULES.forEach(m => {
    const cats = Array.from(new Set(SENTENCE_BANK.filter(x => x.id >= m.from && x.id <= m.to).map(x => x.category))).slice(0, 3).join(', ');
    m.title = `${bnNum(m.kindNo)}. বাক্য মডিউল (বাক্য ${bnNum(m.from)}–${bnNum(m.to)})`;
    m.desc = `${bnNum(m.lessons.length)}টি লেসন · ${cats}`;
  });
}
CURRICULUM_PATH.push(...WORD_MODULES, ...SENT_MODULES);

// ---- Pagination helpers (20 items per page, remembers last page) ----
const PAGE_SIZE = 20;
const loadPage = (k) => { try { return Math.max(1, parseInt(JSON.parse(localStorage.getItem('fluently_pages_v1') || '{}')[k], 10) || 1); } catch (e) { return 1; } };
const savePage = (k, v) => { try { const o = JSON.parse(localStorage.getItem('fluently_pages_v1') || '{}'); o[k] = v; localStorage.setItem('fluently_pages_v1', JSON.stringify(o)); } catch (e) {} };

const Pager = ({ page, total, onChange }) => {
  if (total <= 1) return null;
  const nums = [];
  const add = (n) => { if (n >= 1 && n <= total && !nums.includes(n)) nums.push(n); };
  add(1); for (let n = page - 2; n <= page + 2; n++) add(n); add(total);
  nums.sort((a, b) => a - b);
  const items = [];
  nums.forEach((n, i) => { if (i > 0 && n - nums[i - 1] > 1) items.push('gap' + n); items.push(n); });
  const btn = 'min-w-[40px] h-10 px-3 rounded-xl border-2 font-black text-sm transition-all';
  return (
    <div className="bg-white rounded-3xl border-2 border-slate-200 p-4 space-y-3">
      <p className="text-center text-xs font-extrabold text-slate-500">পেজ {page} / {total}</p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button disabled={page <= 1} onClick={() => onChange(page - 1)} className={`${btn} flex items-center gap-1 border-slate-200 text-slate-600 disabled:opacity-40`}><ChevronLeft className="w-4 h-4" /> আগের</button>
        {items.map(n => typeof n === 'string'
          ? <span key={n} className="text-slate-400 font-black">…</span>
          : <button key={n} onClick={() => onChange(n)} className={`${btn} ${n === page ? 'bg-sky-500 border-sky-700 text-white' : 'bg-white border-slate-200 text-slate-600 hover:border-sky-400'}`}>{n}</button>)}
        <button disabled={page >= total} onClick={() => onChange(page + 1)} className={`${btn} flex items-center gap-1 border-slate-200 text-slate-600 disabled:opacity-40`}>পরের <ChevronRight className="w-4 h-4" /></button>
      </div>
    </div>
  );
};

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M13.5 21v-7.5h2.5l.5-3h-3V8.6c0-.9.3-1.5 1.6-1.5H16.7V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.5V21h3z" /></svg>
);

// ==========================================
// 4. MAIN APP COMPONENT
// ==========================================
// ---- Real date helpers (streak / days-ago are computed from real dates) ----
const dayKey = (d = new Date()) => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
const calcStreak = (days = []) => {
  const set = new Set(days); let n = 0; const d = new Date();
  if (!set.has(dayKey(d))) d.setDate(d.getDate() - 1);
  while (set.has(dayKey(d))) { n++; d.setDate(d.getDate() - 1); }
  return n;
};
const daysAgo = (key) => (key ? Math.round((new Date(dayKey()) - new Date(key)) / 86400000) : null);
const agoText = (n) => (n === null ? '' : n === 0 ? 'আজ' : `${n} দিন আগে`);
const scoreColor = (p) => (p >= 80 ? 'text-sky-700 bg-sky-50 border-sky-300' : p >= 60 ? 'text-amber-700 bg-amber-50 border-amber-300' : 'text-rose-700 bg-rose-50 border-rose-300');


const DUO_CSS = String.raw`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Hind+Siliguri:wght@500;600;700&display=swap');
.rk{font-family:'Nunito','Hind Siliguri',system-ui,sans-serif;color:#4B4B4B;background:#fff}
.rk.bg-slate-100{background:#fff}
.rk .text-slate-800{color:#3C3C3C}
.rk .bg-sky-500{background:#1CB0F6}
.rk .hover\:bg-sky-600:hover{background:#49C0F8}
.rk .border-sky-700{border-color:#1899D6}
.rk .bg-sky-50,.rk .bg-sky-100{background:#DDF4FF}
.rk .text-sky-600,.rk .text-sky-700,.rk .text-sky-800{color:#1899D6}
.rk .border-sky-200,.rk .border-sky-300{border-color:#84D8FF}
.rk .border-slate-200,.rk .border-slate-300{border-color:#E5E5E5}
.rk .shadow-md,.rk .shadow-lg,.rk .shadow-xl,.rk .shadow-sm{box-shadow:none}
.rk .rounded-3xl{border-width:2px;border-bottom-width:4px}
.rk .rounded-3xl.shadow-xl{box-shadow:none}
.rk header{background:#fff;border-bottom:2px solid #E5E5E5;box-shadow:none}
.rk .bg-gradient-to-tr{background:#1CB0F6;background-image:none;border-bottom:4px solid #1899D6}
.rk .bg-gradient-to-r.from-sky-500{background:#1CB0F6;background-image:none;border:0;border-bottom:6px solid #1899D6}
.rk footer{background:#fff;border-top:2px solid #E5E5E5;box-shadow:none}
.rk footer .bg-sky-50{background:#DDF4FF;border:2px solid #84D8FF}
.rk footer .text-sky-600{color:#1CB0F6}
.rk .border-b-4:active{border-bottom-width:0;transform:translateY(4px)}
.rk .duo-node{transition:transform .08s,box-shadow .08s}
.rk .duo-node:active{transform:translateY(5px);box-shadow:0 1px 0 rgba(0,0,0,.25)!important}
.rk :focus-visible{outline:3px solid #1CB0F6;outline-offset:2px}
@media (prefers-reduced-motion:reduce){.rk *{animation:none!important}}
`;
const UNIT_COLORS = [['#1CB0F6', '#1899D6'], ['#6366F1', '#4F46E5'], ['#CE82FF', '#A568CC'], ['#FF9600', '#CC7800'], ['#FF4B4B', '#D33131'], ['#2B70C9', '#1E5298']];

// ---- STEP 1: Gamification helpers (combo, daily goal, level titles, confetti) ----
const DAILY_GOAL = 50;
const LEVEL_TITLES = ['শিক্ষানবিশ 🌱', 'উৎসাহী 🔥', 'পাঠক 📖', 'বক্তা 🗣️', 'দক্ষ ⚡', 'বিশেষজ্ঞ 🎯', 'মাস্টার 👑', 'লিজেন্ড 🏆'];
const levelTitle = (lv) => LEVEL_TITLES[Math.min(lv - 1, LEVEL_TITLES.length - 1)];
const COMBO_MSGS = ['', '', '🔥 কম্বো x2!', '⚡ আনস্টপেবল x3! +৫ বোনাস', '🚀 অগ্নিঝড় x4! +৫ বোনাস', '👑 কিংবদন্তি x5! +৫ বোনাস'];
const buzz = (ms) => { try { navigator.vibrate && navigator.vibrate(ms); } catch (e) {} };
const Confetti = () => {
  const bits = useMemo(() => Array.from({ length: 48 }, (_, i) => ({
    left: Math.random() * 100, delay: Math.random() * 0.8, dur: 2 + Math.random() * 1.8,
    color: ['#0ea5e9', '#facc15', '#f43f5e', '#6366f1', '#06b6d4', '#f97316'][i % 6], rot: Math.random() * 360
  })), []);
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-50">
      {bits.map((b, i) => (
        <span key={i} className="fl-confetti" style={{ left: b.left + '%', background: b.color, animationDelay: b.delay + 's', animationDuration: b.dur + 's', transform: `rotate(${b.rot}deg)` }} />
      ))}
    </div>
  );
};

export default function App() {
  // --- Persistent User Stats ---
  const DEFAULT_STATS = { xp: 0, hearts: 5, maxHearts: 5, completedLessons: [], level: 1, savedWords: [], savedSentences: [], daily: {}, history: {}, exams: [], activeDays: [] };
  const [userStats, setUserStats] = useState(() => {
    try {
      const saved = localStorage.getItem('fluently_stats_v2');
      if (saved) return { ...DEFAULT_STATS, ...JSON.parse(saved) };
    } catch (e) {}
    return DEFAULT_STATS;
  });

  // Settings
  const [isSlowAudio, setIsSlowAudio] = useState(() => { try { return JSON.parse(localStorage.getItem('fluently_settings_v1') || '{}').slow || false; } catch (e) { return false; } });
  const [fontSize, setFontSize] = useState(() => { try { return JSON.parse(localStorage.getItem('fluently_settings_v1') || '{}').font || 'normal'; } catch (e) { return 'normal'; } });
  useEffect(() => { try { localStorage.setItem('fluently_settings_v1', JSON.stringify({ slow: isSlowAudio, font: fontSize })); } catch (e) {} }, [isSlowAudio, fontSize]); // 'normal' | 'large' (for seniors)

  // Navigation: 'path', 'dictionary', 'leaderboard', 'profile', 'lesson'
  const [activeTab, setActiveTab] = useState('path');

  // Active Lesson State
  const [activeLesson, setActiveLesson] = useState(null);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [reorderedWords, setReorderedWords] = useState([]);
  const [availableWords, setAvailableWords] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState({});
  const [selectedEn, setSelectedEn] = useState(null);
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

  // Search & Filter in Dictionary
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [wordPage, setWordPage] = useState(() => loadPage('words'));
  const [pathFilter, setPathFilter] = useState('core');
  const [sentCat, setSentCat] = useState('All');
  const [sentSearch, setSentSearch] = useState('');
  const [showBn, setShowBn] = useState(true);
  const [onlySaved, setOnlySaved] = useState(false);
  const [sentPage, setSentPage] = useState(() => loadPage('sents'));

  // Save Stats to LocalStorage
  useEffect(() => {
    localStorage.setItem('fluently_stats_v2', JSON.stringify(userStats));
  }, [userStats]);

  // Handle Question Initialization
  useEffect(() => {
    if (activeLesson) {
      const q = activeLesson.questions[questionIdx];
      setIsAnswerChecked(false);
      setSelectedOpt(null);
      setSelectedEn(null);
      setMatchedPairs({});
      
      if (q && q.type === 'reorder') {
        const shuffled = [...q.words].sort(() => Math.random() - 0.5);
        setAvailableWords(shuffled);
        setReorderedWords([]);
      }
    }
  }, [activeLesson, questionIdx]);

  // Lesson Trigger
  const startLesson = (lesson) => {
    const modId = lesson.moduleId || CURRICULUM_PATH.find(m => m.lessons.some(l => l.id === lesson.id))?.id;
    setActiveLesson({ ...lesson, moduleId: modId });
    setLessonCorrect(0);
    lessonStartRef.current = Date.now();
    levelAtStartRef.current = userStats.level;
    setCombo(0); setBestCombo(0); setComboToast('');
    setQuestionIdx(0);
    setShowSummary(false);
    setLessonXpEarned(0);
    setActiveTab('lesson');
  };

  const startModule = (m) => startLesson({
    id: m.id + '_all', moduleId: m.id, title: m.title,
    xp: m.lessons.reduce((n, l) => n + l.xp, 0),
    questions: m.lessons.flatMap(l => l.questions)
  });

  const startExam = () => {
    const pool = CURRICULUM_PATH.flatMap(m => m.lessons.flatMap(l => l.questions));
    const picked = [...pool].sort(() => Math.random() - 0.5).slice(0, 10);
    startLesson({ id: 'exam', title: 'পরীক্ষা (Exam)', xp: 20, isExam: true, questions: picked });
  };

  const handleRefillHearts = () => {
    setUserStats(prev => ({ ...prev, hearts: prev.maxHearts }));
    playSound('correct');
  };

  // Lesson Checking
  const handleCheckAnswer = () => {
    if (isAnswerChecked) return;

    const currentQ = activeLesson.questions[questionIdx];
    let correct = false;

    if (currentQ.type === 'mcq' || currentQ.type === 'listening') {
      correct = selectedOpt === currentQ.answer;
    } else if (currentQ.type === 'reorder') {
      correct = JSON.stringify(reorderedWords) === JSON.stringify(currentQ.answer);
    } else if (currentQ.type === 'matching') {
      correct = Object.keys(matchedPairs).length === currentQ.pairs.length;
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
      setCombo(0); setComboToast('');
      setUserStats(prev => ({
        ...prev,
        hearts: Math.max(0, prev.hearts - 1)
      }));
    }
  };

  const handleNextQuestion = () => {
    if (questionIdx + 1 < activeLesson.questions.length) {
      setQuestionIdx(prev => prev + 1);
    } else {
      // Lesson Complete Fanfare
      playSound('complete');
      setShowSummary(true);
      const totalXpGained = activeLesson.xp + lessonXpEarned;
      const pct = Math.round((lessonCorrect / activeLesson.questions.length) * 100);
      const today = dayKey();
      const secs = Math.min(3600, Math.round((Date.now() - lessonStartRef.current) / 1000));
      setUserStats(prev => {
        const h = { ...(prev.history || {}) };
        const bump = (key) => {
          const o = h[key] || { attempts: 0, best: 0 };
          h[key] = { attempts: o.attempts + 1, best: Math.max(o.best, pct), last: pct, lastDate: today };
        };
        if (!activeLesson.isExam) {
          if (!activeLesson.id.endsWith('_all')) bump(activeLesson.id);
          if (activeLesson.moduleId) bump(activeLesson.moduleId);
        }
        const dy = { ...(prev.daily || {}) };
        const d0 = dy[today] || { xp: 0, lessons: 0, correct: 0, total: 0, sec: 0 };
        dy[today] = { xp: d0.xp + totalXpGained, lessons: d0.lessons + 1, correct: d0.correct + lessonCorrect, total: d0.total + activeLesson.questions.length, sec: d0.sec + secs };
        const xp = prev.xp + totalXpGained;
        return {
          ...prev, daily: dy, xp, level: Math.floor(xp / 100) + 1, history: h,
          exams: activeLesson.isExam ? [...(prev.exams || []), { date: today, pct, total: activeLesson.questions.length }] : (prev.exams || []),
          completedLessons: activeLesson.isExam || activeLesson.id.endsWith('_all') ? prev.completedLessons : Array.from(new Set([...prev.completedLessons, activeLesson.id])),
          activeDays: Array.from(new Set([...(prev.activeDays || []), today]))
        };
      });
    }
  };

  // Bookmark / Save Word into User Bank
  const toggleSaveWord = (wordObj) => {
    setUserStats(prev => {
      const exists = prev.savedWords.some(w => w.id === wordObj.id);
      const updated = exists 
        ? prev.savedWords.filter(w => w.id !== wordObj.id)
        : [...prev.savedWords, wordObj];
      return { ...prev, savedWords: updated };
    });
  };

  const toggleSaveSentence = (id) => {
    setUserStats(prev => {
      const cur = prev.savedSentences || [];
      return { ...prev, savedSentences: cur.includes(id) ? cur.filter(x => x !== id) : [...cur, id] };
    });
  };

  const filteredSentences = useMemo(() => SENTENCE_BANK.filter(x =>
    (sentCat === 'All' || x.category === sentCat) &&
    (!onlySaved || (userStats.savedSentences || []).includes(x.id)) &&
    (x.en.toLowerCase().includes(sentSearch.toLowerCase()) || x.bn.includes(sentSearch))
  ), [sentCat, sentSearch, onlySaved, userStats.savedSentences]);

  const sentenceOfTheDay = SENTENCE_BANK[(new Date().getDate() * 7) % SENTENCE_BANK.length];

  // Filtered Word Bank List
  const filteredWords = useMemo(() => {
    return ALL_WORDS_DATABASE.filter(w => {
      const matchesSearch = w.word.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            w.bn.includes(searchTerm) || 
                            (w.phonetic || '').includes(searchTerm);
      const matchesCat = selectedCategory === 'All' || w.category === selectedCategory;
      return matchesSearch && matchesCat;
    });
  }, [searchTerm, selectedCategory]);

  const totalWordPages = Math.max(1, Math.ceil(filteredWords.length / PAGE_SIZE));
  const curWordPage = Math.min(wordPage, totalWordPages);
  const pagedWords = filteredWords.slice((curWordPage - 1) * PAGE_SIZE, curWordPage * PAGE_SIZE);
  const totalSentPages = Math.max(1, Math.ceil(filteredSentences.length / PAGE_SIZE));
  const curSentPage = Math.min(sentPage, totalSentPages);
  const pagedSents = filteredSentences.slice((curSentPage - 1) * PAGE_SIZE, curSentPage * PAGE_SIZE);
  const goWordPage = (p) => { setWordPage(p); savePage('words', p); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const goSentPage = (p) => { setSentPage(p); savePage('sents', p); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  const hist = userStats.history || {};
  const pctNow = activeLesson ? Math.round((lessonCorrect / activeLesson.questions.length) * 100) : 0;
  const weakModules = CURRICULUM_PATH.filter(m => hist[m.id] && (hist[m.id].last < 70 || daysAgo(hist[m.id].lastDate) >= 3))
    .sort((a, b) => hist[a.id].last - hist[b.id].last).slice(0, 3);

  return (
    <div className={`rk min-h-screen bg-slate-100 text-slate-800 font-sans flex flex-col justify-between selection:bg-sky-200 ${fontSize === 'large' ? 'text-lg' : 'text-base'}`}>
      <style>{DUO_CSS}</style>
      <style>{`
        @keyframes flFall { 0% { top: -5%; opacity: 1; } 100% { top: 105%; opacity: 0.9; } }
        .fl-confetti { position: absolute; top: -5%; width: 10px; height: 14px; border-radius: 2px; animation: flFall linear forwards; }
        @keyframes flPop { 0% { transform: scale(.6); opacity: 0; } 60% { transform: scale(1.15); } 100% { transform: scale(1); opacity: 1; } }
        .fl-pop { animation: flPop .35s ease-out; }
      `}</style>
      
      {/* ================= TOP BRAND HEADER ================= */}
      <header className="sticky top-0 z-40 bg-white border-b-2 border-slate-200 shadow-sm px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => setActiveTab('path')}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-500 to-sky-400 flex items-center justify-center text-white font-black text-2xl shadow-md group-hover:scale-105 transition-transform">
              F
            </div>
            <div>
              <span className="font-extrabold text-2xl tracking-tight text-slate-800 group-hover:text-sky-600 transition-colors">
                Fluently
              </span>
              <span className="block text-[10px] font-extrabold uppercase tracking-widest text-sky-600">
                ইংরেজি শিখুন সহজে
              </span>
            </div>
          </div>

          {/* User Gamification Counters */}
          <div className="flex items-center space-x-2 sm:space-x-4 font-black text-xs sm:text-sm">
            {/* Streak */}
            <div className="flex items-center space-x-1.5 text-amber-500 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200 shadow-sm">
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-500 animate-pulse" />
              <span>{calcStreak(userStats.activeDays)} দিন</span>
            </div>

            {/* XP */}
            <div className="flex items-center space-x-1.5 text-yellow-500 bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-200 shadow-sm">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-500" />
              <span>{userStats.xp} XP</span>
            </div>

            {/* Hearts */}
            <button
              onClick={handleRefillHearts}
              title="Click to Refill Hearts!"
              className="flex items-center space-x-1.5 text-rose-500 bg-rose-50 px-3 py-1.5 rounded-full border border-rose-200 hover:bg-rose-100 transition-colors shadow-sm"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-rose-500" />
              <span>{userStats.hearts}</span>
            </button>
          </div>

        </div>
      </header>

      {/* ================= MAIN CONTENT AREA ================= */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-6">

        {/* ---------------- TABS 1: LEARNING PATH ---------------- */}
        {activeTab === 'path' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Age Adaptive Welcome Banner */}
            <div className="bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between">
              <div className="space-y-3 z-10 max-w-xl text-center sm:text-left">
                <span className="bg-white/20 backdrop-blur-md text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider text-sky-100">
                  সকল বয়সের মানুষের জন্য সহজ ইংরেজি
                </span>
                <h1 className="text-2xl sm:text-4xl font-black leading-tight">
                  আজকে নতুন কোনো ইংরেজি বাক্য শিখে নিন!
                </h1>
                <p className="text-sky-100 text-sm sm:text-base font-medium">
                  প্রতিদিন মাত্র ১০ মিনিটের খেলায় আয়ত্ত করুন ১০০০+ প্রয়োজনীয় ইংরেজি শব্দ ও বাক্য।
                </p>
              </div>

              <div className="mt-6 sm:mt-0 z-10 flex flex-col items-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-3xl flex items-center justify-center border-4 border-white/30 backdrop-blur-md text-5xl shadow-2xl mb-2">
                  🦉
                </div>
                <div className="bg-white text-sky-700 font-extrabold text-xs px-3 py-1.5 rounded-full shadow-md">
                  লেভেল {userStats.level} · {levelTitle(userStats.level)}
                </div>
                <div className="w-32 mt-2">
                  <div className="h-2.5 bg-white/25 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-300 rounded-full transition-all duration-700" style={{ width: `${userStats.xp % 100}%` }} />
                  </div>
                  <p className="text-[10px] font-bold text-sky-100 mt-1 text-center">পরের লেভেলে আর {100 - (userStats.xp % 100)} XP</p>
                </div>
              </div>
            </div>

            {/* Daily Goal Card */}
            {(() => {
              const todayXp = (userStats.daily || {})[dayKey()]?.xp || 0;
              const pct = Math.min(100, Math.round((todayXp / DAILY_GOAL) * 100));
              const done = todayXp >= DAILY_GOAL;
              const streak = calcStreak(userStats.activeDays);
              const R = 34, C = 2 * Math.PI * R;
              return (
                <div className={`rounded-3xl p-5 border-2 shadow-sm flex items-center gap-5 ${done ? 'bg-sky-50 border-sky-300' : 'bg-white border-slate-200'}`}>
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <svg viewBox="0 0 80 80" className="w-20 h-20 -rotate-90">
                      <circle cx="40" cy="40" r={R} fill="none" stroke="#e2e8f0" strokeWidth="9" />
                      <circle cx="40" cy="40" r={R} fill="none" stroke={done ? '#0ea5e9' : '#f59e0b'} strokeWidth="9" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C * (1 - pct / 100)} style={{ transition: 'stroke-dashoffset .8s ease' }} />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center font-black text-slate-700 text-sm">{done ? '✅' : pct + '%'}</div>
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="font-black text-slate-800">{done ? 'আজকের লক্ষ্য পূরণ! 🎉' : 'আজকের লক্ষ্য (Daily Goal)'}</h3>
                    <p className="text-sm font-bold text-slate-500">{todayXp} / {DAILY_GOAL} XP {done ? '— দারুণ! কাল আবার আসুন।' : `— আর ${DAILY_GOAL - todayXp} XP বাকি`}</p>
                    <p className="text-xs font-bold text-amber-600">
                      {streak > 0 ? `🔥 ${streak} দিনের স্ট্রিক${done ? ' সুরক্ষিত!' : ' — আজ না পড়লে ভেঙে যাবে!'}` : '🔥 আজই স্ট্রিক শুরু করুন!'}
                    </p>
                  </div>
                </div>
              );
            })()}

            {/* Path Modules List */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-black text-slate-800 flex items-center gap-2">
                  <Compass className="w-6 h-6 text-sky-600" />
                  শেখার পাঠ্যক্রম (Learning Modules)
                </h2>
                <span className="text-xs font-bold text-slate-400">
                  {userStats.completedLessons.length} / {CURRICULUM_PATH.reduce((n, m) => n + m.lessons.length, 0)} লেসন সম্পন্ন
                </span>
              </div>

              {weakModules.length > 0 && (
                <div className="bg-rose-50 border-2 border-rose-200 rounded-3xl p-5 space-y-3">
                  <h3 className="font-black text-rose-700 flex items-center gap-2">⚠️ অনুশীলন দরকার</h3>
                  {weakModules.map(m => {
                    const st = hist[m.id]; const ago = daysAgo(st.lastDate);
                    return (
                      <div key={m.id} className="flex items-center justify-between gap-3 bg-white rounded-2xl border border-rose-200 p-3">
                        <div>
                          <p className="font-extrabold text-sm text-slate-800">{m.icon} {m.title}</p>
                          <p className="text-xs font-semibold text-rose-600">
                            {st.last < 70 ? `শেষ স্কোর ${st.last}% (কম)` : `স্কোর ${st.last}%`} · শেষ অনুশীলন {agoText(ago)}
                          </p>
                        </div>
                        <button onClick={() => startModule(m)} className="px-3 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-black text-xs whitespace-nowrap">আবার দিন ↻</button>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {[['core', '🎯 মৌলিক পাঠ'], ['word', `📚 শব্দ (${ALL_WORDS_DATABASE.length})`], ['sent', `💬 বাক্য (${SENTENCE_BANK.length})`]].map(([k, label]) => (
                  <button key={k} onClick={() => setPathFilter(k)} className={`px-4 py-2 rounded-2xl border-2 font-black text-xs sm:text-sm transition-all ${pathFilter === k ? 'bg-sky-500 border-sky-700 text-white' : 'bg-white border-slate-200 text-slate-600 hover:border-sky-400'}`}>{label}</button>
                ))}
              </div>
              {pathFilter !== 'core' && (() => {
                const mods = CURRICULUM_PATH.filter(m => m.kind === pathFilter);
                const ls = mods.flatMap(m => m.lessons);
                const doneLs = ls.filter(l => userStats.completedLessons.includes(l.id));
                const learned = doneLs.reduce((n, l) => n + l.count, 0);
                const total = ls.reduce((n, l) => n + l.count, 0);
                return (
                  <div className="bg-sky-50 border-2 border-sky-200 rounded-2xl p-4">
                    <div className="flex items-center justify-between text-sm font-extrabold text-sky-800">
                      <span>{pathFilter === 'word' ? 'শেখা শব্দ' : 'শেখা বাক্য'}: {learned} / {total}</span>
                      <span>{doneLs.length} / {ls.length} লেসন · {mods.length}টি মডিউল</span>
                    </div>
                    <div className="h-2.5 bg-white rounded-full mt-2 overflow-hidden"><div className="h-full bg-sky-500 rounded-full transition-all" style={{ width: `${total ? Math.round((learned / total) * 100) : 0}%` }} /></div>
                  </div>
                );
              })()}
              <div className="space-y-10">
                {CURRICULUM_PATH.map((module, mi) => ({ module, mi })).filter(x => x.module.kind === pathFilter).map(({ module, mi }) => {
                  const pal = UNIT_COLORS[mi % UNIT_COLORS.length];
                  const doneN = module.lessons.filter(l => userStats.completedLessons.includes(l.id)).length;
                  const nextIdx = module.lessons.findIndex(l => !userStats.completedLessons.includes(l.id));
                  return (
                    <section key={module.id} className="space-y-5">
                      <div className="rounded-2xl p-4 flex items-center justify-between gap-3 text-white" style={{ background: pal[0], borderBottom: `5px solid ${pal[1]}` }}>
                        <div>
                          <p className="text-xs font-extrabold opacity-90">{module.kind === 'core' ? 'ইউনিট' : module.kind === 'word' ? 'শব্দ মডিউল' : 'বাক্য মডিউল'} {module.kindNo} · {doneN}/{module.lessons.length} সম্পন্ন</p>
                          <h3 className="text-lg font-black leading-tight">{module.icon} {module.title}</h3>
                          <p className="text-sm font-semibold opacity-90">{module.desc}</p>
                        </div>
                        {module.kind === 'core' && <button onClick={() => startModule(module)} className="shrink-0 px-3 py-2 rounded-xl bg-white font-black text-xs" style={{ color: pal[1], borderBottom: '4px solid #E5E5E5' }}>🔁 সব একসাথে</button>}
                      </div>
                      <div className="flex flex-col items-center gap-6 py-2">
                        {module.lessons.map((lesson, li) => {
                          const lh = hist[lesson.id];
                          const isDone = userStats.completedLessons.includes(lesson.id);
                          const isNext = li === nextIdx;
                          const off = Math.round(Math.sin(li * 0.9) * 48);
                          return (
                            <div key={lesson.id} className="relative flex flex-col items-center" style={{ transform: `translateX(${off}px)` }}>
                              {isNext && (
                                <div className="absolute -top-10 px-3 py-1.5 rounded-xl bg-white border-2 border-slate-200 font-black text-sm whitespace-nowrap animate-bounce" style={{ color: pal[1] }}>শুরু করুন</div>
                              )}
                              <button
                                onClick={() => startLesson(lesson)}
                                title={lesson.title}
                                aria-label={lesson.title}
                                className="duo-node w-[72px] h-[72px] rounded-full flex items-center justify-center text-white"
                                style={{ background: isDone ? '#FFC800' : pal[0], boxShadow: `0 6px 0 ${isDone ? '#E5A800' : pal[1]}` }}
                              >
                                {isDone ? <Check className="w-8 h-8 stroke-[4]" /> : <Play className="w-7 h-7 fill-current ml-1" />}
                              </button>
                              <p className="text-center text-xs font-extrabold text-slate-500 mt-3 max-w-[120px] leading-tight">{lesson.title}</p>
                              {lh && <span className="text-[11px] font-bold text-amber-600">{lh.last}% · +{lesson.xp} XP</span>}
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

        {/* ---------------- TABS 2: 1000+ WORD BANK (শব্দকোষ) ---------------- */}
        {activeTab === 'dictionary' && (
          <div className="space-y-6 animate-fadeIn">
            
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-sky-600" />
                    {ALL_WORDS_DATABASE.length}টি ইংরেজি শব্দকোষ (Word Bank)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    বাংলা অর্থ, সঠিক উচ্চারণ এবং সাউন্ডসহ যেকোনো শব্দ খুঁজুন।
                  </p>
                </div>
                
                {/* Word Stats */}
                <div className="bg-sky-50 border border-sky-200 px-4 py-2 rounded-2xl font-bold text-xs text-sky-700">
                  মোট সংরক্ষিত শব্দ: {userStats.savedWords.length} টি
                </div>
              </div>

              {/* Search input & category filter */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <div className="relative flex-1">
                  <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="ইংরেজি শব্দ বা বাংলা অর্থ দিয়ে খুঁজুন..."
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value); setWordPage(1); }}
                    className="w-full pl-11 pr-4 py-3 rounded-2xl border-2 border-slate-200 focus:border-sky-500 focus:outline-none font-bold text-sm bg-slate-50"
                  />
                </div>

                <select
                  value={selectedCategory}
                  onChange={(e) => { setSelectedCategory(e.target.value); setWordPage(1); }}
                  className="px-4 py-3 rounded-2xl border-2 border-slate-200 bg-slate-50 font-bold text-sm focus:outline-none focus:border-sky-500"
                >
                  <option value="All">সকল ক্যাটাগরি</option>
                  {ALL_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between px-1 text-xs font-extrabold text-slate-500">
              <span>পেজ {curWordPage} / {totalWordPages}</span>
              <span>শব্দ {filteredWords.length ? (curWordPage - 1) * PAGE_SIZE + 1 : 0}–{Math.min(curWordPage * PAGE_SIZE, filteredWords.length)} · মোট {filteredWords.length}টি</span>
            </div>
            {/* Word Grid Display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {pagedWords.map((item) => {
                const isSaved = userStats.savedWords.some(w => w.id === item.id);
                return (
                  <div key={item.id} className="bg-white rounded-2xl border-2 border-slate-200 p-4 shadow-sm hover:border-sky-400 transition-all space-y-2 relative group">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-extrabold text-sky-600 bg-sky-50 border border-sky-200 rounded-full px-2 py-0.5">শব্দ #{item.id}</span>
                        <h4 className="font-black text-lg text-slate-800 mt-1">{item.word}</h4>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.pos}</span>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <button
                          onClick={() => speakText(item.word, isSlowAudio)}
                          className="p-2 bg-sky-50 text-sky-600 rounded-xl hover:bg-sky-100 transition-colors"
                          title="উচ্চারণ শুনুন"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => toggleSaveWord(item)}
                          className={`p-2 rounded-xl transition-colors ${
                            isSaved ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-400 hover:text-slate-600'
                          }`}
                          title="শব্দটি সেভ করুন"
                        >
                          <Bookmark className="w-4 h-4 fill-current" />
                        </button>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-2 flex items-center justify-between text-xs sm:text-sm">
                      <span className="font-extrabold text-sky-700">{item.bn}</span>
                      {item.phonetic && <span className="text-slate-400 font-semibold italic">[{item.phonetic}]</span>}
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

        {/* ---------------- TAB: SENTENCE BANK ---------------- */}
        {activeTab === 'sentences' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl p-5 text-white shadow-lg flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-sky-100">আজকের বাক্য · Sentence of the Day</span>
                <p className="text-xl font-black mt-1">{sentenceOfTheDay.en}</p>
                <p className="text-sm font-bold text-sky-100">{sentenceOfTheDay.bn}</p>
              </div>
              <button onClick={() => speakText(sentenceOfTheDay.en, isSlowAudio)} className="p-3 bg-white/20 hover:bg-white/30 rounded-2xl"><Volume2 className="w-6 h-6" /></button>
            </div>
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-sky-600" /> সেন্টেন্স ব্যাংক ({SENTENCE_BANK.length}টি বাক্য)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">রোজকার কাজের রেডিমেড বাক্য। শুনুন, বলুন, মুখস্থ করুন।</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => { setOnlySaved(v => !v); setSentPage(1); }}
                  className={`px-4 py-2 rounded-2xl font-bold text-xs border-2 flex items-center gap-1.5 ${onlySaved ? 'bg-amber-100 border-amber-400 text-amber-700' : 'bg-slate-50 border-slate-200 text-slate-600'}`}
                >
                  <Bookmark className="w-4 h-4 fill-current" /> সেভ করা ({(userStats.savedSentences || []).length})
                </button>
                <button
                  onClick={() => setShowBn(v => !v)}
                  className={`px-4 py-2 rounded-2xl font-bold text-xs border-2 ${showBn ? 'bg-sky-50 border-sky-300 text-sky-700' : 'bg-amber-50 border-amber-300 text-amber-700'}`}
                >
                  {showBn ? 'বাংলা লুকান (নিজেকে পরীক্ষা করুন)' : 'বাংলা দেখান'}
                </button>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  value={sentSearch}
                  onChange={(e) => { setSentSearch(e.target.value); setSentPage(1); }}
                  placeholder="বাক্য খুঁজুন..."
                  className="flex-1 px-4 py-3 rounded-2xl border-2 border-slate-200 focus:border-sky-500 focus:outline-none font-bold text-sm bg-slate-50"
                />
                <select
                  value={sentCat}
                  onChange={(e) => { setSentCat(e.target.value); setSentPage(1); }}
                  className="px-4 py-3 rounded-2xl border-2 border-slate-200 bg-slate-50 font-bold text-sm focus:outline-none focus:border-sky-500"
                >
                  <option value="All">সকল ক্যাটাগরি</option>
                  {SENTENCE_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between px-1 text-xs font-extrabold text-slate-500">
              <span>পেজ {curSentPage} / {totalSentPages}</span>
              <span>বাক্য {filteredSentences.length ? (curSentPage - 1) * PAGE_SIZE + 1 : 0}–{Math.min(curSentPage * PAGE_SIZE, filteredSentences.length)} · মোট {filteredSentences.length}টি</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pagedSents.map(x => (
                <div key={x.id} className="bg-white rounded-2xl border-2 border-slate-200 p-4 shadow-sm hover:border-sky-400 transition-all flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-600">#{x.id} · {x.category}</span>
                    <p className="font-black text-slate-800">{x.en}</p>
                    {showBn && <p className="text-sm font-bold text-sky-700">{x.bn}</p>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <button onClick={() => speakText(x.en, false)} className="p-2 bg-sky-50 text-sky-600 rounded-xl hover:bg-sky-100" title="শুনুন"><Volume2 className="w-4 h-4" /></button>
                    <button onClick={() => speakText(x.en, true)} className="p-2 bg-slate-100 text-slate-500 rounded-xl hover:bg-slate-200" title="ধীরে শুনুন"><Turtle className="w-4 h-4" /></button>
                    <button onClick={() => toggleSaveSentence(x.id)} className={`p-2 rounded-xl ${(userStats.savedSentences || []).includes(x.id) ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-400 hover:text-slate-600'}`} title="সেভ করুন"><Bookmark className="w-4 h-4 fill-current" /></button>
                  </div>
                </div>
              ))}
            </div>

            <Pager page={curSentPage} total={totalSentPages} onChange={goSentPage} />
            {filteredSentences.length === 0 && (
              <p className="text-center font-bold text-slate-500 py-8">কোনো বাক্য পাওয়া যায়নি।</p>
            )}
          </div>
        )}


        {/* ---------------- TAB: ABOUT ---------------- */}
        {activeTab === 'about' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="rounded-3xl p-6 sm:p-8 text-white text-center space-y-3" style={{ background: '#1CB0F6', borderBottom: '6px solid #1899D6' }}>
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white text-sky-600 flex items-center justify-center font-black text-4xl">F</div>
              <h2 className="text-3xl font-black tracking-tight">Fluently</h2>
              <p className="font-bold text-sky-50 max-w-md mx-auto">বাংলাভাষী শিক্ষার্থীদের জন্য সহজ, ধাপে ধাপে ও আত্মবিশ্বাস জাগানো ইংরেজি শেখার প্ল্যাটফর্ম।</p>
              <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                <div className="bg-white/20 rounded-2xl py-2"><p className="text-xl font-black">{ALL_WORDS_DATABASE.length}</p><p className="text-[11px] font-bold">শব্দ</p></div>
                <div className="bg-white/20 rounded-2xl py-2"><p className="text-xl font-black">{SENTENCE_BANK.length}</p><p className="text-[11px] font-bold">বাক্য</p></div>
                <div className="bg-white/20 rounded-2xl py-2"><p className="text-xl font-black">{CURRICULUM_PATH.reduce((n, m) => n + m.lessons.length, 0)}</p><p className="text-[11px] font-bold">লেসন</p></div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 space-y-5">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-sky-600">প্রতিষ্ঠাতা · Founder</h3>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-sky-500 text-white flex items-center justify-center text-3xl font-black border-b-4 border-sky-700 shrink-0">TB</div>
                <div>
                  <h4 className="text-2xl font-black text-slate-800">Talha Belal</h4>
                  <p className="text-sm font-bold text-slate-500">Founder, Fluently</p>
                </div>
              </div>
              <a
                href="https://www.facebook.com/talha.belal.92"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-black text-sm border-b-4 border-sky-700 active:border-b-0 active:translate-y-1 transition-all"
              >
                <FacebookIcon className="w-5 h-5" /> Facebook-এ যোগাযোগ করুন <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 space-y-3">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2"><Target className="w-6 h-6 text-sky-600" /> কেন Fluently?</h3>
              <p className="text-sm sm:text-base font-semibold text-slate-600 leading-relaxed">
                অনেক বাংলাভাষী শিক্ষার্থী বছরের পর বছর ইংরেজি পড়েও কথা বলতে ভয় পান। তাঁদের সমস্যা মেধার নয়, সমস্যা হলো এমন একটি পথের অভাব যেখানে বাংলা অর্থ, সঠিক উচ্চারণ ও নিয়মিত অনুশীলন একসাথে পাওয়া যায়।
              </p>
              <p className="text-sm sm:text-base font-semibold text-slate-600 leading-relaxed">
                Talha Belal এই ঘাটতি পূরণের লক্ষ্য নিয়েই Fluently তৈরি করেছেন, যাতে প্রতিটি শিক্ষার্থী প্রতিদিন অল্প সময়ে, নিজের গতিতে, ধাপে ধাপে ইংরেজি শিখতে পারেন এবং শেখার অগ্রগতি নিজের চোখে দেখতে পারেন।
              </p>
            </div>

            <div className="bg-sky-50 border-2 border-sky-200 rounded-3xl p-6 space-y-3">
              <h3 className="text-xl font-black text-sky-800">ইংরেজি শিখতে যারা শুরু করছেন, তাঁদের জন্য</h3>
              <ul className="space-y-2 text-sm sm:text-base font-bold text-sky-900">
                <li>✔ ভুল করা শেখারই অংশ। ভুল থেকেই ভাষা পাকা হয়।</li>
                <li>✔ প্রতিদিন মাত্র ১০ মিনিট নিয়মিত অনুশীলন, মাসের শেষে বড় পরিবর্তন আনে।</li>
                <li>✔ শব্দ মুখস্থ নয়, বাক্যে ব্যবহার করুন। জোরে বলুন, শুনুন, আবার বলুন।</li>
                <li>✔ অন্যের সাথে তুলনা নয়, গতকালের নিজের সাথে তুলনা করুন।</li>
              </ul>
              <p className="text-sm font-extrabold text-sky-700 pt-1">আপনি পারবেন। শুধু শুরুটা করুন, বাকিটা Fluently-র সঙ্গে ধাপে ধাপে এগোবে।</p>
            </div>

            <p className="text-center text-xs font-bold text-slate-400 pb-2">© {new Date().getFullYear()} Fluently · Founded by Talha Belal</p>
          </div>
        )}

        {/* ---------------- TABS 3: LEADERBOARD & BADGES ---------------- */}
        {activeTab === 'leaderboard' && (
          <div className="space-y-6 animate-fadeIn">
            
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-sm space-y-6">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto text-3xl text-yellow-600 shadow-inner border-2 border-yellow-300">
                  🏆
                </div>
                <h2 className="text-2xl font-black text-slate-800">লীডারবোর্ড (Weekly Leaderboard)</h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">প্রতি সপ্তাহে সর্বোচ্চ XP অর্জনকারী শিক্ষার্থীদের তালিকা</p>
              </div>

              <div className="space-y-3">
                {[
                  { rank: 1, name: 'তানভীর আহমেদ', xp: 480, level: 5, avatar: '👨‍🎓' },
                  { rank: 2, name: 'আপনি (You)', xp: userStats.xp, level: userStats.level, avatar: '🦉', isUser: true },
                  { rank: 3, name: 'নুসরাত জাহান', xp: 110, level: 2, avatar: '👩‍🏫' },
                  { rank: 4, name: 'আরিফ হোসেন', xp: 95, level: 1, avatar: '👨‍💻' }
                ].sort((a,b) => b.xp - a.xp).map((user, idx) => (
                  <div 
                    key={idx}
                    className={`flex items-center justify-between p-4 rounded-2xl border-2 font-bold ${
                      user.isUser ? 'bg-sky-50 border-sky-400 text-sky-900 shadow-sm' : 'bg-white border-slate-200 text-slate-700'
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
                        <span className="text-xs text-slate-400 font-semibold">লেভেল {user.level}</span>
                      </div>
                    </div>
                    <span className="font-black text-amber-500 text-sm sm:text-base flex items-center gap-1">
                      <Zap className="w-4 h-4 fill-amber-500" /> {user.xp} XP
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ---------------- TABS 4: SETTINGS & PROFILE ---------------- */}
        {activeTab === 'profile' && (
          <div className="space-y-6 animate-fadeIn">
            
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-sm space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-sky-400 to-sky-600 flex items-center justify-center text-4xl text-white shadow-md">
                  🦉
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-800">শিক্ষার্থী ড্যাশবোর্ড</h2>
                  <p className="text-xs text-slate-400 font-bold">Fluently Learner Profile</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-3"><p className="text-2xl font-black text-yellow-600">{userStats.xp}</p><p className="text-[11px] font-bold text-slate-500">মোট XP</p></div>
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3"><p className="text-2xl font-black text-amber-600">{calcStreak(userStats.activeDays)}</p><p className="text-[11px] font-bold text-slate-500">টানা দিন</p></div>
                <div className="bg-sky-50 border border-sky-200 rounded-2xl p-3"><p className="text-2xl font-black text-sky-600">{(userStats.activeDays || []).length}</p><p className="text-[11px] font-bold text-slate-500">মোট শেখার দিন</p></div>
              </div>

              <div className="border-t border-slate-100 pt-6 space-y-3">
                <h3 className="font-black text-base text-slate-800">📊 মডিউল অনুশীলন (যতবার খুশি)</h3>
                {CURRICULUM_PATH.map(m => {
                  const st = hist[m.id];
                  return (
                    <div key={m.id} className="flex items-center justify-between gap-3 p-3 rounded-2xl border border-slate-200 bg-slate-50">
                      <div className="min-w-0">
                        <p className="font-bold text-sm text-slate-800 truncate">{m.icon} {m.title}</p>
                        <p className="text-xs text-slate-500 font-semibold">
                          {st ? `${st.attempts} বার · শেষ ${agoText(daysAgo(st.lastDate))} · সেরা ${st.best}%` : 'এখনও দেওয়া হয়নি'}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {st && <span className={`text-xs font-black px-2.5 py-1 rounded-full border ${scoreColor(st.last)}`}>{st.last}%</span>}
                        <button onClick={() => startModule(m)} className="px-3 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-black text-xs">আবার দিন ↻</button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-slate-100 pt-6 space-y-3">
                <h3 className="font-black text-base text-slate-800">📝 পরীক্ষা (Exam)</h3>
                <p className="text-xs text-slate-500 font-semibold">সব মডিউল থেকে ১০টি র‍্যান্ডম প্রশ্ন · পাস মার্ক ৭০% · যতবার খুশি দিতে পারবেন</p>
                <button onClick={startExam} className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-black py-3.5 rounded-2xl border-b-4 border-indigo-700 active:border-b-0 active:translate-y-1 transition-all">পরীক্ষা শুরু করুন</button>
                {(userStats.exams || []).length > 0 && (
                  <div className="space-y-2">
                    {[...userStats.exams].reverse().slice(0, 5).map((e, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-2xl border border-slate-200 text-sm font-bold">
                        <span className="text-slate-600">{e.date} ({agoText(daysAgo(e.date))})</span>
                        <span className={e.pct >= 70 ? 'text-sky-600' : 'text-rose-600'}>{e.pct}% · {e.pct >= 70 ? 'পাস ✅' : 'ফেল ❌'}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-slate-100 pt-6 space-y-3">
                <h3 className="font-black text-base text-slate-800">📅 দৈনিক ট্র্যাকিং (শেষ ৭ দিন)</h3>
                {Array.from({ length: 7 }, (_, i) => dayKey(new Date(Date.now() - i * 86400000))).map(k => {
                  const d = (userStats.daily || {})[k];
                  return (
                    <div key={k} className={`flex items-center justify-between p-3 rounded-2xl border text-sm font-bold ${d ? 'bg-sky-50 border-sky-200 text-slate-800' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                      <span>{k} {k === dayKey() && '(আজ)'}</span>
                      <span>{d ? `${d.xp} XP · ${d.lessons} লেসন · ${Math.max(1, Math.round(d.sec / 60))} মিনিট · ${Math.round((d.correct / Math.max(1, d.total)) * 100)}%` : 'শেখা হয়নি'}</span>
                    </div>
                  );
                })}
                <p className="text-[11px] text-slate-400 font-semibold">সব স্কোর ও দৈনিক হিসাব আপনার ডিভাইসেই (localStorage) সেভ থাকে।</p>
              </div>

              {/* Preferences Settings */}
              <div className="border-t border-slate-100 pt-6 space-y-4">
                <h3 className="font-black text-base text-slate-800 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-sky-600" /> অ্যাপ সেটিংস (Settings)
                </h3>

                {/* Slow Audio Toggle for Seniors & Kids */}
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="flex items-center space-x-3">
                    <Turtle className="w-6 h-6 text-sky-600" />
                    <div>
                      <p className="font-bold text-sm text-slate-800">ধীরগতির অডিও (Slow Audio Mode)</p>
                      <span className="text-xs text-slate-500">শিশু ও বয়স্কদের ইংরেজি বুঝতে সুবিধাজনক</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsSlowAudio(!isSlowAudio)}
                    className={`px-4 py-2 rounded-xl font-bold text-xs transition-colors ${
                      isSlowAudio ? 'bg-sky-500 text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {isSlowAudio ? 'অন (ON)' : 'অফ (OFF)'}
                  </button>
                </div>

                {/* Font Size Toggle */}
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="flex items-center space-x-3">
                    <Layers className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-bold text-sm text-slate-800">লেখার সাইজ (Font Size)</p>
                      <span className="text-xs text-slate-500">সহজে পড়ার জন্য বড় সাইজ বেছে নিন</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
                    className="px-4 py-2 bg-slate-200 font-bold text-xs text-slate-700 rounded-xl hover:bg-slate-300"
                  >
                    {fontSize === 'normal' ? 'সাধারণ (Normal)' : 'বড় (Large)'}
                  </button>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* ---------------- TABS 5: ACTIVE LESSON SCREEN ---------------- */}
        {activeTab === 'lesson' && activeLesson && (
          <div className="max-w-2xl mx-auto space-y-6 animate-fadeIn">
            
            {/* Top Progress Bar & Exit */}
            {!showSummary && (
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setActiveTab('path')} 
                  className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100"
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
                  🏆
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-800">অসাধারণ! লেসন সফলভাবে সম্পন্ন হয়েছে!</h2>
                  <p className="text-slate-500 mt-1 font-bold">
                    {activeLesson.isExam ? (pctNow >= 70 ? '✅ পরীক্ষায় পাস করেছেন!' : '❌ পাস মার্ক ৭০%। আবার চেষ্টা করুন।') : pctNow >= 80 ? 'চমৎকার স্কোর!' : pctNow >= 60 ? 'ভালো, আরেকবার দিলে আরও ভালো হবে।' : 'স্কোর কম, আবার অনুশীলন করুন।'}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center">
                    <span className="text-xs font-bold text-amber-600 uppercase">মোট অর্জিত XP</span>
                    <p className="text-2xl font-black text-amber-700">+{activeLesson.xp + lessonXpEarned}</p>
                  </div>
                  <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 text-center">
                    <span className="text-xs font-bold text-sky-600 uppercase">সঠিক উত্তর</span>
                    <p className="text-2xl font-black text-sky-700">{pctNow}%</p>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  {pctNow === 100 && <span className="fl-pop bg-yellow-100 text-yellow-700 border border-yellow-300 font-black text-xs px-3 py-1.5 rounded-full">💎 পারফেক্ট লেসন!</span>}
                  {bestCombo >= 3 && <span className="fl-pop bg-orange-100 text-orange-700 border border-orange-300 font-black text-xs px-3 py-1.5 rounded-full">🔥 সেরা কম্বো x{bestCombo}</span>}
                  {userStats.level > levelAtStartRef.current && <span className="fl-pop bg-indigo-100 text-indigo-700 border border-indigo-300 font-black text-xs px-3 py-1.5 rounded-full">⬆️ লেভেল আপ! {levelTitle(userStats.level)}</span>}
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => startLesson(activeLesson)}
                    className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-black py-4 rounded-2xl shadow-lg border-b-4 border-indigo-700 active:border-b-0 active:translate-y-1 transition-all text-lg"
                  >
                    🔁 আবার দিন
                  </button>
                  <button
                    onClick={() => setActiveTab('path')}
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white font-black py-4 rounded-2xl shadow-lg border-b-4 border-sky-700 active:border-b-0 active:translate-y-1 transition-all text-lg"
                  >
                    মডিউল তালিকায় ফিরুন
                  </button>
                </div>
              </div>
            ) : (
              /* ACTIVE QUESTION CARD */
              <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-8 shadow-sm space-y-6 min-h-[400px] flex flex-col justify-between">
                
                {(() => {
                  const q = activeLesson.questions[questionIdx];
                  return (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase tracking-wider text-slate-400 bg-slate-100 px-3.5 py-1.5 rounded-full">
                          প্রশ্ন {questionIdx + 1} / {activeLesson.questions.length}
                        </span>
                        <button 
                          onClick={() => speakText(q.questionEn || q.audioText || "", isSlowAudio)}
                          className="flex items-center gap-1.5 text-xs font-bold text-sky-600 bg-sky-50 px-3 py-1.5 rounded-full hover:bg-sky-100 transition-colors"
                        >
                          <Volume2 className="w-4 h-4" /> সাউন্ড শুনুন {isSlowAudio && '(Slow)'}
                        </button>
                      </div>

                      <h2 className="text-lg sm:text-xl font-extrabold text-slate-800">
                        {q.prompt}
                      </h2>

                      {/* Display Main English Phrase */}
                      {q.questionEn && q.type !== 'listening' && (
                        <div className="flex items-center space-x-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                          <button 
                            onClick={() => speakText(q.questionEn, isSlowAudio)} 
                            className="p-3 bg-sky-500 hover:bg-sky-600 text-white rounded-xl shadow transition-transform active:scale-95"
                          >
                            <Volume2 className="w-5 h-5" />
                          </button>
                          <span className="text-xl font-black tracking-wide text-slate-800">
                            "{q.questionEn}"
                          </span>
                        </div>
                      )}

                      {/* QUESTION TYPE 1: MULTIPLE CHOICE */}
                      {q.type === 'mcq' && (
                        <div className="grid grid-cols-1 gap-3 pt-2">
                          {q.options.map((opt, idx) => (
                            <button
                              key={idx}
                              onClick={() => setSelectedOpt(opt)}
                              className={`w-full p-4 rounded-2xl border-2 text-left font-bold text-base transition-all flex items-center justify-between ${
                                selectedOpt === opt
                                  ? 'border-sky-500 bg-sky-50 text-sky-900 shadow-sm'
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
                                নিচে থেকে সঠিক শব্দে ট্যাপ করে বাক্য তৈরি করুন...
                              </span>
                            ) : (
                              reorderedWords.map((word, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => {
                                    setReorderedWords(prev => prev.filter((_, i) => i !== idx));
                                    setAvailableWords(prev => [...prev, word]);
                                  }}
                                  className="bg-white border-2 border-slate-200 px-3.5 py-2 rounded-xl text-slate-800 font-bold shadow-sm hover:border-rose-300 transition-colors"
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
                                className="bg-slate-100 hover:bg-slate-200 border-2 border-slate-300 text-slate-800 font-extrabold px-4 py-2.5 rounded-2xl shadow-sm transition-all text-base"
                              >
                                {word}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* QUESTION TYPE 3: LISTENING PRACTICE */}
                      {q.type === 'listening' && (
                        <div className="space-y-6 text-center pt-2">
                          <button
                            onClick={() => speakText(q.audioText, isSlowAudio)}
                            className="mx-auto w-24 h-24 bg-sky-500 hover:bg-sky-600 text-white rounded-3xl flex items-center justify-center shadow-lg border-b-4 border-sky-700 active:translate-y-1 transition-all group"
                          >
                            <Volume2 className="w-12 h-12 group-hover:scale-110 transition-transform" />
                          </button>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {q.options.map((opt, idx) => (
                              <button
                                key={idx}
                                onClick={() => setSelectedOpt(opt)}
                                className={`p-4 rounded-2xl border-2 font-bold text-slate-700 transition-all ${
                                  selectedOpt === opt
                                    ? 'border-sky-500 bg-sky-50 text-sky-900 shadow-sm'
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
                      {q.type === 'matching' && (
                        <div className="grid grid-cols-2 gap-4 pt-2">
                          <div className="space-y-2">
                            <span className="text-xs font-bold text-slate-400 block text-center mb-1 uppercase">ENGLISH</span>
                            {q.pairs.map((pair, idx) => {
                              const isMatched = matchedPairs[pair.en];
                              const isSelected = selectedEn === pair.en;
                              return (
                                <button
                                  key={idx}
                                  disabled={isMatched}
                                  onClick={() => setSelectedEn(pair.en)}
                                  className={`w-full p-3.5 rounded-xl border-2 font-bold text-sm transition-all ${
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
                                  disabled={matchedEn}
                                  onClick={() => {
                                    if (selectedEn) {
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
                                  className={`w-full p-3.5 rounded-xl border-2 font-bold text-sm transition-all ${
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
                        <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-6 h-6 text-rose-600 flex-shrink-0 mt-0.5" />
                      )}
                      <div className="space-y-1">
                        <h4 className="font-extrabold text-base">
                          {isCorrect ? 'অসাধারণ! উত্তরটি সঠিক হয়েছে।' : 'ভুল উত্তর!'}
                        </h4>
                        {isCorrect && comboToast && <p className="fl-pop text-sm font-black text-orange-600">{comboToast}</p>}
                        {activeLesson.questions[questionIdx].hint && (
                          <p className="text-xs font-semibold opacity-90">
                            💡 ব্যাখ্যামূলক টিপস: {activeLesson.questions[questionIdx].hint}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {!isAnswerChecked ? (
                    <button
                      onClick={handleCheckAnswer}
                      className="w-full bg-sky-500 hover:bg-sky-600 text-white font-black py-4 rounded-2xl shadow-md border-b-4 border-sky-700 active:border-b-0 active:translate-y-1 transition-all text-base"
                    >
                      উত্তর যাচাই করুন (Check Answer)
                    </button>
                  ) : (
                    <button
                      onClick={handleNextQuestion}
                      className={`w-full font-black py-4 rounded-2xl shadow-md border-b-4 active:border-b-0 active:translate-y-1 transition-all text-base text-white ${
                        isCorrect ? 'bg-sky-500 hover:bg-sky-600 border-sky-700' : 'bg-rose-500 hover:bg-rose-600 border-rose-700'
                      }`}
                    >
                      পরবর্তী প্রশ্ন (Continue)
                    </button>
                  )}
                </div>

              </div>
            )}
          </div>
        )}

      </main>

      {/* ================= BOTTOM NAVIGATION BAR ================= */}
      {activeTab !== 'lesson' && (
        <footer className="sticky bottom-0 bg-white border-t-2 border-slate-200 py-3 px-4 z-30 shadow-lg">
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-1">
            
            <button
              onClick={() => setActiveTab('path')}
              className={`flex flex-col items-center space-y-1 px-3 py-1 rounded-2xl transition-all ${
                activeTab === 'path' ? 'text-sky-600 font-extrabold bg-sky-50' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <Home className="w-6 h-6" />
              <span className="text-[11px] font-bold">শিখুন (Path)</span>
            </button>

            <button
              onClick={() => setActiveTab('dictionary')}
              className={`flex flex-col items-center space-y-1 px-3 py-1 rounded-2xl transition-all ${
                activeTab === 'dictionary' ? 'text-sky-600 font-extrabold bg-sky-50' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <BookOpen className="w-6 h-6" />
              <span className="text-[11px] font-bold">শব্দকোষ (Word Bank)</span>
            </button>

            <button
              onClick={() => setActiveTab('sentences')}
              className={`flex flex-col items-center space-y-1 px-3 py-1 rounded-2xl transition-all ${
                activeTab === 'sentences' ? 'text-sky-600 font-extrabold bg-sky-50' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <Sparkles className="w-6 h-6" />
              <span className="text-[11px] font-bold">বাক্য (Sentences)</span>
            </button>

            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`flex flex-col items-center space-y-1 px-3 py-1 rounded-2xl transition-all ${
                activeTab === 'leaderboard' ? 'text-sky-600 font-extrabold bg-sky-50' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <Trophy className="w-6 h-6" />
              <span className="text-[11px] font-bold">র‍্যাঙ্ক (Ranks)</span>
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className={`flex flex-col items-center space-y-1 px-3 py-1 rounded-2xl transition-all ${
                activeTab === 'profile' ? 'text-sky-600 font-extrabold bg-sky-50' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <User className="w-6 h-6" />
              <span className="text-[11px] font-bold">প্রোফাইল (Profile)</span>
            </button>

            <button
              onClick={() => setActiveTab('about')}
              className={`flex flex-col items-center space-y-1 px-3 py-1 rounded-2xl transition-all ${
                activeTab === 'about' ? 'text-sky-600 font-extrabold bg-sky-50' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <Info className="w-6 h-6" />
              <span className="text-[11px] font-bold">About</span>
            </button>

          </div>
        </footer>
      )}

    </div>
  );
}