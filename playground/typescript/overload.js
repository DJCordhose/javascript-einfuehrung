var a = 10;
var b = !a;
var t = {
    a: function (a) {
        console.log(a);
    }
};
t.a(true); // cool
t.a(10); // cool
t.a('Aha?'); // no!
//# sourceMappingURL=overload.js.map