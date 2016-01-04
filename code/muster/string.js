var s1 = 'Hallo, ';
var s2 = "Olli's Oma";

// === JavaScript ~ == Java
// == JavaScript ~ Obskure Typkonvertierung in Java
var s3 = s1 + s2;
//console.log(s3);
// immer (!) === nehmen
//console.log(s3 === "Hallo, Olli's Oma");
// true

s3[1] === "a";
console.log(s3[1]);
console.log(typeof s3[1]);
s3.charAt(1) === s3[1];

// Ersatz für StringBuilder und StringBuffer
var builder = ["a", "b", "c"];
var s4 = builder.join("");
console.log(s4);