const computerChoiceDisply = document.getElementById('computer-choice')
const userChoiceDisply = document.getElementById('user-choice')
const resultDisply = document.getElementById('result')
const possibleChoice = document.querySelectorAll('button')
 let userChoice
 let computerChoice
 let result

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisply.innerHTML = userChoice
    generateComputerChoice()
    getResult()

}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // you can use possibleChoice.lenght

    if(randomNumber === 1) {
        computerChoice = 'rock'

    }
    
    if(randomNumber === 2) {
        computerChoice = 'scissors'

    }
    
    if(randomNumber === 3) {
        computerChoice = 'paper'

    }

    computerChoiceDisply.innerHTML = computerChoice
    
}   

function getResult() {

    if(computerChoice === userChoice){
       result = 'its a draw! 🧚🏻'
    }

   if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'you win! 🏆'
     }

   if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'you lose! 🥵'
     }

   if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'you win! 🏆'
     }

   if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'you lose! 🥵'
     }

   if(computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'you win! 🏆'
     }

     if(computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'you lose! 🥵'
     }

     resultDisply.innerHTML = result
  
 
  
 
 
}


