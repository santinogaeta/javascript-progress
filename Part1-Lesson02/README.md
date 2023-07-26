# Part 1 Lesson 2 - Numbers and Math

- Went to SuperSimpleDev's JS Practice [Website](https://supersimple.dev/projects/amazon/checkout) to practice using the console to add the prices of the items in the cart

- Talks about different operations and order of operations

- Talks about how computers don't store floats as well as integers due to the use of binary numbers, can lead to inaccuracies where decimal numbers reoccur and never quite reach the exact decimal amount.
  - Offers alternative to calulate price in cents (not working in floats anymore) then convert back into dollars by dividing result by 100.
  - Eg instead of ```20.95 + 7.99``` we calculate ```(2095 + 799) / 100``` to then get the amount back into dollars.

- Rounding numbers by using ```Math.round()```
  - Eg ```Math.round(2.2)``` would result in ```2```
  - Eg ```Math.round(2.8)``` would result in ```3```

- Eg Calculating tax (10%)
  - If we went ```((2095 + 799) * 0.1) / 100``` the result would be ```2.894```, which is too accurate since we can't have 0.004cents
  - So we round down the result of the first grouping of operations:
    - ```Math.round((2095 + 799) * 0.1) / 100```, now resulting in ```2.89```

## Exercises for Lesson 2 - Numbers and Math
![Exercises2a-2e](/Part1-Lesson02/ExPics/Lesson2-Ex1.png)
![Exercises2f-2i](/Part1-Lesson02/ExPics/Lesson2-Ex2.png)
![Exercises2j-2n](/Part1-Lesson02/ExPics/Lesson2-Ex3.png)