'use strict';

/**
 *
 * @param name
 * @param alter
 * @constructor
 */
function Person(name, alter) {
    this.name = name;
    this.alter = alter;
}

/**
 *
 * @returns {string}
 * @override
 */
Person.prototype.toString = function() {
    return 'Name: ' + this.name + ", Alter: " + this.alter;
};

Person.prototype.toJSON2 = function() {
    var json = JSON.stringify(this, null, '\t');
    return json;
};

Person.fromJSON2 = function(json) {
    var obj = JSON.parse(json);
    console.log(obj instanceof Object);
    console.log(obj instanceof Person);
    return new Person(obj.name, obj.alter);
};

Person.berechneLebenserwartung = function (geschlecht) {
    if (geschlecht === 'M') {
        return 76;
    } else {
        return 80;
    }
};

var lebensErwartung = Person.berechneLebenserwartung('M');
console.log(lebensErwartung);

var olli = new Person('Olli', 44);
var oma = new Person('Oma', 88);

//console.log(olli instanceof Person);
//console.log(olli instanceof Object);
//console.log(olli instanceof Array);

var personen = [olli, oma];
//for (var i in personen) {
//    //console.log(personen[i].toString());
//    console.log(personen[i].toJSON2());
//}

var fromJSON = Person.fromJSON2('{\
    "name": "Olli",\
        "alter": 44\
}');

console.log(fromJSON.toString());
