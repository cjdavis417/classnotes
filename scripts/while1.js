var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;

function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}

while (guess !== randomNumber) {
    guess = getRandomNumber(upper);
    attempts += 1;
}

document.write("<h4>The random number between 0 and " + upper + " was: " + randomNumber + "</h4>");
document.write("<h4>It took the computer " + attempts + " attempts to get it right.</h4>");
                        