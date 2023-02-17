import React, { useRef } from 'react'
import slideImg01 from '../../../assets/homepage/slide01.jpg'
import slideImg02 from '../../../assets/homepage/slide02.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../styles/Custom.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, EffectCreative, Navigation, Pagination } from "swiper";
import SingleSlide from './SingleSlide';

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
	const progressCircle = useRef(null);
	const progressContent = useRef(null);
	const onAutoplayTimeLeft = (s, time, progress) => {
		progressCircle.current.style.setProperty('--progress', 1 - progress);
		progressContent.current.textContent = `${ Math.ceil(time / 1000) }s`;
	};


	return (
		<Swiper
			spaceBetween={ 30 }
			centeredSlides={ true }
			autoplay={ {
				delay: 10000,
				disableOnInteraction: false,
			} }
			loop={ true }
			pagination={ { clickable: true } }
			navigation={ true }
			modules={ [Autoplay, Pagination, EffectCreative, Navigation] }
			onAutoplayTimeLeft={ onAutoplayTimeLeft }
			grabCursor={ true }
			effect={ "cards" }
			creativeEffect={ {
				prev: {
					shadow: true,
					translate: [0, 0, -400],
				},
				next: {
					translate: ["100%", 0, 0],
				},
			} }
		>
			{
				slides.map((slide, idx) => {
					return <SwiperSlide key={ idx }>
						<SingleSlide slide={ slide }></SingleSlide>
					</SwiperSlide>
				})

			}
			<div className="autoplay-progress" slot="container-end">
				<svg viewBox="0 0 48 48" ref={ progressCircle }>
					<circle cx="24" cy="24" r="20"></circle>
				</svg>
				<span ref={ progressContent }></span>
			</div>
		</Swiper>
	)
}

export default Hero;
