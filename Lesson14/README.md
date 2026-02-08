# Lesson 14 - Modules

- Went to SuperSimpleDev's JS Practice [Website](https://supersimple.dev/projects/amazon/checkout) to practice using the console to add the prices of the items in the cart

# Modules

- Problem with running <script></script> tags is that you can cause naming conflicts between the different scripts loading into the file
- Modules contains a variable inside a file - so it won't conflict with anything outside the file
- Getting a variable out of a file: Add a type="module" attribute within a script tag, export the variable in the file you want to access variable from (export const cart = [];), then import into the file you want to access variable in (import {cart} from '../data/cart.js';)
- import {variableName} from 'filepath'; - must go at the top of the file
- module work only through Live Server to open HTML files
- the javascript file with type "module" that is left in the html to load the script is called to "entry point"

## Benefits of Modules
- Avoid naming conflicts
- can rename imported variable: import {cart as myCart}
- Don't have to worry about the order of the files that are loaded
- Better way to organise our code

## Grouping related code
- Best Practice is to group related code together into its own file (variables and functions relating to that variable)
- Be weary between functions that update the variable and should be grouped (addToCart()), and update the webpage and should stay in the entry point script (updateCartQuantity())
- when importing multiple code into script, can separate with comma inside curly brackets eg. import { cart, addToCart }

- Alternatively if we wanted to import everything: import * as cartModule from ...
- Then to access elements within the MOdule, use dot notation: cartModule.cart, cartModule.addToCart('id');





## Exercises for Lesson 14
![Exercises12a-12c]()
![Exercises12d-12e]()
![Exercises12f]()
![Exercises12g-12i]()
![Exercises12j-12l]()
![Exercises12m-12o]()
![Exercises12p-12s]()
![Exercises12t-12x]()