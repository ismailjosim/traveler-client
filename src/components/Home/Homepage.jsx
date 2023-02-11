import React from 'react'
import Activity from './HomeSections/Activity'
import Gallery from './HomeSections/Gallery'
import Featured from './HomeSections/Featured'
import Hero from './HomeSections/Hero'
import Packages from './HomeSections/Packages'
import Partners from './HomeSections/Partners'
import TopDeals from './HomeSections/TopDeals'
import HolidayForm from './HomeSections/HolidayForm';
import CTA from './HomeSections/CTA'
import Reviews from './HomeSections/Reviews'
import Offers from '../Offers/Offers'

const Homepage = () => {
	return (
		<div>
			<Hero />
			<HolidayForm />

			<Featured />
			<Offers />
			<Packages />
			<Gallery />
			<Activity />
			<TopDeals />
			<Reviews />
			<CTA />
			<Partners />
		</div>
	)
}

export default Homepage
