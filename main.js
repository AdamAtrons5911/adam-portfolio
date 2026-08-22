// ─── Current Year ───
document.getElementById("year").textContent = new Date().getFullYear();

// ─── Top Scroll Progress Bar & Scroll Parallax ───
const progressBar = document.getElementById("scroll-progress");
const orbitBox = document.getElementById("hero-orbit");
const floatingBadges = document.querySelectorAll(".floating-badge");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  if (progressBar) {
    progressBar.style.width = `${scrollPercent}%`;
  }

  // Subtle Parallax on Hero Orbit & Badges while scrolling
  if (orbitBox && scrollTop < window.innerHeight) {
    const shift = scrollTop * 0.15;
    orbitBox.style.transform = `translateY(${shift}px)`;
    floatingBadges.forEach((badge) => {
      const speed = parseFloat(badge.dataset.speed || 1);
      badge.style.transform = `translateY(${scrollTop * 0.08 * speed}px)`;
    });
  }
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
  const cards = document.querySelectorAll(".tilt-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

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

// ─── Smooth Scroll with Offset for Fixed Header ───
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});
