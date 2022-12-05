import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const Header = () => {
    const { user, userLogout } = useContext(AuthContext);

    const handleUserLogout = () => {
        userLogout().then(result => { }).catch(error => console.log(error.message))
    }

    // <li><Link className='hover:btn-secondary rounded-md hover:text-white' to='/about'>About</Link></li>
    // <li><Link className='hover:btn-secondary rounded-md hover:text-white' to='/reviews'>Reviews</Link></li>


    const menuItems = <>
        <li><Link className='hover:btn-secondary rounded-md hover:text-white' to='/'>Home</Link></li>
        <li><Link className='hover:btn-secondary rounded-md hover:text-white' to='/appointment'>Appointment</Link></li>
        <li><Link className='hover:btn-secondary rounded-md hover:text-white' to='/contact'>Contact Us</Link></li>
        {user?.uid ?
            <>
                <li><p className='uppercase'>{user.displayName}</p></li>
                <li><Link className='hover:btn-secondary rounded-md hover:text-white' to='/dashboard'>Dashboard</Link></li>
                <li><button onClick={handleUserLogout} className='hover:btn-secondary btn-primary text-white rounded-md'>Logout</button></li>
            </> :
            <li><Link className='hover:btn-secondary rounded-md hover:text-white' to='/login'>Login</Link></li>
        }
    </>




    return (
        <header>
            <div className="navbar font-semibold lg:w-11/12 mx-auto">
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </label>
                <div className="navbar-start">
                    <Link className='text-2xl' to='/'>DR. Portal</Link>
                </div>
                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0 gap-3">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </label>
                        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
