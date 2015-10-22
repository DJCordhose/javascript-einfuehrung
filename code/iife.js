'use strict';

var personModule = {};
(function () {
    var dumpPerson = function (person) {
        console.log(person.name, person.alter);
    }

    var displayPersonsAsArray = function (personArray) {
        for (var i in personArray) {
            var person = personArray[i];
            dumpPerson(person);
        }
    };

    var displayPersons = function () {
        var args = Array.prototype.slice.call(arguments);
        displayPersonsAsArray(args);
    };

    //var display = function(personArray) {
    //    if (personArray instanceof Array) {
    //        displayPersonsAsArray(personArray);
    //    } else {
    //        displayPersons.apply(null, arguments);
    //    }
    //};

    var display = function() {
        if (arguments[0] instanceof Array) {
            displayPersonsAsArray(arguments[0]);
        } else {
            displayPersons(arguments);
            //displayPersons.apply(null, arguments);
        }
    };


    // export
    personModule = {
        displayPersons: displayPersons,
        displayPersonsAsArray: displayPersonsAsArray,
        display: display
    };
}());

var oma = {
    name: 'Oma',
    alter: 88
}


var olli = {
    name: 'Olli',
    alter: 44
};
var array = [olli, oma];
//personModule.displayPersonsAsArray(array);
//personModule.displayPersons(olli, oma);

//personModule.display(array);
personModule.display(olli, oma);
