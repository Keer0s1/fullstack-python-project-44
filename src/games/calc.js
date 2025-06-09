import readlineSync from 'readline-sync';
import getUserName from '../cli.js';

const getRandomNumber = () => Math.floor(Math.random() * 50) + 1;
const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const index = Math.floor(Math.random() * operators.length);
  return operators[index];
};

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: throw new Error(`Unknown operator ${operator}`);
  }
};

const playCalcGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = getUserName();
  console.log('What is the result of the expression?');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const operator = getRandomOperator();
    const question = `${num1} ${operator} ${num2}`;
    const correctAnswer = calculate(num1, num2, operator);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (parseInt(userAnswer, 10) !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    correctAnswers += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default playCalcGame;
