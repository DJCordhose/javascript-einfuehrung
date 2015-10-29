// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Iteration_protocols
// https://github.com/lukehoban/es6features#iterators--forof

'use strict';

const uniqueNamesIterable = {
    * [Symbol.iterator]() {
        let count = 0;
        const prefix = 'name';
        while (count < 2) {
            const value = prefix + count++;
            yield value;
        }
    }
};

const iterator = uniqueNamesIterable[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
//{ value: 'name0', done: false }
//{ value: 'name1', done: false }
//{ value: undefined, done: true }

//const array = [...uniqueNamesIterable];
//console.log(array);
// [ 'name0', 'name1' ]

//for (let name of array) {
//    console.log(name);
//}
// name0
// name1


for (let name of uniqueNamesIterable) {
    console.log(name);
}
// name0
// name1
