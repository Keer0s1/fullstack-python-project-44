// src/games/progression.js
import readlineSync from 'readline-sync'

const getProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

const playProgressionGame = name => {
  console.log('What number is missing in the progression?')

  const progressionLength = 10
  const start = Math.floor(Math.random() * 10) + 1 // от 1 до 10
  const step = Math.floor(Math.random() * 5) + 1 // от 1 до 5
  const hiddenIndex = Math.floor(Math.random() * progressionLength)

  const progression = getProgression(start, step, progressionLength)
  const correctAnswer = progression[hiddenIndex]

  // Создаем строку с пропущенным элементом '..'
  const question = progression
    .map((num, index) => (index === hiddenIndex ? '..' : num))
    .join(' ')

  console.log(`Question: ${question}`)
  const userAnswer = readlineSync.question('Your answer: ')

  if (userAnswer === String(correctAnswer)) {
    console.log('Correct!')
    return true
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
  console.log(`Let's try again, ${name}!`)
  return false
}

export default playProgressionGame
