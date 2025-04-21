import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from './Blog';

const Blogs = () => {
    const datas = useLoaderData();
    return (
        <div className='my-10'>
            <h1 className='text-center text-4xl font-bold'>Blogs</h1>
            <p className='text-center mt-5 font-extralight'> Let's explore some basic concep that will make you a good developert</p>
            <div className='px-10 my-10'>
                {
                    datas.map((data, index) => <Blog key={index} data={data}></Blog> )
                }
            </div>
        </div>
    );
};

export default Blogs;