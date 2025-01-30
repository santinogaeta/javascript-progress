# Part 1 Lesson 11 - Arrays and Loops

- Went to SuperSimpleDev's JS Practice [Website](https://supersimple.dev/projects/amazon/checkout) to practice using the console to add the prices of the items in the cart

# Arrays
- Another type of value and represents a list of values
- eg const myArray = [10, 20, 30];
- accessing specific value: myArray[0] - 'index' represents position in Array (starts from zero) and will return 10
- changing value: myArray[0] = 99; will change the first value to the new value
- can put multiple different types of values in an array: [10, 'hello', true, { name : 'socks'}] [number, string, boolean, object]
- can add an array in an array - [10, 'hello', [0, 2]]
- checking typeof on array gives 'object'
- to check if 'object' is avctually an array: Array.isArray(myArray); - will return true
- Arrays also have properties and methods
-   myArray.length - will give the number of values in the array (3)
-   myArray.push([value]) - will end a 'value' to the end of the array (so length will now be 4)
-   myArray.splice([index to remove],[number of values to remove starting from index specified])
-     eg: myArray.splice(1, 2) - will remove the 20, 30, leaving only [10, 100]

# While loops
- lets us run code over and over until condition met to stop
- while([condition]){[code to iterate through until condition becomes false]}
- so that the condition is eventually met and the loop ends, increment value
- eg: while(i <= 5){console.log(i); i++; } - so will increment i for next loop until the increase surpasses 5 and condition becomes false and the loop ends

# For Loop
- for ([loop variable]; [loop condition]; [loop variable increment]){[code to loop through]}
- eg: for (let i = 1; i <= 5; i++){~}

# Looping through an array
- for (let i = 0; i <= array.length - 1; i++){console.log(array[i])}

# Main idea of Javascript
- 1. Save the data (variables, outputs etc)
- 2. Generate the HTML (use JS to generate HTML as strings to then querySelect elements in our HTML code to input via .innerHTML)
- 3. Make it interactive (to come soon)

## Lesson 11 Part 1 ends

# Lesson 11 Part 2 begins

- DESTRUCTURING (Shortcut for Objects)
- if variable name is same as the property name for an object (eg const name = list.name):
- const { name } = list; - take the name propoerty out of the object and puts it in the name variable
- can also do multiple values from the same object: const {name, dueDate} = list;

# CSS Grids
- display: grid; - used to specify a <div> element to be lined up in a grid formation
- grid-template-column: ~px ~px ~px - configure as many columnswith the amount of px you want each column width to be 
- align-items: center - will center vertically all emelents in the row
- align-items: stretch - this is the default align setting, where the elements will stretch to be the same as each other

# Arrays are references
- so can create a const array, and still push and splice, as this is just a reference to the array stored in computer's memory
- copying a copy of the reference (array2 = array; array.push(3);) console.log both will both show 3 for each as the array has pushed 3, and array2 points to array which had value changed

- const array2 = array.slice() - will copy the values from array and is no longer a reference, so anything that affects array, will not reflect on array2

# Desctructuring
- const [firstValue, secondValue] = [1, 2, 3] - will not just set the array but will assign the first and second values of the array to the deconstructed variables specified

# loop shortcuts
- use break to exit a loop early before the loop condition is met
- continue lets us skip all code below it and skip to the next iteration of the loop
- eg for (let i = 1; i<10; i++){
if (i === 3) {
  continue;
}
console.log(i);
}
- above shows that when i is 3, to skip the console.log code and move to the next iteration

- checking if something is divisible by a number using the remained operator %
- if i % 3 === 0 - it IS divisible by 3,
- if i % 3 === 1 - it is not (eg 7 % 3 === 1)

- in a while loop, when using continue, you must do the iteration (i++) manually before the continue executes

 

## Exercises for Lesson 11
![Exercises11a-11c]()
![Exercises11d-11h]()
![Exercises11i-11k]()
![Exercises11l-11n]()
![Exercises11o-11q]()
![Exercises11r-11t]()
![Exercises11u-11v]()
![Exercises11w-11x]()