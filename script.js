"use strict";

const container = document.querySelector(".container");
const icon = document.querySelector(".icon");
const wait = document.querySelector(".wait");
const before = document.querySelector(".before");
const complete = document.querySelector(".complete");
const text = document.querySelector(".text");
const ball = document.querySelectorAll(".ball");

let working = false;
container.addEventListener("click", function () {
  if (working === false) {
    working = true;
    container.classList.add("width");
    icon.classList.add("opacity-0");
    wait.classList.add("opacity-1");
    before.classList.add("width-before");
    setTimeout(() => {
      wait.classList.remove("opacity-1");
      before.classList.add("opacity-0");
    }, 2500);
    setTimeout(() => {
      ball.forEach((ball) => {
        ball.classList.remove("opacity-0");
        ball.classList.add("opacity-1");
      });
    }, 3800);
    complete.classList.add("opacity-1");
    setTimeout(() => {
      complete.classList.remove("opacity-1");
      complete.style.transition = "all 0.4s 1s";
    }, 5000);
    text.classList.add("opacity-1");
  }
});
