'use strict';

// varags
/*
function f2(a, b) {
    var array = Array.prototype.slice.call(arguments);
    console.log(array instanceof Array);
    for (var i=0; i < array.length; i++) {
        console.log(array[i]);
    }

    arguments[0] = 'aua';
    arguments.length = 10;
    console.log(arguments.splice);
    console.log(arguments.length);
    console.log(arguments instanceof Array);
    for (var i=0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
    //console.log(a);
    //console.log("Called!");
    return 1;
}
var result2 = f2(1,2,3,4,5,6);
//console.log(result2);

// optionale parameter
function f1(a, b) {
    if (b === undefined || b === null) {
        //console.log('b fehlt');
        b = 10;
    }
    return a * b;
}

var erg = f1(1, null);
console.log(erg);
var erg2 = f1(1,2);
console.log(erg2);

var f3 = function olli() {
    console.log('f3');
    console.log(olli);
    return 'f3';
};

f3();
//olli();
*/

var array = [1 ,2 ,3, 4,5,6,7];

// IIFE = immediately invoked function expression
//(function () {
//    for (var j in array) {
//        var value = array[j];
//        console.log(j + ": " + value);
//    }
//})();
//
//console.log(typeof j);
//console.log(typeof value);

//array.forEach(function (el, index, a) {
//    console.log(el);
//    console.log(index);
//    console.log(a);
//});

var filterdArray = array.filter(function(el) {
   return el >= 2;
});
console.log(filterdArray);

var mappedArray = filterdArray.map(function(el) {
    return el * 10;
});
console.log(mappedArray);

var summe = mappedArray.reduce(function (el1, el2) {
    console.log('el1', el1);
    console.log('el2', el2);
    return el1 + el2;
}, 0);

console.log(summe);