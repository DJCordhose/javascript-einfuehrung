'use strict';
{
const uniqueNamesIterable = {
  // computed property [...]
  [Symbol.iterator]() {
    console.log('Los geht\'s');
    let count = 0;
    const prefix = 'name';
    const iterator = {
      next() {
        const value = count < 2 ? prefix + count++ : null;
        return { done: value === null, value };
      }
    };
    return iterator;
  }
};

// const iteratorMachFunc = uniqueNamesIterable[Symbol.iterator];
// const iterator = iteratorMachFunc();
// console.log(iterator.next());

for (const name of uniqueNamesIterable) {
  console.log(name);
}
}
