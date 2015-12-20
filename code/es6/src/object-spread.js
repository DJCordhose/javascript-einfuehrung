// ES7 object spread
// https://github.com/sebmarkbage/ecmascript-rest-spread

{
    const a = 1;
    const obj1 = {
        b: 2,
        c: 3
    };
    const obj2 = {a, ...obj1};
    console.log(obj2);
// {a: 1, b: 2, c: 3}
}
