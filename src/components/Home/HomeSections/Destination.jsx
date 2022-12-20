import React from 'react';
import SectionHeading from './../../../utilities/SectionHeading';

const Destination = () => {

    const heading = {
        subHeading: 'Top Destinations',
        headingOne: 'Explore',
        headingTwo: "Top Destinations",
        describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    }


    return (
        <div>
            <SectionHeading heading={heading} />
        </div>
    );
};

export default Destination;
