import assert from "assert"
import countAllFromTown from "../functions/countAllFromTown.js"

describe('countAllFromTown', () => {

    it('returns a number of registraions from Stellies', () => {
        const fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        assert.equal(fromStellies, 3);
    });

    it('returns a number of registrations from Kuilsriver', () => {
        const fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
        assert.equal(fromKuilsriver, 1);
    });

    it('returns a number of registrations from Cape Town', () => {
        const fromCPT = countAllFromTown('CA 123, CA 453, CA 542, CA 134,CF 12134, CJ 543', 'CA');
        assert.equal(fromCPT, 4);
    })
})