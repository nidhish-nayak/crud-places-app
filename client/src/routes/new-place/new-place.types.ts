export type NEW_PLACE_STATE_TYPES = {
	inputs: {
		[key: string]: {
			value: string;
			isValid: boolean;
		};
	};
	isValid: boolean;
};

export type NEW_PLACE_ACTION_TYPES = {
	type: string;
	value: string;
	inputId: string;
	isValid: boolean;
};
