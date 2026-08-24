// ═══════════════════════════════════════════════════════════════════════════
// 🌐 4-MODE MULTILINGUAL & CULTURAL VIBE ENGINE FOR ADAM ABDULLAH PORTFOLIO
// Modes:
// 1. en-formal : Professional, clean, executive engineering tone
// 2. en-banter : Tech culture Gen-Z banter, witty & funny yet solid
// 3. ar-formal : لغة عربية فصحى راقية، فخمة ورصينة
// 4. ar-slang  : عامية مصرية روشة وقفشات مبرمجين دمها خفيف
// ═══════════════════════════════════════════════════════════════════════════

const I18N_DATA = {
  // ─── TOP VIBE ADVISORY BANNER ───
  "banner.tip": {
    "en-formal": "💡 <strong>Pro Tip:</strong> Select your preferred reading style & language before browsing.",
    "en-banter": "⚡ <strong>Heads up:</strong> Pick your vibe above before diving in. Trust me, it changes the mood.",
    "ar-formal": "💡 <strong>تنبيه لطيف:</strong> يُستحسن اختيار لغة وأسلوب القراءة المفضل لديك قبل بدء استعراض الموقع.",
    "ar-slang": "🔥 <strong>على روقان:</strong> نقّي المود اللي يناسب دماغك فوق قبل ما تدوس في الويبسايت وتتفرج."
  },
  "banner.dismiss": {
    "en-formal": "Got it ✕",
    "en-banter": "Bet ✕",
    "ar-formal": "حسناً ✕",
    "ar-slang": "تمام يا باشا ✕"
  },

  // ─── NAVIGATION & HEADER ───
  "nav.projects": {
    "en-formal": "<span>01.</span> Projects",
    "en-banter": "<span>01.</span> Proof of Work",
    "ar-formal": "<span>٠١.</span> المشاريع الهندسية",
    "ar-slang": "<span>٠١.</span> الشغل اللي اتعمل"
  },
  "nav.certificates": {
    "en-formal": "<span>02.</span> Certificates",
    "en-banter": "<span>02.</span> Receipts & Badges",
    "ar-formal": "<span>٠٢.</span> الشهادات والاعتمادات",
    "ar-slang": "<span>٠٢.</span> الشهادات والورق"
  },
  "nav.memories": {
    "en-formal": "<span>03.</span> Memories",
    "en-banter": "<span>03.</span> Lore & Origin",
    "ar-formal": "<span>٠٣.</span> المسيرة والبدايات",
    "ar-slang": "<span>٠٣.</span> ذكريات وبدايات"
  },
  "nav.story": {
    "en-formal": "<span>04.</span> Story",
    "en-banter": "<span>04.</span> The Plot",
    "ar-formal": "<span>٠٤.</span> القصة والقيادة",
    "ar-slang": "<span>٠٤.</span> الحكاية والليدر"
  },
  "nav.stack": {
    "en-formal": "<span>05.</span> Stack",
    "en-banter": "<span>05.</span> Weapons of Choice",
    "ar-formal": "<span>٠٥.</span> الأدوات والتقنيات",
    "ar-slang": "<span>٠٥.</span> العِدة والأسلحة"
  },
  "nav.github": {
    "en-formal": "GitHub Profile",
    "en-banter": "Peep the GitHub",
    "ar-formal": "حساب جيتهاب",
    "ar-slang": "شوف الجيتهاب"
  },
  "header.role": {
    "en-formal": "Builder · Developer",
    "en-banter": "Builds Things That Run",
    "ar-formal": "مهندس أنظمة · مطور",
    "ar-slang": "باني أنظمة من أسوان"
  },

  // ─── HERO SECTION ───
  "hero.pill": {
    "en-formal": "PASSIONATE SYSTEMS BUILDER · ASWAN, EGYPT",
    "en-banter": "CODING AT 3AM · SYSTEM BUILDER FROM ASWAN",
    "ar-formal": "طالب شغوف بهندسة الأنظمة والبرمجيات · أسوان، مصر",
    "ar-slang": "باني أنظمة من أسوان وبيكود ع الفرازة"
  },
  "hero.title": {
    "en-formal": "I build <span class=\"gradient-text\">working systems</span> from the ground up.",
    "en-banter": "Turning raw ideas into <span class=\"gradient-text\">actual working software</span>.",
    "ar-formal": "أبني <span class=\"gradient-text\">أنظمة وبرمجيات حقيقية</span> من الصفر وحتى الإطلاق.",
    "ar-slang": "بنحط الفكرة ونطلع منها <span class=\"gradient-text\">سيستم شغال على مية بيضا</span>."
  },
  "hero.desc": {
    "en-formal": "Hey, I'm <strong>Adam Abdullah</strong> — a 15-year-old student builder and developer from <strong>Aswan, Egypt</strong>. Deeply passionate about software architecture, data pipelines, AI prototypes, and robotics. I learn by shipping real code, exploring new technologies, and building meaningful systems.",
    "en-banter": "Yo, I'm <strong>Adam Abdullah</strong> — 15yo developer from <strong>Aswan, Egypt</strong>. Not here to show unfinished tutorials; I build actual browser OS interfaces, train neural networks on IoT sensor feeds, and lead 400-person tech camps. Let's see what compiles.",
    "ar-formal": "مرحباً، أنا <strong>آدم عبد الله</strong> — طالب ومطور برمجيات في الخامسة عشرة من عمري من <strong>محافظة أسوان، مصر</strong>. شغوف بعمارة البرمجيات، وخطوط معالجة البيانات، ونماذج الذكاء الاصطناعي، والأنظمة المدمجة. منهجي الدائم هو التعلم عبر بناء حلول برمجية حقيقية وفعالة.",
    "ar-slang": "يا هلا، أنا <strong>آدم عبد الله</strong> — 15 سنة من <strong>أسوان</strong>، مبرمج وباني أنظمة. لا بحب الكلام النظري ولا الفيديوهات اللي مبتتطبقش، بحب أمسك الفكرة وأقلبها لسيستم شغال حقيقي سواء ذكاء اصطناعي، ويب، أو خطوط داتا."
  },
  "hero.btn.projects": {
    "en-formal": "Explore 15+ Projects",
    "en-banter": "Check The Builds ↓",
    "ar-formal": "استعراض ١٥+ مشروعاً",
    "ar-slang": "شوف المشاريع والروقان ↓"
  },
  "hero.btn.memories": {
    "en-formal": "📸 My Beginnings & Memories",
    "en-banter": "📸 Lore & Day Ones",
    "ar-formal": "📸 البدايات والذكريات",
    "ar-slang": "📸 شوف البدايات والذكريات"
  },
  "hero.btn.github": {
    "en-formal": "GitHub Repo",
    "en-banter": "Commit History ↗",
    "ar-formal": "مستودع الكود",
    "ar-slang": "الكود ع الجيتهاب"
  },
  "hero.metric.isef": {
    "en-formal": "ISEF Science Fairs",
    "en-banter": "ISEF Fair Runs",
    "ar-formal": "مشاركات بمعرض أيسف",
    "ar-slang": "مرات تحكيم في أيسف"
  },
  "hero.metric.camp": {
    "en-formal": "Students Led (Camp)",
    "en-banter": "Students Mentored",
    "ar-formal": "طالباً قادهم في معسكر دوي",
    "ar-slang": "طالب عملت عليهم ليدر"
  },
  "hero.metric.projects": {
    "en-formal": "Built Projects",
    "en-banter": "Shipped Projects",
    "ar-formal": "مشروعاً برمجياً منجزاً",
    "ar-slang": "مشروع شغالين فعلياً"
  },
  "hero.metric.deci": {
    "en-formal": "DECI Honors Graduate",
    "en-banter": "DECI Top Rank",
    "ar-formal": "خريج أشبال مصر الرقمية",
    "ar-slang": "خريج أشبال مصر بتفوق"
  },
  "hero.photo.badge.title": {
    "en-formal": "Born to be a Leader 👑",
    "en-banter": "Born to Lead 👑 (No Cap)",
    "ar-formal": "قائد بالفطرة · Born to Lead 👑",
    "ar-slang": "ليدر من يومي 👑"
  },
  "hero.photo.badge.sub": {
    "en-formal": "Adam Abdullah · Always at the center of the action",
    "en-banter": "Adam Abdullah · Always orchestrating the vision",
    "ar-formal": "آدم عبد الله · في قلب المبادرة والابتكار",
    "ar-slang": "آدم عبد الله · مسيطر من البدايات"
  },

  // ─── PROJECTS SECTION ───
  "projects.tag": {
    "en-formal": "VERIFIED PORTFOLIO · REAL REPOSITORIES",
    "en-banter": "SHIPPED CODE · NOT JUST MOCKUPS",
    "ar-formal": "معرض المشاريع المعتمد · أكواد وتطبيقات حقيقية",
    "ar-slang": "شغل على مية بيضا · أكواد متجربة ولايف"
  },
  "projects.title": {
    "en-formal": "Featured Engineering Works",
    "en-banter": "Things I Actually Built & Shipped",
    "ar-formal": "أبرز الأعمال والمشاريع الهندسية",
    "ar-slang": "أبرز المشاريع اللي سهرت عليها وطبختها"
  },
  "projects.subtitle": {
    "en-formal": "Every project listed here is backed by working code, repository history, live deployments, or research decks.",
    "en-banter": "Zero vaporware. Every single project here has real git commits, tests, live demos, or hardware rigs.",
    "ar-formal": "كل مشروع مدرج هنا موثق بأكواد برمجية كاملة، أو مستودعات على جيتهاب، أو روابط تشغيل وتطبيقات حية.",
    "ar-slang": "كل مشروع هنا مربوط بكوده الحقيقي ع الجيتهاب، لا مشاريع وهمية ولا شغل فوتوشوب بس."
  },
  "filter.all": {
    "en-formal": "All Builds",
    "en-banter": "Everything",
    "ar-formal": "جميع المشاريع",
    "ar-slang": "كله على بعضه"
  },
  "filter.apps": {
    "en-formal": "Software & Web",
    "en-banter": "Web & Full-Stack",
    "ar-formal": "تطبيقات وبرمجيات الويب",
    "ar-slang": "ويب وسيستمز"
  },
  "filter.ai": {
    "en-formal": "AI, IoT & Science",
    "en-banter": "AI, IoT & Brains",
    "ar-formal": "ذكاء اصطناعي وأبحاث",
    "ar-slang": "ذكاء اصطناعي وهاردوير"
  },
  "filter.data": {
    "en-formal": "Data Analytics",
    "en-banter": "Data & Scraping",
    "ar-formal": "تحليل وهندسة البيانات",
    "ar-slang": "داتا وسكريبنج"
  },
  "filter.creative": {
    "en-formal": "Creative & Design",
    "en-banter": "Games & Visuals",
    "ar-formal": "الألعاب والتصميم",
    "ar-slang": "ألعاب وجرافيكس"
  },

  // ─── CERTIFICATES SECTION ───
  "certs.tag": {
    "en-formal": "VERIFIED CREDENTIALS · CERTIFICATIONS",
    "en-banter": "RECEIPTS · VERIFIED PAPERS",
    "ar-formal": "الشهادات والاعتمادات الرسمية الموثقة",
    "ar-slang": "الشهادات المعتمدة · إثباتات الشغل"
  },
  "certs.title": {
    "en-formal": "Certified Technical Milestones",
    "en-banter": "Official Badges & Certs",
    "ar-formal": "المحطات والشهادات التقنية المعتمدة",
    "ar-slang": "الشهادات والدورات الرسمية"
  },
  "certs.subtitle": {
    "en-formal": "Official credentials from the Ministry of Communications, CRA programs, Digitobia, and specialized academies.",
    "en-banter": "Certified proof from MCIT Egypt, CRA tracks, and specialized training programs.",
    "ar-formal": "اعتمادات وشهادات رسمية من وزارة الاتصالات وتكنولوجيا المعلومات (MCIT) والبرامج التدريبية المتخصصة.",
    "ar-slang": "شهادات رسمية من وزارة الاتصالات (MCIT) ومبادرة أشبال مصر وأكاديميات البرمجة."
  },

  // ─── MEMORIES SECTION ───
  "memories.tag": {
    "en-formal": "EARLY DAYS · MEMORIES & ORIGINS",
    "en-banter": "ORIGIN STORY · EARLY LORE",
    "ar-formal": "المسيرة الأولى · ذكرياتي وبداياتي في التكنولوجيا",
    "ar-slang": "الذكريات والبدايات · من أين بدأ الحوار"
  },
  "memories.title": {
    "en-formal": "Memories from the Journey",
    "en-banter": "Moments That Shaped the Grind",
    "ar-formal": "محطات وذكريات صنعت التجربة",
    "ar-slang": "لحظات وذكريات صنعت المبرمج"
  },
  "memories.subtitle": {
    "en-formal": "Moments that shaped my growth — from attending my very first Google tech summit, to teaching my little sister coding at age 11, to competing across national stages.",
    "en-banter": "How it all started: from getting blown away at my first Google event, to coaching my 11yo sister in Scratch, to ISEF podiums.",
    "ar-formal": "محطات بارزة شكلت مسيرتي — من حضور أول ملتقى تقني لجوجل، إلى تعليم أختي الصغيرة البرمجة في سن الحادية عشرة، والمنافسة في المحافل الوطنية.",
    "ar-slang": "محطات شكلت طريقي — من أول إيفنت لجوجل حضرته، لتعليم أختي سكراتش وأنا 11 سنة، لتصفيات الجمهورية وأيسف."
  },

  // ─── STORY & LEADERSHIP ───
  "story.tag": {
    "en-formal": "BIOGRAPHY & LEADERSHIP · IMPACT",
    "en-banter": "THE CORE MINDSET",
    "ar-formal": "السيرة والقيادة والأثر المجتمعي",
    "ar-slang": "الحكاية والليدرشب والمبدأ"
  },
  "story.title": {
    "en-formal": "Building systems.<br />Leading teams.<br /><span class=\"gradient-text\">Never stopping.</span>",
    "en-banter": "Architect systems.<br />Lead builders.<br /><span class=\"gradient-text\">Zero excuses.</span>",
    "ar-formal": "نبني الأنظمة.<br />نقود المبادرات.<br /><span class=\"gradient-text\">ولا نتوقف أبداً.</span>",
    "ar-slang": "نبني الأنظمة.<br />نقود الفرق.<br /><span class=\"gradient-text\">ومفيش خط رجوع.</span>"
  },

  // ─── CONTACT SECTION ───
  "contact.pill": {
    "en-formal": "LET'S COLLABORATE",
    "en-banter": "HIT ME UP",
    "ar-formal": "لنعمل معاً",
    "ar-slang": "يلا نعمل شغل سوا"
  },
  "contact.title": {
    "en-formal": "Have an idea or want to build something impactful?",
    "en-banter": "Got a crazy technical vision or want to build something wild?",
    "ar-formal": "هل لديك فكرة مشروع أو ترغب في بناء نظام برمجى مؤثر؟",
    "ar-slang": "عندك فكرة مشروع جامدة أو عايز تبني سيستم تقيل؟"
  },
  "contact.desc": {
    "en-formal": "I'm always open to discussing new projects, research ideas, or engineering opportunities.",
    "en-banter": "Always down for high-impact software projects, deep research challenges, or cool engineering collabs.",
    "ar-formal": "أرحب دائماً بمناقشة المشاريع البرمجية، والأفكار البحثية، وفرص الابتكار الهندسي المشترك.",
    "ar-slang": "أنا جاهز لأي فكرة فيها تحدي برمجي، بحث علمي، أو مشروع يضيف قيمة حقيقية."
  },
  "contact.btn": {
    "en-formal": "Visit My GitHub Profile",
    "en-banter": "Check Out My GitHub ↗",
    "ar-formal": "زيارة حسابي على جيتهاب",
    "ar-slang": "خش على جيتهاب بتاعي ↗"
  }
};

// ─── LANGUAGE SWITCHER HANDLER ───
let currentLangMode = localStorage.getItem("adam_portfolio_lang") || "en-formal";

function setPortfolioLanguage(langKey) {
  if (!["en-formal", "en-banter", "ar-formal", "ar-slang"].includes(langKey)) {
    langKey = "en-formal";
  }

  currentLangMode = langKey;
  localStorage.setItem("adam_portfolio_lang", langKey);

  const isArabic = langKey.startsWith("ar");
  document.documentElement.setAttribute("lang", isArabic ? "ar" : "en");
  document.documentElement.setAttribute("dir", isArabic ? "rtl" : "ltr");
  document.body.classList.toggle("rtl-mode", isArabic);
  document.body.classList.toggle("lang-ar", isArabic);
  document.body.classList.toggle("lang-slang", langKey.endsWith("slang") || langKey.endsWith("banter"));

  // Update all text elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (I18N_DATA[key] && I18N_DATA[key][langKey]) {
      el.innerHTML = I18N_DATA[key][langKey];
    }
  });

  // Update active pill button state
  document.querySelectorAll(".lang-opt-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === langKey);
  });

  // Dispatch event for any other subscribers
  window.dispatchEvent(new CustomEvent("langchange", { detail: { lang: langKey } }));
}

document.addEventListener("DOMContentLoaded", () => {
  // Initialize language on load
  setPortfolioLanguage(currentLangMode);

  // Bind click handlers to language switchers
  document.querySelectorAll(".lang-opt-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setPortfolioLanguage(btn.dataset.lang);
    });
  });

  // Top Advisory Banner Dismiss
  const banner = document.getElementById("vibe-banner");
  const dismissBtn = document.getElementById("dismiss-banner");
  if (banner && dismissBtn) {
    if (localStorage.getItem("adam_banner_dismissed") === "true") {
      banner.style.display = "none";
    }
    dismissBtn.addEventListener("click", () => {
      banner.style.opacity = "0";
      setTimeout(() => { banner.style.display = "none"; }, 300);
      localStorage.setItem("adam_banner_dismissed", "true");
    });
  }
});
