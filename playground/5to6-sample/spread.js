// https://github.com/lukehoban/es6features#default--rest--spread
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator

'use strict';

console.log('Map');
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
console.log(...map.entries());

console.log('array');
const array = [...map.entries()];
console.log(array);

console.log('Destruct');
var [a, b, c] = array;
console.log(a, b, c);

function log(a, b, c) {
    console.log(a, b, c);
}
log(...array);