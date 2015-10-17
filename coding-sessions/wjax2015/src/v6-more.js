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

{
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
}

{
    // Default Parameter
    const displayInPage = (text = '\n') =>
        console.log(text);
    displayInPage();
}
{
    // Rest Parameters
    const displayInPage = (...texts) =>
        texts.forEach(text =>
            console.log(text));
    displayInPage('Hi', 'Folks');

    // Array Spread
    const array1 = ['Olli', 'how are you'];
    const array2 = ['Hi', ...array1, '?'];
    console.log(array2);
    // => ["Hi", "Olli", "how are you", "?"]

    displayInPage(...array2);

    for (const e of array2) {
        console.log(e);
    }

}

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

/*
// Promise
{

    const promise = new Promise(resolve =>
        setTimeout(
            () => resolve('Result from promise'),
            1000)
    );
    promise.then(value => console.log(value));
    // Output after 1 second: Result from promise
}

// Chaining Promises
{
    const promise = new Promise(resolve =>
        setTimeout(
            () => resolve('Result from promise'),
            1000)
    );
    const promise2 = promise.then(value => `${value} plus stuff`);
    promise2.then(value => console.log(value));
    // Output after 1 second: Result from promise plus stuff
}

*/
// Catching clause
{
    Promise
        .resolve('Result from promise') // creates and directly resolves promise
        .then(x => {
            // this will be printed
            console.log(x);
            // Result from promise
        })
        .then(() => {
            console.log('This will be printed');
        })
        // this will NOT be printed
        .catch(e => console.log('error: ', e))
}

// Catching error
{
    Promise
        .resolve('Result from promise') // creates and directly resolves promise
        .then(x => {
            // this will be printed
            console.log(x);
            // Result from promise
            throw Error('Something went wrong');
        })
        .then(() => {
            console.log('This will NOT be printed');
        })
        // this will be printed
        .catch(e => console.log('error: ', e))
}

// Catching reject
{
    Promise
        .reject('Promise rejected') // creates and directly rejects promise
        .then(x => {
            // this will NOT be printed
            console.log(x);
        })
        .then(() => {
            console.log('This will NOT be printed');
        })
        // this will be printed
        .catch(e => console.log('error: ', e))
}

{
// MAP

    const map = new Map();

    // keys are not restricted to strings
    const KEY1 = {name: 'KEY1'};
    const KEY2 = 'KEY2';

    map.set(KEY1, 1);
    console.log(map.get(KEY1)); // 1
    console.log(map.has(KEY1)); // true

    map.set(KEY2, 2);
    console.log(map.size); // 2

// maps are iterable objects
    for (let e of map) {
        console.log(e); // array consisting of key and value
    }
//[ { name: 'KEY1' }, 1 ]
//[ 'KEY2', 2 ]

    for (let e of map.keys()) {
        console.log(e); // keys only
    }
//{ name: 'KEY1' }
//KEY2

    for (let e of map.values()) {
        console.log(e); // values only
    }
//1
//2

    map.delete(KEY1);
    console.log(map.has(KEY1)); // false

// WEAK MAP

    const weakMap = new WeakMap();
    let domNode = {}; // this is not a real dom node, of course
    weakMap.set(domNode, 'additional information');
    console.log(weakMap.get(domNode) === 'additional information'); // true
    domNode = null;
// it is impossible to use `has` to find out if the entry is still in the `WeakMap`,
// because we no longer have a reference
// to the key. But once the garbage collection has run, it will be gone}


}