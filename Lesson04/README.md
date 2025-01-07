# Part 1 Lesson 4 - HTML CSS console.log()

- Went to SuperSimpleDev's JS Practice [Website](https://supersimple.dev/projects/amazon/checkout) to practice using the console to add the prices of the items in the cart

# HTML Code refresh

- `<button>[text]</button>`
- `<p>[paragraph of text</p>`

- nesting - elements within another element 
    `eg 
    <p>
      Hello this is a 
      <button>
        button
      </button>
    </p>`

- html attributes - used to specify elements in html file
- eg `<button title="tooltip">
        hello
      </button>`

- class attribute - adds a label to an element
- eg `<button title="Good Job!" class="red-button">
        hello
      </button>`
- this button will now have a tooltip (when hovered over in webpage) that displays "Good Job!", and can be referred to in code as "red-button"




# CSS Style (top of the html file)

- `<style>
    button {
      background-color: red;
      color: white;
      border: none;
    }
- this styling in CSS will affect all html button attributes


# HTML Doc structure

- <!DOCTYPE html> : tells the browser to use the newest version of html to load the webpage

- <html></html> : represents the webpage and evertyhing should go in here 
- broken up into two parts <head></head> (contains information on the page - eg the style element) and <body></body> (contains everything visible on the page eg buttons etc)

- other Head elements:
  <title></title> : titles the webpage (seen in tab)

# Script element

- <script></script> element at the bottom of <body> element since we want the webpage to load first and then execute the JS

- can also run JS code through attributes within an html element
  eg: <button title="Good job" onclick="alert('Good Job!')">
        Button
      </button> - will display message when button is clicked on webpage

# JS Comments

- // is used to create comments to provide more info for people reading our code (ignored by computer when loading webpage)
- also used for commenting out code not needed but not wanting to delete it

- /* */ - multiline comment (anything between the stars)

# HTML comments

<!--
Hello
  -->

# CSS comments

/*
Hello
*/


# console.log();

- see results of code in the console terminal


## Exercises for Lesson 4 - HTML CSS console.log()
![Exercises4a-4d]()
![Exercises4e-4h]()
![Exercises4i-4j]()