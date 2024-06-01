import PageHeading from '../utilities/PageHeading'
import Featured from '../components/Home/HomeSections/Featured'
import AboutPartners from '../components/About/AboutSection/AboutPartners'
import Explore from '../components/About/AboutSection/Explore'
import Testimonials from '../components/About/AboutSection/Testimonials'
import TourGuide from '../components/About/AboutSection/TourGuide'

const About = () => {
	return (
		<div>
			<PageHeading headTitle={ 'about us' }></PageHeading>
			<Explore />
			<Featured />
			<TourGuide />
			<Testimonials />
			<AboutPartners />
		</div>
	)
}

export default About
