const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const getDiv = document.querySelector('.container')
const getVal = getDiv.querySelector('span')
const getButton = document.querySelector('#btn')

let randomColor = getVal.textContent
function changeColor() {
  randomColor = '#'
  // random pick 6 values from array
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hex.length)
    randomColor += hex[random].toString()
  }
  // set to body color and span
  getVal.textContent = randomColor
  document.body.style.backgroundColor = randomColor
}

getButton.addEventListener('click', changeColor)
