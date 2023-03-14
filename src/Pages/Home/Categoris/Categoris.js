import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Category from './Category';
import axios from 'axios';
import 'animate.css'

const Categoris = () => {

    const {data: categories = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async() => {
            const res = await axios.get('https://products-resale-server-dusky.vercel.app/category')

         return res.data;
        }
    })


    return (
        <section className='mt-12 '>
            <div className='text-center my-6'>
                <h3 className='text-3xl text-info'>Categories of Second hand Cars</h3>
                <p>You can get a various type of second hand cars. To find a best quality please click as your choice.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {
                    categories.map(category => <Category
                    key={category._id}
                    category={category}
                    ></Category>)
                }
            </div>
        </section>
    );
};

export default Categoris;