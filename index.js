// Search for the <div> element with the id of 'root' and store it into a variable
const rootDivElement = document.getElementById("root")

// Create a new <div> element and store it into a variable
const appDivElement = document.createElement("div")

// Set the class attribute for this <div> element to "app"
appDivElement.className = "app"

// Use the appendChild() method to nest the <div class="app"> element inside of the <div id="root"> element
rootDivElement.appendChild(appDivElement)

// Create a new <header> element and store it into a variable
const headerElement = document.createElement("header")

// Use the appendChild() method to nest the <header> element inside of the <div class="app"> element
appDivElement.appendChild(headerElement)

// Create a new <h1> element and store it into a variable
const h1Element = document.createElement('h1')

// Set the textContent attribute for this <h1> element to "Flatapets"
h1Element.textContent = "Flatapets"

// Use the appendChild() method to nest the <h1> element inside of the <header> element
headerElement.appendChild(h1Element)

// Create a new <span> element and store it into a variable
const spanElement = document.createElement('span')

// Set the class attribute for this <span> element to "logo"
spanElement.className = "logo"

// Set the textContent attribute for this <span> element to have the cat emoji
spanElement.textContent = "🐈"

// Use the appendChild() method to nest the <span class="logo"> element inside of the <h1> element
h1Element.appendChild(spanElement)

// Create a new <ul> element and store it into a variable
const ulElement = document.createElement('ul')

// Set the class attribute for this <ul> element to "pet-list"
ulElement.className = "pet-list"

// Use the appendChild() method to nest the <ul class="pet-list"> element inside of the <div class="app"> element
appDivElement.appendChild(ulElement)

function addPetToList(pet){
    // Create a new <li> element and store it into a variable
    const liElement = document.createElement('li')

    // Set the class attribute for this <li> element to "pet"
    liElement.className = "pet"

    // Use the appendChild() method to nest this <li class="pet"> element inside of the <ul class="pet-list"> element
    ulElement.appendChild(liElement)

    // Create a new <img> element and store it into a variable
    const imgElement = document.createElement('img')

    // Set the src attribute for this <img> element to the value of pet.image
    imgElement.src = pet.image

    // Set the alt attribute for this <img> element to the value of pet.name
    imgElement.alt = pet.name

    // Use the appendChild() method to nest this <img> element inside of the <li class="pet"> element
    liElement.appendChild(imgElement)

    // Create a new <h4> element and store it into a variable
    const h4Element = document.createElement('h4')

    // Set the textContent attribute for this <h4> element to have the value of pet.name
    h4Element.textContent = pet.name

    // Use the appendChild() method to nest this <h4> element inside of the <li class="pet"> element
    liElement.appendChild(h4Element)
}

// Call the fetch() method to make a GET request to "http://localhost:3000/pets"
fetch("http://localhost:3000/pets")
.then(response => response.json())
.then(pets => {
    // The data within the pets parameter should be an array. For each iteration using the forEach() array iterator method, the addPetToList() callback function is called
    pets.forEach(addPetToList)
})