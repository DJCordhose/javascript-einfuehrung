//let str1 = 'Mein Beispiel';
//str1 = 10;
//function eatThis(conf: EatThisConfig) {
//    // Implementierung wie gehabt ...
//}
//
//eatThis({
//    name: 'Olli',
//    singleLine: 10
//});
//interface Eater {
//    eatThis(conf: EatThisConfig): void;
//}
//
//const eater: Eater = {
//    eatThis(conf: EatThisConfig) {
//        // Implementierung wie gehabt ...
//        console.log(conf.name);
//        if (conf.singleLine) {
//            console.log('----');
//        }
//    }
//};
//eater.eatThis({name: 'Olli', singleLine: true});
//interface Eater {
//    (conf: EatThisConfig): void;
//}
//
//const eatThis: Eater = function (conf: EatThisConfig) {
//    // Implementierung wie gehabt ...
//    console.log(conf.name);
//    if (conf.singleLine) {
//        console.log('----');
//    }
//};
var eatThis = function (conf) {
    // Implementierung wie gehabt ...
};
eatThis({
    name: 'Olli',
    singleLine: true
});
//class Person {
//    private name: string;
//
//    constructor(name: string) {
//        this.name = name;
//    }
//
//    getName(): string {
//        return this.name;
//    }
//}
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
})();
var persons = [];
persons.push(new Person('Olli'));
persons.forEach(function (person) {
    return console.log("Person " + person.getName());
});
var Person;
(function (Person_1) {
    var Person = (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    })();
    Person_1.Person = Person;
    function Create(name) {
        return new Person(name);
    }
    Person_1.Create = Create;
})(Person || (Person = {}));
//# sourceMappingURL=kap8.js.map