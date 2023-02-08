import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'
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

	const { data: destinations = [] } = useQuery({
		queryKey: ['destinations'],
		queryFn: async () => {
			const res = await fetch(
				'https://travel-server-woad.vercel.app/destinations',
			)
			const data = await res.json()
			return data?.destinations
		},
	})

	return (
		<div className='mb-10'>
			<SectionHeading heading={ heading } />
			<div className='w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
				{ destinations.map((item) => {
					const { _id, country, place, tourPlace, thumbnail, placeId } = item
					return (
						<Link to={ `/destination/${ placeId }` } key={ _id } className='destination_item'>
							<div className='transition-all relative rounded-xl ease-in-out duration-500 overflow-hidden'>
								<img
									className='transition-all ease-in-out duration-500 w-full'
									src={ thumbnail }
									alt='destination'
								/>
								<div className='trend-content flex items-center justify-between absolute bottom-0 p-6 w-full z-[1]'>
									<div className='trend-content-title'>
										<h5 className='mb-0'>
											<a
												href='destination-detail.html'
												className='text-secondary'
											>
												{ country }
											</a>
										</h5>
										<h3 className='mb-0 text-white text-2xl font-bold capitalize '>
											{ place }
										</h3>
									</div>
									<span className='text-white bg-primary p-1 px-2 rounded-md'>
										{ tourPlace } Tours
									</span>
								</div>
								<div
									className='color-overlay absolute left-0 bottom-0 h-1/2 w-full opacity-60 transition-all ease-in-out duration-500
						bg-gradient-to-b from-transparent to-slate-900
						'
								></div>
							</div>
						</Link>
					)
				}) }
			</div>
		</div>
	)
}

export default AllDestinations
