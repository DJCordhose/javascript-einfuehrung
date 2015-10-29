//let str1 = 'Mein Beispiel';
//str1 = 10;

//let str1: any = 'Mein Beispiel';
//str1 = 10;

// error TS2322: Type 'number' is not assignable to type 'string'.

//function eatThis(conf) {
//    console.log(conf.name);
//    if (conf.singleLine) {
//        console.log('----');
//    }
//}
//eatThis({
//    name: 'Olli',
//    singleLine: true
//});
//Olli
//----

//function eatThis(conf: {
//    name: string;
//    singleLine?: boolean }) {
//    // Implementierung wie gehabt ...
//    console.log(conf.name);
//    if (conf.singleLine) {
//        console.log('----');
//    }
//}

interface EatThisConfig {
    name: string;
    singleLine?: boolean;
}
//function eatThis(conf: EatThisConfig) {
//    // Implementierung wie gehabt ...
//}
//
//eatThis({
//    name: 'Olli',
//    singleLine: 10
//});

//interface Eater {
//    eatThis(conf: EatThisConfig): void;
//}
//
//const eater: Eater = {
//    eatThis(conf: EatThisConfig) {
//        // Implementierung wie gehabt ...
//        console.log(conf.name);
//        if (conf.singleLine) {
//            console.log('----');
//        }
//    }
//};
//eater.eatThis({name: 'Olli', singleLine: true});


//interface Eater {
//    (conf: EatThisConfig): void;
//}
//
//const eatThis: Eater = function (conf: EatThisConfig) {
//    // Implementierung wie gehabt ...
//    console.log(conf.name);
//    if (conf.singleLine) {
//        console.log('----');
//    }
//};


const eatThis: (conf: EatThisConfig) => void = function (conf: EatThisConfig) {
    // Implementierung wie gehabt ...
};

eatThis({
    name: 'Olli',
    singleLine: true
});


//class Person {
//    private name: string;
//
//    constructor(name: string) {
//        this.name = name;
//    }
//
//    getName(): string {
//        return this.name;
//    }
//}

class Person {
    constructor(private name: string) {
    }

    getName(): string {
        return this.name;
    }
}

const persons: Array<Person> = [];
persons.push(new Person('Olli'));
persons.forEach(person =>
    console.log("Person " + person.getName()));

module Person {
    export class Person {
        constructor(public name: string) {
        }
    }
    export function Create(name) {
        return new Person(name);
    }
}


interface HTMLCanvasElement extends HTMLElement {
    getContext(contextId: "2d"): CanvasRenderingContext2D;
    getContext(contextId: string, ...args: any[]): any;
}