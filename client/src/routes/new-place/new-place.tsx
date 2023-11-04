import Input from "../../components/input/input";

const NewPlace = () => {
	return (
		<section className="p-1 m-2 flex flex-col gap-8">
			<h1 className="text-xl font-semibold">Create New Place</h1>
			<form
				action=""
				className="flex flex-col bg-zinc-300 text-lg gap-2 p-4 max-w-xl rounded-md"
			>
				<Input
					element="input"
					type="text"
					label="Title"
					placeholder="Enter here..."
				/>
			</form>
		</section>
	);
};

export default NewPlace;
