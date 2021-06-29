"use strict";

const buttons = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const closeButtons = document.querySelector(".close-modal");
const openButtons = document.querySelectorAll(".show-modal");

// Hide Overlay & Buttons:
const addClasses = function () {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.add("hidden");
    overlay.classList.add("hidden");
  }
};

closeButtons.addEventListener("click", addClasses);
overlay.addEventListener("click", addClasses);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    addClasses();
  }
});
