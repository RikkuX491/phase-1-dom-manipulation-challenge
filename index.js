const rootElement = document.getElementById('root')

const appDivElement = document.createElement('div')
appDivElement.className = "app"
rootElement.appendChild(appDivElement)

const headerElement = document.createElement('header')
appDivElement.appendChild(headerElement)

const h1Element = document.createElement('h1')
headerElement.appendChild(h1Element)

h1Element.append("Flatapets")

const logoSpanElement = document.createElement('span')
logoSpanElement.className = "logo"
logoSpanElement.textContent = "🐈"
h1Element.appendChild(logoSpanElement)

const petListUlElement = document.createElement('ul')
petListUlElement.className = "pet-list"
appDivElement.appendChild(petListUlElement)

fetch("http://localhost:3000/pets")
.then(response => response.json())
.then(pets => pets.forEach(addPetToPetList))

function addPetToPetList(pet){
    const liElement = document.createElement('li')
    liElement.className = "pet"
    petListUlElement.appendChild(liElement)

    const imgElement = document.createElement('img')
    imgElement.src = pet.image
    imgElement.alt = pet.name
    liElement.appendChild(imgElement)

    const h4Element = document.createElement('h4')
    h4Element.textContent = pet.name
    liElement.appendChild(h4Element)
}