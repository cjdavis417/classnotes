// simple number guessing game.

// universal variables for the game.
var guess;
var guessCount = 0;
var correctGuess = false;
var div = document.getElementById("do-while-prog");


// this is the main function 
function doWhile1() {
    var randomNumber = getRandomNumber(10);

    // this snippet checks to see if there was a previous game.
    // if so, it resets everything.
    var insideDiv = document.getElementById('game-ending');
    if(insideDiv) {
        refreshGame(insideDiv);
    }

    // this is the main do..while loop
    do {
        guess = prompt("I'm thinking of a number between 1 and 10.  What is it?");
        guessCount += 1;
        if (parseInt(guess) === randomNumber) {
            correctGuess = true;
        }
    } while( ! correctGuess)

    // when the number is quessed, this prints out the results.
    var strMessage = '<div id="game-ending"><h4>You guessed the number!</h4><h4>It took you ' + guessCount + ' tries to guess the number ' + randomNumber + '</h4></div>';
    div.innerHTML += strMessage;

}

// this function calculates the random number
function getRandomNumber(upper) {
    var num = Math.floor(Math.random() * upper) + 1;
    return num;
}


// this function resets the game.
function refreshGame(element) {
    guessCount = 0;
    correctGuess = false;
    element.parentElement.removeChild(element);
    // this last line, i could've written like: div.removeChild(element)
    // but decided to write like this to keep things more reusable.
}


