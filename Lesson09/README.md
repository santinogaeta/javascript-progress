# Part 1 Lesson 9 - Document Object Model (DOM)

- Went to SuperSimpleDev's JS Practice [Website](https://supersimple.dev/projects/amazon/checkout) to practice using the console to add the prices of the items in the cart

# Document Objects
- document.body.innerHTML = 'Hello' - will overwrite everything in innerHTML to display 'Hello' as this controls all the HTML in the body element
- document.title = 'DOM' - will change the title of webpage to DOM
- innerText - will give just the string of text without the whitespaces around it

- We can have HTML elements in Javascript by using DOM by combining JS and HTML together to give JS control of the page

- when an HTML element is accessed via DOM - it converted into a Javascript object
- can also inject html elements through strings:
- document.body.innerHTML = '<button>Good Job!</button>'; - will create a button using JS

- document.querySelector() - lets us get any element from the page and put inside JS
- eg: document.querySelector([HTML element as a string]) - will grab the first HTML element and its contents on the webpage
- eg: console.log(document.querySelector('button')) - outputs "<button>hello</button>"
- can also do console.log(querySelector('body'))
- console.log(document.querySelector('button').innerHTML) - will output 'hello' and can be changed as above

- use the class attribute when dealing with multiple elements on the same webpage to be able to querySelector specific elements
- "<button>hello</button>" "<button class="button2">hello2</button>"
- eg: console.log(document.querySelector('.button2')) 

- naming convention - when naming a variable that has an element, usually include Element in the name of variable: 
- const buttonElement = document.querySelector('button2')

# Textbox <input> element
- a void element that creates a box for the user to write in on a webpage
- to access the text within the textbox use .value instead of something like .innerHTML since <input> is a void element (no closing tag)
- value from DOM will automatically be a string, can use Number(inputElement.value) to convert string into a number
- Likewise (in general) String() - can turn any value into a String (like a number)

# Event Listeners
- onclick and onkeydown are event listeners, waiting for specific events to occur
- onkeydown give variables called 'events', which contain information about the event that was being listened for (keys pressed), so can trigger functions based on certain keys being pressed (enter, esc etc)
- eg event.key will return the key that was pressed/used in the event as a string

# Window element (built-in object that represents the page)
- This element concerns the browser window, so not only does window.document give the document object we've been accessing 
- window.console.log() is the same as console.log, or window.alert is the same as alert
- JS automatically adds the window. 




## Exercises for Lesson 9
![Exercises8a-8d]()
![Exercises8e-8h]()
![Exercises8i-8k]()
