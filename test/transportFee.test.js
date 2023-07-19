import assert from "assert"
import transportFee from "../functions/transportFee"

describe('transportFee', () => {

    it('returns a string', () => {
        assert.equal(transportFee('morning'), 'R20');
    });

    it('returns a string', () => {
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it('returns a string', () => {
        assert.equal(transportFee('evening'), 'free');
    });

})