'use strict';

var obj1 = {};

var obj2 = {
    name1: "Wert1",
    name2: "Wert2",
    "Beliebiger String": "Wert3"
};
obj2.name1 = "Neuer Wert";
console.log(obj2.name1);
// => "Neuer Wert"
obj2.func = function () {
    return "Called";
};
console.log(obj2.func());
// => Called

var obj3 = {
    name1: "Wert1",
    name2: "Wert2",
    bool: true,
    zahl1: 10,
    ref1: obj2, // Referenz auf obj2
    ref2: {name: "Neues Objekt"}
};
obj3.zahl1 = "zahl1 ist nun ein String!";
delete obj3.bool;
console.log(obj3.bool);
// => undefined

var array = ["a", "b", "c"];
console.log(array);
// => ["a", "b", "c"]

var el = array[2];
console.log(el);
// => "c"

array[1] = 20;
console.log(array);
// => ["a", 20, "c"]

// fügt die 4 am Ende hinzu
array.push(4);
console.log(array);
// => ["a", 20, "c", 4]

// Ab Position 1 werden 2 Elemente entfernt
array.splice(1, 2);
console.log(array);
// => ["a", 4]

// An Position 1 werden 0 Elemente
// (also keine) entfernt
// Zudem wird an Position 1 "x" hinzugefügt
array.splice(1, 0, "x");
console.log(array);
// => ["a", "x", 4]

var string1 = "Zeichenkette!";
var string2 = 'Geht auch!';

console.log(typeof string1);
// => string

var s3 = "Hallo";
var c1 = s3[1];
console.log(c1);
// => "a"
console.log(typeof c1);
// => "string"
console.log(s3.charAt(1) === c1);
// => true

var s1 = "Hallo, ";
var s2 = "Olli";
var s3 = s1 + s2;
console.log(s3);
// => "Hallo, Olli";

var builder = ["a", "b", "c"];
var s4 = builder.join("");
console.log(s4);
// => "abc";

var int = 1;
console.log(typeof int);
// => "number";
var float = 1.0;
console.log(typeof float);
// => "number";

var int2 = parseInt("1000.1");
console.log(int2);
// => 1000
var float2 = parseFloat("1000.1");
console.log(float2);
// => 1000.1

console.log(float2.toFixed());
// => "1000"

console.log(float2.toFixed(2));
// => "1000.10"

var numberObj = new Number("10");
console.log(typeof numberObj);
// => object
console.log(numberObj);
// => [Number: 10] (je nach Browser)
var numberValue = numberObj.valueOf();
console.log(typeof numberValue);
// => number
console.log(numberValue);
// => 10
var numberPrimitive = Number("10");
console.log(typeof numberPrimitive);
// => number
console.log(numberPrimitive);
// => 10

console.log(1 / 0);
// => Infinity
console.log(typeof (1 / 0));
// => "number";
console.log(0 / 0);
// => NaN
console.log(typeof (0 / 0));
// => "number";
console.log(0 / "a");
// => NaN

var bool = true;
console.log(typeof bool);
// => "boolean"

var a = 10, b;
console.log(a);
// => 10
console.log(b);
// => undefined
b = 100;
console.log(b);
// => 100

var obj = {a: 10};
console.log(obj);
// => Object {a: 10}
var array = [10];
console.log(array);
// => [10]

var c;
c = 10;
console.log(typeof c);
// => number
c = true;
console.log(typeof c);
// => boolean
c = {wert: 10};
console.log(typeof c);
// => object

{
    var a = 10;
}
// Hoppla!
console.log(a);
// => 10

var obj1 = {};
var obj2 = {};
var obj3 = obj1;
console.log(obj1 === obj1);
console.log(obj1 !== obj2);
console.log(obj1 === obj3);

console.log(typeof null);
// => "object"

var a;
console.log(a);
// => undefined
console.log(typeof a);
// => "undefined"

//console.log(gibtEsNicht);
// ReferenceError: gibtEsNicht is not defined

if (typeof gibtEsNicht === "undefined") {
    console.log("Gibt es nicht!");
    // => Gibt es nicht!
}

var obj = {
    a: undefined
};
console.log(obj.a); // => undefined
console.log(obj.b); // => undefined

var a = 10;
var b = "b";
// ACHTUNG: Block schon am Ende
// dieser Zeile beginnen
if (a === 10 && b === "b") {
    console.log("Ja");
    // => Ja
}


for (var i = 0; i < 10; i++) {
    console.log(i);
}

// Das gibt eine Überraschung!
var numbers = [1, 2, 3, 4, 5];
var sum = 0;
for (var number in numbers) {
    sum += number;
}
console.log("Summe: " + sum);
// => Summe: 001234

var numbers = [1, 2, 3, 4, 5];
var sum = 0;
for (var index in numbers) {
    sum += numbers[index];
}
console.log("Summe: " + sum);
// => Summe: 15

try {
    throw "Fehler";
// oder
    throw new Error("Fehler");
} catch (e) {
    console.log("Gefangen: " + e);
} finally {
    console.log("Wird immer durchlaufen");
}
// => Gefangen: Fehler
// => Wird immer durchlaufen

/**
 * Der Name der Person.
 *
 * @type {string}
 */
var name = "Olli";
