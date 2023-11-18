import { useParams } from "react-router-dom";

import PlaceList from "../../components/place-list/place-list";
import { DUMMY_PLACES } from "./data";

import { USER_PLACE_TYPES } from "./user-place.types";

const UserPlace = () => {
	// Using useParams to get the dynamic URL, then filter only the places which belongs to the user
	const { userId } = useParams();

	return (
		<PlaceList
			items={DUMMY_PLACES.filter((place: USER_PLACE_TYPES) => {
				return place.creator === userId;
			})}
		/>
	);
};

export default UserPlace;
