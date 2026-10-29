# scripts/generate_full_1000_sents.py
# -*- coding: utf-8 -*-
import json
import re

print("Generating extensive 1,050+ sentences dataset...")

with open("scripts/rich_sentences_data.json", "r", encoding="utf-8") as f:
    existing = json.load(f)

# Thematic sentence templates with rich substitutions and exact Bengali equivalents
SYSTEMATIC_SENTENCES = []

# Template 1: Polite requests in various settings
requests = [
    ("Cafe", "Could you please bring me a hot cup of black coffee?", "দয়া করে আমাকে এক কাপ গরম ব্ল্যাক কফি এনে দেবেন?", "A1"),
    ("Cafe", "Could you please bring me a fresh glass of orange juice?", "দয়া করে আমাকে এক গ্লাস তাজা কমলার রস এনে দেবেন?", "A1"),
    ("Cafe", "Could you please bring me a bottle of mineral water?", "দয়া করে আমাকে এক বোতল মিনারেল পানি এনে দেবেন?", "A1"),
    ("Cafe", "Could you please bring me a slice of chocolate cake?", "দয়া করে আমাকে এক টুকরো চকলেট কেক এনে দেবেন?", "A1"),
    ("Cafe", "Could you please bring me some extra paper napkins?", "দয়া করে আমাকে কিছু বাড়তি পেপার ন্যাপকিন এনে দেবেন?", "A1"),
    ("Hotel", "Could you please send an extra blanket to my room?", "দয়া করে আমার রুমে একটি বাড়তি কম্বল পাঠিয়ে দেবেন?", "A2"),
    ("Hotel", "Could you please send some clean towels to my room?", "দয়া করে আমার রুমে কিছু পরিষ্কার তোয়ালে পাঠিয়ে দেবেন?", "A2"),
    ("Hotel", "Could you please send a bottle of drinking water to my room?", "দয়া করে আমার রুমে এক বোতল খাওয়ার পানি পাঠিয়ে দেবেন?", "A2"),
    ("Hotel", "Could you please arrange an airport taxi for tomorrow morning?", "দয়া করে কাল সকালের জন্য একটি বিমানবন্দর ট্যাক্সির ব্যবস্থা করবেন?", "B1"),
    ("Hotel", "Could you please wake me up at six o'clock tomorrow?", "দয়া করে কাল সকাল ছয়টায় আমাকে ডেকে দেবেন?", "A2"),
    ("Office", "Could you please email me the updated quarterly report?", "দয়া করে হালনাগাদ করা ত্রৈমাসিক প্রতিবেদনটি আমাকে ইমেইল করবেন?", "B1"),
    ("Office", "Could you please share the presentation slides with the team?", "দয়া করে প্রেজেন্টেশনের স্লাইডগুলো দলের সাথে শেয়ার করবেন?", "B1"),
    ("Office", "Could you please review this draft proposal by this afternoon?", "দয়া করে আজ বিকেলের মধ্যে এই খসড়া প্রস্তাবটি একটু দেখে দেবেন?", "B2"),
    ("Office", "Could you please confirm your attendance for the Monday meeting?", "দয়া করে সোমবারের মিটিংয়ে আপনার উপস্থিতি নিশ্চিত করবেন?", "B1"),
    ("Office", "Could you please print two copies of this agreement?", "দয়া করে এই চুক্তির দুটি কপি প্রিন্ট করে দেবেন?", "A2"),
    ("Store", "Could you please show me a smaller size of this shirt?", "দয়া করে আমাকে এই শার্টের এক সাইজ ছোটটা দেখাবেন?", "A2"),
    ("Store", "Could you please check if this item is in stock?", "দয়া করে একটু দেখবেন কি এই পণ্যটি মজুদে আছে কিনা?", "A2"),
    ("Store", "Could you please give me a printed cash receipt?", "দয়া করে আমাকে একটি প্রিন্ট করা ক্যাশ রসিদ দেবেন?", "A1"),
    ("Store", "Could you please pack these fragile glassware items carefully?", "দয়া করে এই কাচের জিনিসগুলো সাবধানে মোড়ক করে দেবেন?", "B1"),
    ("Transit", "Could you please tell me when the next bus departs?", "দয়া করে বলবেন কি পরবর্তী বাসটি কখন ছাড়বে?", "A1"),
    ("Transit", "Could you please let me know when we arrive at Shahbagh?", "শাহবাগে পৌঁছালে দয়া করে আমাকে একটু জানিয়ে দেবেন?", "A2"),
    ("Transit", "Could you please help me with this heavy suitcase?", "দয়া করে এই ভারী সুটকেসটি তুলতে আমাকে একটু সাহায্য করবেন?", "A2"),
    ("Transit", "Could you please tell me the exact train platform number?", "দয়া করে ট্রেনের সঠিক প্ল্যাটফর্ম নম্বরটি বলবেন কি?", "A1")
]
SYSTEMATIC_SENTENCES.extend(requests)

# Template 2: Asking Questions (How, Where, When, Why, What)
inquiries = [
    ("Inquiry", "Where is the nearest automated teller machine located?", "সবচেয়ে কাছের এটিএম বুথটি কোথায় অবস্থিত?", "A2"),
    ("Inquiry", "Where can I purchase international calling SIM cards?", "আন্তর্জাতিক কল করার সিম কার্ড আমি কোথায় কিনতে পারব?", "A2"),
    ("Inquiry", "Where is the emergency department of this hospital?", "এই হাসপাতালের জরুরি বিভাগটি কোথায়?", "A2"),
    ("Inquiry", "Where can I exchange foreign currency safely?", "কোথায় আমি নিরাপদে বিদেশি মুদ্রা বিনিময় করতে পারব?", "B1"),
    ("Inquiry", "Where should I submit my completed passport application?", "পূরণ করা পাসপোর্ট আবেদনপত্রটি আমাকে কোথায় জমা দিতে হবে?", "B1"),
    ("Inquiry", "What time does the morning express train arrive?", "সকালের এক্সপ্রেস ট্রেনটি কখন এসে পৌঁছায়?", "A1"),
    ("Inquiry", "What time do the shopping malls usually close in Dhaka?", "ঢাকায় শপিংমলগুলো সাধারণত কয়টায় বন্ধ হয়?", "A1"),
    ("Inquiry", "What time does the breakfast buffet start in the hotel?", "হোটেলে সকালের নাস্তার বুফে কয়টায় শুরু হয়?", "A2"),
    ("Inquiry", "How long does it take to travel from Dhaka to Sylhet by train?", "ট্রেনে ঢাকা থেকে সিলেট যেতে কতক্ষণ সময় লাগে?", "A2"),
    ("Inquiry", "How much is the one-way airfare to Cox's Bazar?", "কক্সবাজারের একমুখী বিমান ভাড়া কত?", "A2"),
    ("Inquiry", "How often do local city buses run on this route?", "এই রুটে লোকাল সিটি বাস কতক্ষণ পর পর চলাচল করে?", "B1"),
    ("Inquiry", "Why was the flight to Chittagong delayed today?", "আজ চট্টগ্রামের ফ্লাইটটি কেন দেরি হলো?", "A2"),
    ("Inquiry", "Why is the office internet connection so slow today?", "আজ অফিসের ইন্টারনেট সংযোগ এত ধীর কেন?", "A2"),
    ("Inquiry", "Who is in charge of human resources in this company?", "এই কোম্পানির মানবসম্পদ বিভাগের দায়িত্বে কে আছেন?", "B1"),
    ("Inquiry", "Which road is the fastest route to avoid city traffic?", "শহরের যানজট এড়াতে কোন রাস্তাটি সবচেয়ে দ্রুতগতির?", "B1")
]
SYSTEMATIC_SENTENCES.extend(inquiries)

# Template 3: Everyday Situational & Conversational Lines across 20 topics
situations = [
    # Bank & Money
    ("Bank", "I would like to deposit five thousand taka into my savings account.", "আমি আমার সঞ্চয়ী অ্যাকাউন্টে পাঁচ হাজার টাকা জমা দিতে চাই।", "A2"),
    ("Bank", "What is the minimum balance required to maintain this account?", "এই অ্যাকাউন্ট চালু রাখতে সর্বনিম্ন কত টাকা স্থিতি রাখতে হবে?", "B1"),
    ("Bank", "I lost my debit card; please block it immediately.", "আমার ডেবিট কার্ডটি হারিয়ে গেছে; দয়া করে এটি অবিলম্বে ব্লক করুন।", "A2"),
    ("Bank", "Can I activate mobile SMS alerts for my bank transactions?", "আমার ব্যাংক লেনদেনের জন্য আমি কি এসএমএস অ্যালার্ট চালু করতে পারি?", "B1"),
    ("Bank", "How long will it take for this international wire transfer to clear?", "এই আন্তর্জাতিক ব্যাংক স্থানান্তর সম্পন্ন হতে কতদিন সময় লাগবে?", "B2"),
    ("Bank", "I need a stamped bank statement for my student visa application.", "স্টুডেন্ট ভিসা আবেদনের জন্য আমার একটি সত্যায়িত ব্যাংক স্টেটমেন্ট দরকার।", "B2"),
    ("Bank", "What are the interest rates for a five-year home loan?", "পাঁচ বছরের গৃহঋণের জন্য সুদের হার কত?", "B2"),
    ("Bank", "Please ensure your signature matches the official record.", "দয়া করে নিশ্চিত করুন যেন আপনার স্বাক্ষর অফিশিয়াল রেকর্ডের সাথে মেলে।", "B1"),

    # Health & Medical
    ("Health", "I have been experiencing a sharp pain in my lower abdomen.", "আমি তলপেটে তীব্র ব্যথা অনুভব করছি।", "B1"),
    ("Health", "Do I need to fast before doing this routine blood test?", "এই রুটিন রক্ত পরীক্ষার আগে কি আমাকে খালি পেটে থাকতে হবে?", "B2"),
    ("Health", "The doctor advised me to rest and avoid physical exertion.", "ডাক্তার আমাকে বিশ্রাম নিতে এবং কায়িক পরিশ্রম এড়িয়ে চলতে বলেছেন।", "B1"),
    ("Health", "You should take these vitamins with meals to aid absorption.", "শোষণ ভালো হওয়ার জন্য খাবারের সাথে এই ভিটামিনগুলো খাওয়া উচিত।", "B2"),
    ("Health", "Is this cough syrup safe for children under five years?", "এই কাশির সিরাপটি কি পাঁচ বছরের কম বয়সী শিশুদের জন্য নিরাপদ?", "B1"),
    ("Health", "He was discharged from the hospital after a successful surgery.", "সফল অস্ত্রোপচারের পর তাকে হাসপাতাল থেকে ছাড়পত্র দেওয়া হয়েছে।", "B2"),
    ("Health", "Maintaining blood pressure within normal limits prevents heart attacks.", "রক্তচাপ স্বাভাবিক সীমার মধ্যে রাখলে হার্ট অ্যাটাক প্রতিরোধ হয়।", "B2"),
    ("Health", "Eating fresh leafy vegetables protects your eyesight.", "তাজা শাকসবজি খেলে চোখের দৃষ্টিশক্তি ভালো থাকে।", "A2"),

    # Workplace & Professional
    ("Office", "We must streamline our workflow to eliminate project bottlenecks.", "কাজের জটিলতা দূর করতে আমাদের কার্যপ্রণালী সহজতর করতে হবে।", "C1"),
    ("Office", "The annual general meeting will take place at the auditorium.", "অডিটোরিয়ামে বার্ষিক সাধারণ সভা অনুষ্ঠিত হবে।", "B2"),
    ("Office", "Please prepare an executive summary of the quarterly financial audit.", "ত্রৈমাসিক আর্থিক নিরীক্ষার একটি নির্বাহী সারসংক্ষেপ প্রস্তুত করুন।", "C1"),
    ("Office", "Our marketing team launched a creative digital branding campaign.", "আমাদের মার্কেটিং দল একটি সৃজনশীল ডিজিটাল ব্র্যান্ডিং প্রচারণা শুরু করেছে।", "B2"),
    ("Office", "Punctuality and reliability are highly prized traits in our company.", "আমাদের প্রতিষ্ঠানে সময়নিষ্ঠতা এবং নির্ভরযোগ্যতাকে অত্যন্ত মূল্যায়ন করা হয়।", "B2"),
    ("Office", "We need to conduct a thorough performance evaluation for all interns.", "সকল ইন্টার্নদের জন্য আমাদের একটি পুঙ্খানুপুঙ্খ কর্মদক্ষতা মূল্যায়ন করতে হবে।", "C1"),
    ("Office", "Could you provide constructive feedback on my recent design mockups?", "আমার সাম্প্রতিক ডিজাইনগুলোর উপর কি কিছু গঠনমূলক মতামত দিতে পারেন?", "B2"),
    ("Office", "The deadline has been extended until next Friday afternoon.", "সময়সীমা আগামী শুক্রবার বিকেল পর্যন্ত বাড়ানো হয়েছে।", "B1"),
    ("Office", "I will send a follow-up email confirming our telephone discussion.", "আমাদের ফোনে আলোচনার বিষয়বস্তু নিশ্চিত করে আমি একটি ইমেইল পাঠাব।", "B2"),
    ("Office", "Let us focus on resolving the most critical technical issue first.", "চলুন প্রথমে সবচেয়ে জটিল কারিগরি সমস্যা সমাধানের দিকে মনোযোগ দিই।", "B2"),

    # Job Interview & Career
    ("Career", "Why do you consider yourself the ideal candidate for this role?", "এই দায়িত্বের জন্য আপনি নিজেকে কেন সবচেয়ে উপযুক্ত মনে করেন?", "B2"),
    ("Career", "I have a proven track record of delivering software projects on schedule.", "নির্দিষ্ট সময়ে সফটওয়্যার প্রজেক্ট সম্পন্ন করার সফল ট্র্যাক রেকর্ড আমার আছে।", "C1"),
    ("Career", "How do you stay updated with emerging technology trends?", "নতুন প্রযুক্তির ধারার সাথে আপনি নিজেকে কীভাবে হালনাগাদ রাখেন?", "B2"),
    ("Career", "I regularly take online courses and read industry engineering blogs.", "আমি নিয়মিত অনলাইন কোর্স করি এবং প্রযুক্তিগত ইঞ্জিনিয়ারিং ব্লগ পড়ি।", "B1"),
    ("Career", "Describe a challenging situation and how you overcame it successfully.", "একটি কঠিন পরিস্থিতির বর্ণনা দিন এবং আপনি কীভাবে সফলভাবে তা কাটিয়ে উঠেছিলেন।", "B2"),
    ("Career", "I believe proactive communication can resolve any workplace misunderstanding.", "আমি বিশ্বাস করি আন্তরিক যোগাযোগ যেকোনো কর্মক্ষেত্রের ভুল বোঝাবুঝি দূর করতে পারে।", "C1"),
    ("Career", "What motivated you to transition into the field of technology?", "প্রযুক্তির জগতে আসার পেছনে কোন বিষয়টি আপনাকে অনুপ্রাণিত করেছে?", "B2"),
    ("Career", "We appreciate your honest answers throughout today's interview.", "আজকের সাক্ষাৎকারে আপনার প্রতিটি সৎ উত্তরের আমরা আন্তরিক প্রশংসা করছি।", "B2"),

    # Travel & Sightseeing
    ("Travel", "Cox's Bazar is renowned for having the longest natural sea beach.", "কক্সবাজার বিশ্বের দীর্ঘতম প্রাকৃতিক সমুদ্র সৈকতের জন্য বিখ্যাত।", "B1"),
    ("Travel", "The Sundarbans mangrove forest is home to the Royal Bengal Tiger.", "সুন্দরবন ম্যানগ্রোভ বনভূমি রয়েল বেঙ্গল টাইগারের প্রাকৃতিক আবাসস্থল।", "B1"),
    ("Travel", "We rented a wooden country boat to explore the serene lake.", "শান্ত হ্রদটি ঘুরে দেখতে আমরা একটি কাঠের দেশি নৌকা ভাড়া করেছিলাম।", "B1"),
    ("Travel", "Always keep an electronic copy of your passport in cloud storage.", "সবসময় ক্লাউড স্টোরেজে আপনার পাসপোর্টের একটি সফট কপি সংরক্ষণ করুন।", "A2"),
    ("Travel", "The local seafood market offers fresh catches directly from fishermen.", "স্থানীয় সামুদ্রিক মাছের বাজারে জেলেরা সরাসরি তাজা মাছ বিক্রি করে।", "B1"),
    ("Travel", "Watching the crimson sunset over the ocean horizon was magical.", "সমুদ্রের দিগন্তে লালিমাময় সূর্যাস্ত দেখা ছিল সত্যিই এক জাদুকরী মুহূর্ত।", "B2"),
    ("Travel", "Make sure you pack appropriate comfortable footwear for long walks.", "দীর্ঘ পথ হাঁটার জন্য আরামদায়ক জুতো সাথে নিতে ভুলবেন না।", "A2"),
    ("Travel", "The historic Buddhist Vihara at Paharpur is an archaeological wonder.", "পাহাড়পুরের ঐতিহাসিক বৌদ্ধ বিহার একটি প্রত্নতাত্ত্বিক বিস্ময়।", "B2"),

    # Weather & Nature
    ("Weather", "The monsoon season brings much needed relief from summer heat.", "বর্ষাকাল গ্রীষ্মের তীব্র দাবদাহ থেকে বহুপ্রতীক্ষিত স্বস্তি বয়ে আনে।", "B1"),
    ("Weather", "Dense morning fog reduced visibility on the national highway.", "সকালের ঘন কুয়াশা জাতীয় মহাসড়কে যান চলাচলের দৃশ্যমানতা কমিয়ে দিয়েছে।", "B2"),
    ("Weather", "A cool northern breeze indicates that winter is finally approaching.", "উত্তরের ঠান্ডা বাতাস জানিয়ে দিচ্ছে যে শীতকাল অবশেষে ঘনিয়ে আসছে।", "B1"),
    ("Weather", "Farmers celebrate the arrival of gentle rain for their paddy crops.", "কৃষকেরা তাদের ধানের ফসলের জন্য হালকা বৃষ্টির আগমন উদযাপন করে।", "B1"),
    ("Weather", "Planting native trees prevents soil erosion along steep riverbanks.", "স্থানীয় জাতের গাছ লাগালে খাড়া নদীপাড়ের ভাঙন রোধ করা যায়।", "B2"),
    ("Weather", "Global warming is causing erratic weather patterns across the world.", "বিশ্ব উষ্ণায়নের কারণে পৃথিবীজুড়ে খামখেয়ালি আবহাওয়া দেখা দিচ্ছে।", "B2"),
    ("Weather", "The sky cleared up after the afternoon thunderstorm passed.", "বিকেলের কালবৈশাখী ঝড় থামার পর আকাশ পরিষ্কার হয়ে গেছে।", "A2"),
    ("Weather", "Remember to carry an umbrella because it might rain unexpectedly.", "একটি ছাতা সাথে রাখুন কারণ হঠাৎ করেই বৃষ্টি নামতে পারে।", "A1"),

    # Social, Family & Friends
    ("Family", "Respecting our parents and elders is deeply rooted in our culture.", "বাবা-মা ও গুরুজনদের সম্মান করা আমাদের সংস্কৃতির শিকড়ে মিশে আছে।", "A2"),
    ("Family", "We celebrate Eid with our extended family in our ancestral village.", "আমরা আমাদের গ্রামের বাড়িতে পুরো পরিবারের সাথে ঈদ উদযাপন করি।", "A2"),
    ("Family", "Sharing meals and heartfelt laughter strengthens familial harmony.", "একসাথে খাবার খাওয়া এবং প্রাণখোলা হাসি পারিবারিক সম্প্রীতিকে দৃঢ় করে।", "B2"),
    ("Family", "True friends encourage you to become the best version of yourself.", "প্রকৃত বন্ধুরা আপনাকে নিজের সেরা রূপে গড়ে ওঠার অনুপ্রেরণা জোগায়।", "B2"),
    ("Family", "I cherish the sweet childhood memories I shared with my cousins.", "মামাতো-খালাতো ভাইবোনদের সাথে কাটানো শৈশবের স্মৃতিগুলো আমি খুব ভালোবাসি।", "B1"),
    ("Family", "Parents sacrifice their own comforts to give their children education.", "সন্তানদের উপযুক্ত শিক্ষার জন্য পিতামাতা নিজেদের অনেক সুখ বিসর্জন দেন।", "B2"),

    # Education & Self-Improvement
    ("Education", "Reading books stimulates intellectual curiosity and critical thinking.", "বই পড়লে বুদ্ধিবৃত্তিক কৌতূহল এবং যৌক্তিক চিন্তাভাবনা বৃদ্ধি পায়।", "B2"),
    ("Education", "Discipline is the bridge that connects ambitious goals with achievement.", "শৃঙ্খলা হলো এমন এক সেতু যা লক্ষ্যকে অর্জনের সাথে সংযুক্ত করে।", "C1"),
    ("Education", "Learning to write clearly is an indispensable modern life skill.", "স্পষ্ট ভাষায় লিখতে শেখা আধুনিক জীবনের এক অপরিহার্য দক্ষতা।", "B2"),
    ("Education", "Do not be discouraged by initial setbacks in your language journey.", "ভাষা শেখার শুরুর দিকের ব্যর্থতায় কোনোভাবেই হতাশ হবেন না।", "B1"),
    ("Education", "Practicing English aloud ten minutes every day creates muscle memory.", "প্রতিদিন দশ মিনিট জোরে জোরে ইংরেজি বললে মুখের জড়তা কেটে যায়।", "B1"),
    ("Education", "Expand your vocabulary by learning words in their natural context.", "শব্দ মুখস্থ করার চেয়ে বাক্যের প্রাসঙ্গিক ব্যবহারে শব্দ শেখা বেশি কার্যকর।", "B2"),
    ("Education", "Wisdom comes from observing life, reflecting deeply, and learning humbly.", "জীবনকে পর্যবেক্ষণ, গভীরভাবে চিন্তা ও বিনয়ের সাথে শেখার মাধ্যমেই প্রজ্ঞা আসে।", "C1")
]
SYSTEMATIC_SENTENCES.extend(situations)

# Now add more specific practical everyday communicative sentences to ensure count > 700
comm_lines = [
    # Polite Everyday Bangladeshi Context Lines
    ("Daily", "Could you pass me the bowl of lentils, please?", "দয়া করে ডালের বাটিটি আমাকে এগিয়ে দেবেন?", "A1"),
    ("Daily", "I like to drink fresh tender coconut water during hot summer days.", "গ্রীষ্মের গরম দিনে আমি তাজা ডাবের পানি পান করতে ভালোবাসি।", "A1"),
    ("Daily", "Please wipe your shoes on the doormat before entering the living room.", "বসার ঘরে ঢোকার আগে দয়া করে পাপোশে জুতো মুছে নিন।", "A2"),
    ("Daily", "Can you help me fold these freshly ironed clothes?", "ইস্ত্রি করা এই কাপড়গুলো ভাঁজ করতে আপনি কি আমাকে সাহায্য করবেন?", "A2"),
    ("Daily", "The power went out; please light a candle or turn on the emergency bulb.", "বিদ্যুৎ চলে গেছে; একটি মোমবাতি জ্বালান অথবা ইমার্জেন্সি লাইট জ্বালান।", "A2"),
    ("Daily", "I need to recharge my prepaid electricity meter card today.", "আমাকে আজ প্রিপেইড বিদ্যুৎ মিটারের কার্ড রিচার্জ করতে হবে।", "A2"),
    ("Daily", "We should wake up early tomorrow to beat the morning highway traffic.", "মহাসড়কের যানজট এড়াতে আমাদের কাল সকালে তাড়াতাড়ি ওঠা উচিত।", "A2"),
    ("Daily", "Please turn down the television volume; the baby is sleeping peacefully.", "টেলিভিশনের আওয়াজ একটু কমান; বাচ্চাটি শান্তিতে ঘুমাচ্ছে।", "A1"),
    ("Daily", "Do not forget to lock the front gate before going to sleep.", "ঘুমাতে যাওয়ার আগে সদর ফটকের তালা দিতে ভুলবেন না।", "A1"),
    ("Daily", "Fresh morning sunlight is an excellent natural source of Vitamin D.", "সকালের তাজা রোদ ভিটামিন ডি-এর একটি চমৎকার প্রাকৃতিক উৎস।", "A2"),

    # Shopping & Haggling
    ("Shopping", "Can you reduce ten taka per kilogram if I buy ten kilograms?", "আমি দশ কেজি কিনলে কি প্রতি কেজিতে দশ টাকা ছাড় দেবেন?", "A2"),
    ("Shopping", "These mangoes look fresh; are they naturally ripened without chemicals?", "এই আমগুলো তাজা দেখাচ্ছে; এগুলো কি রাসায়নিক ছাড়া প্রাকৃতিকভাবে পাকা?", "B1"),
    ("Shopping", "Do you have fresh hilsha fish caught from the Padma river?", "আপনার কাছে কি পদ্মার নদীর তাজা ধরা ইলিশ মাছ আছে?", "A2"),
    ("Shopping", "Please weigh two kilograms of red tomatoes and one kilogram of potatoes.", "দয়া করে দুই কেজি লাল টমেটো এবং এক কেজি আলু মেপে দিন।", "A1"),
    ("Shopping", "Can you give me small paper bags instead of polythene bags?", "পলিথিন ব্যাগের বদলে আমাকে কি কাগজের ঠোঙ্গা দিতে পারেন?", "A2"),
    ("Shopping", "This winter jacket is very warm and resistant to cold wind.", "এই শীতের জ্যাকেটটি খুব উষ্ণ এবং ঠান্ডা বাতাস প্রতিরোধ করে।", "A2"),
    ("Shopping", "Is this mobile phone charger compatible with fast charging devices?", "এই মোবাইল চার্জারটি কি ফাস্ট চার্জিং সাপোর্টেড ডিভাইসে চলবে?", "B1"),
    ("Shopping", "I want to purchase a sturdy umbrella for the heavy monsoon rains.", "ভারী বর্ষার বৃষ্টির জন্য আমি একটি মজবুত ছাতা কিনতে চাই।", "A2"),
    ("Shopping", "Can you check the price tag on that leather belt for me?", "ওই চামড়ার বেল্টটির গায়ে থাকা দামের ট্যাগটি কি একটু দেখে দেবেন?", "A1"),
    ("Shopping", "I will definitely recommend this department store to all my friends.", "আমি অবশ্যই আমার সকল বন্ধুদের এই ডিপার্টমেন্টাল স্টোরে আসার পরামর্শ দেব।", "A2"),

    # Transport & City Traffic
    ("Transport", "The traffic on Kazi Nazrul Islam Avenue is completely at a standstill.", "কাজী নজরুল ইসলাম এভিনিউতে যান চলাচল পুরোপুরি স্থবির হয়ে আছে।", "B1"),
    ("Transport", "Taking the metro rail from Uttara to Motijheel saves hours of commuting.", "উত্তরা থেকে মতিঝিল মেট্রোরেলে গেলে যাতায়াতে কয়েক ঘণ্টা সময় বাঁচে।", "B1"),
    ("Transport", "Please ride your motorcycle carefully and always wear a certified helmet.", "মোটরসাইকেল সাবধানে চালাবেন এবং সবসময় অনুমোদিত হেলমেট পরবেন।", "A2"),
    ("Transport", "How much is the CNG auto-rickshaw fare from Dhanmondi to Gulshan?", "ধানমন্ডি থেকে গুলশান পর্যন্ত সিএনজি অটোরিকশার ভাড়া কত?", "A2"),
    ("Transport", "The ferry crossing at Aricha was delayed due to dense river fog.", "নদীতে ঘন কুয়াশার কারণে আরিচায় ফেরি চলাচল সাময়িক বন্ধ ছিল।", "B1"),
    ("Transport", "Passengers are requested to maintain a queue while boarding the bus.", "বাসে ওঠার সময় যাত্রীদের সারিবদ্ধভাবে লাইনে দাঁড়ানোর অনুরোধ করা হচ্ছে।", "A2"),
    ("Transport", "Keep your metro smart card ready near the automated fare gate.", "ভাড়ার অটোমেটিক গেটের কাছে আপনার মেট্রোরেল স্মার্ট কার্ডটি প্রস্তুত রাখুন।", "A2"),
    ("Transport", "Always look both ways before crossing a busy multilane road.", "ব্যস্ত বহু লেনের রাস্তা পার হওয়ার আগে সবসময় দুই পাশে দেখে নিন।", "A1"),
    ("Transport", "The train journey through the tea gardens of Sreemangal is picturesque.", "শ্রীমঙ্গলের চা বাগানের ভেতর দিয়ে ট্রেন ভ্রমণ ছবির মতো সুন্দর।", "B2"),
    ("Transport", "Can you drop me off right across from the community centre?", "কমিউনিটি সেন্টারের ঠিক উল্টো দিকে কি আমাকে নামিয়ে দিতে পারবেন?", "A2"),

    # Office, Tech & Modern Work
    ("Office", "Our cross-functional development team uses agile project methodology.", "আমাদের সফটওয়্যার টিম দ্রুত কাজ করার জন্য চটপটে অ্যাজাইল পদ্ধতি ব্যবহার করে।", "C1"),
    ("Office", "Please upload the high-resolution logo files to Google Drive.", "হাই রেজোলিউশনের লোগো ফাইলগুলো দয়া করে গুগল ড্রাইভে আপলোড করুন।", "A2"),
    ("Office", "I will be working remotely from home on Wednesday and Thursday.", "আমি বুধবার এবং বৃহস্পতিবার বাসা থেকে রিমোটলি কাজ করব।", "A2"),
    ("Office", "Let us schedule a one-on-one performance feedback discussion next week.", "পরের সপ্তাহে চলুন আমরা একান্তে কাজের অগ্রগতির পর্যালোচনা আলোচনা করি।", "B2"),
    ("Office", "The technical bug has been successfully resolved and deployed to production.", "কারিগরি ত্রুটিটি সফলভাবে সংশোধন করে প্রোডাকশনে চালু করা হয়েছে।", "B2"),
    ("Office", "Clear and empathetic communication creates a positive office culture.", "স্পষ্ট ও সহমর্মিতাপূর্ণ যোগাযোগ অফিসে একটি ইতিবাচক কাজের পরিবেশ গড়ে তোলে।", "B2"),
    ("Office", "We achieved a twenty percent increase in monthly active application users.", "আমাদের অ্যাপের মাসিক সক্রিয় ব্যবহারকারীর সংখ্যায় আমরা বিশ শতাংশ বৃদ্ধি পেয়েছি।", "B2"),
    ("Office", "Please remember to submit your weekly timesheet before leaving on Friday.", "শুক্রবারে অফিস ছাড়ার আগে সাপ্তাহিক টাইমশিট জমা দিতে ভুলবেন না।", "B1"),
    ("Office", "We need to optimize our website loading speed for mobile users.", "মোবাইল ব্যবহারকারীদের সুবিধার জন্য আমাদের ওয়েবসাইটের লোডিং গতি বাড়াতে হবে।", "B2"),
    ("Office", "Continuous learning and upskilling are keys to long-term career growth.", "দীর্ঘমেয়াদী পেশাগত উন্নতির মূল চাবিকাঠি হলো অবিরাম নতুন দক্ষতা অর্জন করা।", "C1"),

    # Health & First Aid
    ("Health", "Apply gentle pressure with a sterile gauze pad to stop the bleeding.", "রক্তপাত বন্ধ করতে একটি পরিষ্কার জীবাণুমুক্ত গজ দিয়ে আলতো করে চেপে ধরুন।", "B2"),
    ("Health", "Drinking coconut water replenishes essential electrolytes naturally.", "ডাবের পানি খেলে শরীরের প্রয়োজনীয় ইলেক্ট্রোলাইটের ঘাটতি প্রাকৃতিকভাবে পূরণ হয়।", "B1"),
    ("Health", "He recovered swiftly from dengue fever thanks to timely medical attention.", "সময়মতো সুচিকিৎসা পাওয়ায় তিনি ডেঙ্গু জ্বর থেকে দ্রুত সুস্থ হয়ে উঠেছেন।", "B2"),
    ("Health", "Regular eye screening is recommended for anyone working long hours on computers.", "কম্পিউটারে দীর্ঘ সময় কাজ করা প্রত্যেকেরই নিয়মিত চোখ পরীক্ষা করানো উচিত।", "B2"),
    ("Health", "Stay indoors during midday heat to prevent dehydration and heatstroke.", "পানিশূন্যতা এবং হিটস্ট্রোক প্রতিরোধ করতে দুপুরের তীব্র রোদে ঘরের ভেতর থাকুন।", "B1"),
    ("Health", "Wash fresh fruits and raw vegetables thoroughly under running tap water.", "ট্যাপের চলমান পানির নিচে তাজা ফলমূল ও কাঁচা শাকসবজি ভালোভাবে ধুয়ে নিন।", "A2"),
    ("Health", "Never consume expired medicines as they can cause severe adverse reactions.", "মেয়াদোত্তীর্ণ ওষুধ কখনো খাবেন না কারণ এতে মারাত্মক পার্শ্বপ্রতিক্রিয়া হতে পারে।", "B1"),
    ("Health", "Getting adequate morning sunlight stimulates healthy vitamin production.", "সকালে পর্যাপ্ত সূর্যের আলো পেলে শরীরে স্বাস্থ্যকর ভিটামিন তৈরিতে সাহায্য করে।", "A2"),
    ("Health", "Gentle stretching exercises relieve stiffness in the neck and shoulders.", "হালকা স্ট্রেচিং ব্যায়াম ঘাড় এবং কাঁধের আড়ষ্টতা দূর করে।", "B1"),
    ("Health", "Mental well-being is deeply connected with physical exercise and proper nutrition.", "শারীরিক ব্যায়াম ও সঠিক পুষ্টির সাথে মানসিক সুস্থতা গভীরভাবে জড়িত।", "B2"),

    # Nature, Weather & Seasons
    ("Nature", "The singing birds welcome the first golden rays of dawn.", "ভোরের প্রথম সোনালি কিরণকে গানের মাধ্যমে স্বাগত জানাচ্ছে পাখিরা।", "B1"),
    ("Nature", "The Padma Multipurpose Bridge has revolutionized southern connectivity.", "পদ্মা বহুমুখী সেতু দক্ষিণাঞ্চলের যোগাযোগের ক্ষেত্রে বৈপ্লবিক পরিবর্তন এনেছে।", "B2"),
    ("Nature", "Cox's Bazar attracts millions of domestic and foreign travelers annually.", "কক্সবাজার প্রতি বছর লাখ লাখ দেশি ও বিদেশি পর্যটককে আকর্ষণ করে।", "B1"),
    ("Nature", "Conserving wetland ecosystems protects vulnerable migratory bird species.", "জলাভূমি বাস্তুতন্ত্র সংরক্ষণ করলে বিপন্ন পরিযায়ী পাখির প্রজাতি রক্ষা পায়।", "C1"),
    ("Nature", "Gentle afternoon rain brings a refreshing scent of wet earth.", "বিকেলের হালকা বৃষ্টি ভেজা মাটির এক অপরূপ মনমাতানো সুবাস নিয়ে আসে।", "B1"),
    ("Nature", "Winter mornings in rural Bangladesh are serene and wrapped in mist.", "বাংলাদেশের গ্রামীণ শীতে সকালগুলো কুয়াশায় ঢাকা এবং অত্যন্ত শান্তিময় হয়।", "B1"),
    ("Nature", "We must protect our rivers from untreated industrial chemical waste.", "অপরিশোধিত শিল্প কারখানার রাসায়নিক বর্জ্য থেকে আমাদের নদীগুলোকে রক্ষা করতে হবে।", "B2"),
    ("Nature", "Planting fruit-bearing trees supports local bird and wildlife populations.", "ফলদ গাছ রোপণ করলে তা স্থানীয় পাখি ও বন্যপ্রাণীর খাবার জোগাতে সাহায্য করে।", "B1"),
    ("Nature", "The starry night sky looks incredibly vivid far away from city lights.", "শহরের বাতির কোলাহল থেকে দূরে রাতের তারায় ভরা আকাশ অবিশ্বাস্য উজ্জ্বল দেখায়।", "B2"),
    ("Nature", "Clean air and pure drinking water are fundamental universal human rights.", "বিশুদ্ধ বাতাস এবং নিরাপদ খাবার পানি মানুষের মৌলিক সর্বজনীন অধিকার।", "B2")
]
SYSTEMATIC_SENTENCES.extend(comm_lines)

# Add more English learning, grammar & conversational practice sentences to reach >= 900
fluency_pack = [
    # Complex grammar & conditionals (B2-C1)
    ("Grammar", "If you practice consistently every day, you will achieve fluency.", "আপনি যদি প্রতিদিন নিয়মিত চর্চা করেন, তবে আপনি অবশ্যই সাবলীলতা অর্জন করবেন।", "B1"),
    ("Grammar", "Had I known about the schedule change, I would have arrived earlier.", "সময়সূচির পরিবর্তনের কথা যদি আমি আগে জানতাম, তবে আমি আরও আগে আসতাম।", "C1"),
    ("Grammar", "Although the examination was challenging, all the students passed successfully.", "পরীক্ষাটি কঠিন হওয়া সত্ত্বেও সকল শিক্ষার্থী সফলভাবে উত্তীর্ণ হয়েছে।", "B2"),
    ("Grammar", "Unless we leave immediately, we will undoubtedly miss the evening train.", "আমরা যদি এখনই রওনা না হই, তবে নিশ্চিতভাবেই আমরা সন্ধ্যার ট্রেন মিস করব।", "B1"),
    ("Grammar", "She speaks English so naturally that people assume she studied abroad.", "সে এত প্রাকৃতিকভাবে ইংরেজি বলে যে লোকে ধরে নেয় সে বিদেশে পড়াশোনা করেছে।", "B2"),
    ("Grammar", "The more books you read, the broader your perspective becomes.", "আপনি যত বেশি বই পড়বেন, আপনার দৃষ্টিভঙ্গি তত বেশি প্রসারিত হবে।", "B2"),
    ("Grammar", "Neither my brother nor my cousins have visited Sundarbans before.", "আমার ভাই কিংবা আমার চাচাতো ভাইবোন কেউই এর আগে সুন্দরবন ঘুরে আসেনি।", "B1"),
    ("Grammar", "Not only did he complete the assignment, but he also helped his peers.", "সে কেবল নিজের কাজটি শেষই করেনি, বরং তার সহপাঠীদেরও সাহায্য করেছে।", "B2"),
    ("Grammar", "In spite of facing numerous hurdles, she achieved her lifelong dream.", "অসংখ্য বাধার সম্মুখীন হওয়া সত্ত্বেও তিনি তার আজীবনের স্বপ্ন পূরণ করেছেন।", "B2"),
    ("Grammar", "It is high time we took decisive action to protect the environment.", "পরিবেশ রক্ষায় চূড়ান্ত ও কঠোর পদক্ষেপ নেওয়ার এখনই উপযুক্ত সময়।", "C1"),

    # Idioms in context (B2-C1)
    ("Idioms", "Do not worry about the upcoming English quiz; it will be a piece of cake.", "আসন্ন ইংরেজি কুইজ নিয়ে চিন্তা করবেন না; এটি অত্যন্ত সহজ হবে।", "B1"),
    ("Idioms", "I am feeling a little under the weather today, so I will rest at home.", "আজ আমার শরীরটা একটু ভালো লাগছে না, তাই আমি বাসায় বিশ্রাম নেব।", "B1"),
    ("Idioms", "You have hit the nail on the head with your accurate analysis.", "আপনার সঠিক বিশ্লেষণের মাধ্যমে আপনি একদম মোক্ষম কথাটি বলেছেন।", "B2"),
    ("Idioms", "We only get to see our childhood school friends once in a blue moon.", "শৈশবের স্কুল বন্ধুদের সাথে আমাদের খুব কালেভদ্রে বা কদাচিৎ দেখা হয়।", "B2"),
    ("Idioms", "Actions speak much louder than words, so let your hard work show.", "কথার চেয়ে কাজের গুরুত্ব অনেক বেশি, তাই আপনার পরিশ্রম দিয়ে প্রমাণ করুন।", "B1"),
    ("Idioms", "Let us call it a day and resume our brainstorming session tomorrow morning.", "আজকের মতো কাজ সমাপ্ত করি এবং কাল সকালে আমাদের আলোচনা পুনরায় শুরু করব।", "B1"),
    ("Idioms", "Learning to speak a new language takes time, but practice makes perfect.", "নতুন একটি ভাষায় কথা বলা শিখতে সময় লাগে, তবে অনুশীলনেই মানুষ নিখুঁত হয়।", "A2"),
    ("Idioms", "Do not bite off more than you can chew when accepting new responsibilities.", "নতুন দায়িত্ব নেওয়ার সময় নিজের সামর্থ্যের চেয়ে বেশি বোঝা মাথায় নেবেন না।", "B2"),
    ("Idioms", "Every cloud has a silver lining, so remain optimistic during tough times.", "খারাপ পরিস্থিতির মাঝেও ভালো কোনো সম্ভাবনা লুকিয়ে থাকে, তাই কঠিন সময়ে আশাবাদী থাকুন।", "B2"),
    ("Idioms", "He burnt the midnight oil to prepare thoroughly for his medical board exam.", "মেডিকেল বোর্ড পরীক্ষার পূর্ণ প্রস্তুতির জন্য সে রাত জেগে কঠোর পরিশ্রম করেছিল।", "B2"),

    # Telephone & Digital Messages (A2-B1)
    ("Phone", "Hello, I am returning your call regarding the property inquiry.", "হ্যালো, ফ্ল্যাট সংক্রান্ত অনুসন্ধানের বিষয়ে আপনার কলের উত্তর দিতে ফোন করেছি।", "A2"),
    ("Phone", "Sorry, I missed your call earlier because my phone was on silent mode.", "দুঃখিত, ফোন সাইলেন্ট মোডে থাকায় আমি আগে আপনার কলটি ধরতে পারিনি।", "A2"),
    ("Phone", "Could you speak a little louder? The connection is breaking up.", "একটু জোরে কথা বলবেন কি? লাইনটি কেটে কেটে আসছে।", "A2"),
    ("Phone", "I will send you a text message with the complete address and landmark.", "আমি সম্পূর্ণ ঠিকানা এবং চেনার উপায়সহ আপনাকে একটি টেক্সট মেসেজ পাঠিয়ে দিচ্ছি।", "A2"),
    ("Phone", "Can I call you back in ten minutes once I finish my meeting?", "মিটিং শেষ করে দশ মিনিট পর কি আমি আপনাকে আবার ফোন করতে পারি?", "A2"),
    ("Phone", "My smartphone battery is running low; let me plug in the charger.", "আমার স্মার্টফোনের চার্জ শেষ হয়ে আসছে; আমি চার্জারটি লাগিয়ে নিই।", "A1"),
    ("Phone", "Please send me your email address so I can forward the invitation.", "দয়া করে আমাকে আপনার ইমেইল ঠিকানাটি পাঠান যাতে আমি আমন্ত্রণপত্রটি ফরোয়ার্ড করতে পারি।", "A2"),
    ("Phone", "Did you receive the photo files I sent through WhatsApp?", "হোয়াটসঅ্যাপের মাধ্যমে আমি যে ছবির ফাইলগুলো পাঠিয়েছিলাম তা কি আপনি পেয়েছেন?", "A2"),
    ("Phone", "Thank you for reaching out; I will review the message shortly.", "যোগাযোগ করার জন্য ধন্যবাদ; আমি কিছুক্ষণের মধ্যেই বার্তাটি দেখে নিচ্ছি।", "A2"),
    ("Phone", "Let us catch up over a phone call over the upcoming weekend.", "আসন্ন ছুটির দিনগুলোতে চলুন ফোনে বিস্তারিত কথা বলি।", "A2")
]
SYSTEMATIC_SENTENCES.extend(fluency_pack)

print(f"Added systematic sentences. Count: {len(SYSTEMATIC_SENTENCES)}")

# Combine with existing
all_combined = existing + SYSTEMATIC_SENTENCES

# De-duplicate
seen = set()
final_sents = []
for s in all_combined:
    key = s["en"].strip().lower()
    if key not in seen:
        seen.add(key)
        final_sents.append(s)

print(f"Total curated sentences after de-duplication: {len(final_sents)}")

# Now we need total sentences in final database >= 1050!
# We will generate additional natural variations to surpass 1,050 sentences.
current_count = len(final_sents)
needed = 1060 - current_count

if needed > 0:
    print(f"Generating {needed} additional real conversational sentences...")
    # Add high-value everyday conversational lines
    extra_patterns = [
        ("Daily", "I usually wake up around {} in the morning.", "আমি সাধারণত সকাল {} নাগাদ ঘুম থেকে উঠি।", ["six", "seven", "five", "six thirty", "seven fifteen"], "A1"),
        ("Food", "I like to eat fresh {} for breakfast.", "আমি সকালের নাস্তায় তাজা {} খেতে পছন্দ করি।", ["fruits and honey", "eggs and whole wheat bread", "warm oats and milk", "banana and almonds", "apples and yogurt"], "A1"),
        ("Travel", "How far is the {} from this hotel?", "এই হোটেল থেকে {} কত দূর?", ["nearest metro station", "international airport", "central railway terminal", "city shopping mall", "famous historical museum"], "A2"),
        ("Shopping", "Can I pay for this {} using digital payment?", "আমি কি ডিজিটাল পেমেন্ট দিয়ে এই {} এর মূল্য পরিশোধ করতে পারি?", ["leather jacket", "cotton shirt", "wristwatch", "pair of sneakers", "gift package"], "A2"),
        ("Health", "You should consult a doctor if the {} lasts more than two days.", "যদি {} দুই দিনের বেশি স্থায়ী হয় তবে আপনার ডাক্তার দেখানো উচিত।", ["headache", "fever", "severe cough", "chest pain", "body ache"], "A2"),
        ("Office", "Please make sure to finish the {} before Friday.", "দয়া করে নিশ্চিত করুন যেন শুক্রবারের আগেই {} শেষ করা হয়।", ["quarterly audit report", "project presentation", "budget spreadsheet", "client contract review", "marketing strategy draft"], "B1"),
        ("School", "Our teacher explained the lesson on {} with great clarity.", "আমাদের শিক্ষক অত্যন্ত স্পষ্টভাবে {} বিষয়ক পাঠটি বুঝিয়ে দিয়েছেন।", ["English grammar", "environmental science", "modern history", "mathematics formulas", "computer programming"], "A2"),
        ("Emotions", "Staying calm during {} shows maturity and inner strength.", "{} এর সময় শান্ত থাকা পরিপক্বতা এবং মানসিক শক্তির পরিচায়ক।", ["difficult times", "stressful moments", "unexpected crises", "challenging situations", "heated debates"], "B2"),
        ("Bank", "What is the processing fee for a {}?", "{} এর জন্য প্রসেসিং ফি কত?", ["personal loan application", "credit card renewal", "bank statement issuance", "foreign wire transfer", "safe deposit locker"], "B1"),
        ("Directions", "Turn {} after you cross the traffic signal.", "ট্রাফিক সিগন্যাল পার হওয়ার পর {} ঘুরবেন।", ["left at the next corner", "right near the pharmacy", "left near the grand mosque", "right opposite the public park", "left just before the footbridge"], "A1")
    ]

    for cat, en_temp, bn_temp, choices, lvl in extra_patterns:
        for c in choices:
            # Map choice to Bengali
            bn_choice_map = {
                "six": "ছয়টা", "seven": "সাতটা", "five": "পাঁচটা", "six thirty": "সাড়ে ছয়টা", "seven fifteen": "সোয়া সাতটা",
                "fruits and honey": "ফলমূল ও মধু", "eggs and whole wheat bread": "ডিম ও লাল আটার রুটি", "warm oats and milk": "গরম ওটস ও দুধ", "banana and almonds": "কলা ও কাঠবাদাম", "apples and yogurt": "আপেল ও দই",
                "nearest metro station": "সবচেয়ে কাছের মেট্রোরেল স্টেশন", "international airport": "আন্তর্জাতিক বিমানবন্দর", "central railway terminal": "প্রধান রেলওয়ে টার্মিনাল", "city shopping mall": "শহরের শপিংমল", "famous historical museum": "বিখ্যাত ঐতিহাসিক জাদুঘর",
                "leather jacket": "চামড়ার জ্যাকেট", "cotton shirt": "সুতি শার্ট", "wristwatch": "হাতঘড়ি", "pair of sneakers": "একজোড়া স্নিকার্স", "gift package": "উপহারের প্যাকেট",
                "headache": "মাথাব্যথা", "fever": "জ্বর", "severe cough": "তীব্র কাশি", "chest pain": "বুকে ব্যথা", "body ache": "শরীরের ব্যথা",
                "quarterly audit report": "ত্রৈমাসিক নিরীক্ষা প্রতিবেদন", "project presentation": "প্রকল্পের প্রেজেন্টেশন", "budget spreadsheet": "বাজেট স্প্রেডশিট", "client contract review": "ক্লায়েন্টের চুক্তি পর্যালোচনা", "marketing strategy draft": "মার্কেটিং কৌশলের খসড়া",
                "English grammar": "ইংরেজি ব্যাকরণ", "environmental science": "পরিবেশ বিজ্ঞান", "modern history": "আধুনিক ইতিহাস", "mathematics formulas": "গণিতের সূত্রাবলী", "computer programming": "কম্পিউটার প্রোগ্রামিং",
                "difficult times": "কঠিন পরিস্থিতি", "stressful moments": "মানসিক চাপের মুহূর্ত", "unexpected crises": "অনাকাঙ্ক্ষিত সংকট", "challenging situations": "চ্যালেঞ্জিং মুহূর্ত", "heated debates": "উত্তপ্ত বিতর্ক",
                "personal loan application": "ব্যক্তিগত ঋণের আবেদন", "credit card renewal": "ক্রেডিট কার্ড নবায়ন", "bank statement issuance": "ব্যাংক স্টেটমেন্ট উত্তোলন", "foreign wire transfer": "বিদেশি তারবার্তা স্থানান্তর", "safe deposit locker": "নিরাপদ লকার সেবা",
                "left at the next corner": "পরবর্তী মোড়ে বামে", "right near the pharmacy": "ফার্মেসির কাছে ডানে", "left near the grand mosque": "বড় মসজিদের কাছে বামে", "right opposite the public park": "পাবলিক পার্কের বিপরীতে ডানে", "left just before the footbridge": "ফুটওভার ব্রিজের ঠিক আগে বামে"
            }
            bn_sub = bn_choice_map.get(c, c)
            en_sent = en_temp.format(c)
            bn_sent = bn_temp.format(bn_sub)
            key = en_sent.strip().lower()
            if key not in seen:
                seen.add(key)
                final_sents.append({
                    "category": cat,
                    "en": en_sent,
                    "bn": bn_sent,
                    "level": lvl
                })

print(f"Final Count of Sentences in JSON: {len(final_sents)}")

with open("scripts/rich_sentences_data.json", "w", encoding="utf-8") as f:
    json.dump(final_sents, f, ensure_ascii=False, indent=2)

print("rich_sentences_data.json updated successfully!")
