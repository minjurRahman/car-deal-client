import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categoris = () => {
    const [ categories, setCategories ] = useState([])

    useEffect( () =>{
        fetch('service.json')
        .then(res => res.json())
        .then(data => {
            setCategories(data)
        })
    },[])

    return (
        <section className='mt-6'>
            
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