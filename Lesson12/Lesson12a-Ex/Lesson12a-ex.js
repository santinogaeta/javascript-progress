const startButtonElement = document.querySelector('.start-button');
const cartButtonElement = document.querySelector('.cart-button');
const cartMessageElement = document.querySelector('.cart-message');
const addButtonElement = document.querySelector('.add-button');
const removeButtonElement = document.querySelector('.remove-button');
const pageTitle = document.head.querySelector('title');
let messageNumber = 2;
let timeoutID;

startButtonElement.addEventListener('click', () => {changeText()});
cartButtonElement.addEventListener('click', () => {displayCartText()});
addButtonElement.addEventListener('click', () => {messageNumber++});
removeButtonElement.addEventListener('click', () => {
  if(messageNumber !== 0) {messageNumber--}});

setInterval(() => {changeTitle(messageNumber);}, 1500);

function changeTitle(num) {
  if(num === 0){
    pageTitle.innerHTML = 'Exercise Lesson12a- Advanced Functions';
  } else if (pageTitle.innerHTML !== `(${num}) New messages`){
    pageTitle.innerHTML = `(${num}) New messages`;
  } else {
    pageTitle.innerHTML = 'Exercise Lesson12a- Advanced Functions';
  }
}

function changeText(){
  if(startButtonElement.innerHTML === 'Start'){
    startButtonElement.innerHTML = 'Loading...'
    setTimeout(() => {
      startButtonElement.innerHTML = 'Finished!';
    }, 1000);
  } else {
    startButtonElement.innerHTML = 'Loading...';
    setTimeout(() => {
      startButtonElement.innerHTML = 'Start';
    }, 1000);
  }
}

function displayCartText(){
  cartMessageElement.innerHTML = 'Added';
  clearTimeout(timeoutID);
  timeoutID = setTimeout(() => {
    cartMessageElement.innerHTML = '';
  }, 2000);
}

const add = function() {
  console.log(2 + 3);
}

runTwice(add);
runTwice(function(){console.log('12b')})

function runTwice(fun){
  fun();
  fun();
}
