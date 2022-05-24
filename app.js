const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const tie = 0;
const win = 1;
const loss = 2;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultText = document.getElementById("startText");
const userImg = document.getElementById("userImg");
const machineImg = document.getElementById("machineImg");

rockBtn.addEventListener("click", ()=>{
    play(rock);
});

paperBtn.addEventListener("click", ()=>{
    play(paper);
});

scissorsBtn.addEventListener("click", ()=>{
    play(scissors);
});

function play(userChoice){

    userImg.src =`img/${userChoice}.svg`;

    resultText.innerHTML = "Choosing..."

    const interval = setInterval(function(){

        const machineChoice = calcMachineOption();
        machineImg.src =`img/${machineChoice}.svg`;

    }, 200);

    setTimeout(function(){

        clearInterval(interval);

        const machineChoice = calcMachineOption();
        const result = calcResult(userChoice, machineChoice);

        machineImg.src =`img/${machineChoice}.svg`;

        switch(result){
            case tie:
                resultText.innerHTML = "It's a tie!";
                break;
            case win:
                resultText.innerHTML = "You win!";
                break;
            case loss:
                resultText.innerHTML = "You loss...";
                break;
        }
    }, 2000);


};

function calcMachineOption(){
    const number = Math.floor(Math.random() * 3);
    switch (number){
        case 0:
            return rock;
        case 1:
            return paper;
        case 2:
            return scissors;
    }
}

function calcResult (userChoice, machineChoice){

    if(userChoice === machineChoice){

        return tie;

    } else if (userChoice === rock){

        if(machineChoice === paper) return loss;
        if(machineChoice === scissors) return win;

    } else if (userChoice === paper){

        if(machineChoice === scissors) return loss;
        if(machineChoice === rock) return win;

    } else if(userChoice === scissors){

        if(machineChoice === paper) return win;
        if(machineChoice === rock)  return loss;
    };
}