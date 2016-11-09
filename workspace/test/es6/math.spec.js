import {percentile} from '../../src/es6/util/math';
import expect from 'expect';

describe('store', () => {
    it('can load', () => {
        const  values = [11, 3, 4, 1, 23, 45, 2, 5];
        const p10 = percentile(values, 100);
        expect(p10).toBe(1);
    });

});
