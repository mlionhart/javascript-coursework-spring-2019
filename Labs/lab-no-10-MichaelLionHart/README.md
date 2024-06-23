# CTEC 126 - Lab No. 10

## Exploring the DOM with JavaScript/jQuery

**NOTE:** This assignment is a redo of Lab No. 6 but rather than coding the functions in JavaScript, you are to rewrite them using jQuery to access and process DOM elements.

You can use your HTML that you created for Lab 6 to get started. No need to recode the HTML page. Got that?

This assignment will have you first create some HTML. You will then add some additional HTML that I have prepared. Finally, you will develop some JavaScript code functions to perform specific operatons.

Please follow the instructions carefully and let me know on Slack if you have any questions.

## Instructions

1. Use the [lab10.html](lab10.html) page provided
2. Use the CSS file [dom.css](css/dom.css) provided
3. In the HTML file create the following:
  - A header div to hold an h1, h2. Give the header div an id of "header".
  - Inside of the header div create a div and give it an id of "nav".
  - In the nav div create an unordered list of 5 items. Make each item text that contains 1-3 words. Don't style it at this time.
  - Right before the closing div for the header add a horizontal rule
  - Now create a new div and give it an id of content. This div should come after the closing div for the header.
  - Inside of the content div create 3 paragraphs of text.
  - Give each paragraph a unique id of para1, para2, para3.
  - Give those three paragraphs each a of class of "herocontent"
  - Add 3-4 senetneces of content to each one of the paragraphs.
  - In each of the paragraphs add a link to another site on the web.
  - Now add a div and give it an id of "footer".
  - In the footer create a paragraph that contains the copyright symbol (using HTML entities) and some text of your choice. Enter 2 lines of text in the paragraph.
  - Assign the class "footercontent" to the paragraph.
  - VALIDATE YOUR HTML AND CSS

Your completed page should look something like this:

![Your page should look like this](misc/lab10.png)

In the lab6.html file do the following:

1. Below the footer div add a new div with an id of "mybuttons". This will be used to create the buttons for this assignment.
2. Below the mybuttons div create a script tag that points to an external JavaScript file. The JavaScript file should be called **dom.js** and be placed in a folder named **js**.

Now in the **mybuttons** div copy and paste the HTML from the [buttons.txt](misc/buttons.txt) file. This is the code you will use to test the JavaScript functions you will be developing.

In the **dom.js** file create the following:

1. Create a function named **countElements**. This function takes a parameter named **elementName**.
2. This function will take the element name passed to it and return the number elements it found that match the tag name. (HINT: getElementsByTagName().
3. Create a function named **displayElementText**. This function takes a parameter named **elementName**.
4. This function will take the element name passed to it and display via an **alert** function the innerHTML of each of the elements it finds. Use a repetition construct to do this.
5. Create a function named **displayElementAttributes**. This function takes two parameters named **elementName** and **elementAttribute**. When called it will display an **alert** for each elements attribute name value. Use a repetition construct to do this.
6. Create a function named **displayElementsContentByClassName**. This function takes a parameter called **className**. When called it will display an **alert** for each elements with the matching class names **innerHTML**. Use a repetition construct to do this.

Now in the [lab10.html](lab10.html) file:

1. Create a new div below the **mybuttons** div and give it an id of **myoutput**. Place a title above this div that says "My Output".
2. Leave the content blank. You will be using JavaScript to populate it.
3. You may want to go into the [css/dom.css](css/dom.css) style sheet and create a style rule to make the background of this div a different color. Maybe a light gray such as #cccccc. Give it some padding as well.

Now back to the **dom.js** file:

1. Create a function named **clearMyOutputDiv** that will set the **innerHTML** of the **myoutput** div to nothing (empty). You can do this with one line of JavaScript code in your function.
2. Now you are to re-write all of the functions you wrote above to display their output to the **myoutput** div rather than using alerts (countElements, displayElementText, displayElementAttributes, displayElementsContentByClassName).
3. When you rename these functions use the same names BUT use &&**myOutput_** as a prefix. So the **countElements** function would be **myOutput_countElements**. Don't change your original functions as you will still need them.

Now back the **dom.css** file:

1. Create a style rule for the **herocontent** class to give it a light grey background.
2. Do the same for the **footercontent** class to give it a yellow background.

Now back to the **dom.js** file:

1. Create a new function called **changeStyle** which has two parameters **className** and **styleValue**.
2. This function will be used to change the background color of a class name that is passed to it along with the color it should be changed to.
3. Now create two functions. One called **show** and one called **hide**. Each one will take a single parameter which will be the name of a class name.
4. These two functions will set the CSS style property for the **display** property to either **block** or **none**.
5. Remember to be sure and loop through all elements that may be assigned the class you were passed.

Here is what my finished page looks like:

![lab10-finished.png](misc/lab10-finished.png)

## Grading Rubric

| Item | Full Marks | Partial Marks | No Marks  |
|:--|:--|:--|:--|
| HTML and buttons created according to specification and valid | 11 | 5.5 | 0 |
| countElements function | 6.5 | 3.25 | 0 |
| displayElementText function | 6.5 | 3.25 | 0 |
| displayElementAttributes function | 6.5 | 3.25 | 0 |
| displayElementsContentByClassName function | 6.5 | 3.25 | 0 |
| myOutput_countElements function | 6.5 | 3.25 | 0 |
| myOutput_displayElementText function | 6.5 | 3.25 | 0 |
| myOutput_displayElementAttributes function | 6.5 | 3.25 | 0 |
| myOutput_displayElementsContentByClassName function | 6.5 | 3.25 | 0 |
| clearMyOutpDiv function | 6.5 | 3.25 | 0 |
| changeStyle function | 6.5 | 3.25 | 0 |
| show function | 6.5 | 3.25 | 0 |
| hide function | 6.5 | 3.25 | 0 |
| Overall page works according to specifications | 11 | 5.5 | 0 |
