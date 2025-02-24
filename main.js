"use strict"

let playerOption = "";
// playerOption = prompt("Select: 'rock', 'paper', 'scissors'");
const options = document.querySelector("#options");
options.addEventListener("click", (event) => {
    playerOption = event.target.id;
    main()
});

const outputMsg = document.querySelector("#output-msg");
// Crear result
const result = document.createElement("div");
result.innerText = "Ready to play?";
// Agregar el resultados
outputMsg.appendChild(result);

let rounds = 0;
let score = {
    player: 0,
    computer: 0
};

const roundsText = document.querySelector(".rounds");
roundsText.innerText = "Round: 0"
const playerScore = document.querySelector(".player-score");
playerScore.innerText = "Score: 0"
const computerScore = document.querySelector(".computer-score");
computerScore.innerText = "Score: 0"

const playerImg = document.querySelector(".player-img");
const computerImg = document.querySelector(".computer-img");
playerImg.setAttribute("src", "./images/"+ randomOption() +".png");
computerImg.setAttribute("src", "./images/"+ randomOption() +".png");

function validOption(option) {
        option = option.toLowerCase();
        if (option === 'rock' || option === 'paper' || option === 'scissors') {
            return true
        } else {
            return false
        }
}

function countDown(number) {
   for (let x = 1; x <= number ; x++) {
       console.log(x);
   }

}

function randomNumber(min, max) {
    let num;
    num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function randomOption() {
    let options = {
        1 : 'rock',
        2 : 'paper',
        3 : 'scissors'
    };
    return options[randomNumber(1,3)];
}
function showResult(player, computer) {
    rounds += 1;

    roundsText.innerText = "Round: " + rounds;
    playerScore.innerText = "Score: " + score.player;
    computerScore.innerText = "Score: "+ score.computer;


    playerImg.setAttribute("src", "./images/"+player +".png");
    computerImg.setAttribute("src", "./images/"+computer +".png");
    let msg = " ";

    if (score.player === 5 || score.computer === 5) {
        if(score.player > score.computer){
            msg = "You win!";
        } else if (score.computer > score.player){
            msg = "Computer win!";
        } else {
            msg = "Draw!";
        }
        rounds = 0;
        score.player = 0;
        score.computer = 0;
    }
    result.innerText = msg;
    msg = " ";

}

function main() {
    let computerOption = "";

    if (validOption(playerOption)) {
        // countDown(3)
        let computerOption = randomOption();
        console.log('You:', playerOption);
        console.log('Computer:', computerOption);

        switch(playerOption){
        case 'rock':
            if (computerOption === 'rock') {
                console.log('Draw!');
                showResult(playerOption,computerOption)

        } else if( computerOption === 'paper' ) {
                console.log('Computer wins!');
                score.computer += 1;
                showResult(playerOption,computerOption)

            } else if( computerOption === 'scissors' ) {
                console.log('You win!');
                score.player += 1;
                showResult(playerOption,computerOption)
            }
            break;
        case 'paper':
            if (computerOption === 'rock') {
                console.log('You win!');
                score.player += 1;
                showResult(playerOption,computerOption)
            } else if( computerOption === 'paper' ) {
                console.log('Draw!');
                showResult(playerOption,computerOption)
            } else if( computerOption === 'scissors' ) {
                console.log('Computer wins!');
                score.computer += 1;
                showResult(playerOption,computerOption, 'Computer wins!')
            }
            break;
        case 'scissors':
            if (computerOption === 'rock') {
                console.log('Computer wins!');
                score.computer += 1;
                showResult(playerOption,computerOption, 'Computer wins!')
            } else if( computerOption === 'paper' ) {
                console.log('You win!');
                score.player += 1;
                showResult(playerOption,computerOption, 'You win!')
            } else if( computerOption === 'scissors' ) {
                console.log('Draw!');
                showResult(playerOption,computerOption, "Draw!")
            }

            break;
        }

    } else {
        console.log("invalid option");
    }
}

