import React from 'react';
import SectionHeading from '../../utilities/SectionHeading';

const SubmitQuestion = () => {
    const heading = {
        subHeading: '',
        headingOne: 'Do You Have Any',
        headingTwo: "Questions?",
        describe: "As opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum."
    }

    return (
        <div>
            <SectionHeading heading={heading} />
        </div>
    );
};

export default SubmitQuestion;
