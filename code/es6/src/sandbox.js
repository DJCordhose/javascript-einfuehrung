'use strict';

class Person {
    constructor(name) {
        this._name = name;
    }
    // get name() {
    //     return this._name;
    // }
    set name(name) {
        this._name = name;
    }
}
class Programmer extends Person {
    constructor(name, language) {
        super(name);
        this.language = language;
    }
    code() {
        return this.name + " codes in " + this.language;
    }
}

const programmer = new Programmer('Erna', 'JavaScript');
console.log(programmer.name);

console.log(programmer.code());
console.log(programmer instanceof Programmer); // true
console.log(programmer instanceof Person); // true

programmer.name = 20;
