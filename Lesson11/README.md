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

## Exercises for Lesson 11
![Exercises10a-10c]()
![Exercises10d-10f]()
![Exercises810g-10h]()
![Exercises810i-10j]()