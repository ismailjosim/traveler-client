import React from 'react';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../Contexts/AuthProvider';

const Header = () => {
    // const { user, userLogout } = useContext(AuthContext);


    const menuItems = <>
        <li><Link className='hover:text-primary uppercase hover:bg-transparent font-semibold' to='/'>Home</Link></li>
        <li><Link className='hover:text-primary uppercase hover:bg-transparent font-semibold' to='/about'>About</Link></li>
        <li><Link className='hover:text-primary uppercase hover:bg-transparent font-semibold' to='/destination'>Destination</Link></li>
        <li><Link className='hover:text-primary uppercase hover:bg-transparent font-semibold' to='/blog'>blog</Link></li>
        <li><Link className='hover:text-primary uppercase hover:bg-transparent font-semibold' to='/contact'>Contact Us</Link></li>
        <li><Link className='hover:text-primary uppercase hover:bg-transparent font-semibold' to='/faq'>FAQs</Link></li>
        <li><Link className='hover:text-primary uppercase hover:bg-transparent font-semibold' to='/login'>login/register</Link></li>

    </>


    return (
        <header>
            <div className="navbar font-semibold p-0 lg:w-11/12 mx-auto">
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </label>
                <div className="navbar-start">
                    <Link className='text-2xl font-extrabold uppercase' to='/'>Traveler</Link>
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
