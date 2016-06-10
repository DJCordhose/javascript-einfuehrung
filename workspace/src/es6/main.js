const promise1 = new Promise(resolve =>
    setTimeout(
        () => resolve('Result from promise'),
        1000)
);

promise1.then(value => console.log(value));