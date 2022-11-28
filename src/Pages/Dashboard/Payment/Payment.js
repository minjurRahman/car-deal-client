
import React from 'react';
import { useLoaderData } from 'react-router-dom';



// const stripePromise = loadStripe(process.env.REACT_APP_STRIP_PK);

const Payment = () => {
    const booking  = useLoaderData();
    const { itemName, price, } = booking;

    return (
        <div>
            <h3 className='text-3xl'>Payment for {itemName}</h3>
            <p className='text-xl'> Please pay <strong>${price}</strong>to buy the car.</p>

            <div className='w-96 my-12'>
               
            </div>

        </div>
    );
};

export default Payment;