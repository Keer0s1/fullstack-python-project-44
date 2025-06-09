#!/usr/bin/env node
import greetUser from '../src/cli.js'
import getProgression from '../src/games/progression.js'

const roundsCount = 3

const runGame = () => {
  const name = greetUser()
  console.log('What number is missing in the progression?')

  let correctAnswers = 0

  while (correctAnswers < roundsCount) {
    const result = getProgression(name)
    if (!result) {
      return
    }
    correctAnswers += 1
  }
  console.log(`Congratulations, ${name}!`)
}

runGame()
