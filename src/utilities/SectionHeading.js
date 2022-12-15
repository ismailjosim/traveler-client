import React from 'react';

const SectionHeading = ({ heading }) => {
    const { subHeading, headingOne, headingTwo, describe } = heading
    return (
        <div className='py-10 text-center'>
            <h3 className='text-secondary text-2xl font-semibold'>{subHeading}</h3>
            <h2 className='font-extrabold text-5xl my-2'>{headingOne} <span className='text-primary'>{headingTwo}</span></h2>
            <p className='w-1/2 mx-auto text-base'>{describe}</p>
        </div>
    );
};

export default SectionHeading;
