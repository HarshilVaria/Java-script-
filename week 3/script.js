let n = Math.floor(Math.random() * 10) + 1, a = 0;

function checkGuess() {
    let g = +document.getElementById('guessInput').value;
    document.getElementById('feedback').textContent = g === n ? `You guessed it in ${++a} attempts!` : g < n ? 'Too low!' : 'Too high!';
    document.getElementById('attempts').textContent = ++a;
    if (g === n) document.getElementById('restartBtn').style.display = 'inline-block';
}

function startGame() {
    n = Math.floor(Math.random() * 10) + 1;
    a = 0;
    document.getElementById('attempts').textContent = 0;
    document.getElementById('feedback').textContent = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('restartBtn').style.display = 'none';
}

