import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css'

const Category = ({category}) => {

    const { title, image, description, quantity, categoryId, categoryName } = category;

    return (
        <div className="card card-compact bg-base-100 shadow-xl animate__animated animate__flipInY animate__delay-.5s animate__slow	2s">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description} <span className='font-bold'>{quantity}</span>+ cars</p>
                <div className="card-actions justify-end">
                <Link to={`/cars/${categoryId}`}><button className="btn btn-primary">View All</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Category;