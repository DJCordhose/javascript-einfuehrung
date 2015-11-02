'use strict';


function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.anzahlBeine = function () {
    return 2;
};
Person.prototype.display = function () {
    console.log(this.name + ", " + this.age);
};

var olli = new Person('Olli', 44);
olli.display();


/*
 var de = {};
 var wjax = {};
 var modul = {};
 de.wjax = wjax;
 wjax.modul = modul;
 (function () {
 var geheim = "Ich bin noch da";
 var dackel1 = function() {
 return geheim + ' - Yo1';
 };
 var dackel2 = function() {
 return geheim + ' - Yo2';
 };
 de.wjax.modul = {
 nichtGeheim: dackel1,
 nichtGeheim2: dackel2
 };
 //return {
 //    nichtGeheim: dackel1,
 //    nichtGeheim2: dackel2
 //};
 })();
 */

//console.log(de.wjax.modul.nichtGeheim());
//console.log(de.wjax.modul.nichtGeheim2());


/*

 var oma = {
 name: 'Oma',
 age: 88
 };
 var olli = {
 name: 'Olli',
 age: 44
 };
 var personen = [
 oma,
 olli,
 {
 name: 'Opa',
 age: 90
 }
 ];

 function printSinglePerson(personOrArray) {
 if (personOrArray.name !== undefined) {
 console.log(personOrArray.name, personOrArray.age);
 } else {
 for (var i = 0; i < personOrArray.length; i++) {
 var person = personOrArray[i];
 printSinglePerson(person);
 }
 }

 }

 function printPerson(person) {
 for (var i = 0; i < arguments.length; i++) {
 var person = arguments[i];
 printSinglePerson(person);
 }
 }

 for (var i = 0; i < personen.length; i++) {
 printPerson(personen[i]);
 }

 printPerson(oma, olli);

 printPerson(personen);*/
