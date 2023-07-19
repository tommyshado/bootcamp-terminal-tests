import assert from "node:assert"
import isFromBellville from "../functions/isFromBellville"

describe('The isFromBellvile function', () => {

    it('returns a boolean value if the registration number is from Bellville', () => {
        assert.equal(true, isFromBellville('CY 123'));
    });

    it('returns a boolean value if the registration number is not from Bellville', () => {
        assert.equal(false, isFromBellville('CJ 123'));
    })

});