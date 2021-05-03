// Variables declaration

const restartButton = document.querySelector(".restart-btn");
const instructionsButton = document.querySelector(".info-btn");
const holdButton = document.querySelector(".hold-btn");
const rollDice = document.querySelector(".roll-dice-btn");
let playerName = document.querySelectorAll(".player-name");
let Player1roundScore = document.querySelector(".player-1-rnd-score");
const player1Wrapper = document.querySelector(".player-1-wrapper");
const player2Wrapper = document.querySelector(".player-2-wrapper");
let Player2roundScore = document.querySelector(".player-2-rnd-score");
let player1TotalScore = document.querySelector(".player-1-total");
let player2TotalScore = document.querySelector(".player-2-total");
let currentPlayer = 1;
let playerOverAllScore = [0, 0];
let playCurrentScore = 0;
let dice1 = document.querySelector(".dice-1");
let dice2 = document.querySelector(".dice-2");
let newParagraph = document.createElement("span");
newParagraph.textContent = "🔴";
newParagraph.classList.add("active-dot");

dice1.style.display = "none";
dice2.style.display = "none";

// Roll dice logic
rollDice.addEventListener("click", () => {
  let dice = Math.ceil(Math.random() * 6);
  let secondDice = Math.ceil(Math.random() * 6);

  dice1.style.display = "inline";
  dice2.style.display = "inline";

  dice1.src = "dice-" + dice + ".png";
  dice2.src = "dice-" + secondDice + ".png";

  playCurrentScore += dice + secondDice;

  if (dice !== 1 && secondDice !== 1) {
  } else {
    playCurrentScore = 0;
  }

  document.querySelector(".").textContent = playCurrentScore;
});

// Hold button logic

holdButton.addEventListener("click", () => {
  playerOverAllScore[0] += playCurrentScore;
  player1TotalScore.textContent = playerOverAllScore[0];
  playCurrentScore = 0;
  Player1roundScore.textContent = playCurrentScore;
});
