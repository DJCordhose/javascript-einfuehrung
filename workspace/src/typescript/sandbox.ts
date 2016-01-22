let obj: string;
obj = 'yo';
// Error: Type 'number' is not assignable to type 'string'.
// obj = 10;
console.log(obj);

function sayIt(what: string): string {
  return `Saying: ${what}`;
}

const said: string = sayIt(obj);
console.log(said);

class Sayer {
  what: string;
  constructor(what: string) {
    this.what = what;
  }
  sayIt(): string {
    return `Saying: ${this.what}`;
  }
}

interface SayerInterface {
  sayIt: () => string;
}

let sayer: SayerInterface = new Sayer('Hiho');
console.log(sayer.sayIt());

sayer = {
  otherStuff: 'stuff',
  sayIt(): string {
    return 'yo';
  }
};
// Error: Object literal may only specify known properties, and 'otherStuff' does not exist in type 'SayerInterface'.


let sayer2: any = {
  what: 'something',
  sayIt() {
    return 'whatever'
  },
  that: 'no'
}

sayer = sayer2;

// sayer = {
//   what: 'something',
//   sayIt() {
//     return 'whatever'
//   },
//   that: 'no'
// };

// only structure matters
interface AnotherSayer {
  what: string;
  that: string;
  sayIt: () => string;
  sayThat: () => string;
}

let anotherSayer: AnotherSayer;
sayer = anotherSayer;