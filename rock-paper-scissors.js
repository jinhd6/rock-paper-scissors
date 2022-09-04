'use strict';

const getComputerChoice = function() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice = '';

    if (randomNumber === 1) {
        computerChoice = 'Rock';
    } else if (randomNumber === 2) {
        computerChoice = 'Paper';
    } else if (randomNumber === 3) {
        computerChoice = 'Scissors';
    }

    return computerChoice;
}

const playRound = function(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let roundResult = '';

    if (playerSelection === 'rock' && computerSelection === 'rock') {
        roundResult = 'Draw. Both are Rocks';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        roundResult = 'You Lose! Paper beats Rock';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        roundResult = 'You Win! Rock beats Scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        roundResult = 'You Win! Paper beats Rock';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        roundResult = 'Draw. Both are Papers';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        roundResult = 'You Lose! Scissors beat Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        roundResult = 'You Lose! Rock beats Scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        roundResult = 'You Win! Scissors beat Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        roundResult = 'Draw. Both are Scissors';
    }

    return roundResult;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
