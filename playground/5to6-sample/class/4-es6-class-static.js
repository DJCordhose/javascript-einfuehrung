'use strict';

class Person {
    static get lieblingsName() {
        return 'Olli';
    }

    constructor(name, gender) {
        this._name = name;
        this._gender = gender;
    }

    get name() {
        return this._name;
    }
}
console.log(Person.lieblingsName);

class Male extends Person {
    constructor(name) {
        super(name, 'Male');
    }

    get name() {
        return "Mr " + super.name;
    }
}


const olli = new Male(Person.lieblingsName);
console.log(olli.name);
