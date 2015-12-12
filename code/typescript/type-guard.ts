// https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#type-guards


function doStuff(x: string | number) {
  if (typeof x === 'string') {
    return x.length;
  } else {
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

