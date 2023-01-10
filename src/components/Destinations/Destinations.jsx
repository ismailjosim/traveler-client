import React from 'react';
import PageHeading from '../../utilities/PageHeading';
import AllDestinations from './Sections/AllDestinations';

const Destinations = () => {

    return (
        <div>
            <PageHeading headTitle={'destination list'} />
            <AllDestinations />
        </div>
    );
};

export default Destinations;
