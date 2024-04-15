const index = document.querySelector('#index')
const test = document.querySelector('#test')
const BASE_URL = 'http://localhost:3000/'

axios
  .get(`${BASE_URL}`)
  .then((response) => {
    const data = response.data
    index.innerText = data
  })
  .catch((error) => {
    console.error('Error:', error)
  })

  axios
  .get(`${BASE_URL}test`)
  .then((response) => {
    const data = response.data
    test.innerText = data
  })
  .catch((error) => {
    console.error('Error:', error)
  })
