// const obj1 = {value: 'a'};
// const obj2 = {value: 'b'};

// const programmers = new Set();
// programmers.add(obj1);
// programmers.add(obj2);

//  console.log(...programmers);
 
//  const arr = [...programmers];
//  console.log(arr);
 
//  const json = JSON.stringify(arr);
//  console.log(json);
 
//  const arr2 = JSON.parse(json);
//  console.log(arr2);
//  const newSet = new Set(arr2);
//  console.log(...newSet);
 
//  class Olli {
//    constructor(language) {
//      if (typeof language === 'object') {
//       this.language = language.language;
//      } else {
//        this.language = language;
//      }
//    }
//  }
 
//  const olli = new Olli('Java');
//  console.log(olli instanceof Olli);
 
 
//  const str = JSON.stringify(olli);
// console.log(str); 

// const hoffentlichAuchEinOlli = new Olli(JSON.parse(str));
// console.log(hoffentlichAuchEinOlli.language); 
// console.log(hoffentlichAuchEinOlli instanceof Olli);
 
 
const weakMap = new WeakMap();
let domNode = {}; // this is not a real dom node, of course
weakMap.set(domNode, 'additional information');
// console.log(weakMap.get(domNode) === 'additional information'); // true
// domNode = null;

console.log(...weakMap);