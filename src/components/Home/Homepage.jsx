import React from 'react'
import Activity from './HomeSections/Activity'
import Destination from './HomeSections/Destination'
import Featured from './HomeSections/Featured'
import Hero from './HomeSections/Hero'
import Packages from './HomeSections/Packages'
import Partners from './HomeSections/Partners'
import TopDeals from './HomeSections/TopDeals'
import HolidayForm from './HomeSections/HolidayForm';
import CTA from './HomeSections/CTA'
import Reviews from './HomeSections/Reviews'

const Homepage = () => {
	return (
		<div>
			<Hero />
			<HolidayForm />
			<Featured />
			<Destination />
			<Packages />
			<Activity />
			<TopDeals />
			<Reviews />
			<CTA />
			<Partners />
		</div>
	)
}

export default Homepage
