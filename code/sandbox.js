'use strict';

//var callBackModule = {};
(function () {
    var f3 = function () {
        console.log('Ich mach auch was tolles, kann aber von außerhalb der Library aufgerufen werden');
    };

    var f2 = function (handler) {
        f3();
        handler();
    };

    // export
    window.callBackModule = {
        callbackHandler: f2
    };
    //return {
    //    callbackHandler: f2
    //};

}());

var callback = function () {
    console.log('Huhu');
};

callBackModule.callbackHandler(callback);
console.log(typeof f3);
