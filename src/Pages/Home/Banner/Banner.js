import React from 'react';

const Banner = () => {
    return (
        <div className="hero " style={{ backgroundImage: `url("https://img.chip.com.tr/storage/files/images/2022/04/15/jaguar-vision-gt-ailesi-1-igV0.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content lg:py-32">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;