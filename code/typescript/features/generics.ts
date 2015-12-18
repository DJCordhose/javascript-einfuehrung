/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />

interface HasName {
  name: string;
}

function identity<T extends HasName>(arg: T): T {
    return arg;
}

// return type is inferred to HasName
const olli = identity({name: 'Olli'});
console.log(olli.name);

const map: Map<HasName, Number> = new Map();
const KEY1:HasName = {name: 'KEY1'};
map.set(KEY1, 42);

console.log(map.get(KEY1)); // 42
console.log(map.has(KEY1)); // true
console.log(map.size); // 1

map.forEach((value: Number, index: HasName) => console.log(`value=${value}, index=${index.name}`)); 
// value=42, index=KEY1