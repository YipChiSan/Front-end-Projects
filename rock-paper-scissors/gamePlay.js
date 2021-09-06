/**
 * Simulates computer game play
 * @returns An element among "Rock", "Paper" and "Scissors"
 */
function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)]; 
}

/**
 * Simulating a signle round of this game
 * @param {String} playerSelection 
 * @param {String} computerSelection 
 * @returns a message indicating the result of this round
 */
function round(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "You are even. Try it again";
    }

    if (playerSelection.toUpperCase() === "ROCK") {
        if (computerSelection.toUpperCase() === "PAPER") {
            return "You lost. Rock is beaten by Paper."
        }

        if (computerSelection.toUpperCase() === "SCISSORS") {
            return "You won. Rock beats Scissors."
        }
    }

    if (playerSelection.toUpperCase() === "PAPER") {
        if (computerSelection.toUpperCase() === "SCISSORS") {
            return "You lost. Paper is beaten by Scissors."
        }

        if (computerSelection.toUpperCase() === "ROCK") {
            return "You won. Paper beats Rock."
        }
    }

    if (playerSelection.toUpperCase() === "SCISSORS") {
        if (computerSelection.toUpperCase() === "ROCK") {
            return "You lost. Scissors is beaten by Rock."
        }

        if (computerSelection.toUpperCase() === "PAPER") {
            return "You won. Scissors beats Paper."
        }
    }
}

/**
 * Check whether is a valid input
 * @param {String} input 
 * @returns Boolean
 */
function isValidInput(input) {
    return (input.toUpperCase() === "ROCK" 
    || input.toUpperCase() === "PAPER" 
    || input.toUpperCase() === "SCISSORS") 
        
}

/**
 * Game play
 */
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let numOfRound = 0;
    while (numOfRound < 5) {
        let playerSelection = window.prompt("What is your choice, Paper, Rock or Scissors?");
        if (isValidInput(playerSelection)) {
            let computerSelection = computerPlay();
            let result = round(playerSelection, computerSelection);
            let winPattern = /^You won/i;
            let losePattern = /^You lost/i;
            if (winPattern.test(result)) {
                playerScore++;
            } else if (losePattern.test(result)) {
                computerScore++;
            } 
            console.log(result);
            numOfRound++;
        } else {
            console.log("Invalid Input");
        }
    }

    if (playerScore > computerScore) {
        console.log("You win the game!")
    }

    if (playerScore < computerScore) {
        console.log("You lose the game!")
    }

    if (playerScore === computerScore) {
        console.log("You are even.")
    }
}

game();