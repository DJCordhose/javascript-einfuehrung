/*
 * ES6
 * let, const
 * class, extends
 * =>
 *
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
const programmers = [programmer, new Programmer('Oma', 88)];

for (let i in programmers) {
    const p = programmers[i];
    p.log();
}
// or
programmers.forEach(p => p.log());

//console.log(p);