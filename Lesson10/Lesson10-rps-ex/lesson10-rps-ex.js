let result = '';
let resultMessage = document.querySelector(".result-message");

let score = JSON.parse(localStorage.getItem('score')) || {
    winTotal: 0,
    loseTotal: 0,
    drawTotal: 0
  };

let scoreMessage = document.querySelector(".score-message");
updateScore();

function pickComputerMove(){
  let pick = Math.random(); 
  if(pick < (1/3)){
  return 'rock';
  } else if ((1/3) <= pick && pick < (2/3)){
  return 'paper';
  } else {
  return 'scissors';
  };
}

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
}

function resetScore() {
  score.winTotal = 0;
  score.loseTotal = 0;
  score.drawTotal = 0;
  localStorage.removeItem('score');
  resultMessage.innerHTML = `Score has been reset!`;
  updateScore();
}

function updateScore() {
  scoreMessage.innerHTML = `Wins: ${score.winTotal}, Losses: ${score.loseTotal}, Draws: ${score.drawTotal}`;
}
