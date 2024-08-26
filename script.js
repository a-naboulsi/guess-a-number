// script.js

// Generate a random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

document.getElementById('submitGuess').onclick = function() {
    // Get the user's guess
    let userGuess = document.getElementById('guessField').value;
    attempts++;

    // Check the user's guess
    if (userGuess == randomNumber) {
        document.getElementById('result').innerText = `Congratulations! You guessed it right in ${attempts} attempts.`;
        document.getElementById('restartGame').style.display = 'block';
    } else if (userGuess > randomNumber) {
        document.getElementById('result').innerText = 'Too high! Try again.';
    } else {
        document.getElementById('result').innerText = 'Too low! Try again.';
    }
};

document.getElementById('restartGame').onclick = function() {
    // Reset the game
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    document.getElementById('guessField').value = '';
    document.getElementById('result').innerText = '';
    document.getElementById('restartGame').style.display = 'none';
};
