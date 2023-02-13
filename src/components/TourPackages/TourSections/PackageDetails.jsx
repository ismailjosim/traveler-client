import PageHeading from '../../../utilities/PageHeading';
import { AiFillClockCircle, AiFillHeart } from 'react-icons/ai';
import { IoMdPeople } from 'react-icons/io';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import img01 from '../../../assets/brand/img27.jpg';
import { BiCheck } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { BsArrowRightCircle, BsFillRecordCircleFill } from 'react-icons/bs';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import Slider from 'react-slick';
import '../../../styles/Custom.css'
import { Link } from 'react-router-dom';



const PackageDetails = () => {
    const arr = [1, 2, 3, 4, 5];
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        button: false,
    }

    return (
        <section>
            <PageHeading headTitle={ 'Package Details' } />
            <div className='w-11/12 mx-auto grid grid-cols-3 gap-10'>
                {/* Left-side content */ }
                <div className='col-span-2'>
                    {/* Header: Package Details */ }
                    <div className=' flex justify-between items-start'>
                        <div className='w-2/3'>
                            <h1 className='text-5xl font-bold'>SUMMER HOLIDAY TO THE AXOLOTLS RIVER</h1>
                            <div className='flex items-center gap-2 mt-2'>
                                <p className='flex items-center gap-1 text-lg text-primary'>
                                    <AiFillHeart />
                                    <AiFillHeart />
                                    <AiFillHeart />
                                    <AiFillHeart />
                                    <AiFillHeart />
                                </p>
                                <span>(10 reviews)</span>
                            </div>
                        </div>
                        <div className='bg-primary/80 p-5 rounded-lg text-white flex flex-col items-center justify-center'>
                            <h3 className='text-4xl font-bold'>$1150</h3>
                            <p>/ Per person</p>
                        </div>
                    </div>
                    {/* section: Package Includes */ }
                    <div className='my-10'>
                        <hr />
                        <div className='flex gap-5 text-base py-5 font-medium text-primary justify-center items-center'>
                            <p className='flex items-center gap-1'>
                                <AiFillClockCircle />
                                <span>6D/5N</span>
                            </p>
                            <span>|</span>
                            <p className='flex items-center gap-1'>
                                <IoMdPeople />
                                <span>pax: 10</span>
                            </p>
                            <span>|</span>
                            <p className='flex items-center gap-1'>
                                <FaMapMarkerAlt />
                                <span>Japan</span>
                            </p>
                        </div>
                        <hr />
                    </div>
                    {/* section: Package Image */ }
                    <div className='rounded-lg overflow-hidden mb-10'>
                        <img src={ img01 } alt="" />
                    </div>
                    {/* section: Details */ }
                    <div>
                        <h3>OVERVIEW :</h3>
                        <p>
                            Malesuada incidunt excepturi proident quo eros? Id interdum praesent magnis, eius cumque? Integer aptent officiis recusandae habitasse iure, quisque culpa! Nemo et? Vel excepteur pellentesque morbi ducimus porro commodo sollicitudin, quidem, cupiditate ligula doloribus recusandae non, hac, ullam per, natus parturient sollicitudin! Facilis vestibulum accumsan quisquam excepturi explicabo.
                        </p>
                        <p>
                            Quam aut, luctus hendrerit, laborum, dolor, consectetur scelerisque quisque feugiat sequi, ea ipsa consequat atque consectetur. Litora aute error eos.Placerat habitasse nascetur sit voluptatem ea sint facilisis! Esse sed lacus! Sociosqu ullamcorper venenatis in.
                        </p>
                    </div>
                    {/* section: Package Includes */ }
                    <div className='my-10 bg-slate-100 p-5 rounded-lg shadow-md'>
                        <h3 className='text-2xl font-semibold mb-5'>INCLUDE & EXCLUDE :</h3>
                        <div className='flex gap-20'>
                            <ul>
                                { arr.map((item, idx) => {
                                    return (
                                        <li key={ idx } className='flex items-center gap-1 mb-2'>
                                            <BiCheck className='text-xl font-medium'></BiCheck>
                                            <span className='text-base'>Specialized bilingual guide</span>
                                        </li>
                                    )
                                })

                                }
                            </ul>
                            <ul>
                                { arr.map((item, idx) => {
                                    return (
                                        <li key={ idx } className='flex items-center gap-1 mb-2'>
                                            <RxCross2 className='text-xl font-medium'></RxCross2>
                                            <span className='text-base'>Specialized bilingual guide</span>
                                        </li>
                                    )
                                })

                                }
                            </ul>
                        </div>
                    </div>
                    {/* section: ITINERARY */ }
                    <div>
                        <h3 className='text-2xl font-semibold'>ITINERARY :</h3>
                        <p className='my-5'>
                            Malesuada incidunt excepturi proident quo eros? Id interdum praesent magnis, eius cumque? Integer aptent officiis recusandae habitasse iure, quisque culpa!
                        </p>
                        <ul className='flex flex-col gap-2 mb-20'>
                            {
                                arr.map((item, idx) => {
                                    return (
                                        <li key={ idx } className='flex items-center gap-2'>
                                            <BsFillRecordCircleFill className='text-primary' />
                                            <span className='text-base'>DAY 1 Departure at the airport and arrival at the hotel</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                    </div>

                </div>
                {/* Section: Right-side content */ }
                <div className='col-span-1'>
                    {/* Section: Booking Form */ }
                    <div className="bg-primary rounded-lg text-white px-5 py-10">
                        <div className="mx-auto max-w-lg text-center">
                            <h4 className="text-2xl font-bold sm:text-2xl">BOOKING FORM</h4>
                            <p className='py-2'>
                                Malesuada incidunt excepturi proident quo eros? Sinterdum praesent magnis, eius cumque.
                            </p>
                        </div>
                        <form className="mx-auto mt-8 mb-0 max-w-md space-y-4">
                            <div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name='name'
                                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                        placeholder="Your Name"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name='email'
                                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                        placeholder="Your Email"
                                    />
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className='px-2 lg:px-0'>
                                    <h3>Checkin Date</h3>
                                    <DatePicker
                                        className="select w-full border border-primary text-black"
                                        selected={ startDate }
                                        onChange={ (date) => setStartDate(date) }
                                        dateFormat="PP"
                                    />
                                </div>
                                <div className='px-2 lg:px-0'>
                                    <h3>Checkout Date</h3>
                                    <DatePicker
                                        className="select w-full border border-primary text-black"
                                        placeholderText='Start Date'
                                        selected={ endDate }
                                        onChange={ (date) => setEndDate(date) }
                                        dateFormat="PP"
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col px-2 lg:px-0 lg:mb-0 my-10'>
                                <button className='btn btn-outline text-white hover:bg-secondary transition-all duration-300 flex gap-1'>
                                    <FaSearch />
                                    <span>Search Now</span>
                                </button>
                            </div>

                        </form>
                    </div>
                    {/* Section: Related Images */ }
                    <div className='my-10'>
                        <h4 className='text-2xl text-center font-semibold'>RELATED IMAGES</h4>
                        <p className='text-center my-2'>Quaerat inventore! Vestibulum aenean volutpat gravida. Sagittis, euismod perferendis.</p>
                        <div className=''>
                            <Slider { ...settings }>
                                {
                                    arr.map((item, idx) => {
                                        return (
                                            <img className='rounded-lg w-full block' key={ idx } src={ img01 } alt="" />
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                    {/* Section: Google Map */ }
                    <div className='my-14'>
                        <iframe
                            className='w-full max-h-80 rounded-lg'
                            title='myFrame'
                            height={ 500 }
                            src='https://maps.google.com/maps?q=Bhola,%20barishal,%20bangladesh&t=&z=11&ie=UTF8&iwloc=&output=embed'
                            frameBorder='0'
                        ></iframe>
                    </div>
                    {/* Section: More Packages */ }
                    <div
                        style={ { backgroundImage: `url(${ img01 })` } }
                        className="relative overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat">
                        <div className="relative bg-black bg-opacity-40 px-5 py-10">
                            <h2 className="text-base py-1 text-center rounded-full bg-white">MORE PACKAGES</h2>
                            <ul className='mt-10 text-white flex flex-col gap-2'>
                                {
                                    arr.map((item, idx) => {
                                        return (
                                            <li className=' border-b border-white/30 pb-2'>
                                                <Link to={ '/packages' } className="flex items-center gap-2 text-lg">
                                                    <BsArrowRightCircle />
                                                    <span>Vacation Packages</span>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PackageDetails;
