import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div>
                <div>
                    <img src="https://img.icons8.com/bubbles/100/null/react.png" />
                    <h3 >React 18.0v</h3>
                </div>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/user">User</Link>
                    <li>About</li>
                    <li>Help</li>
                </ul>
            </div>
            <Outlet />
        </div>
    )
}

export default Navbar;