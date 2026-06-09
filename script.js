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

const humanchoice  = getHumanChoice().toLowerCase();
const computerchoice = getComputerChoice();

playround(humanchoice,computerchoice);
