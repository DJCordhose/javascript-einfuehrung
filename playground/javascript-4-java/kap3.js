//function meineErsteFunktion() {
//    console.log("Toll!");
//}
//// Dazu der passende Aufruf:
//meineErsteFunktion();
//// => Toll!
//
//var meineZweiteFunktion = function () {
//    console.log("Auch toll!");
//};
//meineZweiteFunktion();
//// => Auch toll!
//
//{
//    var a = 10;
//}
//// Hoppla!
//console.log(a);
//// => 10
//
//(function () {
//    var b = 10;
//    console.log("Noch bin ich da: " + b);
//})();
//console.log(typeof b);
//// => undefined

(function () {
    var b = 10;
    console.log("Noch bin ich da: " + b);
}());
console.log(typeof b);
// => undefined


//function aha() {
//    hugo = 10;
//    console.log(hugo);
//}
//aha();
//// => 10
//console.log(hugo);
//// => 10


//function aha() {
//    var hugo = 10;
//    console.log(hugo);
//}
//aha(); // => 10
//console.log(hugo);
// => Uncaught ReferenceError: hugo is not defined

//"use strict";
//function aha() {
//    hugo = 10;
//    // => Uncaught ReferenceError: hugo is not defined
//    console.log(hugo);
//}
//aha();

function incr(num) {
    return num + 1;
}


/**
 Erhöht die Eingabe um 1. *
 @param {number} num die Eingabe
 @returns {number} die um 1 erhöhte Eingabe */

/**
 * Erhöht die Eingabe um 1.
 *
 * @param {number} num die Eingabe
 * @returns {number} die um 1 erhöhte Eingabe
 */
function incr(num) {
    return num + 1;
}

/**
 * Liefert die nächste Zahl.
 *
 * @param {number} [num=0] die vorherige Zahl (optional)
 * @returns {number} die nächste Zahl
 */
function next(num) {
    return
    ((typeof num !== 'undefined')
        ? num
        : 0) + 1;
}
console.log("Next ohne Paramter: " +
    next());
// => Next ohne Paramter: 1

/**
 * Summiert alle Parameter auf.
 *
 * @param {...number} summanden
 * @returns {number} die Summe
 */
function sum() {
    var sum = 0;
    for (var index in arguments) {
        sum += arguments[index];
    }
    return sum;
}
console.log(sum(1, 2, 3, 4, 5));
// => 15

var array = [1, 2, 3, 4, 5];
//array.forEach(function (e) {
//    console.log(e);
//});
// => 1 => 2 => 3 => 4 => 5

array.filter(function (e) {
    return e % 2 !== 0;
}).forEach(function (e) {
    console.log(e);
});
// => 1 => 3 => 5

var summe = array.map(function (e) {
    return e * e;
}).reduce(function (reduziert, element) {
    console.log('reduziert: ' + reduziert + ', element: ' + element);
    return reduziert + element;
});
console.log(summe); // => 55

(function () {
    console.log("Am Anfang: " + hoisted);
    // => Am Anfang: undefined
    var hoisted = 10;
    console.log("Nach Initialisierung: " + hoisted);
    // => Nach Initialisierung: 10
})();


(function () {
    var hoisted;
    console.log("Hoisted var vor Deklaration: " + hoisted);
    // => undefined
    hoisted = 10;
    console.log("Hoisted var nach Initiali-sierung: " + hoisted);
    // => 10
})();

(function () {
    console.log("named: " + named);
    // => function named() { ... }
    named();
    // => named
    console.log("anonymous: " + anonymous);
    // => undefined
    function named() {
        console.log("named");
    }

    var anonymous = function () {
        console.log("anonymous");
    };
    anonymous();
    // => anonymous
})();
