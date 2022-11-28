import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const SellersCars = () => {
    const [deleteCar, setDeleteCar] = useState(null);
    const { user } = useContext(AuthContext);


    const closeModal = () => {
        setDeleteCar(null);
    }

    const url = `https://products-resale-server-dusky.vercel.app/sellersCar?email=${user?.email}`;

    const {data: cars = [], isLoading, refetch } = useQuery({
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

    const handleDeleteCar = car =>{
        fetch(`https://products-resale-server-dusky.vercel.app/sellersCar/${car._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Car ${car.name} deleted successfully`)
            }
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='m-5'>
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
                      <label onClick={() => setDeleteCar(car)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                        <Link to={`/advertise/${car._id}`}><button className="btn btn-sm btn-primary">Advertise</button></Link>
                      </div>
                    </div>
                  </div>)
                }
            </div>
            {
                deleteCar && <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message={`If you delete ${deleteCar.title}. It cannot be undone`}
                successAction ={handleDeleteCar}
                successButtonName="Delete"
                modalData = {deleteCar}
                closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default SellersCars;