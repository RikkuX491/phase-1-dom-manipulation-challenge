# Phase 1 - DOM Manipulation Challenge

## Introduction

This lab will further help you practice the concepts surrounding DOM Manipulation.

Flatapets, a pet adoption center, wants to rebuild their website to make it easier to add functionality to their website that displays a list of pets that are available for adoption. You will need to use your knowledge of DOM Manipulation to complete this lab.

## Tools and Resources

It is recommended that you use the Visual Studio Code (VSCode) IDE for this lab.

Useful considerations and terminology:

**Document Object Model (DOM)**: The Document Object Model (DOM) is a middle layer between the user and the underlying HTML, CSS, and JavaScript that makes up the page and represents what the user is actually seeing on the web page.

Here are some resources from the MDN Web Docs website that will provide you with additional knowledge in regards to the Document Object Model (DOM):

- MDN
  - [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
    - [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

## Setup

**Fork and clone** this lab into your local environment. Navigate into its
directory in the terminal, then run `code .` to open the files in Visual Studio
Code.

Then, run this command in the terminal while inside of the `phase-1-dom-manipulation-challenge` directory (folder) to get the backend started:

```sh
json-server --watch db.json
```

Test your server by visiting this route in the browser:

[http://localhost:3000/pets](http://localhost:3000/pets)

Then, open the `index.html` file in your browser to run the application.

Write your code in the `index.js` file. There is some starter code provided in `index.js`.

## Instructions

In this lab, you will practice manipulating the DOM. You will be creating elements, modifying properties of elements, and appending elements to other elements to update the DOM using only JavaScript code.

There is an `example.html` file within the `example_code` directory (folder) that contains some example code written out in HTML. You can use this `example.html` file as a reference when writing your solution code in `index.js`.

Your goal when writing your solution code in `index.js` is to replicate the DOM representation of the `example.html` web page by adding in the missing elements as well as the properties and text content for those elements.

You have an `index.html` file that contains a `<div id="root">` element. This element will be your starting point. In `index.js`, search for this element and store it into a variable. Then, write the code to create a new `<div>` element and give it a class of `app`, and use the `appendChild()` method to nest this new `<div>` element inside of the `<div id="root">` element and continue writing your code in the `index.js` file to add the remaining missing elements and other data.

The `db.json` file contains the data for the pets that you can access within `index.js` using the `fetch()` method to make a GET request to retrieve the pets data after running the server. This pets data should be used when creating an `<li>` element for each pet in the array of objects retrieved from the server. Each `<li>` element should contain an `<img>` element whose `src` attribute has the value of the pet's image and whose `alt` attribute has the value of the pet's name, and an `<h4>` element whose `textContent` attribute has the value of the pet's name.