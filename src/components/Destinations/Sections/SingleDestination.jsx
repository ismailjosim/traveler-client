import React from 'react'
import { BiMap } from 'react-icons/bi'
import { BsFillStarFill } from 'react-icons/bs'
import { GoCheck } from 'react-icons/go'
import { RxCross2 } from 'react-icons/rx'
import imgDetails from '../../../assets/destinations/trending-large.jpg'
import PageHeading from '../../../utilities/PageHeading'

const SingleDestination = () => {
	return (
		<div>
			<PageHeading headTitle={'Bangkok - Thailand'} />
			<div className='w-11/12 mx-auto grid lg:grid-cols-3 gap-5 mt-5'>
				<div className='col-span-2'>
					<h2 className='text-5xl capitalize font-semibold'>
						Bangkok Thailand
					</h2>
					<div className='flex gap-2 items-center mt-3 mb-5 text-accent'>
						<BiMap className='inline-block text-base' />
						<span className='text-base'>Greater London, United Kingdom</span>
						<p className='flex gap-1 text-secondary text-xl'>
							<BsFillStarFill />
							<BsFillStarFill />
							<BsFillStarFill />
							<BsFillStarFill />
							<BsFillStarFill />
						</p>
						<span>(1,186 Reviews)</span>
					</div>
					<div className='w-full rounded-lg overflow-hidden'>
						<img className='w-full' src={imgDetails} alt='' />
					</div>
					<div className='my-5'>
						<h4 className='text-xl font-semibold my-5'>Description</h4>
						<p className=''>
							Lorem ipsum, or lipsum as it is sometimes known, is dummy text
							used in laying out print, graphic or web designs. The passage is
							attributed to an unknown typesetter in the 15th century who is
							thought to have scrambled parts of Cicero's De Finibus Bonorum et
							Malorum for use in a type specimen book.Lorem ipsum, or lipsum as
							it is sometimes known, is dummy text used in laying out print,
							graphic or web designs.
						</p>
						<p className='my-5'>
							The passage is attributed to an unknown typesetter in the 15th
							century who is thought to have scrambled parts of Cicero's De
							Finibus Bonorum et Malorum for use in a type specimen book.
						</p>
						<div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>
							<div className='bg-slate-100 rounded-xl p-5'>
								<h4 className='text-xl font-medium mb-4'>Price Includes</h4>
								<ul className='flex flex-col gap-2'>
									<li className='flex items-center gap-1'>
										<GoCheck className='text-xl' />
										<span>Air Fares</span>
									</li>
									<li className='flex items-center gap-1'>
										<GoCheck className='text-xl' />
										<span>3 Nights Hotel Accommodation</span>
									</li>
									<li className='flex items-center gap-1'>
										<GoCheck className='text-xl' />
										<span>Tour Guide</span>
									</li>
									<li className='flex items-center gap-1'>
										<GoCheck className='text-xl' />
										<span>Entrance Fees</span>
									</li>
								</ul>
							</div>
							<div className='bg-slate-100 rounded-xl p-5'>
								<h4 className='text-xl font-medium mb-4'>
									Departure & Return Location
								</h4>
								<ul className='flex flex-col gap-2'>
									<li className='flex items-center gap-1'>
										<RxCross2 className='text-xl' />
										<span>Guide Service Fee</span>
									</li>
									<li className='flex items-center gap-1'>
										<RxCross2 className='text-xl' />
										<span>3 Nights Hotel Accommodation</span>
									</li>
									<li className='flex items-center gap-1'>
										<RxCross2 className='text-xl' />
										<span>Tour Guide</span>
									</li>
									<li className='flex items-center gap-1'>
										<RxCross2 className='text-xl' />
										<span>Entrance Fees</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<h4 className='text-2xl font-bold my-4'>Gallery</h4>
					<div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>
						<div className='w-full rounded-lg overflow-hidden'>
							<img src={imgDetails} alt='' />
						</div>
						<div className='w-full rounded-lg overflow-hidden'>
							<img src={imgDetails} alt='' />
						</div>
					</div>
				</div>
				<div className='bg-secondary col-span-1'>row01</div>
			</div>
		</div>
	)
}

export default SingleDestination
