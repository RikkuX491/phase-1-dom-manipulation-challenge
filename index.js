const rootDivElement = document.getElementById('root')
const divAppElement = document.createElement('div')
divAppElement.className = "app"
rootDivElement.appendChild(divAppElement)

const headerElement = document.createElement('header')

const ulElement = document.createElement('ul')
ulElement.className = "pet-list"

divAppElement.appendChild(headerElement)
divAppElement.appendChild(ulElement)

const h1Element = document.createElement('h1')
h1Element.textContent = "Flatapets"
// h1Element.append("Flatapets")

const spanElement = document.createElement('span')
spanElement.className = "logo"
spanElement.textContent = "🐈"
h1Element.appendChild(spanElement)

headerElement.appendChild(h1Element)

fetch('http://localhost:3000/pets')
.then(response => response.json())
.then(pets => pets.forEach(pet => {
    addPetToPetList(pet)
}))

function addPetToPetList(pet){
    const liElement = document.createElement('li')
    liElement.className = "pet"

    const imgElement = document.createElement('img')
    imgElement.src = pet.image
    imgElement.alt = pet.name
    liElement.appendChild(imgElement)

    const h4Element = document.createElement('h4')
    h4Element.textContent = pet.name
    liElement.appendChild(h4Element)

    ulElement.appendChild(liElement)
}