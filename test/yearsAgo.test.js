import assert from "assert"
import yearsAgo from "../functions/yearsAgo.js"

describe('yearsAgo', () => {

    it('returns a number', () => {
        assert.equal(yearsAgo(1976), 47);
    })

    it('returns a number', () => {
        assert.equal(yearsAgo(2000), 23);
    })
});