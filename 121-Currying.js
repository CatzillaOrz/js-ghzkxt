// currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const curriedmultiplyBy5 = curriedMultiply(5);

// 10 years
curriedmultiplyBy5(2);
curriedmultiplyBy5(4);
