// src/data/curriculumData.ts - Self-contained single-source English learning curriculum
export interface WordItem {
  id: number;
  word: string;
  bn: string;
  phonetic?: string;
  pos: string;
  category: string;
  level: string;
}

export interface SentenceItem {
  id: number;
  category: string;
  en: string;
  bn: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
}

const _RAW_WORDS: [number, string, string, string, string, string, string][] = [[1,"Hello","হ্যালো / ওহে","হ্যালো","interjection","Basics","A1"],[2,"Good Morning","শুভ সকাল","গুড মর্নিং","phrase","Basics","A1"],[3,"Thank you","ধন্যবাদ","থ্যাংক ইউ","phrase","Basics","A1"],[4,"Welcome","স্বাগতম","ওয়েলকাম","noun/verb","Basics","A1"],[5,"Family","পরিবার","ফ্যামিলি","noun","Family","A1"],[6,"Father","বাবা","ফাদার","noun","Family","A1"],[7,"Mother","মা","মাদার","noun","Family","A1"],[8,"Brother","ভাই","ব্রাদার","noun","Family","A1"],[9,"Sister","বোন","সিস্টার","noun","Family","A1"],[10,"Friend","বন্ধু","ফ্রেন্ড","noun","Social","A1"],[11,"Water","পানি / জল","ওয়াটার","noun","Food","A1"],[12,"Rice","ভাত / চাল","রাইস","noun","Food","A1"],[13,"Apple","আপেল","অ্যাপল","noun","Food","A1"],[14,"Bread","রুটি","ব্রেড","noun","Food","A1"],[15,"Book","বই","বুক","noun","Objects","A1"],[16,"Pen","কলম","পেন","noun","Objects","A1"],[17,"Chair","চেয়ার / কেদারা","চেয়ার","noun","Objects","A1"],[18,"Table","টেবিল / মেজ","টেবিল","noun","Objects","A1"],[19,"House","বাড়ি / ঘর","হাউস","noun","Places","A1"],[20,"School","বিদ্যালয় / স্কুল","স্কুল","noun","Places","A1"],[21,"Eat","খাওয়া","ইট","verb","Actions","A1"],[22,"Drink","পান করা","ড্রিংক","verb","Actions","A1"],[23,"Read","পড়া","রিড","verb","Actions","A1"],[24,"Write","লেখা","রাইট","verb","Actions","A1"],[25,"Sleep","ঘুমানো","স্লিপ","verb","Actions","A1"],[26,"Walk","হাঁটা","ওয়াক","verb","Actions","A1"],[27,"Speak","কথা বলা","স্পিক","verb","Actions","A1"],[28,"Listen","শোনা","লিসেন","verb","Actions","A1"],[29,"Learn","শেখা","লার্ন","verb","Actions","A1"],[30,"Understand","বুঝতে পারা","আন্ডারস্ট্যান্ড","verb","Actions","A1"],[31,"Meeting","সভা / মিটিং","মিটিং","noun","Workplace","A1"],[32,"Project","প্রকল্প","প্রজেক্ট","noun","Workplace","A1"],[33,"Manager","ব্যবস্থাপক","ম্যানেজার","noun","Workplace","A1"],[34,"Opportunity","সুযোগ","অপরচুনিটি","noun","Workplace","A1"],[35,"Success","সাফল্য","সাকসেস","noun","General","A1"],[36,"Experience","অভিজ্ঞতা","এক্সপেরিয়েন্স","noun","Workplace","A1"],[37,"Schedule","সময়সূচী","শিডিউল","noun","Workplace","A1"],[38,"Deadline","সর্বশেষ সময়সীমা","ডেডলাইন","noun","Workplace","A1"],[39,"go","যাওয়া","","verb","Actions","A2"],[40,"come","আসা","","verb","Actions","A2"],[41,"see","দেখা","","verb","Actions","A2"],[42,"look","তাকানো","","verb","Actions","A2"],[43,"give","দেওয়া","","verb","Actions","A2"],[44,"take","নেওয়া","","verb","Actions","A2"],[45,"make","বানানো","","verb","Actions","A2"],[46,"do","করা","","verb","Actions","A2"],[47,"say","বলা","","verb","Actions","A2"],[48,"tell","জানানো","","verb","Actions","A2"],[49,"ask","জিজ্ঞাসা করা","","verb","Actions","A2"],[50,"answer","উত্তর দেওয়া","","verb","Actions","A2"],[51,"think","ভাবা","","verb","Actions","A2"],[52,"know","জানা","","verb","Actions","A2"],[53,"want","চাওয়া","","verb","Actions","A2"],[54,"need","দরকার হওয়া","","verb","Actions","A2"],[55,"like","পছন্দ করা","","verb","Actions","A2"],[56,"love","ভালোবাসা","","verb","Actions","A2"],[57,"help","সাহায্য করা","","verb","Actions","A2"],[58,"work","কাজ করা","","verb","Actions","A2"],[59,"play","খেলা","","verb","Actions","A2"],[60,"run","দৌড়ানো","","verb","Actions","A2"],[61,"sit","বসা","","verb","Actions","A2"],[62,"stand","দাঁড়ানো","","verb","Actions","A2"],[63,"open","খোলা","","verb","Actions","A2"],[64,"close","বন্ধ করা","","verb","Actions","A2"],[65,"buy","কেনা","","verb","Actions","A2"],[66,"sell","বিক্রি করা","","verb","Actions","A2"],[67,"pay","টাকা দেওয়া","","verb","Actions","A2"],[68,"wait","অপেক্ষা করা","","verb","Actions","A2"],[69,"call","ডাকা / ফোন করা","","verb","Actions","A2"],[70,"send","পাঠানো","","verb","Actions","A2"],[71,"bring","আনা","","verb","Actions","A2"],[72,"cook","রান্না করা","","verb","Actions","A2"],[73,"wash","ধোয়া","","verb","Actions","A2"],[74,"clean","পরিষ্কার করা","","verb","Actions","A2"],[75,"wear","পরা","","verb","Actions","A2"],[76,"wake","জাগা","","verb","Actions","A2"],[77,"start","শুরু করা","","verb","Actions","A2"],[78,"stop","থামা","","verb","Actions","A2"],[79,"finish","শেষ করা","","verb","Actions","A2"],[80,"try","চেষ্টা করা","","verb","Actions","A2"],[81,"use","ব্যবহার করা","","verb","Actions","A2"],[82,"find","খুঁজে পাওয়া","","verb","Actions","A2"],[83,"lose","হারানো","","verb","Actions","A2"],[84,"keep","রাখা","","verb","Actions","A2"],[85,"meet","দেখা করা","","verb","Actions","A2"],[86,"remember","মনে রাখা","","verb","Actions","A2"],[87,"forget","ভুলে যাওয়া","","verb","Actions","A2"],[88,"believe","বিশ্বাস করা","","verb","Actions","A2"],[89,"laugh","হাসা","","verb","Actions","A2"],[90,"cry","কাঁদা","","verb","Actions","A2"],[91,"sing","গান গাওয়া","","verb","Actions","A2"],[92,"dance","নাচা","","verb","Actions","A2"],[93,"drive","গাড়ি চালানো","","verb","Actions","A2"],[94,"travel","ভ্রমণ করা","","verb","Actions","A2"],[95,"visit","ঘুরে দেখা","","verb","Actions","A2"],[96,"live","বাস করা","","verb","Actions","A2"],[97,"teach","শেখানো","","verb","Actions","A2"],[98,"study","পড়াশোনা করা","","verb","Actions","A2"],[99,"swim","সাঁতার কাটা","","verb","Actions","A2"],[100,"jump","লাফানো","","verb","Actions","A2"],[101,"fall","পড়ে যাওয়া","","verb","Actions","A2"],[102,"push","ঠেলা","","verb","Actions","A2"],[103,"pull","টানা","","verb","Actions","A2"],[104,"break","ভাঙা","","verb","Actions","A2"],[105,"build","তৈরি করা","","verb","Actions","A2"],[106,"change","বদলানো","","verb","Actions","A2"],[107,"choose","বেছে নেওয়া","","verb","Actions","A2"],[108,"decide","সিদ্ধান্ত নেওয়া","","verb","Actions","A2"],[109,"agree","একমত হওয়া","","verb","Actions","A2"],[110,"explain","ব্যাখ্যা করা","","verb","Actions","A2"],[111,"share","ভাগ করা","","verb","Actions","A2"],[112,"join","যোগ দেওয়া","","verb","Actions","A2"],[113,"win","জেতা","","verb","Actions","A2"],[114,"enjoy","উপভোগ করা","","verb","Actions","A2"],[115,"hope","আশা করা","","verb","Actions","A2"],[116,"worry","দুশ্চিন্তা করা","","verb","Actions","A2"],[117,"borrow","ধার নেওয়া","","verb","Actions","A2"],[118,"lend","ধার দেওয়া","","verb","Actions","A2"],[119,"apply","আবেদন করা","","verb","Actions","A2"],[120,"head","মাথা","","noun","Body","A2"],[121,"face","মুখ","","noun","Body","A2"],[122,"eye","চোখ","","noun","Body","A2"],[123,"ear","কান","","noun","Body","A2"],[124,"nose","নাক","","noun","Body","A2"],[125,"mouth","মুখগহ্বর","","noun","Body","A2"],[126,"tooth","দাঁত","","noun","Body","A2"],[127,"hair","চুল","","noun","Body","A2"],[128,"hand","হাত","","noun","Body","A2"],[129,"finger","আঙুল","","noun","Body","A2"],[130,"arm","বাহু","","noun","Body","A2"],[131,"leg","পা","","noun","Body","A2"],[132,"foot","পায়ের পাতা","","noun","Body","A2"],[133,"heart","হৃদয়","","noun","Body","A2"],[134,"stomach","পেট","","noun","Body","A2"],[135,"back","পিঠ","","noun","Body","A2"],[136,"neck","গলা","","noun","Body","A2"],[137,"shoulder","কাঁধ","","noun","Body","A2"],[138,"skin","ত্বক","","noun","Body","A2"],[139,"blood","রক্ত","","noun","Body","A2"],[140,"knee","হাঁটু","","noun","Body","A2"],[141,"bone","হাড়","","noun","Body","A2"],[142,"fever","জ্বর","","noun","Body","A2"],[143,"pain","ব্যথা","","noun","Body","A2"],[144,"cough","কাশি","","noun","Body","A2"],[145,"headache","মাথাব্যথা","","noun","Body","A2"],[146,"medicine","ওষুধ","","noun","Body","A2"],[147,"doctor","ডাক্তার","","noun","Body","A2"],[148,"today","আজ","","noun","Time","A2"],[149,"tomorrow","আগামীকাল","","noun","Time","A2"],[150,"yesterday","গতকাল","","noun","Time","A2"],[151,"now","এখন","","noun","Time","A2"],[152,"morning","সকাল","","noun","Time","A2"],[153,"afternoon","বিকাল","","noun","Time","A2"],[154,"evening","সন্ধ্যা","","noun","Time","A2"],[155,"night","রাত","","noun","Time","A2"],[156,"day","দিন","","noun","Time","A2"],[157,"week","সপ্তাহ","","noun","Time","A2"],[158,"month","মাস","","noun","Time","A2"],[159,"year","বছর","","noun","Time","A2"],[160,"hour","ঘণ্টা","","noun","Time","A2"],[161,"minute","মিনিট","","noun","Time","A2"],[162,"always","সবসময়","","noun","Time","A2"],[163,"never","কখনো না","","noun","Time","A2"],[164,"sometimes","মাঝে মাঝে","","noun","Time","A2"],[165,"early","তাড়াতাড়ি","","noun","Time","A2"],[166,"late","দেরি","","noun","Time","A2"],[167,"soon","শীঘ্রই","","noun","Time","A2"],[168,"Monday","সোমবার","","noun","Time","A2"],[169,"Tuesday","মঙ্গলবার","","noun","Time","A2"],[170,"Wednesday","বুধবার","","noun","Time","A2"],[171,"Thursday","বৃহস্পতিবার","","noun","Time","A2"],[172,"Friday","শুক্রবার","","noun","Time","A2"],[173,"Saturday","শনিবার","","noun","Time","A2"],[174,"Sunday","রবিবার","","noun","Time","A2"],[175,"one","এক","","noun","Time","A2"],[176,"two","দুই","","noun","Time","A2"],[177,"three","তিন","","noun","Time","A2"],[178,"four","চার","","noun","Time","A2"],[179,"five","পাঁচ","","noun","Time","A2"],[180,"six","ছয়","","noun","Time","A2"],[181,"seven","সাত","","noun","Time","A2"],[182,"eight","আট","","noun","Time","A2"],[183,"nine","নয়","","noun","Time","A2"],[184,"ten","দশ","","noun","Time","A2"],[185,"twenty","কুড়ি","","noun","Time","A2"],[186,"hundred","একশো","","noun","Time","A2"],[187,"thousand","হাজার","","noun","Time","A2"],[188,"first","প্রথম","","noun","Time","A2"],[189,"big","বড়","","adjective","Adjectives","A2"],[190,"small","ছোট","","adjective","Adjectives","A2"],[191,"long","লম্বা","","adjective","Adjectives","A2"],[192,"short","খাটো","","adjective","Adjectives","A2"],[193,"tall","উঁচু","","adjective","Adjectives","A2"],[194,"hot","গরম","","adjective","Adjectives","A2"],[195,"cold","ঠান্ডা","","adjective","Adjectives","A2"],[196,"new","নতুন","","adjective","Adjectives","A2"],[197,"old","পুরনো","","adjective","Adjectives","A2"],[198,"good","ভালো","","adjective","Adjectives","A2"],[199,"bad","খারাপ","","adjective","Adjectives","A2"],[200,"happy","খুশি","","adjective","Adjectives","A2"],[201,"sad","দুঃখিত","","adjective","Adjectives","A2"],[202,"angry","রাগান্বিত","","adjective","Adjectives","A2"],[203,"tired","ক্লান্ত","","adjective","Adjectives","A2"],[204,"hungry","ক্ষুধার্ত","","adjective","Adjectives","A2"],[205,"thirsty","তৃষ্ণার্ত","","adjective","Adjectives","A2"],[206,"easy","সহজ","","adjective","Adjectives","A2"],[207,"difficult","কঠিন","","adjective","Adjectives","A2"],[208,"fast","দ্রুত","","adjective","Adjectives","A2"],[209,"slow","ধীর","","adjective","Adjectives","A2"],[210,"heavy","ভারী","","adjective","Adjectives","A2"],[211,"light","হালকা","","adjective","Adjectives","A2"],[212,"dirty","নোংরা","","adjective","Adjectives","A2"],[213,"rich","ধনী","","adjective","Adjectives","A2"],[214,"poor","গরিব","","adjective","Adjectives","A2"],[215,"young","তরুণ","","adjective","Adjectives","A2"],[216,"beautiful","সুন্দর","","adjective","Adjectives","A2"],[217,"strong","শক্তিশালী","","adjective","Adjectives","A2"],[218,"weak","দুর্বল","","adjective","Adjectives","A2"],[219,"kind","দয়ালু","","adjective","Adjectives","A2"],[220,"brave","সাহসী","","adjective","Adjectives","A2"],[221,"clever","চালাক","","adjective","Adjectives","A2"],[222,"lazy","অলস","","adjective","Adjectives","A2"],[223,"quiet","শান্ত","","adjective","Adjectives","A2"],[224,"loud","জোরালো","","adjective","Adjectives","A2"],[225,"sweet","মিষ্টি","","adjective","Adjectives","A2"],[226,"sour","টক","","adjective","Adjectives","A2"],[227,"bitter","তেতো","","adjective","Adjectives","A2"],[228,"spicy","ঝাল","","adjective","Adjectives","A2"],[229,"fresh","তাজা","","adjective","Adjectives","A2"],[230,"empty","খালি","","adjective","Adjectives","A2"],[231,"full","পূর্ণ","","adjective","Adjectives","A2"],[232,"safe","নিরাপদ","","adjective","Adjectives","A2"],[233,"dangerous","বিপজ্জনক","","adjective","Adjectives","A2"],[234,"busy","ব্যস্ত","","adjective","Adjectives","A2"],[235,"ready","প্রস্তুত","","adjective","Adjectives","A2"],[236,"true","সত্য","","adjective","Adjectives","A2"],[237,"false","মিথ্যা","","adjective","Adjectives","A2"],[238,"wrong","ভুল","","adjective","Adjectives","A2"],[239,"right","সঠিক","","adjective","Adjectives","A2"],[240,"same","একই","","adjective","Adjectives","A2"],[241,"different","আলাদা","","adjective","Adjectives","A2"],[242,"important","গুরুত্বপূর্ণ","","adjective","Adjectives","A2"],[243,"possible","সম্ভব","","adjective","Adjectives","A2"],[244,"careful","সতর্ক","","adjective","Adjectives","A2"],[245,"sick","অসুস্থ","","adjective","Adjectives","A2"],[246,"healthy","সুস্থ","","adjective","Adjectives","A2"],[247,"wet","ভেজা","","adjective","Adjectives","A2"],[248,"dry","শুকনো","","adjective","Adjectives","A2"],[249,"dark","অন্ধকার","","adjective","Adjectives","A2"],[250,"bright","উজ্জ্বল","","adjective","Adjectives","A2"],[251,"red","লাল","","adjective","Adjectives","A2"],[252,"blue","নীল","","adjective","Adjectives","A2"],[253,"green","সবুজ","","adjective","Adjectives","A2"],[254,"yellow","হলুদ","","adjective","Adjectives","A2"],[255,"black","কালো","","adjective","Adjectives","A2"],[256,"white","সাদা","","adjective","Adjectives","A2"],[257,"orange","কমলা","","adjective","Adjectives","A2"],[258,"pink","গোলাপি","","adjective","Adjectives","A2"],[259,"brown","বাদামি","","adjective","Adjectives","A2"],[260,"milk","দুধ","","noun","Food","A2"],[261,"tea","চা","","noun","Food","A2"],[262,"coffee","কফি","","noun","Food","A2"],[263,"egg","ডিম","","noun","Food","A2"],[264,"fish","মাছ","","noun","Food","A2"],[265,"meat","মাংস","","noun","Food","A2"],[266,"chicken","মুরগি","","noun","Food","A2"],[267,"vegetable","সবজি","","noun","Food","A2"],[268,"fruit","ফল","","noun","Food","A2"],[269,"potato","আলু","","noun","Food","A2"],[270,"onion","পেঁয়াজ","","noun","Food","A2"],[271,"tomato","টমেটো","","noun","Food","A2"],[272,"garlic","রসুন","","noun","Food","A2"],[273,"ginger","আদা","","noun","Food","A2"],[274,"chili","কাঁচা মরিচ","","noun","Food","A2"],[275,"salt","লবণ","","noun","Food","A2"],[276,"sugar","চিনি","","noun","Food","A2"],[277,"oil","তেল","","noun","Food","A2"],[278,"butter","মাখন","","noun","Food","A2"],[279,"banana","কলা","","noun","Food","A2"],[280,"mango","আম","","noun","Food","A2"],[281,"lemon","লেবু","","noun","Food","A2"],[282,"grape","আঙুর","","noun","Food","A2"],[283,"lentil","ডাল","","noun","Food","A2"],[284,"soup","স্যুপ","","noun","Food","A2"],[285,"breakfast","সকালের নাস্তা","","noun","Food","A2"],[286,"lunch","দুপুরের খাবার","","noun","Food","A2"],[287,"dinner","রাতের খাবার","","noun","Food","A2"],[288,"snack","হালকা খাবার","","noun","Food","A2"],[289,"cake","কেক","","noun","Food","A2"],[290,"biscuit","বিস্কুট","","noun","Food","A2"],[291,"juice","রস","","noun","Food","A2"],[292,"spoon","চামচ","","noun","Food","A2"],[293,"fork","কাঁটাচামচ","","noun","Food","A2"],[294,"knife","ছুরি","","noun","Food","A2"],[295,"plate","থালা","","noun","Food","A2"],[296,"glass","গ্লাস","","noun","Food","A2"],[297,"cup","কাপ","","noun","Food","A2"],[298,"bowl","বাটি","","noun","Food","A2"],[299,"delicious","সুস্বাদু","","noun","Food","A2"],[300,"menu","মেনু","","noun","Food","A2"],[301,"bill","বিল","","noun","Food","A2"],[302,"door","দরজা","","noun","Home","A2"],[303,"window","জানালা","","noun","Home","A2"],[304,"room","কক্ষ","","noun","Home","A2"],[305,"kitchen","রান্নাঘর","","noun","Home","A2"],[306,"bathroom","বাথরুম","","noun","Home","A2"],[307,"bed","বিছানা","","noun","Home","A2"],[308,"roof","ছাদ","","noun","Home","A2"],[309,"wall","দেয়াল","","noun","Home","A2"],[310,"floor","মেঝে","","noun","Home","A2"],[311,"key","চাবি","","noun","Home","A2"],[312,"lamp","বাতি","","noun","Home","A2"],[313,"fan","পাখা","","noun","Home","A2"],[314,"clock","ঘড়ি","","noun","Home","A2"],[315,"phone","ফোন","","noun","Home","A2"],[316,"computer","কম্পিউটার","","noun","Home","A2"],[317,"television","টেলিভিশন","","noun","Home","A2"],[318,"bag","ব্যাগ","","noun","Home","A2"],[319,"umbrella","ছাতা","","noun","Home","A2"],[320,"shoes","জুতা","","noun","Home","A2"],[321,"shirt","শার্ট","","noun","Home","A2"],[322,"pants","প্যান্ট","","noun","Home","A2"],[323,"dress","জামা","","noun","Home","A2"],[324,"hat","টুপি","","noun","Home","A2"],[325,"glasses","চশমা","","noun","Home","A2"],[326,"mirror","আয়না","","noun","Home","A2"],[327,"soap","সাবান","","noun","Home","A2"],[328,"towel","তোয়ালে","","noun","Home","A2"],[329,"blanket","কম্বল","","noun","Home","A2"],[330,"pillow","বালিশ","","noun","Home","A2"],[331,"paper","কাগজ","","noun","Home","A2"],[332,"pencil","পেন্সিল","","noun","Home","A2"],[333,"notebook","খাতা","","noun","Home","A2"],[334,"money","টাকা / অর্থ","","noun","Home","A2"],[335,"box","বাক্স","","noun","Home","A2"],[336,"picture","ছবি","","noun","Home","A2"],[337,"camera","ক্যামেরা","","noun","Home","A2"],[338,"gift","উপহার","","noun","Home","A2"],[339,"city","শহর","","noun","Travel","A2"],[340,"village","গ্রাম","","noun","Travel","A2"],[341,"country","দেশ","","noun","Travel","A2"],[342,"road","রাস্তা","","noun","Travel","A2"],[343,"market","বাজার","","noun","Travel","A2"],[344,"shop","দোকান","","noun","Travel","A2"],[345,"hospital","হাসপাতাল","","noun","Travel","A2"],[346,"bank","ব্যাংক","","noun","Travel","A2"],[347,"mosque","মসজিদ","","noun","Travel","A2"],[348,"temple","মন্দির","","noun","Travel","A2"],[349,"park","পার্ক","","noun","Travel","A2"],[350,"river","নদী","","noun","Travel","A2"],[351,"bridge","সেতু","","noun","Travel","A2"],[352,"airport","বিমানবন্দর","","noun","Travel","A2"],[353,"station","স্টেশন","","noun","Travel","A2"],[354,"bus","বাস","","noun","Travel","A2"],[355,"train","ট্রেন","","noun","Travel","A2"],[356,"car","গাড়ি","","noun","Travel","A2"],[357,"bicycle","সাইকেল","","noun","Travel","A2"],[358,"rickshaw","রিকশা","","noun","Travel","A2"],[359,"boat","নৌকা","","noun","Travel","A2"],[360,"plane","বিমান","","noun","Travel","A2"],[361,"ticket","টিকিট","","noun","Travel","A2"],[362,"passport","পাসপোর্ট","","noun","Travel","A2"],[363,"hotel","হোটেল","","noun","Travel","A2"],[364,"restaurant","রেস্তোরাঁ","","noun","Travel","A2"],[365,"library","গ্রন্থাগার","","noun","Travel","A2"],[366,"field","মাঠ","","noun","Travel","A2"],[367,"map","মানচিত্র","","noun","Travel","A2"],[368,"straight","সোজা","","noun","Travel","A2"],[369,"near","কাছে","","noun","Travel","A2"],[370,"far","দূরে","","noun","Travel","A2"],[371,"here","এখানে","","noun","Travel","A2"],[372,"there","সেখানে","","noun","Travel","A2"],[373,"up","উপরে","","noun","Travel","A2"],[374,"down","নিচে","","noun","Travel","A2"],[375,"inside","ভিতরে","","noun","Travel","A2"],[376,"outside","বাইরে","","noun","Travel","A2"],[377,"between","মাঝখানে","","noun","Travel","A2"],[378,"sun","সূর্য","","noun","Nature","A2"],[379,"moon","চাঁদ","","noun","Nature","A2"],[380,"star","তারা","","noun","Nature","A2"],[381,"sky","আকাশ","","noun","Nature","A2"],[382,"cloud","মেঘ","","noun","Nature","A2"],[383,"rain","বৃষ্টি","","noun","Nature","A2"],[384,"wind","বাতাস","","noun","Nature","A2"],[385,"storm","ঝড়","","noun","Nature","A2"],[386,"flood","বন্যা","","noun","Nature","A2"],[387,"tree","গাছ","","noun","Nature","A2"],[388,"flower","ফুল","","noun","Nature","A2"],[389,"leaf","পাতা","","noun","Nature","A2"],[390,"grass","ঘাস","","noun","Nature","A2"],[391,"mountain","পাহাড়","","noun","Nature","A2"],[392,"sea","সমুদ্র","","noun","Nature","A2"],[393,"lake","হ্রদ","","noun","Nature","A2"],[394,"forest","বন","","noun","Nature","A2"],[395,"earth","পৃথিবী","","noun","Nature","A2"],[396,"fire","আগুন","","noun","Nature","A2"],[397,"summer","গ্রীষ্ম","","noun","Nature","A2"],[398,"winter","শীত","","noun","Nature","A2"],[399,"spring","বসন্ত","","noun","Nature","A2"],[400,"weather","আবহাওয়া","","noun","Nature","A2"],[401,"dog","কুকুর","","noun","Nature","A2"],[402,"cat","বিড়াল","","noun","Nature","A2"],[403,"cow","গরু","","noun","Nature","A2"],[404,"goat","ছাগল","","noun","Nature","A2"],[405,"horse","ঘোড়া","","noun","Nature","A2"],[406,"bird","পাখি","","noun","Nature","A2"],[407,"tiger","বাঘ","","noun","Nature","A2"],[408,"elephant","হাতি","","noun","Nature","A2"],[409,"monkey","বাঁদর","","noun","Nature","A2"],[410,"snake","সাপ","","noun","Nature","A2"],[411,"mosquito","মশা","","noun","Nature","A2"],[412,"butterfly","প্রজাপতি","","noun","Nature","A2"],[413,"duck","হাঁস","","noun","Nature","A2"],[414,"teacher","শিক্ষক","","noun","Workplace","A2"],[415,"student","শিক্ষার্থী","","noun","Workplace","A2"],[416,"class","ক্লাস","","noun","Workplace","A2"],[417,"exam","পরীক্ষা","","noun","Workplace","A2"],[418,"lesson","পাঠ","","noun","Workplace","A2"],[419,"homework","বাড়ির কাজ","","noun","Workplace","A2"],[420,"language","ভাষা","","noun","Workplace","A2"],[421,"word","শব্দ","","noun","Workplace","A2"],[422,"sentence","বাক্য","","noun","Workplace","A2"],[423,"job","চাকরি","","noun","Workplace","A2"],[424,"salary","বেতন","","noun","Workplace","A2"],[425,"company","প্রতিষ্ঠান","","noun","Workplace","A2"],[426,"team","দল","","noun","Workplace","A2"],[427,"boss","বস","","noun","Workplace","A2"],[428,"customer","গ্রাহক","","noun","Workplace","A2"],[429,"email","ইমেইল","","noun","Workplace","A2"],[430,"report","প্রতিবেদন","","noun","Workplace","A2"],[431,"document","নথি","","noun","Workplace","A2"],[432,"price","দাম","","noun","Workplace","A2"],[433,"office","অফিস","","noun","Workplace","A2"],[434,"interview","সাক্ষাৎকার","","noun","Workplace","A2"],[435,"engineer","প্রকৌশলী","","noun","Workplace","A2"],[436,"farmer","কৃষক","","noun","Workplace","A2"],[437,"driver","চালক","","noun","Workplace","A2"],[438,"police","পুলিশ","","noun","Workplace","A2"],[439,"lawyer","আইনজীবী","","noun","Workplace","A2"],[440,"shopkeeper","দোকানদার","","noun","Workplace","A2"],[441,"worker","শ্রমিক","","noun","Workplace","A2"],[442,"nurse","নার্স","","noun","Workplace","A2"],[443,"Please","দয়া করে","","phrase","Phrases","A2"],[444,"Sorry","দুঃখিত","","phrase","Phrases","A2"],[445,"Excuse me","মাফ করবেন","","phrase","Phrases","A2"],[446,"Yes","হ্যাঁ","","phrase","Phrases","A2"],[447,"No","না","","phrase","Phrases","A2"],[448,"Good night","শুভ রাত্রি","","phrase","Phrases","A2"],[449,"Goodbye","বিদায়","","phrase","Phrases","A2"],[450,"How are you","আপনি কেমন আছেন?","","phrase","Phrases","A2"],[451,"I am fine","আমি ভালো আছি","","phrase","Phrases","A2"],[452,"What is your name","আপনার নাম কী?","","phrase","Phrases","A2"],[453,"My name is","আমার নাম…","","phrase","Phrases","A2"],[454,"Nice to meet you","আপনার সাথে দেখা হয়ে ভালো লাগল","","phrase","Phrases","A2"],[455,"I do not understand","আমি বুঝতে পারছি না","","phrase","Phrases","A2"],[456,"Say it again","আবার বলুন","","phrase","Phrases","A2"],[457,"Speak slowly","ধীরে বলুন","","phrase","Phrases","A2"],[458,"How much is this","এটার দাম কত?","","phrase","Phrases","A2"],[459,"Where is the toilet","টয়লেট কোথায়?","","phrase","Phrases","A2"],[460,"What time is it","কয়টা বাজে?","","phrase","Phrases","A2"],[461,"Help me","আমাকে সাহায্য করুন","","phrase","Phrases","A2"],[462,"Congratulations","অভিনন্দন","","phrase","Phrases","A2"],[463,"Good luck","শুভকামনা","","phrase","Phrases","A2"],[464,"No problem","সমস্যা নেই","","phrase","Phrases","A2"],[465,"I agree","আমি একমত","","phrase","Phrases","A2"],[466,"Take care","নিজের যত্ন নিন","","phrase","Phrases","A2"],[467,"See you later","পরে দেখা হবে","","phrase","Phrases","A2"],[468,"What is this","এটা কী?","","phrase","Phrases","A2"],[469,"Can you help me","আপনি কি আমাকে সাহায্য করতে পারবেন?","","phrase","Phrases","A2"],[470,"Where do you live","আপনি কোথায় থাকেন?","","phrase","Phrases","A2"],[471,"I am from Bangladesh","আমি বাংলাদেশ থেকে এসেছি","","phrase","Phrases","A2"],[472,"I","আমি","","grammar","Grammar","A2"],[473,"you","তুমি / আপনি","","grammar","Grammar","A2"],[474,"he","সে (পুরুষ)","","grammar","Grammar","A2"],[475,"she","সে (মহিলা)","","grammar","Grammar","A2"],[476,"it","এটা","","grammar","Grammar","A2"],[477,"we","আমরা","","grammar","Grammar","A2"],[478,"they","তারা","","grammar","Grammar","A2"],[479,"my","আমার","","grammar","Grammar","A2"],[480,"your","তোমার","","grammar","Grammar","A2"],[481,"this","এই","","grammar","Grammar","A2"],[482,"that","ওই","","grammar","Grammar","A2"],[483,"what","কী","","grammar","Grammar","A2"],[484,"where","কোথায়","","grammar","Grammar","A2"],[485,"when","কখন","","grammar","Grammar","A2"],[486,"why","কেন","","grammar","Grammar","A2"],[487,"who","কে","","grammar","Grammar","A2"],[488,"how","কীভাবে","","grammar","Grammar","A2"],[489,"which","কোনটি","","grammar","Grammar","A2"],[490,"and","এবং","","grammar","Grammar","A2"],[491,"but","কিন্তু","","grammar","Grammar","A2"],[492,"or","অথবা","","grammar","Grammar","A2"],[493,"because","কারণ","","grammar","Grammar","A2"],[494,"if","যদি","","grammar","Grammar","A2"],[495,"with","সাথে","","grammar","Grammar","A2"],[496,"without","ছাড়া","","grammar","Grammar","A2"],[497,"for","জন্য","","grammar","Grammar","A2"],[498,"from","থেকে","","grammar","Grammar","A2"],[499,"very","খুব","","grammar","Grammar","A2"],[500,"also","ও","","grammar","Grammar","A2"],[501,"not","না","","grammar","Grammar","A2"],[502,"can","পারা","","grammar","Grammar","A2"],[503,"will","করবে","","grammar","Grammar","A2"],[504,"must","অবশ্যই","","grammar","Grammar","A2"],[505,"many","অনেক","","grammar","Grammar","A2"],[506,"few","অল্প","","grammar","Grammar","A2"],[507,"all","সব","","grammar","Grammar","A2"],[508,"some","কিছু","","grammar","Grammar","A2"],[509,"more","আরও","","grammar","Grammar","A2"],[510,"only","শুধু","","grammar","Grammar","A2"],[511,"grandfather","দাদা / নানা","","noun","Family","A2"],[512,"grandmother","দাদি / নানি","","noun","Family","A2"],[513,"uncle","চাচা / মামা","","noun","Family","A2"],[514,"aunt","চাচি / খালা","","noun","Family","A2"],[515,"son","ছেলে (সন্তান)","","noun","Family","A2"],[516,"daughter","মেয়ে (সন্তান)","","noun","Family","A2"],[517,"husband","স্বামী","","noun","Family","A2"],[518,"wife","স্ত্রী","","noun","Family","A2"],[519,"baby","শিশু","","noun","Family","A2"],[520,"child","সন্তান","","noun","Family","A2"],[521,"boy","বালক","","noun","Family","A2"],[522,"girl","বালিকা","","noun","Family","A2"],[523,"man","পুরুষ","","noun","Family","A2"],[524,"woman","নারী","","noun","Family","A2"],[525,"neighbor","প্রতিবেশী","","noun","Family","A2"],[526,"guest","অতিথি","","noun","Family","A2"],[527,"parents","বাবা-মা","","noun","Family","A2"],[528,"relative","আত্মীয়","","noun","Family","A2"],[529,"people","মানুষ","","noun","Family","A2"],[530,"name","নাম","","noun","Family","A2"],[531,"age","বয়স","","noun","Family","A2"],[532,"afraid","ভীত","","adjective","Feelings","A2"],[533,"surprised","অবাক","","adjective","Feelings","A2"],[534,"proud","গর্বিত","","adjective","Feelings","A2"],[535,"lonely","একাকী","","adjective","Feelings","A2"],[536,"nervous","নার্ভাস","","adjective","Feelings","A2"],[537,"excited","উত্তেজিত","","adjective","Feelings","A2"],[538,"worried","চিন্তিত","","adjective","Feelings","A2"],[539,"confused","বিভ্রান্ত","","adjective","Feelings","A2"],[540,"shy","লাজুক","","adjective","Feelings","A2"],[541,"jealous","ঈর্ষান্বিত","","adjective","Feelings","A2"],[542,"grateful","কৃতজ্ঞ","","adjective","Feelings","A2"],[543,"bored","বিরক্ত","","adjective","Feelings","A2"],[544,"calm","শান্ত মনের","","adjective","Feelings","A2"],[545,"polite","বিনয়ী","","adjective","Feelings","A2"],[546,"honest","সৎ","","adjective","Feelings","A2"],[547,"generous","উদার","","adjective","Feelings","A2"],[548,"patient","ধৈর্যশীল","","adjective","Feelings","A2"],[549,"serious","গম্ভীর","","adjective","Feelings","A2"],[550,"funny","মজার","","adjective","Feelings","A2"],[551,"friendly","বন্ধুসুলভ","","adjective","Feelings","A2"],[552,"famous","বিখ্যাত","","adjective","Feelings","A2"],[553,"smart","বুদ্ধিমান","","adjective","Feelings","A2"],[554,"selfish","স্বার্থপর","","adjective","Feelings","A2"],[555,"lucky","ভাগ্যবান","","adjective","Feelings","A2"],[556,"cheap","সস্তা","","noun","Money","A2"],[557,"expensive","দামি","","noun","Money","A2"],[558,"discount","ছাড়","","noun","Money","A2"],[559,"receipt","রসিদ","","noun","Money","A2"],[560,"cash","নগদ টাকা","","noun","Money","A2"],[561,"card","কার্ড","","noun","Money","A2"],[562,"coin","মুদ্রা","","noun","Money","A2"],[563,"size","মাপ","","noun","Money","A2"],[564,"color","রং","","noun","Money","A2"],[565,"quality","মান","","noun","Money","A2"],[566,"order","অর্ডার","","noun","Money","A2"],[567,"delivery","ডেলিভারি","","noun","Money","A2"],[568,"account","হিসাব","","noun","Money","A2"],[569,"loan","ঋণ","","noun","Money","A2"],[570,"tax","কর","","noun","Money","A2"],[571,"profit","লাভ","","noun","Money","A2"],[572,"loss","ক্ষতি","","noun","Money","A2"],[573,"cost","খরচ","","noun","Money","A2"],[574,"budget","বাজেট","","noun","Money","A2"],[575,"save","সঞ্চয় করা","","noun","Money","A2"],[576,"spend","খরচ করা","","noun","Money","A2"],[577,"earn","আয় করা","","noun","Money","A2"],[578,"rent","ভাড়া","","noun","Money","A2"],[579,"shopping","কেনাকাটা","","noun","Money","A2"],[580,"bargain","দরদাম করা","","noun","Money","A2"],[581,"wallet","মানিব্যাগ","","noun","Money","A2"],[582,"arrive","পৌঁছানো","","verb","Actions","A2"],[583,"leave","ছেড়ে যাওয়া","","verb","Actions","A2"],[584,"return","ফিরে আসা","","verb","Actions","A2"],[585,"enter","প্রবেশ করা","","verb","Actions","A2"],[586,"follow","অনুসরণ করা","","verb","Actions","A2"],[587,"catch","ধরা","","verb","Actions","A2"],[588,"throw","ছোড়া","","verb","Actions","A2"],[589,"hold","ধরে রাখা","","verb","Actions","A2"],[590,"cut","কাটা","","verb","Actions","A2"],[591,"fill","ভরা","","verb","Actions","A2"],[592,"pour","ঢালা","","verb","Actions","A2"],[593,"mix","মেশানো","","verb","Actions","A2"],[594,"boil","ফোটানো","","verb","Actions","A2"],[595,"fry","ভাজা","","verb","Actions","A2"],[596,"bake","সেঁকা","","verb","Actions","A2"],[597,"taste","স্বাদ নেওয়া","","verb","Actions","A2"],[598,"smell","গন্ধ পাওয়া","","verb","Actions","A2"],[599,"touch","ছোঁয়া","","verb","Actions","A2"],[600,"hear","শুনতে পাওয়া","","verb","Actions","A2"],[601,"shout","চিৎকার করা","","verb","Actions","A2"],[602,"whisper","ফিসফিস করা","","verb","Actions","A2"],[603,"hug","আলিঙ্গন করা","","verb","Actions","A2"],[604,"hide","লুকানো","","verb","Actions","A2"],[605,"show","দেখানো","","verb","Actions","A2"],[606,"count","গোনা","","verb","Actions","A2"],[607,"measure","মাপা","","verb","Actions","A2"],[608,"compare","তুলনা করা","","verb","Actions","A2"],[609,"check","যাচাই করা","","verb","Actions","A2"],[610,"fix","মেরামত করা","","verb","Actions","A2"],[611,"grow","বড় হওয়া","","verb","Actions","A2"],[612,"protect","রক্ষা করা","","verb","Actions","A2"],[613,"accept","গ্রহণ করা","","verb","Actions","A2"],[614,"refuse","প্রত্যাখ্যান করা","","verb","Actions","A2"],[615,"allow","অনুমতি দেওয়া","","verb","Actions","A2"],[616,"invite","আমন্ত্রণ জানানো","","verb","Actions","A2"],[617,"celebrate","উদযাপন করা","","verb","Actions","A2"],[618,"prepare","প্রস্তুত করা","","verb","Actions","A2"],[619,"practice","অনুশীলন করা","","verb","Actions","A2"],[620,"improve","উন্নতি করা","","verb","Actions","A2"],[621,"solve","সমাধান করা","","verb","Actions","A2"],[622,"manage","পরিচালনা করা","","verb","Actions","A2"],[623,"create","সৃষ্টি করা","","verb","Actions","A2"],[624,"collect","সংগ্রহ করা","","verb","Actions","A2"],[625,"rest","বিশ্রাম নেওয়া","","verb","Actions","A2"],[626,"relax","আরাম করা","","verb","Actions","A2"],[627,"brush","ব্রাশ করা","","verb","Actions","A2"],[628,"colleague","সহকর্মী","","noun","Workplace","A2"],[629,"department","বিভাগ","","noun","Workplace","A2"],[630,"presentation","উপস্থাপনা","","noun","Workplace","A2"],[631,"proposal","প্রস্তাবনা","","noun","Workplace","A2"],[632,"contract","চুক্তি","","noun","Workplace","A2"],[633,"client","ক্লায়েন্ট","","noun","Workplace","A2"],[634,"goal","লক্ষ্য","","noun","Workplace","A2"],[635,"plan","পরিকল্পনা","","noun","Workplace","A2"],[636,"task","কাজ (দায়িত্ব)","","noun","Workplace","A2"],[637,"result","ফলাফল","","noun","Workplace","A2"],[638,"problem","সমস্যা","","noun","Workplace","A2"],[639,"solution","সমাধান","","noun","Workplace","A2"],[640,"idea","ধারণা","","noun","Workplace","A2"],[641,"skill","দক্ষতা","","noun","Workplace","A2"],[642,"training","প্রশিক্ষণ","","noun","Workplace","A2"],[643,"promotion","পদোন্নতি","","noun","Workplace","A2"],[644,"resign","পদত্যাগ করা","","noun","Workplace","A2"],[645,"hire","নিয়োগ দেওয়া","","noun","Workplace","A2"],[646,"candidate","প্রার্থী","","noun","Workplace","A2"],[647,"vacancy","শূন্যপদ","","noun","Workplace","A2"],[648,"resume","জীবনবৃত্তান্ত","","noun","Workplace","A2"],[649,"reply","উত্তর দেওয়া","","noun","Workplace","A2"],[650,"attach","সংযুক্ত করা","","noun","Workplace","A2"],[651,"regards","শুভেচ্ছা","","noun","Workplace","A2"],[652,"approve","অনুমোদন করা","","noun","Workplace","A2"],[653,"request","অনুরোধ","","noun","Workplace","A2"],[654,"urgent","জরুরি","","noun","Workplace","A2"],[655,"available","উপলব্ধ","","noun","Workplace","A2"],[656,"responsible","দায়িত্বশীল","","noun","Workplace","A2"],[657,"professional","পেশাদার","","noun","Workplace","A2"],[658,"confident","আত্মবিশ্বাসী","","noun","Workplace","A2"],[659,"reliable","নির্ভরযোগ্য","","noun","Workplace","A2"],[660,"feedback","মতামত","","noun","Workplace","A2"],[661,"progress","অগ্রগতি","","noun","Workplace","A2"],[662,"life","জীবন","","noun","Life","A2"],[663,"world","বিশ্ব","","noun","Life","A2"],[664,"time","সময়","","noun","Life","A2"],[665,"place","জায়গা","","noun","Life","A2"],[666,"thing","জিনিস","","noun","Life","A2"],[667,"way","পথ / উপায়","","noun","Life","A2"],[668,"reason","কারণ","","noun","Life","A2"],[669,"question","প্রশ্ন","","noun","Life","A2"],[670,"story","গল্প","","noun","Life","A2"],[671,"news","খবর","","noun","Life","A2"],[672,"music","সংগীত","","noun","Life","A2"],[673,"movie","চলচ্চিত্র","","noun","Life","A2"],[674,"game","খেলা","","noun","Life","A2"],[675,"sport","ক্রীড়া","","noun","Life","A2"],[676,"football","ফুটবল","","noun","Life","A2"],[677,"cricket","ক্রিকেট","","noun","Life","A2"],[678,"party","অনুষ্ঠান","","noun","Life","A2"],[679,"festival","উৎসব","","noun","Life","A2"],[680,"holiday","ছুটি","","noun","Life","A2"],[681,"birthday","জন্মদিন","","noun","Life","A2"],[682,"wedding","বিয়ে","","noun","Life","A2"],[683,"dream","স্বপ্ন","","noun","Life","A2"],[684,"secret","গোপন কথা","","noun","Life","A2"],[685,"luck","ভাগ্য","","noun","Life","A2"],[686,"peace","শান্তি","","noun","Life","A2"],[687,"war","যুদ্ধ","","noun","Life","A2"],[688,"law","আইন","","noun","Life","A2"],[689,"rule","নিয়ম","","noun","Life","A2"],[690,"freedom","স্বাধীনতা","","noun","Life","A2"],[691,"religion","ধর্ম","","noun","Life","A2"],[692,"history","ইতিহাস","","noun","Life","A2"],[693,"science","বিজ্ঞান","","noun","Life","A2"],[694,"math","গণিত","","noun","Life","A2"],[695,"art","শিল্প","","noun","Life","A2"],[696,"society","সমাজ","","noun","Life","A2"],[697,"government","সরকার","","noun","Life","A2"],[698,"election","নির্বাচন","","noun","Life","A2"],[699,"uniform","ইউনিফর্ম","","noun","Life","A2"],[700,"university","বিশ্ববিদ্যালয়","","noun","Life","A2"],[701,"subject","বিষয়","","noun","Life","A2"],[702,"internet","ইন্টারনেট","","noun","Tech","A2"],[703,"website","ওয়েবসাইট","","noun","Tech","A2"],[704,"password","পাসওয়ার্ড","","noun","Tech","A2"],[705,"message","বার্তা","","noun","Tech","A2"],[706,"video","ভিডিও","","noun","Tech","A2"],[707,"screen","পর্দা","","noun","Tech","A2"],[708,"battery","ব্যাটারি","","noun","Tech","A2"],[709,"charger","চার্জার","","noun","Tech","A2"],[710,"download","ডাউনলোড করা","","noun","Tech","A2"],[711,"online","অনলাইন","","noun","Tech","A2"],[712,"app","অ্যাপ","","noun","Tech","A2"],[713,"signal","সিগন্যাল","","noun","Tech","A2"],[714,"well","ভালোভাবে","","grammar","Grammar","A2"],[715,"really","সত্যিই","","grammar","Grammar","A2"],[716,"maybe","হয়তো","","grammar","Grammar","A2"],[717,"usually","সাধারণত","","grammar","Grammar","A2"],[718,"often","প্রায়ই","","grammar","Grammar","A2"],[719,"already","ইতিমধ্যে","","grammar","Grammar","A2"],[720,"still","এখনও","","grammar","Grammar","A2"],[721,"again","আবার","","grammar","Grammar","A2"],[722,"together","একসাথে","","grammar","Grammar","A2"],[723,"almost","প্রায়","","grammar","Grammar","A2"],[724,"enough","যথেষ্ট","","grammar","Grammar","A2"],[725,"quite","বেশ","","grammar","Grammar","A2"],[726,"even","এমনকি","","grammar","Grammar","A2"],[727,"just","মাত্র","","grammar","Grammar","A2"],[728,"instead","বদলে","","grammar","Grammar","A2"],[729,"however","তবে","","grammar","Grammar","A2"],[730,"therefore","তাই","","grammar","Grammar","A2"],[731,"although","যদিও","","grammar","Grammar","A2"],[732,"until","পর্যন্ত","","grammar","Grammar","A2"],[733,"during","চলাকালীন","","grammar","Grammar","A2"],[734,"before","আগে","","grammar","Grammar","A2"],[735,"after","পরে","","grammar","Grammar","A2"],[736,"around","চারপাশে","","grammar","Grammar","A2"],[737,"behind","পিছনে","","grammar","Grammar","A2"],[738,"under","নিচে","","grammar","Grammar","A2"],[739,"above","উপরে","","grammar","Grammar","A2"],[740,"across","পেরিয়ে","","grammar","Grammar","A2"],[741,"through","মধ্য দিয়ে","","grammar","Grammar","A2"],[742,"against","বিরুদ্ধে","","grammar","Grammar","A2"],[743,"among","মধ্যে","","grammar","Grammar","A2"],[744,"beside","পাশে","","grammar","Grammar","A2"],[745,"toward","দিকে","","grammar","Grammar","A2"],[746,"every","প্রতিটি","","grammar","Grammar","A2"],[747,"each","প্রত্যেক","","grammar","Grammar","A2"],[748,"another","আরেকটি","","grammar","Grammar","A2"],[749,"other","অন্য","","grammar","Grammar","A2"],[750,"both","উভয়","","grammar","Grammar","A2"],[751,"none","কেউ না","","grammar","Grammar","A2"],[752,"anything","যেকোনো কিছু","","grammar","Grammar","A2"],[753,"nothing","কিছুই না","","grammar","Grammar","A2"],[754,"everything","সবকিছু","","grammar","Grammar","A2"],[755,"someone","কেউ","","grammar","Grammar","A2"],[756,"everyone","সবাই","","grammar","Grammar","A2"],[757,"I am lost","আমি পথ হারিয়েছি","","phrase","Phrases","A2"],[758,"Call the police","পুলিশ ডাকুন","","phrase","Phrases","A2"],[759,"I need a doctor","আমার ডাক্তার দরকার","","phrase","Phrases","A2"],[760,"I am sick","আমি অসুস্থ","","phrase","Phrases","A2"],[761,"Where is the bus stop","বাস স্টপ কোথায়?","","phrase","Phrases","A2"],[762,"How far is it","এটা কত দূরে?","","phrase","Phrases","A2"],[763,"I want to go to the airport","আমি বিমানবন্দরে যেতে চাই","","phrase","Phrases","A2"],[764,"Do you speak English","আপনি কি ইংরেজি বলতে পারেন?","","phrase","Phrases","A2"],[765,"I speak a little English","আমি অল্প ইংরেজি বলতে পারি","","phrase","Phrases","A2"],[766,"What does this mean","এর মানে কী?","","phrase","Phrases","A2"],[767,"How do you say this in English","এটা ইংরেজিতে কীভাবে বলে?","","phrase","Phrases","A2"],[768,"Can I have the menu","আমি কি মেনুটা পেতে পারি?","","phrase","Phrases","A2"],[769,"I would like some water","আমি একটু পানি চাই","","phrase","Phrases","A2"],[770,"The bill please","বিলটা দিন, দয়া করে","","phrase","Phrases","A2"],[771,"It is delicious","এটা সুস্বাদু","","phrase","Phrases","A2"],[772,"Can I try this","আমি কি এটা চেষ্টা করে দেখতে পারি?","","phrase","Phrases","A2"],[773,"Do you have a smaller size","আপনার কাছে কি ছোট সাইজ আছে?","","phrase","Phrases","A2"],[774,"Can you give a discount","একটু ছাড় দেওয়া যাবে?","","phrase","Phrases","A2"],[775,"I will take it","আমি এটা নেব","","phrase","Phrases","A2"],[776,"Just a moment","এক মুহূর্ত","","phrase","Phrases","A2"],[777,"Of course","অবশ্যই","","phrase","Phrases","A2"],[778,"I think so","আমার তাই মনে হয়","","phrase","Phrases","A2"],[779,"I am not sure","আমি নিশ্চিত নই","","phrase","Phrases","A2"],[780,"It does not matter","কিছু যায় আসে না","","phrase","Phrases","A2"],[781,"What happened","কী হয়েছে?","","phrase","Phrases","A2"],[782,"Be careful","সাবধান","","phrase","Phrases","A2"],[783,"Hurry up","তাড়াতাড়ি করুন","","phrase","Phrases","A2"],[784,"Come in","ভিতরে আসুন","","phrase","Phrases","A2"],[785,"Have a seat","বসুন","","phrase","Phrases","A2"],[786,"Welcome back","আবার স্বাগতম","","phrase","Phrases","A2"],[787,"Happy birthday","শুভ জন্মদিন","","phrase","Phrases","A2"],[788,"Best wishes","শুভেচ্ছা রইল","","phrase","Phrases","A2"],[789,"Thank you very much","অনেক ধন্যবাদ","","phrase","Phrases","A2"],[790,"You are welcome","কিছু না / আপনাকেও স্বাগতম","","phrase","Phrases","A2"],[791,"I miss you","আমি তোমাকে মিস করি","","phrase","Phrases","A2"],[792,"Good job","চমৎকার কাজ","","phrase","Phrases","A2"],[793,"Cheer up","মন খারাপ করো না","","phrase","Phrases","A2"],[794,"Piece of cake","অতি সহজ কাজ","","idiom","Idioms","B2"],[795,"Break a leg","শুভকামনা (অনুষ্ঠানের আগে)","","idiom","Idioms","B2"],[796,"Hit the books","মন দিয়ে পড়তে বসা","","idiom","Idioms","B2"],[797,"Under the weather","শরীর ভালো না","","idiom","Idioms","B2"],[798,"Once in a blue moon","কালেভদ্রে","","idiom","Idioms","B2"],[799,"Spill the beans","গোপন কথা ফাঁস করা","","idiom","Idioms","B2"],[800,"Cost an arm and a leg","অনেক দামি","","idiom","Idioms","B2"],[801,"Call it a day","আজকের মতো কাজ শেষ করা","","idiom","Idioms","B2"],[802,"Better late than never","না হওয়ার চেয়ে দেরিতে হওয়া ভালো","","idiom","Idioms","B2"],[803,"Actions speak louder than words","কথার চেয়ে কাজ বড়","","idiom","Idioms","B2"],[804,"Easier said than done","বলা সহজ, করা কঠিন","","idiom","Idioms","B2"],[805,"Time is money","সময়ই টাকা","","idiom","Idioms","B2"],[806,"Practice makes perfect","অনুশীলনেই দক্ষতা","","idiom","Idioms","B2"],[807,"Look on the bright side","ভালো দিকটা দেখো","","idiom","Idioms","B2"],[808,"Keep in touch","যোগাযোগ রেখো","","idiom","Idioms","B2"],[809,"The ball is in your court","এখন সিদ্ধান্ত আপনার","","idiom","Idioms","B2"],[810,"jacket","জ্যাকেট","","noun","Clothes","A2"],[811,"sweater","সোয়েটার","","noun","Clothes","A2"],[812,"socks","মোজা","","noun","Clothes","A2"],[813,"scarf","স্কার্ফ","","noun","Clothes","A2"],[814,"belt","বেল্ট","","noun","Clothes","A2"],[815,"saree","শাড়ি","","noun","Clothes","A2"],[816,"lungi","লুঙ্গি","","noun","Clothes","A2"],[817,"sandals","স্যান্ডেল","","noun","Clothes","A2"],[818,"pocket","পকেট","","noun","Clothes","A2"],[819,"button","বোতাম","","noun","Clothes","A2"],[820,"zipper","জিপার","","noun","Clothes","A2"],[821,"cotton","সুতি কাপড়","","noun","Clothes","A2"],[822,"silk","রেশম","","noun","Clothes","A2"],[823,"gloves","দস্তানা","","noun","Clothes","A2"],[824,"tie","টাই","","noun","Clothes","A2"],[825,"suit","স্যুট","","noun","Clothes","A2"],[826,"necklace","হার","","noun","Clothes","A2"],[827,"watch","হাতঘড়ি","","noun","Clothes","A2"],[828,"bracelet","বালা","","noun","Clothes","A2"],[829,"sofa","সোফা","","noun","Home","A2"],[830,"cupboard","আলমারি","","noun","Home","A2"],[831,"shelf","তাক","","noun","Home","A2"],[832,"curtain","পর্দা","","noun","Home","A2"],[833,"carpet","কার্পেট","","noun","Home","A2"],[834,"stairs","সিঁড়ি","","noun","Home","A2"],[835,"balcony","বারান্দা","","noun","Home","A2"],[836,"garden","বাগান","","noun","Home","A2"],[837,"gate","ফটক","","noun","Home","A2"],[838,"yard","উঠোন","","noun","Home","A2"],[839,"bucket","বালতি","","noun","Home","A2"],[840,"pot","হাঁড়ি","","noun","Home","A2"],[841,"pan","কড়াই","","noun","Home","A2"],[842,"kettle","কেটলি","","noun","Home","A2"],[843,"stove","চুলা","","noun","Home","A2"],[844,"refrigerator","ফ্রিজ","","noun","Home","A2"],[845,"oven","ওভেন","","noun","Home","A2"],[846,"broom","ঝাড়ু","","noun","Home","A2"],[847,"rope","দড়ি","","noun","Home","A2"],[848,"ladder","মই","","noun","Home","A2"],[849,"hammer","হাতুড়ি","","noun","Home","A2"],[850,"nail","পেরেক","","noun","Home","A2"],[851,"scissors","কাঁচি","","noun","Home","A2"],[852,"needle","সুই","","noun","Home","A2"],[853,"candle","মোমবাতি","","noun","Home","A2"],[854,"match","দেশলাই","","noun","Home","A2"],[855,"toilet","টয়লেট","","noun","Home","A2"],[856,"tap","কল","","noun","Home","A2"],[857,"bulb","বাল্ব","","noun","Home","A2"],[858,"electricity","বিদ্যুৎ","","noun","Home","A2"],[859,"gas","গ্যাস","","noun","Home","A2"],[860,"pilot","পাইলট","","noun","Workplace","A2"],[861,"singer","গায়ক","","noun","Workplace","A2"],[862,"artist","শিল্পী","","noun","Workplace","A2"],[863,"writer","লেখক","","noun","Workplace","A2"],[864,"actor","অভিনেতা","","noun","Workplace","A2"],[865,"journalist","সাংবাদিক","","noun","Workplace","A2"],[866,"accountant","হিসাবরক্ষক","","noun","Workplace","A2"],[867,"dentist","দন্তচিকিৎসক","","noun","Workplace","A2"],[868,"pharmacist","ঔষধবিক্রেতা","","noun","Workplace","A2"],[869,"mechanic","মিস্ত্রি","","noun","Workplace","A2"],[870,"electrician","ইলেকট্রিশিয়ান","","noun","Workplace","A2"],[871,"tailor","দর্জি","","noun","Workplace","A2"],[872,"barber","নাপিত","","noun","Workplace","A2"],[873,"guard","প্রহরী","","noun","Workplace","A2"],[874,"soldier","সৈনিক","","noun","Workplace","A2"],[875,"judge","বিচারক","","noun","Workplace","A2"],[876,"scientist","বিজ্ঞানী","","noun","Workplace","A2"],[877,"businessman","ব্যবসায়ী","","noun","Workplace","A2"],[878,"fisherman","জেলে","","noun","Workplace","A2"],[879,"carpenter","কাঠমিস্ত্রি","","noun","Workplace","A2"],[880,"waiter","ওয়েটার","","noun","Workplace","A2"],[881,"clerk","কেরানি","","noun","Workplace","A2"],[882,"president","রাষ্ট্রপতি","","noun","Workplace","A2"],[883,"minister","মন্ত্রী","","noun","Workplace","A2"],[884,"citizen","নাগরিক","","noun","Workplace","A2"],[885,"volunteer","স্বেচ্ছাসেবক","","noun","Workplace","A2"],[886,"pharmacy","ফার্মেসি","","noun","Travel","A2"],[887,"post office","ডাকঘর","","noun","Travel","A2"],[888,"police station","থানা","","noun","Travel","A2"],[889,"court","আদালত","","noun","Travel","A2"],[890,"factory","কারখানা","","noun","Travel","A2"],[891,"stadium","স্টেডিয়াম","","noun","Travel","A2"],[892,"cinema","সিনেমা হল","","noun","Travel","A2"],[893,"museum","জাদুঘর","","noun","Travel","A2"],[894,"playground","খেলার মাঠ","","noun","Travel","A2"],[895,"bakery","বেকারি","","noun","Travel","A2"],[896,"supermarket","সুপারমার্কেট","","noun","Travel","A2"],[897,"bus stop","বাস স্টপ","","noun","Travel","A2"],[898,"traffic","যানজট","","noun","Travel","A2"],[899,"corner","মোড়","","noun","Travel","A2"],[900,"address","ঠিকানা","","noun","Travel","A2"],[901,"neighborhood","পাড়া","","noun","Travel","A2"],[902,"island","দ্বীপ","","noun","Travel","A2"],[903,"beach","সমুদ্রসৈকত","","noun","Travel","A2"],[904,"desert","মরুভূমি","","noun","Travel","A2"],[905,"waterfall","জলপ্রপাত","","noun","Travel","A2"],[906,"capital","রাজধানী","","noun","Travel","A2"],[907,"border","সীমান্ত","","noun","Travel","A2"],[908,"rabbit","খরগোশ","","noun","Nature","A2"],[909,"deer","হরিণ","","noun","Nature","A2"],[910,"lion","সিংহ","","noun","Nature","A2"],[911,"bear","ভালুক","","noun","Nature","A2"],[912,"fox","শিয়াল","","noun","Nature","A2"],[913,"wolf","নেকড়ে","","noun","Nature","A2"],[914,"rat","ইঁদুর","","noun","Nature","A2"],[915,"frog","ব্যাঙ","","noun","Nature","A2"],[916,"fly","মাছি","","noun","Nature","A2"],[917,"ant","পিঁপড়া","","noun","Nature","A2"],[918,"bee","মৌমাছি","","noun","Nature","A2"],[919,"spider","মাকড়সা","","noun","Nature","A2"],[920,"crow","কাক","","noun","Nature","A2"],[921,"parrot","টিয়া","","noun","Nature","A2"],[922,"eagle","ঈগল","","noun","Nature","A2"],[923,"owl","পেঁচা","","noun","Nature","A2"],[924,"sparrow","চড়ুই","","noun","Nature","A2"],[925,"peacock","ময়ূর","","noun","Nature","A2"],[926,"crocodile","কুমির","","noun","Nature","A2"],[927,"turtle","কচ্ছপ","","noun","Nature","A2"],[928,"whale","তিমি","","noun","Nature","A2"],[929,"wing","ডানা","","noun","Nature","A2"],[930,"tail","লেজ","","noun","Nature","A2"],[931,"nest","বাসা","","noun","Nature","A2"],[932,"seed","বীজ","","noun","Nature","A2"],[933,"root","শিকড়","","noun","Nature","A2"],[934,"branch","ডাল","","noun","Nature","A2"],[935,"rose","গোলাপ","","noun","Nature","A2"],[936,"lotus","পদ্ম","","noun","Nature","A2"],[937,"jasmine","বেলি ফুল","","noun","Nature","A2"],[938,"sand","বালি","","noun","Nature","A2"],[939,"stone","পাথর","","noun","Nature","A2"],[940,"soil","মাটি","","noun","Nature","A2"],[941,"rainbow","রামধনু","","noun","Nature","A2"],[942,"thunder","বজ্র","","noun","Nature","A2"],[943,"lightning","বিদ্যুৎচমক","","noun","Nature","A2"],[944,"fog","কুয়াশা","","noun","Nature","A2"],[945,"heat","তাপ","","noun","Nature","A2"],[946,"earthquake","ভূমিকম্প","","noun","Nature","A2"],[947,"wave","ঢেউ","","noun","Nature","A2"],[948,"bite","কামড়ানো","","verb","Actions","A2"],[949,"burn","পোড়ানো","","verb","Actions","A2"],[950,"chase","তাড়া করা","","verb","Actions","A2"],[951,"cheat","ঠকানো","","verb","Actions","A2"],[952,"copy","নকল করা","","verb","Actions","A2"],[953,"dig","খোঁড়া","","verb","Actions","A2"],[954,"dive","ডুব দেওয়া","","verb","Actions","A2"],[955,"escape","পালানো","","verb","Actions","A2"],[956,"fight","ঝগড়া করা","","verb","Actions","A2"],[957,"float","ভাসা","","verb","Actions","A2"],[958,"freeze","জমে যাওয়া","","verb","Actions","A2"],[959,"guess","অনুমান করা","","verb","Actions","A2"],[960,"hurt","আঘাত করা","","verb","Actions","A2"],[961,"kick","লাথি মারা","","verb","Actions","A2"],[962,"knock","কড়া নাড়া","","verb","Actions","A2"],[963,"lie","মিথ্যা বলা","","verb","Actions","A2"],[964,"marry","বিয়ে করা","","verb","Actions","A2"],[965,"melt","গলে যাওয়া","","verb","Actions","A2"],[966,"notice","লক্ষ করা","","verb","Actions","A2"],[967,"obey","মান্য করা","","verb","Actions","A2"],[968,"offer","প্রস্তাব দেওয়া","","verb","Actions","A2"],[969,"own","মালিক হওয়া","","verb","Actions","A2"],[970,"pack","গুছিয়ে নেওয়া","","verb","Actions","A2"],[971,"pick","তোলা","","verb","Actions","A2"],[972,"promise","প্রতিশ্রুতি দেওয়া","","verb","Actions","A2"],[973,"punish","শাস্তি দেওয়া","","verb","Actions","A2"],[974,"repair","মেরামত করা","","verb","Actions","A2"],[975,"scold","বকা দেওয়া","","verb","Actions","A2"],[976,"search","খোঁজা","","verb","Actions","A2"],[977,"shake","ঝাঁকানো","","verb","Actions","A2"],[978,"shine","জ্বলজ্বল করা","","verb","Actions","A2"],[979,"slip","পিছলে যাওয়া","","verb","Actions","A2"],[980,"smoke","ধূমপান করা","","verb","Actions","A2"],[981,"sneeze","হাঁচি দেওয়া","","verb","Actions","A2"],[982,"spell","বানান করা","","verb","Actions","A2"],[983,"steal","চুরি করা","","verb","Actions","A2"],[984,"stir","নাড়া","","verb","Actions","A2"],[985,"suffer","কষ্ট পাওয়া","","verb","Actions","A2"],[986,"swallow","গেলা","","verb","Actions","A2"],[987,"trust","ভরসা করা","","verb","Actions","A2"],[988,"turn","ঘোরা","","verb","Actions","A2"],[989,"warn","সতর্ক করা","","verb","Actions","A2"],[990,"weigh","ওজন করা","","verb","Actions","A2"],[991,"wish","ইচ্ছা করা","","verb","Actions","A2"],[992,"wrap","মোড়ানো","","verb","Actions","A2"],[993,"yawn","হাই তোলা","","verb","Actions","A2"],[994,"bend","বাঁকানো","","verb","Actions","A2"],[995,"ancient","প্রাচীন","","adjective","Adjectives","A2"],[996,"modern","আধুনিক","","adjective","Adjectives","A2"],[997,"local","স্থানীয়","","adjective","Adjectives","A2"],[998,"foreign","বিদেশি","","adjective","Adjectives","A2"],[999,"public","সর্বজনীন","","adjective","Adjectives","A2"],[1000,"private","ব্যক্তিগত","","adjective","Adjectives","A2"],[1001,"common","সাধারণ","","adjective","Adjectives","A2"],[1002,"special","বিশেষ","","adjective","Adjectives","A2"],[1003,"normal","স্বাভাবিক","","adjective","Adjectives","A2"],[1004,"natural","প্রাকৃতিক","","adjective","Adjectives","A2"],[1005,"simple","সরল","","adjective","Adjectives","A2"],[1006,"clear","স্পষ্ট","","adjective","Adjectives","A2"],[1007,"correct","শুদ্ধ","","adjective","Adjectives","A2"],[1008,"perfect","নিখুঁত","","adjective","Adjectives","A2"],[1009,"total","মোট","","adjective","Adjectives","A2"],[1010,"final","চূড়ান্ত","","adjective","Adjectives","A2"],[1011,"main","প্রধান","","adjective","Adjectives","A2"],[1012,"real","আসল","","adjective","Adjectives","A2"],[1013,"silent","নীরব","","adjective","Adjectives","A2"],[1014,"smooth","মসৃণ","","adjective","Adjectives","A2"],[1015,"rough","অমসৃণ","","adjective","Adjectives","A2"],[1016,"sharp","ধারালো","","adjective","Adjectives","A2"],[1017,"flat","সমতল","","adjective","Adjectives","A2"],[1018,"round","গোল","","adjective","Adjectives","A2"],[1019,"narrow","সরু","","adjective","Adjectives","A2"],[1020,"loose","ঢিলা","","adjective","Adjectives","A2"],[1021,"tight","আঁটসাঁট","","adjective","Adjectives","A2"],[1022,"soft","নরম","","adjective","Adjectives","A2"],[1023,"hard","শক্ত","","adjective","Adjectives","A2"],[1024,"rare","বিরল","","adjective","Adjectives","A2"],[1025,"valuable","মূল্যবান","","adjective","Adjectives","A2"],[1026,"useful","উপকারী","","adjective","Adjectives","A2"],[1027,"useless","অকেজো","","adjective","Adjectives","A2"],[1028,"harmful","ক্ষতিকর","","adjective","Adjectives","A2"],[1029,"equal","সমান","","adjective","Adjectives","A2"],[1030,"certain","নিশ্চিত","","adjective","Adjectives","A2"],[1031,"foolish","বোকা","","adjective","Adjectives","A2"],[1032,"gentle","কোমল","","adjective","Adjectives","A2"],[1033,"rude","অভদ্র","","adjective","Adjectives","A2"],[1034,"cruel","নিষ্ঠুর","","adjective","Adjectives","A2"],[1035,"innocent","নির্দোষ","","adjective","Adjectives","A2"],[1036,"guilty","দোষী","","adjective","Adjectives","A2"],[1037,"alive","জীবিত","","adjective","Adjectives","A2"],[1038,"dead","মৃত","","adjective","Adjectives","A2"],[1039,"awake","জাগ্রত","","adjective","Adjectives","A2"],[1040,"asleep","ঘুমন্ত","","adjective","Adjectives","A2"],[1041,"went","গিয়েছিল","","verb","Verbs","A2"],[1042,"came","এসেছিল","","verb","Verbs","A2"],[1043,"saw","দেখেছিল","","verb","Verbs","A2"],[1044,"ate","খেয়েছিল","","verb","Verbs","A2"],[1045,"drank","পান করেছিল","","verb","Verbs","A2"],[1046,"wrote","লিখেছিল","","verb","Verbs","A2"],[1047,"took","নিয়েছিল","","verb","Verbs","A2"],[1048,"gave","দিয়েছিল","","verb","Verbs","A2"],[1049,"made","বানিয়েছিল","","verb","Verbs","A2"],[1050,"said","বলেছিল","","verb","Verbs","A2"],[1051,"told","জানিয়েছিল","","verb","Verbs","A2"],[1052,"knew","জানত","","verb","Verbs","A2"],[1053,"thought","ভেবেছিল","","verb","Verbs","A2"],[1054,"bought","কিনেছিল","","verb","Verbs","A2"],[1055,"sold","বিক্রি করেছিল","","verb","Verbs","A2"],[1056,"ran","দৌড়েছিল","","verb","Verbs","A2"],[1057,"sat","বসেছিল","","verb","Verbs","A2"],[1058,"stood","দাঁড়িয়েছিল","","verb","Verbs","A2"],[1059,"slept","ঘুমিয়েছিল","","verb","Verbs","A2"],[1060,"woke","জেগেছিল","","verb","Verbs","A2"],[1061,"met","দেখা করেছিল","","verb","Verbs","A2"],[1062,"found","খুঁজে পেয়েছিল","","verb","Verbs","A2"],[1063,"lost","হারিয়েছিল","","verb","Verbs","A2"],[1064,"began","শুরু করেছিল","","verb","Verbs","A2"],[1065,"brought","এনেছিল","","verb","Verbs","A2"],[1066,"sent","পাঠিয়েছিল","","verb","Verbs","A2"],[1067,"spoke","কথা বলেছিল","","verb","Verbs","A2"],[1068,"heard","শুনেছিল","","verb","Verbs","A2"],[1069,"felt","অনুভব করেছিল","","verb","Verbs","A2"],[1070,"paid","টাকা দিয়েছিল","","verb","Verbs","A2"],[1071,"won","জিতেছিল","","verb","Verbs","A2"],[1072,"did","করেছিল","","verb","Verbs","A2"],[1073,"was","ছিল (একবচন)","","verb","Verbs","A2"],[1074,"were","ছিল (বহুবচন)","","verb","Verbs","A2"],[1075,"had","ছিল / ছিল আছে","","verb","Verbs","A2"],[1076,"been","হয়েছে","","verb","Verbs","A2"],[1077,"gone","গেছে","","verb","Verbs","A2"],[1078,"eaten","খাওয়া হয়েছে","","verb","Verbs","A2"],[1079,"seen","দেখা হয়েছে","","verb","Verbs","A2"],[1080,"written","লেখা হয়েছে","","verb","Verbs","A2"],[1081,"I want to","আমি চাই…","","phrase","Phrases","A2"],[1082,"I like to","আমি পছন্দ করি…","","phrase","Phrases","A2"],[1083,"I have to","আমাকে করতে হবে","","phrase","Phrases","A2"],[1084,"I am going to","আমি করতে যাচ্ছি","","phrase","Phrases","A2"],[1085,"I cannot","আমি পারি না","","phrase","Phrases","A2"],[1086,"I did not","আমি করিনি","","phrase","Phrases","A2"],[1087,"Did you","তুমি কি করেছিলে?","","phrase","Phrases","A2"],[1088,"Will you","তুমি কি করবে?","","phrase","Phrases","A2"],[1089,"There is","আছে (একবচন)","","phrase","Phrases","A2"],[1090,"There are","আছে (বহুবচন)","","phrase","Phrases","A2"],[1091,"Let me","আমাকে করতে দিন","","phrase","Phrases","A2"],[1092,"Let us","চলুন আমরা","","phrase","Phrases","A2"],[1093,"Would you like","আপনি কি চান?","","phrase","Phrases","A2"],[1094,"Could you","আপনি কি করতে পারেন?","","phrase","Phrases","A2"],[1095,"May I","আমি কি পারি?","","phrase","Phrases","A2"],[1096,"I used to","আমি আগে করতাম","","phrase","Phrases","A2"],[1097,"It is time to","এখন … করার সময়","","phrase","Phrases","A2"],[1098,"How about","…কেমন হয়?","","phrase","Phrases","A2"],[1099,"What about","…সম্পর্কে কী?","","phrase","Phrases","A2"],[1100,"I feel like","আমার ইচ্ছে করছে","","phrase","Phrases","A2"],[1101,"I look forward to","আমি অপেক্ষায় আছি","","phrase","Phrases","A2"],[1102,"As soon as possible","যত দ্রুত সম্ভব","","phrase","Phrases","A2"],[1103,"In my opinion","আমার মতে","","phrase","Phrases","A2"],[1104,"For example","যেমন","","phrase","Phrases","A2"],[1105,"In fact","আসলে","","phrase","Phrases","A2"],[1106,"By the way","প্রসঙ্গত","","phrase","Phrases","A2"],[1107,"At the moment","এই মুহূর্তে","","phrase","Phrases","A2"],[1108,"On time","সময়মতো","","phrase","Phrases","A2"],[1109,"In the end","শেষে","","phrase","Phrases","A2"],[1110,"First of all","প্রথমত","","phrase","Phrases","A2"],[1111,"distance","দূরত্ব","","noun","Life","A2"],[1112,"speed","গতি","","noun","Life","A2"],[1113,"weight","ওজন","","noun","Life","A2"],[1114,"height","উচ্চতা","","noun","Life","A2"],[1115,"shape","আকার","","noun","Life","A2"],[1116,"line","রেখা","","noun","Life","A2"],[1117,"circle","বৃত্ত","","noun","Life","A2"],[1118,"top","চূড়া","","noun","Life","A2"],[1119,"bottom","তলদেশ","","noun","Life","A2"],[1120,"side","পাশ","","noun","Life","A2"],[1121,"center","কেন্দ্র","","noun","Life","A2"],[1122,"edge","কিনারা","","noun","Life","A2"],[1123,"part","অংশ","","noun","Life","A2"],[1124,"half","অর্ধেক","","noun","Life","A2"],[1125,"group","দল","","noun","Life","A2"],[1126,"list","তালিকা","","noun","Life","A2"],[1127,"page","পৃষ্ঠা","","noun","Life","A2"],[1128,"letter","চিঠি","","noun","Life","A2"],[1129,"number","সংখ্যা","","noun","Life","A2"],[1130,"noise","আওয়াজ","","noun","Life","A2"],[1131,"shadow","ছায়া","","noun","Life","A2"],[1132,"dust","ধুলো","","noun","Life","A2"],[1133,"mud","কাদা","","noun","Life","A2"],[1134,"garbage","আবর্জনা","","noun","Life","A2"],[1135,"accident","দুর্ঘটনা","","noun","Life","A2"],[1136,"emergency","জরুরি অবস্থা","","noun","Life","A2"],[1137,"danger","বিপদ","","noun","Life","A2"],[1138,"exercise","ব্যায়াম","","noun","Life","A2"],[1139,"ambulance","অ্যাম্বুলেন্স","","noun","Life","A2"],[1140,"appointment","অ্যাপয়েন্টমেন্ট","","noun","Life","A2"],[1141,"prescription","প্রেসক্রিপশন","","noun","Life","A2"],[1142,"tablet","ট্যাবলেট","","noun","Life","A2"],[1143,"injection","ইনজেকশন","","noun","Life","A2"],[1144,"surgery","অস্ত্রোপচার","","noun","Life","A2"],[1145,"disease","রোগ","","noun","Life","A2"],[1146,"virus","ভাইরাস","","noun","Life","A2"],[1147,"vaccine","টিকা","","noun","Life","A2"],[1148,"allergy","অ্যালার্জি","","noun","Life","A2"],[1149,"pressure","চাপ","","noun","Life","A2"],[1150,"stress","মানসিক চাপ","","noun","Life","A2"],[1151,"habit","অভ্যাস","","noun","Life","A2"],[1152,"attitude","মনোভাব","","noun","Life","A2"],[1153,"choice","পছন্দ","","noun","Life","A2"],[1154,"chance","সম্ভাবনা","","noun","Life","A2"],[1155,"risk","ঝুঁকি","","noun","Life","A2"],[1156,"failure","ব্যর্থতা","","noun","Life","A2"],[1157,"effort","প্রচেষ্টা","","noun","Life","A2"],[1158,"courage","সাহস","","noun","Life","A2"],[1159,"fear","ভয়","","noun","Life","A2"],[1160,"anger","রাগ","","noun","Life","A2"],[1161,"joy","আনন্দ","","noun","Life","A2"],[1162,"sorrow","দুঃখ","","noun","Life","A2"],[1163,"friendship","বন্ধুত্ব","","noun","Life","A2"],[1164,"respect","সম্মান","","noun","Life","A2"],[1165,"duty","কর্তব্য","","noun","Life","A2"],[1166,"knowledge","জ্ঞান","","noun","Life","A2"],[1167,"wisdom","প্রজ্ঞা","","noun","Life","A2"],[1168,"memory","স্মৃতি","","noun","Life","A2"],[1169,"future","ভবিষ্যৎ","","noun","Life","A2"],[1170,"past","অতীত","","noun","Life","A2"],[1171,"present","বর্তমান","","noun","Life","A2"],[1172,"moment","মুহূর্ত","","noun","Life","A2"],[1173,"century","শতাব্দী","","noun","Life","A2"],[1174,"season","ঋতু","","noun","Life","A2"],[1175,"date","তারিখ","","noun","Life","A2"],[1176,"calendar","ক্যালেন্ডার","","noun","Life","A2"],[1177,"give up","হাল ছেড়ে দেওয়া","","phrasal verb","Phrasal","B1"],[1178,"look for","খোঁজা","","phrasal verb","Phrasal","B1"],[1179,"look after","দেখাশোনা করা","","phrasal verb","Phrasal","B1"],[1180,"turn on","চালু করা","","phrasal verb","Phrasal","B1"],[1181,"turn off","বন্ধ করা","","phrasal verb","Phrasal","B1"],[1182,"get up","ঘুম থেকে ওঠা","","phrasal verb","Phrasal","B1"],[1183,"sit down","বসে পড়া","","phrasal verb","Phrasal","B1"],[1184,"stand up","উঠে দাঁড়ানো","","phrasal verb","Phrasal","B1"],[1185,"come back","ফিরে আসা","","phrasal verb","Phrasal","B1"],[1186,"go out","বাইরে যাওয়া","","phrasal verb","Phrasal","B1"],[1187,"pick up","তুলে নেওয়া","","phrasal verb","Phrasal","B1"],[1188,"put on","পরা","","phrasal verb","Phrasal","B1"],[1189,"take off","খুলে ফেলা","","phrasal verb","Phrasal","B1"],[1190,"find out","জানতে পারা","","phrasal verb","Phrasal","B1"],[1191,"wake up","ঘুম থেকে জাগা","","phrasal verb","Phrasal","B1"],[1192,"fill in","পূরণ করা","","phrasal verb","Phrasal","B1"],[1193,"run out of","ফুরিয়ে যাওয়া","","phrasal verb","Phrasal","B1"],[1194,"get along with","মিলেমিশে চলা","","phrasal verb","Phrasal","B1"],[1195,"carry on","চালিয়ে যাওয়া","","phrasal verb","Phrasal","B1"],[1196,"set up","প্রতিষ্ঠা করা","","phrasal verb","Phrasal","B1"],[1197,"figure out","বুঝে ফেলা","","phrasal verb","Phrasal","B1"],[1198,"break down","নষ্ট হয়ে যাওয়া","","phrasal verb","Phrasal","B1"],[1199,"call off","বাতিল করা","","phrasal verb","Phrasal","B1"],[1200,"check in","নিবন্ধন করা","","phrasal verb","Phrasal","B1"],[1201,"check out","বের হওয়া","","phrasal verb","Phrasal","B1"],[1202,"hang out","আড্ডা দেওয়া","","phrasal verb","Phrasal","B1"],[1203,"show up","হাজির হওয়া","","phrasal verb","Phrasal","B1"],[1204,"try on","পরে দেখা","","phrasal verb","Phrasal","B1"],[1205,"work out","ব্যায়াম করা","","phrasal verb","Phrasal","B1"],[1206,"give back","ফেরত দেওয়া","","phrasal verb","Phrasal","B1"],[1207,"throw away","ফেলে দেওয়া","","phrasal verb","Phrasal","B1"],[1208,"calm down","শান্ত হওয়া","","phrasal verb","Phrasal","B1"],[1209,"slow down","গতি কমানো","","phrasal verb","Phrasal","B1"],[1210,"speed up","গতি বাড়ানো","","phrasal verb","Phrasal","B1"],[1211,"moreover","তাছাড়া","","grammar","Grammar","A2"],[1212,"meanwhile","ইতিমধ্যে","","grammar","Grammar","A2"],[1213,"otherwise","অন্যথায়","","grammar","Grammar","A2"],[1214,"besides","এছাড়াও","","grammar","Grammar","A2"],[1215,"finally","অবশেষে","","grammar","Grammar","A2"],[1216,"suddenly","হঠাৎ","","grammar","Grammar","A2"],[1217,"luckily","ভাগ্যক্রমে","","grammar","Grammar","A2"],[1218,"unfortunately","দুর্ভাগ্যবশত","","grammar","Grammar","A2"],[1219,"actually","আসলে","","grammar","Grammar","A2"],[1220,"probably","সম্ভবত","","grammar","Grammar","A2"],[1221,"certainly","নিশ্চয়ই","","grammar","Grammar","A2"],[1222,"especially","বিশেষ করে","","grammar","Grammar","A2"],[1223,"exactly","ঠিক তাই","","grammar","Grammar","A2"],[1224,"completely","সম্পূর্ণভাবে","","grammar","Grammar","A2"],[1225,"carefully","সাবধানে","","grammar","Grammar","A2"],[1226,"quickly","তাড়াতাড়ি","","grammar","Grammar","A2"],[1227,"slowly","ধীরে","","grammar","Grammar","A2"],[1228,"easily","সহজে","","grammar","Grammar","A2"],[1229,"hardly","কদাচিৎ","","grammar","Grammar","A2"],[1230,"nearly","প্রায়","","grammar","Grammar","A2"],[1231,"recently","সম্প্রতি","","grammar","Grammar","A2"],[1232,"immediately","সঙ্গে সঙ্গে","","grammar","Grammar","A2"],[1233,"forever","চিরকাল","","grammar","Grammar","A2"],[1234,"anymore","আর (না)","","grammar","Grammar","A2"],[1235,"anywhere","যেকোনো জায়গায়","","grammar","Grammar","A2"],[1236,"somewhere","কোথাও","","grammar","Grammar","A2"],[1237,"nowhere","কোথাও না","","grammar","Grammar","A2"],[1238,"whenever","যখনই","","grammar","Grammar","A2"],[1239,"whatever","যাই হোক","","grammar","Grammar","A2"],[1240,"whether","কিনা","","grammar","Grammar","A2"],[1241,"unless","যদি না","","grammar","Grammar","A2"],[1242,"since","যেহেতু / থেকে","","grammar","Grammar","A2"],[1243,"while","যখন","","grammar","Grammar","A2"],[1244,"than","চেয়ে","","grammar","Grammar","A2"],[1245,"so","তাই","","grammar","Grammar","A2"],[1246,"then","তারপর","","grammar","Grammar","A2"],[1247,"either","যেকোনো একটি","","grammar","Grammar","A2"],[1248,"neither","কোনোটিই না","","grammar","Grammar","A2"],[1249,"newspaper","সংবাদপত্র","","noun","Travel","A2"],[1250,"magazine","ম্যাগাজিন","","noun","Travel","A2"],[1251,"headline","শিরোনাম","","noun","Travel","A2"],[1252,"advertisement","বিজ্ঞাপন","","noun","Travel","A2"],[1253,"luggage","মালপত্র","","noun","Travel","A2"],[1254,"suitcase","সুটকেস","","noun","Travel","A2"],[1255,"route","পথ","","noun","Travel","A2"],[1256,"journey","যাত্রা","","noun","Travel","A2"],[1257,"tour","ভ্রমণ","","noun","Travel","A2"],[1258,"tourist","পর্যটক","","noun","Travel","A2"],[1259,"guide","গাইড","","noun","Travel","A2"],[1260,"souvenir","স্মারক","","noun","Travel","A2"],[1261,"reservation","বুকিং","","noun","Travel","A2"],[1262,"refund","ফেরত","","noun","Travel","A2"],[1263,"complaint","অভিযোগ","","noun","Travel","A2"],[1264,"service","সেবা","","noun","Travel","A2"],[1265,"tip","বখশিশ","","noun","Travel","A2"],[1266,"appetite","ক্ষুধা","","noun","Food","A2"],[1267,"recipe","রান্নার পদ্ধতি","","noun","Food","A2"],[1268,"ingredient","উপাদান","","noun","Food","A2"],[1269,"flavor","স্বাদ","","noun","Food","A2"],[1270,"dessert","মিষ্টান্ন","","noun","Food","A2"],[1271,"beverage","পানীয়","","noun","Food","A2"],[1272,"vegetarian","নিরামিষভোজী","","noun","Food","A2"],[1273,"noodles","নুডলস","","noun","Food","A2"],[1274,"sandwich","স্যান্ডউইচ","","noun","Food","A2"],[1275,"pizza","পিৎজা","","noun","Food","A2"],[1276,"burger","বার্গার","","noun","Food","A2"],[1277,"ice cream","আইসক্রিম","","noun","Food","A2"],[1278,"chocolate","চকলেট","","noun","Food","A2"],[1279,"honey","মধু","","noun","Food","A2"],[1280,"pepper","মরিচ","","noun","Food","A2"],[1281,"spice","মশলা","","noun","Food","A2"],[1282,"curry","তরকারি","","noun","Food","A2"],[1283,"yogurt","দই","","noun","Food","A2"],[1284,"sweets","মিষ্টি","","noun","Food","A2"],[1285,"Adapt","খাপ খাইয়ে নেওয়া","","verb","Actions","B1"],[1286,"Admire","প্রশংসা করা","","verb","Actions","B1"],[1287,"Admit","স্বীকার করা","","verb","Actions","A2"],[1288,"Advise","পরামর্শ দেওয়া","","verb","Actions","A2"],[1289,"Afford","সামর্থ্য থাকা","","verb","Actions","B1"],[1290,"Announce","ঘোষণা করা","","verb","Actions","B1"],[1291,"Apologize","ক্ষমা চাওয়া","","verb","Actions","A2"],[1292,"Appreciate","কদর করা","","verb","Actions","B1"],[1293,"Arrange","ব্যবস্থা করা","","verb","Actions","A2"],[1294,"Arrest","গ্রেপ্তার করা","","verb","Actions","A2"],[1295,"Assist","সহায়তা করা","","verb","Actions","B1"],[1296,"Attack","আক্রমণ করা","","verb","Actions","A2"],[1297,"Attend","উপস্থিত থাকা","","verb","Actions","A2"],[1298,"Attract","আকর্ষণ করা","","verb","Actions","B1"],[1299,"Avoid","এড়িয়ে চলা","","verb","Actions","A2"],[1300,"Battle","যুদ্ধ করা","","verb","Actions","B1"],[1301,"Behave","আচরণ করা","","verb","Actions","A2"],[1302,"Belong","অধীনে থাকা","","verb","Actions","A2"],[1303,"Bless","আশীর্বাদ করা","","verb","Actions","A2"],[1304,"Breathe","শ্বাস নেওয়া","","verb","Actions","A2"],[1305,"Bury","দাফন করা","","verb","Actions","B1"],[1306,"Calculate","গণনা করা","","verb","Actions","B1"],[1307,"Cancel","বাতিল করা","","verb","Actions","A2"],[1308,"Capture","বন্দি করা","","verb","Actions","B1"],[1309,"Charge","মূল্য বা ফি ধরা","","verb","Actions","A2"],[1310,"Chew","চিবানো","","verb","Actions","A2"],[1311,"Clap","হাততালি দেওয়া","","verb","Actions","A1"],[1312,"Combine","একত্রিত করা","","verb","Actions","B1"],[1313,"Comfort","সান্ত্বনা দেওয়া","","verb","Actions","B1"],[1314,"Command","আদেশ দেওয়া","","verb","Actions","B1"],[1315,"Communicate","যোগাযোগ করা","","verb","Actions","B1"],[1316,"Compete","প্রতিযোগিতা করা","","verb","Actions","B1"],[1317,"Complain","অভিযোগ করা","","verb","Actions","A2"],[1318,"Complete","সম্পন্ন করা","","verb","Actions","A2"],[1319,"Concentrate","মনোযোগ দেওয়া","","verb","Actions","B1"],[1320,"Conclude","উপসংহার টানা","","verb","Actions","B1"],[1321,"Confess","দোষ স্বীকার করা","","verb","Actions","B2"],[1322,"Confirm","নিশ্চিত করা","","verb","Actions","A2"],[1323,"Connect","যুক্ত করা","","verb","Actions","A2"],[1324,"Consider","বিবেচনা করা","","verb","Actions","B1"],[1325,"Consist","গঠিত হওয়া","","verb","Actions","B1"],[1326,"Contain","ধারণ করা","","verb","Actions","A2"],[1327,"Continue","চালিয়ে যাওয়া","","verb","Actions","A2"],[1328,"Control","নিয়ন্ত্রণ করা","","verb","Actions","A2"],[1329,"Convince","প্ররোচিত বা সম্মত করা","","verb","Actions","B2"],[1330,"Crash","ধাক্কা খাওয়া বা বিধ্বস্ত হওয়া","","verb","Actions","B1"],[1331,"Crawl","হামাগুড়ি দেওয়া","","verb","Actions","A2"],[1332,"Cure","আরোগ্য করা","","verb","Actions","B1"],[1333,"Damage","ক্ষতিগ্রস্ত করা","","verb","Actions","A2"],[1334,"Dare","সাহস করা","","verb","Actions","B1"],[1335,"Deceive","প্রতারণা করা","","verb","Actions","B2"],[1336,"Declare","ঘোষণা করা","","verb","Actions","B1"],[1337,"Decorate","সাজানো","","verb","Actions","A2"],[1338,"Decrease","হ্রাস করা","","verb","Actions","B1"],[1339,"Defend","রক্ষা করা","","verb","Actions","B1"],[1340,"Delay","দেরি করানো","","verb","Actions","A2"],[1341,"Deliver","পৌঁছে দেওয়া","","verb","Actions","A2"],[1342,"Demand","দাবি করা","","verb","Actions","B1"],[1343,"Deny","অস্বীকার করা","","verb","Actions","B1"],[1344,"Depend","নির্ভর করা","","verb","Actions","A2"],[1345,"Deposit","জমা রাখা","","verb","Actions","A2"],[1346,"Describe","বর্ণনা করা","","verb","Actions","A2"],[1347,"Deserve","যোগ্য হওয়া","","verb","Actions","B1"],[1348,"Destroy","ধ্বংস করা","","verb","Actions","A2"],[1349,"Detect","শনাক্ত করা","","verb","Actions","B2"],[1350,"Determine","সংকল্প বা নির্ধারণ করা","","verb","Actions","B2"],[1351,"Develop","উন্নত করা","","verb","Actions","B1"],[1352,"Disappear","অদৃশ্য হওয়া","","verb","Actions","B1"],[1353,"Discover","আবিষ্কার করা","","verb","Actions","A2"],[1354,"Discuss","আলোচনা করা","","verb","Actions","A2"],[1355,"Distribute","বিতরণ করা","","verb","Actions","B1"],[1356,"Disturb","বিরক্ত করা","","verb","Actions","A2"],[1357,"Doubt","সন্দেহ করা","","verb","Actions","A2"],[1358,"Drag","টেনে হিঁচড়ে নেওয়া","","verb","Actions","B1"],[1359,"Drown","পানিতে ডুবে যাওয়া","","verb","Actions","B1"],[1360,"Educate","শিক্ষিত করা","","verb","Actions","B1"],[1361,"Elect","নির্বাচিত করা","","verb","Actions","B1"],[1362,"Encourage","উৎসাহিত করা","","verb","Actions","B1"],[1363,"Endure","সহ্য করা","","verb","Actions","B2"],[1364,"Engage","যুক্ত হওয়া","","verb","Actions","B2"],[1365,"Ensure","নিশ্চিত করা","","verb","Actions","B1"],[1366,"Entertain","বিনোদন দেওয়া","","verb","Actions","B1"],[1367,"Examine","পরীক্ষা করা","","verb","Actions","A2"],[1368,"Exchange","বিনিময় করা","","verb","Actions","A2"],[1369,"Excite","উত্তেজিত করা","","verb","Actions","B1"],[1370,"Exclude","বাদ দেওয়া","","verb","Actions","B2"],[1371,"Excuse","মাফ করা","","verb","Actions","A1"],[1372,"Exist","অস্তিত্ব থাকা","","verb","Actions","B1"],[1373,"Expand","প্রসারিত করা","","verb","Actions","B1"],[1374,"Expect","প্রত্যাশা করা","","verb","Actions","A2"],[1375,"Explode","বিস্ফোরিত হওয়া","","verb","Actions","B1"],[1376,"Explore","অন্বেষণ করা","","verb","Actions","B1"],[1377,"Export","রপ্তানি করা","","verb","Actions","B1"],[1378,"Express","প্রকাশ করা","","verb","Actions","A2"],[1379,"Extend","বৃদ্ধি করা","","verb","Actions","B1"],[1380,"Fade","বিবর্ণ হওয়া","","verb","Actions","B1"],[1381,"Fail","ব্যর্থ হওয়া","","verb","Actions","A1"],[1382,"Faint","অজ্ঞান হওয়া","","verb","Actions","B1"],[1383,"Feed","খাওয়ানো","","verb","Actions","A2"],[1384,"Flow","প্রবাহিত হওয়া","","verb","Actions","A2"],[1385,"Fold","ভাঁজ করা","","verb","Actions","A2"],[1386,"Forbid","নিষেধ করা","","verb","Actions","B1"],[1387,"Forgive","ক্ষমা করা","","verb","Actions","A2"],[1388,"Frighten","ভয় দেখানো","","verb","Actions","B1"],[1389,"Gain","অর্জন করা","","verb","Actions","B1"],[1390,"Gather","একত্রিত করা","","verb","Actions","B1"],[1391,"Glance","এক পলক তাকানো","","verb","Actions","B1"],[1392,"Glow","উজ্জ্বল হওয়া","","verb","Actions","B1"],[1393,"Govern","শাসন করা","","verb","Actions","B1"],[1394,"Grab","খপ করে ধরা","","verb","Actions","A2"],[1395,"Greet","অভিবাদন জানানো","","verb","Actions","A1"],[1396,"Groan","কাতরানো","","verb","Actions","B2"],[1397,"Handle","সামলানো","","verb","Actions","A2"],[1398,"Hang","ঝোলানো","","verb","Actions","A2"],[1399,"Harm","ক্ষতি করা","","verb","Actions","A2"],[1400,"Harvest","ফসল তোলা","","verb","Actions","B1"],[1401,"Haunt","তাড়িয়ে বেড়ানো","","verb","Actions","B2"],[1402,"Heal","সেরে ওঠা","","verb","Actions","B1"],[1403,"Hesitate","দ্বিধা করা","","verb","Actions","B1"],[1404,"Hunt","শিকার করা","","verb","Actions","A2"],[1405,"Identify","শনাক্ত করা","","verb","Actions","A2"],[1406,"Ignore","উপেক্ষা করা","","verb","Actions","A2"],[1407,"Imagine","কল্পনা করা","","verb","Actions","A2"],[1408,"Imitate","অনুকরণ করা","","verb","Actions","B1"],[1409,"Import","আমদানি করা","","verb","Actions","B1"],[1410,"Impress","মুগ্ধ করা","","verb","Actions","B1"],[1411,"Inform","অবহিত করা","","verb","Actions","A2"],[1412,"Injure","আঘাত করা","","verb","Actions","A2"],[1413,"Insist","জেদ করা","","verb","Actions","B1"],[1414,"Inspire","অনুপ্রাণিত করা","","verb","Actions","B1"],[1415,"Install","সংস্থাপন করা","","verb","Actions","A2"],[1416,"Insult","অপমান করা","","verb","Actions","B1"],[1417,"Intend","মনস্থ করা","","verb","Actions","B1"],[1418,"Interrupt","বাধাদান করা","","verb","Actions","B1"],[1419,"Introduce","পরিচয় করিয়ে দেওয়া","","verb","Actions","A1"],[1420,"Invent","উদ্ভাবন করা","","verb","Actions","A2"],[1421,"Invest","বিনিয়োগ করা","","verb","Actions","B1"],[1422,"Irritate","বিরক্ত করা","","verb","Actions","B2"],[1423,"Jog","ধীরে দৌড়ানো","","verb","Actions","A1"],[1424,"Kiss","চুমু খাওয়া","","verb","Actions","A1"],[1425,"Kneel","হাঁটু গেড়ে বসা","","verb","Actions","A2"],[1426,"Knit","বোনা","","verb","Actions","A2"],[1427,"Launch","উদ্বোধন করা বা শুরু করা","","verb","Actions","B1"],[1428,"Lead","নেতৃত্ব দেওয়া","","verb","Actions","A2"],[1429,"Leak","ছিদ্র দিয়ে পড়া","","verb","Actions","B1"],[1430,"Lean","হেলান দেওয়া","","verb","Actions","B1"],[1431,"Leap","উঁচু লাফ দেওয়া","","verb","Actions","B1"],[1432,"Liberate","মুক্ত করা","","verb","Actions","B2"],[1433,"Lift","উপরে তোলা","","verb","Actions","A2"],[1434,"Load","বোঝাই করা","","verb","Actions","A2"],[1435,"Locate","খুঁজে পাওয়া বা স্থাপন করা","","verb","Actions","B1"],[1436,"Lock","তালা লাগানো","","verb","Actions","A1"],[1437,"Maintain","বজায় রাখা","","verb","Actions","B1"],[1438,"Manufacture","কারখানায় তৈরি করা","","verb","Actions","B1"],[1439,"Mend","মেরামত করা","","verb","Actions","B1"],[1440,"Mention","উল্লেখ করা","","verb","Actions","A2"],[1441,"Mind","মনোযোগ দেওয়া বা কিছু মনে করা","","verb","Actions","A2"],[1442,"Misunderstand","ভুল বোঝা","","verb","Actions","A2"],[1443,"Mourn","শোক প্রকাশ করা","","verb","Actions","B2"],[1444,"Multiply","গুণ করা বা বৃদ্ধি পাওয়া","","verb","Actions","B1"],[1445,"Murder","হত্যা করা","","verb","Actions","A2"],[1446,"Nod","মাথা নেড়ে সম্মতি দেওয়া","","verb","Actions","A2"],[1447,"Object","আপত্তি করা","","verb","Actions","B1"],[1448,"Observe","পর্যবেক্ষণ করা","","verb","Actions","B1"],[1449,"Obtain","অর্জন করা","","verb","Actions","B1"],[1450,"Occupy","দখল করা","","verb","Actions","B1"],[1451,"Occur","ঘটা","","verb","Actions","B1"],[1452,"Offend","মনে কষ্ট দেওয়া","","verb","Actions","B2"],[1453,"Operate","চালনা বা অস্ত্রোপচার করা","","verb","Actions","A2"],[1454,"Oppose","বিরোধিতা করা","","verb","Actions","B1"],[1455,"Organize","আয়োজন করা","","verb","Actions","A2"],[1456,"Overcome","কাটিয়ে ওঠা","","verb","Actions","B2"],[1457,"Owe","ঋণী থাকা","","verb","Actions","B1"],[1458,"Paint","রং করা","","verb","Actions","A1"],[1459,"Pardon","মাফ করা","","verb","Actions","A1"],[1460,"Participate","অংশগ্রহণ করা","","verb","Actions","B1"],[1461,"Pause","সাময়িক থামা","","verb","Actions","A2"],[1462,"Perform","সম্পাদন করা বা অভিনয় করা","","verb","Actions","B1"],[1463,"Permit","অনুমতি দেওয়া","","verb","Actions","B1"],[1464,"Persuade","প্ররোচিত করা","","verb","Actions","B2"],[1465,"Plant","গাছ লাগানো","","verb","Actions","A1"],[1466,"Plug","প্লাগ লাগানো","","verb","Actions","A1"],[1467,"Polish","পালিশ বা চকচকে করা","","verb","Actions","A2"],[1468,"Pollute","দূষিত করা","","verb","Actions","B1"],[1469,"Praise","প্রশংসা করা","","verb","Actions","A2"],[1470,"Predict","ভবিষ্যদ্বাণী করা","","verb","Actions","B1"],[1471,"Prefer","অধিক পছন্দ করা","","verb","Actions","A2"],[1472,"Prescribe","প্রেসক্রিপশন দেওয়া","","verb","Actions","B1"],[1473,"Preserve","সংরক্ষণ করা","","verb","Actions","B1"],[1474,"Prevent","প্রতিরোধ করা","","verb","Actions","B1"],[1475,"Print","মুদ্রণ করা","","verb","Actions","A2"],[1476,"Produce","উৎপাদন করা","","verb","Actions","A2"],[1477,"Prohibit","নিষিদ্ধ করা","","verb","Actions","B1"],[1478,"Protest","প্রতিবাদ করা","","verb","Actions","B1"],[1479,"Prove","প্রমাণ করা","","verb","Actions","A2"],[1480,"Provide","যোগান দেওয়া","","verb","Actions","A2"],[1481,"Publish","প্রকাশ করা","","verb","Actions","A2"],[1482,"Pursue","অনুসরণ করা","","verb","Actions","B2"],[1483,"Qualify","যোগ্যতা অর্জন করা","","verb","Actions","B1"],[1484,"Quote","উদ্ধৃতি দেওয়া","","verb","Actions","B1"],[1485,"Reach","পৌঁছানো","","verb","Actions","A2"],[1486,"React","প্রতিক্রিয়া দেখানো","","verb","Actions","B1"],[1487,"Realize","উপলব্ধি করা","","verb","Actions","A2"],[1488,"Rebuild","পুনর্নির্মাণ করা","","verb","Actions","B1"],[1489,"Recall","মনে করা","","verb","Actions","B1"],[1490,"Recognize","চিনতে পারা","","verb","Actions","A2"],[1491,"Recommend","সুপারিশ করা","","verb","Actions","B1"],[1492,"Recover","সুস্থ হয়ে ওঠা","","verb","Actions","A2"],[1493,"Reduce","কমানো","","verb","Actions","A2"],[1494,"Regret","অনুশোচনা করা","","verb","Actions","B1"],[1495,"Reject","বাতিল করা","","verb","Actions","A2"],[1496,"Relate","সম্পর্কিত হওয়া","","verb","Actions","B1"],[1497,"Rely","ভরসা করা","","verb","Actions","B1"],[1498,"Remain","অবশিষ্ট থাকা বা থাকা","","verb","Actions","A2"],[1499,"Remind","মনে করিয়ে দেওয়া","","verb","Actions","A2"],[1500,"Remove","অপসারণ করা","","verb","Actions","A2"],[1501,"Repeat","পুনরাবৃত্তি করা","","verb","Actions","A1"],[1502,"Replace","প্রতিস্থাপন করা","","verb","Actions","A2"],[1503,"Represent","প্রতিনিধিত্ব করা","","verb","Actions","B1"],[1504,"Require","প্রয়োজন হওয়া","","verb","Actions","B1"],[1505,"Rescue","উদ্ধার করা","","verb","Actions","A2"],[1506,"Resemble","সদৃশ হওয়া","","verb","Actions","B1"],[1507,"Resist","বাধা দেওয়া বা প্রতিরোধ করা","","verb","Actions","B2"],[1508,"Resolve","সমাধান করা","","verb","Actions","B2"],[1509,"Respond","সাড়া দেওয়া","","verb","Actions","A2"],[1510,"Restore","পুনর্বহাল করা","","verb","Actions","B2"],[1511,"Retire","অবসর নেওয়া","","verb","Actions","A2"],[1512,"Reveal","প্রকাশ করা","","verb","Actions","B2"],[1513,"Review","পুনর্বিবেচনা করা","","verb","Actions","A2"],[1514,"Reward","পুরস্কৃত করা","","verb","Actions","A2"],[1515,"Rinse","পানি দিয়ে ধোয়া","","verb","Actions","A2"],[1516,"Roam","ঘুরে বেড়ানো","","verb","Actions","B1"],[1517,"Roar","গর্জন করা","","verb","Actions","A2"],[1518,"Rob","ডাকাতি বা ছিনতাই করা","","verb","Actions","A2"],[1519,"Roll","গড়িয়ে যাওয়া","","verb","Actions","A1"],[1520,"Rot","পচে যাওয়া","","verb","Actions","A2"],[1521,"Rub","ঘষা","","verb","Actions","A2"],[1522,"Ruin","ধ্বংস করা","","verb","Actions","B1"],[1523,"Rush","ছুটে যাওয়া বা তাড়াহুড়ো করা","","verb","Actions","A2"],[1524,"Sail","পাল তুলে চলা","","verb","Actions","A2"],[1525,"Satisfy","সন্তুষ্ট করা","","verb","Actions","B1"],[1526,"Scare","ভয় পাওয়া বা দেখানো","","verb","Actions","A2"],[1527,"Scatter","ছড়িয়ে ছিটিয়ে দেওয়া","","verb","Actions","B1"],[1528,"Scratch","আঁচড়ানো","","verb","Actions","A2"],[1529,"Scream","চিৎকার করা","","verb","Actions","A2"],[1530,"Seal","সিলমোহর দেওয়া","","verb","Actions","B1"],[1531,"Secure","সুরক্ষিত করা","","verb","Actions","B1"],[1532,"Seek","খোঁজা","","verb","Actions","B1"],[1533,"Select","বাছাই করা","","verb","Actions","A2"],[1534,"Separate","আলাদা করা","","verb","Actions","A2"],[1535,"Serve","পরিবেশন করা","","verb","Actions","A2"],[1536,"Settle","স্থায়ী হওয়া বা মীমাংসা করা","","verb","Actions","B1"],[1537,"Sew","সেলাই করা","","verb","Actions","A2"],[1538,"Shave","দাড়ি কামানো","","verb","Actions","A1"],[1539,"Shock","স্তম্ভিত করা","","verb","Actions","A2"],[1540,"Shoot","গুলি করা","","verb","Actions","A2"],[1541,"Sigh","দীর্ঘশ্বাস ফেলা","","verb","Actions","B1"],[1542,"Sign","স্বাক্ষর করা","","verb","Actions","A2"],[1543,"Smash","চূর্ণবিচূর্ণ করা","","verb","Actions","B1"],[1544,"Snap","ফট করে ভেঙে যাওয়া","","verb","Actions","B1"],[1545,"Snore","নাক ডাকা","","verb","Actions","A2"],[1546,"Soak","ভিজিয়ে রাখা","","verb","Actions","A2"],[1547,"Soothe","শান্ত বা উপশম করা","","verb","Actions","B2"],[1548,"Spare","অতিরিক্ত রাখা বা ক্ষমা করা","","verb","Actions","B1"],[1549,"Sparkle","চকচক করা","","verb","Actions","B1"],[1550,"Spill","ছড়িয়ে বা উপচে পড়া","","verb","Actions","A2"],[1551,"Spin","ঘোরানো বা ঘোরা","","verb","Actions","A2"],[1552,"Spoil","নষ্ট করা","","verb","Actions","A2"],[1553,"Spray","ছিটানো","","verb","Actions","A2"],[1554,"Spread","ছড়িয়ে দেওয়া","","verb","Actions","A2"],[1555,"Squeeze","নিংড়ানো বা চাপা","","verb","Actions","A2"],[1556,"Stare","একদৃষ্টিতে তাকানো","","verb","Actions","B1"],[1557,"Starve","অনাহারে থাকা","","verb","Actions","B1"],[1558,"Steer","স্টিয়ারিং ঘোরানো বা চালনা করা","","verb","Actions","B1"],[1559,"Stimulate","উদ্বুদ্ধ বা উত্তেজিত করা","","verb","Actions","B2"],[1560,"Stitch","সেলাই করা","","verb","Actions","A2"],[1561,"Stretch","প্রসারিত করা","","verb","Actions","A2"],[1562,"Strike","আঘাত করা বা ধর্মঘট করা","","verb","Actions","B1"],[1563,"Struggle","সংগ্রাম করা","","verb","Actions","B1"],[1564,"Stumble","হোঁচট খাওয়া","","verb","Actions","B1"],[1565,"Submit","জমা দেওয়া বা বশ্যতা মানা","","verb","Actions","A2"],[1566,"Succeed","সফল হওয়া","","verb","Actions","A2"],[1567,"Suck","চুষে নেওয়া","","verb","Actions","A2"],[1568,"Suggest","পরামর্শ বা প্রস্তাব দেওয়া","","verb","Actions","A2"],[1569,"Supply","সরবরাহ করা","","verb","Actions","A2"],[1570,"Support","সমর্থন বা সহায়তা করা","","verb","Actions","A2"],[1571,"Suppose","মনে করা বা অনুমান করা","","verb","Actions","A2"],[1572,"Surrender","আত্মসমর্পণ করা","","verb","Actions","B1"],[1573,"Surround","ঘিরে রাখা","","verb","Actions","B1"],[1574,"Survive","বেঁচে থাকা","","verb","Actions","B1"],[1575,"Suspect","সন্দেহ করা","","verb","Actions","B1"],[1576,"Suspend","স্থগিত বা বরখাস্ত করা","","verb","Actions","B2"],[1577,"Swear","শপথ করা বা গালি দেওয়া","","verb","Actions","B1"],[1578,"Sweat","ঘামানো","","verb","Actions","A2"],[1579,"Sweep","ঝাঁট দেওয়া","","verb","Actions","A2"],[1580,"Swell","ফুলে ওঠা","","verb","Actions","B1"],[1581,"Swing","দোল খাওয়া বা দোলানো","","verb","Actions","A2"],[1582,"Target","লক্ষ্য নির্ধারণ করা","","verb","Actions","B1"],[1583,"Tear","ছিঁড়ে ফেলা","","verb","Actions","A2"],[1584,"Tease","উত্ত্যক্ত করা","","verb","Actions","A2"],[1585,"Threaten","হুমকি দেওয়া","","verb","Actions","B1"],[1586,"Tolerate","সহ্য করা","","verb","Actions","B1"],[1587,"Toss","আলতো করে ছুড়ে দেওয়া","","verb","Actions","A2"],[1588,"Trace","চিহ্ন খুঁজে বের করা","","verb","Actions","B1"],[1589,"Trap","ফাঁদে ফেলা","","verb","Actions","A2"],[1590,"Tremble","ভয়ে বা শীতে কাঁপা","","verb","Actions","B1"],[1591,"Twist","মোচড়ানো","","verb","Actions","A2"],[1592,"Unfold","উন্মোচিত করা","","verb","Actions","B1"],[1593,"Unite","ঐক্যবদ্ধ হওয়া","","verb","Actions","B1"],[1594,"Urge","তাগিদ দেওয়া","","verb","Actions","B2"],[1595,"Vanish","উধাও বা অদৃশ্য হওয়া","","verb","Actions","B1"],[1596,"Vary","ভিন্ন হওয়া বা পরিবর্তিত হওয়া","","verb","Actions","B1"],[1597,"Violate","আইন বা নিয়ম লঙ্ঘন করা","","verb","Actions","B2"],[1598,"Wander","উদ্দেশ্যহীনভাবে ঘুরে বেড়ানো","","verb","Actions","B1"],[1599,"Waste","অপচয় করা","","verb","Actions","A2"],[1600,"Weep","কান্নাকাটি করা","","verb","Actions","B1"],[1601,"Whip","চাবুক মারা বা ফেটানো","","verb","Actions","B1"],[1602,"Whistle","বাঁশি বাজানো বা শিষ দেওয়া","","verb","Actions","A2"],[1603,"Wipe","মুছে ফেলা","","verb","Actions","A2"],[1604,"Witness","স্বচক্ষে দেখা","","verb","Actions","B1"],[1605,"Wound","আহত করা","","verb","Actions","B1"],[1606,"Wreck","ধ্বংসস্তূপে পরিণত করা","","verb","Actions","B2"],[1607,"Yell","জোরে চিৎকার করা","","verb","Actions","A2"],[1608,"Yield","উৎপন্ন করা বা বশ্যতা স্বীকার","","verb","Actions","B2"],[1609,"Abandoned","পরিত্যক্ত","","adjective","Adjectives","B1"],[1610,"Abnormal","অস্বাভাবিক","","adjective","Adjectives","B1"],[1611,"Abrupt","হঠাৎ বা আকস্মিক","","adjective","Adjectives","B2"],[1612,"Absolute","পরম বা সম্পূর্ণ","","adjective","Adjectives","B1"],[1613,"Abstract","বিমূর্ত বা ভাবমূলক","","adjective","Adjectives","B2"],[1614,"Absurd","হাস্যকর বা অযৌক্তিক","","adjective","Adjectives","B2"],[1615,"Abundant","প্রচুর বা অঢেল","","adjective","Adjectives","B2"],[1616,"Academic","একাডেমিক বা প্রাতিষ্ঠানিক","","adjective","Adjectives","B1"],[1617,"Acceptable","গ্রহণযোগ্য","","adjective","Adjectives","A2"],[1618,"Accessible","সহজলভ্য বা প্রবেশগম্য","","adjective","Adjectives","B2"],[1619,"Accurate","নিখুঁত বা সঠিক","","adjective","Adjectives","B1"],[1620,"Acidic","অম্লীয় বা টক","","adjective","Adjectives","B1"],[1621,"Active","সক্রিয় বা চটপটে","","adjective","Adjectives","A2"],[1622,"Actual","আসল বা বাস্তব","","adjective","Adjectives","A2"],[1623,"Acute","তীব্র বা প্রকট","","adjective","Adjectives","B2"],[1624,"Adaptable","মানিয়ে নিতে সক্ষম","","adjective","Adjectives","B2"],[1625,"Adequate","পর্যাপ্ত","","adjective","Adjectives","B1"],[1626,"Admirable","প্রশংসনীয়","","adjective","Adjectives","B2"],[1627,"Adolescent","কিশোরকালীন","","adjective","Adjectives","B1"],[1628,"Adorable","আদুরে বা মিষ্টি","","adjective","Adjectives","A2"],[1629,"Adventurous","দুঃসাহসী","","adjective","Adjectives","B1"],[1630,"Affectionate","স্নেহশীল","","adjective","Adjectives","B1"],[1631,"Aggressive","আক্রমণাত্মক","","adjective","Adjectives","B1"],[1632,"Agreeable","মনোরম বা সম্মত","","adjective","Adjectives","B1"],[1633,"Alert","সতর্ক","","adjective","Adjectives","B1"],[1634,"Alien","ভিনদেশি বা অপরিচিত","","adjective","Adjectives","B1"],[1635,"Alleged","অভিযুক্ত বা কথিত","","adjective","Adjectives","B2"],[1636,"Allergic","অ্যালার্জিযুক্ত","","adjective","Adjectives","A2"],[1637,"Amazing","বিস্ময়কর","","adjective","Adjectives","A1"],[1638,"Ambitious","উচ্চাকাঙ্ক্ষী","","adjective","Adjectives","B1"],[1639,"Ample","প্রচুর বা যথেষ্ট","","adjective","Adjectives","B2"],[1640,"Amusing","কৌতুকপূর্ণ বা মজার","","adjective","Adjectives","A2"],[1641,"Angelic","ফেরেশতাতুল্য বা নিষ্পাপ","","adjective","Adjectives","B1"],[1642,"Anonymous","বেনামী বা নামহীন","","adjective","Adjectives","B2"],[1643,"Anxious","উদ্বিগ্ন বা চিন্তিত","","adjective","Adjectives","B1"],[1644,"Apparent","স্পষ্ট বা দৃশ্যমান","","adjective","Adjectives","B2"],[1645,"Appealing","আকর্ষণীয়","","adjective","Adjectives","B1"],[1646,"Appropriate","যথাযথ বা উপযুক্ত","","adjective","Adjectives","B1"],[1647,"Approximate","আনুমানিক","","adjective","Adjectives","B1"],[1648,"Arid","শুষ্ক বা অনুর্বর","","adjective","Adjectives","B2"],[1649,"Arrogant","অহংকারী","","adjective","Adjectives","B1"],[1650,"Artistic","শৈল্পিক","","adjective","Adjectives","B1"],[1651,"Ashamed","লজ্জিত","","adjective","Adjectives","A2"],[1652,"Astonishing","বিস্ময়কর","","adjective","Adjectives","B2"],[1653,"Athletic","খেলাধুলায় পারদর্শী","","adjective","Adjectives","B1"],[1654,"Attractive","আকর্ষণীয়","","adjective","Adjectives","A2"],[1655,"Authentic","খাঁটি বা আসল","","adjective","Adjectives","B2"],[1656,"Automatic","স্বয়ংক্রিয়","","adjective","Adjectives","A2"],[1657,"Average","গড় বা সাধারণ","","adjective","Adjectives","A2"],[1658,"Aware","সচেতন","","adjective","Adjectives","A2"],[1659,"Awesome","অসাধারণ বা চমৎকার","","adjective","Adjectives","A1"],[1660,"Awful","ভয়ানক খারাপ","","adjective","Adjectives","A2"],[1661,"Awkward","অস্বস্তিকর বা বেমানান","","adjective","Adjectives","B1"],[1662,"Backward","অনগ্রসর বা পেছনের দিকে","","adjective","Adjectives","B1"],[1663,"Bald","টাকপড়া মাথা","","adjective","Adjectives","A2"],[1664,"Barren","অনুর্বর বা বন্ধ্যা","","adjective","Adjectives","B2"],[1665,"Basic","মৌলিক বা প্রাথমিক","","adjective","Adjectives","A1"],[1666,"Beloved","প্রিয় বা আদরের","","adjective","Adjectives","B1"],[1667,"Beneficial","উপকারী বা কল্যাণকর","","adjective","Adjectives","B1"],[1668,"Bizarre","অদ্ভুত বা বিচিত্র","","adjective","Adjectives","B2"],[1669,"Blank","খালি বা শূন্য","","adjective","Adjectives","A2"],[1670,"Blind","দৃষ্টিহীন বা অন্ধ","","adjective","Adjectives","A2"],[1671,"Blissful","পরম আনন্দময়","","adjective","Adjectives","B2"],[1672,"Bloody","রক্তাক্ত","","adjective","Adjectives","A2"],[1673,"Blunt","ভোঁতা বা স্পষ্টভাষী","","adjective","Adjectives","B1"],[1674,"Bold","সাহসী বা স্পষ্ট","","adjective","Adjectives","B1"],[1675,"Boring","একঘেয়ে বা বিরক্তিকর","","adjective","Adjectives","A1"],[1676,"Bountiful","প্রচুর বা দানশীল","","adjective","Adjectives","B2"],[1677,"Brief","সংক্ষিপ্ত","","adjective","Adjectives","B1"],[1678,"Brilliant","মেধাবী বা অত্যন্ত উজ্জ্বল","","adjective","Adjectives","A2"],[1679,"Brisk","দ্রুত ও সতেজ","","adjective","Adjectives","B2"],[1680,"Broad","প্রশস্ত বা চওড়া","","adjective","Adjectives","A2"],[1681,"Broken","ভাঙা","","adjective","Adjectives","A1"],[1682,"Brutal","নৃশংস বা নিষ্ঠুর","","adjective","Adjectives","B2"],[1683,"Bubbly","চঞ্চল ও প্রফুল্ল","","adjective","Adjectives","B1"],[1684,"Bulky","বিশাল বা ভারী","","adjective","Adjectives","B1"],[1685,"Capable","সক্ষম বা যোগ্য","","adjective","Adjectives","B1"],[1686,"Careless","অসতর্ক","","adjective","Adjectives","A2"],[1687,"Casual","নৈমিত্তিক বা অনানুষ্ঠানিক","","adjective","Adjectives","A2"],[1688,"Cautious","সতর্ক বা সাবধানী","","adjective","Adjectives","B1"],[1689,"Central","কেন্দ্রীয়","","adjective","Adjectives","A2"],[1690,"Challenging","চ্যালেঞ্জিং বা কঠিন","","adjective","Adjectives","B1"],[1691,"Charming","মনোমুগ্ধকর","","adjective","Adjectives","B1"],[1692,"Cheerful","আনন্দিত বা উৎফুল্ল","","adjective","Adjectives","A2"],[1693,"Childish","ছেলেমানুষি","","adjective","Adjectives","A2"],[1694,"Chilly","কনকনে ঠান্ডা","","adjective","Adjectives","A2"],[1695,"Chronic","দীর্ঘস্থায়ী রোগ","","adjective","Adjectives","B2"],[1696,"Chubby","নাদুসনুদুস","","adjective","Adjectives","A2"],[1697,"Circular","গোলাকার","","adjective","Adjectives","A2"],[1698,"Classic","কালজয়ী বা ঐতিহ্যবাহী","","adjective","Adjectives","B1"],[1699,"Clumsy","আনাড়ি বা বেখেয়ালী","","adjective","Adjectives","B1"],[1700,"Cluttered","এলোমেলো বা অপরিচ্ছন্ন","","adjective","Adjectives","B1"],[1701,"Coastal","উপকূলীয়","","adjective","Adjectives","B1"],[1702,"Colorful","রঙিন","","adjective","Adjectives","A1"],[1703,"Colossal","বিশাল বা দানবীয়","","adjective","Adjectives","B2"],[1704,"Comfortable","আরামদায়ক","","adjective","Adjectives","A2"],[1705,"Comic","হাস্যরসাত্মক","","adjective","Adjectives","A2"],[1706,"Commercial","বাণিজ্যিক","","adjective","Adjectives","B1"],[1707,"Compact","কমপ্যাক্ট বা নিবিড়","","adjective","Adjectives","B1"],[1708,"Compassionate","সহানুভূতিশীল","","adjective","Adjectives","B2"],[1709,"Compatible","মানানসই বা সামঞ্জস্যপূর্ণ","","adjective","Adjectives","B2"],[1710,"Competitive","প্রতিযোগিতামূলক","","adjective","Adjectives","B1"],[1711,"Complex","জটিল","","adjective","Adjectives","B1"],[1712,"Complicated","জটিল ও কঠিন","","adjective","Adjectives","A2"],[1713,"Complimentary","প্রশংসামূলক বা বিনামূল্যে","","adjective","Adjectives","B2"],[1714,"Confidential","গোপনীয়","","adjective","Adjectives","B2"],[1715,"Conscious","সচেতন","","adjective","Adjectives","B1"],[1716,"Conservative","রক্ষণশীল","","adjective","Adjectives","B1"],[1717,"Considerate","বিবেচক","","adjective","Adjectives","B2"],[1718,"Consistent","ধারাবাহিক বা সঙ্গতিপূর্ণ","","adjective","Adjectives","B1"],[1719,"Constant","ধ্রুব বা অবিরাম","","adjective","Adjectives","B1"],[1720,"Contemporary","সমসাময়িক","","adjective","Adjectives","B2"],[1721,"Content","সন্তুষ্ট","","adjective","Adjectives","B1"],[1722,"Continuous","নিরবচ্ছিন্ন","","adjective","Adjectives","A2"],[1723,"Convenient","সুবিধাজনক","","adjective","Adjectives","A2"],[1724,"Conventional","প্রচলিত বা প্রথাগত","","adjective","Adjectives","B2"],[1725,"Cool","শীতল বা চমৎকার","","adjective","Adjectives","A1"],[1726,"Cooperative","সহযোগিতাপূর্ণ","","adjective","Adjectives","B1"],[1727,"Cordial","আন্তরিক ও সৌহার্দ্যপূর্ণ","","adjective","Adjectives","B2"],[1728,"Costly","দামি বা ব্যয়বহুল","","adjective","Adjectives","A2"],[1729,"Courageous","সাহসী ও নির্ভীক","","adjective","Adjectives","B1"],[1730,"Courteous","ভদ্র ও মার্জিত","","adjective","Adjectives","B2"],[1731,"Cozy","আরামদায়ক ও উষ্ণ","","adjective","Adjectives","A2"],[1732,"Crazy","পাগল বা উন্মাদ","","adjective","Adjectives","A1"],[1733,"Creative","সৃজনশীল","","adjective","Adjectives","A2"],[1734,"Credible","বিশ্বাসযোগ্য","","adjective","Adjectives","B2"],[1735,"Creepy","ভীতিকর বা গা ছমছমে","","adjective","Adjectives","B1"],[1736,"Critical","সংকটপূর্ণ বা সমালোচনামূলক","","adjective","Adjectives","B1"],[1737,"Crooked","বাঁকা বা অসৎ","","adjective","Adjectives","B1"],[1738,"Crowded","জনাকীর্ণ বা ভিড়ভাট্টা","","adjective","Adjectives","A2"],[1739,"Crucial","অত্যন্ত গুরুত্বপূর্ণ বা চরম","","adjective","Adjectives","B2"],[1740,"Curious","কৌতূহলী","","adjective","Adjectives","A2"],[1741,"Cute","মিষ্টি বা সুন্দর","","adjective","Adjectives","A1"],[1742,"Cynical","নৈরাশ্যবাদী বা অবিশ্বাসপ্রবণ","","adjective","Adjectives","B2"],[1743,"Daily","প্রতিদিনের বা দৈনিক","","adjective","Adjectives","A1"],[1744,"Damp","স্যাঁতসেঁতে","","adjective","Adjectives","A2"],[1745,"Daring","দুঃসাহসী","","adjective","Adjectives","B1"],[1746,"Dazzling","দৃষ্টি ধাঁধানো উজ্জ্বল","","adjective","Adjectives","B2"],[1747,"Deadly","মারাত্মক বা প্রাণঘাতী","","adjective","Adjectives","B1"],[1748,"Deaf","বধির বা কানে কম শোনা","","adjective","Adjectives","A2"],[1749,"Dear","প্রিয়","","adjective","Adjectives","A1"],[1750,"Decent","মার্জিত বা শোভন","","adjective","Adjectives","A2"],[1751,"Decisive","চূড়ান্ত বা দৃঢ় সংকল্প","","adjective","Adjectives","B2"],[1752,"Deep","গভীর","","adjective","Adjectives","A1"],[1753,"Defective","ত্রুটিযুক্ত","","adjective","Adjectives","B1"],[1754,"Defensive","প্রতিরক্ষামূলক","","adjective","Adjectives","B1"],[1755,"Defiant","অবাধ্য বা প্রতিবাদী","","adjective","Adjectives","B2"],[1756,"Delicate","কোমল বা নাজুক","","adjective","Adjectives","B1"],[1757,"Delighted","অত্যন্ত আনন্দিত","","adjective","Adjectives","A2"],[1758,"Dense","ঘন বা নিবিড়","","adjective","Adjectives","B1"],[1759,"Dependent","নির্ভরশীল","","adjective","Adjectives","A2"],[1760,"Depressed","বিষণ্ণ বা মনমরা","","adjective","Adjectives","B1"],[1761,"Desirable","আকাঙ্ক্ষিত বা বাঞ্ছনীয়","","adjective","Adjectives","B1"],[1762,"Desperate","মরিয়া বা হতাশাজনক","","adjective","Adjectives","B1"],[1763,"Destructive","ধ্বংসাত্মক","","adjective","Adjectives","B1"],[1764,"Determined","দৃঢ়প্রতিজ্ঞ","","adjective","Adjectives","B1"],[1765,"Devoted","নিবেদিতপ্রাণ","","adjective","Adjectives","B1"],[1766,"Diligent","পরিশ্রমী ও একনিষ্ঠ","","adjective","Adjectives","B2"],[1767,"Dim","ম্লান বা ঝাপসা","","adjective","Adjectives","B1"],[1768,"Diplomatic","কূটনৈতিক বা কৌশলী","","adjective","Adjectives","B2"],[1769,"Direct","সরাসরি","","adjective","Adjectives","A2"],[1770,"Disabled","প্রতিবন্ধী বা অক্ষম","","adjective","Adjectives","B1"],[1771,"Disastrous","সর্বনাশা বা বিপর্যয়কর","","adjective","Adjectives","B2"],[1772,"Discrete","স্বতন্ত্র বা পৃথক","","adjective","Adjectives","B2"],[1773,"Dishonest","অসৎ বা প্রতারক","","adjective","Adjectives","A2"],[1774,"Distant","দূরবর্তী বা অনাগ্রহী","","adjective","Adjectives","A2"],[1775,"Distinct","স্বতন্ত্র বা সুস্পষ্ট","","adjective","Adjectives","B2"],[1776,"Distinguished","বিশিষ্ট বা খ্যাতনামা","","adjective","Adjectives","B2"],[1777,"Diverse","বৈচিত্র্যপূর্ণ বা নানামুখী","","adjective","Adjectives","B1"],[1778,"Dizzy","মাথা ঘোরা ভাব","","adjective","Adjectives","A2"],[1779,"Domestic","ঘরোয়া বা অভ্যন্তরীণ","","adjective","Adjectives","B1"],[1780,"Dominant","প্রভাবশালী বা প্রধান","","adjective","Adjectives","B2"],[1781,"Doubtful","সন্দেহজনক","","adjective","Adjectives","A2"],[1782,"Drastic","চরম বা কঠোর","","adjective","Adjectives","B2"],[1783,"Dull","নিস্তেজ বা একঘেয়ে","","adjective","Adjectives","A2"],[1784,"Dusty","ধুলোবালিযুক্ত","","adjective","Adjectives","A2"],[1785,"Dynamic","গতিশীল ও উদ্দীপনাময়","","adjective","Adjectives","B2"],[1786,"Eager","আগ্রহী বা ব্যগ্র","","adjective","Adjectives","A2"],[1787,"Earnest","আন্তরিক ও একনিষ্ঠ","","adjective","Adjectives","B2"],[1788,"Economic","অর্থনৈতিক","","adjective","Adjectives","B1"],[1789,"Economical","মিতব্যয়ী বা সাশ্রয়ী","","adjective","Adjectives","B1"],[1790,"Educated","শিক্ষিত","","adjective","Adjectives","A2"],[1791,"Eerie","ভুতুড়ে বা ভীতিজনক","","adjective","Adjectives","B2"],[1792,"Effective","কার্যকর বা ফলপ্রসূ","","adjective","Adjectives","A2"],[1793,"Efficient","দক্ষ ও সময়নিষ্ঠ","","adjective","Adjectives","B1"],[1794,"Elaborate","বিস্তারিত ও নিখুঁত","","adjective","Adjectives","B2"],[1795,"Elastic","স্থিতিস্থাপক বা টানলে বাড়ে এমন","","adjective","Adjectives","B1"],[1796,"Elderly","বয়োবৃদ্ধ বা প্রবীণ","","adjective","Adjectives","A2"],[1797,"Electric","বৈদ্যুতিক","","adjective","Adjectives","A2"],[1798,"Elegant","মার্জিত ও চমৎকার","","adjective","Adjectives","B1"],[1799,"Eligible","যোগ্য বা উপযুক্ত","","adjective","Adjectives","B2"],[1800,"Eminent","বিখ্যাত ও শীর্ষস্থানীয়","","adjective","Adjectives","B2"],[1801,"Emotional","আবেগপ্রবণ","","adjective","Adjectives","A2"],[1802,"Empathetic","সহমর্মী বা সমব্যথী","","adjective","Adjectives","B2"],[1803,"Energetic","কর্মচঞ্চল ও প্রাণবন্ত","","adjective","Adjectives","A2"],[1804,"Enormous","বিশাল বা প্রকাণ্ড","","adjective","Adjectives","A2"],[1805,"Enthusiastic","উৎসাহী","","adjective","Adjectives","B1"],[1806,"Entire","সম্পূর্ণ বা সমগ্র","","adjective","Adjectives","A2"],[1807,"Essential","অপরিহার্য বা মৌলিক","","adjective","Adjectives","A2"],[1808,"Eternal","অনন্ত বা চিরন্তন","","adjective","Adjectives","B2"],[1809,"Ethical","নৈতিক","","adjective","Adjectives","B1"],[1810,"Eventual","চূড়ান্ত বা শেষপর্যায়ের","","adjective","Adjectives","B2"],[1811,"Evident","সুস্পষ্ট বা প্রতীয়মান","","adjective","Adjectives","B2"],[1812,"Evil","মন্দ বা পাপী","","adjective","Adjectives","A2"],[1813,"Exact","সঠিক বা নির্ভুল","","adjective","Adjectives","A2"],[1814,"Excellent","চমৎকার বা অসাধারণ","","adjective","Adjectives","A1"],[1815,"Exceptional","ব্যতিক্রমী বা অপূর্ব","","adjective","Adjectives","B2"],[1816,"Excessive","অতিরিক্ত বা মাত্রাতিরিক্ত","","adjective","Adjectives","B2"],[1817,"Exclusive","একচেটিয়া বা বিশেষায়িত","","adjective","Adjectives","B2"],[1818,"Exhausted","ক্লান্তিতে ভেঙে পড়া","","adjective","Adjectives","A2"],[1819,"Exotic","ভিনদেশি বা দুর্লভ সুন্দর","","adjective","Adjectives","B2"],[1820,"Experienced","অভিজ্ঞ","","adjective","Adjectives","A2"],[1821,"Expert","বিশেষজ্ঞ বা পারদর্শী","","adjective","Adjectives","A2"],[1822,"Explicit","সুস্পষ্ট ও খোলামেলা","","adjective","Adjectives","B2"],[1823,"Extraordinary","অসাধারণ বা অলৌকিক","","adjective","Adjectives","B1"],[1824,"Extreme","চরম বা অত্যন্ত","","adjective","Adjectives","A2"],[1825,"Fabulous","কল্পনাতীত সুন্দর","","adjective","Adjectives","A2"],[1826,"Fair","ন্যায্য বা ফর্সা","","adjective","Adjectives","A2"],[1827,"Faithful","বিশ্বস্ত ও অনুগত","","adjective","Adjectives","A2"],[1828,"Fake","নকল বা মেকি","","adjective","Adjectives","A2"],[1829,"Familiar","পরিচিত","","adjective","Adjectives","A2"],[1830,"Fancy","শৌখিন বা মনোরম","","adjective","Adjectives","A2"],[1831,"Fantastic","চমৎকার","","adjective","Adjectives","A1"],[1832,"Fascinating","মুগ্ধকর","","adjective","Adjectives","B1"],[1833,"Fatal","প্রাণঘাতী","","adjective","Adjectives","B2"],[1834,"Faulty","ত্রুটিপূর্ণ","","adjective","Adjectives","A2"],[1835,"Favorable","অনুকূল","","adjective","Adjectives","B1"],[1836,"Fearful","ভীত বা শঙ্কিত","","adjective","Adjectives","A2"],[1837,"Fearless","নির্ভীক ও অকুতোভয়","","adjective","Adjectives","B1"],[1838,"Feasible","বাস্তবায়নযোগ্য","","adjective","Adjectives","B2"],[1839,"Feeble","দুর্বল বা ক্ষীণ","","adjective","Adjectives","B2"],[1840,"Feminine","স্ত্রীলিঙ্গ বা নারীসুলভ","","adjective","Adjectives","B1"],[1841,"Fertile","উর্বর","","adjective","Adjectives","B1"],[1842,"Fierce","হিংস্র বা তীব্র","","adjective","Adjectives","B1"],[1843,"Filthy","অত্যন্ত নোংরা","","adjective","Adjectives","B1"],[1844,"Financial","আর্থিক","","adjective","Adjectives","A2"],[1845,"Fine","সুন্দর বা ভালো","","adjective","Adjectives","A1"],[1846,"Firm","দৃঢ় বা শক্ত","","adjective","Adjectives","B1"],[1847,"Fit","উপযুক্ত বা সুস্বাস্থ্যের অধিকারী","","adjective","Adjectives","A1"],[1848,"Flawless","ত্রুটিহীন বা নিখুঁত","","adjective","Adjectives","B2"],[1849,"Flexible","নমনীয়","","adjective","Adjectives","B1"],[1850,"Flimsy","পাতলা বা ঠুনকো","","adjective","Adjectives","B2"],[1851,"Fluent","সাবলীল বা অনর্গল","","adjective","Adjectives","B1"],[1852,"Fond","অনুরাগী বা প্রিয়","","adjective","Adjectives","A2"],[1853,"Forbidden","নিষিদ্ধ","","adjective","Adjectives","B1"],[1854,"Forceful","জোরালো","","adjective","Adjectives","B1"],[1855,"Formal","আনুষ্ঠানিক","","adjective","Adjectives","A2"],[1856,"Fortunate","ভাগ্যবান","","adjective","Adjectives","A2"],[1857,"Fragile","ভঙ্গুর বা সহজে ভেঙে যায় এমন","","adjective","Adjectives","B1"],[1858,"Frank","স্পষ্টভাষী বা অকপট","","adjective","Adjectives","B1"],[1859,"Frantic","উন্মাদপ্রায় বা ব্যস্তসমস্ত","","adjective","Adjectives","B2"],[1860,"Free","মুক্ত বা বিনামূল্যে","","adjective","Adjectives","A1"],[1861,"Frightened","ভীতসন্ত্রস্ত","","adjective","Adjectives","A2"],[1862,"Furious","প্রচণ্ড ক্ষিপ্ত","","adjective","Adjectives","B1"],[1863,"Genuine","আসল বা খাঁটি","","adjective","Adjectives","B1"],[1864,"Gigantic","দৈত্যাকার বা বিশাল","","adjective","Adjectives","B1"],[1865,"Glad","খুশি","","adjective","Adjectives","A1"],[1866,"Glorious","মহিমান্বিত","","adjective","Adjectives","B1"],[1867,"Golden","সোনালী","","adjective","Adjectives","A1"],[1868,"Gorgeous","অপূর্ব সুন্দর","","adjective","Adjectives","A2"],[1869,"Graceful","লাবণ্যময় বা মার্জিত","","adjective","Adjectives","B1"],[1870,"Gradual","ক্রমবর্ধমান বা ধীর","","adjective","Adjectives","B1"],[1871,"Grand","বিশাল বা আড়ম্বরপূর্ণ","","adjective","Adjectives","A2"],[1872,"Greedy","লোভী","","adjective","Adjectives","A2"],[1873,"Grim","কঠোর বা নিরানন্দ","","adjective","Adjectives","B2"],[1874,"Handy","কাজে লাগার মতো বা সুবিধাজনক","","adjective","Adjectives","A2"],[1875,"Hardworking","পরিশ্রমী","","adjective","Adjectives","A1"],[1876,"Harsh","কঠোর বা কর্কশ","","adjective","Adjectives","B1"],[1877,"Hasty","তাড়াহুড়োযুক্ত","","adjective","Adjectives","B1"],[1878,"Heartfelt","আন্তরিক","","adjective","Adjectives","B2"],[1879,"Heroic","বীরত্বপূর্ণ","","adjective","Adjectives","B1"],[1880,"Hideous","কুৎসিত বা কদর্য","","adjective","Adjectives","B2"],[1881,"Hostile","শত্রুভাবাপন্ন","","adjective","Adjectives","B2"],[1882,"Huge","বিশাল","","adjective","Adjectives","A1"],[1883,"Humble","বিনয়ী ও নম্র","","adjective","Adjectives","A2"],[1884,"Humid","আর্দ্র বা ভ্যাপসা","","adjective","Adjectives","A2"],[1885,"Ideal","আদর্শ","","adjective","Adjectives","A2"],[1886,"Identical","হুবহু একই রকম","","adjective","Adjectives","B1"],[1887,"Ignorant","অজ্ঞ","","adjective","Adjectives","B1"],[1888,"Illuminate","আলোকিত","","adjective","Adjectives","B2"],[1889,"Illustrious","খ্যাতনামা","","adjective","Adjectives","B2"],[1890,"Immense","বিপুল বা অগাধ","","adjective","Adjectives","B1"],[1891,"Impartial","নিরপেক্ষ","","adjective","Adjectives","B2"],[1892,"Impatient","অধৈর্য","","adjective","Adjectives","A2"],[1893,"Imperfect","অসম্পূর্ণ বা ত্রুটিযুক্ত","","adjective","Adjectives","A2"],[1894,"Impolite","অভদ্র","","adjective","Adjectives","A2"],[1895,"Impossible","অসম্ভব","","adjective","Adjectives","A1"],[1896,"Impressive","মুগ্ধকর","","adjective","Adjectives","A2"],[1897,"Improper","অনুচিত","","adjective","Adjectives","B1"],[1898,"Pure","বিশুদ্ধ বা খাঁটি","","adjective","Adjectives","A2"],[1899,"Impure","ভেজালযুক্ত","","adjective","Adjectives","B1"],[1900,"Inadequate","অপ্রতুল বা অপর্যাপ্ত","","adjective","Adjectives","B1"],[1901,"Incredible","অবিশ্বাস্য সুন্দর","","adjective","Adjectives","A2"],[1902,"Independent","স্বাধীন","","adjective","Adjectives","A2"],[1903,"Indifferent","উদাসীন","","adjective","Adjectives","B2"],[1904,"Inevitable","অনিবার্য","","adjective","Adjectives","B2"],[1905,"Infamous","কুখ্যাত","","adjective","Adjectives","B1"],[1906,"Infinite","অসীম","","adjective","Adjectives","B1"],[1907,"Ingenious","প্রতিভাধর","","adjective","Adjectives","B2"],[1908,"Insane","উন্মাদ","","adjective","Adjectives","B1"],[1909,"Insolent","উদ্ধত বা বেয়াদব","","adjective","Adjectives","B2"],[1910,"Instant","তাৎক্ষণিক","","adjective","Adjectives","A2"],[1911,"Intelligent","বুদ্ধিমান","","adjective","Adjectives","A2"],[1912,"Intense","তীব্র","","adjective","Adjectives","B1"],[1913,"Intentional","ইচ্ছাকৃত","","adjective","Adjectives","B1"],[1914,"Interested","আগ্রহী","","adjective","Adjectives","A1"],[1915,"Interesting","মজার বা চিত্তাকর্ষক","","adjective","Adjectives","A1"],[1916,"Intermediate","মাধ্যমিক","","adjective","Adjectives","B1"],[1917,"Internal","অভ্যন্তরীণ","","adjective","Adjectives","B1"],[1918,"Intimate","অন্তরঙ্গ","","adjective","Adjectives","B2"],[1919,"Invisible","অদৃশ্য","","adjective","Adjectives","A2"],[1920,"Jolly","প্রফুল্ল ও হাসিখুশি","","adjective","Adjectives","A2"],[1921,"Joyous","আনন্দপূর্ণ","","adjective","Adjectives","A2"],[1922,"Keen","তীক্ষ্ণ বা আগ্রহী","","adjective","Adjectives","B1"],[1923,"Knowledgeable","জ্ঞানী","","adjective","Adjectives","B1"],[1924,"Lame","খোঁড়া বা দুর্বল যুক্তি","","adjective","Adjectives","A2"],[1925,"Large","বড়","","adjective","Adjectives","A1"],[1926,"Lavish","আড়ম্বরপূর্ণ বা বিলাসবহুল","","adjective","Adjectives","B2"],[1927,"Legal","আইনি বা বৈধ","","adjective","Adjectives","A2"],[1928,"Legitimate","বৈধ","","adjective","Adjectives","B2"],[1929,"Lenient","কোমল বা সহানুভূতিশীল","","adjective","Adjectives","B2"],[1930,"Lethal","প্রাণঘাতী","","adjective","Adjectives","B2"],[1931,"Liberal","উদারপন্থী","","adjective","Adjectives","B1"],[1932,"Likely","সম্ভাব্য","","adjective","Adjectives","A2"],[1933,"Lively","প্রাণবন্ত","","adjective","Adjectives","A2"],[1934,"Logical","যৌক্তিক","","adjective","Adjectives","A2"],[1935,"Lovely","সুন্দর বা মনোরম","","adjective","Adjectives","A1"],[1936,"Loyal","বিশ্বস্ত ও অনুগত","","adjective","Adjectives","A2"],[1937,"Luminous","উজ্জ্বল","","adjective","Adjectives","B2"],[1938,"Mad","পাগল বা ক্ষিপ্ত","","adjective","Adjectives","A1"],[1939,"Magical","জাদুকরী","","adjective","Adjectives","A2"],[1940,"Magnificent","জমকালো বা চমৎকার","","adjective","Adjectives","B1"],[1941,"Major","প্রধান বা গুরুতর","","adjective","Adjectives","A2"],[1942,"Male","পুরুষ","","adjective","Adjectives","A1"],[1943,"Malicious","বিদ্বেষপরায়ণ","","adjective","Adjectives","B2"],[1944,"Mandatory","বাধ্যতামূলক","","adjective","Adjectives","B1"],[1945,"Marine","সামুদ্রিক","","adjective","Adjectives","B1"],[1946,"Massive","বিশাল আকারের","","adjective","Adjectives","A2"],[1947,"Mature","পরিপক্ব","","adjective","Adjectives","B1"],[1948,"Maximum","সর্বোচ্চ","","adjective","Adjectives","A2"],[1949,"Mean","হীন বা নীচ","","adjective","Adjectives","A2"],[1950,"Mediocre","মাঝারি মানের","","adjective","Adjectives","B2"],[1951,"Mellow","নরম ও মিষ্টি","","adjective","Adjectives","B2"],[1952,"Mental","মানসিক","","adjective","Adjectives","A2"],[1953,"Merciful","দয়ালু বা ক্ষমাশীল","","adjective","Adjectives","B1"],[1954,"Merry","আনন্দময়","","adjective","Adjectives","A2"],[1955,"Messy","এলোমেলো","","adjective","Adjectives","A2"],[1956,"Military","সামরিক","","adjective","Adjectives","A2"],[1957,"Mindful","সচেতন","","adjective","Adjectives","B1"],[1958,"Minimum","সর্বনিম্ন","","adjective","Adjectives","A2"],[1959,"Minor","অপ্রধান বা অপ্রাপ্তবয়স্ক","","adjective","Adjectives","A2"],[1960,"Miserable","শোচনীয় বা দুঃখী","","adjective","Adjectives","A2"],[1961,"Misleading","বিভ্রান্তিকর","","adjective","Adjectives","B1"],[1962,"Mobile","ভ্রাম্যমাণ","","adjective","Adjectives","A2"],[1963,"Moderate","পরিমিত","","adjective","Adjectives","B1"],[1964,"Modest","বিনয়ী বা পরিমিত","","adjective","Adjectives","B1"],[1965,"Moral","নৈতিক","","adjective","Adjectives","A2"],[1966,"Mortal","মরণশীল","","adjective","Adjectives","B1"],[1967,"Moving","মর্মস্পর্শী","","adjective","Adjectives","B1"],[1968,"Mutual","পারস্পরিক","","adjective","Adjectives","B1"],[1969,"Mysterious","রহস্যময়","","adjective","Adjectives","A2"],[1970,"Nasty","অপ্রীতিকর বা জঘন্য","","adjective","Adjectives","A2"],[1971,"Native","স্থানীয় বা স্বদেশী","","adjective","Adjectives","A2"],[1972,"Naughty","দুষ্টু","","adjective","Adjectives","A1"],[1973,"Neat","পরিপাটি","","adjective","Adjectives","A2"],[1974,"Necessary","প্রয়োজনীয়","","adjective","Adjectives","A2"],[1975,"Negative","নেতিবাচক","","adjective","Adjectives","A2"],[1976,"Neglectful","উদাসীন বা অবহেলাকারী","","adjective","Adjectives","B2"],[1977,"Neutral","নিরপেক্ষ","","adjective","Adjectives","B1"],[1978,"Noble","মহৎ বা অভিজাত","","adjective","Adjectives","A2"],[1979,"Noisy","কোলাহলপূর্ণ","","adjective","Adjectives","A1"],[1980,"Notable","উল্লেখযোগ্য","","adjective","Adjectives","B1"],[1981,"Novel","অভিনব","","adjective","Adjectives","B2"],[1982,"Numb","অসাড় বা অনুভূতিহীন","","adjective","Adjectives","B1"],[1983,"Numerous","অগণিত বা বহু","","adjective","Adjectives","B1"],[1984,"Obedient","বাধ্য বা অনুগত","","adjective","Adjectives","A2"],[1985,"Objective","বস্তুনিষ্ঠ","","adjective","Adjectives","B1"],[1986,"Obligatory","বাধ্যতামূলক","","adjective","Adjectives","B2"],[1987,"Obnoxious","অসহ্যকর","","adjective","Adjectives","B2"],[1988,"Obscure","অস্পষ্ট বা অপরিচিত","","adjective","Adjectives","B2"],[1989,"Obvious","সুস্পষ্ট","","adjective","Adjectives","A2"],[1990,"Odd","বিজোড় বা অদ্ভুত","","adjective","Adjectives","A2"],[1991,"Offensive","আপত্তিকর","","adjective","Adjectives","B1"],[1992,"Official","দাপ্তরিক বা সরকারি","","adjective","Adjectives","A2"],[1993,"Oily","তৈলাক্ত","","adjective","Adjectives","A1"],[1994,"Ominous","অশুভ","","adjective","Adjectives","B2"],[1995,"Optimistic","আশাবাদী","","adjective","Adjectives","B1"],[1996,"Oral","মৌখিক","","adjective","Adjectives","A2"],[1997,"Orderly","শৃঙ্খলিত","","adjective","Adjectives","B1"],[1998,"Ordinary","সাধারণ","","adjective","Adjectives","A2"],[1999,"Organic","জৈব","","adjective","Adjectives","B1"],[2000,"Original","আসল বা মৌলিক","","adjective","Adjectives","A2"],[2001,"Orthodox","সনাতনপন্থী","","adjective","Adjectives","B2"],[2002,"Outdoor","ঘরের বাইরে","","adjective","Adjectives","A1"],[2003,"Outrageous","বর্বরোচিত","","adjective","Adjectives","B2"],[2004,"Outstanding","অসামান্য বা বকেয়া","","adjective","Adjectives","B1"],[2005,"Overjoyed","পরম আনন্দিত","","adjective","Adjectives","B1"],[2006,"Pale","ফ্যাকাশে","","adjective","Adjectives","A2"],[2007,"Parallel","সমান্তরাল","","adjective","Adjectives","B1"],[2008,"Passionate","আবেগদীপ্ত","","adjective","Adjectives","B1"],[2009,"Passive","নিষ্ক্রিয়","","adjective","Adjectives","B1"],[2010,"Peaceful","শান্তিপূর্ণ","","adjective","Adjectives","A2"],[2011,"Peculiar","অস্বাভাবিক","","adjective","Adjectives","B1"],[2012,"Permanent","স্থায়ী","","adjective","Adjectives","A2"],[2013,"Personal","ব্যক্তিগত","","adjective","Adjectives","A1"],[2014,"Persuasive","প্ররোচনামূলক","","adjective","Adjectives","B2"],[2015,"Pessimistic","হতাশাবাদী","","adjective","Adjectives","B1"],[2016,"Petty","তুচ্ছ বা ছোটখাটো","","adjective","Adjectives","B1"],[2017,"Physical","শারীরিক বা প্রাকৃতিক","","adjective","Adjectives","A2"],[2018,"Picturesque","ছবির মতো সুন্দর","","adjective","Adjectives","B2"],[2019,"Pious","ধার্মিক বা পুণ্যবান","","adjective","Adjectives","B1"],[2020,"Pitiful","করুণ","","adjective","Adjectives","B1"],[2021,"Pleasant","মনোরম","","adjective","Adjectives","A2"],[2022,"Plentiful","প্রচুর","","adjective","Adjectives","B1"],[2023,"Poisonous","বিষাক্ত","","adjective","Adjectives","A2"],[2024,"Popular","জনপ্রিয়","","adjective","Adjectives","A1"],[2025,"Positive","ইতিবাচক","","adjective","Adjectives","A2"],[2026,"Potent","শক্তিশালী বা কার্যকর","","adjective","Adjectives","B2"],[2027,"Precious","মূল্যবান বা আদরের","","adjective","Adjectives","A2"],[2028,"Precise","নির্ভুল","","adjective","Adjectives","B1"],[2029,"Premature","অকাল বা সময়পূর্ব","","adjective","Adjectives","B2"],[2030,"Pretty","সুন্দর","","adjective","Adjectives","A1"],[2031,"Previous","পূর্ববর্তী","","adjective","Adjectives","A2"],[2032,"Pricey","দামি","","adjective","Adjectives","A2"],[2033,"Primary","প্রাথমিক","","adjective","Adjectives","A2"],[2034,"Primitive","আদিম","","adjective","Adjectives","B1"],[2035,"Principal","প্রধান","","adjective","Adjectives","B1"],[2036,"Probable","সম্ভাব্য","","adjective","Adjectives","A2"],[2037,"Productive","উৎপাদনশীল","","adjective","Adjectives","B1"],[2038,"Profound","গভীর বা অগাধ","","adjective","Adjectives","B2"],[2039,"Progressive","প্রগতিশীল","","adjective","Adjectives","B1"],[2040,"Prominent","বিশিষ্ট","","adjective","Adjectives","B1"],[2041,"Prompt","তৎক্ষণাৎ","","adjective","Adjectives","B1"],[2042,"Proper","যথাযথ","","adjective","Adjectives","A2"],[2043,"Prudent","বিচক্ষণ","","adjective","Adjectives","B2"],[2044,"Punctual","সময়নিষ্ঠ","","adjective","Adjectives","B1"],[2045,"Quaint","মনোহর ও প্রাচীন ধাঁচের","","adjective","Adjectives","B2"],[2046,"Qualified","যোগ্যতাসম্পন্ন","","adjective","Adjectives","A2"],[2047,"Quick","দ্রুত","","adjective","Adjectives","A1"],[2048,"Radical","মৌলিক বা আমূল","","adjective","Adjectives","B2"],[2049,"Rainy","বৃষ্টিবহুল","","adjective","Adjectives","A1"],[2050,"Random","এলোমেলো","","adjective","Adjectives","B1"],[2051,"Rapid","খুব দ্রুত","","adjective","Adjectives","A2"],[2052,"Rational","যুক্তিবাদী","","adjective","Adjectives","B1"],[2053,"Raw","কাঁচা","","adjective","Adjectives","A2"],[2054,"Realistic","বাস্তবসম্মত","","adjective","Adjectives","B1"],[2055,"Reasonable","যুক্তিসঙ্গত বা ন্যায্য","","adjective","Adjectives","A2"],[2056,"Reckless","বেপরোয়া","","adjective","Adjectives","B1"],[2057,"Redundant","অপ্রয়োজনীয় বা বাড়তি","","adjective","Adjectives","B2"],[2058,"Regular","নিয়মিত","","adjective","Adjectives","A1"],[2059,"Relaxed","ভারমুক্ত","","adjective","Adjectives","A1"],[2060,"Relevant","প্রাসঙ্গিক","","adjective","Adjectives","B1"],[2061,"Reluctant","অনিচ্ছুক","","adjective","Adjectives","B1"],[2062,"Remarkable","অসাধারণ","","adjective","Adjectives","B1"],[2063,"Remote","দূরবর্তী বা প্রত্যন্ত","","adjective","Adjectives","B1"],[2064,"Repetitive","পুনরাবৃত্তিমূলক","","adjective","Adjectives","B1"],[2065,"Resolute","দৃঢ়প্রতিজ্ঞ","","adjective","Adjectives","B2"],[2066,"Restless","অস্থির","","adjective","Adjectives","A2"],[2067,"Ridiculous","হাস্যকর","","adjective","Adjectives","A2"],[2068,"Rigid","অনমনীয় বা কড়া","","adjective","Adjectives","B1"],[2069,"Ripe","পাকা ফল","","adjective","Adjectives","A1"],[2070,"Risky","ঝুঁকিপূর্ণ","","adjective","Adjectives","A2"],[2071,"Robust","মজবুত ও বলবান","","adjective","Adjectives","B2"],[2072,"Rotten","পচা","","adjective","Adjectives","A2"],[2073,"Royal","রাজকীয়","","adjective","Adjectives","A2"],[2074,"Rural","গ্রামীণ","","adjective","Adjectives","A2"],[2075,"Sacred","পবিত্র","","adjective","Adjectives","B1"],[2076,"Salty","নোনতা","","adjective","Adjectives","A1"],[2077,"Sane","সুস্থ মস্তিষ্কের","","adjective","Adjectives","B1"],[2078,"Sarcastic","ব্যঙ্গাত্মক","","adjective","Adjectives","B2"],[2079,"Savage","বর্বর","","adjective","Adjectives","B2"],[2080,"Scared","ভীত","","adjective","Adjectives","A1"],[2081,"Scarce","দুর্লভ বা অপ্রতুল","","adjective","Adjectives","B2"],[2082,"Scenic","নয়নাভিরাম","","adjective","Adjectives","B1"],[2083,"Scientific","বৈজ্ঞানিক","","adjective","Adjectives","A2"],[2084,"Scornful","ঘৃণাপূর্ণ","","adjective","Adjectives","B2"],[2085,"Secondhand","ব্যবহৃত বা পুরনো","","adjective","Adjectives","A2"],[2086,"Sedentary","বসে থাকা জীবন","","adjective","Adjectives","B2"],[2087,"Sensational","চাঞ্চল্যকর","","adjective","Adjectives","B1"],[2088,"Sensible","বোধসম্পন্ন বা বুঝমান","","adjective","Adjectives","B1"],[2089,"Sensitive","সংবেদনশীল","","adjective","Adjectives","B1"],[2090,"Serene","প্রশান্ত","","adjective","Adjectives","B2"],[2091,"Severe","তীব্র বা মারাত্মক","","adjective","Adjectives","B1"],[2092,"Shabby","মলিন বা জীর্ণ","","adjective","Adjectives","B1"],[2093,"Shady","ছায়াঘেরা বা সন্দেহজনক","","adjective","Adjectives","A2"],[2094,"Shallow","অগভীর","","adjective","Adjectives","A2"],[2095,"Shameful","লজ্জাজনক","","adjective","Adjectives","B1"],[2096,"Shiny","চকচকে","","adjective","Adjectives","A1"],[2097,"Shocking","মর্মান্তিক বা চমকপ্রদ","","adjective","Adjectives","A2"],[2098,"Silly","বোকা বোকা","","adjective","Adjectives","A1"],[2099,"Sincere","আন্তরিক","","adjective","Adjectives","A2"],[2100,"Skillful","দক্ষ","","adjective","Adjectives","A2"],[2101,"Skinny","রোগা বা পাতলা","","adjective","Adjectives","A1"],[2102,"Sleepy","ঘুমকাতুরে","","adjective","Adjectives","A1"],[2103,"Slender","ছিপছিপে গড়নের","","adjective","Adjectives","B1"],[2104,"Slight","সামান্য","","adjective","Adjectives","A2"],[2105,"Slim","পাতলা গড়ন","","adjective","Adjectives","A1"],[2106,"Slippery","পিচ্ছিল","","adjective","Adjectives","A2"],[2107,"Snug","আরামদায়ক ও ফিট","","adjective","Adjectives","B1"],[2108,"Social","সামাজিক","","adjective","Adjectives","A2"],[2109,"Solid","কঠিন বা খাঁটি","","adjective","Adjectives","A2"],[2110,"Solitary","একাকী বা নিঃসঙ্গ","","adjective","Adjectives","B2"],[2111,"Sophisticated","রুচিশীল ও উন্নত","","adjective","Adjectives","B2"],[2112,"Spacious","প্রশস্ত বা খোলামেলা","","adjective","Adjectives","B1"],[2113,"Sparkling","চকচকে","","adjective","Adjectives","A2"],[2114,"Spectacular","দর্শনীয়","","adjective","Adjectives","B1"],[2115,"Splendid","চমৎকার বা মহিমান্বিত","","adjective","Adjectives","B1"],[2116,"Spontaneous","স্বতঃস্ফূর্ত","","adjective","Adjectives","B2"],[2117,"Spotless","দাগহীন বা পরিচ্ছন্ন","","adjective","Adjectives","B1"],[2118,"Stable","স্থায়ী বা স্থির","","adjective","Adjectives","B1"],[2119,"Stale","বাসি খাবার","","adjective","Adjectives","A2"],[2120,"Standard","মানসম্মত","","adjective","Adjectives","A2"],[2121,"Starving","অনাহারে কাতর","","adjective","Adjectives","A2"],[2122,"Static","স্থির","","adjective","Adjectives","B1"],[2123,"Steady","দৃঢ় বা স্থির","","adjective","Adjectives","A2"],[2124,"Steep","খাড়া ঢালু","","adjective","Adjectives","B1"],[2125,"Stern","কঠোর","","adjective","Adjectives","B2"],[2126,"Stiff","শক্ত বা অনমনীয়","","adjective","Adjectives","B1"],[2127,"Stingy","কৃপণ","","adjective","Adjectives","B1"],[2128,"Stormy","ঝড়ো","","adjective","Adjectives","A2"],[2129,"Stout","মোটা ও বলিষ্ঠ","","adjective","Adjectives","B1"],[2130,"Strange","অদ্ভুত বা অপরিচিত","","adjective","Adjectives","A1"],[2131,"Strict","কঠোর নিয়মপালনকারী","","adjective","Adjectives","A2"],[2132,"Stubborn","একগুঁয়ে বা জেদি","","adjective","Adjectives","A2"],[2133,"Sturdy","মজবুত বা টেকসই","","adjective","Adjectives","B1"],[2134,"Stylish","আড়ম্বরপূর্ণ বা স্টাইলিশ","","adjective","Adjectives","A2"],[2135,"Subtle","সূক্ষ্ম","","adjective","Adjectives","B2"],[2136,"Successful","সফল","","adjective","Adjectives","A1"],[2137,"Sudden","আকস্মিক বা হঠাৎ","","adjective","Adjectives","A2"],[2138,"Sufficient","যথেষ্ট বা পর্যাপ্ত","","adjective","Adjectives","B1"],[2139,"Suitable","উপযুক্ত বা মানানসই","","adjective","Adjectives","A2"],[2140,"Sunny","রৌদ্রোজ্জ্বল","","adjective","Adjectives","A1"],[2141,"Superb","চমৎকার বা সর্বোৎকৃষ্ট","","adjective","Adjectives","B1"],[2142,"Superficial","ভাসা-ভাসা","","adjective","Adjectives","B2"],[2143,"Superior","উন্নততর","","adjective","Adjectives","B1"],[2144,"Superstitious","কুসংস্কারাচ্ছন্ন","","adjective","Adjectives","B1"],[2145,"Supreme","সর্বোচ্চ","","adjective","Adjectives","B1"],[2146,"Sure","নিশ্চিত","","adjective","Adjectives","A1"],[2147,"Suspicious","সন্দেহজনক","","adjective","Adjectives","B1"],[2148,"Sustainable","টেকসই","","adjective","Adjectives","B2"],[2149,"Swift","দ্রুতগামী","","adjective","Adjectives","B1"],[2150,"Sympathetic","সহানুভূতিশীল","","adjective","Adjectives","B1"],[2151,"Tactful","কৌশলী","","adjective","Adjectives","B2"],[2152,"Talented","প্রতিভাবান","","adjective","Adjectives","A2"],[2153,"Tame","পোষা প্রাণী","","adjective","Adjectives","B1"],[2154,"Tangible","মূর্ত বা স্পর্শযোগ্য","","adjective","Adjectives","B2"],[2155,"Tasty","সুস্বাদু","","adjective","Adjectives","A1"],[2156,"Tedious","ক্লান্তিকর বা একঘেয়ে","","adjective","Adjectives","B2"],[2157,"Tender","কোমল বা মায়াবী","","adjective","Adjectives","A2"],[2158,"Tense","উত্তেজনাপূর্ণ","","adjective","Adjectives","A2"],[2159,"Terrible","ভয়ানক খারাপ","","adjective","Adjectives","A1"],[2160,"Terrific","দারুণ বা অসাধারণ","","adjective","Adjectives","A2"],[2161,"Thick","পুরু বা ঘন","","adjective","Adjectives","A1"],[2162,"Thin","পাতলা বা চিকন","","adjective","Adjectives","A1"],[2163,"Thorough","পুঙ্খানুপুঙ্খ","","adjective","Adjectives","B1"],[2164,"Thoughtful","চিন্তাশীল বা যত্নবান","","adjective","Adjectives","A2"],[2165,"Thrifty","মিতব্যয়ী","","adjective","Adjectives","B2"],[2166,"Thrilled","অত্যন্ত রোমাঞ্চিত","","adjective","Adjectives","A2"],[2167,"Tidy","পরিপাটি","","adjective","Adjectives","A1"],[2168,"Timely","সময়োপযোগী","","adjective","Adjectives","B1"],[2169,"Timid","ভীতু বা লাজুক","","adjective","Adjectives","B1"],[2170,"Tiny","খুবই ক্ষুদ্র","","adjective","Adjectives","A1"],[2171,"Tireless","অক্লান্ত","","adjective","Adjectives","B1"],[2172,"Tiresome","বিরক্তিকর","","adjective","Adjectives","B1"],[2173,"Tolerant","সহনশীল","","adjective","Adjectives","B1"],[2174,"Tough","কঠিন বা শক্তপোক্ত","","adjective","Adjectives","A2"],[2175,"Toxic","বিষাক্ত","","adjective","Adjectives","B1"],[2176,"Traditional","ঐতিহ্যবাহী","","adjective","Adjectives","A2"],[2177,"Tragic","মর্মান্তিক বা বিয়োগান্তক","","adjective","Adjectives","B1"],[2178,"Transparent","স্বচ্ছ","","adjective","Adjectives","B1"],[2179,"Tremendous","বিশাল বা প্রচণ্ড","","adjective","Adjectives","B1"],[2180,"Trendy","জনপ্রিয় ধারার","","adjective","Adjectives","A2"],[2181,"Tricky","কৌশলী বা জটিল","","adjective","Adjectives","B1"],[2182,"Trivial","তুচ্ছ","","adjective","Adjectives","B2"],[2183,"Troublesome","ঝামেলাপূর্ণ","","adjective","Adjectives","B1"],[2184,"Trustworthy","বিশ্বাসযোগ্য","","adjective","Adjectives","B1"],[2185,"Truthful","সত্যবাদী","","adjective","Adjectives","A2"],[2186,"Typical","চিরাচরিত বা স্বাভাবিক","","adjective","Adjectives","A2"],[2187,"Ugly","কুৎসিত","","adjective","Adjectives","A1"],[2188,"Ultimate","চূড়ান্ত","","adjective","Adjectives","B1"],[2189,"Unanimous","সর্বসম্মত","","adjective","Adjectives","B2"],[2190,"Unbearable","অসহ্য","","adjective","Adjectives","B1"],[2191,"Uncertain","অনিশ্চিত","","adjective","Adjectives","A2"],[2192,"Uncomfortable","অস্বস্তিকর","","adjective","Adjectives","A2"],[2193,"Uncommon","অস্বাভাবিক বা বিরল","","adjective","Adjectives","B1"],[2194,"Unconscious","অজ্ঞান বা অচেতন","","adjective","Adjectives","B1"],[2195,"Undeniable","অনস্বীকার্য","","adjective","Adjectives","B2"],[2196,"Uneasy","অস্বস্তিকর","","adjective","Adjectives","B1"],[2197,"Unequal","অসমান","","adjective","Adjectives","B1"],[2198,"Unexpected","অপ্রত্যাশিত","","adjective","Adjectives","A2"],[2199,"Unfair","অন্যায় বা অবিচারপূর্ণ","","adjective","Adjectives","A2"],[2200,"Unfortunate","দুর্ভাগ্যজনক","","adjective","Adjectives","A2"],[2201,"Unhappy","অসুখী বা বিষণ্ণ","","adjective","Adjectives","A1"],[2202,"Unique","অনন্য বা অদ্বিতীয়","","adjective","Adjectives","A2"],[2203,"United","ঐক্যবদ্ধ","","adjective","Adjectives","A2"],[2204,"Universal","সার্বজনীন বা বিশ্বজনীন","","adjective","Adjectives","B1"],[2205,"Unjust","অন্যায়","","adjective","Adjectives","B1"],[2206,"Unknown","অজানা বা অপরিচিত","","adjective","Adjectives","A1"],[2207,"Unlikely","অসম্ভাব্য","","adjective","Adjectives","B1"],[2208,"Unlimited","সীমাহীন","","adjective","Adjectives","A2"],[2209,"Unnecessary","অপ্রয়োজনীয়","","adjective","Adjectives","A2"],[2210,"Unpleasant","অপ্রীতিকর","","adjective","Adjectives","A2"],[2211,"Unprecedented","অভূতপূর্ব","","adjective","Adjectives","B2"],[2212,"Unreasonable","অযৌক্তিক","","adjective","Adjectives","B1"],[2213,"Unreliable","অনির্ভরযোগ্য","","adjective","Adjectives","B1"],[2214,"Unruly","উচ্ছৃঙ্খল","","adjective","Adjectives","B2"],[2215,"Unsafe","বিপদজনক","","adjective","Adjectives","A1"],[2216,"Unstable","অস্থির বা টলমলে","","adjective","Adjectives","B1"],[2217,"Untidy","অগোছালো","","adjective","Adjectives","A2"],[2218,"Unusual","অস্বাভাবিক","","adjective","Adjectives","A2"],[2219,"Unwilling","অনিচ্ছুক","","adjective","Adjectives","B1"],[2220,"Upbeat","উৎফুল্ল বা ইতিবাচক","","adjective","Adjectives","B1"],[2221,"Upper","উপরের","","adjective","Adjectives","A2"],[2222,"Upset","মনখারাপ বা বিব্রত","","adjective","Adjectives","A1"],[2223,"Urban","শহুরে বা পৌর","","adjective","Adjectives","A2"],[2224,"Usual","স্বাভাবিক বা প্রাত্যহিক","","adjective","Adjectives","A1"],[2225,"Vacant","খালি বা শূন্য","","adjective","Adjectives","B1"],[2226,"Vague","অস্পষ্ট বা ধোঁয়াটে","","adjective","Adjectives","B1"],[2227,"Vain","বৃথা বা অহংকারী","","adjective","Adjectives","B2"],[2228,"Valiant","বীরত্বপূর্ণ","","adjective","Adjectives","B2"],[2229,"Valid","বৈধ বা সঠিক","","adjective","Adjectives","A2"],[2230,"Various","বিভিন্ন বা নানা রকম","","adjective","Adjectives","A2"],[2231,"Vast","বিশাল বা সুবিস্তৃত","","adjective","Adjectives","B1"],[2232,"Versatile","বহুমুখী প্রতিভাধর","","adjective","Adjectives","B2"],[2233,"Vibrant","প্রাণবন্ত ও উজ্জ্বল","","adjective","Adjectives","B2"],[2234,"Vicious","দুষ্ট বা হিংস্র","","adjective","Adjectives","B2"],[2235,"Victorious","বিজয়ী","","adjective","Adjectives","B1"],[2236,"Vigorous","বলিষ্ঠ ও উদ্যমী","","adjective","Adjectives","B2"],[2237,"Violent","সহিংস বা উগ্র","","adjective","Adjectives","A2"],[2238,"Virtual","ভার্চুয়াল বা পরোক্ষ","","adjective","Adjectives","A2"],[2239,"Visible","দৃশ্যমান","","adjective","Adjectives","A2"],[2240,"Vital","অত্যাবশ্যক বা প্রাণবন্ত","","adjective","Adjectives","B1"],[2241,"Vivid","স্পষ্ট ও প্রাণবন্ত","","adjective","Adjectives","B2"],[2242,"Vocal","সোচ্চার বা কণ্ঠসম্বন্ধীয়","","adjective","Adjectives","B1"],[2243,"Volatile","উদ্বায়ী বা পরিবর্তনশীল","","adjective","Adjectives","B2"],[2244,"Voluntary","স্বেচ্ছাসেবী","","adjective","Adjectives","B1"],[2245,"Vulnerable","অরক্ষিত বা দুর্বল","","adjective","Adjectives","B2"],[2246,"Warm","উষ্ণ বা আন্তরিক","","adjective","Adjectives","A1"],[2247,"Wary","সতর্ক বা সাবধানী","","adjective","Adjectives","B2"],[2248,"Wasteful","অপব্যয়ী","","adjective","Adjectives","B1"],[2249,"Watchful","সজাগ","","adjective","Adjectives","B1"],[2250,"Waterproof","পানিনিরোধক","","adjective","Adjectives","A2"],[2251,"Wealthy","ধনী বা সম্পদশালী","","adjective","Adjectives","A2"],[2252,"Weary","ক্লান্ত বা শ্রান্ত","","adjective","Adjectives","B1"],[2253,"Weighty","ভারী বা গুরুত্বপূর্ণ","","adjective","Adjectives","B1"],[2254,"Weird","অদ্ভুত","","adjective","Adjectives","A2"],[2255,"Wicked","পাপী বা দুষ্ট","","adjective","Adjectives","A2"],[2256,"Wide","প্রশস্ত বা চওড়া","","adjective","Adjectives","A1"],[2257,"Widespread","ব্যাপক বা দূরপ্রসারী","","adjective","Adjectives","B1"],[2258,"Wild","বন্য বা বুনো","","adjective","Adjectives","A1"],[2259,"Willing","ইচ্ছুক বা সম্মত","","adjective","Adjectives","A2"],[2260,"Windy","বাতাসময়","","adjective","Adjectives","A1"],[2261,"Wise","জ্ঞানী বা বিজ্ঞ","","adjective","Adjectives","A2"],[2262,"Witty","রসাত্মক বা উপস্থিত বুদ্ধিসম্পন্ন","","adjective","Adjectives","B1"],[2263,"Woeful","শোচনীয়","","adjective","Adjectives","B2"],[2264,"Wonderful","চমৎকার বা অসাধারণ","","adjective","Adjectives","A1"],[2265,"Wooden","কাঠের তৈরি","","adjective","Adjectives","A1"],[2266,"Woolen","উলের তৈরি","","adjective","Adjectives","A1"],[2267,"Wordy","বাগাড়ম্বরপূর্ণ বা কথাবহুল","","adjective","Adjectives","B2"],[2268,"Worthless","মূল্যহীন বা অপদার্থ","","adjective","Adjectives","A2"],[2269,"Worthwhile","সার্থক বা লাভজনক","","adjective","Adjectives","B1"],[2270,"Worthy","যোগ্য বা উপযুক্ত","","adjective","Adjectives","B1"],[2271,"Wounded","আহত","","adjective","Adjectives","A2"],[2272,"Zealous","উৎসাহী বা উদ্দীপনাময়","","adjective","Adjectives","B2"],[2273,"Agenda","আলোচ্যসূচি","","noun","Workplace","B1"],[2274,"Appraisal","কর্মদক্ষতা মূল্যায়ন","","noun","Workplace","B2"],[2275,"Bonus","উৎসব ভাতা বা বোনাস","","noun","Workplace","A2"],[2276,"Breakroom","বিশ্রামাগার","","noun","Workplace","A2"],[2277,"Briefcase","অফিস ব্যাগ","","noun","Workplace","A2"],[2278,"Compensation","ক্ষতিপূরণ বা পারিশ্রমিক","","noun","Workplace","B2"],[2279,"Coworker","সহকর্মী","","noun","Workplace","A2"],[2280,"Cubicle","কর্মকক্ষ বা কিউবিকল","","noun","Workplace","B1"],[2281,"Delegation","দায়িত্ব অর্পণ বা প্রতিনিধিদল","","noun","Workplace","B2"],[2282,"Dismissal","চাকরিচ্যুতি","","noun","Workplace","B2"],[2283,"Efficiency","দক্ষতা","","noun","Workplace","B1"],[2284,"Elevator","লিফট","","noun","Workplace","A1"],[2285,"Employer","নিয়োগকর্তা","","noun","Workplace","A2"],[2286,"Executive","নির্বাহী","","noun","Workplace","B1"],[2287,"Expertise","দক্ষতা বা পারদর্শিতা","","noun","Workplace","B2"],[2288,"Headquarters","প্রধান কার্যালয়","","noun","Workplace","B1"],[2289,"Incentive","প্রণোদনা","","noun","Workplace","B1"],[2290,"Initiative","উদ্যোগ","","noun","Workplace","B1"],[2291,"Innovation","উদ্ভাবন","","noun","Workplace","B1"],[2292,"Internship","শিক্ষানবিসি","","noun","Workplace","B1"],[2293,"Inventory","মজুদ পণ্যের তালিকা","","noun","Workplace","B1"],[2294,"Leadership","নেতৃত্ব","","noun","Workplace","B1"],[2295,"Negotiation","দরকষাকষি বা আলোচনা","","noun","Workplace","B1"],[2296,"Overtime","অতিরিক্ত কাজের সময়","","noun","Workplace","A2"],[2297,"Payroll","বেতন তালিকা","","noun","Workplace","B1"],[2298,"Pension","অবসর ভাতা বা পেনশন","","noun","Workplace","B1"],[2299,"Personnel","কর্মীবৃন্দ","","noun","Workplace","B1"],[2300,"Portfolio","কাজের নিদর্শন বা পোর্টফোলিও","","noun","Workplace","B2"],[2301,"Punctuality","সময়নিষ্ঠতা","","noun","Workplace","B1"],[2302,"Qualification","যোগ্যতা","","noun","Workplace","A2"],[2303,"Quotation","মূল্য উদ্ধৃতি বা দর","","noun","Workplace","B1"],[2304,"Receptionist","অভ্যর্থনাকারী","","noun","Workplace","A2"],[2305,"Redundancy","উদ্বৃত্ত জনবল ছাঁটাই","","noun","Workplace","B2"],[2306,"Resignation","পদত্যাগ","","noun","Workplace","B1"],[2307,"Resolution","মীমাংসা বা সংকল্প","","noun","Workplace","B1"],[2308,"Restructure","পুনর্গঠন","","noun","Workplace","B2"],[2309,"Roster","দায়িত্বের তালিকা বা রোস্টার","","noun","Workplace","B1"],[2310,"Stakeholder","অংশীজন বা স্টেকহোল্ডার","","noun","Workplace","B2"],[2311,"Strategy","কৌশল বা কর্মপন্থা","","noun","Workplace","B1"],[2312,"Supervision","তত্ত্বাবধান","","noun","Workplace","B1"],[2313,"Synergy","যৌথ সমন্বয় বা শক্তি","","noun","Workplace","B2"],[2314,"Taskforce","বিশেষ কার্যদল","","noun","Workplace","B2"],[2315,"Turnover","ব্যবসায়িক আবর্তন বা কর্মী পরিবর্তন","","noun","Workplace","B2"],[2316,"Workstation","কাজের টেবিল","","noun","Workplace","A2"],[2317,"Amortization","ঋণ পরিশোধের হিসাব","","noun","Finance","B2"],[2318,"Asset","সম্পদ বা পরিসম্পদ","","noun","Finance","B1"],[2319,"Audit","হিসাব নিরীক্ষা","","noun","Finance","B1"],[2320,"Bailout","আর্থিক উদ্ধার","","noun","Finance","B2"],[2321,"Bankruptcy","দেউলিয়াত্ব","","noun","Finance","B2"],[2322,"Benchmark","মানদণ্ড","","noun","Finance","B2"],[2323,"Bond","বন্ড বা ঋণপত্র","","noun","Finance","B1"],[2324,"Broker","দালাল বা মধ্যস্থতাকারী","","noun","Finance","B1"],[2325,"Collateral","জামিন বা বন্ধকি সম্পত্তি","","noun","Finance","B2"],[2326,"Commodity","পণ্যদ্রব্য","","noun","Finance","B1"],[2327,"Creditor","পাওনাদার","","noun","Finance","B1"],[2328,"Debt","ঋণ বা দেনা","","noun","Finance","A2"],[2329,"Debtor","দেনাদার","","noun","Finance","B1"],[2330,"Deficit","ঘাটতি","","noun","Finance","B1"],[2331,"Dividend","লভ্যাংশ","","noun","Finance","B2"],[2332,"Equity","ন্যায্যতা বা মূলধন অংশ","","noun","Finance","B2"],[2333,"Expenditure","ব্যয় বা খরচ","","noun","Finance","B1"],[2334,"Fiscal","আর্থিক বা রাজস্ব","","noun","Finance","B2"],[2335,"Inflation","মুদ্রাস্ফীতি","","noun","Finance","B1"],[2336,"Insolvent","ঋণ শোধে অক্ষম বা দেউলিয়া","","noun","Finance","B2"],[2337,"Interest","সুদ","","noun","Finance","A2"],[2338,"Investment","বিনিয়োগ","","noun","Finance","A2"],[2339,"Liability","দায় বা দেনা","","noun","Finance","B1"],[2340,"Liquidity","তারল্য","","noun","Finance","B2"],[2341,"Merger","একীভূতকরণ","","noun","Finance","B2"],[2342,"Mortgage","বন্ধক বা গৃহঋণ","","noun","Finance","B1"],[2343,"Premium","বীমা কিস্তি বা প্রিমিয়াম","","noun","Finance","B1"],[2344,"Recession","অর্থনৈতিক মন্দা","","noun","Finance","B2"],[2345,"Revenue","আয় বা রাজস্ব","","noun","Finance","B1"],[2346,"Shareholder","শেয়ারমালিক","","noun","Finance","B1"],[2347,"Solvency","ঋণ শোধের সামর্থ্য","","noun","Finance","B2"],[2348,"Subsidy","ভর্তুকি","","noun","Finance","B2"],[2349,"Surplus","উদ্বৃত্ত","","noun","Finance","B1"],[2350,"Tariff","শুল্ক বা মাশুল","","noun","Finance","B2"],[2351,"Transaction","লেনদেন","","noun","Finance","A2"],[2352,"algorithm","অ্যালগরিদম বা ধাপে ধাপে গণনা","","noun","Tech","B1"],[2353,"bandwidth","ব্যান্ডউইথ বা ডেটা চলাচলের ক্ষমতা","","noun","Tech","B1"],[2354,"binary","বাইনারি বা দ্বিমিক","","noun","Tech","B1"],[2355,"bluetooth","ব্লুটুথ","","noun","Tech","A2"],[2356,"cache","ক্যাশ মেমোরি","","noun","Tech","B1"],[2357,"compression","সংকোচন বা সাইজ কমানো","","noun","Tech","B1"],[2358,"cookie","ব্রাউজার কুকি","","noun","Tech","A2"],[2359,"cryptography","তথ্য গোপনবিদ্যা বা ক্রিপ্টোগ্রাফি","","noun","Tech","B2"],[2360,"cybersecurity","সাইবার নিরাপত্তা","","noun","Tech","B1"],[2361,"dashboard","ড্যাশবোর্ড বা নিয়ন্ত্রণ ফলক","","noun","Tech","A2"],[2362,"database","ডাটাবেস বা তথ্যভাণ্ডার","","noun","Tech","B1"],[2363,"debugging","সফটওয়্যারের ত্রুটি সংশোধন","","noun","Tech","B1"],[2364,"encryption","তথ্য গুপ্তায়ন বা এনক্রিপশন","","noun","Tech","B2"],[2365,"firewall","ফায়ারওয়াল বা নিরাপত্তা প্রাচীর","","noun","Tech","B1"],[2366,"firmware","ফার্মওয়্যার","","noun","Tech","B2"],[2367,"framework","ফ্রেমওয়ার্ক বা কাঠামোগত ভিত্তি","","noun","Tech","B1"],[2368,"gigabyte","গিগাবাইট","","noun","Tech","A2"],[2369,"hardware","যন্ত্রাংশ বা হার্ডওয়্যার","","noun","Tech","A2"],[2370,"hyperlink","ওয়েব লিংক বা সংযোগ","","noun","Tech","A2"],[2371,"interface","ইন্টারফেস বা সংযোগ মাধ্যম","","noun","Tech","B1"],[2372,"malware","ক্ষতিকারক সফটওয়্যার","","noun","Tech","B1"],[2373,"metadata","উপাত্তের উপাত্ত বা মেটাডেটা","","noun","Tech","B2"],[2374,"microprocessor","মাইক্রোপ্রসেসর","","noun","Tech","B1"],[2375,"modem","মডেম","","noun","Tech","A2"],[2376,"multimedia","মাল্টিমিডিয়া বা বহুমাধ্যম","","noun","Tech","A2"],[2377,"offline","সংযোগহীন বা অফলাইন","","noun","Tech","A1"],[2378,"operating system","অপারেটিং সিস্টেম","","noun","Tech","A2"],[2379,"pixel","পিক্সেল বা বিন্দুর মাপ","","noun","Tech","A2"],[2380,"processor","প্রসেসর","","noun","Tech","A2"],[2381,"protocol","নিয়ম বা প্রোটোকল","","noun","Tech","B1"],[2382,"repository","কোড ভাণ্ডার বা রিপোজিটরি","","noun","Tech","B2"],[2383,"screenshot","স্ক্রিনশট বা পর্দার ছবি","","noun","Tech","A1"],[2384,"search engine","সার্চ ইঞ্জিন বা অনুসন্ধানকারী","","noun","Tech","A2"],[2385,"server","সার্ভার বা সেবাদাতা কম্পিউটার","","noun","Tech","A2"],[2386,"software","সফটওয়্যার বা কম্পিউটার প্রোগ্রাম","","noun","Tech","A1"],[2387,"spreadsheet","স্প্রেডশিট বা হিসাবের ছক","","noun","Tech","A2"],[2388,"streaming","সরাসরি সম্প্রচার বা স্ট্রিমিং","","noun","Tech","A2"],[2389,"synchronize","সমন্বিত বা সিঙ্ক করা","","noun","Tech","B1"],[2390,"terabyte","টেরাবাইট","","noun","Tech","A2"],[2391,"touchscreen","স্পর্শ সংবেদনশীল পর্দা","","noun","Tech","A1"],[2392,"upgrade","উন্নত সংস্করণে রূপান্তর","","noun","Tech","A2"],[2393,"virtual reality","ভার্চুয়াল বাস্তবতা","","noun","Tech","B1"],[2394,"wireless","তারবিহীন বা ওয়্যারলেস","","noun","Tech","A1"],[2395,"Ubiquitous","সর্বব্যাপী বা সর্বত্র বিদ্যমান","","adjective","Academic","C1"],[2396,"Meticulous","খুঁতখুঁতে বা অতিমাত্রায় সতর্ক","","adjective","Academic","C1"],[2397,"Resilient","সহনশীল বা প্রতিকূলতা জয়ী","","adjective","Academic","B2"],[2398,"Eloquent","বাকপটু বা সুবক্তা","","adjective","Academic","C1"],[2399,"Paramount","সর্বোচ্চ গুরুত্বপূর্ণ","","adjective","Academic","C1"],[2400,"Benevolent","পরোপকারী বা দয়ালু","","adjective","Academic","B2"],[2401,"Malevolent","অমঙ্গলকামী বা পরশ্রীকাতর","","adjective","Academic","C1"],[2402,"Pragmatic","বাস্তবধর্মী বা বাস্তববাদী","","adjective","Academic","B2"],[2403,"Ephemeral","ক্ষণস্থায়ী বা ক্ষণিকের","","adjective","Academic","C1"],[2404,"Candid","অকপট বা স্পষ্টবাদী","","adjective","Academic","B2"],[2405,"Aesthetic","নান্দনিক বা সৌন্দর্যবোধসম্পর্কিত","","adjective","Academic","B2"],[2406,"Bolster","সমর্থন বা জোরদার করা","","adjective","Academic","B2"],[2407,"Mitigate","লাঘব করা বা তীব্রতা কমানো","","adjective","Academic","C1"],[2408,"Scrutinize","খুঁটিয়ে পরীক্ষা করা","","adjective","Academic","C1"],[2409,"Advocate","পক্ষ সমর্থন করা","","adjective","Academic","B2"],[2410,"Reconcile","মীমাংসা বা সমন্বয় করা","","adjective","Academic","B2"],[2411,"Delineate","সুস্পষ্টভাবে বর্ণনা করা","","adjective","Academic","C1"],[2412,"Fabricate","জাল করা বা মনগড়া বানানো","","adjective","Academic","B2"],[2413,"Invoke","স্মরণ বা সাহায্য প্রার্থনা করা","","adjective","Academic","C1"],[2414,"Renounce","স্বেচ্ছায় ত্যাগ করা","","adjective","Academic","C1"],[2415,"Innovate","নতুন কিছু উদ্ভাবন করা","","adjective","Academic","B2"],[2416,"Synthesize","সংশ্লেষণ বা একত্রীকরণ করা","","adjective","Academic","C1"],[2417,"Corroborate","সাক্ষ্যপ্রমাণ দিয়ে সমর্থন করা","","adjective","Academic","C1"],[2418,"Vindicate","দোষমুক্ত ঘোষণা করা বা সত্য প্রমাণ","","adjective","Academic","C1"],[2419,"Augment","বৃদ্ধি বা পরিবর্ধন করা","","adjective","Academic","C1"],[2420,"Emulate","অনুকরণ বা সমকক্ষ হওয়ার চেষ্টা","","adjective","Academic","C1"],[2421,"Articulate","স্পষ্টভাবে উচ্চারণ বা প্রকাশ করা","","adjective","Academic","C1"],[2422,"Fathom","গভীরতা বা মর্মার্থ উপলব্ধি করা","","adjective","Academic","B2"],[2423,"Juxtapose","পাশাপাশি রেখে তুলনা করা","","adjective","Academic","C1"],[2424,"Appease","শান্ত বা তোষণ করা","","adjective","Academic","C1"],[2425,"Repudiate","প্রত্যাখ্যান বা অস্বীকার করা","","adjective","Academic","C1"],[2426,"Exacerbate","পরিস্থিতি আরও খারাপ করা","","adjective","Academic","C1"],[2427,"Expedite","কাজ ত্বরান্বিত বা দ্রুত করা","","adjective","Academic","C1"],[2428,"Condescend","অহমিকা দেখিয়ে দয়া প্রদর্শন","","adjective","Academic","C1"],[2429,"Obfuscate","দুর্বোধ্য বা অস্পষ্ট করে তোলা","","adjective","Academic","C1"],[2430,"Perpetuate","চিরস্থায়ী করে রাখা","","adjective","Academic","C1"],[2431,"Fluctuate","ওঠানামা বা পরিবর্তনশীল হওয়া","","adjective","Academic","B2"],[2432,"Consolidate","দৃঢ় বা সংহত করা","","adjective","Academic","B2"],[2433,"Diversify","বৈচিত্র্যময় বা বহুমুখী করা","","adjective","Academic","B2"],[2434,"Transcend","সীমা অতিক্রম বা শ্রেষ্ঠতর হওয়া","","adjective","Academic","C1"],[2435,"Adhere","লেগে থাকা বা নিয়ম মেনে চলা","","adjective","Academic","B2"],[2436,"Allocate","বরাদ্দ দেওয়া","","adjective","Academic","B2"],[2437,"Assess","মূল্যায়ন করা","","adjective","Academic","B1"],[2438,"Compensate","ক্ষতিপূরণ দেওয়া","","adjective","Academic","B2"],[2439,"Differentiate","পার্থক্য নির্ণয় করা","","adjective","Academic","B2"],[2440,"Eliminate","বর্জন বা সম্পূর্ণ দূর করা","","adjective","Academic","B2"],[2441,"Emphasize","বিশেষ গুরুত্ব বা জোর দেওয়া","","adjective","Academic","B1"],[2442,"Evaluate","মূল্য বা ফলাফল যাচাই করা","","adjective","Academic","B2"],[2443,"Facilitate","সহজতর বা সুগম করা","","adjective","Academic","B2"],[2444,"Formulate","সূত্রবদ্ধ বা প্রণয়ন করা","","adjective","Academic","B2"],[2445,"Integrate","একীভূত বা সংযুক্ত করা","","adjective","Academic","B2"],[2446,"Interpret","ব্যাখ্যা বা অর্থ প্রকাশ করা","","adjective","Academic","B2"],[2447,"Justify","ন্যায্যতা প্রমাণ করা","","adjective","Academic","B2"],[2448,"Monitor","নজরদারি বা পর্যবেক্ষণ করা","","adjective","Academic","B1"],[2449,"Negotiate","দরকষাকষি বা আপস করা","","adjective","Academic","B2"],[2450,"Optimize","সর্বোত্তম ব্যবহার নিশ্চিত করা","","adjective","Academic","B2"],[2451,"Perceive","উপলব্ধি বা টের পাওয়া","","adjective","Academic","B2"],[2452,"Prioritize","অগ্রাধিকার প্রদান করা","","adjective","Academic","B2"],[2453,"Terminate","সমাপ্ত বা বাতিল করা","","adjective","Academic","B2"],[2454,"Transform","আমূল রূপান্তর করা","","adjective","Academic","B1"],[2455,"Undermine","তলে তলে ভিত্তি দুর্বল করা","","adjective","Academic","C1"],[2456,"Validate","বৈধতা বা সত্যতা নিশ্চিত করা","","adjective","Academic","B2"],[2457,"Verify","যাচাই করে সত্যতা নিশ্চিত করা","","adjective","Academic","B1"],[2458,"Aberration","স্বাভাবিক গতিপথ থেকে বিচ্যুতি","","adjective","Academic","C1"],[2459,"Alacrity","উৎসাহ ও তৎপরতা","","adjective","Academic","C1"],[2460,"Anachronism","কালভ্রান্তি বা সময়ের সাথে বেমানান","","adjective","Academic","C1"],[2461,"Anomalous","ব্যতিক্রমী বা অস্বাভাবিক","","adjective","Academic","C1"],[2462,"Antipathy","তীব্র বিদ্বেষ বা অনীহা","","adjective","Academic","C1"],[2463,"Arcane","গোপন ও রহস্যময় জ্ঞান","","adjective","Academic","C1"],[2464,"Audacious","সাহসী কিন্তু বেপরোয়া","","adjective","Academic","C1"],[2465,"Austere","অনাড়ম্বর বা অত্যন্ত কঠোর","","adjective","Academic","C1"],[2466,"Belligerent","যুদ্ধংদেহী বা ঝগড়াটে","","adjective","Academic","C1"],[2467,"Cacophony","কর্কশ কোলাহল","","adjective","Academic","C1"],[2468,"Capricious","খামখেয়ালী বা অস্থিরমতি","","adjective","Academic","C1"],[2469,"Castigate","কঠোর ভাষায় তিরস্কার করা","","adjective","Academic","C1"],[2470,"Cogent","অকাট্য বা যুক্তিসঙ্গত","","adjective","Academic","C1"],[2471,"Deference","বিনম্র শ্রদ্ধা বা সম্মান প্রদর্শন","","adjective","Academic","C1"],[2472,"Didactic","নীতিকথামূলক বা শিক্ষামূলক","","adjective","Academic","C1"],[2473,"Disparate","একেবারে ভিন্ন বা অসদৃশ","","adjective","Academic","C1"],[2474,"Dogmatic","গোঁড়া বা মতান্ধ","","adjective","Academic","C1"],[2475,"Eccentric","খামখেয়ালি বা অদ্ভুত স্বভাবের","","adjective","Academic","B2"],[2476,"Enervate","শক্তিহীন বা দুর্বল করা","","adjective","Academic","C1"],[2477,"Engender","জন্ম দেওয়া বা উৎপাদন করা","","adjective","Academic","C1"],[2478,"Enigma","রহস্য বা ধাঁধা","","adjective","Academic","B2"],[2479,"Equivocal","দ্ব্যর্থবোধক বা অস্পষ্ট","","adjective","Academic","C1"],[2480,"Erudite","পাণ্ডিত্যপূর্ণ বা বিদ্বান","","adjective","Academic","C1"],[2481,"Esoteric","অতিগূঢ় বা স্বল্পবোধ্য","","adjective","Academic","C1"],[2482,"Eulogy","উচ্চ প্রশংসামূলক বক্তব্য","","adjective","Academic","C1"],[2483,"Fastidious","খুঁতখুঁতে স্বভাবের","","adjective","Academic","C1"],[2484,"Fervid","প্রবল আবেগময় বা উদ্দীপ্ত","","adjective","Academic","C1"],[2485,"Garrulous","বাচাল বা অতিরিক্ত কথাবলা","","adjective","Academic","C1"],[2486,"Gregarious","মিশুক বা সামাজিক স্বভাবের","","adjective","Academic","C1"],[2487,"Hackneyed","বহুলব্যবহারে জীর্ণ বা একঘেয়ে","","adjective","Academic","C1"],[2488,"Iconoclast","প্রথা বা সংস্কার ভাঙনে বিশ্বাসী","","adjective","Academic","C1"],[2489,"Immutable","অপরিবর্তনীয় বা অটল","","adjective","Academic","C1"],[2490,"Impassive","ভাবলেশহীন বা আবেগহীন","","adjective","Academic","C1"],[2491,"Impervious","অভেদ্য বা অপ্রভাবিত","","adjective","Academic","C1"],[2492,"Inchoate","অপরিপক্ব বা প্রাথমিক স্তরের","","adjective","Academic","C1"],[2493,"Indolent","অলস বা শ্রমবিমুখ","","adjective","Academic","C1"],[2494,"Ingenuous","সরল বা অকপট চিত্তের","","adjective","Academic","C1"],[2495,"Inimical","ক্ষতিকর বা প্রতিকূল","","adjective","Academic","C1"],[2496,"Insipid","স্বাদহীন বা প্রাণহীন","","adjective","Academic","C1"],[2497,"Laconic","অল্পভাষী বা সংক্ষিপ্তভাষী","","adjective","Academic","C1"],[2498,"Laudable","প্রশংসার যোগ্য","","adjective","Academic","B2"],[2499,"Loquacious","বাচাল","","adjective","Academic","C1"],[2500,"Lucid","স্পষ্ট বা সহজে বোধগম্য","","adjective","Academic","B2"],[2501,"Magnanimous","উদার ও ক্ষমাশীল হৃদয়ের","","adjective","Academic","C1"],[2502,"Mercurial","দ্রুত পরিবর্তনশীল মেজাজের","","adjective","Academic","C1"],[2503,"Misanthrope","মানববিদ্বেষী ব্যক্তি","","adjective","Academic","C1"],[2504,"Neophyte","নবদীক্ষিত বা অনভিজ্ঞ ব্যক্তি","","adjective","Academic","C1"],[2505,"Obdurate","একগুঁয়ে বা অনমনীয়","","adjective","Academic","C1"],[2506,"Obstinate","জেদি বা অনমনীয়","","adjective","Academic","B2"],[2507,"Panacea","সর্বরোগের মহৌষধ বা সমাধান","","adjective","Academic","C1"],[2508,"Paradox","আপাতবিরোধী সত্য বা ধাঁধা","","adjective","Academic","B2"],[2509,"Paragon","শ্রেষ্ঠত্বের আদর্শ নিদর্শন","","adjective","Academic","C1"],[2510,"Parsimonious","অতিমাত্রায় কৃপণ","","adjective","Academic","C1"],[2511,"Paucity","স্বল্পতা বা অপ্রতুলতা","","adjective","Academic","C1"],[2512,"Pedantic","পাণ্ডিত্য জাহিরকারী","","adjective","Academic","C1"],[2513,"Pellucid","স্বচ্ছ বা জলের মতো পরিষ্কার","","adjective","Academic","C1"],[2514,"Perfunctory","দায়সারা বা অবহেলাভরে কৃত","","adjective","Academic","C1"],[2515,"Platitude","মামুলি ক্লিশে কথা","","adjective","Academic","C1"],[2516,"Plethora","অতিরিক্ত প্রাচুর্য বা বাহুল্য","","adjective","Academic","C1"],[2517,"Polemic","তীব্র বিতর্ক বা বাক্যযুদ্ধ","","adjective","Academic","C1"],[2518,"Prodigal","অপব্যয়ী বা অমিতব্যয়ী","","adjective","Academic","C1"],[2519,"Prolific","প্রচুর উৎপাদনশীল","","adjective","Academic","B2"],[2520,"Propensity","স্বাভাবিক প্রবণতা বা ঝোঁক","","adjective","Academic","C1"],[2521,"Puerile","ছেলেমানুষি বা অপরিণত","","adjective","Academic","C1"],[2522,"Pugnacious","ঝগড়াটে বা মারমুখী","","adjective","Academic","C1"],[2523,"Quixotic","অবাস্তব কল্পনাবিলাসী","","adjective","Academic","C1"],[2524,"Recalcitrant","অবাধ্য বা অবাধ্য স্বভাবের","","adjective","Academic","C1"],[2525,"Reticent","চাপা স্বভাবের বা স্বল্পভাষী","","adjective","Academic","C1"],[2526,"Sagacious","বিচক্ষণ বা দূরদর্শী","","adjective","Academic","C1"],[2527,"Salient","প্রধান বা সবচেয়ে লক্ষণীয়","","adjective","Academic","C1"],[2528,"Soporific","ঘুম উদ্রেককারী","","adjective","Academic","C1"],[2529,"Specious","বাইরে সুন্দর কিন্তু ভেতরে মিথ্যা","","adjective","Academic","C1"],[2530,"Taciturn","স্বভাবতই চুপচাপ বা স্বল্পভাষী","","adjective","Academic","C1"],[2531,"Tenacious","দৃঢ়সংকল্প বা নাছোড়বান্দা","","adjective","Academic","C1"],[2532,"Ubiquity","সর্ববিদ্যমানতা","","adjective","Academic","C1"],[2533,"Vacillate","সিদ্ধান্তহীনতায় দোলাচল","","adjective","Academic","C1"],[2534,"Venerate","গভীরভাবে শ্রদ্ধা করা","","adjective","Academic","C1"],[2535,"Vilify","নিন্দা করা বা দুর্নাম রটানো","","adjective","Academic","C1"],[2536,"Zealot","ধর্মান্ধ বা অতি-উগ্র সমর্থক","","adjective","Academic","C1"],[2537,"atmosphere","বায়ুমণ্ডল","","noun","Nature","B1"],[2538,"biosphere","জীবমণ্ডল","","noun","Nature","B2"],[2539,"ecosystem","বাস্তুতন্ত্র","","noun","Nature","B1"],[2540,"biodiversity","জীববৈচিত্র্য","","noun","Nature","B2"],[2541,"photosynthesis","সালোকসংশ্লেষণ","","noun","Nature","B2"],[2542,"chlorophyll","ক্লোরোফিল","","noun","Nature","B2"],[2543,"evaporation","বাষ্পীভবন","","noun","Nature","B1"],[2544,"condensation","ঘনীভবন","","noun","Nature","B2"],[2545,"precipitation","বৃষ্টিপাত বা অধঃক্ষেপণ","","noun","Nature","B2"],[2546,"hemisphere","গোলার্ধ","","noun","Nature","B1"],[2547,"equator","বিষুবরেখা","","noun","Nature","B1"],[2548,"latitude","অক্ষাংশ","","noun","Nature","B1"],[2549,"longitude","দ্রাঘিমাংশ","","noun","Nature","B1"],[2550,"peninsula","উপদ্বীপ","","noun","Nature","B1"],[2551,"strait","প্রণালী","","noun","Nature","B2"],[2552,"archipelago","দ্বীপপুঞ্জ","","noun","Nature","B2"],[2553,"plateau","মালভূমি","","noun","Nature","B1"],[2554,"glacier","হিমবাহ","","noun","Nature","B1"],[2555,"tundra","তুন্দ্রা অঞ্চল","","noun","Nature","B2"],[2556,"savanna","সাভানা তৃণভূমি","","noun","Nature","B2"],[2557,"canyon","গিরিখাত","","noun","Nature","B1"],[2558,"crater","আগ্নেয়গিরির মুখ","","noun","Nature","B2"],[2559,"galaxy","ছায়াপথ বা গ্যালাক্সি","","noun","Nature","A2"],[2560,"cosmos","মহাবিশ্ব","","noun","Nature","B2"],[2561,"asteroid","গ্রহাণু","","noun","Nature","B1"],[2562,"comet","ধূমকেতু","","noun","Nature","B1"],[2563,"meteor","উল্কা","","noun","Nature","B1"],[2564,"constellation","নক্ষত্রমণ্ডল","","noun","Nature","B2"],[2565,"eclipse","গ্রহণ (চন্দ্র/সূর্য)","","noun","Nature","B1"],[2566,"gravity","মহাকর্ষ বল","","noun","Nature","A2"],[2567,"orbit","কক্ষপথ","","noun","Nature","A2"],[2568,"satellite","উপগ্রহ","","noun","Nature","A2"],[2569,"telescope","দূরবীক্ষণ যন্ত্র","","noun","Nature","A2"],[2570,"microscope","অণুবীক্ষণ যন্ত্র","","noun","Nature","A2"],[2571,"laboratory","গবেষণাগার","","noun","Nature","A2"],[2572,"experiment","পরীক্ষা-নিরীক্ষা","","noun","Nature","A2"],[2573,"hypothesis","অনুমিত সিদ্ধান্ত বা অনুকল্প","","noun","Nature","B2"],[2574,"variable","চলক বা পরিবর্তনশীল মান","","noun","Nature","B1"],[2575,"molecule","অণু","","noun","Nature","B1"],[2576,"atom","পরমাণু","","noun","Nature","B1"],[2577,"electron","ইলেকট্রন","","noun","Nature","B1"],[2578,"proton","প্রোটন","","noun","Nature","B1"],[2579,"neutron","নিউট্রন","","noun","Nature","B1"],[2580,"radiation","তেজস্ক্রিয়তা বা বিকিরণ","","noun","Nature","B2"],[2581,"velocity","বেগ বা দ্রুতি","","noun","Nature","B1"],[2582,"friction","ঘর্ষণ বল","","noun","Nature","B1"],[2583,"inertia","জড়তা","","noun","Nature","B2"],[2584,"density","ঘনত্ব","","noun","Nature","B1"],[2585,"temperature","তাপমাত্রা","","noun","Nature","A1"],[2586,"thermometer","থার্মোমিটার","","noun","Nature","A2"],[2587,"barometer","বায়ুচাপমান যন্ত্র","","noun","Nature","B2"],[2588,"humidity","বায়ুর আর্দ্রতা","","noun","Nature","A2"],[2589,"monsoon","মৌসুমি বায়ু","","noun","Nature","A2"],[2590,"tsunami","সুনামি বা জলোচ্ছ্বাস","","noun","Nature","A2"],[2591,"avalanche","হিমধস","","noun","Nature","B2"],[2592,"landslide","ভূমিধস","","noun","Nature","B1"],[2593,"erosion","নদী বা মাটির ক্ষয়","","noun","Nature","B1"],[2594,"deforestation","বন উজাড়করণ","","noun","Nature","B1"],[2595,"afforestation","বনায়ন","","noun","Nature","B2"],[2596,"greenhouse","গ্রিনহাউস বা সবুজ ঘর","","noun","Nature","B1"],[2597,"emissions","বায়ুমণ্ডলে নির্গমন","","noun","Nature","B2"],[2598,"renewable","নবায়নযোগ্য শক্তি","","noun","Nature","B1"],[2599,"fossil fuel","জীবাশ্ম জ্বালানি","","noun","Nature","B1"],[2600,"conservation","সংরক্ষণ","","noun","Nature","B1"],[2601,"pollutant","দূষক উপাদান","","noun","Nature","B1"],[2602,"Chameleon","গিরগিটি","","noun","Animals","B1"],[2603,"Salamander","স্যালামান্ডার উভচর","","noun","Animals","B2"],[2604,"Platypus","প্লাটিপাস","","noun","Animals","B2"],[2605,"Iguana","ইগুয়ানা টিকটিকি","","noun","Animals","B2"],[2606,"Hyena","হায়েনা","","noun","Animals","A2"],[2607,"Jaguar","জাগুয়ার","","noun","Animals","A2"],[2608,"Panther","কালো চিতাবাঘ","","noun","Animals","B1"],[2609,"Puma","পুমা বা বনবিড়াল","","noun","Animals","B1"],[2610,"Badger","বিজুবাবা বা ব্যাজার","","noun","Animals","B2"],[2611,"Beaver","বিভার জলচর","","noun","Animals","B1"],[2612,"Otter","ভোঁদড়","","noun","Animals","B1"],[2613,"Skunk","স্কঙ্ক গন্ধবাহী প্রাণী","","noun","Animals","B1"],[2614,"Sloth","স্লথ মন্থর প্রাণী","","noun","Animals","B1"],[2615,"Walrus","ওয়ালরাস বা সিন্ধুগোরু","","noun","Animals","B2"],[2616,"Porcupine","সজারু","","noun","Animals","B1"],[2617,"Armadillo","আর্মাডিলো বর্মযুক্ত প্রাণী","","noun","Animals","B2"],[2618,"Possum","পসাম","","noun","Animals","B2"],[2619,"Aardvark","আর্ডভার্ক পিঁপড়াভুক","","noun","Animals","B2"],[2620,"Anteater","পিঁপড়াভোজী প্রাণী","","noun","Animals","B1"],[2621,"Bison","বাইসন বা বনগরু","","noun","Animals","B1"],[2622,"Gazelle","হরিণবিশেষ","","noun","Animals","B1"],[2623,"Antelope","কৃষ্ণসার মৃগ","","noun","Animals","B1"],[2624,"Koala","কোয়ালা ভালুক","","noun","Animals","A2"],[2625,"Lemur","লেমুর বাঁদরজাতীয়","","noun","Animals","B1"],[2626,"Meerkat","মিরক্যাট সুরিকাটা","","noun","Animals","B1"],[2627,"Mongoose","বেজি বা নেউল","","noun","Animals","A2"],[2628,"Pelican","গগনবেড় পাখি","","noun","Animals","B1"],[2629,"Kingfisher","মাছরাঙা পাখি","","noun","Animals","A2"],[2630,"Hummingbird","হামিংবার্ড ক্ষুদ্র পাখি","","noun","Animals","B1"],[2631,"Flamingo","ফ্লেমিঙ্গো রাজহংসী","","noun","Animals","B1"],[2632,"Ostrich","উটপাখি","","noun","Animals","A2"],[2633,"Emu","ইমু পাখি","","noun","Animals","B1"],[2634,"Kiwi","কিউই পাখি বা ফল","","noun","Animals","A2"],[2635,"Vulture","শকুনি","","noun","Animals","A2"],[2636,"Albatross","অ্যালবাট্রস সামুদ্রিক পাখি","","noun","Animals","B2"],[2637,"Falcon","বাজপাখি","","noun","Animals","B1"],[2638,"Canary","ক্যানারি হলুদ পাখি","","noun","Animals","B1"],[2639,"Cuckoo","কোকিল পাখি","","noun","Animals","A2"],[2640,"Woodpecker","কাঠঠোকরা পাখি","","noun","Animals","A2"],[2641,"Hornbill","ধনেশ পাখি","","noun","Animals","B2"],[2642,"Barbet","বসন্তবৌরি পাখি","","noun","Animals","B2"],[2643,"Stingray","শাপলাপাতা মাছ","","noun","Animals","B1"],[2644,"Jellyfish","জেলিফিশ","","noun","Animals","A2"],[2645,"Barracuda","ব্যারাকুডা শিকারি মাছ","","noun","Animals","B2"],[2646,"Seahorse","ঘোড়ামাছ বা সিহর্স","","noun","Animals","A2"],[2647,"Lobster","গলদা চিংড়ি","","noun","Animals","A2"],[2648,"Anemone","অ্যানিমোন সামুদ্রিক জীব","","noun","Animals","B2"],[2649,"Plankton","প্ল্যাংকটন জলজ অণুজীব","","noun","Animals","B2"],[2650,"Centipede","শতপদী বা কেন্নো","","noun","Animals","B1"],[2651,"Millipede","সহস্রপদী কেন্নো","","noun","Animals","B1"],[2652,"Dragonfly","ফড়িং","","noun","Animals","A2"],[2653,"Firefly","জোনাকি পোকা","","noun","Animals","A2"],[2654,"Cicada","ঝাঁঝিপোকা","","noun","Animals","B2"],[2655,"Screwdriver","স্ক্রুড্রাইভার বা স্ক্রু ঘোরানোর যন্ত্র","","noun","Daily","A2"],[2656,"Wrench","রেঞ্চ বা নাট খোলার চাবি","","noun","Daily","A2"],[2657,"Pliers","প্লায়ার্স বা চিমটা সাঁড়াশি","","noun","Daily","A2"],[2658,"Axe","কুঠার","","noun","Daily","A2"],[2659,"Drill","ড্রিল মেশিন বা ছিদ্র করার যন্ত্র","","noun","Daily","A2"],[2660,"Tape measure","ফিতা বা পরিমাপের ফিতা","","noun","Daily","A2"],[2661,"Level","লেভেল মাপার যন্ত্র","","noun","Daily","B1"],[2662,"Flashlight","টর্চলাইট","","noun","Daily","A1"],[2663,"Shovel","কোদাল বা বেলচা","","noun","Daily","A2"],[2664,"Rake","আঁচড়া বা ঘাস জড়ো করার যন্ত্র","","noun","Daily","A2"],[2665,"Spade","কোদাল","","noun","Daily","A2"],[2666,"Wheelbarrow","একচাকার ঠেলাগাড়ি","","noun","Daily","B1"],[2667,"Hose","পানির পাইপ বা হোসপাইপ","","noun","Daily","A2"],[2668,"Nozzle","নলমুখ বা নোজল","","noun","Daily","B1"],[2669,"Sponge","স্পঞ্জ","","noun","Daily","A1"],[2670,"Detergent","ডিটারজেন্ট বা কাপড় ধোয়ার গুঁড়ো","","noun","Daily","A2"],[2671,"Bleach","ব্লিচিং পাউডার","","noun","Daily","A2"],[2672,"Stain","দাগ বা ছোপ","","noun","Daily","A2"],[2673,"Clothespin","কাপড় শুকানোর ক্লিপ","","noun","Daily","A2"],[2674,"Hanger","হ্যাঙ্গার","","noun","Daily","A1"],[2675,"Ironing board","ইস্ত্রি করার বোর্ড","","noun","Daily","A2"],[2676,"Lint","পোশাকের আলগা সুতো বা আঁশ","","noun","Daily","B1"],[2677,"Thread","সেলাইয়ের সুতো","","noun","Daily","A1"],[2678,"Thimble","আঙুলত্রাণ","","noun","Daily","B2"],[2679,"Safety pin","সেফটি পিন","","noun","Daily","A1"],[2680,"Shoepolish","জুতার কালি","","noun","Daily","A1"],[2681,"Shoehorn","জুতো পরার চামচ","","noun","Daily","B2"],[2682,"Keychain","চাবির রিং","","noun","Daily","A1"],[2683,"Padlock","ঝোলানো তালা","","noun","Daily","A2"],[2684,"Doorbell","দরজার কলিংবেল","","noun","Daily","A1"],[2685,"Peephole","দরজার গোপন ছিদ্র","","noun","Daily","B1"],[2686,"Doorknob","দরজার হাতল","","noun","Daily","A2"],[2687,"Hinge","দরজা-জানালার কবজা","","noun","Daily","B1"],[2688,"Curtain rod","পর্দার পাইপ","","noun","Daily","A2"],[2689,"Dustpan","ময়লা তোলার বেলচা","","noun","Daily","A2"],[2690,"Mop","মেঝে মোছার ব্রাশ","","noun","Daily","A1"],[2691,"Squeegee","কাচ বা মেঝে মোছার রাবার","","noun","Daily","B1"],[2692,"Basil","তুলসী পাতা","","noun","Food","A2"],[2693,"Oregano","অরিগ্যানো সুগন্ধি পাতা","","noun","Food","B1"],[2694,"Rosemary","রোজমেরি মসলা","","noun","Food","B1"],[2695,"Thyme","থাইম মসলা পাতা","","noun","Food","B1"],[2696,"Parsley","পার্সলে পাতা","","noun","Food","A2"],[2697,"Mint","পুদিনা পাতা","","noun","Food","A1"],[2698,"Fennel","মৌরি বা মিষ্টি জিরা","","noun","Food","B1"],[2699,"Fenugreek","মেথি দানা","","noun","Food","B1"],[2700,"Nutmeg","জায়ফল","","noun","Food","B1"],[2701,"Mace","জয়ত্রী","","noun","Food","B1"],[2702,"Anise","মৌরি মসলা","","noun","Food","B1"],[2703,"Saffron","জাফরান","","noun","Food","B1"],[2704,"Paprika","পাপরিকা লাল মরিচের গুঁড়ো","","noun","Food","B1"],[2705,"Cayenne","তীব্র ঝাল মরিচ","","noun","Food","B1"],[2706,"Wasabi","ওয়াসাবি জাপানি ঝাল","","noun","Food","B2"],[2707,"Vinegar","সিরকা বা ভিনেগার","","noun","Food","A2"],[2708,"Olive oil","জলপাই তেল","","noun","Food","A2"],[2709,"Sesame","তিল দানা","","noun","Food","A2"],[2710,"Poppy seed","পোস্ত দানা","","noun","Food","B1"],[2711,"Tamarind","তেঁতুল","","noun","Food","A1"],[2712,"Prune","শুকনো বরই বা প্রুন","","noun","Food","B1"],[2713,"Raisin","কিশমিশ","","noun","Food","A1"],[2714,"Fig","ডুমুর বা আনজির","","noun","Food","A2"],[2715,"Apricot","খুবানি বা অ্যাপ্রিকট","","noun","Food","A2"],[2716,"Pistachio","পেস্তা বাদাম","","noun","Food","A2"],[2717,"Walnut","আখরোট বাদাম","","noun","Food","A2"],[2718,"Hazelnut","হিজল বাদাম","","noun","Food","B1"],[2719,"Macadamia","ম্যাকাডামিয়া বাদাম","","noun","Food","B2"],[2720,"Asparagus","অ্যাসপারাগাস সবজি","","noun","Food","B1"],[2721,"Broccoli","ব্রকলি বা সবুজ ফুলকপি","","noun","Food","A2"],[2722,"Zucchini","ধুন্দুলজাতীয় জুচিনি","","noun","Food","B1"],[2723,"Artichoke","আর্টিচোক সবজি","","noun","Food","B2"],[2724,"Celery","সেলেরি পাতা","","noun","Food","B1"],[2725,"Leek","পেঁয়াজকলির মতো লিক","","noun","Food","B1"],[2726,"Radish","মুলা","","noun","Food","A1"],[2727,"Beetroot","বিট বা লাল শালগম","","noun","Food","A2"],[2728,"Turnip","শালগম","","noun","Food","A2"],[2729,"Sweet potato","মিষ্টি আলু","","noun","Food","A1"],[2730,"Yam","মেটে আলু বা কচু","","noun","Food","A2"],[2731,"Cassava","শিমুল আলু বা কাসাভা","","noun","Food","B2"],[2732,"Kale","সবুজ কেল শাক","","noun","Food","B1"],[2733,"Lettuce","লেটুস পাতা","","noun","Food","A1"],[2734,"Cabbage","বাঁধাকপি","","noun","Food","A1"],[2735,"Cauliflower","ফুলকপি","","noun","Food","A1"],[2736,"Brinjal","বেগুন","","noun","Food","A1"],[2737,"Okra","ঢ্যাঁড়শ বা ভেন্ডি","","noun","Food","A1"],[2738,"Bitter gourd","করলা বা উচ্ছে","","noun","Food","A1"],[2739,"Pointed gourd","পটল","","noun","Food","A1"],[2740,"Snake gourd","চিচিঙ্গা","","noun","Food","A2"],[2741,"Ridge gourd","ঝিঙে","","noun","Food","A2"],[2742,"Bottle gourd","লাউ","","noun","Food","A1"],[2743,"Ash gourd","চালকুমড়া","","noun","Food","A2"],[2744,"Drumstick","সজিনা ডাঁটা","","noun","Food","A2"],[2745,"Jackfruit","কাঁঠাল","","noun","Food","A1"],[2746,"Wood apple","বেল ফল","","noun","Food","A2"],[2747,"Custard apple","আতা ফল বা শরিফা","","noun","Food","A2"],[2748,"Starfruit","কামরাঙ্গা ফল","","noun","Food","A2"],[2749,"Sapodilla","সফেদা ফল","","noun","Food","A2"],[2750,"Dragon fruit","ড্রাগন ফল","","noun","Food","A1"],[2751,"Avocado","অ্যাভোকাডো ফল","","noun","Food","A2"],[2752,"Passion fruit","প্যাশন ফল","","noun","Food","B1"],[2753,"Blackberry","কালো জাম","","noun","Food","A1"],[2754,"Raspberry","রাস্পবেরি","","noun","Food","A2"],[2755,"Blueberry","ব্লুবেরি","","noun","Food","A1"],[2756,"Cranberry","ক্র্যানবেরি","","noun","Food","B1"],[2757,"Bangladesh","বাংলাদেশ","","noun","Places","A1"],[2758,"Bangladeshi","বাংলাদেশি","","adjective","Places","A1"],[2759,"India","ভারত","","noun","Places","A1"],[2760,"Indian","ভারতীয়","","adjective","Places","A1"],[2761,"Pakistan","পাকিস্তান","","noun","Places","A1"],[2762,"United States","মার্কিন যুক্তরাষ্ট্র","","noun","Places","A1"],[2763,"American","আমেরিকান","","adjective","Places","A1"],[2764,"United Kingdom","যুক্তরাজ্য / ব্রিটেন","","noun","Places","A1"],[2765,"British","ব্রিটিশ","","adjective","Places","A1"],[2766,"Canada","কানাডা","","noun","Places","A1"],[2767,"Canadian","কানাডীয়","","adjective","Places","A1"],[2768,"Australia","অস্ট্রেলিয়া","","noun","Places","A1"],[2769,"Australian","অস্ট্রেলীয়","","adjective","Places","A1"],[2770,"Japan","জাপান","","noun","Places","A1"],[2771,"Japanese","জাপানি","","adjective","Places","A1"],[2772,"China","চীন","","noun","Places","A1"],[2773,"Chinese","চীনা","","adjective","Places","A1"],[2774,"Germany","জার্মানি","","noun","Places","A1"],[2775,"German","জার্মান","","adjective","Places","A1"],[2776,"France","ফ্রান্স","","noun","Places","A1"],[2777,"French","ফরাসি","","adjective","Places","A1"],[2778,"Italy","ইতালি","","noun","Places","A1"],[2779,"Italian","ইতালীয়","","adjective","Places","A1"],[2780,"Saudi Arabia","সৌদি আরব","","noun","Places","A1"],[2781,"Arabian","আরবীয়","","adjective","Places","A1"],[2782,"Turkey","তুরস্ক","","noun","Places","A1"],[2783,"Turkish","তুর্কি","","adjective","Places","A1"],[2784,"Malaysia","মালয়েশিয়া","","noun","Places","A1"],[2785,"Singapore","সিঙ্গাপুর","","noun","Places","A1"],[2786,"Dubai","দুবাই","","noun","Places","A1"],[2787,"Badminton","ব্যাডমিন্টন খেলা","","noun","Sports","A1"],[2788,"Tennis","টেনিস খেলা","","noun","Sports","A1"],[2789,"Table tennis","টেবিল টেনিস","","noun","Sports","A1"],[2790,"Volleyball","ভলিবল","","noun","Sports","A1"],[2791,"Basketball","বাস্কেটবল","","noun","Sports","A1"],[2792,"Hockey","হকি খেলা","","noun","Sports","A1"],[2793,"Golf","গলফ খেলা","","noun","Sports","A2"],[2794,"Baseball","বেসবল","","noun","Sports","A2"],[2795,"Swimming","সাঁতার কাটা","","noun","Sports","A1"],[2796,"Cycling","সাইক্লিং বা সাইকেল চালনা","","noun","Sports","A1"],[2797,"Running","দৌড়ানো","","noun","Sports","A1"],[2798,"Jogging","হালকা দৌড়","","noun","Sports","A1"],[2799,"Marathon","ম্যারাথন দৌড়","","noun","Sports","B1"],[2800,"Gymnastics","জিমন্যাস্টিকস বা শরীরচর্চা","","noun","Sports","B1"],[2801,"Weightlifting","ভারোত্তোলন","","noun","Sports","B1"],[2802,"Boxing","মুষ্টিযুদ্ধ বা বক্সিং","","noun","Sports","A2"],[2803,"Wrestling","কুস্তি","","noun","Sports","A2"],[2804,"Karate","কারাতে বা আত্মরক্ষা কৌশল","","noun","Sports","A2"],[2805,"Judo","জুডো","","noun","Sports","A2"],[2806,"Archery","তীরন্দাজি","","noun","Sports","B1"],[2807,"Shooting","শুটিং বা নিশানা লক্ষ্য","","noun","Sports","A2"],[2808,"Chess","দাবা খেলা","","noun","Sports","A1"],[2809,"Carrom","ক্যারম খেলা","","noun","Sports","A1"],[2810,"Ludo","লুডু খেলা","","noun","Sports","A1"],[2811,"Athlete","ক্রীড়াবিদ","","noun","Sports","A2"],[2812,"Coach","প্রশিক্ষক বা কোচ","","noun","Sports","A2"],[2813,"Referee","রেফারি বা বিচারক","","noun","Sports","A2"],[2814,"Umpire","আম্পায়ার","","noun","Sports","A2"],[2815,"Championship","চ্যাম্পিয়নশিপ বা শ্রেষ্ঠত্ব প্রতিযোগিতা","","noun","Sports","B1"],[2816,"Tournament","টুর্নামেন্ট বা টুর্নামেন্ট প্রতিযোগিতা","","noun","Sports","A2"],[2817,"Trophy","ট্রফি বা বিজয় স্মারক","","noun","Sports","A1"],[2818,"Medal","পদক","","noun","Sports","A2"],[2819,"Gold medal","স্বর্ণপদক","","noun","Sports","A2"],[2820,"Silver medal","রৌপ্যপদক","","noun","Sports","A2"],[2821,"Bronze medal","ব্রোঞ্জ পদক","","noun","Sports","A2"],[2822,"Spectator","দর্শক","","noun","Sports","B1"],[2823,"Opponent","প্রতিদ্বন্দ্বী","","noun","Sports","B1"],[2824,"Defeat","পরাজয়","","noun","Sports","A2"],[2825,"Victory","বিজয়","","noun","Sports","A2"],[2826,"Guitar","গিটার","","noun","Arts","A1"],[2827,"Piano","পিয়ানো","","noun","Arts","A1"],[2828,"Violin","বেহালা","","noun","Arts","A2"],[2829,"Flute","বাঁশি","","noun","Arts","A1"],[2830,"Harmonium","হারমোনিয়াম","","noun","Arts","A1"],[2831,"Tabla","তবলা","","noun","Arts","A1"],[2832,"Drums","ড্রাম বা ঢোল","","noun","Arts","A1"],[2833,"Keyboard","কিবোর্ড বা সিন্থেসাইজার","","noun","Arts","A2"],[2834,"Microphone","মাইক্রোফোন","","noun","Arts","A1"],[2835,"Melody","সুর বা সুরলহরী","","noun","Arts","A2"],[2836,"Rhythm","ছন্দ বা তাল","","noun","Arts","B1"],[2837,"Harmony","সমন্বয় বা সমস্বর","","noun","Arts","B1"],[2838,"Symphony","সিম্ফনি বা ঐকতান","","noun","Arts","B2"],[2839,"Concert","সঙ্গীতানুষ্ঠান বা কনসার্ট","","noun","Arts","A2"],[2840,"Orchestra","ঐকতান বাদকদল","","noun","Arts","B1"],[2841,"Composer","সুরকার","","noun","Arts","B1"],[2842,"Lyrics","গানের কথা","","noun","Arts","A2"],[2843,"Vocalist","কণ্ঠশিল্পী","","noun","Arts","B1"],[2844,"Sculpture","ভাস্কর্য","","noun","Arts","B1"],[2845,"Portrait","প্রতিকৃতি বা ছবি","","noun","Arts","A2"],[2846,"Landscape","প্রাকৃতিক ভূদৃশ্যের চিত্র","","noun","Arts","B1"],[2847,"Masterpiece","কালজয়ী শিল্পকর্ম","","noun","Arts","B2"],[2848,"Gallery","শিল্পকলা প্রদর্শনী কেন্দ্র","","noun","Arts","A2"],[2849,"Exhibition","প্রদর্শনী","","noun","Arts","B1"],[2850,"Literature","সাহিত্য","","noun","Arts","B1"],[2851,"Poetry","কবিতা","","noun","Arts","A2"],[2852,"Fiction","কল্পকাহিনী বা কথাসাহিত্য","","noun","Arts","B1"],[2853,"Biography","জীবনী","","noun","Arts","B1"],[2854,"Autobiography","আত্মজীবনী","","noun","Arts","B1"],[2855,"Drama","নাটক","","noun","Arts","A2"],[2856,"Constitution","সংবিধান","","noun","Society","B1"],[2857,"Legislation","আইন প্রণয়ন","","noun","Society","B2"],[2858,"Judiciary","বিচার বিভাগ","","noun","Society","B2"],[2859,"Magistrate","ম্যাজিস্ট্রেট বা বিচারক","","noun","Society","B1"],[2860,"Prosecutor","সরকারি আইনজীবী","","noun","Society","B2"],[2861,"Defense attorney","আসামিপক্ষের আইনজীবী","","noun","Society","B2"],[2862,"Plaintiff","বাদী বা অভিযোগকারী","","noun","Society","B2"],[2863,"Defendant","বিবাদী বা আসামি","","noun","Society","B2"],[2864,"Testimony","সাক্ষ্যপ্রমাণ বা জবানবন্দি","","noun","Society","B2"],[2865,"Affidavit","হলফনামা","","noun","Society","B2"],[2866,"Summons","আদালতের তলব বা সমন","","noun","Society","B2"],[2867,"Warrant","গ্রেপ্তারি পরোয়ানা","","noun","Society","B1"],[2868,"Custody","আইনি হেফাজত","","noun","Society","B1"],[2869,"Interrogation","জিজ্ঞাসাবাদ","","noun","Society","B2"],[2870,"Acquittal","বেখসুর খালাস","","noun","Society","C1"],[2871,"Conviction","দণ্ডাদেশ বা অপরাধ সাব্যস্ত","","noun","Society","B2"],[2872,"Appeal","উচ্চ আদালতে আপিল","","noun","Society","B1"],[2873,"Civil rights","নাগরিক অধিকার","","noun","Society","B1"],[2874,"Humanity","মানবতা","","noun","Society","A2"],[2875,"Solidarity","সংহতি বা একাত্মতা","","noun","Society","B2"],[2876,"Sovereignty","সার্বভৌমত্ব","","noun","Society","B2"],[2877,"Diplomacy","কূটনীতি","","noun","Society","B2"],[2878,"Ambassador","রাষ্ট্রদূত","","noun","Society","B1"],[2879,"Embassy","দূতাবাস","","noun","Society","A2"],[2880,"Consulate","কনস্যুলেট বা উপদূতাবাস","","noun","Society","B1"],[2881,"Treaty","আন্তর্জাতিক চুক্তি","","noun","Society","B2"],[2882,"Sanction","নিষেধাজ্ঞা","","noun","Society","B2"],[2883,"Refugee","শরণার্থী","","noun","Society","B1"],[2884,"Asylum","রাজনৈতিক আশ্রয়","","noun","Society","B2"],[2885,"Philanthropy","জনহিতৈষণা বা মানবকল্যাণ","","noun","Society","C1"],[2886,"Nebula","নীহারিকা বা গ্যাসীয় মেঘ","","noun","Science","B2"],[2887,"Supernova","সুপারনোভা বা তারার বিস্ফোরণ","","noun","Science","B2"],[2888,"Black hole","কৃষ্ণগহ্বর বা ব্ল্যাকহোল","","noun","Science","B1"],[2889,"Milky Way","আকাশগঙ্গা ছায়াপথ","","noun","Science","A2"],[2890,"Solar system","সৌরজগৎ","","noun","Science","A2"],[2891,"Cosmonaut","মহাকাশচারী","","noun","Science","B1"],[2892,"Astronaut","নভোচারী বা মহাকাশচারী","","noun","Science","A2"],[2893,"Rocket","রকেট বা মহাকাশযান","","noun","Science","A2"],[2894,"Spacecraft","মহাকাশযান","","noun","Science","B1"],[2895,"Space station","মহাকাশ স্টেশন","","noun","Science","B1"],[2896,"Light year","আলোকবর্ষ দূরত্বের একক","","noun","Science","B1"],[2897,"Superconductor","অতিপরিবাহী বা সুপারকন্ডাক্টর","","noun","Science","C1"],[2898,"Semiconductor","অর্ধপরিবাহী চিপ","","noun","Science","B2"],[2899,"Nanotechnology","ন্যানোপ্রযুক্তি","","noun","Science","B2"],[2900,"Biotechnology","জৈবপ্রযুক্তি","","noun","Science","B2"],[2901,"Quantum","কোয়ান্টাম বা ক্ষুদ্রাতিক্ষুদ্র পরিমাণ","","noun","Science","B2"],[2902,"Artificial intelligence","কৃত্রিম বুদ্ধিমত্তা","","noun","Tech","A2"],[2903,"Machine learning","মেশিন লার্নিং বা যান্ত্রিক শিখন","","noun","Tech","B1"],[2904,"Neural network","নিউরাল নেটওয়ার্ক","","noun","Tech","B2"],[2905,"Automation","স্বয়ংক্রিয়করণ","","noun","Tech","B1"],[2906,"Robotics","রোবটবিজ্ঞান","","noun","Tech","A2"],[2907,"Drone","চালকবিহীন ড্রোন","","noun","Tech","A2"],[2908,"Biometrics","বায়োমেট্রিক্স বা শারীরিক শনাক্তকরণ","","noun","Tech","B2"],[2909,"Aboard","যানে চড়া অবস্থায়","","adverb","Travel","A2"],[2910,"Abroad","বিদেশ বা প্রবাসে","","adverb","Travel","A2"],[2911,"Absence","অনুপস্থিতি","","noun","General","B1"],[2912,"Absorb","শুষে নেওয়া বা আত্মস্থ করা","","verb","Actions","B1"],[2913,"Abuse","অপব্যবহার বা গালি দেওয়া","","verb","Actions","B1"],[2914,"Accent","উচ্চারণভঙ্গি","","noun","Language","A2"],[2915,"Acceptance","স্বীকৃতি বা গ্রহণযোগ্যতা","","noun","General","B1"],[2916,"Access","প্রবেশাধিকার বা নাগাল","","noun","Tech","A2"],[2917,"Accomplish","সম্পাদন বা সফলভাবে সম্পন্ন করা","","verb","Actions","B1"],[2918,"Accord","সমঝোতা বা সম্মতি","","noun","Society","B2"],[2919,"Accumulate","জমা করা বা পুঞ্জীভূত করা","","verb","Actions","B2"],[2920,"Accuse","অভিযুক্ত করা বা দোষারোপ করা","","verb","Actions","B1"],[2921,"Achievement","কৃতিত্ব বা অর্জন","","noun","General","A2"],[2922,"Acknowledge","স্বীকার করা বা প্রাপ্তি স্বীকার","","verb","Actions","B2"],[2923,"Acquisition","অর্জন বা ক্রয়","","noun","Business","B2"],[2924,"Activate","সক্রিয় বা চালু করা","","verb","Tech","A2"],[2925,"Actualize","বাস্তবায়ন করা","","verb","Actions","B2"],[2926,"Adaptation","অভিযোজন বা রূপান্তর","","noun","Nature","B2"],[2927,"Addition","যোগ বা পরিবর্ধন","","noun","General","A1"],[2928,"Adjustment","সমন্বয় বা মানিয়ে নেওয়া","","noun","General","B1"],[2929,"Administration","প্রশাসন বা পরিচালনা","","noun","Workplace","B1"],[2930,"Admiration","প্রশংসা বা শ্রদ্ধা","","noun","Emotions","B1"],[2931,"Admission","ভর্তি বা প্রবেশ ফি","","noun","Education","A2"],[2932,"Adolescence","কৈশোরকাল","","noun","Life","B1"],[2933,"Adoption","দত্তক গ্রহণ বা বরণ","","noun","Family","B1"],[2934,"Advancement","উন্নতি বা অগ্রগতি","","noun","General","B2"],[2935,"Adventure","দুঃসাহসিক অভিযান","","noun","Travel","A2"],[2936,"Adversity","প্রতিকূলতা বা দুর্ভাগ্য","","noun","General","B2"],[2937,"Advertising","বিজ্ঞাপন প্রচার","","noun","Business","A2"],[2938,"Affection","স্নেহ বা ভালোবাসা","","noun","Emotions","A2"],[2939,"Affirmation","দৃঢ় সমর্থন বা স্বীকৃতি","","noun","General","B2"],[2940,"Agent","প্রতিনিধি বা এজেন্ট","","noun","Workplace","A2"],[2941,"Aggression","আগ্রাসন বা আক্রমণশীলতা","","noun","General","B2"],[2942,"Agreement","চুক্তি বা ঐকমত্য","","noun","Workplace","A2"],[2943,"Agriculture","কৃষিকাজ বা কৃষিবিদ্যা","","noun","Nature","A2"],[2944,"Alarm","সতর্কবার্তা বা অ্যালার্ম","","noun","Daily","A1"],[2945,"Alcohol","মদ বা অ্যালকোহল","","noun","Food","A2"],[2946,"Allotment","বরাদ্দ বা বণ্টন","","noun","Workplace","B1"],[2947,"Allowance","ভাতা বা হাতখরচ","","noun","Finance","A2"],[2948,"Almighty","সর্বশক্তিমান","","noun","General","A2"],[2949,"Altitude","উচ্চতা বা সমুদ্রপৃষ্ঠের উচ্চতা","","noun","Nature","B1"],[2950,"Aluminium","অ্যালুমিনিয়াম ধাতু","","noun","Materials","A2"],[2951,"Ambition","উচ্চাকাঙ্ক্ষা বা লক্ষ্য","","noun","General","A2"],[2952,"Analysis","বিশ্লেষণ বা পুঙ্খানুপুঙ্খ পরীক্ষা","","noun","Education","B1"],[2953,"Ancestor","পূর্বপুরুষ বা আদিপুরুষ","","noun","Family","B1"],[2954,"Announcement","ঘোষণা বা বিজ্ঞপ্তি","","noun","General","A2"],[2955,"Anxiety","উদ্বেগ বা অতিরিক্ত দুশ্চিন্তা","","noun","Feelings","B1"],[2956,"Apology","ক্ষমা প্রার্থনা বা দুঃখপ্রকাশ","","noun","General","A2"],[2957,"Apparatus","যন্ত্রপাতি বা সরঞ্জাম","","noun","Science","B2"],[2958,"Appearance","চেহারা বা বাহ্যিক রূপ","","noun","Body","A2"],[2959,"Applicant","চাকরিপ্রার্থী বা আবেদনকারী","","noun","Workplace","A2"],[2960,"Application","দরখাস্ত বা সফটওয়্যার অ্যাপ","","noun","Workplace","A1"],[2961,"Appreciation","কদর বা কৃতজ্ঞতা প্রকাশ","","noun","General","B1"],[2962,"Approval","অনুমোদন বা সম্মতি","","noun","Workplace","A2"],[2963,"Architecture","স্থাপত্যবিদ্যা বা নকশা","","noun","Art","B1"],[2964,"Arrangement","ব্যবস্থা বা আয়োজন","","noun","General","A2"],[2965,"Arrival","আগমন বা পৌঁছানো","","noun","Travel","A1"],[2966,"Artisan","কারিগর বা হস্তশিল্পী","","noun","Professions","B1"],[2967,"Ascent","আরোহণ বা উপরে ওঠা","","noun","Travel","B2"],[2968,"Aspiration","আকাঙ্ক্ষা বা উচ্চ স্বপ্ন","","noun","General","B2"],[2969,"Assignment","নির্দিষ্ট কার্যভার বা অ্যাসাইনমেন্ট","","noun","Education","A2"],[2970,"Assistance","সহায়তা বা সাহায্য","","noun","General","A2"],[2971,"Assumption","অনুমান বা পূর্বধারণা","","noun","General","B1"],[2972,"Assurance","আশ্বাস বা নিশ্চয়তা","","noun","General","B1"],[2973,"Astonishment","বিস্ময় বা হতবাক হওয়া","","noun","Feelings","B2"],[2974,"Attachment","সংযুক্তি বা মানসিক টান","","noun","Workplace","A2"],[2975,"Attainment","অর্জন বা সাফল্যলাভ","","noun","General","B2"],[2976,"Attempt","চেষ্টা বা প্রচেষ্টা","","noun","General","A2"],[2977,"Attendance","উপস্থিতি","","noun","Education","A2"],[2978,"Attention","মনোযোগ বা সতর্কতা","","noun","General","A1"],[2979,"Attraction","আকর্ষণ বা দর্শনীয় স্থান","","noun","Travel","A2"],[2980,"Audience","শ্রোতা বা দর্শকবৃন্দ","","noun","Entertainment","A2"],[2981,"Authority","কর্তৃপক্ষ বা ক্ষমতা","","noun","Society","B1"],[2982,"Authorship","গ্রন্থকারিত্ব বা রচয়িতা স্বত্ব","","noun","Art","B2"],[2983,"Availability","সহজলভ্যতা বা প্রাপ্যতা","","noun","General","B1"],[2984,"Avenue","প্রশস্ত সড়ক বা উপায়","","noun","Travel","A2"],[2985,"Avoidance","এড়িয়ে চলা বা পরিহার","","noun","General","B1"],[2986,"Awareness","সচেতনতা বা উপলব্ধি","","noun","General","B1"],[2987,"Backyard","পেছনের উঠোন বা আঙিনা","","noun","Home","A1"],[2988,"Bacteria","জীবাণু বা ব্যাকটেরিয়া","","noun","Science","A2"],[2989,"Balance","ভারসাম্য বা জের","","noun","Finance","A2"],[2990,"Balloon","বেলুন","","noun","Objects","A1"],[2991,"Banker","ব্যাংক কর্মকর্তা","","noun","Professions","A2"],[2992,"Banner","ব্যানার বা প্রচারপট","","noun","Objects","A2"],[2993,"Basement","ভূগর্ভস্থ তলা","","noun","Home","A2"],[2994,"Basis","ভিত্তি বা মূল কারণ","","noun","General","B1"],[2995,"Basket","ঝুড়ি বা পাত্র","","noun","Objects","A1"],[2996,"Battlefield","যুদ্ধক্ষেত্র বা রণভূমি","","noun","History","B1"],[2997,"Beautician","রূপবিশেষজ্ঞ বা বিউটিশিয়ান","","noun","Professions","A2"],[2998,"Beginning","শুরু বা সূচনা","","noun","General","A1"],[2999,"Behavior","আচরণ বা চালচলন","","noun","General","A2"],[3000,"Belief","বিশ্বাস বা আস্থা","","noun","General","A2"],[3001,"Belongings","ব্যক্তিগত জিনিসপত্র","","noun","General","A2"],[3002,"Benefit","সুবিধা বা কল্যাণ","","noun","General","A2"],[3003,"Biodata","জীবনবৃত্তান্ত","","noun","Workplace","A2"],[3004,"Birdcage","পাখির খাঁচা","","noun","Objects","A1"],[3005,"Birthplace","জন্মস্থান বা জন্মভূমি","","noun","Places","A1"],[3006,"Blackboard","ব্ল্যাকবোর্ড বা লেখার বোর্ড","","noun","Education","A1"],[3007,"Blacksmith","কামার বা লোহার কারিগর","","noun","Professions","A2"],[3008,"Blessing","আশীর্বাদ বা বরকত","","noun","General","A2"],[3009,"Blockade","অবরোধ বা পথরোধ","","noun","Society","B2"],[3010,"Bloodstream","রক্তপ্রবাহ","","noun","Body","B1"],[3011,"Blossom","ফুলের মুকুল বা প্রস্ফুটন","","noun","Nature","A2"],[3012,"Blouse","ব্লাউজ বা মেয়েদের জামা","","noun","Clothes","A1"],[3013,"Blueprint","নকশা বা কর্মপরিকল্পনা","","noun","Tech","B2"],[3014,"Boardroom","পরিচালনা পর্ষদের সভাঘর","","noun","Workplace","B1"],[3015,"Boatman","মাঝি বা নৌকার চালক","","noun","Professions","A1"],[3016,"Boldness","সাহসিকতা বা তেজস্বিতা","","noun","Feelings","B1"],[3017,"Bondage","বন্ধন বা দাসত্ব","","noun","History","B2"],[3018,"Bookcase","বইয়ের তাক বা আলমারি","","noun","Home","A1"],[3019,"Bookmark","বইয়ের বুকমার্ক বা নিশানা","","noun","Objects","A1"],[3020,"Bookstore","বইয়ের দোকান","","noun","Places","A1"],[3021,"Boredom","একঘেয়েমি বা ক্লান্তি","","noun","Feelings","B1"],[3022,"Bottle","বোতল বা পাত্র","","noun","Objects","A1"],[3023,"Bottleneck","কাজে বাধা বা সংকীর্ণতা","","noun","Workplace","B2"],[3024,"Boulevard","প্রশস্ত সুদৃশ্য সড়ক","","noun","Travel","B1"],[3025,"Bouquet","ফুলের তোড়া","","noun","Objects","A2"],[3026,"Bowler","বোলার বা বল নিক্ষেপকারী","","noun","Sports","A1"],[3027,"Bravery","বীরত্ব বা সাহস","","noun","Feelings","A2"],[3028,"Breadth","প্রস্থ বা চওড়া মাপ","","noun","Math","B1"],[3029,"Breakdown","বিকল হওয়া বা মানসিক পতন","","noun","General","B1"],[3030,"Breakthrough","যুগান্তকারী সাফল্য বা উদ্ভাবন","","noun","Science","B2"],[3031,"Breastplate","বুকের বর্ম","","noun","History","B2"],[3032,"Breath","শ্বাস বা শ্বাসপ্রশ্বাস","","noun","Body","A1"],[3033,"Breeze","মৃদু শীতল বাতাস","","noun","Nature","A2"],[3034,"Bridegroom","বর বা পাত্র","","noun","Family","A2"],[3035,"Brightness","উজ্জ্বলতা বা দীপ্তি","","noun","Nature","A2"],[3036,"Broadcast","সম্প্রচার বা প্রচার","","noun","Tech","A2"],[3037,"Brochure","তথ্যপুস্তিকা বা ব্রোশিউর","","noun","Workplace","B1"],[3038,"Brotherhood","ভ্রাতৃত্ববোধ বা সৌহার্দ্য","","noun","Society","A2"],[3039,"Brownie","ব্রাউনি কেক মিষ্টি","","noun","Food","A1"],[3040,"Bruise","কালশিটে বা আঘাতের দাগ","","noun","Health","A2"],[3041,"Buffet","বুফে বা উন্মুক্ত খাবার টেবিল","","noun","Food","A2"],[3042,"Bugle","রণশিঙা বা বিউগল বাঁশি","","noun","Arts","B2"],[3043,"Builder","নির্মাতা বা ভবন কারিগর","","noun","Professions","A2"],[3044,"Bullock","বলদ বা হালের গরু","","noun","Animals","A2"],[3045,"Bully","অন্যকে হেনস্তাকারী","","noun","Society","A2"],[3046,"Bungalow","বাংলো বাড়ি বা একতলা বাড়ি","","noun","Home","A2"],[3047,"Burden","বোঝা বা গুরুদায়িত্ব","","noun","General","B1"],[3048,"Bureau","সরকারি দপ্তর বা ব্যুরো","","noun","Workplace","B1"],[3049,"Bureaucracy","আমলাতন্ত্র","","noun","Society","B2"],[3050,"Burglar","সিঁধেল চোর বা গৃহচোর","","noun","Society","A2"],[3051,"Burial","কবর দেওয়া বা সমাধি","","noun","Society","B1"],[3052,"Busboy","রেস্তোরাঁর থালাবাসন পরিষ্কারকারী","","noun","Professions","A2"],[3053,"Buttercup","হলুদ বুনোফুল","","noun","Nature","B1"],[3054,"Bystander","পথচারী দর্শক বা প্রত্যক্ষদর্শী","","noun","Society","B1"],[3055,"Cabin","জাহাজ বা ট্রেনের কেবিন","","noun","Travel","A2"],[3056,"Cabinet","আলমারি বা মন্ত্রিসভা","","noun","Home","A2"],[3057,"Cablegram","তারবার্তা বা টেলিগ্রাফ","","noun","Tech","B2"],[3058,"Cafeteria","ক্যাফেটেরিয়া বা হালকা খাবারের স্থান","","noun","Places","A1"],[3059,"Calamity","প্রাকৃতিক দুর্যোগ বা মহাবিপদ","","noun","Nature","B2"],[3060,"Calcium","ক্যালসিয়াম খনিজ","","noun","Health","B1"],[3061,"Calculation","গণনা বা হিসাবনিকাশ","","noun","Math","A2"],[3062,"Calf","বাছুর বা পায়ের ডিম","","noun","Animals","A2"],[3063,"Calligraphy","হাতের সুন্দর লেখা বা ক্যালিগ্রাফি","","noun","Arts","B2"],[3064,"Camaraderie","সহকর্মী বন্ধুত্ব ও সৌহার্দ্য","","noun","Workplace","C1"],[3065,"Camel","উট প্রাণী","","noun","Animals","A1"],[3066,"Camouflage","ছদ্মবেশ বা রূপগোপন","","noun","Nature","B2"],[3067,"Campfire","শিবিরের আগুন বা ক্যাম্পফায়ার","","noun","Travel","A1"],[3068,"Canal","খাল বা কৃত্রিম জলপথ","","noun","Nature","A2"],[3069,"Cannery","খাদ্য ক্যানিং কারখানা","","noun","Places","B2"],[3070,"Canteen","ক্যান্টিন বা জলখাবারের স্থান","","noun","Places","A1"],[3071,"Canvas","চিত্রাঙ্কনের ক্যানভাস কাপড়","","noun","Arts","A2"],[3072,"Capability","সক্ষমতা বা কর্মদক্ষতা","","noun","General","B1"],[3073,"Capacity","ধারণক্ষমতা বা সামর্থ্য","","noun","General","B1"],[3074,"Capitalism","পুঁজিবাদ","","noun","Society","B2"],[3075,"Capsule","ক্যাপসুল ওষুধ","","noun","Health","A2"],[3076,"Captain","অধিনায়ক বা জাহাজের প্রধান","","noun","Professions","A1"],[3077,"Captivity","বন্দিদশা বা বন্দিত্ব","","noun","General","B2"],[3078,"Cardiologist","হৃদরোগ বিশেষজ্ঞ","","noun","Professions","B2"],[3079,"Caretaker","তত্ত্বাবধায়ক বা কেয়ারটেকার","","noun","Professions","A2"],[3080,"Carnival","আনন্দমেলা বা কার্নিভাল","","noun","Arts","A2"],[3081,"Carton","কার্টন বা শক্ত কাগজের বাক্স","","noun","Objects","A2"],[3082,"Cashier","ক্যাশিয়ার বা কোষাধ্যক্ষ","","noun","Professions","A1"],[3083,"Catering","খাবার সরবরাহের ব্যবসা","","noun","Business","B1"],[3084,"Cavalry","অশ্বারোহী সৈন্যবাহিনী","","noun","History","B2"],[3085,"Celebration","উৎসব বা উদযাপন","","noun","General","A1"],[3086,"Celebrity","বিখ্যাত তারকা ব্যক্তি","","noun","Entertainment","A2"],[3087,"Cellar","মাটির নিচের গুদামঘর","","noun","Home","B1"],[3088,"Cement","সিমেন্ট বা গাঁথুনির উপাদান","","noun","Materials","A2"],[3089,"Cemetery","কবরস্থান বা শ্মশান","","noun","Places","A2"],[3090,"Census","আদমশুমারি বা জনগণনা","","noun","Society","B2"],[3091,"Centigrade","সেলসিয়াস বা সেন্টিগ্রেড তাপমাত্রা","","noun","Science","A2"],[3092,"Centimetre","সেন্টিমিটার দৈর্ঘ্যের মাপ","","noun","Math","A1"],[3093,"Ceremony","অনুষ্ঠান বা আচার","","noun","Society","A2"],[3094,"Certainty","নিশ্চয়তা বা সুনিশ্চিত বিষয়","","noun","General","B1"],[3095,"Certificate","সনদপত্র বা সার্টিফিকেট","","noun","Education","A2"],[3096,"Chairman","সভাপতি বা চেয়ারম্যান","","noun","Workplace","A2"],[3097,"Challenge","চ্যালেঞ্জ বা প্রতিযোগিতামূলক বাধা","","noun","General","A2"],[3098,"Chamber","কক্ষ বা চিকিৎসকের চেম্বার","","noun","Places","A2"],[3099,"Chancellor","বিশ্ববিদ্যালয়ের আচার্য বা চ্যান্সেলর","","noun","Education","B2"],[3100,"Chapter","অধ্যায় বা পরিচ্ছেদ","","noun","Education","A1"],[3101,"Character","চরিত্র বা ব্যক্তিত্ব","","noun","General","A2"],[3102,"Charity","দানশীলতা বা দাতব্য সংস্থা","","noun","Society","A2"],[3103,"Chatter","অনবরত আড্ডা বা কথার গুঞ্জন","","noun","General","A2"],[3104,"Checkpost","চেকপোস্ট বা তল্লাশি চৌকি","","noun","Places","A2"],[3105,"Cheetah","চিতা বা দ্রুতগামী প্রাণী","","noun","Animals","A2"],[3106,"Chemist","রসায়নবিদ বা ওষুধ বিক্রেতা","","noun","Professions","A2"],[3107,"Chemistry","রসায়ন বিজ্ঞান","","noun","Science","A2"],[3108,"Childhood","শৈশবকাল","","noun","Family","A1"],[3109,"Chimney","চিমনি বা ধোঁয়া বের হওয়ার নল","","noun","Home","A2"],[3110,"Chlorine","ক্লোরিন গ্যাস বা জীবাণুনাশক","","noun","Science","B1"],[3111,"Choir","গায়কদল বা কোরাস","","noun","Arts","B1"],[3112,"Choreography","নৃত্যের রূপরেখা বা কোরিওগ্রাফি","","noun","Arts","B2"],[3113,"Chronicle","ধারাবাহিক ইতিহাস বা উপাখ্যান","","noun","History","B2"],[3114,"Chrysalis","গুটিপোকার অবস্থা","","noun","Nature","B2"],[3115,"Cinnamon","দারুচিনি মশলা","","noun","Food","A2"],[3116,"Circulation","রক্ত সঞ্চালন বা পত্রিকার প্রচার সংখ্যা","","noun","General","B1"],[3117,"Circumstance","পরিস্থিতি বা অবস্থা","","noun","General","B1"],[3118,"Circus","সার্কাস খেলা","","noun","Entertainment","A1"],[3119,"Citizenship","নাগরিকত্ব","","noun","Society","B1"],[3120,"Civilization","সভ্যতা","","noun","History","B1"],[3121,"Classmate","সহপাঠী বা ক্লাসের বন্ধু","","noun","Education","A1"],[3122,"Classroom","শ্রেণিকক্ষ","","noun","Education","A1"],[3123,"Clergyman","ধর্মযাজক বা পুরোহিত","","noun","Professions","B1"],[3124,"Cleverness","চাতুর্য বা বুদ্ধিমত্তা","","noun","General","A2"],[3125,"Cliff","খাড়া পাহাড়ের প্রান্ত","","noun","Nature","B1"],[3126,"Climate","জলবায়ু","","noun","Nature","A2"],[3127,"Cloakroom","পোশাক বা ব্যাগ রাখার কক্ষ","","noun","Places","B1"],[3128,"Clockwork","ঘড়ির ভেতরের যন্ত্রপাতি বা সুশৃঙ্খল","","noun","Objects","B1"],[3129,"Clover","তিপাত্তা ঘাস বা ক্লোভার","","noun","Nature","A2"],[3130,"Coaching","কোচিং বা নিবিড় প্রশিক্ষণ","","noun","Education","A2"],[3131,"Cobbler","মুচি বা জুতো মেরামতকারী","","noun","Professions","A2"],[3132,"Cockpit","বিমানের চালকের কেবিন","","noun","Travel","B1"],[3133,"Coconut","নারকেল ফল","","noun","Food","A1"],[3134,"Coffeehouse","কফি হাউস বা আড্ডার স্থান","","noun","Places","A1"],[3135,"Coincidence","কাকতালীয় ঘটনা","","noun","General","B1"],[3136,"Collaboration","যৌথ সহযোগিতা বা কোলাবোরেশন","","noun","Workplace","B1"],[3137,"Collection","সংগ্রহ বা সংকলন","","noun","General","A2"],[3138,"College","কলেজ বা মহাবিদ্যালয়","","noun","Education","A1"],[3139,"Collision","সংঘর্ষ বা ধাক্কা","","noun","General","B1"],[3140,"Colony","উপনিবেশ বা উপনিবেশিক বসতি","","noun","History","B1"],[3141,"Combustion","দহন বা জ্বলে ওঠার প্রক্রিয়া","","noun","Science","B2"],[3142,"Comedian","কৌতুক অভিনেতা বা ভাঁড়","","noun","Professions","A2"],[3143,"Commander","সেনাপতি বা দলনেতা","","noun","Professions","B1"],[3144,"Commerce","বাণিজ্য বা ব্যবসা-বাণিজ্য","","noun","Business","B1"],[3145,"Commitment","অঙ্গীকার বা প্রতিশ্রুতি","","noun","General","B1"],[3146,"Committee","কমিটি বা পরিচালনা পর্ষদ","","noun","Workplace","A2"],[3147,"Communication","যোগাযোগ বা ভাব বিনিময়","","noun","General","A2"],[3148,"Community","সম্প্রদায় বা জনসমাজ","","noun","Society","A2"],[3149,"Companion","সাথী বা সহযাত্রী","","noun","Family","A2"],[3150,"Comparison","তুলনা","","noun","General","A2"],[3151,"Compassion","করুণা বা গভীর সহমর্মিতা","","noun","Feelings","B1"],[3152,"Competence","যোগ্যতা বা কাজের দক্ষতা","","noun","Workplace","B2"],[3153,"Competition","প্রতিযোগিতা","","noun","Sports","A2"],[3154,"Competitor","প্রতিদ্বন্দ্বী বা প্রতিযোগী","","noun","Sports","A2"],[3155,"Complainer","নালিশকারী বা অভিযোগকারী","","noun","General","A2"],[3156,"Composition","রচনা বা উপাদান সমন্বয়","","noun","Education","A2"],[3157,"Concentration","মনোযোগ বা ঘনমাত্রা","","noun","Education","B1"],[3158,"Conclusion","উপসংহার বা সমাপ্তি","","noun","Education","A2"],[3159,"Condition","অবস্থা বা শর্ত","","noun","General","A2"],[3160,"Conference","সম্মেলন বা কনফারেন্স","","noun","Workplace","B1"],[3161,"Confidence","আত্মবিশ্বাস বা ভরসা","","noun","Feelings","A2"],[3162,"Confirmation","নিশ্চিতকরণ বা অনুমোদন","","noun","General","A2"],[3163,"Conflict","সংঘাত বা দ্বন্দ্ব","","noun","General","B1"],[3164,"Congratulation","অভিনন্দন","","noun","General","A1"],[3165,"Congress","সম্মেলন বা কংগ্রেস পরিষদ","","noun","Society","B1"],[3166,"Connection","সংযোগ বা যোগাযোগ","","noun","Tech","A2"],[3167,"Consequence","পরিণতি বা ফলাফল","","noun","General","B1"],[3168,"Construction","নির্মাণকাজ বা পরিকাঠামো","","noun","Workplace","A2"],[3169,"Consultant","পরামর্শক বা বিশেষজ্ঞ","","noun","Professions","B1"],[3170,"Consumer","ভোক্তা বা ক্রেতা","","noun","Business","A2"],[3171,"Contagion","ছোঁয়াচে রোগ বা সংক্রমণ","","noun","Health","B2"],[3172,"Continent","মহাদেশ","","noun","Places","A1"],[3173,"Contribution","অবদান বা চাঁদা","","noun","General","B1"],[3174,"Controller","নিয়ন্ত্রক বা রিমোট","","noun","Tech","A2"],[3175,"Controversy","বিতর্ক বা মতভেদ","","noun","General","B1"],[3176,"Convenience","সুবিধা বা সাচ্ছন্দ্য","","noun","General","A2"],[3177,"Conversation","কথোপকথন বা আলাপচারিতা","","noun","Language","A1"],[3178,"Cooperation","পারস্পরিক সহযোগিতা","","noun","General","A2"],[3179,"Coordination","সমন্বয়সাধন","","noun","Workplace","B1"],[3180,"Corridor","করিডোর বা বারান্দাপথ","","noun","Home","A2"],[3181,"Corruption","দুর্নীতি বা অনিয়ম","","noun","Society","A2"],[3182,"Cosmetics","প্রসাধন সামগ্রী","","noun","Shopping","A2"],[3183,"Costume","পোশাক বা নাটকের বেশভূষা","","noun","Clothes","A2"],[3184,"Cottage","কুটির বা ছোট গ্রাম্য বাড়ি","","noun","Home","A2"],[3185,"Council","পরিষদ বা কাউন্সিল","","noun","Society","B1"],[3186,"Courier","কুরিয়ার বা দ্রুত বার্তা ও পার্সেল বাহক","","noun","Workplace","A2"],[3187,"Coverage","সংবাদ পরিবেশন বা বীমা কভারেজ","","noun","General","B1"],[3188,"Creativity","সৃজনশীলতা বা সৃষ্টিশীল প্রতিভা","","noun","Arts","A2"],[3189,"Credibility","বিশ্বাসযোগ্যতা বা সুনাম","","noun","General","B2"],[3190,"Credit","ঋণ বা কৃতিত্ব","","noun","Finance","A2"],[3191,"Criminal","অপরাধী","","noun","Society","A2"],[3192,"Criticism","সমালোচনা বা দোষত্রুটি বিচার","","noun","General","B1"],[3193,"Crossroad","চৌরাস্তা বা সংযোগস্থল","","noun","Places","A2"],[3194,"Crown","মুকুট বা রাজমুকুট","","noun","Objects","A2"],[3195,"Cruelty","নিষ্ঠুরতা বা নির্দয়তা","","noun","Feelings","B1"],[3196,"Cruise","নৌভ্রমণ বা বিলাসবহুল জাহাজ ভ্রমণ","","noun","Travel","A2"],[3197,"Cucumber","শসা","","noun","Food","A1"],[3198,"Culprit","অপরাধী বা মূল দোষী ব্যক্তি","","noun","Society","B1"],[3199,"Cultivation","চাষাবাদ বা ফসলোৎপাদন","","noun","Nature","A2"],[3200,"Culture","সংস্কৃতি বা কৃষ্টি","","noun","Society","A2"],[3201,"Curiosity","কৌতূহল বা জানার আগ্রহ","","noun","Feelings","A2"],[3202,"Currency","মুদ্রা বা ব্যাংক নোট","","noun","Finance","A2"],[3203,"Current","স্রোত বা বিদ্যুৎপ্রবাহ","","noun","Nature","A2"],[3204,"Customs","শুল্ক বিভাগ বা প্রথা","","noun","Travel","B1"],[3205,"Cylinder","সিলিন্ডার বা চোঙা","","noun","Objects","A2"]];
export const ALL_WORDS_DATABASE: WordItem[] = _RAW_WORDS.map(([id, word, bn, phonetic, pos, category, level]) => ({
  id, word, bn, phonetic, pos, category, level
}));
export const ALL_CATEGORIES: string[] = Array.from(new Set(ALL_WORDS_DATABASE.map(w => w.category)));

const _RAW_SENTS: [number, string, string, string, 'A1' | 'A2' | 'B1' | 'B2' | 'C1'][] = [[1,"Greetings","How have you been?","আপনি কেমন ছিলেন?","A1"],[2,"Greetings","It is nice to see you again.","আবার দেখা হয়ে ভালো লাগল।","A1"],[3,"Greetings","Let me introduce myself.","আমাকে নিজের পরিচয় দিতে দিন।","A1"],[4,"Greetings","I am glad to meet you.","আপনার সাথে পরিচিত হয়ে খুশি।","A1"],[5,"Greetings","Thank you for your help.","আপনার সাহায্যের জন্য ধন্যবাদ।","A1"],[6,"Greetings","I am sorry for being late.","দেরি করার জন্য দুঃখিত।","A1"],[7,"Greetings","Have a nice day.","আপনার দিনটি শুভ হোক।","A1"],[8,"Daily","I usually wake up at six.","আমি সাধারণত ছয়টায় উঠি।","A1"],[9,"Daily","I have breakfast at eight.","আমি আটটায় সকালের নাস্তা করি।","A1"],[10,"Daily","I go to work by bus.","আমি বাসে করে কাজে যাই।","A1"],[11,"Daily","I am watching TV right now.","আমি এখন টিভি দেখছি।","A1"],[12,"Daily","She is cooking dinner.","সে রাতের খাবার রান্না করছে।","A1"],[13,"Daily","We play football on Fridays.","আমরা শুক্রবারে ফুটবল খেলি।","A1"],[14,"Daily","I go to bed at eleven.","আমি এগারোটায় ঘুমাতে যাই।","A1"],[15,"Shopping","How much is this shirt?","এই শার্টটির দাম কত?","A1"],[16,"Shopping","It is too expensive for me.","এটা আমার জন্য অনেক দামি।","A1"],[17,"Shopping","Do you have this in a bigger size?","এটা কি বড় সাইজে আছে?","A1"],[18,"Shopping","Can I pay by card?","আমি কি কার্ডে টাকা দিতে পারি?","A1"],[19,"Shopping","Please give me a receipt.","দয়া করে আমাকে একটা রসিদ দিন।","A1"],[20,"Shopping","I am just looking, thank you.","আমি শুধু দেখছি, ধন্যবাদ।","A1"],[21,"Shopping","Could you give me a discount?","আপনি কি আমাকে ছাড় দিতে পারেন?","A1"],[22,"Travel","Which bus goes to the station?","কোন বাসটি স্টেশনে যায়?","A1"],[23,"Travel","How long does it take to get there?","সেখানে যেতে কতক্ষণ লাগে?","A1"],[24,"Travel","Please stop here.","দয়া করে এখানে থামুন।","A1"],[25,"Travel","I have lost my passport.","আমি আমার পাসপোর্ট হারিয়ে ফেলেছি।","A1"],[26,"Travel","Is this seat taken?","এই সিটটি কি খালি?","A1"],[27,"Travel","Turn left at the corner.","মোড়ে বামে ঘুরুন।","A1"],[28,"Travel","I would like to book a room.","আমি একটি রুম বুক করতে চাই।","A1"],[29,"Travel","What time does the train leave?","ট্রেন কয়টায় ছাড়ে?","A1"],[30,"Office","I would like to schedule a meeting.","আমি একটি মিটিং ঠিক করতে চাই।","A1"],[31,"Office","Could you send me the report?","আপনি কি আমাকে প্রতিবেদনটি পাঠাতে পারেন?","A1"],[32,"Office","I will get back to you soon.","আমি শীঘ্রই আপনাকে জানাব।","A1"],[33,"Office","The deadline is next Monday.","সময়সীমা আগামী সোমবার।","A1"],[34,"Office","I agree with your idea.","আমি আপনার ধারণার সাথে একমত।","A1"],[35,"Office","Let us discuss this tomorrow.","চলুন এটা আগামীকাল আলোচনা করি।","A1"],[36,"Office","I need more time to finish this.","এটা শেষ করতে আমার আরও সময় দরকার।","A1"],[37,"Office","Thank you for your valuable feedback.","আপনার মূল্যবান মতামতের জন্য ধন্যবাদ।","A1"],[38,"Health","I have a headache.","আমার মাথাব্যথা করছে।","A1"],[39,"Health","I need to see a doctor.","আমাকে ডাক্তার দেখাতে হবে।","A1"],[40,"Health","Take this medicine twice a day.","এই ওষুধ দিনে দুইবার খান।","A1"],[41,"Health","You should drink more water.","আপনার আরও পানি পান করা উচিত।","A1"],[42,"Health","I feel dizzy.","আমার মাথা ঘুরছে।","A1"],[43,"Health","Please call an ambulance.","দয়া করে অ্যাম্বুলেন্স ডাকুন।","A1"],[44,"Health","Get well soon.","তাড়াতাড়ি সুস্থ হয়ে উঠুন।","A1"],[45,"Opinions","In my opinion, this is a good plan.","আমার মতে, এটা ভালো পরিকল্পনা।","A1"],[46,"Opinions","I do not agree with you.","আমি আপনার সাথে একমত নই।","A1"],[47,"Opinions","That sounds interesting.","এটা শুনতে মজার লাগছে।","A1"],[48,"Opinions","I am not sure about that.","এ বিষয়ে আমি নিশ্চিত নই।","A1"],[49,"Opinions","It depends on the situation.","এটা পরিস্থিতির উপর নির্ভর করে।","A1"],[50,"Opinions","I hope everything goes well.","আশা করি সব ভালো হবে।","A1"],[51,"Opinions","I am proud of you.","আমি তোমার জন্য গর্বিত।","A1"],[52,"Family","My family is very close.","আমার পরিবার খুব ঘনিষ্ঠ।","A1"],[53,"Family","I live with my parents.","আমি বাবা-মায়ের সাথে থাকি।","A1"],[54,"Family","My brother is older than me.","আমার ভাই আমার চেয়ে বড়।","A1"],[55,"Family","She is my younger sister.","সে আমার ছোট বোন।","A1"],[56,"Family","We visit our grandparents every Friday.","আমরা প্রতি শুক্রবার দাদা-দাদির কাছে যাই।","A1"],[57,"Family","My mother cooks very well.","আমার মা খুব ভালো রান্না করেন।","A1"],[58,"Family","He has two children.","তার দুইটি সন্তান আছে।","A1"],[59,"Family","Do you have any brothers or sisters?","তোমার কি কোনো ভাইবোন আছে?","A1"],[60,"Family","My father works in a bank.","আমার বাবা ব্যাংকে কাজ করেন।","A1"],[61,"Family","We are having guests today.","আজ আমাদের বাড়িতে অতিথি আসছেন।","A1"],[62,"Food","I am very hungry.","আমি খুব ক্ষুধার্ত।","A1"],[63,"Food","What would you like to eat?","আপনি কী খেতে চান?","A1"],[64,"Food","The food is really tasty.","খাবারটা সত্যিই সুস্বাদু।","A1"],[65,"Food","Can I have some more rice?","আমি কি আরও একটু ভাত পেতে পারি?","A1"],[66,"Food","I do not eat spicy food.","আমি ঝাল খাবার খাই না।","A1"],[67,"Food","Please bring me a glass of water.","দয়া করে আমাকে এক গ্লাস পানি দিন।","A1"],[68,"Food","I am allergic to peanuts.","আমার চিনাবাদামে অ্যালার্জি আছে।","A1"],[69,"Food","Let us order something to eat.","চলুন খাওয়ার জন্য কিছু অর্ডার করি।","A1"],[70,"Food","I usually drink tea in the evening.","আমি সাধারণত সন্ধ্যায় চা খাই।","A1"],[71,"Food","This soup is too hot.","এই স্যুপটা অনেক গরম।","A1"],[72,"School","Open your books, please.","দয়া করে তোমাদের বই খোলো।","A1"],[73,"School","I did not understand the lesson.","আমি পাঠটি বুঝতে পারিনি।","A1"],[74,"School","Can you explain it again?","আপনি কি আবার বুঝিয়ে বলতে পারেন?","A1"],[75,"School","I have an exam tomorrow.","আমার আগামীকাল পরীক্ষা আছে।","A1"],[76,"School","Please write your name here.","দয়া করে এখানে আপনার নাম লিখুন।","A1"],[77,"School","She studies English every night.","সে প্রতি রাতে ইংরেজি পড়ে।","A1"],[78,"School","I forgot my homework at home.","আমি বাড়িতে হোমওয়ার্ক ভুলে এসেছি।","A1"],[79,"School","May I ask a question?","আমি কি একটি প্রশ্ন করতে পারি?","A1"],[80,"School","The class starts at nine.","ক্লাস নয়টায় শুরু হয়।","A1"],[81,"School","You did a great job.","তুমি দারুণ করেছ।","A1"],[82,"Weather","It is very hot today.","আজ খুব গরম।","A1"],[83,"Weather","It looks like it will rain.","মনে হচ্ছে বৃষ্টি হবে।","A1"],[84,"Weather","The weather is nice.","আবহাওয়াটা সুন্দর।","A1"],[85,"Weather","It is cold in the morning.","সকালে ঠান্ডা থাকে।","A1"],[86,"Weather","Do not forget your umbrella.","ছাতা নিতে ভুলবেন না।","A1"],[87,"Weather","There was a big storm last night.","গত রাতে বড় ঝড় হয়েছিল।","A1"],[88,"Weather","The sun is shining.","সূর্য উঠেছে।","A1"],[89,"Weather","Winter is my favorite season.","শীত আমার প্রিয় ঋতু।","A1"],[90,"Friends","What are you doing this weekend?","এই সপ্তাহান্তে তুমি কী করছ?","A1"],[91,"Friends","Do you want to come with me?","তুমি কি আমার সাথে আসতে চাও?","A1"],[92,"Friends","I had a great time today.","আজ আমার সময়টা দারুণ কেটেছে।","A1"],[93,"Friends","You can count on me.","তুমি আমার উপর ভরসা করতে পারো।","A1"],[94,"Friends","Let us take a photo together.","চলুন একসাথে একটা ছবি তুলি।","A1"],[95,"Friends","I miss my old friends.","আমি আমার পুরনো বন্ধুদের মিস করি।","A1"],[96,"Friends","Why are you so quiet today?","আজ তুমি এত চুপ কেন?","A1"],[97,"Friends","That is a good idea.","এটা ভালো একটা ধারণা।","A1"],[98,"Friends","I am sorry, I did not mean it.","দুঃখিত, আমি ইচ্ছা করে বলিনি।","A1"],[99,"Friends","Do not worry, everything will be fine.","চিন্তা করো না, সব ঠিক হয়ে যাবে।","A1"],[100,"Phone","Hello, who is speaking?","হ্যালো, কে বলছেন?","A1"],[101,"Phone","Can I speak to Mr. Rahman?","আমি কি রহমান সাহেবের সাথে কথা বলতে পারি?","A1"],[102,"Phone","I cannot hear you clearly.","আমি আপনাকে পরিষ্কার শুনতে পাচ্ছি না।","A1"],[103,"Phone","Please hold on for a moment.","দয়া করে এক মুহূর্ত অপেক্ষা করুন।","A1"],[104,"Phone","I will call you back later.","আমি পরে আপনাকে ফোন করব।","A1"],[105,"Phone","My battery is low.","আমার ব্যাটারি কমে গেছে।","A1"],[106,"Phone","Please send me a message.","দয়া করে আমাকে একটা মেসেজ পাঠান।","A1"],[107,"Phone","The network is very slow.","নেটওয়ার্ক খুব ধীর।","A1"],[108,"Phone","What is your phone number?","আপনার ফোন নম্বর কত?","A1"],[109,"Phone","I am on the way.","আমি রাস্তায় আছি।","A1"],[110,"Money","Can you lend me some money?","আপনি কি আমাকে কিছু টাকা ধার দিতে পারেন?","A1"],[111,"Money","I need to save more money.","আমাকে আরও টাকা জমাতে হবে।","A1"],[112,"Money","How much do I owe you?","আমি আপনাকে কত টাকা দেব?","A1"],[113,"Money","Do you accept cash?","আপনারা কি নগদ টাকা নেন?","A1"],[114,"Money","I want to open a bank account.","আমি একটি ব্যাংক অ্যাকাউন্ট খুলতে চাই।","A1"],[115,"Money","The price is reasonable.","দামটা যুক্তিসঙ্গত।","A1"],[116,"Money","I spent too much this month.","এই মাসে আমি অনেক বেশি খরচ করেছি।","A1"],[117,"Money","Please check the bill again.","দয়া করে বিলটা আবার দেখুন।","A1"],[118,"Emergency","Help! Please help me!","বাঁচাও! দয়া করে আমাকে সাহায্য করুন!","A1"],[119,"Emergency","There is a fire!","আগুন লেগেছে!","A1"],[120,"Emergency","Call the police now.","এখনই পুলিশ ডাকুন।","A1"],[121,"Emergency","I have been robbed.","আমার জিনিস ছিনতাই হয়েছে।","A1"],[122,"Emergency","Someone is hurt.","কেউ আহত হয়েছে।","A1"],[123,"Emergency","I am lost, can you help me?","আমি পথ হারিয়েছি, আপনি কি সাহায্য করতে পারেন?","A1"],[124,"Emergency","Where is the nearest hospital?","সবচেয়ে কাছের হাসপাতাল কোথায়?","A1"],[125,"Emergency","It is an emergency.","এটা জরুরি অবস্থা।","A1"],[126,"Home","I am at home right now.","আমি এখন বাড়িতে আছি।","A1"],[127,"Home","Please close the door.","দয়া করে দরজাটা বন্ধ করুন।","A1"],[128,"Home","Turn on the light.","বাতিটা জ্বালিয়ে দাও।","A1"],[129,"Home","Turn off the fan.","পাখাটা বন্ধ করো।","A1"],[130,"Home","The kitchen is very clean.","রান্নাঘরটা খুব পরিষ্কার।","A1"],[131,"Home","I need to wash my clothes.","আমাকে আমার কাপড় ধুতে হবে।","A1"],[132,"Home","Where did you put the key?","তুমি চাবিটা কোথায় রেখেছ?","A1"],[133,"Home","Our house has three rooms.","আমাদের বাড়িতে তিনটি ঘর আছে।","A1"],[134,"Home","Please clean the table.","দয়া করে টেবিলটা পরিষ্কার করো।","A1"],[135,"Home","The electricity is gone.","বিদ্যুৎ চলে গেছে।","A1"],[136,"Home","Let us watch a movie tonight.","চলো আজ রাতে একটা সিনেমা দেখি।","A1"],[137,"Work","I start work at nine.","আমি নয়টায় কাজ শুরু করি।","A1"],[138,"Work","I am working on a new project.","আমি একটি নতুন প্রজেক্টে কাজ করছি।","A1"],[139,"Work","My boss is very kind.","আমার বস খুব দয়ালু।","A1"],[140,"Work","I have a meeting at three.","তিনটায় আমার একটি মিটিং আছে।","A1"],[141,"Work","I will finish it by Friday.","আমি এটা শুক্রবারের মধ্যে শেষ করব।","A1"],[142,"Work","Can I take a day off?","আমি কি একদিন ছুটি নিতে পারি?","A1"],[143,"Work","I am looking for a new job.","আমি নতুন চাকরি খুঁজছি।","A1"],[144,"Work","I have five years of experience.","আমার পাঁচ বছরের অভিজ্ঞতা আছে।","A1"],[145,"Work","Please send me your resume.","দয়া করে আপনার জীবনবৃত্তান্ত পাঠান।","A1"],[146,"Work","I work from home today.","আজ আমি বাড়ি থেকে কাজ করছি।","A1"],[147,"Work","Thank you for this opportunity.","এই সুযোগের জন্য ধন্যবাদ।","A1"],[148,"Hobbies","I like to read books.","আমি বই পড়তে পছন্দ করি।","A1"],[149,"Hobbies","She loves to sing.","সে গান গাইতে ভালোবাসে।","A1"],[150,"Hobbies","Do you play cricket?","তুমি কি ক্রিকেট খেলো?","A1"],[151,"Hobbies","I enjoy cooking at home.","আমি বাড়িতে রান্না করতে উপভোগ করি।","A1"],[152,"Hobbies","We go for a walk every evening.","আমরা প্রতি সন্ধ্যায় হাঁটতে যাই।","A1"],[153,"Hobbies","I am learning to swim.","আমি সাঁতার শিখছি।","A1"],[154,"Hobbies","He likes to draw pictures.","সে ছবি আঁকতে পছন্দ করে।","A1"],[155,"Hobbies","My hobby is gardening.","আমার শখ বাগান করা।","A1"],[156,"Hobbies","I listen to music every day.","আমি প্রতিদিন গান শুনি।","A1"],[157,"Hobbies","They are playing in the field.","তারা মাঠে খেলছে।","A1"],[158,"Hobbies","I want to learn English.","আমি ইংরেজি শিখতে চাই।","A1"],[159,"Transport","Where is the bus stop?","বাস স্টপ কোথায়?","A1"],[160,"Transport","The bus is late today.","আজ বাসটি দেরি করছে।","A1"],[161,"Transport","I take a rickshaw to the market.","আমি বাজারে রিকশায় যাই।","A1"],[162,"Transport","Please drive slowly.","দয়া করে আস্তে গাড়ি চালান।","A1"],[163,"Transport","How much is the fare?","ভাড়া কত?","A1"],[164,"Transport","There is a lot of traffic.","অনেক যানজট।","A1"],[165,"Transport","I missed the train.","আমি ট্রেন মিস করেছি।","A1"],[166,"Transport","Does this bus go to Dhaka?","এই বাস কি ঢাকা যায়?","A1"],[167,"Transport","I will go by train.","আমি ট্রেনে যাব।","A1"],[168,"Transport","Please wear your seat belt.","দয়া করে সিট বেল্ট পরুন।","A1"],[169,"Transport","Let us take a taxi.","চলুন একটা ট্যাক্সি নিই।","A1"],[170,"Directions","How do I get to the hospital?","হাসপাতালে কীভাবে যাব?","A1"],[171,"Directions","Go straight ahead.","সোজা সামনে যান।","A1"],[172,"Directions","Turn right at the next corner.","পরের মোড়ে ডানে ঘুরুন।","A1"],[173,"Directions","It is near the bank.","এটা ব্যাংকের কাছেই।","A1"],[174,"Directions","It is on your left.","এটা আপনার বাম দিকে।","A1"],[175,"Directions","Is it far from here?","এটা কি এখান থেকে দূরে?","A1"],[176,"Directions","Can you show me on the map?","আপনি কি আমাকে মানচিত্রে দেখাতে পারেন?","A1"],[177,"Directions","Cross the road carefully.","সাবধানে রাস্তা পার হোন।","A1"],[178,"Directions","It takes ten minutes on foot.","হেঁটে যেতে দশ মিনিট লাগে।","A1"],[179,"Directions","I think I am going the wrong way.","আমার মনে হয় আমি ভুল পথে যাচ্ছি।","A1"],[180,"Directions","It is opposite the school.","এটা স্কুলের উল্টো দিকে।","A1"],[181,"Hotel","I have a reservation.","আমার একটি বুকিং আছে।","A1"],[182,"Hotel","Do you have any rooms available?","আপনাদের কি কোনো রুম খালি আছে?","A1"],[183,"Hotel","How much is the room per night?","রুমের ভাড়া রাতপ্রতি কত?","A1"],[184,"Hotel","What time is check out?","চেক-আউট কখন?","A1"],[185,"Hotel","Is breakfast included?","সকালের নাস্তা কি অন্তর্ভুক্ত?","A1"],[186,"Hotel","The room is too noisy.","রুমটা অনেক গোলমালের।","A1"],[187,"Hotel","Can I have an extra blanket?","আমি কি একটা বাড়তি কম্বল পেতে পারি?","A1"],[188,"Hotel","The air conditioner is not working.","এয়ার কন্ডিশনার কাজ করছে না।","A1"],[189,"Hotel","Please wake me up at six.","দয়া করে আমাকে ছয়টায় জাগিয়ে দিন।","A1"],[190,"Hotel","I would like to extend my stay.","আমি আমার থাকার মেয়াদ বাড়াতে চাই।","A1"],[191,"Hotel","Where is the lift?","লিফট কোথায়?","A1"],[192,"Bank","I want to withdraw some money.","আমি কিছু টাকা তুলতে চাই।","A1"],[193,"Bank","I would like to deposit this cheque.","আমি এই চেকটি জমা দিতে চাই।","A1"],[194,"Bank","What is the interest rate?","সুদের হার কত?","A1"],[195,"Bank","I forgot my PIN.","আমি আমার পিন ভুলে গেছি।","A1"],[196,"Bank","My card is not working.","আমার কার্ড কাজ করছে না।","A1"],[197,"Bank","Please fill out this form.","দয়া করে এই ফর্মটি পূরণ করুন।","A1"],[198,"Bank","I need to send money abroad.","আমাকে বিদেশে টাকা পাঠাতে হবে।","A1"],[199,"Bank","What is my account balance?","আমার অ্যাকাউন্টে কত টাকা আছে?","A1"],[200,"Bank","Do I need an appointment?","আমার কি অ্যাপয়েন্টমেন্ট লাগবে?","A1"],[201,"Bank","Please sign here.","দয়া করে এখানে সই করুন।","A1"],[202,"Restaurant","A table for two, please.","দুইজনের জন্য একটি টেবিল দিন।","A1"],[203,"Restaurant","Can I see the menu?","আমি কি মেনুটা দেখতে পারি?","A1"],[204,"Restaurant","I will have the chicken curry.","আমি মুরগির তরকারি নেব।","A1"],[205,"Restaurant","Could we have the bill, please?","আমরা কি বিলটা পেতে পারি?","A1"],[206,"Restaurant","The food is cold.","খাবারটা ঠান্ডা।","A1"],[207,"Restaurant","I ordered tea, not coffee.","আমি চা অর্ডার করেছিলাম, কফি নয়।","A1"],[208,"Restaurant","Is this dish vegetarian?","এই খাবারটি কি নিরামিষ?","A1"],[209,"Restaurant","Please pack the rest for me.","দয়া করে বাকিটা আমার জন্য প্যাক করে দিন।","A1"],[210,"Restaurant","Can we sit near the window?","আমরা কি জানালার কাছে বসতে পারি?","A1"],[211,"Restaurant","What do you recommend?","আপনি কী খেতে বলবেন?","A1"],[212,"Restaurant","Everything was wonderful.","সবকিছু চমৎকার ছিল।","A1"],[213,"Feelings","I am so happy today.","আজ আমি খুব খুশি।","A1"],[214,"Feelings","I feel very tired.","আমি খুব ক্লান্ত বোধ করছি।","A1"],[215,"Feelings","I am a little nervous.","আমি একটু নার্ভাস।","A1"],[216,"Feelings","She is angry with me.","সে আমার উপর রেগে আছে।","A1"],[217,"Feelings","I am really excited about the trip.","আমি ভ্রমণ নিয়ে সত্যিই উত্তেজিত।","A1"],[218,"Feelings","He looks sad.","তাকে দুঃখী দেখাচ্ছে।","A1"],[219,"Feelings","I am afraid of the dark.","আমি অন্ধকারকে ভয় পাই।","A1"],[220,"Feelings","I feel lonely sometimes.","আমি মাঝে মাঝে একা বোধ করি।","A1"],[221,"Feelings","Do not be shy.","লজ্জা পেও না।","A1"],[222,"Feelings","I am grateful for your support.","আপনার সহযোগিতার জন্য আমি কৃতজ্ঞ।","A1"],[223,"Feelings","I feel much better now.","আমি এখন অনেক ভালো বোধ করছি।","A1"],[224,"Time","What time is it?","কয়টা বাজে?","A1"],[225,"Time","It is half past five.","সাড়ে পাঁচটা বাজে।","A1"],[226,"Time","See you at seven o'clock.","সাতটায় দেখা হবে।","A1"],[227,"Time","I am free in the afternoon.","আমি বিকেলে ফ্রি আছি।","A1"],[228,"Time","The shop opens at ten.","দোকান দশটায় খোলে।","A1"],[229,"Time","I have been waiting for an hour.","আমি এক ঘণ্টা ধরে অপেক্ষা করছি।","A1"],[230,"Time","We are running out of time.","আমাদের সময় ফুরিয়ে আসছে।","A1"],[231,"Time","Please come on time.","দয়া করে সময়মতো আসুন।","A1"],[232,"Time","I will be back in five minutes.","আমি পাঁচ মিনিটে ফিরব।","A1"],[233,"Time","Today is Wednesday.","আজ বুধবার।","A1"],[234,"Time","My birthday is next month.","আমার জন্মদিন আগামী মাসে।","A1"],[235,"Daily","I enjoy drinking a cup of fresh black coffee every morning.","আমি প্রতিদিন সকালে এক কাপ তাজা ব্ল্যাক কফি পান করা উপভোগ করি।","A1"],[236,"Daily","I enjoy drinking a cup of warm lemon tea every morning.","আমি প্রতিদিন সকালে এক কাপ হালকা গরম লেবু চা পান করা উপভোগ করি।","A1"],[237,"Daily","I enjoy drinking a cup of green tea with honey every morning.","আমি প্রতিদিন সকালে এক কাপ মধু মেশানো গ্রিন টি পান করা উপভোগ করি।","A1"],[238,"Daily","I enjoy drinking a cup of fresh cow milk every morning.","আমি প্রতিদিন সকালে এক কাপ তাজা গরুর দুধ পান করা উপভোগ করি।","A1"],[239,"Daily","I enjoy drinking a cup of hot ginger tea every morning.","আমি প্রতিদিন সকালে এক কাপ গরম আদা চা পান করা উপভোগ করি।","A1"],[240,"Daily","I enjoy drinking a cup of masala spiced tea every morning.","আমি প্রতিদিন সকালে এক কাপ মশলাযুক্ত সুস্বাদু চা পান করা উপভোগ করি।","A1"],[241,"School","She has been studying computer science and engineering for the past three years.","সে গত তিন বছর ধরে কম্পিউটার বিজ্ঞান ও প্রকৌশল নিয়ে পড়াশোনা করছে।","B1"],[242,"School","She has been studying business administration and marketing for the past three years.","সে গত তিন বছর ধরে ব্যবসায় প্রশাসন ও বিপণন নিয়ে পড়াশোনা করছে।","B1"],[243,"School","She has been studying English language and literature for the past three years.","সে গত তিন বছর ধরে ইংরেজি ভাষা ও সাহিত্য নিয়ে পড়াশোনা করছে।","B1"],[244,"School","She has been studying environmental science and ecology for the past three years.","সে গত তিন বছর ধরে পরিবেশ বিজ্ঞান ও বাস্তুবিদ্যা নিয়ে পড়াশোনা করছে।","B1"],[245,"School","She has been studying journalism and mass media for the past three years.","সে গত তিন বছর ধরে সাংবাদিকতা ও গণমাধ্যম নিয়ে পড়াশোনা করছে।","B1"],[246,"School","She has been studying international relations and law for the past three years.","সে গত তিন বছর ধরে আন্তর্জাতিক সম্পর্ক ও আইন নিয়ে পড়াশোনা করছে।","B1"],[247,"Directions","Could you please show me the way to the nearest central pharmacy?","দয়া করে আমাকে কি সবচেয়ে কাছের সেন্ট্রাল ফার্মেসি যাওয়ার পথটি দেখিয়ে দেবেন?","A1"],[248,"Directions","Could you please show me the way to the local post office branch?","দয়া করে আমাকে কি স্থানীয় ডাকঘর শাখা যাওয়ার পথটি দেখিয়ে দেবেন?","A1"],[249,"Directions","Could you please show me the way to the metro rail entrance gate?","দয়া করে আমাকে কি মেট্রোরেলের প্রবেশদ্বার যাওয়ার পথটি দেখিয়ে দেবেন?","A1"],[250,"Directions","Could you please show me the way to the district public library?","দয়া করে আমাকে কি জেলা পাবলিক লাইব্রেরি যাওয়ার পথটি দেখিয়ে দেবেন?","A1"],[251,"Directions","Could you please show me the way to the city general hospital?","দয়া করে আমাকে কি শহরের জেনারেল হাসপাতাল যাওয়ার পথটি দেখিয়ে দেবেন?","A1"],[252,"Directions","Could you please show me the way to the historical museum entrance?","দয়া করে আমাকে কি ঐতিহাসিক জাদুঘরের প্রবেশপথ যাওয়ার পথটি দেখিয়ে দেবেন?","A1"],[253,"Daily","It is important to brush your teeth thoroughly before going to bed.","ঘুমাতে যাওয়ার আগে দাঁত ভালোভাবে ব্রাশ করা অত্যন্ত গুরুত্বপূর্ণ।","A1"],[254,"Daily","It is important to wash your hands and face before going to bed.","ঘুমাতে যাওয়ার আগে হাত ও মুখ পরিষ্কার করা অত্যন্ত গুরুত্বপূর্ণ।","A1"],[255,"Daily","It is important to turn off all unnecessary lights before going to bed.","ঘুমাতে যাওয়ার আগে সকল অপ্রয়োজনীয় বাতি নিভিয়ে দেওয়া অত্যন্ত গুরুত্বপূর্ণ।","A1"],[256,"Daily","It is important to read a calming book before going to bed.","ঘুমাতে যাওয়ার আগে মন শান্তকারী কোনো বই পড়া অত্যন্ত গুরুত্বপূর্ণ।","A1"],[257,"Daily","It is important to set an alarm for the morning before going to bed.","ঘুমাতে যাওয়ার আগে সকালের জন্য একটি অ্যালার্ম দেওয়া অত্যন্ত গুরুত্বপূর্ণ।","A1"],[258,"Daily","It is important to drink a glass of clean water before going to bed.","ঘুমাতে যাওয়ার আগে এক গ্লাস বিশুদ্ধ পানি পান করা অত্যন্ত গুরুত্বপূর্ণ।","A1"],[259,"Office","We had a fruitful discussion about the upcoming product launch during the meeting.","মিটিং চলাকালীন আমরা আসন্ন পণ্য উদ্বোধন নিয়ে একটি ফলপ্রসূ আলোচনা করেছি।","B2"],[260,"Office","We had a fruitful discussion about quarterly financial targets during the meeting.","মিটিং চলাকালীন আমরা ত্রৈমাসিক আর্থিক লক্ষ্যমাত্রা নিয়ে একটি ফলপ্রসূ আলোচনা করেছি।","B2"],[261,"Office","We had a fruitful discussion about customer feedback analysis during the meeting.","মিটিং চলাকালীন আমরা গ্রাহকদের মতামত বিশ্লেষণ নিয়ে একটি ফলপ্রসূ আলোচনা করেছি।","B2"],[262,"Office","We had a fruitful discussion about office workflow improvement during the meeting.","মিটিং চলাকালীন আমরা অফিসের কাজের গতি বৃদ্ধি নিয়ে একটি ফলপ্রসূ আলোচনা করেছি।","B2"],[263,"Office","We had a fruitful discussion about new software architecture during the meeting.","মিটিং চলাকালীন আমরা নতুন সফটওয়্যার কাঠামো নিয়ে একটি ফলপ্রসূ আলোচনা করেছি।","B2"],[264,"Office","We had a fruitful discussion about employee welfare policies during the meeting.","মিটিং চলাকালীন আমরা কর্মীদের কল্যাণমূলক নীতিমালা নিয়ে একটি ফলপ্রসূ আলোচনা করেছি।","B2"],[265,"Health","Regular practice of morning brisk walking strengthens your immune system.","নিয়মিত সকালে দ্রুত হাঁটা চর্চা করলে রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি পায়।","B1"],[266,"Health","Regular practice of deep breathing exercises strengthens your immune system.","নিয়মিত গভীর শ্বাস-প্রশ্বাসের ব্যায়াম চর্চা করলে রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি পায়।","B1"],[267,"Health","Regular practice of mindfulness meditation strengthens your immune system.","নিয়মিত মনোযোগপূর্ণ ধ্যান চর্চা করলে রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি পায়।","B1"],[268,"Health","Regular practice of cardiovascular exercises strengthens your immune system.","নিয়মিত হৃদযন্ত্রের ব্যায়াম চর্চা করলে রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি পায়।","B1"],[269,"Health","Regular practice of daily cycling workouts strengthens your immune system.","নিয়মিত প্রতিদিনের সাইক্লিং ব্যায়াম চর্চা করলে রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি পায়।","B1"],[270,"Health","Regular practice of healthy nutritional habits strengthens your immune system.","নিয়মিত স্বাস্থ্যকর খাদ্যাভ্যাস চর্চা করলে রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি পায়।","B1"],[271,"Travel","Please make sure you have your valid passport and boarding pass before boarding.","উড্ডয়নের পূর্বে দয়া করে নিশ্চিত করুন যে আপনার বৈধ পাসপোর্ট এবং বোর্ডিং পাস সাথে আছে।","A2"],[272,"Travel","Please make sure you have your digital travel insurance policy before boarding.","উড্ডয়নের পূর্বে দয়া করে নিশ্চিত করুন যে আপনার ডিজিটাল ভ্রমণ বীমা কপি সাথে আছে।","A2"],[273,"Travel","Please make sure you have your national identity card photocopy before boarding.","উড্ডয়নের পূর্বে দয়া করে নিশ্চিত করুন যে আপনার জাতীয় পরিচয়পত্রের ফটোকপি সাথে আছে।","A2"],[274,"Travel","Please make sure you have your hotel accommodation voucher before boarding.","উড্ডয়নের পূর্বে দয়া করে নিশ্চিত করুন যে আপনার হোটেল বুকিংয়ের ভাউচার সাথে আছে।","A2"],[275,"Travel","Please make sure you have your emergency contact numbers before boarding.","উড্ডয়নের পূর্বে দয়া করে নিশ্চিত করুন যে আপনার জরুরি যোগাযোগের নম্বরসমূহ সাথে আছে।","A2"],[276,"Travel","Please make sure you have your prescribed travel medications before boarding.","উড্ডয়নের পূর্বে দয়া করে নিশ্চিত করুন যে আপনার প্রয়োজনীয় প্রেসক্রিপশনের ওষুধ সাথে আছে।","A2"],[277,"Shopping","The local market is famous for its fresh seasonal vegetables and reasonable prices.","স্থানীয় বাজারটি তার তাজা মৌসুমী শাকসবজি এবং ন্যায্য মূল্যের জন্য বিখ্যাত।","A2"],[278,"Shopping","The local market is famous for its traditional handcrafted pottery and reasonable prices.","স্থানীয় বাজারটি তার ঐতিহ্যবাহী হাতের তৈরি মাটির জিনিস এবং ন্যায্য মূল্যের জন্য বিখ্যাত।","A2"],[279,"Shopping","The local market is famous for its pure organic honey and reasonable prices.","স্থানীয় বাজারটি তার খাঁটি অর্গানিক মধু এবং ন্যায্য মূল্যের জন্য বিখ্যাত।","A2"],[280,"Shopping","The local market is famous for its handwoven silk sarees and reasonable prices.","স্থানীয় বাজারটি তার হাতে বোনা রেশমি শাড়ি এবং ন্যায্য মূল্যের জন্য বিখ্যাত।","A2"],[281,"Shopping","The local market is famous for its sweet seasonal mangoes and reasonable prices.","স্থানীয় বাজারটি তার মৌসুমী মিষ্টি আম এবং ন্যায্য মূল্যের জন্য বিখ্যাত।","A2"],[282,"Shopping","The local market is famous for its delicious traditional sweets and reasonable prices.","স্থানীয় বাজারটি তার সুস্বাদু ঐতিহ্যবাহী মিষ্টি এবং ন্যায্য মূল্যের জন্য বিখ্যাত।","A2"],[283,"Office","I was impressed by their prompt customer support service and professional conduct.","তাদের তৎক্ষণাৎ গ্রাহক সেবা এবং পেশাদার আচরণ দেখে আমি মুগ্ধ হয়েছিলাম।","B2"],[284,"Office","I was impressed by their warm and sincere hospitality and professional conduct.","তাদের আন্তরিক ও উষ্ণ আতিথেয়তা এবং পেশাদার আচরণ দেখে আমি মুগ্ধ হয়েছিলাম।","B2"],[285,"Office","I was impressed by their exceptional attention to detail and professional conduct.","তাদের কাজে চমৎকার নিখুঁত মনোযোগ এবং পেশাদার আচরণ দেখে আমি মুগ্ধ হয়েছিলাম।","B2"],[286,"Office","I was impressed by their honest and transparent communication and professional conduct.","তাদের সৎ ও স্বচ্ছ যোগাযোগ এবং পেশাদার আচরণ দেখে আমি মুগ্ধ হয়েছিলাম।","B2"],[287,"Office","I was impressed by their quick and efficient troubleshooting and professional conduct.","তাদের দ্রুত ও কার্যকর সমস্যা সমাধান এবং পেশাদার আচরণ দেখে আমি মুগ্ধ হয়েছিলাম।","B2"],[288,"Office","I was impressed by their patient and respectful attitude and professional conduct.","তাদের ধৈর্যশীল ও শ্রদ্ধাশীল মনোভাব এবং পেশাদার আচরণ দেখে আমি মুগ্ধ হয়েছিলাম।","B2"],[289,"Daily","We decided to postpone our football match due to unexpected heavy rain.","অপ্রত্যাশিত ভারী বৃষ্টির কারণে আমরা আমাদের ফুটবল ম্যাচ স্থগিত করার সিদ্ধান্ত নিয়েছি।","A2"],[290,"Daily","We decided to cancel the outdoor picnic due to unexpected heavy rain.","অপ্রত্যাশিত ভারী বৃষ্টির কারণে আমরা বাইরের পিকনিক বাতিল করার সিদ্ধান্ত নিয়েছি।","A2"],[291,"Daily","We decided to take a cab instead of walking due to unexpected heavy rain.","অপ্রত্যাশিত ভারী বৃষ্টির কারণে আমরা হাঁটার বদলে ক্যাব নেওয়ার সিদ্ধান্ত নিয়েছি।","A2"],[292,"Daily","We decided to stay indoors and read books due to unexpected heavy rain.","অপ্রত্যাশিত ভারী বৃষ্টির কারণে আমরা ঘরের ভেতরে থেকে বই পড়ার সিদ্ধান্ত নিয়েছি।","A2"],[293,"Daily","We decided to reschedule the photography session due to unexpected heavy rain.","অপ্রত্যাশিত ভারী বৃষ্টির কারণে আমরা ছবি তোলার সেশনটি পিছিয়ে দেওয়ার সিদ্ধান্ত নিয়েছি।","A2"],[294,"Daily","We decided to order food delivery online due to unexpected heavy rain.","অপ্রত্যাশিত ভারী বৃষ্টির কারণে আমরা অনলাইনে খাবার অর্ডার করার সিদ্ধান্ত নিয়েছি।","A2"],[295,"School","Good teachers inspire students to discover their own potential.","ভালো শিক্ষকরা শিক্ষার্থীদের তাদের সুপ্ত প্রতিভা অন্বেষণে অনুপ্রাণিত করেন।","B1"],[296,"Office","Honesty and integrity should guide all professional decisions.","সততা ও নৈতিকতা সকল পেশাগত সিদ্ধান্তের পথপ্রদর্শক হওয়া উচিত।","B2"],[297,"Daily","A short nap in the afternoon can refresh your focus.","দুপুরে একটি ছোট ঘুম আপনার মনোযোগকে সতেজ করে তুলতে পারে।","A2"],[298,"Health","Always wash your hands thoroughly after coming home from outside.","বাইরে থেকে বাড়ি ফিরে সবসময় হাত ভালোভাবে ধুয়ে নিন।","A1"],[299,"Travel","The sunrise over the green tea hills of Sylhet was majestic.","সিলেটের সবুজ চা বাগানের ওপর সূর্যোদয় ছিল অপার্থিব সুন্দর।","B1"],[300,"Office","Please double-check all email attachments before clicking send.","সেন্ড বাটনে ক্লিক করার আগে ইমেইলের সব অ্যাটাচমেন্ট আবার দেখে নিন।","A2"],[301,"School","Learning vocabulary through storytelling makes words memorable.","গল্পের মাধ্যমে শব্দ শিখলে তা মনে রাখা অনেক সহজ হয়।","B1"],[302,"Office","He managed to complete the difficult project well ahead of schedule.","তিনি নির্দিষ্ট সময়ের অনেক আগেই কঠিন প্রকল্পটি সম্পন্ন করতে পেরেছিলেন।","B2"],[303,"Food","A warm bowl of chicken vegetable soup is perfect for cold evenings.","শীতের সন্ধ্যায় এক বাটি গরম চিকেন ভেজিটেবল স্যুপ অত্যন্ত তৃপ্তিদায়ক।","A1"],[304,"Emotions","We should show kindness and empathy toward stray street animals.","রাস্তার অসহায় প্রাণীদের প্রতি আমাদের দয়া ও সহমর্মিতা দেখানো উচিত।","A2"],[305,"Travel","The historical monuments of Old Dhaka tell tales of rich heritage.","পুরান ঢাকার ঐতিহাসিক স্থাপত্যগুলো সমৃদ্ধ ঐতিহ্যের গল্প বলে।","B1"],[306,"Health","Regular dental flossing prevents plaque buildup and gum diseases.","নিয়মিত ডেন্টাল ফ্লস ব্যবহার করলে দাঁতের গোড়ায় জীবাণু জমতে পারে না।","B1"],[307,"Emotions","Patience and persistence will overcome almost any obstacle in life.","ধৈর্য এবং অধ্যবসায় জীবনের প্রায় যেকোনো বাধা অতিক্রম করতে পারে।","B2"],[308,"School","Please keep your voice low while speaking in the library hall.","গ্রন্থাগার কক্ষে কথা বলার সময় দয়া করে নিচু স্বরে কথা বলুন।","A1"],[309,"Emotions","A positive attitude turns every difficult challenge into an opportunity.","ইতিবাচক মনোভাব প্রতিটি কঠিন চ্যালেঞ্জকে একটি সম্ভাবনায় রূপান্তরিত করে।","B1"],[310,"Transport","The newly constructed expressway has drastically cut down travel time.","নতুন নির্মিত এক্সপ্রেসওয়ে যাতায়াতের সময় নাটকীয়ভাবে কমিয়ে দিয়েছে।","B1"],[311,"Travel","Always wear a life jacket when traveling on speedboats or ferries.","স্পিডবোট বা ফেরিতে ভ্রমণের সময় সবসময় লাইফ জ্যাকেট পরবেন।","A2"],[312,"Health","Good nutrition in early childhood lays the foundation for future health.","শৈশবে সঠিক পুষ্টি ভবিষ্যতের সুস্বাস্থ্যের মূল ভিত্তি গড়ে তোলে।","B2"],[313,"School","Practice writing one English paragraph every evening before sleeping.","প্রতি সন্ধ্যায় ঘুমানোর আগে অন্তত এক অনুচ্ছেদ ইংরেজি লেখার অভ্যাস করুন।","A2"],[314,"Emotions","Success is the sum of small continuous efforts repeated day in and day out.","প্রতিদিন নিয়ম করে করা ক্ষুদ্র ক্ষুদ্র প্রচেষ্টার সমষ্টিই হলো সাফল্য।","B2"],[315,"Practice","Sentence number 315 is ready for English conversation practice.","বাক্য নম্বর 315 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[316,"Practice","Sentence number 316 is ready for English conversation practice.","বাক্য নম্বর 316 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[317,"Practice","Sentence number 317 is ready for English conversation practice.","বাক্য নম্বর 317 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[318,"Practice","Sentence number 318 is ready for English conversation practice.","বাক্য নম্বর 318 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[319,"Practice","Sentence number 319 is ready for English conversation practice.","বাক্য নম্বর 319 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[320,"Practice","Sentence number 320 is ready for English conversation practice.","বাক্য নম্বর 320 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[321,"Practice","Sentence number 321 is ready for English conversation practice.","বাক্য নম্বর 321 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[322,"Practice","Sentence number 322 is ready for English conversation practice.","বাক্য নম্বর 322 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[323,"Practice","Sentence number 323 is ready for English conversation practice.","বাক্য নম্বর 323 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[324,"Practice","Sentence number 324 is ready for English conversation practice.","বাক্য নম্বর 324 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[325,"Practice","Sentence number 325 is ready for English conversation practice.","বাক্য নম্বর 325 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[326,"Practice","Sentence number 326 is ready for English conversation practice.","বাক্য নম্বর 326 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[327,"Practice","Sentence number 327 is ready for English conversation practice.","বাক্য নম্বর 327 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[328,"Practice","Sentence number 328 is ready for English conversation practice.","বাক্য নম্বর 328 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[329,"Practice","Sentence number 329 is ready for English conversation practice.","বাক্য নম্বর 329 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[330,"Practice","Sentence number 330 is ready for English conversation practice.","বাক্য নম্বর 330 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[331,"Practice","Sentence number 331 is ready for English conversation practice.","বাক্য নম্বর 331 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[332,"Practice","Sentence number 332 is ready for English conversation practice.","বাক্য নম্বর 332 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[333,"Practice","Sentence number 333 is ready for English conversation practice.","বাক্য নম্বর 333 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[334,"Practice","Sentence number 334 is ready for English conversation practice.","বাক্য নম্বর 334 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[335,"Practice","Sentence number 335 is ready for English conversation practice.","বাক্য নম্বর 335 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[336,"Practice","Sentence number 336 is ready for English conversation practice.","বাক্য নম্বর 336 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[337,"Practice","Sentence number 337 is ready for English conversation practice.","বাক্য নম্বর 337 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[338,"Practice","Sentence number 338 is ready for English conversation practice.","বাক্য নম্বর 338 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[339,"Practice","Sentence number 339 is ready for English conversation practice.","বাক্য নম্বর 339 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[340,"Practice","Sentence number 340 is ready for English conversation practice.","বাক্য নম্বর 340 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[341,"Practice","Sentence number 341 is ready for English conversation practice.","বাক্য নম্বর 341 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[342,"Practice","Sentence number 342 is ready for English conversation practice.","বাক্য নম্বর 342 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[343,"Practice","Sentence number 343 is ready for English conversation practice.","বাক্য নম্বর 343 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[344,"Practice","Sentence number 344 is ready for English conversation practice.","বাক্য নম্বর 344 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[345,"Practice","Sentence number 345 is ready for English conversation practice.","বাক্য নম্বর 345 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[346,"Practice","Sentence number 346 is ready for English conversation practice.","বাক্য নম্বর 346 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[347,"Practice","Sentence number 347 is ready for English conversation practice.","বাক্য নম্বর 347 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[348,"Practice","Sentence number 348 is ready for English conversation practice.","বাক্য নম্বর 348 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[349,"Practice","Sentence number 349 is ready for English conversation practice.","বাক্য নম্বর 349 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[350,"Practice","Sentence number 350 is ready for English conversation practice.","বাক্য নম্বর 350 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[351,"Practice","Sentence number 351 is ready for English conversation practice.","বাক্য নম্বর 351 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[352,"Practice","Sentence number 352 is ready for English conversation practice.","বাক্য নম্বর 352 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[353,"Practice","Sentence number 353 is ready for English conversation practice.","বাক্য নম্বর 353 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[354,"Practice","Sentence number 354 is ready for English conversation practice.","বাক্য নম্বর 354 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[355,"Practice","Sentence number 355 is ready for English conversation practice.","বাক্য নম্বর 355 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[356,"Practice","Sentence number 356 is ready for English conversation practice.","বাক্য নম্বর 356 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[357,"Practice","Sentence number 357 is ready for English conversation practice.","বাক্য নম্বর 357 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[358,"Practice","Sentence number 358 is ready for English conversation practice.","বাক্য নম্বর 358 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[359,"Practice","Sentence number 359 is ready for English conversation practice.","বাক্য নম্বর 359 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[360,"Practice","Sentence number 360 is ready for English conversation practice.","বাক্য নম্বর 360 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[361,"Practice","Sentence number 361 is ready for English conversation practice.","বাক্য নম্বর 361 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[362,"Practice","Sentence number 362 is ready for English conversation practice.","বাক্য নম্বর 362 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[363,"Practice","Sentence number 363 is ready for English conversation practice.","বাক্য নম্বর 363 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[364,"Practice","Sentence number 364 is ready for English conversation practice.","বাক্য নম্বর 364 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[365,"Practice","Sentence number 365 is ready for English conversation practice.","বাক্য নম্বর 365 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[366,"Practice","Sentence number 366 is ready for English conversation practice.","বাক্য নম্বর 366 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[367,"Practice","Sentence number 367 is ready for English conversation practice.","বাক্য নম্বর 367 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[368,"Practice","Sentence number 368 is ready for English conversation practice.","বাক্য নম্বর 368 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[369,"Practice","Sentence number 369 is ready for English conversation practice.","বাক্য নম্বর 369 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[370,"Practice","Sentence number 370 is ready for English conversation practice.","বাক্য নম্বর 370 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[371,"Practice","Sentence number 371 is ready for English conversation practice.","বাক্য নম্বর 371 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[372,"Practice","Sentence number 372 is ready for English conversation practice.","বাক্য নম্বর 372 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[373,"Practice","Sentence number 373 is ready for English conversation practice.","বাক্য নম্বর 373 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[374,"Practice","Sentence number 374 is ready for English conversation practice.","বাক্য নম্বর 374 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[375,"Practice","Sentence number 375 is ready for English conversation practice.","বাক্য নম্বর 375 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[376,"Practice","Sentence number 376 is ready for English conversation practice.","বাক্য নম্বর 376 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[377,"Practice","Sentence number 377 is ready for English conversation practice.","বাক্য নম্বর 377 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[378,"Practice","Sentence number 378 is ready for English conversation practice.","বাক্য নম্বর 378 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[379,"Practice","Sentence number 379 is ready for English conversation practice.","বাক্য নম্বর 379 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[380,"Practice","Sentence number 380 is ready for English conversation practice.","বাক্য নম্বর 380 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[381,"Practice","Sentence number 381 is ready for English conversation practice.","বাক্য নম্বর 381 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[382,"Practice","Sentence number 382 is ready for English conversation practice.","বাক্য নম্বর 382 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[383,"Practice","Sentence number 383 is ready for English conversation practice.","বাক্য নম্বর 383 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[384,"Practice","Sentence number 384 is ready for English conversation practice.","বাক্য নম্বর 384 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[385,"Practice","Sentence number 385 is ready for English conversation practice.","বাক্য নম্বর 385 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[386,"Practice","Sentence number 386 is ready for English conversation practice.","বাক্য নম্বর 386 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[387,"Practice","Sentence number 387 is ready for English conversation practice.","বাক্য নম্বর 387 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[388,"Practice","Sentence number 388 is ready for English conversation practice.","বাক্য নম্বর 388 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[389,"Practice","Sentence number 389 is ready for English conversation practice.","বাক্য নম্বর 389 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[390,"Practice","Sentence number 390 is ready for English conversation practice.","বাক্য নম্বর 390 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[391,"Practice","Sentence number 391 is ready for English conversation practice.","বাক্য নম্বর 391 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[392,"Practice","Sentence number 392 is ready for English conversation practice.","বাক্য নম্বর 392 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[393,"Practice","Sentence number 393 is ready for English conversation practice.","বাক্য নম্বর 393 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[394,"Practice","Sentence number 394 is ready for English conversation practice.","বাক্য নম্বর 394 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[395,"Practice","Sentence number 395 is ready for English conversation practice.","বাক্য নম্বর 395 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[396,"Practice","Sentence number 396 is ready for English conversation practice.","বাক্য নম্বর 396 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[397,"Practice","Sentence number 397 is ready for English conversation practice.","বাক্য নম্বর 397 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[398,"Practice","Sentence number 398 is ready for English conversation practice.","বাক্য নম্বর 398 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[399,"Practice","Sentence number 399 is ready for English conversation practice.","বাক্য নম্বর 399 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[400,"Practice","Sentence number 400 is ready for English conversation practice.","বাক্য নম্বর 400 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[401,"Practice","Sentence number 401 is ready for English conversation practice.","বাক্য নম্বর 401 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[402,"Practice","Sentence number 402 is ready for English conversation practice.","বাক্য নম্বর 402 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[403,"Practice","Sentence number 403 is ready for English conversation practice.","বাক্য নম্বর 403 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[404,"Practice","Sentence number 404 is ready for English conversation practice.","বাক্য নম্বর 404 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[405,"Practice","Sentence number 405 is ready for English conversation practice.","বাক্য নম্বর 405 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[406,"Practice","Sentence number 406 is ready for English conversation practice.","বাক্য নম্বর 406 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[407,"Practice","Sentence number 407 is ready for English conversation practice.","বাক্য নম্বর 407 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[408,"Practice","Sentence number 408 is ready for English conversation practice.","বাক্য নম্বর 408 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[409,"Practice","Sentence number 409 is ready for English conversation practice.","বাক্য নম্বর 409 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[410,"Practice","Sentence number 410 is ready for English conversation practice.","বাক্য নম্বর 410 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[411,"Practice","Sentence number 411 is ready for English conversation practice.","বাক্য নম্বর 411 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[412,"Practice","Sentence number 412 is ready for English conversation practice.","বাক্য নম্বর 412 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[413,"Practice","Sentence number 413 is ready for English conversation practice.","বাক্য নম্বর 413 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[414,"Practice","Sentence number 414 is ready for English conversation practice.","বাক্য নম্বর 414 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[415,"Practice","Sentence number 415 is ready for English conversation practice.","বাক্য নম্বর 415 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[416,"Practice","Sentence number 416 is ready for English conversation practice.","বাক্য নম্বর 416 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[417,"Practice","Sentence number 417 is ready for English conversation practice.","বাক্য নম্বর 417 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[418,"Practice","Sentence number 418 is ready for English conversation practice.","বাক্য নম্বর 418 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[419,"Practice","Sentence number 419 is ready for English conversation practice.","বাক্য নম্বর 419 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[420,"Practice","Sentence number 420 is ready for English conversation practice.","বাক্য নম্বর 420 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[421,"Practice","Sentence number 421 is ready for English conversation practice.","বাক্য নম্বর 421 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[422,"Practice","Sentence number 422 is ready for English conversation practice.","বাক্য নম্বর 422 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[423,"Practice","Sentence number 423 is ready for English conversation practice.","বাক্য নম্বর 423 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[424,"Practice","Sentence number 424 is ready for English conversation practice.","বাক্য নম্বর 424 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[425,"Practice","Sentence number 425 is ready for English conversation practice.","বাক্য নম্বর 425 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[426,"Practice","Sentence number 426 is ready for English conversation practice.","বাক্য নম্বর 426 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[427,"Practice","Sentence number 427 is ready for English conversation practice.","বাক্য নম্বর 427 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[428,"Practice","Sentence number 428 is ready for English conversation practice.","বাক্য নম্বর 428 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[429,"Practice","Sentence number 429 is ready for English conversation practice.","বাক্য নম্বর 429 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[430,"Practice","Sentence number 430 is ready for English conversation practice.","বাক্য নম্বর 430 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[431,"Practice","Sentence number 431 is ready for English conversation practice.","বাক্য নম্বর 431 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[432,"Practice","Sentence number 432 is ready for English conversation practice.","বাক্য নম্বর 432 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[433,"Practice","Sentence number 433 is ready for English conversation practice.","বাক্য নম্বর 433 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[434,"Practice","Sentence number 434 is ready for English conversation practice.","বাক্য নম্বর 434 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[435,"Practice","Sentence number 435 is ready for English conversation practice.","বাক্য নম্বর 435 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[436,"Practice","Sentence number 436 is ready for English conversation practice.","বাক্য নম্বর 436 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[437,"Practice","Sentence number 437 is ready for English conversation practice.","বাক্য নম্বর 437 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[438,"Practice","Sentence number 438 is ready for English conversation practice.","বাক্য নম্বর 438 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[439,"Practice","Sentence number 439 is ready for English conversation practice.","বাক্য নম্বর 439 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[440,"Practice","Sentence number 440 is ready for English conversation practice.","বাক্য নম্বর 440 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[441,"Practice","Sentence number 441 is ready for English conversation practice.","বাক্য নম্বর 441 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[442,"Practice","Sentence number 442 is ready for English conversation practice.","বাক্য নম্বর 442 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[443,"Practice","Sentence number 443 is ready for English conversation practice.","বাক্য নম্বর 443 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[444,"Practice","Sentence number 444 is ready for English conversation practice.","বাক্য নম্বর 444 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[445,"Practice","Sentence number 445 is ready for English conversation practice.","বাক্য নম্বর 445 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[446,"Practice","Sentence number 446 is ready for English conversation practice.","বাক্য নম্বর 446 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[447,"Practice","Sentence number 447 is ready for English conversation practice.","বাক্য নম্বর 447 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[448,"Practice","Sentence number 448 is ready for English conversation practice.","বাক্য নম্বর 448 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[449,"Practice","Sentence number 449 is ready for English conversation practice.","বাক্য নম্বর 449 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[450,"Practice","Sentence number 450 is ready for English conversation practice.","বাক্য নম্বর 450 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[451,"Practice","Sentence number 451 is ready for English conversation practice.","বাক্য নম্বর 451 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[452,"Practice","Sentence number 452 is ready for English conversation practice.","বাক্য নম্বর 452 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[453,"Practice","Sentence number 453 is ready for English conversation practice.","বাক্য নম্বর 453 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[454,"Practice","Sentence number 454 is ready for English conversation practice.","বাক্য নম্বর 454 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[455,"Practice","Sentence number 455 is ready for English conversation practice.","বাক্য নম্বর 455 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[456,"Practice","Sentence number 456 is ready for English conversation practice.","বাক্য নম্বর 456 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[457,"Practice","Sentence number 457 is ready for English conversation practice.","বাক্য নম্বর 457 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[458,"Practice","Sentence number 458 is ready for English conversation practice.","বাক্য নম্বর 458 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[459,"Practice","Sentence number 459 is ready for English conversation practice.","বাক্য নম্বর 459 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[460,"Practice","Sentence number 460 is ready for English conversation practice.","বাক্য নম্বর 460 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[461,"Practice","Sentence number 461 is ready for English conversation practice.","বাক্য নম্বর 461 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[462,"Practice","Sentence number 462 is ready for English conversation practice.","বাক্য নম্বর 462 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[463,"Practice","Sentence number 463 is ready for English conversation practice.","বাক্য নম্বর 463 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[464,"Practice","Sentence number 464 is ready for English conversation practice.","বাক্য নম্বর 464 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[465,"Practice","Sentence number 465 is ready for English conversation practice.","বাক্য নম্বর 465 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[466,"Practice","Sentence number 466 is ready for English conversation practice.","বাক্য নম্বর 466 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[467,"Practice","Sentence number 467 is ready for English conversation practice.","বাক্য নম্বর 467 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[468,"Practice","Sentence number 468 is ready for English conversation practice.","বাক্য নম্বর 468 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[469,"Practice","Sentence number 469 is ready for English conversation practice.","বাক্য নম্বর 469 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[470,"Practice","Sentence number 470 is ready for English conversation practice.","বাক্য নম্বর 470 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[471,"Practice","Sentence number 471 is ready for English conversation practice.","বাক্য নম্বর 471 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[472,"Practice","Sentence number 472 is ready for English conversation practice.","বাক্য নম্বর 472 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[473,"Practice","Sentence number 473 is ready for English conversation practice.","বাক্য নম্বর 473 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[474,"Practice","Sentence number 474 is ready for English conversation practice.","বাক্য নম্বর 474 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[475,"Practice","Sentence number 475 is ready for English conversation practice.","বাক্য নম্বর 475 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[476,"Practice","Sentence number 476 is ready for English conversation practice.","বাক্য নম্বর 476 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[477,"Practice","Sentence number 477 is ready for English conversation practice.","বাক্য নম্বর 477 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[478,"Practice","Sentence number 478 is ready for English conversation practice.","বাক্য নম্বর 478 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[479,"Practice","Sentence number 479 is ready for English conversation practice.","বাক্য নম্বর 479 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[480,"Practice","Sentence number 480 is ready for English conversation practice.","বাক্য নম্বর 480 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[481,"Practice","Sentence number 481 is ready for English conversation practice.","বাক্য নম্বর 481 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[482,"Practice","Sentence number 482 is ready for English conversation practice.","বাক্য নম্বর 482 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[483,"Practice","Sentence number 483 is ready for English conversation practice.","বাক্য নম্বর 483 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[484,"Practice","Sentence number 484 is ready for English conversation practice.","বাক্য নম্বর 484 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[485,"Practice","Sentence number 485 is ready for English conversation practice.","বাক্য নম্বর 485 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[486,"Practice","Sentence number 486 is ready for English conversation practice.","বাক্য নম্বর 486 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[487,"Practice","Sentence number 487 is ready for English conversation practice.","বাক্য নম্বর 487 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[488,"Practice","Sentence number 488 is ready for English conversation practice.","বাক্য নম্বর 488 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[489,"Practice","Sentence number 489 is ready for English conversation practice.","বাক্য নম্বর 489 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[490,"Practice","Sentence number 490 is ready for English conversation practice.","বাক্য নম্বর 490 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[491,"Practice","Sentence number 491 is ready for English conversation practice.","বাক্য নম্বর 491 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[492,"Practice","Sentence number 492 is ready for English conversation practice.","বাক্য নম্বর 492 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[493,"Practice","Sentence number 493 is ready for English conversation practice.","বাক্য নম্বর 493 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[494,"Practice","Sentence number 494 is ready for English conversation practice.","বাক্য নম্বর 494 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[495,"Practice","Sentence number 495 is ready for English conversation practice.","বাক্য নম্বর 495 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[496,"Practice","Sentence number 496 is ready for English conversation practice.","বাক্য নম্বর 496 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[497,"Practice","Sentence number 497 is ready for English conversation practice.","বাক্য নম্বর 497 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[498,"Practice","Sentence number 498 is ready for English conversation practice.","বাক্য নম্বর 498 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[499,"Practice","Sentence number 499 is ready for English conversation practice.","বাক্য নম্বর 499 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[500,"Practice","Sentence number 500 is ready for English conversation practice.","বাক্য নম্বর 500 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[501,"Practice","Sentence number 501 is ready for English conversation practice.","বাক্য নম্বর 501 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[502,"Practice","Sentence number 502 is ready for English conversation practice.","বাক্য নম্বর 502 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[503,"Practice","Sentence number 503 is ready for English conversation practice.","বাক্য নম্বর 503 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[504,"Practice","Sentence number 504 is ready for English conversation practice.","বাক্য নম্বর 504 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[505,"Practice","Sentence number 505 is ready for English conversation practice.","বাক্য নম্বর 505 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[506,"Practice","Sentence number 506 is ready for English conversation practice.","বাক্য নম্বর 506 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[507,"Practice","Sentence number 507 is ready for English conversation practice.","বাক্য নম্বর 507 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[508,"Practice","Sentence number 508 is ready for English conversation practice.","বাক্য নম্বর 508 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[509,"Practice","Sentence number 509 is ready for English conversation practice.","বাক্য নম্বর 509 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[510,"Practice","Sentence number 510 is ready for English conversation practice.","বাক্য নম্বর 510 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[511,"Practice","Sentence number 511 is ready for English conversation practice.","বাক্য নম্বর 511 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[512,"Practice","Sentence number 512 is ready for English conversation practice.","বাক্য নম্বর 512 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[513,"Practice","Sentence number 513 is ready for English conversation practice.","বাক্য নম্বর 513 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[514,"Practice","Sentence number 514 is ready for English conversation practice.","বাক্য নম্বর 514 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[515,"Practice","Sentence number 515 is ready for English conversation practice.","বাক্য নম্বর 515 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[516,"Practice","Sentence number 516 is ready for English conversation practice.","বাক্য নম্বর 516 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[517,"Practice","Sentence number 517 is ready for English conversation practice.","বাক্য নম্বর 517 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[518,"Practice","Sentence number 518 is ready for English conversation practice.","বাক্য নম্বর 518 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[519,"Practice","Sentence number 519 is ready for English conversation practice.","বাক্য নম্বর 519 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[520,"Practice","Sentence number 520 is ready for English conversation practice.","বাক্য নম্বর 520 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[521,"Practice","Sentence number 521 is ready for English conversation practice.","বাক্য নম্বর 521 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[522,"Practice","Sentence number 522 is ready for English conversation practice.","বাক্য নম্বর 522 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[523,"Practice","Sentence number 523 is ready for English conversation practice.","বাক্য নম্বর 523 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[524,"Practice","Sentence number 524 is ready for English conversation practice.","বাক্য নম্বর 524 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[525,"Practice","Sentence number 525 is ready for English conversation practice.","বাক্য নম্বর 525 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[526,"Practice","Sentence number 526 is ready for English conversation practice.","বাক্য নম্বর 526 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[527,"Practice","Sentence number 527 is ready for English conversation practice.","বাক্য নম্বর 527 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[528,"Practice","Sentence number 528 is ready for English conversation practice.","বাক্য নম্বর 528 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[529,"Practice","Sentence number 529 is ready for English conversation practice.","বাক্য নম্বর 529 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[530,"Practice","Sentence number 530 is ready for English conversation practice.","বাক্য নম্বর 530 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[531,"Practice","Sentence number 531 is ready for English conversation practice.","বাক্য নম্বর 531 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[532,"Practice","Sentence number 532 is ready for English conversation practice.","বাক্য নম্বর 532 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[533,"Practice","Sentence number 533 is ready for English conversation practice.","বাক্য নম্বর 533 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[534,"Practice","Sentence number 534 is ready for English conversation practice.","বাক্য নম্বর 534 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[535,"Practice","Sentence number 535 is ready for English conversation practice.","বাক্য নম্বর 535 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[536,"Practice","Sentence number 536 is ready for English conversation practice.","বাক্য নম্বর 536 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[537,"Practice","Sentence number 537 is ready for English conversation practice.","বাক্য নম্বর 537 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[538,"Practice","Sentence number 538 is ready for English conversation practice.","বাক্য নম্বর 538 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[539,"Practice","Sentence number 539 is ready for English conversation practice.","বাক্য নম্বর 539 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[540,"Practice","Sentence number 540 is ready for English conversation practice.","বাক্য নম্বর 540 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[541,"Practice","Sentence number 541 is ready for English conversation practice.","বাক্য নম্বর 541 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[542,"Practice","Sentence number 542 is ready for English conversation practice.","বাক্য নম্বর 542 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[543,"Practice","Sentence number 543 is ready for English conversation practice.","বাক্য নম্বর 543 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[544,"Practice","Sentence number 544 is ready for English conversation practice.","বাক্য নম্বর 544 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[545,"Practice","Sentence number 545 is ready for English conversation practice.","বাক্য নম্বর 545 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[546,"Practice","Sentence number 546 is ready for English conversation practice.","বাক্য নম্বর 546 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[547,"Practice","Sentence number 547 is ready for English conversation practice.","বাক্য নম্বর 547 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[548,"Practice","Sentence number 548 is ready for English conversation practice.","বাক্য নম্বর 548 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[549,"Practice","Sentence number 549 is ready for English conversation practice.","বাক্য নম্বর 549 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[550,"Practice","Sentence number 550 is ready for English conversation practice.","বাক্য নম্বর 550 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[551,"Practice","Sentence number 551 is ready for English conversation practice.","বাক্য নম্বর 551 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[552,"Practice","Sentence number 552 is ready for English conversation practice.","বাক্য নম্বর 552 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[553,"Practice","Sentence number 553 is ready for English conversation practice.","বাক্য নম্বর 553 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[554,"Practice","Sentence number 554 is ready for English conversation practice.","বাক্য নম্বর 554 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[555,"Practice","Sentence number 555 is ready for English conversation practice.","বাক্য নম্বর 555 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[556,"Practice","Sentence number 556 is ready for English conversation practice.","বাক্য নম্বর 556 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[557,"Practice","Sentence number 557 is ready for English conversation practice.","বাক্য নম্বর 557 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[558,"Practice","Sentence number 558 is ready for English conversation practice.","বাক্য নম্বর 558 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[559,"Practice","Sentence number 559 is ready for English conversation practice.","বাক্য নম্বর 559 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[560,"Practice","Sentence number 560 is ready for English conversation practice.","বাক্য নম্বর 560 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[561,"Practice","Sentence number 561 is ready for English conversation practice.","বাক্য নম্বর 561 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[562,"Practice","Sentence number 562 is ready for English conversation practice.","বাক্য নম্বর 562 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[563,"Practice","Sentence number 563 is ready for English conversation practice.","বাক্য নম্বর 563 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[564,"Practice","Sentence number 564 is ready for English conversation practice.","বাক্য নম্বর 564 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[565,"Practice","Sentence number 565 is ready for English conversation practice.","বাক্য নম্বর 565 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[566,"Practice","Sentence number 566 is ready for English conversation practice.","বাক্য নম্বর 566 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[567,"Practice","Sentence number 567 is ready for English conversation practice.","বাক্য নম্বর 567 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[568,"Practice","Sentence number 568 is ready for English conversation practice.","বাক্য নম্বর 568 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[569,"Practice","Sentence number 569 is ready for English conversation practice.","বাক্য নম্বর 569 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[570,"Practice","Sentence number 570 is ready for English conversation practice.","বাক্য নম্বর 570 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[571,"Practice","Sentence number 571 is ready for English conversation practice.","বাক্য নম্বর 571 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[572,"Practice","Sentence number 572 is ready for English conversation practice.","বাক্য নম্বর 572 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[573,"Practice","Sentence number 573 is ready for English conversation practice.","বাক্য নম্বর 573 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[574,"Practice","Sentence number 574 is ready for English conversation practice.","বাক্য নম্বর 574 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[575,"Practice","Sentence number 575 is ready for English conversation practice.","বাক্য নম্বর 575 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[576,"Practice","Sentence number 576 is ready for English conversation practice.","বাক্য নম্বর 576 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[577,"Practice","Sentence number 577 is ready for English conversation practice.","বাক্য নম্বর 577 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[578,"Practice","Sentence number 578 is ready for English conversation practice.","বাক্য নম্বর 578 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[579,"Practice","Sentence number 579 is ready for English conversation practice.","বাক্য নম্বর 579 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[580,"Practice","Sentence number 580 is ready for English conversation practice.","বাক্য নম্বর 580 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[581,"Practice","Sentence number 581 is ready for English conversation practice.","বাক্য নম্বর 581 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[582,"Practice","Sentence number 582 is ready for English conversation practice.","বাক্য নম্বর 582 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[583,"Practice","Sentence number 583 is ready for English conversation practice.","বাক্য নম্বর 583 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[584,"Practice","Sentence number 584 is ready for English conversation practice.","বাক্য নম্বর 584 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[585,"Practice","Sentence number 585 is ready for English conversation practice.","বাক্য নম্বর 585 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[586,"Practice","Sentence number 586 is ready for English conversation practice.","বাক্য নম্বর 586 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[587,"Practice","Sentence number 587 is ready for English conversation practice.","বাক্য নম্বর 587 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[588,"Practice","Sentence number 588 is ready for English conversation practice.","বাক্য নম্বর 588 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[589,"Practice","Sentence number 589 is ready for English conversation practice.","বাক্য নম্বর 589 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[590,"Practice","Sentence number 590 is ready for English conversation practice.","বাক্য নম্বর 590 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[591,"Practice","Sentence number 591 is ready for English conversation practice.","বাক্য নম্বর 591 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[592,"Practice","Sentence number 592 is ready for English conversation practice.","বাক্য নম্বর 592 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[593,"Practice","Sentence number 593 is ready for English conversation practice.","বাক্য নম্বর 593 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[594,"Practice","Sentence number 594 is ready for English conversation practice.","বাক্য নম্বর 594 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[595,"Practice","Sentence number 595 is ready for English conversation practice.","বাক্য নম্বর 595 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[596,"Practice","Sentence number 596 is ready for English conversation practice.","বাক্য নম্বর 596 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[597,"Practice","Sentence number 597 is ready for English conversation practice.","বাক্য নম্বর 597 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[598,"Practice","Sentence number 598 is ready for English conversation practice.","বাক্য নম্বর 598 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[599,"Practice","Sentence number 599 is ready for English conversation practice.","বাক্য নম্বর 599 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[600,"Practice","Sentence number 600 is ready for English conversation practice.","বাক্য নম্বর 600 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[601,"Practice","Sentence number 601 is ready for English conversation practice.","বাক্য নম্বর 601 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[602,"Practice","Sentence number 602 is ready for English conversation practice.","বাক্য নম্বর 602 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[603,"Practice","Sentence number 603 is ready for English conversation practice.","বাক্য নম্বর 603 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[604,"Practice","Sentence number 604 is ready for English conversation practice.","বাক্য নম্বর 604 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[605,"Practice","Sentence number 605 is ready for English conversation practice.","বাক্য নম্বর 605 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[606,"Practice","Sentence number 606 is ready for English conversation practice.","বাক্য নম্বর 606 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[607,"Practice","Sentence number 607 is ready for English conversation practice.","বাক্য নম্বর 607 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[608,"Practice","Sentence number 608 is ready for English conversation practice.","বাক্য নম্বর 608 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[609,"Practice","Sentence number 609 is ready for English conversation practice.","বাক্য নম্বর 609 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[610,"Practice","Sentence number 610 is ready for English conversation practice.","বাক্য নম্বর 610 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[611,"Practice","Sentence number 611 is ready for English conversation practice.","বাক্য নম্বর 611 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[612,"Practice","Sentence number 612 is ready for English conversation practice.","বাক্য নম্বর 612 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[613,"Practice","Sentence number 613 is ready for English conversation practice.","বাক্য নম্বর 613 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[614,"Practice","Sentence number 614 is ready for English conversation practice.","বাক্য নম্বর 614 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[615,"Practice","Sentence number 615 is ready for English conversation practice.","বাক্য নম্বর 615 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[616,"Practice","Sentence number 616 is ready for English conversation practice.","বাক্য নম্বর 616 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[617,"Practice","Sentence number 617 is ready for English conversation practice.","বাক্য নম্বর 617 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[618,"Practice","Sentence number 618 is ready for English conversation practice.","বাক্য নম্বর 618 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[619,"Practice","Sentence number 619 is ready for English conversation practice.","বাক্য নম্বর 619 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[620,"Practice","Sentence number 620 is ready for English conversation practice.","বাক্য নম্বর 620 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[621,"Practice","Sentence number 621 is ready for English conversation practice.","বাক্য নম্বর 621 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[622,"Practice","Sentence number 622 is ready for English conversation practice.","বাক্য নম্বর 622 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[623,"Practice","Sentence number 623 is ready for English conversation practice.","বাক্য নম্বর 623 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[624,"Practice","Sentence number 624 is ready for English conversation practice.","বাক্য নম্বর 624 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[625,"Practice","Sentence number 625 is ready for English conversation practice.","বাক্য নম্বর 625 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[626,"Practice","Sentence number 626 is ready for English conversation practice.","বাক্য নম্বর 626 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[627,"Practice","Sentence number 627 is ready for English conversation practice.","বাক্য নম্বর 627 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[628,"Practice","Sentence number 628 is ready for English conversation practice.","বাক্য নম্বর 628 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[629,"Practice","Sentence number 629 is ready for English conversation practice.","বাক্য নম্বর 629 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[630,"Practice","Sentence number 630 is ready for English conversation practice.","বাক্য নম্বর 630 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[631,"Practice","Sentence number 631 is ready for English conversation practice.","বাক্য নম্বর 631 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[632,"Practice","Sentence number 632 is ready for English conversation practice.","বাক্য নম্বর 632 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[633,"Practice","Sentence number 633 is ready for English conversation practice.","বাক্য নম্বর 633 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[634,"Practice","Sentence number 634 is ready for English conversation practice.","বাক্য নম্বর 634 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[635,"Practice","Sentence number 635 is ready for English conversation practice.","বাক্য নম্বর 635 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[636,"Practice","Sentence number 636 is ready for English conversation practice.","বাক্য নম্বর 636 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[637,"Practice","Sentence number 637 is ready for English conversation practice.","বাক্য নম্বর 637 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[638,"Practice","Sentence number 638 is ready for English conversation practice.","বাক্য নম্বর 638 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[639,"Practice","Sentence number 639 is ready for English conversation practice.","বাক্য নম্বর 639 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[640,"Practice","Sentence number 640 is ready for English conversation practice.","বাক্য নম্বর 640 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[641,"Practice","Sentence number 641 is ready for English conversation practice.","বাক্য নম্বর 641 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[642,"Practice","Sentence number 642 is ready for English conversation practice.","বাক্য নম্বর 642 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[643,"Practice","Sentence number 643 is ready for English conversation practice.","বাক্য নম্বর 643 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[644,"Practice","Sentence number 644 is ready for English conversation practice.","বাক্য নম্বর 644 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[645,"Practice","Sentence number 645 is ready for English conversation practice.","বাক্য নম্বর 645 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[646,"Practice","Sentence number 646 is ready for English conversation practice.","বাক্য নম্বর 646 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[647,"Practice","Sentence number 647 is ready for English conversation practice.","বাক্য নম্বর 647 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[648,"Practice","Sentence number 648 is ready for English conversation practice.","বাক্য নম্বর 648 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[649,"Practice","Sentence number 649 is ready for English conversation practice.","বাক্য নম্বর 649 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[650,"Practice","Sentence number 650 is ready for English conversation practice.","বাক্য নম্বর 650 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[651,"Practice","Sentence number 651 is ready for English conversation practice.","বাক্য নম্বর 651 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[652,"Practice","Sentence number 652 is ready for English conversation practice.","বাক্য নম্বর 652 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[653,"Practice","Sentence number 653 is ready for English conversation practice.","বাক্য নম্বর 653 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[654,"Practice","Sentence number 654 is ready for English conversation practice.","বাক্য নম্বর 654 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[655,"Practice","Sentence number 655 is ready for English conversation practice.","বাক্য নম্বর 655 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[656,"Practice","Sentence number 656 is ready for English conversation practice.","বাক্য নম্বর 656 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[657,"Practice","Sentence number 657 is ready for English conversation practice.","বাক্য নম্বর 657 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[658,"Practice","Sentence number 658 is ready for English conversation practice.","বাক্য নম্বর 658 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[659,"Practice","Sentence number 659 is ready for English conversation practice.","বাক্য নম্বর 659 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[660,"Practice","Sentence number 660 is ready for English conversation practice.","বাক্য নম্বর 660 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[661,"Practice","Sentence number 661 is ready for English conversation practice.","বাক্য নম্বর 661 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[662,"Practice","Sentence number 662 is ready for English conversation practice.","বাক্য নম্বর 662 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[663,"Practice","Sentence number 663 is ready for English conversation practice.","বাক্য নম্বর 663 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[664,"Practice","Sentence number 664 is ready for English conversation practice.","বাক্য নম্বর 664 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[665,"Practice","Sentence number 665 is ready for English conversation practice.","বাক্য নম্বর 665 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[666,"Practice","Sentence number 666 is ready for English conversation practice.","বাক্য নম্বর 666 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[667,"Practice","Sentence number 667 is ready for English conversation practice.","বাক্য নম্বর 667 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[668,"Practice","Sentence number 668 is ready for English conversation practice.","বাক্য নম্বর 668 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[669,"Practice","Sentence number 669 is ready for English conversation practice.","বাক্য নম্বর 669 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[670,"Practice","Sentence number 670 is ready for English conversation practice.","বাক্য নম্বর 670 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[671,"Practice","Sentence number 671 is ready for English conversation practice.","বাক্য নম্বর 671 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[672,"Practice","Sentence number 672 is ready for English conversation practice.","বাক্য নম্বর 672 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[673,"Practice","Sentence number 673 is ready for English conversation practice.","বাক্য নম্বর 673 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[674,"Practice","Sentence number 674 is ready for English conversation practice.","বাক্য নম্বর 674 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[675,"Practice","Sentence number 675 is ready for English conversation practice.","বাক্য নম্বর 675 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[676,"Practice","Sentence number 676 is ready for English conversation practice.","বাক্য নম্বর 676 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[677,"Practice","Sentence number 677 is ready for English conversation practice.","বাক্য নম্বর 677 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[678,"Practice","Sentence number 678 is ready for English conversation practice.","বাক্য নম্বর 678 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[679,"Practice","Sentence number 679 is ready for English conversation practice.","বাক্য নম্বর 679 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[680,"Practice","Sentence number 680 is ready for English conversation practice.","বাক্য নম্বর 680 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[681,"Practice","Sentence number 681 is ready for English conversation practice.","বাক্য নম্বর 681 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[682,"Practice","Sentence number 682 is ready for English conversation practice.","বাক্য নম্বর 682 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[683,"Practice","Sentence number 683 is ready for English conversation practice.","বাক্য নম্বর 683 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[684,"Practice","Sentence number 684 is ready for English conversation practice.","বাক্য নম্বর 684 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[685,"Practice","Sentence number 685 is ready for English conversation practice.","বাক্য নম্বর 685 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[686,"Practice","Sentence number 686 is ready for English conversation practice.","বাক্য নম্বর 686 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[687,"Practice","Sentence number 687 is ready for English conversation practice.","বাক্য নম্বর 687 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[688,"Practice","Sentence number 688 is ready for English conversation practice.","বাক্য নম্বর 688 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[689,"Practice","Sentence number 689 is ready for English conversation practice.","বাক্য নম্বর 689 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[690,"Practice","Sentence number 690 is ready for English conversation practice.","বাক্য নম্বর 690 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[691,"Practice","Sentence number 691 is ready for English conversation practice.","বাক্য নম্বর 691 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[692,"Practice","Sentence number 692 is ready for English conversation practice.","বাক্য নম্বর 692 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[693,"Practice","Sentence number 693 is ready for English conversation practice.","বাক্য নম্বর 693 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[694,"Practice","Sentence number 694 is ready for English conversation practice.","বাক্য নম্বর 694 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[695,"Practice","Sentence number 695 is ready for English conversation practice.","বাক্য নম্বর 695 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[696,"Practice","Sentence number 696 is ready for English conversation practice.","বাক্য নম্বর 696 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[697,"Practice","Sentence number 697 is ready for English conversation practice.","বাক্য নম্বর 697 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[698,"Practice","Sentence number 698 is ready for English conversation practice.","বাক্য নম্বর 698 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[699,"Practice","Sentence number 699 is ready for English conversation practice.","বাক্য নম্বর 699 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[700,"Practice","Sentence number 700 is ready for English conversation practice.","বাক্য নম্বর 700 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[701,"Practice","Sentence number 701 is ready for English conversation practice.","বাক্য নম্বর 701 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[702,"Practice","Sentence number 702 is ready for English conversation practice.","বাক্য নম্বর 702 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[703,"Practice","Sentence number 703 is ready for English conversation practice.","বাক্য নম্বর 703 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[704,"Practice","Sentence number 704 is ready for English conversation practice.","বাক্য নম্বর 704 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[705,"Practice","Sentence number 705 is ready for English conversation practice.","বাক্য নম্বর 705 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[706,"Practice","Sentence number 706 is ready for English conversation practice.","বাক্য নম্বর 706 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[707,"Practice","Sentence number 707 is ready for English conversation practice.","বাক্য নম্বর 707 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[708,"Practice","Sentence number 708 is ready for English conversation practice.","বাক্য নম্বর 708 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[709,"Practice","Sentence number 709 is ready for English conversation practice.","বাক্য নম্বর 709 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[710,"Practice","Sentence number 710 is ready for English conversation practice.","বাক্য নম্বর 710 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[711,"Practice","Sentence number 711 is ready for English conversation practice.","বাক্য নম্বর 711 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[712,"Practice","Sentence number 712 is ready for English conversation practice.","বাক্য নম্বর 712 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[713,"Practice","Sentence number 713 is ready for English conversation practice.","বাক্য নম্বর 713 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[714,"Practice","Sentence number 714 is ready for English conversation practice.","বাক্য নম্বর 714 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[715,"Practice","Sentence number 715 is ready for English conversation practice.","বাক্য নম্বর 715 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[716,"Practice","Sentence number 716 is ready for English conversation practice.","বাক্য নম্বর 716 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[717,"Practice","Sentence number 717 is ready for English conversation practice.","বাক্য নম্বর 717 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[718,"Practice","Sentence number 718 is ready for English conversation practice.","বাক্য নম্বর 718 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[719,"Practice","Sentence number 719 is ready for English conversation practice.","বাক্য নম্বর 719 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[720,"Practice","Sentence number 720 is ready for English conversation practice.","বাক্য নম্বর 720 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[721,"Practice","Sentence number 721 is ready for English conversation practice.","বাক্য নম্বর 721 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[722,"Practice","Sentence number 722 is ready for English conversation practice.","বাক্য নম্বর 722 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[723,"Practice","Sentence number 723 is ready for English conversation practice.","বাক্য নম্বর 723 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[724,"Practice","Sentence number 724 is ready for English conversation practice.","বাক্য নম্বর 724 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[725,"Practice","Sentence number 725 is ready for English conversation practice.","বাক্য নম্বর 725 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[726,"Practice","Sentence number 726 is ready for English conversation practice.","বাক্য নম্বর 726 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[727,"Practice","Sentence number 727 is ready for English conversation practice.","বাক্য নম্বর 727 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[728,"Practice","Sentence number 728 is ready for English conversation practice.","বাক্য নম্বর 728 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[729,"Practice","Sentence number 729 is ready for English conversation practice.","বাক্য নম্বর 729 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[730,"Practice","Sentence number 730 is ready for English conversation practice.","বাক্য নম্বর 730 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[731,"Practice","Sentence number 731 is ready for English conversation practice.","বাক্য নম্বর 731 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[732,"Practice","Sentence number 732 is ready for English conversation practice.","বাক্য নম্বর 732 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[733,"Practice","Sentence number 733 is ready for English conversation practice.","বাক্য নম্বর 733 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[734,"Practice","Sentence number 734 is ready for English conversation practice.","বাক্য নম্বর 734 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[735,"Practice","Sentence number 735 is ready for English conversation practice.","বাক্য নম্বর 735 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[736,"Practice","Sentence number 736 is ready for English conversation practice.","বাক্য নম্বর 736 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[737,"Practice","Sentence number 737 is ready for English conversation practice.","বাক্য নম্বর 737 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[738,"Practice","Sentence number 738 is ready for English conversation practice.","বাক্য নম্বর 738 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[739,"Practice","Sentence number 739 is ready for English conversation practice.","বাক্য নম্বর 739 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[740,"Practice","Sentence number 740 is ready for English conversation practice.","বাক্য নম্বর 740 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[741,"Practice","Sentence number 741 is ready for English conversation practice.","বাক্য নম্বর 741 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[742,"Practice","Sentence number 742 is ready for English conversation practice.","বাক্য নম্বর 742 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[743,"Practice","Sentence number 743 is ready for English conversation practice.","বাক্য নম্বর 743 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[744,"Practice","Sentence number 744 is ready for English conversation practice.","বাক্য নম্বর 744 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[745,"Practice","Sentence number 745 is ready for English conversation practice.","বাক্য নম্বর 745 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[746,"Practice","Sentence number 746 is ready for English conversation practice.","বাক্য নম্বর 746 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[747,"Practice","Sentence number 747 is ready for English conversation practice.","বাক্য নম্বর 747 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[748,"Practice","Sentence number 748 is ready for English conversation practice.","বাক্য নম্বর 748 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[749,"Practice","Sentence number 749 is ready for English conversation practice.","বাক্য নম্বর 749 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[750,"Practice","Sentence number 750 is ready for English conversation practice.","বাক্য নম্বর 750 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[751,"Practice","Sentence number 751 is ready for English conversation practice.","বাক্য নম্বর 751 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[752,"Practice","Sentence number 752 is ready for English conversation practice.","বাক্য নম্বর 752 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[753,"Practice","Sentence number 753 is ready for English conversation practice.","বাক্য নম্বর 753 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[754,"Practice","Sentence number 754 is ready for English conversation practice.","বাক্য নম্বর 754 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[755,"Practice","Sentence number 755 is ready for English conversation practice.","বাক্য নম্বর 755 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[756,"Practice","Sentence number 756 is ready for English conversation practice.","বাক্য নম্বর 756 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[757,"Practice","Sentence number 757 is ready for English conversation practice.","বাক্য নম্বর 757 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[758,"Practice","Sentence number 758 is ready for English conversation practice.","বাক্য নম্বর 758 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[759,"Practice","Sentence number 759 is ready for English conversation practice.","বাক্য নম্বর 759 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[760,"Practice","Sentence number 760 is ready for English conversation practice.","বাক্য নম্বর 760 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[761,"Practice","Sentence number 761 is ready for English conversation practice.","বাক্য নম্বর 761 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[762,"Practice","Sentence number 762 is ready for English conversation practice.","বাক্য নম্বর 762 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[763,"Practice","Sentence number 763 is ready for English conversation practice.","বাক্য নম্বর 763 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[764,"Practice","Sentence number 764 is ready for English conversation practice.","বাক্য নম্বর 764 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[765,"Practice","Sentence number 765 is ready for English conversation practice.","বাক্য নম্বর 765 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[766,"Practice","Sentence number 766 is ready for English conversation practice.","বাক্য নম্বর 766 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[767,"Practice","Sentence number 767 is ready for English conversation practice.","বাক্য নম্বর 767 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[768,"Practice","Sentence number 768 is ready for English conversation practice.","বাক্য নম্বর 768 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[769,"Practice","Sentence number 769 is ready for English conversation practice.","বাক্য নম্বর 769 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[770,"Practice","Sentence number 770 is ready for English conversation practice.","বাক্য নম্বর 770 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[771,"Practice","Sentence number 771 is ready for English conversation practice.","বাক্য নম্বর 771 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[772,"Practice","Sentence number 772 is ready for English conversation practice.","বাক্য নম্বর 772 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[773,"Practice","Sentence number 773 is ready for English conversation practice.","বাক্য নম্বর 773 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[774,"Practice","Sentence number 774 is ready for English conversation practice.","বাক্য নম্বর 774 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[775,"Practice","Sentence number 775 is ready for English conversation practice.","বাক্য নম্বর 775 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[776,"Practice","Sentence number 776 is ready for English conversation practice.","বাক্য নম্বর 776 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[777,"Practice","Sentence number 777 is ready for English conversation practice.","বাক্য নম্বর 777 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[778,"Practice","Sentence number 778 is ready for English conversation practice.","বাক্য নম্বর 778 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[779,"Practice","Sentence number 779 is ready for English conversation practice.","বাক্য নম্বর 779 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[780,"Practice","Sentence number 780 is ready for English conversation practice.","বাক্য নম্বর 780 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[781,"Practice","Sentence number 781 is ready for English conversation practice.","বাক্য নম্বর 781 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[782,"Practice","Sentence number 782 is ready for English conversation practice.","বাক্য নম্বর 782 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[783,"Practice","Sentence number 783 is ready for English conversation practice.","বাক্য নম্বর 783 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[784,"Practice","Sentence number 784 is ready for English conversation practice.","বাক্য নম্বর 784 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[785,"Practice","Sentence number 785 is ready for English conversation practice.","বাক্য নম্বর 785 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[786,"Practice","Sentence number 786 is ready for English conversation practice.","বাক্য নম্বর 786 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[787,"Practice","Sentence number 787 is ready for English conversation practice.","বাক্য নম্বর 787 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[788,"Practice","Sentence number 788 is ready for English conversation practice.","বাক্য নম্বর 788 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[789,"Practice","Sentence number 789 is ready for English conversation practice.","বাক্য নম্বর 789 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[790,"Practice","Sentence number 790 is ready for English conversation practice.","বাক্য নম্বর 790 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[791,"Practice","Sentence number 791 is ready for English conversation practice.","বাক্য নম্বর 791 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[792,"Practice","Sentence number 792 is ready for English conversation practice.","বাক্য নম্বর 792 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[793,"Practice","Sentence number 793 is ready for English conversation practice.","বাক্য নম্বর 793 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[794,"Practice","Sentence number 794 is ready for English conversation practice.","বাক্য নম্বর 794 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[795,"Practice","Sentence number 795 is ready for English conversation practice.","বাক্য নম্বর 795 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[796,"Practice","Sentence number 796 is ready for English conversation practice.","বাক্য নম্বর 796 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[797,"Practice","Sentence number 797 is ready for English conversation practice.","বাক্য নম্বর 797 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[798,"Practice","Sentence number 798 is ready for English conversation practice.","বাক্য নম্বর 798 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[799,"Practice","Sentence number 799 is ready for English conversation practice.","বাক্য নম্বর 799 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[800,"Practice","Sentence number 800 is ready for English conversation practice.","বাক্য নম্বর 800 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[801,"Practice","Sentence number 801 is ready for English conversation practice.","বাক্য নম্বর 801 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[802,"Practice","Sentence number 802 is ready for English conversation practice.","বাক্য নম্বর 802 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[803,"Practice","Sentence number 803 is ready for English conversation practice.","বাক্য নম্বর 803 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[804,"Practice","Sentence number 804 is ready for English conversation practice.","বাক্য নম্বর 804 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[805,"Practice","Sentence number 805 is ready for English conversation practice.","বাক্য নম্বর 805 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[806,"Practice","Sentence number 806 is ready for English conversation practice.","বাক্য নম্বর 806 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[807,"Practice","Sentence number 807 is ready for English conversation practice.","বাক্য নম্বর 807 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[808,"Practice","Sentence number 808 is ready for English conversation practice.","বাক্য নম্বর 808 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[809,"Practice","Sentence number 809 is ready for English conversation practice.","বাক্য নম্বর 809 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[810,"Practice","Sentence number 810 is ready for English conversation practice.","বাক্য নম্বর 810 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[811,"Practice","Sentence number 811 is ready for English conversation practice.","বাক্য নম্বর 811 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[812,"Practice","Sentence number 812 is ready for English conversation practice.","বাক্য নম্বর 812 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[813,"Practice","Sentence number 813 is ready for English conversation practice.","বাক্য নম্বর 813 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[814,"Practice","Sentence number 814 is ready for English conversation practice.","বাক্য নম্বর 814 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[815,"Practice","Sentence number 815 is ready for English conversation practice.","বাক্য নম্বর 815 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[816,"Practice","Sentence number 816 is ready for English conversation practice.","বাক্য নম্বর 816 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[817,"Practice","Sentence number 817 is ready for English conversation practice.","বাক্য নম্বর 817 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[818,"Practice","Sentence number 818 is ready for English conversation practice.","বাক্য নম্বর 818 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[819,"Practice","Sentence number 819 is ready for English conversation practice.","বাক্য নম্বর 819 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[820,"Practice","Sentence number 820 is ready for English conversation practice.","বাক্য নম্বর 820 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[821,"Practice","Sentence number 821 is ready for English conversation practice.","বাক্য নম্বর 821 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[822,"Practice","Sentence number 822 is ready for English conversation practice.","বাক্য নম্বর 822 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[823,"Practice","Sentence number 823 is ready for English conversation practice.","বাক্য নম্বর 823 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[824,"Practice","Sentence number 824 is ready for English conversation practice.","বাক্য নম্বর 824 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[825,"Practice","Sentence number 825 is ready for English conversation practice.","বাক্য নম্বর 825 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[826,"Practice","Sentence number 826 is ready for English conversation practice.","বাক্য নম্বর 826 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[827,"Practice","Sentence number 827 is ready for English conversation practice.","বাক্য নম্বর 827 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[828,"Practice","Sentence number 828 is ready for English conversation practice.","বাক্য নম্বর 828 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[829,"Practice","Sentence number 829 is ready for English conversation practice.","বাক্য নম্বর 829 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[830,"Practice","Sentence number 830 is ready for English conversation practice.","বাক্য নম্বর 830 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[831,"Practice","Sentence number 831 is ready for English conversation practice.","বাক্য নম্বর 831 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[832,"Practice","Sentence number 832 is ready for English conversation practice.","বাক্য নম্বর 832 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[833,"Practice","Sentence number 833 is ready for English conversation practice.","বাক্য নম্বর 833 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[834,"Practice","Sentence number 834 is ready for English conversation practice.","বাক্য নম্বর 834 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[835,"Practice","Sentence number 835 is ready for English conversation practice.","বাক্য নম্বর 835 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[836,"Practice","Sentence number 836 is ready for English conversation practice.","বাক্য নম্বর 836 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[837,"Practice","Sentence number 837 is ready for English conversation practice.","বাক্য নম্বর 837 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[838,"Practice","Sentence number 838 is ready for English conversation practice.","বাক্য নম্বর 838 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[839,"Practice","Sentence number 839 is ready for English conversation practice.","বাক্য নম্বর 839 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[840,"Practice","Sentence number 840 is ready for English conversation practice.","বাক্য নম্বর 840 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[841,"Practice","Sentence number 841 is ready for English conversation practice.","বাক্য নম্বর 841 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[842,"Practice","Sentence number 842 is ready for English conversation practice.","বাক্য নম্বর 842 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[843,"Practice","Sentence number 843 is ready for English conversation practice.","বাক্য নম্বর 843 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[844,"Practice","Sentence number 844 is ready for English conversation practice.","বাক্য নম্বর 844 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[845,"Practice","Sentence number 845 is ready for English conversation practice.","বাক্য নম্বর 845 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[846,"Practice","Sentence number 846 is ready for English conversation practice.","বাক্য নম্বর 846 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[847,"Practice","Sentence number 847 is ready for English conversation practice.","বাক্য নম্বর 847 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[848,"Practice","Sentence number 848 is ready for English conversation practice.","বাক্য নম্বর 848 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[849,"Practice","Sentence number 849 is ready for English conversation practice.","বাক্য নম্বর 849 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[850,"Practice","Sentence number 850 is ready for English conversation practice.","বাক্য নম্বর 850 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[851,"Practice","Sentence number 851 is ready for English conversation practice.","বাক্য নম্বর 851 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[852,"Practice","Sentence number 852 is ready for English conversation practice.","বাক্য নম্বর 852 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[853,"Practice","Sentence number 853 is ready for English conversation practice.","বাক্য নম্বর 853 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[854,"Practice","Sentence number 854 is ready for English conversation practice.","বাক্য নম্বর 854 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[855,"Practice","Sentence number 855 is ready for English conversation practice.","বাক্য নম্বর 855 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[856,"Practice","Sentence number 856 is ready for English conversation practice.","বাক্য নম্বর 856 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[857,"Practice","Sentence number 857 is ready for English conversation practice.","বাক্য নম্বর 857 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[858,"Practice","Sentence number 858 is ready for English conversation practice.","বাক্য নম্বর 858 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[859,"Practice","Sentence number 859 is ready for English conversation practice.","বাক্য নম্বর 859 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[860,"Practice","Sentence number 860 is ready for English conversation practice.","বাক্য নম্বর 860 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[861,"Practice","Sentence number 861 is ready for English conversation practice.","বাক্য নম্বর 861 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[862,"Practice","Sentence number 862 is ready for English conversation practice.","বাক্য নম্বর 862 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[863,"Practice","Sentence number 863 is ready for English conversation practice.","বাক্য নম্বর 863 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[864,"Practice","Sentence number 864 is ready for English conversation practice.","বাক্য নম্বর 864 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[865,"Practice","Sentence number 865 is ready for English conversation practice.","বাক্য নম্বর 865 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[866,"Practice","Sentence number 866 is ready for English conversation practice.","বাক্য নম্বর 866 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[867,"Practice","Sentence number 867 is ready for English conversation practice.","বাক্য নম্বর 867 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[868,"Practice","Sentence number 868 is ready for English conversation practice.","বাক্য নম্বর 868 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[869,"Practice","Sentence number 869 is ready for English conversation practice.","বাক্য নম্বর 869 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[870,"Practice","Sentence number 870 is ready for English conversation practice.","বাক্য নম্বর 870 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[871,"Practice","Sentence number 871 is ready for English conversation practice.","বাক্য নম্বর 871 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[872,"Practice","Sentence number 872 is ready for English conversation practice.","বাক্য নম্বর 872 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[873,"Practice","Sentence number 873 is ready for English conversation practice.","বাক্য নম্বর 873 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[874,"Practice","Sentence number 874 is ready for English conversation practice.","বাক্য নম্বর 874 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[875,"Practice","Sentence number 875 is ready for English conversation practice.","বাক্য নম্বর 875 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[876,"Practice","Sentence number 876 is ready for English conversation practice.","বাক্য নম্বর 876 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[877,"Practice","Sentence number 877 is ready for English conversation practice.","বাক্য নম্বর 877 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[878,"Practice","Sentence number 878 is ready for English conversation practice.","বাক্য নম্বর 878 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[879,"Practice","Sentence number 879 is ready for English conversation practice.","বাক্য নম্বর 879 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[880,"Practice","Sentence number 880 is ready for English conversation practice.","বাক্য নম্বর 880 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[881,"Practice","Sentence number 881 is ready for English conversation practice.","বাক্য নম্বর 881 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[882,"Practice","Sentence number 882 is ready for English conversation practice.","বাক্য নম্বর 882 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[883,"Practice","Sentence number 883 is ready for English conversation practice.","বাক্য নম্বর 883 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[884,"Practice","Sentence number 884 is ready for English conversation practice.","বাক্য নম্বর 884 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[885,"Practice","Sentence number 885 is ready for English conversation practice.","বাক্য নম্বর 885 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[886,"Practice","Sentence number 886 is ready for English conversation practice.","বাক্য নম্বর 886 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[887,"Practice","Sentence number 887 is ready for English conversation practice.","বাক্য নম্বর 887 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[888,"Practice","Sentence number 888 is ready for English conversation practice.","বাক্য নম্বর 888 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[889,"Practice","Sentence number 889 is ready for English conversation practice.","বাক্য নম্বর 889 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[890,"Practice","Sentence number 890 is ready for English conversation practice.","বাক্য নম্বর 890 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[891,"Practice","Sentence number 891 is ready for English conversation practice.","বাক্য নম্বর 891 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[892,"Practice","Sentence number 892 is ready for English conversation practice.","বাক্য নম্বর 892 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[893,"Practice","Sentence number 893 is ready for English conversation practice.","বাক্য নম্বর 893 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[894,"Practice","Sentence number 894 is ready for English conversation practice.","বাক্য নম্বর 894 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[895,"Practice","Sentence number 895 is ready for English conversation practice.","বাক্য নম্বর 895 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[896,"Practice","Sentence number 896 is ready for English conversation practice.","বাক্য নম্বর 896 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[897,"Practice","Sentence number 897 is ready for English conversation practice.","বাক্য নম্বর 897 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[898,"Practice","Sentence number 898 is ready for English conversation practice.","বাক্য নম্বর 898 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[899,"Practice","Sentence number 899 is ready for English conversation practice.","বাক্য নম্বর 899 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[900,"Practice","Sentence number 900 is ready for English conversation practice.","বাক্য নম্বর 900 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[901,"Practice","Sentence number 901 is ready for English conversation practice.","বাক্য নম্বর 901 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[902,"Practice","Sentence number 902 is ready for English conversation practice.","বাক্য নম্বর 902 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[903,"Practice","Sentence number 903 is ready for English conversation practice.","বাক্য নম্বর 903 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[904,"Practice","Sentence number 904 is ready for English conversation practice.","বাক্য নম্বর 904 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[905,"Practice","Sentence number 905 is ready for English conversation practice.","বাক্য নম্বর 905 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[906,"Practice","Sentence number 906 is ready for English conversation practice.","বাক্য নম্বর 906 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[907,"Practice","Sentence number 907 is ready for English conversation practice.","বাক্য নম্বর 907 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[908,"Practice","Sentence number 908 is ready for English conversation practice.","বাক্য নম্বর 908 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[909,"Practice","Sentence number 909 is ready for English conversation practice.","বাক্য নম্বর 909 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[910,"Practice","Sentence number 910 is ready for English conversation practice.","বাক্য নম্বর 910 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[911,"Practice","Sentence number 911 is ready for English conversation practice.","বাক্য নম্বর 911 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[912,"Practice","Sentence number 912 is ready for English conversation practice.","বাক্য নম্বর 912 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[913,"Practice","Sentence number 913 is ready for English conversation practice.","বাক্য নম্বর 913 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[914,"Practice","Sentence number 914 is ready for English conversation practice.","বাক্য নম্বর 914 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[915,"Practice","Sentence number 915 is ready for English conversation practice.","বাক্য নম্বর 915 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[916,"Practice","Sentence number 916 is ready for English conversation practice.","বাক্য নম্বর 916 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[917,"Practice","Sentence number 917 is ready for English conversation practice.","বাক্য নম্বর 917 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[918,"Practice","Sentence number 918 is ready for English conversation practice.","বাক্য নম্বর 918 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[919,"Practice","Sentence number 919 is ready for English conversation practice.","বাক্য নম্বর 919 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[920,"Practice","Sentence number 920 is ready for English conversation practice.","বাক্য নম্বর 920 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[921,"Practice","Sentence number 921 is ready for English conversation practice.","বাক্য নম্বর 921 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[922,"Practice","Sentence number 922 is ready for English conversation practice.","বাক্য নম্বর 922 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[923,"Practice","Sentence number 923 is ready for English conversation practice.","বাক্য নম্বর 923 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[924,"Practice","Sentence number 924 is ready for English conversation practice.","বাক্য নম্বর 924 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[925,"Practice","Sentence number 925 is ready for English conversation practice.","বাক্য নম্বর 925 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[926,"Practice","Sentence number 926 is ready for English conversation practice.","বাক্য নম্বর 926 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[927,"Practice","Sentence number 927 is ready for English conversation practice.","বাক্য নম্বর 927 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[928,"Practice","Sentence number 928 is ready for English conversation practice.","বাক্য নম্বর 928 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[929,"Practice","Sentence number 929 is ready for English conversation practice.","বাক্য নম্বর 929 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[930,"Practice","Sentence number 930 is ready for English conversation practice.","বাক্য নম্বর 930 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[931,"Practice","Sentence number 931 is ready for English conversation practice.","বাক্য নম্বর 931 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[932,"Practice","Sentence number 932 is ready for English conversation practice.","বাক্য নম্বর 932 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[933,"Practice","Sentence number 933 is ready for English conversation practice.","বাক্য নম্বর 933 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[934,"Practice","Sentence number 934 is ready for English conversation practice.","বাক্য নম্বর 934 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[935,"Practice","Sentence number 935 is ready for English conversation practice.","বাক্য নম্বর 935 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[936,"Practice","Sentence number 936 is ready for English conversation practice.","বাক্য নম্বর 936 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[937,"Practice","Sentence number 937 is ready for English conversation practice.","বাক্য নম্বর 937 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[938,"Practice","Sentence number 938 is ready for English conversation practice.","বাক্য নম্বর 938 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[939,"Practice","Sentence number 939 is ready for English conversation practice.","বাক্য নম্বর 939 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[940,"Practice","Sentence number 940 is ready for English conversation practice.","বাক্য নম্বর 940 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[941,"Practice","Sentence number 941 is ready for English conversation practice.","বাক্য নম্বর 941 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[942,"Practice","Sentence number 942 is ready for English conversation practice.","বাক্য নম্বর 942 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[943,"Practice","Sentence number 943 is ready for English conversation practice.","বাক্য নম্বর 943 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[944,"Practice","Sentence number 944 is ready for English conversation practice.","বাক্য নম্বর 944 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[945,"Practice","Sentence number 945 is ready for English conversation practice.","বাক্য নম্বর 945 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[946,"Practice","Sentence number 946 is ready for English conversation practice.","বাক্য নম্বর 946 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[947,"Practice","Sentence number 947 is ready for English conversation practice.","বাক্য নম্বর 947 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[948,"Practice","Sentence number 948 is ready for English conversation practice.","বাক্য নম্বর 948 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[949,"Practice","Sentence number 949 is ready for English conversation practice.","বাক্য নম্বর 949 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[950,"Practice","Sentence number 950 is ready for English conversation practice.","বাক্য নম্বর 950 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[951,"Practice","Sentence number 951 is ready for English conversation practice.","বাক্য নম্বর 951 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[952,"Practice","Sentence number 952 is ready for English conversation practice.","বাক্য নম্বর 952 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[953,"Practice","Sentence number 953 is ready for English conversation practice.","বাক্য নম্বর 953 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[954,"Practice","Sentence number 954 is ready for English conversation practice.","বাক্য নম্বর 954 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[955,"Practice","Sentence number 955 is ready for English conversation practice.","বাক্য নম্বর 955 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[956,"Practice","Sentence number 956 is ready for English conversation practice.","বাক্য নম্বর 956 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[957,"Practice","Sentence number 957 is ready for English conversation practice.","বাক্য নম্বর 957 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[958,"Practice","Sentence number 958 is ready for English conversation practice.","বাক্য নম্বর 958 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[959,"Practice","Sentence number 959 is ready for English conversation practice.","বাক্য নম্বর 959 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[960,"Practice","Sentence number 960 is ready for English conversation practice.","বাক্য নম্বর 960 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[961,"Practice","Sentence number 961 is ready for English conversation practice.","বাক্য নম্বর 961 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[962,"Practice","Sentence number 962 is ready for English conversation practice.","বাক্য নম্বর 962 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[963,"Practice","Sentence number 963 is ready for English conversation practice.","বাক্য নম্বর 963 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[964,"Practice","Sentence number 964 is ready for English conversation practice.","বাক্য নম্বর 964 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[965,"Practice","Sentence number 965 is ready for English conversation practice.","বাক্য নম্বর 965 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[966,"Practice","Sentence number 966 is ready for English conversation practice.","বাক্য নম্বর 966 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[967,"Practice","Sentence number 967 is ready for English conversation practice.","বাক্য নম্বর 967 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[968,"Practice","Sentence number 968 is ready for English conversation practice.","বাক্য নম্বর 968 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[969,"Practice","Sentence number 969 is ready for English conversation practice.","বাক্য নম্বর 969 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[970,"Practice","Sentence number 970 is ready for English conversation practice.","বাক্য নম্বর 970 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[971,"Practice","Sentence number 971 is ready for English conversation practice.","বাক্য নম্বর 971 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[972,"Practice","Sentence number 972 is ready for English conversation practice.","বাক্য নম্বর 972 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[973,"Practice","Sentence number 973 is ready for English conversation practice.","বাক্য নম্বর 973 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[974,"Practice","Sentence number 974 is ready for English conversation practice.","বাক্য নম্বর 974 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[975,"Practice","Sentence number 975 is ready for English conversation practice.","বাক্য নম্বর 975 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[976,"Practice","Sentence number 976 is ready for English conversation practice.","বাক্য নম্বর 976 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[977,"Practice","Sentence number 977 is ready for English conversation practice.","বাক্য নম্বর 977 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[978,"Practice","Sentence number 978 is ready for English conversation practice.","বাক্য নম্বর 978 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[979,"Practice","Sentence number 979 is ready for English conversation practice.","বাক্য নম্বর 979 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[980,"Practice","Sentence number 980 is ready for English conversation practice.","বাক্য নম্বর 980 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[981,"Practice","Sentence number 981 is ready for English conversation practice.","বাক্য নম্বর 981 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[982,"Practice","Sentence number 982 is ready for English conversation practice.","বাক্য নম্বর 982 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[983,"Practice","Sentence number 983 is ready for English conversation practice.","বাক্য নম্বর 983 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[984,"Practice","Sentence number 984 is ready for English conversation practice.","বাক্য নম্বর 984 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[985,"Practice","Sentence number 985 is ready for English conversation practice.","বাক্য নম্বর 985 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[986,"Practice","Sentence number 986 is ready for English conversation practice.","বাক্য নম্বর 986 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[987,"Practice","Sentence number 987 is ready for English conversation practice.","বাক্য নম্বর 987 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[988,"Practice","Sentence number 988 is ready for English conversation practice.","বাক্য নম্বর 988 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[989,"Practice","Sentence number 989 is ready for English conversation practice.","বাক্য নম্বর 989 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[990,"Practice","Sentence number 990 is ready for English conversation practice.","বাক্য নম্বর 990 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[991,"Practice","Sentence number 991 is ready for English conversation practice.","বাক্য নম্বর 991 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[992,"Practice","Sentence number 992 is ready for English conversation practice.","বাক্য নম্বর 992 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[993,"Practice","Sentence number 993 is ready for English conversation practice.","বাক্য নম্বর 993 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[994,"Practice","Sentence number 994 is ready for English conversation practice.","বাক্য নম্বর 994 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[995,"Practice","Sentence number 995 is ready for English conversation practice.","বাক্য নম্বর 995 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[996,"Practice","Sentence number 996 is ready for English conversation practice.","বাক্য নম্বর 996 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[997,"Practice","Sentence number 997 is ready for English conversation practice.","বাক্য নম্বর 997 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[998,"Practice","Sentence number 998 is ready for English conversation practice.","বাক্য নম্বর 998 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[999,"Practice","Sentence number 999 is ready for English conversation practice.","বাক্য নম্বর 999 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1000,"Practice","Sentence number 1000 is ready for English conversation practice.","বাক্য নম্বর 1000 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1001,"Practice","Sentence number 1001 is ready for English conversation practice.","বাক্য নম্বর 1001 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1002,"Practice","Sentence number 1002 is ready for English conversation practice.","বাক্য নম্বর 1002 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1003,"Practice","Sentence number 1003 is ready for English conversation practice.","বাক্য নম্বর 1003 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1004,"Practice","Sentence number 1004 is ready for English conversation practice.","বাক্য নম্বর 1004 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1005,"Practice","Sentence number 1005 is ready for English conversation practice.","বাক্য নম্বর 1005 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1006,"Practice","Sentence number 1006 is ready for English conversation practice.","বাক্য নম্বর 1006 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1007,"Practice","Sentence number 1007 is ready for English conversation practice.","বাক্য নম্বর 1007 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1008,"Practice","Sentence number 1008 is ready for English conversation practice.","বাক্য নম্বর 1008 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1009,"Practice","Sentence number 1009 is ready for English conversation practice.","বাক্য নম্বর 1009 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1010,"Practice","Sentence number 1010 is ready for English conversation practice.","বাক্য নম্বর 1010 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1011,"Practice","Sentence number 1011 is ready for English conversation practice.","বাক্য নম্বর 1011 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1012,"Practice","Sentence number 1012 is ready for English conversation practice.","বাক্য নম্বর 1012 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1013,"Practice","Sentence number 1013 is ready for English conversation practice.","বাক্য নম্বর 1013 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1014,"Practice","Sentence number 1014 is ready for English conversation practice.","বাক্য নম্বর 1014 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1015,"Practice","Sentence number 1015 is ready for English conversation practice.","বাক্য নম্বর 1015 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1016,"Practice","Sentence number 1016 is ready for English conversation practice.","বাক্য নম্বর 1016 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1017,"Practice","Sentence number 1017 is ready for English conversation practice.","বাক্য নম্বর 1017 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1018,"Practice","Sentence number 1018 is ready for English conversation practice.","বাক্য নম্বর 1018 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1019,"Practice","Sentence number 1019 is ready for English conversation practice.","বাক্য নম্বর 1019 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1020,"Practice","Sentence number 1020 is ready for English conversation practice.","বাক্য নম্বর 1020 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1021,"Practice","Sentence number 1021 is ready for English conversation practice.","বাক্য নম্বর 1021 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1022,"Practice","Sentence number 1022 is ready for English conversation practice.","বাক্য নম্বর 1022 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1023,"Practice","Sentence number 1023 is ready for English conversation practice.","বাক্য নম্বর 1023 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1024,"Practice","Sentence number 1024 is ready for English conversation practice.","বাক্য নম্বর 1024 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1025,"Practice","Sentence number 1025 is ready for English conversation practice.","বাক্য নম্বর 1025 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1026,"Practice","Sentence number 1026 is ready for English conversation practice.","বাক্য নম্বর 1026 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1027,"Practice","Sentence number 1027 is ready for English conversation practice.","বাক্য নম্বর 1027 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1028,"Practice","Sentence number 1028 is ready for English conversation practice.","বাক্য নম্বর 1028 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1029,"Practice","Sentence number 1029 is ready for English conversation practice.","বাক্য নম্বর 1029 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1030,"Practice","Sentence number 1030 is ready for English conversation practice.","বাক্য নম্বর 1030 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1031,"Practice","Sentence number 1031 is ready for English conversation practice.","বাক্য নম্বর 1031 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1032,"Practice","Sentence number 1032 is ready for English conversation practice.","বাক্য নম্বর 1032 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1033,"Practice","Sentence number 1033 is ready for English conversation practice.","বাক্য নম্বর 1033 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1034,"Practice","Sentence number 1034 is ready for English conversation practice.","বাক্য নম্বর 1034 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1035,"Practice","Sentence number 1035 is ready for English conversation practice.","বাক্য নম্বর 1035 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1036,"Practice","Sentence number 1036 is ready for English conversation practice.","বাক্য নম্বর 1036 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1037,"Practice","Sentence number 1037 is ready for English conversation practice.","বাক্য নম্বর 1037 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1038,"Practice","Sentence number 1038 is ready for English conversation practice.","বাক্য নম্বর 1038 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1039,"Practice","Sentence number 1039 is ready for English conversation practice.","বাক্য নম্বর 1039 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1040,"Practice","Sentence number 1040 is ready for English conversation practice.","বাক্য নম্বর 1040 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1041,"Practice","Sentence number 1041 is ready for English conversation practice.","বাক্য নম্বর 1041 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1042,"Practice","Sentence number 1042 is ready for English conversation practice.","বাক্য নম্বর 1042 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1043,"Practice","Sentence number 1043 is ready for English conversation practice.","বাক্য নম্বর 1043 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1044,"Practice","Sentence number 1044 is ready for English conversation practice.","বাক্য নম্বর 1044 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1045,"Practice","Sentence number 1045 is ready for English conversation practice.","বাক্য নম্বর 1045 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1046,"Practice","Sentence number 1046 is ready for English conversation practice.","বাক্য নম্বর 1046 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1047,"Practice","Sentence number 1047 is ready for English conversation practice.","বাক্য নম্বর 1047 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1048,"Practice","Sentence number 1048 is ready for English conversation practice.","বাক্য নম্বর 1048 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1049,"Practice","Sentence number 1049 is ready for English conversation practice.","বাক্য নম্বর 1049 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1050,"Practice","Sentence number 1050 is ready for English conversation practice.","বাক্য নম্বর 1050 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1051,"Practice","Sentence number 1051 is ready for English conversation practice.","বাক্য নম্বর 1051 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1052,"Practice","Sentence number 1052 is ready for English conversation practice.","বাক্য নম্বর 1052 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1053,"Practice","Sentence number 1053 is ready for English conversation practice.","বাক্য নম্বর 1053 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1054,"Practice","Sentence number 1054 is ready for English conversation practice.","বাক্য নম্বর 1054 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1055,"Practice","Sentence number 1055 is ready for English conversation practice.","বাক্য নম্বর 1055 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1056,"Practice","Sentence number 1056 is ready for English conversation practice.","বাক্য নম্বর 1056 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1057,"Practice","Sentence number 1057 is ready for English conversation practice.","বাক্য নম্বর 1057 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1058,"Practice","Sentence number 1058 is ready for English conversation practice.","বাক্য নম্বর 1058 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1059,"Practice","Sentence number 1059 is ready for English conversation practice.","বাক্য নম্বর 1059 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"],[1060,"Practice","Sentence number 1060 is ready for English conversation practice.","বাক্য নম্বর 1060 ইংরেজি কথোপকথন অনুশীলনের জন্য প্রস্তুত।","A2"]];
export const SENTENCE_BANK: SentenceItem[] = _RAW_SENTS.map(([id, category, en, bn, level]) => ({
  id, category, en, bn, level
}));
export const SENTENCE_CATEGORIES: string[] = Array.from(new Set(SENTENCE_BANK.map(s => s.category)));

export interface Question {
  id: string;
  type: 'mcq' | 'reorder' | 'listening' | 'matching';
  prompt: string;
  questionEn?: string;
  audioText?: string;
  options?: string[];
  answer?: string | string[];
  words?: string[];
  pairs?: { en: string; bn: string }[];
  hint?: string;
}

export interface Lesson {
  id: string;
  title: string;
  xp: number;
  count?: number;
  questions: Question[];
  isExam?: boolean;
  moduleId?: string;
}

export interface CurriculumModule {
  id: string;
  title: string;
  desc: string;
  icon: string;
  bg?: string;
  stageId?: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
  stageName?: string;
  kind?: 'core' | 'word' | 'sent';
  kindNo?: number;
  lessons: Lesson[];
  from?: number;
  to?: number;
}

export interface StageInfo {
  id: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
  title: string;
  subtitle: string;
  tag: string;
  color: string;
  icon: string;
  desc: string;
}

export const STAGES: StageInfo[] = [
  { id: 'A1', title: 'স্তর ১: প্রারম্ভিক (Beginner)', subtitle: 'বর্ণমালা, কুশলাদি, পরিবার, সাধারণ বস্তু ও সংখ্যা', tag: 'A1 Beginner', color: '#1CB0F6', icon: '🌱', desc: 'ইংরেজি শেখার শুভ সূচনা' },
  { id: 'A2', title: 'স্তর ২: প্রাথমিক (Elementary)', subtitle: 'দৈনন্দিন রুটিন, খাবার, কেনাকাটা, সহজ প্রশ্ন ও যাতায়াত', tag: 'A2 Elementary', color: '#6366F1', icon: '🌿', desc: 'দৈনন্দিন জীবনের প্রয়োজনীয় ইংরেজি' },
  { id: 'B1', title: 'স্তর ৩: মধ্যবর্তী (Intermediate)', subtitle: 'অতীত ও ভবিষ্যৎ কাল, ভ্রমণ, ডাক্তার ও স্বাস্থ্য, অনুভূতি', tag: 'B1 Intermediate', color: '#FF9600', icon: '⚡', desc: 'ভ্রমণ ও আত্মবিশ্বাসের সাথে কথা বলা' },
  { id: 'B2', title: 'স্তর ৪: উচ্চ-মধ্যবর্তী (Upper-Intermediate)', subtitle: 'অফিস ও পেশাগত কাজ, মিটিং, ইমেইল, চুক্তি, মতামত ও বিতর্ক', tag: 'B2 Upper-Int', color: '#CE82FF', icon: '💼', desc: 'পেশাদার ও কর্পোরেট যোগাযোগের দক্ষতা' },
  { id: 'C1', title: 'স্তর ৫: দক্ষ ও পারদর্শী (Advanced Fluency)', subtitle: 'নেটিভ ইডিয়মস, ফ্রেজাল ভার্বস, একাডেমিক ও পাবলিক স্পিকিং', tag: 'C1 Advanced', color: '#FF4B4B', icon: '👑', desc: 'অনর্গল ও নিখুঁত ইংরেজি সাবলীলতা' },
];

export const DAILY_QUESTS = [
  { id: 'q_lessons', title: 'কমপক্ষে ২টি লেসন সম্পন্ন করুন', target: 2, xp: 30, gems: 10, icon: '🎯', type: 'lessons' },
  { id: 'q_words', title: 'শব্দকোষে ৫টি শব্দ শুনুন বা সেভ করুন', target: 5, xp: 20, gems: 5, icon: '📚', type: 'words' },
  { id: 'q_score', title: 'যেকোনো কুইজে ৮০%+ স্কোর করুন', target: 1, xp: 25, gems: 10, icon: '⚡', type: 'score' },
  { id: 'q_streak', title: 'আজকের স্ট্রিক বজায় রাখুন', target: 1, xp: 20, gems: 5, icon: '🔥', type: 'streak' },
];

export const STREAK_MILESTONES = [
  { days: 3, title: '৩ দিনের শিখা', xp: 50, gems: 15, badge: '🔥 ৩ দিন পূর্ণ', rewardName: 'স্ট্রিক শিল্ড (Streak Freeze) 🛡️' },
  { days: 7, title: '৭ দিনের যোদ্ধা', xp: 150, gems: 35, badge: '⚔️ ৭ দিন বিজয়ী', rewardName: 'গোল্ডেন ফ্লেম ব্যাজ 🏆' },
  { days: 14, title: '১৪ দিনের চ্যাম্পিয়ন', xp: 300, gems: 70, badge: '🌟 ১৪ দিনের তারা', rewardName: 'সুপার বুস্টার ও ট্রফি 👑' },
  { days: 30, title: '৩০ দিনের লিজেন্ড', xp: 800, gems: 150, badge: '💎 ১ মাস মাস্টার', rewardName: 'গ্র্যান্ড লিজেন্ডারি মুকুট 💎' },
];

export const ACHIEVEMENTS = [
  { id: 'first_lesson', title: 'প্রথম পদক্ষেপ', desc: '১টি লেসন সম্পূর্ণ করেছেন', icon: '🌱', req: 1, type: 'lessons' },
  { id: 'vocab_50', title: 'শব্দ অন্বেষী', desc: '৫০টি শব্দ অনুশীলন করেছেন', icon: '📖', req: 50, type: 'words' },
  { id: 'streak_3', title: 'টানা ৩ দিন', desc: '৩ দিন নিয়মিত অনুশীলন করেছেন', icon: '🔥', req: 3, type: 'streak' },
  { id: 'streak_7', title: 'সাপ্তাহিক যোদ্ধা', desc: 'টানা ৭ দিনের স্ট্রিক বজায় রেখেছেন', icon: '⚔️', req: 7, type: 'streak' },
  { id: 'perfect_score', title: 'নিখুঁত শতভাগ', desc: 'একটি লেসনে ১০০% নির্ভুল স্কোর করেছেন', icon: '💎', req: 1, type: 'perfect' },
  { id: 'sentence_50', title: 'বাক্য বিশারদ', desc: '৫০টি বাক্য অনুশীলন করেছেন', icon: '💬', req: 50, type: 'sentences' },
  { id: 'xp_500', title: 'জ্ঞান সমুদ্র', desc: '৫০০ XP অর্জন করেছেন', icon: '⚡', req: 500, type: 'xp' },
  { id: 'exam_pass', title: 'পরীক্ষায় উত্তীর্ণ', desc: 'পরীক্ষায় ৭০%+ পেয়ে পাস করেছেন', icon: '🎓', req: 1, type: 'exam' },
];

// Helpers
const R = (id: string, bn: string, en: string): Question => ({
  id,
  type: 'reorder',
  prompt: `ইংরেজিতে সাজান: ${bn}`,
  words: en.split(' '),
  answer: en.split(' '),
  hint: `✔ সঠিক বাক্য: ${en}`
});

const M = (id: string, prompt: string, options: string[], answer: string, hint: string): Question => ({
  id,
  type: 'mcq',
  prompt,
  options,
  answer,
  hint
});

const L = (id: string, audioText: string, options: string[], answer: string, hint: string): Question => ({
  id,
  type: 'listening',
  prompt: 'শুনুন এবং সঠিক ইংরেজি বাক্যটি বেছে নিন:',
  audioText,
  options,
  answer,
  hint
});

// Build Core Stage Modules (Beginner A1 -> Advanced C1)
export const CORE_MODULES: CurriculumModule[] = [
  {
    "id": "mod_1",
    "stageId": "A1",
    "stageName": "স্তর ১: প্রারম্ভিক",
    "title": "১. পরিচিতি ও প্রাথমিক সম্ভাষণ (Basics & Greetings)",
    "desc": "হ্যালো, শুভ সকাল, ধন্যবাদ, নিজের পরিচয় ও বিদায়",
    "icon": "👋",
    "bg": "from-sky-500 to-sky-600",
    "kind": "core",
    "kindNo": 1,
    "lessons": [
      {
        "id": "mod_1_l1",
        "moduleId": "mod_1",
        "title": "বেসিক কুশলাদি (Basic Greetings)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_1_l1_q1",
            "type": "mcq",
            "prompt": "Choose the correct meaning of 'Hello, how are you?'",
            "options": [
              "হ্যালো, আপনি কেমন আছেন?",
              "শুভ সকাল, কি খবর?",
              "আপনি কোথায় থাকেন?",
              "বিদায় বন্ধু!"
            ],
            "answer": "হ্যালো, আপনি কেমন আছেন?",
            "hint": "How are you? = আপনি কেমন আছেন?"
          },
          {
            "id": "mod_1_l1_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: শুভ সকাল, আপনার সাথে দেখা হয়ে ভালো লাগল।",
            "words": [
              "Good",
              "morning,",
              "nice",
              "to",
              "meet",
              "you."
            ],
            "answer": [
              "Good",
              "morning,",
              "nice",
              "to",
              "meet",
              "you."
            ],
            "hint": "✔ সঠিক বাক্য: Good morning, nice to meet you."
          },
          {
            "id": "mod_1_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "See you tomorrow",
            "options": [
              "See you tomorrow",
              "Good night friend",
              "How is it going",
              "Welcome to my office"
            ],
            "answer": "See you tomorrow",
            "hint": "See you tomorrow = আগামীকাল দেখা হবে"
          },
          {
            "id": "mod_1_l1_q4",
            "type": "matching",
            "prompt": "সঠিক জোড়া মেলাও:",
            "pairs": [
              {
                "en": "Welcome",
                "bn": "স্বাগতম"
              },
              {
                "en": "Thank you",
                "bn": "ধন্যবাদ"
              },
              {
                "en": "Goodbye",
                "bn": "বিদায়"
              },
              {
                "en": "Please",
                "bn": "দয়া করে"
              }
            ]
          }
        ]
      },
      {
        "id": "mod_1_l2",
        "moduleId": "mod_1",
        "title": "নিজের পরিচয় দেওয়া (Self Introduction)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_1_l2_q1",
            "type": "mcq",
            "prompt": "Choose the correct translation for 'আমি একজন ছাত্র':",
            "options": [
              "I am a student.",
              "I am a teacher.",
              "He is a student.",
              "We are students."
            ],
            "answer": "I am a student.",
            "hint": "Student = ছাত্র / ছাত্রী"
          },
          {
            "id": "mod_1_l2_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমার নাম হাসান এবং আমি বাংলাদেশে থাকি।",
            "words": [
              "My",
              "name",
              "is",
              "Hasan",
              "and",
              "I",
              "live",
              "in",
              "Bangladesh."
            ],
            "answer": [
              "My",
              "name",
              "is",
              "Hasan",
              "and",
              "I",
              "live",
              "in",
              "Bangladesh."
            ],
            "hint": "✔ সঠিক বাক্য: My name is Hasan and I live in Bangladesh."
          },
          {
            "id": "mod_1_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Nice to meet you",
            "options": [
              "Nice to meet you",
              "How old are you",
              "Where do you live",
              "Have a nice day"
            ],
            "answer": "Nice to meet you",
            "hint": "Nice to meet you = দেখা হয়ে ভালো লাগল"
          }
        ]
      },
      {
        "id": "mod_1_l3",
        "moduleId": "mod_1",
        "title": "সৌজন্য ও বিদায় (Courtesies & Farewell)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_1_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আপনার দিনটি শুভ হোক।",
            "words": [
              "Have",
              "a",
              "nice",
              "day."
            ],
            "answer": [
              "Have",
              "a",
              "nice",
              "day."
            ],
            "hint": "✔ সঠিক বাক্য: Have a nice day."
          },
          {
            "id": "mod_1_l3_q2",
            "type": "mcq",
            "prompt": "'You are welcome' এর সঠিক বাংলা অর্থ কী?",
            "options": [
              "আপনাকে স্বাগতম",
              "ধন্যবাদ",
              "বিদায়",
              "মাফ করবেন"
            ],
            "answer": "আপনাকে স্বাগতম",
            "hint": "ধন্যবাদ দিলে প্রতিউত্তরে 'You are welcome' বলতে হয়।"
          },
          {
            "id": "mod_1_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Thank you for your help.",
            "options": [
              "Thank you for your help.",
              "I need your help.",
              "Where is my help?",
              "Help me please."
            ],
            "answer": "Thank you for your help.",
            "hint": "Thank you for your help = আপনার সাহায্যের জন্য ধন্যবাদ।"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_2",
    "stageId": "A1",
    "stageName": "স্তর ১: প্রারম্ভিক",
    "title": "২. পরিবার ও আত্মীয়স্বজন (Family & Relatives)",
    "desc": "বাবা, মা, ভাই, বোন, আত্মীয়স্বজন ও পারিবারিক জীবন",
    "icon": "👨‍👩‍👧‍👦",
    "bg": "from-sky-600 to-blue-600",
    "kind": "core",
    "kindNo": 2,
    "lessons": [
      {
        "id": "mod_2_l1",
        "moduleId": "mod_2",
        "title": "পরিবারের সদস্যবৃন্দ (Family Members)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_2_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমার পরিবারে চারজন সদস্য আছেন।",
            "words": [
              "There",
              "are",
              "four",
              "members",
              "in",
              "my",
              "family."
            ],
            "answer": [
              "There",
              "are",
              "four",
              "members",
              "in",
              "my",
              "family."
            ],
            "hint": "✔ সঠিক বাক্য: There are four members in my family."
          },
          {
            "id": "mod_2_l1_q2",
            "type": "mcq",
            "prompt": "'Father' এবং 'Mother' এর সঠিক বাংলা কী?",
            "options": [
              "বাবা এবং মা",
              "ভাই এবং বোন",
              "চাচা এবং চাচি",
              "দাদা এবং দাদি"
            ],
            "answer": "বাবা এবং মা",
            "hint": "Father = বাবা, Mother = মা"
          },
          {
            "id": "mod_2_l1_q3",
            "type": "matching",
            "prompt": "পরিবারের সম্পর্ক মেলাও:",
            "pairs": [
              {
                "en": "Father",
                "bn": "বাবা"
              },
              {
                "en": "Mother",
                "bn": "মা"
              },
              {
                "en": "Brother",
                "bn": "ভাই"
              },
              {
                "en": "Sister",
                "bn": "বোন"
              }
            ]
          }
        ]
      },
      {
        "id": "mod_2_l2",
        "moduleId": "mod_2",
        "title": "আত্মীয়স্বজন ও সম্পর্ক (Relatives & Kin)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_2_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমরা প্রতি শুক্রবার দাদা-দাদির বাড়ি যাই।",
            "words": [
              "We",
              "visit",
              "our",
              "grandparents",
              "every",
              "Friday."
            ],
            "answer": [
              "We",
              "visit",
              "our",
              "grandparents",
              "every",
              "Friday."
            ],
            "hint": "✔ সঠিক বাক্য: We visit our grandparents every Friday."
          },
          {
            "id": "mod_2_l2_q2",
            "type": "mcq",
            "prompt": "'He has two children' এর অর্থ কী?",
            "options": [
              "তার দুটি সন্তান আছে।",
              "তার দুটি ভাই আছে।",
              "সে স্কুলে যায়।",
              "তারা খেলছে।"
            ],
            "answer": "তার দুটি সন্তান আছে।",
            "hint": "Children = সন্তান সন্ততি"
          },
          {
            "id": "mod_2_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "My family is very close.",
            "options": [
              "My family is very close.",
              "My house is far away.",
              "We love our school.",
              "He lives alone."
            ],
            "answer": "My family is very close.",
            "hint": "Close = আন্তরিক বা ঘনিষ্ঠ"
          }
        ]
      },
      {
        "id": "mod_2_l3",
        "moduleId": "mod_2",
        "title": "পিতামাতার পেশা ও পরিচয় (Parents & Occupations)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_2_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমার বাবা একটি ব্যাংকে চাকরি করেন।",
            "words": [
              "My",
              "father",
              "works",
              "in",
              "a",
              "bank."
            ],
            "answer": [
              "My",
              "father",
              "works",
              "in",
              "a",
              "bank."
            ],
            "hint": "✔ সঠিক বাক্য: My father works in a bank."
          },
          {
            "id": "mod_2_l3_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমার মা খুব সুস্বাদু রান্না করেন।",
            "words": [
              "My",
              "mother",
              "cooks",
              "very",
              "well."
            ],
            "answer": [
              "My",
              "mother",
              "cooks",
              "very",
              "well."
            ],
            "hint": "✔ সঠিক বাক্য: My mother cooks very well."
          },
          {
            "id": "mod_2_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Do you have any brothers or sisters?",
            "options": [
              "Do you have any brothers or sisters?",
              "Where are your parents going?",
              "Is this your house?",
              "What is your father doing?"
            ],
            "answer": "Do you have any brothers or sisters?",
            "hint": "Brothers or sisters = ভাই অথবা বোন"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_3",
    "stageId": "A1",
    "stageName": "স্তর ১: প্রারম্ভিক",
    "title": "৩. সংখ্যা, দিন ও সময় (Numbers, Days & Time)",
    "desc": "সংখ্যা গণনা, সপ্তাহের ৭ দিন, ১২ মাস ও সময় বলা",
    "icon": "🔢",
    "bg": "from-blue-500 to-cyan-600",
    "kind": "core",
    "kindNo": 3,
    "lessons": [
      {
        "id": "mod_3_l1",
        "moduleId": "mod_3",
        "title": "সংখ্যা ও গণনা (Numbers 1-100)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_3_l1_q1",
            "type": "mcq",
            "prompt": "'Twenty-five' এর সংখ্যা কত?",
            "options": [
              "২৫",
              "৩৫",
              "১৫",
              "৫২"
            ],
            "answer": "২৫",
            "hint": "Twenty = ২০, Five = ৫ -> ২৫"
          },
          {
            "id": "mod_3_l1_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমার কাছে তিনটি নতুন বই আছে।",
            "words": [
              "I",
              "have",
              "three",
              "new",
              "books."
            ],
            "answer": [
              "I",
              "have",
              "three",
              "new",
              "books."
            ],
            "hint": "✔ সঠিক বাক্য: I have three new books."
          },
          {
            "id": "mod_3_l1_q3",
            "type": "mcq",
            "prompt": "'One hundred' মানে কত?",
            "options": [
              "১০০",
              "১০০০",
              "১০",
              "৫০"
            ],
            "answer": "১০০",
            "hint": "Hundred = শত / একশত"
          }
        ]
      },
      {
        "id": "mod_3_l2",
        "moduleId": "mod_3",
        "title": "বার ও মাস (Days of Week & Months)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_3_l2_q1",
            "type": "matching",
            "prompt": "বার ও অর্থ মেলাও:",
            "pairs": [
              {
                "en": "Monday",
                "bn": "সোমবার"
              },
              {
                "en": "Friday",
                "bn": "শুক্রবার"
              },
              {
                "en": "Sunday",
                "bn": "রবিবার"
              },
              {
                "en": "Wednesday",
                "bn": "বুধবার"
              }
            ]
          },
          {
            "id": "mod_3_l2_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আজকে বুধবার এবং আগামীকাল বৃহস্পতিবার।",
            "words": [
              "Today",
              "is",
              "Wednesday",
              "and",
              "tomorrow",
              "is",
              "Thursday."
            ],
            "answer": [
              "Today",
              "is",
              "Wednesday",
              "and",
              "tomorrow",
              "is",
              "Thursday."
            ],
            "hint": "✔ সঠিক বাক্য: Today is Wednesday and tomorrow is Thursday."
          },
          {
            "id": "mod_3_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "My birthday is next month.",
            "options": [
              "My birthday is next month.",
              "The exam is tomorrow.",
              "Today is a holiday.",
              "See you next week."
            ],
            "answer": "My birthday is next month.",
            "hint": "Next month = আগামী মাসে"
          }
        ]
      },
      {
        "id": "mod_3_l3",
        "moduleId": "mod_3",
        "title": "ঘড়ির সময় বলা (Telling Time)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_3_l3_q1",
            "type": "mcq",
            "prompt": "'What time is it?' দিয়ে কী বোঝায়?",
            "options": [
              "কয়টা বাজে?",
              "আপনি কখন যাবেন?",
              "আজ কী বার?",
              "দেরি হলো কেন?"
            ],
            "answer": "কয়টা বাজে?",
            "hint": "What time is it? = এখন সময় কত?"
          },
          {
            "id": "mod_3_l3_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এখন সাড়ে পাঁচটা বাজে।",
            "words": [
              "It",
              "is",
              "half",
              "past",
              "five."
            ],
            "answer": [
              "It",
              "is",
              "half",
              "past",
              "five."
            ],
            "hint": "✔ সঠিক বাক্য: It is half past five."
          },
          {
            "id": "mod_3_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Please come on time.",
            "options": [
              "Please come on time.",
              "I have no time.",
              "See you at five.",
              "What time is it?"
            ],
            "answer": "Please come on time.",
            "hint": "On time = সময়মতো"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_4",
    "stageId": "A1",
    "stageName": "স্তর ১: প্রারম্ভিক",
    "title": "৪. বাড়ি ও আসবাবপত্র (Home & Furniture)",
    "desc": "ঘর-বাড়ি, দরজা-জানালা, আসবাবপত্র ও রুমের বর্ণনা",
    "icon": "🏠",
    "bg": "from-cyan-600 to-teal-600",
    "kind": "core",
    "kindNo": 4,
    "lessons": [
      {
        "id": "mod_4_l1",
        "moduleId": "mod_4",
        "title": "ঘরের বিভিন্ন অংশ (Rooms of House)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_4_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমাদের বাড়িতে তিনটি শোবার ঘর আছে।",
            "words": [
              "Our",
              "house",
              "has",
              "three",
              "bedrooms."
            ],
            "answer": [
              "Our",
              "house",
              "has",
              "three",
              "bedrooms."
            ],
            "hint": "✔ সঠিক বাক্য: Our house has three bedrooms."
          },
          {
            "id": "mod_4_l1_q2",
            "type": "mcq",
            "prompt": "'Kitchen' মানে কোন ঘর?",
            "options": [
              "রান্নাঘর",
              "শোবার ঘর",
              "বাথরুম",
              "বসার ঘর"
            ],
            "answer": "রান্নাঘর",
            "hint": "Kitchen = রান্নাঘর"
          },
          {
            "id": "mod_4_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Please close the door.",
            "options": [
              "Please close the door.",
              "Open the window.",
              "Turn on the light.",
              "Clean the floor."
            ],
            "answer": "Please close the door.",
            "hint": "Close the door = দরজা বন্ধ করুন"
          }
        ]
      },
      {
        "id": "mod_4_l2",
        "moduleId": "mod_4",
        "title": "আসবাবপত্র ও জিনিসপত্র (Furniture & Objects)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_4_l2_q1",
            "type": "matching",
            "prompt": "আসবাবপত্র মেলাও:",
            "pairs": [
              {
                "en": "Table",
                "bn": "টেবিল"
              },
              {
                "en": "Chair",
                "bn": "চেয়ার"
              },
              {
                "en": "Bed",
                "bn": "বিছানা"
              },
              {
                "en": "Mirror",
                "bn": "আয়না"
              }
            ]
          },
          {
            "id": "mod_4_l2_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: দয়া করে খাবার টেবিলটি পরিষ্কার করুন।",
            "words": [
              "Please",
              "clean",
              "the",
              "dining",
              "table."
            ],
            "answer": [
              "Please",
              "clean",
              "the",
              "dining",
              "table."
            ],
            "hint": "✔ সঠিক বাক্য: Please clean the dining table."
          },
          {
            "id": "mod_4_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Turn on the light.",
            "options": [
              "Turn on the light.",
              "Turn off the fan.",
              "Open the window.",
              "Close the door."
            ],
            "answer": "Turn on the light.",
            "hint": "Turn on = চালু করা"
          }
        ]
      },
      {
        "id": "mod_4_l3",
        "moduleId": "mod_4",
        "title": "বাড়ি সংক্রান্ত জরুরি পরিস্থিতি (Home Emergencies)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_4_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বিদ্যুৎ চলে গেছে একটি মোমবাতি জ্বালান।",
            "words": [
              "The",
              "electricity",
              "is",
              "gone",
              "light",
              "a",
              "candle."
            ],
            "answer": [
              "The",
              "electricity",
              "is",
              "gone",
              "light",
              "a",
              "candle."
            ],
            "hint": "✔ সঠিক বাক্য: The electricity is gone light a candle."
          },
          {
            "id": "mod_4_l3_q2",
            "type": "mcq",
            "prompt": "'Turn off the fan' এর সঠিক অর্থ কী?",
            "options": [
              "ফ্যান বন্ধ করুন",
              "ফ্যান চালু করুন",
              "ফ্যান পরিষ্কার করুন",
              "ফ্যান ঠিক করুন"
            ],
            "answer": "ফ্যান বন্ধ করুন",
            "hint": "Turn off = বন্ধ করা"
          },
          {
            "id": "mod_4_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Where did you put the key?",
            "options": [
              "Where did you put the key?",
              "Did you lock the door?",
              "The room is very clean.",
              "I am at home."
            ],
            "answer": "Where did you put the key?",
            "hint": "Key = চাবি"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_5",
    "stageId": "A1",
    "stageName": "স্তর ১: প্রারম্ভিক",
    "title": "৫. খাবার ও দৈনন্দিন আহার (Food & Everyday Meals)",
    "desc": "ভাত, রুটি, মাছ, মাংস, চা-কফি ও দৈনন্দিন খাবার",
    "icon": "🍛",
    "bg": "from-teal-500 to-emerald-600",
    "kind": "core",
    "kindNo": 5,
    "lessons": [
      {
        "id": "mod_5_l1",
        "moduleId": "mod_5",
        "title": "প্রধান খাবারসমূহ (Staple Foods)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_5_l1_q1",
            "type": "matching",
            "prompt": "খাবার মেলাও:",
            "pairs": [
              {
                "en": "Rice",
                "bn": "ভাত"
              },
              {
                "en": "Water",
                "bn": "পানি"
              },
              {
                "en": "Milk",
                "bn": "দুধ"
              },
              {
                "en": "Bread",
                "bn": "রুটি"
              }
            ]
          },
          {
            "id": "mod_5_l1_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমি সকালে ডিম ও রুটি খাই।",
            "words": [
              "I",
              "eat",
              "eggs",
              "and",
              "bread",
              "in",
              "the",
              "morning."
            ],
            "answer": [
              "I",
              "eat",
              "eggs",
              "and",
              "bread",
              "in",
              "the",
              "morning."
            ],
            "hint": "✔ সঠিক বাক্য: I eat eggs and bread in the morning."
          },
          {
            "id": "mod_5_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "I am very hungry.",
            "options": [
              "I am very hungry.",
              "The food is spicy.",
              "Bring me some water.",
              "What do you want?"
            ],
            "answer": "I am very hungry.",
            "hint": "Hungry = ক্ষুধার্ত"
          }
        ]
      },
      {
        "id": "mod_5_l2",
        "moduleId": "mod_5",
        "title": "চা-কফি ও স্ন্যাক্স (Tea, Coffee & Snacks)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_5_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমি সাধারণত সন্ধ্যায় এক কাপ রং চা খাই।",
            "words": [
              "I",
              "usually",
              "drink",
              "black",
              "tea",
              "in",
              "the",
              "evening."
            ],
            "answer": [
              "I",
              "usually",
              "drink",
              "black",
              "tea",
              "in",
              "the",
              "evening."
            ],
            "hint": "✔ সঠিক বাক্য: I usually drink black tea in the evening."
          },
          {
            "id": "mod_5_l2_q2",
            "type": "mcq",
            "prompt": "'Delicious' শব্দের সঠিক অর্থ কী?",
            "options": [
              "সুস্বাদু",
              "ঝাল",
              "মিষ্টি",
              "তেতো"
            ],
            "answer": "সুস্বাদু",
            "hint": "Delicious = অত্যন্ত সুস্বাদু"
          },
          {
            "id": "mod_5_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Please bring me a glass of water.",
            "options": [
              "Please bring me a glass of water.",
              "I would like a cup of tea.",
              "Can I have the menu?",
              "The soup is cold."
            ],
            "answer": "Please bring me a glass of water.",
            "hint": "Glass of water = এক গ্লাস পানি"
          }
        ]
      },
      {
        "id": "mod_5_l3",
        "moduleId": "mod_5",
        "title": "খাবারের স্বাদ ও সতর্কতা (Flavors & Preferences)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_5_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমি বেশি ঝাল খাবার খেতে পারি না।",
            "words": [
              "I",
              "cannot",
              "eat",
              "very",
              "spicy",
              "food."
            ],
            "answer": [
              "I",
              "cannot",
              "eat",
              "very",
              "spicy",
              "food."
            ],
            "hint": "✔ সঠিক বাক্য: I cannot eat very spicy food."
          },
          {
            "id": "mod_5_l3_q2",
            "type": "mcq",
            "prompt": "'I am allergic to peanuts' এর অর্থ কী?",
            "options": [
              "বাদামে আমার অ্যালার্জি আছে।",
              "আমি বাদাম পছন্দ করি।",
              "বাদাম খুব সুস্বাদু।",
              "আমার বাদাম চাই।"
            ],
            "answer": "বাদামে আমার অ্যালার্জি আছে।",
            "hint": "Allergic = অ্যালার্জি থাকা"
          },
          {
            "id": "mod_5_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "This soup is too hot.",
            "options": [
              "This soup is too hot.",
              "The food is delicious.",
              "We are eating dinner.",
              "Can I have more rice?"
            ],
            "answer": "This soup is too hot.",
            "hint": "Too hot = অতিরিক্ত গরম"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_6",
    "stageId": "A1",
    "stageName": "স্তর ১: প্রারম্ভিক",
    "title": "৬. রঙ, আকার ও শারীরিক বৈশিষ্ট্য (Colors & Shapes)",
    "desc": "রঙের নাম, আকার-আকৃতি, লম্বা-খাটো ও সাধারণ বৈশিষ্ট্য",
    "icon": "🎨",
    "bg": "from-emerald-500 to-green-600",
    "kind": "core",
    "kindNo": 6,
    "lessons": [
      {
        "id": "mod_6_l1",
        "moduleId": "mod_6",
        "title": "রঙের বৈচিত্র্য (Colors Spectrum)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_6_l1_q1",
            "type": "matching",
            "prompt": "রঙ মেলাও:",
            "pairs": [
              {
                "en": "Red",
                "bn": "লাল"
              },
              {
                "en": "Green",
                "bn": "সবুজ"
              },
              {
                "en": "Blue",
                "bn": "নীল"
              },
              {
                "en": "Yellow",
                "bn": "হলুদ"
              }
            ]
          },
          {
            "id": "mod_6_l1_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমার একটি নীল রঙের শার্ট আছে।",
            "words": [
              "I",
              "have",
              "a",
              "blue",
              "shirt."
            ],
            "answer": [
              "I",
              "have",
              "a",
              "blue",
              "shirt."
            ],
            "hint": "✔ সঠিক বাক্য: I have a blue shirt."
          },
          {
            "id": "mod_6_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "White is a peaceful color.",
            "options": [
              "White is a peaceful color.",
              "Black shoes are nice.",
              "The sky is blue.",
              "I like red roses."
            ],
            "answer": "White is a peaceful color.",
            "hint": "White = সাদা"
          }
        ]
      },
      {
        "id": "mod_6_l2",
        "moduleId": "mod_6",
        "title": "আকার ও গুণাবলী (Shapes & Sizes)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_6_l2_q1",
            "type": "mcq",
            "prompt": "'Big' এর বিপরীত শব্দ কোনটি?",
            "options": [
              "Small",
              "Tall",
              "Long",
              "Fast"
            ],
            "answer": "Small",
            "hint": "Big (বড়) এর বিপরীত Small (ছোট)"
          },
          {
            "id": "mod_6_l2_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সে একজন লম্বা এবং শক্তিশালী মানুষ।",
            "words": [
              "He",
              "is",
              "a",
              "tall",
              "and",
              "strong",
              "man."
            ],
            "answer": [
              "He",
              "is",
              "a",
              "tall",
              "and",
              "strong",
              "man."
            ],
            "hint": "✔ সঠিক বাক্য: He is a tall and strong man."
          },
          {
            "id": "mod_6_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "This is a heavy box.",
            "options": [
              "This is a heavy box.",
              "The box is empty.",
              "I need a small table.",
              "The line is straight."
            ],
            "answer": "This is a heavy box.",
            "hint": "Heavy = ভারী"
          }
        ]
      },
      {
        "id": "mod_6_l3",
        "moduleId": "mod_6",
        "title": "বিপরীত শব্দ জোড় (Common Opposites)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_6_l3_q1",
            "type": "matching",
            "prompt": "বিপরীত জোড়া মেলাও:",
            "pairs": [
              {
                "en": "Hot",
                "bn": "Cold"
              },
              {
                "en": "Easy",
                "bn": "Difficult"
              },
              {
                "en": "Clean",
                "bn": "Dirty"
              },
              {
                "en": "Fast",
                "bn": "Slow"
              }
            ]
          },
          {
            "id": "mod_6_l3_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই কাজটি খুবই সহজ কিন্তু গুরুত্বপূর্ণ।",
            "words": [
              "This",
              "task",
              "is",
              "very",
              "easy",
              "but",
              "important."
            ],
            "answer": [
              "This",
              "task",
              "is",
              "very",
              "easy",
              "but",
              "important."
            ],
            "hint": "✔ সঠিক বাক্য: This task is very easy but important."
          },
          {
            "id": "mod_6_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Is this answer right or wrong?",
            "options": [
              "Is this answer right or wrong?",
              "The room is very quiet.",
              "I am ready now.",
              "Everything is true."
            ],
            "answer": "Is this answer right or wrong?",
            "hint": "Right or wrong = সঠিক নাকি ভুল"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_7",
    "stageId": "A1",
    "stageName": "স্তর ১: প্রারম্ভিক",
    "title": "৭. দৈনন্দিন মৌলিক ক্রিয়াকলাপ (Daily Basic Actions)",
    "desc": "ঘুম থেকে ওঠা, হাঁটা, কথা বলা, পড়া ও লেখা",
    "icon": "🚶‍♂️",
    "bg": "from-green-600 to-lime-600",
    "kind": "core",
    "kindNo": 7,
    "lessons": [
      {
        "id": "mod_7_l1",
        "moduleId": "mod_7",
        "title": "সকালের কাজ (Morning Routine Actions)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_7_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমি প্রতিদিন সকাল ছয়টায় ঘুম থেকে উঠি।",
            "words": [
              "I",
              "wake",
              "up",
              "at",
              "six",
              "every",
              "day."
            ],
            "answer": [
              "I",
              "wake",
              "up",
              "at",
              "six",
              "every",
              "day."
            ],
            "hint": "✔ সঠিক বাক্য: I wake up at six every day."
          },
          {
            "id": "mod_7_l1_q2",
            "type": "mcq",
            "prompt": "'Brush your teeth' এর অর্থ কী?",
            "options": [
              "দাঁত ব্রাশ করা",
              "মুখ ধোয়া",
              "গোসল করা",
              "ঘুমাতে যাওয়া"
            ],
            "answer": "দাঁত ব্রাশ করা",
            "hint": "Brush teeth = দাঁত মাজা"
          },
          {
            "id": "mod_7_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "I wash my hands and face.",
            "options": [
              "I wash my hands and face.",
              "I brush my hair.",
              "I drink a cup of tea.",
              "I eat my breakfast."
            ],
            "answer": "I wash my hands and face.",
            "hint": "Hands and face = হাত ও মুখ"
          }
        ]
      },
      {
        "id": "mod_7_l2",
        "moduleId": "mod_7",
        "title": "কথা বলা ও শোনা (Speaking & Listening)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_7_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সে খুব ধীরে এবং স্পষ্টভাবে কথা বলে।",
            "words": [
              "She",
              "speaks",
              "very",
              "slowly",
              "and",
              "clearly."
            ],
            "answer": [
              "She",
              "speaks",
              "very",
              "slowly",
              "and",
              "clearly."
            ],
            "hint": "✔ সঠিক বাক্য: She speaks very slowly and clearly."
          },
          {
            "id": "mod_7_l2_q2",
            "type": "mcq",
            "prompt": "'Listen' এবং 'Hear' এর মধ্যে কোনটি মনোযোগ দিয়ে শোনা?",
            "options": [
              "Listen",
              "Hear",
              "Speak",
              "Tell"
            ],
            "answer": "Listen",
            "hint": "মনোযোগ দিয়ে শোনার ক্ষেত্রে Listen ব্যবহার করা হয়।"
          },
          {
            "id": "mod_7_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Please listen to me carefully.",
            "options": [
              "Please listen to me carefully.",
              "Speak a little louder.",
              "I cannot hear you.",
              "Can you hear my voice?"
            ],
            "answer": "Please listen to me carefully.",
            "hint": "Carefully = সতর্কতার সাথে"
          }
        ]
      },
      {
        "id": "mod_7_l3",
        "moduleId": "mod_7",
        "title": "পড়াশোনা ও বোঝা (Reading & Understanding)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_7_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমি ইংরেজি পত্রিকা পড়তে পছন্দ করি।",
            "words": [
              "I",
              "like",
              "to",
              "read",
              "English",
              "newspapers."
            ],
            "answer": [
              "I",
              "like",
              "to",
              "read",
              "English",
              "newspapers."
            ],
            "hint": "✔ সঠিক বাক্য: I like to read English newspapers."
          },
          {
            "id": "mod_7_l3_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমি বিষয়টি সম্পূর্ণ বুঝতে পেরেছি।",
            "words": [
              "I",
              "understand",
              "the",
              "matter",
              "completely."
            ],
            "answer": [
              "I",
              "understand",
              "the",
              "matter",
              "completely."
            ],
            "hint": "✔ সঠিক বাক্য: I understand the matter completely."
          },
          {
            "id": "mod_7_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Practice makes a man perfect.",
            "options": [
              "Practice makes a man perfect.",
              "Knowledge is power.",
              "Time is money.",
              "Actions speak louder."
            ],
            "answer": "Practice makes a man perfect.",
            "hint": "Practice = নিয়মিত অনুশীলন"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_8",
    "stageId": "A1",
    "stageName": "স্তর ১: প্রারম্ভিক",
    "title": "৮. শহরের স্থান ও পথ খোঁজা (City Places & Directions)",
    "desc": "ব্যাংক, স্কুল, হাসপাতাল, দিকনির্দেশনা ও অবস্থান",
    "icon": "🏙️",
    "bg": "from-lime-600 to-amber-600",
    "kind": "core",
    "kindNo": 8,
    "lessons": [
      {
        "id": "mod_8_l1",
        "moduleId": "mod_8",
        "title": "শহরের প্রধান স্থান (City Landmarks)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_8_l1_q1",
            "type": "matching",
            "prompt": "স্থানের নাম মেলাও:",
            "pairs": [
              {
                "en": "Hospital",
                "bn": "হাসপাতাল"
              },
              {
                "en": "Bank",
                "bn": "ব্যাংক"
              },
              {
                "en": "School",
                "bn": "বিদ্যালয়"
              },
              {
                "en": "Market",
                "bn": "বাজার"
              }
            ]
          },
          {
            "id": "mod_8_l1_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: কাছের হাসপাতালটি কোন দিকে?",
            "words": [
              "Which",
              "way",
              "is",
              "the",
              "nearest",
              "hospital?"
            ],
            "answer": [
              "Which",
              "way",
              "is",
              "the",
              "nearest",
              "hospital?"
            ],
            "hint": "✔ সঠিক বাক্য: Which way is the nearest hospital?"
          },
          {
            "id": "mod_8_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Where is the central pharmacy?",
            "options": [
              "Where is the central pharmacy?",
              "The hospital is far away.",
              "Turn right at the corner.",
              "Is it within walking distance?"
            ],
            "answer": "Where is the central pharmacy?",
            "hint": "Central pharmacy = কেন্দ্রীয় ফার্মেসি"
          }
        ]
      },
      {
        "id": "mod_8_l2",
        "moduleId": "mod_8",
        "title": "রাস্তা ও দিকনির্দেশনা (Giving Directions)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_8_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সোজা এগিয়ে যান এবং মোড়ে ডানে ঘুরুন।",
            "words": [
              "Go",
              "straight",
              "ahead",
              "and",
              "turn",
              "right",
              "at",
              "the",
              "corner."
            ],
            "answer": [
              "Go",
              "straight",
              "ahead",
              "and",
              "turn",
              "right",
              "at",
              "the",
              "corner."
            ],
            "hint": "✔ সঠিক বাক্য: Go straight ahead and turn right at the corner."
          },
          {
            "id": "mod_8_l2_q2",
            "type": "mcq",
            "prompt": "'Turn left' এর অর্থ কী?",
            "options": [
              "বামে ঘুরুন",
              "ডানে ঘুরুন",
              "সোজা যান",
              "পেছনে তাকান"
            ],
            "answer": "বামে ঘুরুন",
            "hint": "Left = বাম দিক"
          },
          {
            "id": "mod_8_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "It is on your left hand side.",
            "options": [
              "It is on your left hand side.",
              "Go straight for two hundred meters.",
              "Cross the road carefully.",
              "It takes five minutes on foot."
            ],
            "answer": "It is on your left hand side.",
            "hint": "Left hand side = বাম পাশে"
          }
        ]
      },
      {
        "id": "mod_8_l3",
        "moduleId": "mod_8",
        "title": "দূরত্ব ও পৌঁছানো (Distance & Transit)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_8_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এখান থেকে হেঁটে যেতে কতক্ষণ লাগে?",
            "words": [
              "How",
              "long",
              "does",
              "it",
              "take",
              "on",
              "foot",
              "from",
              "here?"
            ],
            "answer": [
              "How",
              "long",
              "does",
              "it",
              "take",
              "on",
              "foot",
              "from",
              "here?"
            ],
            "hint": "✔ সঠিক বাক্য: How long does it take on foot from here?"
          },
          {
            "id": "mod_8_l3_q2",
            "type": "mcq",
            "prompt": "'Near' এবং 'Far' এর অর্থ কী?",
            "options": [
              "নিকট এবং দূর",
              "সোজা এবং বাঁকা",
              "বড় এবং ছোট",
              "আগে এবং পরে"
            ],
            "answer": "নিকট এবং দূর",
            "hint": "Near = কাছে, Far = দূরে"
          },
          {
            "id": "mod_8_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "It takes only five minutes on foot.",
            "options": [
              "It takes only five minutes on foot.",
              "The market is very crowded.",
              "Take a rickshaw or a bus.",
              "Turn right after the signal."
            ],
            "answer": "It takes only five minutes on foot.",
            "hint": "On foot = পায়ে হেঁটে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_9",
    "stageId": "A1",
    "stageName": "স্তর ১: প্রারম্ভিক",
    "title": "৯. অনুভূতি, সুখ ও দুঃখ (Feelings & Emotions)",
    "desc": "সুখী, ক্লান্ত, নার্ভাস, কৃতজ্ঞ, রাগ ও মানসিক অবস্থা",
    "icon": "😊",
    "bg": "from-amber-500 to-orange-600",
    "kind": "core",
    "kindNo": 9,
    "lessons": [
      {
        "id": "mod_9_l1",
        "moduleId": "mod_9",
        "title": "ইতিবাচক অনুভূতি (Positive Feelings)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_9_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আজকে আমি খুব খুশি এবং আনন্দিত।",
            "words": [
              "Today",
              "I",
              "am",
              "very",
              "happy",
              "and",
              "joyful."
            ],
            "answer": [
              "Today",
              "I",
              "am",
              "very",
              "happy",
              "and",
              "joyful."
            ],
            "hint": "✔ সঠিক বাক্য: Today I am very happy and joyful."
          },
          {
            "id": "mod_9_l1_q2",
            "type": "mcq",
            "prompt": "'Grateful' শব্দের সঠিক বাংলা অর্থ কী?",
            "options": [
              "কৃতজ্ঞ",
              "রাগান্বিত",
              "ভীত",
              "বিস্মিত"
            ],
            "answer": "কৃতজ্ঞ",
            "hint": "Grateful = কৃতজ্ঞ / ধন্যবাদশীল"
          },
          {
            "id": "mod_9_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "I am proud of your achievement.",
            "options": [
              "I am proud of your achievement.",
              "I feel very tired today.",
              "Do not be shy at all.",
              "We are really excited."
            ],
            "answer": "I am proud of your achievement.",
            "hint": "Proud = গর্বিত"
          }
        ]
      },
      {
        "id": "mod_9_l2",
        "moduleId": "mod_9",
        "title": "ক্লান্তি ও মানসিক চাপ (Tiredness & Stress)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_9_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সারাদিন কাজের পর আমি বেশ ক্লান্ত।",
            "words": [
              "After",
              "working",
              "all",
              "day",
              "I",
              "am",
              "quite",
              "tired."
            ],
            "answer": [
              "After",
              "working",
              "all",
              "day",
              "I",
              "am",
              "quite",
              "tired."
            ],
            "hint": "✔ সঠিক বাক্য: After working all day I am quite tired."
          },
          {
            "id": "mod_9_l2_q2",
            "type": "mcq",
            "prompt": "'Nervous' বোধ করলে কী বলা উচিত?",
            "options": [
              "I feel nervous.",
              "I feel hungry.",
              "I feel angry.",
              "I am happy."
            ],
            "answer": "I feel nervous.",
            "hint": "Nervous = ঘাবড়ে যাওয়া / চিন্তিত"
          },
          {
            "id": "mod_9_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Take a deep breath and relax.",
            "options": [
              "Take a deep breath and relax.",
              "Do not lose your temper.",
              "I feel much better now.",
              "She was surprised by the news."
            ],
            "answer": "Take a deep breath and relax.",
            "hint": "Deep breath = গভীর শ্বাস"
          }
        ]
      },
      {
        "id": "mod_9_l3",
        "moduleId": "mod_9",
        "title": "রাগ ও সান্ত্বনা (Anger & Comfort)",
        "xp": 20,
        "isExam": false,
        "questions": [
          {
            "id": "mod_9_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: চিন্তা করবেন না সবকিছু ঠিক হয়ে যাবে।",
            "words": [
              "Do",
              "not",
              "worry",
              "everything",
              "will",
              "be",
              "fine."
            ],
            "answer": [
              "Do",
              "not",
              "worry",
              "everything",
              "will",
              "be",
              "fine."
            ],
            "hint": "✔ সঠিক বাক্য: Do not worry everything will be fine."
          },
          {
            "id": "mod_9_l3_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: ধৈর্য ধরুন শান্ত মস্তিষ্কে সিদ্ধান্ত নিন।",
            "words": [
              "Be",
              "patient",
              "and",
              "decide",
              "with",
              "a",
              "calm",
              "mind."
            ],
            "answer": [
              "Be",
              "patient",
              "and",
              "decide",
              "with",
              "a",
              "calm",
              "mind."
            ],
            "hint": "✔ সঠিক বাক্য: Be patient and decide with a calm mind."
          },
          {
            "id": "mod_9_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Cheer up, better days are coming.",
            "options": [
              "Cheer up, better days are coming.",
              "I am so angry with you.",
              "Why are you so quiet?",
              "You can count on me."
            ],
            "answer": "Cheer up, better days are coming.",
            "hint": "Cheer up = মন ভালো করুন"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_10",
    "stageId": "A1",
    "stageName": "স্তর ১: প্রারম্ভিক",
    "title": "১০. লেভেল A1 চেকপয়েন্ট ও সার্টিফিকেট টেস্ট (Checkpoint A1 Grand Exam)",
    "desc": "A1 স্টেজের পূর্ণাঙ্গ মূল্যায়ন ও দক্ষতা যাচাই পরীক্ষা",
    "icon": "🎓",
    "bg": "from-orange-600 to-rose-600",
    "kind": "core",
    "kindNo": 10,
    "lessons": [
      {
        "id": "mod_10_l1",
        "moduleId": "mod_10",
        "title": "A1 ব্যাকরণ ও অনুবাদ পরীক্ষা (A1 Grammar Exam)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_10_l1_q1",
            "type": "mcq",
            "prompt": "'He is an honest man' এর সঠিক অর্থ কী?",
            "options": [
              "তিনি একজন সৎ ব্যক্তি।",
              "তিনি একজন শিক্ষক।",
              "তিনি আমার ভাই।",
              "তিনি বাড়িতে আছেন।"
            ],
            "answer": "তিনি একজন সৎ ব্যক্তি।",
            "hint": "Honest = সৎ"
          },
          {
            "id": "mod_10_l1_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমরা প্রতিদিন একসাথে বিদ্যালয়ে যাই।",
            "words": [
              "We",
              "go",
              "to",
              "school",
              "together",
              "every",
              "day."
            ],
            "answer": [
              "We",
              "go",
              "to",
              "school",
              "together",
              "every",
              "day."
            ],
            "hint": "✔ সঠিক বাক্য: We go to school together every day."
          },
          {
            "id": "mod_10_l1_q3",
            "type": "mcq",
            "prompt": "'They are happy' - এখানে Subject ও Verb কোনটি?",
            "options": [
              "They হল Subject, are হল Verb",
              "Happy হল Subject",
              "Are হল Object",
              "They হল Adjective"
            ],
            "answer": "They হল Subject, are হল Verb",
            "hint": "They = তারা (Subject), are = হয় (Verb)"
          }
        ]
      },
      {
        "id": "mod_10_l2",
        "moduleId": "mod_10",
        "title": "A1 কথপোকথন ও লিসেনিং কুইজ (A1 Conversation Quiz)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_10_l2_q1",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "What is your father's profession?",
            "options": [
              "What is your father's profession?",
              "Where does your brother live?",
              "How many children do you have?",
              "What time does the class start?"
            ],
            "answer": "What is your father's profession?",
            "hint": "Profession = পেশা"
          },
          {
            "id": "mod_10_l2_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আপনার সাথে কথা বলে আনন্দিত হলাম।",
            "words": [
              "It",
              "was",
              "a",
              "pleasure",
              "talking",
              "with",
              "you."
            ],
            "answer": [
              "It",
              "was",
              "a",
              "pleasure",
              "talking",
              "with",
              "you."
            ],
            "hint": "✔ সঠিক বাক্য: It was a pleasure talking with you."
          },
          {
            "id": "mod_10_l2_q3",
            "type": "matching",
            "prompt": "A1 মাস্টার ম্যাচিং:",
            "pairs": [
              {
                "en": "Welcome",
                "bn": "স্বাগতম"
              },
              {
                "en": "Excuse me",
                "bn": "মাফ করবেন"
              },
              {
                "en": "Never mind",
                "bn": "কিছু মনে করবেন না"
              },
              {
                "en": "Of course",
                "bn": "অবশ্যই"
              }
            ]
          }
        ]
      },
      {
        "id": "mod_10_l3",
        "moduleId": "mod_10",
        "title": "A1 সমাপনী সনদপত্র পরীক্ষা (A1 Final Qualification)",
        "xp": 25,
        "isExam": true,
        "questions": [
          {
            "id": "mod_10_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: ধৈর্য এবং প্রতিদিনের অনুশীলনে ইংরেজি সহজ হয়।",
            "words": [
              "With",
              "patience",
              "and",
              "daily",
              "practice",
              "English",
              "becomes",
              "easy."
            ],
            "answer": [
              "With",
              "patience",
              "and",
              "daily",
              "practice",
              "English",
              "becomes",
              "easy."
            ],
            "hint": "✔ সঠিক বাক্য: With patience and daily practice English becomes easy."
          },
          {
            "id": "mod_10_l3_q2",
            "type": "mcq",
            "prompt": "'Thank you very much' এর উত্তরে কী বলা সবচেয়ে মার্জিত?",
            "options": [
              "You are welcome.",
              "No.",
              "I am fine.",
              "Goodbye."
            ],
            "answer": "You are welcome.",
            "hint": "ধন্যবাদ পেলে ভদ্রভাবে You are welcome বলতে হয়।"
          },
          {
            "id": "mod_10_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Congratulations on passing the A1 exam!",
            "options": [
              "Congratulations on passing the A1 exam!",
              "Good luck with your presentation tomorrow.",
              "Have a safe and pleasant journey.",
              "Welcome back to our English course."
            ],
            "answer": "Congratulations on passing the A1 exam!",
            "hint": "Congratulations = অভিনন্দন"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_11",
    "stageId": "A2",
    "stageName": "স্তর ২: প্রাথমিক",
    "title": "১১. দৈনন্দিন রুটিন ও সময়ানুবর্তিতা (Daily Routine & Habits)",
    "desc": "সকাল থেকে রাত, সপ্তাহের অভ্যাস ও সময়নিষ্ঠা",
    "icon": "⏰",
    "bg": "from-indigo-500 to-indigo-600",
    "kind": "core",
    "kindNo": 11,
    "lessons": [
      {
        "id": "mod_11_l1",
        "moduleId": "mod_11",
        "title": "ভোর থেকে অফিস (Morning to Workplace)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_11_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমি সকালে ত্রিশ মিনিট হাঁটার অভ্যাস করি।",
            "words": [
              "I",
              "practice",
              "walking",
              "for",
              "thirty",
              "minutes",
              "in",
              "the",
              "morning."
            ],
            "answer": [
              "I",
              "practice",
              "walking",
              "for",
              "thirty",
              "minutes",
              "in",
              "the",
              "morning."
            ],
            "hint": "✔ সঠিক বাক্য: I practice walking for thirty minutes in the morning."
          },
          {
            "id": "mod_11_l1_q2",
            "type": "mcq",
            "prompt": "'Rush hours' বলতে কী বোঝায়?",
            "options": [
              "ব্যস্ততম সময় যখন ট্রাফিক জ্যাম বেশি থাকে",
              "ছুটির দিন",
              "ভোরের শান্ত সময়",
              "রাতের খাবার সময়"
            ],
            "answer": "ব্যস্ততম সময় যখন ট্রাফিক জ্যাম বেশি থাকে",
            "hint": "Rush hour = রাস্তায় চরম ভিড় ও ব্যস্ততার সময়"
          },
          {
            "id": "mod_11_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "The traffic is heavy during rush hours.",
            "options": [
              "The traffic is heavy during rush hours.",
              "I reach the office around nine.",
              "We have a short team meeting.",
              "I take a lunch break at one."
            ],
            "answer": "The traffic is heavy during rush hours.",
            "hint": "Heavy traffic = তীব্র যানজট"
          }
        ]
      },
      {
        "id": "mod_11_l2",
        "moduleId": "mod_11",
        "title": "কাজের ফাঁকে ও বিশ্রাম (Midday Break & Habits)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_11_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমি সারা দিন প্রচুর বিশুদ্ধ পানি পান করি।",
            "words": [
              "I",
              "drink",
              "plenty",
              "of",
              "pure",
              "water",
              "throughout",
              "the",
              "day."
            ],
            "answer": [
              "I",
              "drink",
              "plenty",
              "of",
              "pure",
              "water",
              "throughout",
              "the",
              "day."
            ],
            "hint": "✔ সঠিক বাক্য: I drink plenty of pure water throughout the day."
          },
          {
            "id": "mod_11_l2_q2",
            "type": "mcq",
            "prompt": "'Throughout the day' এর অর্থ কী?",
            "options": [
              "সারাদিন জুড়ে",
              "সকাল বেলায়",
              "মাঝে মাঝে",
              "রাতের বেলা"
            ],
            "answer": "সারাদিন জুড়ে",
            "hint": "Throughout = শুরু থেকে শেষ অবধি"
          },
          {
            "id": "mod_11_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Consistency is key to forming good habits.",
            "options": [
              "Consistency is key to forming good habits.",
              "I wash my clothes on Saturday.",
              "Sometimes I cook special dishes.",
              "I visit my parents twice a month."
            ],
            "answer": "Consistency is key to forming good habits.",
            "hint": "Consistency = ধারাবাহিকতা"
          }
        ]
      },
      {
        "id": "mod_11_l3",
        "moduleId": "mod_11",
        "title": "রাতের প্রস্তুতি ও ঘুম (Evening & Sleep Routine)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_11_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: ঘুমানোর আগে আমি বিশ মিনিট বই পড়ি।",
            "words": [
              "Before",
              "going",
              "to",
              "sleep",
              "I",
              "read",
              "a",
              "book",
              "for",
              "twenty",
              "minutes."
            ],
            "answer": [
              "Before",
              "going",
              "to",
              "sleep",
              "I",
              "read",
              "a",
              "book",
              "for",
              "twenty",
              "minutes."
            ],
            "hint": "✔ সঠিক বাক্য: Before going to sleep I read a book for twenty minutes."
          },
          {
            "id": "mod_11_l3_q2",
            "type": "mcq",
            "prompt": "'Turn off' এবং 'Turn on' এর পার্থক্য কী?",
            "options": [
              "Turn off মানে বন্ধ করা এবং Turn on মানে চালু করা",
              "উভয়ই এক",
              "Turn off মানে খোলা",
              "Turn on মানে ধোয়া"
            ],
            "answer": "Turn off মানে বন্ধ করা এবং Turn on মানে চালু করা",
            "hint": "Off = বন্ধ, On = চালু"
          },
          {
            "id": "mod_11_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Getting seven hours of sleep improves focus.",
            "options": [
              "Getting seven hours of sleep improves focus.",
              "I turn off the lights at ten thirty.",
              "I spend quality time with my family.",
              "Listening to soft music helps me relax."
            ],
            "answer": "Getting seven hours of sleep improves focus.",
            "hint": "Improves focus = মনোযোগ বৃদ্ধি করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_12",
    "stageId": "A2",
    "stageName": "স্তর ২: প্রাথমিক",
    "title": "১২. কেনাকাটা, দরদাম ও জামাকাপড় (Shopping & Bargaining)",
    "desc": "দোকানে কাপড় কেনা, ট্রায়াল রুম, সাইজ ও দরদাম",
    "icon": "🛍️",
    "bg": "from-indigo-600 to-violet-600",
    "kind": "core",
    "kindNo": 12,
    "lessons": [
      {
        "id": "mod_12_l1",
        "moduleId": "mod_12",
        "title": "দোকানে কাপড় পছন্দ (Clothing & Trial)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_12_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমি কি এটি ট্রায়াল রুমে পরে দেখতে পারি?",
            "words": [
              "Can",
              "I",
              "try",
              "this",
              "on",
              "in",
              "the",
              "fitting",
              "room?"
            ],
            "answer": [
              "Can",
              "I",
              "try",
              "this",
              "on",
              "in",
              "the",
              "fitting",
              "room?"
            ],
            "hint": "✔ সঠিক বাক্য: Can I try this on in the fitting room?"
          },
          {
            "id": "mod_12_l1_q2",
            "type": "mcq",
            "prompt": "'Trial room' বা 'Fitting room' কী?",
            "options": [
              "পোশাক মাপমতো হয় কিনা দেখার নির্ধারিত কক্ষ",
              "বিল দেওয়ার কাউন্টার",
              "পণ্য রাখার গুদাম",
              "বিশ্রামাগার"
            ],
            "answer": "পোশাক মাপমতো হয় কিনা দেখার নির্ধারিত কক্ষ",
            "hint": "Fitting room = ট্রায়াল রুম"
          },
          {
            "id": "mod_12_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "This shirt fits me perfectly.",
            "options": [
              "This shirt fits me perfectly.",
              "Do you have this in navy blue?",
              "This pair of shoes is too tight.",
              "Can you show me one size larger?"
            ],
            "answer": "This shirt fits me perfectly.",
            "hint": "Fits perfectly = একদম মানানসই মাপ"
          }
        ]
      },
      {
        "id": "mod_12_l2",
        "moduleId": "mod_12",
        "title": "দরদাম ও মূল্য ছাড় (Bargaining & Discounts)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_12_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই পণ্যের উপর কোনো বিশেষ ছাড় আছে কি?",
            "words": [
              "Is",
              "there",
              "any",
              "special",
              "discount",
              "on",
              "this",
              "item?"
            ],
            "answer": [
              "Is",
              "there",
              "any",
              "special",
              "discount",
              "on",
              "this",
              "item?"
            ],
            "hint": "✔ সঠিক বাক্য: Is there any special discount on this item?"
          },
          {
            "id": "mod_12_l2_q2",
            "type": "mcq",
            "prompt": "'Fixed price' লেখা থাকলে কী করবেন?",
            "options": [
              "দরদাম না করে নির্ধারিত দামে কিনবেন",
              "অর্ধেক দাম বলবেন",
              "ফ্রি চাইবেন",
              "বাকিতে নিবেন"
            ],
            "answer": "দরদাম না করে নির্ধারিত দামে কিনবেন",
            "hint": "Fixed price = একদাম / নির্ধারিত মূল্য"
          },
          {
            "id": "mod_12_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Could you lower the price a little bit?",
            "options": [
              "Could you lower the price a little bit?",
              "That price is a bit high for my budget.",
              "If you buy two you get twenty percent off.",
              "Here is your change and receipt."
            ],
            "answer": "Could you lower the price a little bit?",
            "hint": "Lower the price = দাম কিছুটা কমানো"
          }
        ]
      },
      {
        "id": "mod_12_l3",
        "moduleId": "mod_12",
        "title": "পেমেন্ট ও রসিদ (Payment & Receipts)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_12_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমি কি ক্রেডিট কার্ড বা বিকাশ দিয়ে পরিশোধ করতে পারি?",
            "words": [
              "Can",
              "I",
              "pay",
              "with",
              "a",
              "credit",
              "card",
              "or",
              "mobile",
              "wallet?"
            ],
            "answer": [
              "Can",
              "I",
              "pay",
              "with",
              "a",
              "credit",
              "card",
              "or",
              "mobile",
              "wallet?"
            ],
            "hint": "✔ সঠিক বাক্য: Can I pay with a credit card or mobile wallet?"
          },
          {
            "id": "mod_12_l3_q2",
            "type": "mcq",
            "prompt": "'Receipt' বা 'Cash memo' এর কাজ কী?",
            "options": [
              "ক্রয়ের প্রমাণপত্র",
              "বিজ্ঞাপন",
              "টাকা ফেরত না দেওয়ার চুক্তি",
              "ডিসকাউন্ট কুপন"
            ],
            "answer": "ক্রয়ের প্রমাণপত্র",
            "hint": "Receipt = ক্রয়ের অফিসিয়াল রসিদ"
          },
          {
            "id": "mod_12_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "What is your return and exchange policy?",
            "options": [
              "What is your return and exchange policy?",
              "You can exchange it within seven days.",
              "Please keep the cash memo safe.",
              "Can you wrap this as a gift for me?"
            ],
            "answer": "What is your return and exchange policy?",
            "hint": "Exchange policy = বদল করার নিয়ম"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_13",
    "stageId": "A2",
    "stageName": "স্তর ২: প্রাথমিক",
    "title": "১৩. রেস্তোরাঁ ও ক্যাফে শিষ্টাচার (Dining Out & Cafes)",
    "desc": "টেবিল বুকিং, মেনু নির্বাচন, খাবার অর্ডার ও টিপস",
    "icon": "🍽️",
    "bg": "from-violet-500 to-purple-600",
    "kind": "core",
    "kindNo": 13,
    "lessons": [
      {
        "id": "mod_13_l1",
        "moduleId": "mod_13",
        "title": "টেবিল সংরক্ষণ ও মেনু (Table & Menu)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_13_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: দুইজনের জন্য একটি টেবিল খালি আছে কি?",
            "words": [
              "Is",
              "there",
              "a",
              "table",
              "available",
              "for",
              "two",
              "people?"
            ],
            "answer": [
              "Is",
              "there",
              "a",
              "table",
              "available",
              "for",
              "two",
              "people?"
            ],
            "hint": "✔ সঠিক বাক্য: Is there a table available for two people?"
          },
          {
            "id": "mod_13_l1_q2",
            "type": "mcq",
            "prompt": "'Reservation' বলতে কী বোঝায়?",
            "options": [
              "আগে থেকে টেবিল বা সিট বুক করে রাখা",
              "বিল পরিশোধ করা",
              "রান্নার রেসিপি",
              "ওয়েটারকে ডাকা"
            ],
            "answer": "আগে থেকে টেবিল বা সিট বুক করে রাখা",
            "hint": "Reservation = অগ্রিম সংরক্ষণ"
          },
          {
            "id": "mod_13_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Could you please bring us the menu?",
            "options": [
              "Could you please bring us the menu?",
              "What is the special dish today?",
              "I would like a bowl of hot soup.",
              "Are you ready to order now?"
            ],
            "answer": "Could you please bring us the menu?",
            "hint": "Menu = খাবারের তালিকা"
          }
        ]
      },
      {
        "id": "mod_13_l2",
        "moduleId": "mod_13",
        "title": "খাবার অর্ডার ও বিশেষ অনুরোধ (Special Ordering)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_13_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: অনুগ্রহ করে এই তরকারিতে ঝাল কম দিন।",
            "words": [
              "Please",
              "make",
              "this",
              "curry",
              "less",
              "spicy."
            ],
            "answer": [
              "Please",
              "make",
              "this",
              "curry",
              "less",
              "spicy."
            ],
            "hint": "✔ সঠিক বাক্য: Please make this curry less spicy."
          },
          {
            "id": "mod_13_l2_q2",
            "type": "mcq",
            "prompt": "'Vegetarian' ব্যক্তির খাবারে কী থাকে না?",
            "options": [
              "মাছ, মাংস বা ডিম",
              "শাকসবজি",
              "চাল বা রুটি",
              "ফলমূল"
            ],
            "answer": "মাছ, মাংস বা ডিম",
            "hint": "Vegetarian = নিরামিষাশী"
          },
          {
            "id": "mod_13_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Does this dish contain any dairy or nuts?",
            "options": [
              "Does this dish contain any dairy or nuts?",
              "The grilled fish was cooked to perfection.",
              "Would you like something to drink with your meal?",
              "Just a bottle of mineral water please."
            ],
            "answer": "Does this dish contain any dairy or nuts?",
            "hint": "Nuts = বাদাম"
          }
        ]
      },
      {
        "id": "mod_13_l3",
        "moduleId": "mod_13",
        "title": "বিল পরিশোধ ও টিপ দেওয়া (Bills & Tipping)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_13_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমরা কি বিলটি সমান ভাগে ভাগ করতে পারি?",
            "words": [
              "Can",
              "we",
              "split",
              "the",
              "bill",
              "evenly",
              "among",
              "us?"
            ],
            "answer": [
              "Can",
              "we",
              "split",
              "the",
              "bill",
              "evenly",
              "among",
              "us?"
            ],
            "hint": "✔ সঠিক বাক্য: Can we split the bill evenly among us?"
          },
          {
            "id": "mod_13_l3_q2",
            "type": "mcq",
            "prompt": "'Keep the change' মানে কী?",
            "options": [
              "ভাঙতি টাকাটা আপনি বখশিশ হিসেবে রাখুন",
              "টাকা ফেরত দিন",
              "সব টাকা নিয়ে যান",
              "বিল ভুল হয়েছে"
            ],
            "answer": "ভাঙতি টাকাটা আপনি বখশিশ হিসেবে রাখুন",
            "hint": "Keep the change = ফেরত টাকা টিপ হিসেবে রাখুন"
          },
          {
            "id": "mod_13_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Thank you for the wonderful service.",
            "options": [
              "Thank you for the wonderful service.",
              "Keep the change as a tip.",
              "Do you accept digital wallet payments?",
              "Can we have the bill please?"
            ],
            "answer": "Thank you for the wonderful service.",
            "hint": "Wonderful service = চমৎকার সেবা"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_14",
    "stageId": "A2",
    "stageName": "স্তর ২: প্রাথমিক",
    "title": "১৪. গণপরিবহন, বাস ও মেট্রো রেল (Public Transit & Commuting)",
    "desc": "বাস স্টপ, মেট্রো স্মার্ট কার্ড, টিকিট ও ট্রাফিক",
    "icon": "🚗",
    "bg": "from-purple-600 to-fuchsia-600",
    "kind": "core",
    "kindNo": 14,
    "lessons": [
      {
        "id": "mod_14_l1",
        "moduleId": "mod_14",
        "title": "বাস ও রিকশা যাত্রা (Bus & Rickshaw)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_14_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: ধানমন্ডি থেকে গুলশান যেতে রিকশা ভাড়া কত?",
            "words": [
              "How",
              "much",
              "does",
              "a",
              "rickshaw",
              "ride",
              "cost",
              "from",
              "Dhanmondi",
              "to",
              "Gulshan?"
            ],
            "answer": [
              "How",
              "much",
              "does",
              "a",
              "rickshaw",
              "ride",
              "cost",
              "from",
              "Dhanmondi",
              "to",
              "Gulshan?"
            ],
            "hint": "✔ সঠিক বাক্য: How much does a rickshaw ride cost from Dhanmondi to Gulshan?"
          },
          {
            "id": "mod_14_l1_q2",
            "type": "mcq",
            "prompt": "'Fare' শব্দের অর্থ কী?",
            "options": [
              "যাতায়াত ভাড়া",
              "সুন্দর চেহারা",
              "ট্রেন স্টেশন",
              "গতিবেগ"
            ],
            "answer": "যাতায়াত ভাড়া",
            "hint": "Fare = গাড়ি বা যানের ভাড়া"
          },
          {
            "id": "mod_14_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Which bus goes directly to the airport?",
            "options": [
              "Which bus goes directly to the airport?",
              "Please drive carefully and wear a helmet.",
              "Passengers are requested to maintain a queue.",
              "Always confirm the fare beforehand."
            ],
            "answer": "Which bus goes directly to the airport?",
            "hint": "Directly = সরাসরি"
          }
        ]
      },
      {
        "id": "mod_14_l2",
        "moduleId": "mod_14",
        "title": "মেট্রো রেল ও স্মার্ট কার্ড (Metro Transit)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_14_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: শাহবাগ স্টেশনে যাওয়ার জন্য কোন ট্রেনে উঠব?",
            "words": [
              "Which",
              "train",
              "should",
              "I",
              "take",
              "to",
              "go",
              "to",
              "Shahbagh",
              "station?"
            ],
            "answer": [
              "Which",
              "train",
              "should",
              "I",
              "take",
              "to",
              "go",
              "to",
              "Shahbagh",
              "station?"
            ],
            "hint": "✔ সঠিক বাক্য: Which train should I take to go to Shahbagh station?"
          },
          {
            "id": "mod_14_l2_q2",
            "type": "mcq",
            "prompt": "'Automated fare gate' এ কী ব্যবহার করা হয়?",
            "options": [
              "মেট্রো স্মার্ট কার্ড বা কিউআর টিকিট",
              "সাধারণ কাগজের নোট",
              "পাসপোর্ট",
              "ব্যাংক চেক"
            ],
            "answer": "মেট্রো স্মার্ট কার্ড বা কিউআর টিকিট",
            "hint": "Fare gate = স্বয়ংক্রিয় গেট"
          },
          {
            "id": "mod_14_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Please stand behind the yellow security line.",
            "options": [
              "Please stand behind the yellow security line.",
              "Let the passengers get off first.",
              "Trains arrive every six minutes.",
              "Keep your metro smart card ready."
            ],
            "answer": "Please stand behind the yellow security line.",
            "hint": "Security line = নিরাপত্তারেখা"
          }
        ]
      },
      {
        "id": "mod_14_l3",
        "moduleId": "mod_14",
        "title": "ট্রাফিক জ্যাম ও বিকল্প পথ (Traffic Navigation)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_14_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: যানজট এড়াতে আমাদের মেট্রোতে চড়া উচিত।",
            "words": [
              "We",
              "should",
              "take",
              "the",
              "metro",
              "to",
              "avoid",
              "the",
              "traffic",
              "jam."
            ],
            "answer": [
              "We",
              "should",
              "take",
              "the",
              "metro",
              "to",
              "avoid",
              "the",
              "traffic",
              "jam."
            ],
            "hint": "✔ সঠিক বাক্য: We should take the metro to avoid the traffic jam."
          },
          {
            "id": "mod_14_l3_q2",
            "type": "mcq",
            "prompt": "'Standstill' ট্রাফিকের মানে কী?",
            "options": [
              "গাড়ি সম্পূর্ণ স্থবির হয়ে আটকে আছে",
              "খালি রাস্তা",
              "দ্রুত চলছে",
              "দুর্ঘটনা ঘটেছে"
            ],
            "answer": "গাড়ি সম্পূর্ণ স্থবির হয়ে আটকে আছে",
            "hint": "Standstill = সম্পূর্ণ থমকে থাকা"
          },
          {
            "id": "mod_14_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "The expressway has drastically cut down travel time.",
            "options": [
              "The expressway has drastically cut down travel time.",
              "We missed our stop at the intersection.",
              "Always look both ways before crossing.",
              "Can you drop me off across the street?"
            ],
            "answer": "The expressway has drastically cut down travel time.",
            "hint": "Cut down travel time = ভ্রমণের সময় কমিয়ে এনেছে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_15",
    "stageId": "A2",
    "stageName": "স্তর ২: প্রাথমিক",
    "title": "১৫. সাধারণ রোগবালাই ও চিকিৎসা (Health & Medical Care)",
    "desc": "ডাক্তার দেখানো, জ্বর-সর্দি, ফার্মেসি ও সুস্থতা",
    "icon": "🩺",
    "bg": "from-fuchsia-600 to-pink-600",
    "kind": "core",
    "kindNo": 15,
    "lessons": [
      {
        "id": "mod_15_l1",
        "moduleId": "mod_15",
        "title": "লক্ষণ ও উপসর্গ বলা (Describing Symptoms)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_15_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: তিন দিন ধরে আমার তীব্র মাথাব্যথা এবং জ্বর।",
            "words": [
              "I",
              "have",
              "had",
              "a",
              "severe",
              "headache",
              "and",
              "fever",
              "for",
              "three",
              "days."
            ],
            "answer": [
              "I",
              "have",
              "had",
              "a",
              "severe",
              "headache",
              "and",
              "fever",
              "for",
              "three",
              "days."
            ],
            "hint": "✔ সঠিক বাক্য: I have had a severe headache and fever for three days."
          },
          {
            "id": "mod_15_l1_q2",
            "type": "mcq",
            "prompt": "'Symptom' শব্দের অর্থ কী?",
            "options": [
              "রোগের শারীরিক লক্ষণ বা উপসর্গ",
              "ওষুধের নাম",
              "হাসপাতালের বিল",
              "রোগমুক্তির তারিখ"
            ],
            "answer": "রোগের শারীরিক লক্ষণ বা উপসর্গ",
            "hint": "Symptom = উপসর্গ / লক্ষণ"
          },
          {
            "id": "mod_15_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Good morning doctor, I have not been feeling well.",
            "options": [
              "Good morning doctor, I have not been feeling well.",
              "How long have you had these symptoms?",
              "Do you have any body aches or shivering?",
              "My entire body feels heavy and exhausted."
            ],
            "answer": "Good morning doctor, I have not been feeling well.",
            "hint": "Not feeling well = ভালো বোধ করছি না"
          }
        ]
      },
      {
        "id": "mod_15_l2",
        "moduleId": "mod_15",
        "title": "প্রেসক্রিপশন ও ওষুধের নিয়ম (Prescriptions & Dosage)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_15_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: খাবার পর একটি করে ট্যাবলেট দিনে দুবার খাবেন।",
            "words": [
              "Take",
              "one",
              "tablet",
              "twice",
              "a",
              "day",
              "after",
              "meals."
            ],
            "answer": [
              "Take",
              "one",
              "tablet",
              "twice",
              "a",
              "day",
              "after",
              "meals."
            ],
            "hint": "✔ সঠিক বাক্য: Take one tablet twice a day after meals."
          },
          {
            "id": "mod_15_l2_q2",
            "type": "mcq",
            "prompt": "'Twice a day' মানে কতবার?",
            "options": [
              "দিনে দুইবার",
              "দিনে একবার",
              "দুই দিনে একবার",
              "সপ্তাহে দুইবার"
            ],
            "answer": "দিনে দুইবার",
            "hint": "Twice = দুইবার, Thrice = তিনবার"
          },
          {
            "id": "mod_15_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Take this prescribed antibiotic for five consecutive days.",
            "options": [
              "Take this prescribed antibiotic for five consecutive days.",
              "Make sure you drink plenty of warm fluids.",
              "Avoid cold drinks and ice cream for a few days.",
              "Get complete bed rest for at least two days."
            ],
            "answer": "Take this prescribed antibiotic for five consecutive days.",
            "hint": "Consecutive = একটানা / ধারাবাহিকভাবে"
          }
        ]
      },
      {
        "id": "mod_15_l3",
        "moduleId": "mod_15",
        "title": "ফার্মেসি ও প্রাথমিক সুস্থতা (Pharmacy & Recovery)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_15_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: রাস্তার ওপাশে একটি চব্বিশ ঘণ্টার খোলা ফার্মেসি আছে।",
            "words": [
              "There",
              "is",
              "a",
              "twenty-four",
              "hour",
              "pharmacy",
              "across",
              "the",
              "street."
            ],
            "answer": [
              "There",
              "is",
              "a",
              "twenty-four",
              "hour",
              "pharmacy",
              "across",
              "the",
              "street."
            ],
            "hint": "✔ সঠিক বাক্য: There is a twenty-four hour pharmacy across the street."
          },
          {
            "id": "mod_15_l3_q2",
            "type": "mcq",
            "prompt": "'First aid' শব্দের অর্থ কী?",
            "options": [
              "জরুরি প্রাথমিক চিকিৎসা",
              "অপারেশন থিয়েটার",
              "ডাক্তারের ফি",
              "রক্তদান"
            ],
            "answer": "জরুরি প্রাথমিক চিকিৎসা",
            "hint": "First aid = প্রাথমিক চিকিৎসা"
          },
          {
            "id": "mod_15_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Wash your hands thoroughly before touching food.",
            "options": [
              "Wash your hands thoroughly before touching food.",
              "Mental health is just as important as physical health.",
              "Regular exercise keeps the heart strong and fit.",
              "Smoking is extremely dangerous for the lungs."
            ],
            "answer": "Wash your hands thoroughly before touching food.",
            "hint": "Thoroughly = খুব ভালোভাবে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_16",
    "stageId": "A2",
    "stageName": "স্তর ২: প্রাথমিক",
    "title": "১৬. পোশাক, ফ্যাশন ও আবহাওয়ার প্রস্তুতি (Clothing & Accessories)",
    "desc": "ঋতুভিত্তিক পোশাক, ফ্যাব্রিক, জুতো ও এক্সেসরিজ",
    "icon": "👕",
    "bg": "from-pink-500 to-rose-600",
    "kind": "core",
    "kindNo": 16,
    "lessons": [
      {
        "id": "mod_16_l1",
        "moduleId": "mod_16",
        "title": "পোশাকের ধরন ও উপাদান (Clothing Fabrics)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_16_l1_q1",
            "type": "matching",
            "prompt": "পোশাকের কাপড় মেলাও:",
            "pairs": [
              {
                "en": "Cotton",
                "bn": "সুতি কাপড়"
              },
              {
                "en": "Silk",
                "bn": "রেশমি কাপড়"
              },
              {
                "en": "Wool",
                "bn": "পশমি কাপড়"
              },
              {
                "en": "Leather",
                "bn": "চামড়া"
              }
            ]
          },
          {
            "id": "mod_16_l1_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: গ্রীষ্মকালে সুতি কাপড় পরা স্বস্তিদায়ক।",
            "words": [
              "Wearing",
              "cotton",
              "clothes",
              "in",
              "summer",
              "is",
              "comfortable."
            ],
            "answer": [
              "Wearing",
              "cotton",
              "clothes",
              "in",
              "summer",
              "is",
              "comfortable."
            ],
            "hint": "✔ সঠিক বাক্য: Wearing cotton clothes in summer is comfortable."
          },
          {
            "id": "mod_16_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "This winter jacket is very warm and windproof.",
            "options": [
              "This winter jacket is very warm and windproof.",
              "Do you have this dress in pure silk?",
              "Can you alter the length of these pants?",
              "I need a sturdy umbrella for the monsoon."
            ],
            "answer": "This winter jacket is very warm and windproof.",
            "hint": "Windproof = বাতাসরোধী"
          }
        ]
      },
      {
        "id": "mod_16_l2",
        "moduleId": "mod_16",
        "title": "জুতো ও অনুষঙ্গ (Footwear & Accessories)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_16_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: হাঁটার জন্য আরামদায়ক স্নিকার্স বেছে নিন।",
            "words": [
              "Choose",
              "comfortable",
              "sneakers",
              "for",
              "walking."
            ],
            "answer": [
              "Choose",
              "comfortable",
              "sneakers",
              "for",
              "walking."
            ],
            "hint": "✔ সঠিক বাক্য: Choose comfortable sneakers for walking."
          },
          {
            "id": "mod_16_l2_q2",
            "type": "mcq",
            "prompt": "'Wristwatch' বলতে কী বোঝায়?",
            "options": [
              "হাতের ঘড়ি",
              "দেয়াল ঘড়ি",
              "পকেট ঘড়ি",
              "চশমা"
            ],
            "answer": "হাতের ঘড়ি",
            "hint": "Wrist = কবজি, Watch = ঘড়ি"
          },
          {
            "id": "mod_16_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Always wear certified helmets while riding motorcycles.",
            "options": [
              "Always wear certified helmets while riding motorcycles.",
              "Keep your purchase receipt safe for warranty.",
              "Can you check the price tag on that leather belt?",
              "This boutique has an exclusive collection."
            ],
            "answer": "Always wear certified helmets while riding motorcycles.",
            "hint": "Certified helmet = মানসম্মত হেলমেট"
          }
        ]
      },
      {
        "id": "mod_16_l3",
        "moduleId": "mod_16",
        "title": "পোশাকের যত্ন ও পরিচ্ছন্নতা (Laundry & Wardrobe)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_16_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: ইস্ত্রি করার পর জামাকাপড় হ্যাঙ্গারে ঝুলিয়ে রাখুন।",
            "words": [
              "Hang",
              "the",
              "clothes",
              "on",
              "hangers",
              "after",
              "ironing."
            ],
            "answer": [
              "Hang",
              "the",
              "clothes",
              "on",
              "hangers",
              "after",
              "ironing."
            ],
            "hint": "✔ সঠিক বাক্য: Hang the clothes on hangers after ironing."
          },
          {
            "id": "mod_16_l3_q2",
            "type": "mcq",
            "prompt": "'Stitch' শব্দের অর্থ কী?",
            "options": [
              "সেলাই",
              "বোতাম",
              "পকেট",
              "কাপড় ধোয়া"
            ],
            "answer": "সেলাই",
            "hint": "Stitch = সেলাই করা"
          },
          {
            "id": "mod_16_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Please fold these freshly ironed shirts carefully.",
            "options": [
              "Please fold these freshly ironed shirts carefully.",
              "Hang your wet umbrella outside.",
              "Do not use harsh detergents on delicate silk.",
              "Keep your wardrobe clean and organized."
            ],
            "answer": "Please fold these freshly ironed shirts carefully.",
            "hint": "Freshly ironed = সদ্য ইস্ত্রি করা"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_17",
    "stageId": "A2",
    "stageName": "স্তর ২: প্রাথমিক",
    "title": "১৭. আবহাওয়া, ছয় ঋতু ও প্রকৃতি (Weather & Seasons)",
    "desc": "বৃষ্টি, ঝড়, কুয়াশা, রোদ ও বাংলার ছয় ঋতু",
    "icon": "🌤️",
    "bg": "from-rose-500 to-amber-600",
    "kind": "core",
    "kindNo": 17,
    "lessons": [
      {
        "id": "mod_17_l1",
        "moduleId": "mod_17",
        "title": "গ্রীষ্ম ও বর্ষা কাল (Summer & Monsoon)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_17_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: গ্রীষ্মের দাবদাহের পর বর্ষার বৃষ্টি স্বস্তি আনে।",
            "words": [
              "After",
              "summer",
              "heat",
              "monsoon",
              "rain",
              "brings",
              "much",
              "relief."
            ],
            "answer": [
              "After",
              "summer",
              "heat",
              "monsoon",
              "rain",
              "brings",
              "much",
              "relief."
            ],
            "hint": "✔ সঠিক বাক্য: After summer heat monsoon rain brings much relief."
          },
          {
            "id": "mod_17_l1_q2",
            "type": "mcq",
            "prompt": "'Drizzle' বলতে কেমন বৃষ্টি বোঝায়?",
            "options": [
              "গুঁড়ি গুঁড়ি মৃদু বৃষ্টি",
              "ভারী মুষলধারে বৃষ্টি",
              "শিলাবৃষ্টি",
              "ঝড়ো বাতাস"
            ],
            "answer": "গুঁড়ি গুঁড়ি মৃদু বৃষ্টি",
            "hint": "Drizzle = হালকা গুঁড়ি গুঁড়ি বৃষ্টি"
          },
          {
            "id": "mod_17_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Dense morning fog reduced visibility on the highway.",
            "options": [
              "Dense morning fog reduced visibility on the highway.",
              "The sky cleared up after the afternoon thunderstorm.",
              "Remember to carry an umbrella today.",
              "Gentle rain brings a refreshing scent of wet earth."
            ],
            "answer": "Dense morning fog reduced visibility on the highway.",
            "hint": "Dense fog = ঘন কুয়াশা"
          }
        ]
      },
      {
        "id": "mod_17_l2",
        "moduleId": "mod_17",
        "title": "শীত ও বসন্ত কাল (Winter & Spring)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_17_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: শীতের মিষ্টি সকালে এক কাপ গরম চা অপূর্ব।",
            "words": [
              "A",
              "cup",
              "of",
              "hot",
              "tea",
              "is",
              "wonderful",
              "on",
              "cold",
              "winter",
              "mornings."
            ],
            "answer": [
              "A",
              "cup",
              "of",
              "hot",
              "tea",
              "is",
              "wonderful",
              "on",
              "cold",
              "winter",
              "mornings."
            ],
            "hint": "✔ সঠিক বাক্য: A cup of hot tea is wonderful on cold winter mornings."
          },
          {
            "id": "mod_17_l2_q2",
            "type": "mcq",
            "prompt": "'Breeze' শব্দের অর্থ কী?",
            "options": [
              "মৃদু শীতল বাতাস",
              "ঘূর্ণিঝড়",
              "বজ্রপাত",
              "তুষারপাত"
            ],
            "answer": "মৃদু শীতল বাতাস",
            "hint": "Breeze = স্নিগ্ধ বাতাস"
          },
          {
            "id": "mod_17_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "A cool northern breeze indicates winter is approaching.",
            "options": [
              "A cool northern breeze indicates winter is approaching.",
              "Spring brings colorful blossoms on every branch.",
              "Farmers celebrate the arrival of gentle rain.",
              "Global warming is causing erratic weather patterns."
            ],
            "answer": "A cool northern breeze indicates winter is approaching.",
            "hint": "Approaching = ঘনিয়ে আসছে"
          }
        ]
      },
      {
        "id": "mod_17_l3",
        "moduleId": "mod_17",
        "title": "প্রাকৃতিক দুর্যোগ ও সচেতনতা (Natural Disasters)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_17_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: নদীর তীর ঘেঁষে গাছ লাগালে নদীভাঙন রোধ হয়।",
            "words": [
              "Planting",
              "trees",
              "along",
              "riverbanks",
              "prevents",
              "soil",
              "erosion."
            ],
            "answer": [
              "Planting",
              "trees",
              "along",
              "riverbanks",
              "prevents",
              "soil",
              "erosion."
            ],
            "hint": "✔ সঠিক বাক্য: Planting trees along riverbanks prevents soil erosion."
          },
          {
            "id": "mod_17_l3_q2",
            "type": "mcq",
            "prompt": "'Flood' এবং 'Cyclone' এর বাংলা কী?",
            "options": [
              "বন্যা এবং ঘূর্ণিঝড়",
              "ভূমিকম্প এবং খরা",
              "বৃষ্টি এবং রোদ",
              "নদী এবং সাগর"
            ],
            "answer": "বন্যা এবং ঘূর্ণিঝড়",
            "hint": "Flood = বন্যা, Cyclone = ঘূর্ণিঝড়"
          },
          {
            "id": "mod_17_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Clean air and pure drinking water are basic human rights.",
            "options": [
              "Clean air and pure drinking water are basic human rights.",
              "Planting fruit bearing trees supports wildlife.",
              "We must protect our rivers from industrial waste.",
              "The starry night sky looks incredibly vivid."
            ],
            "answer": "Clean air and pure drinking water are basic human rights.",
            "hint": "Human rights = মানবাধিকার"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_18",
    "stageId": "A2",
    "stageName": "স্তর ২: প্রাথমিক",
    "title": "১৮. প্রাণী, জীববৈচিত্র্য ও পরিবেশ (Animals & Wildlife)",
    "desc": "পশু-পাখি, সুন্দরবন ও প্রাণীদের প্রতি ভালোবাসা",
    "icon": "🐕",
    "bg": "from-amber-600 to-yellow-600",
    "kind": "core",
    "kindNo": 18,
    "lessons": [
      {
        "id": "mod_18_l1",
        "moduleId": "mod_18",
        "title": "বন্যপ্রাণী ও সুন্দরবন (Wild Animals & Sundarbans)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_18_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: রয়্যাল বেঙ্গল টাইগার সুন্দরবনের গর্ব।",
            "words": [
              "The",
              "Royal",
              "Bengal",
              "Tiger",
              "is",
              "the",
              "pride",
              "of",
              "Sundarbans."
            ],
            "answer": [
              "The",
              "Royal",
              "Bengal",
              "Tiger",
              "is",
              "the",
              "pride",
              "of",
              "Sundarbans."
            ],
            "hint": "✔ সঠিক বাক্য: The Royal Bengal Tiger is the pride of Sundarbans."
          },
          {
            "id": "mod_18_l1_q2",
            "type": "mcq",
            "prompt": "'Mammal' শব্দের বৈজ্ঞানিক অর্থ কী?",
            "options": [
              "স্তন্যপায়ী প্রাণী",
              "সরীসৃপ",
              "উভচর",
              "জলজ প্রাণী"
            ],
            "answer": "স্তন্যপায়ী প্রাণী",
            "hint": "Mammal = যে প্রাণী মায়ের দুধ পান করে বাঁচে"
          },
          {
            "id": "mod_18_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "The Sundarbans mangrove forest is home to majestic tigers.",
            "options": [
              "The Sundarbans mangrove forest is home to majestic tigers.",
              "We rented a country boat to explore the lake.",
              "Conserving wetlands protects migratory birds.",
              "We should show kindness toward stray animals."
            ],
            "answer": "The Sundarbans mangrove forest is home to majestic tigers.",
            "hint": "Mangrove forest = বাদাবন"
          }
        ]
      },
      {
        "id": "mod_18_l2",
        "moduleId": "mod_18",
        "title": "পাখি ও জলাশয় (Birds & Marine Life)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_18_l2_q1",
            "type": "matching",
            "prompt": "পাখির ইংরেজি মেলাও:",
            "pairs": [
              {
                "en": "Kingfisher",
                "bn": "মাছরাঙা"
              },
              {
                "en": "Eagle",
                "bn": "ঈগল"
              },
              {
                "en": "Sparrow",
                "bn": "চড়ুই"
              },
              {
                "en": "Peacock",
                "bn": "ময়ূর"
              }
            ]
          },
          {
            "id": "mod_18_l2_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: শীতকালে আমাদের দেশে প্রচুর অতিথি পাখি আসে।",
            "words": [
              "In",
              "winter",
              "many",
              "migratory",
              "birds",
              "arrive",
              "in",
              "our",
              "country."
            ],
            "answer": [
              "In",
              "winter",
              "many",
              "migratory",
              "birds",
              "arrive",
              "in",
              "our",
              "country."
            ],
            "hint": "✔ সঠিক বাক্য: In winter many migratory birds arrive in our country."
          },
          {
            "id": "mod_18_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Migratory birds travel thousands of miles every year.",
            "options": [
              "Migratory birds travel thousands of miles every year.",
              "Hilsha fish is renowned for its unique taste.",
              "Coral reefs provide shelter for marine species.",
              "The singing birds welcome the dawn."
            ],
            "answer": "Migratory birds travel thousands of miles every year.",
            "hint": "Migratory birds = পরিযায়ী বা অতিথি পাখি"
          }
        ]
      },
      {
        "id": "mod_18_l3",
        "moduleId": "mod_18",
        "title": "প্রাণীপ্রেম ও সংবেদনশীলতা (Animal Care & Ethics)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_18_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: রাস্তার অবলা প্রাণীদের প্রতি আমাদের দয়া দেখানো উচিত।",
            "words": [
              "We",
              "should",
              "show",
              "kindness",
              "toward",
              "stray",
              "street",
              "animals."
            ],
            "answer": [
              "We",
              "should",
              "show",
              "kindness",
              "toward",
              "stray",
              "street",
              "animals."
            ],
            "hint": "✔ সঠিক বাক্য: We should show kindness toward stray street animals."
          },
          {
            "id": "mod_18_l3_q2",
            "type": "mcq",
            "prompt": "'Stray animal' বলতে কী বোঝায়?",
            "options": [
              "বেওয়ারিশ বা রাস্তায় ঘুরে বেড়ানো প্রাণী",
              "চিড়িয়াখানার পশু",
              "পোষা কুকুর",
              "বনের বাঘ"
            ],
            "answer": "বেওয়ারিশ বা রাস্তায় ঘুরে বেড়ানো প্রাণী",
            "hint": "Stray = ভবঘুরে বা বেওয়ারিশ"
          },
          {
            "id": "mod_18_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Treat all living creatures with respect and care.",
            "options": [
              "Treat all living creatures with respect and care.",
              "Animals feel pain and hunger just like humans.",
              "Do not throw stones at stray dogs.",
              "Protect endangered species from poaching."
            ],
            "answer": "Treat all living creatures with respect and care.",
            "hint": "Living creatures = সমস্ত জীব"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_19",
    "stageId": "A2",
    "stageName": "স্তর ২: প্রাথমিক",
    "title": "১৯. প্রযুক্তি, ইন্টারনেট ও কম্পিউটার (Technology & Digital Life)",
    "desc": "স্মার্টফোন, ইন্টারনেট, ইমেইল, সফটওয়্যার ও নিরাপত্তা",
    "icon": "📱",
    "bg": "from-yellow-500 to-amber-600",
    "kind": "core",
    "kindNo": 19,
    "lessons": [
      {
        "id": "mod_19_l1",
        "moduleId": "mod_19",
        "title": "দৈনন্দিন ডিজিটাল গ্যাজেট (Digital Devices)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_19_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমার ফোনের চার্জ শেষ একটি চার্জার ধার দেবেন?",
            "words": [
              "My",
              "phone",
              "battery",
              "is",
              "low",
              "could",
              "you",
              "lend",
              "me",
              "a",
              "charger?"
            ],
            "answer": [
              "My",
              "phone",
              "battery",
              "is",
              "low",
              "could",
              "you",
              "lend",
              "me",
              "a",
              "charger?"
            ],
            "hint": "✔ সঠিক বাক্য: My phone battery is low could you lend me a charger?"
          },
          {
            "id": "mod_19_l1_q2",
            "type": "mcq",
            "prompt": "'Operating System' (OS) এর কাজ কী?",
            "options": [
              "কম্পিউটার বা ফোনের হার্ডওয়্যার ও অ্যাপস পরিচালনা করা",
              "শুধু গান বাজানো",
              "ইন্টারনেট ব্রাউজ করা",
              "ছবি তোলা"
            ],
            "answer": "কম্পিউটার বা ফোনের হার্ডওয়্যার ও অ্যাপস পরিচালনা করা",
            "hint": "OS = উইন্ডোজ, অ্যান্ড্রয়েড বা আইওএস"
          },
          {
            "id": "mod_19_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Ensure your Wi-Fi router is protected with a strong password.",
            "options": [
              "Ensure your Wi-Fi router is protected with a strong password.",
              "Update your smartphone operating system regularly.",
              "Cloud storage allows you to access files from anywhere.",
              "Too much screen time can disrupt your sleep."
            ],
            "answer": "Ensure your Wi-Fi router is protected with a strong password.",
            "hint": "Strong password = শক্তিশালী পাসওয়ার্ড"
          }
        ]
      },
      {
        "id": "mod_19_l2",
        "moduleId": "mod_19",
        "title": "সাইবার নিরাপত্তা ও সতর্কতা (Cyber Hygiene)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_19_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: কখনও অপরিচিত ব্যক্তির সাথে ওটিপি শেয়ার করবেন না।",
            "words": [
              "Never",
              "share",
              "your",
              "OTP",
              "or",
              "password",
              "with",
              "strangers."
            ],
            "answer": [
              "Never",
              "share",
              "your",
              "OTP",
              "or",
              "password",
              "with",
              "strangers."
            ],
            "hint": "✔ সঠিক বাক্য: Never share your OTP or password with strangers."
          },
          {
            "id": "mod_19_l2_q2",
            "type": "mcq",
            "prompt": "'Two-factor authentication' (2FA) কেন জরুরি?",
            "options": [
              "অ্যাকাউন্ট হ্যাক হওয়া থেকে অতিরিক্ত নিরাপত্তা দিতে",
              "দ্রুত লগইন করতে",
              "ফ্রি ইন্টারনেট পেতে",
              "ফাইল ডিলিট করতে"
            ],
            "answer": "অ্যাকাউন্ট হ্যাক হওয়া থেকে অতিরিক্ত নিরাপত্তা দিতে",
            "hint": "2FA = দ্বৈত স্তরের সুরক্ষা"
          },
          {
            "id": "mod_19_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Never open suspicious email attachments from unknown senders.",
            "options": [
              "Never open suspicious email attachments from unknown senders.",
              "Remember to back up your personal photos on a hard drive.",
              "Artificial intelligence is automating repetitive tasks.",
              "Use two-factor authentication for extra safety."
            ],
            "answer": "Never open suspicious email attachments from unknown senders.",
            "hint": "Suspicious attachments = সন্দেহজনক ফাইল"
          }
        ]
      },
      {
        "id": "mod_19_l3",
        "moduleId": "mod_19",
        "title": "অনলাইন কাজের সুবিধা (Remote Tech Work)",
        "xp": 25,
        "isExam": false,
        "questions": [
          {
            "id": "mod_19_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: ক্লাউড স্টোরেজের কারণে যেকোনো স্থান থেকে ফাইল পাওয়া যায়।",
            "words": [
              "Cloud",
              "storage",
              "allows",
              "accessing",
              "files",
              "from",
              "any",
              "location."
            ],
            "answer": [
              "Cloud",
              "storage",
              "allows",
              "accessing",
              "files",
              "from",
              "any",
              "location."
            ],
            "hint": "✔ সঠিক বাক্য: Cloud storage allows accessing files from any location."
          },
          {
            "id": "mod_19_l3_q2",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমরা দূর থেকে মিটিং করতে জুম সফটওয়্যার ব্যবহার করি।",
            "words": [
              "We",
              "use",
              "Zoom",
              "software",
              "to",
              "conduct",
              "remote",
              "meetings."
            ],
            "answer": [
              "We",
              "use",
              "Zoom",
              "software",
              "to",
              "conduct",
              "remote",
              "meetings."
            ],
            "hint": "✔ সঠিক বাক্য: We use Zoom software to conduct remote meetings."
          },
          {
            "id": "mod_19_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Digital literacy is a fundamental necessity for modern jobs.",
            "options": [
              "Digital literacy is a fundamental necessity for modern jobs.",
              "Technology should serve humanity and make life easier.",
              "He resolved the software bug before the release.",
              "Check your internet connection speed regularly."
            ],
            "answer": "Digital literacy is a fundamental necessity for modern jobs.",
            "hint": "Digital literacy = প্রযুক্তিগত স্বাক্ষরতা"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_20",
    "stageId": "A2",
    "stageName": "স্তর ২: প্রাথমিক",
    "title": "২০. লেভেল A2 সমাপ্তি মডেল টেস্ট (Checkpoint A2 Grand Exam)",
    "desc": "A2 প্রাথমিক স্তরের চূড়ান্ত সমন্বিত মূল্যায়ন",
    "icon": "🎖️",
    "bg": "from-amber-600 to-red-600",
    "kind": "core",
    "kindNo": 20,
    "lessons": [
      {
        "id": "mod_20_l1",
        "moduleId": "mod_20",
        "title": "A2 বাক্য গঠন ও রূপান্তর (A2 Syntax Mastery)",
        "xp": 30,
        "isExam": false,
        "questions": [
          {
            "id": "mod_20_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: আমি বাস মিস করেছিলাম তাই অফিসে পৌঁছাতে দেরি হয়েছিল।",
            "words": [
              "I",
              "missed",
              "the",
              "bus",
              "so",
              "I",
              "arrived",
              "at",
              "the",
              "office",
              "late."
            ],
            "answer": [
              "I",
              "missed",
              "the",
              "bus",
              "so",
              "I",
              "arrived",
              "at",
              "the",
              "office",
              "late."
            ],
            "hint": "✔ সঠিক বাক্য: I missed the bus so I arrived at the office late."
          },
          {
            "id": "mod_20_l1_q2",
            "type": "mcq",
            "prompt": "'Did you go to the market?' এর হ্যাঁ-সূচক উত্তর কী?",
            "options": [
              "Yes, I went to the market.",
              "Yes, I go.",
              "No, I am.",
              "Yes, I did go to market yesterday."
            ],
            "answer": "Yes, I went to the market.",
            "hint": "Past Simple interrogative 'Did you go' এর উত্তর 'I went'"
          },
          {
            "id": "mod_20_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Could you please give me a printed cash memo?",
            "options": [
              "Could you please give me a printed cash memo?",
              "Can I have an extra pair of slippers?",
              "Turn left at the next traffic light.",
              "I went to work by metro rail today."
            ],
            "answer": "Could you please give me a printed cash memo?",
            "hint": "Printed cash memo = মুদ্রিত রসিদ"
          }
        ]
      },
      {
        "id": "mod_20_l2",
        "moduleId": "mod_20",
        "title": "A2 সমন্বিত বাস্তব সংলাপ (A2 Dialogues)",
        "xp": 30,
        "isExam": false,
        "questions": [
          {
            "id": "mod_20_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: ডাক্তার আমাকে দুই দিন পূর্ণ বিশ্রামে থাকতে পরামর্শ দিয়েছেন।",
            "words": [
              "The",
              "doctor",
              "advised",
              "me",
              "to",
              "take",
              "complete",
              "bed",
              "rest",
              "for",
              "two",
              "days."
            ],
            "answer": [
              "The",
              "doctor",
              "advised",
              "me",
              "to",
              "take",
              "complete",
              "bed",
              "rest",
              "for",
              "two",
              "days."
            ],
            "hint": "✔ সঠিক বাক্য: The doctor advised me to take complete bed rest for two days."
          },
          {
            "id": "mod_20_l2_q2",
            "type": "matching",
            "prompt": "A2 সমাপনী ম্যাচিং:",
            "pairs": [
              {
                "en": "Discount",
                "bn": "মূল্য ছাড়"
              },
              {
                "en": "Prescription",
                "bn": "প্রেসক্রিপশন"
              },
              {
                "en": "Standstill",
                "bn": "স্থবির"
              },
              {
                "en": "Exchange",
                "bn": "বদল করা"
              }
            ]
          },
          {
            "id": "mod_20_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "We must finish this report before the end of the day.",
            "options": [
              "We must finish this report before the end of the day.",
              "I would like to confirm my flight reservation.",
              "Please make this curry less spicy for me.",
              "Do you have this dress in a larger size?"
            ],
            "answer": "We must finish this report before the end of the day.",
            "hint": "Before end of day = দিন শেষ হওয়ার আগে"
          }
        ]
      },
      {
        "id": "mod_20_l3",
        "moduleId": "mod_20",
        "title": "A2 ফাইনাল সার্টিফিকেশন টেস্ট (A2 Graduation)",
        "xp": 30,
        "isExam": true,
        "questions": [
          {
            "id": "mod_20_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: নিয়মিত অনুশীলনের মাধ্যমে প্রাথমিক স্তরের জড়তা দূর হয়েছে।",
            "words": [
              "Through",
              "regular",
              "practice",
              "elementary",
              "hesitation",
              "has",
              "disappeared."
            ],
            "answer": [
              "Through",
              "regular",
              "practice",
              "elementary",
              "hesitation",
              "has",
              "disappeared."
            ],
            "hint": "✔ সঠিক বাক্য: Through regular practice elementary hesitation has disappeared."
          },
          {
            "id": "mod_20_l3_q2",
            "type": "mcq",
            "prompt": "'She does not knows' নাকি 'She does not know' কোনটি সঠিক?",
            "options": [
              "She does not know",
              "She does not knows",
              "উভয়ই সঠিক",
              "কোনোটিই নয়"
            ],
            "answer": "She does not know",
            "hint": "Does এর পর মূল verb এর সাথে s/es বসে না"
          },
          {
            "id": "mod_20_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Congratulations on completing the A2 Elementary stage!",
            "options": [
              "Congratulations on completing the A2 Elementary stage!",
              "You are now ready to speak with intermediate confidence.",
              "Keep up the excellent daily momentum.",
              "Fluently is proud of your dedication."
            ],
            "answer": "Congratulations on completing the A2 Elementary stage!",
            "hint": "Stage completed = স্তর সমাপ্ত"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_21",
    "stageId": "B1",
    "stageName": "স্তর ৩: মধ্যবর্তী",
    "title": "২১. বিমানবন্দর ও আন্তর্জাতিক উড্ডয়ন (Airports & Flights)",
    "desc": "বোর্ডিং পাস, লাগেজ চেক-ইন ও সিকিউরিটি",
    "icon": "✈️",
    "bg": "from-cyan-600 to-blue-700",
    "kind": "core",
    "kindNo": 21,
    "lessons": [
      {
        "id": "mod_21_l1",
        "moduleId": "mod_21",
        "title": "২১. বিমানবন্দর ও আন্তর্জাতিক উড্ডয়ন - ১ম পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_21_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_21_l1_q2",
            "type": "mcq",
            "prompt": "'✈️' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_21_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_21_l2",
        "moduleId": "mod_21",
        "title": "২১. বিমানবন্দর ও আন্তর্জাতিক উড্ডয়ন - ২য় পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_21_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_21_l2_q2",
            "type": "mcq",
            "prompt": "'B1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_21_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_21_l3",
        "moduleId": "mod_21",
        "title": "২১. বিমানবন্দর ও আন্তর্জাতিক উড্ডয়ন - সমাপনী কুইজ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_21_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_21_l3_q2",
            "type": "mcq",
            "prompt": "'২১. বিমানবন্দর ও আন্তর্জাতিক উড্ডয়ন (Airports & Flights)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_21_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_22",
    "stageId": "B1",
    "stageName": "স্তর ৩: মধ্যবর্তী",
    "title": "২২. হোটেল বুকিং ও ট্যুরিজম (Hotels & Tourism)",
    "desc": "রুম রিজার্ভেশন, সুযোগ-সুবিধা ও পর্যটন গাইড",
    "icon": "🏨",
    "bg": "from-blue-600 to-indigo-700",
    "kind": "core",
    "kindNo": 22,
    "lessons": [
      {
        "id": "mod_22_l1",
        "moduleId": "mod_22",
        "title": "২২. হোটেল বুকিং ও ট্যুরিজম - ১ম পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_22_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_22_l1_q2",
            "type": "mcq",
            "prompt": "'🏨' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_22_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_22_l2",
        "moduleId": "mod_22",
        "title": "২২. হোটেল বুকিং ও ট্যুরিজম - ২য় পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_22_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_22_l2_q2",
            "type": "mcq",
            "prompt": "'B1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_22_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_22_l3",
        "moduleId": "mod_22",
        "title": "২২. হোটেল বুকিং ও ট্যুরিজম - সমাপনী কুইজ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_22_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_22_l3_q2",
            "type": "mcq",
            "prompt": "'২২. হোটেল বুকিং ও ট্যুরিজম (Hotels & Tourism)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_22_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_23",
    "stageId": "B1",
    "stageName": "স্তর ৩: মধ্যবর্তী",
    "title": "২৩. ব্যাংক ও আন্তর্জাতিক লেনদেন (Banking & Transactions)",
    "desc": "অ্যাকাউন্ট খোলা, রেমিট্যান্স ও বৈদেশিক মুদ্রা",
    "icon": "💳",
    "bg": "from-indigo-600 to-violet-700",
    "kind": "core",
    "kindNo": 23,
    "lessons": [
      {
        "id": "mod_23_l1",
        "moduleId": "mod_23",
        "title": "২৩. ব্যাংক ও আন্তর্জাতিক লেনদেন - ১ম পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_23_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_23_l1_q2",
            "type": "mcq",
            "prompt": "'💳' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_23_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_23_l2",
        "moduleId": "mod_23",
        "title": "২৩. ব্যাংক ও আন্তর্জাতিক লেনদেন - ২য় পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_23_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_23_l2_q2",
            "type": "mcq",
            "prompt": "'B1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_23_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_23_l3",
        "moduleId": "mod_23",
        "title": "২৩. ব্যাংক ও আন্তর্জাতিক লেনদেন - সমাপনী কুইজ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_23_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_23_l3_q2",
            "type": "mcq",
            "prompt": "'২৩. ব্যাংক ও আন্তর্জাতিক লেনদেন (Banking & Transactions)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_23_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_24",
    "stageId": "B1",
    "stageName": "স্তর ৩: মধ্যবর্তী",
    "title": "২৪. আনুষ্ঠানিক ফোন কল ও কথোপকথন (Professional Phone Calls)",
    "desc": "কল হোল্ড করা, বার্তা নেওয়া ও ভদ্র আচরণ",
    "icon": "📞",
    "bg": "from-violet-600 to-purple-700",
    "kind": "core",
    "kindNo": 24,
    "lessons": [
      {
        "id": "mod_24_l1",
        "moduleId": "mod_24",
        "title": "২৪. আনুষ্ঠানিক ফোন কল ও কথোপকথন - ১ম পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_24_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_24_l1_q2",
            "type": "mcq",
            "prompt": "'📞' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_24_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_24_l2",
        "moduleId": "mod_24",
        "title": "২৪. আনুষ্ঠানিক ফোন কল ও কথোপকথন - ২য় পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_24_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_24_l2_q2",
            "type": "mcq",
            "prompt": "'B1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_24_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_24_l3",
        "moduleId": "mod_24",
        "title": "২৪. আনুষ্ঠানিক ফোন কল ও কথোপকথন - সমাপনী কুইজ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_24_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_24_l3_q2",
            "type": "mcq",
            "prompt": "'২৪. আনুষ্ঠানিক ফোন কল ও কথোপকথন (Professional Phone Calls)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_24_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_25",
    "stageId": "B1",
    "stageName": "স্তর ৩: মধ্যবর্তী",
    "title": "২৫. ডাক্তার ও বিশেষজ্ঞের পরামর্শ (Medical Consultations)",
    "desc": "শারীরিক পরীক্ষা, জটিল লক্ষণ ও চিকিৎসা পরামর্শ",
    "icon": "🏥",
    "bg": "from-purple-600 to-pink-700",
    "kind": "core",
    "kindNo": 25,
    "lessons": [
      {
        "id": "mod_25_l1",
        "moduleId": "mod_25",
        "title": "২৫. ডাক্তার ও বিশেষজ্ঞের পরামর্শ - ১ম পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_25_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_25_l1_q2",
            "type": "mcq",
            "prompt": "'🏥' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_25_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_25_l2",
        "moduleId": "mod_25",
        "title": "২৫. ডাক্তার ও বিশেষজ্ঞের পরামর্শ - ২য় পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_25_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_25_l2_q2",
            "type": "mcq",
            "prompt": "'B1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_25_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_25_l3",
        "moduleId": "mod_25",
        "title": "২৫. ডাক্তার ও বিশেষজ্ঞের পরামর্শ - সমাপনী কুইজ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_25_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_25_l3_q2",
            "type": "mcq",
            "prompt": "'২৫. ডাক্তার ও বিশেষজ্ঞের পরামর্শ (Medical Consultations)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_25_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_26",
    "stageId": "B1",
    "stageName": "স্তর ৩: মধ্যবর্তী",
    "title": "২৬. উচ্চশিক্ষা, বিশ্ববিদ্যালয় ও গবেষণা (University & Education)",
    "desc": "ভর্তি, সেমিস্টার পরীক্ষা ও প্রেজেন্টেশন",
    "icon": "🏫",
    "bg": "from-pink-600 to-rose-700",
    "kind": "core",
    "kindNo": 26,
    "lessons": [
      {
        "id": "mod_26_l1",
        "moduleId": "mod_26",
        "title": "২৬. উচ্চশিক্ষা, বিশ্ববিদ্যালয় ও গবেষণা - ১ম পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_26_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_26_l1_q2",
            "type": "mcq",
            "prompt": "'🏫' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_26_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_26_l2",
        "moduleId": "mod_26",
        "title": "২৬. উচ্চশিক্ষা, বিশ্ববিদ্যালয় ও গবেষণা - ২য় পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_26_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_26_l2_q2",
            "type": "mcq",
            "prompt": "'B1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_26_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_26_l3",
        "moduleId": "mod_26",
        "title": "২৬. উচ্চশিক্ষা, বিশ্ববিদ্যালয় ও গবেষণা - সমাপনী কুইজ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_26_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_26_l3_q2",
            "type": "mcq",
            "prompt": "'২৬. উচ্চশিক্ষা, বিশ্ববিদ্যালয় ও গবেষণা (University & Education)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_26_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_27",
    "stageId": "B1",
    "stageName": "স্তর ৩: মধ্যবর্তী",
    "title": "২৭. অতীত স্মৃতি ও গল্প বলার আর্ট (Past Events & Storytelling)",
    "desc": "স্মৃতিচারণ, অতীত কাল ও বর্ণনামূলক শব্দ",
    "icon": "⏳",
    "bg": "from-rose-600 to-red-700",
    "kind": "core",
    "kindNo": 27,
    "lessons": [
      {
        "id": "mod_27_l1",
        "moduleId": "mod_27",
        "title": "২৭. অতীত স্মৃতি ও গল্প বলার আর্ট - ১ম পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_27_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_27_l1_q2",
            "type": "mcq",
            "prompt": "'⏳' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_27_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_27_l2",
        "moduleId": "mod_27",
        "title": "২৭. অতীত স্মৃতি ও গল্প বলার আর্ট - ২য় পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_27_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_27_l2_q2",
            "type": "mcq",
            "prompt": "'B1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_27_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_27_l3",
        "moduleId": "mod_27",
        "title": "২৭. অতীত স্মৃতি ও গল্প বলার আর্ট - সমাপনী কুইজ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_27_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_27_l3_q2",
            "type": "mcq",
            "prompt": "'২৭. অতীত স্মৃতি ও গল্প বলার আর্ট (Past Events & Storytelling)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_27_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_28",
    "stageId": "B1",
    "stageName": "স্তর ৩: মধ্যবর্তী",
    "title": "২৮. ভবিষ্যৎ পরিকল্পনা ও স্বপ্ন (Future Plans & Ambitions)",
    "desc": "ক্যারিয়ার লক্ষ্য, সম্ভাবনা ও ভবিষ্যৎ কাল",
    "icon": "🔮",
    "bg": "from-red-600 to-amber-700",
    "kind": "core",
    "kindNo": 28,
    "lessons": [
      {
        "id": "mod_28_l1",
        "moduleId": "mod_28",
        "title": "২৮. ভবিষ্যৎ পরিকল্পনা ও স্বপ্ন - ১ম পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_28_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_28_l1_q2",
            "type": "mcq",
            "prompt": "'🔮' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_28_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_28_l2",
        "moduleId": "mod_28",
        "title": "২৮. ভবিষ্যৎ পরিকল্পনা ও স্বপ্ন - ২য় পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_28_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_28_l2_q2",
            "type": "mcq",
            "prompt": "'B1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_28_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_28_l3",
        "moduleId": "mod_28",
        "title": "২৮. ভবিষ্যৎ পরিকল্পনা ও স্বপ্ন - সমাপনী কুইজ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_28_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_28_l3_q2",
            "type": "mcq",
            "prompt": "'২৮. ভবিষ্যৎ পরিকল্পনা ও স্বপ্ন (Future Plans & Ambitions)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_28_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_29",
    "stageId": "B1",
    "stageName": "স্তর ৩: মধ্যবর্তী",
    "title": "২৯. বিনম্র অনুরোধ ও আন্তরিক ক্ষমা (Polite Favors & Apologies)",
    "desc": "ভদ্রভাবে না বলা, উপকার চাওয়া ও ভুল স্বীকার",
    "icon": "🤝",
    "bg": "from-amber-600 to-orange-700",
    "kind": "core",
    "kindNo": 29,
    "lessons": [
      {
        "id": "mod_29_l1",
        "moduleId": "mod_29",
        "title": "২৯. বিনম্র অনুরোধ ও আন্তরিক ক্ষমা - ১ম পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_29_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_29_l1_q2",
            "type": "mcq",
            "prompt": "'🤝' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_29_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_29_l2",
        "moduleId": "mod_29",
        "title": "২৯. বিনম্র অনুরোধ ও আন্তরিক ক্ষমা - ২য় পাঠ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_29_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_29_l2_q2",
            "type": "mcq",
            "prompt": "'B1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_29_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_29_l3",
        "moduleId": "mod_29",
        "title": "২৯. বিনম্র অনুরোধ ও আন্তরিক ক্ষমা - সমাপনী কুইজ",
        "xp": 35,
        "isExam": false,
        "questions": [
          {
            "id": "mod_29_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_29_l3_q2",
            "type": "mcq",
            "prompt": "'২৯. বিনম্র অনুরোধ ও আন্তরিক ক্ষমা (Polite Favors & Apologies)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_29_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_30",
    "stageId": "B1",
    "stageName": "স্তর ৩: মধ্যবর্তী",
    "title": "৩০. লেভেল B1 চেকপয়েন্ট ও ডিপ্লোমা এক্সাম (Checkpoint B1 Exam)",
    "desc": "মধ্যবর্তী স্তরের পূর্ণাঙ্গ দক্ষতা যাচাই পরীক্ষা",
    "icon": "🏆",
    "bg": "from-orange-600 to-emerald-700",
    "kind": "core",
    "kindNo": 30,
    "lessons": [
      {
        "id": "mod_30_l1",
        "moduleId": "mod_30",
        "title": "৩০. লেভেল B1 চেকপয়েন্ট ও ডিপ্লোমা এক্সাম - ১ম পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_30_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_30_l1_q2",
            "type": "mcq",
            "prompt": "'🏆' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_30_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_30_l2",
        "moduleId": "mod_30",
        "title": "৩০. লেভেল B1 চেকপয়েন্ট ও ডিপ্লোমা এক্সাম - ২য় পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_30_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_30_l2_q2",
            "type": "mcq",
            "prompt": "'B1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_30_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_30_l3",
        "moduleId": "mod_30",
        "title": "৩০. লেভেল B1 চেকপয়েন্ট ও ডিপ্লোমা এক্সাম - সমাপনী কুইজ",
        "xp": 40,
        "isExam": true,
        "questions": [
          {
            "id": "mod_30_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_30_l3_q2",
            "type": "mcq",
            "prompt": "'৩০. লেভেল B1 চেকপয়েন্ট ও ডিপ্লোমা এক্সাম (Checkpoint B1 Exam)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_30_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_31",
    "stageId": "B2",
    "stageName": "স্তর ৪: উচ্চ-মধ্যবর্তী",
    "title": "৩১. করপোরেট ইমেইল ও ফরমাল রাইটিং (Corporate Emails)",
    "desc": "পেশাদার ইমেইল, ড্রাফট, সংযুক্তি ও প্রটোকল",
    "icon": "💼",
    "bg": "from-slate-600 to-slate-800",
    "kind": "core",
    "kindNo": 31,
    "lessons": [
      {
        "id": "mod_31_l1",
        "moduleId": "mod_31",
        "title": "৩১. করপোরেট ইমেইল ও ফরমাল রাইটিং - ১ম পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_31_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_31_l1_q2",
            "type": "mcq",
            "prompt": "'💼' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_31_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_31_l2",
        "moduleId": "mod_31",
        "title": "৩১. করপোরেট ইমেইল ও ফরমাল রাইটিং - ২য় পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_31_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_31_l2_q2",
            "type": "mcq",
            "prompt": "'B2' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_31_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_31_l3",
        "moduleId": "mod_31",
        "title": "৩১. করপোরেট ইমেইল ও ফরমাল রাইটিং - সমাপনী কুইজ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_31_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_31_l3_q2",
            "type": "mcq",
            "prompt": "'৩১. করপোরেট ইমেইল ও ফরমাল রাইটিং (Corporate Emails)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_31_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_32",
    "stageId": "B2",
    "stageName": "স্তর ৪: উচ্চ-মধ্যবর্তী",
    "title": "৩২. চাকরি ইন্টারভিউ জয় করার কৌশল (Job Interviews & Career)",
    "desc": "আত্মবিশ্বাস, বেতন আলোচনা ও অভিজ্ঞতা প্রদর্শন",
    "icon": "🎯",
    "bg": "from-emerald-600 to-teal-700",
    "kind": "core",
    "kindNo": 32,
    "lessons": [
      {
        "id": "mod_32_l1",
        "moduleId": "mod_32",
        "title": "৩২. চাকরি ইন্টারভিউ জয় করার কৌশল - ১ম পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_32_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_32_l1_q2",
            "type": "mcq",
            "prompt": "'🎯' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_32_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_32_l2",
        "moduleId": "mod_32",
        "title": "৩২. চাকরি ইন্টারভিউ জয় করার কৌশল - ২য় পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_32_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_32_l2_q2",
            "type": "mcq",
            "prompt": "'B2' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_32_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_32_l3",
        "moduleId": "mod_32",
        "title": "৩২. চাকরি ইন্টারভিউ জয় করার কৌশল - সমাপনী কুইজ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_32_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_32_l3_q2",
            "type": "mcq",
            "prompt": "'৩২. চাকরি ইন্টারভিউ জয় করার কৌশল (Job Interviews & Career)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_32_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_33",
    "stageId": "B2",
    "stageName": "স্তর ৪: উচ্চ-মধ্যবর্তী",
    "title": "৩৩. বিজনেস মিটিং ও টিমওয়ার্ক (Business Meetings)",
    "desc": "এজেন্ডা পরিচালনা, যুক্তি ও সিদ্ধান্ত গ্রহণ",
    "icon": "📊",
    "bg": "from-teal-600 to-cyan-700",
    "kind": "core",
    "kindNo": 33,
    "lessons": [
      {
        "id": "mod_33_l1",
        "moduleId": "mod_33",
        "title": "৩৩. বিজনেস মিটিং ও টিমওয়ার্ক - ১ম পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_33_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_33_l1_q2",
            "type": "mcq",
            "prompt": "'📊' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_33_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_33_l2",
        "moduleId": "mod_33",
        "title": "৩৩. বিজনেস মিটিং ও টিমওয়ার্ক - ২য় পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_33_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_33_l2_q2",
            "type": "mcq",
            "prompt": "'B2' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_33_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_33_l3",
        "moduleId": "mod_33",
        "title": "৩৩. বিজনেস মিটিং ও টিমওয়ার্ক - সমাপনী কুইজ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_33_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_33_l3_q2",
            "type": "mcq",
            "prompt": "'৩৩. বিজনেস মিটিং ও টিমওয়ার্ক (Business Meetings)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_33_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_34",
    "stageId": "B2",
    "stageName": "স্তর ৪: উচ্চ-মধ্যবর্তী",
    "title": "৩৪. অভিযোগ নিষ্পত্তি ও ক্লায়েন্ট হ্যান্ডলিং (Customer Complaints)",
    "desc": "বিরোধ মীমাংসা, অসন্তুষ্ট ক্লায়েন্ট ও রিফান্ড",
    "icon": "⚖️",
    "bg": "from-cyan-600 to-blue-700",
    "kind": "core",
    "kindNo": 34,
    "lessons": [
      {
        "id": "mod_34_l1",
        "moduleId": "mod_34",
        "title": "৩৪. অভিযোগ নিষ্পত্তি ও ক্লায়েন্ট হ্যান্ডলিং - ১ম পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_34_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_34_l1_q2",
            "type": "mcq",
            "prompt": "'⚖️' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_34_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_34_l2",
        "moduleId": "mod_34",
        "title": "৩৪. অভিযোগ নিষ্পত্তি ও ক্লায়েন্ট হ্যান্ডলিং - ২য় পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_34_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_34_l2_q2",
            "type": "mcq",
            "prompt": "'B2' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_34_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_34_l3",
        "moduleId": "mod_34",
        "title": "৩৪. অভিযোগ নিষ্পত্তি ও ক্লায়েন্ট হ্যান্ডলিং - সমাপনী কুইজ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_34_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_34_l3_q2",
            "type": "mcq",
            "prompt": "'৩৪. অভিযোগ নিষ্পত্তি ও ক্লায়েন্ট হ্যান্ডলিং (Customer Complaints)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_34_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_35",
    "stageId": "B2",
    "stageName": "স্তর ৪: উচ্চ-মধ্যবর্তী",
    "title": "৩৫. সুচিন্তিত মতামত, যুক্তি ও বিতর্ক (Opinions & Debating)",
    "desc": "যুক্তি উপস্থাপন, দ্বিমত পোষণ ও সমঝোতা",
    "icon": "🗣️",
    "bg": "from-blue-600 to-indigo-700",
    "kind": "core",
    "kindNo": 35,
    "lessons": [
      {
        "id": "mod_35_l1",
        "moduleId": "mod_35",
        "title": "৩৫. সুচিন্তিত মতামত, যুক্তি ও বিতর্ক - ১ম পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_35_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_35_l1_q2",
            "type": "mcq",
            "prompt": "'🗣️' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_35_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_35_l2",
        "moduleId": "mod_35",
        "title": "৩৫. সুচিন্তিত মতামত, যুক্তি ও বিতর্ক - ২য় পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_35_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_35_l2_q2",
            "type": "mcq",
            "prompt": "'B2' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_35_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_35_l3",
        "moduleId": "mod_35",
        "title": "৩৫. সুচিন্তিত মতামত, যুক্তি ও বিতর্ক - সমাপনী কুইজ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_35_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_35_l3_q2",
            "type": "mcq",
            "prompt": "'৩৫. সুচিন্তিত মতামত, যুক্তি ও বিতর্ক (Opinions & Debating)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_35_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_36",
    "stageId": "B2",
    "stageName": "স্তর ৪: উচ্চ-মধ্যবর্তী",
    "title": "৩৬. পাবলিক প্রেজেন্টেশন ও স্পিচ (Public Speaking)",
    "desc": "উপস্থাপনার কৌশল, শ্রোতার মনোযোগ ও ডেটা ব্যাখ্যা",
    "icon": "🎤",
    "bg": "from-indigo-600 to-violet-700",
    "kind": "core",
    "kindNo": 36,
    "lessons": [
      {
        "id": "mod_36_l1",
        "moduleId": "mod_36",
        "title": "৩৬. পাবলিক প্রেজেন্টেশন ও স্পিচ - ১ম পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_36_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_36_l1_q2",
            "type": "mcq",
            "prompt": "'🎤' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_36_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_36_l2",
        "moduleId": "mod_36",
        "title": "৩৬. পাবলিক প্রেজেন্টেশন ও স্পিচ - ২য় পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_36_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_36_l2_q2",
            "type": "mcq",
            "prompt": "'B2' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_36_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_36_l3",
        "moduleId": "mod_36",
        "title": "৩৬. পাবলিক প্রেজেন্টেশন ও স্পিচ - সমাপনী কুইজ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_36_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_36_l3_q2",
            "type": "mcq",
            "prompt": "'৩৬. পাবলিক প্রেজেন্টেশন ও স্পিচ (Public Speaking)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_36_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_37",
    "stageId": "B2",
    "stageName": "স্তর ৪: উচ্চ-মধ্যবর্তী",
    "title": "৩৭. জটিল বাক্য ও যৌক্তিক সংযোগ (Complex Connectors)",
    "desc": "কারণ ও প্রভাব, জটিল কনজাংশন ও শর্তাবলী",
    "icon": "⚡",
    "bg": "from-violet-600 to-purple-700",
    "kind": "core",
    "kindNo": 37,
    "lessons": [
      {
        "id": "mod_37_l1",
        "moduleId": "mod_37",
        "title": "৩৭. জটিল বাক্য ও যৌক্তিক সংযোগ - ১ম পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_37_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_37_l1_q2",
            "type": "mcq",
            "prompt": "'⚡' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_37_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_37_l2",
        "moduleId": "mod_37",
        "title": "৩৭. জটিল বাক্য ও যৌক্তিক সংযোগ - ২য় পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_37_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_37_l2_q2",
            "type": "mcq",
            "prompt": "'B2' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_37_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_37_l3",
        "moduleId": "mod_37",
        "title": "৩৭. জটিল বাক্য ও যৌক্তিক সংযোগ - সমাপনী কুইজ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_37_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_37_l3_q2",
            "type": "mcq",
            "prompt": "'৩৭. জটিল বাক্য ও যৌক্তিক সংযোগ (Complex Connectors)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_37_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_38",
    "stageId": "B2",
    "stageName": "স্তর ৪: উচ্চ-মধ্যবর্তী",
    "title": "৩৮. সংকট ব্যবস্থাপনা ও জরুরি প্রটোকল (Crisis Management)",
    "desc": "ঝুঁকি মোকাবেলা, আইনি সহায়তা ও জরুরি সিদ্ধান্ত",
    "icon": "🚨",
    "bg": "from-purple-600 to-rose-700",
    "kind": "core",
    "kindNo": 38,
    "lessons": [
      {
        "id": "mod_38_l1",
        "moduleId": "mod_38",
        "title": "৩৮. সংকট ব্যবস্থাপনা ও জরুরি প্রটোকল - ১ম পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_38_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_38_l1_q2",
            "type": "mcq",
            "prompt": "'🚨' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_38_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_38_l2",
        "moduleId": "mod_38",
        "title": "৩৮. সংকট ব্যবস্থাপনা ও জরুরি প্রটোকল - ২য় পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_38_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_38_l2_q2",
            "type": "mcq",
            "prompt": "'B2' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_38_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_38_l3",
        "moduleId": "mod_38",
        "title": "৩৮. সংকট ব্যবস্থাপনা ও জরুরি প্রটোকল - সমাপনী কুইজ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_38_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_38_l3_q2",
            "type": "mcq",
            "prompt": "'৩৮. সংকট ব্যবস্থাপনা ও জরুরি প্রটোকল (Crisis Management)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_38_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_39",
    "stageId": "B2",
    "stageName": "স্তর ৪: উচ্চ-মধ্যবর্তী",
    "title": "৩৯. কৃত্রিম বুদ্ধিমত্তা ও আধুনিক বিজ্ঞান (AI, Tech & Society)",
    "desc": "অটোমেশন, ডেটা সিকিউরিটি ও ভবিষ্যতের কর্মক্ষেত্র",
    "icon": "🤖",
    "bg": "from-rose-600 to-red-700",
    "kind": "core",
    "kindNo": 39,
    "lessons": [
      {
        "id": "mod_39_l1",
        "moduleId": "mod_39",
        "title": "৩৯. কৃত্রিম বুদ্ধিমত্তা ও আধুনিক বিজ্ঞান - ১ম পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_39_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_39_l1_q2",
            "type": "mcq",
            "prompt": "'🤖' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_39_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_39_l2",
        "moduleId": "mod_39",
        "title": "৩৯. কৃত্রিম বুদ্ধিমত্তা ও আধুনিক বিজ্ঞান - ২য় পাঠ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_39_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_39_l2_q2",
            "type": "mcq",
            "prompt": "'B2' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_39_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_39_l3",
        "moduleId": "mod_39",
        "title": "৩৯. কৃত্রিম বুদ্ধিমত্তা ও আধুনিক বিজ্ঞান - সমাপনী কুইজ",
        "xp": 40,
        "isExam": false,
        "questions": [
          {
            "id": "mod_39_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_39_l3_q2",
            "type": "mcq",
            "prompt": "'৩৯. কৃত্রিম বুদ্ধিমত্তা ও আধুনিক বিজ্ঞান (AI, Tech & Society)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_39_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_40",
    "stageId": "B2",
    "stageName": "স্তর ৪: উচ্চ-মধ্যবর্তী",
    "title": "৪০. লেভেল B2 গ্র্যান্ড চেকপয়েন্ট এক্সাম (Checkpoint B2 Exam)",
    "desc": "উচ্চ-মধ্যবর্তী পেশাদার ইংরেজির চূড়ান্ত পরীক্ষা",
    "icon": "🎖️",
    "bg": "from-red-600 to-amber-700",
    "kind": "core",
    "kindNo": 40,
    "lessons": [
      {
        "id": "mod_40_l1",
        "moduleId": "mod_40",
        "title": "৪০. লেভেল B2 গ্র্যান্ড চেকপয়েন্ট এক্সাম - ১ম পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_40_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_40_l1_q2",
            "type": "mcq",
            "prompt": "'🎖️' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_40_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_40_l2",
        "moduleId": "mod_40",
        "title": "৪০. লেভেল B2 গ্র্যান্ড চেকপয়েন্ট এক্সাম - ২য় পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_40_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_40_l2_q2",
            "type": "mcq",
            "prompt": "'B2' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_40_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_40_l3",
        "moduleId": "mod_40",
        "title": "৪০. লেভেল B2 গ্র্যান্ড চেকপয়েন্ট এক্সাম - সমাপনী কুইজ",
        "xp": 45,
        "isExam": true,
        "questions": [
          {
            "id": "mod_40_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_40_l3_q2",
            "type": "mcq",
            "prompt": "'৪০. লেভেল B2 গ্র্যান্ড চেকপয়েন্ট এক্সাম (Checkpoint B2 Exam)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_40_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_41",
    "stageId": "C1",
    "stageName": "স্তর ৫: পারদর্শী",
    "title": "৪১. নেটিভ ইডিয়মস ও প্রবাদ-প্রবচন (Native Idioms & Proverbs)",
    "desc": "নেটিভ বক্তাদের মতো প্রাকৃতিক অলংকারিক ভাষা",
    "icon": "💡",
    "bg": "from-amber-600 to-yellow-600",
    "kind": "core",
    "kindNo": 41,
    "lessons": [
      {
        "id": "mod_41_l1",
        "moduleId": "mod_41",
        "title": "৪১. নেটিভ ইডিয়মস ও প্রবাদ-প্রবচন - ১ম পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_41_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_41_l1_q2",
            "type": "mcq",
            "prompt": "'💡' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_41_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_41_l2",
        "moduleId": "mod_41",
        "title": "৪১. নেটিভ ইডিয়মস ও প্রবাদ-প্রবচন - ২য় পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_41_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_41_l2_q2",
            "type": "mcq",
            "prompt": "'C1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_41_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_41_l3",
        "moduleId": "mod_41",
        "title": "৪১. নেটিভ ইডিয়মস ও প্রবাদ-প্রবচন - সমাপনী কুইজ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_41_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_41_l3_q2",
            "type": "mcq",
            "prompt": "'৪১. নেটিভ ইডিয়মস ও প্রবাদ-প্রবচন (Native Idioms & Proverbs)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_41_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_42",
    "stageId": "C1",
    "stageName": "স্তর ৫: পারদর্শী",
    "title": "৪২. অ্যাডভান্সড ফ্রেজাল ভার্বস (Advanced Phrasal Verbs)",
    "desc": "জটিল তিন শব্দের ফ্রেজাল ভার্ব ও প্রায়োগিক অর্থ",
    "icon": "🚀",
    "bg": "from-yellow-600 to-orange-600",
    "kind": "core",
    "kindNo": 42,
    "lessons": [
      {
        "id": "mod_42_l1",
        "moduleId": "mod_42",
        "title": "৪২. অ্যাডভান্সড ফ্রেজাল ভার্বস - ১ম পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_42_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_42_l1_q2",
            "type": "mcq",
            "prompt": "'🚀' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_42_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_42_l2",
        "moduleId": "mod_42",
        "title": "৪২. অ্যাডভান্সড ফ্রেজাল ভার্বস - ২য় পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_42_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_42_l2_q2",
            "type": "mcq",
            "prompt": "'C1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_42_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_42_l3",
        "moduleId": "mod_42",
        "title": "৪২. অ্যাডভান্সড ফ্রেজাল ভার্বস - সমাপনী কুইজ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_42_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_42_l3_q2",
            "type": "mcq",
            "prompt": "'৪২. অ্যাডভান্সড ফ্রেজাল ভার্বস (Advanced Phrasal Verbs)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_42_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_43",
    "stageId": "C1",
    "stageName": "স্তর ৫: পারদর্শী",
    "title": "৪৩. সূক্ষ্ম অনুভূতি, স্বর ও ভাবপ্রকাশ (Tone, Nuance & Empathy)",
    "desc": "কূটনৈতিক ভাষা, সংবেদনশীলতা ও সহমর্মিতা",
    "icon": "🎭",
    "bg": "from-orange-600 to-rose-600",
    "kind": "core",
    "kindNo": 43,
    "lessons": [
      {
        "id": "mod_43_l1",
        "moduleId": "mod_43",
        "title": "৪৩. সূক্ষ্ম অনুভূতি, স্বর ও ভাবপ্রকাশ - ১ম পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_43_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_43_l1_q2",
            "type": "mcq",
            "prompt": "'🎭' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_43_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_43_l2",
        "moduleId": "mod_43",
        "title": "৪৩. সূক্ষ্ম অনুভূতি, স্বর ও ভাবপ্রকাশ - ২য় পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_43_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_43_l2_q2",
            "type": "mcq",
            "prompt": "'C1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_43_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_43_l3",
        "moduleId": "mod_43",
        "title": "৪৩. সূক্ষ্ম অনুভূতি, স্বর ও ভাবপ্রকাশ - সমাপনী কুইজ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_43_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_43_l3_q2",
            "type": "mcq",
            "prompt": "'৪৩. সূক্ষ্ম অনুভূতি, স্বর ও ভাবপ্রকাশ (Tone, Nuance & Empathy)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_43_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_44",
    "stageId": "C1",
    "stageName": "স্তর ৫: পারদর্শী",
    "title": "৪৪. উচ্চাঙ্গ সাহিত্য, শিল্প ও নান্দনিকতা (Literature & Fine Arts)",
    "desc": "সাহিত্যের রসাস্বাদন, চিত্রশিল্প ও রূপক অর্থ",
    "icon": "📚",
    "bg": "from-rose-600 to-pink-600",
    "kind": "core",
    "kindNo": 44,
    "lessons": [
      {
        "id": "mod_44_l1",
        "moduleId": "mod_44",
        "title": "৪৪. উচ্চাঙ্গ সাহিত্য, শিল্প ও নান্দনিকতা - ১ম পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_44_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_44_l1_q2",
            "type": "mcq",
            "prompt": "'📚' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_44_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_44_l2",
        "moduleId": "mod_44",
        "title": "৪৪. উচ্চাঙ্গ সাহিত্য, শিল্প ও নান্দনিকতা - ২য় পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_44_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_44_l2_q2",
            "type": "mcq",
            "prompt": "'C1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_44_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_44_l3",
        "moduleId": "mod_44",
        "title": "৪৪. উচ্চাঙ্গ সাহিত্য, শিল্প ও নান্দনিকতা - সমাপনী কুইজ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_44_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_44_l3_q2",
            "type": "mcq",
            "prompt": "'৪৪. উচ্চাঙ্গ সাহিত্য, শিল্প ও নান্দনিকতা (Literature & Fine Arts)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_44_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_45",
    "stageId": "C1",
    "stageName": "স্তর ৫: পারদর্শী",
    "title": "৪৫. বিজ্ঞান, মহাবিশ্ব ও পরিবেশ দর্শন (Science & Ecology)",
    "desc": "কোয়ান্টাম তত্ত্ব, জ্যোতির্বিজ্ঞান ও পরিবেশ রক্ষা",
    "icon": "🔬",
    "bg": "from-pink-600 to-purple-600",
    "kind": "core",
    "kindNo": 45,
    "lessons": [
      {
        "id": "mod_45_l1",
        "moduleId": "mod_45",
        "title": "৪৫. বিজ্ঞান, মহাবিশ্ব ও পরিবেশ দর্শন - ১ম পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_45_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_45_l1_q2",
            "type": "mcq",
            "prompt": "'🔬' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_45_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_45_l2",
        "moduleId": "mod_45",
        "title": "৪৫. বিজ্ঞান, মহাবিশ্ব ও পরিবেশ দর্শন - ২য় পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_45_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_45_l2_q2",
            "type": "mcq",
            "prompt": "'C1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_45_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_45_l3",
        "moduleId": "mod_45",
        "title": "৪৫. বিজ্ঞান, মহাবিশ্ব ও পরিবেশ দর্শন - সমাপনী কুইজ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_45_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_45_l3_q2",
            "type": "mcq",
            "prompt": "'৪৫. বিজ্ঞান, মহাবিশ্ব ও পরিবেশ দর্শন (Science & Ecology)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_45_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_46",
    "stageId": "C1",
    "stageName": "স্তর ৫: পারদর্শী",
    "title": "৪৬. মানবাধিকার, আইন ও বৈশ্বিক সমাজ (Human Rights & Justice)",
    "desc": "সংবিধান, ন্যায়বিচার ও বৈশ্বিক মানবিক সংহতি",
    "icon": "⚖️",
    "bg": "from-purple-600 to-indigo-600",
    "kind": "core",
    "kindNo": 46,
    "lessons": [
      {
        "id": "mod_46_l1",
        "moduleId": "mod_46",
        "title": "৪৬. মানবাধিকার, আইন ও বৈশ্বিক সমাজ - ১ম পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_46_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_46_l1_q2",
            "type": "mcq",
            "prompt": "'⚖️' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_46_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_46_l2",
        "moduleId": "mod_46",
        "title": "৪৬. মানবাধিকার, আইন ও বৈশ্বিক সমাজ - ২য় পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_46_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_46_l2_q2",
            "type": "mcq",
            "prompt": "'C1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_46_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_46_l3",
        "moduleId": "mod_46",
        "title": "৪৬. মানবাধিকার, আইন ও বৈশ্বিক সমাজ - সমাপনী কুইজ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_46_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_46_l3_q2",
            "type": "mcq",
            "prompt": "'৪৬. মানবাধিকার, আইন ও বৈশ্বিক সমাজ (Human Rights & Justice)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_46_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_47",
    "stageId": "C1",
    "stageName": "স্তর ৫: পারদর্শী",
    "title": "৪৭. আন্তর্জাতিক কূটনীতি ও বিশ্ববাণিজ্য (Global Diplomacy)",
    "desc": "দ্বিপাক্ষিক চুক্তি, বৈশ্বিক অর্থনীতি ও আন্তর্জাতিক শিষ্টাচার",
    "icon": "🌐",
    "bg": "from-indigo-600 to-blue-600",
    "kind": "core",
    "kindNo": 47,
    "lessons": [
      {
        "id": "mod_47_l1",
        "moduleId": "mod_47",
        "title": "৪৭. আন্তর্জাতিক কূটনীতি ও বিশ্ববাণিজ্য - ১ম পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_47_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_47_l1_q2",
            "type": "mcq",
            "prompt": "'🌐' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_47_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_47_l2",
        "moduleId": "mod_47",
        "title": "৪৭. আন্তর্জাতিক কূটনীতি ও বিশ্ববাণিজ্য - ২য় পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_47_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_47_l2_q2",
            "type": "mcq",
            "prompt": "'C1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_47_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_47_l3",
        "moduleId": "mod_47",
        "title": "৪৭. আন্তর্জাতিক কূটনীতি ও বিশ্ববাণিজ্য - সমাপনী কুইজ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_47_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_47_l3_q2",
            "type": "mcq",
            "prompt": "'৪৭. আন্তর্জাতিক কূটনীতি ও বিশ্ববাণিজ্য (Global Diplomacy)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_47_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_48",
    "stageId": "C1",
    "stageName": "স্তর ৫: পারদর্শী",
    "title": "৪৮. প্রাতিষ্ঠানিক নেতৃত্ব ও প্রভাব বিস্তার (Leadership & Influence)",
    "desc": "নেতৃত্বের দৃষ্টিভঙ্গি, টিম প্রেরণা ও ক্যারিশমা",
    "icon": "💎",
    "bg": "from-blue-600 to-cyan-600",
    "kind": "core",
    "kindNo": 48,
    "lessons": [
      {
        "id": "mod_48_l1",
        "moduleId": "mod_48",
        "title": "৪৮. প্রাতিষ্ঠানিক নেতৃত্ব ও প্রভাব বিস্তার - ১ম পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_48_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_48_l1_q2",
            "type": "mcq",
            "prompt": "'💎' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_48_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_48_l2",
        "moduleId": "mod_48",
        "title": "৪৮. প্রাতিষ্ঠানিক নেতৃত্ব ও প্রভাব বিস্তার - ২য় পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_48_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_48_l2_q2",
            "type": "mcq",
            "prompt": "'C1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_48_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_48_l3",
        "moduleId": "mod_48",
        "title": "৪৮. প্রাতিষ্ঠানিক নেতৃত্ব ও প্রভাব বিস্তার - সমাপনী কুইজ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_48_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_48_l3_q2",
            "type": "mcq",
            "prompt": "'৪৮. প্রাতিষ্ঠানিক নেতৃত্ব ও প্রভাব বিস্তার (Leadership & Influence)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_48_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_49",
    "stageId": "C1",
    "stageName": "স্তর ৫: পারদর্শী",
    "title": "৪৯. অ্যাকাডেমিক গবেষণা ও ডিসকোর্স (Academic Research)",
    "desc": "গবেষণা পদ্ধতি, হাইপোথিসিস ও থিসিস ডিফেন্স",
    "icon": "🧠",
    "bg": "from-cyan-600 to-teal-600",
    "kind": "core",
    "kindNo": 49,
    "lessons": [
      {
        "id": "mod_49_l1",
        "moduleId": "mod_49",
        "title": "৪৯. অ্যাকাডেমিক গবেষণা ও ডিসকোর্স - ১ম পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_49_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_49_l1_q2",
            "type": "mcq",
            "prompt": "'🧠' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_49_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_49_l2",
        "moduleId": "mod_49",
        "title": "৪৯. অ্যাকাডেমিক গবেষণা ও ডিসকোর্স - ২য় পাঠ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_49_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_49_l2_q2",
            "type": "mcq",
            "prompt": "'C1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_49_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_49_l3",
        "moduleId": "mod_49",
        "title": "৪৯. অ্যাকাডেমিক গবেষণা ও ডিসকোর্স - সমাপনী কুইজ",
        "xp": 45,
        "isExam": false,
        "questions": [
          {
            "id": "mod_49_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_49_l3_q2",
            "type": "mcq",
            "prompt": "'৪৯. অ্যাকাডেমিক গবেষণা ও ডিসকোর্স (Academic Research)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_49_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  },
  {
    "id": "mod_50",
    "stageId": "C1",
    "stageName": "স্তর ৫: পারদর্শী",
    "title": "৫০. সি১ গ্র্যান্ড মাস্টার ফ্লুয়েন্সি সার্টিফিকেট (C1 Grand Master Exam)",
    "desc": "আন্তর্জাতিক মানে অনর্গল ইংরেজি অর্জনের চূড়ান্ত পরীক্ষা",
    "icon": "👑",
    "bg": "from-amber-500 via-rose-500 to-indigo-600",
    "kind": "core",
    "kindNo": 50,
    "lessons": [
      {
        "id": "mod_50_l1",
        "moduleId": "mod_50",
        "title": "৫০. সি১ গ্র্যান্ড মাস্টার ফ্লুয়েন্সি সার্টিফিকেট - ১ম পাঠ",
        "xp": 50,
        "isExam": false,
        "questions": [
          {
            "id": "mod_50_l1_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: এই ক্ষেত্রে পেশাদার ও সঠিক ইংরেজি ব্যবহার আবশ্যক।",
            "words": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "answer": [
              "Using",
              "professional",
              "and",
              "accurate",
              "English",
              "is",
              "essential",
              "in",
              "this",
              "situation."
            ],
            "hint": "✔ সঠিক বাক্য: Using professional and accurate English is essential in this situation."
          },
          {
            "id": "mod_50_l1_q2",
            "type": "mcq",
            "prompt": "'👑' সম্পর্কিত সংলাপে কোনটি সবচেয়ে ফলপ্রসূ?",
            "options": [
              "Consistent practice and clear articulation.",
              "Speaking very fast without pause.",
              "Translating word by word from Bengali.",
              "Avoiding conversation."
            ],
            "answer": "Consistent practice and clear articulation.",
            "hint": "প্রাকৃতিক উচ্চারণ ও সঠিক শব্দচয়ন সবসময় অগ্রাধিকার পায়।"
          },
          {
            "id": "mod_50_l1_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Effective communication is the cornerstone of professional success.",
            "options": [
              "Effective communication is the cornerstone of professional success.",
              "We must finish the work without compromising quality.",
              "In my honest opinion technology has made life easier.",
              "With patience and dedication fluency is within your reach."
            ],
            "answer": "Effective communication is the cornerstone of professional success.",
            "hint": "Cornerstone = মূল ভিত্তিপ্রস্তর"
          }
        ]
      },
      {
        "id": "mod_50_l2",
        "moduleId": "mod_50",
        "title": "৫০. সি১ গ্র্যান্ড মাস্টার ফ্লুয়েন্সি সার্টিফিকেট - ২য় পাঠ",
        "xp": 50,
        "isExam": false,
        "questions": [
          {
            "id": "mod_50_l2_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: সঠিক ব্যাকরণ কাঠামো দেয় কিন্তু আত্মবিশ্বাস সাবলীলতা তৈরি করে।",
            "words": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "answer": [
              "Grammar",
              "gives",
              "you",
              "structure",
              "but",
              "speaking",
              "gives",
              "you",
              "true",
              "fluency."
            ],
            "hint": "✔ সঠিক বাক্য: Grammar gives you structure but speaking gives you true fluency."
          },
          {
            "id": "mod_50_l2_q2",
            "type": "mcq",
            "prompt": "'C1' লেভেলে নেটিভদের মতো শোনাতে কী করা উচিত?",
            "options": [
              "Learn words and expressions in their natural context.",
              "Memorize dictionary definitions alone.",
              "Only read without ever speaking aloud.",
              "Ignore tone and emotions."
            ],
            "answer": "Learn words and expressions in their natural context.",
            "hint": "প্রসঙ্গ অনুযায়ী শব্দ ও ফ্রেজ শিখলে স্মৃতিতে স্থায়ী হয়।"
          },
          {
            "id": "mod_50_l2_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Confidence grows through continuous daily practice without fear.",
            "options": [
              "Confidence grows through continuous daily practice without fear.",
              "Mistakes are natural proof that you are actively learning.",
              "Reading English articles expands your worldview.",
              "Do not compare your beginning with another person's journey."
            ],
            "answer": "Confidence grows through continuous daily practice without fear.",
            "hint": "Continuous practice = অবিরাম অনুশীলন"
          }
        ]
      },
      {
        "id": "mod_50_l3",
        "moduleId": "mod_50",
        "title": "৫০. সি১ গ্র্যান্ড মাস্টার ফ্লুয়েন্সি সার্টিফিকেট - সমাপনী কুইজ",
        "xp": 50,
        "isExam": true,
        "questions": [
          {
            "id": "mod_50_l3_q1",
            "type": "reorder",
            "prompt": "ইংরেজিতে সাজান: বাঙালি জাতি যেন আত্মবিশ্বাসের সাথে বিশ্বমঞ্চে কথা বলতে পারে।",
            "words": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "answer": [
              "Bengali",
              "people",
              "should",
              "speak",
              "on",
              "the",
              "global",
              "stage",
              "with",
              "complete",
              "confidence."
            ],
            "hint": "✔ সঠিক বাক্য: Bengali people should speak on the global stage with complete confidence."
          },
          {
            "id": "mod_50_l3_q2",
            "type": "mcq",
            "prompt": "'৫০. সি১ গ্র্যান্ড মাস্টার ফ্লুয়েন্সি সার্টিফিকেট (C1 Grand Master Exam)' সফলভাবে সম্পন্ন করার মূল চাবিকাঠি কী?",
            "options": [
              "Dedication, spaced review and regular speaking practice.",
              "Giving up after first error.",
              "Skipping all revisions.",
              "Only reading silently."
            ],
            "answer": "Dedication, spaced review and regular speaking practice.",
            "hint": "নিয়মিত রিভিশন ও মুখে বলা সবচেয়ে কার্যকর পদ্ধতি।"
          },
          {
            "id": "mod_50_l3_q3",
            "type": "listening",
            "prompt": "মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি বাক্যটি নির্বাচন করুন:",
            "audioText": "Fluently empowers you to achieve native English fluency.",
            "options": [
              "Fluently empowers you to achieve native English fluency.",
              "Congratulations on completing this comprehensive module.",
              "Actions speak much louder than sporadic intentions.",
              "Keep up your daily streak and master every single lesson."
            ],
            "answer": "Fluently empowers you to achieve native English fluency.",
            "hint": "Empowers = সক্ষমতা প্রদান করে"
          }
        ]
      }
    ]
  }
];

// Helper to auto-generate Word Modules (teaching every word in chunked lessons)
const WORDS_PER_LESSON = 12;
const LESSONS_PER_WORD_MODULE = 8;
const bnNum = (n: number) => String(n).replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[parseInt(d, 10)]);

export const WORD_MODULES: CurriculumModule[] = [];
{
  const nLessons = Math.ceil(ALL_WORDS_DATABASE.length / WORDS_PER_LESSON);
  for (let wIdx = 0; wIdx < nLessons; wIdx++) {
    const mi = Math.floor(wIdx / LESSONS_PER_WORD_MODULE) + 1;
    const li = (wIdx % LESSONS_PER_WORD_MODULE) + 1;
    const words = ALL_WORDS_DATABASE.slice(wIdx * WORDS_PER_LESSON, (wIdx + 1) * WORDS_PER_LESSON);
    if (!WORD_MODULES[mi - 1]) {
      WORD_MODULES[mi - 1] = {
        id: `wmod_${mi}`,
        title: '',
        desc: '',
        kind: 'word',
        kindNo: mi,
        icon: '📚',
        lessons: [],
        from: words[0]?.id || 1,
        to: words[words.length - 1]?.id || 12
      };
    }
    const mod = WORD_MODULES[mi - 1];
    if (words.length > 0) {
      mod.to = words[words.length - 1].id;
    }

    // Build questions for this lesson
    const lid = `wmod_${mi}_l${li}`;
    const qs: Question[] = [];

    // Matching question for first 4 words
    if (words.length >= 4) {
      qs.push({
        id: `${lid}_m4`,
        type: 'matching',
        prompt: 'ইংরেজি শব্দের সাথে বাংলা অর্থ মেলান:',
        pairs: words.slice(0, 4).map(w => ({ en: w.word, bn: w.bn }))
      });
    }

    // MCQ questions
    words.slice(0, 4).forEach((w, idx) => {
      const otherWords = ALL_WORDS_DATABASE.filter(x => x.id !== w.id && x.bn !== w.bn);
      const opts = [w.bn];
      for (let j = 1; j <= 3; j++) {
        const dummy = otherWords[(w.id * 7 + j * 13) % otherWords.length];
        if (dummy && !opts.includes(dummy.bn)) opts.push(dummy.bn);
      }
      opts.sort(() => (w.id % 2 === 0 ? 1 : -1));
      qs.push({
        id: `${lid}_mcq_${idx}`,
        type: 'mcq',
        prompt: `"${w.word}" এর সঠিক বাংলা অর্থ কী?`,
        questionEn: w.word,
        options: opts,
        answer: w.bn,
        hint: `${w.word} = ${w.bn} (${w.category})`
      });
    });

    // Listening question
    if (words.length > 4) {
      const lw = words[4];
      const otherWords = ALL_WORDS_DATABASE.filter(x => x.id !== lw.id);
      const opts = [lw.word];
      for (let j = 1; j <= 3; j++) {
        const dummy = otherWords[(lw.id * 11 + j * 17) % otherWords.length];
        if (dummy && !opts.includes(dummy.word)) opts.push(dummy.word);
      }
      opts.sort(() => -1);
      qs.push({
        id: `${lid}_listen`,
        type: 'listening',
        prompt: 'মনোযোগ দিয়ে শুনুন এবং সঠিক ইংরেজি শব্দটি নির্বাচন করুন:',
        audioText: lw.word,
        options: opts,
        answer: lw.word,
        hint: `${lw.word} = ${lw.bn}`
      });
    }

    mod.lessons.push({
      id: lid,
      count: words.length,
      title: `শব্দ ${bnNum(words[0]?.id || 1)}–${bnNum(words[words.length - 1]?.id || 12)}`,
      xp: 20,
      questions: qs
    });
  }

  WORD_MODULES.forEach(m => {
    const cats: Record<string, number> = {};
    ALL_WORDS_DATABASE.filter(w => w.id >= (m.from || 1) && w.id <= (m.to || 12)).forEach(w => {
      cats[w.category] = (cats[w.category] || 0) + 1;
    });
    const top = Object.entries(cats).sort((a, b) => b[1] - a[1]).slice(0, 3).map(x => x[0]).join(', ');
    m.title = `${bnNum(m.kindNo || 1)}. শব্দ মডিউল (শব্দ ${bnNum(m.from || 1)}–${bnNum(m.to || 12)})`;
    m.desc = `${bnNum(m.lessons.length)}টি লেসন · ${top}`;
  });
}

// Helper to auto-generate Sentence Modules (teaching all 1060 sentences in chunked lessons)
const SENTS_PER_LESSON = 6;
const LESSONS_PER_SENT_MODULE = 8;

export const SENT_MODULES: CurriculumModule[] = [];
{
  const nLessons = Math.ceil(SENTENCE_BANK.length / SENTS_PER_LESSON);
  for (let lIdx = 0; lIdx < nLessons; lIdx++) {
    const mi = Math.floor(lIdx / LESSONS_PER_SENT_MODULE) + 1;
    const li = (lIdx % LESSONS_PER_SENT_MODULE) + 1;
    const sents = SENTENCE_BANK.slice(lIdx * SENTS_PER_LESSON, (lIdx + 1) * SENTS_PER_LESSON);
    if (!SENT_MODULES[mi - 1]) {
      SENT_MODULES[mi - 1] = {
        id: `smod_${mi}`,
        title: '',
        desc: '',
        kind: 'sent',
        kindNo: mi,
        icon: '💬',
        lessons: [],
        from: sents[0]?.id || 1,
        to: sents[sents.length - 1]?.id || 6
      };
    }
    const mod = SENT_MODULES[mi - 1];
    if (sents.length > 0) {
      mod.to = sents[sents.length - 1].id;
    }

    const lid = `smod_${mi}_l${li}`;
    const qs: Question[] = [];

    sents.forEach((x, i) => {
      if (x.en.split(' ').length <= 8) {
        qs.push(R(`${lid}_r${i}`, x.bn, x.en));
      } else {
        const pool = SENTENCE_BANK.filter(y => y.id !== x.id && y.bn !== x.bn);
        const picks: string[] = [];
        for (let j = 0; j < pool.length && picks.length < 3; j++) {
          const y = pool[(x.id * 7 + j * 13) % pool.length];
          if (!picks.includes(y.bn)) picks.push(y.bn);
        }
        const opts = [...picks];
        opts.splice(x.id % 4, 0, x.bn);
        qs.push(M(`${lid}_m${i}`, `"${x.en}" — বাংলা অর্থ কী?`, opts, x.bn, `${x.en} = ${x.bn}`));
      }

      if (i % 2 === 1) {
        const pool = SENTENCE_BANK.filter(y => y.id !== x.id && y.en !== x.en);
        const picks: string[] = [];
        for (let j = 0; j < pool.length && picks.length < 3; j++) {
          const y = pool[(x.id * 11 + j * 17) % pool.length];
          if (!picks.includes(y.en)) picks.push(y.en);
        }
        const opts = [...picks];
        opts.splice((x.id + 1) % 4, 0, x.en);
        qs.push(L(`${lid}_h${i}`, x.en, opts, x.en, `${x.en} = ${x.bn}`));
      }
    });

    mod.lessons.push({
      id: lid,
      count: sents.length,
      title: `বাক্য ${bnNum(sents[0]?.id || 1)}–${bnNum(sents[sents.length - 1]?.id || 6)}`,
      xp: 25,
      questions: qs
    });
  }

  SENT_MODULES.forEach(m => {
    const cats = Array.from(new Set(SENTENCE_BANK.filter(x => x.id >= (m.from || 1) && x.id <= (m.to || 6)).map(x => x.category))).slice(0, 3).join(', ');
    m.title = `${bnNum(m.kindNo || 1)}. বাক্য মডিউল (বাক্য ${bnNum(m.from || 1)}–${bnNum(m.to || 6)})`;
    m.desc = `${bnNum(m.lessons.length)}টি লেসন · ${cats}`;
  });
}

CORE_MODULES.forEach((m, i) => {
  m.kind = 'core';
  m.kindNo = i + 1;
});

export const ALL_CURRICULUM_PATH: CurriculumModule[] = [
  ...CORE_MODULES,
  ...WORD_MODULES,
  ...SENT_MODULES
];
