// Variables declaration

const restartButton = document.querySelector(".restart-btn");
const instructionsButton = document.querySelector(".info-btn");
const holdButton = document.querySelector(".hold-btn");
const rollDice = document.querySelector(".roll-dice-btn");
let playerName = document.querySelectorAll(".player-name");
let Player1roundScore = document.querySelector(".player-1-rnd-score");
let Player2roundScore = document.querySelector(".player-2-rnd-score");
let player1TotalScore = document.querySelector(".player-1-total");
let player2TotalScore = document.querySelector(".player-2-total");
let currentPlay = ["Player1", "Player2"];
let playerOverAllScore = [0, 0];
let playCurrentScore = 0;
let dice1 = document.querySelector(".dice-1");
let dice2 = document.querySelector(".dice-2");

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

  if (dice === 1 && secondDice === 1) {
    playCurrentScore = 0;
  }

  Player1roundScore.textContent = playCurrentScore;
});

// Hold button logic

holdButton.addEventListener("click", () => {
  playerOverAllScore[0] += playCurrentScore;
  player1TotalScore.textContent = playerOverAllScore[0];
  playCurrentScore = 0;
  Player1roundScore.textContent = playCurrentScore;
});
