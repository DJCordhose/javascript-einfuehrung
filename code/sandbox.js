'use strict';

var obj = {
    a: 10
};

Object.seal(obj);

console.log(Object.isSealed(obj));
// => true

obj.a = 20;
// => TypeError: Cannot assign to read only property

console.log(obj.a);

//obj.b = 10;
// => TypeError: Can't add property b, object is not extensible

delete obj.a;