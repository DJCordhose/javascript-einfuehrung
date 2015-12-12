// https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#intersection-types

interface HasAge {
  age: number;
}

interface HasName {
  name: string;
}

function doMoreStuff(x: HasAge & HasName) {
  return `${x.name} is ${x.age}`;
}

const res: string = doMoreStuff({name: 'Olli', age: 45});
console.log(res);