//UI
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissor");
const computerBtns = document.querySelectorAll(".computerBtns");
const UIplayerScore = document.querySelector(".playerScoreValue");
const UIcomputerScore = document.querySelector(".computerScoreValue");
const resultbox = document.querySelector(".resultBox");
const gameStatus = document.createElement("h3");
const nameInput = document.querySelector("#name");
const UIplayerName = document.querySelector(".playerName");
const beginGameButton = document.querySelector(".begin");
const gameBox= document.querySelector(".gameBox");
const finalResult  = document.querySelector(".finalResult");
const resetBtn = document.querySelector(".reset");
resetBtn.style.display = "none";
gameBox.style.display = "none";
resultbox.appendChild(gameStatus);
//Game Scores
let playerScore = 0;
let computerScore = 0;
let round = 0;
 function SetPlayerAndComputerScores(winnerOfRound){
    if(winnerOfRound === "Player"){
        playerScore++;
    }
    else if(winnerOfRound == "Computer"){
        computerScore++;
    }

    UIplayerScore.innerText = playerScore;
    UIcomputerScore.innerText = computerScore;
}
    
//playerButtons
rockBtn.addEventListener("click",playRound);
paperBtn.addEventListener("click", playRound);
scissorBtn.addEventListener("click", playRound);


function GetRandomValueFromComputer(){

    let choices = ["Rock","Paper","Scissor"];
    return choices[Math.floor(Math.random()*choices.length)];

}
function performUIChangesForComputer(computerSelection){

    let buttonNumber = 0;
   for(let index = 0;index<computerBtns.length;index++){

        if(computerBtns[index].innerText.toLowerCase() === computerSelection.toLowerCase()){
            buttonNumber = index;
            break
        }
   }
    computerBtns[buttonNumber].focus();
}
function playRound(e){

    let playerSelection = e.srcElement.value;
    let computerSelection = GetRandomValueFromComputer();
    performUIChangesForComputer(computerSelection);
    let winnerOfRound;
     if(playerSelection.toLowerCase()=="rock" && computerSelection.toLowerCase() == "scissor"||
     playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"||
     playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "paper"
     ){
         gameStatus.innerText = `You won. ${playerSelection} beats ${computerSelection}`
         winnerOfRound = "Player"
         SetPlayerAndComputerScores(winnerOfRound);
        
        
      }
      else if(

                 playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "rock"||
                 playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "scissor"||
                playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "paper"
                
             ){
                 gameStatus.innerText = "This round was a tie"
                 winnerOfRound = "none"
                 SetPlayerAndComputerScores(winnerOfRound);
             }
        else{
                
                gameStatus.innerText = "You lost this round."
                winnerOfRound = "Computer"
                SetPlayerAndComputerScores(winnerOfRound);
                         
             }
    round++;
    updateRound()

}

function updateRound(){
    if(round == 5){
        if(playerScore>computerScore){
            finalResult.style.display = "block";
            finalResult.innerText = `Bravo, you won the game.`;
            gameBox.style.display = "none";
            beginGameButton.innerText = "Play again?";
            resetBtn.style.display = "block";
            

        }
        else if(playerScore<computerScore){
            finalResult.style.display = "block"
           finalResult.innerText = `Oh no! you lost try again.`;
           gameBox.style.display = "none";
           resetBtn.style.display = "block"
           
        }
        else{
            finalResult.style.display = "block"
            finalResult.innerText = `The game was a tie.`;
           gameBox.style.display = "none";
           beginGameButton.innerText = "Play again?"
           resetBtn.style.display = "block"
           
        }
    }
}

function resetGame(){

    gameStatus.innerText = "";
    playerScore = 0;
    computerScore = 0;
    finalResult.innerText = "";
    round = 0;
    UIcomputerScore.innerText = 0;
    UIplayerScore.innerText = 0;
    showGameUI();
    resetBtn.style.display = "none";
   
}
resetBtn.addEventListener("click",resetGame);

function showGameUI(){

    gameBox.style.display = "block";
    beginGameButton.style.display = "none";
    let playerName = nameInput.value;
    UIplayerName.innerText = playerName+"'s";
    nameInput.style.display = "none";
    
}
beginGameButton.addEventListener("click",showGameUI);
