


/* 
Make function input for user
Make function value randomizer
Make function that reproduce one game round
Make function that reproduce whole game
*/

function randomizer(){                              //randomizer for random values
    
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
let computerInput = randomizer();
let computerSelection = computerInput;
let playerSelection = window.prompt().toLowerCase();
//let computerWin = `You lose! ${computerSelection} beats ${playerSelection}`;
//let playerWin = `You win! ${playerSelection} beats ${computerSelection}`;
//let tie = "That's a tie";
    function oneRound(playerSelection,computerSelection){
       
        if (playerSelection === 'paper' && computerSelection === 'rock'){
            return 'Player win';
        }
       else if (playerSelection === 'rock' && computerSelection === 'scissors'){
            return 'Player win';
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper'){
            return 'Player win';
        }
        else if (playerSelection === computerSelection){
            return "That's a tie";
        }
        else {
            return 'Computer win'
        }
    }
    
    
  
   
    function game(){
       
        let playerScore = 0;
        let computerScore = 0;
        for (let i = 0; i < 5; i++){
            const playerSelection = window.prompt().toLowerCase();
            const computerSelection = randomizer();
            let roundResult = oneRound(playerSelection, computerSelection);
            if (roundResult === 'Player win'){
                playerScore++
            }
            else if (roundResult === 'Computer win'){
                computerScore++
            }
            console.log(playerScore,computerScore);
        }
        if (playerScore > computerScore){
            alert("You win!");
        }
        else if (computerScore > playerScore){
            alert("You lose");
        }
        else if (computerScore === playerScore) {
            alert ("That's a tie!");
        }
    }

game();





