import assert from "assert"
import countAllPaarl from "../functions/countAllPaarl.js"

describe('countAllPaarl', () => {

    it('returns a number a number of all the registrations from Paarl', () => {
        assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'), 3);
    });

    it('returns a number of all the registrations from Paarl', () => {
        assert.equal(countAllPaarl('CJ 345 123, CK 345, CJ 123'), 2);
    });

})