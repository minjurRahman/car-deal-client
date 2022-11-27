import React from 'react';

const Banner = () => {
    return (
        <div className="hero mt-7" style={{ backgroundImage: `url("https://img.chip.com.tr/storage/files/images/2022/04/15/jaguar-vision-gt-ailesi-1-igV0.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content lg:py-32">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Buy Used Microbus, Luxury, Electic and Sports Cars,</h1>
                <p className="mb-5">We are here to selling used cars, Like as Microbus, Luxury and Electric cars. With 55,000+ cars it's okey to be picky. You can also sell your one here..</p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;