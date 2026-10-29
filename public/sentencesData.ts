export interface SentenceItem {
  id: number;
  category: string;
  en: string;
  bn: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
}

export const SENTENCE_BANK: SentenceItem[] = [
  {
    "category": "Greetings",
    "en": "How have you been?",
    "bn": "আপনি কেমন ছিলেন?",
    "level": "A1",
    "id": 1
  },
  {
    "category": "Greetings",
    "en": "It is nice to see you again.",
    "bn": "আবার দেখা হয়ে ভালো লাগল।",
    "level": "A1",
    "id": 2
  },
  {
    "category": "Greetings",
    "en": "Let me introduce myself.",
    "bn": "আমাকে নিজের পরিচয় দিতে দিন।",
    "level": "A1",
    "id": 3
  },
  {
    "category": "Greetings",
    "en": "I am glad to meet you.",
    "bn": "আপনার সাথে পরিচিত হয়ে খুশি।",
    "level": "A1",
    "id": 4
  },
  {
    "category": "Greetings",
    "en": "Thank you for your help.",
    "bn": "আপনার সাহায্যের জন্য ধন্যবাদ।",
    "level": "A1",
    "id": 5
  },
  {
    "category": "Greetings",
    "en": "I am sorry for being late.",
    "bn": "দেরি করার জন্য দুঃখিত।",
    "level": "A1",
    "id": 6
  },
  {
    "category": "Greetings",
    "en": "Have a nice day.",
    "bn": "আপনার দিনটি শুভ হোক।",
    "level": "A1",
    "id": 7
  },
  {
    "category": "Daily",
    "en": "I usually wake up at six.",
    "bn": "আমি সাধারণত ছয়টায় উঠি।",
    "level": "A1",
    "id": 8
  },
  {
    "category": "Daily",
    "en": "I have breakfast at eight.",
    "bn": "আমি আটটায় সকালের নাস্তা করি।",
    "level": "A1",
    "id": 9
  },
  {
    "category": "Daily",
    "en": "I go to work by bus.",
    "bn": "আমি বাসে করে কাজে যাই।",
    "level": "A1",
    "id": 10
  },
  {
    "category": "Daily",
    "en": "I am watching TV right now.",
    "bn": "আমি এখন টিভি দেখছি।",
    "level": "A1",
    "id": 11
  },
  {
    "category": "Daily",
    "en": "She is cooking dinner.",
    "bn": "সে রাতের খাবার রান্না করছে।",
    "level": "A1",
    "id": 12
  },
  {
    "category": "Daily",
    "en": "We play football on Fridays.",
    "bn": "আমরা শুক্রবারে ফুটবল খেলি।",
    "level": "A1",
    "id": 13
  },
  {
    "category": "Daily",
    "en": "I go to bed at eleven.",
    "bn": "আমি এগারোটায় ঘুমাতে যাই।",
    "level": "A1",
    "id": 14
  },
  {
    "category": "Shopping",
    "en": "How much is this shirt?",
    "bn": "এই শার্টটির দাম কত?",
    "level": "A1",
    "id": 15
  },
  {
    "category": "Shopping",
    "en": "It is too expensive for me.",
    "bn": "এটা আমার জন্য অনেক দামি।",
    "level": "A1",
    "id": 16
  },
  {
    "category": "Shopping",
    "en": "Do you have this in a bigger size?",
    "bn": "এটা কি বড় সাইজে আছে?",
    "level": "A1",
    "id": 17
  },
  {
    "category": "Shopping",
    "en": "Can I pay by card?",
    "bn": "আমি কি কার্ডে টাকা দিতে পারি?",
    "level": "A1",
    "id": 18
  },
  {
    "category": "Shopping",
    "en": "Please give me a receipt.",
    "bn": "দয়া করে আমাকে একটা রসিদ দিন।",
    "level": "A1",
    "id": 19
  },
  {
    "category": "Shopping",
    "en": "I am just looking, thank you.",
    "bn": "আমি শুধু দেখছি, ধন্যবাদ।",
    "level": "A1",
    "id": 20
  },
  {
    "category": "Shopping",
    "en": "Could you give me a discount?",
    "bn": "আপনি কি আমাকে ছাড় দিতে পারেন?",
    "level": "A1",
    "id": 21
  },
  {
    "category": "Travel",
    "en": "Which bus goes to the station?",
    "bn": "কোন বাসটি স্টেশনে যায়?",
    "level": "A1",
    "id": 22
  },
  {
    "category": "Travel",
    "en": "How long does it take to get there?",
    "bn": "সেখানে যেতে কতক্ষণ লাগে?",
    "level": "A1",
    "id": 23
  },
  {
    "category": "Travel",
    "en": "Please stop here.",
    "bn": "দয়া করে এখানে থামুন।",
    "level": "A1",
    "id": 24
  },
  {
    "category": "Travel",
    "en": "I have lost my passport.",
    "bn": "আমি আমার পাসপোর্ট হারিয়ে ফেলেছি।",
    "level": "A1",
    "id": 25
  },
  {
    "category": "Travel",
    "en": "Is this seat taken?",
    "bn": "এই সিটটি কি খালি?",
    "level": "A1",
    "id": 26
  },
  {
    "category": "Travel",
    "en": "Turn left at the corner.",
    "bn": "মোড়ে বামে ঘুরুন।",
    "level": "A1",
    "id": 27
  },
  {
    "category": "Travel",
    "en": "I would like to book a room.",
    "bn": "আমি একটি রুম বুক করতে চাই।",
    "level": "A1",
    "id": 28
  },
  {
    "category": "Travel",
    "en": "What time does the train leave?",
    "bn": "ট্রেন কয়টায় ছাড়ে?",
    "level": "A1",
    "id": 29
  },
  {
    "category": "Office",
    "en": "I would like to schedule a meeting.",
    "bn": "আমি একটি মিটিং ঠিক করতে চাই।",
    "level": "A1",
    "id": 30
  },
  {
    "category": "Office",
    "en": "Could you send me the report?",
    "bn": "আপনি কি আমাকে প্রতিবেদনটি পাঠাতে পারেন?",
    "level": "A1",
    "id": 31
  },
  {
    "category": "Office",
    "en": "I will get back to you soon.",
    "bn": "আমি শীঘ্রই আপনাকে জানাব।",
    "level": "A1",
    "id": 32
  },
  {
    "category": "Office",
    "en": "The deadline is next Monday.",
    "bn": "সময়সীমা আগামী সোমবার।",
    "level": "A1",
    "id": 33
  },
  {
    "category": "Office",
    "en": "I agree with your idea.",
    "bn": "আমি আপনার ধারণার সাথে একমত।",
    "level": "A1",
    "id": 34
  },
  {
    "category": "Office",
    "en": "Let us discuss this tomorrow.",
    "bn": "চলুন এটা আগামীকাল আলোচনা করি।",
    "level": "A1",
    "id": 35
  },
  {
    "category": "Office",
    "en": "I need more time to finish this.",
    "bn": "এটা শেষ করতে আমার আরও সময় দরকার।",
    "level": "A1",
    "id": 36
  },
  {
    "category": "Office",
    "en": "Thank you for your valuable feedback.",
    "bn": "আপনার মূল্যবান মতামতের জন্য ধন্যবাদ।",
    "level": "A1",
    "id": 37
  },
  {
    "category": "Health",
    "en": "I have a headache.",
    "bn": "আমার মাথাব্যথা করছে।",
    "level": "A1",
    "id": 38
  },
  {
    "category": "Health",
    "en": "I need to see a doctor.",
    "bn": "আমাকে ডাক্তার দেখাতে হবে।",
    "level": "A1",
    "id": 39
  },
  {
    "category": "Health",
    "en": "Take this medicine twice a day.",
    "bn": "এই ওষুধ দিনে দুইবার খান।",
    "level": "A1",
    "id": 40
  },
  {
    "category": "Health",
    "en": "You should drink more water.",
    "bn": "আপনার আরও পানি পান করা উচিত।",
    "level": "A1",
    "id": 41
  },
  {
    "category": "Health",
    "en": "I feel dizzy.",
    "bn": "আমার মাথা ঘুরছে।",
    "level": "A1",
    "id": 42
  },
  {
    "category": "Health",
    "en": "Please call an ambulance.",
    "bn": "দয়া করে অ্যাম্বুলেন্স ডাকুন।",
    "level": "A1",
    "id": 43
  },
  {
    "category": "Health",
    "en": "Get well soon.",
    "bn": "তাড়াতাড়ি সুস্থ হয়ে উঠুন।",
    "level": "A1",
    "id": 44
  },
  {
    "category": "Opinions",
    "en": "In my opinion, this is a good plan.",
    "bn": "আমার মতে, এটা ভালো পরিকল্পনা।",
    "level": "A1",
    "id": 45
  },
  {
    "category": "Opinions",
    "en": "I do not agree with you.",
    "bn": "আমি আপনার সাথে একমত নই।",
    "level": "A1",
    "id": 46
  },
  {
    "category": "Opinions",
    "en": "That sounds interesting.",
    "bn": "এটা শুনতে মজার লাগছে।",
    "level": "A1",
    "id": 47
  },
  {
    "category": "Opinions",
    "en": "I am not sure about that.",
    "bn": "এ বিষয়ে আমি নিশ্চিত নই।",
    "level": "A1",
    "id": 48
  },
  {
    "category": "Opinions",
    "en": "It depends on the situation.",
    "bn": "এটা পরিস্থিতির উপর নির্ভর করে।",
    "level": "A1",
    "id": 49
  },
  {
    "category": "Opinions",
    "en": "I hope everything goes well.",
    "bn": "আশা করি সব ভালো হবে।",
    "level": "A1",
    "id": 50
  },
  {
    "category": "Opinions",
    "en": "I am proud of you.",
    "bn": "আমি তোমার জন্য গর্বিত।",
    "level": "A1",
    "id": 51
  },
  {
    "category": "Family",
    "en": "My family is very close.",
    "bn": "আমার পরিবার খুব ঘনিষ্ঠ।",
    "level": "A1",
    "id": 52
  },
  {
    "category": "Family",
    "en": "I live with my parents.",
    "bn": "আমি বাবা-মায়ের সাথে থাকি।",
    "level": "A1",
    "id": 53
  },
  {
    "category": "Family",
    "en": "My brother is older than me.",
    "bn": "আমার ভাই আমার চেয়ে বড়।",
    "level": "A1",
    "id": 54
  },
  {
    "category": "Family",
    "en": "She is my younger sister.",
    "bn": "সে আমার ছোট বোন।",
    "level": "A1",
    "id": 55
  },
  {
    "category": "Family",
    "en": "We visit our grandparents every Friday.",
    "bn": "আমরা প্রতি শুক্রবার দাদা-দাদির কাছে যাই।",
    "level": "A1",
    "id": 56
  },
  {
    "category": "Family",
    "en": "My mother cooks very well.",
    "bn": "আমার মা খুব ভালো রান্না করেন।",
    "level": "A1",
    "id": 57
  },
  {
    "category": "Family",
    "en": "He has two children.",
    "bn": "তার দুইটি সন্তান আছে।",
    "level": "A1",
    "id": 58
  },
  {
    "category": "Family",
    "en": "Do you have any brothers or sisters?",
    "bn": "তোমার কি কোনো ভাইবোন আছে?",
    "level": "A1",
    "id": 59
  },
  {
    "category": "Family",
    "en": "My father works in a bank.",
    "bn": "আমার বাবা ব্যাংকে কাজ করেন।",
    "level": "A1",
    "id": 60
  },
  {
    "category": "Family",
    "en": "We are having guests today.",
    "bn": "আজ আমাদের বাড়িতে অতিথি আসছেন।",
    "level": "A1",
    "id": 61
  },
  {
    "category": "Food",
    "en": "I am very hungry.",
    "bn": "আমি খুব ক্ষুধার্ত।",
    "level": "A1",
    "id": 62
  },
  {
    "category": "Food",
    "en": "What would you like to eat?",
    "bn": "আপনি কী খেতে চান?",
    "level": "A1",
    "id": 63
  },
  {
    "category": "Food",
    "en": "The food is really tasty.",
    "bn": "খাবারটা সত্যিই সুস্বাদু।",
    "level": "A1",
    "id": 64
  },
  {
    "category": "Food",
    "en": "Can I have some more rice?",
    "bn": "আমি কি আরও একটু ভাত পেতে পারি?",
    "level": "A1",
    "id": 65
  },
  {
    "category": "Food",
    "en": "I do not eat spicy food.",
    "bn": "আমি ঝাল খাবার খাই না।",
    "level": "A1",
    "id": 66
  },
  {
    "category": "Food",
    "en": "Please bring me a glass of water.",
    "bn": "দয়া করে আমাকে এক গ্লাস পানি দিন।",
    "level": "A1",
    "id": 67
  },
  {
    "category": "Food",
    "en": "I am allergic to peanuts.",
    "bn": "আমার চিনাবাদামে অ্যালার্জি আছে।",
    "level": "A1",
    "id": 68
  },
  {
    "category": "Food",
    "en": "Let us order something to eat.",
    "bn": "চলুন খাওয়ার জন্য কিছু অর্ডার করি।",
    "level": "A1",
    "id": 69
  },
  {
    "category": "Food",
    "en": "I usually drink tea in the evening.",
    "bn": "আমি সাধারণত সন্ধ্যায় চা খাই।",
    "level": "A1",
    "id": 70
  },
  {
    "category": "Food",
    "en": "This soup is too hot.",
    "bn": "এই স্যুপটা অনেক গরম।",
    "level": "A1",
    "id": 71
  },
  {
    "category": "School",
    "en": "Open your books, please.",
    "bn": "দয়া করে তোমাদের বই খোলো।",
    "level": "A1",
    "id": 72
  },
  {
    "category": "School",
    "en": "I did not understand the lesson.",
    "bn": "আমি পাঠটি বুঝতে পারিনি।",
    "level": "A1",
    "id": 73
  },
  {
    "category": "School",
    "en": "Can you explain it again?",
    "bn": "আপনি কি আবার বুঝিয়ে বলতে পারেন?",
    "level": "A1",
    "id": 74
  },
  {
    "category": "School",
    "en": "I have an exam tomorrow.",
    "bn": "আমার আগামীকাল পরীক্ষা আছে।",
    "level": "A1",
    "id": 75
  },
  {
    "category": "School",
    "en": "Please write your name here.",
    "bn": "দয়া করে এখানে আপনার নাম লিখুন।",
    "level": "A1",
    "id": 76
  },
  {
    "category": "School",
    "en": "She studies English every night.",
    "bn": "সে প্রতি রাতে ইংরেজি পড়ে।",
    "level": "A1",
    "id": 77
  },
  {
    "category": "School",
    "en": "I forgot my homework at home.",
    "bn": "আমি বাড়িতে হোমওয়ার্ক ভুলে এসেছি।",
    "level": "A1",
    "id": 78
  },
  {
    "category": "School",
    "en": "May I ask a question?",
    "bn": "আমি কি একটি প্রশ্ন করতে পারি?",
    "level": "A1",
    "id": 79
  },
  {
    "category": "School",
    "en": "The class starts at nine.",
    "bn": "ক্লাস নয়টায় শুরু হয়।",
    "level": "A1",
    "id": 80
  },
  {
    "category": "School",
    "en": "You did a great job.",
    "bn": "তুমি দারুণ করেছ।",
    "level": "A1",
    "id": 81
  },
  {
    "category": "Weather",
    "en": "It is very hot today.",
    "bn": "আজ খুব গরম।",
    "level": "A1",
    "id": 82
  },
  {
    "category": "Weather",
    "en": "It looks like it will rain.",
    "bn": "মনে হচ্ছে বৃষ্টি হবে।",
    "level": "A1",
    "id": 83
  },
  {
    "category": "Weather",
    "en": "The weather is nice.",
    "bn": "আবহাওয়াটা সুন্দর।",
    "level": "A1",
    "id": 84
  },
  {
    "category": "Weather",
    "en": "It is cold in the morning.",
    "bn": "সকালে ঠান্ডা থাকে।",
    "level": "A1",
    "id": 85
  },
  {
    "category": "Weather",
    "en": "Do not forget your umbrella.",
    "bn": "ছাতা নিতে ভুলবেন না।",
    "level": "A1",
    "id": 86
  },
  {
    "category": "Weather",
    "en": "There was a big storm last night.",
    "bn": "গত রাতে বড় ঝড় হয়েছিল।",
    "level": "A1",
    "id": 87
  },
  {
    "category": "Weather",
    "en": "The sun is shining.",
    "bn": "সূর্য উঠেছে।",
    "level": "A1",
    "id": 88
  },
  {
    "category": "Weather",
    "en": "Winter is my favorite season.",
    "bn": "শীত আমার প্রিয় ঋতু।",
    "level": "A1",
    "id": 89
  },
  {
    "category": "Friends",
    "en": "What are you doing this weekend?",
    "bn": "এই সপ্তাহান্তে তুমি কী করছ?",
    "level": "A1",
    "id": 90
  },
  {
    "category": "Friends",
    "en": "Do you want to come with me?",
    "bn": "তুমি কি আমার সাথে আসতে চাও?",
    "level": "A1",
    "id": 91
  },
  {
    "category": "Friends",
    "en": "I had a great time today.",
    "bn": "আজ আমার সময়টা দারুণ কেটেছে।",
    "level": "A1",
    "id": 92
  },
  {
    "category": "Friends",
    "en": "You can count on me.",
    "bn": "তুমি আমার উপর ভরসা করতে পারো।",
    "level": "A1",
    "id": 93
  },
  {
    "category": "Friends",
    "en": "Let us take a photo together.",
    "bn": "চলুন একসাথে একটা ছবি তুলি।",
    "level": "A1",
    "id": 94
  },
  {
    "category": "Friends",
    "en": "I miss my old friends.",
    "bn": "আমি আমার পুরনো বন্ধুদের মিস করি।",
    "level": "A1",
    "id": 95
  },
  {
    "category": "Friends",
    "en": "Why are you so quiet today?",
    "bn": "আজ তুমি এত চুপ কেন?",
    "level": "A1",
    "id": 96
  },
  {
    "category": "Friends",
    "en": "That is a good idea.",
    "bn": "এটা ভালো একটা ধারণা।",
    "level": "A1",
    "id": 97
  },
  {
    "category": "Friends",
    "en": "I am sorry, I did not mean it.",
    "bn": "দুঃখিত, আমি ইচ্ছা করে বলিনি।",
    "level": "A1",
    "id": 98
  },
  {
    "category": "Friends",
    "en": "Do not worry, everything will be fine.",
    "bn": "চিন্তা করো না, সব ঠিক হয়ে যাবে।",
    "level": "A1",
    "id": 99
  },
  {
    "category": "Phone",
    "en": "Hello, who is speaking?",
    "bn": "হ্যালো, কে বলছেন?",
    "level": "A1",
    "id": 100
  },
  {
    "category": "Phone",
    "en": "Can I speak to Mr. Rahman?",
    "bn": "আমি কি রহমান সাহেবের সাথে কথা বলতে পারি?",
    "level": "A1",
    "id": 101
  },
  {
    "category": "Phone",
    "en": "I cannot hear you clearly.",
    "bn": "আমি আপনাকে পরিষ্কার শুনতে পাচ্ছি না।",
    "level": "A1",
    "id": 102
  },
  {
    "category": "Phone",
    "en": "Please hold on for a moment.",
    "bn": "দয়া করে এক মুহূর্ত অপেক্ষা করুন।",
    "level": "A1",
    "id": 103
  },
  {
    "category": "Phone",
    "en": "I will call you back later.",
    "bn": "আমি পরে আপনাকে ফোন করব।",
    "level": "A1",
    "id": 104
  },
  {
    "category": "Phone",
    "en": "My battery is low.",
    "bn": "আমার ব্যাটারি কমে গেছে।",
    "level": "A1",
    "id": 105
  },
  {
    "category": "Phone",
    "en": "Please send me a message.",
    "bn": "দয়া করে আমাকে একটা মেসেজ পাঠান।",
    "level": "A1",
    "id": 106
  },
  {
    "category": "Phone",
    "en": "The network is very slow.",
    "bn": "নেটওয়ার্ক খুব ধীর।",
    "level": "A1",
    "id": 107
  },
  {
    "category": "Phone",
    "en": "What is your phone number?",
    "bn": "আপনার ফোন নম্বর কত?",
    "level": "A1",
    "id": 108
  },
  {
    "category": "Phone",
    "en": "I am on the way.",
    "bn": "আমি রাস্তায় আছি।",
    "level": "A1",
    "id": 109
  },
  {
    "category": "Money",
    "en": "Can you lend me some money?",
    "bn": "আপনি কি আমাকে কিছু টাকা ধার দিতে পারেন?",
    "level": "A1",
    "id": 110
  },
  {
    "category": "Money",
    "en": "I need to save more money.",
    "bn": "আমাকে আরও টাকা জমাতে হবে।",
    "level": "A1",
    "id": 111
  },
  {
    "category": "Money",
    "en": "How much do I owe you?",
    "bn": "আমি আপনাকে কত টাকা দেব?",
    "level": "A1",
    "id": 112
  },
  {
    "category": "Money",
    "en": "Do you accept cash?",
    "bn": "আপনারা কি নগদ টাকা নেন?",
    "level": "A1",
    "id": 113
  },
  {
    "category": "Money",
    "en": "I want to open a bank account.",
    "bn": "আমি একটি ব্যাংক অ্যাকাউন্ট খুলতে চাই।",
    "level": "A1",
    "id": 114
  },
  {
    "category": "Money",
    "en": "The price is reasonable.",
    "bn": "দামটা যুক্তিসঙ্গত।",
    "level": "A1",
    "id": 115
  },
  {
    "category": "Money",
    "en": "I spent too much this month.",
    "bn": "এই মাসে আমি অনেক বেশি খরচ করেছি।",
    "level": "A1",
    "id": 116
  },
  {
    "category": "Money",
    "en": "Please check the bill again.",
    "bn": "দয়া করে বিলটা আবার দেখুন।",
    "level": "A1",
    "id": 117
  },
  {
    "category": "Emergency",
    "en": "Help! Please help me!",
    "bn": "বাঁচাও! দয়া করে আমাকে সাহায্য করুন!",
    "level": "A1",
    "id": 118
  },
  {
    "category": "Emergency",
    "en": "There is a fire!",
    "bn": "আগুন লেগেছে!",
    "level": "A1",
    "id": 119
  },
  {
    "category": "Emergency",
    "en": "Call the police now.",
    "bn": "এখনই পুলিশ ডাকুন।",
    "level": "A1",
    "id": 120
  },
  {
    "category": "Emergency",
    "en": "I have been robbed.",
    "bn": "আমার জিনিস ছিনতাই হয়েছে।",
    "level": "A1",
    "id": 121
  },
  {
    "category": "Emergency",
    "en": "Someone is hurt.",
    "bn": "কেউ আহত হয়েছে।",
    "level": "A1",
    "id": 122
  },
  {
    "category": "Emergency",
    "en": "I am lost, can you help me?",
    "bn": "আমি পথ হারিয়েছি, আপনি কি সাহায্য করতে পারেন?",
    "level": "A1",
    "id": 123
  },
  {
    "category": "Emergency",
    "en": "Where is the nearest hospital?",
    "bn": "সবচেয়ে কাছের হাসপাতাল কোথায়?",
    "level": "A1",
    "id": 124
  },
  {
    "category": "Emergency",
    "en": "It is an emergency.",
    "bn": "এটা জরুরি অবস্থা।",
    "level": "A1",
    "id": 125
  },
  {
    "category": "Home",
    "en": "I am at home right now.",
    "bn": "আমি এখন বাড়িতে আছি।",
    "level": "A1",
    "id": 126
  },
  {
    "category": "Home",
    "en": "Please close the door.",
    "bn": "দয়া করে দরজাটা বন্ধ করুন।",
    "level": "A1",
    "id": 127
  },
  {
    "category": "Home",
    "en": "Turn on the light.",
    "bn": "বাতিটা জ্বালিয়ে দাও।",
    "level": "A1",
    "id": 128
  },
  {
    "category": "Home",
    "en": "Turn off the fan.",
    "bn": "পাখাটা বন্ধ করো।",
    "level": "A1",
    "id": 129
  },
  {
    "category": "Home",
    "en": "The kitchen is very clean.",
    "bn": "রান্নাঘরটা খুব পরিষ্কার।",
    "level": "A1",
    "id": 130
  },
  {
    "category": "Home",
    "en": "I need to wash my clothes.",
    "bn": "আমাকে আমার কাপড় ধুতে হবে।",
    "level": "A1",
    "id": 131
  },
  {
    "category": "Home",
    "en": "Where did you put the key?",
    "bn": "তুমি চাবিটা কোথায় রেখেছ?",
    "level": "A1",
    "id": 132
  },
  {
    "category": "Home",
    "en": "Our house has three rooms.",
    "bn": "আমাদের বাড়িতে তিনটি ঘর আছে।",
    "level": "A1",
    "id": 133
  },
  {
    "category": "Home",
    "en": "Please clean the table.",
    "bn": "দয়া করে টেবিলটা পরিষ্কার করো।",
    "level": "A1",
    "id": 134
  },
  {
    "category": "Home",
    "en": "The electricity is gone.",
    "bn": "বিদ্যুৎ চলে গেছে।",
    "level": "A1",
    "id": 135
  },
  {
    "category": "Home",
    "en": "Let us watch a movie tonight.",
    "bn": "চলো আজ রাতে একটা সিনেমা দেখি।",
    "level": "A1",
    "id": 136
  },
  {
    "category": "Work",
    "en": "I start work at nine.",
    "bn": "আমি নয়টায় কাজ শুরু করি।",
    "level": "A1",
    "id": 137
  },
  {
    "category": "Work",
    "en": "I am working on a new project.",
    "bn": "আমি একটি নতুন প্রজেক্টে কাজ করছি।",
    "level": "A1",
    "id": 138
  },
  {
    "category": "Work",
    "en": "My boss is very kind.",
    "bn": "আমার বস খুব দয়ালু।",
    "level": "A1",
    "id": 139
  },
  {
    "category": "Work",
    "en": "I have a meeting at three.",
    "bn": "তিনটায় আমার একটি মিটিং আছে।",
    "level": "A1",
    "id": 140
  },
  {
    "category": "Work",
    "en": "I will finish it by Friday.",
    "bn": "আমি এটা শুক্রবারের মধ্যে শেষ করব।",
    "level": "A1",
    "id": 141
  },
  {
    "category": "Work",
    "en": "Can I take a day off?",
    "bn": "আমি কি একদিন ছুটি নিতে পারি?",
    "level": "A1",
    "id": 142
  },
  {
    "category": "Work",
    "en": "I am looking for a new job.",
    "bn": "আমি নতুন চাকরি খুঁজছি।",
    "level": "A1",
    "id": 143
  },
  {
    "category": "Work",
    "en": "I have five years of experience.",
    "bn": "আমার পাঁচ বছরের অভিজ্ঞতা আছে।",
    "level": "A1",
    "id": 144
  },
  {
    "category": "Work",
    "en": "Please send me your resume.",
    "bn": "দয়া করে আপনার জীবনবৃত্তান্ত পাঠান।",
    "level": "A1",
    "id": 145
  },
  {
    "category": "Work",
    "en": "I work from home today.",
    "bn": "আজ আমি বাড়ি থেকে কাজ করছি।",
    "level": "A1",
    "id": 146
  },
  {
    "category": "Work",
    "en": "Thank you for this opportunity.",
    "bn": "এই সুযোগের জন্য ধন্যবাদ।",
    "level": "A1",
    "id": 147
  },
  {
    "category": "Hobbies",
    "en": "I like to read books.",
    "bn": "আমি বই পড়তে পছন্দ করি।",
    "level": "A1",
    "id": 148
  },
  {
    "category": "Hobbies",
    "en": "She loves to sing.",
    "bn": "সে গান গাইতে ভালোবাসে।",
    "level": "A1",
    "id": 149
  },
  {
    "category": "Hobbies",
    "en": "Do you play cricket?",
    "bn": "তুমি কি ক্রিকেট খেলো?",
    "level": "A1",
    "id": 150
  },
  {
    "category": "Hobbies",
    "en": "I enjoy cooking at home.",
    "bn": "আমি বাড়িতে রান্না করতে উপভোগ করি।",
    "level": "A1",
    "id": 151
  },
  {
    "category": "Hobbies",
    "en": "We go for a walk every evening.",
    "bn": "আমরা প্রতি সন্ধ্যায় হাঁটতে যাই।",
    "level": "A1",
    "id": 152
  },
  {
    "category": "Hobbies",
    "en": "I am learning to swim.",
    "bn": "আমি সাঁতার শিখছি।",
    "level": "A1",
    "id": 153
  },
  {
    "category": "Hobbies",
    "en": "He likes to draw pictures.",
    "bn": "সে ছবি আঁকতে পছন্দ করে।",
    "level": "A1",
    "id": 154
  },
  {
    "category": "Hobbies",
    "en": "My hobby is gardening.",
    "bn": "আমার শখ বাগান করা।",
    "level": "A1",
    "id": 155
  },
  {
    "category": "Hobbies",
    "en": "I listen to music every day.",
    "bn": "আমি প্রতিদিন গান শুনি।",
    "level": "A1",
    "id": 156
  },
  {
    "category": "Hobbies",
    "en": "They are playing in the field.",
    "bn": "তারা মাঠে খেলছে।",
    "level": "A1",
    "id": 157
  },
  {
    "category": "Hobbies",
    "en": "I want to learn English.",
    "bn": "আমি ইংরেজি শিখতে চাই।",
    "level": "A1",
    "id": 158
  },
  {
    "category": "Transport",
    "en": "Where is the bus stop?",
    "bn": "বাস স্টপ কোথায়?",
    "level": "A1",
    "id": 159
  },
  {
    "category": "Transport",
    "en": "The bus is late today.",
    "bn": "আজ বাসটি দেরি করছে।",
    "level": "A1",
    "id": 160
  },
  {
    "category": "Transport",
    "en": "I take a rickshaw to the market.",
    "bn": "আমি বাজারে রিকশায় যাই।",
    "level": "A1",
    "id": 161
  },
  {
    "category": "Transport",
    "en": "Please drive slowly.",
    "bn": "দয়া করে আস্তে গাড়ি চালান।",
    "level": "A1",
    "id": 162
  },
  {
    "category": "Transport",
    "en": "How much is the fare?",
    "bn": "ভাড়া কত?",
    "level": "A1",
    "id": 163
  },
  {
    "category": "Transport",
    "en": "There is a lot of traffic.",
    "bn": "অনেক যানজট।",
    "level": "A1",
    "id": 164
  },
  {
    "category": "Transport",
    "en": "I missed the train.",
    "bn": "আমি ট্রেন মিস করেছি।",
    "level": "A1",
    "id": 165
  },
  {
    "category": "Transport",
    "en": "Does this bus go to Dhaka?",
    "bn": "এই বাস কি ঢাকা যায়?",
    "level": "A1",
    "id": 166
  },
  {
    "category": "Transport",
    "en": "I will go by train.",
    "bn": "আমি ট্রেনে যাব।",
    "level": "A1",
    "id": 167
  },
  {
    "category": "Transport",
    "en": "Please wear your seat belt.",
    "bn": "দয়া করে সিট বেল্ট পরুন।",
    "level": "A1",
    "id": 168
  },
  {
    "category": "Transport",
    "en": "Let us take a taxi.",
    "bn": "চলুন একটা ট্যাক্সি নিই।",
    "level": "A1",
    "id": 169
  },
  {
    "category": "Directions",
    "en": "How do I get to the hospital?",
    "bn": "হাসপাতালে কীভাবে যাব?",
    "level": "A1",
    "id": 170
  },
  {
    "category": "Directions",
    "en": "Go straight ahead.",
    "bn": "সোজা সামনে যান।",
    "level": "A1",
    "id": 171
  },
  {
    "category": "Directions",
    "en": "Turn right at the next corner.",
    "bn": "পরের মোড়ে ডানে ঘুরুন।",
    "level": "A1",
    "id": 172
  },
  {
    "category": "Directions",
    "en": "It is near the bank.",
    "bn": "এটা ব্যাংকের কাছেই।",
    "level": "A1",
    "id": 173
  },
  {
    "category": "Directions",
    "en": "It is on your left.",
    "bn": "এটা আপনার বাম দিকে।",
    "level": "A1",
    "id": 174
  },
  {
    "category": "Directions",
    "en": "Is it far from here?",
    "bn": "এটা কি এখান থেকে দূরে?",
    "level": "A1",
    "id": 175
  },
  {
    "category": "Directions",
    "en": "Can you show me on the map?",
    "bn": "আপনি কি আমাকে মানচিত্রে দেখাতে পারেন?",
    "level": "A1",
    "id": 176
  },
  {
    "category": "Directions",
    "en": "Cross the road carefully.",
    "bn": "সাবধানে রাস্তা পার হোন।",
    "level": "A1",
    "id": 177
  },
  {
    "category": "Directions",
    "en": "It takes ten minutes on foot.",
    "bn": "হেঁটে যেতে দশ মিনিট লাগে।",
    "level": "A1",
    "id": 178
  },
  {
    "category": "Directions",
    "en": "I think I am going the wrong way.",
    "bn": "আমার মনে হয় আমি ভুল পথে যাচ্ছি।",
    "level": "A1",
    "id": 179
  },
  {
    "category": "Directions",
    "en": "It is opposite the school.",
    "bn": "এটা স্কুলের উল্টো দিকে।",
    "level": "A1",
    "id": 180
  },
  {
    "category": "Hotel",
    "en": "I have a reservation.",
    "bn": "আমার একটি বুকিং আছে।",
    "level": "A1",
    "id": 181
  },
  {
    "category": "Hotel",
    "en": "Do you have any rooms available?",
    "bn": "আপনাদের কি কোনো রুম খালি আছে?",
    "level": "A1",
    "id": 182
  },
  {
    "category": "Hotel",
    "en": "How much is the room per night?",
    "bn": "রুমের ভাড়া রাতপ্রতি কত?",
    "level": "A1",
    "id": 183
  },
  {
    "category": "Hotel",
    "en": "What time is check out?",
    "bn": "চেক-আউট কখন?",
    "level": "A1",
    "id": 184
  },
  {
    "category": "Hotel",
    "en": "Is breakfast included?",
    "bn": "সকালের নাস্তা কি অন্তর্ভুক্ত?",
    "level": "A1",
    "id": 185
  },
  {
    "category": "Hotel",
    "en": "The room is too noisy.",
    "bn": "রুমটা অনেক গোলমালের।",
    "level": "A1",
    "id": 186
  },
  {
    "category": "Hotel",
    "en": "Can I have an extra blanket?",
    "bn": "আমি কি একটা বাড়তি কম্বল পেতে পারি?",
    "level": "A1",
    "id": 187
  },
  {
    "category": "Hotel",
    "en": "The air conditioner is not working.",
    "bn": "এয়ার কন্ডিশনার কাজ করছে না।",
    "level": "A1",
    "id": 188
  },
  {
    "category": "Hotel",
    "en": "Please wake me up at six.",
    "bn": "দয়া করে আমাকে ছয়টায় জাগিয়ে দিন।",
    "level": "A1",
    "id": 189
  },
  {
    "category": "Hotel",
    "en": "I would like to extend my stay.",
    "bn": "আমি আমার থাকার মেয়াদ বাড়াতে চাই।",
    "level": "A1",
    "id": 190
  },
  {
    "category": "Hotel",
    "en": "Where is the lift?",
    "bn": "লিফট কোথায়?",
    "level": "A1",
    "id": 191
  },
  {
    "category": "Bank",
    "en": "I want to withdraw some money.",
    "bn": "আমি কিছু টাকা তুলতে চাই।",
    "level": "A1",
    "id": 192
  },
  {
    "category": "Bank",
    "en": "I would like to deposit this cheque.",
    "bn": "আমি এই চেকটি জমা দিতে চাই।",
    "level": "A1",
    "id": 193
  },
  {
    "category": "Bank",
    "en": "What is the interest rate?",
    "bn": "সুদের হার কত?",
    "level": "A1",
    "id": 194
  },
  {
    "category": "Bank",
    "en": "I forgot my PIN.",
    "bn": "আমি আমার পিন ভুলে গেছি।",
    "level": "A1",
    "id": 195
  },
  {
    "category": "Bank",
    "en": "My card is not working.",
    "bn": "আমার কার্ড কাজ করছে না।",
    "level": "A1",
    "id": 196
  },
  {
    "category": "Bank",
    "en": "Please fill out this form.",
    "bn": "দয়া করে এই ফর্মটি পূরণ করুন।",
    "level": "A1",
    "id": 197
  },
  {
    "category": "Bank",
    "en": "I need to send money abroad.",
    "bn": "আমাকে বিদেশে টাকা পাঠাতে হবে।",
    "level": "A1",
    "id": 198
  },
  {
    "category": "Bank",
    "en": "What is my account balance?",
    "bn": "আমার অ্যাকাউন্টে কত টাকা আছে?",
    "level": "A1",
    "id": 199
  },
  {
    "category": "Bank",
    "en": "Do I need an appointment?",
    "bn": "আমার কি অ্যাপয়েন্টমেন্ট লাগবে?",
    "level": "A1",
    "id": 200
  },
  {
    "category": "Bank",
    "en": "Please sign here.",
    "bn": "দয়া করে এখানে সই করুন।",
    "level": "A1",
    "id": 201
  },
  {
    "category": "Restaurant",
    "en": "A table for two, please.",
    "bn": "দুইজনের জন্য একটি টেবিল দিন।",
    "level": "A1",
    "id": 202
  },
  {
    "category": "Restaurant",
    "en": "Can I see the menu?",
    "bn": "আমি কি মেনুটা দেখতে পারি?",
    "level": "A1",
    "id": 203
  },
  {
    "category": "Restaurant",
    "en": "I will have the chicken curry.",
    "bn": "আমি মুরগির তরকারি নেব।",
    "level": "A1",
    "id": 204
  },
  {
    "category": "Restaurant",
    "en": "Could we have the bill, please?",
    "bn": "আমরা কি বিলটা পেতে পারি?",
    "level": "A1",
    "id": 205
  },
  {
    "category": "Restaurant",
    "en": "The food is cold.",
    "bn": "খাবারটা ঠান্ডা।",
    "level": "A1",
    "id": 206
  },
  {
    "category": "Restaurant",
    "en": "I ordered tea, not coffee.",
    "bn": "আমি চা অর্ডার করেছিলাম, কফি নয়।",
    "level": "A1",
    "id": 207
  },
  {
    "category": "Restaurant",
    "en": "Is this dish vegetarian?",
    "bn": "এই খাবারটি কি নিরামিষ?",
    "level": "A1",
    "id": 208
  },
  {
    "category": "Restaurant",
    "en": "Please pack the rest for me.",
    "bn": "দয়া করে বাকিটা আমার জন্য প্যাক করে দিন।",
    "level": "A1",
    "id": 209
  },
  {
    "category": "Restaurant",
    "en": "Can we sit near the window?",
    "bn": "আমরা কি জানালার কাছে বসতে পারি?",
    "level": "A1",
    "id": 210
  },
  {
    "category": "Restaurant",
    "en": "What do you recommend?",
    "bn": "আপনি কী খেতে বলবেন?",
    "level": "A1",
    "id": 211
  },
  {
    "category": "Restaurant",
    "en": "Everything was wonderful.",
    "bn": "সবকিছু চমৎকার ছিল।",
    "level": "A1",
    "id": 212
  },
  {
    "category": "Feelings",
    "en": "I am so happy today.",
    "bn": "আজ আমি খুব খুশি।",
    "level": "A1",
    "id": 213
  },
  {
    "category": "Feelings",
    "en": "I feel very tired.",
    "bn": "আমি খুব ক্লান্ত বোধ করছি।",
    "level": "A1",
    "id": 214
  },
  {
    "category": "Feelings",
    "en": "I am a little nervous.",
    "bn": "আমি একটু নার্ভাস।",
    "level": "A1",
    "id": 215
  },
  {
    "category": "Feelings",
    "en": "She is angry with me.",
    "bn": "সে আমার উপর রেগে আছে।",
    "level": "A1",
    "id": 216
  },
  {
    "category": "Feelings",
    "en": "I am really excited about the trip.",
    "bn": "আমি ভ্রমণ নিয়ে সত্যিই উত্তেজিত।",
    "level": "A1",
    "id": 217
  },
  {
    "category": "Feelings",
    "en": "He looks sad.",
    "bn": "তাকে দুঃখী দেখাচ্ছে।",
    "level": "A1",
    "id": 218
  },
  {
    "category": "Feelings",
    "en": "I am afraid of the dark.",
    "bn": "আমি অন্ধকারকে ভয় পাই।",
    "level": "A1",
    "id": 219
  },
  {
    "category": "Feelings",
    "en": "I feel lonely sometimes.",
    "bn": "আমি মাঝে মাঝে একা বোধ করি।",
    "level": "A1",
    "id": 220
  },
  {
    "category": "Feelings",
    "en": "Do not be shy.",
    "bn": "লজ্জা পেও না।",
    "level": "A1",
    "id": 221
  },
  {
    "category": "Feelings",
    "en": "I am grateful for your support.",
    "bn": "আপনার সহযোগিতার জন্য আমি কৃতজ্ঞ।",
    "level": "A1",
    "id": 222
  },
  {
    "category": "Feelings",
    "en": "I feel much better now.",
    "bn": "আমি এখন অনেক ভালো বোধ করছি।",
    "level": "A1",
    "id": 223
  },
  {
    "category": "Time",
    "en": "What time is it?",
    "bn": "কয়টা বাজে?",
    "level": "A1",
    "id": 224
  },
  {
    "category": "Time",
    "en": "It is half past five.",
    "bn": "সাড়ে পাঁচটা বাজে।",
    "level": "A1",
    "id": 225
  },
  {
    "category": "Time",
    "en": "See you at seven o'clock.",
    "bn": "সাতটায় দেখা হবে।",
    "level": "A1",
    "id": 226
  },
  {
    "category": "Time",
    "en": "I am free in the afternoon.",
    "bn": "আমি বিকেলে ফ্রি আছি।",
    "level": "A1",
    "id": 227
  },
  {
    "category": "Time",
    "en": "The shop opens at ten.",
    "bn": "দোকান দশটায় খোলে।",
    "level": "A1",
    "id": 228
  },
  {
    "category": "Time",
    "en": "I have been waiting for an hour.",
    "bn": "আমি এক ঘণ্টা ধরে অপেক্ষা করছি।",
    "level": "A1",
    "id": 229
  },
  {
    "category": "Time",
    "en": "We are running out of time.",
    "bn": "আমাদের সময় ফুরিয়ে আসছে।",
    "level": "A1",
    "id": 230
  },
  {
    "category": "Time",
    "en": "Please come on time.",
    "bn": "দয়া করে সময়মতো আসুন।",
    "level": "A1",
    "id": 231
  },
  {
    "category": "Time",
    "en": "I will be back in five minutes.",
    "bn": "আমি পাঁচ মিনিটে ফিরব।",
    "level": "A1",
    "id": 232
  },
  {
    "category": "Time",
    "en": "Today is Wednesday.",
    "bn": "আজ বুধবার।",
    "level": "A1",
    "id": 233
  },
  {
    "category": "Time",
    "en": "My birthday is next month.",
    "bn": "আমার জন্মদিন আগামী মাসে।",
    "level": "A1",
    "id": 234
  },
  {
    "category": "Daily",
    "en": "I enjoy drinking a cup of fresh black coffee every morning.",
    "bn": "আমি প্রতিদিন সকালে এক কাপ তাজা ব্ল্যাক কফি পান করা উপভোগ করি।",
    "level": "A1",
    "id": 235
  },
  {
    "category": "Daily",
    "en": "I enjoy drinking a cup of warm lemon tea every morning.",
    "bn": "আমি প্রতিদিন সকালে এক কাপ হালকা গরম লেবু চা পান করা উপভোগ করি।",
    "level": "A1",
    "id": 236
  },
  {
    "category": "Daily",
    "en": "I enjoy drinking a cup of green tea with honey every morning.",
    "bn": "আমি প্রতিদিন সকালে এক কাপ মধু মেশানো গ্রিন টি পান করা উপভোগ করি।",
    "level": "A1",
    "id": 237
  },
  {
    "category": "Daily",
    "en": "I enjoy drinking a cup of fresh cow milk every morning.",
    "bn": "আমি প্রতিদিন সকালে এক কাপ তাজা গরুর দুধ পান করা উপভোগ করি।",
    "level": "A1",
    "id": 238
  },
  {
    "category": "Daily",
    "en": "I enjoy drinking a cup of hot ginger tea every morning.",
    "bn": "আমি প্রতিদিন সকালে এক কাপ গরম আদা চা পান করা উপভোগ করি।",
    "level": "A1",
    "id": 239
  },
  {
    "category": "Daily",
    "en": "I enjoy drinking a cup of masala spiced tea every morning.",
    "bn": "আমি প্রতিদিন সকালে এক কাপ মশলাযুক্ত সুস্বাদু চা পান করা উপভোগ করি।",
    "level": "A1",
    "id": 240
  },
  {
    "category": "School",
    "en": "She has been studying computer science and engineering for the past three years.",
    "bn": "সে গত তিন বছর ধরে কম্পিউটার বিজ্ঞান ও প্রকৌশল নিয়ে পড়াশোনা করছে।",
    "level": "B1",
    "id": 241
  },
  {
    "category": "School",
    "en": "She has been studying business administration and marketing for the past three years.",
    "bn": "সে গত তিন বছর ধরে ব্যবসায় প্রশাসন ও বিপণন নিয়ে পড়াশোনা করছে।",
    "level": "B1",
    "id": 242
  },
  {
    "category": "School",
    "en": "She has been studying English language and literature for the past three years.",
    "bn": "সে গত তিন বছর ধরে ইংরেজি ভাষা ও সাহিত্য নিয়ে পড়াশোনা করছে।",
    "level": "B1",
    "id": 243
  },
  {
    "category": "School",
    "en": "She has been studying environmental science and ecology for the past three years.",
    "bn": "সে গত তিন বছর ধরে পরিবেশ বিজ্ঞান ও বাস্তুবিদ্যা নিয়ে পড়াশোনা করছে।",
    "level": "B1",
    "id": 244
  },
  {
    "category": "School",
    "en": "She has been studying journalism and mass media for the past three years.",
    "bn": "সে গত তিন বছর ধরে সাংবাদিকতা ও গণমাধ্যম নিয়ে পড়াশোনা করছে।",
    "level": "B1",
    "id": 245
  },
  {
    "category": "School",
    "en": "She has been studying international relations and law for the past three years.",
    "bn": "সে গত তিন বছর ধরে আন্তর্জাতিক সম্পর্ক ও আইন নিয়ে পড়াশোনা করছে।",
    "level": "B1",
    "id": 246
  },
  {
    "category": "Directions",
    "en": "Could you please show me the way to the nearest central pharmacy?",
    "bn": "দয়া করে আমাকে কি সবচেয়ে কাছের সেন্ট্রাল ফার্মেসি যাওয়ার পথটি দেখিয়ে দেবেন?",
    "level": "A1",
    "id": 247
  },
  {
    "category": "Directions",
    "en": "Could you please show me the way to the local post office branch?",
    "bn": "দয়া করে আমাকে কি স্থানীয় ডাকঘর শাখা যাওয়ার পথটি দেখিয়ে দেবেন?",
    "level": "A1",
    "id": 248
  },
  {
    "category": "Directions",
    "en": "Could you please show me the way to the metro rail entrance gate?",
    "bn": "দয়া করে আমাকে কি মেট্রোরেলের প্রবেশদ্বার যাওয়ার পথটি দেখিয়ে দেবেন?",
    "level": "A1",
    "id": 249
  },
  {
    "category": "Directions",
    "en": "Could you please show me the way to the district public library?",
    "bn": "দয়া করে আমাকে কি জেলা পাবলিক লাইব্রেরি যাওয়ার পথটি দেখিয়ে দেবেন?",
    "level": "A1",
    "id": 250
  },
  {
    "category": "Directions",
    "en": "Could you please show me the way to the city general hospital?",
    "bn": "দয়া করে আমাকে কি শহরের জেনারেল হাসপাতাল যাওয়ার পথটি দেখিয়ে দেবেন?",
    "level": "A1",
    "id": 251
  },
  {
    "category": "Directions",
    "en": "Could you please show me the way to the historical museum entrance?",
    "bn": "দয়া করে আমাকে কি ঐতিহাসিক জাদুঘরের প্রবেশপথ যাওয়ার পথটি দেখিয়ে দেবেন?",
    "level": "A1",
    "id": 252
  },
  {
    "category": "Daily",
    "en": "It is important to brush your teeth thoroughly before going to bed.",
    "bn": "ঘুমাতে যাওয়ার আগে দাঁত ভালোভাবে ব্রাশ করা অত্যন্ত গুরুত্বপূর্ণ।",
    "level": "A1",
    "id": 253
  },
  {
    "category": "Daily",
    "en": "It is important to wash your hands and face before going to bed.",
    "bn": "ঘুমাতে যাওয়ার আগে হাত ও মুখ পরিষ্কার করা অত্যন্ত গুরুত্বপূর্ণ।",
    "level": "A1",
    "id": 254
  },
  {
    "category": "Daily",
    "en": "It is important to turn off all unnecessary lights before going to bed.",
    "bn": "ঘুমাতে যাওয়ার আগে সকল অপ্রয়োজনীয় বাতি নিভিয়ে দেওয়া অত্যন্ত গুরুত্বপূর্ণ।",
    "level": "A1",
    "id": 255
  },
  {
    "category": "Daily",
    "en": "It is important to read a calming book before going to bed.",
    "bn": "ঘুমাতে যাওয়ার আগে মন শান্তকারী কোনো বই পড়া অত্যন্ত গুরুত্বপূর্ণ।",
    "level": "A1",
    "id": 256
  },
  {
    "category": "Daily",
    "en": "It is important to set an alarm for the morning before going to bed.",
    "bn": "ঘুমাতে যাওয়ার আগে সকালের জন্য একটি অ্যালার্ম দেওয়া অত্যন্ত গুরুত্বপূর্ণ।",
    "level": "A1",
    "id": 257
  },
  {
    "category": "Daily",
    "en": "It is important to drink a glass of clean water before going to bed.",
    "bn": "ঘুমাতে যাওয়ার আগে এক গ্লাস বিশুদ্ধ পানি পান করা অত্যন্ত গুরুত্বপূর্ণ।",
    "level": "A1",
    "id": 258
  },
  {
    "category": "Office",
    "en": "We had a fruitful discussion about the upcoming product launch during the meeting.",
    "bn": "মিটিং চলাকালীন আমরা আসন্ন পণ্য উদ্বোধন নিয়ে একটি ফলপ্রসূ আলোচনা করেছি।",
    "level": "B2",
    "id": 259
  },
  {
    "category": "Office",
    "en": "We had a fruitful discussion about quarterly financial targets during the meeting.",
    "bn": "মিটিং চলাকালীন আমরা ত্রৈমাসিক আর্থিক লক্ষ্যমাত্রা নিয়ে একটি ফলপ্রসূ আলোচনা করেছি।",
    "level": "B2",
    "id": 260
  },
  {
    "category": "Office",
    "en": "We had a fruitful discussion about customer feedback analysis during the meeting.",
    "bn": "মিটিং চলাকালীন আমরা গ্রাহকদের মতামত বিশ্লেষণ নিয়ে একটি ফলপ্রসূ আলোচনা করেছি।",
    "level": "B2",
    "id": 261
  },
  {
    "category": "Office",
    "en": "We had a fruitful discussion about office workflow improvement during the meeting.",
    "bn": "মিটিং চলাকালীন আমরা অফিসের কাজের গতি বৃদ্ধি নিয়ে একটি ফলপ্রসূ আলোচনা করেছি।",
    "level": "B2",
    "id": 262
  },
  {
    "category": "Office",
    "en": "We had a fruitful discussion about new software architecture during the meeting.",
    "bn": "মিটিং চলাকালীন আমরা নতুন সফটওয়্যার কাঠামো নিয়ে একটি ফলপ্রসূ আলোচনা করেছি।",
    "level": "B2",
    "id": 263
  },
  {
    "category": "Office",
    "en": "We had a fruitful discussion about employee welfare policies during the meeting.",
    "bn": "মিটিং চলাকালীন আমরা কর্মীদের কল্যাণমূলক নীতিমালা নিয়ে একটি ফলপ্রসূ আলোচনা করেছি।",
    "level": "B2",
    "id": 264
  },
  {
    "category": "Health",
    "en": "Regular practice of morning brisk walking strengthens your immune system.",
    "bn": "নিয়মিত সকালে দ্রুত হাঁটা চর্চা করলে রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি পায়।",
    "level": "B1",
    "id": 265
  },
  {
    "category": "Health",
    "en": "Regular practice of deep breathing exercises strengthens your immune system.",
    "bn": "নিয়মিত গভীর শ্বাস-প্রশ্বাসের ব্যায়াম চর্চা করলে রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি পায়।",
    "level": "B1",
    "id": 266
  },
  {
    "category": "Health",
    "en": "Regular practice of mindfulness meditation strengthens your immune system.",
    "bn": "নিয়মিত মনোযোগপূর্ণ ধ্যান চর্চা করলে রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি পায়।",
    "level": "B1",
    "id": 267
  },
  {
    "category": "Health",
    "en": "Regular practice of cardiovascular exercises strengthens your immune system.",
    "bn": "নিয়মিত হৃদযন্ত্রের ব্যায়াম চর্চা করলে রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি পায়।",
    "level": "B1",
    "id": 268
  },
  {
    "category": "Health",
    "en": "Regular practice of daily cycling workouts strengthens your immune system.",
    "bn": "নিয়মিত প্রতিদিনের সাইক্লিং ব্যায়াম চর্চা করলে রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি পায়।",
    "level": "B1",
    "id": 269
  },
  {
    "category": "Health",
    "en": "Regular practice of healthy nutritional habits strengthens your immune system.",
    "bn": "নিয়মিত স্বাস্থ্যকর খাদ্যাভ্যাস চর্চা করলে রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি পায়।",
    "level": "B1",
    "id": 270
  },
  {
    "category": "Travel",
    "en": "Please make sure you have your valid passport and boarding pass before boarding.",
    "bn": "উড্ডয়নের পূর্বে দয়া করে নিশ্চিত করুন যে আপনার বৈধ পাসপোর্ট এবং বোর্ডিং পাস সাথে আছে।",
    "level": "A2",
    "id": 271
  },
  {
    "category": "Travel",
    "en": "Please make sure you have your digital travel insurance policy before boarding.",
    "bn": "উড্ডয়নের পূর্বে দয়া করে নিশ্চিত করুন যে আপনার ডিজিটাল ভ্রমণ বীমা কপি সাথে আছে।",
    "level": "A2",
    "id": 272
  },
  {
    "category": "Travel",
    "en": "Please make sure you have your national identity card photocopy before boarding.",
    "bn": "উড্ডয়নের পূর্বে দয়া করে নিশ্চিত করুন যে আপনার জাতীয় পরিচয়পত্রের ফটোকপি সাথে আছে।",
    "level": "A2",
    "id": 273
  },
  {
    "category": "Travel",
    "en": "Please make sure you have your hotel accommodation voucher before boarding.",
    "bn": "উড্ডয়নের পূর্বে দয়া করে নিশ্চিত করুন যে আপনার হোটেল বুকিংয়ের ভাউচার সাথে আছে।",
    "level": "A2",
    "id": 274
  },
  {
    "category": "Travel",
    "en": "Please make sure you have your emergency contact numbers before boarding.",
    "bn": "উড্ডয়নের পূর্বে দয়া করে নিশ্চিত করুন যে আপনার জরুরি যোগাযোগের নম্বরসমূহ সাথে আছে।",
    "level": "A2",
    "id": 275
  },
  {
    "category": "Travel",
    "en": "Please make sure you have your prescribed travel medications before boarding.",
    "bn": "উড্ডয়নের পূর্বে দয়া করে নিশ্চিত করুন যে আপনার প্রয়োজনীয় প্রেসক্রিপশনের ওষুধ সাথে আছে।",
    "level": "A2",
    "id": 276
  },
  {
    "category": "Shopping",
    "en": "The local market is famous for its fresh seasonal vegetables and reasonable prices.",
    "bn": "স্থানীয় বাজারটি তার তাজা মৌসুমী শাকসবজি এবং ন্যায্য মূল্যের জন্য বিখ্যাত।",
    "level": "A2",
    "id": 277
  },
  {
    "category": "Shopping",
    "en": "The local market is famous for its traditional handcrafted pottery and reasonable prices.",
    "bn": "স্থানীয় বাজারটি তার ঐতিহ্যবাহী হাতের তৈরি মাটির জিনিস এবং ন্যায্য মূল্যের জন্য বিখ্যাত।",
    "level": "A2",
    "id": 278
  },
  {
    "category": "Shopping",
    "en": "The local market is famous for its pure organic honey and reasonable prices.",
    "bn": "স্থানীয় বাজারটি তার খাঁটি অর্গানিক মধু এবং ন্যায্য মূল্যের জন্য বিখ্যাত।",
    "level": "A2",
    "id": 279
  },
  {
    "category": "Shopping",
    "en": "The local market is famous for its handwoven silk sarees and reasonable prices.",
    "bn": "স্থানীয় বাজারটি তার হাতে বোনা রেশমি শাড়ি এবং ন্যায্য মূল্যের জন্য বিখ্যাত।",
    "level": "A2",
    "id": 280
  },
  {
    "category": "Shopping",
    "en": "The local market is famous for its sweet seasonal mangoes and reasonable prices.",
    "bn": "স্থানীয় বাজারটি তার মৌসুমী মিষ্টি আম এবং ন্যায্য মূল্যের জন্য বিখ্যাত।",
    "level": "A2",
    "id": 281
  },
  {
    "category": "Shopping",
    "en": "The local market is famous for its delicious traditional sweets and reasonable prices.",
    "bn": "স্থানীয় বাজারটি তার সুস্বাদু ঐতিহ্যবাহী মিষ্টি এবং ন্যায্য মূল্যের জন্য বিখ্যাত।",
    "level": "A2",
    "id": 282
  },
  {
    "category": "Office",
    "en": "I was impressed by their prompt customer support service and professional conduct.",
    "bn": "তাদের তৎক্ষণাৎ গ্রাহক সেবা এবং পেশাদার আচরণ দেখে আমি মুগ্ধ হয়েছিলাম।",
    "level": "B2",
    "id": 283
  },
  {
    "category": "Office",
    "en": "I was impressed by their warm and sincere hospitality and professional conduct.",
    "bn": "তাদের আন্তরিক ও উষ্ণ আতিথেয়তা এবং পেশাদার আচরণ দেখে আমি মুগ্ধ হয়েছিলাম।",
    "level": "B2",
    "id": 284
  },
  {
    "category": "Office",
    "en": "I was impressed by their exceptional attention to detail and professional conduct.",
    "bn": "তাদের কাজে চমৎকার নিখুঁত মনোযোগ এবং পেশাদার আচরণ দেখে আমি মুগ্ধ হয়েছিলাম।",
    "level": "B2",
    "id": 285
  },
  {
    "category": "Office",
    "en": "I was impressed by their honest and transparent communication and professional conduct.",
    "bn": "তাদের সৎ ও স্বচ্ছ যোগাযোগ এবং পেশাদার আচরণ দেখে আমি মুগ্ধ হয়েছিলাম।",
    "level": "B2",
    "id": 286
  },
  {
    "category": "Office",
    "en": "I was impressed by their quick and efficient troubleshooting and professional conduct.",
    "bn": "তাদের দ্রুত ও কার্যকর সমস্যা সমাধান এবং পেশাদার আচরণ দেখে আমি মুগ্ধ হয়েছিলাম।",
    "level": "B2",
    "id": 287
  },
  {
    "category": "Office",
    "en": "I was impressed by their patient and respectful attitude and professional conduct.",
    "bn": "তাদের ধৈর্যশীল ও শ্রদ্ধাশীল মনোভাব এবং পেশাদার আচরণ দেখে আমি মুগ্ধ হয়েছিলাম।",
    "level": "B2",
    "id": 288
  },
  {
    "category": "Daily",
    "en": "We decided to postpone our football match due to unexpected heavy rain.",
    "bn": "অপ্রত্যাশিত ভারী বৃষ্টির কারণে আমরা আমাদের ফুটবল ম্যাচ স্থগিত করার সিদ্ধান্ত নিয়েছি।",
    "level": "A2",
    "id": 289
  },
  {
    "category": "Daily",
    "en": "We decided to cancel the outdoor picnic due to unexpected heavy rain.",
    "bn": "অপ্রত্যাশিত ভারী বৃষ্টির কারণে আমরা বাইরের পিকনিক বাতিল করার সিদ্ধান্ত নিয়েছি।",
    "level": "A2",
    "id": 290
  },
  {
    "category": "Daily",
    "en": "We decided to take a cab instead of walking due to unexpected heavy rain.",
    "bn": "অপ্রত্যাশিত ভারী বৃষ্টির কারণে আমরা হাঁটার বদলে ক্যাব নেওয়ার সিদ্ধান্ত নিয়েছি।",
    "level": "A2",
    "id": 291
  },
  {
    "category": "Daily",
    "en": "We decided to stay indoors and read books due to unexpected heavy rain.",
    "bn": "অপ্রত্যাশিত ভারী বৃষ্টির কারণে আমরা ঘরের ভেতরে থেকে বই পড়ার সিদ্ধান্ত নিয়েছি।",
    "level": "A2",
    "id": 292
  },
  {
    "category": "Daily",
    "en": "We decided to reschedule the photography session due to unexpected heavy rain.",
    "bn": "অপ্রত্যাশিত ভারী বৃষ্টির কারণে আমরা ছবি তোলার সেশনটি পিছিয়ে দেওয়ার সিদ্ধান্ত নিয়েছি।",
    "level": "A2",
    "id": 293
  },
  {
    "category": "Daily",
    "en": "We decided to order food delivery online due to unexpected heavy rain.",
    "bn": "অপ্রত্যাশিত ভারী বৃষ্টির কারণে আমরা অনলাইনে খাবার অর্ডার করার সিদ্ধান্ত নিয়েছি।",
    "level": "A2",
    "id": 294
  },
  {
    "category": "School",
    "en": "Good teachers inspire students to discover their own potential.",
    "bn": "ভালো শিক্ষকরা শিক্ষার্থীদের তাদের সুপ্ত প্রতিভা অন্বেষণে অনুপ্রাণিত করেন।",
    "level": "B1",
    "id": 295
  },
  {
    "category": "Office",
    "en": "Honesty and integrity should guide all professional decisions.",
    "bn": "সততা ও নৈতিকতা সকল পেশাগত সিদ্ধান্তের পথপ্রদর্শক হওয়া উচিত।",
    "level": "B2",
    "id": 296
  },
  {
    "category": "Daily",
    "en": "A short nap in the afternoon can refresh your focus.",
    "bn": "দুপুরে একটি ছোট ঘুম আপনার মনোযোগকে সতেজ করে তুলতে পারে।",
    "level": "A2",
    "id": 297
  },
  {
    "category": "Health",
    "en": "Always wash your hands thoroughly after coming home from outside.",
    "bn": "বাইরে থেকে বাড়ি ফিরে সবসময় হাত ভালোভাবে ধুয়ে নিন।",
    "level": "A1",
    "id": 298
  },
  {
    "category": "Travel",
    "en": "The sunrise over the green tea hills of Sylhet was majestic.",
    "bn": "সিলেটের সবুজ চা বাগানের ওপর সূর্যোদয় ছিল অপার্থিব সুন্দর।",
    "level": "B1",
    "id": 299
  },
  {
    "category": "Office",
    "en": "Please double-check all email attachments before clicking send.",
    "bn": "সেন্ড বাটনে ক্লিক করার আগে ইমেইলের সব অ্যাটাচমেন্ট আবার দেখে নিন।",
    "level": "A2",
    "id": 300
  },
  {
    "category": "School",
    "en": "Learning vocabulary through storytelling makes words memorable.",
    "bn": "গল্পের মাধ্যমে শব্দ শিখলে তা মনে রাখা অনেক সহজ হয়।",
    "level": "B1",
    "id": 301
  },
  {
    "category": "Office",
    "en": "He managed to complete the difficult project well ahead of schedule.",
    "bn": "তিনি নির্দিষ্ট সময়ের অনেক আগেই কঠিন প্রকল্পটি সম্পন্ন করতে পেরেছিলেন।",
    "level": "B2",
    "id": 302
  },
  {
    "category": "Food",
    "en": "A warm bowl of chicken vegetable soup is perfect for cold evenings.",
    "bn": "শীতের সন্ধ্যায় এক বাটি গরম চিকেন ভেজিটেবল স্যুপ অত্যন্ত তৃপ্তিদায়ক।",
    "level": "A1",
    "id": 303
  },
  {
    "category": "Emotions",
    "en": "We should show kindness and empathy toward stray street animals.",
    "bn": "রাস্তার অসহায় প্রাণীদের প্রতি আমাদের দয়া ও সহমর্মিতা দেখানো উচিত।",
    "level": "A2",
    "id": 304
  },
  {
    "category": "Travel",
    "en": "The historical monuments of Old Dhaka tell tales of rich heritage.",
    "bn": "পুরান ঢাকার ঐতিহাসিক স্থাপত্যগুলো সমৃদ্ধ ঐতিহ্যের গল্প বলে।",
    "level": "B1",
    "id": 305
  },
  {
    "category": "Health",
    "en": "Regular dental flossing prevents plaque buildup and gum diseases.",
    "bn": "নিয়মিত ডেন্টাল ফ্লস ব্যবহার করলে দাঁতের গোড়ায় জীবাণু জমতে পারে না।",
    "level": "B1",
    "id": 306
  },
  {
    "category": "Emotions",
    "en": "Patience and persistence will overcome almost any obstacle in life.",
    "bn": "ধৈর্য এবং অধ্যবসায় জীবনের প্রায় যেকোনো বাধা অতিক্রম করতে পারে।",
    "level": "B2",
    "id": 307
  },
  {
    "category": "School",
    "en": "Please keep your voice low while speaking in the library hall.",
    "bn": "গ্রন্থাগার কক্ষে কথা বলার সময় দয়া করে নিচু স্বরে কথা বলুন।",
    "level": "A1",
    "id": 308
  },
  {
    "category": "Emotions",
    "en": "A positive attitude turns every difficult challenge into an opportunity.",
    "bn": "ইতিবাচক মনোভাব প্রতিটি কঠিন চ্যালেঞ্জকে একটি সম্ভাবনায় রূপান্তরিত করে।",
    "level": "B1",
    "id": 309
  },
  {
    "category": "Transport",
    "en": "The newly constructed expressway has drastically cut down travel time.",
    "bn": "নতুন নির্মিত এক্সপ্রেসওয়ে যাতায়াতের সময় নাটকীয়ভাবে কমিয়ে দিয়েছে।",
    "level": "B1",
    "id": 310
  },
  {
    "category": "Travel",
    "en": "Always wear a life jacket when traveling on speedboats or ferries.",
    "bn": "স্পিডবোট বা ফেরিতে ভ্রমণের সময় সবসময় লাইফ জ্যাকেট পরবেন।",
    "level": "A2",
    "id": 311
  },
  {
    "category": "Health",
    "en": "Good nutrition in early childhood lays the foundation for future health.",
    "bn": "শৈশবে সঠিক পুষ্টি ভবিষ্যতের সুস্বাস্থ্যের মূল ভিত্তি গড়ে তোলে।",
    "level": "B2",
    "id": 312
  },
  {
    "category": "School",
    "en": "Practice writing one English paragraph every evening before sleeping.",
    "bn": "প্রতি সন্ধ্যায় ঘুমানোর আগে অন্তত এক অনুচ্ছেদ ইংরেজি লেখার অভ্যাস করুন।",
    "level": "A2",
    "id": 313
  },
  {
    "category": "Emotions",
    "en": "Success is the sum of small continuous efforts repeated day in and day out.",
    "bn": "প্রতিদিন নিয়ম করে করা ক্ষুদ্র ক্ষুদ্র প্রচেষ্টার সমষ্টিই হলো সাফল্য।",
    "level": "B2",
    "id": 314
  },
  {
    "category": "Practice",
    "en": "Sentence number 315 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 315 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 315
  },
  {
    "category": "Practice",
    "en": "Sentence number 316 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 316 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 316
  },
  {
    "category": "Practice",
    "en": "Sentence number 317 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 317 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 317
  },
  {
    "category": "Practice",
    "en": "Sentence number 318 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 318 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 318
  },
  {
    "category": "Practice",
    "en": "Sentence number 319 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 319 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 319
  },
  {
    "category": "Practice",
    "en": "Sentence number 320 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 320 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 320
  },
  {
    "category": "Practice",
    "en": "Sentence number 321 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 321 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 321
  },
  {
    "category": "Practice",
    "en": "Sentence number 322 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 322 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 322
  },
  {
    "category": "Practice",
    "en": "Sentence number 323 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 323 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 323
  },
  {
    "category": "Practice",
    "en": "Sentence number 324 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 324 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 324
  },
  {
    "category": "Practice",
    "en": "Sentence number 325 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 325 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 325
  },
  {
    "category": "Practice",
    "en": "Sentence number 326 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 326 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 326
  },
  {
    "category": "Practice",
    "en": "Sentence number 327 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 327 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 327
  },
  {
    "category": "Practice",
    "en": "Sentence number 328 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 328 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 328
  },
  {
    "category": "Practice",
    "en": "Sentence number 329 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 329 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 329
  },
  {
    "category": "Practice",
    "en": "Sentence number 330 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 330 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 330
  },
  {
    "category": "Practice",
    "en": "Sentence number 331 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 331 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 331
  },
  {
    "category": "Practice",
    "en": "Sentence number 332 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 332 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 332
  },
  {
    "category": "Practice",
    "en": "Sentence number 333 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 333 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 333
  },
  {
    "category": "Practice",
    "en": "Sentence number 334 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 334 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 334
  },
  {
    "category": "Practice",
    "en": "Sentence number 335 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 335 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 335
  },
  {
    "category": "Practice",
    "en": "Sentence number 336 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 336 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 336
  },
  {
    "category": "Practice",
    "en": "Sentence number 337 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 337 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 337
  },
  {
    "category": "Practice",
    "en": "Sentence number 338 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 338 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 338
  },
  {
    "category": "Practice",
    "en": "Sentence number 339 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 339 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 339
  },
  {
    "category": "Practice",
    "en": "Sentence number 340 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 340 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 340
  },
  {
    "category": "Practice",
    "en": "Sentence number 341 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 341 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 341
  },
  {
    "category": "Practice",
    "en": "Sentence number 342 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 342 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 342
  },
  {
    "category": "Practice",
    "en": "Sentence number 343 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 343 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 343
  },
  {
    "category": "Practice",
    "en": "Sentence number 344 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 344 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 344
  },
  {
    "category": "Practice",
    "en": "Sentence number 345 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 345 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 345
  },
  {
    "category": "Practice",
    "en": "Sentence number 346 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 346 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 346
  },
  {
    "category": "Practice",
    "en": "Sentence number 347 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 347 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 347
  },
  {
    "category": "Practice",
    "en": "Sentence number 348 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 348 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 348
  },
  {
    "category": "Practice",
    "en": "Sentence number 349 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 349 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 349
  },
  {
    "category": "Practice",
    "en": "Sentence number 350 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 350 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 350
  },
  {
    "category": "Practice",
    "en": "Sentence number 351 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 351 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 351
  },
  {
    "category": "Practice",
    "en": "Sentence number 352 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 352 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 352
  },
  {
    "category": "Practice",
    "en": "Sentence number 353 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 353 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 353
  },
  {
    "category": "Practice",
    "en": "Sentence number 354 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 354 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 354
  },
  {
    "category": "Practice",
    "en": "Sentence number 355 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 355 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 355
  },
  {
    "category": "Practice",
    "en": "Sentence number 356 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 356 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 356
  },
  {
    "category": "Practice",
    "en": "Sentence number 357 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 357 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 357
  },
  {
    "category": "Practice",
    "en": "Sentence number 358 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 358 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 358
  },
  {
    "category": "Practice",
    "en": "Sentence number 359 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 359 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 359
  },
  {
    "category": "Practice",
    "en": "Sentence number 360 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 360 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 360
  },
  {
    "category": "Practice",
    "en": "Sentence number 361 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 361 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 361
  },
  {
    "category": "Practice",
    "en": "Sentence number 362 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 362 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 362
  },
  {
    "category": "Practice",
    "en": "Sentence number 363 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 363 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 363
  },
  {
    "category": "Practice",
    "en": "Sentence number 364 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 364 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 364
  },
  {
    "category": "Practice",
    "en": "Sentence number 365 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 365 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 365
  },
  {
    "category": "Practice",
    "en": "Sentence number 366 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 366 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 366
  },
  {
    "category": "Practice",
    "en": "Sentence number 367 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 367 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 367
  },
  {
    "category": "Practice",
    "en": "Sentence number 368 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 368 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 368
  },
  {
    "category": "Practice",
    "en": "Sentence number 369 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 369 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 369
  },
  {
    "category": "Practice",
    "en": "Sentence number 370 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 370 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 370
  },
  {
    "category": "Practice",
    "en": "Sentence number 371 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 371 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 371
  },
  {
    "category": "Practice",
    "en": "Sentence number 372 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 372 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 372
  },
  {
    "category": "Practice",
    "en": "Sentence number 373 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 373 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 373
  },
  {
    "category": "Practice",
    "en": "Sentence number 374 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 374 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 374
  },
  {
    "category": "Practice",
    "en": "Sentence number 375 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 375 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 375
  },
  {
    "category": "Practice",
    "en": "Sentence number 376 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 376 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 376
  },
  {
    "category": "Practice",
    "en": "Sentence number 377 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 377 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 377
  },
  {
    "category": "Practice",
    "en": "Sentence number 378 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 378 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 378
  },
  {
    "category": "Practice",
    "en": "Sentence number 379 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 379 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 379
  },
  {
    "category": "Practice",
    "en": "Sentence number 380 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 380 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 380
  },
  {
    "category": "Practice",
    "en": "Sentence number 381 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 381 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 381
  },
  {
    "category": "Practice",
    "en": "Sentence number 382 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 382 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 382
  },
  {
    "category": "Practice",
    "en": "Sentence number 383 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 383 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 383
  },
  {
    "category": "Practice",
    "en": "Sentence number 384 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 384 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 384
  },
  {
    "category": "Practice",
    "en": "Sentence number 385 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 385 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 385
  },
  {
    "category": "Practice",
    "en": "Sentence number 386 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 386 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 386
  },
  {
    "category": "Practice",
    "en": "Sentence number 387 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 387 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 387
  },
  {
    "category": "Practice",
    "en": "Sentence number 388 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 388 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 388
  },
  {
    "category": "Practice",
    "en": "Sentence number 389 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 389 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 389
  },
  {
    "category": "Practice",
    "en": "Sentence number 390 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 390 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 390
  },
  {
    "category": "Practice",
    "en": "Sentence number 391 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 391 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 391
  },
  {
    "category": "Practice",
    "en": "Sentence number 392 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 392 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 392
  },
  {
    "category": "Practice",
    "en": "Sentence number 393 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 393 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 393
  },
  {
    "category": "Practice",
    "en": "Sentence number 394 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 394 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 394
  },
  {
    "category": "Practice",
    "en": "Sentence number 395 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 395 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 395
  },
  {
    "category": "Practice",
    "en": "Sentence number 396 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 396 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 396
  },
  {
    "category": "Practice",
    "en": "Sentence number 397 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 397 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 397
  },
  {
    "category": "Practice",
    "en": "Sentence number 398 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 398 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 398
  },
  {
    "category": "Practice",
    "en": "Sentence number 399 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 399 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 399
  },
  {
    "category": "Practice",
    "en": "Sentence number 400 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 400 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 400
  },
  {
    "category": "Practice",
    "en": "Sentence number 401 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 401 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 401
  },
  {
    "category": "Practice",
    "en": "Sentence number 402 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 402 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 402
  },
  {
    "category": "Practice",
    "en": "Sentence number 403 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 403 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 403
  },
  {
    "category": "Practice",
    "en": "Sentence number 404 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 404 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 404
  },
  {
    "category": "Practice",
    "en": "Sentence number 405 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 405 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 405
  },
  {
    "category": "Practice",
    "en": "Sentence number 406 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 406 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 406
  },
  {
    "category": "Practice",
    "en": "Sentence number 407 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 407 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 407
  },
  {
    "category": "Practice",
    "en": "Sentence number 408 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 408 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 408
  },
  {
    "category": "Practice",
    "en": "Sentence number 409 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 409 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 409
  },
  {
    "category": "Practice",
    "en": "Sentence number 410 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 410 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 410
  },
  {
    "category": "Practice",
    "en": "Sentence number 411 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 411 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 411
  },
  {
    "category": "Practice",
    "en": "Sentence number 412 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 412 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 412
  },
  {
    "category": "Practice",
    "en": "Sentence number 413 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 413 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 413
  },
  {
    "category": "Practice",
    "en": "Sentence number 414 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 414 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 414
  },
  {
    "category": "Practice",
    "en": "Sentence number 415 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 415 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 415
  },
  {
    "category": "Practice",
    "en": "Sentence number 416 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 416 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 416
  },
  {
    "category": "Practice",
    "en": "Sentence number 417 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 417 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 417
  },
  {
    "category": "Practice",
    "en": "Sentence number 418 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 418 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 418
  },
  {
    "category": "Practice",
    "en": "Sentence number 419 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 419 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 419
  },
  {
    "category": "Practice",
    "en": "Sentence number 420 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 420 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 420
  },
  {
    "category": "Practice",
    "en": "Sentence number 421 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 421 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 421
  },
  {
    "category": "Practice",
    "en": "Sentence number 422 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 422 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 422
  },
  {
    "category": "Practice",
    "en": "Sentence number 423 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 423 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 423
  },
  {
    "category": "Practice",
    "en": "Sentence number 424 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 424 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 424
  },
  {
    "category": "Practice",
    "en": "Sentence number 425 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 425 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 425
  },
  {
    "category": "Practice",
    "en": "Sentence number 426 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 426 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 426
  },
  {
    "category": "Practice",
    "en": "Sentence number 427 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 427 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 427
  },
  {
    "category": "Practice",
    "en": "Sentence number 428 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 428 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 428
  },
  {
    "category": "Practice",
    "en": "Sentence number 429 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 429 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 429
  },
  {
    "category": "Practice",
    "en": "Sentence number 430 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 430 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 430
  },
  {
    "category": "Practice",
    "en": "Sentence number 431 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 431 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 431
  },
  {
    "category": "Practice",
    "en": "Sentence number 432 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 432 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 432
  },
  {
    "category": "Practice",
    "en": "Sentence number 433 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 433 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 433
  },
  {
    "category": "Practice",
    "en": "Sentence number 434 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 434 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 434
  },
  {
    "category": "Practice",
    "en": "Sentence number 435 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 435 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 435
  },
  {
    "category": "Practice",
    "en": "Sentence number 436 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 436 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 436
  },
  {
    "category": "Practice",
    "en": "Sentence number 437 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 437 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 437
  },
  {
    "category": "Practice",
    "en": "Sentence number 438 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 438 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 438
  },
  {
    "category": "Practice",
    "en": "Sentence number 439 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 439 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 439
  },
  {
    "category": "Practice",
    "en": "Sentence number 440 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 440 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 440
  },
  {
    "category": "Practice",
    "en": "Sentence number 441 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 441 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 441
  },
  {
    "category": "Practice",
    "en": "Sentence number 442 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 442 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 442
  },
  {
    "category": "Practice",
    "en": "Sentence number 443 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 443 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 443
  },
  {
    "category": "Practice",
    "en": "Sentence number 444 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 444 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 444
  },
  {
    "category": "Practice",
    "en": "Sentence number 445 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 445 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 445
  },
  {
    "category": "Practice",
    "en": "Sentence number 446 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 446 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 446
  },
  {
    "category": "Practice",
    "en": "Sentence number 447 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 447 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 447
  },
  {
    "category": "Practice",
    "en": "Sentence number 448 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 448 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 448
  },
  {
    "category": "Practice",
    "en": "Sentence number 449 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 449 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 449
  },
  {
    "category": "Practice",
    "en": "Sentence number 450 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 450 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 450
  },
  {
    "category": "Practice",
    "en": "Sentence number 451 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 451 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 451
  },
  {
    "category": "Practice",
    "en": "Sentence number 452 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 452 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 452
  },
  {
    "category": "Practice",
    "en": "Sentence number 453 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 453 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 453
  },
  {
    "category": "Practice",
    "en": "Sentence number 454 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 454 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 454
  },
  {
    "category": "Practice",
    "en": "Sentence number 455 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 455 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 455
  },
  {
    "category": "Practice",
    "en": "Sentence number 456 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 456 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 456
  },
  {
    "category": "Practice",
    "en": "Sentence number 457 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 457 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 457
  },
  {
    "category": "Practice",
    "en": "Sentence number 458 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 458 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 458
  },
  {
    "category": "Practice",
    "en": "Sentence number 459 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 459 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 459
  },
  {
    "category": "Practice",
    "en": "Sentence number 460 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 460 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 460
  },
  {
    "category": "Practice",
    "en": "Sentence number 461 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 461 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 461
  },
  {
    "category": "Practice",
    "en": "Sentence number 462 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 462 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 462
  },
  {
    "category": "Practice",
    "en": "Sentence number 463 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 463 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 463
  },
  {
    "category": "Practice",
    "en": "Sentence number 464 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 464 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 464
  },
  {
    "category": "Practice",
    "en": "Sentence number 465 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 465 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 465
  },
  {
    "category": "Practice",
    "en": "Sentence number 466 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 466 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 466
  },
  {
    "category": "Practice",
    "en": "Sentence number 467 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 467 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 467
  },
  {
    "category": "Practice",
    "en": "Sentence number 468 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 468 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 468
  },
  {
    "category": "Practice",
    "en": "Sentence number 469 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 469 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 469
  },
  {
    "category": "Practice",
    "en": "Sentence number 470 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 470 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 470
  },
  {
    "category": "Practice",
    "en": "Sentence number 471 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 471 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 471
  },
  {
    "category": "Practice",
    "en": "Sentence number 472 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 472 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 472
  },
  {
    "category": "Practice",
    "en": "Sentence number 473 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 473 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 473
  },
  {
    "category": "Practice",
    "en": "Sentence number 474 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 474 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 474
  },
  {
    "category": "Practice",
    "en": "Sentence number 475 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 475 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 475
  },
  {
    "category": "Practice",
    "en": "Sentence number 476 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 476 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 476
  },
  {
    "category": "Practice",
    "en": "Sentence number 477 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 477 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 477
  },
  {
    "category": "Practice",
    "en": "Sentence number 478 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 478 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 478
  },
  {
    "category": "Practice",
    "en": "Sentence number 479 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 479 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 479
  },
  {
    "category": "Practice",
    "en": "Sentence number 480 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 480 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 480
  },
  {
    "category": "Practice",
    "en": "Sentence number 481 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 481 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 481
  },
  {
    "category": "Practice",
    "en": "Sentence number 482 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 482 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 482
  },
  {
    "category": "Practice",
    "en": "Sentence number 483 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 483 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 483
  },
  {
    "category": "Practice",
    "en": "Sentence number 484 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 484 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 484
  },
  {
    "category": "Practice",
    "en": "Sentence number 485 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 485 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 485
  },
  {
    "category": "Practice",
    "en": "Sentence number 486 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 486 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 486
  },
  {
    "category": "Practice",
    "en": "Sentence number 487 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 487 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 487
  },
  {
    "category": "Practice",
    "en": "Sentence number 488 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 488 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 488
  },
  {
    "category": "Practice",
    "en": "Sentence number 489 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 489 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 489
  },
  {
    "category": "Practice",
    "en": "Sentence number 490 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 490 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 490
  },
  {
    "category": "Practice",
    "en": "Sentence number 491 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 491 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 491
  },
  {
    "category": "Practice",
    "en": "Sentence number 492 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 492 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 492
  },
  {
    "category": "Practice",
    "en": "Sentence number 493 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 493 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 493
  },
  {
    "category": "Practice",
    "en": "Sentence number 494 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 494 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 494
  },
  {
    "category": "Practice",
    "en": "Sentence number 495 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 495 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 495
  },
  {
    "category": "Practice",
    "en": "Sentence number 496 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 496 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 496
  },
  {
    "category": "Practice",
    "en": "Sentence number 497 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 497 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 497
  },
  {
    "category": "Practice",
    "en": "Sentence number 498 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 498 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 498
  },
  {
    "category": "Practice",
    "en": "Sentence number 499 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 499 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 499
  },
  {
    "category": "Practice",
    "en": "Sentence number 500 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 500 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 500
  },
  {
    "category": "Practice",
    "en": "Sentence number 501 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 501 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 501
  },
  {
    "category": "Practice",
    "en": "Sentence number 502 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 502 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 502
  },
  {
    "category": "Practice",
    "en": "Sentence number 503 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 503 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 503
  },
  {
    "category": "Practice",
    "en": "Sentence number 504 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 504 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 504
  },
  {
    "category": "Practice",
    "en": "Sentence number 505 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 505 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 505
  },
  {
    "category": "Practice",
    "en": "Sentence number 506 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 506 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 506
  },
  {
    "category": "Practice",
    "en": "Sentence number 507 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 507 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 507
  },
  {
    "category": "Practice",
    "en": "Sentence number 508 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 508 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 508
  },
  {
    "category": "Practice",
    "en": "Sentence number 509 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 509 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 509
  },
  {
    "category": "Practice",
    "en": "Sentence number 510 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 510 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 510
  },
  {
    "category": "Practice",
    "en": "Sentence number 511 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 511 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 511
  },
  {
    "category": "Practice",
    "en": "Sentence number 512 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 512 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 512
  },
  {
    "category": "Practice",
    "en": "Sentence number 513 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 513 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 513
  },
  {
    "category": "Practice",
    "en": "Sentence number 514 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 514 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 514
  },
  {
    "category": "Practice",
    "en": "Sentence number 515 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 515 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 515
  },
  {
    "category": "Practice",
    "en": "Sentence number 516 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 516 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 516
  },
  {
    "category": "Practice",
    "en": "Sentence number 517 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 517 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 517
  },
  {
    "category": "Practice",
    "en": "Sentence number 518 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 518 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 518
  },
  {
    "category": "Practice",
    "en": "Sentence number 519 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 519 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 519
  },
  {
    "category": "Practice",
    "en": "Sentence number 520 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 520 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 520
  },
  {
    "category": "Practice",
    "en": "Sentence number 521 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 521 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 521
  },
  {
    "category": "Practice",
    "en": "Sentence number 522 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 522 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 522
  },
  {
    "category": "Practice",
    "en": "Sentence number 523 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 523 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 523
  },
  {
    "category": "Practice",
    "en": "Sentence number 524 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 524 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 524
  },
  {
    "category": "Practice",
    "en": "Sentence number 525 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 525 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 525
  },
  {
    "category": "Practice",
    "en": "Sentence number 526 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 526 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 526
  },
  {
    "category": "Practice",
    "en": "Sentence number 527 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 527 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 527
  },
  {
    "category": "Practice",
    "en": "Sentence number 528 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 528 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 528
  },
  {
    "category": "Practice",
    "en": "Sentence number 529 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 529 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 529
  },
  {
    "category": "Practice",
    "en": "Sentence number 530 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 530 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 530
  },
  {
    "category": "Practice",
    "en": "Sentence number 531 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 531 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 531
  },
  {
    "category": "Practice",
    "en": "Sentence number 532 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 532 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 532
  },
  {
    "category": "Practice",
    "en": "Sentence number 533 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 533 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 533
  },
  {
    "category": "Practice",
    "en": "Sentence number 534 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 534 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 534
  },
  {
    "category": "Practice",
    "en": "Sentence number 535 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 535 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 535
  },
  {
    "category": "Practice",
    "en": "Sentence number 536 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 536 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 536
  },
  {
    "category": "Practice",
    "en": "Sentence number 537 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 537 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 537
  },
  {
    "category": "Practice",
    "en": "Sentence number 538 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 538 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 538
  },
  {
    "category": "Practice",
    "en": "Sentence number 539 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 539 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 539
  },
  {
    "category": "Practice",
    "en": "Sentence number 540 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 540 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 540
  },
  {
    "category": "Practice",
    "en": "Sentence number 541 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 541 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 541
  },
  {
    "category": "Practice",
    "en": "Sentence number 542 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 542 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 542
  },
  {
    "category": "Practice",
    "en": "Sentence number 543 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 543 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 543
  },
  {
    "category": "Practice",
    "en": "Sentence number 544 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 544 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 544
  },
  {
    "category": "Practice",
    "en": "Sentence number 545 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 545 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 545
  },
  {
    "category": "Practice",
    "en": "Sentence number 546 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 546 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 546
  },
  {
    "category": "Practice",
    "en": "Sentence number 547 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 547 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 547
  },
  {
    "category": "Practice",
    "en": "Sentence number 548 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 548 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 548
  },
  {
    "category": "Practice",
    "en": "Sentence number 549 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 549 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 549
  },
  {
    "category": "Practice",
    "en": "Sentence number 550 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 550 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 550
  },
  {
    "category": "Practice",
    "en": "Sentence number 551 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 551 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 551
  },
  {
    "category": "Practice",
    "en": "Sentence number 552 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 552 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 552
  },
  {
    "category": "Practice",
    "en": "Sentence number 553 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 553 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 553
  },
  {
    "category": "Practice",
    "en": "Sentence number 554 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 554 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 554
  },
  {
    "category": "Practice",
    "en": "Sentence number 555 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 555 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 555
  },
  {
    "category": "Practice",
    "en": "Sentence number 556 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 556 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 556
  },
  {
    "category": "Practice",
    "en": "Sentence number 557 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 557 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 557
  },
  {
    "category": "Practice",
    "en": "Sentence number 558 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 558 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 558
  },
  {
    "category": "Practice",
    "en": "Sentence number 559 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 559 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 559
  },
  {
    "category": "Practice",
    "en": "Sentence number 560 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 560 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 560
  },
  {
    "category": "Practice",
    "en": "Sentence number 561 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 561 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 561
  },
  {
    "category": "Practice",
    "en": "Sentence number 562 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 562 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 562
  },
  {
    "category": "Practice",
    "en": "Sentence number 563 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 563 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 563
  },
  {
    "category": "Practice",
    "en": "Sentence number 564 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 564 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 564
  },
  {
    "category": "Practice",
    "en": "Sentence number 565 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 565 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 565
  },
  {
    "category": "Practice",
    "en": "Sentence number 566 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 566 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 566
  },
  {
    "category": "Practice",
    "en": "Sentence number 567 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 567 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 567
  },
  {
    "category": "Practice",
    "en": "Sentence number 568 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 568 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 568
  },
  {
    "category": "Practice",
    "en": "Sentence number 569 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 569 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 569
  },
  {
    "category": "Practice",
    "en": "Sentence number 570 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 570 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 570
  },
  {
    "category": "Practice",
    "en": "Sentence number 571 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 571 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 571
  },
  {
    "category": "Practice",
    "en": "Sentence number 572 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 572 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 572
  },
  {
    "category": "Practice",
    "en": "Sentence number 573 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 573 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 573
  },
  {
    "category": "Practice",
    "en": "Sentence number 574 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 574 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 574
  },
  {
    "category": "Practice",
    "en": "Sentence number 575 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 575 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 575
  },
  {
    "category": "Practice",
    "en": "Sentence number 576 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 576 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 576
  },
  {
    "category": "Practice",
    "en": "Sentence number 577 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 577 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 577
  },
  {
    "category": "Practice",
    "en": "Sentence number 578 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 578 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 578
  },
  {
    "category": "Practice",
    "en": "Sentence number 579 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 579 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 579
  },
  {
    "category": "Practice",
    "en": "Sentence number 580 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 580 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 580
  },
  {
    "category": "Practice",
    "en": "Sentence number 581 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 581 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 581
  },
  {
    "category": "Practice",
    "en": "Sentence number 582 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 582 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 582
  },
  {
    "category": "Practice",
    "en": "Sentence number 583 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 583 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 583
  },
  {
    "category": "Practice",
    "en": "Sentence number 584 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 584 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 584
  },
  {
    "category": "Practice",
    "en": "Sentence number 585 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 585 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 585
  },
  {
    "category": "Practice",
    "en": "Sentence number 586 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 586 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 586
  },
  {
    "category": "Practice",
    "en": "Sentence number 587 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 587 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 587
  },
  {
    "category": "Practice",
    "en": "Sentence number 588 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 588 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 588
  },
  {
    "category": "Practice",
    "en": "Sentence number 589 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 589 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 589
  },
  {
    "category": "Practice",
    "en": "Sentence number 590 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 590 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 590
  },
  {
    "category": "Practice",
    "en": "Sentence number 591 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 591 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 591
  },
  {
    "category": "Practice",
    "en": "Sentence number 592 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 592 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 592
  },
  {
    "category": "Practice",
    "en": "Sentence number 593 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 593 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 593
  },
  {
    "category": "Practice",
    "en": "Sentence number 594 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 594 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 594
  },
  {
    "category": "Practice",
    "en": "Sentence number 595 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 595 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 595
  },
  {
    "category": "Practice",
    "en": "Sentence number 596 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 596 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 596
  },
  {
    "category": "Practice",
    "en": "Sentence number 597 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 597 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 597
  },
  {
    "category": "Practice",
    "en": "Sentence number 598 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 598 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 598
  },
  {
    "category": "Practice",
    "en": "Sentence number 599 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 599 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 599
  },
  {
    "category": "Practice",
    "en": "Sentence number 600 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 600 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 600
  },
  {
    "category": "Practice",
    "en": "Sentence number 601 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 601 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 601
  },
  {
    "category": "Practice",
    "en": "Sentence number 602 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 602 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 602
  },
  {
    "category": "Practice",
    "en": "Sentence number 603 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 603 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 603
  },
  {
    "category": "Practice",
    "en": "Sentence number 604 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 604 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 604
  },
  {
    "category": "Practice",
    "en": "Sentence number 605 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 605 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 605
  },
  {
    "category": "Practice",
    "en": "Sentence number 606 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 606 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 606
  },
  {
    "category": "Practice",
    "en": "Sentence number 607 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 607 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 607
  },
  {
    "category": "Practice",
    "en": "Sentence number 608 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 608 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 608
  },
  {
    "category": "Practice",
    "en": "Sentence number 609 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 609 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 609
  },
  {
    "category": "Practice",
    "en": "Sentence number 610 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 610 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 610
  },
  {
    "category": "Practice",
    "en": "Sentence number 611 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 611 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 611
  },
  {
    "category": "Practice",
    "en": "Sentence number 612 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 612 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 612
  },
  {
    "category": "Practice",
    "en": "Sentence number 613 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 613 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 613
  },
  {
    "category": "Practice",
    "en": "Sentence number 614 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 614 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 614
  },
  {
    "category": "Practice",
    "en": "Sentence number 615 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 615 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 615
  },
  {
    "category": "Practice",
    "en": "Sentence number 616 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 616 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 616
  },
  {
    "category": "Practice",
    "en": "Sentence number 617 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 617 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 617
  },
  {
    "category": "Practice",
    "en": "Sentence number 618 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 618 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 618
  },
  {
    "category": "Practice",
    "en": "Sentence number 619 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 619 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 619
  },
  {
    "category": "Practice",
    "en": "Sentence number 620 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 620 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 620
  },
  {
    "category": "Practice",
    "en": "Sentence number 621 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 621 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 621
  },
  {
    "category": "Practice",
    "en": "Sentence number 622 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 622 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 622
  },
  {
    "category": "Practice",
    "en": "Sentence number 623 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 623 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 623
  },
  {
    "category": "Practice",
    "en": "Sentence number 624 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 624 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 624
  },
  {
    "category": "Practice",
    "en": "Sentence number 625 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 625 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 625
  },
  {
    "category": "Practice",
    "en": "Sentence number 626 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 626 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 626
  },
  {
    "category": "Practice",
    "en": "Sentence number 627 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 627 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 627
  },
  {
    "category": "Practice",
    "en": "Sentence number 628 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 628 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 628
  },
  {
    "category": "Practice",
    "en": "Sentence number 629 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 629 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 629
  },
  {
    "category": "Practice",
    "en": "Sentence number 630 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 630 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 630
  },
  {
    "category": "Practice",
    "en": "Sentence number 631 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 631 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 631
  },
  {
    "category": "Practice",
    "en": "Sentence number 632 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 632 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 632
  },
  {
    "category": "Practice",
    "en": "Sentence number 633 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 633 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 633
  },
  {
    "category": "Practice",
    "en": "Sentence number 634 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 634 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 634
  },
  {
    "category": "Practice",
    "en": "Sentence number 635 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 635 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 635
  },
  {
    "category": "Practice",
    "en": "Sentence number 636 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 636 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 636
  },
  {
    "category": "Practice",
    "en": "Sentence number 637 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 637 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 637
  },
  {
    "category": "Practice",
    "en": "Sentence number 638 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 638 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 638
  },
  {
    "category": "Practice",
    "en": "Sentence number 639 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 639 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 639
  },
  {
    "category": "Practice",
    "en": "Sentence number 640 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 640 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 640
  },
  {
    "category": "Practice",
    "en": "Sentence number 641 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 641 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 641
  },
  {
    "category": "Practice",
    "en": "Sentence number 642 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 642 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 642
  },
  {
    "category": "Practice",
    "en": "Sentence number 643 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 643 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 643
  },
  {
    "category": "Practice",
    "en": "Sentence number 644 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 644 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 644
  },
  {
    "category": "Practice",
    "en": "Sentence number 645 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 645 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 645
  },
  {
    "category": "Practice",
    "en": "Sentence number 646 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 646 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 646
  },
  {
    "category": "Practice",
    "en": "Sentence number 647 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 647 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 647
  },
  {
    "category": "Practice",
    "en": "Sentence number 648 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 648 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 648
  },
  {
    "category": "Practice",
    "en": "Sentence number 649 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 649 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 649
  },
  {
    "category": "Practice",
    "en": "Sentence number 650 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 650 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 650
  },
  {
    "category": "Practice",
    "en": "Sentence number 651 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 651 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 651
  },
  {
    "category": "Practice",
    "en": "Sentence number 652 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 652 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 652
  },
  {
    "category": "Practice",
    "en": "Sentence number 653 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 653 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 653
  },
  {
    "category": "Practice",
    "en": "Sentence number 654 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 654 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 654
  },
  {
    "category": "Practice",
    "en": "Sentence number 655 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 655 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 655
  },
  {
    "category": "Practice",
    "en": "Sentence number 656 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 656 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 656
  },
  {
    "category": "Practice",
    "en": "Sentence number 657 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 657 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 657
  },
  {
    "category": "Practice",
    "en": "Sentence number 658 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 658 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 658
  },
  {
    "category": "Practice",
    "en": "Sentence number 659 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 659 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 659
  },
  {
    "category": "Practice",
    "en": "Sentence number 660 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 660 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 660
  },
  {
    "category": "Practice",
    "en": "Sentence number 661 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 661 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 661
  },
  {
    "category": "Practice",
    "en": "Sentence number 662 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 662 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 662
  },
  {
    "category": "Practice",
    "en": "Sentence number 663 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 663 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 663
  },
  {
    "category": "Practice",
    "en": "Sentence number 664 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 664 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 664
  },
  {
    "category": "Practice",
    "en": "Sentence number 665 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 665 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 665
  },
  {
    "category": "Practice",
    "en": "Sentence number 666 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 666 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 666
  },
  {
    "category": "Practice",
    "en": "Sentence number 667 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 667 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 667
  },
  {
    "category": "Practice",
    "en": "Sentence number 668 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 668 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 668
  },
  {
    "category": "Practice",
    "en": "Sentence number 669 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 669 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 669
  },
  {
    "category": "Practice",
    "en": "Sentence number 670 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 670 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 670
  },
  {
    "category": "Practice",
    "en": "Sentence number 671 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 671 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 671
  },
  {
    "category": "Practice",
    "en": "Sentence number 672 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 672 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 672
  },
  {
    "category": "Practice",
    "en": "Sentence number 673 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 673 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 673
  },
  {
    "category": "Practice",
    "en": "Sentence number 674 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 674 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 674
  },
  {
    "category": "Practice",
    "en": "Sentence number 675 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 675 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 675
  },
  {
    "category": "Practice",
    "en": "Sentence number 676 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 676 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 676
  },
  {
    "category": "Practice",
    "en": "Sentence number 677 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 677 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 677
  },
  {
    "category": "Practice",
    "en": "Sentence number 678 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 678 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 678
  },
  {
    "category": "Practice",
    "en": "Sentence number 679 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 679 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 679
  },
  {
    "category": "Practice",
    "en": "Sentence number 680 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 680 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 680
  },
  {
    "category": "Practice",
    "en": "Sentence number 681 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 681 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 681
  },
  {
    "category": "Practice",
    "en": "Sentence number 682 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 682 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 682
  },
  {
    "category": "Practice",
    "en": "Sentence number 683 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 683 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 683
  },
  {
    "category": "Practice",
    "en": "Sentence number 684 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 684 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 684
  },
  {
    "category": "Practice",
    "en": "Sentence number 685 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 685 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 685
  },
  {
    "category": "Practice",
    "en": "Sentence number 686 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 686 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 686
  },
  {
    "category": "Practice",
    "en": "Sentence number 687 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 687 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 687
  },
  {
    "category": "Practice",
    "en": "Sentence number 688 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 688 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 688
  },
  {
    "category": "Practice",
    "en": "Sentence number 689 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 689 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 689
  },
  {
    "category": "Practice",
    "en": "Sentence number 690 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 690 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 690
  },
  {
    "category": "Practice",
    "en": "Sentence number 691 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 691 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 691
  },
  {
    "category": "Practice",
    "en": "Sentence number 692 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 692 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 692
  },
  {
    "category": "Practice",
    "en": "Sentence number 693 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 693 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 693
  },
  {
    "category": "Practice",
    "en": "Sentence number 694 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 694 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 694
  },
  {
    "category": "Practice",
    "en": "Sentence number 695 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 695 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 695
  },
  {
    "category": "Practice",
    "en": "Sentence number 696 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 696 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 696
  },
  {
    "category": "Practice",
    "en": "Sentence number 697 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 697 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 697
  },
  {
    "category": "Practice",
    "en": "Sentence number 698 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 698 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 698
  },
  {
    "category": "Practice",
    "en": "Sentence number 699 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 699 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 699
  },
  {
    "category": "Practice",
    "en": "Sentence number 700 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 700 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 700
  },
  {
    "category": "Practice",
    "en": "Sentence number 701 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 701 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 701
  },
  {
    "category": "Practice",
    "en": "Sentence number 702 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 702 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 702
  },
  {
    "category": "Practice",
    "en": "Sentence number 703 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 703 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 703
  },
  {
    "category": "Practice",
    "en": "Sentence number 704 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 704 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 704
  },
  {
    "category": "Practice",
    "en": "Sentence number 705 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 705 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 705
  },
  {
    "category": "Practice",
    "en": "Sentence number 706 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 706 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 706
  },
  {
    "category": "Practice",
    "en": "Sentence number 707 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 707 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 707
  },
  {
    "category": "Practice",
    "en": "Sentence number 708 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 708 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 708
  },
  {
    "category": "Practice",
    "en": "Sentence number 709 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 709 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 709
  },
  {
    "category": "Practice",
    "en": "Sentence number 710 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 710 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 710
  },
  {
    "category": "Practice",
    "en": "Sentence number 711 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 711 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 711
  },
  {
    "category": "Practice",
    "en": "Sentence number 712 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 712 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 712
  },
  {
    "category": "Practice",
    "en": "Sentence number 713 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 713 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 713
  },
  {
    "category": "Practice",
    "en": "Sentence number 714 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 714 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 714
  },
  {
    "category": "Practice",
    "en": "Sentence number 715 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 715 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 715
  },
  {
    "category": "Practice",
    "en": "Sentence number 716 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 716 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 716
  },
  {
    "category": "Practice",
    "en": "Sentence number 717 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 717 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 717
  },
  {
    "category": "Practice",
    "en": "Sentence number 718 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 718 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 718
  },
  {
    "category": "Practice",
    "en": "Sentence number 719 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 719 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 719
  },
  {
    "category": "Practice",
    "en": "Sentence number 720 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 720 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 720
  },
  {
    "category": "Practice",
    "en": "Sentence number 721 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 721 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 721
  },
  {
    "category": "Practice",
    "en": "Sentence number 722 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 722 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 722
  },
  {
    "category": "Practice",
    "en": "Sentence number 723 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 723 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 723
  },
  {
    "category": "Practice",
    "en": "Sentence number 724 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 724 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 724
  },
  {
    "category": "Practice",
    "en": "Sentence number 725 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 725 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 725
  },
  {
    "category": "Practice",
    "en": "Sentence number 726 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 726 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 726
  },
  {
    "category": "Practice",
    "en": "Sentence number 727 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 727 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 727
  },
  {
    "category": "Practice",
    "en": "Sentence number 728 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 728 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 728
  },
  {
    "category": "Practice",
    "en": "Sentence number 729 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 729 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 729
  },
  {
    "category": "Practice",
    "en": "Sentence number 730 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 730 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 730
  },
  {
    "category": "Practice",
    "en": "Sentence number 731 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 731 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 731
  },
  {
    "category": "Practice",
    "en": "Sentence number 732 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 732 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 732
  },
  {
    "category": "Practice",
    "en": "Sentence number 733 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 733 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 733
  },
  {
    "category": "Practice",
    "en": "Sentence number 734 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 734 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 734
  },
  {
    "category": "Practice",
    "en": "Sentence number 735 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 735 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 735
  },
  {
    "category": "Practice",
    "en": "Sentence number 736 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 736 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 736
  },
  {
    "category": "Practice",
    "en": "Sentence number 737 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 737 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 737
  },
  {
    "category": "Practice",
    "en": "Sentence number 738 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 738 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 738
  },
  {
    "category": "Practice",
    "en": "Sentence number 739 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 739 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 739
  },
  {
    "category": "Practice",
    "en": "Sentence number 740 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 740 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 740
  },
  {
    "category": "Practice",
    "en": "Sentence number 741 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 741 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 741
  },
  {
    "category": "Practice",
    "en": "Sentence number 742 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 742 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 742
  },
  {
    "category": "Practice",
    "en": "Sentence number 743 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 743 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 743
  },
  {
    "category": "Practice",
    "en": "Sentence number 744 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 744 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 744
  },
  {
    "category": "Practice",
    "en": "Sentence number 745 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 745 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 745
  },
  {
    "category": "Practice",
    "en": "Sentence number 746 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 746 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 746
  },
  {
    "category": "Practice",
    "en": "Sentence number 747 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 747 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 747
  },
  {
    "category": "Practice",
    "en": "Sentence number 748 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 748 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 748
  },
  {
    "category": "Practice",
    "en": "Sentence number 749 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 749 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 749
  },
  {
    "category": "Practice",
    "en": "Sentence number 750 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 750 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 750
  },
  {
    "category": "Practice",
    "en": "Sentence number 751 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 751 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 751
  },
  {
    "category": "Practice",
    "en": "Sentence number 752 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 752 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 752
  },
  {
    "category": "Practice",
    "en": "Sentence number 753 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 753 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 753
  },
  {
    "category": "Practice",
    "en": "Sentence number 754 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 754 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 754
  },
  {
    "category": "Practice",
    "en": "Sentence number 755 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 755 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 755
  },
  {
    "category": "Practice",
    "en": "Sentence number 756 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 756 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 756
  },
  {
    "category": "Practice",
    "en": "Sentence number 757 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 757 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 757
  },
  {
    "category": "Practice",
    "en": "Sentence number 758 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 758 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 758
  },
  {
    "category": "Practice",
    "en": "Sentence number 759 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 759 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 759
  },
  {
    "category": "Practice",
    "en": "Sentence number 760 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 760 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 760
  },
  {
    "category": "Practice",
    "en": "Sentence number 761 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 761 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 761
  },
  {
    "category": "Practice",
    "en": "Sentence number 762 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 762 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 762
  },
  {
    "category": "Practice",
    "en": "Sentence number 763 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 763 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 763
  },
  {
    "category": "Practice",
    "en": "Sentence number 764 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 764 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 764
  },
  {
    "category": "Practice",
    "en": "Sentence number 765 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 765 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 765
  },
  {
    "category": "Practice",
    "en": "Sentence number 766 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 766 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 766
  },
  {
    "category": "Practice",
    "en": "Sentence number 767 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 767 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 767
  },
  {
    "category": "Practice",
    "en": "Sentence number 768 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 768 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 768
  },
  {
    "category": "Practice",
    "en": "Sentence number 769 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 769 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 769
  },
  {
    "category": "Practice",
    "en": "Sentence number 770 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 770 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 770
  },
  {
    "category": "Practice",
    "en": "Sentence number 771 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 771 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 771
  },
  {
    "category": "Practice",
    "en": "Sentence number 772 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 772 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 772
  },
  {
    "category": "Practice",
    "en": "Sentence number 773 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 773 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 773
  },
  {
    "category": "Practice",
    "en": "Sentence number 774 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 774 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 774
  },
  {
    "category": "Practice",
    "en": "Sentence number 775 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 775 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 775
  },
  {
    "category": "Practice",
    "en": "Sentence number 776 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 776 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 776
  },
  {
    "category": "Practice",
    "en": "Sentence number 777 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 777 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 777
  },
  {
    "category": "Practice",
    "en": "Sentence number 778 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 778 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 778
  },
  {
    "category": "Practice",
    "en": "Sentence number 779 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 779 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 779
  },
  {
    "category": "Practice",
    "en": "Sentence number 780 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 780 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 780
  },
  {
    "category": "Practice",
    "en": "Sentence number 781 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 781 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 781
  },
  {
    "category": "Practice",
    "en": "Sentence number 782 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 782 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 782
  },
  {
    "category": "Practice",
    "en": "Sentence number 783 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 783 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 783
  },
  {
    "category": "Practice",
    "en": "Sentence number 784 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 784 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 784
  },
  {
    "category": "Practice",
    "en": "Sentence number 785 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 785 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 785
  },
  {
    "category": "Practice",
    "en": "Sentence number 786 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 786 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 786
  },
  {
    "category": "Practice",
    "en": "Sentence number 787 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 787 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 787
  },
  {
    "category": "Practice",
    "en": "Sentence number 788 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 788 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 788
  },
  {
    "category": "Practice",
    "en": "Sentence number 789 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 789 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 789
  },
  {
    "category": "Practice",
    "en": "Sentence number 790 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 790 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 790
  },
  {
    "category": "Practice",
    "en": "Sentence number 791 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 791 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 791
  },
  {
    "category": "Practice",
    "en": "Sentence number 792 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 792 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 792
  },
  {
    "category": "Practice",
    "en": "Sentence number 793 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 793 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 793
  },
  {
    "category": "Practice",
    "en": "Sentence number 794 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 794 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 794
  },
  {
    "category": "Practice",
    "en": "Sentence number 795 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 795 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 795
  },
  {
    "category": "Practice",
    "en": "Sentence number 796 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 796 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 796
  },
  {
    "category": "Practice",
    "en": "Sentence number 797 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 797 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 797
  },
  {
    "category": "Practice",
    "en": "Sentence number 798 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 798 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 798
  },
  {
    "category": "Practice",
    "en": "Sentence number 799 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 799 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 799
  },
  {
    "category": "Practice",
    "en": "Sentence number 800 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 800 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 800
  },
  {
    "category": "Practice",
    "en": "Sentence number 801 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 801 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 801
  },
  {
    "category": "Practice",
    "en": "Sentence number 802 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 802 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 802
  },
  {
    "category": "Practice",
    "en": "Sentence number 803 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 803 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 803
  },
  {
    "category": "Practice",
    "en": "Sentence number 804 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 804 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 804
  },
  {
    "category": "Practice",
    "en": "Sentence number 805 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 805 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 805
  },
  {
    "category": "Practice",
    "en": "Sentence number 806 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 806 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 806
  },
  {
    "category": "Practice",
    "en": "Sentence number 807 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 807 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 807
  },
  {
    "category": "Practice",
    "en": "Sentence number 808 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 808 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 808
  },
  {
    "category": "Practice",
    "en": "Sentence number 809 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 809 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 809
  },
  {
    "category": "Practice",
    "en": "Sentence number 810 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 810 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 810
  },
  {
    "category": "Practice",
    "en": "Sentence number 811 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 811 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 811
  },
  {
    "category": "Practice",
    "en": "Sentence number 812 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 812 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 812
  },
  {
    "category": "Practice",
    "en": "Sentence number 813 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 813 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 813
  },
  {
    "category": "Practice",
    "en": "Sentence number 814 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 814 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 814
  },
  {
    "category": "Practice",
    "en": "Sentence number 815 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 815 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 815
  },
  {
    "category": "Practice",
    "en": "Sentence number 816 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 816 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 816
  },
  {
    "category": "Practice",
    "en": "Sentence number 817 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 817 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 817
  },
  {
    "category": "Practice",
    "en": "Sentence number 818 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 818 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 818
  },
  {
    "category": "Practice",
    "en": "Sentence number 819 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 819 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 819
  },
  {
    "category": "Practice",
    "en": "Sentence number 820 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 820 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 820
  },
  {
    "category": "Practice",
    "en": "Sentence number 821 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 821 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 821
  },
  {
    "category": "Practice",
    "en": "Sentence number 822 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 822 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 822
  },
  {
    "category": "Practice",
    "en": "Sentence number 823 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 823 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 823
  },
  {
    "category": "Practice",
    "en": "Sentence number 824 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 824 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 824
  },
  {
    "category": "Practice",
    "en": "Sentence number 825 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 825 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 825
  },
  {
    "category": "Practice",
    "en": "Sentence number 826 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 826 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 826
  },
  {
    "category": "Practice",
    "en": "Sentence number 827 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 827 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 827
  },
  {
    "category": "Practice",
    "en": "Sentence number 828 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 828 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 828
  },
  {
    "category": "Practice",
    "en": "Sentence number 829 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 829 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 829
  },
  {
    "category": "Practice",
    "en": "Sentence number 830 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 830 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 830
  },
  {
    "category": "Practice",
    "en": "Sentence number 831 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 831 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 831
  },
  {
    "category": "Practice",
    "en": "Sentence number 832 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 832 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 832
  },
  {
    "category": "Practice",
    "en": "Sentence number 833 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 833 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 833
  },
  {
    "category": "Practice",
    "en": "Sentence number 834 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 834 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 834
  },
  {
    "category": "Practice",
    "en": "Sentence number 835 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 835 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 835
  },
  {
    "category": "Practice",
    "en": "Sentence number 836 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 836 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 836
  },
  {
    "category": "Practice",
    "en": "Sentence number 837 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 837 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 837
  },
  {
    "category": "Practice",
    "en": "Sentence number 838 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 838 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 838
  },
  {
    "category": "Practice",
    "en": "Sentence number 839 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 839 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 839
  },
  {
    "category": "Practice",
    "en": "Sentence number 840 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 840 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 840
  },
  {
    "category": "Practice",
    "en": "Sentence number 841 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 841 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 841
  },
  {
    "category": "Practice",
    "en": "Sentence number 842 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 842 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 842
  },
  {
    "category": "Practice",
    "en": "Sentence number 843 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 843 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 843
  },
  {
    "category": "Practice",
    "en": "Sentence number 844 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 844 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 844
  },
  {
    "category": "Practice",
    "en": "Sentence number 845 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 845 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 845
  },
  {
    "category": "Practice",
    "en": "Sentence number 846 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 846 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 846
  },
  {
    "category": "Practice",
    "en": "Sentence number 847 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 847 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 847
  },
  {
    "category": "Practice",
    "en": "Sentence number 848 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 848 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 848
  },
  {
    "category": "Practice",
    "en": "Sentence number 849 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 849 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 849
  },
  {
    "category": "Practice",
    "en": "Sentence number 850 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 850 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 850
  },
  {
    "category": "Practice",
    "en": "Sentence number 851 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 851 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 851
  },
  {
    "category": "Practice",
    "en": "Sentence number 852 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 852 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 852
  },
  {
    "category": "Practice",
    "en": "Sentence number 853 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 853 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 853
  },
  {
    "category": "Practice",
    "en": "Sentence number 854 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 854 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 854
  },
  {
    "category": "Practice",
    "en": "Sentence number 855 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 855 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 855
  },
  {
    "category": "Practice",
    "en": "Sentence number 856 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 856 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 856
  },
  {
    "category": "Practice",
    "en": "Sentence number 857 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 857 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 857
  },
  {
    "category": "Practice",
    "en": "Sentence number 858 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 858 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 858
  },
  {
    "category": "Practice",
    "en": "Sentence number 859 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 859 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 859
  },
  {
    "category": "Practice",
    "en": "Sentence number 860 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 860 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 860
  },
  {
    "category": "Practice",
    "en": "Sentence number 861 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 861 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 861
  },
  {
    "category": "Practice",
    "en": "Sentence number 862 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 862 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 862
  },
  {
    "category": "Practice",
    "en": "Sentence number 863 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 863 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 863
  },
  {
    "category": "Practice",
    "en": "Sentence number 864 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 864 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 864
  },
  {
    "category": "Practice",
    "en": "Sentence number 865 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 865 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 865
  },
  {
    "category": "Practice",
    "en": "Sentence number 866 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 866 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 866
  },
  {
    "category": "Practice",
    "en": "Sentence number 867 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 867 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 867
  },
  {
    "category": "Practice",
    "en": "Sentence number 868 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 868 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 868
  },
  {
    "category": "Practice",
    "en": "Sentence number 869 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 869 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 869
  },
  {
    "category": "Practice",
    "en": "Sentence number 870 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 870 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 870
  },
  {
    "category": "Practice",
    "en": "Sentence number 871 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 871 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 871
  },
  {
    "category": "Practice",
    "en": "Sentence number 872 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 872 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 872
  },
  {
    "category": "Practice",
    "en": "Sentence number 873 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 873 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 873
  },
  {
    "category": "Practice",
    "en": "Sentence number 874 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 874 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 874
  },
  {
    "category": "Practice",
    "en": "Sentence number 875 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 875 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 875
  },
  {
    "category": "Practice",
    "en": "Sentence number 876 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 876 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 876
  },
  {
    "category": "Practice",
    "en": "Sentence number 877 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 877 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 877
  },
  {
    "category": "Practice",
    "en": "Sentence number 878 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 878 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 878
  },
  {
    "category": "Practice",
    "en": "Sentence number 879 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 879 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 879
  },
  {
    "category": "Practice",
    "en": "Sentence number 880 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 880 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 880
  },
  {
    "category": "Practice",
    "en": "Sentence number 881 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 881 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 881
  },
  {
    "category": "Practice",
    "en": "Sentence number 882 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 882 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 882
  },
  {
    "category": "Practice",
    "en": "Sentence number 883 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 883 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 883
  },
  {
    "category": "Practice",
    "en": "Sentence number 884 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 884 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 884
  },
  {
    "category": "Practice",
    "en": "Sentence number 885 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 885 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 885
  },
  {
    "category": "Practice",
    "en": "Sentence number 886 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 886 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 886
  },
  {
    "category": "Practice",
    "en": "Sentence number 887 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 887 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 887
  },
  {
    "category": "Practice",
    "en": "Sentence number 888 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 888 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 888
  },
  {
    "category": "Practice",
    "en": "Sentence number 889 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 889 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 889
  },
  {
    "category": "Practice",
    "en": "Sentence number 890 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 890 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 890
  },
  {
    "category": "Practice",
    "en": "Sentence number 891 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 891 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 891
  },
  {
    "category": "Practice",
    "en": "Sentence number 892 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 892 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 892
  },
  {
    "category": "Practice",
    "en": "Sentence number 893 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 893 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 893
  },
  {
    "category": "Practice",
    "en": "Sentence number 894 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 894 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 894
  },
  {
    "category": "Practice",
    "en": "Sentence number 895 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 895 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 895
  },
  {
    "category": "Practice",
    "en": "Sentence number 896 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 896 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 896
  },
  {
    "category": "Practice",
    "en": "Sentence number 897 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 897 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 897
  },
  {
    "category": "Practice",
    "en": "Sentence number 898 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 898 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 898
  },
  {
    "category": "Practice",
    "en": "Sentence number 899 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 899 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 899
  },
  {
    "category": "Practice",
    "en": "Sentence number 900 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 900 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 900
  },
  {
    "category": "Practice",
    "en": "Sentence number 901 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 901 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 901
  },
  {
    "category": "Practice",
    "en": "Sentence number 902 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 902 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 902
  },
  {
    "category": "Practice",
    "en": "Sentence number 903 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 903 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 903
  },
  {
    "category": "Practice",
    "en": "Sentence number 904 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 904 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 904
  },
  {
    "category": "Practice",
    "en": "Sentence number 905 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 905 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 905
  },
  {
    "category": "Practice",
    "en": "Sentence number 906 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 906 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 906
  },
  {
    "category": "Practice",
    "en": "Sentence number 907 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 907 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 907
  },
  {
    "category": "Practice",
    "en": "Sentence number 908 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 908 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 908
  },
  {
    "category": "Practice",
    "en": "Sentence number 909 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 909 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 909
  },
  {
    "category": "Practice",
    "en": "Sentence number 910 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 910 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 910
  },
  {
    "category": "Practice",
    "en": "Sentence number 911 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 911 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 911
  },
  {
    "category": "Practice",
    "en": "Sentence number 912 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 912 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 912
  },
  {
    "category": "Practice",
    "en": "Sentence number 913 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 913 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 913
  },
  {
    "category": "Practice",
    "en": "Sentence number 914 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 914 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 914
  },
  {
    "category": "Practice",
    "en": "Sentence number 915 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 915 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 915
  },
  {
    "category": "Practice",
    "en": "Sentence number 916 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 916 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 916
  },
  {
    "category": "Practice",
    "en": "Sentence number 917 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 917 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 917
  },
  {
    "category": "Practice",
    "en": "Sentence number 918 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 918 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 918
  },
  {
    "category": "Practice",
    "en": "Sentence number 919 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 919 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 919
  },
  {
    "category": "Practice",
    "en": "Sentence number 920 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 920 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 920
  },
  {
    "category": "Practice",
    "en": "Sentence number 921 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 921 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 921
  },
  {
    "category": "Practice",
    "en": "Sentence number 922 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 922 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 922
  },
  {
    "category": "Practice",
    "en": "Sentence number 923 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 923 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 923
  },
  {
    "category": "Practice",
    "en": "Sentence number 924 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 924 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 924
  },
  {
    "category": "Practice",
    "en": "Sentence number 925 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 925 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 925
  },
  {
    "category": "Practice",
    "en": "Sentence number 926 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 926 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 926
  },
  {
    "category": "Practice",
    "en": "Sentence number 927 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 927 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 927
  },
  {
    "category": "Practice",
    "en": "Sentence number 928 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 928 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 928
  },
  {
    "category": "Practice",
    "en": "Sentence number 929 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 929 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 929
  },
  {
    "category": "Practice",
    "en": "Sentence number 930 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 930 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 930
  },
  {
    "category": "Practice",
    "en": "Sentence number 931 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 931 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 931
  },
  {
    "category": "Practice",
    "en": "Sentence number 932 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 932 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 932
  },
  {
    "category": "Practice",
    "en": "Sentence number 933 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 933 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 933
  },
  {
    "category": "Practice",
    "en": "Sentence number 934 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 934 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 934
  },
  {
    "category": "Practice",
    "en": "Sentence number 935 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 935 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 935
  },
  {
    "category": "Practice",
    "en": "Sentence number 936 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 936 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 936
  },
  {
    "category": "Practice",
    "en": "Sentence number 937 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 937 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 937
  },
  {
    "category": "Practice",
    "en": "Sentence number 938 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 938 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 938
  },
  {
    "category": "Practice",
    "en": "Sentence number 939 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 939 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 939
  },
  {
    "category": "Practice",
    "en": "Sentence number 940 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 940 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 940
  },
  {
    "category": "Practice",
    "en": "Sentence number 941 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 941 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 941
  },
  {
    "category": "Practice",
    "en": "Sentence number 942 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 942 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 942
  },
  {
    "category": "Practice",
    "en": "Sentence number 943 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 943 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 943
  },
  {
    "category": "Practice",
    "en": "Sentence number 944 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 944 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 944
  },
  {
    "category": "Practice",
    "en": "Sentence number 945 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 945 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 945
  },
  {
    "category": "Practice",
    "en": "Sentence number 946 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 946 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 946
  },
  {
    "category": "Practice",
    "en": "Sentence number 947 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 947 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 947
  },
  {
    "category": "Practice",
    "en": "Sentence number 948 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 948 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 948
  },
  {
    "category": "Practice",
    "en": "Sentence number 949 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 949 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 949
  },
  {
    "category": "Practice",
    "en": "Sentence number 950 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 950 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 950
  },
  {
    "category": "Practice",
    "en": "Sentence number 951 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 951 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 951
  },
  {
    "category": "Practice",
    "en": "Sentence number 952 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 952 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 952
  },
  {
    "category": "Practice",
    "en": "Sentence number 953 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 953 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 953
  },
  {
    "category": "Practice",
    "en": "Sentence number 954 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 954 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 954
  },
  {
    "category": "Practice",
    "en": "Sentence number 955 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 955 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 955
  },
  {
    "category": "Practice",
    "en": "Sentence number 956 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 956 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 956
  },
  {
    "category": "Practice",
    "en": "Sentence number 957 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 957 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 957
  },
  {
    "category": "Practice",
    "en": "Sentence number 958 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 958 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 958
  },
  {
    "category": "Practice",
    "en": "Sentence number 959 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 959 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 959
  },
  {
    "category": "Practice",
    "en": "Sentence number 960 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 960 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 960
  },
  {
    "category": "Practice",
    "en": "Sentence number 961 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 961 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 961
  },
  {
    "category": "Practice",
    "en": "Sentence number 962 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 962 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 962
  },
  {
    "category": "Practice",
    "en": "Sentence number 963 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 963 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 963
  },
  {
    "category": "Practice",
    "en": "Sentence number 964 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 964 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 964
  },
  {
    "category": "Practice",
    "en": "Sentence number 965 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 965 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 965
  },
  {
    "category": "Practice",
    "en": "Sentence number 966 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 966 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 966
  },
  {
    "category": "Practice",
    "en": "Sentence number 967 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 967 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 967
  },
  {
    "category": "Practice",
    "en": "Sentence number 968 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 968 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 968
  },
  {
    "category": "Practice",
    "en": "Sentence number 969 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 969 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 969
  },
  {
    "category": "Practice",
    "en": "Sentence number 970 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 970 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 970
  },
  {
    "category": "Practice",
    "en": "Sentence number 971 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 971 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 971
  },
  {
    "category": "Practice",
    "en": "Sentence number 972 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 972 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 972
  },
  {
    "category": "Practice",
    "en": "Sentence number 973 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 973 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 973
  },
  {
    "category": "Practice",
    "en": "Sentence number 974 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 974 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 974
  },
  {
    "category": "Practice",
    "en": "Sentence number 975 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 975 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 975
  },
  {
    "category": "Practice",
    "en": "Sentence number 976 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 976 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 976
  },
  {
    "category": "Practice",
    "en": "Sentence number 977 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 977 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 977
  },
  {
    "category": "Practice",
    "en": "Sentence number 978 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 978 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 978
  },
  {
    "category": "Practice",
    "en": "Sentence number 979 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 979 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 979
  },
  {
    "category": "Practice",
    "en": "Sentence number 980 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 980 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 980
  },
  {
    "category": "Practice",
    "en": "Sentence number 981 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 981 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 981
  },
  {
    "category": "Practice",
    "en": "Sentence number 982 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 982 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 982
  },
  {
    "category": "Practice",
    "en": "Sentence number 983 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 983 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 983
  },
  {
    "category": "Practice",
    "en": "Sentence number 984 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 984 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 984
  },
  {
    "category": "Practice",
    "en": "Sentence number 985 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 985 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 985
  },
  {
    "category": "Practice",
    "en": "Sentence number 986 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 986 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 986
  },
  {
    "category": "Practice",
    "en": "Sentence number 987 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 987 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 987
  },
  {
    "category": "Practice",
    "en": "Sentence number 988 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 988 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 988
  },
  {
    "category": "Practice",
    "en": "Sentence number 989 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 989 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 989
  },
  {
    "category": "Practice",
    "en": "Sentence number 990 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 990 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 990
  },
  {
    "category": "Practice",
    "en": "Sentence number 991 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 991 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 991
  },
  {
    "category": "Practice",
    "en": "Sentence number 992 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 992 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 992
  },
  {
    "category": "Practice",
    "en": "Sentence number 993 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 993 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 993
  },
  {
    "category": "Practice",
    "en": "Sentence number 994 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 994 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 994
  },
  {
    "category": "Practice",
    "en": "Sentence number 995 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 995 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 995
  },
  {
    "category": "Practice",
    "en": "Sentence number 996 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 996 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 996
  },
  {
    "category": "Practice",
    "en": "Sentence number 997 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 997 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 997
  },
  {
    "category": "Practice",
    "en": "Sentence number 998 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 998 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 998
  },
  {
    "category": "Practice",
    "en": "Sentence number 999 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 999 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 999
  },
  {
    "category": "Practice",
    "en": "Sentence number 1000 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1000 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1000
  },
  {
    "category": "Practice",
    "en": "Sentence number 1001 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1001 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1001
  },
  {
    "category": "Practice",
    "en": "Sentence number 1002 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1002 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1002
  },
  {
    "category": "Practice",
    "en": "Sentence number 1003 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1003 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1003
  },
  {
    "category": "Practice",
    "en": "Sentence number 1004 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1004 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1004
  },
  {
    "category": "Practice",
    "en": "Sentence number 1005 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1005 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1005
  },
  {
    "category": "Practice",
    "en": "Sentence number 1006 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1006 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1006
  },
  {
    "category": "Practice",
    "en": "Sentence number 1007 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1007 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1007
  },
  {
    "category": "Practice",
    "en": "Sentence number 1008 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1008 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1008
  },
  {
    "category": "Practice",
    "en": "Sentence number 1009 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1009 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1009
  },
  {
    "category": "Practice",
    "en": "Sentence number 1010 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1010 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1010
  },
  {
    "category": "Practice",
    "en": "Sentence number 1011 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1011 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1011
  },
  {
    "category": "Practice",
    "en": "Sentence number 1012 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1012 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1012
  },
  {
    "category": "Practice",
    "en": "Sentence number 1013 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1013 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1013
  },
  {
    "category": "Practice",
    "en": "Sentence number 1014 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1014 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1014
  },
  {
    "category": "Practice",
    "en": "Sentence number 1015 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1015 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1015
  },
  {
    "category": "Practice",
    "en": "Sentence number 1016 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1016 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1016
  },
  {
    "category": "Practice",
    "en": "Sentence number 1017 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1017 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1017
  },
  {
    "category": "Practice",
    "en": "Sentence number 1018 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1018 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1018
  },
  {
    "category": "Practice",
    "en": "Sentence number 1019 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1019 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1019
  },
  {
    "category": "Practice",
    "en": "Sentence number 1020 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1020 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1020
  },
  {
    "category": "Practice",
    "en": "Sentence number 1021 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1021 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1021
  },
  {
    "category": "Practice",
    "en": "Sentence number 1022 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1022 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1022
  },
  {
    "category": "Practice",
    "en": "Sentence number 1023 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1023 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1023
  },
  {
    "category": "Practice",
    "en": "Sentence number 1024 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1024 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1024
  },
  {
    "category": "Practice",
    "en": "Sentence number 1025 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1025 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1025
  },
  {
    "category": "Practice",
    "en": "Sentence number 1026 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1026 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1026
  },
  {
    "category": "Practice",
    "en": "Sentence number 1027 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1027 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1027
  },
  {
    "category": "Practice",
    "en": "Sentence number 1028 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1028 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1028
  },
  {
    "category": "Practice",
    "en": "Sentence number 1029 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1029 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1029
  },
  {
    "category": "Practice",
    "en": "Sentence number 1030 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1030 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1030
  },
  {
    "category": "Practice",
    "en": "Sentence number 1031 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1031 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1031
  },
  {
    "category": "Practice",
    "en": "Sentence number 1032 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1032 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1032
  },
  {
    "category": "Practice",
    "en": "Sentence number 1033 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1033 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1033
  },
  {
    "category": "Practice",
    "en": "Sentence number 1034 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1034 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1034
  },
  {
    "category": "Practice",
    "en": "Sentence number 1035 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1035 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1035
  },
  {
    "category": "Practice",
    "en": "Sentence number 1036 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1036 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1036
  },
  {
    "category": "Practice",
    "en": "Sentence number 1037 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1037 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1037
  },
  {
    "category": "Practice",
    "en": "Sentence number 1038 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1038 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1038
  },
  {
    "category": "Practice",
    "en": "Sentence number 1039 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1039 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1039
  },
  {
    "category": "Practice",
    "en": "Sentence number 1040 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1040 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1040
  },
  {
    "category": "Practice",
    "en": "Sentence number 1041 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1041 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1041
  },
  {
    "category": "Practice",
    "en": "Sentence number 1042 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1042 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1042
  },
  {
    "category": "Practice",
    "en": "Sentence number 1043 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1043 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1043
  },
  {
    "category": "Practice",
    "en": "Sentence number 1044 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1044 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1044
  },
  {
    "category": "Practice",
    "en": "Sentence number 1045 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1045 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1045
  },
  {
    "category": "Practice",
    "en": "Sentence number 1046 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1046 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1046
  },
  {
    "category": "Practice",
    "en": "Sentence number 1047 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1047 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1047
  },
  {
    "category": "Practice",
    "en": "Sentence number 1048 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1048 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1048
  },
  {
    "category": "Practice",
    "en": "Sentence number 1049 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1049 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1049
  },
  {
    "category": "Practice",
    "en": "Sentence number 1050 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1050 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1050
  },
  {
    "category": "Practice",
    "en": "Sentence number 1051 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1051 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1051
  },
  {
    "category": "Practice",
    "en": "Sentence number 1052 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1052 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1052
  },
  {
    "category": "Practice",
    "en": "Sentence number 1053 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1053 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1053
  },
  {
    "category": "Practice",
    "en": "Sentence number 1054 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1054 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1054
  },
  {
    "category": "Practice",
    "en": "Sentence number 1055 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1055 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1055
  },
  {
    "category": "Practice",
    "en": "Sentence number 1056 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1056 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1056
  },
  {
    "category": "Practice",
    "en": "Sentence number 1057 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1057 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1057
  },
  {
    "category": "Practice",
    "en": "Sentence number 1058 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1058 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1058
  },
  {
    "category": "Practice",
    "en": "Sentence number 1059 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1059 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1059
  },
  {
    "category": "Practice",
    "en": "Sentence number 1060 is ready for English conversation practice.",
    "bn": "বাক্য নম্বর 1060 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।",
    "level": "A2",
    "id": 1060
  }
];

export const SENTENCE_CATEGORIES: string[] = Array.from(new Set(SENTENCE_BANK.map((s: SentenceItem): string => s.category)));
