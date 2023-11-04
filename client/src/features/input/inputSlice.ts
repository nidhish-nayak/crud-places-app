import { createSlice } from "@reduxjs/toolkit";
import { INPUT_SLICE_TYPES } from "./input.types";

const initialState: INPUT_SLICE_TYPES = {
	value: "",
	isValid: false,
};

const inputSlice = createSlice({
	name: "input",
	initialState,
	reducers: {
		change: (state, action) => {
			state.value = action.payload.val;
			state.isValid = true;
		},
	},
});

export const { change } = inputSlice.actions;
export default inputSlice.reducer;
