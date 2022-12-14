import React from 'react';
import { BsCalendar3, BsClock, BsFacebook, BsFillGeoAltFill, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";


const TopHeader = () => {
    return (
        <div className='hidden lg:block bg-primary text-white py-2'>
            <div className='w-11/12 mx-auto flex justify-between py-1'>
                <div className='flex gap-2'>
                    <div className='flex items-center gap-2 border-r-2 pr-1 border-white text-sm'>
                        <BsCalendar3 />
                        <span>
                            Thursday, Mar 26, 2021
                        </span>
                    </div>
                    <div className='flex items-center gap-2 border-r-2 pr-1 border-white text-sm'>
                        <BsFillGeoAltFill />
                        <span>
                            Cox's Bazar, BD
                        </span>
                    </div>
                    <div className='flex items-center gap-2 text-sm'>
                        <BsClock />
                        <span>
                            Mon-Fri: 10 AM – 5 PM
                        </span>
                    </div>
                </div>
                <div className='flex gap-5 items-center text-white text-lg'>
                    <div className='border-r pr-3 border-white hover:text-secondary transition duration-30'><BsFacebook /></div>
                    <div className='border-r pr-3 border-white hover:text-secondary transition duration-30'><BsTwitter /></div>
                    <div className='border-r pr-3 border-white hover:text-secondary transition duration-300'><BsInstagram /></div>
                    <div className='hover:text-secondary transition duration-300'><BsLinkedin /></div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
