import React from 'react';
import PageHeading from '../../../utilities/PageHeading';
import { AiFillClockCircle, AiFillHeart } from 'react-icons/ai';
import { IoMdPeople } from 'react-icons/io';
import { FaMapMarkerAlt } from 'react-icons/fa';
import img01 from '../../../assets/brand/img27.jpg'
import { BiCheck } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { BsFillRecordCircleFill } from 'react-icons/bs';
const PackageDetails = () => {
    const arr = [1, 2, 3, 4, 5]



    return (
        <section>
            <PageHeading headTitle={ 'Package Details' } />
            <div className='w-11/12 mx-auto grid grid-cols-3 gap-5'>
                {/* Left-side content */ }
                <div className='col-span-2'>
                    {/* Header: Package Details */ }
                    <div className=' flex justify-between items-start'>
                        <div className='w-2/3'>
                            <h1 className='text-5xl font-bold'>SUMMER HOLIDAY TO THE AXOLOTLS RIVER</h1>
                            <div className='flex items-center gap-2 mt-2'>
                                <p className='flex items-center gap-1 text-lg text-primary'>
                                    <AiFillHeart />
                                    <AiFillHeart />
                                    <AiFillHeart />
                                    <AiFillHeart />
                                    <AiFillHeart />
                                </p>
                                <span>(10 reviews)</span>
                            </div>
                        </div>
                        <div className='bg-primary/80 p-5 rounded-lg text-white flex flex-col items-center justify-center'>
                            <h3 className='text-4xl font-bold'>$1150</h3>
                            <p>/ Per person</p>
                        </div>
                    </div>
                    {/* section: Package Includes */ }
                    <div className='my-10'>
                        <hr />
                        <div className='flex gap-5 text-base py-5 font-medium text-primary justify-center items-center'>
                            <p className='flex items-center gap-1'>
                                <AiFillClockCircle />
                                <span>6D/5N</span>
                            </p>
                            <span>|</span>
                            <p className='flex items-center gap-1'>
                                <IoMdPeople />
                                <span>pax: 10</span>
                            </p>
                            <span>|</span>
                            <p className='flex items-center gap-1'>
                                <FaMapMarkerAlt />
                                <span>Japan</span>
                            </p>
                        </div>
                        <hr />
                    </div>
                    {/* section: Package Image */ }
                    <div className='rounded-lg overflow-hidden mb-10'>
                        <img src={ img01 } alt="" />
                    </div>
                    {/* section: Details */ }
                    <div>
                        <h3>OVERVIEW :</h3>
                        <p>
                            Malesuada incidunt excepturi proident quo eros? Id interdum praesent magnis, eius cumque? Integer aptent officiis recusandae habitasse iure, quisque culpa! Nemo et? Vel excepteur pellentesque morbi ducimus porro commodo sollicitudin, quidem, cupiditate ligula doloribus recusandae non, hac, ullam per, natus parturient sollicitudin! Facilis vestibulum accumsan quisquam excepturi explicabo.
                        </p>
                        <p>
                            Quam aut, luctus hendrerit, laborum, dolor, consectetur scelerisque quisque feugiat sequi, ea ipsa consequat atque consectetur. Litora aute error eos.Placerat habitasse nascetur sit voluptatem ea sint facilisis! Esse sed lacus! Sociosqu ullamcorper venenatis in.
                        </p>
                    </div>
                    {/* section: Package Includes */ }
                    <div className='my-10 bg-slate-100 p-5 rounded-lg shadow-md'>
                        <h3 className='text-2xl font-semibold mb-5'>INCLUDE & EXCLUDE :</h3>
                        <div className='flex gap-20'>
                            <ul>
                                { arr.map((item, idx) => {
                                    return (
                                        <li key={ idx } className='flex items-center gap-1 mb-2'>
                                            <BiCheck className='text-xl font-medium'></BiCheck>
                                            <span className='text-base'>Specialized bilingual guide</span>
                                        </li>
                                    )
                                })

                                }
                            </ul>
                            <ul>
                                { arr.map((item, idx) => {
                                    return (
                                        <li key={ idx } className='flex items-center gap-1 mb-2'>
                                            <RxCross2 className='text-xl font-medium'></RxCross2>
                                            <span className='text-base'>Specialized bilingual guide</span>
                                        </li>
                                    )
                                })

                                }
                            </ul>
                        </div>
                    </div>
                    {/* section: ITINERARY */ }
                    <div>
                        <h3 className='text-2xl font-semibold mb-5'>ITINERARY :</h3>
                        <ul className='flex flex-col gap-2 mb-20'>
                            {
                                arr.map((item, idx) => {
                                    return (
                                        <li key={ idx } className='flex items-center gap-1'>
                                            <BsFillRecordCircleFill className='text-primary' />
                                            <span className='text-base'>DAY 1 Departure at the airport and arrival at the hotel</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                    </div>

                </div>
                {/* Section: Right-side content */ }
                <div>


                </div>


            </div>
        </section>
    );
};

export default PackageDetails;
