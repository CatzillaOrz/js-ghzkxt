/**
 * @bind
 * @currying
 */
function mutiply(a, b) {
  return a * b;
}

// snippets #1
// set 2 as default value of {a}
let multiplyByTwo = multiply.bind(this, 2);

// currying
// use `a=2` and return a new [Funtion]

console.log(multiplyByTwo(4));

// currying
// use `a=10` as defautl return new
let multiplyByTen = multiply.bind(this, 10);
