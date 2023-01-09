import React from 'react';
import PageHeading from '../../utilities/PageHeading';
import Featured from '../Home/HomeSections/Featured';
import Explore from './AboutSection/Explore';
import Testimonials from './AboutSection/Testimonials';
import TourGuide from './AboutSection/TourGuide';
import AboutPartners from './AboutSection/AboutPartners';

const About = () => {
    return (
        <div>
            <PageHeading headTitle={'about us'}></PageHeading>
            <Explore />
            <Featured />
            <TourGuide />
            <Testimonials />
            <AboutPartners />
        </div>
    );
};

export default About;
