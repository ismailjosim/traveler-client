import PageHeading from '../utilities/PageHeading'
import Partners from '../components/Home/HomeSections/Partners'
import Questions from '../components/FAQs/Questions'
import SubmitQuestion from '../components/FAQs/SubmitQuestion'

const FAQs = () => {
	return (
		<div>
			<PageHeading headTitle={ 'faq' }></PageHeading>
			<Questions></Questions>
			<SubmitQuestion></SubmitQuestion>
			<Partners />
		</div>
	)
}

export default FAQs
