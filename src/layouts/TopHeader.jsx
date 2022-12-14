import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";


const TopHeader = () => {
    return (
        <div className='hidden lg:block bg-primary text-white py-2'>
            <div className='w-11/12 mx-auto flex justify-between py-1'>
                <div className='flex gap-2'>
                    <div className='flex items-center gap-2 border-r-2 pr-1 border-white text-sm'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                        </svg>
                        <span>
                            Thursday, Mar 26, 2021
                        </span>
                    </div>
                    <div className='flex items-center gap-2 border-r-2 pr-1 border-white text-sm'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <span>
                            Cox's Bazar, BD
                        </span>
                    </div>
                    <div className='flex items-center gap-2 text-sm'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
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
