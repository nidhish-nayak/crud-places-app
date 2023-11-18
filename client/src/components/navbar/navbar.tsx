import { Outlet } from "react-router-dom";

import Hamburger from "../hamburger/hamburger";
import NavLinks from "./navlinks";

const Navbar = () => {
	return (
		<div>
			<nav className="flex items-center justify-between p-2">
				<a href="/">
					<img
						className="object-scale-down h-10 ml-1 w-min sm:w-max sm:mx-0 lg:h-12"
						src="/logo.png"
						alt="Logo"
					/>
				</a>
				<ul className="items-center hidden gap-4 font-sans sm:justify-center sm:m-2 sm:flex">
					<NavLinks to="/places/new">
						<span className="mr-[2px]">+</span>Create
					</NavLinks>
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
