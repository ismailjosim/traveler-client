import React from 'react';
import PageHeading from '../../utilities/PageHeading';

const Booking = () => {
    return (
        <section>
            <PageHeading headTitle={ "booking" } />
            <div className='w-11/12 mx-auto grid grid-cols-3 gap-10 my-10'>
                <div className='col-span-2'>
                    <div className='bg-slate-50 px-5 py-5 rounded-lg shadow-md'>
                        <h3 className='text-3xl flex gap-5 items-center font-semibold'>
                            <span className='bg-primary w-14 h-14 text-center rounded-full text-white flex justify-center items-center'>1</span>
                            <span>YOUR DETAILS</span>
                        </h3>
                        <form action="" className='grid grid-cols-2 gap-5'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">First Name*</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Last Name*</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email*</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Phone*</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                            </div>
                        </form>
                    </div>
                </div>



                <div className='col-span-1 bg-secondary'>
                    Hello
                </div>


            </div>
        </section>
    );
};

export default Booking;
