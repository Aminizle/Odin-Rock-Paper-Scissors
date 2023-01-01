



function getComputerChoice() {
let chanceGenerator = Math.floor(Math.random() * 100);
if (chanceGenerator <= 33) {
     let computerChoice = "Rock";
     console.log(computerChoice);
}
else if (chanceGenerator >= 66) {
     let computerChoice = "Scissors";
     console.log(computerChoice);
}
else {
     let computerChoice = "Paper";
     console.log(computerChoice);
}

}

getComputerChoice();