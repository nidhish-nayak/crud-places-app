import React, { useEffect, useRef } from "react";
import { MAP_PROPS_TYPES } from "./map.types";

const Map: React.FC<MAP_PROPS_TYPES> = (props) => {
	const mapRef = useRef<HTMLDivElement | null>(null);
	const { location, zoom } = props;

	useEffect(() => {
		const map = new window.google.maps.Map(mapRef.current!, {
			center: location,
			zoom: zoom,
		});

		new window.google.maps.Marker({ position: location, map: map });
	}, [location, zoom]);

	return (
		<div ref={mapRef} className="w-full rounded-md h-[240px] md:h-[300px]" />
	);
};
export default Map;
