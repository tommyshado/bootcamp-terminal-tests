import assert from "assert"
import countRegNumber from "../functions/countRegNumber.js"

describe('countRegNumber', () => {
    it('is a function', () => {
        assert.equal(typeof countRegNumber, 'function');
    });

    it('returns a number of registrations number within the given string', () => {
        let returnedValue = countRegNumber('CA 182736,CY 523519,CJ 812328');
        assert.equal(returnedValue, 3);
    });

    it('returns a number of registrations number within the given string', () => {
        let returnedValue = countRegNumber('CA 182736');
        assert.equal(returnedValue, 1);
    });

});