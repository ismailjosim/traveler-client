import React from 'react'
import SectionHeading from './../../../utilities/SectionHeading'

import img01 from '../../../assets/destinations/destination1.jpg'
import img02 from '../../../assets/destinations/destination2.jpg'
import img03 from '../../../assets/destinations/destination15.jpg'
import img04 from '../../../assets/destinations/destination16.jpg'

const Destination = () => {
	const heading = {
		subHeading: 'Photo Gallery',
		headingOne: "Photo's From",
		headingTwo: 'Travelers',
		describe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
	}

	return (
		<section >
			<SectionHeading heading={ heading } />
			<div className="overflow-hidden">
				<div className="w-11/12 mx-auto px-5 mb-20">
					<div className="flex flex-wrap -m-1 md:-m-2">
						<div className="flex flex-wrap w-1/2">
							<div className="w-1/2 p-1 md:p-2">
								<img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
									src={ "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" } />
							</div>
							<div className="w-1/2 p-1 md:p-2">
								<img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
									src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
							</div>
							<div className="w-full p-1 md:p-2">
								<img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
									src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
							</div>
						</div>
						<div className="flex flex-wrap w-1/2">
							<div className="w-full p-1 md:p-2">
								<img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
									src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
							</div>
							<div className="w-1/2 p-1 md:p-2">
								<img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
									src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
							</div>
							<div className="w-1/2 p-1 md:p-2">
								<img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
									src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Destination
