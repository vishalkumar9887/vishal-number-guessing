const max = 100;
let random = Math.floor(Math.random() * max) + 1;

const input = document.querySelector("input");
const button = document.querySelector("button");
const result = document.getElementById("result");
const playAgainBtn = document.getElementById("play-again");

let attempts = 0;

button.addEventListener("click", () => {
    const guess = input.value.trim();

    if (!guess) {
        result.textContent = "❗ Please enter a number.";
        result.style.color = "red";
        return;
    }

    if (guess.toLowerCase() === "quit") {
        result.textContent = "🚪 You quit the game.";
        result.style.color = "yellow";
        input.disabled = true;
        button.disabled = true;
        playAgainBtn.style.display = "inline";
        return;
    }

    const guessNumber = parseInt(guess);

    if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > max) {
        result.textContent = "❗ Please enter a number between 1 and 100.";
        result.style.color = "orange";
        return;
    }

    attempts++;

    if (guessNumber === random) {
        result.textContent = `🎉 Congratulations! You guessed it right in ${attempts} tries. Number was: ${random}`;
        result.style.color = "lime";
        input.disabled = true;
        button.disabled = true;
        playAgainBtn.style.display = "inline";
    } else if (guessNumber < random) {
        result.textContent = `🔽 Too low! Try a higher number. Attempt #${attempts}`;
        result.style.color = "lightblue";
    } else {
        result.textContent = `🔼 Too high! Try a lower number. Attempt #${attempts}`;
        result.style.color = "lightblue";
    }

    input.value = "";
    if (!input.disabled) input.focus();
});

playAgainBtn.addEventListener("click", () => {
    // Reset everything
    random = Math.floor(Math.random() * max) + 1;
    attempts = 0;
    input.disabled = false;
    button.disabled = false;
    input.value = "";
    result.textContent = "";
    playAgainBtn.style.display = "none";
    input.focus();
});
