import { useQuery } from '@tanstack/react-query'
import React from 'react'
import '../../../styles/Custom.css'
import DestinationCard from './DestinationCard'


const AllDestinations = () => {
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
			<div className='w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
				{
					destinations.map((item) => <DestinationCard item={ item } key={ item._id } />)
				}
			</div>
		</div>
	)
}

export default AllDestinations
