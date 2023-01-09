import React from 'react';
import PageHeading from '../../utilities/PageHeading';
import Featured from '../Home/HomeSections/Featured';
import Explore from './AboutSection/Explore';
import Testimonials from './AboutSection/Testimonials';
import TourGuide from './AboutSection/TourGuide';

const About = () => {
    return (
        <div>
            <PageHeading headTitle={'about us'}></PageHeading>
            <Explore />
            <Featured />
            <TourGuide />
            <Testimonials />
        </div>
    );
};

export default About;
