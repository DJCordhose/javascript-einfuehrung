

abstract class AbstractSayer {
  protected what: string;
  private notInherited: any;
  constructor(what) {
    this.what = what;
    this.notInherited = 'secret';
  }
  abstract sayIt(): string;
}

class Sayer extends AbstractSayer {
  constructor(what) {
    super(what);
  }
  // public is default
  sayIt(): string {
    // Error: Property 'notInherited' is private and only accessible within class 'AbstractSayer'.
    // console.log(this.notInherited); // nope
    // can access protected from inheriting class
    return `Saying: ${this.what}`;
  }
}
let sayer: Sayer = new Sayer('Yo');
console.log(sayer.sayIt());

// Error: Property 'what' is protected and only accessible within class 'AbstractSayer' and its subclasses.
// sayer.what; // nope

{
  class Sayer {
    constructor(private what: string) {
    }

    sayIt(): string {
      return `Saying: ${this.what}`;
    }

  }
}
