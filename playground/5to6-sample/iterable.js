// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Iteration_protocols
// https://github.com/lukehoban/es6features#iterators--forof

const uniqueNamesIterable = {
    [Symbol.iterator]() {
        let count = 0;
        const prefix = 'name';
        const iterator = {
            next() {
                const value = count < 2 ? prefix + count++ : null;
                return {done: value === null, value};
            }
        };
        return iterator;
    }
};

const iterator = uniqueNamesIterable[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
//outputs:
//{ done: false, value: 'name0' }
//{ done: false, value: 'name1' }

const array = [...uniqueNamesIterable];
console.log(array);
// [ 'name0', 'name1' ]

for (let name of array) {
    console.log(name);
}
// name0
// name1


for (let name of uniqueNamesIterable) {
    console.log(name);
}
// name0
// name1
