import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const SellersCars = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/sellersCar?email=${user?.email}`;

    const {data: cars = [] } = useQuery({
        queryKey: ['cars', user?.email],
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
            <h3 className='text-3xl mb-6'>My Cars {cars.length}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    cars.map(car => <div key={car._id} className="card bg-base-100 shadow-xl">
                    <figure><img src={car.image} alt="Cars" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        {car.title}
                        <div className="badge badge-secondary">Available</div>
                      </h2>
                      <p>Post Date: {car.postDate?.slice(0, 10)}</p>
                      <div className="card-actions flex justify-end">
                        <button className="btn btn-sm btn-secondary">Delete</button> 
                        <button className="btn btn-sm btn-primary">Advertise</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default SellersCars;