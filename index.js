


function getComputerChoice() {
    let chanceGenerator = Math.floor(Math.random() * 100);
    if (chanceGenerator <= 33) {
        let computerChoice = "Rock";        
        return computerChoice;
    }
    else if (chanceGenerator >= 66) {
        let computerChoice = "Scissors";        
        return computerChoice;
    }
    else {
        let computerChoice = "Paper";       
        return computerChoice;
    }
}


function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let cpu = computerSelection.toLowerCase();

    if (player === cpu) {
        console.log("It's a draw!");
    } else if (player === "rock" && cpu === "paper") {
        console.log("You Lose! Paper beats Rock");
    } else if (player === "rock" && cpu === "scissors") {
        console.log("You win! Rock beats Scissors");
    } else if (player === "paper" && cpu === "scissors") {
        console.log("You Lose! Scissors beats Paper")
    } else if (player === "paper" && cpu === "rock") {
        console.log("You Win! Paper beats Rock");
    } else if (player === "scissors" && cpu === "rock") {
        console.log("You Lose! Rock beats Scissors");
    } else if (player === "scissors" && cpu === "paper") {
        console.log("You Win! Scissors beats Paper");
    }
}



function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock Paper or Scissors?");
        let computerSelection = getComputerChoice();
        
        console.log("Player chose: "+ playerSelection);
        console.log("Computer chose: "+ computerSelection);     
        console.log(playRound(playerSelection, computerSelection));
    }

}

game()