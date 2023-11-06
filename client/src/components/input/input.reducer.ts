import { INPUT_ACTION_TYPES, INPUT_STATE_TYPES } from "./input.types";

const inputReducer = (state: INPUT_STATE_TYPES, action: INPUT_ACTION_TYPES) => {
	switch (action.type) {
		case "CHANGE":
			return {
				...state,
				value: action.val,
				isValid: true,
			};

		default:
			return state;
	}
};

export default inputReducer;
