// ─── Year ───
document.getElementById("year").textContent = new Date().getFullYear();

// ─── Mobile Nav ───
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll(".nav a").forEach((a) =>
    a.addEventListener("click", () => {
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

// ─── Scroll Reveal with IntersectionObserver ───
// Simply adds .active class which triggers CSS @keyframes animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
);

document.querySelectorAll(".anim").forEach((el) => observer.observe(el));

// ─── Smooth Scroll ───
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
