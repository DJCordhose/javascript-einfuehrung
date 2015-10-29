(function () {
    var b = 10;
    console.log(b); // => 10
    (function () {
        var c = "c";
        console.log(c); // => "c"
        console.log(b); // => 10
    })();
    console.log(typeof c); // => undefined
})();
