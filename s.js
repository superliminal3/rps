function getComputerChoice() {
	let computerChoice = Math.floor(Math.random() * 3);
	switch (computerChoice) {
		case 0: return "rock";
		case 1: return "paper";
		case 2: return "scissors";
		default: break;
	}
}

let getHumanChoice = () => prompt("Enter human choice: ");

function playGame() {
	let computerScore = 0;
	let humanScore = 0;

	function playRound(computerChoice, humanChoice) {
		humanChoice = humanChoice.toLowerCase();
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
	}
	
	const rock = document.querySelector("#rock");
	const paper = document.querySelector("#paper");
	const scissors = document.querySelector("#scissors");

	rock.addEventListener("click", () => {playRound(getComputerChoice(), "rock")});
	paper.addEventListener("click", () => {playRound(getComputerChoice(), "paper")});
	scissors.addEventListener("click", () => {playRound(getComputerChoice(), "scissors")});

	const body = document.querySelector("body");
	const display = document.createElement("div");
	body.appendChild(display);

	const gameResult = document.createElement("div");
	body.appendChild(gameResult);

//		if (computerScore == humanScore) {
//			gameResult.textContent = "No winner!";
//		} else {
//			(computerScore > humanScore) ? (gameResult.textContent = "Computer wins!") : (gameResult.textContent = "Human wins!");
//		}
//	}
}

playGame();
