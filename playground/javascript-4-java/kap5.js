(function () {
    var Config = {
        a: 10,
        b: "Name"
    };
})();
// ReferenceError: Config is not defined
//Config.a;

var modul = {}; // Einfaches Objekt-Literal
(function () {
    var Config = {
        a: 10,
        b: "Name"
    };
    // Export
    modul.Config = Config;
})();
console.log(modul.Config.a);
// => 10

{
    var person = {};
    (function () {
        // Konstruktor
        function Person(name) {
            this.name = name;
        }

        // Factory
        function CreatePerson(name) {
            return new Person(name);
        }

        // Export der Factory-Methode
        person.CreatePerson = CreatePerson;
    })();
    console.log(person.Person);
    // => undefined
    var olli = person.CreatePerson("Olli");
    console.log(olli.name);
    // => "Olli"
}
var person = (function () {
    // Konstruktor
    function Person(name) {
        this.name = name;
    }

    // Factory
    function Create(name) {
        return new Person(name);
    }

    // Export der Factory-Methode
    return {CreatePerson: Create};
})();
