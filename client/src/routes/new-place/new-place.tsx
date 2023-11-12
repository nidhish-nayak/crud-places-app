import { useCallback } from "react";

import Input from "../../components/input/input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../utils/validators";

const NewPlace = () => {
	const titleInputHandler = useCallback((id, value, isValid) => {}, []);
	const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);

	return (
		<section className="flex flex-col gap-8 p-1 m-2">
			<h1 className="text-xl font-semibold">Create New Place</h1>
			<form
				action=""
				className="flex flex-col max-w-xl gap-2 p-4 text-lg rounded-md bg-zinc-200"
			>
				<Input
					id="input"
					element="input"
					label="Title"
					placeholder="Enter here..."
					errorText="Please enter a valid title."
					validators={[VALIDATOR_REQUIRE()]}
					onInput={titleInputHandler}
				/>
				<Input
					id="description"
					element="textarea"
					label="Description"
					placeholder="Text here..."
					errorText="Please enter a valid message with 5 or more characters!"
					validators={[VALIDATOR_MINLENGTH(5)]}
					onInput={descriptionInputHandler}
				/>
			</form>
		</section>
	);
};

export default NewPlace;
