import React from 'react'
import img01 from '../../../assets/destinations/destination1.jpg'
import '../../../styles/Custom.css'
import SectionHeading from '../../../utilities/SectionHeading'

const AllDestinations = () => {
	const heading = {
		subHeading: 'Top Destinations',
		headingOne: 'Explore',
		headingTwo: 'Top Destinations',
		describe:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
	}

	return (
		<div className='mb-10'>
			<SectionHeading heading={heading} />
			<div className='w-11/12 mx-auto grid lg:grid-cols-3'>
				<div class='destination_item'>
					<div className='transition-all relative rounded-xl ease-in-out duration-500 overflow-hidden'>
						<img
							className='transition-all ease-in-out duration-500 flex w-full'
							src={img01}
							alt='image'
						/>
						<div class='trend-content flex items-center justify-between absolute bottom-0 p-6 w-full z-[1]'>
							<div class='trend-content-title'>
								<h5 class='mb-0'>
									<a href='destination-detail.html' class='text-secondary'>
										Italy
									</a>
								</h5>
								<h3 class='mb-0 text-white text-2xl font-bold capitalize '>
									Caspian Valley
								</h3>
							</div>
							<span class='text-white bg-primary p-1 px-2 rounded-md'>
								18 Tours
							</span>
						</div>
						<div
							class='color-overlay absolute left-0 bottom-0 h-1/2 w-full opacity-60 transition-all ease-in-out duration-500
						bg-gradient-to-b from-transparent to-slate-900
						'
						></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AllDestinations
