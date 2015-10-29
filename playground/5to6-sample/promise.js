const promise1 = new Promise(resolve =>
    setTimeout(
        () => resolve('Result from promise'),
        1000)
);

const promise2 = promise1.then(value => `${value} plus stuff`);
promise2.then(value => console.log(value));
// Result from promise plus stuff