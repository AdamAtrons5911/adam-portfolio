/**
 * Adam Abdullah Portfolio - Bilingual Engine (EN / AR RTL)
 */

const I18N_DATA = {
  en: {
    dir: "ltr",
    lang: "en",
    nav: {
      projects: "<span>01.</span> Projects",
      certificates: "<span>02.</span> Certificates",
      memories: "<span>03.</span> Memories",
      story: "<span>04.</span> Story",
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
    certs: {
      tag: "VERIFIED CREDENTIALS · CERTIFICATIONS",
      title: "Certified Technical Milestones",
      subtitle: "Official credentials from the Ministry of Communications, CRA programs, Digitobia, Codeavour, and specialized academies."
    },
    memories: {
      tag: "EARLY DAYS · MEMORIES & ORIGINS",
      title: "Memories from the Journey",
      subtitle: "Moments that shaped my growth — from attending my very first Google tech summit, to teaching my little sister coding at age 11, to competing across national stages."
    },
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
      pillarsTitle: "Core Engineering Focus",
      pillar1Title: "Full-Stack & Web Architecture",
      pillar1Desc: "React, TypeScript, Express, PostgreSQL, Vanilla JS modular design, Playwright regression testing.",
      pillar2Title: "Data Science & Pipelines",
      pillar2Desc: "Exploratory analytics, automated web scraping (BS4), relational SQLite workflows, Pandas, Seaborn.",
      pillar3Title: "AI, IoT & Hardware",
      pillar3Desc: "TensorFlow autoencoders, anomaly detection, Arduino sensors, C++ embedded firmware.",
      pillar4Title: "Branding, UI & Gamification",
      pillar4Desc: "HTML5 Canvas physics, Web Audio API synthesis, commercial branding, promotional collateral."
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

  ar: {
    dir: "rtl",
    lang: "ar",
    nav: {
      projects: "<span>٠١.</span> المشاريع",
      certificates: "<span>٠٢.</span> الشهادات",
      memories: "<span>٠٣.</span> الذكريات",
      story: "<span>٠٤.</span> القصة والقيادة",
      stack: "<span>٠٥.</span> التقنيات",
      github: "الملف الشخصي ↗"
    },
    header: {
      role: "باني أنظمة · مطور برمجيات"
    },
    hero: {
      pill: "باني أنظمة شغوف · أسوان، مصر",
      title: "أبني <span class=\"gradient-text\">أنظمة عملية حقيقية</span> من الصفر.",
      desc: "أهلاً، أنا <strong>آدم عبد الله</strong> — مطور برمجيات وباني أنظمة عمري 15 عاماً من <strong>أسوان، مصر</strong>. شغوف بهندسة البرمجيات، مسارات تحليل البيانات، نماذج الذكاء الاصطناعي، والعتاد الذكي. أتعلم ببناء ونشر كود فعلي، وتجربة أحدث التقنيات لتحويل الأفكار إلى حلول ملموسة.",
      btnProjects: "استكشف +15 مشروعاً",
      btnMemories: "📸 البدايات والذكريات",
      btnGithub: "GitHub",
      metricIsef: "مشارك في آيسف (ISEF)",
      metricCamp: "طالباً قِدتهم بمخيم دَوّي",
      metricProjects: "مشاريع برمجية مُنفذة",
      metricDeci: "خريج مبادرة أشبال مصر (DECI)",
      badgeTitle: "وُلِدتُ لأكون قائداً 👑",
      badgeSub: "آدم عبد الله · دائماً في قلب الحدث والقيادة"
    },
    projects: {
      tag: "أعمال موثقة · مستودعات كود حقيقية",
      title: "أبرز المشروعات والأنظمة البرمجية",
      subtitle: "كل مشروع معروض هنا مدعوم بأكواد برمجية كاملة، مستودعات مفتوحة على GitHub، أو تطبيقات منشورة تعمل مباشرة.",
      filterAll: "كل المشاريع",
      filterApps: "البرمجيات والويب",
      filterAi: "الذكاء الاصطناعي والعتاد",
      filterData: "تحليل البيانات",
      filterCreative: "الألعاب والتصميم"
    },
    certs: {
      tag: "الشهادات والاعتمادات الرسمية",
      title: "الشهادات والمسارات المعتمدة",
      subtitle: "اعتمادات وشهادات رسمية من وزارة الاتصالات، مسابقة Codeavour الدولية، برامج CRA، ومؤسسات التكنولوجيا المتخصصة."
    },
    memories: {
      tag: "البدايات · محطات وذكريات ملهمة",
      title: "ذكريات من رحلة التعلم والتطوير",
      subtitle: "محطات فارقة صنعت شغفي — من حضور أول مؤتمر تقني لجوجل، لتعليم أختي الصغيرة البرمجة في سن 11، إلى إلقاء المحاضرات والمنافسة في المحافل الوطنية والدولية."
    },
    story: {
      tag: "النبذة والقيادة · الأثر المجتمعي",
      title: "بناء الأنظمة.<br />قيادة الفرق.<br /><span class=\"gradient-text\">شغف لا يتوقف.</span>",
      p1: "أنا <strong>آدم عبد الله</strong> من محافظة أسوان، مصر. بدأت رحلتي في عالم التكنولوجيا مبكراً ولم أتوقف يوماً عن التعلم والابتكار. سواء كان الأمر تدريب نماذج ذكاء اصطناعي على قراءات الحساسات، أو تصميم واجهات وأنظمة تشغيل ويب، أو قيادة المخيمات الطلابية؛ شغفي الحقيقي هو تحويل الأفكار المعقدة إلى واقع ملموس.",
      p2: "في صيف 2024، توليت منصب <strong>رئيس مخيم \"دَوّي\" الصيفي</strong>، حيث قمت بتنظيم وتوجيه وقيادة أكثر من <strong>400+ طالب</strong> عبر فرق عمل تقنية وثقافية وابتكارية متعددة.",
      achieve1: "المشاركة 3 مرات في معرض آيسف (ISEF)",
      achieve1Sub: "ابتكار نظام ذكاء اصطناعي وإنترنت الأشياء لحماية اللقاحات حرارياً",
      achieve2: "نهائيات المشروع الوطني للقراءة",
      achieve2Sub: "تمثيل محافظة أسوان في التصفيات المركزية بالعاصمة الإدارية الجديدة",
      achieve3: "مبادرة أشبال مصر الرقمية (DECI)",
      achieve3Sub: "التخرج بمرتبة الشرف في مسارات تطوير البرمجيات والابتكار الرقمي",
      pillarsTitle: "محاور التركيز الهندسي والتقني",
      pillar1Title: "تطوير الويب وهندسة البرمجيات",
      pillar1Desc: "React, TypeScript, Express, PostgreSQL, وتصميم بنية معيارية بـ Vanilla JS مع اختبارات Playwright.",
      pillar2Title: "علم البيانات ومسارات المعالجة",
      pillar2Desc: "التحليل الاستكشافي، كشط البيانات آلياً (BS4)، قواعد بيانات SQLite العلائقية، Pandas، و Seaborn.",
      pillar3Title: "الذكاء الاصطناعي والعتاد المدمج",
      pillar3Desc: "نماذج Autoencoders لكشف الشذوذ بـ TensorFlow، وبرمجة حساسات Arduino بلغة ++C.",
      pillar4Title: "الهوية البصرية وتجربة المستخدم والألعاب",
      pillar4Desc: "محاكاة فيزياء Canvas بـ HTML5، توليف الصوت بـ Web Audio API، وتصميم الهويات البصرية."
    },
    stack: {
      tag: "الأدوات والتقنيات",
      title: "حزمة التقنيات والأدوات",
      subtitle: "التقنيات التي أستخدمها فعلياً في مشروعاتي، مستودعاتي البرمجية، وتجاربي المعملية."
    },
    contact: {
      pill: "لنتعاون معاً",
      title: "هل لديك فكرة أو ترغب في بناء مشروع مميز؟",
      desc: "مرحباً دائماً بمناقشة الأفكار الجديدة، المشروعات التقنية، وفرص التعاون والبحث العلمي.",
      emailLabel: "البريد الإلكتروني",
      ghLabel: "GitHub",
      locLabel: "الموقع الجغرافي",
      locVal: "أسوان، مصر",
      btn: "زيارة حسابي على GitHub"
    },
    footer: {
      role: "باني أنظمة · مطور برمجيات",
      tagline: "شغوف ببناء وتطوير أنظمة برمجية وذكاء اصطناعي وأجهزة عتادية تعمل بكفاءة في الواقع.",
      copy: "© <span id=\"year\"></span> آدم عبد الله. صُمم وبُني بالكود والأدلة الحقيقية."
    }
  }
};

/**
 * Switch language and apply RTL / LTR dynamically
 */
function setLanguage(lang) {
  const data = I18N_DATA[lang] || I18N_DATA.en;
  
  // Set html attributes
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

  // Update Year in footer if rendered
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
