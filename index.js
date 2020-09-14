let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let compPick = Math.random();
    if (compPick <= .5){
        return 'rock'
    } else if (compPick >= .5){
        return 'paper'
    } else if (compPick == .5){
        return 'scissors'
    } 
}


function roundPlay(playerSelection, computerSelection) {
    
    if (playerSelection == 'rock' && computerSelection == 'scissors'){
        console.log('Rock wins scisssors')
        return playerScore++
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        console.log('paper wins rock')
        return computerScore++;
    } else if (playerSelection == 'rock' && computerSelection == 'rock'){
        console.log('Wow! It is a tie!')
        return undefined;
    }

    if (playerSelection == 'scissors' && computerSelection == 'rock'){
        console.log('scissors wins rock')
        return playerScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        console.log('paper wins scissors')
        return computerScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors'){
        console.log('And it\'s a tie!')
        return undefined;
    }


    if(playerSelection == 'paper' && computerSelection == 'rock'){
        console.log('rock wins paper')
        return playerScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        console.log('scissors wins paper')
        return computerScore;
    } else if (playerSelection == 'paper' && computerSelection == 'paper'){
        console.log('Quite fierce a match! It\'s a tie')
        return undefined;
    }
}
// console.log(roundPlay('rock', computerPlay))

function game() {

    let playerSelection;
    console.log('Rock, Paper, Scissors');
    for(rounds = 1; rounds <= 5; rounds++){
        console.log(`---- Round: ${rounds} ----`);
        playerSelection = prompt('Rock, Paper, Scissors?');
        roundPlay(playerSelection, computerPlay())

        

        console.log(`player score: ${playerScore}`);
        console.log(`computer score: ${computerScore}`);
    }

    if (playerScore > computerScore){
        console.log('You\'ve won computer')
        alert('You won!')
    } else if (playerScore < computerScore){
        console.log('Computer won');
        alert('Computer won!');
    } else if (playerScore == computerScore){
        console.log('It\'s a tie!');
        alert('A tie!')
    }
}
game();