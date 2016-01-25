
'use strict';
{
class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    // set name(name) {
    //     this._name = name;
    // }
}
class Programmer extends Person {
    constructor(name, languages) {
        super(name);
        this.languages = languages;
    }
    codes() {
      // const that = this;
      // const strings = this.languages.map(function (language) {
      //   return `${this.name} codes in ${language}`;
      // }.bind(this));
      const strings = this.languages.map(language => `${this.name} codes in ${language}`);
      strings.forEach(string => console.log(string));
    }
    
    
}

const programmer = new Programmer('Erna', ['JavaScript', 'Java', 'Cobol']);
programmer.codes();

}
// {
// // lexcial binding to this
// const obj = {
//     methodOfObj: function () {
//       console.log(`In Method: ${obj === this}`);
//         ['1', '2', '3'].forEach( e => {
//            console.log(`In Loop: ${obj === this}`);
//         });
//     }
// };

// obj.methodOfObj();
// }