/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />

// exptect wont work with typescript
import {assert} from 'chai';

import {sayHello, message} from '../../src/typescript/hello.ts';

describe('Main', () => {
  it('says hello properly', () => {
    assert(message.indexOf('Hello') !== -1, 'Should contain Hello');
  });
});
