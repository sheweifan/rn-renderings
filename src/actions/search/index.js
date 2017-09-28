import * as types from '../../canstants'

export const search_select_change => (selected) => {
	type: SEARCH_SELECT_CHANGE,
	selected
}

export const search_key_change => (text) => {
	type: SEARCH_KEY_CHANGE,
	text
}

export const search_key_change => (item) => {
	type: SEARCH_HISTORY_CHANGE,
	item
}