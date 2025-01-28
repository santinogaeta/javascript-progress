const toDoList = [];
const toDoBoxElement = document.querySelector('.todo-textbox');
const todoListElement = document.querySelector('.todo-list');

function addToDoItem(){
  let item = toDoBoxElement.value;
  let list = ''
  toDoList.push(item);
  for(let i = 0; i < toDoList.length; i++){
    list += `<p>${toDoList[i]}</p>`;
  }
  todoListElement.innerHTML = list;
  toDoBoxElement.value = '';
}


function handleToDoEvent(key){
  if(key === 'Enter'){
    addToDoItem();
  }
}