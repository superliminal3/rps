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
			console.log("Human wins! paper beats rock");
		} else if (computerChoice == "rock" && humanChoice == "scissors") {
			computerScore++;
			console.log("Human loses! rock beats scissors");
		} else if (computerChoice == "paper" && humanChoice == "rock") {
			computerScore++;
			console.log("Human loses! paper beats rock");
		} else if (computerChoice == "paper" && humanChoice == "scissors") {
			humanScore++;
			console.log("Human wins! scissors beats paper");
		} else if (computerChoice == "scissors" && humanChoice == "rock") {
			humanScore++;
			console.log("Human wins! rock beats scissors");
		} else if (computerChoice == "scissors" && humanChoice == "paper") {
			computerScore++;
			console.log("Human loses! scissors beat paper");
		} else {
			console.log("Tie");
		}
	}

	for (let i = 0; i < 5; i++) {
		playRound(getComputerChoice(), getHumanChoice());
	}

	if (computerScore == humanScore) {
		console.log("No winner!");
	} else {
		(computerScore > humanScore) ? (console.log("Computer wins!")) : (console.log("Human wins!"));
	}

}

playGame();
