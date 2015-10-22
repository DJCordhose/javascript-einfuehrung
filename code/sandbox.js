var olli = {
    personName: 'Olli',
    getName : function() {
        console.log(this);
        return this.personName;
    }
};

console.log(olli.getName());
// Olli
var globalGetName = olli.getName;
console.log(globalGetName());
// undefined