
import React from 'react';
import SectionHeading from '../../../utilities/SectionHeading';
import { useQuery } from '@tanstack/react-query';
import DestinationCard from '../../Destinations/Sections/DestinationCard';
import Button from '../../../utilities/Button';

const TopDestinations = () => {
    const heading = {
        subHeading: 'Uncover Place',
        headingOne: 'POPULAR',
        headingTwo: 'DESTINATION',
        describe:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    }

    const { data: destinations = [] } = useQuery({
        queryKey: ['destinations'],
        queryFn: async () => {
            const res = await fetch(
                'https://travel-server-woad.vercel.app/destinations',
            )
            const data = await res.json()
            return data?.destinations
        },
    })



    return (
        <div>
            <SectionHeading heading={ heading } />
            <div className='w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                {
                    destinations.slice(0, 6).map((item) => <DestinationCard item={ item } key={ item._id } />)
                }
            </div>
            <div className='text-center mt-10'>
                <Button btnText={ 'View All' } destination={ '/destinations' }></Button>
            </div>
        </div>
    );
};

export default TopDestinations;
