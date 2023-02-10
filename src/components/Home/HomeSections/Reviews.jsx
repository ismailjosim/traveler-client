import React from 'react';
import SectionHeading from './../../../utilities/SectionHeading';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'

const Reviews = () => {
    const heading = {
        subHeading: "CLIENT'S REVIEWS",
        headingOne: "TRAVELER'S",
        headingTwo: "TESTIMONIAL",
        describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    }
    return (
        <div>
            <SectionHeading heading={ heading } />
            <section className='w-11/12 mx-auto'>
                <div className="flex items-start mx-auto mb-10">
                    <button title="left arrow" className="hidden p-2 transition-colors duration-300 rounded-full border-2 border-primary text-primary hover:bg-primary lg:block hover:text-white">
                        <AiFillCaretLeft />
                    </button>

                    <div>
                        <p className="flex items-center text-center text-gray-500 lg:mx-8">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quam. Odio voluptatem officiis
                            eos illo! Pariatur, totam alias. Beatae accusamus earum quos obcaecati minima molestias. Possimus
                            minima dolores itaque! Esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates
                            fugiat corrupti laudantium dolores reiciendis pariatur esse quod nihil quia cupiditate debitis
                            quisquam nemo, accusamus animi explicabo? Architecto, unde laboriosam?
                        </p>

                        <div className="flex flex-col items-center justify-center mt-8 ">
                            <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                            <div className="mt-4 text-center text-black">
                                <h1 className="font-semibold">Mia Brown</h1>
                                <span className="text-sm">Marketer</span>
                            </div>
                        </div>
                    </div>

                    <button title="right arrow" className="hidden p-2 transition-colors duration-300 rounded-full border-2 border-primary text-primary hover:bg-primary lg:block hover:text-white">
                        <AiFillCaretRight />
                    </button>
                </div>

            </section>
        </div>
    );
};

export default Reviews;
