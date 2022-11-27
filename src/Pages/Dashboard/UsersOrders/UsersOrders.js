import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import avater from '../../../assets/avater.png'

const UsersOrders = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const {data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () =>{
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            console.log(data)
            return data;
        }
    })

    return (
        <div>
            <h3 className='text-3xl mb-5'>My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>User Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Order Date</th>
                        <th>Payment</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                            
                            <th>{i+1}</th>
                            <th><div className="mask mask-squircle w-12 h-12">
                                <img src={user?.photoURL ? user.photoURL : avater } alt="Avatar" />
                            </div>
                            </th>
                            <td>{booking.itemName}</td>
                            <td>{booking.price}</td>
                            <td>{booking.onDate}</td>
                            <td>Pay</td>
                        </tr>)
                        }

                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default UsersOrders;