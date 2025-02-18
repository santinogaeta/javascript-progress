/* Added Autoplay function, and arrow functions, and add/remove EventListeners to simplify code*/

let result = '';
let resultMessage = document.querySelector(".result-message");
const autoPlayButton = document.querySelector(".autoplay-button");
const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");
const resetButton = document.querySelector(".reset-button");
let isAutoplay = false;
let intervalID;

let score = JSON.parse(localStorage.getItem('score')) || {
    winTotal: 0,
    loseTotal: 0,
    drawTotal: 0
  };

let scoreMessage = document.querySelector(".score-message");
updateScore();

const rockMove = rockButton.addEventListener('click', () => {
  play('rock', pickComputerMove())
});

const paperMove = paperButton.addEventListener('click', () => {
  play('paper', pickComputerMove())
});

const scissorsMove = scissorsButton.addEventListener('click', () => {
  play('scissors', pickComputerMove())
});

resetButton.addEventListener('click', () => {
  resetScore();
});

autoPlayButton.addEventListener('click', () => {
  autoPlay();
});

document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r'){
    play('rock', pickComputerMove());
  } else if(event.key === 'p'){
    play('paper', pickComputerMove());
  } else if(event.key === 's'){
    play('scissors', pickComputerMove());
  }
})

function pickComputerMove(){
  let pick = Math.random(); 
  if(pick < (1/3)){
  return 'rock';
  } else if ((1/3) <= pick && pick < (2/3)){
  return 'paper';
  } else {
  return 'scissors';
  };
};

function play(playerMove, computerMove){
  if (playerMove === 'rock'){
    if(computerMove === 'rock'){
    result = 'draw';
    score.drawTotal++;
    } else if (computerMove === 'paper'){
      result = 'lose';
      score.loseTotal++;
    } else {
      result = 'win';
      score.winTotal++;
    };
  } 
  else if (playerMove === 'paper'){
    if(computerMove === 'rock'){
    result = 'win';
    score.winTotal++;
    } else if (computerMove === 'paper'){
      result = 'draw';
      score.drawTotal++;
    } else {
      result = 'lose';
      score.loseTotal++;
    };
  } 
  else {
    if(computerMove === 'rock'){
    result = 'lose';
    score.loseTotal++;
    } else if (computerMove === 'paper'){
      result = 'win';
      score.winTotal++;
    } else {
      result = 'draw';
      score.drawTotal++;
    };
  }
  localStorage.setItem('score', JSON.stringify(score));
  resultMessage.innerHTML = `You chose <img class="small-img" src="rps-images/${playerMove}-emoji.png">, the Computer chose <img class="small-img" src="rps-images/${computerMove}-emoji.png">, you ${result}!`;
  updateScore();
};

function resetScore() {
  score.winTotal = 0;
  score.loseTotal = 0;
  score.drawTotal = 0;
  localStorage.removeItem('score');
  resultMessage.innerHTML = `Score has been reset!`;
  updateScore();
};

function autoPlay() {
  if(isAutoplay){
    isAutoplay = false;
    autoPlayButton.innerHTML = 'Auto Play';
    clearInterval(intervalID);
    return;
  }
  isAutoplay = true;
  autoPlayButton.innerHTML = 'Stop Play';
  intervalID = setInterval(() => {
    play(pickComputerMove(),pickComputerMove())
  }, 1000);
};

function updateScore() {
  scoreMessage.innerHTML = `Wins: ${score.winTotal}, Losses: ${score.loseTotal}, Draws: ${score.drawTotal}`;
};
