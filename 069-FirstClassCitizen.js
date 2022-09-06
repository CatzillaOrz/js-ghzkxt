/**
 * @default Functions are First class citizens in js
 *
 */

// #1 assign as property

var stuff = function () {};

// #2 pass as parammter

function a(fn) {
    fn();
}

// #3 return as value

function b() {
    return function c() {
        console.log('object');
    };
}

/**
 *  @description Functions are pieces of data
 */
