const VALIDATOR_TYPE_REQUIRE = "REQUIRE";
const VALIDATOR_TYPE_MINLENGTH = "MINLENGTH";
const VALIDATOR_TYPE_MAXLENGTH = "MAXLENGTH";
const VALIDATOR_TYPE_MIN = "MIN";
const VALIDATOR_TYPE_MAX = "MAX";
const VALIDATOR_TYPE_EMAIL = "EMAIL";
const VALIDATOR_TYPE_FILE = "FILE";

interface Validator {
	type: string;
	val?: number; // Optional property for validators that require a value like MINLENGTH, MIN, MAX, etc.
}

export const VALIDATOR_REQUIRE = (): Validator => ({
	type: VALIDATOR_TYPE_REQUIRE,
});

export const VALIDATOR_FILE = (): Validator => ({ type: VALIDATOR_TYPE_FILE });

export const VALIDATOR_MINLENGTH = (val: number): Validator => ({
	type: VALIDATOR_TYPE_MINLENGTH,
	val,
});

export const VALIDATOR_MAXLENGTH = (val: number): Validator => ({
	type: VALIDATOR_TYPE_MAXLENGTH,
	val,
});

export const VALIDATOR_MIN = (val: number): Validator => ({
	type: VALIDATOR_TYPE_MIN,
	val,
});

export const VALIDATOR_MAX = (val: number): Validator => ({
	type: VALIDATOR_TYPE_MAX,
	val,
});

export const VALIDATOR_EMAIL = (): Validator => ({
	type: VALIDATOR_TYPE_EMAIL,
});

export const validate = (value: string, validators: Validator[]) => {
	let isValid = true;
	for (const validator of validators) {
		if (validator.type === VALIDATOR_TYPE_REQUIRE) {
			isValid = isValid && value.trim().length > 0;
		}
		if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
			isValid = isValid && value.trim().length >= (validator.val || 0); // Use default value if val is not provided
		}
		if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
			isValid = isValid && value.trim().length <= (validator.val || Infinity); // Use default value if val is not provided
		}
		if (validator.type === VALIDATOR_TYPE_MIN) {
			isValid = isValid && +value >= (validator.val || -Infinity); // Use default value if val is not provided
		}
		if (validator.type === VALIDATOR_TYPE_MAX) {
			isValid = isValid && +value <= (validator.val || Infinity); // Use default value if val is not provided
		}
		if (validator.type === VALIDATOR_TYPE_EMAIL) {
			isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
		}
	}
	return isValid;
};
