import { useParams } from "react-router-dom";

const UpdatePlace = () => {
	const placeId = useParams().placeId;
	return <div>Update Place: {placeId}</div>;
};

export default UpdatePlace;
