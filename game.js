function getComputerChoice() {
    min = Math.ceil(1);
    max = Math.floor(3)
    let num1 = Math.floor(Math.random() * (max - min + 1)+min);
    if(num1 === 1) {
        return 'Rock';
    } else if (num1 === 2) {
        return 'Paper';
    } else if (num1 === 3) {
        return 'Scissors';
    }
}

let computerScore = 0;
let playerScore = 0;

function playRound(computerSelection, playerSelection) {
    
    let computerCase = computerSelection.toUpperCase();
    let playerCase = playerSelection.toUpperCase();
    
    

    if(computerCase === 'ROCK' && playerCase === 'Scissors') {
        computerScore++;
        return output = "You lose! Rock beats scissors"; 
    } else if (playerCase === 'ROCK' && computerCase === 'SCISSORS') {
        playerScore++;
        return output = 'You win! Rock beats Scissors';
    } else if (playerCase === 'ROCK' && computerCase === 'PAPER') {
        computerScore++;
        return 'You lose! Paper covers rock!'
    } else if (playerCase === 'PAPER' && computerCase === 'ROCK') {
        playerScore++;
        return 'You win! Paper covers rock!'
    }  else if (playerCase === 'SCISSORS' && computerCase === 'PAPER') {
        playerScore++;
        return 'You win! Scissors cuts Paper!'
    }  else if (playerCase === 'PAPER' && computerCase === 'SCISSORS') {
        computerScore++;
        return 'You lose! Scissor cuts Paper!'
    }  else if (playerCase === 'ROCK' && computerCase === 'ROCK') {
        return 'You tied! You both picked Rock!'
    }   else if (playerCase === 'SCISSORS' && computerCase === 'SCISSORS') {
        return 'You tied! You both picked Scissors!'
    }  else if (playerCase === 'PAPER' && computerCase === 'PAPER') {
        return 'You tied! You both picked Paper!'
    }

    
}

function game(){
    for (var i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();
        let playerSelection = prompt('Please choose either rock, paper, or scissors.');
        console.log (playRound(computerSelection, playerSelection));
    }
    if (computerScore > playerScore){
        return 'Computer wins the game!';
    } else if (computerScore < playerScore) {
        return 'You win the game!';
    } else if ( computerScore === playerScore) {
        return 'You tied! Nobody wins the game!';
    }
}

console.log(game());