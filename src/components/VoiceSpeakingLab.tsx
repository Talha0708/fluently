import React, { useState, useEffect, useRef } from 'react';
import {
  Mic,
  MicOff,
  Volume2,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Award,
  Turtle,
  FastForward,
  ChevronRight,
  ChevronLeft,
  VolumeX,
  Target,
  ShieldAlert,
  ThumbsUp
} from 'lucide-react';
import { computeSpeechAccuracy } from '../utils/srsEngine';

interface VoiceSpeakingLabProps {
  onReward: (xp: number, gems: number) => void;
  onSpeak: (text: string, isSlow?: boolean) => void;
  isSlowAudio: boolean;
  onPlaySound: (type: 'correct' | 'wrong' | 'complete' | 'levelup' | 'reward' | 'gem') => void;
}

// Key curated native fluency drills for Bengali learners
const SPEAKING_DRILLS: Array<{
  en: string;
  bn: string;
  phoneticBn: string;
  level: string;
  tip: string;
}> = [
  {
    en: 'Good morning, how are you today?',
    bn: 'শুভ সকাল, আজ আপনি কেমন আছেন?',
    phoneticBn: 'গুড মর্নিং, হাউ আর ইউ টুডে?',
    level: 'A1',
    tip: 'Today শব্দে "ডে" এর বদলে হালকা "ডেই" টানলে নেটিভ শোনায়।',
  },
  {
    en: 'Could you please bring me a glass of water?',
    bn: 'দয়া করে আমাকে এক গ্লাস পানি দেবেন কি?',
    phoneticBn: 'কুড ইউ প্লিজ ব্রিং মি আ গ্লাস অব ওয়াটার?',
    level: 'A1',
    tip: '"Could you" উচ্চারণ করার সময় "কুড ইউ" এর জায়গায় হালকা "কুজু" ব্লেন্ড হয়।',
  },
  {
    en: 'I usually wake up at six in the morning.',
    bn: 'আমি সাধারণত সকাল ছয়টায় ঘুম থেকে উঠি।',
    phoneticBn: 'আই ইউজুয়ালি ওয়েক আপ অ্যাট সিক্স ইন দ্য মর্নিং।',
    level: 'A2',
    tip: 'Usually শব্দের মাঝের "s" উচ্চারণ হবে নরম "ঝ"-এর মতো (zh)।',
  },
  {
    en: 'How much does this pair of shoes cost?',
    bn: 'এই জুতো জোড়ার দাম কত?',
    phoneticBn: 'হাউ মাচ ডাজ দিস পেয়ার অব শুজ কস্ট?',
    level: 'A2',
    tip: 'Does শব্দে শেষে হালকা "জ" উচ্চারণ করুন, "ডাস" বলবেন না।',
  },
  {
    en: 'Could you please tell me when the next train departs?',
    bn: 'পরবর্তী ট্রেনটি কখন ছাড়বে অনুগ্রহ করে বলবেন কি?',
    phoneticBn: 'কুড ইউ প্লিজ টেল মি হোয়েন দ্য নেক্সট ট্রেইন ডিপার্টস?',
    level: 'B1',
    tip: 'Train শব্দে "ট" না বলে হালকা তালু ছুঁয়ে "ট্র" বলুন।',
  },
  {
    en: 'In my honest opinion, technology makes our lives much easier.',
    bn: 'আমার আন্তরিক মতে, প্রযুক্তি আমাদের জীবনকে অনেক সহজ করে তুলেছে।',
    phoneticBn: 'ইন মাই অনেস্ট অপিনিয়ন, টেকনোলজি মেকস আওয়ার লাইভস মাচ ইজিয়ার।',
    level: 'B1',
    tip: 'Honest শব্দে "H" সাইলেন্ট থাকে — উচ্চারণ শুরু হয় "অ" দিয়ে।',
  },
  {
    en: 'We must meet the deadline without compromising quality.',
    bn: 'কাজের মান বজায় রেখে আমাদের সময়সীমা রক্ষা করতে হবে।',
    phoneticBn: 'উই মাস্ট মিট দ্য ডেডলাইন উইদাউট কম্প্রোমাইজিং কোয়ালিটি।',
    level: 'B2',
    tip: 'Compromising শব্দে স্ট্রেস দিন প্রথম অংশে (COM-pro-mi-sing)।',
  },
  {
    en: 'Actions speak much louder than words, so let your work show.',
    bn: 'কথার চেয়ে কাজের জোর বেশি, তাই কাজ করে প্রমাণ দিন।',
    phoneticBn: 'অ্যাকশনস স্পিক মাচ লাউডার দ্যান ওয়ার্ডস, সো লেট ইয়োর ওয়ার্ক শো।',
    level: 'B2',
    tip: 'এটি একটি জনপ্রিয় নেটিভ ইডিয়াম, ছন্দ রেখে এক নিঃশ্বাসে বলুন।',
  },
  {
    en: 'With patience and dedication, fluency is completely within your reach.',
    bn: 'ধৈর্য এবং নিষ্ঠা থাকলে সাবলীল ইংরেজি সম্পূর্ণ আপনার হাতের মুঠোয়।',
    phoneticBn: 'উইথ পেশেন্স অ্যান্ড ডেডিকেশন, ফ্লুয়েন্সি ইজ কমপ্লিটলি উইদিন ইয়োর রিচ।',
    level: 'C1',
    tip: 'Patience শব্দে "শন" নয়, নরম "শেন্স" উচ্চারণ করুন।',
  },
];

export const VoiceSpeakingLab: React.FC<VoiceSpeakingLabProps> = ({
  onReward,
  onSpeak,
  isSlowAudio,
  onPlaySound,
}) => {
  const [drillIdx, setDrillIdx] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [accuracy, setAccuracy] = useState<number | null>(null);
  const [hasEvaluated, setHasEvaluated] = useState(false);
  const [speechError, setSpeechError] = useState<string | null>(null);
  const [hasMicPermission, setHasMicPermission] = useState<boolean | null>(null);
  const [selfPracticed, setSelfPracticed] = useState(false);

  const mediaStreamRef = useRef<MediaStream | null>(null);
  const recognitionRef = useRef<any>(null);
  const currentDrill = SPEAKING_DRILLS[drillIdx];

  // Safely stop any active media stream
  const stopMediaStream = () => {
    if (mediaStreamRef.current) {
      try {
        mediaStreamRef.current.getTracks().forEach(t => t.stop());
      } catch {}
      mediaStreamRef.current = null;
    }
  };

  // Initialize Speech Recognition helper
  const getRecognition = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return null;

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        setSpeechError(null);
        setHasMicPermission(true);
      };

      recognition.onresult = (event: any) => {
        let currentTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript;
        }
        setTranscript(currentTranscript);
      };

      recognition.onerror = (event: any) => {
        setIsListening(false);
        stopMediaStream();
        if (event.error === 'not-allowed') {
          setHasMicPermission(false);
          setSpeechError('মাইক্রোফোন পারমিশন বন্ধ আছে। অনুগ্রহ করে নিচের বাটনে ক্লিক করে পারমিশন দিন।');
        } else if (event.error === 'no-speech') {
          setSpeechError('কোনো আওয়াজ পাওয়া যায়নি। আরেকটু স্পষ্ট করে জোরে বলুন।');
        } else {
          setSpeechError(`মাইক্রোফোন স্ট্যাটাস: ${event.error}`);
        }
      };

      recognition.onend = () => {
        setIsListening(false);
        stopMediaStream();
      };

      return recognition;
    } catch {
      return null;
    }
  };

  // Directly ask device for microphone permission via getUserMedia
  const requestDeviceMicPermission = async (): Promise<boolean> => {
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Stop any old stream first
        stopMediaStream();
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaStreamRef.current = stream;
        setHasMicPermission(true);
        setSpeechError(null);
        return true;
      }
    } catch (err: any) {
      console.warn('getUserMedia error:', err);
      setHasMicPermission(false);
      setSpeechError('ব্রাউজার মাইক্রোফোন পারমিশন রিকোয়েস্ট ডিনাই করেছে। ব্রাউজারের সাইট সেটিংসে গিয়ে মাইক্রোফোন অন করুন।');
      return false;
    }
    return false;
  };

  const handleStartListening = async () => {
    setTranscript('');
    setAccuracy(null);
    setHasEvaluated(false);
    setSpeechError(null);
    setSelfPracticed(false);

    // Prompt user's device directly for microphone permission
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        stopMediaStream();
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaStreamRef.current = stream;
        setHasMicPermission(true);
      }
    } catch (err: any) {
      console.warn('Microphone permission prompt denied or blocked:', err);
      setHasMicPermission(false);
      setSpeechError('মাইক্রোফোন পারমিশন প্রয়োজন। অনুমতি দিতে নিচের বাটনে চাপ দিন।');
      return;
    }

    let rec = recognitionRef.current;
    if (!rec) {
      rec = getRecognition();
      recognitionRef.current = rec;
    }

    if (rec) {
      try {
        rec.start();
      } catch {
        try {
          rec.stop();
        } catch {}
        setTimeout(() => {
          try {
            recognitionRef.current = getRecognition();
            recognitionRef.current?.start();
          } catch (e: any) {
            setSpeechError('মাইক্রোফোন স্পিচ রিকগনিশন চালু করা যাচ্ছে না। আবার চেষ্টা করুন।');
          }
        }, 100);
      }
    } else {
      setSpeechError('আপনার ব্রাউজারে স্পিচ রিকগনিশন নেই। আপনি মুখে বলে স্ব-অনুশীলন করতে পারেন।');
    }
  };

  const handleStopAndEvaluate = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {}
    }
    stopMediaStream();
    setIsListening(false);

    const score = computeSpeechAccuracy(transcript, currentDrill.en);
    setAccuracy(score);
    setHasEvaluated(true);

    if (score >= 80) {
      onPlaySound('levelup');
      onReward(15, 2);
    } else if (score >= 50) {
      onPlaySound('correct');
      onReward(10, 1);
    } else {
      onPlaySound('wrong');
    }
  };

  // Self-practice completion for when user chooses manual verification
  const handleSelfPracticeComplete = () => {
    setSelfPracticed(true);
    setHasEvaluated(true);
    setAccuracy(85);
    onPlaySound('correct');
    onReward(10, 1);
  };

  const handleNextDrill = () => {
    setDrillIdx(prev => (prev + 1) % SPEAKING_DRILLS.length);
    setTranscript('');
    setAccuracy(null);
    setHasEvaluated(false);
    setSpeechError(null);
    setSelfPracticed(false);
  };

  const handlePrevDrill = () => {
    setDrillIdx(prev => (prev - 1 + SPEAKING_DRILLS.length) % SPEAKING_DRILLS.length);
    setTranscript('');
    setAccuracy(null);
    setHasEvaluated(false);
    setSpeechError(null);
    setSelfPracticed(false);
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-8">
      {/* Speaking Hero Card */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between">
        <div className="space-y-2 z-10 max-w-xl text-center sm:text-left">
          <span className="bg-white/20 backdrop-blur-md text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider text-emerald-100 flex items-center gap-1.5 w-fit mx-auto sm:mx-0">
            <Mic className="w-3.5 h-3.5" /> মুখে বলা স্পিকিং ল্যাব (Voice AI Lab)
          </span>
          <h2 className="text-2xl sm:text-3xl font-black leading-tight">
            মুখের জড়তা কাটান, কথা বলুন নেটিভদের মতো!
          </h2>
          <p className="text-emerald-100 text-xs sm:text-sm font-medium leading-relaxed">
            শুধু পড়া নয় — মাইক্রোফোনে সরাসরি মুখে বলে উচ্চারণ যাচাই করুন। এআই আপনার অ্যাকুরেসি পরিমাপ করবে।
          </p>
        </div>

        <div className="mt-4 sm:mt-0 bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center shrink-0">
          <p className="text-2xl font-black">{drillIdx + 1} / {SPEAKING_DRILLS.length}</p>
          <p className="text-[10px] font-bold text-emerald-100 uppercase tracking-wider">স্পিকিং ড্রিল</p>
        </div>
      </div>

      {/* Active Drill Card */}
      <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-8 shadow-xs space-y-6 max-w-2xl mx-auto">
        {/* Navigation & Level Tag */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevDrill}
            className="p-2 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-100 cursor-pointer flex items-center gap-1 text-xs font-extrabold"
          >
            <ChevronLeft className="w-4 h-4" /> পূর্ববর্তী
          </button>

          <span className="text-xs font-black px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            লেভেল {currentDrill.level}
          </span>

          <button
            onClick={handleNextDrill}
            className="p-2 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-100 cursor-pointer flex items-center gap-1 text-xs font-extrabold"
          >
            পরবর্তী <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* English Sentence Display */}
        <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 text-center space-y-3">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
            "{currentDrill.en}"
          </h3>
          <p className="text-base font-extrabold text-emerald-600">
            {currentDrill.bn}
          </p>
          <div className="bg-white rounded-xl py-1.5 px-3 inline-block border border-slate-200">
            <p className="text-xs font-bold text-slate-500">
              বাংলা উচ্চারণ: <span className="font-extrabold text-slate-700">{currentDrill.phoneticBn}</span>
            </p>
          </div>
        </div>

        {/* Audio Listening Buttons */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => onSpeak(currentDrill.en, false)}
            className="px-4 py-2.5 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-black text-xs shadow-xs flex items-center gap-2 cursor-pointer transition-all active:scale-95"
          >
            <Volume2 className="w-4 h-4" /> স্বাভাবিক গতিতে শুনুন
          </button>
          <button
            onClick={() => onSpeak(currentDrill.en, true)}
            className="px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-black text-xs flex items-center gap-2 cursor-pointer transition-all active:scale-95"
          >
            <Turtle className="w-4 h-4 text-emerald-600" /> ধীর গতিতে শুনুন
          </button>
        </div>

        {/* Pronunciation Pro Tip */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3.5 flex items-start gap-2.5 text-xs font-semibold text-amber-900">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-black text-amber-950">নেটিভ সিক্রেট টিপ: </span>
            {currentDrill.tip}
          </div>
        </div>

        {/* Speech Recognition Recording Area */}
        <div className="text-center space-y-4 pt-2">
          {!isListening ? (
            <button
              onClick={handleStartListening}
              className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white flex items-center justify-center text-3xl shadow-xl border-4 border-emerald-200 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              title="কথা বলতে ট্যাপ করুন"
            >
              <Mic className="w-10 h-10" />
            </button>
          ) : (
            <button
              onClick={handleStopAndEvaluate}
              className="w-24 h-24 mx-auto rounded-full bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center text-3xl shadow-xl border-4 border-rose-200 animate-pulse active:scale-95 transition-all cursor-pointer"
              title="রেকর্ডিং শেষ করতে ট্যাপ করুন"
            >
              <MicOff className="w-10 h-10" />
            </button>
          )}

          <p className="text-xs font-extrabold text-slate-500">
            {isListening ? (
              <span className="text-rose-600 animate-pulse font-black">
                🔴 শুনছি... বাক্যটি স্পষ্ট করে মুখে বলুন (থামতে আবার ট্যাপ করুন)
              </span>
            ) : (
              'মাইক্রোফোন বাটনে ট্যাপ করে জোরে বাক্যটি মুখে বলুন'
            )}
          </p>

          {/* Instant permission / Retry banner if blocked */}
          {speechError && (
            <div className="p-4 bg-rose-50 border-2 border-rose-200 rounded-2xl text-xs space-y-2 text-rose-800 text-left">
              <div className="flex items-center gap-2 font-black">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{speechError}</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  onClick={requestDeviceMicPermission}
                  className="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-black text-xs rounded-xl shadow-xs cursor-pointer"
                >
                  ডিভাইসে পারমিশন চান (Request Permission)
                </button>
                <button
                  onClick={handleSelfPracticeComplete}
                  className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs rounded-xl shadow-xs cursor-pointer flex items-center gap-1"
                >
                  <ThumbsUp className="w-3.5 h-3.5" /> আমি মুখে বলেছি (+১০ XP)
                </button>
              </div>
            </div>
          )}

          {/* Transcript Display */}
          {transcript && (
            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-4 text-left space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                আপনি যা বলেছেন (Speech Recognized):
              </span>
              <p className="text-base font-black text-slate-800">"{transcript}"</p>
            </div>
          )}

          {/* Accuracy Score & Evaluation Feedback */}
          {hasEvaluated && accuracy !== null && (
            <div className={`p-5 rounded-2xl border-2 space-y-3 animate-fadeIn text-left ${
              accuracy >= 80
                ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                : accuracy >= 50
                ? 'bg-amber-50 border-amber-300 text-amber-950'
                : 'bg-rose-50 border-rose-300 text-rose-950'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider">
                  উচ্চারণ নির্ভুলতা (Accuracy Score)
                </span>
                <span className="text-2xl font-black">
                  {accuracy}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-3 bg-white/60 rounded-full overflow-hidden border border-black/10">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    accuracy >= 80 ? 'bg-emerald-500' : accuracy >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                  }`}
                  style={{ width: `${accuracy}%` }}
                />
              </div>

              {/* Feedback text */}
              <p className="text-sm font-extrabold">
                {selfPracticed ? (
                  '👍 চমৎকার স্ব-অনুশীলন! নিয়মিত মুখে বললে জড়তা কেটে যাবে। (+১০ XP)'
                ) : accuracy >= 80 ? (
                  '🎉 অসাধারণ উচ্চারণ! একদম নেটিভ স্পিকারের মতো স্পষ্ট হয়েছে! (+১৫ XP)'
                ) : accuracy >= 50 ? (
                  '👍 খুব ভালো হয়েছে! আরেকবার অডিওটি শুনে পুনরাবৃত্তি করুন। (+১০ XP)'
                ) : (
                  '💪 কোনো চিন্তা নেই! অডিওটি ধীর গতিতে শুনুন এবং আরেকবার বলুন।'
                )}
              </p>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleNextDrill}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs rounded-xl shadow-xs cursor-pointer"
                >
                  পরবর্তী বাক্য প্র্যাকটিস করুন →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
