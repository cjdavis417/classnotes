var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function doWhile1() {

    do {
        guess = prompt("I'm thinking of a number between 1 and 10.  What is it?");
        guessCount += 1;
        if (parseInt(guess) === randomNumber) {
            correctGuess = true;
        }
    } while( ! correctGuess)

    document.write('<h4>You guessed the number!</h4>');
    document.write('<h4>It took you ' + guessCount + ' tries to guess the number ' + randomNumber + '</h4>');
}

function getRandomNumber(upper) {
    var num = Math.floor(Math.random() * upper) + 1;
    return num;
}
