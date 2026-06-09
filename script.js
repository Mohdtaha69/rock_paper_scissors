function getComputerChoice(){
    let x = parseInt(Math.random()*100%3);
    let c ; 
    if(x===0){
        c = "rock"
    }
    else if(x===1){
        c = "paper"
    }
    else{
        c = "scissors"
    }
    return c;
    
    
}


function getHumanChoice(){
    let c = prompt("enter your choice");
    return c;
}
let humanscore = 0;
let computerscore = 0;

function playround(humanchoice,computerchoice){
    console.log(humanchoice);
    console.log(computerchoice);
    if(humanchoice === computerchoice){
        console.log("its a tie")
    }
    else{
        if(humanchoice==="rock" && computerchoice==="paper"){
            console.log("you loose! paper beats rock");
            computerscore++;
        }
        else if(humanchoice==="rock" && computerchoice==="scissors"){
            console.log("you win! rock beats scissors")
            humanscore++;
        }
        else if(humanchoice==="paper" && computerchoice==="rock"){
            console.log("you win! paper beats rock");
            humanscore++;
        }
        else if(humanchoice==="paper" && computerchoice==="scissors"){
            console.log("you loose! scissors beats paper")
            computerscore++;
        }
        else if(humanchoice==="scissors" && computerchoice==="rock"){
            console.log("you loose! rock beats scissors")
            computerscore++;
        }
        else if(humanchoice==="scissors" && computerchoice==="paper"){
            console.log("you win! scissors beats paper");
            humanscore++;
        }
        else{
            console.log("enter a valid choice")
        }
    }

}

const humanchoice1  = getHumanChoice().toLowerCase();
const computerchoice1 = getComputerChoice();

const humanchoice2  = getHumanChoice().toLowerCase();
const computerchoice2 = getComputerChoice();

const humanchoice3  = getHumanChoice().toLowerCase();
const computerchoice3 = getComputerChoice();

const humanchoice4  = getHumanChoice().toLowerCase();
const computerchoice4 = getComputerChoice();

const humanchoice5  = getHumanChoice().toLowerCase();
const computerchoice5 = getComputerChoice();

function playgame(){
    playround(humanchoice1,computerchoice1);
    playround(humanchoice2,computerchoice2);
    playround(humanchoice3,computerchoice3);
    playround(humanchoice4,computerchoice4);
    playround(humanchoice5,computerchoice5);

    if(humanscore>computerscore){
        console.log("you win the game")
    }
    else if (humanscore<computerscore){
        console.log("you loose the game")
    }
    else{
        console.log("its a tie game")
    }
}

playgame()