'use strict';
{
  class Person {
    constructor(name) {
      this._name = name;
    }

    get name() {
      return this._name;
    }
  }

  // const personIterable = {
  //   [Symbol.iterator]() {
  //     const persons = [new Person('Olli'), new Person('Oma'), new Person('Opa')];
  //     let index = 0;
  //     const iterator = {
  //       next() {
  //         const value = index >= persons.length ? null : persons[index];
  //         index++;
  //         return { done: value === null, value };
  //       }
  //     };
  //     return iterator;
  //   }
  // };
  
  const personIterable = {
    *[Symbol.iterator]() {
      // babel can not handle person to be const
      let persons = [new Person('Olli'), new Person('Oma'), new Person('Opa')];
      let index = 0;
      while (index < persons.length) {
        yield persons[index];
        index++;
      }
    }
  };
  
  function* gen() {
    let index = 0;
      while (index < 1000) {
        yield index;
        index++;
      }
  } 
  
  const iterator = gen();
  // const iterator = personIterable[Symbol.iterator]();
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  
  // for (const person of personIterable) {
  //   console.log(person.name);
  // }
  
  // const persons = [...personIterable];
  // console.log(persons);
}
