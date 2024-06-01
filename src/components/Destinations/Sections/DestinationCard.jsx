import React from 'react';
import { Link } from 'react-router-dom';

const DestinationCard = ({ item }) => {
    const { _id, city, title, touristPlace, thumbnail } = item || {}
    return (
        <>
            <Link to={ `/destination/${ _id }` } key={ _id } className='destination_item'>
                <div className='transition-all relative rounded-xl ease-in-out duration-500 overflow-hidden max-h-72 h-full'>
                    <img
                        className='transition-all ease-in-out duration-500 w-full h-full'
                        src={ thumbnail }
                        alt='destination'
                    />
                    <div className='trend-content flex items-center justify-between absolute bottom-0 p-6 w-full z-[1]'>
                        <div className='trend-content-title'>
                            <h3 className='mb-0 text-white text-xl font-bold capitalize '>
                                { title }
                            </h3>
                            <span className='text-secondary mb-0'>
                                { city }
                            </span>
                        </div>
                        <span className='text-white bg-primary p-1 px-2 rounded-md'>
                            { touristPlace } Tours
                        </span>
                    </div>
                    <div className='color-overlay absolute left-0 bottom-0 h-1/2 w-full opacity-60 transition-all ease-in-out duration-500 bg-gradient-to-b from-transparent to-slate-900' ></div>
                </div>
            </Link>
        </>
    );
};

export default DestinationCard;
