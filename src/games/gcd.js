// src/games/gcd.js
import readlineSync from 'readline-sync'

const getGcd = (a, b) => {
  let x = a
  let y = b

  while (y !== 0) {
    const temp = y
    y = x % y
    x = temp
  }
  return x
}

const playGcdGame = userName => {
  console.log('Find the greatest common divisor of given numbers.')

  let correctAnswers = 0
  const rounds = 3

  while (correctAnswers < rounds) {
    const num1 = Math.floor(Math.random() * 100) + 1
    const num2 = Math.floor(Math.random() * 100) + 1

    console.log(`Question: ${num1} ${num2}`)
    const userAnswer = readlineSync.question('Your answer: ')

    const correctAnswer = getGcd(num1, num2).toString()

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }

    console.log('Correct!')
    correctAnswers += 1
  }

  console.log(`Congratulations, ${userName}!`)
}

export default playGcdGame
