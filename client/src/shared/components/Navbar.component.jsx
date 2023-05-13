import { Link, Outlet } from 'react-router-dom';
import Hamburger from './Hamburger.component';

const Navbar = () => {
    return (
        <div>
            <nav className='flex items-center justify-around p-2 sm:justify-between'>
                <img className="object-scale-down w-3/5 sm:w-max sm:mx-0 sm:p-4 h-14 sm:h-16" src="../../../logo-light.svg" alt="Logo" />
                <ul className='hidden font-sans sm:justify-center sm:m-2 sm:flex'>
                    <Link className="p-2 mx-1 text-sm font-semibold text-white transition-all ease-linear bg-teal-700 rounded-md cursor-pointer sm:mx-3 duration-250 lg:text-base drop-shadow-xl hover:bg-teal-200 hover:text-gray-900 lg:mx-5 lg:py-2 lg:px-3" to="/">Users</Link>
                    <Link className="p-2 mx-1 text-sm font-semibold text-gray-900 transition-all ease-linear rounded-md cursor-pointer sm:mx-3 duration-250 lg:text-base drop-shadow-xl hover:bg-teal-700 hover:text-gray-100 lg:mx-5 lg:py-2 lg:px-3" to="/u1/places">Places</Link>
                    <Link className="p-2 mx-1 text-sm font-semibold text-gray-900 transition-all ease-linear rounded-md cursor-pointer sm:mx-3 duration-250 lg:text-base drop-shadow-xl hover:bg-teal-700 hover:text-gray-100 lg:mx-5 lg:py-2 lg:px-3" to="/places/new">Create</Link>
                    <Link className="p-2 mx-1 text-sm font-semibold text-gray-900 transition-all ease-linear rounded-md cursor-pointer sm:mx-3 duration-250 lg:text-base drop-shadow-xl hover:bg-teal-700 hover:text-gray-100 lg:mx-5 lg:mr-11 lg:py-2 lg:px-3" to="/auth">Login</Link>
                </ul>
                <Hamburger />
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar;