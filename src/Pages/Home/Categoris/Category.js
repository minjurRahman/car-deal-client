import React from 'react';

const Category = ({category}) => {

    const { title, image, description, quantity } = category;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description} <span className='font-bold'>{quantity}</span>+ cars</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">View All</button>
                </div>
            </div>
        </div>
    );
};

export default Category;