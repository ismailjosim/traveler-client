
import Gallery from '../components/Home/HomeSections/Gallery'
import Featured from '../components/Home/HomeSections/Featured'
import Hero from '../components/Home/HomeSections/Hero'
import TopPackages from '../components/Home/HomeSections/TopPackages'
import Partners from '../components/Home/HomeSections/Partners'
import TopDeals from '../components/Home/HomeSections/TopDeals'
import HolidayForm from '../components/Home/HomeSections/HolidayForm';
import CTA from '../components/Home/HomeSections/CTA'
import Reviews from '../components/Home/HomeSections/Reviews'
import TopDestinations from '../components/Home/HomeSections/TopDestinations'
import Activity from '../components/Home/HomeSections/Activity'

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
