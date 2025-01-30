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
