import React from 'react'
import Activity from './HomeSections/Activity'
import Destination from './HomeSections/Destination'
import Featured from './HomeSections/Featured'
import Hero from './HomeSections/Hero'
import Packages from './HomeSections/Packages'
import Partners from './HomeSections/Partners'
import TopDeals from './HomeSections/TopDeals'

const Homepage = () => {
	return (
		<div>
			<Hero />
			<Featured />
			<Destination />
			<Packages />
			<Activity />
			<TopDeals />
			<Partners />
		</div>
	)
}

export default Homepage
