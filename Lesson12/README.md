# Lesson 12 - Advanced Functions

- Went to SuperSimpleDev's JS Practice [Website](https://supersimple.dev/projects/amazon/checkout) to practice using the console to add the prices of the items in the cart

# Function as a variable

- const function1 = function greeting(){ console.log('hello');}
- console.log(function1); will print out the greeting() function
- function1(); will run the function and produce 'hello'

- since we call the function by the variable name, we dont need the 'greeting' name for function, so we can delete and create an Anonymous Function:
- const function1 = function() {console.log('hello');} - a function without a name
- hoisting (calling a function before it's created in code), is not possible with this syntax - assigning func to a variable

- since functions are values, we can store functons in objects (called a Method):
- const object1 = {
  num: 2;
  fun: function(){console.log('hello')}
  }
- can call function within object: object1.fun();

- Can also pass a function into a function as a parameter value: run(function(){console.log('hello again');}); - this is a callback function

- setTimeout() - allows us to run code in the future
- setTimeout([functon to run], [how long to wait in milliseconds])
- eg setTimeout(run(), 3000) - will run code run() in 3seconds

# Asynchronous Code
- if there is a code waiting a certain amount of time before running - the code won't wait for the line to finish before going to the next line
- eg setTimeout - sets timer in background, then runs code after synchronously until time comes to execute the timedout code 
- (Compared to Synchronous Code - will wait for one line to finish before going to the next line)

- setInterval([function to run in the future], [time in milliseconds]) - will run code repeatedly at intervals specified in parameters
- setInterval(function(){[play();]}, 3000); - create anonymous function first to then specify other function within
- the setInterval() function returns a different id number each time it runs
- in order to stop a setInterval() - we can assign the changing id numbers to a variable, and use clearInterval([ID variable of setInterval])


# Preferred way to loop through Array
- .forEach([function to run]) - method to loop through each item in the array
- eg: .forEach(function(value){console.log(value);}) - will loop each item in array and insert each value into the function
- Can also add an additional paramater to the function - the index of each value

- with .forEach(), instead of using continue to skip an iteration, use return
- with .forEach() there is no way to break out of a loop early if a certain condition is met. Therefore just use a regular for-loop if needed

## Lesson 12 Part 1 ends

# Lesson 12 Part 2 Begins

# Arrow Functions
- eg. const arrowFunction = () => {console.log('hello')}; then call like any other function: arrowFunction();
- paramas and return statements work the same way: const arrowFunction = (param1, param2) => {console.log('hello'); return 5;};
- if there's only one parameter - don't need the brackets:
- const oneParam = param => {[function]}
- If arrow function is one line, don't need the curly brakets or return statement (if needed):
- const oneLine = param1 => 5 + param1;
- can use arrowFunctions in .forEach() loops
- eg todoList.forEach((value,index) => {
  if ( value === 'wash dishes'){return;}
})
- cannot hoist when using Arrow Functions (calling function before defining it in order of code)

- Can use arrowfunctions inside an object, as well as a term called shorthand method syntax:
const object2 = {
  method1: () => {[function]}, - arrow function
  method(){[function]} - shorthand method syntax
}

# .addEventListner()
- Lets us run some code when we interact with the element (using document.querySelector([element]))
- take two parameters, the 'event' to look out for (eg. 'click' like 'onclick'), then the 'function' to run once clicked
- eg. buttonElement.addEventListener('click', () => console.log('click'));
- the positive for using this as opposed to onclick='' in html file, is that we can add multiple event listeners for an event
- can aldo remove an event listener using .removeEventListener([event], [function triggered by event])
- we cannot write the entire arrowFunction in .removeEventListener, so we must assign arrowFunction to a variable

- best practice to use .addEventListener, rather than onclick='' in html attributes



## Exercises for Lesson 12
![Exercises11a-11c]()
![Exercises11d-11h]()
![Exercises11i-11k]()
![Exercises11l-11n]()
![Exercises11o-11q]()
![Exercises11r-11t]()
![Exercises11u-11v]()
![Exercises11w-11x]()