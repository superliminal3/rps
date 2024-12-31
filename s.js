const body = document.querySelector("body");

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const display = document.createElement("div");
const gameResult = document.createElement("div");
const restart = document.createElement("button");

rock.textContent = "rock";
paper.textContent = "paper";
scissors.textContent = "scissors";
restart.textContent = "restart";

rock.addEventListener("click", () => {playRound(getComputerChoice(), "rock")});
paper.addEventListener("click", () => {playRound(getComputerChoice(), "paper")});
scissors.addEventListener("click", () => {playRound(getComputerChoice(), "scissors")});
restart.addEventListener("click", () => {startAgain()});

body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);
body.appendChild(display);
body.appendChild(gameResult);

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	let computerChoice = Math.floor(Math.random() * 3);
	switch (computerChoice) {
		case 0: return "rock";
		case 1: return "paper";
		case 2: return "scissors";
		default: break;
	}
}

function checkScore() {
	if (humanScore == 5) {
		removeButtons();
		gameResult.textContent = "Human wins!";
		humanScore = 0;
		computerScore = 0;
	} else if (computerScore == 5) {
		removeButtons();
		gameResult.textContent = "Computer wins!";
		humanScore = 0;
		computerScore = 0;
	}
}

function removeButtons() {
	body.removeChild(rock);
	body.removeChild(paper);
	body.removeChild(scissors);
	body.insertBefore(gameResult, display);
	body.insertBefore(restart, display);
}

function startAgain() {
	body.removeChild(restart);
	body.insertBefore(rock, display);
	body.insertBefore(paper, display);
	body.insertBefore(scissors, display);
	playRound(getComputerChoice(), "");
}

function playRound(computerChoice, humanChoice) {
	if (computerScore == 0 || humanScore == 0) {
		gameResult.textContent = "";
	}

	if (computerChoice == "rock" && humanChoice == "paper") {
		humanScore++;
		display.textContent = "Human wins! paper beats rock";
	} else if (computerChoice == "rock" && humanChoice == "scissors") {
		computerScore++;
		display.textContent = "Human loses! rock beats scissors";
	} else if (computerChoice == "paper" && humanChoice == "rock") {
		computerScore++;
		display.textContent = "Human loses! paper beats rock";
	} else if (computerChoice == "paper" && humanChoice == "scissors") {
		humanScore++;
		display.textContent = "Human wins! scissors beats paper";
	} else if (computerChoice == "scissors" && humanChoice == "rock") {
		humanScore++;
		display.textContent = "Human wins! rock beats scissors";
	} else if (computerChoice == "scissors" && humanChoice == "paper") {
		computerScore++;
		display.textContent = "Human loses! scissors beat paper";
	} else {
		display.textContent = "Tie";
	}

	checkScore();
}
