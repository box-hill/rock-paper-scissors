// play a single round of Rock Paper Scissors
function playRound(playerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    if (playerSelection === computerSelection){
        return `It's a draw!`
    }
    // check for scissors rock, rock paper, then paper scissors
    if (playerSelection === 'rock'){
        return (computerSelection === 'scissors') ? 
        `You won! ${playerSelection} beats ${computerSelection}.` :
        `You lost! ${computerSelection} beats ${playerSelection}`;
    }
    if (playerSelection === 'paper'){
        return (computerSelection === 'rock') ? 
        `You won! ${playerSelection} beats ${computerSelection}.` :
        `You lost! ${computerSelection} beats ${playerSelection}`;
    }
    if (playerSelection === 'scissors'){
        return (computerSelection === 'paper') ? 
        `You won! ${playerSelection} beats ${computerSelection}.` :
        `You lost! ${computerSelection} beats ${playerSelection}`;
    }
}

// return a Rock, Paper or Scissors
function computerPlay(){
    let num = Math.random();
    num *= 3; // scale the num to 3
    num = Math.ceil(num)// round up the num
    if (num === 1){
        return 'rock';
    }
    return (num === 2) ? 'paper' : 'scissors';
}

const rock_btn = document.querySelector('#rock');
rock_btn.addEventListener('click', () => {console.log(playRound('rock'))});
const paper_btn = document.querySelector('#paper');
paper_btn.addEventListener('click', () => {console.log(playRound('paper'))});
const scissors_btn = document.querySelector('#scissors');
scissors_btn.addEventListener('click', () => {console.log(playRound('scissors'))});







