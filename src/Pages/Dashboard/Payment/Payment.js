
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIP_PK);

const Payment = () => {
    const booking  = useLoaderData();
    const navigation = useNavigation();
    const { itemName, price, } = booking;
    if(navigation.state === "loading"){
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-3xl mb-3'>Payment for {itemName}</h3>
            <p className='text-xl'> Please pay <strong>${price}</strong> to buy the car.</p>

            <div className='w-96 my-12'>
            <Elements stripe={stripePromise}>
                 <CheckOutForm 
                 booking={booking}
                 />
               </Elements>
            </div>

        </div>
    );
};

export default Payment;