/**
 * Adam Abdullah Master Portfolio — Bilingual Engine (EN / AR RTL)
 * Tailored for Leadership, Training & Development, and Engineering Excellence
 */

const I18N_DATA = {
  en: {
    dir: "ltr",
    lang: "en",
    nav: {
      projects: "<span>01.</span> Projects",
      certificates: "<span>02.</span> Certificates",
      memories: "<span>03.</span> Memories",
      story: "<span>04.</span> Story & Leadership",
      stack: "<span>05.</span> Stack",
      github: "GitHub Profile"
    },
    header: {
      role: "Builder · Developer"
    },
    hero: {
      pill: "PASSIONATE SYSTEMS BUILDER · ASWAN, EGYPT",
      title: "I build <span class=\"gradient-text\">working systems</span> from the ground up.",
      desc: "Hey, I'm <strong>Adam Abdullah</strong> — a 15-year-old student builder and developer from <strong>Aswan, Egypt</strong>. Deeply passionate about software architecture, data pipelines, AI prototypes, and robotics. I learn by shipping real code, exploring new technologies, and building meaningful systems.",
      btnProjects: "Explore 15+ Projects",
      btnMemories: "📸 My Beginnings & Memories",
      btnGithub: "GitHub",
      metricIsef: "ISEF Participant",
      metricCamp: "Students Led (Dawwie)",
      metricProjects: "Built Projects",
      metricDeci: "Honors Graduate",
      badgeTitle: "Born to be a Leader 👑",
      badgeSub: "Adam Abdullah · Always at the center of the action"
    },
    projects: {
      tag: "VERIFIED PORTFOLIO · REAL REPOSITORIES",
      title: "Featured Engineering Works",
      subtitle: "Every project listed here is backed by working code, repository history, live deployments, or research decks.",
      filterAll: "All Builds",
      filterApps: "Software & Web",
      filterAi: "AI, IoT & Science",
      filterData: "Data Analytics",
      filterCreative: "Creative & Design"
    },

    // 15 Projects
    p1: {
      cat: "Full-Stack Web",
      status: "Live Deployed",
      title: "Tourist's Plan — Anti-Fraud Guidance Platform",
      desc: "Interactive travel guidance & price anti-fraud platform for tourists visiting Egypt. Displays official monument tickets, flights, hotels, and fair market grocery prices to protect visitors from overpricing.",
      btnLive: "🚀 Launch Website"
    },
    p2: {
      cat: "Game Development",
      status: "Playable in Browser",
      title: "Flappy Bird: Time Travel (Arab History)",
      desc: "Educational time-traveling adaptation of Flappy Bird flying across historical Arab & Islamic eras. Features dynamic background transitions, era quotes, shields, coin magnets, and procedural Web Audio sound synthesis.",
      btnLive: "🎮 Play Game Now"
    },
    p3: {
      cat: "Design & Branding",
      status: "Live Portfolio",
      title: "Graphic Design & Generative AI Showcase",
      desc: "Curated visual design gallery featuring commercial brand identities (Vitamix Juice Bar, Burger marketing campaigns), YouTube channel banners (3L Taier), podcast identities, and Midjourney generative artwork.",
      btnLive: "✨ Explore Designs"
    },
    p4: {
      cat: "Architecture & Systems",
      status: "Source on GitHub",
      title: "AdamOS & BlockOS Architecture",
      desc: "Browser-based personal operating system with drag-and-drop window manager, study workspace, habits, diary, deep focus, seasonal challenges, and Playwright end-to-end regression testing.",
      btnGh: "View Repository on GitHub"
    },
    p5: {
      cat: "Full-Stack TypeScript",
      status: "Full-Stack Prototype",
      title: "Gharbawy — Student Housing Platform",
      desc: "Full-stack platform engineered for Egyptian university students to discover and book affordable housing directly from landlords without broker exploitation. Includes interactive maps, gender filters, and booking workflows.",
      btnGh: "Inspect Full-Stack Code"
    },
    p6: {
      cat: "AI, IoT & Science",
      status: "ISEF Research",
      title: "MedShield — Smart Cold-Chain & AI Vaccine Shield",
      desc: "Biomedical engineering system combining a Trehalose-hydrogel protective matrix (maintaining vaccine stability without continuous power) with IoT sensors and a TensorFlow autoencoder neural network for real-time anomaly alerts.",
      btnGh: "View Model & Firmware Code"
    },
    p7: {
      cat: "Data Science / EDA",
      status: "Jupyter Notebooks",
      title: "Food Delivery Exploratory Analytics",
      desc: "Two-part deep statistical analysis exploring customer purchasing behaviors, peak rush hours, payment gateway distributions, and delivery driver bottlenecks across Egyptian metropolitan areas.",
      btnGh: "Inspect Data Analysis Notebooks"
    },
    p8: {
      cat: "Data Engineering / ETL",
      status: "Automated Pipeline",
      title: "Studio Ghibli Data Pipeline",
      desc: "End-to-end automated ETL pipeline fetching film and character metrics from public REST endpoints, validating schemas, relational ingestion into SQLite, and running automated SQL analytical aggregations.",
      btnGh: "View ETL Pipeline Code"
    },
    p9: {
      cat: "Progressive Web App",
      status: "React 19 / Supabase",
      title: "Maryam Journal — Reflective Journaling PWA",
      desc: "Private reflective personal journaling PWA with authentication, mood tracking, energy level graphs, photo attachments, calendar archive, and monthly reflective insights.",
      btnGh: "View Repository on GitHub"
    },
    p10: {
      cat: "Presentation & Leadership",
      status: "DECI Honors",
      title: "DECI Graduation Capstone Presentation",
      desc: "Capstone graduation deck delivered at the Digital Egypt Cubs Initiative (DECI) covering strategic tourist destinations across Egypt with interactive cultural insights.",
      btnLive: "📊 Open Slide Deck"
    },
    p11: {
      cat: "Financial Model / Pitch",
      status: "DECI Summer Camp",
      title: "Tourist's Plan Financial & Business Deck",
      desc: "Comprehensive financial forecast, pricing model, unit economics, and startup pitch deck created and presented during the Digital Egypt Cubs Initiative (DECI) summer camp.",
      btnLive: "📊 View Google Slides"
    },
    p12: {
      cat: "Automation & Scraping",
      status: "Python Script",
      title: "UWC Egypt Web Crawler",
      desc: "Targeted web crawler designed to extract admissions guidelines, criteria, and articles from the United World Colleges Egypt portal into clean UTF-8 CSV datasets.",
      btnGh: "View Crawler Code"
    },
    p13: {
      cat: "Kaggle Data Analysis",
      status: "EDA Notebook",
      title: "Superstore Profit & Regional Velocity",
      desc: "Business intelligence data exploration investigating sales margins vs. discount rates, regional logistics shipping modes, and profit anomalies across product categories.",
      btnGh: "View Analysis on GitHub"
    },
    p14: {
      cat: "Customer Segmentation",
      status: "Data Notebook",
      title: "Online Shopping Customer Analytics",
      desc: "End-to-end customer clustering on a 1,000-row synthetic dataset deriving total customer lifetime spending, rating distributions, and demographic shopping habits.",
      btnGh: "View Analysis on GitHub"
    },
    p15: {
      cat: "Data Engineering Lab",
      status: "Multi-Format ETL",
      title: "Mars Multi-Source Data Integration",
      desc: "Heterogeneous data ingestion lab unifying 5 distinct sources (CSV, TSV, JSON, SQLite, and raw HTML tables) into a consolidated relational analysis pipeline.",
      btnGh: "View Integration Code"
    },

    // Certificates (1-9)
    certs: {
      tag: "VERIFIED CREDENTIALS · CERTIFICATIONS",
      title: "Certified Technical Milestones",
      subtitle: "Official credentials from the Ministry of Communications, CRA programs, Digitobia, Codeavour, and specialized academies."
    },
    c1: {
      badge: "🤖 CRA Training Program",
      title: "Basic Overview of AI",
      desc: "Foundations of machine learning, neural architectures, AI ethics, and data pipelines.",
      meta: "Verified Certification"
    },
    c2: {
      badge: "📊 CRA Training Program",
      title: "Data Management & Analytics",
      desc: "Relational schema design, data manipulation, statistical EDA, and business metrics.",
      meta: "Verified Certification"
    },
    c3: {
      badge: "☁️ CRA Training Program",
      title: "Cloud Concepts & Development",
      desc: "Cloud infrastructure models, scalable architecture concepts, storage, and deployment.",
      meta: "Verified Certification"
    },
    c4: {
      badge: "🗄️ Information Science",
      title: "Data Representation & Organization",
      desc: "Data modeling, normalization, structured indexing, and database optimization.",
      meta: "Verified Certification"
    },
    c5: {
      badge: "🐍 Python Engineering",
      title: "Python Programming Basics",
      desc: "Core algorithmic thinking, OOP, data structures, and scripting fundamentals.",
      meta: "Verified Certification"
    },
    c6: {
      badge: "🇪🇬 Digital Egypt Cubs Initiative (DECI)",
      title: "DECI Level 1 & Level 2 Graduate",
      desc: "Ministry of Communications and Information Technology (MCIT) honors program in Software Engineering, Data Science, and Leadership.",
      meta: "National Honors Track"
    },
    c7: {
      badge: "🌐 Digitobia Academy",
      title: "Digitobia Technology Certificate",
      desc: "Advanced digital competencies, digital maturity assessment, and emerging tech frameworks.",
      meta: "Verified Certification"
    },
    c8: {
      badge: "💻 Mekky Tech Academy",
      title: "Technical Systems Course",
      desc: "Applied technical projects, hands-on programming challenges, and architectural workflows.",
      meta: "Applied Tech Track"
    },
    c9: {
      badge: "🤖 Codeavour · Global AI & Coding",
      title: "Codeavour 2022 International (4th Edition)",
      desc: "Global artificial intelligence and coding competition organized by STEMpedia & ARTPARK with AWS. Focused on next-gen AI systems and PictoBlox.",
      meta: "International Participation"
    },

    // Memories (1-9)
    memories: {
      tag: "EARLY DAYS · MEMORIES & ORIGINS",
      title: "Memories from the Journey",
      subtitle: "Moments that shaped my growth — from attending my very first Google tech summit, to teaching my little sister coding at age 11, to competing across national stages."
    },
    m1: {
      tag: "📍 The Spark",
      title: "First Google Developer Summit",
      desc: "The very first tech conference I attended in my life. This unforgettable day opened my eyes to software engineering, real-world development, and global builder communities."
    },
    m2: {
      tag: "🌟 Mentorship & Role Models",
      title: "With Eng. Abdelrahman Emran",
      desc: "An inspiring conversation on coding passion, scientific persistence, and how young engineers can build impactful solutions for the world."
    },
    m3: {
      tag: "🏆 National Finals",
      title: "National Reading Project — Capital City",
      desc: "Representing Aswan Governorate at the grand nationwide finals of the National Reading Project at the New Administrative Capital of Egypt."
    },
    m4: {
      tag: "🌍 National Stage",
      title: "Arab Reading Challenge Stage",
      desc: "Standing on competition stages from a young age, honing public speaking, critical reasoning, and confident communication in front of judges."
    },
    m5: {
      tag: "🔬 Research & Innovation",
      title: "ISEF Science & Engineering Fair",
      desc: "Presenting biomedical innovations and AI-driven telemetry prototypes before expert university panels and science fair judges."
    },
    m6: {
      tag: "👧 Knowledge Sharing",
      title: "Teaching My Little Sister Scratch @ Age 11",
      desc: "Sharing the joy of code early on — mentoring my little sister in algorithmic thinking and building creative interactive Scratch games together."
    },
    m7: {
      tag: "⚙️ Hardware & Makerspace",
      title: "FabLab KIMA Makerspace Hackathon",
      desc: "Hands-on engineering: laser cutting, circuit soldering, sensor breadboards, and bridging embedded hardware with software backends."
    },
    m8: {
      tag: "🚀 Competition Milestone",
      title: "ISEF 2025 Preliminary Qualification",
      desc: "Advancing from the regional qualifiers with our cold-chain AI vaccine protection system amid celebration from teammates and mentors."
    },
    m9: {
      tag: "🎤 Public Pitch & Keynote",
      title: "ISEF Grand Gala — Pitching to the Full Audience",
      desc: "Taking center stage with the microphone at the official ISEF celebration ceremony — presenting my system innovation and engineering vision before a packed auditorium of professors, judges, and innovators."
    },

    // Story & Leadership
    story: {
      tag: "BIOGRAPHY & LEADERSHIP · IMPACT",
      title: "Building systems.<br />Leading teams.<br /><span class=\"gradient-text\">Never stopping.</span>",
      p1: "I'm <strong>Adam Abdullah</strong> from Aswan, Egypt. I got into technology early and never looked back. Whether it's training an autoencoder on IoT telemetry, architecting an operating system interface, or leading youth camps, I thrive on turning ideas into reality.",
      p2: "In Summer 2024, I served as the <strong>President of the \"Dawwie\" Summer Camp</strong>, leading, organizing, and mentoring over <strong>400+ students</strong> across diverse technical and cultural teams.",
      achieve1: "3x ISEF Science & Engineering Fair",
      achieve1Sub: "Biomedical & IoT thermal protection for vaccines",
      achieve2: "National Reading Project Finalist",
      achieve2Sub: "Represented Aswan at the New Administrative Capital",
      achieve3: "Digital Egypt Cubs Initiative (DECI)",
      achieve3Sub: "Graduated top honors in software & digital innovation",
      pillarsTitle: "Core Engineering & Training Focus",
      pillar1Title: "Full-Stack & Web Architecture",
      pillar1Desc: "React, TypeScript, Express, PostgreSQL, Vanilla JS modular design, Playwright regression testing.",
      pillar2Title: "Data Science & Pipelines",
      pillar2Desc: "Exploratory analytics, automated web scraping (BS4), relational SQLite workflows, Pandas, Seaborn.",
      pillar3Title: "AI, IoT & Hardware",
      pillar3Desc: "TensorFlow autoencoders, anomaly detection, Arduino sensors, C++ embedded firmware.",
      pillar4Title: "Training, Mentorship & Public Speaking",
      pillar4Desc: "Designing interactive workshops, coaching youth in algorithmic problem solving, and public pitching."
    },

    stack: {
      tag: "VERIFIED TOOLKIT",
      title: "Technologies & Stack",
      subtitle: "Only technologies actively utilized in my source code, notebooks, and hardware setups."
    },

    contact: {
      pill: "LET'S COLLABORATE",
      title: "Have an idea or want to build something impactful?",
      desc: "I'm always open to discussing new projects, research ideas, or engineering opportunities.",
      emailLabel: "Email",
      ghLabel: "GitHub",
      locLabel: "Location",
      locVal: "Aswan, Egypt",
      btn: "Visit My GitHub Profile"
    },

    footer: {
      role: "Builder · Developer",
      tagline: "Curious builder crafting working systems across software, data, AI, and hardware.",
      copy: "© <span id=\"year\"></span> Adam Abdullah. Built with evidence & code."
    }
  },

  // ══════════════════════════════════════════════════════════
  // ARABIC TRANSLATION (فصحى معاصرة، رشيقة، وسلسة جداً)
  // مناسبة لريادة الأعمال، القيادة، والتدريب والتطوير بالجبهة الدبلوماسية
  // ══════════════════════════════════════════════════════════
  ar: {
    dir: "rtl",
    lang: "ar",
    nav: {
      projects: "<span>٠١.</span> المشاريع",
      certificates: "<span>٠٢.</span> الشهادات",
      memories: "<span>٠٣.</span> الذكريات",
      story: "<span>٠٤.</span> القيادة والنبذة",
      stack: "<span>٠٥.</span> التقنيات",
      github: "الملف الشخصي ↗"
    },
    header: {
      role: "باني أنظمة · مطور برمجيات"
    },
    hero: {
      pill: "شغوف ببناء وتطوير الأنظمة · أسوان، مصر",
      title: "أبني <span class=\"gradient-text\">أنظمة وحلولاً عملية</span> من الصفر.",
      desc: "أهلاً، أنا <strong>آدم عبد الله</strong> — مطور برمجيات وباني أنظمة عمري 15 عاماً من <strong>أسوان، مصر</strong>. شغفي الحقيقي هو هندسة البرمجيات، مسارات تحليل البيانات، نماذج الذكاء الاصطناعي، والعتاد الذكي. أتعلم من خلال كتابة ونشر كود فعلي، وتجربة أحدث التقنيات لتحويل الأفكار إلى حلول ملموسة تخدم المجتمع.",
      btnProjects: "استكشف +15 مشروعاً",
      btnMemories: "📸 محطات وذكريات",
      btnGithub: "حساب GitHub",
      metricIsef: "مشارك في آيسف (ISEF)",
      metricCamp: "طالباً قِدتهم بمخيم دَوّي",
      metricProjects: "مشاريع برمجية مُنفذة",
      metricDeci: "خريج مبادرة أشبال مصر (DECI)",
      badgeTitle: "وُلِدتُ لأكون قائداً 👑",
      badgeSub: "آدم عبد الله · دائماً في قلب الحدث والقيادة"
    },

    projects: {
      tag: "أعمال حقيقية · مستودعات كود موثقة",
      title: "أبرز المشروعات والأنظمة البرمجية",
      subtitle: "كل مشروع معروض هنا مدعوم بأكواد برمجية كاملة، مستودعات مفتوحة على GitHub، أو تطبيقات منشورة تعمل مباشرة.",
      filterAll: "كل المشاريع",
      filterApps: "البرمجيات والويب",
      filterAi: "الذكاء الاصطناعي والعتاد",
      filterData: "تحليل البيانات",
      filterCreative: "الألعاب والتصميم"
    },

    // 15 Projects in Arabic
    p1: {
      cat: "تطوير ويب Full-Stack",
      status: "منشور ويعمل مباشرة",
      title: "Tourist's Plan — منصة حماية وإرشاد السياح",
      desc: "منصة تفاعلية متكاملة لمساعدة السياح وزوار مصر على معرفة الأسعار الرسمية لتذاكر المزارات الأثرية، الفنادق، ووسائل النقل، لحمايتهم من التلاعب بالأسعار واستغلال السماسرة.",
      btnLive: "🚀 فتح الموقع"
    },
    p2: {
      cat: "تطوير ألعاب ويب",
      status: "قابلة للعب بالمتصفح",
      title: "Flappy Bird: السفر عبر تاريخ العرب",
      desc: "نسخة تعليمية مبتكرة من لعبة Flappy Bird بطابع تاريخي؛ حيث يسافر اللاعب عبر العصور العربية والإسلامية مع اقتباسات ملهمة، فيزياء حركة Canvas، وتأثيرات صوتية تفاعلية بـ Web Audio API.",
      btnLive: "🎮 العب الآن"
    },
    p3: {
      cat: "الهوية البصرية والتصميم",
      status: "معرض أعمال مباشر",
      title: "معرض الهويات البصرية والذكاء الاصطناعي التوليدي",
      desc: "معرض بصري يضم هويات تجارية لعلامات تجارية حقيقية (Vitamix Juice Bar، حملات إعلانات البرجر)، وتصميمات لقنوات يوتيوب وبودكاست، إلى جانب أعمال فنية بالذكاء الاصطناعي التوليدي (Midjourney).",
      btnLive: "✨ استعراض التصاميم"
    },
    p4: {
      cat: "عمارة وبنية الأنظمة",
      status: "الكود متاح على GitHub",
      title: "AdamOS & BlockOS — نظام تشغيل بالمتصفح",
      desc: "نظام تشغيل شخصي متكامل يعمل داخل المتصفح، يشمل إدارة النوافذ بالسحب والإفلات، مساحات للدراسة والتركيز، تتبع العادات والمذكرات، مع اختبارات جودة تلقائية بـ Playwright E2E.",
      btnGh: "مشاهدة المستودع على GitHub"
    },
    p5: {
      cat: "تطبيقات Full-Stack TypeScript",
      status: "نموذج عملي متكامل",
      title: "غرباوي — منصة سكن الطلاب المغتربين",
      desc: "منصة Full-Stack بواجهة عربية RTL موجهة لطلاب الجامعات في مصر للبحث عن سكن طلابي والتواصل مباشرة مع الملاك بدون سماسرة، مع فلاتر نوع السكن والخرائط التفاعلية.",
      btnGh: "فحص كود Full-Stack"
    },
    p6: {
      cat: "ذكاء اصطناعي وإنترنت الأشياء (IoT)",
      status: "بحث علمي في آيسف (ISEF)",
      title: "MedShield — الحماية الذكية لسلاسل تبريد اللقاحات",
      desc: "نظام طبي وهندسي يجمع بين مادة Trehalose hydrogel لحفظ اللقاحات حرارياً بدون كهرباء مستمرة، مع حساسات IoT ونموذج Autoencoder بالذكاء الاصطناعي للتنبؤ بأي خلل حراري فوراً.",
      btnGh: "فحص كود النموذج والعتاد"
    },
    p7: {
      cat: "علم وتحليل البيانات (EDA)",
      status: "دفاتر Jupyter تفاعلية",
      title: "التحليل الاستكشافي لبيانات توصيل الطعام",
      desc: "دراسة إحصائية وتحليلية لسلوكيات المستهلكين، أوقات الذروة، طرق الدفع الأكثر استخداماً، وتحليل نقاط الاختناق في سرعة توصيل الطلبات في المدن المصرية.",
      btnGh: "استعراض دفاتر تحليل البيانات"
    },
    p8: {
      cat: "هندسة البيانات ومسارات ETL",
      status: "بايبلاين مؤتمت بالكامل",
      title: "Studio Ghibli — بايبلاين أتمتة البيانات",
      desc: "مسار ETL مؤتمت بالكامل لسحب بيانات الأفلام والشخصيات من واجهات REST API، تنظيفها بـ Pandas، وتخزينها في قاعدة بيانات SQLite مع تشغيل استعلامات SQL إحصائية متقدمة.",
      btnGh: "مشاهدة كود بايبلاين ETL"
    },
    p9: {
      cat: "تطبيق ويب متقدم (PWA)",
      status: "React 19 / Supabase",
      title: "مذكرات مريم — تطبيق التدوين والتأمل الشخصي",
      desc: "تطبيق ويب تفاعلي PWA للمذكرات اليومية مع نظام تسجيل دخول، تتبع الحالة المزاجية، رسوم بيانية لمستوى الطاقة، إرفاق الصور، واستخلاص تقارير شهرية ذكية.",
      btnGh: "مشاهدة المشروع على GitHub"
    },
    p10: {
      cat: "العرض التقديمي والقيادة",
      status: "مشروع تخرج أشبال مصر (DECI)",
      title: "العرض التقديمي لمشروع تخرج مبادرة أشبال مصر",
      desc: "العرض التقديمي النهائي الذي قدمته في حفل تخرج مبادرة أشبال مصر الرقمية (DECI)، متضمناً تحليلاً لأهم الوجهات السياحية في مصر برؤية شبابية وتكنولوجية.",
      btnLive: "📊 فتح العرض التقديمي"
    },
    p11: {
      cat: "النموذج المالي وريادة الأعمال",
      status: "معسكر أشبال مصر الصيفي",
      title: "الخطة المالية ودراسة الجدوى لمنصة Tourist's Plan",
      desc: "دراسة مالية متكاملة لنموذج العمل، تسعير الخدمات، اقتصاديات الوحدة، وعرض Pitch Deck لرواد الأعمال تم تقديمه خلال المعسكر الصيفي لمبادرة DECI.",
      btnLive: "📊 استعراض الشرائح المالية"
    },
    p12: {
      cat: "الأتمتة وكشط البيانات",
      status: "سكريبت Python",
      title: "UWC Egypt — زاحف الويب الآلي",
      desc: "أداة زحف وأتمتة برمجية لسحب شروط القبول، المعايير، والمقالات من بوابة كليات العالم المتحد بمصر، واستخراجها في ملفات بيانات CSV منظمة.",
      btnGh: "مشاهدة كود الأتمتة"
    },
    p13: {
      cat: "تحليل بيانات Kaggle",
      status: "دفتر EDA تحليلي",
      title: "تحليل أرباح وسلاسل إمداد المتاجر الكبرى",
      desc: "تحليل ذكاء أعمال (BI) لاستكشاف العلاقة بين نسب الخصومات وهوامش الربح، وتأثير طرق الشحن واللوجستيات الإقليمية على كفاءة المبيعات.",
      btnGh: "مشاهدة التحليل على GitHub"
    },
    p14: {
      cat: "تقسيم العملاء والبيانات",
      status: "دفتر تحليلي",
      title: "تحليل سلوكيات عملاء التسوق الإلكتروني",
      desc: "نموذج تصنيف وتحليل بيانات لـ 1,000 عميل؛ لاستنتاج القيمة الدائمة للعميل (CLV)، توزيع التقييمات، وأنماط الشراء الديموغرافية.",
      btnGh: "مشاهدة التحليل على GitHub"
    },
    p15: {
      cat: "معمل هندسة البيانات",
      status: "دمج متعدد الصيغ (ETL)",
      title: "Mars — دمج ومزامنة مصادر البيانات المتعددة",
      desc: "مشروع تطبيقي لدمج 5 مصادر بيانات مختلفة (CSV, TSV, JSON, SQLite, وجداول HTML خام) وتوحيدها في خط معالجة علائقي موحد للتحليل.",
      btnGh: "مشاهدة كود الدمج"
    },

    // Certificates in Arabic
    certs: {
      tag: "الشهادات والاعتمادات الرسمية",
      title: "الشهادات والمسارات المعتمدة",
      subtitle: "اعتمادات وشهادات رسمية من وزارة الاتصالات، مسابقة Codeavour الدولية، برامج CRA، ومؤسسات التكنولوجيا المتخصصة."
    },
    c1: {
      badge: "🤖 البرنامج التدريبي CRA",
      title: "أساسيات الذكاء الاصطناعي (AI)",
      desc: "أسس تعلم الآلة، الشبكات العصبية الاصطناعية، أخلاقيات الذكاء الاصطناعي، ومسارات معالجة البيانات.",
      meta: "شهادة معتمدة"
    },
    c2: {
      badge: "📊 البرنامج التدريبي CRA",
      title: "إدارة وتحليل البيانات",
      desc: "تصميم المخططات العلائقية لقواعد البيانات، التحليل الإحصائي الاستكشافي، ومؤشرات الأداء للأعمال.",
      meta: "شهادة معتمدة"
    },
    c3: {
      badge: "☁️ البرنامج التدريبي CRA",
      title: "مفاهيم الحوسبة السحابية والتطوير",
      desc: "البنية التحتية للسحابة، تصميم الأنظمة القابلة للتوسع، حلول التخزين، واستراتيجيات النشر.",
      meta: "شهادة معتمدة"
    },
    c4: {
      badge: "🗄️ علوم وهيكلة المعلومات",
      title: "تمثيل وتنظيم البيانات",
      desc: "نمذجة البيانات، التسوية (Normalization)، الفهرسة المنظمة، وتحسين أداء قواعد البيانات.",
      meta: "شهادة معتمدة"
    },
    c5: {
      badge: "🐍 هندسة البرمجيات بلغة Python",
      title: "أساسيات البرمجة بلغة Python",
      desc: "التفكير الخوارزمي، البرمجة كائنية التوجه (OOP)، هياكل البيانات، وتطوير السكريبتات البرمجية.",
      meta: "شهادة معتمدة"
    },
    c6: {
      badge: "🇪🇬 مبادرة أشبال مصر الرقمية (DECI)",
      title: "خريج المستوى الأول والثاني بمرتبة الشرف",
      desc: "برنامج التميز التابع لوزارة الاتصالات وتكنولوجيا المعلومات (MCIT) في تطوير البرمجيات، علم البيانات، ومهارات القيادة المؤسسية.",
      meta: "مسار التميز الوطني"
    },
    c7: {
      badge: "🌐 أكاديمية Digitobia الدولية",
      title: "شهادة النضج والجاهزية الرقمية",
      desc: "الكفاءات الرقمية المتقدمة، تقييم نضج المؤسسات والأنظمة، وأطر العمل للتقنيات الصاعدة.",
      meta: "شهادة معتمدة"
    },
    c8: {
      badge: "💻 أكاديمية Mekky Tech",
      title: "كورس الأنظمة التقنية وتطوير البرمجيات",
      desc: "تطبيقات عملية لبناء المشروعات، حل التحديات البرمجية المعقدة، والعمل على بنيات برمجية حقيقية.",
      meta: "مسار التطبيق التقني"
    },
    c9: {
      badge: "🤖 مسابقة Codeavour الدولية للذكاء الاصطناعي",
      title: "Codeavour 2022 International (النسخة الرابعة)",
      desc: "المسابقة الدولية الأكبر لبرمجة الذكاء الاصطناعي المنظمة بواسطة STEMpedia و ARTPARK بالتعاون مع AWS، باستخدام أدوات PictoBlox ونماذج AI المتقدمة.",
      meta: "مشاركة دولية رسمية"
    },

    // Memories in Arabic (سلسة ورائعة)
    memories: {
      tag: "البدايات · محطات ملهمة من الرحلة",
      title: "محطات وذكريات صنعت الشغف",
      subtitle: "لحظات ومحطات فارقة في مسيرتي — من حضور أول قمة تقنية لجوجل، لتدريب أختي الصغيرة على البرمجة في سن 11، إلى اعتلاء المسارح وإلقاء المحاضرات في المحافل الوطنية."
    },
    m1: {
      tag: "📍 الشرارة الأولى",
      title: "أول قمة تكنولوجية أحضرها لجوجل",
      desc: "أول مؤتمر تقني أحضره في حياتي؛ يوم لا يُنسى فتح عيني على عالم هندسة البرمجيات، مجتمعات المطورين العالمية، وقوة التكنولوجيا في صناعة الأثر."
    },
    m2: {
      tag: "🌟 نماذج وقدوات ملهمة",
      title: "مع المهندس عبد الرحمن عمران",
      desc: "حوار ملهم وممتع حول الشغف بالبرمجة، الإصرار العلمي، وكيف يمكن للشباب والمبتكرين الصغار بناء حلول تقنية تغير حياة الناس للأفضل."
    },
    m3: {
      tag: "🏆 التصفيات الوطنية",
      title: "المشروع الوطني للقراءة — العاصمة الإدارية",
      desc: "تمثيل محافظة أسوان في التصفيات النهائية الكبرى للمشروع الوطني للقراءة على مستوى الجمهورية داخل العاصمة الإدارية الجديدة."
    },
    m4: {
      tag: "🌍 المسرح الوطني",
      title: "منصة مسابقة تحدي القراءة العربي",
      desc: "الوقوف على مسارح المسابقات منذ الصغر؛ مما أكسبني مهارات التحدث أمام الجمهور، قوة الإلقاء، التفكير النقدي، والثقة الكاملة أمام لجان التحكيم."
    },
    m5: {
      tag: "🔬 البحث العلمي والابتكار",
      title: "مناقشة المشروع في معرض آيسف (ISEF)",
      desc: "عرض ومناقشة ابتكارنا الطبي لحماية اللقاحات وأنظمة الـ IoT والذكاء الاصطناعي أمام نخبة من أساتذة الجامعات ولجان التحكيم المتخصصة."
    },
    m6: {
      tag: "👧 نقل المعرفة والتدريب",
      title: "تعليم أختي الصغيرة البرمجة في سن 11 عاماً",
      desc: "البداية المبكرة في شغف التدريب ونقل العلم — قمت بتعليم أختي الصغيرة التفكير الخوارزمي وأساسيات لغة Scratch وبناء ألعاب تفاعلية ممتعة معاً."
    },
    m7: {
      tag: "⚙️ العتاد والتصنيع الرقمي",
      title: "هاكاثون التصنيع الرقمي FabLab KIMA",
      desc: "تجربة هندسية وتطبيقية رائعة: العمل على أجهزة القطع بالليزر، لحام الدوائر الإلكترونية، وبرمجة الحساسات وربط العتاد بالبرمجيات."
    },
    m8: {
      tag: "🚀 إنجاز وتأهل",
      title: "التأهل التمهيدي في معرض آيسف 2025",
      desc: "لحظة إعلان تأهل مشروعنا لنظام سلاسل التبريد الذكية إلى المراحل المتقدمة في مسابقة ISEF وسط تشجيع واحتفاء الفريق والمدربين."
    },
    m9: {
      tag: "🎤 الإلقاء والخطابة أمام الجمهور",
      title: "حفل ختام آيسف — عرض الفكرة أمام الحشد والمسرح",
      desc: "اعتلاء المسرح الرئيسي والإمساك بالمايكروفون في الحفل الختامي والتكريم لمعرض آيسف؛ لعرض فكرة وابتكار مشروعنا وشرح الرؤية العلمية أمام أكبر حشد من الحضور والأساتذة والمبتكرين."
    },

    // Story & Leadership in Arabic (مصاغة باحترافية شديدة للجنة التدريب والتطوير)
    story: {
      tag: "النبذة والقيادة · صناعة الأثر والتطوير",
      title: "بناء الأنظمة.<br />قيادة الفرق وتدريب الشباب.<br /><span class=\"gradient-text\">شغف مستمر بالابتكار.</span>",
      p1: "أنا <strong>آدم عبد الله</strong> من محافظة أسوان، مصر. بدأت رحلتي في التكنولوجيا والقيادة مبكراً جداً. سواء كان الأمر تدريب نماذج ذكاء اصطناعي على قراءات الحساسات، تصميم أنظمة ويب معقدة، أو قيادة وتدريب فرق الشباب في المخيمات؛ شغفي الدائم هو تحويل الرؤى والأفكار إلى واقع مؤسسي ومنظم يترك أثراً حقيقياً.",
      p2: "في صيف 2024، توليت منصب <strong>رئيس مخيم \"دَوّي\" الصيفي</strong>، حيث قمت بتنظيم وتوجيه وقيادة وتدريب أكثر من <strong>400+ طالب</strong> عبر لجان وفرق عمل تقنية وثقافية وابتكارية متنوعة.",
      achieve1: "المشاركة 3 مرات في معرض آيسف الدولي (ISEF)",
      achieve1Sub: "ابتكار نظام تتبع حراري بالذكاء الاصطناعي وإنترنت الأشياء لحماية اللقاحات",
      achieve2: "التأهل لنهائيات المشروع الوطني للقراءة",
      achieve2Sub: "تمثيل محافظة أسوان في التصفيات المركزية الكبرى بالعاصمة الإدارية الجديدة",
      achieve3: "مبادرة أشبال مصر الرقمية (DECI)",
      achieve3Sub: "التخرج بمرتبة الشرف الأولى في مسارات تطوير البرمجيات والقيادة الرقمية",
      pillarsTitle: "محاور الكفاءة التقنية والتدريب والتطوير",
      pillar1Title: "هندسة وتطوير البرمجيات (Full-Stack)",
      pillar1Desc: "بناء تطبيقات الويب الحديثة بـ React, TypeScript, Express, PostgreSQL مع تطبيق معايير الاختبار والجودة بـ Playwright.",
      pillar2Title: "علم البيانات والتحليل الإحصائي",
      pillar2Desc: "استخراج وتجهيز البيانات آلياً (Web Scraping)، تحليل الأنماط بـ Pandas و Seaborn، وتصميم قواعد بيانات SQLite علائقية.",
      pillar3Title: "الذكاء الاصطناعي وإنترنت الأشياء (IoT)",
      pillar3Desc: "تدريب نماذج كشف الشذوذ بـ TensorFlow، برمجة المتحكمات الدقيقة بلغة ++C، وربط أجهزة الاستشعار بالسحابة.",
      pillar4Title: "التدريب، التطوير، والإلقاء الجماهيري",
      pillar4Desc: "تصميم وتقديم ورش العمل التدريبية، إدارة وتأهيل فرق الشباب، والإلقاء التفاعلي والعرض التقديمي (Pitching) باحترافية."
    },

    stack: {
      tag: "الأدوات والتقنيات العملية",
      title: "حزمة التقنيات والأدوات",
      subtitle: "التقنيات والأدوات التي أستخدمها فعلياً في مشروعاتي، مستودعاتي البرمجية، وتجاربي التطبيقية."
    },

    contact: {
      pill: "لنتعاون معاً",
      title: "هل لديك فكرة أو فرصة لبناء وتطوير شيء ملهم ومؤثر؟",
      desc: "مرحباً دائماً بمناقشة المبادرات الشبابية، مشروعات التدريب والتطوير، والفرص الهندسية والبحثية المشتركة.",
      emailLabel: "البريد الإلكتروني",
      ghLabel: "حساب GitHub",
      locLabel: "الموقع الجغرافي",
      locVal: "أسوان، مصر",
      btn: "زيارة حسابي على GitHub"
    },

    footer: {
      role: "باني أنظمة · مطور برمجيات",
      tagline: "شغوف ببناء الأنظمة المتكاملة، قيادة المبادرات، وتدريب الشباب في مجالات التكنولوجيا والذكاء الاصطناعي.",
      copy: "© <span id=\"year\"></span> آدم عبد الله. صُمم وبُني بالكود والأدلة الحقيقية."
    }
  }
};

/**
 * Switch language and apply RTL / LTR dynamically across ALL elements
 */
function setLanguage(lang) {
  const data = I18N_DATA[lang] || I18N_DATA.en;
  
  // Set HTML attributes
  document.documentElement.lang = data.lang;
  document.documentElement.dir = data.dir;
  
  if (data.dir === "rtl") {
    document.body.classList.add("rtl-mode");
  } else {
    document.body.classList.remove("rtl-mode");
  }

  // Update text for all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const keyPath = el.getAttribute("data-i18n").split(".");
    let val = data;
    for (const key of keyPath) {
      if (val && typeof val === "object" && key in val) {
        val = val[key];
      } else {
        val = null;
        break;
      }
    }
    if (val !== null && typeof val === "string") {
      el.innerHTML = val;
    }
  });

  // Update Year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Update toggle button active state
  document.querySelectorAll(".lang-opt").forEach((opt) => {
    opt.classList.toggle("active", opt.dataset.opt === lang);
  });

  // Save to localStorage
  try {
    localStorage.setItem("adam_portfolio_lang", lang);
  } catch (e) {}
}

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  let savedLang = "en";
  try {
    savedLang = localStorage.getItem("adam_portfolio_lang") || "en";
  } catch (e) {}

  setLanguage(savedLang);

  const toggleBtn = document.getElementById("lang-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const currentLang = document.documentElement.lang === "ar" ? "en" : "ar";
      setLanguage(currentLang);
    });
  }
});
