# scripts/generate_1000_sentences.py
# -*- coding: utf-8 -*-
import json
import os

print("Compiling 1000+ practical sentences...")

# We load data_source.py ADDITIONAL_SENTENCES
from data_source import ADDITIONAL_SENTENCES

sentences = []
for cat, en, bn, lvl in ADDITIONAL_SENTENCES:
    sentences.append({
        "category": cat,
        "en": en,
        "bn": bn,
        "level": lvl
    })

# Now let's add large batches of authentic, diverse conversational sentences
MORE_SENTS = [
    # ---- GREETINGS & SMALL TALK ----
    ("Greetings", "Good morning, how did you sleep last night?", "শুভ সকাল, গত রাতে আপনার ঘুম কেমন হলো?", "A1"),
    ("Greetings", "I slept very soundly, thank you for asking.", "আমার খুব গভীর ঘুম হয়েছে, খোঁজ নেওয়ার জন্য ধন্যবাদ।", "A1"),
    ("Greetings", "How are things going with your new project?", "আপনার নতুন প্রজেক্টের কাজকর্ম কেমন চলছে?", "A2"),
    ("Greetings", "It is always wonderful to catch up with you.", "আপনার সাথে কথা বলতে পারা সবসময়ই আনন্দের।", "A2"),
    ("Greetings", "Long time no see, what have you been up to?", "কতদিন পর দেখা! আজকাল কী নিয়ে ব্যস্ত আছেন?", "A2"),
    ("Greetings", "I have been busy with my university examinations.", "আমি আমার বিশ্ববিদ্যালয়ের পরীক্ষা নিয়ে ব্যস্ত ছিলাম।", "A2"),
    ("Greetings", "Please send my warmest regards to your family.", "আপনার পরিবারকে আমার আন্তরিক শুভেচ্ছা জানাবেন।", "A2"),
    ("Greetings", "I truly appreciate your kind hospitality today.", "আজ আপনার চমৎকার আতিথেয়তার জন্য আমি সত্যিই কৃতজ্ঞ।", "B1"),
    ("Greetings", "Have a pleasant evening with your loved ones.", "প্রিয়জনদের সাথে আপনার সন্ধ্যাটি আনন্দে কাটুক।", "A1"),
    ("Greetings", "Good luck with your presentation tomorrow.", "আগামীকালের প্রেজেন্টেশনের জন্য শুভকামনা রইল।", "A2"),
    ("Greetings", "Congratulations on your well-deserved promotion!", "আপনার সুযোগ্য পদোন্নতির জন্য অনেক অনেক অভিনন্দন!", "B1"),
    ("Greetings", "May all your dreams and aspirations come true.", "আপনার সকল স্বপ্ন ও প্রত্যাশা পূরণ হোক।", "B1"),
    ("Greetings", "I am honored to finally meet you in person.", "অবশেষে আপনার সাথে সামনাসামনি দেখা হতে পেরে আমি সম্মানিত।", "B1"),
    ("Greetings", "Could you please introduce me to the host?", "আপনি কি দয়া করে আমাকে অনুষ্ঠানের আয়োজকের সাথে পরিচয় করিয়ে দেবেন?", "B1"),
    ("Greetings", "It is a pleasure to make your acquaintance, sir.", "স্যার, আপনার সাথে পরিচিত হতে পেরে অত্যন্ত আনন্দিত হলাম।", "B2"),

    # ---- DAILY LIFE & HOME ACTIVITIES ----
    ("Daily", "I like to start my day with a glass of warm water.", "আমি এক গ্লাস হালকা গরম পানি দিয়ে দিন শুরু করতে পছন্দ করি।", "A1"),
    ("Daily", "My mother prepares delicious breakfast for all of us.", "আমার মা আমাদের সবার জন্য সুস্বাদু সকালের নাস্তা তৈরি করেন।", "A1"),
    ("Daily", "I usually take the train because it avoids road traffic.", "আমি সাধারণত ট্রেনে যাই কারণ এতে রাস্তার যানজট এড়ানো যায়।", "A2"),
    ("Daily", "I listen to English news podcasts while commuting.", "যাতায়াতের সময় আমি ইংরেজি খবরের পডকাস্ট শুনি।", "B1"),
    ("Daily", "I prefer drinking herbal tea without any added sugar.", "আমি কোনো চিনি ছাড়া ভেষজ চা পান করতে পছন্দ করি।", "A2"),
    ("Daily", "My younger brother is currently studying in class eight.", "আমার ছোট ভাই বর্তমানে অষ্টম শ্রেণিতে পড়াশোনা করছে।", "A1"),
    ("Daily", "We clean our house thoroughly every Friday morning.", "আমরা প্রতি শুক্রবার সকালে আমাদের পুরো বাড়ি ভালোভাবে পরিষ্কার করি।", "A1"),
    ("Daily", "Doing household chores together strengthens family bonds.", "একসাথে ঘরের কাজ করলে পরিবারের পারস্পরিক বন্ধন দৃঢ় হয়।", "B1"),
    ("Daily", "I like to water the flowering plants in our garden.", "আমি আমাদের বাগানের ফুলগাছে পানি দিতে পছন্দ করি।", "A1"),
    ("Daily", "Reading a few pages of a book before bed calms the mind.", "ঘুমানোর আগে বইয়ের কয়েকটি পৃষ্ঠা পড়লে মন শান্ত হয়।", "A2"),
    ("Daily", "I always turn off electrical switches before leaving home.", "বাড়ি থেকে বের হওয়ার আগে আমি সবসময় বৈদ্যুতিক সুইচ বন্ধ করি।", "A1"),
    ("Daily", "We should reduce plastic waste to keep our environment clean.", "পরিবেশ পরিচ্ছন্ন রাখতে আমাদের প্লাস্টিক বর্জ্য কমানো উচিত।", "B1"),
    ("Daily", "Cooking dinner together is our favorite family routine.", "একসাথে রাতের খাবার রান্না করা আমাদের পরিবারের প্রিয় রুটিন।", "A2"),
    ("Daily", "I write down my daily expenses in a small notebook.", "আমি একটি ছোট ডায়েরিতে আমার প্রতিদিনের খরচ লিখে রাখি।", "A2"),
    ("Daily", "Getting eight hours of sleep improves focus and memory.", "আট ঘণ্টা ঘুমালে মনোযোগ এবং স্মৃতিশক্তি উন্নত হয়।", "A2"),

    # ---- FOOD, DINING, COOKING & CAFE ----
    ("Food", "Can I see the dessert menu, please?", "আমি কি মিষ্টান্নের মেনুটি দেখতে পারি?", "A1"),
    ("Food", "Could you recommend a signature dish from your chef?", "আপনার প্রধান রাঁধুনির কোনো স্পেশাল খাবারের সুপারিশ করবেন?", "B1"),
    ("Food", "I would like my coffee with low sugar and warm milk.", "আমি কম চিনি এবং হালকা গরম দুধ সহ কফি পছন্দ করি।", "A2"),
    ("Food", "Is there any vegetarian option available on the menu?", "মেনুতে কি কোনো নিরামিষ খাবারের বিকল্প আছে?", "A2"),
    ("Food", "Please do not add any raw onions to my salad.", "দয়া করে আমার সালাদে কোনো কাঁচা পেঁয়াজ দেবেন না।", "A1"),
    ("Food", "This biryani has an exquisite aroma and perfect taste.", "এই বিরিয়ানিটির সুবাস অপূর্ব এবং স্বাদ একদম নিখুঁত।", "B1"),
    ("Food", "Could you bring an extra plate and two spoons, please?", "দয়া করে একটি বাড়তি প্লেট এবং দুটি চামচ নিয়ে আসবেন?", "A1"),
    ("Food", "The soup is extremely hot; please let it cool down.", "স্যুপটি প্রচণ্ড গরম; দয়া করে এটি কিছুটা ঠান্ডা হতে দিন।", "A1"),
    ("Food", "I am trying to cut down on oily and fried foods.", "আমি অতিরিক্ত তৈলাক্ত ও ভাজাভুজি খাবার কমানোর চেষ্টা করছি।", "B1"),
    ("Food", "Drinking fresh fruit juice revitalizes the body.", "তাজা ফলের রস পান করলে শরীরে নতুন সতেজতা আসে।", "A2"),
    ("Food", "Can we split the restaurant bill evenly among us?", "আমরা কি রেস্তোরাঁর বিলটি নিজেদের মধ্যে সমানভাবে ভাগ করে নিতে পারি?", "B1"),
    ("Food", "We had a wonderful dining experience at this restaurant.", "এই রেস্তোরাঁয় আমাদের খাওয়ার অভিজ্ঞতা সত্যিই অসাধারণ ছিল।", "B1"),
    ("Food", "Freshly baked bread tastes best with pure butter.", "সদ্য সেঁকা গরম রুটি খাঁটি মাখনের সাথে সবচেয়ে ভালো লাগে।", "A2"),
    ("Food", "Please pack the leftover pizza in a takeaway box.", "দয়া করে অবশিষ্ট পিৎজাটুকু পার্সেল বক্সে প্যাক করে দিন।", "A2"),
    ("Food", "A balanced diet provides all necessary vitamins for life.", "সুষম খাদ্যাভ্যাস জীবনের জন্য প্রয়োজনীয় সকল ভিটামিন সরবরাহ করে।", "B1"),

    # ---- SHOPPING, MARKETS & CLOTHING ----
    ("Shopping", "Excuse me, where can I find men's formal shirts?", "মাফ করবেন, পুরুষদের ফরমাল শার্ট কোথায় পাব?", "A1"),
    ("Shopping", "Do you have this dress in a different color?", "এই পোশাকটি কি অন্য কোনো রঙের পাওয়া যাবে?", "A1"),
    ("Shopping", "This fabric is made of one hundred percent pure cotton.", "এই কাপড়টি শতভাগ খাঁটি সুতি দিয়ে তৈরি।", "A2"),
    ("Shopping", "Can I try this pair of trousers in the trial room?", "আমি কি ট্রায়াল রুমে এই ট্রাউজারটি পরে দেখতে পারি?", "A1"),
    ("Shopping", "It is slightly loose around the waist area.", "কোমরের অংশের দিকটায় এটি সামান্য ঢিলা হচ্ছে।", "A2"),
    ("Shopping", "Could you alter the length of these pants for me?", "আপনি কি আমার জন্য এই প্যান্টের দৈর্ঘ্য কিছুটা ছোট করে দেবেন?", "B1"),
    ("Shopping", "Is there any promotional warranty on this electronic item?", "এই ইলেকট্রনিক সামগ্রীটিতে কি কোনো অফিশিয়াল ওয়ারেন্টি আছে?", "B1"),
    ("Shopping", "The store offers a one-year full replacement guarantee.", "দোকানটি এক বছরের সম্পূর্ণ পরিবর্তনের গ্যারান্টি দিচ্ছে।", "B1"),
    ("Shopping", "Can I pay fifty percent now and the rest upon delivery?", "আমি কি এখন পঞ্চাশ শতাংশ এবং ডেলিভারির সময় বাকিটা দিতে পারি?", "B1"),
    ("Shopping", "Please ensure the fragile items are wrapped securely.", "দয়া করে নিশ্চিত করুন যেন ভঙ্গুর জিনিসগুলো নিরাপদে মোড়ক করা হয়।", "B1"),
    ("Shopping", "Are there any seasonal clearance sales happening now?", "এখন কি কোনো মৌসুমী ক্লিয়ারেন্স সেল চলছে?", "B1"),
    ("Shopping", "I received a defective product and wish to replace it.", "আমি একটি ত্রুটিযুক্ত পণ্য পেয়েছি এবং এটি বদলাতে চাই।", "B1"),
    ("Shopping", "Keep the purchase receipt safe in case of returns.", "পণ্য ফেরতের প্রয়োজনে ক্রয়ের রসিদটি যত্ন করে রাখুন।", "A2"),
    ("Shopping", "This boutique has an exclusive collection of traditional sarees.", "এই বুটিকে ঐতিহ্যবাহী শাড়ির চমৎকার এক্সক্লুসিভ কালেকশন রয়েছে।", "B1"),
    ("Shopping", "Online shopping saves time but requires careful verification.", "অনলাইন কেনাকাটা সময় বাঁচায় তবে সতর্কভাবে যাচাই করা দরকার।", "B1"),

    # ---- TRAVEL, TRANSPORT & CITY NAVIGATION ----
    ("Travel", "Excuse me, which platform does the Chittagong train arrive on?", "মাফ করবেন, চট্টগ্রামগামী ট্রেনটি কোন প্ল্যাটফর্মে আসবে?", "A2"),
    ("Travel", "The train is scheduled to arrive at platform number four.", "ট্রেনটি চার নম্বর প্ল্যাটফর্মে আসার কথা রয়েছে।", "A2"),
    ("Travel", "Please keep your ticket handy for inspection by the conductor.", "টিটিই কর্তৃক পরীক্ষার জন্য দয়া করে টিকিটটি হাতের কাছে রাখুন।", "B1"),
    ("Travel", "Is there a direct bus service from Dhaka to Cox's Bazar?", "ঢাকা থেকে কক্সবাজারের কি সরাসরি বাস সার্ভিস আছে?", "A2"),
    ("Travel", "Yes, there are several luxury sleeper buses available every night.", "হ্যাঁ, প্রতি রাতে বেশ কয়েকটি বিলাসবহুল স্লিপার বাস চলাচল করে।", "B1"),
    ("Travel", "How much luggage am I allowed to carry free of charge?", "বিনামূল্যে আমি কতটুকু মালামাল বহন করতে পারব?", "B1"),
    ("Travel", "I would like to book a window seat near the front of the bus.", "আমি বাসের সামনের দিকে জানালার পাশের একটি আসন বুক করতে চাই।", "A2"),
    ("Travel", "Please remember to wear your seatbelt throughout the ride.", "পুরো যাত্রাপথেই দয়া করে আপনার সিটবেল্ট বেঁধে রাখুন।", "A2"),
    ("Travel", "The scenic view from the hill summit was breathtaking.", "পাহাড়ের চূড়া থেকে প্রাকৃতিক দৃশ্যটি চোখ জুড়ানো ছিল।", "B2"),
    ("Travel", "Traveling opens your mind to new perspectives and cultures.", "ভ্রমণ করলে নতুন দৃষ্টিভঙ্গি ও সংস্কৃতির প্রতি মন উন্মুক্ত হয়।", "B2"),
    ("Travel", "Can you recommend a reputable travel agency in the city?", "শহরের কোনো বিশ্বস্ত ট্রাভেল এজেন্সির সন্ধান দিতে পারেন?", "B1"),
    ("Travel", "Make sure you keep your national identity card with you.", "খেয়াল রাখবেন যেন আপনার জাতীয় পরিচয়পত্রটি সাথে থাকে।", "A2"),
    ("Travel", "We booked a river cruise along the Padma River.", "আমরা পদ্মা নদী বরাবর একটি রিভার ক্রুজ ভ্রমণ বুক করেছি।", "A2"),
    ("Travel", "The historical ruins of Lalbagh Fort are remarkable.", "লালবাগ কেল্লার ঐতিহাসিক নিদর্শনগুলো সত্যিই দেখার মতো।", "B1"),
    ("Travel", "Always confirm the fare with the rickshaw puller beforehand.", "রিকশাচালকের সাথে আগে থেকেই ভাড়া ঠিক করে নেওয়া ভালো।", "A2"),

    # ---- HEALTH, MEDICINE & WELLNESS ----
    ("Health", "I have had a sore throat and fever since yesterday.", "গতকাল থেকে আমার গলাব্যথা এবং জ্বর হয়েছে।", "A2"),
    ("Health", "Do you feel any pain in your chest or difficulty breathing?", "বুকে কোনো ব্যথা বা শ্বাস নিতে কষ্ট অনুভব করছেন কি?", "B1"),
    ("Health", "You need to drink boiled lukewarm water with pure honey.", "আপনাকে খাঁটি মধু দিয়ে হালকা গরম ফোটানো পানি পান করতে হবে।", "A2"),
    ("Health", "Take this prescribed antibiotic course for five consecutive days.", "টানা পাঁচ দিন এই নির্দিষ্ট অ্যান্টিবায়োটিক কোর্সটি সম্পূর্ণ করুন।", "B1"),
    ("Health", "Never stop taking prescribed antibiotics prematurely.", "চিকিৎসকের পরামর্শ ছাড়া কোর্স শেষ হওয়ার আগে অ্যান্টিবায়োটিক বন্ধ করবেন না।", "B2"),
    ("Health", "Walking at least six thousand steps daily keeps the heart healthy.", "প্রতিদিন কমপক্ষে ছয় হাজার কদম হাঁটলে হৃদযন্ত্র সুস্থ থাকে।", "B1"),
    ("Health", "Excessive sugar intake can lead to obesity and diabetes.", "অতিরিক্ত চিনি গ্রহণ স্থূলতা ও ডায়াবেটিসের কারণ হতে পারে।", "B2"),
    ("Health", "Applying an ice pack reduces swelling after an ankle sprain.", "পায়ে মচকে গেলে বরফের সেক দিলে ফোলা ভাব কমে যায়।", "B1"),
    ("Health", "Make an appointment with an ophthalmologist for eye testing.", "চোখ পরীক্ষার জন্য একজন চক্ষু বিশেষজ্ঞের অ্যাপয়েন্টমেন্ট নিন।", "B2"),
    ("Health", "Regular dental checkups prevent severe tooth decay and pain.", "নিয়মিত দাঁত পরীক্ষা করালে দাঁতের ক্ষয় ও তীব্র ব্যথা প্রতিরোধ করা যায়।", "B1"),
    ("Health", "Adequate hydration is crucial during hot summer days.", "গ্রীষ্মের তপ্ত দিনে পর্যাপ্ত পানি পান করা অত্যন্ত জরুরি।", "B1"),
    ("Health", "Practicing yoga and deep meditation helps lower anxiety.", "যোগব্যায়াম ও গভীর ধ্যান চর্চা মানসিক উদ্বেগ কমাতে সাহায্য করে।", "B1"),
    ("Health", "Wash your hands with soap before touching your face.", "মুখ স্পর্শ করার আগে সাবান দিয়ে হাত ধুয়ে নিন।", "A1"),
    ("Health", "Early diagnosis of any medical condition saves lives.", "যেকোনো শারীরিক সমস্যার প্রাথমিক শনাক্তকরণ জীবন বাঁচায়।", "B2"),
    ("Health", "Keep all prescription drugs out of the reach of children.", "সকল প্রেসক্রিপশন ওষুধ শিশুদের নাগালের বাইরে রাখুন।", "B1"),

    # ---- OFFICE, BUSINESS & CAREER ----
    ("Office", "Let us schedule a brainstorming session for tomorrow morning.", "চলুন আগামীকাল সকালের জন্য একটি আইডিয়া তৈরির মিটিং রাখি।", "B1"),
    ("Office", "I will send out the formal invitation along with the agenda.", "আমি আলোচ্যসূচিসহ আনুষ্ঠানিক আমন্ত্রণপত্র পাঠিয়ে দেব।", "B1"),
    ("Office", "We must prioritize resolving customer complaints swiftly.", "গ্রাহকদের অভিযোগ দ্রুত সমাধানকে আমাদের অগ্রাধিকার দিতে হবে।", "B2"),
    ("Office", "Our quarterly sales figures show steady improvement.", "আমাদের ত্রৈমাসিক বিক্রির পরিসংখ্যান ধারাবাহিক উন্নতি দেখাচ্ছে।", "B2"),
    ("Office", "Please verify the accuracy of all financial statements.", "দয়া করে সকল আর্থিক বিবরণীর সঠিকতা যাচাই করে নিন।", "B2"),
    ("Office", "Clear communication prevents costly misunderstandings.", "স্পষ্ট যোগাযোগ ভুল বোঝাবুঝি ও অনর্থক ক্ষতি প্রতিরোধ করে।", "B2"),
    ("Office", "He presented his business strategy with remarkable clarity.", "তিনি অসাধারণ স্পষ্টতার সাথে তার ব্যবসায়িক কর্মপদ্ধতি তুলে ধরেছেন।", "B2"),
    ("Office", "We are currently hiring talented junior software developers.", "আমরা বর্তমানে প্রতিভাবান তরুণ সফটওয়্যার ডেভেলপার নিয়োগ দিচ্ছি।", "B1"),
    ("Office", "Teamwork and dedication are the foundation of our success.", "দলগত সমন্বয় এবং একনিষ্ঠতাই আমাদের সাফল্যের মূল ভিত্তি।", "B1"),
    ("Office", "Please remember to sign the non-disclosure confidentiality agreement.", "দয়া করে গোপনীয়তা রক্ষার আনুষ্ঠানিক চুক্তিতে স্বাক্ষর করতে ভুলবেন না।", "B2"),
    ("Office", "I need to request three days of medical leave due to illness.", "অসুস্থতার কারণে আমাকে তিন দিনের মেডিকেল ছুটির আবেদন করতে হবে।", "A2"),
    ("Office", "We should embrace modern digital tools to increase productivity.", "কর্মদক্ষতা বাড়াতে আমাদের আধুনিক ডিজিটাল মাধ্যমগুলো গ্রহণ করা উচিত।", "B2"),
    ("Office", "Constructive feedback helps employees grow professionally.", "গঠনমূলক সমালোচনা কর্মীদের পেশাগতভাবে সমৃদ্ধ হতে সাহায্য করে।", "B2"),
    ("Office", "The board of directors approved the annual budget unanimously.", "পরিচালনা পর্ষদ সর্বসম্মতিক্রমে বার্ষিক বাজেট অনুমোদন করেছে।", "C1"),
    ("Office", "Innovation requires taking calculated risks and learning continuously.", "উদ্ভাবনের জন্য সুবিবেচিত ঝুঁকি নেওয়া এবং প্রতিনিয়ত শেখা আবশ্যক।", "C1"),

    # ---- EDUCATION, SCHOOL & ENGLISH MASTERY ----
    ("School", "Education is the most powerful weapon to change society.", "শিক্ষা সমাজ পরিবর্তনের সবচেয়ে শক্তিশালী হাতিয়ার।", "B1"),
    ("School", "Students should cultivate the habit of daily reading.", "শিক্ষার্থীদের প্রতিদিন বই পড়ার অভ্যাস গড়ে তোলা উচিত।", "B1"),
    ("School", "Our teacher explained the complex mathematical formula simply.", "আমাদের শিক্ষক জটিল গণিতের সূত্রটি খুব সহজভাবে বুঝিয়ে দিয়েছেন।", "A2"),
    ("School", "Practice speaking English without hesitation or shyness.", "দ্বিধা বা লজ্জা না রেখে নিয়মিত ইংরেজিতে কথা বলুন।", "A2"),
    ("School", "Learning a foreign language opens new career opportunities.", "একটি বিদেশি ভাষা শিখলে পেশাগত ক্ষেত্রে নতুন সুযোগ সৃষ্টি হয়।", "B1"),
    ("School", "Consistent effort every single day leads to true fluency.", "প্রতিদিন নিয়মিত ধারাবাহিক প্রচেষ্টাই সত্যিকারের সাবলীলতা এনে দেয়।", "B2"),
    ("School", "Do not be afraid of grammatical errors when beginning to speak.", "কথা বলা শুরু করার সময় ব্যাকরণের ভুল নিয়ে একদম ভয় পাবেন না।", "A2"),
    ("School", "Listening to native English speakers refines your pronunciation.", "নেটিভ বক্তাদের কথা শুনলে আপনার উচ্চারণের মান পরিশীলিত হবে।", "B2"),
    ("School", "Keep a small vocabulary journal in your pocket at all times.", "সবসময় পকেটে একটি ছোট শব্দকোষের ডায়েরি রাখুন।", "A2"),
    ("School", "Self-belief and continuous practice will guarantee your success.", "আত্মবিশ্বাস এবং নিয়মিত অনুশীলন আপনার সাফল্য নিশ্চিত করবে।", "B2"),
    ("School", "The school library contains thousands of informative books.", "স্কুলের গ্রন্থাগারে হাজার হাজার তথ্যবহুল বই রয়েছে।", "A2"),
    ("School", "Submit your science laboratory report before Thursday noon.", "বৃহস্পতিবার দুপুরের আগে আপনার বিজ্ঞান ল্যাব রিপোর্ট জমা দিন।", "B1"),
    ("School", "Active participation in classroom discussions sharpens thinking.", "শ্রেণিকক্ষের আলোচনায় সক্রিয় অংশগ্রহণ চিন্তাশক্তিকে শাণিত করে।", "B2"),
    ("School", "Knowledge without action is like a tree without fruit.", "কর্মহীন জ্ঞান ফলহীন বৃক্ষের সমান।", "B2"),
    ("School", "Every expert was once an inexperienced beginner.", "প্রতিটি দক্ষ মানুষই একসময় কোনো না কোনো বিষয়ে অনভিজ্ঞ ছিলেন।", "B1"),

    # ---- EMOTIONS, PHILOSOPHY & INSPIRATION ----
    ("Emotions", "Happiness is not about having everything, but appreciating what you have.", "সুখ সবকিছু পাওয়ার মধ্যে নয়, যা আছে তার কদর করার মধ্যে।", "B1"),
    ("Emotions", "Kindness is a universal language that everyone understands.", "দয়া এমন একটি সার্বজনীন ভাষা যা সবাই উপলব্ধি করতে পারে।", "B1"),
    ("Emotions", "Patience during moments of anger prevents years of regret.", "রাগের মুহূর্তে সামান্য ধৈর্য কয়েক বছরের অনুশোচনা থেকে বাঁচায়।", "B2"),
    ("Emotions", "Believe in your inner strength when facing life's hardships.", "জীবনের কঠিন পরিস্থিতির মুখোমুখি হলে নিজের অন্তর্নিহিত শক্তির উপর বিশ্বাস রাখুন।", "B2"),
    ("Emotions", "Every sunrise brings a brand new opportunity to improve.", "প্রতিটি নতুন সূর্যোদয় নিজেকে আরও ভালো করার নতুন সুযোগ নিয়ে আসে।", "A2"),
    ("Emotions", "Forgiving others brings deep tranquility to your own soul.", "অন্যকে ক্ষমা করে দিলে নিজের আত্মায় গভীর প্রশান্তি অনুভূত হয়।", "B2"),
    ("Emotions", "A positive mindset attracts constructive outcomes.", "ইতিবাচক দৃষ্টিভঙ্গি জীবনের ভালো ফলাফলকে আকর্ষণ করে।", "B1"),
    ("Emotions", "True character is revealed in how you treat those who can do nothing for you.", "যিনি আপনার কোনো উপকারে আসতে পারেন না তার সাথে আপনার আচরণই চরিত্রের প্রমাণ।", "C1"),
    ("Emotions", "Do not let small setbacks distract you from your overarching goal.", "ছোটখাটো ব্যর্থতা যেন আপনার মূল লক্ষ্য থেকে আপনাকে বিভ্রান্ত না করে।", "B2"),
    ("Emotions", "Courage is not the absence of fear, but the triumph over it.", "সাহস মানে ভয়ের অনুপস্থিতি নয়, বরং ভয়কে জয় করার সক্ষমতা।", "B2"),

    # ---- TECHNOLOGY, INTERNET & SOCIAL MEDIA ----
    ("Tech", "Ensure your Wi-Fi router is protected with a strong password.", "নিশ্চিত করুন যে আপনার ওয়াই-ফাই রাউটারে একটি শক্তিশালী পাসওয়ার্ড আছে।", "A2"),
    ("Tech", "Artificial intelligence is automating repetitive administrative tasks.", "কৃত্রিম বুদ্ধিমত্তা পুনরাবৃত্তিমূলক দাপ্তরিক কাজগুলোকে স্বয়ংক্রিয় করছে।", "B2"),
    ("Tech", "Never open suspicious email attachments from unknown senders.", "অপরিচিত প্রেরকের পাঠানো সন্দেহজনক ইমেইল অ্যাটাচমেন্ট কখনোই খুলবেন না।", "B1"),
    ("Tech", "Cloud storage allows you to access important files from anywhere.", "ক্লাউড স্টোরেজের মাধ্যমে আপনি যেকোনো স্থান থেকে প্রয়োজনীয় ফাইল পেতে পারেন।", "B1"),
    ("Tech", "Remember to back up your personal photos on an external drive.", "একটি এক্সটার্নাল ড্রাইভে আপনার ব্যক্তিগত ছবির ব্যাকআপ রাখতে ভুলবেন না।", "A2"),
    ("Tech", "Too much screen time before sleeping can disrupt your circadian rhythm.", "ঘুমানোর আগে অতিরিক্ত স্ক্রিন দেখলে ঘুমের স্বাভাবিক চক্র ব্যাহত হতে পারে।", "B2"),
    ("Tech", "Update your smartphone operating system regularly for security.", "নিরাপত্তার স্বার্থে নিয়মিত আপনার স্মার্টফোনের অপারেটিং সিস্টেম আপডেট করুন।", "A2"),
    ("Tech", "Digital literacy has become a fundamental necessity for modern employment.", "আধুনিক কর্মসংস্থানের জন্য ডিজিটাল সাক্ষরতা একটি অপরিহার্য মৌলিক শর্ত।", "B2"),
    ("Tech", "Use two-factor authentication to secure your social media profiles.", "সোশ্যাল মিডিয়া প্রোফাইল নিরাপদ রাখতে টু-ফ্যাক্টর অথেনটিকেশন ব্যবহার করুন।", "B1"),
    ("Tech", "Technology should serve humanity, not dominate our everyday lives.", "প্রযুক্তি মানুষের সেবায় থাকা উচিত, মানুষের প্রাত্যহিক জীবনকে নিয়ন্ত্রণ করা নয়।", "B2")
]

for cat, en, bn, lvl in MORE_SENTS:
    sentences.append({
        "category": cat,
        "en": en,
        "bn": bn,
        "level": lvl
    })

print(f"Total curated sentences so far: {len(sentences)}")

with open("scripts/rich_sentences_data.json", "w", encoding="utf-8") as f:
    json.dump(sentences, f, ensure_ascii=False, indent=2)

print("rich_sentences_data.json written.")
