'use strict';

{
    // ReferenceError: b is not defined
    //console.log(b);
    let b = 10;
    console.log(b); // => 10
    const a = "a";
    // TypeError: Assignment to constant variable.
    //a = "";
    // SyntaxError: Unexpected token ;
    //const b;
}
