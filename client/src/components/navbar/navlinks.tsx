import { Link, useLocation } from "react-router-dom";

import { NAVBAR_PROPS_TYPES } from "./navbar.types";

const NavLinks = (props: NAVBAR_PROPS_TYPES) => {
	const location = useLocation();
	const isLinkActive = location.pathname === props.to;

	return (
		<Link
			className={
				` ${
					props.children === "Login"
						? "bg-teal-700 text-white hover:bg-teal-950 mx-3 "
						: "text-gray-900 hover:text-gray-100 hover:bg-teal-700 "
				}` +
				`relative flex items-center justify-center p-2 text-sm font-semibold transition-all duration-200 ease-linear rounded cursor-pointer lg:text-base lg:py-2 lg:px-3 `
			}
			to={props.to}
		>
			{props.children}
			<div
				className={
					isLinkActive ? "h-[2px] bottom-0 bg-teal-700 w-[75%] absolute" : ""
				}
			/>
		</Link>
	);
};

export default NavLinks;
