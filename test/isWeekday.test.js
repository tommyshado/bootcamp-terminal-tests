import assert from "assert"
import isWeekday from "../functions/isWeekday.js"

describe('isWeekday', () => {

    it('returns a boolean value', () => {
        assert.equal(isWeekday('Saturday'), false);
    });

    it('returns a boolean value', () => {
        assert.equal(isWeekday('Sunday'), false);
    });

    it('returns a boolean value', () => {
        assert.equal(isWeekday('Monday'), true);
    });

    it('returns a boolean value', () => {
        assert.equal(isWeekday('Thursday'), true);
    })

})