import Input from "../../components/input/input";
import { VALIDATOR_REQUIRE } from "../../utils/validators";

const NewPlace = () => {
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
					type="text"
					label="Title"
					placeholder="Enter here..."
					errorText="Please enter a valid title."
					validators={[VALIDATOR_REQUIRE()]}
				/>
				<Input
					id="text"
					type="text"
					label="Message"
					placeholder="Text here..."
					errorText="Please enter a valid message."
					validators={[VALIDATOR_REQUIRE()]}
				/>
			</form>
		</section>
	);
};

export default NewPlace;
