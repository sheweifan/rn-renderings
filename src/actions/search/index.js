import * as types from '../../constants'

export const searchSelectChange = (selected) => {
	return {
		type: types.SEARCH_SELECT_CHANGE,
		selected
	}
}

export const searchKeyChange = (text) => {
	return {
		type: types.SEARCH_KEY_CHANGE,
		text
	}
}

export const searchHistoryChange = (item) => {
	return {
		type: types.SEARCH_HISTORY_CHANGE,
		item
	}
}