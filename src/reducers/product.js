export default function (state = [], action) {
	switch (action.type) {
		case 'ADD_PRODUCT':
			return [
				...state,
				{
					title: action.title
				}
			];
		case 'REMOVE_PRODUCT':
			return 0;
		default:
			return state;
	}
}
