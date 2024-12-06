// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Function to check the player's guess
function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const message = document.getElementById("message");
    const guess = parseInt(guessInput.value);

    // Increment attempts
    attempts++;

    // Validate the guess
    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    // Compare the guess with the random number
    if (guess === randomNumber) {
        message.textContent = `🎉 Correct! You guessed the number in ${attempts} attempts.`;
        message.style.color = "green";
        resetGame();
    } else if (guess < randomNumber) {
        message.textContent = "Too low! Try again.";
        message.style.color = "blue";
    } else {
        message.textContent = "Too high! Try again.";
        message.style.color = "orange";
    }

    // Clear the input field for the next guess
    guessInput.value = "";
    guessInput.focus();
}

// Function to reset the game after a win
function resetGame() {
    setTimeout(() => {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        document.getElementById("message").textContent = "Game reset! Guess the new number.";
        document.getElementById("guessInput").value = "";
    }, 3000);
}
