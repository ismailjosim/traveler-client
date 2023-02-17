import React from 'react'
import Activity from './HomeSections/Activity'
import Gallery from './HomeSections/Gallery'
import Featured from './HomeSections/Featured'
import Hero from './HomeSections/Hero'
import TopPackages from './HomeSections/TopPackages'
import Partners from './HomeSections/Partners'
import TopDeals from './HomeSections/TopDeals'
import HolidayForm from './HomeSections/HolidayForm';
import CTA from './HomeSections/CTA'
import Reviews from './HomeSections/Reviews'
import TopDestinations from './HomeSections/TopDestinations'

const Homepage = () => {
	return (
		<>
			<Hero />
			<HolidayForm />
			<Featured />
			<TopDestinations />
			<TopPackages />
			<Gallery />
			<Activity />
			<TopDeals />
			<Reviews />
			<CTA />
			<Partners />
		</>
	)
}

export default Homepage
