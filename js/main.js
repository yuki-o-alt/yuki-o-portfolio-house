"use strict";

// ページトップへ戻るボタンを表示/非表示
const pageupIcon = document.getElementById("js-arrow");
window.addEventListener("scroll", () => {
  if (700 < window.scrollY) {
    pageupIcon.classList.remove("hidden");
    pageupIcon.classList.add("fadein");
  } else {
    pageupIcon.classList.remove("fadein");
    pageupIcon.classList.add("fadeout");
  }
});

// スムーズスクロールでページトップに戻る
pageupIcon.addEventListener("click", (e) => {
  e.preventDefault();
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

// ハンバーガーメニュー
const hamburgerButton = document.getElementById("hamburger-button");
const overlay = document.getElementById("hamburger-overlay");
const hamburgerBox = document.getElementById("hamburger-listbox");
hamburgerButton.addEventListener("click", () => {
  overlay.classList.toggle("appear");
  hamburgerButton.classList.toggle("clicked");
  hamburgerBox.classList.toggle("clicked");
});
