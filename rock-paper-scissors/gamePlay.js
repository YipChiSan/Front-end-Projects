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

function createElement(type, name, text=null) {
    let display = document.createElement(type);
    display.setAttribute("id", name);
    display.innerHTML = text;
    document.body.appendChild(display);
}

function updateScore(elementID) {
    let score = document.getElementById(elementID).textContent;
    let scoreInt = parseInt(score) + 1;
    document.getElementById(elementID).textContent = scoreInt;
}


function optionBtnClick(playerSelection) {

    if (document.getElementById("roundNumber").textContent < "5") {
        let computerSelection = computerPlay();
        let result = round(playerSelection, computerSelection);
        let winPattern = /^You won/i;
        let losePattern = /^You lost/i;
        if (winPattern.test(result)) {
            updateScore("playerScore");
            updateScore("roundNumber");
            document.getElementById("displayMessage").textContent = result + '<br/>';
        } else if (losePattern.test(result)) {
            updateScore("computerScore");
            updateScore("roundNumber");
            document.getElementById("displayMessage").textContent = result + '<br/>';
        } else {
            updateScore("roundNumber");
            document.getElementById("displayMessage").textContent = result + '<br/>';
        }
        if (document.getElementById("roundNumber").textContent === "5") {
            if (document.getElementById("playerScore").textContent > document.getElementById("computerScore").textContent) {
                document.getElementById("displayMessage").textContent += "You win the game.";
            } else if (document.getElementById("playerScore").textContent < document.getElementById("computerScore").textContent) {
                document.getElementById("displayMessage").textContent += "You lose the game.";
            } else {
                document.getElementById("displayMessage").textContent += "You are tied.";
            }   
    }
    }
}

function restartBtnClick() {
    document.getElementById("playerScore").textContent = "0";
    document.getElementById("computerScore").textContent = "0";
    document.getElementById("roundNumber").textContent = "0";
    document.getElementById("displayMessage").textContent = "What is your choice: Paper, Rock or Scissors?";
}

