import {toggleItem} from '../src/actions/actions';
import {product} from '../src/reducers/index'

describe('actions test suite', () => {
    it('should create an action to toggle item in cart', () => {
        const item = 'Arsenal TV';
        const expectedAction = {
            type: 'TOGGLE_ITEM',
            item
        };
        expect(toggleItem(item)).toEqual(expectedAction)
    })
});

describe('reducers test suite', () => {
    it('should return the initial state', () => {
        expect(
            product(undefined, {})
        ).toEqual([])
    });

    it('should handle TOGGLE_ITEM', () => {
        expect(
            product([], {
                type: 'TOGGLE_ITEM',
                item: 'Chelsea TV'
            })
        ).toEqual([{item: 'Chelsea TV'}])
    })
});