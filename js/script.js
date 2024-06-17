const first_box = document.querySelector(".first-box");
const second_box= document.querySelector(".second-box");
const third_box= document.querySelector(".third-box");

const fourth_box = document.querySelector(".fourth-box");
const fifth_box= document.querySelector(".fifth-box");
const sixth_box= document.querySelector(".sixth-box");

const seventh_box = document.querySelector(".seventh-box");
const eighth_box= document.querySelector(".eighth-box");
const nineth_box= document.querySelector(".nineth-box");

let arrOfBoxes = [first_box, second_box, third_box,
    fourth_box, fifth_box, sixth_box, seventh_box,
    eighth_box, nineth_box
];

const player_score = document.querySelector(".player-score");
const draw = document.querySelector(".draw");
const computer_score = document.querySelector(".computer-score");

const restart_button = document.querySelector(".restart-button");

let easyMode = true;

function playerPlay(buttonName, playerChar){
    if(buttonName.textContent === ""){
        buttonName.textContent = playerChar;
        buttonName.style.pointerEvents = "none";
    }
}

// function win(){
//    else if(fourth_box.textContent = "O" && fifth_box.textContent === "O" && sixth_box.textContent === "O"){
//         console.log("Computer wins")
//     }else if(seventh_box.textContent = "O" && eighth_box.textContent === "O" && nineth_box.textContent === "O"){
//         console.log("Computer wins")
//     }else if(first_box.textContent === "O" && fourth_box.textContent === "O" && seventh_box.textContent === "O"){
//         console.log("Computer wins")
//     }else if(second_box.textContent = "O" && fifth_box.textContent === "O" && eighth_box.textContent === "O"){
//         console.log("Computer wins")
//     }else if(third_box.textContent = "O" && sixth_box.textContent === "O" && nineth_box.textContent === "O"){
//         console.log("Computer wins")
//     }else if(third_box.textContent = "O" && fifth_box.textContent === "O" && seventh_box.textContent === "O"){
//         console.log("Computer wins")
//     }


//     if(first_box.textContent === "X" && second_box.textContent === "X" && third_box.textContent === "X"){
//         console.log("Player wins")
//     }else if(fourth_box.textContent = "X" && fifth_box.textContent === "X" && sixth_box.textContent === "X"){
//         console.log("Player wins")
//     }else if(seventh_box.textContent = "X" && eighth_box.textContent === "X" && nineth_box.textContent === "X"){
//         console.log("Player wins")
//     }

//    else if(second_box.textContent = "X" && fifth_box.textContent === "X" && eighth_box.textContent === "X"){
//         console.log("Player wins")
//     }else if(third_box.textContent = "X" && sixth_box.textContent === "X" && nineth_box.textContent === "X"){
//         console.log("Player wins")
//     }

//     if(first_box.textContent === "X" && fifth_box.textContent === "X" && nineth_box.textContent === "X"){
//         console.log("Player wins")
//     }else if(third_box.textContent = "X" && fifth_box.textContent === "X" && seventh_box.textContent === "X"){
//         console.log("Player wins")
//     }
// }

function playerWins(playerChar, computerChar){
    if(first_box.textContent === playerChar && second_box.textContent === playerChar && third_box.textContent === playerChar){
        // console.log("Player wins");
        player_score.textContent++;
    }else if(first_box.textContent === computerChar && second_box.textContent === computerChar && third_box.textContent === computerChar){
        // console.log("Computer wins");
        computer_score.textContent++;
    }

    else if(fourth_box.textContent === playerChar && fifth_box.textContent === playerChar && sixth_box.textContent === playerChar){
        // console.log("Player wins")
        player_score.textContent++;
    }else if(fourth_box.textContent === computerChar && fifth_box.textContent === computerChar && sixth_box.textContent === computerChar){
        // console.log("Computer wins")
        computer_score.textContent++;
    }

    else if(seventh_box.textContent === playerChar && eighth_box.textContent === playerChar && nineth_box.textContent === playerChar){
        // console.log("Player wins")
        player_score.textContent++;
    }else if(seventh_box.textContent === computerChar && eighth_box.textContent === computerChar && nineth_box.textContent === computerChar){
        // console.log("Computer wins")
        computer_score.textContent++;
    }

    else if(first_box.textContent === playerChar && fourth_box.textContent === playerChar && seventh_box.textContent === playerChar){
        // console.log("Player wins")
        player_score.textContent++;
    }else if(first_box.textContent === computerChar && fourth_box.textContent === computerChar && seventh_box.textContent === computerChar){
        // console.log("Computer wins")
        computer_score.textContent++;
    }

    else if(second_box.textContent === playerChar && fifth_box.textContent === playerChar && eighth_box.textContent === playerChar){
        // console.log("Player wins")
        player_score.textContent++;
    }else if(second_box.textContent === computerChar && fifth_box.textContent === computerChar && eighth_box.textContent === computerChar){
        // console.log("Computer wins")
        computer_score.textContent++;
    }

    else if(third_box.textContent === playerChar && sixth_box.textContent === playerChar && nineth_box.textContent === playerChar){
        // console.log("Player wins")
        player_score.textContent++;
    }else if(third_box.textContent === computerChar && sixth_box.textContent === computerChar && nineth_box.textContent === computerChar){
        // console.log("Computer wins")
        computer_score.textContent++;
    }

    else if(first_box.textContent === playerChar && fifth_box.textContent === playerChar && nineth_box.textContent === playerChar){
        // console.log("Player wins")
        player_score.textContent++;
    }else if(first_box.textContent === computerChar && fifth_box.textContent === computerChar && nineth_box.textContent === computerChar){
        // console.log("Computer wins")
        computer_score.textContent++;
    }

    else if(third_box.textContent === playerChar && fifth_box.textContent === playerChar && seventh_box.textContent === playerChar){
        // console.log("Player wins")
        player_score.textContent++;
    }else if(third_box.textContent === computerChar && fifth_box.textContent === computerChar && seventh_box.textContent === computerChar){
        // console.log("Computer wins");
        computer_score.textContent++;
    }else if(first_box.textContent !== "" && second_box.textContent !== "" && third_box.textContent !== "" && fourth_box.textContent !== ""
        && fifth_box.textContent !== "" && sixth_box.textContent !== "" && seventh_box.textContent !== "" && eighth_box.textContent !== "" 
    ){
        // console.log("Tie");
        draw.textContent++
    }

}

function machinePlay(){
    if(easyMode === true){
        let randomIndex = Math.floor(Math.random() * arrOfBoxes.length);
        setTimeout(()=>{
        if(arrOfBoxes[randomIndex].textContent !== "X" && arrOfBoxes[randomIndex].textContent !== "O"){
            if(arrOfBoxes[randomIndex].textContent === ""){
                arrOfBoxes[randomIndex].textContent = "O";
                arrOfBoxes[randomIndex].style.pointerEvents = "none";
                playerWins("X", "O");
            }else{
                if(randomIndex => 8){
                    randomIndex -= 1;
                    arrOfBoxes[randomIndex].textContent = "O";
                    arrOfBoxes[randomIndex].style.pointerEvents = "none";
                    playerWins("X", "O");
                }else{
                    randomIndex += 1;
                if(arrOfBoxes[randomIndex].textContent === ""){
                    arrOfBoxes[randomIndex].textContent === "O";
                    arrOfBoxes[randomIndex].style.pointerEvents = "none";
                    playerWins("X", "O");
                }else{
                    randomIndex += 1;
                    arrOfBoxes[randomIndex].textContent === "O";
                    arrOfBoxes[randomIndex].style.pointerEvents = "none";
                    playerWins("X", "O");
                }
                }
            }
        }else{
            for(let x = 0; x < arrOfBoxes.length; x++){
                if(arrOfBoxes[x].textContent === ""){
                    arrOfBoxes[x].textContent = "O";
                    arrOfBoxes[x].style.pointerEvents = "none";
                    playerWins("X", "O");
                    break;
                }
            }
        }
    },500)
}
}


first_box.addEventListener("click", ()=>{
    playerPlay(first_box, "X");
    machinePlay();
    playerWins("X", "O");
})

second_box.addEventListener("click", ()=>{
    playerPlay(second_box, "X");
    machinePlay();
    playerWins("X", "O");
})

third_box.addEventListener("click", ()=>{
    // console.log("3")
    playerPlay(third_box, "X");
    machinePlay();
    playerWins("X", "O");
})

fourth_box.addEventListener("click", ()=>{
    // console.log("4")
    playerPlay(fourth_box, "X");
    machinePlay();
    playerWins("X", "O");
})

fifth_box.addEventListener("click", ()=>{
    // console.log("5")
    playerPlay(fifth_box, "X");
    machinePlay();
    playerWins("X", "O");
})

sixth_box.addEventListener("click", ()=>{
    // console.log("6")
    playerPlay(sixth_box, "X");
    machinePlay();
    playerWins("X", "O");
})

seventh_box.addEventListener("click", ()=>{
    // console.log("7")
    playerPlay(seventh_box, "X");
    machinePlay();
    playerWins("X", "O");
})

eighth_box.addEventListener("click", ()=>{
    // console.log("8")
    playerPlay(eighth_box, "X");
    machinePlay();
    playerWins("X", "O");
})

nineth_box.addEventListener("click", ()=>{
    // console.log("9")
    playerPlay(nineth_box, "X");
    machinePlay();
    playerWins("X", "O");
})


restart_button.addEventListener("click", ()=>{
    first_box.textContent = "";
    first_box.style.pointerEvents = "all";
    second_box.textContent = "";
    second_box.style.pointerEvents = "all";
    third_box.textContent = "";
    third_box.style.pointerEvents = "all";
    fourth_box.textContent = "";
    fourth_box.style.pointerEvents = "all";
    fifth_box.textContent = "";
    fifth_box.style.pointerEvents = "all";
    sixth_box.textContent = "";
    sixth_box.style.pointerEvents = "all";
    seventh_box.textContent = "";
    seventh_box.style.pointerEvents = "all";
    eighth_box.textContent = "";
    eighth_box.style.pointerEvents = "all";
    nineth_box.textContent = "";
    nineth_box.style.pointerEvents = "all";
})