'use strict';

var obj = {
    field: 10,
    log: function(p1, p2) {
        console.log(this.field);
        console.log(p1);
        console.log(p2);
    }
};

//obj.log('p1', 'p2'); // 10

var obj2 = { field: 20};

obj.log.apply(obj2, ['p1', 'p2']);
obj.log.call(obj2, 'p1', 'p2');