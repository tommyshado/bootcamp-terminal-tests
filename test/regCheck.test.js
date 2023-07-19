import assert from "assert"
import regCheck from "../functions/regCheck"

describe('regCheck', () => {

    it('returns a boolean value if the registration is from the same town', () => {
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });

    it('returns a boolean value if the registration number is not from the given town name', () => {
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });

    it('returns a boolean value if the registation value is from the same town', () => {
        assert.equal(regCheck('5566 L', 'L'), true);
    })
});