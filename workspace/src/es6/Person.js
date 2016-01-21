export default class Person {
  constructor(name) {
    console.log('Person');
    this._name = name;
  }

  get name() {
    return this._name;
  }
  
}
