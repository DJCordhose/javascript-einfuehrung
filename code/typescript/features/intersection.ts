// https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#intersection-types
{
  
interface HasAge {
  age: number;
}

interface HasName {
  name: string;
}

const doMoreStuff = (x: HasAge & HasName) => `${x.name} is ${x.age}`;

const res: string = doMoreStuff({name: 'Olli', age: 45});
console.log(res);
// Olli is 45

// Error: does not fullfill HasName
// doMoreStuff({age: 45});

// Error: does not fullfill HasAge
// doMoreStuff({name: 'Olli'});

}

