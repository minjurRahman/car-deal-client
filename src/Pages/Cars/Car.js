import React from 'react';

const Car = ({car, setBookcar}) => {
    const { title, image, location, resalePrice, originalPrice, YearsOfUse, sellersName, description, onDate, } = car;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="Car" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p>Original Price: ${originalPrice}</p>
                <p>Years of Use: {YearsOfUse}</p>
                <p>Resale Price: ${resalePrice}</p>
                <p>Location: {location}</p>
                <p>Cars Owner: {sellersName}</p>
                <p>Date: {onDate}</p>
                <div className="card-actions justify-end">
                <label onClick={() =>setBookcar(car)} htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default Car;