import React from 'react'
import { BsCalendar3, BsStarFill } from 'react-icons/bs'

const TopDeals = () => {
	return (
		<div className='w-11/12 mx-auto my-5'>
			<div className='card image-full'>
				<figure>
					<img
						className='w-full'
						src='https://placeimg.com/400/225/arch'
						alt='Shoes'
					/>
				</figure>
				<div className='card-body justify-end'>
					<div className='card-actions flex-col justify-start items-start'>
						<h2 className='text-xl text-secondary font-medium'>Norway</h2>
						<h3 className='text-2xl font-semibold'>Norway Lake</h3>
						<div className='flex gap-1 items-center text-secondary text-lg'>
							<BsStarFill />
							<BsStarFill />
							<BsStarFill />
							<BsStarFill />
							<BsStarFill />
							<span className='text-white'>(20)</span>
						</div>
						<hr />
						<div className='card-actions justify-start py-2'>
							<p className='text-white font-medium'>
								<span className='text-secondary font-bold'>$180.00</span>
								<span className='mx-1'>|</span>
								<span>Per Person</span>
							</p>
						</div>
						<p className='flex items-center gap-1 font-semibold text-xl text-white'>
							<BsCalendar3 />
							<span>9 Days Tours</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TopDeals
