// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// http://www.2ality.com/2015/01/es6-destructuring.html

'use strict';
{
  const person = {
    name: 'Olli',
    address: {
      city: 'Hamburg',
      country: 'Germany'
    },
    email: 'oliver.zeigermann@gmail.com'
  };

  const {name} = person;
  console.log(`name=${name}`);
  // name=Olli
  const {email: contact} = person;
  console.log(`contact=${contact}`);
  // contact=oliver.zeigermann@gmail.com

  const {address: {city, country: origin}} = person;
  console.log(`typeof address=${typeof address}`);
  //typeof address=undefined
  console.log(`city=${city}`);
  //city=Hamburg
  console.log(`origin=${origin}`);
  //origin=Germany


  function print({email: contact}) {
    console.log(`contact=${contact}`);
  }
  print(person);
  // contact=oliver.zeigermann@gmail.com

  /*
  const {name, address: {city, street, country: origin}, lastName, email: contact} = person;
  console.log(`name=${name}`);
  console.log(`typeof address=${typeof address}`);
  console.log(`city=${city}`);
  console.log(`street=${street}`);
  console.log(`typeof country=${typeof country}`);
  console.log(`origin=${origin}`);
  console.log(`typeof email=${typeof email}`);
  console.log(`contact=${contact}`);
  */

  function g({name: x, y, z=10}) {
    console.log(`x=${x}`); // x=olli
    console.log(`y=${y}`); // y=undefined
    console.log(`z=${z}`); // z=10
  }
  g({ name: 'olli' });

  {
    const [a, b] = [1, 2];
    console.log(`a=${a}`);
    //a=1
    console.log(`b=${b}`);
    //b=2
  }
  {
    const [, b] = [1, 2];
    console.log(`b=${b}`);
    //b=2
  }
  {
    const [a, b] = [1];
    console.log(a);
    console.log(b);
  }
  {
    const [a, b = 'b'] = [1];
    console.log(a);
    console.log(b);
  }

  {
    const [a, ...b] = [1, 2, 3, 4];
    console.log(a);
    console.log(b);
  }
}