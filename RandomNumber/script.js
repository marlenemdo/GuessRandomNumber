"use strict";

//Variables and functions
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const currentScore = function (scoreNow) {
  document.querySelector(".score").textContent = scoreNow;
};

//Define the number to be guessed
document.querySelector(".number").value = number;
console.log(number);

//Clicking on Check button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //No number entered
  if (!guess) {
    displayMessage("Enter a number first!");

    //Wrong number
  } else if (guess > 20) {
    displayMessage("Enter a number between 1 and 20");
    score--;
    currentScore(score);
  } else if (guess !== number) {
    displayMessage(guess > number ? "Too high!" : "Too low!");
    score--;
    currentScore(score);

    //Game over
    if (score === 0) {
      currentScore(score);
      displayMessage("GAME OVER!");
      document.querySelector(".check").disabled = true;
      document.querySelector("body").style.backgroundColor = "#cf3f3f";
    }
    //Correct number
  } else if (guess === number) {
    displayMessage("Correct number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = number;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".check").disabled = false;
  document.querySelector(".number").style.width = "15rem";
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
  displayMessage("Start guessing...");
  currentScore(score);
  document.querySelector(".number").textContent = "?";
});
