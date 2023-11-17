import {
	NEW_PLACE_ACTION_TYPES,
	NEW_PLACE_STATE_TYPES,
} from "./new-place.types";

const formReducer = (
	state: NEW_PLACE_STATE_TYPES,
	action: NEW_PLACE_ACTION_TYPES
) => {
	let formIsValid;

	switch (action.type) {
		case "INPUT_CHANGE":
			formIsValid = true;
			for (const inputId in state.inputs) {
				if (inputId === action.inputId) {
					formIsValid = formIsValid && action.isValid;
				} else {
					formIsValid = formIsValid && state.inputs[inputId].isValid;
				}
			}
			return {
				...state,
				inputs: {
					...state.inputs,
					[action.inputId]: { value: action.value, isValid: action.isValid },
				},
				isValid: formIsValid,
			};

		default:
			return { ...state };
	}
};

export default formReducer;
