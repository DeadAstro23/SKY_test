import _ from 'lodash'

export default function (state = [], action) {
	switch (action.type) {
		case 'TOGGLE_ITEM':
			if (_.find(state, {item: action.item})){
				let newState = [...state];
				_.remove(newState, {item : action.item});
				return newState;
			}
			else {
                return [
                    ...state,
                    {
                        item: action.item
                    }
                ];
			}

		default:
			return state;
	}
}
