import React from 'react';
import SectionHeading from './../../../utilities/SectionHeading';

import img01 from '../../../assets/destinations/destination1.jpg'
import img02 from '../../../assets/destinations/destination2.jpg'
import img03 from '../../../assets/destinations/destination15.jpg'
import img04 from '../../../assets/destinations/destination16.jpg'
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Destination = () => {

    const heading = {
        subHeading: 'Top Destinations',
        headingOne: 'Explore',
        headingTwo: "Top Destinations",
        describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    }


    return (
        <div>
            <SectionHeading heading={heading} />
            <section className="text-gray-600">
                <div className="container mx-auto mb-10 flex flex-wrap">
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block rounded-lg" src={img02} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src={img03} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src={img04} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block rounded-lg" src={img01} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Destination;
