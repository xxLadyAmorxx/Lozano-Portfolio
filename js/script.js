/* ============================================================
   Shared behavior across all pages: theme toggle, mobile nav,
   active-link highlighting, scroll reveals, skill bar fill.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Theme (light / dark) ---------- */
  var root = document.documentElement;
  var saved = localStorage.getItem("cll-theme");
  var prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  root.setAttribute("data-theme", saved || (prefersLight ? "light" : "dark"));

  function initThemeToggle() {
    var toggle = document.querySelector("[data-theme-toggle]");
    if (!toggle) return;
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("cll-theme", next);
    });
  }

  /* ---------- Mobile nav ---------- */
  function initNav() {
    var burger = document.querySelector("[data-nav-burger]");
    var links = document.querySelector("[data-nav-links]");
    if (!burger || !links) return;
    burger.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { links.classList.remove("open"); });
    });

    // Highlight current page
    var current = (location.pathname.split("/").pop() || "index.html");
    links.querySelectorAll("a").forEach(function (a) {
      var href = a.getAttribute("href");
      if (href === current || (current === "" && href === "index.html")) {
        a.classList.add("active");
      }
    });
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    var items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Skill bar fill ---------- */
  function initSkillBars() {
    var bars = document.querySelectorAll(".sb-fill");
    if (!bars.length) return;
    if (!("IntersectionObserver" in window)) {
      bars.forEach(function (b) { b.style.width = b.dataset.value + "%"; });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.value + "%";
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    bars.forEach(function (b) { io.observe(b); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initThemeToggle();
    initNav();
    initReveal();
    initSkillBars();
  });
})();