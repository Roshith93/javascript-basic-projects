const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025']
const getDiv = document.querySelector('.container')
const getVal = getDiv.querySelector('span')
const getButton = document.querySelector('#btn')

function getRandomValue(e) {
  let random = Math.floor(Math.random() * colors.length)
  let randomColor = colors[random]
  getVal.textContent = randomColor
  document.body.style.backgroundColor = randomColor
}
getButton.addEventListener('click', getRandomValue)
