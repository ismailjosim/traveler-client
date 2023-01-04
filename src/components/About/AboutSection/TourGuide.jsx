import React from 'react';
import SectionHeading from '../../../utilities/SectionHeading';
import '../../../styles/Custom.css'

const TourGuide = () => {
    const heading = {
        subHeading: 'Tour Guides',
        headingOne: 'Meet Our',
        headingTwo: "Excellent Guides",
        describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    }

    return (
        <div>
            <SectionHeading heading={heading}></SectionHeading>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4 slick-slide slick-cloned">
                <div className="team-list rounded">
                    <div className="team-image">
                        <img src="images/team/img1.jpg" alt="team" />
                    </div>
                    <div className="team-content text-center p-3 bg-theme">
                        <h4 className="mb-0 white">Salmon Thuir</h4>
                        <p className="mb-0 white">Senior Agent</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourGuide;
