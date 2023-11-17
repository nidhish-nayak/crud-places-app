import React, { useEffect, useReducer } from "react";
import inputReducer from "./input.reducer";
import { INPUT_PROPS_TYPES } from "./input.types";

const Input: React.FC<INPUT_PROPS_TYPES> = (props) => {
	const [inputState, dispatch] = useReducer(inputReducer, {
		value: "",
		isValid: false,
		isTouched: false,
	});

	const { id, onInput } = props;
	const { value, isValid } = inputState;

	useEffect(() => {
		onInput(id, value, isValid);
	}, [id, value, isValid, onInput]);

	const changeHandler = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		dispatch({
			type: "CHANGE",
			val: event.target.value,
			validators: props.validators,
		});
	};

	const touchHandler = () => {
		dispatch({
			type: "TOUCH",
			val: "",
			validators: [{ type: "" }],
		});
	};

	const element =
		props.element === "input" ? (
			<input
				id={props.id}
				type={props.type}
				name="input"
				placeholder={props.placeholder}
				className={`${
					!inputState.isValid &&
					inputState.isTouched &&
					"border border-red-500 bg-red-100"
				} p-2 rounded-sm`}
				onChange={changeHandler}
				value={inputState.value}
				onBlur={touchHandler}
			/>
		) : (
			<textarea
				id={props.id}
				name="text"
				rows={props.rows || 3}
				placeholder={props.placeholder}
				className={`${
					!inputState.isValid &&
					inputState.isTouched &&
					"border border-red-500 bg-red-100"
				} p-2 rounded-sm min-h-[150px]`}
				onChange={changeHandler}
				value={inputState.value}
				onBlur={touchHandler}
			/>
		);

	return (
		<div className="flex flex-col flex-wrap gap-2">
			<label htmlFor={props.id} className="font-semibold">
				{props.label}
			</label>
			{element}
			{!inputState.isValid && inputState.isTouched && (
				<p className="text-red-500">{props.errorText}</p>
			)}
		</div>
	);
};

export default Input;
