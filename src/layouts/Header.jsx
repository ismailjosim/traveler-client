import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
// import { AuthContext } from '../Contexts/AuthProvider';

const Header = () => {
	// const { user, userLogout } = useContext(AuthContext);
	const [setIsActive] = useState('/')

	const menuItems = (
		<>
			<li>
				<NavLink
					className='hover:text-white hover:bg-primary uppercase font-semibold transition-all duration-500 rounded-lg'
					to='/'
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					className='hover:text-white hover:bg-primary uppercase font-semibold transition-all duration-500 rounded-lg'
					to='/about'
				>
					About
				</NavLink>
			</li>
			<li>
				<NavLink
					className='hover:text-white hover:bg-primary uppercase font-semibold transition-all duration-500 rounded-lg'
					to='/destination'
				>
					Destination
				</NavLink>
			</li>
			<li>
				<NavLink
					className='hover:text-white hover:bg-primary uppercase font-semibold transition-all duration-500 rounded-lg'
					to='/packages'
				>
					Packages
				</NavLink>
			</li>
			<li>
				<NavLink
					className='hover:text-white hover:bg-primary uppercase font-semibold transition-all duration-500 rounded-lg'
					to='/blog'
				>
					blog
				</NavLink>
			</li>
			<li>
				<NavLink
					className='hover:text-white hover:bg-primary uppercase font-semibold transition-all duration-500 rounded-lg'
					to='/contact'
				>
					Contact Us
				</NavLink>
			</li>
			<li>
				<NavLink
					className='hover:text-white hover:bg-primary uppercase font-semibold transition-all duration-500 rounded-lg'
					to='/faq'
				>
					FAQs
				</NavLink>
			</li>
			<li>
				<NavLink
					className='hover:text-white hover:bg-primary uppercase font-semibold transition-all duration-500 rounded-lg'
					to='/cart'
				>
					Cart
				</NavLink>
			</li>
			<li>
				<NavLink
					className='hover:text-white hover:bg-primary uppercase font-semibold transition-all duration-500 rounded-lg'
					to='/login'
				>
					login/register
				</NavLink>
			</li>
		</>
	)

	return (
		<header>
			<div className='navbar font-semibold p-0 w-11/12 mx-auto'>
				<div className='navbar-start'>
					<Link
						onClick={ () => setIsActive('/') }
						className='text-2xl font-extrabold uppercase'
						to='/'
					>
						Traveler
					</Link>
				</div>
				<div className='navbar-end'>
					<div className='navbar-center hidden lg:flex'>
						<ul className='menu menu-horizontal p-0 gap-3'>{ menuItems }</ul>
					</div>
					<div className='dropdown dropdown-bottom dropdown-end'>
						<label tabIndex={ 0 } className='btn btn-ghost lg:hidden'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								className='w-6 h-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
								/>
							</svg>
						</label>
						<ul className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
							{ menuItems }
						</ul>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
