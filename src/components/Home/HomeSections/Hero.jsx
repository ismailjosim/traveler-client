import React from 'react'
import slideImg01 from '../../../assets/homepage/slide01.jpg'
import slideImg02 from '../../../assets/homepage/slide02.jpg'
import SingleSlide from './SingleSlide'

const slides = [
	{
		id: 1,
		prev: 4,
		next: 2,
		picture: slideImg01,
		subHeading: 'Amazing Places',
		heading: 'Make Your Trip Fun & Noted',
		description:
			'Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea ipsum ad arcu. Nostrud. Aut nostrum, ornare quas provident laoreet nesciunt.',
		btnText: 'Get Started',
	},
	{
		id: 2,
		prev: 1,
		next: 3,
		picture: slideImg02,
		subHeading: 'Amazing Places',
		heading: 'Make Your Trip Fun & Noted',
		description:
			'Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea ipsum ad arcu. Nostrud. Aut nostrum, ornare quas provident laoreet nesciunt.',
		btnText: 'Get Started',
	},
	{
		id: 3,
		prev: 2,
		next: 4,
		picture: slideImg01,
		subHeading: 'Amazing Places',
		heading: 'Make Your Trip Fun & Noted',
		description:
			'Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea ipsum ad arcu. Nostrud. Aut nostrum, ornare quas provident laoreet nesciunt.',
		btnText: 'Get Started',
	},
	{
		id: 4,
		prev: 3,
		next: 1,
		picture: slideImg02,
		subHeading: 'Amazing Places',
		heading: 'Make Your Trip Fun & Noted',
		description:
			'Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea ipsum ad arcu. Nostrud. Aut nostrum, ornare quas provident laoreet nesciunt.',
		btnText: 'Get Started',
	},
]

const Hero = () => {
	return (
		<div className='carousel w-full'>
			{slides.map((slide, id) => (
				<SingleSlide key={id} slide={slide}></SingleSlide>
			))}
		</div>
	)
}

export default Hero
