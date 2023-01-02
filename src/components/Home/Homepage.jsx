import React from 'react';
import Featured from './HomeSections/Featured';
import Hero from './HomeSections/Hero';
import Destination from './HomeSections/Destination';
import Activity from './HomeSections/Activity';
import Partners from './HomeSections/Partners';


const Homepage = () => {
    return (
        <div>
            <Hero />
            <Featured />
            <Destination />
            <Activity />
            <Partners />
        </div>
    );
};

export default Homepage;
