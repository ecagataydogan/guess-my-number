"use strict";

//Button elements
const btnCheckEl = document.querySelector(".check");
const btnAgainEl = document.querySelector(".again");

//DOM elements
const guessEl = document.querySelector(".guess");
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");
const secretNumberEl = document.querySelector(".secret-number");
const bodyEl = document.querySelector("body");

//Initial values for game
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let message = "";
let score = 20;
let highscore = 0;

//Event listeners

//Check button event listener
btnCheckEl.addEventListener("click", function () {
  const guess = Number(guessEl.value);
  if (score > 1) {
    if (guess < 1 || guess > 20) {
      message = "Number between 1-20";
    } else if (guess > secretNumber) {
      message = "Too high";
      score--;
    } else if (guess < secretNumber) {
      message = "Too low";
      score--;
    } else if (guess === secretNumber) {
      message = "Correct Number !";
      correctResultUpdateDOM();
    }
  } else {
    message = "You lost the game";
    score = 0;
  }
  updateDOM();
});

//Again button event listener
btnAgainEl.addEventListener("click", function () {
  restartGame();
  updateDOM();
});

//Helper functions
const updateDOM = function () {
  messageEl.textContent = message;
  scoreEl.textContent = score;
  highscoreEl.textContent = highscore;
};

const correctResultUpdateDOM = function () {
  bodyEl.style.backgroundColor = "#60b347";
  secretNumberEl.style.width = "30rem";
  secretNumberEl.textContent = secretNumber;
  if (score > highscore) {
    highscore = score;
    highscoreEl.textContent = highscore;
  }
};

const restartGame = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message = "Start guessing...";
  score = 20;
  bodyEl.style.backgroundColor = "#222";
  secretNumberEl.style.width = "15rem";
  secretNumberEl.textContent = secretNumber;
  messageEl.textContent = message;
  secretNumberEl.textContent = "?";
  guessEl.value = "";
};
