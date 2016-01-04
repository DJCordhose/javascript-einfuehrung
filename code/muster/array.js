/**
 *
 * @type {object[]}
 */

var array = ["a", "b", "c"];
var el = array[2];
array[1] = 20;
console.log(array);
console.log(typeof array);
console.log(array instanceof Array);

array.push('d');
console.log(array);

// An Position 1 werden 2 Elemente entfernt und zurück gegeben
var erg = array.splice(1, 2);
console.log(erg);
console.log(array);
array.splice(1, 0, 'z');
console.log(array);

var erg2 = array.slice(1, 2);
console.log(erg2);
console.log(array);


