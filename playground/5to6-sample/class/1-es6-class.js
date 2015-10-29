'use strict';

class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

const olli = new Person('Olli');
console.log(olli.getName());
