import React from 'react';
import Featured from './HomeSections/Featured';
import Hero from './HomeSections/Hero';
import Destination from './HomeSections/Destination';

const Homepage = () => {
    return (
        <div>
            <Hero />
            <Featured />
            <Destination />
        </div>
    );
};

export default Homepage;
