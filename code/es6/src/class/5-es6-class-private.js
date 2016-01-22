'use strict';
{
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

  const olli = new Person('Olli');
  console.log(olli.name);

  // error as nameSymbol is out of scope
  //console.log(olli[nameSymbol])

  const ownPropertySymbols = Object.getOwnPropertySymbols(olli);
  console.log(ownPropertySymbols); // [ Symbol(name) ]

  // still possible to access private property if you really want
  olli[ownPropertySymbols[0]] = 'Granny';
  console.log(olli.name);  // Granny
  

}

