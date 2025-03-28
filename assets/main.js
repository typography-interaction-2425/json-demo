fetch('assets/data.json')
  .then(response => response.json())
  .then(data => {
    // And passes the data to the function, above!
    console.log(data)
  })