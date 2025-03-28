let names = []

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
  names.push(nameObject)
  renderNames()
}

const renderNames = () => {
  let namesList = document.querySelector('#names')
  namesList.innerHTML = ''

  names.forEach((nameObject) => {
    let nameItem = `
      <li><h2 style="color: ${nameObject.color};">${nameObject.name}</h2></li>
    `
    namesList.insertAdjacentHTML('beforeend', nameItem)
  })
}