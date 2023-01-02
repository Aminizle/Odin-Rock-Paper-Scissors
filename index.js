let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

//generates computer choice
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

//plays one round of player vs computer rock paper scissors
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let cpu = computerSelection.toLowerCase();

    if (player === cpu) {
        console.log("It's a draw!");
        return roundResult = "drawCounter";
    } else if (player === "rock" && cpu === "paper") {
        console.log("You Lose! Paper beats Rock");
        return roundResult =  "computerWins";

    } else if (player === "rock" && cpu === "scissors") {
        console.log("You win! Rock beats Scissors");
        return roundResult =  "playerWins";
    } else if (player === "paper" && cpu === "scissors") {
        console.log("You Lose! Scissors beats Paper")
        return roundResult =  "computerWins";

    } else if (player === "paper" && cpu === "rock") {
        console.log("You Win! Paper beats Rock");
        return roundResult =  "playerWins";

    } else if (player === "scissors" && cpu === "rock") {
        console.log("You Lose! Rock beats Scissors");
        return roundResult =  "computerWins";

    } else if (player === "scissors" && cpu === "paper") {
        console.log("You Win! Scissors beats Paper");
        return roundResult =  "playerWins";

    }
}


function scoreKeeper(roundResult) {
    if (roundResult === "playerWins") {
        playerScore++;
        return;
    } else if (roundResult === "computerWins") {
        computerScore++;
        return;
    } else if (roundResult === "drawCounter") {
        drawScore++;
        return;
    }else {
        console.log("Something broke");
    }

    
    if (playerScore === 5) {
        console.log("Congratulations! You win!")
        return;
    } if (computerScore === 5) {
        console.log("Computer won! Better luck next time!")
        return;
    }
}


//plays multiple rounds of player vs computer rock paper scissors till someone reaches a score of 5
function game() {
    for (let i = 0; i < 1000; i++) {
        let playerSelection = prompt("Rock Paper or Scissors?");
        let computerSelection = getComputerChoice();

        scoreKeeper();
        console.log("Player chose: " + playerSelection);
        console.log("Computer chose: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }

}



game()