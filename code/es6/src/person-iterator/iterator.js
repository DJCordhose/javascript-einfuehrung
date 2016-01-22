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

  const personIterable = {
    [Symbol.iterator]() {
      const persons = [new Person('Olli'), new Person('Oma'), new Person('Opa')];
      let index = 0;
      const iterator = {
        next() {
          const value = index >= persons.length ? null : persons[index];
          index++;
          return { done: value === null, value };
        }
      };
      return iterator;
    }
  };
  
  for (const person of personIterable) {
    console.log(person.name);
  }
  
  const persons = [...personIterable];
  console.log(persons);
}
