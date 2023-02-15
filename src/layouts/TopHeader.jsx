import React from 'react'
import moment from 'moment';
import { BsCalendar3, BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const TopHeader = () => {
	return (
		<div className='hidden lg:block bg-primary text-white py-2'>
			<div className='w-11/12 mx-auto flex justify-between py-1'>
				<div className='flex gap-2'>
					<div className='flex items-center gap-2 border-r-2 pr-2 border-white text-sm'>
						<BsCalendar3 />
						<span>{ moment().format('dddd') }</span>
					</div>
					<div className='flex items-center gap-2 text-sm'>
						<span>{ moment().format('LL') }</span>
					</div>
				</div>
				<div className='flex gap-5 items-center text-white text-lg'>
					<div className='border-r pr-3 border-white hover:text-secondary transition duration-30'>
						<BsFacebook />
					</div>
					<div className='border-r pr-3 border-white hover:text-secondary transition duration-30'>
						<BsTwitter />
					</div>
					<div className='border-r pr-3 border-white hover:text-secondary transition duration-300'>
						<BsInstagram />
					</div>
					<div className='hover:text-secondary transition duration-300'>
						<BsLinkedin />
					</div>
				</div>
			</div>
		</div>
	)
}

export default TopHeader
