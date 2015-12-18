import expect from 'expect';
import jsdom from 'mocha-jsdom';

import {sayHello, message} from '../../src/es6/hello';

describe('Main', () => {
  jsdom();
  it('says hello properly', () => {
    expect(message).toContain('Hello');
  });
});
