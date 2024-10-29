'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const body = document.querySelector('body');
const guess = document.querySelector('.guess');
const scoreDisplay = document.querySelector('.score');

document.querySelector('.check').addEventListener('click', function () {
  console.log('clicked');

  const input = Number(guess.value);
  console.log(input);

  if (!input) {
    message.textContent = '⛔️ No number!';
  } else if (input === secretNumber) {
    message.textContent = '🎉 You Got It !!';
    number.textContent = secretNumber;
    body.style.backgroundImage =
      'linear-gradient(to top, #30cfd0 0%, #330867 100%)';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    // Incorrect guess (too high or too low)
    if (score > 1) {
      message.textContent =
        input > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      scoreDisplay.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      scoreDisplay.textContent = 0;
    }
  }
});

// Play Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  number.textContent = '?';
  message.textContent = 'Start guessing...';
  scoreDisplay.textContent = score;
  body.style.backgroundImage =
    'linear-gradient(to right, #434343 0%, black 100%)';
  guess.value = ''; // Reset input value
});
