import chai from 'chai';
const should = chai.should();

import { expect } from 'chai'

import {sayHello, message} from '../../src/hello';

describe('Main', () => {
  it('has proper message', () => {
    expect(message).to.contain('Hello');
  });

  it('displays hello properly', () => {
    sayHello();
    const mainDiv = document.querySelector('#main');
    should.exist(mainDiv);

    const h1 = document.querySelector('#main > h1');
    should.exist(h1);

    const text = h1.textContent;
    expect(text).to.contain('Hello');
  });

});
