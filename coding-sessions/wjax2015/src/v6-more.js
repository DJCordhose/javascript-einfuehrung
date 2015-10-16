/*
 * node-babel
 */


'use strict';

{
    const person = {
        name: 'Olli',
        address: {
            city: 'Hamburg'
        },
        email: 'oliver.zeigermann@gmail.com'
    };

    const {name, email: contact} = person;
    console.log(`name=${name}`);
    // name=Olli
    console.log(`contact=${contact}`);
    // contact=oliver.zeigermann@gmail.com

    const {address: {city}} = person;
    console.log(`city=${city}`);
    //city=Hamburg

    function print({email: contact}) {
        console.log(`contact=${contact}`);
    }

    print(person);
    // contact=oliver.zeigermann@gmail.com
}

{
    const [a, b] = [1, 2];
    console.log(`a=${a}`);
    // a=1
    console.log(`b=${b}`);
    // b=2
}


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

// ES7 object spread
// https://github.com/sebmarkbage/ecmascript-rest-spread

{
    const a = 1;
    const obj1 = {
        b: 2,
        c: 3
    };
    const obj2 = {a, ...obj1};
    console.log(obj2);
// {a: 1, b: 2, c: 3}
}