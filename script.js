


/* 
Make function input for user
Make function value randomizer
Make function that reproduce one game round
Make function that reproduce whole game
*/

function randomizer(){                              //randomizer for random values
    
    let number = Math.floor(Math.random()*3);
    console.log(number) 
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

   
    function oneRound(userInput,computerInput){
        const computerWin = `You lose! ${computerInput} beats ${userInput}`;
        const playerWin = `You win! ${userInput} beats ${computerInput}`;
        const tie = "That's a tie";
        if (userInput === 'paper' && computerInput === 'rock'){
            return playerWin;
        }
       else if (userInput === 'rock' && computerInput === 'scissors'){
            return playerWin;
        }
        else if (userInput === 'scissors' && computerInput === 'paper'){
            return playerWin;
        }
        else if (userInput === computerInput){
            return tie;
        }
        else {
            return computerWin
        }
    }

    const userInput = window.prompt().toLowerCase();
    const computerInput = randomizer();
    console.log(oneRound(userInput,computerInput))







