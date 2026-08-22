// ─── Year ───
document.getElementById("year").textContent = new Date().getFullYear();

// ─── Mobile Nav Toggle ───
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  navLinks.forEach((link) =>
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

// ─── Project Filters ───
const filters = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    const cat = btn.dataset.filter;
    filters.forEach((b) => b.classList.toggle("is-active", b === btn));
    cards.forEach((card) => {
      const match = cat === "all" || card.dataset.category === cat;
      card.classList.toggle("is-hidden", !match);
    });
  });
});

// ─── Creative Scroll Reveal ───
// Assign different motion styles to elements for variety
function assignMotionVariants() {
  // Hero content slides from left, visual scales in
  const heroContent = document.querySelector(".hero-content");
  const heroVisual = document.querySelector(".hero-visual");
  if (heroContent) heroContent.classList.add("reveal-left");
  if (heroVisual) heroVisual.classList.replace("reveal", "reveal-scale");

  // About: text from left, capabilities from right
  const aboutText = document.querySelector(".about-text");
  const capabilities = document.querySelector(".capabilities");
  if (aboutText) aboutText.classList.replace("reveal", "reveal-left");
  if (capabilities) capabilities.classList.replace("reveal", "reveal-right");

  // Capability cards get staggered flip animations
  document.querySelectorAll(".cap-card").forEach((card, i) => {
    card.classList.add("reveal-flip");
    card.style.setProperty("--delay", `${i * 120}ms`);
  });

  // Section tags blur in
  document.querySelectorAll(".section-tag").forEach((tag) => {
    tag.classList.replace("reveal", "reveal-blur");
  });

  // Section headings (h2) slide from left
  document.querySelectorAll(".projects h2, .stack-section h2, .contact h2").forEach((h) => {
    if (h.classList.contains("reveal")) {
      h.classList.replace("reveal", "reveal-left");
    }
  });

  // Section descriptions blur in
  document.querySelectorAll(".section-desc").forEach((desc) => {
    if (desc.classList.contains("reveal")) {
      desc.classList.replace("reveal", "reveal-blur");
    }
  });

  // Filter bar flips in
  const filterBar = document.querySelector(".filter-bar");
  if (filterBar) filterBar.classList.replace("reveal", "reveal-flip");

  // Project cards: alternate between motion styles with staggered delays
  const motionStyles = ["reveal", "reveal-left", "reveal-right", "reveal-scale", "reveal-flip"];
  document.querySelectorAll(".card.reveal").forEach((card, i) => {
    const style = motionStyles[i % motionStyles.length];
    if (style !== "reveal") card.classList.replace("reveal", style);
    card.style.setProperty("--delay", `${(i % 3) * 100}ms`);
  });

  // Stack grid scales in
  const stackGrid = document.querySelector(".stack-grid");
  if (stackGrid) stackGrid.classList.replace("reveal", "reveal-scale");

  // Contact section flips in
  const contactInner = document.querySelector(".contact > .container");
  if (contactInner) contactInner.classList.replace("reveal", "reveal-flip");
}

assignMotionVariants();

// ─── Intersection Observer for all reveal variants ───
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
);

// Observe all reveal variants
document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-flip, .reveal-blur"
).forEach((el) => revealObserver.observe(el));

// ─── Smooth scroll for anchor links ───
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
