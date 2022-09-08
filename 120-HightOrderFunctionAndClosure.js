/**
 * @description Higher Order Function and Closure
 */

// #1 HOF
const hof = (fn) => fn(5);
hof(function a(x) {
    return x;
});

// #2 Closure
const closure = function () {
    let count = 0;
    return function () {
        count++;
        return count;
    };
};

const incrementFn = closure();
incrementFn();
