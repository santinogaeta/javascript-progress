# Part 1 Lesson 6 - Functions

- Went to SuperSimpleDev's JS Practice [Website](https://supersimple.dev/projects/amazon/checkout) to practice using the console to add the prices of the items in the cart

# Functions

- Within script element
- function function1() {
  console.log('hello');
}
function1(); - will call the function above

- functions also create scope where variables created in functions only exist in functions

# Return Statements

- specified at the end of the function to define what value is returned once the function has been called
- can return a value (number, string), calculation, variables, or another function/operation that results in a value
- if a return statement is defined without a value eg return; - it will return 'undefined'
- return statement also ends the function immediately

# Parameters
- puts value into fucntion
- function calculateTax([nameOfParameter], [anotherParametet],[etc],...){
  console.log(nameOfParameter);
}
- paramenter have scope and can only be used in the function it is passed into
- if the correct number of paramenters are not passed into the function, the non0existant value is 'undefined'.

- can set Default values for the parameter:
eg function calculateTax(cost, taxPercent = 0.1){...}

## Exercises for Lesson 7
![Exercises6a-4c]()
![Exercises6d-6e]()
![Exercises6f-6j]()
![Exercises6k-6l]()