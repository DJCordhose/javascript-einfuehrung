const name = 'Oma';
const person = {
    // ES5: name: name
    name,

    // ES5: toString: function()
    toString() {
        return this.name;
    }
};
console.log(person.name); // Oma
console.log(person.toString()); // Oma

const programmer = {
    // change prototype
    __proto__: person,

    toString() {
        // call to super
        return `${super.toString()} codes`;
    },
    [Symbol.iterator]() {
        return 'iterator';
    }

};
console.log(programmer.name);
// Oma
console.log(programmer.toString());
// Oma codes
console.log(Symbol.iterator);
// Symbol(Symbol.iterator)
var result = programmer[Symbol.iterator]();
console.log(result);
// iterator
