window.addEventListener("load", () => {

    // Select elements using DOM
    let rock = document.getElementById("rock");
    let paper = document.getElementById("paper");
    let scissors = document.getElementById("scissors");
    let playerGuess = document.createElement("p");
    let result = document.getElementById("result");
    let computerGuess = document.getElementById("computer-guess");
    let list = document.getElementById("paragraph-group");

    // player choise will depend on button clicks
    let playerChoise;

    rock.addEventListener("click", () => {
        playerChoise = "rock";
        playRound();
        // we start the round
    })
    paper.addEventListener("click", () => {
        playerChoise = "paper";
        playRound();
        // we start the round
    })
    scissors.addEventListener("click", () => {
        playerChoise = "scissors";
        playRound();
        // we start the round
    })

    function playRound() {

        let computerChoise = Math.floor(Math.random() * 3);
        // will return 0, 1, 2 by random

        playerGuess.innerHTML = "Your guess: " + playerChoise;
        playerGuess.style.background = "black";
        playerGuess.style.color = "white";
        list.appendChild(playerGuess)

        if(computerChoise === 0){
            computerChoise = "rock";
        }else if (computerChoise === 1){
            computerChoise = "paper";
        }else{
            computerChoise = "scissors";
        }

        computerGuess.innerHTML = "Computer guess: " + computerChoise;

        if(playerChoise === computerChoise){
            result.innerHTML = "It's a tie!";
        }else if (
            playerChoise === "rock" && computerChoise === "scissors" ||
            playerChoise === "paper" && computerChoise === "rock" ||
            playerChoise === "scissors" && computerChoise === "paper"
        ) {
            result.innerHTML = "You win!";
        }else{
            result.innerHTML = "Computer win!";
        }
    }
});