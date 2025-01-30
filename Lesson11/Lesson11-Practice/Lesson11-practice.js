const toDoList = [];
const toDoBoxElement = document.querySelector('.todo-textbox');
const todoListElement = document.querySelector('.todo-list');
const dateBoxElement = document.querySelector('.date-box');



function addToDoItem(){
  let item = toDoBoxElement.value;
  let dueDate = dateBoxElement.value;
  toDoList.push({name: `${item}`, date: `${dueDate}`});
  renderList();
  toDoBoxElement.value = '';
}

function renderList(){
  let list='';
  for(let i = 0; i < toDoList.length; i++){
    const {name, date} = toDoList[i];
    list += `
    <div class="todo-input-grid">
      <div>${name}</div> 
      <div>${date}</div>
      <button class="delete-button" onclick="
        toDoList.splice(${i}, 1);
        renderList();"
        >Delete</button>
    </div>`;
  }
  todoListElement.innerHTML = list;
}

function handleToDoEvent(key){
  if(key === 'Enter'){
    addToDoItem();
  }
}