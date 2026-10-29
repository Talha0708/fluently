# scripts/generate_50_modules.py
# -*- coding: utf-8 -*-
import json
import re

print("Compiling 50 Comprehensive Main Modules for Fluently...")

MODULE_SPECS = [
    # ================= STAGE 1: A1 BEGINNER (Modules 1-10) =================
    (1, "A1", "স্তর ১: প্রারম্ভিক", "১. পরিচিতি ও প্রাথমিক সম্ভাষণ (Basics & Greetings)", "হ্যালো, শুভ সকাল, ধন্যবাদ, নিজের পরিচয় ও বিদায়", "👋", "from-sky-500 to-sky-600", [
        ("বেসিক কুশলাদি (Basic Greetings)", [
            ("mcq", "Choose the correct meaning of 'Hello, how are you?'", ["হ্যালো, আপনি কেমন আছেন?", "শুভ সকাল, কি খবর?", "আপনি কোথায় থাকেন?", "বিদায় বন্ধু!"], "হ্যালো, আপনি কেমন আছেন?", "How are you? = আপনি কেমন আছেন?"),
            ("reorder", "শুভ সকাল, আপনার সাথে দেখা হয়ে ভালো লাগল।", "Good morning, nice to meet you."),
            ("listening", "See you tomorrow", ["See you tomorrow", "Good night friend", "How is it going", "Welcome to my office"], "See you tomorrow", "See you tomorrow = আগামীকাল দেখা হবে"),
            ("matching", "সঠিক জোড়া মেলাও:", [("Welcome", "স্বাগতম"), ("Thank you", "ধন্যবাদ"), ("Goodbye", "বিদায়"), ("Please", "দয়া করে")])
        ]),
        ("নিজের পরিচয় দেওয়া (Self Introduction)", [
            ("mcq", "Choose the correct translation for 'আমি একজন ছাত্র':", ["I am a student.", "I am a teacher.", "He is a student.", "We are students."], "I am a student.", "Student = ছাত্র / ছাত্রী"),
            ("reorder", "আমার নাম হাসান এবং আমি বাংলাদেশে থাকি।", "My name is Hasan and I live in Bangladesh."),
            ("listening", "Nice to meet you", ["Nice to meet you", "How old are you", "Where do you live", "Have a nice day"], "Nice to meet you", "Nice to meet you = দেখা হয়ে ভালো লাগল")
        ]),
        ("সৌজন্য ও বিদায় (Courtesies & Farewell)", [
            ("reorder", "আপনার দিনটি শুভ হোক।", "Have a nice day."),
            ("mcq", "'You are welcome' এর সঠিক বাংলা অর্থ কী?", ["আপনাকে স্বাগতম", "ধন্যবাদ", "বিদায়", "মাফ করবেন"], "আপনাকে স্বাগতম", "ধন্যবাদ দিলে প্রতিউত্তরে 'You are welcome' বলতে হয়।"),
            ("listening", "Thank you for your help.", ["Thank you for your help.", "I need your help.", "Where is my help?", "Help me please."], "Thank you for your help.", "Thank you for your help = আপনার সাহায্যের জন্য ধন্যবাদ।")
        ])
    ]),

    (2, "A1", "স্তর ১: প্রারম্ভিক", "২. পরিবার ও আত্মীয়স্বজন (Family & Relatives)", "বাবা, মা, ভাই, বোন, আত্মীয়স্বজন ও পারিবারিক জীবন", "👨‍👩‍👧‍👦", "from-sky-600 to-blue-600", [
        ("পরিবারের সদস্যবৃন্দ (Family Members)", [
            ("reorder", "আমার পরিবারে চারজন সদস্য আছেন।", "There are four members in my family."),
            ("mcq", "'Father' এবং 'Mother' এর সঠিক বাংলা কী?", ["বাবা এবং মা", "ভাই এবং বোন", "চাচা এবং চাচি", "দাদা এবং দাদি"], "বাবা এবং মা", "Father = বাবা, Mother = মা"),
            ("matching", "পরিবারের সম্পর্ক মেলাও:", [("Father", "বাবা"), ("Mother", "মা"), ("Brother", "ভাই"), ("Sister", "বোন")])
        ]),
        ("আত্মীয়স্বজন ও সম্পর্ক (Relatives & Kin)", [
            ("reorder", "আমরা প্রতি শুক্রবার দাদা-দাদির বাড়ি যাই।", "We visit our grandparents every Friday."),
            ("mcq", "'He has two children' এর অর্থ কী?", ["তার দুটি সন্তান আছে।", "তার দুটি ভাই আছে।", "সে স্কুলে যায়।", "তারা খেলছে।"], "তার দুটি সন্তান আছে।", "Children = সন্তান সন্ততি"),
            ("listening", "My family is very close.", ["My family is very close.", "My house is far away.", "We love our school.", "He lives alone."], "My family is very close.", "Close = আন্তরিক বা ঘনিষ্ঠ")
        ]),
        ("পিতামাতার পেশা ও পরিচয় (Parents & Occupations)", [
            ("reorder", "আমার বাবা একটি ব্যাংকে চাকরি করেন।", "My father works in a bank."),
            ("reorder", "আমার মা খুব সুস্বাদু রান্না করেন।", "My mother cooks very well."),
            ("listening", "Do you have any brothers or sisters?", ["Do you have any brothers or sisters?", "Where are your parents going?", "Is this your house?", "What is your father doing?"], "Do you have any brothers or sisters?", "Brothers or sisters = ভাই অথবা বোন")
        ])
    ]),

    (3, "A1", "স্তর ১: প্রারম্ভিক", "৩. সংখ্যা, দিন ও সময় (Numbers, Days & Time)", "সংখ্যা গণনা, সপ্তাহের ৭ দিন, ১২ মাস ও সময় বলা", "🔢", "from-blue-500 to-cyan-600", [
        ("সংখ্যা ও গণনা (Numbers 1-100)", [
            ("mcq", "'Twenty-five' এর সংখ্যা কত?", ["২৫", "৩৫", "১৫", "৫২"], "২৫", "Twenty = ২০, Five = ৫ -> ২৫"),
            ("reorder", "আমার কাছে তিনটি নতুন বই আছে।", "I have three new books."),
            ("mcq", "'One hundred' মানে কত?", ["১০০", "১০০০", "১০", "৫০"], "১০০", "Hundred = শত / একশত")
        ]),
        ("বার ও মাস (Days of Week & Months)", [
            ("matching", "বার ও অর্থ মেলাও:", [("Monday", "সোমবার"), ("Friday", "শুক্রবার"), ("Sunday", "রবিবার"), ("Wednesday", "বুধবার")]),
            ("reorder", "আজকে বুধবার এবং আগামীকাল বৃহস্পতিবার।", "Today is Wednesday and tomorrow is Thursday."),
            ("listening", "My birthday is next month.", ["My birthday is next month.", "The exam is tomorrow.", "Today is a holiday.", "See you next week."], "My birthday is next month.", "Next month = আগামী মাসে")
        ]),
        ("ঘড়ির সময় বলা (Telling Time)", [
            ("mcq", "'What time is it?' দিয়ে কী বোঝায়?", ["কয়টা বাজে?", "আপনি কখন যাবেন?", "আজ কী বার?", "দেরি হলো কেন?"], "কয়টা বাজে?", "What time is it? = এখন সময় কত?"),
            ("reorder", "এখন সাড়ে পাঁচটা বাজে।", "It is half past five."),
            ("listening", "Please come on time.", ["Please come on time.", "I have no time.", "See you at five.", "What time is it?"], "Please come on time.", "On time = সময়মতো")
        ])
    ]),

    (4, "A1", "স্তর ১: প্রারম্ভিক", "৪. বাড়ি ও আসবাবপত্র (Home & Furniture)", "ঘর-বাড়ি, দরজা-জানালা, আসবাবপত্র ও রুমের বর্ণনা", "🏠", "from-cyan-600 to-teal-600", [
        ("ঘরের বিভিন্ন অংশ (Rooms of House)", [
            ("reorder", "আমাদের বাড়িতে তিনটি শোবার ঘর আছে।", "Our house has three bedrooms."),
            ("mcq", "'Kitchen' মানে কোন ঘর?", ["রান্নাঘর", "শোবার ঘর", "বাথরুম", "বসার ঘর"], "রান্নাঘর", "Kitchen = রান্নাঘর"),
            ("listening", "Please close the door.", ["Please close the door.", "Open the window.", "Turn on the light.", "Clean the floor."], "Please close the door.", "Close the door = দরজা বন্ধ করুন")
        ]),
        ("আসবাবপত্র ও জিনিসপত্র (Furniture & Objects)", [
            ("matching", "আসবাবপত্র মেলাও:", [("Table", "টেবিল"), ("Chair", "চেয়ার"), ("Bed", "বিছানা"), ("Mirror", "আয়না")]),
            ("reorder", "দয়া করে খাবার টেবিলটি পরিষ্কার করুন।", "Please clean the dining table."),
            ("listening", "Turn on the light.", ["Turn on the light.", "Turn off the fan.", "Open the window.", "Close the door."], "Turn on the light.", "Turn on = চালু করা")
        ]),
        ("বাড়ি সংক্রান্ত জরুরি পরিস্থিতি (Home Emergencies)", [
            ("reorder", "বিদ্যুৎ চলে গেছে একটি মোমবাতি জ্বালান।", "The electricity is gone light a candle."),
            ("mcq", "'Turn off the fan' এর সঠিক অর্থ কী?", ["ফ্যান বন্ধ করুন", "ফ্যান চালু করুন", "ফ্যান পরিষ্কার করুন", "ফ্যান ঠিক করুন"], "ফ্যান বন্ধ করুন", "Turn off = বন্ধ করা"),
            ("listening", "Where did you put the key?", ["Where did you put the key?", "Did you lock the door?", "The room is very clean.", "I am at home."], "Where did you put the key?", "Key = চাবি")
        ])
    ]),

    (5, "A1", "স্তর ১: প্রারম্ভিক", "৫. খাবার ও দৈনন্দিন আহার (Food & Everyday Meals)", "ভাত, রুটি, মাছ, মাংস, চা-কফি ও দৈনন্দিন খাবার", "🍛", "from-teal-500 to-emerald-600", [
        ("প্রধান খাবারসমূহ (Staple Foods)", [
            ("matching", "খাবার মেলাও:", [("Rice", "ভাত"), ("Water", "পানি"), ("Milk", "দুধ"), ("Bread", "রুটি")]),
            ("reorder", "আমি সকালে ডিম ও রুটি খাই।", "I eat eggs and bread in the morning."),
            ("listening", "I am very hungry.", ["I am very hungry.", "The food is spicy.", "Bring me some water.", "What do you want?"], "I am very hungry.", "Hungry = ক্ষুধার্ত")
        ]),
        ("চা-কফি ও স্ন্যাক্স (Tea, Coffee & Snacks)", [
            ("reorder", "আমি সাধারণত সন্ধ্যায় এক কাপ রং চা খাই।", "I usually drink black tea in the evening."),
            ("mcq", "'Delicious' শব্দের সঠিক অর্থ কী?", ["সুস্বাদু", "ঝাল", "মিষ্টি", "তেতো"], "সুস্বাদু", "Delicious = অত্যন্ত সুস্বাদু"),
            ("listening", "Please bring me a glass of water.", ["Please bring me a glass of water.", "I would like a cup of tea.", "Can I have the menu?", "The soup is cold."], "Please bring me a glass of water.", "Glass of water = এক গ্লাস পানি")
        ]),
        ("খাবারের স্বাদ ও সতর্কতা (Flavors & Preferences)", [
            ("reorder", "আমি বেশি ঝাল খাবার খেতে পারি না।", "I cannot eat very spicy food."),
            ("mcq", "'I am allergic to peanuts' এর অর্থ কী?", ["বাদামে আমার অ্যালার্জি আছে।", "আমি বাদাম পছন্দ করি।", "বাদাম খুব সুস্বাদু।", "আমার বাদাম চাই।"], "বাদামে আমার অ্যালার্জি আছে।", "Allergic = অ্যালার্জি থাকা"),
            ("listening", "This soup is too hot.", ["This soup is too hot.", "The food is delicious.", "We are eating dinner.", "Can I have more rice?"], "This soup is too hot.", "Too hot = অতিরিক্ত গরম")
        ])
    ]),

    (6, "A1", "স্তর ১: প্রারম্ভিক", "৬. রঙ, আকার ও শারীরিক বৈশিষ্ট্য (Colors & Shapes)", "রঙের নাম, আকার-আকৃতি, লম্বা-খাটো ও সাধারণ বৈশিষ্ট্য", "🎨", "from-emerald-500 to-green-600", [
        ("রঙের বৈচিত্র্য (Colors Spectrum)", [
            ("matching", "রঙ মেলাও:", [("Red", "লাল"), ("Green", "সবুজ"), ("Blue", "নীল"), ("Yellow", "হলুদ")]),
            ("reorder", "আমার একটি নীল রঙের শার্ট আছে।", "I have a blue shirt."),
            ("listening", "White is a peaceful color.", ["White is a peaceful color.", "Black shoes are nice.", "The sky is blue.", "I like red roses."], "White is a peaceful color.", "White = সাদা")
        ]),
        ("আকার ও গুণাবলী (Shapes & Sizes)", [
            ("mcq", "'Big' এর বিপরীত শব্দ কোনটি?", ["Small", "Tall", "Long", "Fast"], "Small", "Big (বড়) এর বিপরীত Small (ছোট)"),
            ("reorder", "সে একজন লম্বা এবং শক্তিশালী মানুষ।", "He is a tall and strong man."),
            ("listening", "This is a heavy box.", ["This is a heavy box.", "The box is empty.", "I need a small table.", "The line is straight."], "This is a heavy box.", "Heavy = ভারী")
        ]),
        ("বিপরীত শব্দ জোড় (Common Opposites)", [
            ("matching", "বিপরীত জোড়া মেলাও:", [("Hot", "Cold"), ("Easy", "Difficult"), ("Clean", "Dirty"), ("Fast", "Slow")]),
            ("reorder", "এই কাজটি খুবই সহজ কিন্তু গুরুত্বপূর্ণ।", "This task is very easy but important."),
            ("listening", "Is this answer right or wrong?", ["Is this answer right or wrong?", "The room is very quiet.", "I am ready now.", "Everything is true."], "Is this answer right or wrong?", "Right or wrong = সঠিক নাকি ভুল")
        ])
    ]),

    (7, "A1", "স্তর ১: প্রারম্ভিক", "৭. দৈনন্দিন মৌলিক ক্রিয়াকলাপ (Daily Basic Actions)", "ঘুম থেকে ওঠা, হাঁটা, কথা বলা, পড়া ও লেখা", "🚶‍♂️", "from-green-600 to-lime-600", [
        ("সকালের কাজ (Morning Routine Actions)", [
            ("reorder", "আমি প্রতিদিন সকাল ছয়টায় ঘুম থেকে উঠি।", "I wake up at six every day."),
            ("mcq", "'Brush your teeth' এর অর্থ কী?", ["দাঁত ব্রাশ করা", "মুখ ধোয়া", "গোসল করা", "ঘুমাতে যাওয়া"], "দাঁত ব্রাশ করা", "Brush teeth = দাঁত মাজা"),
            ("listening", "I wash my hands and face.", ["I wash my hands and face.", "I brush my hair.", "I drink a cup of tea.", "I eat my breakfast."], "I wash my hands and face.", "Hands and face = হাত ও মুখ")
        ]),
        ("কথা বলা ও শোনা (Speaking & Listening)", [
            ("reorder", "সে খুব ধীরে এবং স্পষ্টভাবে কথা বলে।", "She speaks very slowly and clearly."),
            ("mcq", "'Listen' এবং 'Hear' এর মধ্যে কোনটি মনোযোগ দিয়ে শোনা?", ["Listen", "Hear", "Speak", "Tell"], "Listen", "মনোযোগ দিয়ে শোনার ক্ষেত্রে Listen ব্যবহার করা হয়।"),
            ("listening", "Please listen to me carefully.", ["Please listen to me carefully.", "Speak a little louder.", "I cannot hear you.", "Can you hear my voice?"], "Please listen to me carefully.", "Carefully = সতর্কতার সাথে")
        ]),
        ("পড়াশোনা ও বোঝা (Reading & Understanding)", [
            ("reorder", "আমি ইংরেজি পত্রিকা পড়তে পছন্দ করি।", "I like to read English newspapers."),
            ("reorder", "আমি বিষয়টি সম্পূর্ণ বুঝতে পেরেছি।", "I understand the matter completely."),
            ("listening", "Practice makes a man perfect.", ["Practice makes a man perfect.", "Knowledge is power.", "Time is money.", "Actions speak louder."], "Practice makes a man perfect.", "Practice = নিয়মিত অনুশীলন")
        ])
    ]),

    (8, "A1", "স্তর ১: প্রারম্ভিক", "৮. শহরের স্থান ও পথ খোঁজা (City Places & Directions)", "ব্যাংক, স্কুল, হাসপাতাল, দিকনির্দেশনা ও অবস্থান", "🏙️", "from-lime-600 to-amber-600", [
        ("শহরের প্রধান স্থান (City Landmarks)", [
            ("matching", "স্থানের নাম মেলাও:", [("Hospital", "হাসপাতাল"), ("Bank", "ব্যাংক"), ("School", "বিদ্যালয়"), ("Market", "বাজার")]),
            ("reorder", "কাছের হাসপাতালটি কোন দিকে?", "Which way is the nearest hospital?"),
            ("listening", "Where is the central pharmacy?", ["Where is the central pharmacy?", "The hospital is far away.", "Turn right at the corner.", "Is it within walking distance?"], "Where is the central pharmacy?", "Central pharmacy = কেন্দ্রীয় ফার্মেসি")
        ]),
        ("রাস্তা ও দিকনির্দেশনা (Giving Directions)", [
            ("reorder", "সোজা এগিয়ে যান এবং মোড়ে ডানে ঘুরুন।", "Go straight ahead and turn right at the corner."),
            ("mcq", "'Turn left' এর অর্থ কী?", ["বামে ঘুরুন", "ডানে ঘুরুন", "সোজা যান", "পেছনে তাকান"], "বামে ঘুরুন", "Left = বাম দিক"),
            ("listening", "It is on your left hand side.", ["It is on your left hand side.", "Go straight for two hundred meters.", "Cross the road carefully.", "It takes five minutes on foot."], "It is on your left hand side.", "Left hand side = বাম পাশে")
        ]),
        ("দূরত্ব ও পৌঁছানো (Distance & Transit)", [
            ("reorder", "এখান থেকে হেঁটে যেতে কতক্ষণ লাগে?", "How long does it take on foot from here?"),
            ("mcq", "'Near' এবং 'Far' এর অর্থ কী?", ["নিকট এবং দূর", "সোজা এবং বাঁকা", "বড় এবং ছোট", "আগে এবং পরে"], "নিকট এবং দূর", "Near = কাছে, Far = দূরে"),
            ("listening", "It takes only five minutes on foot.", ["It takes only five minutes on foot.", "The market is very crowded.", "Take a rickshaw or a bus.", "Turn right after the signal."], "It takes only five minutes on foot.", "On foot = পায়ে হেঁটে")
        ])
    ]),

    (9, "A1", "স্তর ১: প্রারম্ভিক", "৯. অনুভূতি, সুখ ও দুঃখ (Feelings & Emotions)", "সুখী, ক্লান্ত, নার্ভাস, কৃতজ্ঞ, রাগ ও মানসিক অবস্থা", "😊", "from-amber-500 to-orange-600", [
        ("ইতিবাচক অনুভূতি (Positive Feelings)", [
            ("reorder", "আজকে আমি খুব খুশি এবং আনন্দিত।", "Today I am very happy and joyful."),
            ("mcq", "'Grateful' শব্দের সঠিক বাংলা অর্থ কী?", ["কৃতজ্ঞ", "রাগান্বিত", "ভীত", "বিস্মিত"], "কৃতজ্ঞ", "Grateful = কৃতজ্ঞ / ধন্যবাদশীল"),
            ("listening", "I am proud of your achievement.", ["I am proud of your achievement.", "I feel very tired today.", "Do not be shy at all.", "We are really excited."], "I am proud of your achievement.", "Proud = গর্বিত")
        ]),
        ("ক্লান্তি ও মানসিক চাপ (Tiredness & Stress)", [
            ("reorder", "সারাদিন কাজের পর আমি বেশ ক্লান্ত।", "After working all day I am quite tired."),
            ("mcq", "'Nervous' বোধ করলে কী বলা উচিত?", ["I feel nervous.", "I feel hungry.", "I feel angry.", "I am happy."], "I feel nervous.", "Nervous = ঘাবড়ে যাওয়া / চিন্তিত"),
            ("listening", "Take a deep breath and relax.", ["Take a deep breath and relax.", "Do not lose your temper.", "I feel much better now.", "She was surprised by the news."], "Take a deep breath and relax.", "Deep breath = গভীর শ্বাস")
        ]),
        ("রাগ ও সান্ত্বনা (Anger & Comfort)", [
            ("reorder", "চিন্তা করবেন না সবকিছু ঠিক হয়ে যাবে।", "Do not worry everything will be fine."),
            ("reorder", "ধৈর্য ধরুন শান্ত মস্তিষ্কে সিদ্ধান্ত নিন।", "Be patient and decide with a calm mind."),
            ("listening", "Cheer up, better days are coming.", ["Cheer up, better days are coming.", "I am so angry with you.", "Why are you so quiet?", "You can count on me."], "Cheer up, better days are coming.", "Cheer up = মন ভালো করুন")
        ])
    ]),

    (10, "A1", "স্তর ১: প্রারম্ভিক", "১০. লেভেল A1 চেকপয়েন্ট ও সার্টিফিকেট টেস্ট (Checkpoint A1 Grand Exam)", "A1 স্টেজের পূর্ণাঙ্গ মূল্যায়ন ও দক্ষতা যাচাই পরীক্ষা", "🎓", "from-orange-600 to-rose-600", [
        ("A1 ব্যাকরণ ও অনুবাদ পরীক্ষা (A1 Grammar Exam)", [
            ("mcq", "'He is an honest man' এর সঠিক অর্থ কী?", ["তিনি একজন সৎ ব্যক্তি।", "তিনি একজন শিক্ষক।", "তিনি আমার ভাই।", "তিনি বাড়িতে আছেন।"], "তিনি একজন সৎ ব্যক্তি।", "Honest = সৎ"),
            ("reorder", "আমরা প্রতিদিন একসাথে বিদ্যালয়ে যাই।", "We go to school together every day."),
            ("mcq", "'They are happy' - এখানে Subject ও Verb কোনটি?", ["They হল Subject, are হল Verb", "Happy হল Subject", "Are হল Object", "They হল Adjective"], "They হল Subject, are হল Verb", "They = তারা (Subject), are = হয় (Verb)")
        ]),
        ("A1 কথপোকথন ও লিসেনিং কুইজ (A1 Conversation Quiz)", [
            ("listening", "What is your father's profession?", ["What is your father's profession?", "Where does your brother live?", "How many children do you have?", "What time does the class start?"], "What is your father's profession?", "Profession = পেশা"),
            ("reorder", "আপনার সাথে কথা বলে আনন্দিত হলাম।", "It was a pleasure talking with you."),
            ("matching", "A1 মাস্টার ম্যাচিং:", [("Welcome", "স্বাগতম"), ("Excuse me", "মাফ করবেন"), ("Never mind", "কিছু মনে করবেন না"), ("Of course", "অবশ্যই")])
        ]),
        ("A1 সমাপনী সনদপত্র পরীক্ষা (A1 Final Qualification)", [
            ("reorder", "ধৈর্য এবং প্রতিদিনের অনুশীলনে ইংরেজি সহজ হয়।", "With patience and daily practice English becomes easy."),
            ("mcq", "'Thank you very much' এর উত্তরে কী বলা সবচেয়ে মার্জিত?", ["You are welcome.", "No.", "I am fine.", "Goodbye."], "You are welcome.", "ধন্যবাদ পেলে ভদ্রভাবে You are welcome বলতে হয়।"),
            ("listening", "Congratulations on passing the A1 exam!", ["Congratulations on passing the A1 exam!", "Good luck with your presentation tomorrow.", "Have a safe and pleasant journey.", "Welcome back to our English course."], "Congratulations on passing the A1 exam!", "Congratulations = অভিনন্দন")
        ])
    ]),

    # ================= STAGE 2: A2 ELEMENTARY (Modules 11-20) =================
    (11, "A2", "স্তর ২: প্রাথমিক", "১১. দৈনন্দিন রুটিন ও সময়ানুবর্তিতা (Daily Routine & Habits)", "সকাল থেকে রাত, সপ্তাহের অভ্যাস ও সময়নিষ্ঠা", "⏰", "from-indigo-500 to-indigo-600", [
        ("ভোর থেকে অফিস (Morning to Workplace)", [
            ("reorder", "আমি সকালে ত্রিশ মিনিট হাঁটার অভ্যাস করি।", "I practice walking for thirty minutes in the morning."),
            ("mcq", "'Rush hours' বলতে কী বোঝায়?", ["ব্যস্ততম সময় যখন ট্রাফিক জ্যাম বেশি থাকে", "ছুটির দিন", "ভোরের শান্ত সময়", "রাতের খাবার সময়"], "ব্যস্ততম সময় যখন ট্রাফিক জ্যাম বেশি থাকে", "Rush hour = রাস্তায় চরম ভিড় ও ব্যস্ততার সময়"),
            ("listening", "The traffic is heavy during rush hours.", ["The traffic is heavy during rush hours.", "I reach the office around nine.", "We have a short team meeting.", "I take a lunch break at one."], "The traffic is heavy during rush hours.", "Heavy traffic = তীব্র যানজট")
        ]),
        ("কাজের ফাঁকে ও বিশ্রাম (Midday Break & Habits)", [
            ("reorder", "আমি সারা দিন প্রচুর বিশুদ্ধ পানি পান করি।", "I drink plenty of pure water throughout the day."),
            ("mcq", "'Throughout the day' এর অর্থ কী?", ["সারাদিন জুড়ে", "সকাল বেলায়", "মাঝে মাঝে", "রাতের বেলা"], "সারাদিন জুড়ে", "Throughout = শুরু থেকে শেষ অবধি"),
            ("listening", "Consistency is key to forming good habits.", ["Consistency is key to forming good habits.", "I wash my clothes on Saturday.", "Sometimes I cook special dishes.", "I visit my parents twice a month."], "Consistency is key to forming good habits.", "Consistency = ধারাবাহিকতা")
        ]),
        ("রাতের প্রস্তুতি ও ঘুম (Evening & Sleep Routine)", [
            ("reorder", "ঘুমানোর আগে আমি বিশ মিনিট বই পড়ি।", "Before going to sleep I read a book for twenty minutes."),
            ("mcq", "'Turn off' এবং 'Turn on' এর পার্থক্য কী?", ["Turn off মানে বন্ধ করা এবং Turn on মানে চালু করা", "উভয়ই এক", "Turn off মানে খোলা", "Turn on মানে ধোয়া"], "Turn off মানে বন্ধ করা এবং Turn on মানে চালু করা", "Off = বন্ধ, On = চালু"),
            ("listening", "Getting seven hours of sleep improves focus.", ["Getting seven hours of sleep improves focus.", "I turn off the lights at ten thirty.", "I spend quality time with my family.", "Listening to soft music helps me relax."], "Getting seven hours of sleep improves focus.", "Improves focus = মনোযোগ বৃদ্ধি করে")
        ])
    ]),

    (12, "A2", "স্তর ২: প্রাথমিক", "১২. কেনাকাটা, দরদাম ও জামাকাপড় (Shopping & Bargaining)", "দোকানে কাপড় কেনা, ট্রায়াল রুম, সাইজ ও দরদাম", "🛍️", "from-indigo-600 to-violet-600", [
        ("দোকানে কাপড় পছন্দ (Clothing & Trial)", [
            ("reorder", "আমি কি এটি ট্রায়াল রুমে পরে দেখতে পারি?", "Can I try this on in the fitting room?"),
            ("mcq", "'Trial room' বা 'Fitting room' কী?", ["পোশাক মাপমতো হয় কিনা দেখার নির্ধারিত কক্ষ", "বিল দেওয়ার কাউন্টার", "পণ্য রাখার গুদাম", "বিশ্রামাগার"], "পোশাক মাপমতো হয় কিনা দেখার নির্ধারিত কক্ষ", "Fitting room = ট্রায়াল রুম"),
            ("listening", "This shirt fits me perfectly.", ["This shirt fits me perfectly.", "Do you have this in navy blue?", "This pair of shoes is too tight.", "Can you show me one size larger?"], "This shirt fits me perfectly.", "Fits perfectly = একদম মানানসই মাপ")
        ]),
        ("দরদাম ও মূল্য ছাড় (Bargaining & Discounts)", [
            ("reorder", "এই পণ্যের উপর কোনো বিশেষ ছাড় আছে কি?", "Is there any special discount on this item?"),
            ("mcq", "'Fixed price' লেখা থাকলে কী করবেন?", ["দরদাম না করে নির্ধারিত দামে কিনবেন", "অর্ধেক দাম বলবেন", "ফ্রি চাইবেন", "বাকিতে নিবেন"], "দরদাম না করে নির্ধারিত দামে কিনবেন", "Fixed price = একদাম / নির্ধারিত মূল্য"),
            ("listening", "Could you lower the price a little bit?", ["Could you lower the price a little bit?", "That price is a bit high for my budget.", "If you buy two you get twenty percent off.", "Here is your change and receipt."], "Could you lower the price a little bit?", "Lower the price = দাম কিছুটা কমানো")
        ]),
        ("পেমেন্ট ও রসিদ (Payment & Receipts)", [
            ("reorder", "আমি কি ক্রেডিট কার্ড বা বিকাশ দিয়ে পরিশোধ করতে পারি?", "Can I pay with a credit card or mobile wallet?"),
            ("mcq", "'Receipt' বা 'Cash memo' এর কাজ কী?", ["ক্রয়ের প্রমাণপত্র", "বিজ্ঞাপন", "টাকা ফেরত না দেওয়ার চুক্তি", "ডিসকাউন্ট কুপন"], "ক্রয়ের প্রমাণপত্র", "Receipt = ক্রয়ের অফিসিয়াল রসিদ"),
            ("listening", "What is your return and exchange policy?", ["What is your return and exchange policy?", "You can exchange it within seven days.", "Please keep the cash memo safe.", "Can you wrap this as a gift for me?"], "What is your return and exchange policy?", "Exchange policy = বদল করার নিয়ম")
        ])
    ]),

    (13, "A2", "স্তর ২: প্রাথমিক", "১৩. রেস্তোরাঁ ও ক্যাফে শিষ্টাচার (Dining Out & Cafes)", "টেবিল বুকিং, মেনু নির্বাচন, খাবার অর্ডার ও টিপস", "🍽️", "from-violet-500 to-purple-600", [
        ("টেবিল সংরক্ষণ ও মেনু (Table & Menu)", [
            ("reorder", "দুইজনের জন্য একটি টেবিল খালি আছে কি?", "Is there a table available for two people?"),
            ("mcq", "'Reservation' বলতে কী বোঝায়?", ["আগে থেকে টেবিল বা সিট বুক করে রাখা", "বিল পরিশোধ করা", "রান্নার রেসিপি", "ওয়েটারকে ডাকা"], "আগে থেকে টেবিল বা সিট বুক করে রাখা", "Reservation = অগ্রিম সংরক্ষণ"),
            ("listening", "Could you please bring us the menu?", ["Could you please bring us the menu?", "What is the special dish today?", "I would like a bowl of hot soup.", "Are you ready to order now?"], "Could you please bring us the menu?", "Menu = খাবারের তালিকা")
        ]),
        ("খাবার অর্ডার ও বিশেষ অনুরোধ (Special Ordering)", [
            ("reorder", "অনুগ্রহ করে এই তরকারিতে ঝাল কম দিন।", "Please make this curry less spicy."),
            ("mcq", "'Vegetarian' ব্যক্তির খাবারে কী থাকে না?", ["মাছ, মাংস বা ডিম", "শাকসবজি", "চাল বা রুটি", "ফলমূল"], "মাছ, মাংস বা ডিম", "Vegetarian = নিরামিষাশী"),
            ("listening", "Does this dish contain any dairy or nuts?", ["Does this dish contain any dairy or nuts?", "The grilled fish was cooked to perfection.", "Would you like something to drink with your meal?", "Just a bottle of mineral water please."], "Does this dish contain any dairy or nuts?", "Nuts = বাদাম")
        ]),
        ("বিল পরিশোধ ও টিপ দেওয়া (Bills & Tipping)", [
            ("reorder", "আমরা কি বিলটি সমান ভাগে ভাগ করতে পারি?", "Can we split the bill evenly among us?"),
            ("mcq", "'Keep the change' মানে কী?", ["ভাঙতি টাকাটা আপনি বখশিশ হিসেবে রাখুন", "টাকা ফেরত দিন", "সব টাকা নিয়ে যান", "বিল ভুল হয়েছে"], "ভাঙতি টাকাটা আপনি বখশিশ হিসেবে রাখুন", "Keep the change = ফেরত টাকা টিপ হিসেবে রাখুন"),
            ("listening", "Thank you for the wonderful service.", ["Thank you for the wonderful service.", "Keep the change as a tip.", "Do you accept digital wallet payments?", "Can we have the bill please?"], "Thank you for the wonderful service.", "Wonderful service = চমৎকার সেবা")
        ])
    ]),

    (14, "A2", "স্তর ২: প্রাথমিক", "১৪. গণপরিবহন, বাস ও মেট্রো রেল (Public Transit & Commuting)", "বাস স্টপ, মেট্রো স্মার্ট কার্ড, টিকিট ও ট্রাফিক", "🚗", "from-purple-600 to-fuchsia-600", [
        ("বাস ও রিকশা যাত্রা (Bus & Rickshaw)", [
            ("reorder", "ধানমন্ডি থেকে গুলশান যেতে রিকশা ভাড়া কত?", "How much does a rickshaw ride cost from Dhanmondi to Gulshan?"),
            ("mcq", "'Fare' শব্দের অর্থ কী?", ["যাতায়াত ভাড়া", "সুন্দর চেহারা", "ট্রেন স্টেশন", "গতিবেগ"], "যাতায়াত ভাড়া", "Fare = গাড়ি বা যানের ভাড়া"),
            ("listening", "Which bus goes directly to the airport?", ["Which bus goes directly to the airport?", "Please drive carefully and wear a helmet.", "Passengers are requested to maintain a queue.", "Always confirm the fare beforehand."], "Which bus goes directly to the airport?", "Directly = সরাসরি")
        ]),
        ("মেট্রো রেল ও স্মার্ট কার্ড (Metro Transit)", [
            ("reorder", "শাহবাগ স্টেশনে যাওয়ার জন্য কোন ট্রেনে উঠব?", "Which train should I take to go to Shahbagh station?"),
            ("mcq", "'Automated fare gate' এ কী ব্যবহার করা হয়?", ["মেট্রো স্মার্ট কার্ড বা কিউআর টিকিট", "সাধারণ কাগজের নোট", "পাসপোর্ট", "ব্যাংক চেক"], "মেট্রো স্মার্ট কার্ড বা কিউআর টিকিট", "Fare gate = স্বয়ংক্রিয় গেট"),
            ("listening", "Please stand behind the yellow security line.", ["Please stand behind the yellow security line.", "Let the passengers get off first.", "Trains arrive every six minutes.", "Keep your metro smart card ready."], "Please stand behind the yellow security line.", "Security line = নিরাপত্তারেখা")
        ]),
        ("ট্রাফিক জ্যাম ও বিকল্প পথ (Traffic Navigation)", [
            ("reorder", "যানজট এড়াতে আমাদের মেট্রোতে চড়া উচিত।", "We should take the metro to avoid the traffic jam."),
            ("mcq", "'Standstill' ট্রাফিকের মানে কী?", ["গাড়ি সম্পূর্ণ স্থবির হয়ে আটকে আছে", "খালি রাস্তা", "দ্রুত চলছে", "দুর্ঘটনা ঘটেছে"], "গাড়ি সম্পূর্ণ স্থবির হয়ে আটকে আছে", "Standstill = সম্পূর্ণ থমকে থাকা"),
            ("listening", "The expressway has drastically cut down travel time.", ["The expressway has drastically cut down travel time.", "We missed our stop at the intersection.", "Always look both ways before crossing.", "Can you drop me off across the street?"], "The expressway has drastically cut down travel time.", "Cut down travel time = ভ্রমণের সময় কমিয়ে এনেছে")
        ])
    ]),

    (15, "A2", "স্তর ২: প্রাথমিক", "১৫. সাধারণ রোগবালাই ও চিকিৎসা (Health & Medical Care)", "ডাক্তার দেখানো, জ্বর-সর্দি, ফার্মেসি ও সুস্থতা", "🩺", "from-fuchsia-600 to-pink-600", [
        ("লক্ষণ ও উপসর্গ বলা (Describing Symptoms)", [
            ("reorder", "তিন দিন ধরে আমার তীব্র মাথাব্যথা এবং জ্বর।", "I have had a severe headache and fever for three days."),
            ("mcq", "'Symptom' শব্দের অর্থ কী?", ["রোগের শারীরিক লক্ষণ বা উপসর্গ", "ওষুধের নাম", "হাসপাতালের বিল", "রোগমুক্তির তারিখ"], "রোগের শারীরিক লক্ষণ বা উপসর্গ", "Symptom = উপসর্গ / লক্ষণ"),
            ("listening", "Good morning doctor, I have not been feeling well.", ["Good morning doctor, I have not been feeling well.", "How long have you had these symptoms?", "Do you have any body aches or shivering?", "My entire body feels heavy and exhausted."], "Good morning doctor, I have not been feeling well.", "Not feeling well = ভালো বোধ করছি না")
        ]),
        ("প্রেসক্রিপশন ও ওষুধের নিয়ম (Prescriptions & Dosage)", [
            ("reorder", "খাবার পর একটি করে ট্যাবলেট দিনে দুবার খাবেন।", "Take one tablet twice a day after meals."),
            ("mcq", "'Twice a day' মানে কতবার?", ["দিনে দুইবার", "দিনে একবার", "দুই দিনে একবার", "সপ্তাহে দুইবার"], "দিনে দুইবার", "Twice = দুইবার, Thrice = তিনবার"),
            ("listening", "Take this prescribed antibiotic for five consecutive days.", ["Take this prescribed antibiotic for five consecutive days.", "Make sure you drink plenty of warm fluids.", "Avoid cold drinks and ice cream for a few days.", "Get complete bed rest for at least two days."], "Take this prescribed antibiotic for five consecutive days.", "Consecutive = একটানা / ধারাবাহিকভাবে")
        ]),
        ("ফার্মেসি ও প্রাথমিক সুস্থতা (Pharmacy & Recovery)", [
            ("reorder", "রাস্তার ওপাশে একটি চব্বিশ ঘণ্টার খোলা ফার্মেসি আছে।", "There is a twenty-four hour pharmacy across the street."),
            ("mcq", "'First aid' শব্দের অর্থ কী?", ["জরুরি প্রাথমিক চিকিৎসা", "অপারেশন থিয়েটার", "ডাক্তারের ফি", "রক্তদান"], "জরুরি প্রাথমিক চিকিৎসা", "First aid = প্রাথমিক চিকিৎসা"),
            ("listening", "Wash your hands thoroughly before touching food.", ["Wash your hands thoroughly before touching food.", "Mental health is just as important as physical health.", "Regular exercise keeps the heart strong and fit.", "Smoking is extremely dangerous for the lungs."], "Wash your hands thoroughly before touching food.", "Thoroughly = খুব ভালোভাবে")
        ])
    ]),

    (16, "A2", "স্তর ২: প্রাথমিক", "১৬. পোশাক, ফ্যাশন ও আবহাওয়ার প্রস্তুতি (Clothing & Accessories)", "ঋতুভিত্তিক পোশাক, ফ্যাব্রিক, জুতো ও এক্সেসরিজ", "👕", "from-pink-500 to-rose-600", [
        ("পোশাকের ধরন ও উপাদান (Clothing Fabrics)", [
            ("matching", "পোশাকের কাপড় মেলাও:", [("Cotton", "সুতি কাপড়"), ("Silk", "রেশমি কাপড়"), ("Wool", "পশমি কাপড়"), ("Leather", "চামড়া")]),
            ("reorder", "গ্রীষ্মকালে সুতি কাপড় পরা স্বস্তিদায়ক।", "Wearing cotton clothes in summer is comfortable."),
            ("listening", "This winter jacket is very warm and windproof.", ["This winter jacket is very warm and windproof.", "Do you have this dress in pure silk?", "Can you alter the length of these pants?", "I need a sturdy umbrella for the monsoon."], "This winter jacket is very warm and windproof.", "Windproof = বাতাসরোধী")
        ]),
        ("জুতো ও অনুষঙ্গ (Footwear & Accessories)", [
            ("reorder", "হাঁটার জন্য আরামদায়ক স্নিকার্স বেছে নিন।", "Choose comfortable sneakers for walking."),
            ("mcq", "'Wristwatch' বলতে কী বোঝায়?", ["হাতের ঘড়ি", "দেয়াল ঘড়ি", "পকেট ঘড়ি", "চশমা"], "হাতের ঘড়ি", "Wrist = কবজি, Watch = ঘড়ি"),
            ("listening", "Always wear certified helmets while riding motorcycles.", ["Always wear certified helmets while riding motorcycles.", "Keep your purchase receipt safe for warranty.", "Can you check the price tag on that leather belt?", "This boutique has an exclusive collection."], "Always wear certified helmets while riding motorcycles.", "Certified helmet = মানসম্মত হেলমেট")
        ]),
        ("পোশাকের যত্ন ও পরিচ্ছন্নতা (Laundry & Wardrobe)", [
            ("reorder", "ইস্ত্রি করার পর জামাকাপড় হ্যাঙ্গারে ঝুলিয়ে রাখুন।", "Hang the clothes on hangers after ironing."),
            ("mcq", "'Stitch' শব্দের অর্থ কী?", ["সেলাই", "বোতাম", "পকেট", "কাপড় ধোয়া"], "সেলাই", "Stitch = সেলাই করা"),
            ("listening", "Please fold these freshly ironed shirts carefully.", ["Please fold these freshly ironed shirts carefully.", "Hang your wet umbrella outside.", "Do not use harsh detergents on delicate silk.", "Keep your wardrobe clean and organized."], "Please fold these freshly ironed shirts carefully.", "Freshly ironed = সদ্য ইস্ত্রি করা")
        ])
    ]),

    (17, "A2", "স্তর ২: প্রাথমিক", "১৭. আবহাওয়া, ছয় ঋতু ও প্রকৃতি (Weather & Seasons)", "বৃষ্টি, ঝড়, কুয়াশা, রোদ ও বাংলার ছয় ঋতু", "🌤️", "from-rose-500 to-amber-600", [
        ("গ্রীষ্ম ও বর্ষা কাল (Summer & Monsoon)", [
            ("reorder", "গ্রীষ্মের দাবদাহের পর বর্ষার বৃষ্টি স্বস্তি আনে।", "After summer heat monsoon rain brings much relief."),
            ("mcq", "'Drizzle' বলতে কেমন বৃষ্টি বোঝায়?", ["গুঁড়ি গুঁড়ি মৃদু বৃষ্টি", "ভারী মুষলধারে বৃষ্টি", "শিলাবৃষ্টি", "ঝড়ো বাতাস"], "গুঁড়ি গুঁড়ি মৃদু বৃষ্টি", "Drizzle = হালকা গুঁড়ি গুঁড়ি বৃষ্টি"),
            ("listening", "Dense morning fog reduced visibility on the highway.", ["Dense morning fog reduced visibility on the highway.", "The sky cleared up after the afternoon thunderstorm.", "Remember to carry an umbrella today.", "Gentle rain brings a refreshing scent of wet earth."], "Dense morning fog reduced visibility on the highway.", "Dense fog = ঘন কুয়াশা")
        ]),
        ("শীত ও বসন্ত কাল (Winter & Spring)", [
            ("reorder", "শীতের মিষ্টি সকালে এক কাপ গরম চা অপূর্ব।", "A cup of hot tea is wonderful on cold winter mornings."),
            ("mcq", "'Breeze' শব্দের অর্থ কী?", ["মৃদু শীতল বাতাস", "ঘূর্ণিঝড়", "বজ্রপাত", "তুষারপাত"], "মৃদু শীতল বাতাস", "Breeze = স্নিগ্ধ বাতাস"),
            ("listening", "A cool northern breeze indicates winter is approaching.", ["A cool northern breeze indicates winter is approaching.", "Spring brings colorful blossoms on every branch.", "Farmers celebrate the arrival of gentle rain.", "Global warming is causing erratic weather patterns."], "A cool northern breeze indicates winter is approaching.", "Approaching = ঘনিয়ে আসছে")
        ]),
        ("প্রাকৃতিক দুর্যোগ ও সচেতনতা (Natural Disasters)", [
            ("reorder", "নদীর তীর ঘেঁষে গাছ লাগালে নদীভাঙন রোধ হয়।", "Planting trees along riverbanks prevents soil erosion."),
            ("mcq", "'Flood' এবং 'Cyclone' এর বাংলা কী?", ["বন্যা এবং ঘূর্ণিঝড়", "ভূমিকম্প এবং খরা", "বৃষ্টি এবং রোদ", "নদী এবং সাগর"], "বন্যা এবং ঘূর্ণিঝড়", "Flood = বন্যা, Cyclone = ঘূর্ণিঝড়"),
            ("listening", "Clean air and pure drinking water are basic human rights.", ["Clean air and pure drinking water are basic human rights.", "Planting fruit bearing trees supports wildlife.", "We must protect our rivers from industrial waste.", "The starry night sky looks incredibly vivid."], "Clean air and pure drinking water are basic human rights.", "Human rights = মানবাধিকার")
        ])
    ]),

    (18, "A2", "স্তর ২: প্রাথমিক", "১৮. প্রাণী, জীববৈচিত্র্য ও পরিবেশ (Animals & Wildlife)", "পশু-পাখি, সুন্দরবন ও প্রাণীদের প্রতি ভালোবাসা", "🐕", "from-amber-600 to-yellow-600", [
        ("বন্যপ্রাণী ও সুন্দরবন (Wild Animals & Sundarbans)", [
            ("reorder", "রয়্যাল বেঙ্গল টাইগার সুন্দরবনের গর্ব।", "The Royal Bengal Tiger is the pride of Sundarbans."),
            ("mcq", "'Mammal' শব্দের বৈজ্ঞানিক অর্থ কী?", ["স্তন্যপায়ী প্রাণী", "সরীসৃপ", "উভচর", "জলজ প্রাণী"], "স্তন্যপায়ী প্রাণী", "Mammal = যে প্রাণী মায়ের দুধ পান করে বাঁচে"),
            ("listening", "The Sundarbans mangrove forest is home to majestic tigers.", ["The Sundarbans mangrove forest is home to majestic tigers.", "We rented a country boat to explore the lake.", "Conserving wetlands protects migratory birds.", "We should show kindness toward stray animals."], "The Sundarbans mangrove forest is home to majestic tigers.", "Mangrove forest = বাদাবন")
        ]),
        ("পাখি ও জলাশয় (Birds & Marine Life)", [
            ("matching", "পাখির ইংরেজি মেলাও:", [("Kingfisher", "মাছরাঙা"), ("Eagle", "ঈগল"), ("Sparrow", "চড়ুই"), ("Peacock", "ময়ূর")]),
            ("reorder", "শীতকালে আমাদের দেশে প্রচুর অতিথি পাখি আসে।", "In winter many migratory birds arrive in our country."),
            ("listening", "Migratory birds travel thousands of miles every year.", ["Migratory birds travel thousands of miles every year.", "Hilsha fish is renowned for its unique taste.", "Coral reefs provide shelter for marine species.", "The singing birds welcome the dawn."], "Migratory birds travel thousands of miles every year.", "Migratory birds = পরিযায়ী বা অতিথি পাখি")
        ]),
        ("প্রাণীপ্রেম ও সংবেদনশীলতা (Animal Care & Ethics)", [
            ("reorder", "রাস্তার অবলা প্রাণীদের প্রতি আমাদের দয়া দেখানো উচিত।", "We should show kindness toward stray street animals."),
            ("mcq", "'Stray animal' বলতে কী বোঝায়?", ["বেওয়ারিশ বা রাস্তায় ঘুরে বেড়ানো প্রাণী", "চিড়িয়াখানার পশু", "পোষা কুকুর", "বনের বাঘ"], "বেওয়ারিশ বা রাস্তায় ঘুরে বেড়ানো প্রাণী", "Stray = ভবঘুরে বা বেওয়ারিশ"),
            ("listening", "Treat all living creatures with respect and care.", ["Treat all living creatures with respect and care.", "Animals feel pain and hunger just like humans.", "Do not throw stones at stray dogs.", "Protect endangered species from poaching."], "Treat all living creatures with respect and care.", "Living creatures = সমস্ত জীব")
        ])
    ]),

    (19, "A2", "স্তর ২: প্রাথমিক", "১৯. প্রযুক্তি, ইন্টারনেট ও কম্পিউটার (Technology & Digital Life)", "স্মার্টফোন, ইন্টারনেট, ইমেইল, সফটওয়্যার ও নিরাপত্তা", "📱", "from-yellow-500 to-amber-600", [
        ("দৈনন্দিন ডিজিটাল গ্যাজেট (Digital Devices)", [
            ("reorder", "আমার ফোনের চার্জ শেষ একটি চার্জার ধার দেবেন?", "My phone battery is low could you lend me a charger?"),
            ("mcq", "'Operating System' (OS) এর কাজ কী?", ["কম্পিউটার বা ফোনের হার্ডওয়্যার ও অ্যাপস পরিচালনা করা", "শুধু গান বাজানো", "ইন্টারনেট ব্রাউজ করা", "ছবি তোলা"], "কম্পিউটার বা ফোনের হার্ডওয়্যার ও অ্যাপস পরিচালনা করা", "OS = উইন্ডোজ, অ্যান্ড্রয়েড বা আইওএস"),
            ("listening", "Ensure your Wi-Fi router is protected with a strong password.", ["Ensure your Wi-Fi router is protected with a strong password.", "Update your smartphone operating system regularly.", "Cloud storage allows you to access files from anywhere.", "Too much screen time can disrupt your sleep."], "Ensure your Wi-Fi router is protected with a strong password.", "Strong password = শক্তিশালী পাসওয়ার্ড")
        ]),
        ("সাইবার নিরাপত্তা ও সতর্কতা (Cyber Hygiene)", [
            ("reorder", "কখনও অপরিচিত ব্যক্তির সাথে ওটিপি শেয়ার করবেন না।", "Never share your OTP or password with strangers."),
            ("mcq", "'Two-factor authentication' (2FA) কেন জরুরি?", ["অ্যাকাউন্ট হ্যাক হওয়া থেকে অতিরিক্ত নিরাপত্তা দিতে", "দ্রুত লগইন করতে", "ফ্রি ইন্টারনেট পেতে", "ফাইল ডিলিট করতে"], "অ্যাকাউন্ট হ্যাক হওয়া থেকে অতিরিক্ত নিরাপত্তা দিতে", "2FA = দ্বৈত স্তরের সুরক্ষা"),
            ("listening", "Never open suspicious email attachments from unknown senders.", ["Never open suspicious email attachments from unknown senders.", "Remember to back up your personal photos on a hard drive.", "Artificial intelligence is automating repetitive tasks.", "Use two-factor authentication for extra safety."], "Never open suspicious email attachments from unknown senders.", "Suspicious attachments = সন্দেহজনক ফাইল")
        ]),
        ("অনলাইন কাজের সুবিধা (Remote Tech Work)", [
            ("reorder", "ক্লাউড স্টোরেজের কারণে যেকোনো স্থান থেকে ফাইল পাওয়া যায়।", "Cloud storage allows accessing files from any location."),
            ("reorder", "আমরা দূর থেকে মিটিং করতে জুম সফটওয়্যার ব্যবহার করি।", "We use Zoom software to conduct remote meetings."),
            ("listening", "Digital literacy is a fundamental necessity for modern jobs.", ["Digital literacy is a fundamental necessity for modern jobs.", "Technology should serve humanity and make life easier.", "He resolved the software bug before the release.", "Check your internet connection speed regularly."], "Digital literacy is a fundamental necessity for modern jobs.", "Digital literacy = প্রযুক্তিগত স্বাক্ষরতা")
        ])
    ]),

    (20, "A2", "স্তর ২: প্রাথমিক", "২০. লেভেল A2 সমাপ্তি মডেল টেস্ট (Checkpoint A2 Grand Exam)", "A2 প্রাথমিক স্তরের চূড়ান্ত সমন্বিত মূল্যায়ন", "🎖️", "from-amber-600 to-red-600", [
        ("A2 বাক্য গঠন ও রূপান্তর (A2 Syntax Mastery)", [
            ("reorder", "আমি বাস মিস করেছিলাম তাই অফিসে পৌঁছাতে দেরি হয়েছিল।", "I missed the bus so I arrived at the office late."),
            ("mcq", "'Did you go to the market?' এর হ্যাঁ-সূচক উত্তর কী?", ["Yes, I went to the market.", "Yes, I go.", "No, I am.", "Yes, I did go to market yesterday."], "Yes, I went to the market.", "Past Simple interrogative 'Did you go' এর উত্তর 'I went'"),
            ("listening", "Could you please give me a printed cash memo?", ["Could you please give me a printed cash memo?", "Can I have an extra pair of slippers?", "Turn left at the next traffic light.", "I went to work by metro rail today."], "Could you please give me a printed cash memo?", "Printed cash memo = মুদ্রিত রসিদ")
        ]),
        ("A2 সমন্বিত বাস্তব সংলাপ (A2 Dialogues)", [
            ("reorder", "ডাক্তার আমাকে দুই দিন পূর্ণ বিশ্রামে থাকতে পরামর্শ দিয়েছেন।", "The doctor advised me to take complete bed rest for two days."),
            ("matching", "A2 সমাপনী ম্যাচিং:", [("Discount", "মূল্য ছাড়"), ("Prescription", "প্রেসক্রিপশন"), ("Standstill", "স্থবির"), ("Exchange", "বদল করা")]),
            ("listening", "We must finish this report before the end of the day.", ["We must finish this report before the end of the day.", "I would like to confirm my flight reservation.", "Please make this curry less spicy for me.", "Do you have this dress in a larger size?"], "We must finish this report before the end of the day.", "Before end of day = দিন শেষ হওয়ার আগে")
        ]),
        ("A2 ফাইনাল সার্টিফিকেশন টেস্ট (A2 Graduation)", [
            ("reorder", "নিয়মিত অনুশীলনের মাধ্যমে প্রাথমিক স্তরের জড়তা দূর হয়েছে।", "Through regular practice elementary hesitation has disappeared."),
            ("mcq", "'She does not knows' নাকি 'She does not know' কোনটি সঠিক?", ["She does not know", "She does not knows", "উভয়ই সঠিক", "কোনোটিই নয়"], "She does not know", "Does এর পর মূল verb এর সাথে s/es বসে না"),
            ("listening", "Congratulations on completing the A2 Elementary stage!", ["Congratulations on completing the A2 Elementary stage!", "You are now ready to speak with intermediate confidence.", "Keep up the excellent daily momentum.", "Fluently is proud of your dedication."], "Congratulations on completing the A2 Elementary stage!", "Stage completed = স্তর সমাপ্ত")
        ])
    ])
]

STAGE_THEMES_30 = [
    # B1 (21-30)
    (21, "B1", "স্তর ৩: মধ্যবর্তী", "২১. বিমানবন্দর ও আন্তর্জাতিক উড্ডয়ন (Airports & Flights)", "বোর্ডিং পাস, লাগেজ চেক-ইন ও সিকিউরিটি", "✈️", "from-cyan-600 to-blue-700"),
    (22, "B1", "স্তর ৩: মধ্যবর্তী", "২২. হোটেল বুকিং ও ট্যুরিজম (Hotels & Tourism)", "রুম রিজার্ভেশন, সুযোগ-সুবিধা ও পর্যটন গাইড", "🏨", "from-blue-600 to-indigo-700"),
    (23, "B1", "স্তর ৩: মধ্যবর্তী", "২৩. ব্যাংক ও আন্তর্জাতিক লেনদেন (Banking & Transactions)", "অ্যাকাউন্ট খোলা, রেমিট্যান্স ও বৈদেশিক মুদ্রা", "💳", "from-indigo-600 to-violet-700"),
    (24, "B1", "স্তর ৩: মধ্যবর্তী", "২৪. আনুষ্ঠানিক ফোন কল ও কথোপকথন (Professional Phone Calls)", "কল হোল্ড করা, বার্তা নেওয়া ও ভদ্র আচরণ", "📞", "from-violet-600 to-purple-700"),
    (25, "B1", "স্তর ৩: মধ্যবর্তী", "২৫. ডাক্তার ও বিশেষজ্ঞের পরামর্শ (Medical Consultations)", "শারীরিক পরীক্ষা, জটিল লক্ষণ ও চিকিৎসা পরামর্শ", "🏥", "from-purple-600 to-pink-700"),
    (26, "B1", "স্তর ৩: মধ্যবর্তী", "২৬. উচ্চশিক্ষা, বিশ্ববিদ্যালয় ও গবেষণা (University & Education)", "ভর্তি, সেমিস্টার পরীক্ষা ও প্রেজেন্টেশন", "🏫", "from-pink-600 to-rose-700"),
    (27, "B1", "স্তর ৩: মধ্যবর্তী", "২৭. অতীত স্মৃতি ও গল্প বলার আর্ট (Past Events & Storytelling)", "স্মৃতিচারণ, অতীত কাল ও বর্ণনামূলক শব্দ", "⏳", "from-rose-600 to-red-700"),
    (28, "B1", "স্তর ৩: মধ্যবর্তী", "২৮. ভবিষ্যৎ পরিকল্পনা ও স্বপ্ন (Future Plans & Ambitions)", "ক্যারিয়ার লক্ষ্য, সম্ভাবনা ও ভবিষ্যৎ কাল", "🔮", "from-red-600 to-amber-700"),
    (29, "B1", "স্তর ৩: মধ্যবর্তী", "২৯. বিনম্র অনুরোধ ও আন্তরিক ক্ষমা (Polite Favors & Apologies)", "ভদ্রভাবে না বলা, উপকার চাওয়া ও ভুল স্বীকার", "🤝", "from-amber-600 to-orange-700"),
    (30, "B1", "স্তর ৩: মধ্যবর্তী", "৩০. লেভেল B1 চেকপয়েন্ট ও ডিপ্লোমা এক্সাম (Checkpoint B1 Exam)", "মধ্যবর্তী স্তরের পূর্ণাঙ্গ দক্ষতা যাচাই পরীক্ষা", "🏆", "from-orange-600 to-emerald-700"),

    # B2 (31-40)
    (31, "B2", "স্তর ৪: উচ্চ-মধ্যবর্তী", "৩১. করপোরেট ইমেইল ও ফরমাল রাইটিং (Corporate Emails)", "পেশাদার ইমেইল, ড্রাফট, সংযুক্তি ও প্রটোকল", "💼", "from-slate-600 to-slate-800"),
    (32, "B2", "স্তর ৪: উচ্চ-মধ্যবর্তী", "৩২. চাকরি ইন্টারভিউ জয় করার কৌশল (Job Interviews & Career)", "আত্মবিশ্বাস, বেতন আলোচনা ও অভিজ্ঞতা প্রদর্শন", "🎯", "from-emerald-600 to-teal-700"),
    (33, "B2", "স্তর ৪: উচ্চ-মধ্যবর্তী", "৩৩. বিজনেস মিটিং ও টিমওয়ার্ক (Business Meetings)", "এজেন্ডা পরিচালনা, যুক্তি ও সিদ্ধান্ত গ্রহণ", "📊", "from-teal-600 to-cyan-700"),
    (34, "B2", "স্তর ৪: উচ্চ-মধ্যবর্তী", "৩৪. অভিযোগ নিষ্পত্তি ও ক্লায়েন্ট হ্যান্ডলিং (Customer Complaints)", "বিরোধ মীমাংসা, অসন্তুষ্ট ক্লায়েন্ট ও রিফান্ড", "⚖️", "from-cyan-600 to-blue-700"),
    (35, "B2", "স্তর ৪: উচ্চ-মধ্যবর্তী", "৩৫. সুচিন্তিত মতামত, যুক্তি ও বিতর্ক (Opinions & Debating)", "যুক্তি উপস্থাপন, দ্বিমত পোষণ ও সমঝোতা", "🗣️", "from-blue-600 to-indigo-700"),
    (36, "B2", "স্তর ৪: উচ্চ-মধ্যবর্তী", "৩৬. পাবলিক প্রেজেন্টেশন ও স্পিচ (Public Speaking)", "উপস্থাপনার কৌশল, শ্রোতার মনোযোগ ও ডেটা ব্যাখ্যা", "🎤", "from-indigo-600 to-violet-700"),
    (37, "B2", "স্তর ৪: উচ্চ-মধ্যবর্তী", "৩৭. জটিল বাক্য ও যৌক্তিক সংযোগ (Complex Connectors)", "কারণ ও প্রভাব, জটিল কনজাংশন ও শর্তাবলী", "⚡", "from-violet-600 to-purple-700"),
    (38, "B2", "স্তর ৪: উচ্চ-মধ্যবর্তী", "৩৮. সংকট ব্যবস্থাপনা ও জরুরি প্রটোকল (Crisis Management)", "ঝুঁকি মোকাবেলা, আইনি সহায়তা ও জরুরি সিদ্ধান্ত", "🚨", "from-purple-600 to-rose-700"),
    (39, "B2", "স্তর ৪: উচ্চ-মধ্যবর্তী", "৩৯. কৃত্রিম বুদ্ধিমত্তা ও আধুনিক বিজ্ঞান (AI, Tech & Society)", "অটোমেশন, ডেটা সিকিউরিটি ও ভবিষ্যতের কর্মক্ষেত্র", "🤖", "from-rose-600 to-red-700"),
    (40, "B2", "স্তর ৪: উচ্চ-মধ্যবর্তী", "৪০. লেভেল B2 গ্র্যান্ড চেকপয়েন্ট এক্সাম (Checkpoint B2 Exam)", "উচ্চ-মধ্যবর্তী পেশাদার ইংরেজির চূড়ান্ত পরীক্ষা", "🎖️", "from-red-600 to-amber-700"),

    # C1 (41-50)
    (41, "C1", "স্তর ৫: পারদর্শী", "৪১. নেটিভ ইডিয়মস ও প্রবাদ-প্রবচন (Native Idioms & Proverbs)", "নেটিভ বক্তাদের মতো প্রাকৃতিক অলংকারিক ভাষা", "💡", "from-amber-600 to-yellow-600"),
    (42, "C1", "স্তর ৫: পারদর্শী", "৪২. অ্যাডভান্সড ফ্রেজাল ভার্বস (Advanced Phrasal Verbs)", "জটিল তিন শব্দের ফ্রেজাল ভার্ব ও প্রায়োগিক অর্থ", "🚀", "from-yellow-600 to-orange-600"),
    (43, "C1", "স্তর ৫: পারদর্শী", "৪৩. সূক্ষ্ম অনুভূতি, স্বর ও ভাবপ্রকাশ (Tone, Nuance & Empathy)", "কূটনৈতিক ভাষা, সংবেদনশীলতা ও সহমর্মিতা", "🎭", "from-orange-600 to-rose-600"),
    (44, "C1", "স্তর ৫: পারদর্শী", "৪৪. উচ্চাঙ্গ সাহিত্য, শিল্প ও নান্দনিকতা (Literature & Fine Arts)", "সাহিত্যের রসাস্বাদন, চিত্রশিল্প ও রূপক অর্থ", "📚", "from-rose-600 to-pink-600"),
    (45, "C1", "স্তর ৫: পারদর্শী", "৪৫. বিজ্ঞান, মহাবিশ্ব ও পরিবেশ দর্শন (Science & Ecology)", "কোয়ান্টাম তত্ত্ব, জ্যোতির্বিজ্ঞান ও পরিবেশ রক্ষা", "🔬", "from-pink-600 to-purple-600"),
    (46, "C1", "স্তর ৫: পারদর্শী", "৪৬. মানবাধিকার, আইন ও বৈশ্বিক সমাজ (Human Rights & Justice)", "সংবিধান, ন্যায়বিচার ও বৈশ্বিক মানবিক সংহতি", "⚖️", "from-purple-600 to-indigo-600"),
    (47, "C1", "স্তর ৫: পারদর্শী", "৪৭. আন্তর্জাতিক কূটনীতি ও বিশ্ববাণিজ্য (Global Diplomacy)", "দ্বিপাক্ষিক চুক্তি, বৈশ্বিক অর্থনীতি ও আন্তর্জাতিক শিষ্টাচার", "🌐", "from-indigo-600 to-blue-600"),
    (48, "C1", "স্তর ৫: পারদর্শী", "৪৮. প্রাতিষ্ঠানিক নেতৃত্ব ও প্রভাব বিস্তার (Leadership & Influence)", "নেতৃত্বের দৃষ্টিভঙ্গি, টিম প্রেরণা ও ক্যারিশমা", "💎", "from-blue-600 to-cyan-600"),
    (49, "C1", "স্তর ৫: পারদর্শী", "৪৯. অ্যাকাডেমিক গবেষণা ও ডিসকোর্স (Academic Research)", "গবেষণা পদ্ধতি, হাইপোথিসিস ও থিসিস ডিফেন্স", "🧠", "from-cyan-600 to-teal-600"),
    (50, "C1", "স্তর ৫: পারদর্শী", "৫০. সি১ গ্র্যান্ড মাস্টার ফ্লুয়েন্সি সার্টিফিকেট (C1 Grand Master Exam)", "আন্তর্জাতিক মানে অনর্গল ইংরেজি অর্জনের চূড়ান্ত পরীক্ষা", "👑", "from-amber-500 via-rose-500 to-indigo-600")
]

CONTENT_30 = []
for mid in range(21, 51):
    spec = [s for s in STAGE_THEMES_30 if s[0] == mid][0]
    lvl = spec[1]
    title_short = spec[3].split(" (")[0]
    l1 = (f"{title_short} - ১ম পাঠ", [
        ("reorder", "এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।", "Using professional and accurate English is essential in this situation."),
        ("mcq", f"'{spec[5]}' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?", ["Consistent practice and clear articulation.", "Speaking very fast without pause.", "Translating word by word from Bengali.", "Avoiding conversation."], "Consistent practice and clear articulation.", "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"),
        ("listening", "Effective communication is the cornerstone of professional success.", [
            "Effective communication is the cornerstone of professional success.",
            "We must finish the work without compromising quality.",
            "In my honest opinion technology has made life easier.",
            "With patience and dedication fluency is within your reach."
        ], "Effective communication is the cornerstone of professional success.", "Cornerstone = মূল ভিত্তিপ্রস্তর")
    ])
    l2 = (f"{title_short} - ২য় পাঠ", [
        ("reorder", "সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।", "Grammar gives you structure but speaking gives you true fluency."),
        ("mcq", f"'{spec[1]}' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?", ["Learn words and expressions in their natural context.", "Memorize dictionary definitions alone.", "Only read without ever speaking aloud.", "Ignore tone and emotions."], "Learn words and expressions in their natural context.", "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"),
        ("listening", "Confidence grows through continuous daily practice without fear.", [
            "Confidence grows through continuous daily practice without fear.",
            "Mistakes are natural proof that you are actively learning.",
            "Reading English articles expands your worldview.",
            "Do not compare your beginning with another person's journey."
        ], "Confidence grows through continuous daily practice without fear.", "Continuous practice = অবিরাম অনুশীলন")
    ])
    l3 = (f"{title_short} - মূল্যায়ন পরীক্ষা", [
        ("reorder", "বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।", "Bengali people should speak on the global stage with complete confidence."),
        ("mcq", f"'{spec[3]}' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?", ["Dedication, spaced review and regular speaking practice.", "Giving up after first error.", "Skipping all revisions.", "Only reading silently."], "Dedication, spaced review and regular speaking practice.", "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"),
        ("listening", "Fluently empowers you to achieve native English fluency.", [
            "Fluently empowers you to achieve native English fluency.",
            "Congratulations on completing this comprehensive module.",
            "Actions speak much louder than sporadic intentions.",
            "Keep up your daily streak and master every single lesson."
        ], "Fluently empowers you to achieve native English fluency.", "Empowers = সক্ষমতা প্রদান করে")
    ])
    CONTENT_30.append(l1)

all_modules = []

# Add Modules 1-20
for m_item in MODULE_SPECS:
    mid = m_item[0]
    stageId = m_item[1]
    stageName = m_item[2]
    title = m_item[3]
    desc = m_item[4]
    icon = m_item[5]
    bg = m_item[6]
    lessons_raw = m_item[7]

    lessons = []
    for l_idx, (ltitle, q_list) in enumerate(lessons_raw, 1):
        lid = f"mod_{mid}_l{l_idx}"
        questions = []
        for q_idx, q in enumerate(q_list, 1):
            qid = f"{lid}_q{q_idx}"
            q_type = q[0]
            if q_type == "mcq":
                questions.append({
                    "id": qid,
                    "type": "mcq",
                    "prompt": q[1],
                    "options": q[2],
                    "answer": q[3],
                    "hint": q[4]
                })
            elif q_type == "reorder":
                en_sentence = q[2]
                words = en_sentence.split(" ")
                questions.append({
                    "id": qid,
                    "type": "reorder",
                    "prompt": f"ইংরেজিতে সাজান: {q[1]}",
                    "words": words,
                    "answer": words,
                    "hint": f"✔ সঠিক বাক্য: {en_sentence}"
                })
            elif q_type == "listening":
                questions.append({
                    "id": qid,
                    "type": "listening",
                    "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
                    "audioText": q[1],
                    "options": q[2],
                    "answer": q[3],
                    "hint": q[4]
                })
            elif q_type == "matching":
                pairs = [{"en": p[0], "bn": p[1]} for p in q[2]]
                questions.append({
                    "id": qid,
                    "type": "matching",
                    "prompt": q[1],
                    "pairs": pairs
                })

        lessons.append({
            "id": lid,
            "moduleId": f"mod_{mid}",
            "title": ltitle,
            "xp": 20 + (mid // 10) * 5,
            "isExam": (mid % 10 == 0) and (l_idx == len(lessons_raw)),
            "questions": questions
        })

    all_modules.append({
        "id": f"mod_{mid}",
        "stageId": stageId,
        "stageName": stageName,
        "title": title,
        "desc": desc,
        "icon": icon,
        "bg": bg,
        "kind": "core",
        "kindNo": mid,
        "lessons": lessons
    })

# Add Modules 21-50
for idx, spec in enumerate(STAGE_THEMES_30):
    mid = spec[0]
    stageId = spec[1]
    stageName = spec[2]
    title = spec[3]
    desc = spec[4]
    icon = spec[5]
    bg = spec[6]

    title_short = title.split(" (")[0]
    lessons_raw = [
        (f"{title_short} - ১ম পাঠ", [
            ("reorder", "এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।", "Using professional and accurate English is essential in this situation."),
            ("mcq", f"'{spec[5]}' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?", ["Consistent practice and clear articulation.", "Speaking very fast without pause.", "Translating word by word from Bengali.", "Avoiding conversation."], "Consistent practice and clear articulation.", "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"),
            ("listening", "Effective communication is the cornerstone of professional success.", [
                "Effective communication is the cornerstone of professional success.",
                "We must finish the work without compromising quality.",
                "In my honest opinion technology has made life easier.",
                "With patience and dedication fluency is within your reach."
            ], "Effective communication is the cornerstone of professional success.", "Cornerstone = মূল ভিত্তিপ্রস্তর")
        ]),
        (f"{title_short} - ২য় পাঠ", [
            ("reorder", "সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।", "Grammar gives you structure but speaking gives you true fluency."),
            ("mcq", f"'{spec[1]}' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?", ["Learn words and expressions in their natural context.", "Memorize dictionary definitions alone.", "Only read without ever speaking aloud.", "Ignore tone and emotions."], "Learn words and expressions in their natural context.", "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"),
            ("listening", "Confidence grows through continuous daily practice without fear.", [
                "Confidence grows through continuous daily practice without fear.",
                "Mistakes are natural proof that you are actively learning.",
                "Reading English articles expands your worldview.",
                "Do not compare your beginning with another person's journey."
            ], "Confidence grows through continuous daily practice without fear.", "Continuous practice = অবিরাম অনুশীলন")
        ]),
        (f"{title_short} - সমাপনী কুইজ", [
            ("reorder", "বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।", "Bengali people should speak on the global stage with complete confidence."),
            ("mcq", f"'{spec[3]}' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?", ["Dedication, spaced review and regular speaking practice.", "Giving up after first error.", "Skipping all revisions.", "Only reading silently."], "Dedication, spaced review and regular speaking practice.", "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"),
            ("listening", "Fluently empowers you to achieve native English fluency.", [
                "Fluently empowers you to achieve native English fluency.",
                "Congratulations on completing this comprehensive module.",
                "Actions speak much louder than sporadic intentions.",
                "Keep up your daily streak and master every single lesson."
            ], "Fluently empowers you to achieve native English fluency.", "Empowers = সক্ষমতা প্রদান করে")
        ])
    ]

    lessons = []
    for l_idx, (ltitle, q_list) in enumerate(lessons_raw, 1):
        lid = f"mod_{mid}_l{l_idx}"
        questions = []
        for q_idx, q in enumerate(q_list, 1):
            qid = f"{lid}_q{q_idx}"
            q_type = q[0]
            if q_type == "mcq":
                questions.append({
                    "id": qid,
                    "type": "mcq",
                    "prompt": q[1],
                    "options": q[2],
                    "answer": q[3],
                    "hint": q[4]
                })
            elif q_type == "reorder":
                en_sentence = q[2]
                words = en_sentence.split(" ")
                questions.append({
                    "id": qid,
                    "type": "reorder",
                    "prompt": f"ইংরেজিতে সাজান: {q[1]}",
                    "words": words,
                    "answer": words,
                    "hint": f"✔ সঠিক বাক্য: {en_sentence}"
                })
            elif q_type == "listening":
                questions.append({
                    "id": qid,
                    "type": "listening",
                    "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
                    "audioText": q[1],
                    "options": q[2],
                    "answer": q[3],
                    "hint": q[4]
                })

        lessons.append({
            "id": lid,
            "moduleId": f"mod_{mid}",
            "title": ltitle,
            "xp": 25 + (mid // 10) * 5,
            "isExam": (mid % 10 == 0) and (l_idx == len(lessons_raw)),
            "questions": questions
        })

    all_modules.append({
        "id": f"mod_{mid}",
        "stageId": stageId,
        "stageName": stageName,
        "title": title,
        "desc": desc,
        "icon": icon,
        "bg": bg,
        "kind": "core",
        "kindNo": mid,
        "lessons": lessons
    })

print(f"Total modules compiled: {len(all_modules)}!")
print(f"Total lessons in CORE: {sum(len(m['lessons']) for m in all_modules)}")

with open("src/data/curriculumData.ts", "r", encoding="utf-8") as f:
    orig = f.read()

prefix = orig.split("export const CORE_MODULES: CurriculumModule[] = [")[0]
suffix = orig.split("// Helper to auto-generate Word Modules")[1]

with open("src/data/curriculumData.ts", "w", encoding="utf-8") as f:
    f.write(prefix)
    f.write("export const CORE_MODULES: CurriculumModule[] = ")
    json.dump(all_modules, f, ensure_ascii=False, indent=2)
    f.write(";\n\n// Helper to auto-generate Word Modules" + suffix)

print("Successfully written 50 Main Core Modules to src/data/curriculumData.ts!")
