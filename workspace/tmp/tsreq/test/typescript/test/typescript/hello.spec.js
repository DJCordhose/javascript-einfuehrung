/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />
var chai_1 = require('chai');
var hello_ts_1 = require('../../src/typescript/hello.ts');
describe('Main', function () {
    it('says hello properly', function () {
        chai_1.assert(hello_ts_1.message.indexOf('Hello') !== -1, 'Should contain Hello');
    });
});
