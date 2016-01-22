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
  
  for (const person of personIterable) {
    console.log(person.name);
  }
  
  const persons = [...personIterable];
  console.log(persons);
}
