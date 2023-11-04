import React from "react";
import { INPUT_PROPS_TYPES } from "./input.types";

const Input: React.FC<INPUT_PROPS_TYPES> = (props) => {
	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		return event;
	};

	const element =
		props.element === "input" ? (
			<input
				id={props.id}
				type={props.type}
				placeholder={props.placeholder}
				className="p-2 rounded-sm"
				onChange={changeHandler}
			/>
		) : (
			<textarea
				id={props.id}
				rows={props.rows || 3}
				placeholder={props.placeholder}
				className="p-2 rounded-sm min-h-[200px]"
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
