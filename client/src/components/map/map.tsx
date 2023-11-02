import React from "react";
import { MAP_PROPS_TYPES } from "./map.types";

const Map: React.FC<MAP_PROPS_TYPES> = (props) => {
	return <div>{props.lat}</div>;
};

export default Map;
