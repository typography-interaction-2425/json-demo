let names = localStorage.getItem('names')
if (!names) {
  names = []
} else {
  names = JSON.parse(names)
}

names.forEach((name) => {
  let nameList = document.querySelector('#names')
  let nameItem = `
    <li><h2 style="color: ${name.color};">${name.name}</h2></li>
  `
  nameList.insertAdjacentHTML('beforeend', nameItem)
})