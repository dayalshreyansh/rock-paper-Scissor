const rulesBlock=document.getElementById("rules-block");
const rulesButton=document.getElementById("rules-button");
const chooseBlock=document.getElementById("choose-move")
const rockButton=document.getElementById("rock");
const paperButton=document.getElementById("paper");
const scissorsButton=document.getElementById("scissors");
const output=document.getElementById("output");
const playerScore=document.getElementById("player-score");
const computerScore=document.getElementById("computer-score");
const playAgainButton=document.getElementById("play-again");

let resultValue;
let playerChoise;
let computerMove;
let pScore=0;
let cScore=0;

function playAgain(){
    playAgainButton.classList.add("hide");
    chooseBlock.classList.remove("hide");
    reset();
}
function reset(){
    pScore=0;
    cScore=0;
    playerScore.innerText=pScore;
    computerScore.innerText=cScore;
}
function increseScore(){
    if(resultValue==="Win"){
        pScore++;
        playerScore.innerText=pScore;
    }else if(resultValue==="Lose"){
        cScore++;
        computerScore.innerText=cScore;
    }
}
function checkScore(){
    if(pScore===3){
        output.innerHTML=`<p class="final-output">You Win The game</p>`;
        chooseBlock.classList.add("hide")
        playAgainButton.classList.remove("hide");
        playAgainButton.classList.add("block");

    }else if(cScore===3){
        output.innerHTML=`<p class="final-output">You Lose The game</p>`;
        chooseBlock.classList.add("hide");
        playAgainButton.classList.remove("hide")
        playAgainButton.classList.add("block");

    }
}
function setcomputerMove(){
    const randomNo=Math.random();
    let computerMove1;
    if(randomNo>=0 && randomNo<1/3){
        computerMove1="rock";
    }else if(randomNo>=1/3 && randomNo<2/3){
        computerMove1="paper";
    }else{
        computerMove1="scissors";
    }
    return computerMove1;
}
function result(choise1,choise2){
    if(choise1==="rock"){
        if(choise2==="rock"){
            resultValue="Tie";
        }else if(choise2==="scissors"){
            resultValue="Win";
        }else{
            resultValue="Lose";
        }
    }else if(choise1==="paper"){
        if(choise2==="rock"){
            resultValue="Win";
        }else if(choise2==="scissors"){
            resultValue="Lose";
        }else{
           resultValue="Tie";
        }
    }else{
        if(choise2==="rock"){
            resultValue="Lose";
        }else if(choise2==="scissors"){
           resultValue="Tie";
        }else{
            resultValue="Win";
        }
    }
    output.innerHTML=`<p>You Chose ${choise1} and Computer Chose ${choise2} <br> ${resultValue}</p>`;
}
function setRock(){
    playerChoise="rock";
    computerMove=setcomputerMove();
    result(playerChoise,computerMove);
    increseScore();
    checkScore();
    
}
function setPaper(){
    playerChoise="paper";
    computerMove=setcomputerMove();
    result(playerChoise,computerMove);
    increseScore();
    checkScore();
     
}
function setScissors(){
    playerChoise="scissors";
    computerMove=setcomputerMove();
    result(playerChoise,computerMove);
    increseScore();
    checkScore();
    
}
function display(){
    rulesBlock.classList.remove("hide");
}
function hide(){
    rulesBlock.classList.add("hide");
}
function rulesDropdown(){
     if(rulesBlock.classList.value==="hide"){
        display();
     }else{
        hide();
     }
} 
rulesButton.addEventListener("click",rulesDropdown);
rockButton.addEventListener("click",setRock);
paperButton.addEventListener("click",setPaper);
scissorsButton.addEventListener("click",setScissors);
playAgainButton.addEventListener("click",playAgain)