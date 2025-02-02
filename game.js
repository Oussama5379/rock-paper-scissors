let humanScore = 0;
let ComputerScore = 0;
const buttons = document.querySelectorAll("button");
console.log(buttons.length);
buttons.forEach((button) => {
	button.addEventListener("click", () => clickEvent(button.value));
});
function clickEvent(value) {
	score = playRound(value, getComputerChoice());
	humanScore = score[0];
	ComputerScore = score[1];
	let humanP = document.createElement("p");
	let computerP = document.createElement("p");
	let result = document.querySelector(".result");
	humanP.textContent = "Your score is : " + humanScore;
	computerP.textContent = "The Computer score is : " + ComputerScore;
	result.innerHTML = '<div class="result"></div>';
	result.appendChild(humanP);
	result.appendChild(computerP);
	if (humanScore == 5) {
		alert("Congratulations ,you win the game");
		location.reload();
	} else if (ComputerScore == 5) {
		alert("Unfortunately,you lose");
		location.reload();
	}
}
function getComputerChoice() {
	randomNumber = Math.ceil(Math.random() * 3);
	switch (randomNumber) {
		case 1:
			return "rock";
			break;
		case 2:
			return "paper";
			break;
		default:
			return "scissors";
	}
}
function playRound(humanChoice, computerChoice) {
	if (humanChoice == "rock" && computerChoice == "paper") {
		alert("You lose!Paper beats Rock");
		ComputerScore++;
	} else if (humanChoice == "rock" && computerChoice == "scissors") {
		alert("You win!Rock beats Scissors");
		humanScore++;
	}
	if (humanChoice == "rock" && computerChoice == "rock") {
		alert("It's a draw!");
	}
	if (humanChoice == "paper" && computerChoice == "rock") {
		alert("You win!Paper beats Rock");
		humanScore++;
	}
	if (humanChoice == "paper" && computerChoice == "scissors") {
		alert("You lose!Scissors beats Paper");
		ComputerScore++;
	}
	if (humanChoice == "paper" && computerChoice == "paper") {
		alert("It's a draw!");
	}
	if (humanChoice == "scissors" && computerChoice == "paper") {
		alert("You win!Scissors beats Paper");
		humanScore++;
	}
	if (humanChoice == "scissors" && computerChoice == "rock") {
		alert("You lose!Rock beats Scissors");
		ComputerScore++;
	}
	if (humanChoice == "scissors" && computerChoice == "scissors") {
		alert("It's a draw!");
	}
	const score = [humanScore, ComputerScore];
	return score;
}
