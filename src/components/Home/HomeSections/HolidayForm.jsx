import React from 'react';
import { FiMapPin } from 'react-icons/fi'
import { FaSearch } from 'react-icons/fa';
import '../../../styles/Custom.css'

const HolidayForm = () => {
    return (
        <div className="relative block z-[2]">
            <div className="section-shape top-0" />
            <div className="w-11/12 mx-auto bg-slate-50 shadow-lg rounded-lg">
                <div className="flex justify-between overflow-hidden items-center">
                    <div className="bg-primary py-5 rounded-lg rounded-r-none text-white">
                        <h4 className="text-center p-6 py-5 mb-0 lg:flex gap-1 items-center">
                            <FiMapPin className='text-white' />
                            <span className='text-lg font-semibold'> Find Your Holidays</span>
                        </h4>
                    </div>
                    <div className='flex justify-between gap-10'>
                        <div>
                            <select className="select w-full max-w-xs">
                                <option>Destination</option>
                                <option value={ 1 }>Destination</option>
                                <option value={ 2 }>Argentina</option>
                                <option value={ 3 }>Belgium</option>
                                <option value={ 4 }>Canada</option>
                                <option value={ 5 }>Denmark</option>
                            </select>
                        </div>
                        <div>
                            <select className="select w-full max-w-xs">
                                <option>Travel Type</option>
                                <option value={ 1 }>City Tour</option>
                                <option value={ 2 }>Family Tour</option>
                            </select>
                        </div>
                        <div>
                            <select className="select w-full max-w-xs">
                                <option value={ 1 }>Tour Duration</option>
                                <option value={ 2 }>5 days</option>
                                <option value={ 3 }>7 Days</option>
                            </select>
                        </div>
                        <div className="text-center">
                            <a href="/" className="btn btn-primary text-white flex items-center gap-1">
                                <FaSearch className='font-bold' />
                                <span>Search Now</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HolidayForm;


