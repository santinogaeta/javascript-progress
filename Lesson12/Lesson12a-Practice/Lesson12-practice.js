/* Changing for-loop by using .forEach() and implementing arrowFunctions were applicable*/

const toDoList = JSON.parse(localStorage.getItem('list')) || [];
const toDoBoxElement = document.querySelector('.todo-textbox');
const todoListElement = document.querySelector('.todo-list');
const dateBoxElement = document.querySelector('.date-box');

renderList();

const addItem = document.querySelector('.js-add-button').addEventListener('click', () => {
  addToDoItem();
});


function addToDoItem(){
  let item = toDoBoxElement.value;
  let dueDate = dateBoxElement.value;
  if(item === '' || dueDate === ''){
    return;
  }
  toDoList.push({name: `${item}`, date: `${dueDate}`});
  localStorage.setItem('list', JSON.stringify(toDoList));
  renderList();
  toDoBoxElement.value = '';
  dateBoxElement.value = '';
}

function removeItem(index){
  toDoList.splice(index, 1);
  localStorage.setItem('list', JSON.stringify(toDoList));
  renderList();
}

function renderList(){
  let list='';
  toDoList.forEach((toDoObject, index) => {
    const {name, date} = toDoObject;
    list += `
    <div class="todo-input-grid">
      <div>${name}</div> 
      <div>${date}</div>
      <button class="delete-button js-delete-button"
        >Delete</button>
    </div>`;
  });
  todoListElement.innerHTML = list;

  document.querySelectorAll('.js-delete-button')
    .forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      removeItem(index);
    })
  })
}

function handleToDoEvent(key){
  if(key === 'Enter'){
    addToDoItem();
  }
}