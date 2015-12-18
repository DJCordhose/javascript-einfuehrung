// User defined type guards in
// http://blogs.msdn.com/b/typescript/archive/2015/09/16/announcing-typescript-1-6.aspx

interface Animal {name: string; }
interface Cat extends Animal { meow(); }

function isCat(a: Animal): a is Cat {
  return a.name === 'kitty';
}

let x: Animal;

const kitty: Cat = {
  name: 'kitty',
  meow: () => console.log('meow')
};

x = kitty;

if(isCat(x)) {
  x.meow(); // OK, x is Cat in this block
}