

const computerSelection = getComputerChoice();
const playerSelection = prompt("Make your choice!").toLowerCase();
let playerWin = `You win! ${playerSelection} beats ${computerSelection}`;
let computerWin = `You lose! ${computerSelection} beats ${playerSelection}`;
let tie = "That's a tie";



function getComputerChoice(){
   let number = Math.floor(Math.random()*3);
   if (number === 0){
    return "rock";
   }
   else if (number === 1){
    return "paper";
   }
   else if (number === 2){
    return "scissors";
   }
}

function oneRound(playerSelection, computerSelection){
   
    
    if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return playerWin;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
       return playerWin;
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        return playerWin;
    }
    else if (playerSelection === computerSelection){
        return tie;
    }
    else {
        return computerWin;
    }
}

function game(){
   let playerScore = 0;
   let computerScore = 0;
  
   for (let i = 0; i < 5; i++){
    const playerSelection = prompt("Make your choice!").toLowerCase();
    const computerSelection = getComputerChoice();
    const roundResult = oneRound(playerSelection, computerSelection);
    if (roundResult === playerWin){
        playerScore++;
        alert(playerWin);
    }
    else if (roundResult === computerWin){
        computerScore++;
        alert(computerWin)
    }
   
    
   }
   if (playerScore>computerScore){
    alert("You win!")
   }
   else if (computerScore>playerScore) {
    alert("You lose!")
   }
   else {
    alert("It's a tie game!")
   }
   console.log(playerScore,computerScore);
}


game()






