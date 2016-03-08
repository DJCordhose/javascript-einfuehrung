// https://en.wikipedia.org/wiki/Bounded_quantification#F-bounded_quantification
// https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#type-parameters-as-constraints

function assign<T extends U, U>(target: T, source: U): T {
    for (let id in source) {
        target[id] = source[id];
    }
    return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };
assign(x, { b: 10, d: 20 });
assign(x, { e: 0 });  // Error