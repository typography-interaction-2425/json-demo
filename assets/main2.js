document.querySelector('form').oninput = (event) => {
  let name = document.querySelector('#name').value
  document.querySelector('#name-heading').textContent = name

  let color = document.querySelector('#color').value
  document.querySelector('#name-heading').style.color = color
}

document.querySelector('form').onsubmit = (event) => {
  event.preventDefault()

  let nameValue = document.querySelector('#name').value
  let colorValue = document.querySelector('#color').value

  document.querySelector('#name').value = ''
  document.querySelector('#name-heading').textContent = ''

  let nameObject = {
    name: nameValue,
    color: colorValue,
  }

  // get names from local storage
  let names = localStorage.getItem('names')

  // names may not exist at this point
  if (!names) {
    // if there are are no names, set it to an empty array
    names = []
  } else {
    // if there are names, parse them from how they were stored in local storage
    names = JSON.parse(names)
  }

  names.push(nameObject)

  // store names in local storage
  localStorage.setItem('names', JSON.stringify(names))
  renderNames()
}

const renderNames = () => {
  let namesList = document.querySelector('#names')
  namesList.innerHTML = ''

  let names = localStorage.getItem('names')
  // names may not exist at this point
  if (!names) {
    // if there are are no names, set it to an empty array
    names = []
  } else {
    // if there are names, parse them from how they were stored in local storage
    names = JSON.parse(names)
  }

  names.forEach((nameObject) => {
    let nameItem = `
      <li><h2 style="color: ${nameObject.color};">${nameObject.name}</h2></li>
    `
    namesList.insertAdjacentHTML('beforeend', nameItem)
  })
}

document.querySelector('#clear-names').onclick = () => {
  localStorage.removeItem('names')
  renderNames()
}

renderNames()