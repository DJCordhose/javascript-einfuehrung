//http://www.2ality.com/2015/01/es6-maps-sets.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet

// SET
{
  const set = new Set();

  const VALUE1 = { name: 'VALUE1' };
  const VALUE2 = 'VALUE2';

  set.add(VALUE1);
  console.log(set.has(VALUE1)); // true

  set.add(VALUE2);
  console.log(set.size); // 2

  // sets are iterable objects
  for (let e of set) {
    console.log(e);
  }
  //{ name: 'VALUE1' }
  //VALUE2

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach
  console.log('set forEach');
  set.forEach((value) => console.log(value));
  //{ name: 'VALUE1' }
  //VALUE2
    
  set.delete(VALUE1);
  console.log(set.has(VALUE1)); // false

  // WEAK SET

  const weakSet = new WeakSet();
  let domNode = {}; // this is not a real dom node, of course
  weakSet.add(domNode);
  console.log(weakSet.has(domNode)); // true
  domNode = null;
  // it is impossible to use `has` to find out if the domNode is still in the `WeakSet`,
  // because we no longer have a reference
  // to the domNode. But once the garbage collection has run, it will be gone
}
// MAP
{
  const map = new Map();

  // keys are not restricted to strings
  const KEY1 = { name: 'KEY1' };
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

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach
  console.log('map forEach');
  map.forEach((value, key) => console.log(`${key}=${value}`));
  // [object Object]=1
  // KEY2=2

  map.delete(KEY1);
  console.log(map.has(KEY1)); // false

  // WEAK MAP

  const weakMap = new WeakMap();
  let domNode = {}; // this is not a real dom node, of course
  weakMap.set(domNode, 'additional information');
  console.log(weakMap.get(domNode) === 'additional information'); // true
  domNode = null;
  // it is impossible to use `has` or `get `to find out if the entry is still in the `WeakMap`,
  // because we no longer have a reference
  // to the key. But once the garbage collection has run, it will be gone

}