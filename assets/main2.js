document.querySelector('form').onsubmit = (event) => event.preventDefault()

document.querySelector('form').oninput = (event) => {
  let name = document.querySelector('#name').value
  document.querySelector('#name-heading').textContent = name

  let color = document.querySelector('#color').value
  document.querySelector('#name-heading').style.color = color
}
