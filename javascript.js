const Rock = "Rock", Paper = "Paper", Scissor = "Scissor";
let humanScore = 0;
let computerScore = 0;
let i = 1;

function getComputerChoice(){
    let RandomNumber = Math.random();
    if(RandomNumber <=0.33){
        return "Rock";
    }
    else if(RandomNumber <=0.66){
        return "Paper";
    }
    else {
        return "Scissor";
    }
}


function getHumanChoice(){
    let Choice = prompt("Choose Rock or Paper or Scissor");
    Choice = Choice.toUpperCase(); 
    switch(Choice){
        case 'ROCK':
            return 'Rock';
            break;
        case 'PAPER':
            return 'Paper';
            break;
        case 'SCISSOR':
            return 'Scissor';
            break;
        default:
            return 'Wrong Choice';        
    }
}


function playRound(humanChoice,computerChoice){
    if(humanChoice === Rock){
        if(computerChoice === Rock){
            console.log("Round Tied")
        }
        else if(computerChoice === Paper){
            console.log("You lost the round")
            computerScore += 1;
        }
        else{
            console.log("You won the round!!!")
            humanScore += 1;
        }
    }

    else if(humanChoice === Paper){
        if(computerChoice === Paper){
            console.log("Round Tied")
        }
        else if(computerChoice === Scissor){
            console.log("You lost the round")
            computerScore += 1;
        }
        else{
            console.log("You won the round!!!")
            humanScore += 1;
        }
    }

    else if(humanChoice === Scissor){
        if(computerChoice === Scissor){
            console.log("Round Tied")
        }
        else if(computerChoice === Rock){
            console.log("You lost the round")
            computerScore += 1;
        }
        else{
            console.log("You won the round!!!")
            humanScore += 1;
        }
    }
}

function finalResult(){
    if(humanScore < computerScore){
        console.log("You lost by ",humanScore,"-",computerScore)
    }
    else if(humanScore > computerScore){
        console.log("You won!!! by ",humanScore,"-",computerScore)
    }
    else{
        console.log("Game Tied");
    }
}


function playGame(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log("You Choosed : " ,humanSelection)
    console.log("Computer Choosed: " ,computerSelection)
    playRound(humanSelection,computerSelection);
    console.log("Scores after Round ",i);
    console.log("Human: ",humanScore);
    console.log("Computer: ", computerScore);
}


function startGame(){
i = 1;
while(i <= 5){
     playGame();
    i+=1;
  }
  finalResult();
}

startGame();

