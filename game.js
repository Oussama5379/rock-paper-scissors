let humanScore = 0;
let ComputerScore = 0;
numberOfRounds = Number(prompt("Please enter the number of rounds"));
for (let i = 0; i < numberOfRounds; i++) {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);
}
console.log("The computer score is :" + ComputerScore);

console.log("Your score is :" + humanScore);

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
function getHumanChoice() {
  let option = prompt("Please type one of the following options: rock, paper, or scissors");
  while (option != "rock" && option != "paper" && option != "scissors") {
    option = prompt("Please type one of the following options: rock, paper, or scissors");
  }
  return option;
}
function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose!Paper beats Rock");
    ComputerScore++;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You win!Rock beats Scissors");
    humanScore++;
  }
  if (humanChoice == "rock" && computerChoice == "rock") {
    console.log("It's a draw!");
  }
  if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You win!Paper beats Rock");
    humanScore++;
  }
  if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You lose!Scissors beats Paper");
    ComputerScore++;
  }
  if (humanChoice == "paper" && computerChoice == "paper") {
    console.log("It's a draw!");
  }
  if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You win!Scissors beats Paper");
    humanScore++;
  }
  if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You lose!Rock beats Scissors");
    ComputerScore++;
  }
  if (humanChoice == "scissors" && computerChoice == "scissors") {
    console.log("It's a draw!");
  }
}
