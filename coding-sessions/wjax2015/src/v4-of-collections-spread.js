/*
 * ES6
 * for..of
 * set
 * spread
 */
'use strict';

class Programmer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    log() {
        console.log(this.name + ": " + this.age);
    }

}

const programmer = new Programmer('Olli', 44);
const programmers = new Set();
programmers.add(programmer);
programmers.add(new Programmer('Oma', 88));

for (const p of programmers) {
    p.log();
}

const serialized = JSON.stringify([...programmers]);
console.log(serialized);

const deserialized = new Set(JSON.parse(serialized));
deserialized.forEach(p => console.log(JSON.stringify(p)));

