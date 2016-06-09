var array = [1, 2, 3, 4, 5];

const mal10 = (e) => e * 10;
const ungerade = (e) => e % 2 === 1;
const summieren = (el1, el2) => el1 + el2;

console.log(array
    .filter(ungerade)
    .map(mal10)
    .reduce(summieren, 0)
);
