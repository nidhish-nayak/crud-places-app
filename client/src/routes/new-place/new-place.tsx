import Input from "../../components/input/input";

const NewPlace = () => {
	return (
		<section className="flex flex-col gap-8 p-1 m-2">
			<h1 className="text-xl font-semibold">Create New Place</h1>
			<form
				action=""
				className="flex flex-col max-w-xl gap-2 p-4 text-lg rounded-md bg-zinc-300"
			>
				<Input
					id="input"
					element="input"
					type="text"
					label="Title"
					placeholder="Enter here..."
				/>
				<Input
					id="text"
					type="text"
					label="Message"
					placeholder="Text here..."
				/>
			</form>
		</section>
	);
};

export default NewPlace;
