/*
    Author: Aryan
    Date: 8/1/2024
    Time: 00-51-07
    About: Stone Paper Scissor using Javascript Console..
*/

// Number of times game will continue..
const playTimes = 5;

let playerWin = 0, computerWin = 0, matchDraw = 0;
for(let startGameCount = 1; startGameCount <= playTimes; startGameCount++){
    let invalidInput = 0;
    function playRound(playerSelection, computerSelection) {
        if(playerSelection.toLowerCase() != "rock" && 
        playerSelection.toLowerCase() != "paper" &&
        playerSelection.toLowerCase() != "scissors"){
            invalidInput++;
            return "Invalid Choice! Try again..";
        }
        
        if(playerSelection.toLowerCase() === "rock" && computerSelection === "scissors" 
        || playerSelection.toLowerCase() === "paper" && computerSelection === "rock" 
        || playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"){
            playerWin++;
            return youWon(playerSelection, computerSelection);
        } else if(playerSelection.toLowerCase() === "rock" && computerSelection === "rock"
        || playerSelection.toLowerCase() === "paper" && computerSelection === "paper"
        || playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors"){
            matchDraw++;
            return itsTie();
        } else{
            computerWin++;
            return youLose(playerSelection, computerSelection);
        }
    }


    function youWon(playerSelection, computerSelection){
        return "You Won! "+playerSelection+" beats "+computerSelection;
    }
    function youLose(playerSelection, computerSelection){
        return "Oops! You Lost. "+computerSelection+" beats "+playerSelection;
    }
    function itsTie(){
        return "It's a Tie! Both Wins...";
    }

    function showDetails(){
        if(playerWin > computerWin){
            return "You are Winner..\nMatch statistics:\nYou Won: "+playerWin+" times"+" Computer Won: "+computerWin+" times"+" Match Draw: "+matchDraw+" times";
        }else if(playerWin === computerWin){
            return "Match is Tie..\nMatch statistics:\nYou Won: "+playerWin+" times"+" Computer Won: "+computerWin+" times"+" Match Draw: "+matchDraw+" times";
        }else{
            return "You Lost..\nMatch statistics:\nYou Won: "+playerWin+" times"+" Computer Won: "+computerWin+" times"+" Match Draw: "+matchDraw+" times";
        }
        
    }

    function getComputerChoice(){

        // This will generate random number from 1 - 3
        const computerChoice = Math.floor(Math.random() * 3) + 1;
        if(computerChoice == 1){
            return "rock";
        }else if(computerChoice == 2){
            return "paper";
        }else{
            return "scissors";
        }
    }
    const playerSelection = prompt("Select Your Choice: ");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("You Won: "+playerWin+"\nComputer won: "+computerWin+"\nMatch draw: "+matchDraw);
    startGameCount = startGameCount - invalidInput;
    if(startGameCount == 5){
        console.log(showDetails());
    }
}