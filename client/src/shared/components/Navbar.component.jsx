import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className='flex items-center justify-between p-2 bg-gray-900'>
                <div className='flex items-center'>
                    <img width="54" height="54" className="p-2 ml-4 sm:ml-2 sm:p-1" src="https://img.icons8.com/cute-clipart/64/beach-umbrella.png" alt="beach-umbrella" />
                    <h1 className='pl-2 text-sm font-bold text-white font-title sm:pl-1 lg:text-2xl lg:mx-4'>My Posts</h1>
                </div>
                <ul className='flex font-sans text-gray-100'>
                    <Link className="p-2 mx-3 text-sm font-semibold transition-all duration-300 ease-linear rounded-md cursor-pointer lg:font-bold lg:text-lg drop-shadow-xl hover:bg-teal-700 lg:mx-5 lg:py-2 lg:px-3" to="/">Home</Link>
                    <Link className="p-2 mx-3 text-sm font-semibold transition-all duration-300 ease-linear rounded-md cursor-pointer lg:font-bold lg:text-lg drop-shadow-xl hover:bg-teal-700 lg:mx-5 lg:py-2 lg:px-3" to="/user">Users</Link>
                </ul>
            </div>
            <Outlet />
        </div>
    )
}

export default Navbar;