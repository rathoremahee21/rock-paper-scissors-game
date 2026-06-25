let userScore=0;
let CompScore=0;

const choices=document.querySelectorAll(".choice");

const msg= document.querySelector("#msg");

const genCompchoice=()=>{
    const options=["rock","paper","scissors"];
   const randomidx= Math.floor(Math.random()*3);
   return options[randomidx];
}

const drawGame = () =>{
    console.log("game was draw");
     msg.innerText="DRAW! Play again";
}

const userScorepara=document.querySelector("#user-score");
const CompScorepara=document.querySelector("#Computer-score");



const showWinner=(userwin)=>{
    if(userwin){
        userScore++;
        userScorepara.innerText=userScore;
        console.log("You win");
        msg.innerText="You win!";
        msg.style.backgroundColor="blue";
    }
    else{
        CompScore++;
        CompScorepara.innerText=CompScore;
        console.log("Computer wins");
         msg.innerText="You lose.";
                 msg.style.backgroundColor="red";
    }
}



const playGame=(userChoice) => {
    console.log("user choice =",userChoice);

    const Computerchoice= genCompchoice();
    console.log("comp choice =",Computerchoice);

if(userChoice===Computerchoice){
    drawGame();
}
else{
    let userwin=true;
    if(userChoice==="rock"){
        userwin=Computerchoice==="paper" ? false:true;
    }
    else if(userChoice=="paper"){
        userwin=Computerchoice==="scissors" ? false:true;
    }
    else{
        userwin=Computerchoice==="rock" ? false:true;
    }
     showWinner(userwin);
    }
}







choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    });
});