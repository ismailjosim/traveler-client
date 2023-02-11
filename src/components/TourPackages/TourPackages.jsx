import React from 'react';
import PageHeading from '../../utilities/PageHeading';
import singleImg from '../../assets/destinations/destination1.jpg'
import { Link } from 'react-router-dom';
import { AiFillClockCircle, AiFillStar } from 'react-icons/ai'
import { IoMdPeople } from 'react-icons/io'
import { FaMapMarkerAlt, FaStarHalf } from 'react-icons/fa'



const TourPackages = () => {


    return (
        <section>
            <PageHeading headTitle={ 'Tour Packages' } />
            <div className='w-11/12 mx-auto grid grid-cols-3 mb-10 shadow-xl overflow-hidden rounded-lg'>
                <div>
                    <img src={ singleImg } alt="" className='h-72 w-full object-cover' />
                </div>
                <div className='bg-slate-200 pt-10 px-5'>
                    <Link className='text-3xl font-bold' to={ '/' }>
                        EXPERIENCE THE GREAT HOLIDAY ON BEACH
                    </Link>
                    <p className='text-base my-2'>
                        Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.
                    </p>
                    <div className='bg-white shadow-md rounded-full py-2 px-5 inline-block mt-5'>
                        <div className='flex gap-2 text-sm font-medium text-primary items-center'>
                            <p className='flex items-center gap-1'>
                                <AiFillClockCircle />
                                <span>7D/6N</span>
                            </p>
                            <span>|</span>
                            <p className='flex items-center gap-1'>
                                <IoMdPeople />
                                <span>pax: 10</span>
                            </p>
                            <span>|</span>
                            <p className='flex items-center gap-1'>
                                <FaMapMarkerAlt />
                                <span>pax: 10</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='bg-primary flex justify-center items-center text-white'>
                    <div className='text-center'>
                        <div className='flex items-center'>
                            <span>(25 reviews)</span>
                            <p className='flex items-center gap-1 text-lg text-secondary'>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <FaStarHalf />
                            </p>
                        </div>
                        <div className='py-5'>
                            <h3 className='text-4xl font-bold'>$750</h3>
                            <p>/ Per person</p>
                        </div>
                        <div>
                            <button className='btn btn-outline text-white'>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TourPackages;
