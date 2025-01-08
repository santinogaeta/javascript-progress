# Part 1 Lesson 8 - Objects

- Went to SuperSimpleDev's JS Practice [Website](https://supersimple.dev/projects/amazon/checkout) to practice using the console to add the prices of the items in the cart

# Object
- Groups and allows us to use multiple values together (used within the script element)

- separate each property with comma
- trying to access a property that doesn't exist will return 'undefined'

- const product = {
  name: 'socks',
  price: 1090
};

- accessing/changing specific propoerties and values within the object (dot-notation by default)
- console.log(product.name)
- product.price = 2000;
- or using bracket notation (helps with variables with hyphened names since program might think it's a minus)
- eg product[name] = 'sock';

- adding a new property by defining it
eg product.description = 'soft';

- deleting a property: delete product.description;

- nested objects - can store objects within an object
- eg const product = {
  name: 'socks',
  price: 1090,
  rating {
    stars: 4.5,
    count: 87
    }
  };
- accessing nested object: product.rating.stars

- storing functions in objects (called a method)
- const product = {
  name: 'socks',
  price: 1090,
  func: function print(){
    console.log(product);
  }
};
- calling methods within object: product.func();

# Build-in Objects

- examples are Math and console - objects built into the language
- JSON and localStorage are also some examples

# JSON
- Javascript Object Notation
- a syntax (similar to JS objects) but has less features

example of product object in JSON:
{
  "name" : "Shirt",
  "delivery-time": "1 day",
  "rating": {
    "stars": 4.5,
    "Count": 87
  }
}

- All properties and Strings must use double quotes
- doesn't support functions
- JSON syntax is more universal for other programming languages, so we use JSON when we send data between computers in case they use different language
- also using JSON to store data

- Built-in JSON object can be used to convert JS objects into JSON:
- JSON.stringify([name of Object]) - will result in string and formatted in JSON, will not include functions/methods if Object contains any.
- JSON.parse([JSON String]); - will convert JSON string into a JS Object

# local Storage
- instead of variables being cleared when refreshing a web page, can save information to localStorage so that data is not lost when reloaded
- localStorage.setItem([name of value(String)],[string value]); - the [name of value] will be used to access the String value (localStorage only support Strings)
- localStorage.getItem([name of value]); - will retrieve the value stored by the above method
- if needed to convert a value into a string to be saved, use JSON.stringify() 
- eg localStorage.setItem('score', JSON.stringify(score));
- localStorage.removeItem([name of value]) - to remove the value from Local Storage
- trying to access an item that doesn't exist in localStorage will return null - resulting in error in program

# Auto-boxing
- JS automatically boxes a value in an special object with properties and methods that can be called
- eg: 'hello'.length - access the property of the string that will return the number of characters
- eg: 'hello'.toUpperCase() - access the method of the string that will return a copy of the string in all UpperCase
- this works with other values (numbers and booleans)
- cannot be used with null or undefined - will return errors

# References
- Obejects are actually just references that point to the computer memory where the values of the object are stored

- Copy by reference means that if we had const object2 = object1; rather than copying the entire object and all its contents, it copies the reference pointing to the memory where the values are stored (more efficient)

- const object - doesn't mean we can't change the values within the object, but means we can't change the reference that points to the memory where the values are stored

- if we had object1 and object2 pointing to the same memory, when we change a value by accessing either object, the change will be reflected when access by either since they point to the same location

- objects can't be compared directly
- if the contents of object1 and object3 are the same, because the reference point to different memory spaces object1 === object3 will return false, even though the contents are the same. However object1 === object2 will return true, since object2 copies the same reference as object1

- deconstructing
- if we had const object4 = {
  message: 'Hello',
  price: 799
}
and we wanted to store the message value in a variable named 'message' we can format it like:
const { message } = object4; - which pulls the property of the same name within the object4 object into the variable message
- can also do multiple properties at once:
const { message, price } = object4;

- shorthand property
- const object5 {
  message
}
- if there's an already defined variable of the same name, don't have to redefine the variable name in the object

- shorthand method
- cosnt object5 {
  method() {
    console.log('instead of defining function method(){} etc')
  }
}

## Exercises for Lesson 8
![Exercises8a-8d]()
![Exercises8e-8h]()
![Exercises8i-8k]()
