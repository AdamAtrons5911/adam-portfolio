// ─── Current Year ───
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ─── Top Scroll Progress Bar & Active Section Highlight ───
const progressBar = document.getElementById("scroll-progress");
const sideDots = document.querySelectorAll(".side-nav-dots .dot-item");
const sections = document.querySelectorAll(".page-section");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  if (progressBar) {
    progressBar.style.width = `${scrollPercent}%`;
  }

  // Update Side Dot Indicators
  let currentSectionId = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute("id");
    }
  });

  sideDots.forEach((dot) => {
    const href = dot.getAttribute("href").replace("#", "");
    dot.classList.toggle("active", href === currentSectionId);
  });
}, { passive: true });

// ─── Mouse Spotlight Glow ───
const cursorGlow = document.getElementById("cursor-glow");
if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  }, { passive: true });
}

// ─── 3D Card Tilt on Hover ───
if (window.matchMedia("(pointer: fine)").matches) {
  const tiltCards = document.querySelectorAll(".tilt-card, .leader-image-card, .memory-card, .cert-card");
  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

// ─── Category Filter Tabs ───
const filterTabs = document.querySelectorAll(".filter-tab");
const projectCards = document.querySelectorAll(".p-card");

filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const category = tab.dataset.filter;
    filterTabs.forEach((t) => t.classList.toggle("active", t === tab));

    projectCards.forEach((card) => {
      const match = category === "all" || card.dataset.category === category;
      card.classList.toggle("is-hidden", !match);
    });
  });
});

// ─── Mobile Navigation Toggle ───
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav");
if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ─── Smooth Section-to-Section Scroll ───
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      const headerOffset = 70;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});
