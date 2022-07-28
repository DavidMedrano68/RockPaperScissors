function getComputerChoice(){
    let choice = ['ROCK','PAPER','SCISSORS']
    const random = Math.floor(Math.random()* choice.length);
    return choice[random]
}
function playerChoice(){
    response = prompt('Rock, Paper, or Scissors?');
    response = response.toUpperCase();
    return response
}

function playRound(param1, param2){
    if (param1 == 'ROCK' && param2 == 'ROCK'){
        console.log('Nobody wins you both picked Rock')
    }else if(param1 == 'ROCK' && param2 == 'PAPER'){
        console.log('You Lose, Paper beats Rock')
    }else if(param1 == 'ROCK' && param2 == 'SCISSORS'){
        console.log('You Win, Rock beats Paper')
    }else if(param1 == 'PAPER' && param2 == 'PAPER'){
        console.log('Nobody Wins You Both Picked Paper')
    }else if(param1 == 'PAPER' && param2 == 'ROCK'){
        console.log('You Win, Paper beats Rock')
    }else if(param1 == 'PAPER' && param2 == 'SCISSORS'){
        console.log('You Lose, Scissors beats Paper')
    }else if(param1 == 'SCISSORS' && param2 == 'SCISSORS'){
        console.log('Nobody Wins, you Both Picked Scissors')
    }else if(param1 == 'SCISSORS' && param2 == 'PAPER'){
        console.log('You Win, Scissors beats Paper')
    }else if(param1 == 'SCISSORS' && param2 == 'ROCK'){
        console.log('You Lose, Rock beats Scissors')
    }else{
        console.log("You Didn't Give a Valid Answer")
    }
}
function game(){
    for(let i = 0; i <= 5 ; i++){
        const userChoice = playerChoice()
        const computerChoice = getComputerChoice()
        playRound(userChoice,computerChoice)
    }

}
game()
