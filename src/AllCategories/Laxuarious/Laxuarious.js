import React, { useEffect, useState } from 'react';
import Laxuari from './Laxuari';

const Laxuarious = () => {

    const [luxuries, setLaxuarious] = useState([]);

    useEffect( () =>{
        fetch('laxuary.json')
        .then(res => res.json())
        .then(data => {
            setLaxuarious(data)
        })
    },[])

    return (
        <div>
            
            <div>
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