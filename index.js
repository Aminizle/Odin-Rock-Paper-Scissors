


function getComputerChoice() {
    let chanceGenerator = Math.floor(Math.random() * 100);
    if (chanceGenerator <= 33) {
        let computerChoice = "Rock";
        console.log(computerChoice);
        return computerChoice;
    }
    else if (chanceGenerator >= 66) {
        let computerChoice = "Scissors";
        console.log(computerChoice);
        return computerChoice;
    }
    else {
        let computerChoice = "Paper";
        console.log(computerChoice);
        return computerChoice;
    }
}
getComputerChoice();

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let cpu = computerSelection.toLowerCase();

    if (player === cpu) {
        console.log("It's a draw!");
    } else if (player === "rock" && cpu === "paper") {
        console.log("You Lose! Paper beats Rock");
    } else if (player === "rock" && cpu === "scissors") {
        console.log("You win! Rock beats scissors");
    } else if (player === "paper" && cpu === "scissors") {
        console.log("You Lose! scissors beats Paper")
    } else if (player === "paper" && cpu === "rock") {
        console.log("You Win! Paper beats Rock");
    } else if (player === "scissors" && cpu === "rock") {
        console.log("You Lose! Rock beats Scissors");
    } else if (player === "scissors" && cpu === "paper") {
        console.log("You Win! Scissors beats Paper");
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));