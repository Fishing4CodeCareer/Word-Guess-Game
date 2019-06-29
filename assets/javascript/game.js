var letters = ["i", "b", "c", "o", "n", "t", "i", "y", "w", "x", "m", "q","l", "z"]
    , randomLetter = ""
    , winCount = 0
    , lossCount = 0
    , guessesLeft = 0
    , guessedLetters = []
    , defaultGuessesLeft = 7;

window.addEventListener("keypress", onKeyPress, false);
newGame();

function newGame() {
    guessedLetters = [];
    resetGuesses();
    generateRandomLetter();
    console.log(randomLetter); //Turn on to see randomLetter in
    displayOnScreen("wins", "wins: " + winCount);
    displayOnScreen("losses", "losses: " + lossCount);
    displayOnScreen("guessesleft", "Guesses Left: " + guessesLeft);
}
function onKeyPress(key) {
    letter = key.key.toLowerCase();

    if (letters.includes(letter, 0) && guessedLetters.includes(letter, 0) === false) {
        guessedLetters.push(letter);
        printKeyPressed(letter);
        guessesLeft--;
        displayOnScreen("guessesleft", "Guesses Left: " + guessesLeft);
        if (String(letter) == String(randomLetter)) {
            winCount++;
            displayOnScreen("wins", "wins: " + winCount);
            newGame();
        }
        if (guessesLeft === 0) {
            lossCount++;
            displayOnScreen("losses", "losses: " + lossCount);
            newGame();
        }
    }
}

function generateRandomLetter() {
    randomLetter = letters[Math.floor(Math.random() * letters.length)];
}
function printKeyPressed(letter) {
    if (guessesLeft == 7) {
        document.getElementById("guessessofar").innerHTML += letter;
    } else {
        document.getElementById("guessessofar").innerHTML += ", " + letter;
    }
}

function resetGuesses() {
    guessesLeft = defaultGuessesLeft;
    displayOnScreen("guessesleft", "Losses: " + guessesLeft);
    displayOnScreen("guessessofar", "Your Guesses so far: ");
}

function displayOnScreen(elementId, content) {
    document.getElementById(elementId).innerHTML = content;
}