let a: number = 10;
let b: boolean = !a;

interface Test {
    a(b: boolean): string;
    a(n: number): number;

}

let t: Test = { // no!
    a(a: string): any {
        console.log(a);
    }

};

t.a(true); // cool
t.a(10); // cool

t.a('Aha?'); // no!