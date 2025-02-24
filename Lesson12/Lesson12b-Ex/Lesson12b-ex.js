const multiply = (num1, num2) => num1 * num2;
console.log(multiply(2,3));
console.log(multiply(7, 10));

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

console.log(addNum([1,2,3], 2));
console.log(addNum([-2, -1, 0, 99], 2));

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));
console.log(removeTwoEggs(['egg', 'apple', 'egg', 'egg', 'ham']));


function countPositive(nums) {
  let count = 0;
  nums.forEach((value) => {
    if(value > 0){
      count++;
    }
  });
  return count;
}

function addNum(array, num) {
  return array.map(value => value + num);
}

function removeEgg(array){
  return array.filter(value => value !== 'egg' ? true : false);
}

function removeTwoEggs(array){
  let eggCount = 0;
  return array.filter(value => {
    if(eggCount < 2 && value === 'egg'){
        eggCount++;
        return false;
      } else {
        return true
      }
  });
};

