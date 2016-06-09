var oma = {
    name: "Oma"
};
function fullName(title, lastName) {
    return title + " " + this.name + " " + lastName;
}

var bound1 = fullName.bind(oma); // this an oma binden
// var fullName1 = bound1("Frau", "Torbogen");
var fullName1 = bound1.call({name: 'Opa'}, "Frau", "Torbogen");

console.log(fullName1);
// => Frau Oma Torbogen