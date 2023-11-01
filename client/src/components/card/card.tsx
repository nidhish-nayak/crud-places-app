import React from "react";
import { CARD_CHILDREN_TYPES } from "./card.types";

const Card: React.FC<CARD_CHILDREN_TYPES> = ({ children }) => {
	return (
		<li className="w-64 m-2 text-white rounded-md cursor-pointer drop-shadow-sm bg-gradient-to-r from-gray-900 to-neutral-700 sm:w-72">
			{children}
		</li>
	);
};

export default Card;
