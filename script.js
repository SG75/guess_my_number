'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const number = document.querySelector('.number').textContent;

document.querySelector('.check').addEventListener('click', function () {
  const input = Number(document.querySelector('.guess').value);
  console.log(input);

  if (!input) {
    //when no input
    displayMessage('⛔️ No number!');
  } else if (input === secretNumber) {
    //when guess is correct
    displayMessage('🎉 Correct Number!');
    number = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      console.log(highScore);

      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (input !== secretNumber) {
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(input > secretNumber ? '📈Too high!' : ' 📉Too low!');
    } else {
      //   '😱 You lost the game!';
      displayMessage('😱 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// play again button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  // document.querySelector('.number').textContent = '?';
  number = '?';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  // document.querySelector('.number').style.width = '15rem';
  displayNumber(number).style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
