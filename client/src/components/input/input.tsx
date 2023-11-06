import React, { useReducer } from "react";
import inputReducer from "./input.reducer";
import { INPUT_PROPS_TYPES } from "./input.types";

const Input: React.FC<INPUT_PROPS_TYPES> = (props) => {
	const [inputState, dispatch] = useReducer(inputReducer, {
		value: "",
		isValid: false,
	});

	const changeHandler = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		dispatch({ type: "CHANGE", val: event.target.value });
	};

	const element =
		props.element === "input" ? (
			<input
				id={props.id}
				type={props.type}
				name="input"
				placeholder={props.placeholder}
				className="p-2 rounded-sm"
				onChange={changeHandler}
				value={inputState.value}
			/>
		) : (
			<textarea
				id={props.id}
				name="text"
				rows={props.rows || 3}
				placeholder={props.placeholder}
				className="p-2 rounded-sm min-h-[200px]"
				onChange={changeHandler}
				value={inputState.value}
			/>
		);

	return (
		<div className="flex flex-col flex-wrap gap-2">
			<label htmlFor={props.id} className="font-semibold">
				{props.label}
			</label>
			{element}
		</div>
	);
};

export default Input;
