import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import BookingModal from '../../BookingModal/BookingModal';
import Loading from '../Shared/Loading/Loading';
import Car from './Car';

const Cars = () => {
    // const [cars, setCars] = useState([]);
    const [bookcar, setBookcar] = useState(null);


    const {data:cars = [], refetch, isLoading } = useQuery({
        queryKey: ['cars'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/cars')
            const data = await res.json();
            return data
        }
        
    });

    if(isLoading){
        return <Loading></Loading>
    }


/* 
    useEffect( () =>{
        fetch('http://localhost:5000/cars')
        .then(res => res.json())
        .then(data => {
            setCars(data)
        })
    },[]) */


    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    cars.map(car => <Car 
                        key={car._id}
                        car={car}
                        setBookcar={setBookcar}
                        ></Car>)
                }
            </div>
            {
                bookcar &&
                <BookingModal
                bookcar={bookcar}
                setBookcar={setBookcar}
                ></BookingModal>
            }
        </div>
    );
};

export default Cars;