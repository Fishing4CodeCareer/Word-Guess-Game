    var letters = ["i", "b", "c", "o", "n", "t", "i"]
, randomLetter = ""
, winCount = 0
, lossCount = 0
, guessesLeft = 0
, guessedLetters = []
, defaultGuessesLeft =7;
window.addEventListener("keypress", onKeyPress, false); newGame();

function newGame(){
    guessedLetters = [];
    resetGuesses();
    generateRandowLetter();
    displayOnScreen("wins", "wins: ${String(wincount)}");
    displayOnScreen("losses", "losses: ${String(lossCount)}");
    displayOnScreen("Guessesleft", "Guesses Left: ${String(guessesLeft)}");
}
function onKeyPress(key) {
    letter - key.key.tolowerCase();
    if (letters.includes(letter, 0) && quessedLetters.includes(letter, 0) ===false){
        guessedLetters.push(letter);
        printKeyPressed(letter);
        guessesLeft--;
        displayOnScreen("guessesleft",  "Guesses Left: ${String(guessesLeft)}");
     if (String(letter) ==String(randomLetter)){
         winCouint++;
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

        