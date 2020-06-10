function randomNumber(number) {
  return Math.random() * number
}

const randomNumberArrow = (number) => Math.random() * number

console.log(randomNumber(10))
console.log(randomNumberArrow(10))

const button = document.querySelector('button')

button.addEventListener('click', () => console.log('clicked the button'))
