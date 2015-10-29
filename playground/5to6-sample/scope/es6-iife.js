'use strict';

{
    let b = 10;
    console.log(b); // => 10
    {
        let c = "c";
        console.log(c); // => "c"
        console.log(b); // => 10
    }
    console.log(typeof c); // => undefined
}
