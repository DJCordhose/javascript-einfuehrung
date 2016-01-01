{
  let obj: string;
  // Error: 'number' is not assignable to type 'string'.
  // obj = 10;
  obj = 'yo';

  function sayIt(what: string): string {
    return `Saying: ${what}`;
  }

  const said: string = sayIt(obj);
  console.log(said);
  class Sayer {
    what: string;
    constructor(what) {
      this.what = what;
    }
    sayIt(): string {
      return `Saying: ${this.what}`;
    }
  }

  let sayer: Sayer = new Sayer(obj);
  console.log(sayer.sayIt());

  // class implicitly defines interface
  sayer = {
    what: 'something',
    sayIt() {
      return 'whatever'
    }
  }
  
  interface SayerInterface {
    sayIt: () => string;
  }

  let sayerInterface: SayerInterface;
  sayerInterface = sayer;
  
  // Function Type Interface
  interface SayerFunctionInterface {
    (string): string;
  }

  const func: SayerFunctionInterface = sayIt;
  
  interface AnotherSayer {
    what: string;
    that: string;
    sayIt: () => string;
    sayThat: () => string;
  }
  
  let anotherSayer: AnotherSayer;
  sayer = anotherSayer;
}


