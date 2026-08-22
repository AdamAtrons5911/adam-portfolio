const navToggle = document.querySelector(".nav-toggle"),
  nav = document.querySelector(".site-nav"),
  navLinks = document.querySelectorAll(".site-nav a"),
  filters = document.querySelectorAll(".filter-button"),
  cards = document.querySelectorAll(".experiment-card"),
  status = document.querySelector(".filter-status");
document.getElementById("year").textContent = new Date().getFullYear();
if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const e = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(e));
  });
  navLinks.forEach((e) =>
    e.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }),
  );
}
filters.forEach((e) => {
  e.addEventListener("click", () => {
    const t = e.dataset.filter;
    let n = 0;
    filters.forEach((t) => t.classList.toggle("is-active", t === e));
    cards.forEach((e) => {
      const s = t === "all" || e.dataset.tags.includes(t);
      e.classList.toggle("is-hidden", !s);
      if (s) n += 1;
    });
    status.textContent =
      t === "all"
        ? "Showing all " + n + " projects"
        : "Showing " + n + " " + t + " projects";
  });
});
const revealObserver = new IntersectionObserver(
  (e) => {
    e.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        revealObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((e) => revealObserver.observe(e));
