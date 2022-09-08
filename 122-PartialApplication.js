/**
 * # partial Application is on the second call, I expect
 * # all the arguments
 * # Currying: says I expect one argument at a time
 */
// currying
const multiply = (a, b, c) => a * b * c;
const partialMultiplyBy5 = multiply.bind(null, 5);
partialMultiplyBy5(4, 10);
