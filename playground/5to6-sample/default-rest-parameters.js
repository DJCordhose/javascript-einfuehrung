// https://github.com/lukehoban/es6features#default--rest--spread
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

'use strict';

function f1(a, b = 10) {
    console.log(a);
    console.log(b);
}

f1();
//undefined
//10

f1(1, 2);
//1
//2

function f2(a = 10, b = 20) {
    console.log(a);
    console.log(b);
}
f2();
//10
//20

// illegal, but works with Babel
function f3(a = 10, b) {
    console.log(a);
    console.log(b);
}
f3();
//10
//undefined

function f4(...params) {
    console.log(params);
    console.log(...params);
}
f4(1, 2, 3, 4);
// [ 1, 2, 3, 4 ]
// 1 2 3 4

function f5(initial, ...factors) {
    console.log(initial);
    console.log(factors);
    const product = factors.reduce((factor, product) => factor * product, initial);
    console.log(product);
}
f5(1, 2, 3, 4);
//1
//[ 2, 3, 4 ]
//24