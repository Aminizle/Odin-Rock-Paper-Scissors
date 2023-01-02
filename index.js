//DOM Elements
const computerInput = document.getElementById('computer-choice');
const playerInput = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

//Click Event Listeners
rockButton.addEventListener('click', () => {

    playRound("Rock", getComputerChoice());
})
paperButton.addEventListener('click', () => {
    playRound("Paper", getComputerChoice())
})
scissorsButton.addEventListener('click', () => {
    playRound("Scissors", getComputerChoice())
})

//Global variables
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

    playerInput.innerText = playerSelection;
    computerInput.innerText = computerSelection;

    if (player === cpu) {
        resultDisplay.innerText = "It's a draw!";
        return roundResult = "drawCounter";
    } else if (player === "rock" && cpu === "paper") {
        resultDisplay.innerText = "You Lose! Paper beats Rock";
        return roundResult = "computerWins";

    } else if (player === "rock" && cpu === "scissors") {
        resultDisplay.innerText = "You win! Rock beats Scissors";
        return roundResult = "playerWins";
    } else if (player === "paper" && cpu === "scissors") {
        resultDisplay.innerText = "You Lose! Scissors beats Paper";
        return roundResult = "computerWins";

    } else if (player === "paper" && cpu === "rock") {
        resultDisplay.innerText = "You Win! Paper beats Rock";
        return roundResult = "playerWins";

    } else if (player === "scissors" && cpu === "rock") {
        resultDisplay.innerText = "You Lose! Rock beats Scissors";
        return roundResult = "computerWins";

    } else if (player === "scissors" && cpu === "paper") {
        resultDisplay.innerText = "You Win! Scissors beats Paper";
        return roundResult = "playerWins";

    }
}

function game() {
    for (let i = 0; i < 5; i++) {

        console.log("Player chose: " + playerSelection);
        let computerSelection = getComputerChoice();
        console.log("Computer chose: " + computerSelection);

        playRound(playerSelection, computerSelection);

        if (roundResult == "playerWins") {
            playerScore++;
            console.log("Player score: " + playerScore);


        } else if (roundResult === "computerWins") {
            computerScore++;
            console.log("Computer score: " + computerScore);

        } else if (roundResult === "drawCounter") {
            drawScore++;
            console.log("Player score: " + drawScore);
        }


        // if (playerScore === 5) {
        //     console.log("Congratulations! You win!")
        //     return;
        // } if (computerScore === 5) {
        //     console.log("Computer won! Better luck next time!")
        //     return;
        // }
    }

}



