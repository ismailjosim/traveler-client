import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaBars, FaTh } from 'react-icons/fa';
import PageHeading from '../../utilities/PageHeading';

const Blogs = () => {

    const { data: blogs = [] } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/blogs');
            const data = await res.json();
            return data?.blogs;
        }
    })


    return (
        <div>
            <PageHeading headTitle={'latest blogs'}></PageHeading>
            <div className="w-11/12 mx-auto grid grid-cols-3 gap-5">
                <div className='col-span-2'>
                    <div className='flex justify-between items-center mb-5'>
                        <h3>Show 1-5 of {blogs.length} results</h3>
                        <div className='flex gap-2'>
                            <div className='active:bg-secondary bg-neutral p-2 rounded-md text-white hover:bg-secondary transition-all duration-500'>
                                <FaBars />
                            </div>
                            <div className='active:bg-secondary bg-neutral p-2 rounded-md text-white hover:bg-secondary transition-all duration-500'>
                                <FaTh />
                            </div>
                        </div>
                        <select className="select select-bordered w-full max-w-xs">
                            <option>Sort By</option>
                            <option>Date</option>
                            <option>category</option>
                            <option>average rating</option>
                        </select>
                    </div>
                    <div>
                        {blogs.map((blog, idx) => {
                            const { title, category, details, date, creator, thumbnail } = blog
                            return <article key={idx} className="flex bg-white transition shadow-xl hover:shadow-md border rounded-md mb-5">
                                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                                    <time dateTime="2022-10-10" className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
                                        <span>{category}</span>
                                        <span className="w-px flex-1 bg-gray-900/10"></span>
                                        <span>{date}</span>
                                    </time>
                                </div>
                                <div className="hidden sm:block sm:basis-56">
                                    <img alt="Guitar" src={thumbnail} className="aspect-square h-full w-full object-cover" />
                                </div>
                                <div className="flex flex-1 flex-col justify-between">
                                    <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                        <a href="/">
                                            <h3 className="font-bold uppercase text-gray-900">{title}</h3>
                                        </a>
                                        <div>
                                            <p className='flex items-center gap-2'>
                                                <BsFillPersonFill className='bg-primary text-white p-1 rounded-full text-xl' />
                                                <span>{creator}</span>
                                            </p>
                                        </div>
                                        <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">{details} </p>
                                    </div>
                                    <div className="sm:flex sm:items-end sm:justify-end">
                                        <a href="/" className="block bg-primary px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-neutral">Read Blog</a>
                                    </div>
                                </div>
                            </article>
                        })
                        }

                    </div>
                </div>
                <div className='col-span-1'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;
