import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../BookingModal/BookingModal';
import Loading from '../Shared/Loading/Loading';
import Car from './Car';

const Cars = () => {
    const [bookcar, setBookcar] = useState(null);
    const cars = useLoaderData();

    return (
        <div className='m-6 pt-6'>

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