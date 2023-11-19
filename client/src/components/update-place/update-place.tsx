import { useParams } from "react-router-dom";

import { DUMMY_PLACES } from "../../routes/user-place/data";
import { VALIDATOR_REQUIRE } from "../../utils/validators";
import Input from "../input/input";

const UpdatePlace = () => {
	const placeId = useParams().placeId;
	const identifiedPlace = DUMMY_PLACES.find((place) => place.id === placeId);

	if (!identifiedPlace) {
		return (
			<div className="flex justify-center text-center">
				<h2 className="text-xl">Could not find the place!</h2>
			</div>
		);
	}

	return (
		<form>
			<Input
				id="title"
				element="input"
				type="text"
				label="Title"
				validators={[VALIDATOR_REQUIRE()]}
				errorText="Please enter a valid title"
				value="{identifiedPlace.title}"
			/>
		</form>
	);
};

export default UpdatePlace;
