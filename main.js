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

// ─── Scroll Reveal ───
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

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
