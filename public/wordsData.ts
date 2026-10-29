export interface WordItem {
  id: number;
  word: string;
  bn: string;
  phonetic?: string;
  pos: string;
  category: string;
  level: string;
}

export const ALL_WORDS_DATABASE: WordItem[] = ([
  {
    "word": "Hello",
    "bn": "হ্যালো / ওহে",
    "phonetic": "হ্যালো",
    "pos": "interjection",
    "category": "Basics",
    "level": "A1",
    "id": 1
  },
  {
    "word": "Good Morning",
    "bn": "শুভ সকাল",
    "phonetic": "গুড মর্নিং",
    "pos": "phrase",
    "category": "Basics",
    "level": "A1",
    "id": 2
  },
  {
    "word": "Thank you",
    "bn": "ধন্যবাদ",
    "phonetic": "থ্যাংক ইউ",
    "pos": "phrase",
    "category": "Basics",
    "level": "A1",
    "id": 3
  },
  {
    "word": "Welcome",
    "bn": "স্বাগতম",
    "phonetic": "ওয়েলকাম",
    "pos": "noun/verb",
    "category": "Basics",
    "level": "A1",
    "id": 4
  },
  {
    "word": "Family",
    "bn": "পরিবার",
    "phonetic": "ফ্যামিলি",
    "pos": "noun",
    "category": "Family",
    "level": "A1",
    "id": 5
  },
  {
    "word": "Father",
    "bn": "বাবা",
    "phonetic": "ফাদার",
    "pos": "noun",
    "category": "Family",
    "level": "A1",
    "id": 6
  },
  {
    "word": "Mother",
    "bn": "মা",
    "phonetic": "মাদার",
    "pos": "noun",
    "category": "Family",
    "level": "A1",
    "id": 7
  },
  {
    "word": "Brother",
    "bn": "ভাই",
    "phonetic": "ব্রাদার",
    "pos": "noun",
    "category": "Family",
    "level": "A1",
    "id": 8
  },
  {
    "word": "Sister",
    "bn": "বোন",
    "phonetic": "সিস্টার",
    "pos": "noun",
    "category": "Family",
    "level": "A1",
    "id": 9
  },
  {
    "word": "Friend",
    "bn": "বন্ধু",
    "phonetic": "ফ্রেন্ড",
    "pos": "noun",
    "category": "Social",
    "level": "A1",
    "id": 10
  },
  {
    "word": "Water",
    "bn": "পানি / জল",
    "phonetic": "ওয়াটার",
    "pos": "noun",
    "category": "Food",
    "level": "A1",
    "id": 11
  },
  {
    "word": "Rice",
    "bn": "ভাত / চাল",
    "phonetic": "রাইস",
    "pos": "noun",
    "category": "Food",
    "level": "A1",
    "id": 12
  },
  {
    "word": "Apple",
    "bn": "আপেল",
    "phonetic": "অ্যাপল",
    "pos": "noun",
    "category": "Food",
    "level": "A1",
    "id": 13
  },
  {
    "word": "Bread",
    "bn": "রুটি",
    "phonetic": "ব্রেড",
    "pos": "noun",
    "category": "Food",
    "level": "A1",
    "id": 14
  },
  {
    "word": "Book",
    "bn": "বই",
    "phonetic": "বুক",
    "pos": "noun",
    "category": "Objects",
    "level": "A1",
    "id": 15
  },
  {
    "word": "Pen",
    "bn": "কলম",
    "phonetic": "পেন",
    "pos": "noun",
    "category": "Objects",
    "level": "A1",
    "id": 16
  },
  {
    "word": "Chair",
    "bn": "চেয়ার / কেদারা",
    "phonetic": "চেয়ার",
    "pos": "noun",
    "category": "Objects",
    "level": "A1",
    "id": 17
  },
  {
    "word": "Table",
    "bn": "টেবিল / মেজ",
    "phonetic": "টেবিল",
    "pos": "noun",
    "category": "Objects",
    "level": "A1",
    "id": 18
  },
  {
    "word": "House",
    "bn": "বাড়ি / ঘর",
    "phonetic": "হাউস",
    "pos": "noun",
    "category": "Places",
    "level": "A1",
    "id": 19
  },
  {
    "word": "School",
    "bn": "বিদ্যালয় / স্কুল",
    "phonetic": "স্কুল",
    "pos": "noun",
    "category": "Places",
    "level": "A1",
    "id": 20
  },
  {
    "word": "Eat",
    "bn": "খাওয়া",
    "phonetic": "ইট",
    "pos": "verb",
    "category": "Actions",
    "level": "A1",
    "id": 21
  },
  {
    "word": "Drink",
    "bn": "পান করা",
    "phonetic": "ড্রিংক",
    "pos": "verb",
    "category": "Actions",
    "level": "A1",
    "id": 22
  },
  {
    "word": "Read",
    "bn": "পড়া",
    "phonetic": "রিড",
    "pos": "verb",
    "category": "Actions",
    "level": "A1",
    "id": 23
  },
  {
    "word": "Write",
    "bn": "লেখা",
    "phonetic": "রাইট",
    "pos": "verb",
    "category": "Actions",
    "level": "A1",
    "id": 24
  },
  {
    "word": "Sleep",
    "bn": "ঘুমানো",
    "phonetic": "স্লিপ",
    "pos": "verb",
    "category": "Actions",
    "level": "A1",
    "id": 25
  },
  {
    "word": "Walk",
    "bn": "হাঁটা",
    "phonetic": "ওয়াক",
    "pos": "verb",
    "category": "Actions",
    "level": "A1",
    "id": 26
  },
  {
    "word": "Speak",
    "bn": "কথা বলা",
    "phonetic": "স্পিক",
    "pos": "verb",
    "category": "Actions",
    "level": "A1",
    "id": 27
  },
  {
    "word": "Listen",
    "bn": "শোনা",
    "phonetic": "লিসেন",
    "pos": "verb",
    "category": "Actions",
    "level": "A1",
    "id": 28
  },
  {
    "word": "Learn",
    "bn": "শেখা",
    "phonetic": "লার্ন",
    "pos": "verb",
    "category": "Actions",
    "level": "A1",
    "id": 29
  },
  {
    "word": "Understand",
    "bn": "বুঝতে পারা",
    "phonetic": "আন্ডারস্ট্যান্ড",
    "pos": "verb",
    "category": "Actions",
    "level": "A1",
    "id": 30
  },
  {
    "word": "Meeting",
    "bn": "সভা / মিটিং",
    "phonetic": "মিটিং",
    "pos": "noun",
    "category": "Workplace",
    "level": "A1",
    "id": 31
  },
  {
    "word": "Project",
    "bn": "প্রকল্প",
    "phonetic": "প্রজেক্ট",
    "pos": "noun",
    "category": "Workplace",
    "level": "A1",
    "id": 32
  },
  {
    "word": "Manager",
    "bn": "ব্যবস্থাপক",
    "phonetic": "ম্যানেজার",
    "pos": "noun",
    "category": "Workplace",
    "level": "A1",
    "id": 33
  },
  {
    "word": "Opportunity",
    "bn": "সুযোগ",
    "phonetic": "অপরচুনিটি",
    "pos": "noun",
    "category": "Workplace",
    "level": "A1",
    "id": 34
  },
  {
    "word": "Success",
    "bn": "সাফল্য",
    "phonetic": "সাকসেস",
    "pos": "noun",
    "category": "General",
    "level": "A1",
    "id": 35
  },
  {
    "word": "Experience",
    "bn": "অভিজ্ঞতা",
    "phonetic": "এক্সপেরিয়েন্স",
    "pos": "noun",
    "category": "Workplace",
    "level": "A1",
    "id": 36
  },
  {
    "word": "Schedule",
    "bn": "সময়সূচী",
    "phonetic": "শিডিউল",
    "pos": "noun",
    "category": "Workplace",
    "level": "A1",
    "id": 37
  },
  {
    "word": "Deadline",
    "bn": "সর্বশেষ সময়সীমা",
    "phonetic": "ডেডলাইন",
    "pos": "noun",
    "category": "Workplace",
    "level": "A1",
    "id": 38
  },
  {
    "word": "go",
    "bn": "যাওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 39
  },
  {
    "word": "come",
    "bn": "আসা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 40
  },
  {
    "word": "see",
    "bn": "দেখা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 41
  },
  {
    "word": "look",
    "bn": "তাকানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 42
  },
  {
    "word": "give",
    "bn": "দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 43
  },
  {
    "word": "take",
    "bn": "নেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 44
  },
  {
    "word": "make",
    "bn": "বানানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 45
  },
  {
    "word": "do",
    "bn": "করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 46
  },
  {
    "word": "say",
    "bn": "বলা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 47
  },
  {
    "word": "tell",
    "bn": "জানানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 48
  },
  {
    "word": "ask",
    "bn": "জিজ্ঞাসা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 49
  },
  {
    "word": "answer",
    "bn": "উত্তর দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 50
  },
  {
    "word": "think",
    "bn": "ভাবা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 51
  },
  {
    "word": "know",
    "bn": "জানা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 52
  },
  {
    "word": "want",
    "bn": "চাওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 53
  },
  {
    "word": "need",
    "bn": "দরকার হওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 54
  },
  {
    "word": "like",
    "bn": "পছন্দ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 55
  },
  {
    "word": "love",
    "bn": "ভালোবাসা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 56
  },
  {
    "word": "help",
    "bn": "সাহায্য করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 57
  },
  {
    "word": "work",
    "bn": "কাজ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 58
  },
  {
    "word": "play",
    "bn": "খেলা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 59
  },
  {
    "word": "run",
    "bn": "দৌড়ানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 60
  },
  {
    "word": "sit",
    "bn": "বসা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 61
  },
  {
    "word": "stand",
    "bn": "দাঁড়ানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 62
  },
  {
    "word": "open",
    "bn": "খোলা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 63
  },
  {
    "word": "close",
    "bn": "বন্ধ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 64
  },
  {
    "word": "buy",
    "bn": "কেনা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 65
  },
  {
    "word": "sell",
    "bn": "বিক্রি করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 66
  },
  {
    "word": "pay",
    "bn": "টাকা দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 67
  },
  {
    "word": "wait",
    "bn": "অপেক্ষা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 68
  },
  {
    "word": "call",
    "bn": "ডাকা / ফোন করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 69
  },
  {
    "word": "send",
    "bn": "পাঠানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 70
  },
  {
    "word": "bring",
    "bn": "আনা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 71
  },
  {
    "word": "cook",
    "bn": "রান্না করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 72
  },
  {
    "word": "wash",
    "bn": "ধোয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 73
  },
  {
    "word": "clean",
    "bn": "পরিষ্কার করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 74
  },
  {
    "word": "wear",
    "bn": "পরা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 75
  },
  {
    "word": "wake",
    "bn": "জাগা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 76
  },
  {
    "word": "start",
    "bn": "শুরু করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 77
  },
  {
    "word": "stop",
    "bn": "থামা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 78
  },
  {
    "word": "finish",
    "bn": "শেষ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 79
  },
  {
    "word": "try",
    "bn": "চেষ্টা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 80
  },
  {
    "word": "use",
    "bn": "ব্যবহার করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 81
  },
  {
    "word": "find",
    "bn": "খুঁজে পাওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 82
  },
  {
    "word": "lose",
    "bn": "হারানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 83
  },
  {
    "word": "keep",
    "bn": "রাখা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 84
  },
  {
    "word": "meet",
    "bn": "দেখা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 85
  },
  {
    "word": "remember",
    "bn": "মনে রাখা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 86
  },
  {
    "word": "forget",
    "bn": "ভুলে যাওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 87
  },
  {
    "word": "believe",
    "bn": "বিশ্বাস করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 88
  },
  {
    "word": "laugh",
    "bn": "হাসা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 89
  },
  {
    "word": "cry",
    "bn": "কাঁদা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 90
  },
  {
    "word": "sing",
    "bn": "গান গাওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 91
  },
  {
    "word": "dance",
    "bn": "নাচা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 92
  },
  {
    "word": "drive",
    "bn": "গাড়ি চালানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 93
  },
  {
    "word": "travel",
    "bn": "ভ্রমণ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 94
  },
  {
    "word": "visit",
    "bn": "ঘুরে দেখা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 95
  },
  {
    "word": "live",
    "bn": "বাস করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 96
  },
  {
    "word": "teach",
    "bn": "শেখানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 97
  },
  {
    "word": "study",
    "bn": "পড়াশোনা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 98
  },
  {
    "word": "swim",
    "bn": "সাঁতার কাটা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 99
  },
  {
    "word": "jump",
    "bn": "লাফানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 100
  },
  {
    "word": "fall",
    "bn": "পড়ে যাওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 101
  },
  {
    "word": "push",
    "bn": "ঠেলা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 102
  },
  {
    "word": "pull",
    "bn": "টানা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 103
  },
  {
    "word": "break",
    "bn": "ভাঙা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 104
  },
  {
    "word": "build",
    "bn": "তৈরি করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 105
  },
  {
    "word": "change",
    "bn": "বদলানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 106
  },
  {
    "word": "choose",
    "bn": "বেছে নেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 107
  },
  {
    "word": "decide",
    "bn": "সিদ্ধান্ত নেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 108
  },
  {
    "word": "agree",
    "bn": "একমত হওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 109
  },
  {
    "word": "explain",
    "bn": "ব্যাখ্যা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 110
  },
  {
    "word": "share",
    "bn": "ভাগ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 111
  },
  {
    "word": "join",
    "bn": "যোগ দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 112
  },
  {
    "word": "win",
    "bn": "জেতা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 113
  },
  {
    "word": "enjoy",
    "bn": "উপভোগ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 114
  },
  {
    "word": "hope",
    "bn": "আশা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 115
  },
  {
    "word": "worry",
    "bn": "দুশ্চিন্তা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 116
  },
  {
    "word": "borrow",
    "bn": "ধার নেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 117
  },
  {
    "word": "lend",
    "bn": "ধার দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 118
  },
  {
    "word": "apply",
    "bn": "আবেদন করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 119
  },
  {
    "word": "head",
    "bn": "মাথা",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 120
  },
  {
    "word": "face",
    "bn": "মুখ",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 121
  },
  {
    "word": "eye",
    "bn": "চোখ",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 122
  },
  {
    "word": "ear",
    "bn": "কান",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 123
  },
  {
    "word": "nose",
    "bn": "নাক",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 124
  },
  {
    "word": "mouth",
    "bn": "মুখগহ্বর",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 125
  },
  {
    "word": "tooth",
    "bn": "দাঁত",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 126
  },
  {
    "word": "hair",
    "bn": "চুল",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 127
  },
  {
    "word": "hand",
    "bn": "হাত",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 128
  },
  {
    "word": "finger",
    "bn": "আঙুল",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 129
  },
  {
    "word": "arm",
    "bn": "বাহু",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 130
  },
  {
    "word": "leg",
    "bn": "পা",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 131
  },
  {
    "word": "foot",
    "bn": "পায়ের পাতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 132
  },
  {
    "word": "heart",
    "bn": "হৃদয়",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 133
  },
  {
    "word": "stomach",
    "bn": "পেট",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 134
  },
  {
    "word": "back",
    "bn": "পিঠ",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 135
  },
  {
    "word": "neck",
    "bn": "গলা",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 136
  },
  {
    "word": "shoulder",
    "bn": "কাঁধ",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 137
  },
  {
    "word": "skin",
    "bn": "ত্বক",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 138
  },
  {
    "word": "blood",
    "bn": "রক্ত",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 139
  },
  {
    "word": "knee",
    "bn": "হাঁটু",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 140
  },
  {
    "word": "bone",
    "bn": "হাড়",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 141
  },
  {
    "word": "fever",
    "bn": "জ্বর",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 142
  },
  {
    "word": "pain",
    "bn": "ব্যথা",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 143
  },
  {
    "word": "cough",
    "bn": "কাশি",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 144
  },
  {
    "word": "headache",
    "bn": "মাথাব্যথা",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 145
  },
  {
    "word": "medicine",
    "bn": "ওষুধ",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 146
  },
  {
    "word": "doctor",
    "bn": "ডাক্তার",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 147
  },
  {
    "word": "today",
    "bn": "আজ",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 148
  },
  {
    "word": "tomorrow",
    "bn": "আগামীকাল",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 149
  },
  {
    "word": "yesterday",
    "bn": "গতকাল",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 150
  },
  {
    "word": "now",
    "bn": "এখন",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 151
  },
  {
    "word": "morning",
    "bn": "সকাল",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 152
  },
  {
    "word": "afternoon",
    "bn": "বিকাল",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 153
  },
  {
    "word": "evening",
    "bn": "সন্ধ্যা",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 154
  },
  {
    "word": "night",
    "bn": "রাত",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 155
  },
  {
    "word": "day",
    "bn": "দিন",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 156
  },
  {
    "word": "week",
    "bn": "সপ্তাহ",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 157
  },
  {
    "word": "month",
    "bn": "মাস",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 158
  },
  {
    "word": "year",
    "bn": "বছর",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 159
  },
  {
    "word": "hour",
    "bn": "ঘণ্টা",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 160
  },
  {
    "word": "minute",
    "bn": "মিনিট",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 161
  },
  {
    "word": "always",
    "bn": "সবসময়",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 162
  },
  {
    "word": "never",
    "bn": "কখনো না",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 163
  },
  {
    "word": "sometimes",
    "bn": "মাঝে মাঝে",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 164
  },
  {
    "word": "early",
    "bn": "তাড়াতাড়ি",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 165
  },
  {
    "word": "late",
    "bn": "দেরি",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 166
  },
  {
    "word": "soon",
    "bn": "শীঘ্রই",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 167
  },
  {
    "word": "Monday",
    "bn": "সোমবার",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 168
  },
  {
    "word": "Tuesday",
    "bn": "মঙ্গলবার",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 169
  },
  {
    "word": "Wednesday",
    "bn": "বুধবার",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 170
  },
  {
    "word": "Thursday",
    "bn": "বৃহস্পতিবার",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 171
  },
  {
    "word": "Friday",
    "bn": "শুক্রবার",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 172
  },
  {
    "word": "Saturday",
    "bn": "শনিবার",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 173
  },
  {
    "word": "Sunday",
    "bn": "রবিবার",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 174
  },
  {
    "word": "one",
    "bn": "এক",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 175
  },
  {
    "word": "two",
    "bn": "দুই",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 176
  },
  {
    "word": "three",
    "bn": "তিন",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 177
  },
  {
    "word": "four",
    "bn": "চার",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 178
  },
  {
    "word": "five",
    "bn": "পাঁচ",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 179
  },
  {
    "word": "six",
    "bn": "ছয়",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 180
  },
  {
    "word": "seven",
    "bn": "সাত",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 181
  },
  {
    "word": "eight",
    "bn": "আট",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 182
  },
  {
    "word": "nine",
    "bn": "নয়",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 183
  },
  {
    "word": "ten",
    "bn": "দশ",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 184
  },
  {
    "word": "twenty",
    "bn": "কুড়ি",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 185
  },
  {
    "word": "hundred",
    "bn": "একশো",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 186
  },
  {
    "word": "thousand",
    "bn": "হাজার",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 187
  },
  {
    "word": "first",
    "bn": "প্রথম",
    "phonetic": "",
    "pos": "noun",
    "category": "Time",
    "level": "A2",
    "id": 188
  },
  {
    "word": "big",
    "bn": "বড়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 189
  },
  {
    "word": "small",
    "bn": "ছোট",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 190
  },
  {
    "word": "long",
    "bn": "লম্বা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 191
  },
  {
    "word": "short",
    "bn": "খাটো",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 192
  },
  {
    "word": "tall",
    "bn": "উঁচু",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 193
  },
  {
    "word": "hot",
    "bn": "গরম",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 194
  },
  {
    "word": "cold",
    "bn": "ঠান্ডা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 195
  },
  {
    "word": "new",
    "bn": "নতুন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 196
  },
  {
    "word": "old",
    "bn": "পুরনো",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 197
  },
  {
    "word": "good",
    "bn": "ভালো",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 198
  },
  {
    "word": "bad",
    "bn": "খারাপ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 199
  },
  {
    "word": "happy",
    "bn": "খুশি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 200
  },
  {
    "word": "sad",
    "bn": "দুঃখিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 201
  },
  {
    "word": "angry",
    "bn": "রাগান্বিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 202
  },
  {
    "word": "tired",
    "bn": "ক্লান্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 203
  },
  {
    "word": "hungry",
    "bn": "ক্ষুধার্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 204
  },
  {
    "word": "thirsty",
    "bn": "তৃষ্ণার্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 205
  },
  {
    "word": "easy",
    "bn": "সহজ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 206
  },
  {
    "word": "difficult",
    "bn": "কঠিন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 207
  },
  {
    "word": "fast",
    "bn": "দ্রুত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 208
  },
  {
    "word": "slow",
    "bn": "ধীর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 209
  },
  {
    "word": "heavy",
    "bn": "ভারী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 210
  },
  {
    "word": "light",
    "bn": "হালকা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 211
  },
  {
    "word": "dirty",
    "bn": "নোংরা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 212
  },
  {
    "word": "rich",
    "bn": "ধনী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 213
  },
  {
    "word": "poor",
    "bn": "গরিব",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 214
  },
  {
    "word": "young",
    "bn": "তরুণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 215
  },
  {
    "word": "beautiful",
    "bn": "সুন্দর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 216
  },
  {
    "word": "strong",
    "bn": "শক্তিশালী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 217
  },
  {
    "word": "weak",
    "bn": "দুর্বল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 218
  },
  {
    "word": "kind",
    "bn": "দয়ালু",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 219
  },
  {
    "word": "brave",
    "bn": "সাহসী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 220
  },
  {
    "word": "clever",
    "bn": "চালাক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 221
  },
  {
    "word": "lazy",
    "bn": "অলস",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 222
  },
  {
    "word": "quiet",
    "bn": "শান্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 223
  },
  {
    "word": "loud",
    "bn": "জোরালো",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 224
  },
  {
    "word": "sweet",
    "bn": "মিষ্টি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 225
  },
  {
    "word": "sour",
    "bn": "টক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 226
  },
  {
    "word": "bitter",
    "bn": "তেতো",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 227
  },
  {
    "word": "spicy",
    "bn": "ঝাল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 228
  },
  {
    "word": "fresh",
    "bn": "তাজা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 229
  },
  {
    "word": "empty",
    "bn": "খালি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 230
  },
  {
    "word": "full",
    "bn": "পূর্ণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 231
  },
  {
    "word": "safe",
    "bn": "নিরাপদ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 232
  },
  {
    "word": "dangerous",
    "bn": "বিপজ্জনক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 233
  },
  {
    "word": "busy",
    "bn": "ব্যস্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 234
  },
  {
    "word": "ready",
    "bn": "প্রস্তুত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 235
  },
  {
    "word": "true",
    "bn": "সত্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 236
  },
  {
    "word": "false",
    "bn": "মিথ্যা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 237
  },
  {
    "word": "wrong",
    "bn": "ভুল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 238
  },
  {
    "word": "right",
    "bn": "সঠিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 239
  },
  {
    "word": "same",
    "bn": "একই",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 240
  },
  {
    "word": "different",
    "bn": "আলাদা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 241
  },
  {
    "word": "important",
    "bn": "গুরুত্বপূর্ণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 242
  },
  {
    "word": "possible",
    "bn": "সম্ভব",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 243
  },
  {
    "word": "careful",
    "bn": "সতর্ক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 244
  },
  {
    "word": "sick",
    "bn": "অসুস্থ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 245
  },
  {
    "word": "healthy",
    "bn": "সুস্থ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 246
  },
  {
    "word": "wet",
    "bn": "ভেজা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 247
  },
  {
    "word": "dry",
    "bn": "শুকনো",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 248
  },
  {
    "word": "dark",
    "bn": "অন্ধকার",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 249
  },
  {
    "word": "bright",
    "bn": "উজ্জ্বল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 250
  },
  {
    "word": "red",
    "bn": "লাল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 251
  },
  {
    "word": "blue",
    "bn": "নীল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 252
  },
  {
    "word": "green",
    "bn": "সবুজ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 253
  },
  {
    "word": "yellow",
    "bn": "হলুদ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 254
  },
  {
    "word": "black",
    "bn": "কালো",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 255
  },
  {
    "word": "white",
    "bn": "সাদা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 256
  },
  {
    "word": "orange",
    "bn": "কমলা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 257
  },
  {
    "word": "pink",
    "bn": "গোলাপি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 258
  },
  {
    "word": "brown",
    "bn": "বাদামি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 259
  },
  {
    "word": "milk",
    "bn": "দুধ",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 260
  },
  {
    "word": "tea",
    "bn": "চা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 261
  },
  {
    "word": "coffee",
    "bn": "কফি",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 262
  },
  {
    "word": "egg",
    "bn": "ডিম",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 263
  },
  {
    "word": "fish",
    "bn": "মাছ",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 264
  },
  {
    "word": "meat",
    "bn": "মাংস",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 265
  },
  {
    "word": "chicken",
    "bn": "মুরগি",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 266
  },
  {
    "word": "vegetable",
    "bn": "সবজি",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 267
  },
  {
    "word": "fruit",
    "bn": "ফল",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 268
  },
  {
    "word": "potato",
    "bn": "আলু",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 269
  },
  {
    "word": "onion",
    "bn": "পেঁয়াজ",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 270
  },
  {
    "word": "tomato",
    "bn": "টমেটো",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 271
  },
  {
    "word": "garlic",
    "bn": "রসুন",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 272
  },
  {
    "word": "ginger",
    "bn": "আদা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 273
  },
  {
    "word": "chili",
    "bn": "কাঁচা মরিচ",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 274
  },
  {
    "word": "salt",
    "bn": "লবণ",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 275
  },
  {
    "word": "sugar",
    "bn": "চিনি",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 276
  },
  {
    "word": "oil",
    "bn": "তেল",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 277
  },
  {
    "word": "butter",
    "bn": "মাখন",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 278
  },
  {
    "word": "banana",
    "bn": "কলা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 279
  },
  {
    "word": "mango",
    "bn": "আম",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 280
  },
  {
    "word": "lemon",
    "bn": "লেবু",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 281
  },
  {
    "word": "grape",
    "bn": "আঙুর",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 282
  },
  {
    "word": "lentil",
    "bn": "ডাল",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 283
  },
  {
    "word": "soup",
    "bn": "স্যুপ",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 284
  },
  {
    "word": "breakfast",
    "bn": "সকালের নাস্তা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 285
  },
  {
    "word": "lunch",
    "bn": "দুপুরের খাবার",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 286
  },
  {
    "word": "dinner",
    "bn": "রাতের খাবার",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 287
  },
  {
    "word": "snack",
    "bn": "হালকা খাবার",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 288
  },
  {
    "word": "cake",
    "bn": "কেক",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 289
  },
  {
    "word": "biscuit",
    "bn": "বিস্কুট",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 290
  },
  {
    "word": "juice",
    "bn": "রস",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 291
  },
  {
    "word": "spoon",
    "bn": "চামচ",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 292
  },
  {
    "word": "fork",
    "bn": "কাঁটাচামচ",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 293
  },
  {
    "word": "knife",
    "bn": "ছুরি",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 294
  },
  {
    "word": "plate",
    "bn": "থালা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 295
  },
  {
    "word": "glass",
    "bn": "গ্লাস",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 296
  },
  {
    "word": "cup",
    "bn": "কাপ",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 297
  },
  {
    "word": "bowl",
    "bn": "বাটি",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 298
  },
  {
    "word": "delicious",
    "bn": "সুস্বাদু",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 299
  },
  {
    "word": "menu",
    "bn": "মেনু",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 300
  },
  {
    "word": "bill",
    "bn": "বিল",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 301
  },
  {
    "word": "door",
    "bn": "দরজা",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 302
  },
  {
    "word": "window",
    "bn": "জানালা",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 303
  },
  {
    "word": "room",
    "bn": "কক্ষ",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 304
  },
  {
    "word": "kitchen",
    "bn": "রান্নাঘর",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 305
  },
  {
    "word": "bathroom",
    "bn": "বাথরুম",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 306
  },
  {
    "word": "bed",
    "bn": "বিছানা",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 307
  },
  {
    "word": "roof",
    "bn": "ছাদ",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 308
  },
  {
    "word": "wall",
    "bn": "দেয়াল",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 309
  },
  {
    "word": "floor",
    "bn": "মেঝে",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 310
  },
  {
    "word": "key",
    "bn": "চাবি",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 311
  },
  {
    "word": "lamp",
    "bn": "বাতি",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 312
  },
  {
    "word": "fan",
    "bn": "পাখা",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 313
  },
  {
    "word": "clock",
    "bn": "ঘড়ি",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 314
  },
  {
    "word": "phone",
    "bn": "ফোন",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 315
  },
  {
    "word": "computer",
    "bn": "কম্পিউটার",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 316
  },
  {
    "word": "television",
    "bn": "টেলিভিশন",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 317
  },
  {
    "word": "bag",
    "bn": "ব্যাগ",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 318
  },
  {
    "word": "umbrella",
    "bn": "ছাতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 319
  },
  {
    "word": "shoes",
    "bn": "জুতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 320
  },
  {
    "word": "shirt",
    "bn": "শার্ট",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 321
  },
  {
    "word": "pants",
    "bn": "প্যান্ট",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 322
  },
  {
    "word": "dress",
    "bn": "জামা",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 323
  },
  {
    "word": "hat",
    "bn": "টুপি",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 324
  },
  {
    "word": "glasses",
    "bn": "চশমা",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 325
  },
  {
    "word": "mirror",
    "bn": "আয়না",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 326
  },
  {
    "word": "soap",
    "bn": "সাবান",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 327
  },
  {
    "word": "towel",
    "bn": "তোয়ালে",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 328
  },
  {
    "word": "blanket",
    "bn": "কম্বল",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 329
  },
  {
    "word": "pillow",
    "bn": "বালিশ",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 330
  },
  {
    "word": "paper",
    "bn": "কাগজ",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 331
  },
  {
    "word": "pencil",
    "bn": "পেন্সিল",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 332
  },
  {
    "word": "notebook",
    "bn": "খাতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 333
  },
  {
    "word": "money",
    "bn": "টাকা / অর্থ",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 334
  },
  {
    "word": "box",
    "bn": "বাক্স",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 335
  },
  {
    "word": "picture",
    "bn": "ছবি",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 336
  },
  {
    "word": "camera",
    "bn": "ক্যামেরা",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 337
  },
  {
    "word": "gift",
    "bn": "উপহার",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 338
  },
  {
    "word": "city",
    "bn": "শহর",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 339
  },
  {
    "word": "village",
    "bn": "গ্রাম",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 340
  },
  {
    "word": "country",
    "bn": "দেশ",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 341
  },
  {
    "word": "road",
    "bn": "রাস্তা",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 342
  },
  {
    "word": "market",
    "bn": "বাজার",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 343
  },
  {
    "word": "shop",
    "bn": "দোকান",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 344
  },
  {
    "word": "hospital",
    "bn": "হাসপাতাল",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 345
  },
  {
    "word": "bank",
    "bn": "ব্যাংক",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 346
  },
  {
    "word": "mosque",
    "bn": "মসজিদ",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 347
  },
  {
    "word": "temple",
    "bn": "মন্দির",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 348
  },
  {
    "word": "park",
    "bn": "পার্ক",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 349
  },
  {
    "word": "river",
    "bn": "নদী",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 350
  },
  {
    "word": "bridge",
    "bn": "সেতু",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 351
  },
  {
    "word": "airport",
    "bn": "বিমানবন্দর",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 352
  },
  {
    "word": "station",
    "bn": "স্টেশন",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 353
  },
  {
    "word": "bus",
    "bn": "বাস",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 354
  },
  {
    "word": "train",
    "bn": "ট্রেন",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 355
  },
  {
    "word": "car",
    "bn": "গাড়ি",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 356
  },
  {
    "word": "bicycle",
    "bn": "সাইকেল",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 357
  },
  {
    "word": "rickshaw",
    "bn": "রিকশা",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 358
  },
  {
    "word": "boat",
    "bn": "নৌকা",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 359
  },
  {
    "word": "plane",
    "bn": "বিমান",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 360
  },
  {
    "word": "ticket",
    "bn": "টিকিট",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 361
  },
  {
    "word": "passport",
    "bn": "পাসপোর্ট",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 362
  },
  {
    "word": "hotel",
    "bn": "হোটেল",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 363
  },
  {
    "word": "restaurant",
    "bn": "রেস্তোরাঁ",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 364
  },
  {
    "word": "library",
    "bn": "গ্রন্থাগার",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 365
  },
  {
    "word": "field",
    "bn": "মাঠ",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 366
  },
  {
    "word": "map",
    "bn": "মানচিত্র",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 367
  },
  {
    "word": "straight",
    "bn": "সোজা",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 368
  },
  {
    "word": "near",
    "bn": "কাছে",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 369
  },
  {
    "word": "far",
    "bn": "দূরে",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 370
  },
  {
    "word": "here",
    "bn": "এখানে",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 371
  },
  {
    "word": "there",
    "bn": "সেখানে",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 372
  },
  {
    "word": "up",
    "bn": "উপরে",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 373
  },
  {
    "word": "down",
    "bn": "নিচে",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 374
  },
  {
    "word": "inside",
    "bn": "ভিতরে",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 375
  },
  {
    "word": "outside",
    "bn": "বাইরে",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 376
  },
  {
    "word": "between",
    "bn": "মাঝখানে",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 377
  },
  {
    "word": "sun",
    "bn": "সূর্য",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 378
  },
  {
    "word": "moon",
    "bn": "চাঁদ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 379
  },
  {
    "word": "star",
    "bn": "তারা",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 380
  },
  {
    "word": "sky",
    "bn": "আকাশ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 381
  },
  {
    "word": "cloud",
    "bn": "মেঘ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 382
  },
  {
    "word": "rain",
    "bn": "বৃষ্টি",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 383
  },
  {
    "word": "wind",
    "bn": "বাতাস",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 384
  },
  {
    "word": "storm",
    "bn": "ঝড়",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 385
  },
  {
    "word": "flood",
    "bn": "বন্যা",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 386
  },
  {
    "word": "tree",
    "bn": "গাছ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 387
  },
  {
    "word": "flower",
    "bn": "ফুল",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 388
  },
  {
    "word": "leaf",
    "bn": "পাতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 389
  },
  {
    "word": "grass",
    "bn": "ঘাস",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 390
  },
  {
    "word": "mountain",
    "bn": "পাহাড়",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 391
  },
  {
    "word": "sea",
    "bn": "সমুদ্র",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 392
  },
  {
    "word": "lake",
    "bn": "হ্রদ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 393
  },
  {
    "word": "forest",
    "bn": "বন",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 394
  },
  {
    "word": "earth",
    "bn": "পৃথিবী",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 395
  },
  {
    "word": "fire",
    "bn": "আগুন",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 396
  },
  {
    "word": "summer",
    "bn": "গ্রীষ্ম",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 397
  },
  {
    "word": "winter",
    "bn": "শীত",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 398
  },
  {
    "word": "spring",
    "bn": "বসন্ত",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 399
  },
  {
    "word": "weather",
    "bn": "আবহাওয়া",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 400
  },
  {
    "word": "dog",
    "bn": "কুকুর",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 401
  },
  {
    "word": "cat",
    "bn": "বিড়াল",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 402
  },
  {
    "word": "cow",
    "bn": "গরু",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 403
  },
  {
    "word": "goat",
    "bn": "ছাগল",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 404
  },
  {
    "word": "horse",
    "bn": "ঘোড়া",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 405
  },
  {
    "word": "bird",
    "bn": "পাখি",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 406
  },
  {
    "word": "tiger",
    "bn": "বাঘ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 407
  },
  {
    "word": "elephant",
    "bn": "হাতি",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 408
  },
  {
    "word": "monkey",
    "bn": "বাঁদর",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 409
  },
  {
    "word": "snake",
    "bn": "সাপ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 410
  },
  {
    "word": "mosquito",
    "bn": "মশা",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 411
  },
  {
    "word": "butterfly",
    "bn": "প্রজাপতি",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 412
  },
  {
    "word": "duck",
    "bn": "হাঁস",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 413
  },
  {
    "word": "teacher",
    "bn": "শিক্ষক",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 414
  },
  {
    "word": "student",
    "bn": "শিক্ষার্থী",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 415
  },
  {
    "word": "class",
    "bn": "ক্লাস",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 416
  },
  {
    "word": "exam",
    "bn": "পরীক্ষা",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 417
  },
  {
    "word": "lesson",
    "bn": "পাঠ",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 418
  },
  {
    "word": "homework",
    "bn": "বাড়ির কাজ",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 419
  },
  {
    "word": "language",
    "bn": "ভাষা",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 420
  },
  {
    "word": "word",
    "bn": "শব্দ",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 421
  },
  {
    "word": "sentence",
    "bn": "বাক্য",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 422
  },
  {
    "word": "job",
    "bn": "চাকরি",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 423
  },
  {
    "word": "salary",
    "bn": "বেতন",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 424
  },
  {
    "word": "company",
    "bn": "প্রতিষ্ঠান",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 425
  },
  {
    "word": "team",
    "bn": "দল",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 426
  },
  {
    "word": "boss",
    "bn": "বস",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 427
  },
  {
    "word": "customer",
    "bn": "গ্রাহক",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 428
  },
  {
    "word": "email",
    "bn": "ইমেইল",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 429
  },
  {
    "word": "report",
    "bn": "প্রতিবেদন",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 430
  },
  {
    "word": "document",
    "bn": "নথি",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 431
  },
  {
    "word": "price",
    "bn": "দাম",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 432
  },
  {
    "word": "office",
    "bn": "অফিস",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 433
  },
  {
    "word": "interview",
    "bn": "সাক্ষাৎকার",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 434
  },
  {
    "word": "engineer",
    "bn": "প্রকৌশলী",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 435
  },
  {
    "word": "farmer",
    "bn": "কৃষক",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 436
  },
  {
    "word": "driver",
    "bn": "চালক",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 437
  },
  {
    "word": "police",
    "bn": "পুলিশ",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 438
  },
  {
    "word": "lawyer",
    "bn": "আইনজীবী",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 439
  },
  {
    "word": "shopkeeper",
    "bn": "দোকানদার",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 440
  },
  {
    "word": "worker",
    "bn": "শ্রমিক",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 441
  },
  {
    "word": "nurse",
    "bn": "নার্স",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 442
  },
  {
    "word": "Please",
    "bn": "দয়া করে",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 443
  },
  {
    "word": "Sorry",
    "bn": "দুঃখিত",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 444
  },
  {
    "word": "Excuse me",
    "bn": "মাফ করবেন",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 445
  },
  {
    "word": "Yes",
    "bn": "হ্যাঁ",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 446
  },
  {
    "word": "No",
    "bn": "না",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 447
  },
  {
    "word": "Good night",
    "bn": "শুভ রাত্রি",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 448
  },
  {
    "word": "Goodbye",
    "bn": "বিদায়",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 449
  },
  {
    "word": "How are you",
    "bn": "আপনি কেমন আছেন?",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 450
  },
  {
    "word": "I am fine",
    "bn": "আমি ভালো আছি",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 451
  },
  {
    "word": "What is your name",
    "bn": "আপনার নাম কী?",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 452
  },
  {
    "word": "My name is",
    "bn": "আমার নাম…",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 453
  },
  {
    "word": "Nice to meet you",
    "bn": "আপনার সাথে দেখা হয়ে ভালো লাগল",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 454
  },
  {
    "word": "I do not understand",
    "bn": "আমি বুঝতে পারছি না",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 455
  },
  {
    "word": "Say it again",
    "bn": "আবার বলুন",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 456
  },
  {
    "word": "Speak slowly",
    "bn": "ধীরে বলুন",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 457
  },
  {
    "word": "How much is this",
    "bn": "এটার দাম কত?",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 458
  },
  {
    "word": "Where is the toilet",
    "bn": "টয়লেট কোথায়?",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 459
  },
  {
    "word": "What time is it",
    "bn": "কয়টা বাজে?",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 460
  },
  {
    "word": "Help me",
    "bn": "আমাকে সাহায্য করুন",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 461
  },
  {
    "word": "Congratulations",
    "bn": "অভিনন্দন",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 462
  },
  {
    "word": "Good luck",
    "bn": "শুভকামনা",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 463
  },
  {
    "word": "No problem",
    "bn": "সমস্যা নেই",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 464
  },
  {
    "word": "I agree",
    "bn": "আমি একমত",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 465
  },
  {
    "word": "Take care",
    "bn": "নিজের যত্ন নিন",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 466
  },
  {
    "word": "See you later",
    "bn": "পরে দেখা হবে",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 467
  },
  {
    "word": "What is this",
    "bn": "এটা কী?",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 468
  },
  {
    "word": "Can you help me",
    "bn": "আপনি কি আমাকে সাহায্য করতে পারবেন?",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 469
  },
  {
    "word": "Where do you live",
    "bn": "আপনি কোথায় থাকেন?",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 470
  },
  {
    "word": "I am from Bangladesh",
    "bn": "আমি বাংলাদেশ থেকে এসেছি",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 471
  },
  {
    "word": "I",
    "bn": "আমি",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 472
  },
  {
    "word": "you",
    "bn": "তুমি / আপনি",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 473
  },
  {
    "word": "he",
    "bn": "সে (পুরুষ)",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 474
  },
  {
    "word": "she",
    "bn": "সে (মহিলা)",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 475
  },
  {
    "word": "it",
    "bn": "এটা",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 476
  },
  {
    "word": "we",
    "bn": "আমরা",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 477
  },
  {
    "word": "they",
    "bn": "তারা",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 478
  },
  {
    "word": "my",
    "bn": "আমার",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 479
  },
  {
    "word": "your",
    "bn": "তোমার",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 480
  },
  {
    "word": "this",
    "bn": "এই",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 481
  },
  {
    "word": "that",
    "bn": "ওই",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 482
  },
  {
    "word": "what",
    "bn": "কী",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 483
  },
  {
    "word": "where",
    "bn": "কোথায়",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 484
  },
  {
    "word": "when",
    "bn": "কখন",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 485
  },
  {
    "word": "why",
    "bn": "কেন",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 486
  },
  {
    "word": "who",
    "bn": "কে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 487
  },
  {
    "word": "how",
    "bn": "কীভাবে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 488
  },
  {
    "word": "which",
    "bn": "কোনটি",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 489
  },
  {
    "word": "and",
    "bn": "এবং",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 490
  },
  {
    "word": "but",
    "bn": "কিন্তু",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 491
  },
  {
    "word": "or",
    "bn": "অথবা",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 492
  },
  {
    "word": "because",
    "bn": "কারণ",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 493
  },
  {
    "word": "if",
    "bn": "যদি",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 494
  },
  {
    "word": "with",
    "bn": "সাথে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 495
  },
  {
    "word": "without",
    "bn": "ছাড়া",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 496
  },
  {
    "word": "for",
    "bn": "জন্য",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 497
  },
  {
    "word": "from",
    "bn": "থেকে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 498
  },
  {
    "word": "very",
    "bn": "খুব",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 499
  },
  {
    "word": "also",
    "bn": "ও",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 500
  },
  {
    "word": "not",
    "bn": "না",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 501
  },
  {
    "word": "can",
    "bn": "পারা",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 502
  },
  {
    "word": "will",
    "bn": "করবে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 503
  },
  {
    "word": "must",
    "bn": "অবশ্যই",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 504
  },
  {
    "word": "many",
    "bn": "অনেক",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 505
  },
  {
    "word": "few",
    "bn": "অল্প",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 506
  },
  {
    "word": "all",
    "bn": "সব",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 507
  },
  {
    "word": "some",
    "bn": "কিছু",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 508
  },
  {
    "word": "more",
    "bn": "আরও",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 509
  },
  {
    "word": "only",
    "bn": "শুধু",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 510
  },
  {
    "word": "grandfather",
    "bn": "দাদা / নানা",
    "phonetic": "",
    "pos": "noun",
    "category": "Family",
    "level": "A2",
    "id": 511
  },
  {
    "word": "grandmother",
    "bn": "দাদি / নানি",
    "phonetic": "",
    "pos": "noun",
    "category": "Family",
    "level": "A2",
    "id": 512
  },
  {
    "word": "uncle",
    "bn": "চাচা / মামা",
    "phonetic": "",
    "pos": "noun",
    "category": "Family",
    "level": "A2",
    "id": 513
  },
  {
    "word": "aunt",
    "bn": "চাচি / খালা",
    "phonetic": "",
    "pos": "noun",
    "category": "Family",
    "level": "A2",
    "id": 514
  },
  {
    "word": "son",
    "bn": "ছেলে (সন্তান)",
    "phonetic": "",
    "pos": "noun",
    "category": "Family",
    "level": "A2",
    "id": 515
  },
  {
    "word": "daughter",
    "bn": "মেয়ে (সন্তান)",
    "phonetic": "",
    "pos": "noun",
    "category": "Family",
    "level": "A2",
    "id": 516
  },
  {
    "word": "husband",
    "bn": "স্বামী",
    "phonetic": "",
    "pos": "noun",
    "category": "Family",
    "level": "A2",
    "id": 517
  },
  {
    "word": "wife",
    "bn": "স্ত্রী",
    "phonetic": "",
    "pos": "noun",
    "category": "Family",
    "level": "A2",
    "id": 518
  },
  {
    "word": "baby",
    "bn": "শিশু",
    "phonetic": "",
    "pos": "noun",
    "category": "Family",
    "level": "A2",
    "id": 519
  },
  {
    "word": "child",
    "bn": "সন্তান",
    "phonetic": "",
    "pos": "noun",
    "category": "Family",
    "level": "A2",
    "id": 520
  },
  {
    "word": "boy",
    "bn": "বালক",
    "phonetic": "",
    "pos": "noun",
    "category": "Family",
    "level": "A2",
    "id": 521
  },
  {
    "word": "girl",
    "bn": "বালিকা",
    "phonetic": "",
    "pos": "noun",
    "category": "Family",
    "level": "A2",
    "id": 522
  },
  {
    "word": "man",
    "bn": "পুরুষ",
    "phonetic": "",
    "pos": "noun",
    "category": "Family",
    "level": "A2",
    "id": 523
  },
  {
    "word": "woman",
    "bn": "নারী",
    "phonetic": "",
    "pos": "noun",
    "category": "Family",
    "level": "A2",
    "id": 524
  },
  {
    "word": "neighbor",
    "bn": "প্রতিবেশী",
    "phonetic": "",
    "pos": "noun",
    "category": "Family",
    "level": "A2",
    "id": 525
  },
  {
    "word": "guest",
    "bn": "অতিথি",
    "phonetic": "",
    "pos": "noun",
    "category": "Family",
    "level": "A2",
    "id": 526
  },
  {
    "word": "parents",
    "bn": "বাবা-মা",
    "phonetic": "",
    "pos": "noun",
    "category": "Family",
    "level": "A2",
    "id": 527
  },
  {
    "word": "relative",
    "bn": "আত্মীয়",
    "phonetic": "",
    "pos": "noun",
    "category": "Family",
    "level": "A2",
    "id": 528
  },
  {
    "word": "people",
    "bn": "মানুষ",
    "phonetic": "",
    "pos": "noun",
    "category": "Family",
    "level": "A2",
    "id": 529
  },
  {
    "word": "name",
    "bn": "নাম",
    "phonetic": "",
    "pos": "noun",
    "category": "Family",
    "level": "A2",
    "id": 530
  },
  {
    "word": "age",
    "bn": "বয়স",
    "phonetic": "",
    "pos": "noun",
    "category": "Family",
    "level": "A2",
    "id": 531
  },
  {
    "word": "afraid",
    "bn": "ভীত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Feelings",
    "level": "A2",
    "id": 532
  },
  {
    "word": "surprised",
    "bn": "অবাক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Feelings",
    "level": "A2",
    "id": 533
  },
  {
    "word": "proud",
    "bn": "গর্বিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Feelings",
    "level": "A2",
    "id": 534
  },
  {
    "word": "lonely",
    "bn": "একাকী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Feelings",
    "level": "A2",
    "id": 535
  },
  {
    "word": "nervous",
    "bn": "নার্ভাস",
    "phonetic": "",
    "pos": "adjective",
    "category": "Feelings",
    "level": "A2",
    "id": 536
  },
  {
    "word": "excited",
    "bn": "উত্তেজিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Feelings",
    "level": "A2",
    "id": 537
  },
  {
    "word": "worried",
    "bn": "চিন্তিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Feelings",
    "level": "A2",
    "id": 538
  },
  {
    "word": "confused",
    "bn": "বিভ্রান্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Feelings",
    "level": "A2",
    "id": 539
  },
  {
    "word": "shy",
    "bn": "লাজুক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Feelings",
    "level": "A2",
    "id": 540
  },
  {
    "word": "jealous",
    "bn": "ঈর্ষান্বিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Feelings",
    "level": "A2",
    "id": 541
  },
  {
    "word": "grateful",
    "bn": "কৃতজ্ঞ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Feelings",
    "level": "A2",
    "id": 542
  },
  {
    "word": "bored",
    "bn": "বিরক্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Feelings",
    "level": "A2",
    "id": 543
  },
  {
    "word": "calm",
    "bn": "শান্ত মনের",
    "phonetic": "",
    "pos": "adjective",
    "category": "Feelings",
    "level": "A2",
    "id": 544
  },
  {
    "word": "polite",
    "bn": "বিনয়ী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Feelings",
    "level": "A2",
    "id": 545
  },
  {
    "word": "honest",
    "bn": "সৎ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Feelings",
    "level": "A2",
    "id": 546
  },
  {
    "word": "generous",
    "bn": "উদার",
    "phonetic": "",
    "pos": "adjective",
    "category": "Feelings",
    "level": "A2",
    "id": 547
  },
  {
    "word": "patient",
    "bn": "ধৈর্যশীল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Feelings",
    "level": "A2",
    "id": 548
  },
  {
    "word": "serious",
    "bn": "গম্ভীর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Feelings",
    "level": "A2",
    "id": 549
  },
  {
    "word": "funny",
    "bn": "মজার",
    "phonetic": "",
    "pos": "adjective",
    "category": "Feelings",
    "level": "A2",
    "id": 550
  },
  {
    "word": "friendly",
    "bn": "বন্ধুসুলভ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Feelings",
    "level": "A2",
    "id": 551
  },
  {
    "word": "famous",
    "bn": "বিখ্যাত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Feelings",
    "level": "A2",
    "id": 552
  },
  {
    "word": "smart",
    "bn": "বুদ্ধিমান",
    "phonetic": "",
    "pos": "adjective",
    "category": "Feelings",
    "level": "A2",
    "id": 553
  },
  {
    "word": "selfish",
    "bn": "স্বার্থপর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Feelings",
    "level": "A2",
    "id": 554
  },
  {
    "word": "lucky",
    "bn": "ভাগ্যবান",
    "phonetic": "",
    "pos": "adjective",
    "category": "Feelings",
    "level": "A2",
    "id": 555
  },
  {
    "word": "cheap",
    "bn": "সস্তা",
    "phonetic": "",
    "pos": "noun",
    "category": "Money",
    "level": "A2",
    "id": 556
  },
  {
    "word": "expensive",
    "bn": "দামি",
    "phonetic": "",
    "pos": "noun",
    "category": "Money",
    "level": "A2",
    "id": 557
  },
  {
    "word": "discount",
    "bn": "ছাড়",
    "phonetic": "",
    "pos": "noun",
    "category": "Money",
    "level": "A2",
    "id": 558
  },
  {
    "word": "receipt",
    "bn": "রসিদ",
    "phonetic": "",
    "pos": "noun",
    "category": "Money",
    "level": "A2",
    "id": 559
  },
  {
    "word": "cash",
    "bn": "নগদ টাকা",
    "phonetic": "",
    "pos": "noun",
    "category": "Money",
    "level": "A2",
    "id": 560
  },
  {
    "word": "card",
    "bn": "কার্ড",
    "phonetic": "",
    "pos": "noun",
    "category": "Money",
    "level": "A2",
    "id": 561
  },
  {
    "word": "coin",
    "bn": "মুদ্রা",
    "phonetic": "",
    "pos": "noun",
    "category": "Money",
    "level": "A2",
    "id": 562
  },
  {
    "word": "size",
    "bn": "মাপ",
    "phonetic": "",
    "pos": "noun",
    "category": "Money",
    "level": "A2",
    "id": 563
  },
  {
    "word": "color",
    "bn": "রং",
    "phonetic": "",
    "pos": "noun",
    "category": "Money",
    "level": "A2",
    "id": 564
  },
  {
    "word": "quality",
    "bn": "মান",
    "phonetic": "",
    "pos": "noun",
    "category": "Money",
    "level": "A2",
    "id": 565
  },
  {
    "word": "order",
    "bn": "অর্ডার",
    "phonetic": "",
    "pos": "noun",
    "category": "Money",
    "level": "A2",
    "id": 566
  },
  {
    "word": "delivery",
    "bn": "ডেলিভারি",
    "phonetic": "",
    "pos": "noun",
    "category": "Money",
    "level": "A2",
    "id": 567
  },
  {
    "word": "account",
    "bn": "হিসাব",
    "phonetic": "",
    "pos": "noun",
    "category": "Money",
    "level": "A2",
    "id": 568
  },
  {
    "word": "loan",
    "bn": "ঋণ",
    "phonetic": "",
    "pos": "noun",
    "category": "Money",
    "level": "A2",
    "id": 569
  },
  {
    "word": "tax",
    "bn": "কর",
    "phonetic": "",
    "pos": "noun",
    "category": "Money",
    "level": "A2",
    "id": 570
  },
  {
    "word": "profit",
    "bn": "লাভ",
    "phonetic": "",
    "pos": "noun",
    "category": "Money",
    "level": "A2",
    "id": 571
  },
  {
    "word": "loss",
    "bn": "ক্ষতি",
    "phonetic": "",
    "pos": "noun",
    "category": "Money",
    "level": "A2",
    "id": 572
  },
  {
    "word": "cost",
    "bn": "খরচ",
    "phonetic": "",
    "pos": "noun",
    "category": "Money",
    "level": "A2",
    "id": 573
  },
  {
    "word": "budget",
    "bn": "বাজেট",
    "phonetic": "",
    "pos": "noun",
    "category": "Money",
    "level": "A2",
    "id": 574
  },
  {
    "word": "save",
    "bn": "সঞ্চয় করা",
    "phonetic": "",
    "pos": "noun",
    "category": "Money",
    "level": "A2",
    "id": 575
  },
  {
    "word": "spend",
    "bn": "খরচ করা",
    "phonetic": "",
    "pos": "noun",
    "category": "Money",
    "level": "A2",
    "id": 576
  },
  {
    "word": "earn",
    "bn": "আয় করা",
    "phonetic": "",
    "pos": "noun",
    "category": "Money",
    "level": "A2",
    "id": 577
  },
  {
    "word": "rent",
    "bn": "ভাড়া",
    "phonetic": "",
    "pos": "noun",
    "category": "Money",
    "level": "A2",
    "id": 578
  },
  {
    "word": "shopping",
    "bn": "কেনাকাটা",
    "phonetic": "",
    "pos": "noun",
    "category": "Money",
    "level": "A2",
    "id": 579
  },
  {
    "word": "bargain",
    "bn": "দরদাম করা",
    "phonetic": "",
    "pos": "noun",
    "category": "Money",
    "level": "A2",
    "id": 580
  },
  {
    "word": "wallet",
    "bn": "মানিব্যাগ",
    "phonetic": "",
    "pos": "noun",
    "category": "Money",
    "level": "A2",
    "id": 581
  },
  {
    "word": "arrive",
    "bn": "পৌঁছানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 582
  },
  {
    "word": "leave",
    "bn": "ছেড়ে যাওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 583
  },
  {
    "word": "return",
    "bn": "ফিরে আসা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 584
  },
  {
    "word": "enter",
    "bn": "প্রবেশ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 585
  },
  {
    "word": "follow",
    "bn": "অনুসরণ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 586
  },
  {
    "word": "catch",
    "bn": "ধরা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 587
  },
  {
    "word": "throw",
    "bn": "ছোড়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 588
  },
  {
    "word": "hold",
    "bn": "ধরে রাখা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 589
  },
  {
    "word": "cut",
    "bn": "কাটা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 590
  },
  {
    "word": "fill",
    "bn": "ভরা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 591
  },
  {
    "word": "pour",
    "bn": "ঢালা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 592
  },
  {
    "word": "mix",
    "bn": "মেশানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 593
  },
  {
    "word": "boil",
    "bn": "ফোটানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 594
  },
  {
    "word": "fry",
    "bn": "ভাজা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 595
  },
  {
    "word": "bake",
    "bn": "সেঁকা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 596
  },
  {
    "word": "taste",
    "bn": "স্বাদ নেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 597
  },
  {
    "word": "smell",
    "bn": "গন্ধ পাওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 598
  },
  {
    "word": "touch",
    "bn": "ছোঁয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 599
  },
  {
    "word": "hear",
    "bn": "শুনতে পাওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 600
  },
  {
    "word": "shout",
    "bn": "চিৎকার করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 601
  },
  {
    "word": "whisper",
    "bn": "ফিসফিস করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 602
  },
  {
    "word": "hug",
    "bn": "আলিঙ্গন করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 603
  },
  {
    "word": "hide",
    "bn": "লুকানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 604
  },
  {
    "word": "show",
    "bn": "দেখানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 605
  },
  {
    "word": "count",
    "bn": "গোনা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 606
  },
  {
    "word": "measure",
    "bn": "মাপা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 607
  },
  {
    "word": "compare",
    "bn": "তুলনা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 608
  },
  {
    "word": "check",
    "bn": "যাচাই করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 609
  },
  {
    "word": "fix",
    "bn": "মেরামত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 610
  },
  {
    "word": "grow",
    "bn": "বড় হওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 611
  },
  {
    "word": "protect",
    "bn": "রক্ষা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 612
  },
  {
    "word": "accept",
    "bn": "গ্রহণ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 613
  },
  {
    "word": "refuse",
    "bn": "প্রত্যাখ্যান করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 614
  },
  {
    "word": "allow",
    "bn": "অনুমতি দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 615
  },
  {
    "word": "invite",
    "bn": "আমন্ত্রণ জানানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 616
  },
  {
    "word": "celebrate",
    "bn": "উদযাপন করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 617
  },
  {
    "word": "prepare",
    "bn": "প্রস্তুত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 618
  },
  {
    "word": "practice",
    "bn": "অনুশীলন করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 619
  },
  {
    "word": "improve",
    "bn": "উন্নতি করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 620
  },
  {
    "word": "solve",
    "bn": "সমাধান করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 621
  },
  {
    "word": "manage",
    "bn": "পরিচালনা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 622
  },
  {
    "word": "create",
    "bn": "সৃষ্টি করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 623
  },
  {
    "word": "collect",
    "bn": "সংগ্রহ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 624
  },
  {
    "word": "rest",
    "bn": "বিশ্রাম নেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 625
  },
  {
    "word": "relax",
    "bn": "আরাম করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 626
  },
  {
    "word": "brush",
    "bn": "ব্রাশ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 627
  },
  {
    "word": "colleague",
    "bn": "সহকর্মী",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 628
  },
  {
    "word": "department",
    "bn": "বিভাগ",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 629
  },
  {
    "word": "presentation",
    "bn": "উপস্থাপনা",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 630
  },
  {
    "word": "proposal",
    "bn": "প্রস্তাবনা",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 631
  },
  {
    "word": "contract",
    "bn": "চুক্তি",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 632
  },
  {
    "word": "client",
    "bn": "ক্লায়েন্ট",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 633
  },
  {
    "word": "goal",
    "bn": "লক্ষ্য",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 634
  },
  {
    "word": "plan",
    "bn": "পরিকল্পনা",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 635
  },
  {
    "word": "task",
    "bn": "কাজ (দায়িত্ব)",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 636
  },
  {
    "word": "result",
    "bn": "ফলাফল",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 637
  },
  {
    "word": "problem",
    "bn": "সমস্যা",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 638
  },
  {
    "word": "solution",
    "bn": "সমাধান",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 639
  },
  {
    "word": "idea",
    "bn": "ধারণা",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 640
  },
  {
    "word": "skill",
    "bn": "দক্ষতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 641
  },
  {
    "word": "training",
    "bn": "প্রশিক্ষণ",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 642
  },
  {
    "word": "promotion",
    "bn": "পদোন্নতি",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 643
  },
  {
    "word": "resign",
    "bn": "পদত্যাগ করা",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 644
  },
  {
    "word": "hire",
    "bn": "নিয়োগ দেওয়া",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 645
  },
  {
    "word": "candidate",
    "bn": "প্রার্থী",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 646
  },
  {
    "word": "vacancy",
    "bn": "শূন্যপদ",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 647
  },
  {
    "word": "resume",
    "bn": "জীবনবৃত্তান্ত",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 648
  },
  {
    "word": "reply",
    "bn": "উত্তর দেওয়া",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 649
  },
  {
    "word": "attach",
    "bn": "সংযুক্ত করা",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 650
  },
  {
    "word": "regards",
    "bn": "শুভেচ্ছা",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 651
  },
  {
    "word": "approve",
    "bn": "অনুমোদন করা",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 652
  },
  {
    "word": "request",
    "bn": "অনুরোধ",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 653
  },
  {
    "word": "urgent",
    "bn": "জরুরি",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 654
  },
  {
    "word": "available",
    "bn": "উপলব্ধ",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 655
  },
  {
    "word": "responsible",
    "bn": "দায়িত্বশীল",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 656
  },
  {
    "word": "professional",
    "bn": "পেশাদার",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 657
  },
  {
    "word": "confident",
    "bn": "আত্মবিশ্বাসী",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 658
  },
  {
    "word": "reliable",
    "bn": "নির্ভরযোগ্য",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 659
  },
  {
    "word": "feedback",
    "bn": "মতামত",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 660
  },
  {
    "word": "progress",
    "bn": "অগ্রগতি",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 661
  },
  {
    "word": "life",
    "bn": "জীবন",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 662
  },
  {
    "word": "world",
    "bn": "বিশ্ব",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 663
  },
  {
    "word": "time",
    "bn": "সময়",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 664
  },
  {
    "word": "place",
    "bn": "জায়গা",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 665
  },
  {
    "word": "thing",
    "bn": "জিনিস",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 666
  },
  {
    "word": "way",
    "bn": "পথ / উপায়",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 667
  },
  {
    "word": "reason",
    "bn": "কারণ",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 668
  },
  {
    "word": "question",
    "bn": "প্রশ্ন",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 669
  },
  {
    "word": "story",
    "bn": "গল্প",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 670
  },
  {
    "word": "news",
    "bn": "খবর",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 671
  },
  {
    "word": "music",
    "bn": "সংগীত",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 672
  },
  {
    "word": "movie",
    "bn": "চলচ্চিত্র",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 673
  },
  {
    "word": "game",
    "bn": "খেলা",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 674
  },
  {
    "word": "sport",
    "bn": "ক্রীড়া",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 675
  },
  {
    "word": "football",
    "bn": "ফুটবল",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 676
  },
  {
    "word": "cricket",
    "bn": "ক্রিকেট",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 677
  },
  {
    "word": "party",
    "bn": "অনুষ্ঠান",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 678
  },
  {
    "word": "festival",
    "bn": "উৎসব",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 679
  },
  {
    "word": "holiday",
    "bn": "ছুটি",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 680
  },
  {
    "word": "birthday",
    "bn": "জন্মদিন",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 681
  },
  {
    "word": "wedding",
    "bn": "বিয়ে",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 682
  },
  {
    "word": "dream",
    "bn": "স্বপ্ন",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 683
  },
  {
    "word": "secret",
    "bn": "গোপন কথা",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 684
  },
  {
    "word": "luck",
    "bn": "ভাগ্য",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 685
  },
  {
    "word": "peace",
    "bn": "শান্তি",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 686
  },
  {
    "word": "war",
    "bn": "যুদ্ধ",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 687
  },
  {
    "word": "law",
    "bn": "আইন",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 688
  },
  {
    "word": "rule",
    "bn": "নিয়ম",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 689
  },
  {
    "word": "freedom",
    "bn": "স্বাধীনতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 690
  },
  {
    "word": "religion",
    "bn": "ধর্ম",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 691
  },
  {
    "word": "history",
    "bn": "ইতিহাস",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 692
  },
  {
    "word": "science",
    "bn": "বিজ্ঞান",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 693
  },
  {
    "word": "math",
    "bn": "গণিত",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 694
  },
  {
    "word": "art",
    "bn": "শিল্প",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 695
  },
  {
    "word": "society",
    "bn": "সমাজ",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 696
  },
  {
    "word": "government",
    "bn": "সরকার",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 697
  },
  {
    "word": "election",
    "bn": "নির্বাচন",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 698
  },
  {
    "word": "uniform",
    "bn": "ইউনিফর্ম",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 699
  },
  {
    "word": "university",
    "bn": "বিশ্ববিদ্যালয়",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 700
  },
  {
    "word": "subject",
    "bn": "বিষয়",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 701
  },
  {
    "word": "internet",
    "bn": "ইন্টারনেট",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 702
  },
  {
    "word": "website",
    "bn": "ওয়েবসাইট",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 703
  },
  {
    "word": "password",
    "bn": "পাসওয়ার্ড",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 704
  },
  {
    "word": "message",
    "bn": "বার্তা",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 705
  },
  {
    "word": "video",
    "bn": "ভিডিও",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 706
  },
  {
    "word": "screen",
    "bn": "পর্দা",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 707
  },
  {
    "word": "battery",
    "bn": "ব্যাটারি",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 708
  },
  {
    "word": "charger",
    "bn": "চার্জার",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 709
  },
  {
    "word": "download",
    "bn": "ডাউনলোড করা",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 710
  },
  {
    "word": "online",
    "bn": "অনলাইন",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 711
  },
  {
    "word": "app",
    "bn": "অ্যাপ",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 712
  },
  {
    "word": "signal",
    "bn": "সিগন্যাল",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 713
  },
  {
    "word": "well",
    "bn": "ভালোভাবে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 714
  },
  {
    "word": "really",
    "bn": "সত্যিই",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 715
  },
  {
    "word": "maybe",
    "bn": "হয়তো",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 716
  },
  {
    "word": "usually",
    "bn": "সাধারণত",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 717
  },
  {
    "word": "often",
    "bn": "প্রায়ই",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 718
  },
  {
    "word": "already",
    "bn": "ইতিমধ্যে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 719
  },
  {
    "word": "still",
    "bn": "এখনও",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 720
  },
  {
    "word": "again",
    "bn": "আবার",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 721
  },
  {
    "word": "together",
    "bn": "একসাথে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 722
  },
  {
    "word": "almost",
    "bn": "প্রায়",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 723
  },
  {
    "word": "enough",
    "bn": "যথেষ্ট",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 724
  },
  {
    "word": "quite",
    "bn": "বেশ",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 725
  },
  {
    "word": "even",
    "bn": "এমনকি",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 726
  },
  {
    "word": "just",
    "bn": "মাত্র",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 727
  },
  {
    "word": "instead",
    "bn": "বদলে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 728
  },
  {
    "word": "however",
    "bn": "তবে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 729
  },
  {
    "word": "therefore",
    "bn": "তাই",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 730
  },
  {
    "word": "although",
    "bn": "যদিও",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 731
  },
  {
    "word": "until",
    "bn": "পর্যন্ত",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 732
  },
  {
    "word": "during",
    "bn": "চলাকালীন",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 733
  },
  {
    "word": "before",
    "bn": "আগে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 734
  },
  {
    "word": "after",
    "bn": "পরে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 735
  },
  {
    "word": "around",
    "bn": "চারপাশে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 736
  },
  {
    "word": "behind",
    "bn": "পিছনে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 737
  },
  {
    "word": "under",
    "bn": "নিচে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 738
  },
  {
    "word": "above",
    "bn": "উপরে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 739
  },
  {
    "word": "across",
    "bn": "পেরিয়ে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 740
  },
  {
    "word": "through",
    "bn": "মধ্য দিয়ে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 741
  },
  {
    "word": "against",
    "bn": "বিরুদ্ধে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 742
  },
  {
    "word": "among",
    "bn": "মধ্যে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 743
  },
  {
    "word": "beside",
    "bn": "পাশে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 744
  },
  {
    "word": "toward",
    "bn": "দিকে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 745
  },
  {
    "word": "every",
    "bn": "প্রতিটি",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 746
  },
  {
    "word": "each",
    "bn": "প্রত্যেক",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 747
  },
  {
    "word": "another",
    "bn": "আরেকটি",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 748
  },
  {
    "word": "other",
    "bn": "অন্য",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 749
  },
  {
    "word": "both",
    "bn": "উভয়",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 750
  },
  {
    "word": "none",
    "bn": "কেউ না",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 751
  },
  {
    "word": "anything",
    "bn": "যেকোনো কিছু",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 752
  },
  {
    "word": "nothing",
    "bn": "কিছুই না",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 753
  },
  {
    "word": "everything",
    "bn": "সবকিছু",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 754
  },
  {
    "word": "someone",
    "bn": "কেউ",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 755
  },
  {
    "word": "everyone",
    "bn": "সবাই",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 756
  },
  {
    "word": "I am lost",
    "bn": "আমি পথ হারিয়েছি",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 757
  },
  {
    "word": "Call the police",
    "bn": "পুলিশ ডাকুন",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 758
  },
  {
    "word": "I need a doctor",
    "bn": "আমার ডাক্তার দরকার",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 759
  },
  {
    "word": "I am sick",
    "bn": "আমি অসুস্থ",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 760
  },
  {
    "word": "Where is the bus stop",
    "bn": "বাস স্টপ কোথায়?",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 761
  },
  {
    "word": "How far is it",
    "bn": "এটা কত দূরে?",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 762
  },
  {
    "word": "I want to go to the airport",
    "bn": "আমি বিমানবন্দরে যেতে চাই",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 763
  },
  {
    "word": "Do you speak English",
    "bn": "আপনি কি ইংরেজি বলতে পারেন?",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 764
  },
  {
    "word": "I speak a little English",
    "bn": "আমি অল্প ইংরেজি বলতে পারি",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 765
  },
  {
    "word": "What does this mean",
    "bn": "এর মানে কী?",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 766
  },
  {
    "word": "How do you say this in English",
    "bn": "এটা ইংরেজিতে কীভাবে বলে?",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 767
  },
  {
    "word": "Can I have the menu",
    "bn": "আমি কি মেনুটা পেতে পারি?",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 768
  },
  {
    "word": "I would like some water",
    "bn": "আমি একটু পানি চাই",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 769
  },
  {
    "word": "The bill please",
    "bn": "বিলটা দিন, দয়া করে",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 770
  },
  {
    "word": "It is delicious",
    "bn": "এটা সুস্বাদু",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 771
  },
  {
    "word": "Can I try this",
    "bn": "আমি কি এটা চেষ্টা করে দেখতে পারি?",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 772
  },
  {
    "word": "Do you have a smaller size",
    "bn": "আপনার কাছে কি ছোট সাইজ আছে?",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 773
  },
  {
    "word": "Can you give a discount",
    "bn": "একটু ছাড় দেওয়া যাবে?",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 774
  },
  {
    "word": "I will take it",
    "bn": "আমি এটা নেব",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 775
  },
  {
    "word": "Just a moment",
    "bn": "এক মুহূর্ত",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 776
  },
  {
    "word": "Of course",
    "bn": "অবশ্যই",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 777
  },
  {
    "word": "I think so",
    "bn": "আমার তাই মনে হয়",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 778
  },
  {
    "word": "I am not sure",
    "bn": "আমি নিশ্চিত নই",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 779
  },
  {
    "word": "It does not matter",
    "bn": "কিছু যায় আসে না",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 780
  },
  {
    "word": "What happened",
    "bn": "কী হয়েছে?",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 781
  },
  {
    "word": "Be careful",
    "bn": "সাবধান",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 782
  },
  {
    "word": "Hurry up",
    "bn": "তাড়াতাড়ি করুন",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 783
  },
  {
    "word": "Come in",
    "bn": "ভিতরে আসুন",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 784
  },
  {
    "word": "Have a seat",
    "bn": "বসুন",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 785
  },
  {
    "word": "Welcome back",
    "bn": "আবার স্বাগতম",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 786
  },
  {
    "word": "Happy birthday",
    "bn": "শুভ জন্মদিন",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 787
  },
  {
    "word": "Best wishes",
    "bn": "শুভেচ্ছা রইল",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 788
  },
  {
    "word": "Thank you very much",
    "bn": "অনেক ধন্যবাদ",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 789
  },
  {
    "word": "You are welcome",
    "bn": "কিছু না / আপনাকেও স্বাগতম",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 790
  },
  {
    "word": "I miss you",
    "bn": "আমি তোমাকে মিস করি",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 791
  },
  {
    "word": "Good job",
    "bn": "চমৎকার কাজ",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 792
  },
  {
    "word": "Cheer up",
    "bn": "মন খারাপ করো না",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 793
  },
  {
    "word": "Piece of cake",
    "bn": "অতি সহজ কাজ",
    "phonetic": "",
    "pos": "idiom",
    "category": "Idioms",
    "level": "B2",
    "id": 794
  },
  {
    "word": "Break a leg",
    "bn": "শুভকামনা (অনুষ্ঠানের আগে)",
    "phonetic": "",
    "pos": "idiom",
    "category": "Idioms",
    "level": "B2",
    "id": 795
  },
  {
    "word": "Hit the books",
    "bn": "মন দিয়ে পড়তে বসা",
    "phonetic": "",
    "pos": "idiom",
    "category": "Idioms",
    "level": "B2",
    "id": 796
  },
  {
    "word": "Under the weather",
    "bn": "শরীর ভালো না",
    "phonetic": "",
    "pos": "idiom",
    "category": "Idioms",
    "level": "B2",
    "id": 797
  },
  {
    "word": "Once in a blue moon",
    "bn": "কালেভদ্রে",
    "phonetic": "",
    "pos": "idiom",
    "category": "Idioms",
    "level": "B2",
    "id": 798
  },
  {
    "word": "Spill the beans",
    "bn": "গোপন কথা ফাঁস করা",
    "phonetic": "",
    "pos": "idiom",
    "category": "Idioms",
    "level": "B2",
    "id": 799
  },
  {
    "word": "Cost an arm and a leg",
    "bn": "অনেক দামি",
    "phonetic": "",
    "pos": "idiom",
    "category": "Idioms",
    "level": "B2",
    "id": 800
  },
  {
    "word": "Call it a day",
    "bn": "আজকের মতো কাজ শেষ করা",
    "phonetic": "",
    "pos": "idiom",
    "category": "Idioms",
    "level": "B2",
    "id": 801
  },
  {
    "word": "Better late than never",
    "bn": "না হওয়ার চেয়ে দেরিতে হওয়া ভালো",
    "phonetic": "",
    "pos": "idiom",
    "category": "Idioms",
    "level": "B2",
    "id": 802
  },
  {
    "word": "Actions speak louder than words",
    "bn": "কথার চেয়ে কাজ বড়",
    "phonetic": "",
    "pos": "idiom",
    "category": "Idioms",
    "level": "B2",
    "id": 803
  },
  {
    "word": "Easier said than done",
    "bn": "বলা সহজ, করা কঠিন",
    "phonetic": "",
    "pos": "idiom",
    "category": "Idioms",
    "level": "B2",
    "id": 804
  },
  {
    "word": "Time is money",
    "bn": "সময়ই টাকা",
    "phonetic": "",
    "pos": "idiom",
    "category": "Idioms",
    "level": "B2",
    "id": 805
  },
  {
    "word": "Practice makes perfect",
    "bn": "অনুশীলনেই দক্ষতা",
    "phonetic": "",
    "pos": "idiom",
    "category": "Idioms",
    "level": "B2",
    "id": 806
  },
  {
    "word": "Look on the bright side",
    "bn": "ভালো দিকটা দেখো",
    "phonetic": "",
    "pos": "idiom",
    "category": "Idioms",
    "level": "B2",
    "id": 807
  },
  {
    "word": "Keep in touch",
    "bn": "যোগাযোগ রেখো",
    "phonetic": "",
    "pos": "idiom",
    "category": "Idioms",
    "level": "B2",
    "id": 808
  },
  {
    "word": "The ball is in your court",
    "bn": "এখন সিদ্ধান্ত আপনার",
    "phonetic": "",
    "pos": "idiom",
    "category": "Idioms",
    "level": "B2",
    "id": 809
  },
  {
    "word": "jacket",
    "bn": "জ্যাকেট",
    "phonetic": "",
    "pos": "noun",
    "category": "Clothes",
    "level": "A2",
    "id": 810
  },
  {
    "word": "sweater",
    "bn": "সোয়েটার",
    "phonetic": "",
    "pos": "noun",
    "category": "Clothes",
    "level": "A2",
    "id": 811
  },
  {
    "word": "socks",
    "bn": "মোজা",
    "phonetic": "",
    "pos": "noun",
    "category": "Clothes",
    "level": "A2",
    "id": 812
  },
  {
    "word": "scarf",
    "bn": "স্কার্ফ",
    "phonetic": "",
    "pos": "noun",
    "category": "Clothes",
    "level": "A2",
    "id": 813
  },
  {
    "word": "belt",
    "bn": "বেল্ট",
    "phonetic": "",
    "pos": "noun",
    "category": "Clothes",
    "level": "A2",
    "id": 814
  },
  {
    "word": "saree",
    "bn": "শাড়ি",
    "phonetic": "",
    "pos": "noun",
    "category": "Clothes",
    "level": "A2",
    "id": 815
  },
  {
    "word": "lungi",
    "bn": "লুঙ্গি",
    "phonetic": "",
    "pos": "noun",
    "category": "Clothes",
    "level": "A2",
    "id": 816
  },
  {
    "word": "sandals",
    "bn": "স্যান্ডেল",
    "phonetic": "",
    "pos": "noun",
    "category": "Clothes",
    "level": "A2",
    "id": 817
  },
  {
    "word": "pocket",
    "bn": "পকেট",
    "phonetic": "",
    "pos": "noun",
    "category": "Clothes",
    "level": "A2",
    "id": 818
  },
  {
    "word": "button",
    "bn": "বোতাম",
    "phonetic": "",
    "pos": "noun",
    "category": "Clothes",
    "level": "A2",
    "id": 819
  },
  {
    "word": "zipper",
    "bn": "জিপার",
    "phonetic": "",
    "pos": "noun",
    "category": "Clothes",
    "level": "A2",
    "id": 820
  },
  {
    "word": "cotton",
    "bn": "সুতি কাপড়",
    "phonetic": "",
    "pos": "noun",
    "category": "Clothes",
    "level": "A2",
    "id": 821
  },
  {
    "word": "silk",
    "bn": "রেশম",
    "phonetic": "",
    "pos": "noun",
    "category": "Clothes",
    "level": "A2",
    "id": 822
  },
  {
    "word": "gloves",
    "bn": "দস্তানা",
    "phonetic": "",
    "pos": "noun",
    "category": "Clothes",
    "level": "A2",
    "id": 823
  },
  {
    "word": "tie",
    "bn": "টাই",
    "phonetic": "",
    "pos": "noun",
    "category": "Clothes",
    "level": "A2",
    "id": 824
  },
  {
    "word": "suit",
    "bn": "স্যুট",
    "phonetic": "",
    "pos": "noun",
    "category": "Clothes",
    "level": "A2",
    "id": 825
  },
  {
    "word": "necklace",
    "bn": "হার",
    "phonetic": "",
    "pos": "noun",
    "category": "Clothes",
    "level": "A2",
    "id": 826
  },
  {
    "word": "watch",
    "bn": "হাতঘড়ি",
    "phonetic": "",
    "pos": "noun",
    "category": "Clothes",
    "level": "A2",
    "id": 827
  },
  {
    "word": "bracelet",
    "bn": "বালা",
    "phonetic": "",
    "pos": "noun",
    "category": "Clothes",
    "level": "A2",
    "id": 828
  },
  {
    "word": "sofa",
    "bn": "সোফা",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 829
  },
  {
    "word": "cupboard",
    "bn": "আলমারি",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 830
  },
  {
    "word": "shelf",
    "bn": "তাক",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 831
  },
  {
    "word": "curtain",
    "bn": "পর্দা",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 832
  },
  {
    "word": "carpet",
    "bn": "কার্পেট",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 833
  },
  {
    "word": "stairs",
    "bn": "সিঁড়ি",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 834
  },
  {
    "word": "balcony",
    "bn": "বারান্দা",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 835
  },
  {
    "word": "garden",
    "bn": "বাগান",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 836
  },
  {
    "word": "gate",
    "bn": "ফটক",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 837
  },
  {
    "word": "yard",
    "bn": "উঠোন",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 838
  },
  {
    "word": "bucket",
    "bn": "বালতি",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 839
  },
  {
    "word": "pot",
    "bn": "হাঁড়ি",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 840
  },
  {
    "word": "pan",
    "bn": "কড়াই",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 841
  },
  {
    "word": "kettle",
    "bn": "কেটলি",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 842
  },
  {
    "word": "stove",
    "bn": "চুলা",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 843
  },
  {
    "word": "refrigerator",
    "bn": "ফ্রিজ",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 844
  },
  {
    "word": "oven",
    "bn": "ওভেন",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 845
  },
  {
    "word": "broom",
    "bn": "ঝাড়ু",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 846
  },
  {
    "word": "rope",
    "bn": "দড়ি",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 847
  },
  {
    "word": "ladder",
    "bn": "মই",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 848
  },
  {
    "word": "hammer",
    "bn": "হাতুড়ি",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 849
  },
  {
    "word": "nail",
    "bn": "পেরেক",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 850
  },
  {
    "word": "scissors",
    "bn": "কাঁচি",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 851
  },
  {
    "word": "needle",
    "bn": "সুই",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 852
  },
  {
    "word": "candle",
    "bn": "মোমবাতি",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 853
  },
  {
    "word": "match",
    "bn": "দেশলাই",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 854
  },
  {
    "word": "toilet",
    "bn": "টয়লেট",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 855
  },
  {
    "word": "tap",
    "bn": "কল",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 856
  },
  {
    "word": "bulb",
    "bn": "বাল্ব",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 857
  },
  {
    "word": "electricity",
    "bn": "বিদ্যুৎ",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 858
  },
  {
    "word": "gas",
    "bn": "গ্যাস",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 859
  },
  {
    "word": "pilot",
    "bn": "পাইলট",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 860
  },
  {
    "word": "singer",
    "bn": "গায়ক",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 861
  },
  {
    "word": "artist",
    "bn": "শিল্পী",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 862
  },
  {
    "word": "writer",
    "bn": "লেখক",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 863
  },
  {
    "word": "actor",
    "bn": "অভিনেতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 864
  },
  {
    "word": "journalist",
    "bn": "সাংবাদিক",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 865
  },
  {
    "word": "accountant",
    "bn": "হিসাবরক্ষক",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 866
  },
  {
    "word": "dentist",
    "bn": "দন্তচিকিৎসক",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 867
  },
  {
    "word": "pharmacist",
    "bn": "ঔষধবিক্রেতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 868
  },
  {
    "word": "mechanic",
    "bn": "মিস্ত্রি",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 869
  },
  {
    "word": "electrician",
    "bn": "ইলেকট্রিশিয়ান",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 870
  },
  {
    "word": "tailor",
    "bn": "দর্জি",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 871
  },
  {
    "word": "barber",
    "bn": "নাপিত",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 872
  },
  {
    "word": "guard",
    "bn": "প্রহরী",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 873
  },
  {
    "word": "soldier",
    "bn": "সৈনিক",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 874
  },
  {
    "word": "judge",
    "bn": "বিচারক",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 875
  },
  {
    "word": "scientist",
    "bn": "বিজ্ঞানী",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 876
  },
  {
    "word": "businessman",
    "bn": "ব্যবসায়ী",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 877
  },
  {
    "word": "fisherman",
    "bn": "জেলে",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 878
  },
  {
    "word": "carpenter",
    "bn": "কাঠমিস্ত্রি",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 879
  },
  {
    "word": "waiter",
    "bn": "ওয়েটার",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 880
  },
  {
    "word": "clerk",
    "bn": "কেরানি",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 881
  },
  {
    "word": "president",
    "bn": "রাষ্ট্রপতি",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 882
  },
  {
    "word": "minister",
    "bn": "মন্ত্রী",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 883
  },
  {
    "word": "citizen",
    "bn": "নাগরিক",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 884
  },
  {
    "word": "volunteer",
    "bn": "স্বেচ্ছাসেবক",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 885
  },
  {
    "word": "pharmacy",
    "bn": "ফার্মেসি",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 886
  },
  {
    "word": "post office",
    "bn": "ডাকঘর",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 887
  },
  {
    "word": "police station",
    "bn": "থানা",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 888
  },
  {
    "word": "court",
    "bn": "আদালত",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 889
  },
  {
    "word": "factory",
    "bn": "কারখানা",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 890
  },
  {
    "word": "stadium",
    "bn": "স্টেডিয়াম",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 891
  },
  {
    "word": "cinema",
    "bn": "সিনেমা হল",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 892
  },
  {
    "word": "museum",
    "bn": "জাদুঘর",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 893
  },
  {
    "word": "playground",
    "bn": "খেলার মাঠ",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 894
  },
  {
    "word": "bakery",
    "bn": "বেকারি",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 895
  },
  {
    "word": "supermarket",
    "bn": "সুপারমার্কেট",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 896
  },
  {
    "word": "bus stop",
    "bn": "বাস স্টপ",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 897
  },
  {
    "word": "traffic",
    "bn": "যানজট",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 898
  },
  {
    "word": "corner",
    "bn": "মোড়",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 899
  },
  {
    "word": "address",
    "bn": "ঠিকানা",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 900
  },
  {
    "word": "neighborhood",
    "bn": "পাড়া",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 901
  },
  {
    "word": "island",
    "bn": "দ্বীপ",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 902
  },
  {
    "word": "beach",
    "bn": "সমুদ্রসৈকত",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 903
  },
  {
    "word": "desert",
    "bn": "মরুভূমি",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 904
  },
  {
    "word": "waterfall",
    "bn": "জলপ্রপাত",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 905
  },
  {
    "word": "capital",
    "bn": "রাজধানী",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 906
  },
  {
    "word": "border",
    "bn": "সীমান্ত",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 907
  },
  {
    "word": "rabbit",
    "bn": "খরগোশ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 908
  },
  {
    "word": "deer",
    "bn": "হরিণ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 909
  },
  {
    "word": "lion",
    "bn": "সিংহ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 910
  },
  {
    "word": "bear",
    "bn": "ভালুক",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 911
  },
  {
    "word": "fox",
    "bn": "শিয়াল",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 912
  },
  {
    "word": "wolf",
    "bn": "নেকড়ে",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 913
  },
  {
    "word": "rat",
    "bn": "ইঁদুর",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 914
  },
  {
    "word": "frog",
    "bn": "ব্যাঙ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 915
  },
  {
    "word": "fly",
    "bn": "মাছি",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 916
  },
  {
    "word": "ant",
    "bn": "পিঁপড়া",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 917
  },
  {
    "word": "bee",
    "bn": "মৌমাছি",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 918
  },
  {
    "word": "spider",
    "bn": "মাকড়সা",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 919
  },
  {
    "word": "crow",
    "bn": "কাক",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 920
  },
  {
    "word": "parrot",
    "bn": "টিয়া",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 921
  },
  {
    "word": "eagle",
    "bn": "ঈগল",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 922
  },
  {
    "word": "owl",
    "bn": "পেঁচা",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 923
  },
  {
    "word": "sparrow",
    "bn": "চড়ুই",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 924
  },
  {
    "word": "peacock",
    "bn": "ময়ূর",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 925
  },
  {
    "word": "crocodile",
    "bn": "কুমির",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 926
  },
  {
    "word": "turtle",
    "bn": "কচ্ছপ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 927
  },
  {
    "word": "whale",
    "bn": "তিমি",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 928
  },
  {
    "word": "wing",
    "bn": "ডানা",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 929
  },
  {
    "word": "tail",
    "bn": "লেজ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 930
  },
  {
    "word": "nest",
    "bn": "বাসা",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 931
  },
  {
    "word": "seed",
    "bn": "বীজ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 932
  },
  {
    "word": "root",
    "bn": "শিকড়",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 933
  },
  {
    "word": "branch",
    "bn": "ডাল",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 934
  },
  {
    "word": "rose",
    "bn": "গোলাপ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 935
  },
  {
    "word": "lotus",
    "bn": "পদ্ম",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 936
  },
  {
    "word": "jasmine",
    "bn": "বেলি ফুল",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 937
  },
  {
    "word": "sand",
    "bn": "বালি",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 938
  },
  {
    "word": "stone",
    "bn": "পাথর",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 939
  },
  {
    "word": "soil",
    "bn": "মাটি",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 940
  },
  {
    "word": "rainbow",
    "bn": "রামধনু",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 941
  },
  {
    "word": "thunder",
    "bn": "বজ্র",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 942
  },
  {
    "word": "lightning",
    "bn": "বিদ্যুৎচমক",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 943
  },
  {
    "word": "fog",
    "bn": "কুয়াশা",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 944
  },
  {
    "word": "heat",
    "bn": "তাপ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 945
  },
  {
    "word": "earthquake",
    "bn": "ভূমিকম্প",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 946
  },
  {
    "word": "wave",
    "bn": "ঢেউ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 947
  },
  {
    "word": "bite",
    "bn": "কামড়ানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 948
  },
  {
    "word": "burn",
    "bn": "পোড়ানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 949
  },
  {
    "word": "chase",
    "bn": "তাড়া করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 950
  },
  {
    "word": "cheat",
    "bn": "ঠকানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 951
  },
  {
    "word": "copy",
    "bn": "নকল করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 952
  },
  {
    "word": "dig",
    "bn": "খোঁড়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 953
  },
  {
    "word": "dive",
    "bn": "ডুব দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 954
  },
  {
    "word": "escape",
    "bn": "পালানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 955
  },
  {
    "word": "fight",
    "bn": "ঝগড়া করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 956
  },
  {
    "word": "float",
    "bn": "ভাসা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 957
  },
  {
    "word": "freeze",
    "bn": "জমে যাওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 958
  },
  {
    "word": "guess",
    "bn": "অনুমান করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 959
  },
  {
    "word": "hurt",
    "bn": "আঘাত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 960
  },
  {
    "word": "kick",
    "bn": "লাথি মারা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 961
  },
  {
    "word": "knock",
    "bn": "কড়া নাড়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 962
  },
  {
    "word": "lie",
    "bn": "মিথ্যা বলা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 963
  },
  {
    "word": "marry",
    "bn": "বিয়ে করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 964
  },
  {
    "word": "melt",
    "bn": "গলে যাওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 965
  },
  {
    "word": "notice",
    "bn": "লক্ষ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 966
  },
  {
    "word": "obey",
    "bn": "মান্য করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 967
  },
  {
    "word": "offer",
    "bn": "প্রস্তাব দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 968
  },
  {
    "word": "own",
    "bn": "মালিক হওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 969
  },
  {
    "word": "pack",
    "bn": "গুছিয়ে নেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 970
  },
  {
    "word": "pick",
    "bn": "তোলা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 971
  },
  {
    "word": "promise",
    "bn": "প্রতিশ্রুতি দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 972
  },
  {
    "word": "punish",
    "bn": "শাস্তি দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 973
  },
  {
    "word": "repair",
    "bn": "মেরামত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 974
  },
  {
    "word": "scold",
    "bn": "বকা দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 975
  },
  {
    "word": "search",
    "bn": "খোঁজা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 976
  },
  {
    "word": "shake",
    "bn": "ঝাঁকানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 977
  },
  {
    "word": "shine",
    "bn": "জ্বলজ্বল করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 978
  },
  {
    "word": "slip",
    "bn": "পিছলে যাওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 979
  },
  {
    "word": "smoke",
    "bn": "ধূমপান করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 980
  },
  {
    "word": "sneeze",
    "bn": "হাঁচি দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 981
  },
  {
    "word": "spell",
    "bn": "বানান করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 982
  },
  {
    "word": "steal",
    "bn": "চুরি করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 983
  },
  {
    "word": "stir",
    "bn": "নাড়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 984
  },
  {
    "word": "suffer",
    "bn": "কষ্ট পাওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 985
  },
  {
    "word": "swallow",
    "bn": "গেলা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 986
  },
  {
    "word": "trust",
    "bn": "ভরসা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 987
  },
  {
    "word": "turn",
    "bn": "ঘোরা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 988
  },
  {
    "word": "warn",
    "bn": "সতর্ক করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 989
  },
  {
    "word": "weigh",
    "bn": "ওজন করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 990
  },
  {
    "word": "wish",
    "bn": "ইচ্ছা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 991
  },
  {
    "word": "wrap",
    "bn": "মোড়ানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 992
  },
  {
    "word": "yawn",
    "bn": "হাই তোলা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 993
  },
  {
    "word": "bend",
    "bn": "বাঁকানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 994
  },
  {
    "word": "ancient",
    "bn": "প্রাচীন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 995
  },
  {
    "word": "modern",
    "bn": "আধুনিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 996
  },
  {
    "word": "local",
    "bn": "স্থানীয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 997
  },
  {
    "word": "foreign",
    "bn": "বিদেশি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 998
  },
  {
    "word": "public",
    "bn": "সর্বজনীন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 999
  },
  {
    "word": "private",
    "bn": "ব্যক্তিগত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1000
  },
  {
    "word": "common",
    "bn": "সাধারণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1001
  },
  {
    "word": "special",
    "bn": "বিশেষ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1002
  },
  {
    "word": "normal",
    "bn": "স্বাভাবিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1003
  },
  {
    "word": "natural",
    "bn": "প্রাকৃতিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1004
  },
  {
    "word": "simple",
    "bn": "সরল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1005
  },
  {
    "word": "clear",
    "bn": "স্পষ্ট",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1006
  },
  {
    "word": "correct",
    "bn": "শুদ্ধ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1007
  },
  {
    "word": "perfect",
    "bn": "নিখুঁত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1008
  },
  {
    "word": "total",
    "bn": "মোট",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1009
  },
  {
    "word": "final",
    "bn": "চূড়ান্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1010
  },
  {
    "word": "main",
    "bn": "প্রধান",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1011
  },
  {
    "word": "real",
    "bn": "আসল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1012
  },
  {
    "word": "silent",
    "bn": "নীরব",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1013
  },
  {
    "word": "smooth",
    "bn": "মসৃণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1014
  },
  {
    "word": "rough",
    "bn": "অমসৃণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1015
  },
  {
    "word": "sharp",
    "bn": "ধারালো",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1016
  },
  {
    "word": "flat",
    "bn": "সমতল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1017
  },
  {
    "word": "round",
    "bn": "গোল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1018
  },
  {
    "word": "narrow",
    "bn": "সরু",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1019
  },
  {
    "word": "loose",
    "bn": "ঢিলা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1020
  },
  {
    "word": "tight",
    "bn": "আঁটসাঁট",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1021
  },
  {
    "word": "soft",
    "bn": "নরম",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1022
  },
  {
    "word": "hard",
    "bn": "শক্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1023
  },
  {
    "word": "rare",
    "bn": "বিরল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1024
  },
  {
    "word": "valuable",
    "bn": "মূল্যবান",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1025
  },
  {
    "word": "useful",
    "bn": "উপকারী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1026
  },
  {
    "word": "useless",
    "bn": "অকেজো",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1027
  },
  {
    "word": "harmful",
    "bn": "ক্ষতিকর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1028
  },
  {
    "word": "equal",
    "bn": "সমান",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1029
  },
  {
    "word": "certain",
    "bn": "নিশ্চিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1030
  },
  {
    "word": "foolish",
    "bn": "বোকা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1031
  },
  {
    "word": "gentle",
    "bn": "কোমল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1032
  },
  {
    "word": "rude",
    "bn": "অভদ্র",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1033
  },
  {
    "word": "cruel",
    "bn": "নিষ্ঠুর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1034
  },
  {
    "word": "innocent",
    "bn": "নির্দোষ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1035
  },
  {
    "word": "guilty",
    "bn": "দোষী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1036
  },
  {
    "word": "alive",
    "bn": "জীবিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1037
  },
  {
    "word": "dead",
    "bn": "মৃত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1038
  },
  {
    "word": "awake",
    "bn": "জাগ্রত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1039
  },
  {
    "word": "asleep",
    "bn": "ঘুমন্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1040
  },
  {
    "word": "went",
    "bn": "গিয়েছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1041
  },
  {
    "word": "came",
    "bn": "এসেছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1042
  },
  {
    "word": "saw",
    "bn": "দেখেছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1043
  },
  {
    "word": "ate",
    "bn": "খেয়েছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1044
  },
  {
    "word": "drank",
    "bn": "পান করেছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1045
  },
  {
    "word": "wrote",
    "bn": "লিখেছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1046
  },
  {
    "word": "took",
    "bn": "নিয়েছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1047
  },
  {
    "word": "gave",
    "bn": "দিয়েছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1048
  },
  {
    "word": "made",
    "bn": "বানিয়েছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1049
  },
  {
    "word": "said",
    "bn": "বলেছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1050
  },
  {
    "word": "told",
    "bn": "জানিয়েছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1051
  },
  {
    "word": "knew",
    "bn": "জানত",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1052
  },
  {
    "word": "thought",
    "bn": "ভেবেছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1053
  },
  {
    "word": "bought",
    "bn": "কিনেছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1054
  },
  {
    "word": "sold",
    "bn": "বিক্রি করেছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1055
  },
  {
    "word": "ran",
    "bn": "দৌড়েছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1056
  },
  {
    "word": "sat",
    "bn": "বসেছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1057
  },
  {
    "word": "stood",
    "bn": "দাঁড়িয়েছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1058
  },
  {
    "word": "slept",
    "bn": "ঘুমিয়েছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1059
  },
  {
    "word": "woke",
    "bn": "জেগেছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1060
  },
  {
    "word": "met",
    "bn": "দেখা করেছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1061
  },
  {
    "word": "found",
    "bn": "খুঁজে পেয়েছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1062
  },
  {
    "word": "lost",
    "bn": "হারিয়েছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1063
  },
  {
    "word": "began",
    "bn": "শুরু করেছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1064
  },
  {
    "word": "brought",
    "bn": "এনেছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1065
  },
  {
    "word": "sent",
    "bn": "পাঠিয়েছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1066
  },
  {
    "word": "spoke",
    "bn": "কথা বলেছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1067
  },
  {
    "word": "heard",
    "bn": "শুনেছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1068
  },
  {
    "word": "felt",
    "bn": "অনুভব করেছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1069
  },
  {
    "word": "paid",
    "bn": "টাকা দিয়েছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1070
  },
  {
    "word": "won",
    "bn": "জিতেছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1071
  },
  {
    "word": "did",
    "bn": "করেছিল",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1072
  },
  {
    "word": "was",
    "bn": "ছিল (একবচন)",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1073
  },
  {
    "word": "were",
    "bn": "ছিল (বহুবচন)",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1074
  },
  {
    "word": "had",
    "bn": "ছিল / ছিল আছে",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1075
  },
  {
    "word": "been",
    "bn": "হয়েছে",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1076
  },
  {
    "word": "gone",
    "bn": "গেছে",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1077
  },
  {
    "word": "eaten",
    "bn": "খাওয়া হয়েছে",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1078
  },
  {
    "word": "seen",
    "bn": "দেখা হয়েছে",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1079
  },
  {
    "word": "written",
    "bn": "লেখা হয়েছে",
    "phonetic": "",
    "pos": "verb",
    "category": "Verbs",
    "level": "A2",
    "id": 1080
  },
  {
    "word": "I want to",
    "bn": "আমি চাই…",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1081
  },
  {
    "word": "I like to",
    "bn": "আমি পছন্দ করি…",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1082
  },
  {
    "word": "I have to",
    "bn": "আমাকে করতে হবে",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1083
  },
  {
    "word": "I am going to",
    "bn": "আমি করতে যাচ্ছি",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1084
  },
  {
    "word": "I cannot",
    "bn": "আমি পারি না",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1085
  },
  {
    "word": "I did not",
    "bn": "আমি করিনি",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1086
  },
  {
    "word": "Did you",
    "bn": "তুমি কি করেছিলে?",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1087
  },
  {
    "word": "Will you",
    "bn": "তুমি কি করবে?",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1088
  },
  {
    "word": "There is",
    "bn": "আছে (একবচন)",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1089
  },
  {
    "word": "There are",
    "bn": "আছে (বহুবচন)",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1090
  },
  {
    "word": "Let me",
    "bn": "আমাকে করতে দিন",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1091
  },
  {
    "word": "Let us",
    "bn": "চলুন আমরা",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1092
  },
  {
    "word": "Would you like",
    "bn": "আপনি কি চান?",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1093
  },
  {
    "word": "Could you",
    "bn": "আপনি কি করতে পারেন?",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1094
  },
  {
    "word": "May I",
    "bn": "আমি কি পারি?",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1095
  },
  {
    "word": "I used to",
    "bn": "আমি আগে করতাম",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1096
  },
  {
    "word": "It is time to",
    "bn": "এখন … করার সময়",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1097
  },
  {
    "word": "How about",
    "bn": "…কেমন হয়?",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1098
  },
  {
    "word": "What about",
    "bn": "…সম্পর্কে কী?",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1099
  },
  {
    "word": "I feel like",
    "bn": "আমার ইচ্ছে করছে",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1100
  },
  {
    "word": "I look forward to",
    "bn": "আমি অপেক্ষায় আছি",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1101
  },
  {
    "word": "As soon as possible",
    "bn": "যত দ্রুত সম্ভব",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1102
  },
  {
    "word": "In my opinion",
    "bn": "আমার মতে",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1103
  },
  {
    "word": "For example",
    "bn": "যেমন",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1104
  },
  {
    "word": "In fact",
    "bn": "আসলে",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1105
  },
  {
    "word": "By the way",
    "bn": "প্রসঙ্গত",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1106
  },
  {
    "word": "At the moment",
    "bn": "এই মুহূর্তে",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1107
  },
  {
    "word": "On time",
    "bn": "সময়মতো",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1108
  },
  {
    "word": "In the end",
    "bn": "শেষে",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1109
  },
  {
    "word": "First of all",
    "bn": "প্রথমত",
    "phonetic": "",
    "pos": "phrase",
    "category": "Phrases",
    "level": "A2",
    "id": 1110
  },
  {
    "word": "distance",
    "bn": "দূরত্ব",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1111
  },
  {
    "word": "speed",
    "bn": "গতি",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1112
  },
  {
    "word": "weight",
    "bn": "ওজন",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1113
  },
  {
    "word": "height",
    "bn": "উচ্চতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1114
  },
  {
    "word": "shape",
    "bn": "আকার",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1115
  },
  {
    "word": "line",
    "bn": "রেখা",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1116
  },
  {
    "word": "circle",
    "bn": "বৃত্ত",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1117
  },
  {
    "word": "top",
    "bn": "চূড়া",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1118
  },
  {
    "word": "bottom",
    "bn": "তলদেশ",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1119
  },
  {
    "word": "side",
    "bn": "পাশ",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1120
  },
  {
    "word": "center",
    "bn": "কেন্দ্র",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1121
  },
  {
    "word": "edge",
    "bn": "কিনারা",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1122
  },
  {
    "word": "part",
    "bn": "অংশ",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1123
  },
  {
    "word": "half",
    "bn": "অর্ধেক",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1124
  },
  {
    "word": "group",
    "bn": "দল",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1125
  },
  {
    "word": "list",
    "bn": "তালিকা",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1126
  },
  {
    "word": "page",
    "bn": "পৃষ্ঠা",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1127
  },
  {
    "word": "letter",
    "bn": "চিঠি",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1128
  },
  {
    "word": "number",
    "bn": "সংখ্যা",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1129
  },
  {
    "word": "noise",
    "bn": "আওয়াজ",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1130
  },
  {
    "word": "shadow",
    "bn": "ছায়া",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1131
  },
  {
    "word": "dust",
    "bn": "ধুলো",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1132
  },
  {
    "word": "mud",
    "bn": "কাদা",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1133
  },
  {
    "word": "garbage",
    "bn": "আবর্জনা",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1134
  },
  {
    "word": "accident",
    "bn": "দুর্ঘটনা",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1135
  },
  {
    "word": "emergency",
    "bn": "জরুরি অবস্থা",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1136
  },
  {
    "word": "danger",
    "bn": "বিপদ",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1137
  },
  {
    "word": "exercise",
    "bn": "ব্যায়াম",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1138
  },
  {
    "word": "ambulance",
    "bn": "অ্যাম্বুলেন্স",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1139
  },
  {
    "word": "appointment",
    "bn": "অ্যাপয়েন্টমেন্ট",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1140
  },
  {
    "word": "prescription",
    "bn": "প্রেসক্রিপশন",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1141
  },
  {
    "word": "tablet",
    "bn": "ট্যাবলেট",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1142
  },
  {
    "word": "injection",
    "bn": "ইনজেকশন",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1143
  },
  {
    "word": "surgery",
    "bn": "অস্ত্রোপচার",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1144
  },
  {
    "word": "disease",
    "bn": "রোগ",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1145
  },
  {
    "word": "virus",
    "bn": "ভাইরাস",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1146
  },
  {
    "word": "vaccine",
    "bn": "টিকা",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1147
  },
  {
    "word": "allergy",
    "bn": "অ্যালার্জি",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1148
  },
  {
    "word": "pressure",
    "bn": "চাপ",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1149
  },
  {
    "word": "stress",
    "bn": "মানসিক চাপ",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1150
  },
  {
    "word": "habit",
    "bn": "অভ্যাস",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1151
  },
  {
    "word": "attitude",
    "bn": "মনোভাব",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1152
  },
  {
    "word": "choice",
    "bn": "পছন্দ",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1153
  },
  {
    "word": "chance",
    "bn": "সম্ভাবনা",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1154
  },
  {
    "word": "risk",
    "bn": "ঝুঁকি",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1155
  },
  {
    "word": "failure",
    "bn": "ব্যর্থতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1156
  },
  {
    "word": "effort",
    "bn": "প্রচেষ্টা",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1157
  },
  {
    "word": "courage",
    "bn": "সাহস",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1158
  },
  {
    "word": "fear",
    "bn": "ভয়",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1159
  },
  {
    "word": "anger",
    "bn": "রাগ",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1160
  },
  {
    "word": "joy",
    "bn": "আনন্দ",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1161
  },
  {
    "word": "sorrow",
    "bn": "দুঃখ",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1162
  },
  {
    "word": "friendship",
    "bn": "বন্ধুত্ব",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1163
  },
  {
    "word": "respect",
    "bn": "সম্মান",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1164
  },
  {
    "word": "duty",
    "bn": "কর্তব্য",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1165
  },
  {
    "word": "knowledge",
    "bn": "জ্ঞান",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1166
  },
  {
    "word": "wisdom",
    "bn": "প্রজ্ঞা",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1167
  },
  {
    "word": "memory",
    "bn": "স্মৃতি",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1168
  },
  {
    "word": "future",
    "bn": "ভবিষ্যৎ",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1169
  },
  {
    "word": "past",
    "bn": "অতীত",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1170
  },
  {
    "word": "present",
    "bn": "বর্তমান",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1171
  },
  {
    "word": "moment",
    "bn": "মুহূর্ত",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1172
  },
  {
    "word": "century",
    "bn": "শতাব্দী",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1173
  },
  {
    "word": "season",
    "bn": "ঋতু",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1174
  },
  {
    "word": "date",
    "bn": "তারিখ",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1175
  },
  {
    "word": "calendar",
    "bn": "ক্যালেন্ডার",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "A2",
    "id": 1176
  },
  {
    "word": "give up",
    "bn": "হাল ছেড়ে দেওয়া",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1177
  },
  {
    "word": "look for",
    "bn": "খোঁজা",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1178
  },
  {
    "word": "look after",
    "bn": "দেখাশোনা করা",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1179
  },
  {
    "word": "turn on",
    "bn": "চালু করা",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1180
  },
  {
    "word": "turn off",
    "bn": "বন্ধ করা",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1181
  },
  {
    "word": "get up",
    "bn": "ঘুম থেকে ওঠা",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1182
  },
  {
    "word": "sit down",
    "bn": "বসে পড়া",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1183
  },
  {
    "word": "stand up",
    "bn": "উঠে দাঁড়ানো",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1184
  },
  {
    "word": "come back",
    "bn": "ফিরে আসা",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1185
  },
  {
    "word": "go out",
    "bn": "বাইরে যাওয়া",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1186
  },
  {
    "word": "pick up",
    "bn": "তুলে নেওয়া",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1187
  },
  {
    "word": "put on",
    "bn": "পরা",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1188
  },
  {
    "word": "take off",
    "bn": "খুলে ফেলা",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1189
  },
  {
    "word": "find out",
    "bn": "জানতে পারা",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1190
  },
  {
    "word": "wake up",
    "bn": "ঘুম থেকে জাগা",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1191
  },
  {
    "word": "fill in",
    "bn": "পূরণ করা",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1192
  },
  {
    "word": "run out of",
    "bn": "ফুরিয়ে যাওয়া",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1193
  },
  {
    "word": "get along with",
    "bn": "মিলেমিশে চলা",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1194
  },
  {
    "word": "carry on",
    "bn": "চালিয়ে যাওয়া",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1195
  },
  {
    "word": "set up",
    "bn": "প্রতিষ্ঠা করা",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1196
  },
  {
    "word": "figure out",
    "bn": "বুঝে ফেলা",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1197
  },
  {
    "word": "break down",
    "bn": "নষ্ট হয়ে যাওয়া",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1198
  },
  {
    "word": "call off",
    "bn": "বাতিল করা",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1199
  },
  {
    "word": "check in",
    "bn": "নিবন্ধন করা",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1200
  },
  {
    "word": "check out",
    "bn": "বের হওয়া",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1201
  },
  {
    "word": "hang out",
    "bn": "আড্ডা দেওয়া",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1202
  },
  {
    "word": "show up",
    "bn": "হাজির হওয়া",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1203
  },
  {
    "word": "try on",
    "bn": "পরে দেখা",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1204
  },
  {
    "word": "work out",
    "bn": "ব্যায়াম করা",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1205
  },
  {
    "word": "give back",
    "bn": "ফেরত দেওয়া",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1206
  },
  {
    "word": "throw away",
    "bn": "ফেলে দেওয়া",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1207
  },
  {
    "word": "calm down",
    "bn": "শান্ত হওয়া",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1208
  },
  {
    "word": "slow down",
    "bn": "গতি কমানো",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1209
  },
  {
    "word": "speed up",
    "bn": "গতি বাড়ানো",
    "phonetic": "",
    "pos": "phrasal verb",
    "category": "Phrasal",
    "level": "B1",
    "id": 1210
  },
  {
    "word": "moreover",
    "bn": "তাছাড়া",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1211
  },
  {
    "word": "meanwhile",
    "bn": "ইতিমধ্যে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1212
  },
  {
    "word": "otherwise",
    "bn": "অন্যথায়",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1213
  },
  {
    "word": "besides",
    "bn": "এছাড়াও",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1214
  },
  {
    "word": "finally",
    "bn": "অবশেষে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1215
  },
  {
    "word": "suddenly",
    "bn": "হঠাৎ",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1216
  },
  {
    "word": "luckily",
    "bn": "ভাগ্যক্রমে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1217
  },
  {
    "word": "unfortunately",
    "bn": "দুর্ভাগ্যবশত",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1218
  },
  {
    "word": "actually",
    "bn": "আসলে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1219
  },
  {
    "word": "probably",
    "bn": "সম্ভবত",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1220
  },
  {
    "word": "certainly",
    "bn": "নিশ্চয়ই",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1221
  },
  {
    "word": "especially",
    "bn": "বিশেষ করে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1222
  },
  {
    "word": "exactly",
    "bn": "ঠিক তাই",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1223
  },
  {
    "word": "completely",
    "bn": "সম্পূর্ণভাবে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1224
  },
  {
    "word": "carefully",
    "bn": "সাবধানে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1225
  },
  {
    "word": "quickly",
    "bn": "তাড়াতাড়ি",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1226
  },
  {
    "word": "slowly",
    "bn": "ধীরে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1227
  },
  {
    "word": "easily",
    "bn": "সহজে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1228
  },
  {
    "word": "hardly",
    "bn": "কদাচিৎ",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1229
  },
  {
    "word": "nearly",
    "bn": "প্রায়",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1230
  },
  {
    "word": "recently",
    "bn": "সম্প্রতি",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1231
  },
  {
    "word": "immediately",
    "bn": "সঙ্গে সঙ্গে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1232
  },
  {
    "word": "forever",
    "bn": "চিরকাল",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1233
  },
  {
    "word": "anymore",
    "bn": "আর (না)",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1234
  },
  {
    "word": "anywhere",
    "bn": "যেকোনো জায়গায়",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1235
  },
  {
    "word": "somewhere",
    "bn": "কোথাও",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1236
  },
  {
    "word": "nowhere",
    "bn": "কোথাও না",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1237
  },
  {
    "word": "whenever",
    "bn": "যখনই",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1238
  },
  {
    "word": "whatever",
    "bn": "যাই হোক",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1239
  },
  {
    "word": "whether",
    "bn": "কিনা",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1240
  },
  {
    "word": "unless",
    "bn": "যদি না",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1241
  },
  {
    "word": "since",
    "bn": "যেহেতু / থেকে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1242
  },
  {
    "word": "while",
    "bn": "যখন",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1243
  },
  {
    "word": "than",
    "bn": "চেয়ে",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1244
  },
  {
    "word": "so",
    "bn": "তাই",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1245
  },
  {
    "word": "then",
    "bn": "তারপর",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1246
  },
  {
    "word": "either",
    "bn": "যেকোনো একটি",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1247
  },
  {
    "word": "neither",
    "bn": "কোনোটিই না",
    "phonetic": "",
    "pos": "grammar",
    "category": "Grammar",
    "level": "A2",
    "id": 1248
  },
  {
    "word": "newspaper",
    "bn": "সংবাদপত্র",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 1249
  },
  {
    "word": "magazine",
    "bn": "ম্যাগাজিন",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 1250
  },
  {
    "word": "headline",
    "bn": "শিরোনাম",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 1251
  },
  {
    "word": "advertisement",
    "bn": "বিজ্ঞাপন",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 1252
  },
  {
    "word": "luggage",
    "bn": "মালপত্র",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 1253
  },
  {
    "word": "suitcase",
    "bn": "সুটকেস",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 1254
  },
  {
    "word": "route",
    "bn": "পথ",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 1255
  },
  {
    "word": "journey",
    "bn": "যাত্রা",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 1256
  },
  {
    "word": "tour",
    "bn": "ভ্রমণ",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 1257
  },
  {
    "word": "tourist",
    "bn": "পর্যটক",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 1258
  },
  {
    "word": "guide",
    "bn": "গাইড",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 1259
  },
  {
    "word": "souvenir",
    "bn": "স্মারক",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 1260
  },
  {
    "word": "reservation",
    "bn": "বুকিং",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 1261
  },
  {
    "word": "refund",
    "bn": "ফেরত",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 1262
  },
  {
    "word": "complaint",
    "bn": "অভিযোগ",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 1263
  },
  {
    "word": "service",
    "bn": "সেবা",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 1264
  },
  {
    "word": "tip",
    "bn": "বখশিশ",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 1265
  },
  {
    "word": "appetite",
    "bn": "ক্ষুধা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 1266
  },
  {
    "word": "recipe",
    "bn": "রান্নার পদ্ধতি",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 1267
  },
  {
    "word": "ingredient",
    "bn": "উপাদান",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 1268
  },
  {
    "word": "flavor",
    "bn": "স্বাদ",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 1269
  },
  {
    "word": "dessert",
    "bn": "মিষ্টান্ন",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 1270
  },
  {
    "word": "beverage",
    "bn": "পানীয়",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 1271
  },
  {
    "word": "vegetarian",
    "bn": "নিরামিষভোজী",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 1272
  },
  {
    "word": "noodles",
    "bn": "নুডলস",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 1273
  },
  {
    "word": "sandwich",
    "bn": "স্যান্ডউইচ",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 1274
  },
  {
    "word": "pizza",
    "bn": "পিৎজা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 1275
  },
  {
    "word": "burger",
    "bn": "বার্গার",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 1276
  },
  {
    "word": "ice cream",
    "bn": "আইসক্রিম",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 1277
  },
  {
    "word": "chocolate",
    "bn": "চকলেট",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 1278
  },
  {
    "word": "honey",
    "bn": "মধু",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 1279
  },
  {
    "word": "pepper",
    "bn": "মরিচ",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 1280
  },
  {
    "word": "spice",
    "bn": "মশলা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 1281
  },
  {
    "word": "curry",
    "bn": "তরকারি",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 1282
  },
  {
    "word": "yogurt",
    "bn": "দই",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 1283
  },
  {
    "word": "sweets",
    "bn": "মিষ্টি",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 1284
  },
  {
    "word": "Adapt",
    "bn": "খাপ খাইয়ে নেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1285
  },
  {
    "word": "Admire",
    "bn": "প্রশংসা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1286
  },
  {
    "word": "Admit",
    "bn": "স্বীকার করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1287
  },
  {
    "word": "Advise",
    "bn": "পরামর্শ দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1288
  },
  {
    "word": "Afford",
    "bn": "সামর্থ্য থাকা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1289
  },
  {
    "word": "Announce",
    "bn": "ঘোষণা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1290
  },
  {
    "word": "Apologize",
    "bn": "ক্ষমা চাওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1291
  },
  {
    "word": "Appreciate",
    "bn": "কদর করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1292
  },
  {
    "word": "Arrange",
    "bn": "ব্যবস্থা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1293
  },
  {
    "word": "Arrest",
    "bn": "গ্রেপ্তার করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1294
  },
  {
    "word": "Assist",
    "bn": "সহায়তা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1295
  },
  {
    "word": "Attack",
    "bn": "আক্রমণ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1296
  },
  {
    "word": "Attend",
    "bn": "উপস্থিত থাকা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1297
  },
  {
    "word": "Attract",
    "bn": "আকর্ষণ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1298
  },
  {
    "word": "Avoid",
    "bn": "এড়িয়ে চলা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1299
  },
  {
    "word": "Battle",
    "bn": "যুদ্ধ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1300
  },
  {
    "word": "Behave",
    "bn": "আচরণ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1301
  },
  {
    "word": "Belong",
    "bn": "অধীনে থাকা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1302
  },
  {
    "word": "Bless",
    "bn": "আশীর্বাদ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1303
  },
  {
    "word": "Breathe",
    "bn": "শ্বাস নেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1304
  },
  {
    "word": "Bury",
    "bn": "দাফন করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1305
  },
  {
    "word": "Calculate",
    "bn": "গণনা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1306
  },
  {
    "word": "Cancel",
    "bn": "বাতিল করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1307
  },
  {
    "word": "Capture",
    "bn": "বন্দি করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1308
  },
  {
    "word": "Charge",
    "bn": "মূল্য বা ফি ধরা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1309
  },
  {
    "word": "Chew",
    "bn": "চিবানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1310
  },
  {
    "word": "Clap",
    "bn": "হাততালি দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A1",
    "id": 1311
  },
  {
    "word": "Combine",
    "bn": "একত্রিত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1312
  },
  {
    "word": "Comfort",
    "bn": "সান্ত্বনা দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1313
  },
  {
    "word": "Command",
    "bn": "আদেশ দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1314
  },
  {
    "word": "Communicate",
    "bn": "যোগাযোগ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1315
  },
  {
    "word": "Compete",
    "bn": "প্রতিযোগিতা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1316
  },
  {
    "word": "Complain",
    "bn": "অভিযোগ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1317
  },
  {
    "word": "Complete",
    "bn": "সম্পন্ন করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1318
  },
  {
    "word": "Concentrate",
    "bn": "মনোযোগ দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1319
  },
  {
    "word": "Conclude",
    "bn": "উপসংহার টানা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1320
  },
  {
    "word": "Confess",
    "bn": "দোষ স্বীকার করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1321
  },
  {
    "word": "Confirm",
    "bn": "নিশ্চিত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1322
  },
  {
    "word": "Connect",
    "bn": "যুক্ত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1323
  },
  {
    "word": "Consider",
    "bn": "বিবেচনা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1324
  },
  {
    "word": "Consist",
    "bn": "গঠিত হওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1325
  },
  {
    "word": "Contain",
    "bn": "ধারণ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1326
  },
  {
    "word": "Continue",
    "bn": "চালিয়ে যাওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1327
  },
  {
    "word": "Control",
    "bn": "নিয়ন্ত্রণ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1328
  },
  {
    "word": "Convince",
    "bn": "প্ররোচিত বা সম্মত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1329
  },
  {
    "word": "Crash",
    "bn": "ধাক্কা খাওয়া বা বিধ্বস্ত হওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1330
  },
  {
    "word": "Crawl",
    "bn": "হামাগুড়ি দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1331
  },
  {
    "word": "Cure",
    "bn": "আরোগ্য করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1332
  },
  {
    "word": "Damage",
    "bn": "ক্ষতিগ্রস্ত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1333
  },
  {
    "word": "Dare",
    "bn": "সাহস করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1334
  },
  {
    "word": "Deceive",
    "bn": "প্রতারণা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1335
  },
  {
    "word": "Declare",
    "bn": "ঘোষণা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1336
  },
  {
    "word": "Decorate",
    "bn": "সাজানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1337
  },
  {
    "word": "Decrease",
    "bn": "হ্রাস করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1338
  },
  {
    "word": "Defend",
    "bn": "রক্ষা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1339
  },
  {
    "word": "Delay",
    "bn": "দেরি করানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1340
  },
  {
    "word": "Deliver",
    "bn": "পৌঁছে দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1341
  },
  {
    "word": "Demand",
    "bn": "দাবি করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1342
  },
  {
    "word": "Deny",
    "bn": "অস্বীকার করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1343
  },
  {
    "word": "Depend",
    "bn": "নির্ভর করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1344
  },
  {
    "word": "Deposit",
    "bn": "জমা রাখা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1345
  },
  {
    "word": "Describe",
    "bn": "বর্ণনা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1346
  },
  {
    "word": "Deserve",
    "bn": "যোগ্য হওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1347
  },
  {
    "word": "Destroy",
    "bn": "ধ্বংস করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1348
  },
  {
    "word": "Detect",
    "bn": "শনাক্ত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1349
  },
  {
    "word": "Determine",
    "bn": "সংকল্প বা নির্ধারণ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1350
  },
  {
    "word": "Develop",
    "bn": "উন্নত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1351
  },
  {
    "word": "Disappear",
    "bn": "অদৃশ্য হওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1352
  },
  {
    "word": "Discover",
    "bn": "আবিষ্কার করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1353
  },
  {
    "word": "Discuss",
    "bn": "আলোচনা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1354
  },
  {
    "word": "Distribute",
    "bn": "বিতরণ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1355
  },
  {
    "word": "Disturb",
    "bn": "বিরক্ত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1356
  },
  {
    "word": "Doubt",
    "bn": "সন্দেহ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1357
  },
  {
    "word": "Drag",
    "bn": "টেনে হিঁচড়ে নেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1358
  },
  {
    "word": "Drown",
    "bn": "পানিতে ডুবে যাওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1359
  },
  {
    "word": "Educate",
    "bn": "শিক্ষিত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1360
  },
  {
    "word": "Elect",
    "bn": "নির্বাচিত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1361
  },
  {
    "word": "Encourage",
    "bn": "উৎসাহিত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1362
  },
  {
    "word": "Endure",
    "bn": "সহ্য করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1363
  },
  {
    "word": "Engage",
    "bn": "যুক্ত হওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1364
  },
  {
    "word": "Ensure",
    "bn": "নিশ্চিত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1365
  },
  {
    "word": "Entertain",
    "bn": "বিনোদন দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1366
  },
  {
    "word": "Examine",
    "bn": "পরীক্ষা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1367
  },
  {
    "word": "Exchange",
    "bn": "বিনিময় করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1368
  },
  {
    "word": "Excite",
    "bn": "উত্তেজিত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1369
  },
  {
    "word": "Exclude",
    "bn": "বাদ দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1370
  },
  {
    "word": "Excuse",
    "bn": "মাফ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A1",
    "id": 1371
  },
  {
    "word": "Exist",
    "bn": "অস্তিত্ব থাকা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1372
  },
  {
    "word": "Expand",
    "bn": "প্রসারিত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1373
  },
  {
    "word": "Expect",
    "bn": "প্রত্যাশা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1374
  },
  {
    "word": "Explode",
    "bn": "বিস্ফোরিত হওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1375
  },
  {
    "word": "Explore",
    "bn": "অন্বেষণ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1376
  },
  {
    "word": "Export",
    "bn": "রপ্তানি করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1377
  },
  {
    "word": "Express",
    "bn": "প্রকাশ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1378
  },
  {
    "word": "Extend",
    "bn": "বৃদ্ধি করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1379
  },
  {
    "word": "Fade",
    "bn": "বিবর্ণ হওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1380
  },
  {
    "word": "Fail",
    "bn": "ব্যর্থ হওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A1",
    "id": 1381
  },
  {
    "word": "Faint",
    "bn": "অজ্ঞান হওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1382
  },
  {
    "word": "Feed",
    "bn": "খাওয়ানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1383
  },
  {
    "word": "Flow",
    "bn": "প্রবাহিত হওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1384
  },
  {
    "word": "Fold",
    "bn": "ভাঁজ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1385
  },
  {
    "word": "Forbid",
    "bn": "নিষেধ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1386
  },
  {
    "word": "Forgive",
    "bn": "ক্ষমা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1387
  },
  {
    "word": "Frighten",
    "bn": "ভয় দেখানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1388
  },
  {
    "word": "Gain",
    "bn": "অর্জন করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1389
  },
  {
    "word": "Gather",
    "bn": "একত্রিত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1390
  },
  {
    "word": "Glance",
    "bn": "এক পলক তাকানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1391
  },
  {
    "word": "Glow",
    "bn": "উজ্জ্বল হওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1392
  },
  {
    "word": "Govern",
    "bn": "শাসন করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1393
  },
  {
    "word": "Grab",
    "bn": "খপ করে ধরা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1394
  },
  {
    "word": "Greet",
    "bn": "অভিবাদন জানানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A1",
    "id": 1395
  },
  {
    "word": "Groan",
    "bn": "কাতরানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1396
  },
  {
    "word": "Handle",
    "bn": "সামলানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1397
  },
  {
    "word": "Hang",
    "bn": "ঝোলানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1398
  },
  {
    "word": "Harm",
    "bn": "ক্ষতি করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1399
  },
  {
    "word": "Harvest",
    "bn": "ফসল তোলা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1400
  },
  {
    "word": "Haunt",
    "bn": "তাড়িয়ে বেড়ানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1401
  },
  {
    "word": "Heal",
    "bn": "সেরে ওঠা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1402
  },
  {
    "word": "Hesitate",
    "bn": "দ্বিধা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1403
  },
  {
    "word": "Hunt",
    "bn": "শিকার করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1404
  },
  {
    "word": "Identify",
    "bn": "শনাক্ত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1405
  },
  {
    "word": "Ignore",
    "bn": "উপেক্ষা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1406
  },
  {
    "word": "Imagine",
    "bn": "কল্পনা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1407
  },
  {
    "word": "Imitate",
    "bn": "অনুকরণ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1408
  },
  {
    "word": "Import",
    "bn": "আমদানি করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1409
  },
  {
    "word": "Impress",
    "bn": "মুগ্ধ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1410
  },
  {
    "word": "Inform",
    "bn": "অবহিত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1411
  },
  {
    "word": "Injure",
    "bn": "আঘাত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1412
  },
  {
    "word": "Insist",
    "bn": "জেদ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1413
  },
  {
    "word": "Inspire",
    "bn": "অনুপ্রাণিত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1414
  },
  {
    "word": "Install",
    "bn": "সংস্থাপন করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1415
  },
  {
    "word": "Insult",
    "bn": "অপমান করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1416
  },
  {
    "word": "Intend",
    "bn": "মনস্থ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1417
  },
  {
    "word": "Interrupt",
    "bn": "বাধাদান করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1418
  },
  {
    "word": "Introduce",
    "bn": "পরিচয় করিয়ে দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A1",
    "id": 1419
  },
  {
    "word": "Invent",
    "bn": "উদ্ভাবন করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1420
  },
  {
    "word": "Invest",
    "bn": "বিনিয়োগ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1421
  },
  {
    "word": "Irritate",
    "bn": "বিরক্ত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1422
  },
  {
    "word": "Jog",
    "bn": "ধীরে দৌড়ানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A1",
    "id": 1423
  },
  {
    "word": "Kiss",
    "bn": "চুমু খাওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A1",
    "id": 1424
  },
  {
    "word": "Kneel",
    "bn": "হাঁটু গেড়ে বসা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1425
  },
  {
    "word": "Knit",
    "bn": "বোনা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1426
  },
  {
    "word": "Launch",
    "bn": "উদ্বোধন করা বা শুরু করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1427
  },
  {
    "word": "Lead",
    "bn": "নেতৃত্ব দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1428
  },
  {
    "word": "Leak",
    "bn": "ছিদ্র দিয়ে পড়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1429
  },
  {
    "word": "Lean",
    "bn": "হেলান দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1430
  },
  {
    "word": "Leap",
    "bn": "উঁচু লাফ দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1431
  },
  {
    "word": "Liberate",
    "bn": "মুক্ত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1432
  },
  {
    "word": "Lift",
    "bn": "উপরে তোলা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1433
  },
  {
    "word": "Load",
    "bn": "বোঝাই করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1434
  },
  {
    "word": "Locate",
    "bn": "খুঁজে পাওয়া বা স্থাপন করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1435
  },
  {
    "word": "Lock",
    "bn": "তালা লাগানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A1",
    "id": 1436
  },
  {
    "word": "Maintain",
    "bn": "বজায় রাখা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1437
  },
  {
    "word": "Manufacture",
    "bn": "কারখানায় তৈরি করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1438
  },
  {
    "word": "Mend",
    "bn": "মেরামত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1439
  },
  {
    "word": "Mention",
    "bn": "উল্লেখ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1440
  },
  {
    "word": "Mind",
    "bn": "মনোযোগ দেওয়া বা কিছু মনে করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1441
  },
  {
    "word": "Misunderstand",
    "bn": "ভুল বোঝা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1442
  },
  {
    "word": "Mourn",
    "bn": "শোক প্রকাশ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1443
  },
  {
    "word": "Multiply",
    "bn": "গুণ করা বা বৃদ্ধি পাওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1444
  },
  {
    "word": "Murder",
    "bn": "হত্যা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1445
  },
  {
    "word": "Nod",
    "bn": "মাথা নেড়ে সম্মতি দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1446
  },
  {
    "word": "Object",
    "bn": "আপত্তি করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1447
  },
  {
    "word": "Observe",
    "bn": "পর্যবেক্ষণ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1448
  },
  {
    "word": "Obtain",
    "bn": "অর্জন করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1449
  },
  {
    "word": "Occupy",
    "bn": "দখল করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1450
  },
  {
    "word": "Occur",
    "bn": "ঘটা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1451
  },
  {
    "word": "Offend",
    "bn": "মনে কষ্ট দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1452
  },
  {
    "word": "Operate",
    "bn": "চালনা বা অস্ত্রোপচার করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1453
  },
  {
    "word": "Oppose",
    "bn": "বিরোধিতা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1454
  },
  {
    "word": "Organize",
    "bn": "আয়োজন করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1455
  },
  {
    "word": "Overcome",
    "bn": "কাটিয়ে ওঠা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1456
  },
  {
    "word": "Owe",
    "bn": "ঋণী থাকা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1457
  },
  {
    "word": "Paint",
    "bn": "রং করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A1",
    "id": 1458
  },
  {
    "word": "Pardon",
    "bn": "মাফ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A1",
    "id": 1459
  },
  {
    "word": "Participate",
    "bn": "অংশগ্রহণ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1460
  },
  {
    "word": "Pause",
    "bn": "সাময়িক থামা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1461
  },
  {
    "word": "Perform",
    "bn": "সম্পাদন করা বা অভিনয় করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1462
  },
  {
    "word": "Permit",
    "bn": "অনুমতি দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1463
  },
  {
    "word": "Persuade",
    "bn": "প্ররোচিত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1464
  },
  {
    "word": "Plant",
    "bn": "গাছ লাগানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A1",
    "id": 1465
  },
  {
    "word": "Plug",
    "bn": "প্লাগ লাগানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A1",
    "id": 1466
  },
  {
    "word": "Polish",
    "bn": "পালিশ বা চকচকে করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1467
  },
  {
    "word": "Pollute",
    "bn": "দূষিত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1468
  },
  {
    "word": "Praise",
    "bn": "প্রশংসা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1469
  },
  {
    "word": "Predict",
    "bn": "ভবিষ্যদ্বাণী করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1470
  },
  {
    "word": "Prefer",
    "bn": "অধিক পছন্দ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1471
  },
  {
    "word": "Prescribe",
    "bn": "প্রেসক্রিপশন দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1472
  },
  {
    "word": "Preserve",
    "bn": "সংরক্ষণ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1473
  },
  {
    "word": "Prevent",
    "bn": "প্রতিরোধ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1474
  },
  {
    "word": "Print",
    "bn": "মুদ্রণ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1475
  },
  {
    "word": "Produce",
    "bn": "উৎপাদন করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1476
  },
  {
    "word": "Prohibit",
    "bn": "নিষিদ্ধ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1477
  },
  {
    "word": "Protest",
    "bn": "প্রতিবাদ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1478
  },
  {
    "word": "Prove",
    "bn": "প্রমাণ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1479
  },
  {
    "word": "Provide",
    "bn": "যোগান দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1480
  },
  {
    "word": "Publish",
    "bn": "প্রকাশ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1481
  },
  {
    "word": "Pursue",
    "bn": "অনুসরণ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1482
  },
  {
    "word": "Qualify",
    "bn": "যোগ্যতা অর্জন করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1483
  },
  {
    "word": "Quote",
    "bn": "উদ্ধৃতি দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1484
  },
  {
    "word": "Reach",
    "bn": "পৌঁছানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1485
  },
  {
    "word": "React",
    "bn": "প্রতিক্রিয়া দেখানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1486
  },
  {
    "word": "Realize",
    "bn": "উপলব্ধি করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1487
  },
  {
    "word": "Rebuild",
    "bn": "পুনর্নির্মাণ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1488
  },
  {
    "word": "Recall",
    "bn": "মনে করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1489
  },
  {
    "word": "Recognize",
    "bn": "চিনতে পারা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1490
  },
  {
    "word": "Recommend",
    "bn": "সুপারিশ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1491
  },
  {
    "word": "Recover",
    "bn": "সুস্থ হয়ে ওঠা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1492
  },
  {
    "word": "Reduce",
    "bn": "কমানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1493
  },
  {
    "word": "Regret",
    "bn": "অনুশোচনা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1494
  },
  {
    "word": "Reject",
    "bn": "বাতিল করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1495
  },
  {
    "word": "Relate",
    "bn": "সম্পর্কিত হওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1496
  },
  {
    "word": "Rely",
    "bn": "ভরসা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1497
  },
  {
    "word": "Remain",
    "bn": "অবশিষ্ট থাকা বা থাকা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1498
  },
  {
    "word": "Remind",
    "bn": "মনে করিয়ে দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1499
  },
  {
    "word": "Remove",
    "bn": "অপসারণ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1500
  },
  {
    "word": "Repeat",
    "bn": "পুনরাবৃত্তি করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A1",
    "id": 1501
  },
  {
    "word": "Replace",
    "bn": "প্রতিস্থাপন করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1502
  },
  {
    "word": "Represent",
    "bn": "প্রতিনিধিত্ব করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1503
  },
  {
    "word": "Require",
    "bn": "প্রয়োজন হওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1504
  },
  {
    "word": "Rescue",
    "bn": "উদ্ধার করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1505
  },
  {
    "word": "Resemble",
    "bn": "সদৃশ হওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1506
  },
  {
    "word": "Resist",
    "bn": "বাধা দেওয়া বা প্রতিরোধ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1507
  },
  {
    "word": "Resolve",
    "bn": "সমাধান করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1508
  },
  {
    "word": "Respond",
    "bn": "সাড়া দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1509
  },
  {
    "word": "Restore",
    "bn": "পুনর্বহাল করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1510
  },
  {
    "word": "Retire",
    "bn": "অবসর নেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1511
  },
  {
    "word": "Reveal",
    "bn": "প্রকাশ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1512
  },
  {
    "word": "Review",
    "bn": "পুনর্বিবেচনা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1513
  },
  {
    "word": "Reward",
    "bn": "পুরস্কৃত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1514
  },
  {
    "word": "Rinse",
    "bn": "পানি দিয়ে ধোয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1515
  },
  {
    "word": "Roam",
    "bn": "ঘুরে বেড়ানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1516
  },
  {
    "word": "Roar",
    "bn": "গর্জন করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1517
  },
  {
    "word": "Rob",
    "bn": "ডাকাতি বা ছিনতাই করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1518
  },
  {
    "word": "Roll",
    "bn": "গড়িয়ে যাওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A1",
    "id": 1519
  },
  {
    "word": "Rot",
    "bn": "পচে যাওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1520
  },
  {
    "word": "Rub",
    "bn": "ঘষা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1521
  },
  {
    "word": "Ruin",
    "bn": "ধ্বংস করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1522
  },
  {
    "word": "Rush",
    "bn": "ছুটে যাওয়া বা তাড়াহুড়ো করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1523
  },
  {
    "word": "Sail",
    "bn": "পাল তুলে চলা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1524
  },
  {
    "word": "Satisfy",
    "bn": "সন্তুষ্ট করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1525
  },
  {
    "word": "Scare",
    "bn": "ভয় পাওয়া বা দেখানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1526
  },
  {
    "word": "Scatter",
    "bn": "ছড়িয়ে ছিটিয়ে দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1527
  },
  {
    "word": "Scratch",
    "bn": "আঁচড়ানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1528
  },
  {
    "word": "Scream",
    "bn": "চিৎকার করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1529
  },
  {
    "word": "Seal",
    "bn": "সিলমোহর দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1530
  },
  {
    "word": "Secure",
    "bn": "সুরক্ষিত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1531
  },
  {
    "word": "Seek",
    "bn": "খোঁজা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1532
  },
  {
    "word": "Select",
    "bn": "বাছাই করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1533
  },
  {
    "word": "Separate",
    "bn": "আলাদা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1534
  },
  {
    "word": "Serve",
    "bn": "পরিবেশন করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1535
  },
  {
    "word": "Settle",
    "bn": "স্থায়ী হওয়া বা মীমাংসা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1536
  },
  {
    "word": "Sew",
    "bn": "সেলাই করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1537
  },
  {
    "word": "Shave",
    "bn": "দাড়ি কামানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A1",
    "id": 1538
  },
  {
    "word": "Shock",
    "bn": "স্তম্ভিত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1539
  },
  {
    "word": "Shoot",
    "bn": "গুলি করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1540
  },
  {
    "word": "Sigh",
    "bn": "দীর্ঘশ্বাস ফেলা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1541
  },
  {
    "word": "Sign",
    "bn": "স্বাক্ষর করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1542
  },
  {
    "word": "Smash",
    "bn": "চূর্ণবিচূর্ণ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1543
  },
  {
    "word": "Snap",
    "bn": "ফট করে ভেঙে যাওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1544
  },
  {
    "word": "Snore",
    "bn": "নাক ডাকা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1545
  },
  {
    "word": "Soak",
    "bn": "ভিজিয়ে রাখা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1546
  },
  {
    "word": "Soothe",
    "bn": "শান্ত বা উপশম করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1547
  },
  {
    "word": "Spare",
    "bn": "অতিরিক্ত রাখা বা ক্ষমা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1548
  },
  {
    "word": "Sparkle",
    "bn": "চকচক করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1549
  },
  {
    "word": "Spill",
    "bn": "ছড়িয়ে বা উপচে পড়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1550
  },
  {
    "word": "Spin",
    "bn": "ঘোরানো বা ঘোরা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1551
  },
  {
    "word": "Spoil",
    "bn": "নষ্ট করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1552
  },
  {
    "word": "Spray",
    "bn": "ছিটানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1553
  },
  {
    "word": "Spread",
    "bn": "ছড়িয়ে দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1554
  },
  {
    "word": "Squeeze",
    "bn": "নিংড়ানো বা চাপা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1555
  },
  {
    "word": "Stare",
    "bn": "একদৃষ্টিতে তাকানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1556
  },
  {
    "word": "Starve",
    "bn": "অনাহারে থাকা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1557
  },
  {
    "word": "Steer",
    "bn": "স্টিয়ারিং ঘোরানো বা চালনা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1558
  },
  {
    "word": "Stimulate",
    "bn": "উদ্বুদ্ধ বা উত্তেজিত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1559
  },
  {
    "word": "Stitch",
    "bn": "সেলাই করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1560
  },
  {
    "word": "Stretch",
    "bn": "প্রসারিত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1561
  },
  {
    "word": "Strike",
    "bn": "আঘাত করা বা ধর্মঘট করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1562
  },
  {
    "word": "Struggle",
    "bn": "সংগ্রাম করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1563
  },
  {
    "word": "Stumble",
    "bn": "হোঁচট খাওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1564
  },
  {
    "word": "Submit",
    "bn": "জমা দেওয়া বা বশ্যতা মানা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1565
  },
  {
    "word": "Succeed",
    "bn": "সফল হওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1566
  },
  {
    "word": "Suck",
    "bn": "চুষে নেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1567
  },
  {
    "word": "Suggest",
    "bn": "পরামর্শ বা প্রস্তাব দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1568
  },
  {
    "word": "Supply",
    "bn": "সরবরাহ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1569
  },
  {
    "word": "Support",
    "bn": "সমর্থন বা সহায়তা করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1570
  },
  {
    "word": "Suppose",
    "bn": "মনে করা বা অনুমান করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1571
  },
  {
    "word": "Surrender",
    "bn": "আত্মসমর্পণ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1572
  },
  {
    "word": "Surround",
    "bn": "ঘিরে রাখা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1573
  },
  {
    "word": "Survive",
    "bn": "বেঁচে থাকা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1574
  },
  {
    "word": "Suspect",
    "bn": "সন্দেহ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1575
  },
  {
    "word": "Suspend",
    "bn": "স্থগিত বা বরখাস্ত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1576
  },
  {
    "word": "Swear",
    "bn": "শপথ করা বা গালি দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1577
  },
  {
    "word": "Sweat",
    "bn": "ঘামানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1578
  },
  {
    "word": "Sweep",
    "bn": "ঝাঁট দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1579
  },
  {
    "word": "Swell",
    "bn": "ফুলে ওঠা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1580
  },
  {
    "word": "Swing",
    "bn": "দোল খাওয়া বা দোলানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1581
  },
  {
    "word": "Target",
    "bn": "লক্ষ্য নির্ধারণ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1582
  },
  {
    "word": "Tear",
    "bn": "ছিঁড়ে ফেলা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1583
  },
  {
    "word": "Tease",
    "bn": "উত্ত্যক্ত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1584
  },
  {
    "word": "Threaten",
    "bn": "হুমকি দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1585
  },
  {
    "word": "Tolerate",
    "bn": "সহ্য করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1586
  },
  {
    "word": "Toss",
    "bn": "আলতো করে ছুড়ে দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1587
  },
  {
    "word": "Trace",
    "bn": "চিহ্ন খুঁজে বের করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1588
  },
  {
    "word": "Trap",
    "bn": "ফাঁদে ফেলা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1589
  },
  {
    "word": "Tremble",
    "bn": "ভয়ে বা শীতে কাঁপা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1590
  },
  {
    "word": "Twist",
    "bn": "মোচড়ানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1591
  },
  {
    "word": "Unfold",
    "bn": "উন্মোচিত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1592
  },
  {
    "word": "Unite",
    "bn": "ঐক্যবদ্ধ হওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1593
  },
  {
    "word": "Urge",
    "bn": "তাগিদ দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1594
  },
  {
    "word": "Vanish",
    "bn": "উধাও বা অদৃশ্য হওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1595
  },
  {
    "word": "Vary",
    "bn": "ভিন্ন হওয়া বা পরিবর্তিত হওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1596
  },
  {
    "word": "Violate",
    "bn": "আইন বা নিয়ম লঙ্ঘন করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1597
  },
  {
    "word": "Wander",
    "bn": "উদ্দেশ্যহীনভাবে ঘুরে বেড়ানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1598
  },
  {
    "word": "Waste",
    "bn": "অপচয় করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1599
  },
  {
    "word": "Weep",
    "bn": "কান্নাকাটি করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1600
  },
  {
    "word": "Whip",
    "bn": "চাবুক মারা বা ফেটানো",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1601
  },
  {
    "word": "Whistle",
    "bn": "বাঁশি বাজানো বা শিষ দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1602
  },
  {
    "word": "Wipe",
    "bn": "মুছে ফেলা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1603
  },
  {
    "word": "Witness",
    "bn": "স্বচক্ষে দেখা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1604
  },
  {
    "word": "Wound",
    "bn": "আহত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 1605
  },
  {
    "word": "Wreck",
    "bn": "ধ্বংসস্তূপে পরিণত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1606
  },
  {
    "word": "Yell",
    "bn": "জোরে চিৎকার করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "A2",
    "id": 1607
  },
  {
    "word": "Yield",
    "bn": "উৎপন্ন করা বা বশ্যতা স্বীকার",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 1608
  },
  {
    "word": "Abandoned",
    "bn": "পরিত্যক্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1609
  },
  {
    "word": "Abnormal",
    "bn": "অস্বাভাবিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1610
  },
  {
    "word": "Abrupt",
    "bn": "হঠাৎ বা আকস্মিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1611
  },
  {
    "word": "Absolute",
    "bn": "পরম বা সম্পূর্ণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1612
  },
  {
    "word": "Abstract",
    "bn": "বিমূর্ত বা ভাবমূলক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1613
  },
  {
    "word": "Absurd",
    "bn": "হাস্যকর বা অযৌক্তিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1614
  },
  {
    "word": "Abundant",
    "bn": "প্রচুর বা অঢেল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1615
  },
  {
    "word": "Academic",
    "bn": "একাডেমিক বা প্রাতিষ্ঠানিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1616
  },
  {
    "word": "Acceptable",
    "bn": "গ্রহণযোগ্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1617
  },
  {
    "word": "Accessible",
    "bn": "সহজলভ্য বা প্রবেশগম্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1618
  },
  {
    "word": "Accurate",
    "bn": "নিখুঁত বা সঠিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1619
  },
  {
    "word": "Acidic",
    "bn": "অম্লীয় বা টক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1620
  },
  {
    "word": "Active",
    "bn": "সক্রিয় বা চটপটে",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1621
  },
  {
    "word": "Actual",
    "bn": "আসল বা বাস্তব",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1622
  },
  {
    "word": "Acute",
    "bn": "তীব্র বা প্রকট",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1623
  },
  {
    "word": "Adaptable",
    "bn": "মানিয়ে নিতে সক্ষম",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1624
  },
  {
    "word": "Adequate",
    "bn": "পর্যাপ্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1625
  },
  {
    "word": "Admirable",
    "bn": "প্রশংসনীয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1626
  },
  {
    "word": "Adolescent",
    "bn": "কিশোরকালীন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1627
  },
  {
    "word": "Adorable",
    "bn": "আদুরে বা মিষ্টি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1628
  },
  {
    "word": "Adventurous",
    "bn": "দুঃসাহসী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1629
  },
  {
    "word": "Affectionate",
    "bn": "স্নেহশীল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1630
  },
  {
    "word": "Aggressive",
    "bn": "আক্রমণাত্মক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1631
  },
  {
    "word": "Agreeable",
    "bn": "মনোরম বা সম্মত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1632
  },
  {
    "word": "Alert",
    "bn": "সতর্ক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1633
  },
  {
    "word": "Alien",
    "bn": "ভিনদেশি বা অপরিচিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1634
  },
  {
    "word": "Alleged",
    "bn": "অভিযুক্ত বা কথিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1635
  },
  {
    "word": "Allergic",
    "bn": "অ্যালার্জিযুক্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1636
  },
  {
    "word": "Amazing",
    "bn": "বিস্ময়কর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1637
  },
  {
    "word": "Ambitious",
    "bn": "উচ্চাকাঙ্ক্ষী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1638
  },
  {
    "word": "Ample",
    "bn": "প্রচুর বা যথেষ্ট",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1639
  },
  {
    "word": "Amusing",
    "bn": "কৌতুকপূর্ণ বা মজার",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1640
  },
  {
    "word": "Angelic",
    "bn": "ফেরেশতাতুল্য বা নিষ্পাপ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1641
  },
  {
    "word": "Anonymous",
    "bn": "বেনামী বা নামহীন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1642
  },
  {
    "word": "Anxious",
    "bn": "উদ্বিগ্ন বা চিন্তিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1643
  },
  {
    "word": "Apparent",
    "bn": "স্পষ্ট বা দৃশ্যমান",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1644
  },
  {
    "word": "Appealing",
    "bn": "আকর্ষণীয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1645
  },
  {
    "word": "Appropriate",
    "bn": "যথাযথ বা উপযুক্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1646
  },
  {
    "word": "Approximate",
    "bn": "আনুমানিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1647
  },
  {
    "word": "Arid",
    "bn": "শুষ্ক বা অনুর্বর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1648
  },
  {
    "word": "Arrogant",
    "bn": "অহংকারী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1649
  },
  {
    "word": "Artistic",
    "bn": "শৈল্পিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1650
  },
  {
    "word": "Ashamed",
    "bn": "লজ্জিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1651
  },
  {
    "word": "Astonishing",
    "bn": "বিস্ময়কর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1652
  },
  {
    "word": "Athletic",
    "bn": "খেলাধুলায় পারদর্শী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1653
  },
  {
    "word": "Attractive",
    "bn": "আকর্ষণীয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1654
  },
  {
    "word": "Authentic",
    "bn": "খাঁটি বা আসল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1655
  },
  {
    "word": "Automatic",
    "bn": "স্বয়ংক্রিয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1656
  },
  {
    "word": "Average",
    "bn": "গড় বা সাধারণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1657
  },
  {
    "word": "Aware",
    "bn": "সচেতন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1658
  },
  {
    "word": "Awesome",
    "bn": "অসাধারণ বা চমৎকার",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1659
  },
  {
    "word": "Awful",
    "bn": "ভয়ানক খারাপ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1660
  },
  {
    "word": "Awkward",
    "bn": "অস্বস্তিকর বা বেমানান",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1661
  },
  {
    "word": "Backward",
    "bn": "অনগ্রসর বা পেছনের দিকে",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1662
  },
  {
    "word": "Bald",
    "bn": "টাকপড়া মাথা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1663
  },
  {
    "word": "Barren",
    "bn": "অনুর্বর বা বন্ধ্যা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1664
  },
  {
    "word": "Basic",
    "bn": "মৌলিক বা প্রাথমিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1665
  },
  {
    "word": "Beloved",
    "bn": "প্রিয় বা আদরের",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1666
  },
  {
    "word": "Beneficial",
    "bn": "উপকারী বা কল্যাণকর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1667
  },
  {
    "word": "Bizarre",
    "bn": "অদ্ভুত বা বিচিত্র",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1668
  },
  {
    "word": "Blank",
    "bn": "খালি বা শূন্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1669
  },
  {
    "word": "Blind",
    "bn": "দৃষ্টিহীন বা অন্ধ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1670
  },
  {
    "word": "Blissful",
    "bn": "পরম আনন্দময়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1671
  },
  {
    "word": "Bloody",
    "bn": "রক্তাক্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1672
  },
  {
    "word": "Blunt",
    "bn": "ভোঁতা বা স্পষ্টভাষী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1673
  },
  {
    "word": "Bold",
    "bn": "সাহসী বা স্পষ্ট",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1674
  },
  {
    "word": "Boring",
    "bn": "একঘেয়ে বা বিরক্তিকর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1675
  },
  {
    "word": "Bountiful",
    "bn": "প্রচুর বা দানশীল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1676
  },
  {
    "word": "Brief",
    "bn": "সংক্ষিপ্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1677
  },
  {
    "word": "Brilliant",
    "bn": "মেধাবী বা অত্যন্ত উজ্জ্বল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1678
  },
  {
    "word": "Brisk",
    "bn": "দ্রুত ও সতেজ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1679
  },
  {
    "word": "Broad",
    "bn": "প্রশস্ত বা চওড়া",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1680
  },
  {
    "word": "Broken",
    "bn": "ভাঙা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1681
  },
  {
    "word": "Brutal",
    "bn": "নৃশংস বা নিষ্ঠুর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1682
  },
  {
    "word": "Bubbly",
    "bn": "চঞ্চল ও প্রফুল্ল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1683
  },
  {
    "word": "Bulky",
    "bn": "বিশাল বা ভারী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1684
  },
  {
    "word": "Capable",
    "bn": "সক্ষম বা যোগ্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1685
  },
  {
    "word": "Careless",
    "bn": "অসতর্ক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1686
  },
  {
    "word": "Casual",
    "bn": "নৈমিত্তিক বা অনানুষ্ঠানিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1687
  },
  {
    "word": "Cautious",
    "bn": "সতর্ক বা সাবধানী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1688
  },
  {
    "word": "Central",
    "bn": "কেন্দ্রীয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1689
  },
  {
    "word": "Challenging",
    "bn": "চ্যালেঞ্জিং বা কঠিন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1690
  },
  {
    "word": "Charming",
    "bn": "মনোমুগ্ধকর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1691
  },
  {
    "word": "Cheerful",
    "bn": "আনন্দিত বা উৎফুল্ল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1692
  },
  {
    "word": "Childish",
    "bn": "ছেলেমানুষি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1693
  },
  {
    "word": "Chilly",
    "bn": "কনকনে ঠান্ডা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1694
  },
  {
    "word": "Chronic",
    "bn": "দীর্ঘস্থায়ী রোগ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1695
  },
  {
    "word": "Chubby",
    "bn": "নাদুসনুদুস",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1696
  },
  {
    "word": "Circular",
    "bn": "গোলাকার",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1697
  },
  {
    "word": "Classic",
    "bn": "কালজয়ী বা ঐতিহ্যবাহী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1698
  },
  {
    "word": "Clumsy",
    "bn": "আনাড়ি বা বেখেয়ালী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1699
  },
  {
    "word": "Cluttered",
    "bn": "এলোমেলো বা অপরিচ্ছন্ন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1700
  },
  {
    "word": "Coastal",
    "bn": "উপকূলীয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1701
  },
  {
    "word": "Colorful",
    "bn": "রঙিন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1702
  },
  {
    "word": "Colossal",
    "bn": "বিশাল বা দানবীয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1703
  },
  {
    "word": "Comfortable",
    "bn": "আরামদায়ক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1704
  },
  {
    "word": "Comic",
    "bn": "হাস্যরসাত্মক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1705
  },
  {
    "word": "Commercial",
    "bn": "বাণিজ্যিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1706
  },
  {
    "word": "Compact",
    "bn": "কমপ্যাক্ট বা নিবিড়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1707
  },
  {
    "word": "Compassionate",
    "bn": "সহানুভূতিশীল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1708
  },
  {
    "word": "Compatible",
    "bn": "মানানসই বা সামঞ্জস্যপূর্ণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1709
  },
  {
    "word": "Competitive",
    "bn": "প্রতিযোগিতামূলক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1710
  },
  {
    "word": "Complex",
    "bn": "জটিল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1711
  },
  {
    "word": "Complicated",
    "bn": "জটিল ও কঠিন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1712
  },
  {
    "word": "Complimentary",
    "bn": "প্রশংসামূলক বা বিনামূল্যে",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1713
  },
  {
    "word": "Confidential",
    "bn": "গোপনীয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1714
  },
  {
    "word": "Conscious",
    "bn": "সচেতন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1715
  },
  {
    "word": "Conservative",
    "bn": "রক্ষণশীল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1716
  },
  {
    "word": "Considerate",
    "bn": "বিবেচক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1717
  },
  {
    "word": "Consistent",
    "bn": "ধারাবাহিক বা সঙ্গতিপূর্ণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1718
  },
  {
    "word": "Constant",
    "bn": "ধ্রুব বা অবিরাম",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1719
  },
  {
    "word": "Contemporary",
    "bn": "সমসাময়িক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1720
  },
  {
    "word": "Content",
    "bn": "সন্তুষ্ট",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1721
  },
  {
    "word": "Continuous",
    "bn": "নিরবচ্ছিন্ন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1722
  },
  {
    "word": "Convenient",
    "bn": "সুবিধাজনক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1723
  },
  {
    "word": "Conventional",
    "bn": "প্রচলিত বা প্রথাগত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1724
  },
  {
    "word": "Cool",
    "bn": "শীতল বা চমৎকার",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1725
  },
  {
    "word": "Cooperative",
    "bn": "সহযোগিতাপূর্ণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1726
  },
  {
    "word": "Cordial",
    "bn": "আন্তরিক ও সৌহার্দ্যপূর্ণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1727
  },
  {
    "word": "Costly",
    "bn": "দামি বা ব্যয়বহুল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1728
  },
  {
    "word": "Courageous",
    "bn": "সাহসী ও নির্ভীক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1729
  },
  {
    "word": "Courteous",
    "bn": "ভদ্র ও মার্জিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1730
  },
  {
    "word": "Cozy",
    "bn": "আরামদায়ক ও উষ্ণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1731
  },
  {
    "word": "Crazy",
    "bn": "পাগল বা উন্মাদ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1732
  },
  {
    "word": "Creative",
    "bn": "সৃজনশীল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1733
  },
  {
    "word": "Credible",
    "bn": "বিশ্বাসযোগ্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1734
  },
  {
    "word": "Creepy",
    "bn": "ভীতিকর বা গা ছমছমে",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1735
  },
  {
    "word": "Critical",
    "bn": "সংকটপূর্ণ বা সমালোচনামূলক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1736
  },
  {
    "word": "Crooked",
    "bn": "বাঁকা বা অসৎ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1737
  },
  {
    "word": "Crowded",
    "bn": "জনাকীর্ণ বা ভিড়ভাট্টা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1738
  },
  {
    "word": "Crucial",
    "bn": "অত্যন্ত গুরুত্বপূর্ণ বা চরম",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1739
  },
  {
    "word": "Curious",
    "bn": "কৌতূহলী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1740
  },
  {
    "word": "Cute",
    "bn": "মিষ্টি বা সুন্দর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1741
  },
  {
    "word": "Cynical",
    "bn": "নৈরাশ্যবাদী বা অবিশ্বাসপ্রবণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1742
  },
  {
    "word": "Daily",
    "bn": "প্রতিদিনের বা দৈনিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1743
  },
  {
    "word": "Damp",
    "bn": "স্যাঁতসেঁতে",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1744
  },
  {
    "word": "Daring",
    "bn": "দুঃসাহসী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1745
  },
  {
    "word": "Dazzling",
    "bn": "দৃষ্টি ধাঁধানো উজ্জ্বল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1746
  },
  {
    "word": "Deadly",
    "bn": "মারাত্মক বা প্রাণঘাতী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1747
  },
  {
    "word": "Deaf",
    "bn": "বধির বা কানে কম শোনা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1748
  },
  {
    "word": "Dear",
    "bn": "প্রিয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1749
  },
  {
    "word": "Decent",
    "bn": "মার্জিত বা শোভন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1750
  },
  {
    "word": "Decisive",
    "bn": "চূড়ান্ত বা দৃঢ় সংকল্প",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1751
  },
  {
    "word": "Deep",
    "bn": "গভীর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1752
  },
  {
    "word": "Defective",
    "bn": "ত্রুটিযুক্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1753
  },
  {
    "word": "Defensive",
    "bn": "প্রতিরক্ষামূলক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1754
  },
  {
    "word": "Defiant",
    "bn": "অবাধ্য বা প্রতিবাদী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1755
  },
  {
    "word": "Delicate",
    "bn": "কোমল বা নাজুক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1756
  },
  {
    "word": "Delighted",
    "bn": "অত্যন্ত আনন্দিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1757
  },
  {
    "word": "Dense",
    "bn": "ঘন বা নিবিড়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1758
  },
  {
    "word": "Dependent",
    "bn": "নির্ভরশীল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1759
  },
  {
    "word": "Depressed",
    "bn": "বিষণ্ণ বা মনমরা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1760
  },
  {
    "word": "Desirable",
    "bn": "আকাঙ্ক্ষিত বা বাঞ্ছনীয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1761
  },
  {
    "word": "Desperate",
    "bn": "মরিয়া বা হতাশাজনক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1762
  },
  {
    "word": "Destructive",
    "bn": "ধ্বংসাত্মক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1763
  },
  {
    "word": "Determined",
    "bn": "দৃঢ়প্রতিজ্ঞ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1764
  },
  {
    "word": "Devoted",
    "bn": "নিবেদিতপ্রাণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1765
  },
  {
    "word": "Diligent",
    "bn": "পরিশ্রমী ও একনিষ্ঠ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1766
  },
  {
    "word": "Dim",
    "bn": "ম্লান বা ঝাপসা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1767
  },
  {
    "word": "Diplomatic",
    "bn": "কূটনৈতিক বা কৌশলী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1768
  },
  {
    "word": "Direct",
    "bn": "সরাসরি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1769
  },
  {
    "word": "Disabled",
    "bn": "প্রতিবন্ধী বা অক্ষম",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1770
  },
  {
    "word": "Disastrous",
    "bn": "সর্বনাশা বা বিপর্যয়কর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1771
  },
  {
    "word": "Discrete",
    "bn": "স্বতন্ত্র বা পৃথক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1772
  },
  {
    "word": "Dishonest",
    "bn": "অসৎ বা প্রতারক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1773
  },
  {
    "word": "Distant",
    "bn": "দূরবর্তী বা অনাগ্রহী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1774
  },
  {
    "word": "Distinct",
    "bn": "স্বতন্ত্র বা সুস্পষ্ট",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1775
  },
  {
    "word": "Distinguished",
    "bn": "বিশিষ্ট বা খ্যাতনামা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1776
  },
  {
    "word": "Diverse",
    "bn": "বৈচিত্র্যপূর্ণ বা নানামুখী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1777
  },
  {
    "word": "Dizzy",
    "bn": "মাথা ঘোরা ভাব",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1778
  },
  {
    "word": "Domestic",
    "bn": "ঘরোয়া বা অভ্যন্তরীণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1779
  },
  {
    "word": "Dominant",
    "bn": "প্রভাবশালী বা প্রধান",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1780
  },
  {
    "word": "Doubtful",
    "bn": "সন্দেহজনক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1781
  },
  {
    "word": "Drastic",
    "bn": "চরম বা কঠোর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1782
  },
  {
    "word": "Dull",
    "bn": "নিস্তেজ বা একঘেয়ে",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1783
  },
  {
    "word": "Dusty",
    "bn": "ধুলোবালিযুক্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1784
  },
  {
    "word": "Dynamic",
    "bn": "গতিশীল ও উদ্দীপনাময়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1785
  },
  {
    "word": "Eager",
    "bn": "আগ্রহী বা ব্যগ্র",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1786
  },
  {
    "word": "Earnest",
    "bn": "আন্তরিক ও একনিষ্ঠ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1787
  },
  {
    "word": "Economic",
    "bn": "অর্থনৈতিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1788
  },
  {
    "word": "Economical",
    "bn": "মিতব্যয়ী বা সাশ্রয়ী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1789
  },
  {
    "word": "Educated",
    "bn": "শিক্ষিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1790
  },
  {
    "word": "Eerie",
    "bn": "ভুতুড়ে বা ভীতিজনক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1791
  },
  {
    "word": "Effective",
    "bn": "কার্যকর বা ফলপ্রসূ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1792
  },
  {
    "word": "Efficient",
    "bn": "দক্ষ ও সময়নিষ্ঠ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1793
  },
  {
    "word": "Elaborate",
    "bn": "বিস্তারিত ও নিখুঁত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1794
  },
  {
    "word": "Elastic",
    "bn": "স্থিতিস্থাপক বা টানলে বাড়ে এমন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1795
  },
  {
    "word": "Elderly",
    "bn": "বয়োবৃদ্ধ বা প্রবীণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1796
  },
  {
    "word": "Electric",
    "bn": "বৈদ্যুতিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1797
  },
  {
    "word": "Elegant",
    "bn": "মার্জিত ও চমৎকার",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1798
  },
  {
    "word": "Eligible",
    "bn": "যোগ্য বা উপযুক্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1799
  },
  {
    "word": "Eminent",
    "bn": "বিখ্যাত ও শীর্ষস্থানীয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1800
  },
  {
    "word": "Emotional",
    "bn": "আবেগপ্রবণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1801
  },
  {
    "word": "Empathetic",
    "bn": "সহমর্মী বা সমব্যথী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1802
  },
  {
    "word": "Energetic",
    "bn": "কর্মচঞ্চল ও প্রাণবন্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1803
  },
  {
    "word": "Enormous",
    "bn": "বিশাল বা প্রকাণ্ড",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1804
  },
  {
    "word": "Enthusiastic",
    "bn": "উৎসাহী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1805
  },
  {
    "word": "Entire",
    "bn": "সম্পূর্ণ বা সমগ্র",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1806
  },
  {
    "word": "Essential",
    "bn": "অপরিহার্য বা মৌলিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1807
  },
  {
    "word": "Eternal",
    "bn": "অনন্ত বা চিরন্তন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1808
  },
  {
    "word": "Ethical",
    "bn": "নৈতিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1809
  },
  {
    "word": "Eventual",
    "bn": "চূড়ান্ত বা শেষপর্যায়ের",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1810
  },
  {
    "word": "Evident",
    "bn": "সুস্পষ্ট বা প্রতীয়মান",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1811
  },
  {
    "word": "Evil",
    "bn": "মন্দ বা পাপী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1812
  },
  {
    "word": "Exact",
    "bn": "সঠিক বা নির্ভুল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1813
  },
  {
    "word": "Excellent",
    "bn": "চমৎকার বা অসাধারণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1814
  },
  {
    "word": "Exceptional",
    "bn": "ব্যতিক্রমী বা অপূর্ব",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1815
  },
  {
    "word": "Excessive",
    "bn": "অতিরিক্ত বা মাত্রাতিরিক্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1816
  },
  {
    "word": "Exclusive",
    "bn": "একচেটিয়া বা বিশেষায়িত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1817
  },
  {
    "word": "Exhausted",
    "bn": "ক্লান্তিতে ভেঙে পড়া",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1818
  },
  {
    "word": "Exotic",
    "bn": "ভিনদেশি বা দুর্লভ সুন্দর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1819
  },
  {
    "word": "Experienced",
    "bn": "অভিজ্ঞ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1820
  },
  {
    "word": "Expert",
    "bn": "বিশেষজ্ঞ বা পারদর্শী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1821
  },
  {
    "word": "Explicit",
    "bn": "সুস্পষ্ট ও খোলামেলা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1822
  },
  {
    "word": "Extraordinary",
    "bn": "অসাধারণ বা অলৌকিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1823
  },
  {
    "word": "Extreme",
    "bn": "চরম বা অত্যন্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1824
  },
  {
    "word": "Fabulous",
    "bn": "কল্পনাতীত সুন্দর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1825
  },
  {
    "word": "Fair",
    "bn": "ন্যায্য বা ফর্সা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1826
  },
  {
    "word": "Faithful",
    "bn": "বিশ্বস্ত ও অনুগত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1827
  },
  {
    "word": "Fake",
    "bn": "নকল বা মেকি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1828
  },
  {
    "word": "Familiar",
    "bn": "পরিচিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1829
  },
  {
    "word": "Fancy",
    "bn": "শৌখিন বা মনোরম",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1830
  },
  {
    "word": "Fantastic",
    "bn": "চমৎকার",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1831
  },
  {
    "word": "Fascinating",
    "bn": "মুগ্ধকর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1832
  },
  {
    "word": "Fatal",
    "bn": "প্রাণঘাতী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1833
  },
  {
    "word": "Faulty",
    "bn": "ত্রুটিপূর্ণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1834
  },
  {
    "word": "Favorable",
    "bn": "অনুকূল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1835
  },
  {
    "word": "Fearful",
    "bn": "ভীত বা শঙ্কিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1836
  },
  {
    "word": "Fearless",
    "bn": "নির্ভীক ও অকুতোভয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1837
  },
  {
    "word": "Feasible",
    "bn": "বাস্তবায়নযোগ্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1838
  },
  {
    "word": "Feeble",
    "bn": "দুর্বল বা ক্ষীণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1839
  },
  {
    "word": "Feminine",
    "bn": "স্ত্রীলিঙ্গ বা নারীসুলভ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1840
  },
  {
    "word": "Fertile",
    "bn": "উর্বর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1841
  },
  {
    "word": "Fierce",
    "bn": "হিংস্র বা তীব্র",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1842
  },
  {
    "word": "Filthy",
    "bn": "অত্যন্ত নোংরা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1843
  },
  {
    "word": "Financial",
    "bn": "আর্থিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1844
  },
  {
    "word": "Fine",
    "bn": "সুন্দর বা ভালো",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1845
  },
  {
    "word": "Firm",
    "bn": "দৃঢ় বা শক্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1846
  },
  {
    "word": "Fit",
    "bn": "উপযুক্ত বা সুস্বাস্থ্যের অধিকারী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1847
  },
  {
    "word": "Flawless",
    "bn": "ত্রুটিহীন বা নিখুঁত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1848
  },
  {
    "word": "Flexible",
    "bn": "নমনীয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1849
  },
  {
    "word": "Flimsy",
    "bn": "পাতলা বা ঠুনকো",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1850
  },
  {
    "word": "Fluent",
    "bn": "সাবলীল বা অনর্গল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1851
  },
  {
    "word": "Fond",
    "bn": "অনুরাগী বা প্রিয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1852
  },
  {
    "word": "Forbidden",
    "bn": "নিষিদ্ধ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1853
  },
  {
    "word": "Forceful",
    "bn": "জোরালো",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1854
  },
  {
    "word": "Formal",
    "bn": "আনুষ্ঠানিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1855
  },
  {
    "word": "Fortunate",
    "bn": "ভাগ্যবান",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1856
  },
  {
    "word": "Fragile",
    "bn": "ভঙ্গুর বা সহজে ভেঙে যায় এমন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1857
  },
  {
    "word": "Frank",
    "bn": "স্পষ্টভাষী বা অকপট",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1858
  },
  {
    "word": "Frantic",
    "bn": "উন্মাদপ্রায় বা ব্যস্তসমস্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1859
  },
  {
    "word": "Free",
    "bn": "মুক্ত বা বিনামূল্যে",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1860
  },
  {
    "word": "Frightened",
    "bn": "ভীতসন্ত্রস্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1861
  },
  {
    "word": "Furious",
    "bn": "প্রচণ্ড ক্ষিপ্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1862
  },
  {
    "word": "Genuine",
    "bn": "আসল বা খাঁটি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1863
  },
  {
    "word": "Gigantic",
    "bn": "দৈত্যাকার বা বিশাল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1864
  },
  {
    "word": "Glad",
    "bn": "খুশি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1865
  },
  {
    "word": "Glorious",
    "bn": "মহিমান্বিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1866
  },
  {
    "word": "Golden",
    "bn": "সোনালী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1867
  },
  {
    "word": "Gorgeous",
    "bn": "অপূর্ব সুন্দর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1868
  },
  {
    "word": "Graceful",
    "bn": "লাবণ্যময় বা মার্জিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1869
  },
  {
    "word": "Gradual",
    "bn": "ক্রমবর্ধমান বা ধীর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1870
  },
  {
    "word": "Grand",
    "bn": "বিশাল বা আড়ম্বরপূর্ণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1871
  },
  {
    "word": "Greedy",
    "bn": "লোভী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1872
  },
  {
    "word": "Grim",
    "bn": "কঠোর বা নিরানন্দ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1873
  },
  {
    "word": "Handy",
    "bn": "কাজে লাগার মতো বা সুবিধাজনক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1874
  },
  {
    "word": "Hardworking",
    "bn": "পরিশ্রমী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1875
  },
  {
    "word": "Harsh",
    "bn": "কঠোর বা কর্কশ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1876
  },
  {
    "word": "Hasty",
    "bn": "তাড়াহুড়োযুক্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1877
  },
  {
    "word": "Heartfelt",
    "bn": "আন্তরিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1878
  },
  {
    "word": "Heroic",
    "bn": "বীরত্বপূর্ণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1879
  },
  {
    "word": "Hideous",
    "bn": "কুৎসিত বা কদর্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1880
  },
  {
    "word": "Hostile",
    "bn": "শত্রুভাবাপন্ন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1881
  },
  {
    "word": "Huge",
    "bn": "বিশাল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1882
  },
  {
    "word": "Humble",
    "bn": "বিনয়ী ও নম্র",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1883
  },
  {
    "word": "Humid",
    "bn": "আর্দ্র বা ভ্যাপসা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1884
  },
  {
    "word": "Ideal",
    "bn": "আদর্শ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1885
  },
  {
    "word": "Identical",
    "bn": "হুবহু একই রকম",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1886
  },
  {
    "word": "Ignorant",
    "bn": "অজ্ঞ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1887
  },
  {
    "word": "Illuminate",
    "bn": "আলোকিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1888
  },
  {
    "word": "Illustrious",
    "bn": "খ্যাতনামা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1889
  },
  {
    "word": "Immense",
    "bn": "বিপুল বা অগাধ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1890
  },
  {
    "word": "Impartial",
    "bn": "নিরপেক্ষ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1891
  },
  {
    "word": "Impatient",
    "bn": "অধৈর্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1892
  },
  {
    "word": "Imperfect",
    "bn": "অসম্পূর্ণ বা ত্রুটিযুক্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1893
  },
  {
    "word": "Impolite",
    "bn": "অভদ্র",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1894
  },
  {
    "word": "Impossible",
    "bn": "অসম্ভব",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1895
  },
  {
    "word": "Impressive",
    "bn": "মুগ্ধকর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1896
  },
  {
    "word": "Improper",
    "bn": "অনুচিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1897
  },
  {
    "word": "Pure",
    "bn": "বিশুদ্ধ বা খাঁটি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1898
  },
  {
    "word": "Impure",
    "bn": "ভেজালযুক্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1899
  },
  {
    "word": "Inadequate",
    "bn": "অপ্রতুল বা অপর্যাপ্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1900
  },
  {
    "word": "Incredible",
    "bn": "অবিশ্বাস্য সুন্দর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1901
  },
  {
    "word": "Independent",
    "bn": "স্বাধীন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1902
  },
  {
    "word": "Indifferent",
    "bn": "উদাসীন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1903
  },
  {
    "word": "Inevitable",
    "bn": "অনিবার্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1904
  },
  {
    "word": "Infamous",
    "bn": "কুখ্যাত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1905
  },
  {
    "word": "Infinite",
    "bn": "অসীম",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1906
  },
  {
    "word": "Ingenious",
    "bn": "প্রতিভাধর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1907
  },
  {
    "word": "Insane",
    "bn": "উন্মাদ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1908
  },
  {
    "word": "Insolent",
    "bn": "উদ্ধত বা বেয়াদব",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1909
  },
  {
    "word": "Instant",
    "bn": "তাৎক্ষণিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1910
  },
  {
    "word": "Intelligent",
    "bn": "বুদ্ধিমান",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1911
  },
  {
    "word": "Intense",
    "bn": "তীব্র",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1912
  },
  {
    "word": "Intentional",
    "bn": "ইচ্ছাকৃত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1913
  },
  {
    "word": "Interested",
    "bn": "আগ্রহী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1914
  },
  {
    "word": "Interesting",
    "bn": "মজার বা চিত্তাকর্ষক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1915
  },
  {
    "word": "Intermediate",
    "bn": "মাধ্যমিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1916
  },
  {
    "word": "Internal",
    "bn": "অভ্যন্তরীণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1917
  },
  {
    "word": "Intimate",
    "bn": "অন্তরঙ্গ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1918
  },
  {
    "word": "Invisible",
    "bn": "অদৃশ্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1919
  },
  {
    "word": "Jolly",
    "bn": "প্রফুল্ল ও হাসিখুশি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1920
  },
  {
    "word": "Joyous",
    "bn": "আনন্দপূর্ণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1921
  },
  {
    "word": "Keen",
    "bn": "তীক্ষ্ণ বা আগ্রহী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1922
  },
  {
    "word": "Knowledgeable",
    "bn": "জ্ঞানী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1923
  },
  {
    "word": "Lame",
    "bn": "খোঁড়া বা দুর্বল যুক্তি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1924
  },
  {
    "word": "Large",
    "bn": "বড়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1925
  },
  {
    "word": "Lavish",
    "bn": "আড়ম্বরপূর্ণ বা বিলাসবহুল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1926
  },
  {
    "word": "Legal",
    "bn": "আইনি বা বৈধ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1927
  },
  {
    "word": "Legitimate",
    "bn": "বৈধ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1928
  },
  {
    "word": "Lenient",
    "bn": "কোমল বা সহানুভূতিশীল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1929
  },
  {
    "word": "Lethal",
    "bn": "প্রাণঘাতী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1930
  },
  {
    "word": "Liberal",
    "bn": "উদারপন্থী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1931
  },
  {
    "word": "Likely",
    "bn": "সম্ভাব্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1932
  },
  {
    "word": "Lively",
    "bn": "প্রাণবন্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1933
  },
  {
    "word": "Logical",
    "bn": "যৌক্তিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1934
  },
  {
    "word": "Lovely",
    "bn": "সুন্দর বা মনোরম",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1935
  },
  {
    "word": "Loyal",
    "bn": "বিশ্বস্ত ও অনুগত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1936
  },
  {
    "word": "Luminous",
    "bn": "উজ্জ্বল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1937
  },
  {
    "word": "Mad",
    "bn": "পাগল বা ক্ষিপ্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1938
  },
  {
    "word": "Magical",
    "bn": "জাদুকরী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1939
  },
  {
    "word": "Magnificent",
    "bn": "জমকালো বা চমৎকার",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1940
  },
  {
    "word": "Major",
    "bn": "প্রধান বা গুরুতর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1941
  },
  {
    "word": "Male",
    "bn": "পুরুষ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1942
  },
  {
    "word": "Malicious",
    "bn": "বিদ্বেষপরায়ণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1943
  },
  {
    "word": "Mandatory",
    "bn": "বাধ্যতামূলক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1944
  },
  {
    "word": "Marine",
    "bn": "সামুদ্রিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1945
  },
  {
    "word": "Massive",
    "bn": "বিশাল আকারের",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1946
  },
  {
    "word": "Mature",
    "bn": "পরিপক্ব",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1947
  },
  {
    "word": "Maximum",
    "bn": "সর্বোচ্চ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1948
  },
  {
    "word": "Mean",
    "bn": "হীন বা নীচ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1949
  },
  {
    "word": "Mediocre",
    "bn": "মাঝারি মানের",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1950
  },
  {
    "word": "Mellow",
    "bn": "নরম ও মিষ্টি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1951
  },
  {
    "word": "Mental",
    "bn": "মানসিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1952
  },
  {
    "word": "Merciful",
    "bn": "দয়ালু বা ক্ষমাশীল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1953
  },
  {
    "word": "Merry",
    "bn": "আনন্দময়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1954
  },
  {
    "word": "Messy",
    "bn": "এলোমেলো",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1955
  },
  {
    "word": "Military",
    "bn": "সামরিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1956
  },
  {
    "word": "Mindful",
    "bn": "সচেতন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1957
  },
  {
    "word": "Minimum",
    "bn": "সর্বনিম্ন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1958
  },
  {
    "word": "Minor",
    "bn": "অপ্রধান বা অপ্রাপ্তবয়স্ক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1959
  },
  {
    "word": "Miserable",
    "bn": "শোচনীয় বা দুঃখী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1960
  },
  {
    "word": "Misleading",
    "bn": "বিভ্রান্তিকর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1961
  },
  {
    "word": "Mobile",
    "bn": "ভ্রাম্যমাণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1962
  },
  {
    "word": "Moderate",
    "bn": "পরিমিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1963
  },
  {
    "word": "Modest",
    "bn": "বিনয়ী বা পরিমিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1964
  },
  {
    "word": "Moral",
    "bn": "নৈতিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1965
  },
  {
    "word": "Mortal",
    "bn": "মরণশীল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1966
  },
  {
    "word": "Moving",
    "bn": "মর্মস্পর্শী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1967
  },
  {
    "word": "Mutual",
    "bn": "পারস্পরিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1968
  },
  {
    "word": "Mysterious",
    "bn": "রহস্যময়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1969
  },
  {
    "word": "Nasty",
    "bn": "অপ্রীতিকর বা জঘন্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1970
  },
  {
    "word": "Native",
    "bn": "স্থানীয় বা স্বদেশী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1971
  },
  {
    "word": "Naughty",
    "bn": "দুষ্টু",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1972
  },
  {
    "word": "Neat",
    "bn": "পরিপাটি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1973
  },
  {
    "word": "Necessary",
    "bn": "প্রয়োজনীয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1974
  },
  {
    "word": "Negative",
    "bn": "নেতিবাচক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1975
  },
  {
    "word": "Neglectful",
    "bn": "উদাসীন বা অবহেলাকারী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1976
  },
  {
    "word": "Neutral",
    "bn": "নিরপেক্ষ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1977
  },
  {
    "word": "Noble",
    "bn": "মহৎ বা অভিজাত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1978
  },
  {
    "word": "Noisy",
    "bn": "কোলাহলপূর্ণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1979
  },
  {
    "word": "Notable",
    "bn": "উল্লেখযোগ্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1980
  },
  {
    "word": "Novel",
    "bn": "অভিনব",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1981
  },
  {
    "word": "Numb",
    "bn": "অসাড় বা অনুভূতিহীন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1982
  },
  {
    "word": "Numerous",
    "bn": "অগণিত বা বহু",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1983
  },
  {
    "word": "Obedient",
    "bn": "বাধ্য বা অনুগত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1984
  },
  {
    "word": "Objective",
    "bn": "বস্তুনিষ্ঠ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1985
  },
  {
    "word": "Obligatory",
    "bn": "বাধ্যতামূলক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1986
  },
  {
    "word": "Obnoxious",
    "bn": "অসহ্যকর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1987
  },
  {
    "word": "Obscure",
    "bn": "অস্পষ্ট বা অপরিচিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1988
  },
  {
    "word": "Obvious",
    "bn": "সুস্পষ্ট",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1989
  },
  {
    "word": "Odd",
    "bn": "বিজোড় বা অদ্ভুত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1990
  },
  {
    "word": "Offensive",
    "bn": "আপত্তিকর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1991
  },
  {
    "word": "Official",
    "bn": "দাপ্তরিক বা সরকারি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1992
  },
  {
    "word": "Oily",
    "bn": "তৈলাক্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 1993
  },
  {
    "word": "Ominous",
    "bn": "অশুভ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 1994
  },
  {
    "word": "Optimistic",
    "bn": "আশাবাদী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1995
  },
  {
    "word": "Oral",
    "bn": "মৌখিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1996
  },
  {
    "word": "Orderly",
    "bn": "শৃঙ্খলিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1997
  },
  {
    "word": "Ordinary",
    "bn": "সাধারণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 1998
  },
  {
    "word": "Organic",
    "bn": "জৈব",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 1999
  },
  {
    "word": "Original",
    "bn": "আসল বা মৌলিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2000
  },
  {
    "word": "Orthodox",
    "bn": "সনাতনপন্থী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2001
  },
  {
    "word": "Outdoor",
    "bn": "ঘরের বাইরে",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2002
  },
  {
    "word": "Outrageous",
    "bn": "বর্বরোচিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2003
  },
  {
    "word": "Outstanding",
    "bn": "অসামান্য বা বকেয়া",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2004
  },
  {
    "word": "Overjoyed",
    "bn": "পরম আনন্দিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2005
  },
  {
    "word": "Pale",
    "bn": "ফ্যাকাশে",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2006
  },
  {
    "word": "Parallel",
    "bn": "সমান্তরাল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2007
  },
  {
    "word": "Passionate",
    "bn": "আবেগদীপ্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2008
  },
  {
    "word": "Passive",
    "bn": "নিষ্ক্রিয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2009
  },
  {
    "word": "Peaceful",
    "bn": "শান্তিপূর্ণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2010
  },
  {
    "word": "Peculiar",
    "bn": "অস্বাভাবিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2011
  },
  {
    "word": "Permanent",
    "bn": "স্থায়ী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2012
  },
  {
    "word": "Personal",
    "bn": "ব্যক্তিগত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2013
  },
  {
    "word": "Persuasive",
    "bn": "প্ররোচনামূলক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2014
  },
  {
    "word": "Pessimistic",
    "bn": "হতাশাবাদী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2015
  },
  {
    "word": "Petty",
    "bn": "তুচ্ছ বা ছোটখাটো",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2016
  },
  {
    "word": "Physical",
    "bn": "শারীরিক বা প্রাকৃতিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2017
  },
  {
    "word": "Picturesque",
    "bn": "ছবির মতো সুন্দর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2018
  },
  {
    "word": "Pious",
    "bn": "ধার্মিক বা পুণ্যবান",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2019
  },
  {
    "word": "Pitiful",
    "bn": "করুণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2020
  },
  {
    "word": "Pleasant",
    "bn": "মনোরম",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2021
  },
  {
    "word": "Plentiful",
    "bn": "প্রচুর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2022
  },
  {
    "word": "Poisonous",
    "bn": "বিষাক্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2023
  },
  {
    "word": "Popular",
    "bn": "জনপ্রিয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2024
  },
  {
    "word": "Positive",
    "bn": "ইতিবাচক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2025
  },
  {
    "word": "Potent",
    "bn": "শক্তিশালী বা কার্যকর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2026
  },
  {
    "word": "Precious",
    "bn": "মূল্যবান বা আদরের",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2027
  },
  {
    "word": "Precise",
    "bn": "নির্ভুল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2028
  },
  {
    "word": "Premature",
    "bn": "অকাল বা সময়পূর্ব",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2029
  },
  {
    "word": "Pretty",
    "bn": "সুন্দর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2030
  },
  {
    "word": "Previous",
    "bn": "পূর্ববর্তী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2031
  },
  {
    "word": "Pricey",
    "bn": "দামি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2032
  },
  {
    "word": "Primary",
    "bn": "প্রাথমিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2033
  },
  {
    "word": "Primitive",
    "bn": "আদিম",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2034
  },
  {
    "word": "Principal",
    "bn": "প্রধান",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2035
  },
  {
    "word": "Probable",
    "bn": "সম্ভাব্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2036
  },
  {
    "word": "Productive",
    "bn": "উৎপাদনশীল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2037
  },
  {
    "word": "Profound",
    "bn": "গভীর বা অগাধ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2038
  },
  {
    "word": "Progressive",
    "bn": "প্রগতিশীল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2039
  },
  {
    "word": "Prominent",
    "bn": "বিশিষ্ট",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2040
  },
  {
    "word": "Prompt",
    "bn": "তৎক্ষণাৎ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2041
  },
  {
    "word": "Proper",
    "bn": "যথাযথ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2042
  },
  {
    "word": "Prudent",
    "bn": "বিচক্ষণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2043
  },
  {
    "word": "Punctual",
    "bn": "সময়নিষ্ঠ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2044
  },
  {
    "word": "Quaint",
    "bn": "মনোহর ও প্রাচীন ধাঁচের",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2045
  },
  {
    "word": "Qualified",
    "bn": "যোগ্যতাসম্পন্ন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2046
  },
  {
    "word": "Quick",
    "bn": "দ্রুত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2047
  },
  {
    "word": "Radical",
    "bn": "মৌলিক বা আমূল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2048
  },
  {
    "word": "Rainy",
    "bn": "বৃষ্টিবহুল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2049
  },
  {
    "word": "Random",
    "bn": "এলোমেলো",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2050
  },
  {
    "word": "Rapid",
    "bn": "খুব দ্রুত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2051
  },
  {
    "word": "Rational",
    "bn": "যুক্তিবাদী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2052
  },
  {
    "word": "Raw",
    "bn": "কাঁচা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2053
  },
  {
    "word": "Realistic",
    "bn": "বাস্তবসম্মত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2054
  },
  {
    "word": "Reasonable",
    "bn": "যুক্তিসঙ্গত বা ন্যায্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2055
  },
  {
    "word": "Reckless",
    "bn": "বেপরোয়া",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2056
  },
  {
    "word": "Redundant",
    "bn": "অপ্রয়োজনীয় বা বাড়তি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2057
  },
  {
    "word": "Regular",
    "bn": "নিয়মিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2058
  },
  {
    "word": "Relaxed",
    "bn": "ভারমুক্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2059
  },
  {
    "word": "Relevant",
    "bn": "প্রাসঙ্গিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2060
  },
  {
    "word": "Reluctant",
    "bn": "অনিচ্ছুক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2061
  },
  {
    "word": "Remarkable",
    "bn": "অসাধারণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2062
  },
  {
    "word": "Remote",
    "bn": "দূরবর্তী বা প্রত্যন্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2063
  },
  {
    "word": "Repetitive",
    "bn": "পুনরাবৃত্তিমূলক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2064
  },
  {
    "word": "Resolute",
    "bn": "দৃঢ়প্রতিজ্ঞ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2065
  },
  {
    "word": "Restless",
    "bn": "অস্থির",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2066
  },
  {
    "word": "Ridiculous",
    "bn": "হাস্যকর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2067
  },
  {
    "word": "Rigid",
    "bn": "অনমনীয় বা কড়া",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2068
  },
  {
    "word": "Ripe",
    "bn": "পাকা ফল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2069
  },
  {
    "word": "Risky",
    "bn": "ঝুঁকিপূর্ণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2070
  },
  {
    "word": "Robust",
    "bn": "মজবুত ও বলবান",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2071
  },
  {
    "word": "Rotten",
    "bn": "পচা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2072
  },
  {
    "word": "Royal",
    "bn": "রাজকীয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2073
  },
  {
    "word": "Rural",
    "bn": "গ্রামীণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2074
  },
  {
    "word": "Sacred",
    "bn": "পবিত্র",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2075
  },
  {
    "word": "Salty",
    "bn": "নোনতা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2076
  },
  {
    "word": "Sane",
    "bn": "সুস্থ মস্তিষ্কের",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2077
  },
  {
    "word": "Sarcastic",
    "bn": "ব্যঙ্গাত্মক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2078
  },
  {
    "word": "Savage",
    "bn": "বর্বর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2079
  },
  {
    "word": "Scared",
    "bn": "ভীত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2080
  },
  {
    "word": "Scarce",
    "bn": "দুর্লভ বা অপ্রতুল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2081
  },
  {
    "word": "Scenic",
    "bn": "নয়নাভিরাম",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2082
  },
  {
    "word": "Scientific",
    "bn": "বৈজ্ঞানিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2083
  },
  {
    "word": "Scornful",
    "bn": "ঘৃণাপূর্ণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2084
  },
  {
    "word": "Secondhand",
    "bn": "ব্যবহৃত বা পুরনো",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2085
  },
  {
    "word": "Sedentary",
    "bn": "বসে থাকা জীবন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2086
  },
  {
    "word": "Sensational",
    "bn": "চাঞ্চল্যকর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2087
  },
  {
    "word": "Sensible",
    "bn": "বোধসম্পন্ন বা বুঝমান",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2088
  },
  {
    "word": "Sensitive",
    "bn": "সংবেদনশীল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2089
  },
  {
    "word": "Serene",
    "bn": "প্রশান্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2090
  },
  {
    "word": "Severe",
    "bn": "তীব্র বা মারাত্মক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2091
  },
  {
    "word": "Shabby",
    "bn": "মলিন বা জীর্ণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2092
  },
  {
    "word": "Shady",
    "bn": "ছায়াঘেরা বা সন্দেহজনক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2093
  },
  {
    "word": "Shallow",
    "bn": "অগভীর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2094
  },
  {
    "word": "Shameful",
    "bn": "লজ্জাজনক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2095
  },
  {
    "word": "Shiny",
    "bn": "চকচকে",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2096
  },
  {
    "word": "Shocking",
    "bn": "মর্মান্তিক বা চমকপ্রদ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2097
  },
  {
    "word": "Silly",
    "bn": "বোকা বোকা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2098
  },
  {
    "word": "Sincere",
    "bn": "আন্তরিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2099
  },
  {
    "word": "Skillful",
    "bn": "দক্ষ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2100
  },
  {
    "word": "Skinny",
    "bn": "রোগা বা পাতলা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2101
  },
  {
    "word": "Sleepy",
    "bn": "ঘুমকাতুরে",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2102
  },
  {
    "word": "Slender",
    "bn": "ছিপছিপে গড়নের",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2103
  },
  {
    "word": "Slight",
    "bn": "সামান্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2104
  },
  {
    "word": "Slim",
    "bn": "পাতলা গড়ন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2105
  },
  {
    "word": "Slippery",
    "bn": "পিচ্ছিল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2106
  },
  {
    "word": "Snug",
    "bn": "আরামদায়ক ও ফিট",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2107
  },
  {
    "word": "Social",
    "bn": "সামাজিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2108
  },
  {
    "word": "Solid",
    "bn": "কঠিন বা খাঁটি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2109
  },
  {
    "word": "Solitary",
    "bn": "একাকী বা নিঃসঙ্গ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2110
  },
  {
    "word": "Sophisticated",
    "bn": "রুচিশীল ও উন্নত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2111
  },
  {
    "word": "Spacious",
    "bn": "প্রশস্ত বা খোলামেলা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2112
  },
  {
    "word": "Sparkling",
    "bn": "চকচকে",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2113
  },
  {
    "word": "Spectacular",
    "bn": "দর্শনীয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2114
  },
  {
    "word": "Splendid",
    "bn": "চমৎকার বা মহিমান্বিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2115
  },
  {
    "word": "Spontaneous",
    "bn": "স্বতঃস্ফূর্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2116
  },
  {
    "word": "Spotless",
    "bn": "দাগহীন বা পরিচ্ছন্ন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2117
  },
  {
    "word": "Stable",
    "bn": "স্থায়ী বা স্থির",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2118
  },
  {
    "word": "Stale",
    "bn": "বাসি খাবার",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2119
  },
  {
    "word": "Standard",
    "bn": "মানসম্মত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2120
  },
  {
    "word": "Starving",
    "bn": "অনাহারে কাতর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2121
  },
  {
    "word": "Static",
    "bn": "স্থির",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2122
  },
  {
    "word": "Steady",
    "bn": "দৃঢ় বা স্থির",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2123
  },
  {
    "word": "Steep",
    "bn": "খাড়া ঢালু",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2124
  },
  {
    "word": "Stern",
    "bn": "কঠোর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2125
  },
  {
    "word": "Stiff",
    "bn": "শক্ত বা অনমনীয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2126
  },
  {
    "word": "Stingy",
    "bn": "কৃপণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2127
  },
  {
    "word": "Stormy",
    "bn": "ঝড়ো",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2128
  },
  {
    "word": "Stout",
    "bn": "মোটা ও বলিষ্ঠ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2129
  },
  {
    "word": "Strange",
    "bn": "অদ্ভুত বা অপরিচিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2130
  },
  {
    "word": "Strict",
    "bn": "কঠোর নিয়মপালনকারী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2131
  },
  {
    "word": "Stubborn",
    "bn": "একগুঁয়ে বা জেদি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2132
  },
  {
    "word": "Sturdy",
    "bn": "মজবুত বা টেকসই",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2133
  },
  {
    "word": "Stylish",
    "bn": "আড়ম্বরপূর্ণ বা স্টাইলিশ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2134
  },
  {
    "word": "Subtle",
    "bn": "সূক্ষ্ম",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2135
  },
  {
    "word": "Successful",
    "bn": "সফল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2136
  },
  {
    "word": "Sudden",
    "bn": "আকস্মিক বা হঠাৎ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2137
  },
  {
    "word": "Sufficient",
    "bn": "যথেষ্ট বা পর্যাপ্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2138
  },
  {
    "word": "Suitable",
    "bn": "উপযুক্ত বা মানানসই",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2139
  },
  {
    "word": "Sunny",
    "bn": "রৌদ্রোজ্জ্বল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2140
  },
  {
    "word": "Superb",
    "bn": "চমৎকার বা সর্বোৎকৃষ্ট",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2141
  },
  {
    "word": "Superficial",
    "bn": "ভাসা-ভাসা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2142
  },
  {
    "word": "Superior",
    "bn": "উন্নততর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2143
  },
  {
    "word": "Superstitious",
    "bn": "কুসংস্কারাচ্ছন্ন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2144
  },
  {
    "word": "Supreme",
    "bn": "সর্বোচ্চ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2145
  },
  {
    "word": "Sure",
    "bn": "নিশ্চিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2146
  },
  {
    "word": "Suspicious",
    "bn": "সন্দেহজনক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2147
  },
  {
    "word": "Sustainable",
    "bn": "টেকসই",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2148
  },
  {
    "word": "Swift",
    "bn": "দ্রুতগামী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2149
  },
  {
    "word": "Sympathetic",
    "bn": "সহানুভূতিশীল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2150
  },
  {
    "word": "Tactful",
    "bn": "কৌশলী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2151
  },
  {
    "word": "Talented",
    "bn": "প্রতিভাবান",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2152
  },
  {
    "word": "Tame",
    "bn": "পোষা প্রাণী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2153
  },
  {
    "word": "Tangible",
    "bn": "মূর্ত বা স্পর্শযোগ্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2154
  },
  {
    "word": "Tasty",
    "bn": "সুস্বাদু",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2155
  },
  {
    "word": "Tedious",
    "bn": "ক্লান্তিকর বা একঘেয়ে",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2156
  },
  {
    "word": "Tender",
    "bn": "কোমল বা মায়াবী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2157
  },
  {
    "word": "Tense",
    "bn": "উত্তেজনাপূর্ণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2158
  },
  {
    "word": "Terrible",
    "bn": "ভয়ানক খারাপ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2159
  },
  {
    "word": "Terrific",
    "bn": "দারুণ বা অসাধারণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2160
  },
  {
    "word": "Thick",
    "bn": "পুরু বা ঘন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2161
  },
  {
    "word": "Thin",
    "bn": "পাতলা বা চিকন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2162
  },
  {
    "word": "Thorough",
    "bn": "পুঙ্খানুপুঙ্খ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2163
  },
  {
    "word": "Thoughtful",
    "bn": "চিন্তাশীল বা যত্নবান",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2164
  },
  {
    "word": "Thrifty",
    "bn": "মিতব্যয়ী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2165
  },
  {
    "word": "Thrilled",
    "bn": "অত্যন্ত রোমাঞ্চিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2166
  },
  {
    "word": "Tidy",
    "bn": "পরিপাটি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2167
  },
  {
    "word": "Timely",
    "bn": "সময়োপযোগী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2168
  },
  {
    "word": "Timid",
    "bn": "ভীতু বা লাজুক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2169
  },
  {
    "word": "Tiny",
    "bn": "খুবই ক্ষুদ্র",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2170
  },
  {
    "word": "Tireless",
    "bn": "অক্লান্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2171
  },
  {
    "word": "Tiresome",
    "bn": "বিরক্তিকর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2172
  },
  {
    "word": "Tolerant",
    "bn": "সহনশীল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2173
  },
  {
    "word": "Tough",
    "bn": "কঠিন বা শক্তপোক্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2174
  },
  {
    "word": "Toxic",
    "bn": "বিষাক্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2175
  },
  {
    "word": "Traditional",
    "bn": "ঐতিহ্যবাহী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2176
  },
  {
    "word": "Tragic",
    "bn": "মর্মান্তিক বা বিয়োগান্তক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2177
  },
  {
    "word": "Transparent",
    "bn": "স্বচ্ছ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2178
  },
  {
    "word": "Tremendous",
    "bn": "বিশাল বা প্রচণ্ড",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2179
  },
  {
    "word": "Trendy",
    "bn": "জনপ্রিয় ধারার",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2180
  },
  {
    "word": "Tricky",
    "bn": "কৌশলী বা জটিল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2181
  },
  {
    "word": "Trivial",
    "bn": "তুচ্ছ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2182
  },
  {
    "word": "Troublesome",
    "bn": "ঝামেলাপূর্ণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2183
  },
  {
    "word": "Trustworthy",
    "bn": "বিশ্বাসযোগ্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2184
  },
  {
    "word": "Truthful",
    "bn": "সত্যবাদী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2185
  },
  {
    "word": "Typical",
    "bn": "চিরাচরিত বা স্বাভাবিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2186
  },
  {
    "word": "Ugly",
    "bn": "কুৎসিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2187
  },
  {
    "word": "Ultimate",
    "bn": "চূড়ান্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2188
  },
  {
    "word": "Unanimous",
    "bn": "সর্বসম্মত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2189
  },
  {
    "word": "Unbearable",
    "bn": "অসহ্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2190
  },
  {
    "word": "Uncertain",
    "bn": "অনিশ্চিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2191
  },
  {
    "word": "Uncomfortable",
    "bn": "অস্বস্তিকর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2192
  },
  {
    "word": "Uncommon",
    "bn": "অস্বাভাবিক বা বিরল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2193
  },
  {
    "word": "Unconscious",
    "bn": "অজ্ঞান বা অচেতন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2194
  },
  {
    "word": "Undeniable",
    "bn": "অনস্বীকার্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2195
  },
  {
    "word": "Uneasy",
    "bn": "অস্বস্তিকর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2196
  },
  {
    "word": "Unequal",
    "bn": "অসমান",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2197
  },
  {
    "word": "Unexpected",
    "bn": "অপ্রত্যাশিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2198
  },
  {
    "word": "Unfair",
    "bn": "অন্যায় বা অবিচারপূর্ণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2199
  },
  {
    "word": "Unfortunate",
    "bn": "দুর্ভাগ্যজনক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2200
  },
  {
    "word": "Unhappy",
    "bn": "অসুখী বা বিষণ্ণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2201
  },
  {
    "word": "Unique",
    "bn": "অনন্য বা অদ্বিতীয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2202
  },
  {
    "word": "United",
    "bn": "ঐক্যবদ্ধ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2203
  },
  {
    "word": "Universal",
    "bn": "সার্বজনীন বা বিশ্বজনীন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2204
  },
  {
    "word": "Unjust",
    "bn": "অন্যায়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2205
  },
  {
    "word": "Unknown",
    "bn": "অজানা বা অপরিচিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2206
  },
  {
    "word": "Unlikely",
    "bn": "অসম্ভাব্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2207
  },
  {
    "word": "Unlimited",
    "bn": "সীমাহীন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2208
  },
  {
    "word": "Unnecessary",
    "bn": "অপ্রয়োজনীয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2209
  },
  {
    "word": "Unpleasant",
    "bn": "অপ্রীতিকর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2210
  },
  {
    "word": "Unprecedented",
    "bn": "অভূতপূর্ব",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2211
  },
  {
    "word": "Unreasonable",
    "bn": "অযৌক্তিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2212
  },
  {
    "word": "Unreliable",
    "bn": "অনির্ভরযোগ্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2213
  },
  {
    "word": "Unruly",
    "bn": "উচ্ছৃঙ্খল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2214
  },
  {
    "word": "Unsafe",
    "bn": "বিপদজনক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2215
  },
  {
    "word": "Unstable",
    "bn": "অস্থির বা টলমলে",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2216
  },
  {
    "word": "Untidy",
    "bn": "অগোছালো",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2217
  },
  {
    "word": "Unusual",
    "bn": "অস্বাভাবিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2218
  },
  {
    "word": "Unwilling",
    "bn": "অনিচ্ছুক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2219
  },
  {
    "word": "Upbeat",
    "bn": "উৎফুল্ল বা ইতিবাচক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2220
  },
  {
    "word": "Upper",
    "bn": "উপরের",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2221
  },
  {
    "word": "Upset",
    "bn": "মনখারাপ বা বিব্রত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2222
  },
  {
    "word": "Urban",
    "bn": "শহুরে বা পৌর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2223
  },
  {
    "word": "Usual",
    "bn": "স্বাভাবিক বা প্রাত্যহিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2224
  },
  {
    "word": "Vacant",
    "bn": "খালি বা শূন্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2225
  },
  {
    "word": "Vague",
    "bn": "অস্পষ্ট বা ধোঁয়াটে",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2226
  },
  {
    "word": "Vain",
    "bn": "বৃথা বা অহংকারী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2227
  },
  {
    "word": "Valiant",
    "bn": "বীরত্বপূর্ণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2228
  },
  {
    "word": "Valid",
    "bn": "বৈধ বা সঠিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2229
  },
  {
    "word": "Various",
    "bn": "বিভিন্ন বা নানা রকম",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2230
  },
  {
    "word": "Vast",
    "bn": "বিশাল বা সুবিস্তৃত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2231
  },
  {
    "word": "Versatile",
    "bn": "বহুমুখী প্রতিভাধর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2232
  },
  {
    "word": "Vibrant",
    "bn": "প্রাণবন্ত ও উজ্জ্বল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2233
  },
  {
    "word": "Vicious",
    "bn": "দুষ্ট বা হিংস্র",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2234
  },
  {
    "word": "Victorious",
    "bn": "বিজয়ী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2235
  },
  {
    "word": "Vigorous",
    "bn": "বলিষ্ঠ ও উদ্যমী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2236
  },
  {
    "word": "Violent",
    "bn": "সহিংস বা উগ্র",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2237
  },
  {
    "word": "Virtual",
    "bn": "ভার্চুয়াল বা পরোক্ষ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2238
  },
  {
    "word": "Visible",
    "bn": "দৃশ্যমান",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2239
  },
  {
    "word": "Vital",
    "bn": "অত্যাবশ্যক বা প্রাণবন্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2240
  },
  {
    "word": "Vivid",
    "bn": "স্পষ্ট ও প্রাণবন্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2241
  },
  {
    "word": "Vocal",
    "bn": "সোচ্চার বা কণ্ঠসম্বন্ধীয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2242
  },
  {
    "word": "Volatile",
    "bn": "উদ্বায়ী বা পরিবর্তনশীল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2243
  },
  {
    "word": "Voluntary",
    "bn": "স্বেচ্ছাসেবী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2244
  },
  {
    "word": "Vulnerable",
    "bn": "অরক্ষিত বা দুর্বল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2245
  },
  {
    "word": "Warm",
    "bn": "উষ্ণ বা আন্তরিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2246
  },
  {
    "word": "Wary",
    "bn": "সতর্ক বা সাবধানী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2247
  },
  {
    "word": "Wasteful",
    "bn": "অপব্যয়ী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2248
  },
  {
    "word": "Watchful",
    "bn": "সজাগ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2249
  },
  {
    "word": "Waterproof",
    "bn": "পানিনিরোধক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2250
  },
  {
    "word": "Wealthy",
    "bn": "ধনী বা সম্পদশালী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2251
  },
  {
    "word": "Weary",
    "bn": "ক্লান্ত বা শ্রান্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2252
  },
  {
    "word": "Weighty",
    "bn": "ভারী বা গুরুত্বপূর্ণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2253
  },
  {
    "word": "Weird",
    "bn": "অদ্ভুত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2254
  },
  {
    "word": "Wicked",
    "bn": "পাপী বা দুষ্ট",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2255
  },
  {
    "word": "Wide",
    "bn": "প্রশস্ত বা চওড়া",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2256
  },
  {
    "word": "Widespread",
    "bn": "ব্যাপক বা দূরপ্রসারী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2257
  },
  {
    "word": "Wild",
    "bn": "বন্য বা বুনো",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2258
  },
  {
    "word": "Willing",
    "bn": "ইচ্ছুক বা সম্মত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2259
  },
  {
    "word": "Windy",
    "bn": "বাতাসময়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2260
  },
  {
    "word": "Wise",
    "bn": "জ্ঞানী বা বিজ্ঞ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2261
  },
  {
    "word": "Witty",
    "bn": "রসাত্মক বা উপস্থিত বুদ্ধিসম্পন্ন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2262
  },
  {
    "word": "Woeful",
    "bn": "শোচনীয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2263
  },
  {
    "word": "Wonderful",
    "bn": "চমৎকার বা অসাধারণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2264
  },
  {
    "word": "Wooden",
    "bn": "কাঠের তৈরি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2265
  },
  {
    "word": "Woolen",
    "bn": "উলের তৈরি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A1",
    "id": 2266
  },
  {
    "word": "Wordy",
    "bn": "বাগাড়ম্বরপূর্ণ বা কথাবহুল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2267
  },
  {
    "word": "Worthless",
    "bn": "মূল্যহীন বা অপদার্থ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2268
  },
  {
    "word": "Worthwhile",
    "bn": "সার্থক বা লাভজনক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2269
  },
  {
    "word": "Worthy",
    "bn": "যোগ্য বা উপযুক্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B1",
    "id": 2270
  },
  {
    "word": "Wounded",
    "bn": "আহত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "A2",
    "id": 2271
  },
  {
    "word": "Zealous",
    "bn": "উৎসাহী বা উদ্দীপনাময়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Adjectives",
    "level": "B2",
    "id": 2272
  },
  {
    "word": "Agenda",
    "bn": "আলোচ্যসূচি",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 2273
  },
  {
    "word": "Appraisal",
    "bn": "কর্মদক্ষতা মূল্যায়ন",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B2",
    "id": 2274
  },
  {
    "word": "Bonus",
    "bn": "উৎসব ভাতা বা বোনাস",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 2275
  },
  {
    "word": "Breakroom",
    "bn": "বিশ্রামাগার",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 2276
  },
  {
    "word": "Briefcase",
    "bn": "অফিস ব্যাগ",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 2277
  },
  {
    "word": "Compensation",
    "bn": "ক্ষতিপূরণ বা পারিশ্রমিক",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B2",
    "id": 2278
  },
  {
    "word": "Coworker",
    "bn": "সহকর্মী",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 2279
  },
  {
    "word": "Cubicle",
    "bn": "কর্মকক্ষ বা কিউবিকল",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 2280
  },
  {
    "word": "Delegation",
    "bn": "দায়িত্ব অর্পণ বা প্রতিনিধিদল",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B2",
    "id": 2281
  },
  {
    "word": "Dismissal",
    "bn": "চাকরিচ্যুতি",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B2",
    "id": 2282
  },
  {
    "word": "Efficiency",
    "bn": "দক্ষতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 2283
  },
  {
    "word": "Elevator",
    "bn": "লিফট",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A1",
    "id": 2284
  },
  {
    "word": "Employer",
    "bn": "নিয়োগকর্তা",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 2285
  },
  {
    "word": "Executive",
    "bn": "নির্বাহী",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 2286
  },
  {
    "word": "Expertise",
    "bn": "দক্ষতা বা পারদর্শিতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B2",
    "id": 2287
  },
  {
    "word": "Headquarters",
    "bn": "প্রধান কার্যালয়",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 2288
  },
  {
    "word": "Incentive",
    "bn": "প্রণোদনা",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 2289
  },
  {
    "word": "Initiative",
    "bn": "উদ্যোগ",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 2290
  },
  {
    "word": "Innovation",
    "bn": "উদ্ভাবন",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 2291
  },
  {
    "word": "Internship",
    "bn": "শিক্ষানবিসি",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 2292
  },
  {
    "word": "Inventory",
    "bn": "মজুদ পণ্যের তালিকা",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 2293
  },
  {
    "word": "Leadership",
    "bn": "নেতৃত্ব",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 2294
  },
  {
    "word": "Negotiation",
    "bn": "দরকষাকষি বা আলোচনা",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 2295
  },
  {
    "word": "Overtime",
    "bn": "অতিরিক্ত কাজের সময়",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 2296
  },
  {
    "word": "Payroll",
    "bn": "বেতন তালিকা",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 2297
  },
  {
    "word": "Pension",
    "bn": "অবসর ভাতা বা পেনশন",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 2298
  },
  {
    "word": "Personnel",
    "bn": "কর্মীবৃন্দ",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 2299
  },
  {
    "word": "Portfolio",
    "bn": "কাজের নিদর্শন বা পোর্টফোলিও",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B2",
    "id": 2300
  },
  {
    "word": "Punctuality",
    "bn": "সময়নিষ্ঠতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 2301
  },
  {
    "word": "Qualification",
    "bn": "যোগ্যতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 2302
  },
  {
    "word": "Quotation",
    "bn": "মূল্য উদ্ধৃতি বা দর",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 2303
  },
  {
    "word": "Receptionist",
    "bn": "অভ্যর্থনাকারী",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 2304
  },
  {
    "word": "Redundancy",
    "bn": "উদ্বৃত্ত জনবল ছাঁটাই",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B2",
    "id": 2305
  },
  {
    "word": "Resignation",
    "bn": "পদত্যাগ",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 2306
  },
  {
    "word": "Resolution",
    "bn": "মীমাংসা বা সংকল্প",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 2307
  },
  {
    "word": "Restructure",
    "bn": "পুনর্গঠন",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B2",
    "id": 2308
  },
  {
    "word": "Roster",
    "bn": "দায়িত্বের তালিকা বা রোস্টার",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 2309
  },
  {
    "word": "Stakeholder",
    "bn": "অংশীজন বা স্টেকহোল্ডার",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B2",
    "id": 2310
  },
  {
    "word": "Strategy",
    "bn": "কৌশল বা কর্মপন্থা",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 2311
  },
  {
    "word": "Supervision",
    "bn": "তত্ত্বাবধান",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 2312
  },
  {
    "word": "Synergy",
    "bn": "যৌথ সমন্বয় বা শক্তি",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B2",
    "id": 2313
  },
  {
    "word": "Taskforce",
    "bn": "বিশেষ কার্যদল",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B2",
    "id": 2314
  },
  {
    "word": "Turnover",
    "bn": "ব্যবসায়িক আবর্তন বা কর্মী পরিবর্তন",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B2",
    "id": 2315
  },
  {
    "word": "Workstation",
    "bn": "কাজের টেবিল",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 2316
  },
  {
    "word": "Amortization",
    "bn": "ঋণ পরিশোধের হিসাব",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B2",
    "id": 2317
  },
  {
    "word": "Asset",
    "bn": "সম্পদ বা পরিসম্পদ",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B1",
    "id": 2318
  },
  {
    "word": "Audit",
    "bn": "হিসাব নিরীক্ষা",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B1",
    "id": 2319
  },
  {
    "word": "Bailout",
    "bn": "আর্থিক উদ্ধার",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B2",
    "id": 2320
  },
  {
    "word": "Bankruptcy",
    "bn": "দেউলিয়াত্ব",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B2",
    "id": 2321
  },
  {
    "word": "Benchmark",
    "bn": "মানদণ্ড",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B2",
    "id": 2322
  },
  {
    "word": "Bond",
    "bn": "বন্ড বা ঋণপত্র",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B1",
    "id": 2323
  },
  {
    "word": "Broker",
    "bn": "দালাল বা মধ্যস্থতাকারী",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B1",
    "id": 2324
  },
  {
    "word": "Collateral",
    "bn": "জামিন বা বন্ধকি সম্পত্তি",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B2",
    "id": 2325
  },
  {
    "word": "Commodity",
    "bn": "পণ্যদ্রব্য",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B1",
    "id": 2326
  },
  {
    "word": "Creditor",
    "bn": "পাওনাদার",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B1",
    "id": 2327
  },
  {
    "word": "Debt",
    "bn": "ঋণ বা দেনা",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "A2",
    "id": 2328
  },
  {
    "word": "Debtor",
    "bn": "দেনাদার",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B1",
    "id": 2329
  },
  {
    "word": "Deficit",
    "bn": "ঘাটতি",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B1",
    "id": 2330
  },
  {
    "word": "Dividend",
    "bn": "লভ্যাংশ",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B2",
    "id": 2331
  },
  {
    "word": "Equity",
    "bn": "ন্যায্যতা বা মূলধন অংশ",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B2",
    "id": 2332
  },
  {
    "word": "Expenditure",
    "bn": "ব্যয় বা খরচ",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B1",
    "id": 2333
  },
  {
    "word": "Fiscal",
    "bn": "আর্থিক বা রাজস্ব",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B2",
    "id": 2334
  },
  {
    "word": "Inflation",
    "bn": "মুদ্রাস্ফীতি",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B1",
    "id": 2335
  },
  {
    "word": "Insolvent",
    "bn": "ঋণ শোধে অক্ষম বা দেউলিয়া",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B2",
    "id": 2336
  },
  {
    "word": "Interest",
    "bn": "সুদ",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "A2",
    "id": 2337
  },
  {
    "word": "Investment",
    "bn": "বিনিয়োগ",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "A2",
    "id": 2338
  },
  {
    "word": "Liability",
    "bn": "দায় বা দেনা",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B1",
    "id": 2339
  },
  {
    "word": "Liquidity",
    "bn": "তারল্য",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B2",
    "id": 2340
  },
  {
    "word": "Merger",
    "bn": "একীভূতকরণ",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B2",
    "id": 2341
  },
  {
    "word": "Mortgage",
    "bn": "বন্ধক বা গৃহঋণ",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B1",
    "id": 2342
  },
  {
    "word": "Premium",
    "bn": "বীমা কিস্তি বা প্রিমিয়াম",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B1",
    "id": 2343
  },
  {
    "word": "Recession",
    "bn": "অর্থনৈতিক মন্দা",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B2",
    "id": 2344
  },
  {
    "word": "Revenue",
    "bn": "আয় বা রাজস্ব",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B1",
    "id": 2345
  },
  {
    "word": "Shareholder",
    "bn": "শেয়ারমালিক",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B1",
    "id": 2346
  },
  {
    "word": "Solvency",
    "bn": "ঋণ শোধের সামর্থ্য",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B2",
    "id": 2347
  },
  {
    "word": "Subsidy",
    "bn": "ভর্তুকি",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B2",
    "id": 2348
  },
  {
    "word": "Surplus",
    "bn": "উদ্বৃত্ত",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B1",
    "id": 2349
  },
  {
    "word": "Tariff",
    "bn": "শুল্ক বা মাশুল",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "B2",
    "id": 2350
  },
  {
    "word": "Transaction",
    "bn": "লেনদেন",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "A2",
    "id": 2351
  },
  {
    "word": "algorithm",
    "bn": "অ্যালগরিদম বা ধাপে ধাপে গণনা",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "B1",
    "id": 2352
  },
  {
    "word": "bandwidth",
    "bn": "ব্যান্ডউইথ বা ডেটা চলাচলের ক্ষমতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "B1",
    "id": 2353
  },
  {
    "word": "binary",
    "bn": "বাইনারি বা দ্বিমিক",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "B1",
    "id": 2354
  },
  {
    "word": "bluetooth",
    "bn": "ব্লুটুথ",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 2355
  },
  {
    "word": "cache",
    "bn": "ক্যাশ মেমোরি",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "B1",
    "id": 2356
  },
  {
    "word": "compression",
    "bn": "সংকোচন বা সাইজ কমানো",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "B1",
    "id": 2357
  },
  {
    "word": "cookie",
    "bn": "ব্রাউজার কুকি",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 2358
  },
  {
    "word": "cryptography",
    "bn": "তথ্য গোপনবিদ্যা বা ক্রিপ্টোগ্রাফি",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "B2",
    "id": 2359
  },
  {
    "word": "cybersecurity",
    "bn": "সাইবার নিরাপত্তা",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "B1",
    "id": 2360
  },
  {
    "word": "dashboard",
    "bn": "ড্যাশবোর্ড বা নিয়ন্ত্রণ ফলক",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 2361
  },
  {
    "word": "database",
    "bn": "ডাটাবেস বা তথ্যভাণ্ডার",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "B1",
    "id": 2362
  },
  {
    "word": "debugging",
    "bn": "সফটওয়্যারের ত্রুটি সংশোধন",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "B1",
    "id": 2363
  },
  {
    "word": "encryption",
    "bn": "তথ্য গুপ্তায়ন বা এনক্রিপশন",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "B2",
    "id": 2364
  },
  {
    "word": "firewall",
    "bn": "ফায়ারওয়াল বা নিরাপত্তা প্রাচীর",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "B1",
    "id": 2365
  },
  {
    "word": "firmware",
    "bn": "ফার্মওয়্যার",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "B2",
    "id": 2366
  },
  {
    "word": "framework",
    "bn": "ফ্রেমওয়ার্ক বা কাঠামোগত ভিত্তি",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "B1",
    "id": 2367
  },
  {
    "word": "gigabyte",
    "bn": "গিগাবাইট",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 2368
  },
  {
    "word": "hardware",
    "bn": "যন্ত্রাংশ বা হার্ডওয়্যার",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 2369
  },
  {
    "word": "hyperlink",
    "bn": "ওয়েব লিংক বা সংযোগ",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 2370
  },
  {
    "word": "interface",
    "bn": "ইন্টারফেস বা সংযোগ মাধ্যম",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "B1",
    "id": 2371
  },
  {
    "word": "malware",
    "bn": "ক্ষতিকারক সফটওয়্যার",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "B1",
    "id": 2372
  },
  {
    "word": "metadata",
    "bn": "উপাত্তের উপাত্ত বা মেটাডেটা",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "B2",
    "id": 2373
  },
  {
    "word": "microprocessor",
    "bn": "মাইক্রোপ্রসেসর",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "B1",
    "id": 2374
  },
  {
    "word": "modem",
    "bn": "মডেম",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 2375
  },
  {
    "word": "multimedia",
    "bn": "মাল্টিমিডিয়া বা বহুমাধ্যম",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 2376
  },
  {
    "word": "offline",
    "bn": "সংযোগহীন বা অফলাইন",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A1",
    "id": 2377
  },
  {
    "word": "operating system",
    "bn": "অপারেটিং সিস্টেম",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 2378
  },
  {
    "word": "pixel",
    "bn": "পিক্সেল বা বিন্দুর মাপ",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 2379
  },
  {
    "word": "processor",
    "bn": "প্রসেসর",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 2380
  },
  {
    "word": "protocol",
    "bn": "নিয়ম বা প্রোটোকল",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "B1",
    "id": 2381
  },
  {
    "word": "repository",
    "bn": "কোড ভাণ্ডার বা রিপোজিটরি",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "B2",
    "id": 2382
  },
  {
    "word": "screenshot",
    "bn": "স্ক্রিনশট বা পর্দার ছবি",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A1",
    "id": 2383
  },
  {
    "word": "search engine",
    "bn": "সার্চ ইঞ্জিন বা অনুসন্ধানকারী",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 2384
  },
  {
    "word": "server",
    "bn": "সার্ভার বা সেবাদাতা কম্পিউটার",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 2385
  },
  {
    "word": "software",
    "bn": "সফটওয়্যার বা কম্পিউটার প্রোগ্রাম",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A1",
    "id": 2386
  },
  {
    "word": "spreadsheet",
    "bn": "স্প্রেডশিট বা হিসাবের ছক",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 2387
  },
  {
    "word": "streaming",
    "bn": "সরাসরি সম্প্রচার বা স্ট্রিমিং",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 2388
  },
  {
    "word": "synchronize",
    "bn": "সমন্বিত বা সিঙ্ক করা",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "B1",
    "id": 2389
  },
  {
    "word": "terabyte",
    "bn": "টেরাবাইট",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 2390
  },
  {
    "word": "touchscreen",
    "bn": "স্পর্শ সংবেদনশীল পর্দা",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A1",
    "id": 2391
  },
  {
    "word": "upgrade",
    "bn": "উন্নত সংস্করণে রূপান্তর",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 2392
  },
  {
    "word": "virtual reality",
    "bn": "ভার্চুয়াল বাস্তবতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "B1",
    "id": 2393
  },
  {
    "word": "wireless",
    "bn": "তারবিহীন বা ওয়্যারলেস",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A1",
    "id": 2394
  },
  {
    "word": "Ubiquitous",
    "bn": "সর্বব্যাপী বা সর্বত্র বিদ্যমান",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2395
  },
  {
    "word": "Meticulous",
    "bn": "খুঁতখুঁতে বা অতিমাত্রায় সতর্ক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2396
  },
  {
    "word": "Resilient",
    "bn": "সহনশীল বা প্রতিকূলতা জয়ী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2397
  },
  {
    "word": "Eloquent",
    "bn": "বাকপটু বা সুবক্তা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2398
  },
  {
    "word": "Paramount",
    "bn": "সর্বোচ্চ গুরুত্বপূর্ণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2399
  },
  {
    "word": "Benevolent",
    "bn": "পরোপকারী বা দয়ালু",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2400
  },
  {
    "word": "Malevolent",
    "bn": "অমঙ্গলকামী বা পরশ্রীকাতর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2401
  },
  {
    "word": "Pragmatic",
    "bn": "বাস্তবধর্মী বা বাস্তববাদী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2402
  },
  {
    "word": "Ephemeral",
    "bn": "ক্ষণস্থায়ী বা ক্ষণিকের",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2403
  },
  {
    "word": "Candid",
    "bn": "অকপট বা স্পষ্টবাদী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2404
  },
  {
    "word": "Aesthetic",
    "bn": "নান্দনিক বা সৌন্দর্যবোধসম্পর্কিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2405
  },
  {
    "word": "Bolster",
    "bn": "সমর্থন বা জোরদার করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2406
  },
  {
    "word": "Mitigate",
    "bn": "লাঘব করা বা তীব্রতা কমানো",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2407
  },
  {
    "word": "Scrutinize",
    "bn": "খুঁটিয়ে পরীক্ষা করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2408
  },
  {
    "word": "Advocate",
    "bn": "পক্ষ সমর্থন করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2409
  },
  {
    "word": "Reconcile",
    "bn": "মীমাংসা বা সমন্বয় করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2410
  },
  {
    "word": "Delineate",
    "bn": "সুস্পষ্টভাবে বর্ণনা করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2411
  },
  {
    "word": "Fabricate",
    "bn": "জাল করা বা মনগড়া বানানো",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2412
  },
  {
    "word": "Invoke",
    "bn": "স্মরণ বা সাহায্য প্রার্থনা করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2413
  },
  {
    "word": "Renounce",
    "bn": "স্বেচ্ছায় ত্যাগ করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2414
  },
  {
    "word": "Innovate",
    "bn": "নতুন কিছু উদ্ভাবন করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2415
  },
  {
    "word": "Synthesize",
    "bn": "সংশ্লেষণ বা একত্রীকরণ করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2416
  },
  {
    "word": "Corroborate",
    "bn": "সাক্ষ্যপ্রমাণ দিয়ে সমর্থন করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2417
  },
  {
    "word": "Vindicate",
    "bn": "দোষমুক্ত ঘোষণা করা বা সত্য প্রমাণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2418
  },
  {
    "word": "Augment",
    "bn": "বৃদ্ধি বা পরিবর্ধন করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2419
  },
  {
    "word": "Emulate",
    "bn": "অনুকরণ বা সমকক্ষ হওয়ার চেষ্টা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2420
  },
  {
    "word": "Articulate",
    "bn": "স্পষ্টভাবে উচ্চারণ বা প্রকাশ করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2421
  },
  {
    "word": "Fathom",
    "bn": "গভীরতা বা মর্মার্থ উপলব্ধি করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2422
  },
  {
    "word": "Juxtapose",
    "bn": "পাশাপাশি রেখে তুলনা করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2423
  },
  {
    "word": "Appease",
    "bn": "শান্ত বা তোষণ করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2424
  },
  {
    "word": "Repudiate",
    "bn": "প্রত্যাখ্যান বা অস্বীকার করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2425
  },
  {
    "word": "Exacerbate",
    "bn": "পরিস্থিতি আরও খারাপ করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2426
  },
  {
    "word": "Expedite",
    "bn": "কাজ ত্বরান্বিত বা দ্রুত করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2427
  },
  {
    "word": "Condescend",
    "bn": "অহমিকা দেখিয়ে দয়া প্রদর্শন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2428
  },
  {
    "word": "Obfuscate",
    "bn": "দুর্বোধ্য বা অস্পষ্ট করে তোলা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2429
  },
  {
    "word": "Perpetuate",
    "bn": "চিরস্থায়ী করে রাখা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2430
  },
  {
    "word": "Fluctuate",
    "bn": "ওঠানামা বা পরিবর্তনশীল হওয়া",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2431
  },
  {
    "word": "Consolidate",
    "bn": "দৃঢ় বা সংহত করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2432
  },
  {
    "word": "Diversify",
    "bn": "বৈচিত্র্যময় বা বহুমুখী করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2433
  },
  {
    "word": "Transcend",
    "bn": "সীমা অতিক্রম বা শ্রেষ্ঠতর হওয়া",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2434
  },
  {
    "word": "Adhere",
    "bn": "লেগে থাকা বা নিয়ম মেনে চলা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2435
  },
  {
    "word": "Allocate",
    "bn": "বরাদ্দ দেওয়া",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2436
  },
  {
    "word": "Assess",
    "bn": "মূল্যায়ন করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B1",
    "id": 2437
  },
  {
    "word": "Compensate",
    "bn": "ক্ষতিপূরণ দেওয়া",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2438
  },
  {
    "word": "Differentiate",
    "bn": "পার্থক্য নির্ণয় করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2439
  },
  {
    "word": "Eliminate",
    "bn": "বর্জন বা সম্পূর্ণ দূর করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2440
  },
  {
    "word": "Emphasize",
    "bn": "বিশেষ গুরুত্ব বা জোর দেওয়া",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B1",
    "id": 2441
  },
  {
    "word": "Evaluate",
    "bn": "মূল্য বা ফলাফল যাচাই করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2442
  },
  {
    "word": "Facilitate",
    "bn": "সহজতর বা সুগম করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2443
  },
  {
    "word": "Formulate",
    "bn": "সূত্রবদ্ধ বা প্রণয়ন করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2444
  },
  {
    "word": "Integrate",
    "bn": "একীভূত বা সংযুক্ত করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2445
  },
  {
    "word": "Interpret",
    "bn": "ব্যাখ্যা বা অর্থ প্রকাশ করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2446
  },
  {
    "word": "Justify",
    "bn": "ন্যায্যতা প্রমাণ করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2447
  },
  {
    "word": "Monitor",
    "bn": "নজরদারি বা পর্যবেক্ষণ করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B1",
    "id": 2448
  },
  {
    "word": "Negotiate",
    "bn": "দরকষাকষি বা আপস করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2449
  },
  {
    "word": "Optimize",
    "bn": "সর্বোত্তম ব্যবহার নিশ্চিত করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2450
  },
  {
    "word": "Perceive",
    "bn": "উপলব্ধি বা টের পাওয়া",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2451
  },
  {
    "word": "Prioritize",
    "bn": "অগ্রাধিকার প্রদান করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2452
  },
  {
    "word": "Terminate",
    "bn": "সমাপ্ত বা বাতিল করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2453
  },
  {
    "word": "Transform",
    "bn": "আমূল রূপান্তর করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B1",
    "id": 2454
  },
  {
    "word": "Undermine",
    "bn": "তলে তলে ভিত্তি দুর্বল করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2455
  },
  {
    "word": "Validate",
    "bn": "বৈধতা বা সত্যতা নিশ্চিত করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2456
  },
  {
    "word": "Verify",
    "bn": "যাচাই করে সত্যতা নিশ্চিত করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B1",
    "id": 2457
  },
  {
    "word": "Aberration",
    "bn": "স্বাভাবিক গতিপথ থেকে বিচ্যুতি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2458
  },
  {
    "word": "Alacrity",
    "bn": "উৎসাহ ও তৎপরতা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2459
  },
  {
    "word": "Anachronism",
    "bn": "কালভ্রান্তি বা সময়ের সাথে বেমানান",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2460
  },
  {
    "word": "Anomalous",
    "bn": "ব্যতিক্রমী বা অস্বাভাবিক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2461
  },
  {
    "word": "Antipathy",
    "bn": "তীব্র বিদ্বেষ বা অনীহা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2462
  },
  {
    "word": "Arcane",
    "bn": "গোপন ও রহস্যময় জ্ঞান",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2463
  },
  {
    "word": "Audacious",
    "bn": "সাহসী কিন্তু বেপরোয়া",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2464
  },
  {
    "word": "Austere",
    "bn": "অনাড়ম্বর বা অত্যন্ত কঠোর",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2465
  },
  {
    "word": "Belligerent",
    "bn": "যুদ্ধংদেহী বা ঝগড়াটে",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2466
  },
  {
    "word": "Cacophony",
    "bn": "কর্কশ কোলাহল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2467
  },
  {
    "word": "Capricious",
    "bn": "খামখেয়ালী বা অস্থিরমতি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2468
  },
  {
    "word": "Castigate",
    "bn": "কঠোর ভাষায় তিরস্কার করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2469
  },
  {
    "word": "Cogent",
    "bn": "অকাট্য বা যুক্তিসঙ্গত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2470
  },
  {
    "word": "Deference",
    "bn": "বিনম্র শ্রদ্ধা বা সম্মান প্রদর্শন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2471
  },
  {
    "word": "Didactic",
    "bn": "নীতিকথামূলক বা শিক্ষামূলক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2472
  },
  {
    "word": "Disparate",
    "bn": "একেবারে ভিন্ন বা অসদৃশ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2473
  },
  {
    "word": "Dogmatic",
    "bn": "গোঁড়া বা মতান্ধ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2474
  },
  {
    "word": "Eccentric",
    "bn": "খামখেয়ালি বা অদ্ভুত স্বভাবের",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2475
  },
  {
    "word": "Enervate",
    "bn": "শক্তিহীন বা দুর্বল করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2476
  },
  {
    "word": "Engender",
    "bn": "জন্ম দেওয়া বা উৎপাদন করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2477
  },
  {
    "word": "Enigma",
    "bn": "রহস্য বা ধাঁধা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2478
  },
  {
    "word": "Equivocal",
    "bn": "দ্ব্যর্থবোধক বা অস্পষ্ট",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2479
  },
  {
    "word": "Erudite",
    "bn": "পাণ্ডিত্যপূর্ণ বা বিদ্বান",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2480
  },
  {
    "word": "Esoteric",
    "bn": "অতিগূঢ় বা স্বল্পবোধ্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2481
  },
  {
    "word": "Eulogy",
    "bn": "উচ্চ প্রশংসামূলক বক্তব্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2482
  },
  {
    "word": "Fastidious",
    "bn": "খুঁতখুঁতে স্বভাবের",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2483
  },
  {
    "word": "Fervid",
    "bn": "প্রবল আবেগময় বা উদ্দীপ্ত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2484
  },
  {
    "word": "Garrulous",
    "bn": "বাচাল বা অতিরিক্ত কথাবলা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2485
  },
  {
    "word": "Gregarious",
    "bn": "মিশুক বা সামাজিক স্বভাবের",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2486
  },
  {
    "word": "Hackneyed",
    "bn": "বহুলব্যবহারে জীর্ণ বা একঘেয়ে",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2487
  },
  {
    "word": "Iconoclast",
    "bn": "প্রথা বা সংস্কার ভাঙনে বিশ্বাসী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2488
  },
  {
    "word": "Immutable",
    "bn": "অপরিবর্তনীয় বা অটল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2489
  },
  {
    "word": "Impassive",
    "bn": "ভাবলেশহীন বা আবেগহীন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2490
  },
  {
    "word": "Impervious",
    "bn": "অভেদ্য বা অপ্রভাবিত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2491
  },
  {
    "word": "Inchoate",
    "bn": "অপরিপক্ব বা প্রাথমিক স্তরের",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2492
  },
  {
    "word": "Indolent",
    "bn": "অলস বা শ্রমবিমুখ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2493
  },
  {
    "word": "Ingenuous",
    "bn": "সরল বা অকপট চিত্তের",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2494
  },
  {
    "word": "Inimical",
    "bn": "ক্ষতিকর বা প্রতিকূল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2495
  },
  {
    "word": "Insipid",
    "bn": "স্বাদহীন বা প্রাণহীন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2496
  },
  {
    "word": "Laconic",
    "bn": "অল্পভাষী বা সংক্ষিপ্তভাষী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2497
  },
  {
    "word": "Laudable",
    "bn": "প্রশংসার যোগ্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2498
  },
  {
    "word": "Loquacious",
    "bn": "বাচাল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2499
  },
  {
    "word": "Lucid",
    "bn": "স্পষ্ট বা সহজে বোধগম্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2500
  },
  {
    "word": "Magnanimous",
    "bn": "উদার ও ক্ষমাশীল হৃদয়ের",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2501
  },
  {
    "word": "Mercurial",
    "bn": "দ্রুত পরিবর্তনশীল মেজাজের",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2502
  },
  {
    "word": "Misanthrope",
    "bn": "মানববিদ্বেষী ব্যক্তি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2503
  },
  {
    "word": "Neophyte",
    "bn": "নবদীক্ষিত বা অনভিজ্ঞ ব্যক্তি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2504
  },
  {
    "word": "Obdurate",
    "bn": "একগুঁয়ে বা অনমনীয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2505
  },
  {
    "word": "Obstinate",
    "bn": "জেদি বা অনমনীয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2506
  },
  {
    "word": "Panacea",
    "bn": "সর্বরোগের মহৌষধ বা সমাধান",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2507
  },
  {
    "word": "Paradox",
    "bn": "আপাতবিরোধী সত্য বা ধাঁধা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2508
  },
  {
    "word": "Paragon",
    "bn": "শ্রেষ্ঠত্বের আদর্শ নিদর্শন",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2509
  },
  {
    "word": "Parsimonious",
    "bn": "অতিমাত্রায় কৃপণ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2510
  },
  {
    "word": "Paucity",
    "bn": "স্বল্পতা বা অপ্রতুলতা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2511
  },
  {
    "word": "Pedantic",
    "bn": "পাণ্ডিত্য জাহিরকারী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2512
  },
  {
    "word": "Pellucid",
    "bn": "স্বচ্ছ বা জলের মতো পরিষ্কার",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2513
  },
  {
    "word": "Perfunctory",
    "bn": "দায়সারা বা অবহেলাভরে কৃত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2514
  },
  {
    "word": "Platitude",
    "bn": "মামুলি ক্লিশে কথা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2515
  },
  {
    "word": "Plethora",
    "bn": "অতিরিক্ত প্রাচুর্য বা বাহুল্য",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2516
  },
  {
    "word": "Polemic",
    "bn": "তীব্র বিতর্ক বা বাক্যযুদ্ধ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2517
  },
  {
    "word": "Prodigal",
    "bn": "অপব্যয়ী বা অমিতব্যয়ী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2518
  },
  {
    "word": "Prolific",
    "bn": "প্রচুর উৎপাদনশীল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "B2",
    "id": 2519
  },
  {
    "word": "Propensity",
    "bn": "স্বাভাবিক প্রবণতা বা ঝোঁক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2520
  },
  {
    "word": "Puerile",
    "bn": "ছেলেমানুষি বা অপরিণত",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2521
  },
  {
    "word": "Pugnacious",
    "bn": "ঝগড়াটে বা মারমুখী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2522
  },
  {
    "word": "Quixotic",
    "bn": "অবাস্তব কল্পনাবিলাসী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2523
  },
  {
    "word": "Recalcitrant",
    "bn": "অবাধ্য বা অবাধ্য স্বভাবের",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2524
  },
  {
    "word": "Reticent",
    "bn": "চাপা স্বভাবের বা স্বল্পভাষী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2525
  },
  {
    "word": "Sagacious",
    "bn": "বিচক্ষণ বা দূরদর্শী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2526
  },
  {
    "word": "Salient",
    "bn": "প্রধান বা সবচেয়ে লক্ষণীয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2527
  },
  {
    "word": "Soporific",
    "bn": "ঘুম উদ্রেককারী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2528
  },
  {
    "word": "Specious",
    "bn": "বাইরে সুন্দর কিন্তু ভেতরে মিথ্যা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2529
  },
  {
    "word": "Taciturn",
    "bn": "স্বভাবতই চুপচাপ বা স্বল্পভাষী",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2530
  },
  {
    "word": "Tenacious",
    "bn": "দৃঢ়সংকল্প বা নাছোড়বান্দা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2531
  },
  {
    "word": "Ubiquity",
    "bn": "সর্ববিদ্যমানতা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2532
  },
  {
    "word": "Vacillate",
    "bn": "সিদ্ধান্তহীনতায় দোলাচল",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2533
  },
  {
    "word": "Venerate",
    "bn": "গভীরভাবে শ্রদ্ধা করা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2534
  },
  {
    "word": "Vilify",
    "bn": "নিন্দা করা বা দুর্নাম রটানো",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2535
  },
  {
    "word": "Zealot",
    "bn": "ধর্মান্ধ বা অতি-উগ্র সমর্থক",
    "phonetic": "",
    "pos": "adjective",
    "category": "Academic",
    "level": "C1",
    "id": 2536
  },
  {
    "word": "atmosphere",
    "bn": "বায়ুমণ্ডল",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2537
  },
  {
    "word": "biosphere",
    "bn": "জীবমণ্ডল",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B2",
    "id": 2538
  },
  {
    "word": "ecosystem",
    "bn": "বাস্তুতন্ত্র",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2539
  },
  {
    "word": "biodiversity",
    "bn": "জীববৈচিত্র্য",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B2",
    "id": 2540
  },
  {
    "word": "photosynthesis",
    "bn": "সালোকসংশ্লেষণ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B2",
    "id": 2541
  },
  {
    "word": "chlorophyll",
    "bn": "ক্লোরোফিল",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B2",
    "id": 2542
  },
  {
    "word": "evaporation",
    "bn": "বাষ্পীভবন",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2543
  },
  {
    "word": "condensation",
    "bn": "ঘনীভবন",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B2",
    "id": 2544
  },
  {
    "word": "precipitation",
    "bn": "বৃষ্টিপাত বা অধঃক্ষেপণ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B2",
    "id": 2545
  },
  {
    "word": "hemisphere",
    "bn": "গোলার্ধ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2546
  },
  {
    "word": "equator",
    "bn": "বিষুবরেখা",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2547
  },
  {
    "word": "latitude",
    "bn": "অক্ষাংশ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2548
  },
  {
    "word": "longitude",
    "bn": "দ্রাঘিমাংশ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2549
  },
  {
    "word": "peninsula",
    "bn": "উপদ্বীপ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2550
  },
  {
    "word": "strait",
    "bn": "প্রণালী",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B2",
    "id": 2551
  },
  {
    "word": "archipelago",
    "bn": "দ্বীপপুঞ্জ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B2",
    "id": 2552
  },
  {
    "word": "plateau",
    "bn": "মালভূমি",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2553
  },
  {
    "word": "glacier",
    "bn": "হিমবাহ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2554
  },
  {
    "word": "tundra",
    "bn": "তুন্দ্রা অঞ্চল",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B2",
    "id": 2555
  },
  {
    "word": "savanna",
    "bn": "সাভানা তৃণভূমি",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B2",
    "id": 2556
  },
  {
    "word": "canyon",
    "bn": "গিরিখাত",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2557
  },
  {
    "word": "crater",
    "bn": "আগ্নেয়গিরির মুখ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B2",
    "id": 2558
  },
  {
    "word": "galaxy",
    "bn": "ছায়াপথ বা গ্যালাক্সি",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 2559
  },
  {
    "word": "cosmos",
    "bn": "মহাবিশ্ব",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B2",
    "id": 2560
  },
  {
    "word": "asteroid",
    "bn": "গ্রহাণু",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2561
  },
  {
    "word": "comet",
    "bn": "ধূমকেতু",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2562
  },
  {
    "word": "meteor",
    "bn": "উল্কা",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2563
  },
  {
    "word": "constellation",
    "bn": "নক্ষত্রমণ্ডল",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B2",
    "id": 2564
  },
  {
    "word": "eclipse",
    "bn": "গ্রহণ (চন্দ্র/সূর্য)",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2565
  },
  {
    "word": "gravity",
    "bn": "মহাকর্ষ বল",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 2566
  },
  {
    "word": "orbit",
    "bn": "কক্ষপথ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 2567
  },
  {
    "word": "satellite",
    "bn": "উপগ্রহ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 2568
  },
  {
    "word": "telescope",
    "bn": "দূরবীক্ষণ যন্ত্র",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 2569
  },
  {
    "word": "microscope",
    "bn": "অণুবীক্ষণ যন্ত্র",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 2570
  },
  {
    "word": "laboratory",
    "bn": "গবেষণাগার",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 2571
  },
  {
    "word": "experiment",
    "bn": "পরীক্ষা-নিরীক্ষা",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 2572
  },
  {
    "word": "hypothesis",
    "bn": "অনুমিত সিদ্ধান্ত বা অনুকল্প",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B2",
    "id": 2573
  },
  {
    "word": "variable",
    "bn": "চলক বা পরিবর্তনশীল মান",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2574
  },
  {
    "word": "molecule",
    "bn": "অণু",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2575
  },
  {
    "word": "atom",
    "bn": "পরমাণু",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2576
  },
  {
    "word": "electron",
    "bn": "ইলেকট্রন",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2577
  },
  {
    "word": "proton",
    "bn": "প্রোটন",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2578
  },
  {
    "word": "neutron",
    "bn": "নিউট্রন",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2579
  },
  {
    "word": "radiation",
    "bn": "তেজস্ক্রিয়তা বা বিকিরণ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B2",
    "id": 2580
  },
  {
    "word": "velocity",
    "bn": "বেগ বা দ্রুতি",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2581
  },
  {
    "word": "friction",
    "bn": "ঘর্ষণ বল",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2582
  },
  {
    "word": "inertia",
    "bn": "জড়তা",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B2",
    "id": 2583
  },
  {
    "word": "density",
    "bn": "ঘনত্ব",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2584
  },
  {
    "word": "temperature",
    "bn": "তাপমাত্রা",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A1",
    "id": 2585
  },
  {
    "word": "thermometer",
    "bn": "থার্মোমিটার",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 2586
  },
  {
    "word": "barometer",
    "bn": "বায়ুচাপমান যন্ত্র",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B2",
    "id": 2587
  },
  {
    "word": "humidity",
    "bn": "বায়ুর আর্দ্রতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 2588
  },
  {
    "word": "monsoon",
    "bn": "মৌসুমি বায়ু",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 2589
  },
  {
    "word": "tsunami",
    "bn": "সুনামি বা জলোচ্ছ্বাস",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 2590
  },
  {
    "word": "avalanche",
    "bn": "হিমধস",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B2",
    "id": 2591
  },
  {
    "word": "landslide",
    "bn": "ভূমিধস",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2592
  },
  {
    "word": "erosion",
    "bn": "নদী বা মাটির ক্ষয়",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2593
  },
  {
    "word": "deforestation",
    "bn": "বন উজাড়করণ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2594
  },
  {
    "word": "afforestation",
    "bn": "বনায়ন",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B2",
    "id": 2595
  },
  {
    "word": "greenhouse",
    "bn": "গ্রিনহাউস বা সবুজ ঘর",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2596
  },
  {
    "word": "emissions",
    "bn": "বায়ুমণ্ডলে নির্গমন",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B2",
    "id": 2597
  },
  {
    "word": "renewable",
    "bn": "নবায়নযোগ্য শক্তি",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2598
  },
  {
    "word": "fossil fuel",
    "bn": "জীবাশ্ম জ্বালানি",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2599
  },
  {
    "word": "conservation",
    "bn": "সংরক্ষণ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2600
  },
  {
    "word": "pollutant",
    "bn": "দূষক উপাদান",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2601
  },
  {
    "word": "Chameleon",
    "bn": "গিরগিটি",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B1",
    "id": 2602
  },
  {
    "word": "Salamander",
    "bn": "স্যালামান্ডার উভচর",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B2",
    "id": 2603
  },
  {
    "word": "Platypus",
    "bn": "প্লাটিপাস",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B2",
    "id": 2604
  },
  {
    "word": "Iguana",
    "bn": "ইগুয়ানা টিকটিকি",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B2",
    "id": 2605
  },
  {
    "word": "Hyena",
    "bn": "হায়েনা",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "A2",
    "id": 2606
  },
  {
    "word": "Jaguar",
    "bn": "জাগুয়ার",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "A2",
    "id": 2607
  },
  {
    "word": "Panther",
    "bn": "কালো চিতাবাঘ",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B1",
    "id": 2608
  },
  {
    "word": "Puma",
    "bn": "পুমা বা বনবিড়াল",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B1",
    "id": 2609
  },
  {
    "word": "Badger",
    "bn": "বিজুবাবা বা ব্যাজার",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B2",
    "id": 2610
  },
  {
    "word": "Beaver",
    "bn": "বিভার জলচর",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B1",
    "id": 2611
  },
  {
    "word": "Otter",
    "bn": "ভোঁদড়",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B1",
    "id": 2612
  },
  {
    "word": "Skunk",
    "bn": "স্কঙ্ক গন্ধবাহী প্রাণী",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B1",
    "id": 2613
  },
  {
    "word": "Sloth",
    "bn": "স্লথ মন্থর প্রাণী",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B1",
    "id": 2614
  },
  {
    "word": "Walrus",
    "bn": "ওয়ালরাস বা সিন্ধুগোরু",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B2",
    "id": 2615
  },
  {
    "word": "Porcupine",
    "bn": "সজারু",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B1",
    "id": 2616
  },
  {
    "word": "Armadillo",
    "bn": "আর্মাডিলো বর্মযুক্ত প্রাণী",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B2",
    "id": 2617
  },
  {
    "word": "Possum",
    "bn": "পসাম",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B2",
    "id": 2618
  },
  {
    "word": "Aardvark",
    "bn": "আর্ডভার্ক পিঁপড়াভুক",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B2",
    "id": 2619
  },
  {
    "word": "Anteater",
    "bn": "পিঁপড়াভোজী প্রাণী",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B1",
    "id": 2620
  },
  {
    "word": "Bison",
    "bn": "বাইসন বা বনগরু",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B1",
    "id": 2621
  },
  {
    "word": "Gazelle",
    "bn": "হরিণবিশেষ",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B1",
    "id": 2622
  },
  {
    "word": "Antelope",
    "bn": "কৃষ্ণসার মৃগ",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B1",
    "id": 2623
  },
  {
    "word": "Koala",
    "bn": "কোয়ালা ভালুক",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "A2",
    "id": 2624
  },
  {
    "word": "Lemur",
    "bn": "লেমুর বাঁদরজাতীয়",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B1",
    "id": 2625
  },
  {
    "word": "Meerkat",
    "bn": "মিরক্যাট সুরিকাটা",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B1",
    "id": 2626
  },
  {
    "word": "Mongoose",
    "bn": "বেজি বা নেউল",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "A2",
    "id": 2627
  },
  {
    "word": "Pelican",
    "bn": "গগনবেড় পাখি",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B1",
    "id": 2628
  },
  {
    "word": "Kingfisher",
    "bn": "মাছরাঙা পাখি",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "A2",
    "id": 2629
  },
  {
    "word": "Hummingbird",
    "bn": "হামিংবার্ড ক্ষুদ্র পাখি",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B1",
    "id": 2630
  },
  {
    "word": "Flamingo",
    "bn": "ফ্লেমিঙ্গো রাজহংসী",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B1",
    "id": 2631
  },
  {
    "word": "Ostrich",
    "bn": "উটপাখি",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "A2",
    "id": 2632
  },
  {
    "word": "Emu",
    "bn": "ইমু পাখি",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B1",
    "id": 2633
  },
  {
    "word": "Kiwi",
    "bn": "কিউই পাখি বা ফল",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "A2",
    "id": 2634
  },
  {
    "word": "Vulture",
    "bn": "শকুনি",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "A2",
    "id": 2635
  },
  {
    "word": "Albatross",
    "bn": "অ্যালবাট্রস সামুদ্রিক পাখি",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B2",
    "id": 2636
  },
  {
    "word": "Falcon",
    "bn": "বাজপাখি",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B1",
    "id": 2637
  },
  {
    "word": "Canary",
    "bn": "ক্যানারি হলুদ পাখি",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B1",
    "id": 2638
  },
  {
    "word": "Cuckoo",
    "bn": "কোকিল পাখি",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "A2",
    "id": 2639
  },
  {
    "word": "Woodpecker",
    "bn": "কাঠঠোকরা পাখি",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "A2",
    "id": 2640
  },
  {
    "word": "Hornbill",
    "bn": "ধনেশ পাখি",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B2",
    "id": 2641
  },
  {
    "word": "Barbet",
    "bn": "বসন্তবৌরি পাখি",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B2",
    "id": 2642
  },
  {
    "word": "Stingray",
    "bn": "শাপলাপাতা মাছ",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B1",
    "id": 2643
  },
  {
    "word": "Jellyfish",
    "bn": "জেলিফিশ",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "A2",
    "id": 2644
  },
  {
    "word": "Barracuda",
    "bn": "ব্যারাকুডা শিকারি মাছ",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B2",
    "id": 2645
  },
  {
    "word": "Seahorse",
    "bn": "ঘোড়ামাছ বা সিহর্স",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "A2",
    "id": 2646
  },
  {
    "word": "Lobster",
    "bn": "গলদা চিংড়ি",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "A2",
    "id": 2647
  },
  {
    "word": "Anemone",
    "bn": "অ্যানিমোন সামুদ্রিক জীব",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B2",
    "id": 2648
  },
  {
    "word": "Plankton",
    "bn": "প্ল্যাংকটন জলজ অণুজীব",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B2",
    "id": 2649
  },
  {
    "word": "Centipede",
    "bn": "শতপদী বা কেন্নো",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B1",
    "id": 2650
  },
  {
    "word": "Millipede",
    "bn": "সহস্রপদী কেন্নো",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B1",
    "id": 2651
  },
  {
    "word": "Dragonfly",
    "bn": "ফড়িং",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "A2",
    "id": 2652
  },
  {
    "word": "Firefly",
    "bn": "জোনাকি পোকা",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "A2",
    "id": 2653
  },
  {
    "word": "Cicada",
    "bn": "ঝাঁঝিপোকা",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "B2",
    "id": 2654
  },
  {
    "word": "Screwdriver",
    "bn": "স্ক্রুড্রাইভার বা স্ক্রু ঘোরানোর যন্ত্র",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A2",
    "id": 2655
  },
  {
    "word": "Wrench",
    "bn": "রেঞ্চ বা নাট খোলার চাবি",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A2",
    "id": 2656
  },
  {
    "word": "Pliers",
    "bn": "প্লায়ার্স বা চিমটা সাঁড়াশি",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A2",
    "id": 2657
  },
  {
    "word": "Axe",
    "bn": "কুঠার",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A2",
    "id": 2658
  },
  {
    "word": "Drill",
    "bn": "ড্রিল মেশিন বা ছিদ্র করার যন্ত্র",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A2",
    "id": 2659
  },
  {
    "word": "Tape measure",
    "bn": "ফিতা বা পরিমাপের ফিতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A2",
    "id": 2660
  },
  {
    "word": "Level",
    "bn": "লেভেল মাপার যন্ত্র",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "B1",
    "id": 2661
  },
  {
    "word": "Flashlight",
    "bn": "টর্চলাইট",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A1",
    "id": 2662
  },
  {
    "word": "Shovel",
    "bn": "কোদাল বা বেলচা",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A2",
    "id": 2663
  },
  {
    "word": "Rake",
    "bn": "আঁচড়া বা ঘাস জড়ো করার যন্ত্র",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A2",
    "id": 2664
  },
  {
    "word": "Spade",
    "bn": "কোদাল",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A2",
    "id": 2665
  },
  {
    "word": "Wheelbarrow",
    "bn": "একচাকার ঠেলাগাড়ি",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "B1",
    "id": 2666
  },
  {
    "word": "Hose",
    "bn": "পানির পাইপ বা হোসপাইপ",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A2",
    "id": 2667
  },
  {
    "word": "Nozzle",
    "bn": "নলমুখ বা নোজল",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "B1",
    "id": 2668
  },
  {
    "word": "Sponge",
    "bn": "স্পঞ্জ",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A1",
    "id": 2669
  },
  {
    "word": "Detergent",
    "bn": "ডিটারজেন্ট বা কাপড় ধোয়ার গুঁড়ো",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A2",
    "id": 2670
  },
  {
    "word": "Bleach",
    "bn": "ব্লিচিং পাউডার",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A2",
    "id": 2671
  },
  {
    "word": "Stain",
    "bn": "দাগ বা ছোপ",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A2",
    "id": 2672
  },
  {
    "word": "Clothespin",
    "bn": "কাপড় শুকানোর ক্লিপ",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A2",
    "id": 2673
  },
  {
    "word": "Hanger",
    "bn": "হ্যাঙ্গার",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A1",
    "id": 2674
  },
  {
    "word": "Ironing board",
    "bn": "ইস্ত্রি করার বোর্ড",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A2",
    "id": 2675
  },
  {
    "word": "Lint",
    "bn": "পোশাকের আলগা সুতো বা আঁশ",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "B1",
    "id": 2676
  },
  {
    "word": "Thread",
    "bn": "সেলাইয়ের সুতো",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A1",
    "id": 2677
  },
  {
    "word": "Thimble",
    "bn": "আঙুলত্রাণ",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "B2",
    "id": 2678
  },
  {
    "word": "Safety pin",
    "bn": "সেফটি পিন",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A1",
    "id": 2679
  },
  {
    "word": "Shoepolish",
    "bn": "জুতার কালি",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A1",
    "id": 2680
  },
  {
    "word": "Shoehorn",
    "bn": "জুতো পরার চামচ",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "B2",
    "id": 2681
  },
  {
    "word": "Keychain",
    "bn": "চাবির রিং",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A1",
    "id": 2682
  },
  {
    "word": "Padlock",
    "bn": "ঝোলানো তালা",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A2",
    "id": 2683
  },
  {
    "word": "Doorbell",
    "bn": "দরজার কলিংবেল",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A1",
    "id": 2684
  },
  {
    "word": "Peephole",
    "bn": "দরজার গোপন ছিদ্র",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "B1",
    "id": 2685
  },
  {
    "word": "Doorknob",
    "bn": "দরজার হাতল",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A2",
    "id": 2686
  },
  {
    "word": "Hinge",
    "bn": "দরজা-জানালার কবজা",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "B1",
    "id": 2687
  },
  {
    "word": "Curtain rod",
    "bn": "পর্দার পাইপ",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A2",
    "id": 2688
  },
  {
    "word": "Dustpan",
    "bn": "ময়লা তোলার বেলচা",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A2",
    "id": 2689
  },
  {
    "word": "Mop",
    "bn": "মেঝে মোছার ব্রাশ",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A1",
    "id": 2690
  },
  {
    "word": "Squeegee",
    "bn": "কাচ বা মেঝে মোছার রাবার",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "B1",
    "id": 2691
  },
  {
    "word": "Basil",
    "bn": "তুলসী পাতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 2692
  },
  {
    "word": "Oregano",
    "bn": "অরিগ্যানো সুগন্ধি পাতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "B1",
    "id": 2693
  },
  {
    "word": "Rosemary",
    "bn": "রোজমেরি মসলা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "B1",
    "id": 2694
  },
  {
    "word": "Thyme",
    "bn": "থাইম মসলা পাতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "B1",
    "id": 2695
  },
  {
    "word": "Parsley",
    "bn": "পার্সলে পাতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 2696
  },
  {
    "word": "Mint",
    "bn": "পুদিনা পাতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A1",
    "id": 2697
  },
  {
    "word": "Fennel",
    "bn": "মৌরি বা মিষ্টি জিরা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "B1",
    "id": 2698
  },
  {
    "word": "Fenugreek",
    "bn": "মেথি দানা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "B1",
    "id": 2699
  },
  {
    "word": "Nutmeg",
    "bn": "জায়ফল",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "B1",
    "id": 2700
  },
  {
    "word": "Mace",
    "bn": "জয়ত্রী",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "B1",
    "id": 2701
  },
  {
    "word": "Anise",
    "bn": "মৌরি মসলা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "B1",
    "id": 2702
  },
  {
    "word": "Saffron",
    "bn": "জাফরান",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "B1",
    "id": 2703
  },
  {
    "word": "Paprika",
    "bn": "পাপরিকা লাল মরিচের গুঁড়ো",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "B1",
    "id": 2704
  },
  {
    "word": "Cayenne",
    "bn": "তীব্র ঝাল মরিচ",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "B1",
    "id": 2705
  },
  {
    "word": "Wasabi",
    "bn": "ওয়াসাবি জাপানি ঝাল",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "B2",
    "id": 2706
  },
  {
    "word": "Vinegar",
    "bn": "সিরকা বা ভিনেগার",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 2707
  },
  {
    "word": "Olive oil",
    "bn": "জলপাই তেল",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 2708
  },
  {
    "word": "Sesame",
    "bn": "তিল দানা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 2709
  },
  {
    "word": "Poppy seed",
    "bn": "পোস্ত দানা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "B1",
    "id": 2710
  },
  {
    "word": "Tamarind",
    "bn": "তেঁতুল",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A1",
    "id": 2711
  },
  {
    "word": "Prune",
    "bn": "শুকনো বরই বা প্রুন",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "B1",
    "id": 2712
  },
  {
    "word": "Raisin",
    "bn": "কিশমিশ",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A1",
    "id": 2713
  },
  {
    "word": "Fig",
    "bn": "ডুমুর বা আনজির",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 2714
  },
  {
    "word": "Apricot",
    "bn": "খুবানি বা অ্যাপ্রিকট",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 2715
  },
  {
    "word": "Pistachio",
    "bn": "পেস্তা বাদাম",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 2716
  },
  {
    "word": "Walnut",
    "bn": "আখরোট বাদাম",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 2717
  },
  {
    "word": "Hazelnut",
    "bn": "হিজল বাদাম",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "B1",
    "id": 2718
  },
  {
    "word": "Macadamia",
    "bn": "ম্যাকাডামিয়া বাদাম",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "B2",
    "id": 2719
  },
  {
    "word": "Asparagus",
    "bn": "অ্যাসপারাগাস সবজি",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "B1",
    "id": 2720
  },
  {
    "word": "Broccoli",
    "bn": "ব্রকলি বা সবুজ ফুলকপি",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 2721
  },
  {
    "word": "Zucchini",
    "bn": "ধুন্দুলজাতীয় জুচিনি",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "B1",
    "id": 2722
  },
  {
    "word": "Artichoke",
    "bn": "আর্টিচোক সবজি",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "B2",
    "id": 2723
  },
  {
    "word": "Celery",
    "bn": "সেলেরি পাতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "B1",
    "id": 2724
  },
  {
    "word": "Leek",
    "bn": "পেঁয়াজকলির মতো লিক",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "B1",
    "id": 2725
  },
  {
    "word": "Radish",
    "bn": "মুলা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A1",
    "id": 2726
  },
  {
    "word": "Beetroot",
    "bn": "বিট বা লাল শালগম",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 2727
  },
  {
    "word": "Turnip",
    "bn": "শালগম",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 2728
  },
  {
    "word": "Sweet potato",
    "bn": "মিষ্টি আলু",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A1",
    "id": 2729
  },
  {
    "word": "Yam",
    "bn": "মেটে আলু বা কচু",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 2730
  },
  {
    "word": "Cassava",
    "bn": "শিমুল আলু বা কাসাভা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "B2",
    "id": 2731
  },
  {
    "word": "Kale",
    "bn": "সবুজ কেল শাক",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "B1",
    "id": 2732
  },
  {
    "word": "Lettuce",
    "bn": "লেটুস পাতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A1",
    "id": 2733
  },
  {
    "word": "Cabbage",
    "bn": "বাঁধাকপি",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A1",
    "id": 2734
  },
  {
    "word": "Cauliflower",
    "bn": "ফুলকপি",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A1",
    "id": 2735
  },
  {
    "word": "Brinjal",
    "bn": "বেগুন",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A1",
    "id": 2736
  },
  {
    "word": "Okra",
    "bn": "ঢ্যাঁড়শ বা ভেন্ডি",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A1",
    "id": 2737
  },
  {
    "word": "Bitter gourd",
    "bn": "করলা বা উচ্ছে",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A1",
    "id": 2738
  },
  {
    "word": "Pointed gourd",
    "bn": "পটল",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A1",
    "id": 2739
  },
  {
    "word": "Snake gourd",
    "bn": "চিচিঙ্গা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 2740
  },
  {
    "word": "Ridge gourd",
    "bn": "ঝিঙে",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 2741
  },
  {
    "word": "Bottle gourd",
    "bn": "লাউ",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A1",
    "id": 2742
  },
  {
    "word": "Ash gourd",
    "bn": "চালকুমড়া",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 2743
  },
  {
    "word": "Drumstick",
    "bn": "সজিনা ডাঁটা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 2744
  },
  {
    "word": "Jackfruit",
    "bn": "কাঁঠাল",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A1",
    "id": 2745
  },
  {
    "word": "Wood apple",
    "bn": "বেল ফল",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 2746
  },
  {
    "word": "Custard apple",
    "bn": "আতা ফল বা শরিফা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 2747
  },
  {
    "word": "Starfruit",
    "bn": "কামরাঙ্গা ফল",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 2748
  },
  {
    "word": "Sapodilla",
    "bn": "সফেদা ফল",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 2749
  },
  {
    "word": "Dragon fruit",
    "bn": "ড্রাগন ফল",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A1",
    "id": 2750
  },
  {
    "word": "Avocado",
    "bn": "অ্যাভোকাডো ফল",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 2751
  },
  {
    "word": "Passion fruit",
    "bn": "প্যাশন ফল",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "B1",
    "id": 2752
  },
  {
    "word": "Blackberry",
    "bn": "কালো জাম",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A1",
    "id": 2753
  },
  {
    "word": "Raspberry",
    "bn": "রাস্পবেরি",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 2754
  },
  {
    "word": "Blueberry",
    "bn": "ব্লুবেরি",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A1",
    "id": 2755
  },
  {
    "word": "Cranberry",
    "bn": "ক্র্যানবেরি",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "B1",
    "id": 2756
  },
  {
    "word": "Bangladesh",
    "bn": "বাংলাদেশ",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "A1",
    "id": 2757
  },
  {
    "word": "Bangladeshi",
    "bn": "বাংলাদেশি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Places",
    "level": "A1",
    "id": 2758
  },
  {
    "word": "India",
    "bn": "ভারত",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "A1",
    "id": 2759
  },
  {
    "word": "Indian",
    "bn": "ভারতীয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Places",
    "level": "A1",
    "id": 2760
  },
  {
    "word": "Pakistan",
    "bn": "পাকিস্তান",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "A1",
    "id": 2761
  },
  {
    "word": "United States",
    "bn": "মার্কিন যুক্তরাষ্ট্র",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "A1",
    "id": 2762
  },
  {
    "word": "American",
    "bn": "আমেরিকান",
    "phonetic": "",
    "pos": "adjective",
    "category": "Places",
    "level": "A1",
    "id": 2763
  },
  {
    "word": "United Kingdom",
    "bn": "যুক্তরাজ্য / ব্রিটেন",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "A1",
    "id": 2764
  },
  {
    "word": "British",
    "bn": "ব্রিটিশ",
    "phonetic": "",
    "pos": "adjective",
    "category": "Places",
    "level": "A1",
    "id": 2765
  },
  {
    "word": "Canada",
    "bn": "কানাডা",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "A1",
    "id": 2766
  },
  {
    "word": "Canadian",
    "bn": "কানাডীয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Places",
    "level": "A1",
    "id": 2767
  },
  {
    "word": "Australia",
    "bn": "অস্ট্রেলিয়া",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "A1",
    "id": 2768
  },
  {
    "word": "Australian",
    "bn": "অস্ট্রেলীয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Places",
    "level": "A1",
    "id": 2769
  },
  {
    "word": "Japan",
    "bn": "জাপান",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "A1",
    "id": 2770
  },
  {
    "word": "Japanese",
    "bn": "জাপানি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Places",
    "level": "A1",
    "id": 2771
  },
  {
    "word": "China",
    "bn": "চীন",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "A1",
    "id": 2772
  },
  {
    "word": "Chinese",
    "bn": "চীনা",
    "phonetic": "",
    "pos": "adjective",
    "category": "Places",
    "level": "A1",
    "id": 2773
  },
  {
    "word": "Germany",
    "bn": "জার্মানি",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "A1",
    "id": 2774
  },
  {
    "word": "German",
    "bn": "জার্মান",
    "phonetic": "",
    "pos": "adjective",
    "category": "Places",
    "level": "A1",
    "id": 2775
  },
  {
    "word": "France",
    "bn": "ফ্রান্স",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "A1",
    "id": 2776
  },
  {
    "word": "French",
    "bn": "ফরাসি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Places",
    "level": "A1",
    "id": 2777
  },
  {
    "word": "Italy",
    "bn": "ইতালি",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "A1",
    "id": 2778
  },
  {
    "word": "Italian",
    "bn": "ইতালীয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Places",
    "level": "A1",
    "id": 2779
  },
  {
    "word": "Saudi Arabia",
    "bn": "সৌদি আরব",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "A1",
    "id": 2780
  },
  {
    "word": "Arabian",
    "bn": "আরবীয়",
    "phonetic": "",
    "pos": "adjective",
    "category": "Places",
    "level": "A1",
    "id": 2781
  },
  {
    "word": "Turkey",
    "bn": "তুরস্ক",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "A1",
    "id": 2782
  },
  {
    "word": "Turkish",
    "bn": "তুর্কি",
    "phonetic": "",
    "pos": "adjective",
    "category": "Places",
    "level": "A1",
    "id": 2783
  },
  {
    "word": "Malaysia",
    "bn": "মালয়েশিয়া",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "A1",
    "id": 2784
  },
  {
    "word": "Singapore",
    "bn": "সিঙ্গাপুর",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "A1",
    "id": 2785
  },
  {
    "word": "Dubai",
    "bn": "দুবাই",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "A1",
    "id": 2786
  },
  {
    "word": "Badminton",
    "bn": "ব্যাডমিন্টন খেলা",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A1",
    "id": 2787
  },
  {
    "word": "Tennis",
    "bn": "টেনিস খেলা",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A1",
    "id": 2788
  },
  {
    "word": "Table tennis",
    "bn": "টেবিল টেনিস",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A1",
    "id": 2789
  },
  {
    "word": "Volleyball",
    "bn": "ভলিবল",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A1",
    "id": 2790
  },
  {
    "word": "Basketball",
    "bn": "বাস্কেটবল",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A1",
    "id": 2791
  },
  {
    "word": "Hockey",
    "bn": "হকি খেলা",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A1",
    "id": 2792
  },
  {
    "word": "Golf",
    "bn": "গলফ খেলা",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A2",
    "id": 2793
  },
  {
    "word": "Baseball",
    "bn": "বেসবল",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A2",
    "id": 2794
  },
  {
    "word": "Swimming",
    "bn": "সাঁতার কাটা",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A1",
    "id": 2795
  },
  {
    "word": "Cycling",
    "bn": "সাইক্লিং বা সাইকেল চালনা",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A1",
    "id": 2796
  },
  {
    "word": "Running",
    "bn": "দৌড়ানো",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A1",
    "id": 2797
  },
  {
    "word": "Jogging",
    "bn": "হালকা দৌড়",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A1",
    "id": 2798
  },
  {
    "word": "Marathon",
    "bn": "ম্যারাথন দৌড়",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "B1",
    "id": 2799
  },
  {
    "word": "Gymnastics",
    "bn": "জিমন্যাস্টিকস বা শরীরচর্চা",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "B1",
    "id": 2800
  },
  {
    "word": "Weightlifting",
    "bn": "ভারোত্তোলন",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "B1",
    "id": 2801
  },
  {
    "word": "Boxing",
    "bn": "মুষ্টিযুদ্ধ বা বক্সিং",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A2",
    "id": 2802
  },
  {
    "word": "Wrestling",
    "bn": "কুস্তি",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A2",
    "id": 2803
  },
  {
    "word": "Karate",
    "bn": "কারাতে বা আত্মরক্ষা কৌশল",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A2",
    "id": 2804
  },
  {
    "word": "Judo",
    "bn": "জুডো",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A2",
    "id": 2805
  },
  {
    "word": "Archery",
    "bn": "তীরন্দাজি",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "B1",
    "id": 2806
  },
  {
    "word": "Shooting",
    "bn": "শুটিং বা নিশানা লক্ষ্য",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A2",
    "id": 2807
  },
  {
    "word": "Chess",
    "bn": "দাবা খেলা",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A1",
    "id": 2808
  },
  {
    "word": "Carrom",
    "bn": "ক্যারম খেলা",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A1",
    "id": 2809
  },
  {
    "word": "Ludo",
    "bn": "লুডু খেলা",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A1",
    "id": 2810
  },
  {
    "word": "Athlete",
    "bn": "ক্রীড়াবিদ",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A2",
    "id": 2811
  },
  {
    "word": "Coach",
    "bn": "প্রশিক্ষক বা কোচ",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A2",
    "id": 2812
  },
  {
    "word": "Referee",
    "bn": "রেফারি বা বিচারক",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A2",
    "id": 2813
  },
  {
    "word": "Umpire",
    "bn": "আম্পায়ার",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A2",
    "id": 2814
  },
  {
    "word": "Championship",
    "bn": "চ্যাম্পিয়নশিপ বা শ্রেষ্ঠত্ব প্রতিযোগিতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "B1",
    "id": 2815
  },
  {
    "word": "Tournament",
    "bn": "টুর্নামেন্ট বা টুর্নামেন্ট প্রতিযোগিতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A2",
    "id": 2816
  },
  {
    "word": "Trophy",
    "bn": "ট্রফি বা বিজয় স্মারক",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A1",
    "id": 2817
  },
  {
    "word": "Medal",
    "bn": "পদক",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A2",
    "id": 2818
  },
  {
    "word": "Gold medal",
    "bn": "স্বর্ণপদক",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A2",
    "id": 2819
  },
  {
    "word": "Silver medal",
    "bn": "রৌপ্যপদক",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A2",
    "id": 2820
  },
  {
    "word": "Bronze medal",
    "bn": "ব্রোঞ্জ পদক",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A2",
    "id": 2821
  },
  {
    "word": "Spectator",
    "bn": "দর্শক",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "B1",
    "id": 2822
  },
  {
    "word": "Opponent",
    "bn": "প্রতিদ্বন্দ্বী",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "B1",
    "id": 2823
  },
  {
    "word": "Defeat",
    "bn": "পরাজয়",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A2",
    "id": 2824
  },
  {
    "word": "Victory",
    "bn": "বিজয়",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A2",
    "id": 2825
  },
  {
    "word": "Guitar",
    "bn": "গিটার",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "A1",
    "id": 2826
  },
  {
    "word": "Piano",
    "bn": "পিয়ানো",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "A1",
    "id": 2827
  },
  {
    "word": "Violin",
    "bn": "বেহালা",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "A2",
    "id": 2828
  },
  {
    "word": "Flute",
    "bn": "বাঁশি",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "A1",
    "id": 2829
  },
  {
    "word": "Harmonium",
    "bn": "হারমোনিয়াম",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "A1",
    "id": 2830
  },
  {
    "word": "Tabla",
    "bn": "তবলা",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "A1",
    "id": 2831
  },
  {
    "word": "Drums",
    "bn": "ড্রাম বা ঢোল",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "A1",
    "id": 2832
  },
  {
    "word": "Keyboard",
    "bn": "কিবোর্ড বা সিন্থেসাইজার",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "A2",
    "id": 2833
  },
  {
    "word": "Microphone",
    "bn": "মাইক্রোফোন",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "A1",
    "id": 2834
  },
  {
    "word": "Melody",
    "bn": "সুর বা সুরলহরী",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "A2",
    "id": 2835
  },
  {
    "word": "Rhythm",
    "bn": "ছন্দ বা তাল",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "B1",
    "id": 2836
  },
  {
    "word": "Harmony",
    "bn": "সমন্বয় বা সমস্বর",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "B1",
    "id": 2837
  },
  {
    "word": "Symphony",
    "bn": "সিম্ফনি বা ঐকতান",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "B2",
    "id": 2838
  },
  {
    "word": "Concert",
    "bn": "সঙ্গীতানুষ্ঠান বা কনসার্ট",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "A2",
    "id": 2839
  },
  {
    "word": "Orchestra",
    "bn": "ঐকতান বাদকদল",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "B1",
    "id": 2840
  },
  {
    "word": "Composer",
    "bn": "সুরকার",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "B1",
    "id": 2841
  },
  {
    "word": "Lyrics",
    "bn": "গানের কথা",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "A2",
    "id": 2842
  },
  {
    "word": "Vocalist",
    "bn": "কণ্ঠশিল্পী",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "B1",
    "id": 2843
  },
  {
    "word": "Sculpture",
    "bn": "ভাস্কর্য",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "B1",
    "id": 2844
  },
  {
    "word": "Portrait",
    "bn": "প্রতিকৃতি বা ছবি",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "A2",
    "id": 2845
  },
  {
    "word": "Landscape",
    "bn": "প্রাকৃতিক ভূদৃশ্যের চিত্র",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "B1",
    "id": 2846
  },
  {
    "word": "Masterpiece",
    "bn": "কালজয়ী শিল্পকর্ম",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "B2",
    "id": 2847
  },
  {
    "word": "Gallery",
    "bn": "শিল্পকলা প্রদর্শনী কেন্দ্র",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "A2",
    "id": 2848
  },
  {
    "word": "Exhibition",
    "bn": "প্রদর্শনী",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "B1",
    "id": 2849
  },
  {
    "word": "Literature",
    "bn": "সাহিত্য",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "B1",
    "id": 2850
  },
  {
    "word": "Poetry",
    "bn": "কবিতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "A2",
    "id": 2851
  },
  {
    "word": "Fiction",
    "bn": "কল্পকাহিনী বা কথাসাহিত্য",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "B1",
    "id": 2852
  },
  {
    "word": "Biography",
    "bn": "জীবনী",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "B1",
    "id": 2853
  },
  {
    "word": "Autobiography",
    "bn": "আত্মজীবনী",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "B1",
    "id": 2854
  },
  {
    "word": "Drama",
    "bn": "নাটক",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "A2",
    "id": 2855
  },
  {
    "word": "Constitution",
    "bn": "সংবিধান",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B1",
    "id": 2856
  },
  {
    "word": "Legislation",
    "bn": "আইন প্রণয়ন",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B2",
    "id": 2857
  },
  {
    "word": "Judiciary",
    "bn": "বিচার বিভাগ",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B2",
    "id": 2858
  },
  {
    "word": "Magistrate",
    "bn": "ম্যাজিস্ট্রেট বা বিচারক",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B1",
    "id": 2859
  },
  {
    "word": "Prosecutor",
    "bn": "সরকারি আইনজীবী",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B2",
    "id": 2860
  },
  {
    "word": "Defense attorney",
    "bn": "আসামিপক্ষের আইনজীবী",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B2",
    "id": 2861
  },
  {
    "word": "Plaintiff",
    "bn": "বাদী বা অভিযোগকারী",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B2",
    "id": 2862
  },
  {
    "word": "Defendant",
    "bn": "বিবাদী বা আসামি",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B2",
    "id": 2863
  },
  {
    "word": "Testimony",
    "bn": "সাক্ষ্যপ্রমাণ বা জবানবন্দি",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B2",
    "id": 2864
  },
  {
    "word": "Affidavit",
    "bn": "হলফনামা",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B2",
    "id": 2865
  },
  {
    "word": "Summons",
    "bn": "আদালতের তলব বা সমন",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B2",
    "id": 2866
  },
  {
    "word": "Warrant",
    "bn": "গ্রেপ্তারি পরোয়ানা",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B1",
    "id": 2867
  },
  {
    "word": "Custody",
    "bn": "আইনি হেফাজত",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B1",
    "id": 2868
  },
  {
    "word": "Interrogation",
    "bn": "জিজ্ঞাসাবাদ",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B2",
    "id": 2869
  },
  {
    "word": "Acquittal",
    "bn": "বেখসুর খালাস",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "C1",
    "id": 2870
  },
  {
    "word": "Conviction",
    "bn": "দণ্ডাদেশ বা অপরাধ সাব্যস্ত",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B2",
    "id": 2871
  },
  {
    "word": "Appeal",
    "bn": "উচ্চ আদালতে আপিল",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B1",
    "id": 2872
  },
  {
    "word": "Civil rights",
    "bn": "নাগরিক অধিকার",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B1",
    "id": 2873
  },
  {
    "word": "Humanity",
    "bn": "মানবতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "A2",
    "id": 2874
  },
  {
    "word": "Solidarity",
    "bn": "সংহতি বা একাত্মতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B2",
    "id": 2875
  },
  {
    "word": "Sovereignty",
    "bn": "সার্বভৌমত্ব",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B2",
    "id": 2876
  },
  {
    "word": "Diplomacy",
    "bn": "কূটনীতি",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B2",
    "id": 2877
  },
  {
    "word": "Ambassador",
    "bn": "রাষ্ট্রদূত",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B1",
    "id": 2878
  },
  {
    "word": "Embassy",
    "bn": "দূতাবাস",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "A2",
    "id": 2879
  },
  {
    "word": "Consulate",
    "bn": "কনস্যুলেট বা উপদূতাবাস",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B1",
    "id": 2880
  },
  {
    "word": "Treaty",
    "bn": "আন্তর্জাতিক চুক্তি",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B2",
    "id": 2881
  },
  {
    "word": "Sanction",
    "bn": "নিষেধাজ্ঞা",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B2",
    "id": 2882
  },
  {
    "word": "Refugee",
    "bn": "শরণার্থী",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B1",
    "id": 2883
  },
  {
    "word": "Asylum",
    "bn": "রাজনৈতিক আশ্রয়",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B2",
    "id": 2884
  },
  {
    "word": "Philanthropy",
    "bn": "জনহিতৈষণা বা মানবকল্যাণ",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "C1",
    "id": 2885
  },
  {
    "word": "Nebula",
    "bn": "নীহারিকা বা গ্যাসীয় মেঘ",
    "phonetic": "",
    "pos": "noun",
    "category": "Science",
    "level": "B2",
    "id": 2886
  },
  {
    "word": "Supernova",
    "bn": "সুপারনোভা বা তারার বিস্ফোরণ",
    "phonetic": "",
    "pos": "noun",
    "category": "Science",
    "level": "B2",
    "id": 2887
  },
  {
    "word": "Black hole",
    "bn": "কৃষ্ণগহ্বর বা ব্ল্যাকহোল",
    "phonetic": "",
    "pos": "noun",
    "category": "Science",
    "level": "B1",
    "id": 2888
  },
  {
    "word": "Milky Way",
    "bn": "আকাশগঙ্গা ছায়াপথ",
    "phonetic": "",
    "pos": "noun",
    "category": "Science",
    "level": "A2",
    "id": 2889
  },
  {
    "word": "Solar system",
    "bn": "সৌরজগৎ",
    "phonetic": "",
    "pos": "noun",
    "category": "Science",
    "level": "A2",
    "id": 2890
  },
  {
    "word": "Cosmonaut",
    "bn": "মহাকাশচারী",
    "phonetic": "",
    "pos": "noun",
    "category": "Science",
    "level": "B1",
    "id": 2891
  },
  {
    "word": "Astronaut",
    "bn": "নভোচারী বা মহাকাশচারী",
    "phonetic": "",
    "pos": "noun",
    "category": "Science",
    "level": "A2",
    "id": 2892
  },
  {
    "word": "Rocket",
    "bn": "রকেট বা মহাকাশযান",
    "phonetic": "",
    "pos": "noun",
    "category": "Science",
    "level": "A2",
    "id": 2893
  },
  {
    "word": "Spacecraft",
    "bn": "মহাকাশযান",
    "phonetic": "",
    "pos": "noun",
    "category": "Science",
    "level": "B1",
    "id": 2894
  },
  {
    "word": "Space station",
    "bn": "মহাকাশ স্টেশন",
    "phonetic": "",
    "pos": "noun",
    "category": "Science",
    "level": "B1",
    "id": 2895
  },
  {
    "word": "Light year",
    "bn": "আলোকবর্ষ দূরত্বের একক",
    "phonetic": "",
    "pos": "noun",
    "category": "Science",
    "level": "B1",
    "id": 2896
  },
  {
    "word": "Superconductor",
    "bn": "অতিপরিবাহী বা সুপারকন্ডাক্টর",
    "phonetic": "",
    "pos": "noun",
    "category": "Science",
    "level": "C1",
    "id": 2897
  },
  {
    "word": "Semiconductor",
    "bn": "অর্ধপরিবাহী চিপ",
    "phonetic": "",
    "pos": "noun",
    "category": "Science",
    "level": "B2",
    "id": 2898
  },
  {
    "word": "Nanotechnology",
    "bn": "ন্যানোপ্রযুক্তি",
    "phonetic": "",
    "pos": "noun",
    "category": "Science",
    "level": "B2",
    "id": 2899
  },
  {
    "word": "Biotechnology",
    "bn": "জৈবপ্রযুক্তি",
    "phonetic": "",
    "pos": "noun",
    "category": "Science",
    "level": "B2",
    "id": 2900
  },
  {
    "word": "Quantum",
    "bn": "কোয়ান্টাম বা ক্ষুদ্রাতিক্ষুদ্র পরিমাণ",
    "phonetic": "",
    "pos": "noun",
    "category": "Science",
    "level": "B2",
    "id": 2901
  },
  {
    "word": "Artificial intelligence",
    "bn": "কৃত্রিম বুদ্ধিমত্তা",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 2902
  },
  {
    "word": "Machine learning",
    "bn": "মেশিন লার্নিং বা যান্ত্রিক শিখন",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "B1",
    "id": 2903
  },
  {
    "word": "Neural network",
    "bn": "নিউরাল নেটওয়ার্ক",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "B2",
    "id": 2904
  },
  {
    "word": "Automation",
    "bn": "স্বয়ংক্রিয়করণ",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "B1",
    "id": 2905
  },
  {
    "word": "Robotics",
    "bn": "রোবটবিজ্ঞান",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 2906
  },
  {
    "word": "Drone",
    "bn": "চালকবিহীন ড্রোন",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 2907
  },
  {
    "word": "Biometrics",
    "bn": "বায়োমেট্রিক্স বা শারীরিক শনাক্তকরণ",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "B2",
    "id": 2908
  },
  {
    "word": "Aboard",
    "bn": "যানে চড়া অবস্থায়",
    "phonetic": "",
    "pos": "adverb",
    "category": "Travel",
    "level": "A2",
    "id": 2909
  },
  {
    "word": "Abroad",
    "bn": "বিদেশ বা প্রবাসে",
    "phonetic": "",
    "pos": "adverb",
    "category": "Travel",
    "level": "A2",
    "id": 2910
  },
  {
    "word": "Absence",
    "bn": "অনুপস্থিতি",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B1",
    "id": 2911
  },
  {
    "word": "Absorb",
    "bn": "শুষে নেওয়া বা আত্মস্থ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 2912
  },
  {
    "word": "Abuse",
    "bn": "অপব্যবহার বা গালি দেওয়া",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 2913
  },
  {
    "word": "Accent",
    "bn": "উচ্চারণভঙ্গি",
    "phonetic": "",
    "pos": "noun",
    "category": "Language",
    "level": "A2",
    "id": 2914
  },
  {
    "word": "Acceptance",
    "bn": "স্বীকৃতি বা গ্রহণযোগ্যতা",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B1",
    "id": 2915
  },
  {
    "word": "Access",
    "bn": "প্রবেশাধিকার বা নাগাল",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 2916
  },
  {
    "word": "Accomplish",
    "bn": "সম্পাদন বা সফলভাবে সম্পন্ন করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 2917
  },
  {
    "word": "Accord",
    "bn": "সমঝোতা বা সম্মতি",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B2",
    "id": 2918
  },
  {
    "word": "Accumulate",
    "bn": "জমা করা বা পুঞ্জীভূত করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 2919
  },
  {
    "word": "Accuse",
    "bn": "অভিযুক্ত করা বা দোষারোপ করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B1",
    "id": 2920
  },
  {
    "word": "Achievement",
    "bn": "কৃতিত্ব বা অর্জন",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A2",
    "id": 2921
  },
  {
    "word": "Acknowledge",
    "bn": "স্বীকার করা বা প্রাপ্তি স্বীকার",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 2922
  },
  {
    "word": "Acquisition",
    "bn": "অর্জন বা ক্রয়",
    "phonetic": "",
    "pos": "noun",
    "category": "Business",
    "level": "B2",
    "id": 2923
  },
  {
    "word": "Activate",
    "bn": "সক্রিয় বা চালু করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Tech",
    "level": "A2",
    "id": 2924
  },
  {
    "word": "Actualize",
    "bn": "বাস্তবায়ন করা",
    "phonetic": "",
    "pos": "verb",
    "category": "Actions",
    "level": "B2",
    "id": 2925
  },
  {
    "word": "Adaptation",
    "bn": "অভিযোজন বা রূপান্তর",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B2",
    "id": 2926
  },
  {
    "word": "Addition",
    "bn": "যোগ বা পরিবর্ধন",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A1",
    "id": 2927
  },
  {
    "word": "Adjustment",
    "bn": "সমন্বয় বা মানিয়ে নেওয়া",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B1",
    "id": 2928
  },
  {
    "word": "Administration",
    "bn": "প্রশাসন বা পরিচালনা",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 2929
  },
  {
    "word": "Admiration",
    "bn": "প্রশংসা বা শ্রদ্ধা",
    "phonetic": "",
    "pos": "noun",
    "category": "Emotions",
    "level": "B1",
    "id": 2930
  },
  {
    "word": "Admission",
    "bn": "ভর্তি বা প্রবেশ ফি",
    "phonetic": "",
    "pos": "noun",
    "category": "Education",
    "level": "A2",
    "id": 2931
  },
  {
    "word": "Adolescence",
    "bn": "কৈশোরকাল",
    "phonetic": "",
    "pos": "noun",
    "category": "Life",
    "level": "B1",
    "id": 2932
  },
  {
    "word": "Adoption",
    "bn": "দত্তক গ্রহণ বা বরণ",
    "phonetic": "",
    "pos": "noun",
    "category": "Family",
    "level": "B1",
    "id": 2933
  },
  {
    "word": "Advancement",
    "bn": "উন্নতি বা অগ্রগতি",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B2",
    "id": 2934
  },
  {
    "word": "Adventure",
    "bn": "দুঃসাহসিক অভিযান",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 2935
  },
  {
    "word": "Adversity",
    "bn": "প্রতিকূলতা বা দুর্ভাগ্য",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B2",
    "id": 2936
  },
  {
    "word": "Advertising",
    "bn": "বিজ্ঞাপন প্রচার",
    "phonetic": "",
    "pos": "noun",
    "category": "Business",
    "level": "A2",
    "id": 2937
  },
  {
    "word": "Affection",
    "bn": "স্নেহ বা ভালোবাসা",
    "phonetic": "",
    "pos": "noun",
    "category": "Emotions",
    "level": "A2",
    "id": 2938
  },
  {
    "word": "Affirmation",
    "bn": "দৃঢ় সমর্থন বা স্বীকৃতি",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B2",
    "id": 2939
  },
  {
    "word": "Agent",
    "bn": "প্রতিনিধি বা এজেন্ট",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 2940
  },
  {
    "word": "Aggression",
    "bn": "আগ্রাসন বা আক্রমণশীলতা",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B2",
    "id": 2941
  },
  {
    "word": "Agreement",
    "bn": "চুক্তি বা ঐকমত্য",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 2942
  },
  {
    "word": "Agriculture",
    "bn": "কৃষিকাজ বা কৃষিবিদ্যা",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 2943
  },
  {
    "word": "Alarm",
    "bn": "সতর্কবার্তা বা অ্যালার্ম",
    "phonetic": "",
    "pos": "noun",
    "category": "Daily",
    "level": "A1",
    "id": 2944
  },
  {
    "word": "Alcohol",
    "bn": "মদ বা অ্যালকোহল",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 2945
  },
  {
    "word": "Allotment",
    "bn": "বরাদ্দ বা বণ্টন",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 2946
  },
  {
    "word": "Allowance",
    "bn": "ভাতা বা হাতখরচ",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "A2",
    "id": 2947
  },
  {
    "word": "Almighty",
    "bn": "সর্বশক্তিমান",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A2",
    "id": 2948
  },
  {
    "word": "Altitude",
    "bn": "উচ্চতা বা সমুদ্রপৃষ্ঠের উচ্চতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 2949
  },
  {
    "word": "Aluminium",
    "bn": "অ্যালুমিনিয়াম ধাতু",
    "phonetic": "",
    "pos": "noun",
    "category": "Materials",
    "level": "A2",
    "id": 2950
  },
  {
    "word": "Ambition",
    "bn": "উচ্চাকাঙ্ক্ষা বা লক্ষ্য",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A2",
    "id": 2951
  },
  {
    "word": "Analysis",
    "bn": "বিশ্লেষণ বা পুঙ্খানুপুঙ্খ পরীক্ষা",
    "phonetic": "",
    "pos": "noun",
    "category": "Education",
    "level": "B1",
    "id": 2952
  },
  {
    "word": "Ancestor",
    "bn": "পূর্বপুরুষ বা আদিপুরুষ",
    "phonetic": "",
    "pos": "noun",
    "category": "Family",
    "level": "B1",
    "id": 2953
  },
  {
    "word": "Announcement",
    "bn": "ঘোষণা বা বিজ্ঞপ্তি",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A2",
    "id": 2954
  },
  {
    "word": "Anxiety",
    "bn": "উদ্বেগ বা অতিরিক্ত দুশ্চিন্তা",
    "phonetic": "",
    "pos": "noun",
    "category": "Feelings",
    "level": "B1",
    "id": 2955
  },
  {
    "word": "Apology",
    "bn": "ক্ষমা প্রার্থনা বা দুঃখপ্রকাশ",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A2",
    "id": 2956
  },
  {
    "word": "Apparatus",
    "bn": "যন্ত্রপাতি বা সরঞ্জাম",
    "phonetic": "",
    "pos": "noun",
    "category": "Science",
    "level": "B2",
    "id": 2957
  },
  {
    "word": "Appearance",
    "bn": "চেহারা বা বাহ্যিক রূপ",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A2",
    "id": 2958
  },
  {
    "word": "Applicant",
    "bn": "চাকরিপ্রার্থী বা আবেদনকারী",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 2959
  },
  {
    "word": "Application",
    "bn": "দরখাস্ত বা সফটওয়্যার অ্যাপ",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A1",
    "id": 2960
  },
  {
    "word": "Appreciation",
    "bn": "কদর বা কৃতজ্ঞতা প্রকাশ",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B1",
    "id": 2961
  },
  {
    "word": "Approval",
    "bn": "অনুমোদন বা সম্মতি",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 2962
  },
  {
    "word": "Architecture",
    "bn": "স্থাপত্যবিদ্যা বা নকশা",
    "phonetic": "",
    "pos": "noun",
    "category": "Art",
    "level": "B1",
    "id": 2963
  },
  {
    "word": "Arrangement",
    "bn": "ব্যবস্থা বা আয়োজন",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A2",
    "id": 2964
  },
  {
    "word": "Arrival",
    "bn": "আগমন বা পৌঁছানো",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A1",
    "id": 2965
  },
  {
    "word": "Artisan",
    "bn": "কারিগর বা হস্তশিল্পী",
    "phonetic": "",
    "pos": "noun",
    "category": "Professions",
    "level": "B1",
    "id": 2966
  },
  {
    "word": "Ascent",
    "bn": "আরোহণ বা উপরে ওঠা",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "B2",
    "id": 2967
  },
  {
    "word": "Aspiration",
    "bn": "আকাঙ্ক্ষা বা উচ্চ স্বপ্ন",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B2",
    "id": 2968
  },
  {
    "word": "Assignment",
    "bn": "নির্দিষ্ট কার্যভার বা অ্যাসাইনমেন্ট",
    "phonetic": "",
    "pos": "noun",
    "category": "Education",
    "level": "A2",
    "id": 2969
  },
  {
    "word": "Assistance",
    "bn": "সহায়তা বা সাহায্য",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A2",
    "id": 2970
  },
  {
    "word": "Assumption",
    "bn": "অনুমান বা পূর্বধারণা",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B1",
    "id": 2971
  },
  {
    "word": "Assurance",
    "bn": "আশ্বাস বা নিশ্চয়তা",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B1",
    "id": 2972
  },
  {
    "word": "Astonishment",
    "bn": "বিস্ময় বা হতবাক হওয়া",
    "phonetic": "",
    "pos": "noun",
    "category": "Feelings",
    "level": "B2",
    "id": 2973
  },
  {
    "word": "Attachment",
    "bn": "সংযুক্তি বা মানসিক টান",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 2974
  },
  {
    "word": "Attainment",
    "bn": "অর্জন বা সাফল্যলাভ",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B2",
    "id": 2975
  },
  {
    "word": "Attempt",
    "bn": "চেষ্টা বা প্রচেষ্টা",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A2",
    "id": 2976
  },
  {
    "word": "Attendance",
    "bn": "উপস্থিতি",
    "phonetic": "",
    "pos": "noun",
    "category": "Education",
    "level": "A2",
    "id": 2977
  },
  {
    "word": "Attention",
    "bn": "মনোযোগ বা সতর্কতা",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A1",
    "id": 2978
  },
  {
    "word": "Attraction",
    "bn": "আকর্ষণ বা দর্শনীয় স্থান",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 2979
  },
  {
    "word": "Audience",
    "bn": "শ্রোতা বা দর্শকবৃন্দ",
    "phonetic": "",
    "pos": "noun",
    "category": "Entertainment",
    "level": "A2",
    "id": 2980
  },
  {
    "word": "Authority",
    "bn": "কর্তৃপক্ষ বা ক্ষমতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B1",
    "id": 2981
  },
  {
    "word": "Authorship",
    "bn": "গ্রন্থকারিত্ব বা রচয়িতা স্বত্ব",
    "phonetic": "",
    "pos": "noun",
    "category": "Art",
    "level": "B2",
    "id": 2982
  },
  {
    "word": "Availability",
    "bn": "সহজলভ্যতা বা প্রাপ্যতা",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B1",
    "id": 2983
  },
  {
    "word": "Avenue",
    "bn": "প্রশস্ত সড়ক বা উপায়",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 2984
  },
  {
    "word": "Avoidance",
    "bn": "এড়িয়ে চলা বা পরিহার",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B1",
    "id": 2985
  },
  {
    "word": "Awareness",
    "bn": "সচেতনতা বা উপলব্ধি",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B1",
    "id": 2986
  },
  {
    "word": "Backyard",
    "bn": "পেছনের উঠোন বা আঙিনা",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A1",
    "id": 2987
  },
  {
    "word": "Bacteria",
    "bn": "জীবাণু বা ব্যাকটেরিয়া",
    "phonetic": "",
    "pos": "noun",
    "category": "Science",
    "level": "A2",
    "id": 2988
  },
  {
    "word": "Balance",
    "bn": "ভারসাম্য বা জের",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "A2",
    "id": 2989
  },
  {
    "word": "Balloon",
    "bn": "বেলুন",
    "phonetic": "",
    "pos": "noun",
    "category": "Objects",
    "level": "A1",
    "id": 2990
  },
  {
    "word": "Banker",
    "bn": "ব্যাংক কর্মকর্তা",
    "phonetic": "",
    "pos": "noun",
    "category": "Professions",
    "level": "A2",
    "id": 2991
  },
  {
    "word": "Banner",
    "bn": "ব্যানার বা প্রচারপট",
    "phonetic": "",
    "pos": "noun",
    "category": "Objects",
    "level": "A2",
    "id": 2992
  },
  {
    "word": "Basement",
    "bn": "ভূগর্ভস্থ তলা",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 2993
  },
  {
    "word": "Basis",
    "bn": "ভিত্তি বা মূল কারণ",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B1",
    "id": 2994
  },
  {
    "word": "Basket",
    "bn": "ঝুড়ি বা পাত্র",
    "phonetic": "",
    "pos": "noun",
    "category": "Objects",
    "level": "A1",
    "id": 2995
  },
  {
    "word": "Battlefield",
    "bn": "যুদ্ধক্ষেত্র বা রণভূমি",
    "phonetic": "",
    "pos": "noun",
    "category": "History",
    "level": "B1",
    "id": 2996
  },
  {
    "word": "Beautician",
    "bn": "রূপবিশেষজ্ঞ বা বিউটিশিয়ান",
    "phonetic": "",
    "pos": "noun",
    "category": "Professions",
    "level": "A2",
    "id": 2997
  },
  {
    "word": "Beginning",
    "bn": "শুরু বা সূচনা",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A1",
    "id": 2998
  },
  {
    "word": "Behavior",
    "bn": "আচরণ বা চালচলন",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A2",
    "id": 2999
  },
  {
    "word": "Belief",
    "bn": "বিশ্বাস বা আস্থা",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A2",
    "id": 3000
  },
  {
    "word": "Belongings",
    "bn": "ব্যক্তিগত জিনিসপত্র",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A2",
    "id": 3001
  },
  {
    "word": "Benefit",
    "bn": "সুবিধা বা কল্যাণ",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A2",
    "id": 3002
  },
  {
    "word": "Biodata",
    "bn": "জীবনবৃত্তান্ত",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 3003
  },
  {
    "word": "Birdcage",
    "bn": "পাখির খাঁচা",
    "phonetic": "",
    "pos": "noun",
    "category": "Objects",
    "level": "A1",
    "id": 3004
  },
  {
    "word": "Birthplace",
    "bn": "জন্মস্থান বা জন্মভূমি",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "A1",
    "id": 3005
  },
  {
    "word": "Blackboard",
    "bn": "ব্ল্যাকবোর্ড বা লেখার বোর্ড",
    "phonetic": "",
    "pos": "noun",
    "category": "Education",
    "level": "A1",
    "id": 3006
  },
  {
    "word": "Blacksmith",
    "bn": "কামার বা লোহার কারিগর",
    "phonetic": "",
    "pos": "noun",
    "category": "Professions",
    "level": "A2",
    "id": 3007
  },
  {
    "word": "Blessing",
    "bn": "আশীর্বাদ বা বরকত",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A2",
    "id": 3008
  },
  {
    "word": "Blockade",
    "bn": "অবরোধ বা পথরোধ",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B2",
    "id": 3009
  },
  {
    "word": "Bloodstream",
    "bn": "রক্তপ্রবাহ",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "B1",
    "id": 3010
  },
  {
    "word": "Blossom",
    "bn": "ফুলের মুকুল বা প্রস্ফুটন",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 3011
  },
  {
    "word": "Blouse",
    "bn": "ব্লাউজ বা মেয়েদের জামা",
    "phonetic": "",
    "pos": "noun",
    "category": "Clothes",
    "level": "A1",
    "id": 3012
  },
  {
    "word": "Blueprint",
    "bn": "নকশা বা কর্মপরিকল্পনা",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "B2",
    "id": 3013
  },
  {
    "word": "Boardroom",
    "bn": "পরিচালনা পর্ষদের সভাঘর",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 3014
  },
  {
    "word": "Boatman",
    "bn": "মাঝি বা নৌকার চালক",
    "phonetic": "",
    "pos": "noun",
    "category": "Professions",
    "level": "A1",
    "id": 3015
  },
  {
    "word": "Boldness",
    "bn": "সাহসিকতা বা তেজস্বিতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Feelings",
    "level": "B1",
    "id": 3016
  },
  {
    "word": "Bondage",
    "bn": "বন্ধন বা দাসত্ব",
    "phonetic": "",
    "pos": "noun",
    "category": "History",
    "level": "B2",
    "id": 3017
  },
  {
    "word": "Bookcase",
    "bn": "বইয়ের তাক বা আলমারি",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A1",
    "id": 3018
  },
  {
    "word": "Bookmark",
    "bn": "বইয়ের বুকমার্ক বা নিশানা",
    "phonetic": "",
    "pos": "noun",
    "category": "Objects",
    "level": "A1",
    "id": 3019
  },
  {
    "word": "Bookstore",
    "bn": "বইয়ের দোকান",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "A1",
    "id": 3020
  },
  {
    "word": "Boredom",
    "bn": "একঘেয়েমি বা ক্লান্তি",
    "phonetic": "",
    "pos": "noun",
    "category": "Feelings",
    "level": "B1",
    "id": 3021
  },
  {
    "word": "Bottle",
    "bn": "বোতল বা পাত্র",
    "phonetic": "",
    "pos": "noun",
    "category": "Objects",
    "level": "A1",
    "id": 3022
  },
  {
    "word": "Bottleneck",
    "bn": "কাজে বাধা বা সংকীর্ণতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B2",
    "id": 3023
  },
  {
    "word": "Boulevard",
    "bn": "প্রশস্ত সুদৃশ্য সড়ক",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "B1",
    "id": 3024
  },
  {
    "word": "Bouquet",
    "bn": "ফুলের তোড়া",
    "phonetic": "",
    "pos": "noun",
    "category": "Objects",
    "level": "A2",
    "id": 3025
  },
  {
    "word": "Bowler",
    "bn": "বোলার বা বল নিক্ষেপকারী",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A1",
    "id": 3026
  },
  {
    "word": "Bravery",
    "bn": "বীরত্ব বা সাহস",
    "phonetic": "",
    "pos": "noun",
    "category": "Feelings",
    "level": "A2",
    "id": 3027
  },
  {
    "word": "Breadth",
    "bn": "প্রস্থ বা চওড়া মাপ",
    "phonetic": "",
    "pos": "noun",
    "category": "Math",
    "level": "B1",
    "id": 3028
  },
  {
    "word": "Breakdown",
    "bn": "বিকল হওয়া বা মানসিক পতন",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B1",
    "id": 3029
  },
  {
    "word": "Breakthrough",
    "bn": "যুগান্তকারী সাফল্য বা উদ্ভাবন",
    "phonetic": "",
    "pos": "noun",
    "category": "Science",
    "level": "B2",
    "id": 3030
  },
  {
    "word": "Breastplate",
    "bn": "বুকের বর্ম",
    "phonetic": "",
    "pos": "noun",
    "category": "History",
    "level": "B2",
    "id": 3031
  },
  {
    "word": "Breath",
    "bn": "শ্বাস বা শ্বাসপ্রশ্বাস",
    "phonetic": "",
    "pos": "noun",
    "category": "Body",
    "level": "A1",
    "id": 3032
  },
  {
    "word": "Breeze",
    "bn": "মৃদু শীতল বাতাস",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 3033
  },
  {
    "word": "Bridegroom",
    "bn": "বর বা পাত্র",
    "phonetic": "",
    "pos": "noun",
    "category": "Family",
    "level": "A2",
    "id": 3034
  },
  {
    "word": "Brightness",
    "bn": "উজ্জ্বলতা বা দীপ্তি",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 3035
  },
  {
    "word": "Broadcast",
    "bn": "সম্প্রচার বা প্রচার",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 3036
  },
  {
    "word": "Brochure",
    "bn": "তথ্যপুস্তিকা বা ব্রোশিউর",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 3037
  },
  {
    "word": "Brotherhood",
    "bn": "ভ্রাতৃত্ববোধ বা সৌহার্দ্য",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "A2",
    "id": 3038
  },
  {
    "word": "Brownie",
    "bn": "ব্রাউনি কেক মিষ্টি",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A1",
    "id": 3039
  },
  {
    "word": "Bruise",
    "bn": "কালশিটে বা আঘাতের দাগ",
    "phonetic": "",
    "pos": "noun",
    "category": "Health",
    "level": "A2",
    "id": 3040
  },
  {
    "word": "Buffet",
    "bn": "বুফে বা উন্মুক্ত খাবার টেবিল",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 3041
  },
  {
    "word": "Bugle",
    "bn": "রণশিঙা বা বিউগল বাঁশি",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "B2",
    "id": 3042
  },
  {
    "word": "Builder",
    "bn": "নির্মাতা বা ভবন কারিগর",
    "phonetic": "",
    "pos": "noun",
    "category": "Professions",
    "level": "A2",
    "id": 3043
  },
  {
    "word": "Bullock",
    "bn": "বলদ বা হালের গরু",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "A2",
    "id": 3044
  },
  {
    "word": "Bully",
    "bn": "অন্যকে হেনস্তাকারী",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "A2",
    "id": 3045
  },
  {
    "word": "Bungalow",
    "bn": "বাংলো বাড়ি বা একতলা বাড়ি",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 3046
  },
  {
    "word": "Burden",
    "bn": "বোঝা বা গুরুদায়িত্ব",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B1",
    "id": 3047
  },
  {
    "word": "Bureau",
    "bn": "সরকারি দপ্তর বা ব্যুরো",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 3048
  },
  {
    "word": "Bureaucracy",
    "bn": "আমলাতন্ত্র",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B2",
    "id": 3049
  },
  {
    "word": "Burglar",
    "bn": "সিঁধেল চোর বা গৃহচোর",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "A2",
    "id": 3050
  },
  {
    "word": "Burial",
    "bn": "কবর দেওয়া বা সমাধি",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B1",
    "id": 3051
  },
  {
    "word": "Busboy",
    "bn": "রেস্তোরাঁর থালাবাসন পরিষ্কারকারী",
    "phonetic": "",
    "pos": "noun",
    "category": "Professions",
    "level": "A2",
    "id": 3052
  },
  {
    "word": "Buttercup",
    "bn": "হলুদ বুনোফুল",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 3053
  },
  {
    "word": "Bystander",
    "bn": "পথচারী দর্শক বা প্রত্যক্ষদর্শী",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B1",
    "id": 3054
  },
  {
    "word": "Cabin",
    "bn": "জাহাজ বা ট্রেনের কেবিন",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 3055
  },
  {
    "word": "Cabinet",
    "bn": "আলমারি বা মন্ত্রিসভা",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 3056
  },
  {
    "word": "Cablegram",
    "bn": "তারবার্তা বা টেলিগ্রাফ",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "B2",
    "id": 3057
  },
  {
    "word": "Cafeteria",
    "bn": "ক্যাফেটেরিয়া বা হালকা খাবারের স্থান",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "A1",
    "id": 3058
  },
  {
    "word": "Calamity",
    "bn": "প্রাকৃতিক দুর্যোগ বা মহাবিপদ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B2",
    "id": 3059
  },
  {
    "word": "Calcium",
    "bn": "ক্যালসিয়াম খনিজ",
    "phonetic": "",
    "pos": "noun",
    "category": "Health",
    "level": "B1",
    "id": 3060
  },
  {
    "word": "Calculation",
    "bn": "গণনা বা হিসাবনিকাশ",
    "phonetic": "",
    "pos": "noun",
    "category": "Math",
    "level": "A2",
    "id": 3061
  },
  {
    "word": "Calf",
    "bn": "বাছুর বা পায়ের ডিম",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "A2",
    "id": 3062
  },
  {
    "word": "Calligraphy",
    "bn": "হাতের সুন্দর লেখা বা ক্যালিগ্রাফি",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "B2",
    "id": 3063
  },
  {
    "word": "Camaraderie",
    "bn": "সহকর্মী বন্ধুত্ব ও সৌহার্দ্য",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "C1",
    "id": 3064
  },
  {
    "word": "Camel",
    "bn": "উট প্রাণী",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "A1",
    "id": 3065
  },
  {
    "word": "Camouflage",
    "bn": "ছদ্মবেশ বা রূপগোপন",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B2",
    "id": 3066
  },
  {
    "word": "Campfire",
    "bn": "শিবিরের আগুন বা ক্যাম্পফায়ার",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A1",
    "id": 3067
  },
  {
    "word": "Canal",
    "bn": "খাল বা কৃত্রিম জলপথ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 3068
  },
  {
    "word": "Cannery",
    "bn": "খাদ্য ক্যানিং কারখানা",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "B2",
    "id": 3069
  },
  {
    "word": "Canteen",
    "bn": "ক্যান্টিন বা জলখাবারের স্থান",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "A1",
    "id": 3070
  },
  {
    "word": "Canvas",
    "bn": "চিত্রাঙ্কনের ক্যানভাস কাপড়",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "A2",
    "id": 3071
  },
  {
    "word": "Capability",
    "bn": "সক্ষমতা বা কর্মদক্ষতা",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B1",
    "id": 3072
  },
  {
    "word": "Capacity",
    "bn": "ধারণক্ষমতা বা সামর্থ্য",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B1",
    "id": 3073
  },
  {
    "word": "Capitalism",
    "bn": "পুঁজিবাদ",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B2",
    "id": 3074
  },
  {
    "word": "Capsule",
    "bn": "ক্যাপসুল ওষুধ",
    "phonetic": "",
    "pos": "noun",
    "category": "Health",
    "level": "A2",
    "id": 3075
  },
  {
    "word": "Captain",
    "bn": "অধিনায়ক বা জাহাজের প্রধান",
    "phonetic": "",
    "pos": "noun",
    "category": "Professions",
    "level": "A1",
    "id": 3076
  },
  {
    "word": "Captivity",
    "bn": "বন্দিদশা বা বন্দিত্ব",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B2",
    "id": 3077
  },
  {
    "word": "Cardiologist",
    "bn": "হৃদরোগ বিশেষজ্ঞ",
    "phonetic": "",
    "pos": "noun",
    "category": "Professions",
    "level": "B2",
    "id": 3078
  },
  {
    "word": "Caretaker",
    "bn": "তত্ত্বাবধায়ক বা কেয়ারটেকার",
    "phonetic": "",
    "pos": "noun",
    "category": "Professions",
    "level": "A2",
    "id": 3079
  },
  {
    "word": "Carnival",
    "bn": "আনন্দমেলা বা কার্নিভাল",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "A2",
    "id": 3080
  },
  {
    "word": "Carton",
    "bn": "কার্টন বা শক্ত কাগজের বাক্স",
    "phonetic": "",
    "pos": "noun",
    "category": "Objects",
    "level": "A2",
    "id": 3081
  },
  {
    "word": "Cashier",
    "bn": "ক্যাশিয়ার বা কোষাধ্যক্ষ",
    "phonetic": "",
    "pos": "noun",
    "category": "Professions",
    "level": "A1",
    "id": 3082
  },
  {
    "word": "Catering",
    "bn": "খাবার সরবরাহের ব্যবসা",
    "phonetic": "",
    "pos": "noun",
    "category": "Business",
    "level": "B1",
    "id": 3083
  },
  {
    "word": "Cavalry",
    "bn": "অশ্বারোহী সৈন্যবাহিনী",
    "phonetic": "",
    "pos": "noun",
    "category": "History",
    "level": "B2",
    "id": 3084
  },
  {
    "word": "Celebration",
    "bn": "উৎসব বা উদযাপন",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A1",
    "id": 3085
  },
  {
    "word": "Celebrity",
    "bn": "বিখ্যাত তারকা ব্যক্তি",
    "phonetic": "",
    "pos": "noun",
    "category": "Entertainment",
    "level": "A2",
    "id": 3086
  },
  {
    "word": "Cellar",
    "bn": "মাটির নিচের গুদামঘর",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "B1",
    "id": 3087
  },
  {
    "word": "Cement",
    "bn": "সিমেন্ট বা গাঁথুনির উপাদান",
    "phonetic": "",
    "pos": "noun",
    "category": "Materials",
    "level": "A2",
    "id": 3088
  },
  {
    "word": "Cemetery",
    "bn": "কবরস্থান বা শ্মশান",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "A2",
    "id": 3089
  },
  {
    "word": "Census",
    "bn": "আদমশুমারি বা জনগণনা",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B2",
    "id": 3090
  },
  {
    "word": "Centigrade",
    "bn": "সেলসিয়াস বা সেন্টিগ্রেড তাপমাত্রা",
    "phonetic": "",
    "pos": "noun",
    "category": "Science",
    "level": "A2",
    "id": 3091
  },
  {
    "word": "Centimetre",
    "bn": "সেন্টিমিটার দৈর্ঘ্যের মাপ",
    "phonetic": "",
    "pos": "noun",
    "category": "Math",
    "level": "A1",
    "id": 3092
  },
  {
    "word": "Ceremony",
    "bn": "অনুষ্ঠান বা আচার",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "A2",
    "id": 3093
  },
  {
    "word": "Certainty",
    "bn": "নিশ্চয়তা বা সুনিশ্চিত বিষয়",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B1",
    "id": 3094
  },
  {
    "word": "Certificate",
    "bn": "সনদপত্র বা সার্টিফিকেট",
    "phonetic": "",
    "pos": "noun",
    "category": "Education",
    "level": "A2",
    "id": 3095
  },
  {
    "word": "Chairman",
    "bn": "সভাপতি বা চেয়ারম্যান",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 3096
  },
  {
    "word": "Challenge",
    "bn": "চ্যালেঞ্জ বা প্রতিযোগিতামূলক বাধা",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A2",
    "id": 3097
  },
  {
    "word": "Chamber",
    "bn": "কক্ষ বা চিকিৎসকের চেম্বার",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "A2",
    "id": 3098
  },
  {
    "word": "Chancellor",
    "bn": "বিশ্ববিদ্যালয়ের আচার্য বা চ্যান্সেলর",
    "phonetic": "",
    "pos": "noun",
    "category": "Education",
    "level": "B2",
    "id": 3099
  },
  {
    "word": "Chapter",
    "bn": "অধ্যায় বা পরিচ্ছেদ",
    "phonetic": "",
    "pos": "noun",
    "category": "Education",
    "level": "A1",
    "id": 3100
  },
  {
    "word": "Character",
    "bn": "চরিত্র বা ব্যক্তিত্ব",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A2",
    "id": 3101
  },
  {
    "word": "Charity",
    "bn": "দানশীলতা বা দাতব্য সংস্থা",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "A2",
    "id": 3102
  },
  {
    "word": "Chatter",
    "bn": "অনবরত আড্ডা বা কথার গুঞ্জন",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A2",
    "id": 3103
  },
  {
    "word": "Checkpost",
    "bn": "চেকপোস্ট বা তল্লাশি চৌকি",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "A2",
    "id": 3104
  },
  {
    "word": "Cheetah",
    "bn": "চিতা বা দ্রুতগামী প্রাণী",
    "phonetic": "",
    "pos": "noun",
    "category": "Animals",
    "level": "A2",
    "id": 3105
  },
  {
    "word": "Chemist",
    "bn": "রসায়নবিদ বা ওষুধ বিক্রেতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Professions",
    "level": "A2",
    "id": 3106
  },
  {
    "word": "Chemistry",
    "bn": "রসায়ন বিজ্ঞান",
    "phonetic": "",
    "pos": "noun",
    "category": "Science",
    "level": "A2",
    "id": 3107
  },
  {
    "word": "Childhood",
    "bn": "শৈশবকাল",
    "phonetic": "",
    "pos": "noun",
    "category": "Family",
    "level": "A1",
    "id": 3108
  },
  {
    "word": "Chimney",
    "bn": "চিমনি বা ধোঁয়া বের হওয়ার নল",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 3109
  },
  {
    "word": "Chlorine",
    "bn": "ক্লোরিন গ্যাস বা জীবাণুনাশক",
    "phonetic": "",
    "pos": "noun",
    "category": "Science",
    "level": "B1",
    "id": 3110
  },
  {
    "word": "Choir",
    "bn": "গায়কদল বা কোরাস",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "B1",
    "id": 3111
  },
  {
    "word": "Choreography",
    "bn": "নৃত্যের রূপরেখা বা কোরিওগ্রাফি",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "B2",
    "id": 3112
  },
  {
    "word": "Chronicle",
    "bn": "ধারাবাহিক ইতিহাস বা উপাখ্যান",
    "phonetic": "",
    "pos": "noun",
    "category": "History",
    "level": "B2",
    "id": 3113
  },
  {
    "word": "Chrysalis",
    "bn": "গুটিপোকার অবস্থা",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B2",
    "id": 3114
  },
  {
    "word": "Cinnamon",
    "bn": "দারুচিনি মশলা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A2",
    "id": 3115
  },
  {
    "word": "Circulation",
    "bn": "রক্ত সঞ্চালন বা পত্রিকার প্রচার সংখ্যা",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B1",
    "id": 3116
  },
  {
    "word": "Circumstance",
    "bn": "পরিস্থিতি বা অবস্থা",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B1",
    "id": 3117
  },
  {
    "word": "Circus",
    "bn": "সার্কাস খেলা",
    "phonetic": "",
    "pos": "noun",
    "category": "Entertainment",
    "level": "A1",
    "id": 3118
  },
  {
    "word": "Citizenship",
    "bn": "নাগরিকত্ব",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B1",
    "id": 3119
  },
  {
    "word": "Civilization",
    "bn": "সভ্যতা",
    "phonetic": "",
    "pos": "noun",
    "category": "History",
    "level": "B1",
    "id": 3120
  },
  {
    "word": "Classmate",
    "bn": "সহপাঠী বা ক্লাসের বন্ধু",
    "phonetic": "",
    "pos": "noun",
    "category": "Education",
    "level": "A1",
    "id": 3121
  },
  {
    "word": "Classroom",
    "bn": "শ্রেণিকক্ষ",
    "phonetic": "",
    "pos": "noun",
    "category": "Education",
    "level": "A1",
    "id": 3122
  },
  {
    "word": "Clergyman",
    "bn": "ধর্মযাজক বা পুরোহিত",
    "phonetic": "",
    "pos": "noun",
    "category": "Professions",
    "level": "B1",
    "id": 3123
  },
  {
    "word": "Cleverness",
    "bn": "চাতুর্য বা বুদ্ধিমত্তা",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A2",
    "id": 3124
  },
  {
    "word": "Cliff",
    "bn": "খাড়া পাহাড়ের প্রান্ত",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "B1",
    "id": 3125
  },
  {
    "word": "Climate",
    "bn": "জলবায়ু",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 3126
  },
  {
    "word": "Cloakroom",
    "bn": "পোশাক বা ব্যাগ রাখার কক্ষ",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "B1",
    "id": 3127
  },
  {
    "word": "Clockwork",
    "bn": "ঘড়ির ভেতরের যন্ত্রপাতি বা সুশৃঙ্খল",
    "phonetic": "",
    "pos": "noun",
    "category": "Objects",
    "level": "B1",
    "id": 3128
  },
  {
    "word": "Clover",
    "bn": "তিপাত্তা ঘাস বা ক্লোভার",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 3129
  },
  {
    "word": "Coaching",
    "bn": "কোচিং বা নিবিড় প্রশিক্ষণ",
    "phonetic": "",
    "pos": "noun",
    "category": "Education",
    "level": "A2",
    "id": 3130
  },
  {
    "word": "Cobbler",
    "bn": "মুচি বা জুতো মেরামতকারী",
    "phonetic": "",
    "pos": "noun",
    "category": "Professions",
    "level": "A2",
    "id": 3131
  },
  {
    "word": "Cockpit",
    "bn": "বিমানের চালকের কেবিন",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "B1",
    "id": 3132
  },
  {
    "word": "Coconut",
    "bn": "নারকেল ফল",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A1",
    "id": 3133
  },
  {
    "word": "Coffeehouse",
    "bn": "কফি হাউস বা আড্ডার স্থান",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "A1",
    "id": 3134
  },
  {
    "word": "Coincidence",
    "bn": "কাকতালীয় ঘটনা",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B1",
    "id": 3135
  },
  {
    "word": "Collaboration",
    "bn": "যৌথ সহযোগিতা বা কোলাবোরেশন",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 3136
  },
  {
    "word": "Collection",
    "bn": "সংগ্রহ বা সংকলন",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A2",
    "id": 3137
  },
  {
    "word": "College",
    "bn": "কলেজ বা মহাবিদ্যালয়",
    "phonetic": "",
    "pos": "noun",
    "category": "Education",
    "level": "A1",
    "id": 3138
  },
  {
    "word": "Collision",
    "bn": "সংঘর্ষ বা ধাক্কা",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B1",
    "id": 3139
  },
  {
    "word": "Colony",
    "bn": "উপনিবেশ বা উপনিবেশিক বসতি",
    "phonetic": "",
    "pos": "noun",
    "category": "History",
    "level": "B1",
    "id": 3140
  },
  {
    "word": "Combustion",
    "bn": "দহন বা জ্বলে ওঠার প্রক্রিয়া",
    "phonetic": "",
    "pos": "noun",
    "category": "Science",
    "level": "B2",
    "id": 3141
  },
  {
    "word": "Comedian",
    "bn": "কৌতুক অভিনেতা বা ভাঁড়",
    "phonetic": "",
    "pos": "noun",
    "category": "Professions",
    "level": "A2",
    "id": 3142
  },
  {
    "word": "Commander",
    "bn": "সেনাপতি বা দলনেতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Professions",
    "level": "B1",
    "id": 3143
  },
  {
    "word": "Commerce",
    "bn": "বাণিজ্য বা ব্যবসা-বাণিজ্য",
    "phonetic": "",
    "pos": "noun",
    "category": "Business",
    "level": "B1",
    "id": 3144
  },
  {
    "word": "Commitment",
    "bn": "অঙ্গীকার বা প্রতিশ্রুতি",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B1",
    "id": 3145
  },
  {
    "word": "Committee",
    "bn": "কমিটি বা পরিচালনা পর্ষদ",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 3146
  },
  {
    "word": "Communication",
    "bn": "যোগাযোগ বা ভাব বিনিময়",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A2",
    "id": 3147
  },
  {
    "word": "Community",
    "bn": "সম্প্রদায় বা জনসমাজ",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "A2",
    "id": 3148
  },
  {
    "word": "Companion",
    "bn": "সাথী বা সহযাত্রী",
    "phonetic": "",
    "pos": "noun",
    "category": "Family",
    "level": "A2",
    "id": 3149
  },
  {
    "word": "Comparison",
    "bn": "তুলনা",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A2",
    "id": 3150
  },
  {
    "word": "Compassion",
    "bn": "করুণা বা গভীর সহমর্মিতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Feelings",
    "level": "B1",
    "id": 3151
  },
  {
    "word": "Competence",
    "bn": "যোগ্যতা বা কাজের দক্ষতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B2",
    "id": 3152
  },
  {
    "word": "Competition",
    "bn": "প্রতিযোগিতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A2",
    "id": 3153
  },
  {
    "word": "Competitor",
    "bn": "প্রতিদ্বন্দ্বী বা প্রতিযোগী",
    "phonetic": "",
    "pos": "noun",
    "category": "Sports",
    "level": "A2",
    "id": 3154
  },
  {
    "word": "Complainer",
    "bn": "নালিশকারী বা অভিযোগকারী",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A2",
    "id": 3155
  },
  {
    "word": "Composition",
    "bn": "রচনা বা উপাদান সমন্বয়",
    "phonetic": "",
    "pos": "noun",
    "category": "Education",
    "level": "A2",
    "id": 3156
  },
  {
    "word": "Concentration",
    "bn": "মনোযোগ বা ঘনমাত্রা",
    "phonetic": "",
    "pos": "noun",
    "category": "Education",
    "level": "B1",
    "id": 3157
  },
  {
    "word": "Conclusion",
    "bn": "উপসংহার বা সমাপ্তি",
    "phonetic": "",
    "pos": "noun",
    "category": "Education",
    "level": "A2",
    "id": 3158
  },
  {
    "word": "Condition",
    "bn": "অবস্থা বা শর্ত",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A2",
    "id": 3159
  },
  {
    "word": "Conference",
    "bn": "সম্মেলন বা কনফারেন্স",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 3160
  },
  {
    "word": "Confidence",
    "bn": "আত্মবিশ্বাস বা ভরসা",
    "phonetic": "",
    "pos": "noun",
    "category": "Feelings",
    "level": "A2",
    "id": 3161
  },
  {
    "word": "Confirmation",
    "bn": "নিশ্চিতকরণ বা অনুমোদন",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A2",
    "id": 3162
  },
  {
    "word": "Conflict",
    "bn": "সংঘাত বা দ্বন্দ্ব",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B1",
    "id": 3163
  },
  {
    "word": "Congratulation",
    "bn": "অভিনন্দন",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A1",
    "id": 3164
  },
  {
    "word": "Congress",
    "bn": "সম্মেলন বা কংগ্রেস পরিষদ",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B1",
    "id": 3165
  },
  {
    "word": "Connection",
    "bn": "সংযোগ বা যোগাযোগ",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 3166
  },
  {
    "word": "Consequence",
    "bn": "পরিণতি বা ফলাফল",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B1",
    "id": 3167
  },
  {
    "word": "Construction",
    "bn": "নির্মাণকাজ বা পরিকাঠামো",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 3168
  },
  {
    "word": "Consultant",
    "bn": "পরামর্শক বা বিশেষজ্ঞ",
    "phonetic": "",
    "pos": "noun",
    "category": "Professions",
    "level": "B1",
    "id": 3169
  },
  {
    "word": "Consumer",
    "bn": "ভোক্তা বা ক্রেতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Business",
    "level": "A2",
    "id": 3170
  },
  {
    "word": "Contagion",
    "bn": "ছোঁয়াচে রোগ বা সংক্রমণ",
    "phonetic": "",
    "pos": "noun",
    "category": "Health",
    "level": "B2",
    "id": 3171
  },
  {
    "word": "Continent",
    "bn": "মহাদেশ",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "A1",
    "id": 3172
  },
  {
    "word": "Contribution",
    "bn": "অবদান বা চাঁদা",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B1",
    "id": 3173
  },
  {
    "word": "Controller",
    "bn": "নিয়ন্ত্রক বা রিমোট",
    "phonetic": "",
    "pos": "noun",
    "category": "Tech",
    "level": "A2",
    "id": 3174
  },
  {
    "word": "Controversy",
    "bn": "বিতর্ক বা মতভেদ",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B1",
    "id": 3175
  },
  {
    "word": "Convenience",
    "bn": "সুবিধা বা সাচ্ছন্দ্য",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A2",
    "id": 3176
  },
  {
    "word": "Conversation",
    "bn": "কথোপকথন বা আলাপচারিতা",
    "phonetic": "",
    "pos": "noun",
    "category": "Language",
    "level": "A1",
    "id": 3177
  },
  {
    "word": "Cooperation",
    "bn": "পারস্পরিক সহযোগিতা",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "A2",
    "id": 3178
  },
  {
    "word": "Coordination",
    "bn": "সমন্বয়সাধন",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "B1",
    "id": 3179
  },
  {
    "word": "Corridor",
    "bn": "করিডোর বা বারান্দাপথ",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 3180
  },
  {
    "word": "Corruption",
    "bn": "দুর্নীতি বা অনিয়ম",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "A2",
    "id": 3181
  },
  {
    "word": "Cosmetics",
    "bn": "প্রসাধন সামগ্রী",
    "phonetic": "",
    "pos": "noun",
    "category": "Shopping",
    "level": "A2",
    "id": 3182
  },
  {
    "word": "Costume",
    "bn": "পোশাক বা নাটকের বেশভূষা",
    "phonetic": "",
    "pos": "noun",
    "category": "Clothes",
    "level": "A2",
    "id": 3183
  },
  {
    "word": "Cottage",
    "bn": "কুটির বা ছোট গ্রাম্য বাড়ি",
    "phonetic": "",
    "pos": "noun",
    "category": "Home",
    "level": "A2",
    "id": 3184
  },
  {
    "word": "Council",
    "bn": "পরিষদ বা কাউন্সিল",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B1",
    "id": 3185
  },
  {
    "word": "Courier",
    "bn": "কুরিয়ার বা দ্রুত বার্তা ও পার্সেল বাহক",
    "phonetic": "",
    "pos": "noun",
    "category": "Workplace",
    "level": "A2",
    "id": 3186
  },
  {
    "word": "Coverage",
    "bn": "সংবাদ পরিবেশন বা বীমা কভারেজ",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B1",
    "id": 3187
  },
  {
    "word": "Creativity",
    "bn": "সৃজনশীলতা বা সৃষ্টিশীল প্রতিভা",
    "phonetic": "",
    "pos": "noun",
    "category": "Arts",
    "level": "A2",
    "id": 3188
  },
  {
    "word": "Credibility",
    "bn": "বিশ্বাসযোগ্যতা বা সুনাম",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B2",
    "id": 3189
  },
  {
    "word": "Credit",
    "bn": "ঋণ বা কৃতিত্ব",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "A2",
    "id": 3190
  },
  {
    "word": "Criminal",
    "bn": "অপরাধী",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "A2",
    "id": 3191
  },
  {
    "word": "Criticism",
    "bn": "সমালোচনা বা দোষত্রুটি বিচার",
    "phonetic": "",
    "pos": "noun",
    "category": "General",
    "level": "B1",
    "id": 3192
  },
  {
    "word": "Crossroad",
    "bn": "চৌরাস্তা বা সংযোগস্থল",
    "phonetic": "",
    "pos": "noun",
    "category": "Places",
    "level": "A2",
    "id": 3193
  },
  {
    "word": "Crown",
    "bn": "মুকুট বা রাজমুকুট",
    "phonetic": "",
    "pos": "noun",
    "category": "Objects",
    "level": "A2",
    "id": 3194
  },
  {
    "word": "Cruelty",
    "bn": "নিষ্ঠুরতা বা নির্দয়তা",
    "phonetic": "",
    "pos": "noun",
    "category": "Feelings",
    "level": "B1",
    "id": 3195
  },
  {
    "word": "Cruise",
    "bn": "নৌভ্রমণ বা বিলাসবহুল জাহাজ ভ্রমণ",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "A2",
    "id": 3196
  },
  {
    "word": "Cucumber",
    "bn": "শসা",
    "phonetic": "",
    "pos": "noun",
    "category": "Food",
    "level": "A1",
    "id": 3197
  },
  {
    "word": "Culprit",
    "bn": "অপরাধী বা মূল দোষী ব্যক্তি",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "B1",
    "id": 3198
  },
  {
    "word": "Cultivation",
    "bn": "চাষাবাদ বা ফসলোৎপাদন",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 3199
  },
  {
    "word": "Culture",
    "bn": "সংস্কৃতি বা কৃষ্টি",
    "phonetic": "",
    "pos": "noun",
    "category": "Society",
    "level": "A2",
    "id": 3200
  },
  {
    "word": "Curiosity",
    "bn": "কৌতূহল বা জানার আগ্রহ",
    "phonetic": "",
    "pos": "noun",
    "category": "Feelings",
    "level": "A2",
    "id": 3201
  },
  {
    "word": "Currency",
    "bn": "মুদ্রা বা ব্যাংক নোট",
    "phonetic": "",
    "pos": "noun",
    "category": "Finance",
    "level": "A2",
    "id": 3202
  },
  {
    "word": "Current",
    "bn": "স্রোত বা বিদ্যুৎপ্রবাহ",
    "phonetic": "",
    "pos": "noun",
    "category": "Nature",
    "level": "A2",
    "id": 3203
  },
  {
    "word": "Customs",
    "bn": "শুল্ক বিভাগ বা প্রথা",
    "phonetic": "",
    "pos": "noun",
    "category": "Travel",
    "level": "B1",
    "id": 3204
  },
  {
    "word": "Cylinder",
    "bn": "সিলিন্ডার বা চোঙা",
    "phonetic": "",
    "pos": "noun",
    "category": "Objects",
    "level": "A2",
    "id": 3205
  }
] as unknown) as WordItem[];

export const ALL_CATEGORIES: string[] = Array.from(new Set(ALL_WORDS_DATABASE.map((w: WordItem): string => w.category)));
