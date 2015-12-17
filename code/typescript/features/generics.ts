function identity<T>(arg: T): T {
    return arg;
}

const olli: string = identity('Olli');
console.log(olli);

// Error: return type does not match
// const olli: number = identity('Olli');

// Error: parameter type does not match
// identity<number>('Olli');