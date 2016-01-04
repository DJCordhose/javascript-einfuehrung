var array = ['a' ,'b' ,'c'];

for (var j=0; j < array.length; j++) {
    console.log(j + ": " + array[j]);
}

for (var j in array) {
    console.log(j + ": " + array[j]);
}

var obj = {
    a: 1,
    b: 2
};

for (var k in obj) {
    console.log(k + ": " + obj[k]);
}
