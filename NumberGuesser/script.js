let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () =>{
    return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (guess, targetNumber) =>{
    let distance = Math.abs(guess - targetNumber);
    return distance;
}

const compareGuesses = (humanGuess, computerGuess, targetNumber) =>{
    let humanClose = getAbsoluteDistance(humanGuess, targetNumber);
    let computerClose = getAbsoluteDistance(computerGuess, targetNumber);
    if(humanGuess >= 0 && humanGuess < 10){
        if(computerClose < humanClose){
            return false;
        }
        else{
            return true;
        }
    }
    else{
        return alert("Please choose a number between 0-9!");
    }
    
}

const updateScore = winner =>{
    if(winner === "human"){
        humanScore ++;
    }
    else if(winner === "computer"){
        computerScore ++;
    }
}

const advanceRound = () =>{
    currentRoundNumber++;
}