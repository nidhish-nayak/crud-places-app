import { Outlet } from "react-router-dom";

import Hamburger from "../hamburger/hamburger";
import NavLinks from "./navlinks";

const Navbar = () => {
	return (
		<div>
			<nav className="flex items-center justify-between p-2">
				<a href="/">
					<img
						className="object-scale-down h-8 w-min sm:w-max sm:mx-0 sm:p-4 sm:h-16"
						src="../../../logo-light.svg"
						alt="Logo"
					/>
				</a>
				<ul className="items-center hidden font-sans sm:justify-center sm:m-2 sm:flex">
					<NavLinks to="/places/new">+ Create</NavLinks>
					<NavLinks to="/u1/places">Places</NavLinks>
					<NavLinks to="/">Users</NavLinks>
					<NavLinks to="/auth">Login</NavLinks>
				</ul>
				<Hamburger />
			</nav>
			<Outlet />
		</div>
	);
};

export default Navbar;
