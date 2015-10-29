'use strict';

let count = 0;
const prefix = 'name';
const iterator = {
    next() {
        const value = count < 2 ? prefix + count++ : null;
        return {done: value === null, value};
    }

};
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
//{ done: false, value: 'name0' }
//{ done: false, value: 'name1' }
//{ done: true, value: null }
