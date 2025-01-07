# Part 1 Lesson 6 - Booleans & If-statements

- Went to SuperSimpleDev's JS Practice [Website](https://supersimple.dev/projects/amazon/checkout) to practice using the console to add the prices of the items in the cart

# Boolean

- True/false values (don't need quotes otherwise will turn into string)
- eg console.log( 3 < 5) will output true
- Math operations happens before comparison operators 

- Comparison operators ( < less than, > greater than, >= greater than or equal to, <= less than or equal to, == or === equal to, !== not equal to)
  Note: == will try to convert both values into the same type eg 5 == '5.00' will return true, even though one is a value and the other is a string
  5 === '5.00' will return false, but 5 === 5 will return true
  This also applies to != and !==


# if-statements

- Syntax example:
- if ([Condition]) {
  [code to run if Condition is true]
  } else if ([Secondary Condition]) {
  [code to run if second condition applies]
  } else {other code to run if boolean statement is false (optional to have)}

- Logical Operators ( ! not, || Or, && and)
- Scope - variables defined in curly brackets of if-statements only exist in those brakcets (helps avoid naming conflicts), however variables defined with var do not follow scope rules so we don't use var anymore

# Truthy and Falsy Booblean values
- values that can be used to emulate boolean behaviour
- Falsy: false, 0 , '' (empty string value), NaN, undefined, null
- NaN - not a number eg console.log ( 'text' / 5) - will output NaN, saying that you can't divide a string as it's not a number
- undefined eg: let variable1; console.log(variable1); - will output undefined since no value was assigned to the variable1
- if want to do with a constant variable, need to define as: const variable1 = undefined;

- Any other value is a truthy value (acts as a true boolean value)

- example for using truthy:
let cartQuantity = 5; (this is currently a truthy value)
if (cartQuantity) {
  console.log('Cart has items in it');
}
- so this message in console will continue to display as long as there are non-zero amount of items in cart (rather than condition being cartQuantity > 0), once it hits zero it will become a falsy value and not execute the message.

- Ternary Operator '? :' - used to save an 'if-statement' to a variable
- [Condition] ? '[Value if true]' : '[Value if false]'
- const result = true ? 'truthy' : 'falsy'

- Guard Operator && - used like a shortcut where the if-statement has no else statement and won't run the code if false, can also be assigned to a variable
- eg false && console.log('hello') - won't run the code since first condition is false
- eg const message = 5 && 'hello'; console.log(message) - will output hello since 5 is a truthy value and will execute the second code after the Guard Operator &&

- Default operator || - will stop early if the first condition is true
- eg const currency = 'EUR' || 'USD'; console.log(currency) will output 'EUR' since string is a truthy and cuts off before assigning the 'USD' string.
- Shortcut for if-statement: if(![Condition]){}


## Exercises for Lesson 6
![Exercises6a-4c]()
![Exercises6d-6e]()
![Exercises6f-6j]()
![Exercises6k-6l]()