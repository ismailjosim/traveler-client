
import PageHeading from '../utilities/PageHeading'
import CTA from '../components/Home/HomeSections/CTA'
import Stars from '../components/Shared/Stars'
import AllDestinations from '../components/Destinations/Sections/AllDestinations'

const Destinations = () => {
	return (
		<div>
			<PageHeading headTitle={ 'destination list' } />
			<AllDestinations />
			<Stars />
			<CTA />
		</div>
	)
}

export default Destinations
