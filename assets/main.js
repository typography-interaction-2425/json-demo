let renderItems = (data) => {
  let containerEl = document.querySelector('#pizza-places')

  data.forEach(item => {
    let rating = item['Rating']
    let className = ''

    if (rating === '-') {
      rating = 'No rating'
      className = 'no-rating'
    } else {
      rating = `${rating}/5`
    }

    let itemHtml = `
      <li class="${className}">
        <h2>${item['Place']}</h2>
        <p>${item['Location']}</p>
        <p>${item['Borough']}</p>
        <p>${rating}</p>
        <p>${item['Notes']}</p>
      </li>
    `

    containerEl.insertAdjacentHTML('beforeend', itemHtml)
  })
}

fetch('assets/data.json')
  .then(response => response.json())
  .then(data => {
    // And passes the data to the function, above!
    renderItems(data)
  })