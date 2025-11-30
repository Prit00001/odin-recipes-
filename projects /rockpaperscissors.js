function getComputerChoice(){
    let randomNumber=Math.random();

    if(randomNumber<0.33){
        return "rock";
}
    else if(randomNumber<0.66){
        return "paper";
}
    else{
        return "scissors";}
    
}
function getHumanChoice(){
    let humanChoice=prompt("Chose between rock,paper and scissors").toLowerCase();
    if(humanChoice=="rock"||humanChoice=="paper"|| humanChoice=="scissors"){
        return humanChoice;}
        else{
            return "Not a valid value";
        }
    }
    // console.log(getHumanChoice());
 let humanScore=0;
     let computerScore=0;
   
// console.log(humanScore);
// console.log(computerScore);
let humanSelection =getHumanChoice();
let computerSelection = getComputerChoice();
function playGame(){
    function playRound(humanChoice,computerChoice){
    if(humanChoice==computerChoice){
        return "It's a tie";
    }
    else if(humanChoice=="rock" && computerChoice=="paper" ||humanChoice=="paper" && computerChoice=="scissors" ||humanChoice=="scissors" && computerChoice=="rock"){
        computerScore++;
        return `You lost! ${computerChoice} beats ${humanChoice}`;
        
    }
    else{
          humanScore++;
        return `You won! ${humanChoice} beats ${computerChoice}`;
      
    }
}
  for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();    
        let computerSelection = getComputerChoice(); 
        console.log(playRound(humanSelection, computerSelection));
    }
if(humanScore>computerScore){
    return "Congrats you are the winner";
}
else{
    return "Computer is the winner";
}
}
playGame();