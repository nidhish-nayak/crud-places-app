import { Link, Outlet } from 'react-router-dom';
import './Navbar.styles.css';

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-logo">
                    <img className="navbar-img" src="https://img.icons8.com/fluency/96/null/ground-transportation.png" />
                    <h3 className="navbar-title">React 18.0v</h3>
                </div>
                <ul className="navbar-list">
                    <Link className="navbar-item" to="/">Home</Link>
                    <Link className="navbar-item" to="/user">User</Link>
                    <li className="navbar-item">About</li>
                    <li className="navbar-item">Help</li>
                </ul>
            </div>
            <Outlet />
        </div>
    )
}

export default Navbar;