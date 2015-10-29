'use strict';

function Person(name) {
    this.name = name;
}
Person.prototype.getName = function () {
    return this.name;
};

Person.getLieblingsName = function () {
    return Person.lieblingsName;
};
Person.lieblingsName = 'Olli';
console.log(Person.getLieblingsName()); // => "Olli";

var olli = new Person('Olli');
console.log(olli.getName());
