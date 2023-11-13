import { NEW_PLACE_STATE_TYPES } from "./new-place.types";

const formReducer = (state: NEW_PLACE_STATE_TYPES, action) => {
	switch (action.type) {
		case "INPUT_CHANGE":
			return { ...state };

		default:
			return { ...state };
	}
};

export default formReducer;
