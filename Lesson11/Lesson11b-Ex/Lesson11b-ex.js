const array1 = ['hello','world','search','good'];
const array2 = ['not', 'found'];
const foodList1 = ['egg', 'apple', 'egg',  'egg', 'ham'];
const foodList2 = ['egg', 'apple', 'egg',  'egg', 'ham'];
const colours = ['green', 'red', 'blue', 'red'];
const colours2 = ['red', 'green', 'green', 'red'];

console.log(typeof(array1));
console.log(typeof('search'));

console.log(findIndex(array1, 'search'));
console.log(findIndex(array2, 'search'));
console.log(removeEgg(foodList1));
console.log(removeTwoEgg(foodList1));
console.log(removeLastTwoEgg(foodList1));

fizzBuzz();

console.log(unique(colours));
console.log(unique(colours2));

function findIndex(array, word){
  if(typeof(word) != 'string' || typeof(array) !== 'object'){
    return -1;
  }
  for(let i = 0; i < array.length; i++){
    if(array[i] === word){
      return i;
    }
  }
  return -1;
}

function unique(array){
  const uniqueArray = [];
  for(let i = 0; i < array.length; i++){
    if (findIndex(uniqueArray, array[i]) === -1){
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}

function removeEgg(foods){
  const newFoodList = [];
  for(let i = 0; i < foods.length; i++){
    if(foods[i] === 'egg'){
      continue;
    } else {
      newFoodList.push(foods[i]);
    }
  }
  return newFoodList;
}

function removeTwoEgg(foods){
  const newFoodList = [];
  let count = 0;
  for(let i = 0; i < foods.length; i++){
    if(foods[i] === 'egg' && count < 2){
      count++;
      continue;
    } else {
      newFoodList.push(foods[i]);
    }
  }
  return newFoodList;
}

function removeLastTwoEgg(foods){
  const reverseList = foods.slice().reverse();
  const newFoodList = [];
  let count = 0;
  for(let i = 0; i < reverseList.length; i++){
    if(reverseList[i] === 'egg' && count < 2){
      count++;
      continue;
    } else {
      newFoodList.push(reverseList[i]);
    }
  }
  return newFoodList.reverse();
}

function fizzBuzz(){
  let i = 0;
  while(i <= 20){
    if(i % 3 === 0 && i % 5 ===0){
      console.log('FizzBuzz');
      i++;
    } else if(i % 3 === 0){
      console.log('Fizz');
      i++;
    } else if( i % 5 === 0){
      console.log('Buzz');
      i++;
    } else{
      console.log(i);
      i++;
    }
  }
}