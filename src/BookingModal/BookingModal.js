import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../Context/AuthProvider';

const BookingModal = ({bookcar, setBookcar}) => {
    const {title, image, location, resalePrice, originalPrice, YearsOfUse, sellersName, description, onDate } = bookcar;

    const { user } = useContext(AuthContext);

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const itemName = form.itemName.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const onDate = new Date();

        const booking = {
            BuyerName: name,
            BuyerEmail: email,
            itemName,
            price,
            phone,
            location,
            onDate,
            image,
        }
        // console.log(booking)
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                setBookcar(null);
                toast.success('Your Booked Successfully');
            }
        })

        
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>

                    <form onSubmit={handleBooking} className=' grid grid-cols-1 gap-3 mt-10'>
                        <input name='name' type="text" defaultValue={user?.displayName} className="input input-bordered w-full " placeholder='Your Name' required disabled/>

                        <input name='email' type="email" defaultValue={user?.email} placeholder="Email Address" className="input input-bordered w-full " readOnly disabled />

                        <input name='itemName' type="text" defaultValue={title} placeholder="Item name" className="input input-bordered w-full" required  disabled/>

                        <input name='price' type="text" defaultValue={resalePrice} placeholder="Price" className="input input-bordered w-full" required  disabled/>

                        <input name='phone' type="tel"  placeholder="Your Phone Number" className="input input-bordered w-full " required />
                        
                        <input name='location' type="text" defaultValue={location} className="input input-bordered w-full" required  disabled/>

                        <br />
                        <input className='w-full btn btn-primary' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;