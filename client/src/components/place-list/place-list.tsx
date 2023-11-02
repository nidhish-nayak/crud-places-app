import React from "react";

import PlaceItem from "../place-item/place-item";

import { PLACE_LIST_PROPS_TYPES } from "./place-list.types";

const PlaceList: React.FC<PLACE_LIST_PROPS_TYPES> = (props) => {
	if (props.items.length === 0) {
		return (
			<div>
				<h2>No places found</h2>
			</div>
		);
	} else
		return (
			<ul className="grid justify-center md:m-2 md:p-1 lg:m-4 lg:p-2 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
				{props.items.map((place) => (
					<PlaceItem
						key={place.id}
						id={place.id}
						imageUrl={place.imageUrl}
						title={place.title}
						description={place.description}
						address={place.address}
						creator={place.creator}
						location={place.location}
					/>
				))}
			</ul>
		);
};

export default PlaceList;
