# javascript-amazon-project

# Main idea of JavaScript (3step process)
- Save the data
- Generate the HTML
- Make it interactive

# Amazon Project scope
- Save the data: in this case, data is information about our products 
- Instead of writing out everything in html code, we will generate the html in JS, and store the product information in an array using objects for each product
- This method is creating a data structure
- Next is to loop through the array to generate the HTML then insert it using DOM (innerHTML)
- Forcing two decimal places using toFixed([number of decimal places]), eg (1090/100).toFixed(2);
- Loading js files is done from top to bottom - so order matters!
- Making it interactive steps: adding listeners to buttons to add items to cart
- We can store data of cart in an array - using another js file in the data folder
- but when we click any of the add to cart buttons, how does it know which product to add
- Using Data attributes and substituting the name so that each button has an identifier associated to the name of the product it will add.

### Data Attributes
- another HTML attribute that allows us to attach any information to an element
- data attribute must start with 'data', and any following names must be using 'kebab-case' eg. data-button-add 

- once a data attribute is added to the HTML element, we can call those attributes using: element.dataset, and outlines the data like an Object, which means we can access the data like an object
- the name gets converted from kebab-case to camelCase

- define unique ids for each product, instead of using its product name to identify each item
- then see if the button of the item that was clicked is already in cart (to increase quantity), otherwise add item to cart

- now we try see how to make the cart quantity interactive on webpage (adding up all item quantities)
- looping through cart and adding quantities and innerHTML into the cart quantity element on html