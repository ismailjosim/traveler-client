import React from 'react';
import Featured from './HomeSections/Featured';
import Hero from './HomeSections/Hero';
import Destination from './HomeSections/Destination';
import Activity from './HomeSections/Activity';


const Homepage = () => {
    return (
        <div>
            <Hero />
            <Featured />
            <Destination />
            <Activity />
        </div>
    );
};

export default Homepage;
