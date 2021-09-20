// play a single round of Rock Paper Scissors
// note how we are passing a function into another function (computerPlay)
function playRound(playerSelection,computerPlay){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerPlay){
        return `It's a draw!`
    }
    // check for scissors rock, rock paper, then paper scissors
    if (playerSelection === 'rock'){
        return (computerPlay === 'scissors') ? 
        `You won! ${playerSelection} beats ${computerPlay}.` :
        `You lost! ${computerPlay} beats ${playerSelection}`;
    }
    if (playerSelection === 'paper'){
        return (computerPlay === 'scissors') ? 
        `You won! ${playerSelection} beats ${computerPlay}.` :
        `You lost! ${computerPlay} beats ${playerSelection}`;
    }
    if (playerSelection === 'rock'){
        return (computerPlay === 'paper') ? 
        `You won! ${playerSelection} beats ${computerPlay}.` :
        `You lost! ${computerPlay} beats ${playerSelection}`;
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

function game(){
    for(let i=0; i<5; i++){
        let playerSelection = prompt('Pick Rock, Paper or Scissors!');
        playRound(playerSelection);
    }
}
game();