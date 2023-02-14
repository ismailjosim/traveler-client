import { useQuery } from '@tanstack/react-query';
import React from 'react'
import '../../../styles/Custom.css'
import TourCard from '../../TourPackages/TourSections/TourCard';
import SectionHeading from './../../../utilities/SectionHeading';
const Packages = () => {


	const heading = {
		subHeading: 'Top Pick',
		headingOne: "Best",
		headingTwo: 'Tour Packages',
		describe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
	}
	const { data: packages = [] } = useQuery({
		queryKey: ['packages'],
		queryFn: async () => {
			const res = await fetch(
				'https://travel-server-woad.vercel.app/packages',
			)
			const data = await res.json()
			return data?.packages
		},
	})
	return (
		<section>
			<SectionHeading heading={ heading }></SectionHeading>
			<div className='w-11/12 mx-auto'>
				{
					packages.slice(0, 3).map((item, idx) => <TourCard key={ idx } item={ item } />)
				}
			</div>
		</section>
	)
}

export default Packages
