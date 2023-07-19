import assert from "assert"
import totalPhoneBill from "../functions/totalPhoneBill.js"

describe('totalPhoneBill', () => {

    it('returns a string', () => {
        const smsAndCall = totalPhoneBill('call, sms, call, sms, sms');
        assert.equal(smsAndCall, 'R7.45');
    })

    it('returns a string', () => {
        assert.equal(totalPhoneBill('sms, call'), 'R3.40');
    })

})