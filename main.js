"use strict"

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

function main() {
    let playerOption = "";
    let computerOption = "";

    playerOption = prompt("Select: 'rock', 'paper', 'scissors'");

    if (validOption(playerOption)) {
        // countDown(3)
        let computerOption = randomOption();
        console.log('You:', playerOption);
        console.log('Computer:', computerOption);

        switch(playerOption){
        case 'rock':
            if (computerOption === 'rock') {
                console.log('Draw!');
            } else if( computerOption === 'paper' ) {
                console.log('Computer wins!');
            } else if( computerOption === 'scissors' ) {
                console.log('You win!');

            }
            break;
        case 'paper':
            if (computerOption === 'rock') {
                console.log('You win!');
            } else if( computerOption === 'paper' ) {
                console.log('Draw!');
            } else if( computerOption === 'scissors' ) {
                console.log('Computer wins!');
            }
            break;
        case 'scissors':
            if (computerOption === 'rock') {
                console.log('Computer wins!');
            } else if( computerOption === 'paper' ) {
                console.log('You win!');
            } else if( computerOption === 'scissors' ) {
                console.log('Draw!');
            }

            break;
        }

    } else {
        console.log("invalid option");
    }
}

let keepgoing = true;
while (keepgoing) {
    main()
    let keepPlaying = prompt("keep playing (y/n)?");
    console.clear();
    keepPlaying = keepPlaying.toLowerCase();
    if(keepPlaying === "n"){
        console.log("Done!");
        keepgoing = false;
    }

}
