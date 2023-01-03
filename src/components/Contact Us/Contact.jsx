import React from 'react';
import PageHeading from './../../utilities/PageHeading';
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
    const cardData = [
        {
            icon: <FaMapMarkerAlt />,
            title: 'Office Location',
            details1: '445 Mount Eden Road, Mt Eden Basundhara Chakrapath',
            details2: ''
        },
        {
            icon: <BsFillTelephoneFill />,
            title: 'Phone Number',
            details1: '977-444-222-000',
            details2: '977-444-222-000'
        },
        {
            icon: <FaEnvelope />,
            title: 'Email Address',
            details1: 'contact@traveler.com',
            details2: 'info@traveler.com'
        }
    ]

    return (
        <div>
            <PageHeading headTitle={'contact us'}></PageHeading>
            <div className='text-center mb-5'>
                <h2 className='text-3xl font-bold'>INFORMATION ABOUT US</h2>
                <p className='text-base font-medium text-neutral'>Sagittis posuere id nam quis vestibulum vestibulum a facilisi at elit hendrerit scelerisque sodales nam dis orci.</p>
            </div>
            <div className='w-11/12 mx-auto mb-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center items-center text-center'>
                {
                    cardData.map((data, idx) => {
                        return <div key={idx} className="rounded-xl border p-0.5 flex justify-center items-center"
                        >
                            <div className="rounded-[10px] bg-white p-4 sm:p-6 flex flex-col justify-center items-center">
                                <div className="mt-0.5 text-5xl text-primary">{data.icon}</div>
                                <div className='mt-5'>
                                    <h3 className="text-3xl font-semibold mb-5">{data.title}</h3>
                                    <p className='text-lg font-medium text-neutral  lg:w-3/4 w-full mx-auto'>{data.details1}</p>
                                    <p className='text-lg font-medium text-neutral lg:w-3/4 w-full mx-auto'>{data.details2}</p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <div>
                <section className="py-6">
                    <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                        <div className="py-6 md:py-0 md:px-6">
                            <h1 className="text-4xl font-bold">Get in touch</h1>
                            <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                            <div className="space-y-4">
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Fake address, 9999 City</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                    <span>123456789</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <span>contact@business.com</span>
                                </p>
                            </div>
                        </div>
                        <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                            <div>
                                <input type="text" placeholder="First Name" className="rounded-md border-primary shadow-sm sm:text-sm input input-bordered input-success w-full" />
                            </div>
                            <div>
                                <input type="text" placeholder="Last Name" className="rounded-md border-primary shadow-sm sm:text-sm input input-bordered input-success w-full" />
                            </div>
                            <div>
                                <input type="email" placeholder="Email" className="rounded-md border-primary shadow-sm sm:text-sm input input-bordered input-success w-full" />
                            </div>
                            <div>
                                <input type="number" placeholder="Phone" className="rounded-md border-primary shadow-sm sm:text-sm input input-bordered input-success w-full" />
                            </div>
                            <div>
                                <textarea className="textarea textarea-success w-full text-base" rows='4' placeholder="Enter your message..."></textarea>
                            </div>
                            <div className='flex justify-center'>
                                <button type="button" className="btn btn-primary inline-block text-white capitalize px-5 py-2">Send Message</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;
