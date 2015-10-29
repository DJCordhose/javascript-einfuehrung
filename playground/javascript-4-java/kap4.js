/**
 * Erzeugt eine neue Person.
 *
 * @param {string} name der Name der Person
 * @param {string} gender das Geschlecht
 * @constructor
 */
function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}
/**
 * Gibt den Namen der Person.
 *
 * @returns {string}
 */
Person.prototype.getName = function () {
    return this.name;
};

/**
 * Erzeugt eine männliche Person.
 *
 * @param name {string} name der Name der Person
 * @constructor
 * @extends Person
 */
function Male(name) {
    // Aufruf des Superkonstruktors
    Person.call(this, name, "Male");
}
Male.prototype = Object.create(Person.prototype);

/**
 * Gibt den Namen einer männlichen Person zurück.
 *
 * @returns {string} der Name der Person
 * @override
 */
Male.prototype.getName = function () {
    return "Mr " +
        Person.prototype.getName.call(this);
}

/**
 * @type {Male}
 */
var olli = new Male("Olli");
console.log(olli.getName());
// => "Mr Olli"
console.log(olli.gender);
// => "Male"
console.log(olli instanceof Male);
// => true
console.log(olli instanceof Person);
// => true
console.log(olli instanceof Object);
// => true
