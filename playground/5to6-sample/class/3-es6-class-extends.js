'use strict';

class Person {
    constructor(name, gender) {
        this._name = name;
        this._gender = gender;
    }

    get name() {
        return this._name;
    }
}

class Male extends Person {
    constructor(name) {
        super(name, 'Male');
    }

    get name() {
        return "Mr " + super.name;
    }
}


const olli = new Male('Olli');
console.log(olli.name);
