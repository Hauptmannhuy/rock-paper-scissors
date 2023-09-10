let computerSelection = null;
let clickCounter = 0;
let playerScore = 0;
let computerScore = 0;
let playerSelection = null;
const playerPoints = document.querySelector('#player-score');
const computerPoints = document.querySelector('#computer-score');

const buttons = document.querySelectorAll('button');
buttons.forEach((button)=> {
    function startGame(){
         button.addEventListener('click', (e) => {
        
         selector(e);
         computerSelection = randomizer();
        playRound(playerSelection,computerSelection)
        playerPoints.textContent = `Player score:${playerScore}`;
        computerPoints.textContent = `Computer score:${computerScore}`;
        clickCounter++;
        endCondition(clickCounter)
      
    });
    }
   startGame();
});


function endCondition(clickCounter){
    if (clickCounter === 5){
        alert(`Game is over! The winner is ${playerScore > computerScore ? 'Player!': 'Computer!'}`)
    }
}

function selector(e){
    if (e.target.id === 'rock'){
        playerSelection = 'rock'
    }
    else if (e.target.id === 'paper'){
        playerSelection = 'paper'
    }
    else if (e.target.id === 'scissors'){
        playerSelection = 'scissors'
    }
}

function randomizer(){                          
    
    let number = Math.floor(Math.random()*3);
   
    if (number === 0){
        return 'rock';
       
    }
    else if (number === 1){
        return 'paper';
       
    }
    else if (number === 2) {
        return 'scissors'
   
    }
}


    function playRound(playerSelection,computerSelection){
       
        if (playerSelection === 'paper' && computerSelection === 'rock'){
             playerScore++;
        }
       else if (playerSelection === 'rock' && computerSelection === 'scissors'){
             playerScore++;
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper'){
             playerScore++;
        }
        else if (playerSelection === computerSelection){
            console.log("That's a tie")
        }
        else {
             computerScore++;
        }
    }
    
    
  
   






