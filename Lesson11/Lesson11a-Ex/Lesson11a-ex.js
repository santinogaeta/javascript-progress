const nums = [10,20,30];
nums[nums.length-1] = 99;

console.log(getLastValue(nums));
console.log(getLastValue([1,20,22,24,5]));
console.log(getLastValue(['hello', 'good', 'morning']));

console.log(arraySwap(nums));
console.log(arraySwap([1,20,22,24,5]));
console.log(arraySwap(['hello', 'good', 'morning']));

for (i = 0; i <= 10; i++){
  if(i%2 === 0){
    console.log(i);
  }
}

for (i = 5; i >= 0; i--){
  console.log(i);
}

let j = 0;
while(j <= 10){
  if(j%2 === 0){
    console.log(j);
    j++;
  } else {
    j++;
  }
}

let k = 5;
while (k >= 0){
  console.log(k);
  k--;
}

console.log(addOne(nums));
console.log(addOne([1,20,22,24,5]));
console.log(addOne([-2, -1, 0, 99]));

console.log(addNum(nums, 2));
console.log(addNum([1,20,22,24,5], 3));
console.log(addNum([-2, -1, 0, 99], 2));

console.log(addArrays([1,1,2], [1,1,3]));
console.log(addArrays([1,2,3], [4,5,6]));
console.log(addArrays([-2, 3, 4], [-3, -3, 3]));
console.log(addArrays([-2, 3], [-3, -3, 3]));

console.log(countPositive([-2, 3, 4]));
console.log(countPositive([-2, 3, -3, -3, 3]));

console.log(minMax([-2, 3, 4]));
console.log(minMax([-2, 3, -3, -3, 36]));

console.log(minMax([]));
console.log(minMax([3]));

console.log(countWords(['apple', 'grape', 'apple', 'apple', 'banana']));

function getLastValue(array){
  return array[array.length - 1];
}

function arraySwap(array){
  const firstValue = array[0];
  const lastValue = getLastValue(array);
  array[0] = lastValue;
  array[array.length - 1] = firstValue;
  return array;
}

function addOne(array){
  for(i = 0; i < array.length; i++){
    array[i]++;
  }
  return array;
}

function addNum(array, num){
  for(i = 0; i < array.length; i++){
    array[i] += num;
  }
  return array;
}

function addArrays(array1, array2){
  if(array1.length !== array2.length){
    return 'Error in array lengths not matching';
  }
  let newArray = [];
  for (i = 0; i < array1.length; i++){
    newArray.push(array1[i] + array2[i]);
  }
  return newArray;
}

function countPositive(array){
  let count = 0;
  for(i = 0; i < array.length; i++){
    if(array[i] < 0){
      count++;
    }
  }
  return count;
}

function minMax(array){
  if (array === undefined || array.length ===0){
    return {min: null, max: null};
  }
  let min = array[0];
  let max = array[0];
  if(array.length === 1){
    return {min: min, max: max};
  }
  for (i = 1; i < array.length; i++){
    if(array[i] < min){
      min = array[i];
    }
    if(array[i] > max){
      max = array[i];
    }
  }
  return {min: min, max: max};
}

function countWords(array){
  const wordCount = {};
  for (i = 0; i < array.length; i++){
    let word = array[i];
    if(!wordCount[word]){
      wordCount[word] = 1;
    } else {
      wordCount[word]++;
    }
  }
  return wordCount;
}