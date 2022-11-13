let playerScore = 0;
let computerScore = 0;

function updateScore(winnerOfRound){

if(winnerOfRound.toLowerCase() === "player"){
    playerScore++;
}
else if(winnerOfRound.toLowerCase() === "computer"){

    computerScore++;
}
else{
    playerScore+=0;
    computerScore+=0;
}

}


function getRandomChoiceFromComputer(){

    let choices = ["Rock","Paper","Scissor"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection,computerSelection){

    let winnerOfRound;
   
    if(playerSelection.toLowerCase()=="rock" && computerSelection.toLowerCase() == "scissor"||
    playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"||
    playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "paper"
    ){
        console.log("You won this round")
        winnerOfRound = "player"
        updateScore(winnerOfRound)
        
    }
    else if(

        playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "rock"||
        playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "scissor"||
        playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "paper"
        
    ){
        console.log("This round was a tie")
        winnerOfRound = "none"
        updateScore(winnerOfRound)
    }
    else{
        console.log("You lost this round.")
        winnerOfRound = "computer"
        updateScore(winnerOfRound)
    }
}

function game(){

    for(let i = 0; i<5; i++){

        let userSelection = prompt("Select your weapon -> Rock, Paper or Scissor");
        let computerSelection = getRandomChoiceFromComputer();
        console.log("Your choice = ",userSelection+" Computer choice = "+computerSelection)
        playRound(userSelection,computerSelection)
    }

    if(playerScore > computerScore){
        console.log("Congrats! you won the game")
    }else if(computerScore > playerScore){
        console.log("Oh no! you lost the game.")
    }
    else{
        console.log("Nobody won, nobody lost, the game was a tie.")
    }
}
game();

