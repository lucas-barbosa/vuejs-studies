import { name } from './client';

const pizza = 35;
const coke = 7;

const sum = (a, b) => a + b + '$';

console.log(`${name}, you have to pay ${sum(pizza, coke)}`);