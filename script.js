function getComputerChoice(){
    let x = parseInt(Math.random()*100%3);
    let c ; 
    if(x===0){
        c = "rock"
    }
    else if(x==1){
        c = "paper"
    }
    else{
        c = "scissors"
    }
    return c;
    
    
}
// console.log(getComputerChoice())



