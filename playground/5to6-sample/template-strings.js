//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings

const person = 'Oma';
const language = 'Haskell';

console.log(`${person} programs
${10 * 1024 * 1024} lines of code
in ${language}.`);
//Oma programs
//10485760 lines of code
//in Haskell.

function tag(strings, ...values) {
    console.log(strings);
    //[ '', ' codes in ', '.' ]
    console.log(values);
    //[ 'Oma', 'Haskell' ]
    return 'whatever you want';
}

const expanded = tag`${person} codes in ${language}.`;
console.log(expanded);
//whatever you want
