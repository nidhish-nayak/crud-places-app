export type INPUT_PROPS_TYPES = {
	id?: string;
	type?: string;
	placeholder?: string;
	element?: string;
	rows?: number;
	label?: string;
};

export type INPUT_STATE_TYPES = {
	value: string;
	isValid: boolean;
};

export type INPUT_ACTION_TYPES = {
	type: string;
	val: string;
};
