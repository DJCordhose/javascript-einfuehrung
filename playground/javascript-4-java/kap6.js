'use strict';
//var person = {name: "Olli"};
//console.log(this.person);
//// => Object {name: "Olli"}
//console.log(person === this.person);
//// => true
//console.log(this === window);
//// => true
//console.log(this.person === window.person);
//// => true


function Person(name) {
    this.name = name;
}
Person.prototype.getName = function () {
    return this.name;
};
var olli = new Person("Olli");
console.log(olli.getName());
// => Olli

var oma = {
    name: "Oma"
};
oma.getName = olli.getName;
console.log(oma.getName());
// => Oma

console.log(olli.getName.apply(oma));
// => Oma
console.log(olli.getName.call(oma));
// => Oma

function fullName(title, lastName) {
    return title + " " + this.name + " " + lastName;
}

console.log(fullName.call(oma, "Frau", "Torbogen"));
// => Frau Oma Torbogen
console.log(fullName.apply(oma, ["Frau", "Torbogen"]));
// => Frau Oma Torbogen

var bound1 = fullName.bind(oma);
console.log(bound1("Frau", "Torbogen"));
// => Frau Oma Torbogen

var bound2 = fullName.bind(oma, "Frau", "Torbogen");
console.log(bound2());
// => Frau Oma Torbogen

function Person(name) {
    this.name = name;
}
/**
 * Der Lieblingsname aller Personen.
 *
 * @type {string}
 * @static
 */
Person.lieblingsName = "Olli";

/**
 * Liefert den Lieblingsnamen aller Personen.
 *
 * @returns {string}
 * @static
 */
Person.getLieblingsName = function () {

    return Person.lieblingsName;
};
console.log(Person.lieblingsName);
// => Olli
console.log(Person.getLieblingsName());
// => Olli

function mixin(_sub, _super) {
    for (var p in _super.prototype) {
        if (_super.prototype.hasOwnProperty(p)) {
            _sub.prototype[p] = _super.prototype[p];
        }
    }
}

var json = '{"payments": 360}';
var obj = JSON.parse(json);
console.log(obj.payments);
// => 360

var jsonString = JSON.stringify(obj);
console.log(jsonString);
// => {"payments":360}

var regexp = /ab+c/;
// oder
var regexp = new RegExp("ab+c");

// Das passt nicht
console.log(regexp.exec("Prefix abbbb"));
 // => null

// Das passt
console.log(regexp.exec("Prefix abbbbc Suffix"));
// => [ 'abbbbc', index: 7, input: 'Prefix abbbbc Suffix' ]