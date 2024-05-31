#! /usr/bin/env node
import inquirer from 'inquirer';

interface Question {
  question: string;
  options1: string[];
  answer: string;
}

const questions: Question[] = [
  {
    question: "What is TypeScript?",
    options1: ["A new programming language unrelated to JavaScript", "A superset of JavaScript that adds static typing and other features", "JavaScript library for building user interfaces.", "A tool for minifying JavaScript code"],
    answer: "A superset of JavaScript that adds static typing and other features",
  },
  {
    question: "Which of the following is a feature of TypeScript but not JavaScript?",
    options1: ["Static typing", "Dynamic typing", "Automatic memory management", "Classes"],
    answer: "Static typing",
  },
  {
    question: "How do you compile a TypeScript file named example.ts to JavaScript?",
    options1: ["tsc example.ts", "node example.ts", "tsc example.js", "node example.js"],
    answer: "tsc example.ts",
  },
  {
    question: "What is the purpose of the 'any' type in TypeScript?",
    options1: ["To define a variable that can hold any type of value", "To opt-out of type checking for a particular variable or expression", "To define a function that can accept any number of arguments", "To define a type that represents all possible values"],
    answer: "To opt-out of type checking for a particular variable or expression",
  },
];

async function playQuiz() {
  let score = 0;

  for (const question of questions) {
    const { userAnswer } = await inquirer.prompt([
      {
        type: 'list',
        name: 'userAnswer',
        message: question.question,
        choices: question.options1,
      }
    ]);

    if (userAnswer === question.answer) {
      console.log('Correct!');
      score++;
    } else {
      console.log(`Incorrect. The correct answer is ${question.answer}.`);
    }
  }

  console.log(`Your final score is ${score}/${questions.length}`);
}

playQuiz();
