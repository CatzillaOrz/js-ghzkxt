/**
 * @description
 */
function memoizedAddTo80() {
    let cache = {};
    return function (n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log('long time');
            cache[n] = n + 80;
            return cache[n];
        }
    };
}

const memoized = memoizedAddTo80();

console.log('1t', memoized(5));
console.log('2t', memoized(5));

// log:
// long time
// 85
// 85
