#!/usr/bin/env node

import greetUser from '../src/cli.js'
import playGcdGame from '../src/games/gcd.js'

const userName = greetUser()
playGcdGame(userName)
