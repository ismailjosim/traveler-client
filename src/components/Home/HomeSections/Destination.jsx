import React from 'react'
import SectionHeading from './../../../utilities/SectionHeading'

import img01 from '../../../assets/destinations/destination1.jpg'
import img03 from '../../../assets/destinations/destination15.jpg'
import img04 from '../../../assets/destinations/destination16.jpg'
import img02 from '../../../assets/destinations/destination2.jpg'

const Destination = () => {
	const heading = {
		subHeading: 'Photo Gallery',
		headingOne: "Photo's From",
		headingTwo: 'Travelers',
		describe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
	}

	return (
		<section>
			<SectionHeading heading={ heading } />
			<div className='w-11/12 mx-auto mb-10'>
				<div className='grid lg:grid-cols-3 md:grid-cols-3 gap-5'>
					<div className='grid grid-rows-2 grid-flow-col gap-4'>
						<div className='destination_item transition-all relative rounded-xl ease-in-out duration-500 overflow-hidden'>
							<img
								alt='gallery'
								className='w-full h-full object-cover object-center block rounded-lg transition-all ease-in-out duration-500'
								src={ img02 }
							/>

						</div>
						<div className='destination_item transition-all relative rounded-xl ease-in-out duration-500 overflow-hidden'>
							<img
								alt='gallery'
								className='bg-primary destination_item transition-all relative rounded-xl ease-in-out duration-500 overflow-hidden'
								src={ img02 }
							/>
						</div>
					</div>
					<div className='bg-primary destination_item transition-all relative rounded-xl ease-in-out duration-500 overflow-hidden'>
						<img
							alt='gallery'
							className='w-full h-full object-cover object-center block rounded-lg transition-all ease-in-out duration-500'
							src={ img02 }
						/>
					</div>
					<div className='grid grid-rows-2 grid-flow-col gap-4'>
						<div className='bg-primary destination_item transition-all relative rounded-xl ease-in-out duration-500 overflow-hidden'>
							<img
								alt='gallery'
								className='w-full h-full object-cover object-center block rounded-lg transition-all ease-in-out duration-500'
								src={ img02 }
							/>

						</div>
						<div className='bg-primary destination_item transition-all relative rounded-xl ease-in-out duration-500 overflow-hidden'>
							<img
								alt='gallery'
								className='w-full h-full object-cover object-center block rounded-lg transition-all ease-in-out duration-500'
								src={ img02 }
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Destination

	// <div div className = 'flex flex-wrap md:-m-2 -m-1' >
	// 					<div className='flex flex-wrap w-1/2'>
	// 						<div className='md:p-2 p-1 w-full'>
	// 							<img
	// 								alt='gallery'
	// 								className='w-full h-full object-cover object-center block rounded-lg'
	// 								src={ img02 }
	// 							/>
	// 						</div>
	// 						<div className='md:p-2 p-1 w-1/2'>
	// 							<img
	// 								alt='gallery'
	// 								className='w-full object-cover h-full object-center block rounded-lg'
	// 								src={ img03 }
	// 							/>
	// 						</div>
	// 						<div className='md:p-2 p-1 w-1/2'>
	// 							<img
	// 								alt='gallery'
	// 								className='w-full object-cover h-full object-center block rounded-lg'
	// 								src={ img04 }
	// 							/>
	// 						</div>
	// 					</div>
	// 					<div className='flex flex-wrap w-1/2'>
	// 						<div className='md:p-2 p-1 w-full'>
	// 							<img
	// 								alt='gallery'
	// 								className='w-full h-full object-cover object-center block rounded-lg'
	// 								src={ img01 }
	// 							/>
	// 						</div>
	// 					</div>
	// 				</div >
