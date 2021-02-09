const counterSpan = document.querySelector('#value')
const buttonContainer = document.querySelector('.button-container')
const decreaseButton = document.querySelector('.decrease')
const resetButton = document.querySelector('.reset')
const increaseButton = document.querySelector('.increase')

let counterValue = 0

const allButtons = document.querySelectorAll('.btn')

decreaseButton.addEventListener('click', function (e) {
  counterValue -= 1
  counterSpan.textContent = counterValue
  if (counterValue < 0) counterSpan.style.color = 'red'
  if (counterValue === 0) counterSpan.style.color = '#222'
})
resetButton.addEventListener('click', function (e) {
  counterValue = 0
  counterSpan.textContent = counterValue
  if (counterValue === 0) counterSpan.style.color = '#222'
})

increaseButton.addEventListener('click', function (e) {
  counterValue += 1
  counterSpan.textContent = counterValue
  if (counterValue > 0) counterSpan.style.color = 'green'
  if (counterValue === 0) counterSpan.style.color = '#222'
})
