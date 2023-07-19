import assert from "assert"
import findItemsOver from "../functions/findItemsOver.js"

describe('findItemsOver', () => {

    it('returns the items that are greater than the treshold', () => {
        let itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];

        assert.deepEqual(findItemsOver(itemList, 20), [{name : 'pears', qty : 37}, {name : 'bananas', qty : 27}])
    })

    it('returns an empty array for when there are no items over 30', () => {
        let itemList = [
            {name: 'apples', qty: 10},
            {name: 'oranges', qty: 18}
        ]

        assert.deepEqual(findItemsOver(itemList, 30), [])
    })
})