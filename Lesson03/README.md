# Part 1 Lesson 3 - Strings

- Went to SuperSimpleDev's JS Practice [Website](https://supersimple.dev/projects/amazon/checkout) to practice using the console to add the prices of the items in the cart

- alert('[string]') - creates a message on the webpage
- Concatenation: [string1] + [string2] would output 'string1string2'

- Type coersion: [string] + [number] would change the number to a string and output 'stringnumber' eg 'hello3'

- Strings also follow order of operations
  '$' + ((number1 + number2) / 100)

- Strings can be made using Single and Double quotes, and backticks (template strings `...`)
  - Interpolation = insert value directly into a string using ${}
  Eg using concatenation:
    'Items (' + (1+1) + '): $' + (2095 + 799) / 100 
  Using Interporlation:
    'Items (${1+1}): $${(2095 + 799) / 100}'
  - Multi-line string feature:
    `some
    text`
    outputs: 'some\ntext'

- Escape character: eg, "\'" will output the string '
- New line character "\n"

## Exercises for Lesson 3 - Strings
![Exercises3a-3f](Lesson03/ExPics/Lesson3-Ex1.png)
![Exercises3g-3j](Lesson03/ExPics/Lesson3-Ex2.png)
![Exercises3k-3n](Lesson03/ExPics/Lesson3-Ex3.png)