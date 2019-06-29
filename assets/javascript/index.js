var letters = ["i", "b", "c", "o", "n", "t", "i"]
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
    console.log(randomLetter); // Turn on to see randomLetter in
    displayOnScreen("wins", "wins: ${String(wincount)}");
    displayOnScreen("losses", "losses: ${String(lossCount)}");
    displayOnScreen("guessesleft", "guesses Left: ${String(guessesLeft)}");
}
function onKeyPress(key) {
    letter = key.key.tolowerCase();
    if (letters.includes(letter, 0) && guessedLetters.includes(letter, 0) ===false){
        guessedLetters.push(letter);
        printKeyPressed(letter);
        guessesLeft--;
        displayOnScreen("guessesleft",  "Guesses Left: ${String(guessesLeft)}");
     if (String(letter) ==String(randomLetter)) {
         winCount++;
         displayOnScreen("wins", "wins: ${String(winCount)}");
        newGame();
     }
        if (guessesLeft ===0) {
        lossCount++;
        displayOnScreen("losses", "Losses: ${String(lossCount)}");
        newGame();
      }
    }   



}

function generateRandomLetter(){
    randomLetter = letters[Math.floor(Math.random() * letters.length)];
}
function printKeyPressed(letter) {
    if (guessesLeft ==7) {
    document.getElementById("guessessofar").innerHTML +=letter;
   }  else {
       document.getElementById("guessessofar").innerHTML += ", " + letter;
   }
}

function resetGuesses() {
    guessesLeft = defaultGuessesLeft;
    displayOnScreen("guessesLeft", "Losses: ${String(guessesLeft)}");
    displayOnScreen("guessessofar", "Your Guesses so far: ");
}

function displayOnScreen(divContainer, content) {
    document.getElementById(divContainer). innerHTML = content;
    
}