import React from 'react';
import SectionHeading from '../../../utilities/SectionHeading';
import img01 from '../../../assets/destinations/destination1.jpg'
import { Link } from 'react-router-dom';

const AllDestinations = () => {
    const heading = {
        subHeading: 'Top Destinations',
        headingOne: 'Explore',
        headingTwo: "Top Destinations",
        describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    }

    return (
        <div className='mb-10'>
            <SectionHeading heading={heading} />
            <div className='grid lg:grid-cols-3'>
                <div className="trend-item1">
                    <div className="trend-image position-relative rounded">
                        <img src={img01} alt="image" />
                        <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                            <div className="trend-content-title">
                                <h5 className="mb-0">
                                    <Link href="/" className="theme1">Italy</Link>
                                </h5>
                                <h3 className="mb-0 white">Caspian Valley</h3>
                            </div>
                            <span className="white bg-theme p-1 px-2 rounded">18 Tours</span>
                        </div>
                        <div className="color-overlay"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllDestinations;
