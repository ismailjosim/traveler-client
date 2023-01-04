import React from 'react';
import PageHeading from '../../utilities/PageHeading';
import Featured from '../Home/HomeSections/Featured';
import Explore from './AboutSection/Explore';

const About = () => {
    return (
        <div>
            <PageHeading headTitle={'about us'}></PageHeading>
            <Explore />
            <Featured />
        </div>
    );
};

export default About;
