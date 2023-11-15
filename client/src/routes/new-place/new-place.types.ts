export type NEW_PLACE_STATE_TYPES = {
	inputs: {
		title: {
			value: string;
			isValid: boolean;
		};
		description: {
			value: string;
			isValid: boolean;
		};
	};
	isValid: boolean;
};

export type NEW_PLACE_ACTION_TYPES = {
	type: string;
	payload: string;
	inputId: string;
	isValid: boolean;
};
