// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol



{

  console.log('Symbols');

  {
    const one = Symbol();
    const two = Symbol();
    console.log(one === two); // false
  }
  {
    //  Even two symbols with the same description are unique:
    const good = Symbol('mood');
    console.log(good); // Symbol(mood)
    console.log(typeof good); // "symbol"
    const bad = Symbol('mood');
    console.log(good === bad); // false
  }
  
  {
    // global shared pool  
    const sym1 = Symbol.for('myKey');
    console.log(sym1); // Symbol(myKey)
    const sym2 = Symbol.for('myKey');
    console.log(sym1 === sym2); // true
    const key = Symbol.keyFor(sym1);
    console.log(key); // 'myKey'
  }

  {
    console.log('Symbol.iterator: ');
    // well known symbol: iterator aka @@iterator  
    const iterator = Symbol.iterator;
    console.log(iterator); // Symbol(Symbol.iterator)
    const key = Symbol.keyFor(iterator);
    console.log(key); // undefined
  }

  console.log('Private fields using symbol');

  const Person = (() => { // IIFE using arrow function
    // private
    const nameSymbol = Symbol('name'); // name is optional

    class Person {
      constructor(name) {
        this[nameSymbol] = name;
      }

      get name() {
        return this[nameSymbol];
      }
    }

    return Person;
  })();

  const olli = new Person("Olli");

  console.log(olli.name); // Olli

  // error as nameSymbol is out of scope
  //console.log(olli[nameSymbol])

  const ownPropertySymbols = Object.getOwnPropertySymbols(olli);
  console.log(ownPropertySymbols); // [ Symbol(name) ]

  // still possible to access private property if you really want
  olli[ownPropertySymbols[0]] = 'Granny';
  console.log(olli.name);  // Granny
  
}