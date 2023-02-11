import React from 'react';
import PageHeading from '../../utilities/PageHeading';
import { useQuery } from '@tanstack/react-query';
import TourCard from './TourSections/TourCard';



const TourPackages = () => {



    const { data: packages = [] } = useQuery({
        queryKey: ['packages'],
        queryFn: async () => {
            const res = await fetch(
                'https://travel-server-woad.vercel.app/packages',
            )
            const data = await res.json()
            return data?.packages
        },
    })


    return (
        <section>
            <PageHeading headTitle={ 'Tour Packages' } />
            <div className='w-11/12 mx-auto'>
                {
                    packages.map((item, idx) => <TourCard key={ idx } item={ item } />)
                }
            </div>
        </section>
    )
};

export default TourPackages;
