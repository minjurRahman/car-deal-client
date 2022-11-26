import React, { useContext } from 'react';
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

        const booking = {
            BuyerName: name,
            BuyerEmail: email,
            itemName,
            price,
            phone,
            location,
        }
        console.log(booking)

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>

                    <form onSubmit={handleBooking} className=' grid grid-cols-1 gap-3 mt-10'>
                        <input name='name' type="text" defaultValue={user?.displayName} className="input input-bordered w-full " placeholder='Your Name' required />

                        <input name='email' type="email" defaultValue={user?.email} placeholder="Email Address" className="input input-bordered w-full " readOnly disabled />

                        <input name='itemName' type="text" defaultValue={title} placeholder="Item name" className="input input-bordered w-full" required  disabled/>

                        <input name='price' type="text" defaultValue={resalePrice} placeholder="Price" className="input input-bordered w-full" required  disabled/>

                        <input name='phone' type="text" Value={+8801930000004} placeholder="Phone Number" className="input input-bordered w-full " required disabled/>
                        
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