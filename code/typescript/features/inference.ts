const array = [1, 2, 3, "yo"];
// Error: array is (number | string)[]
// array[4] = true;

let array2: any[] = [1, 2, 3, "yo"];
// cool, array2 can containing anything
array2[4] = true;
// Error: boolean is not array 
// array2 = true;

let array3: any = [1, 2, 3, "yo"];
array3[4] = true;
// cool, array3 can be anything
array3 = true;

// Error: can not contain anything 
// let array4: void = [];

// ok when "noImplicitAny": false in tsconfig.json, Error otherwise
let a;
