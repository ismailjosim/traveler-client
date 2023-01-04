import React from 'react';
import PageHeading from '../../utilities/PageHeading';
import Explore from './AboutSection/Explore';

const About = () => {
    return (
        <div>
            <PageHeading headTitle={'about us'}></PageHeading>
            <Explore />
        </div>
    );
};

export default About;
