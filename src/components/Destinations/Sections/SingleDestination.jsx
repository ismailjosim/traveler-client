import React from 'react'
import { BiCheck, BiMap } from 'react-icons/bi'
import { BsFillStarFill } from 'react-icons/bs'
import imgDetails from '../../../assets/destinations/trending-large.jpg'
import PageHeading from '../../../utilities/PageHeading'

const SingleDestination = () => {
	return (
		<div>
			<PageHeading headTitle={'Bangkok - Thailand'} />
			<div className='w-11/12 mx-auto grid lg:grid-cols-3 gap-5'>
				<div className='bg-primary col-span-2'>
					<h2>Bangkok Thailand</h2>
					<div className='flex gap-2 items-center'>
						<BiMap className='inline-block' />
						<span>Greater London, United Kingdom</span>
						<p className='flex gap-1 text-secondary text-xl'>
							<BsFillStarFill />
							<BsFillStarFill />
							<BsFillStarFill />
							<BsFillStarFill />
							<BsFillStarFill />
						</p>
						<span>(1,186 Reviews)</span>
					</div>
					<div>
						<img src={imgDetails} alt='' />
					</div>
					<div className=''>
						<h4>Description</h4>
						<p>
							Lorem ipsum, or lipsum as it is sometimes known, is dummy text
							used in laying out print, graphic or web designs. The passage is
							attributed to an unknown typesetter in the 15th century who is
							thought to have scrambled parts of Cicero's De Finibus Bonorum et
							Malorum for use in a type specimen book.Lorem ipsum, or lipsum as
							it is sometimes known, is dummy text used in laying out print,
							graphic or web designs.
						</p>
						<br />
						<p>
							The passage is attributed to an unknown typesetter in the 15th
							century who is thought to have scrambled parts of Cicero's De
							Finibus Bonorum et Malorum for use in a type specimen book.
						</p>
						<div>
							<div>
								<h4>Price Includes</h4>
								<ul>
									<li>
										<BiCheck />
										<span>Air Fares</span>
									</li>
									<li>
										<BiCheck />
										<span>3 Nights Hotel Accommodation</span>
									</li>
									<li>
										<BiCheck />
										<span>Tour Guide</span>
									</li>
									<li>
										<BiCheck />
										<span>Entrance Fees</span>
									</li>
								</ul>
							</div>
							<div>
								<h4>Price Includes</h4>
								<ul>
									<li>
										<BiCheck />
										<span>Air Fares</span>
									</li>
									<li>
										<BiCheck />
										<span>3 Nights Hotel Accommodation</span>
									</li>
									<li>
										<BiCheck />
										<span>Tour Guide</span>
									</li>
									<li>
										<BiCheck />
										<span>Entrance Fees</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div>
						<div>
							<img src={imgDetails} alt='' />
						</div>
						<div>
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
