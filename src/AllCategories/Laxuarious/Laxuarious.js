import React, { useEffect, useState } from 'react';
import Laxuari from './Laxuari';

const Laxuarious = () => {

    const [luxuries, setLaxuarious] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/cars')
        .then(res => res.json())
        .then(data => {
            setLaxuarious(data)
        })
    },[])

    return (
        <div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    luxuries.map(luxury => <Laxuari 
                        key={luxury._id}
                        luxury={luxury}
                        ></Laxuari>)
                }
            </div>
        </div>
    );
};

export default Laxuarious;