'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const input = Number(document.querySelector('.guess').value);
  //   console.log(input, typeof input);
  if (!input) {
    //when no input
    document.querySelector('.message').textContent = '⛔️ No number!';
  } else if (input === secretNumber) {
    //when guess is correct
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (input > secretNumber) {
    //when guess is higher than secret number
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '📈Too high!';
    } else {
      document.querySelector('.message').textContent = '😱 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (input < secretNumber) {
    //when guess is lower than secret number
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '📉Too low!';
    } else {
      document.querySelector('.message').textContent = '😱 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// play again button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});

// highscore
