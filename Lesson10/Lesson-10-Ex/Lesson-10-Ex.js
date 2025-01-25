const costResultElement = document.querySelector(".cost-result");
const errorMessage = document.querySelector('.error-message');

function isClass(){
  let button = document.querySelector('.js-button');
  console.log(button.classList.contains('js-button'))
}

function changeColour(className){
  let toggleButton = document.querySelector(`${className}-button`);
  if(toggleButton.classList.contains('gaming-button')){
    toggleButton.classList.add('black-button');
    document.querySelector('.music-button').classList.remove('black-button');
    document.querySelector('.tech-button').classList.remove('black-button');
  } else if (toggleButton.classList.contains('music-button')) {
    toggleButton.classList.add('black-button');
    document.querySelector('.gaming-button').classList.remove('black-button');
    document.querySelector('.tech-button').classList.remove('black-button');
  } else {
    toggleButton.classList.add('black-button');
    document.querySelector('.gaming-button').classList.remove('black-button');
    document.querySelector('.music-button').classList.remove('black-button');
  }
}

function calculate(){
  let cost = Number(textboxElement.value);
  if(isNaN(cost)) {
    costResultElement.innerHTML = '';
    errorMessage.innerHTML = `There is invalid cost in the textbox.`
  } else if (cost < 0){
    costResultElement.innerHTML = '';
    errorMessage.innerHTML = `Cost cannot be less than $0`
  } else if(0 < cost < 50) {
    errorMessage.innerHTML = '';
    cost += 10;
    costResultElement.innerHTML = `$${cost} (Shipping cost included)`
  } else {
    errorMessage.innerHTML = '';
    costResultElement.innerHTML = `$${cost} (FREE shipping included!)`
  }
}

function handleCostEvent(key){
  if(key === 'Enter'){
    calculate();
  }
}