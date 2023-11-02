import { Link, useLocation } from "react-router-dom";

import { NAVBAR_PROPS_TYPES } from "./navbar.types";

const NavLinks = (props: NAVBAR_PROPS_TYPES) => {
	const location = useLocation();
	const isLinkActive = location.pathname === props.to;

	return (
		<Link
			className={
				` ${
					props.children === "+ Create"
						? "text-white bg-teal-700 hover:bg-teal-200 hover:text-gray-900 "
						: "text-gray-900 hover:text-gray-100 hover:bg-teal-700 "
				}` +
				`relative flex items-center justify-center p-2 mx-1 text-sm font-semibold transition-all duration-200 ease-linear rounded-md cursor-pointer sm:mx-3 lg:text-base drop-shadow-xl lg:mx-5 lg:py-2 lg:px-3 `
			}
			to={props.to}
		>
			{props.children}
			<div
				className={
					isLinkActive ? "h-[1px] bottom-0 bg-teal-700 w-[75%] absolute" : ""
				}
			/>
		</Link>
	);
};

export default NavLinks;
