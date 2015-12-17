https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#tuple-types

interface HasAge {
  age: number;
}

interface HasName {
  name: string;
}

function doMoreStuff(x: HasAge & HasName): [string, string, number] {
  return [`${x.name} is ${x.age}`, x.name, x.age];
}

const res = doMoreStuff({name: 'Olli', age: 45});
const str: string = res[1];
const num: number = res[2];

// Error: string not assingable to number
// const num2: number = res[1];
