// https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#type-guards


// will return number
function doStuff(x: string | number) {
  if (typeof x === 'string') {
    // no need to cast, x is of type string here
    return x.length;
  } else {
    // x must be of type number,no need to cast 
    return x - 1;
  }
}

const res1: number = doStuff(10);
console.log(res1);
const res2: number = doStuff('Olli');
console.log(res2);
// does not even compile
// doStuff(true);
// const res3: string = doStuff('Olli');

interface Person {
  name: string;
} 

enum Langauge {Cobol, Haskell, JavaScript };

interface Programmer {
  language: Langauge;
}

console.log(Langauge.JavaScript);