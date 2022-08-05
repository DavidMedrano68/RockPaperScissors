const buttons =document.querySelectorAll('.button')
const userScoreDiv = document.querySelector('.user-score')
const compScoreDiv = document.querySelector('.cpu-score')
const resultsDiv = document.querySelector('#results')
const compPaper= document.querySelector('#cpu-paper')
const compRock = document.querySelector('#cpu-rock')
const compScissors = document.querySelector('#cpu-scissors')
const Buttons = document.querySelectorAll('button')
console.log(Buttons)
let userScore = 0
let compScore = 0

buttons.forEach(button=>{
    button.addEventListener('click',getID)
})

function getID(){
    removeGray()
    this.classList.add('gray')
    game(this.id)
}
function updateScore() {
    userScoreDiv.textContent = `User's Score : ${userScore}`
    compScoreDiv.textContent = `Computer's Score: ${compScore}`
}
function removeGray(){
    Buttons.forEach(button=>{
    button.classList.remove('gray')})
}


function getComputerChoice(){
    let choice = ['cpu-rock','cpu-paper','cpu-scissors']
    const random = Math.floor(Math.random()* choice.length);
    let response = choice[random]
    if(response == compPaper.id){
        compPaper.classList.add('gray')
    }
    if(response == compRock.id){
        compRock.classList.add('gray')
    }
    if(response == compScissors.id){
        compScissors.classList.add('gray')
    }
    return response

};

function playRound(param1, param2){
    if (param1 == 'user-rock' && param2 == 'cpu-rock'){
        resultsDiv.textContent ='Nobody wins you both picked Rock';
    }else if(param1 == 'user-rock' && param2 == 'cpu-paper'){
        compScore++;
        updateScore()
        resultsDiv.textContent ='You Lose, Paper beats Rock'
    }else if(param1 == 'user-rock' && param2 == 'cpu-scissors'){
        userScore++;
        updateScore()
        resultsDiv.textContent = 'You Win, Rock beats Paper'
    }else if(param1 == 'user-paper' && param2 == 'cpu-paper'){
        resultsDiv.textContent = 'Nobody Wins You Both Picked Paper'
    }else if(param1 == 'user-paper' && param2 == 'cpu-rock'){
        userScore++;
        updateScore()
        resultsDiv.textContent ='You Win, Paper beats Rock'
    }else if(param1 == 'user-paper' && param2 == 'cpu-scissors'){
        compScore++;
        updateScore()
        resultsDiv.textContent = 'You Lose, Scissors beats Paper'
    }else if(param1 == 'user-scissors' && param2 == 'cpu-scissors'){
        resultsDiv.textContent ='Nobody Wins, you Both Picked Scissors'
    }else if(param1 == 'user-scissors' && param2 == 'cpu-paper'){
        userScore++;
        updateScore()
        resultsDiv.textContent = 'You Win, Scissors beats Paper'
    }else if(param1 == 'user-scissors' && param2 == 'cpu-rock'){
        compScore++;
        updateScore()
        resultsDiv.textContent = 'You Lose, Rock beats Scissors'
    }else{
        console.log("You Didn't Give a Valid Answer")
    }
};
function game(playerChoice){
    const computerChoice = getComputerChoice()
    const userChoice = playerChoice;
    playRound(userChoice,computerChoice)
};
