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

const calcScore = function(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    let score = 0;
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        score = 1;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        score = 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        score = 1;
    }

    return score;
}

const game = function() {
    let totalScore = 0;

    for (let i = 1; i <= 5; i++) {
        const playerSelection = prompt('Rock Paper Scissors!\n(Choose from Rock/Paper/Scissors)','');
        const computerSelection = getComputerChoice();

        roundMessage = playRound(playerSelection, computerSelection);
        totalScore += calcScore(playerSelection, computerSelection);
        
        alert(roundMessage);
        alert('Score: ' + String(totalScore));
    }
}

game();
