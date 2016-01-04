
// Map<String, Object> ~ JavaScript Object
var map = {
    feld1: 'Huhu',
    feld2: true,
    feld3: 10,
    func: function() {

        console.log(this.feld1);
    }
};

console.log(typeof map.feld1);
map.feld1 = 10;
console.log(typeof map.feld1);

//map.func();

var f1 = map['feld1'];
//console.log(f1);

map['feld1'] = 'Hund';
//console.log(f1);

var f2 = map['feld1'];
//console.log(f2);

//console.log(map.feld1);

delete map.feld1;
//console.log(map.feld1);

/**
 * Tolle Variable.
 *
 * @type {boolean}
 */
var dasHierIstEinBoolean = 10;