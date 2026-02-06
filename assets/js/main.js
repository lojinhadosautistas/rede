/**
 * Template Name: Bocor
 * Updated & hardened for multi-page system (Hub / Login / Public)
 */

(function () {
  "use strict";

  /* =========================
     SCROLL HEADER STATE
  ========================== */
  function toggleScrolled() {
    const body = document.querySelector("body");
    const header = document.querySelector("#header");

    if (!header) return;

    if (
      !header.classList.contains("scroll-up-sticky") &&
      !header.classList.contains("sticky-top") &&
      !header.classList.contains("fixed-top")
    ) return;

    window.scrollY > 100
      ? body.classList.add("scrolled")
      : body.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /* =========================
     MOBILE NAV TOGGLE
  ========================== */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToggle() {
    document.body.classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener("click", mobileNavToggle);
  }

  /* =========================
     CLOSE MOBILE NAV ON LINK
  ========================== */
  document.querySelectorAll(".navmenu a").forEach(link => {
    link.addEventListener("click", () => {
      if (docum
