import React from 'react';

const About = () => {
    return (
        <div className="hero  mt-7 mb-7 py-20 bg-base-200">
        
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='lg:w-1/2' data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="500">
                    <img src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt='' className="rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2' data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="500">
                <h1 className='text-4xl text-info font-bold mb-4'>About Us</h1>
                    <h1 className="text-5xl font-bold">Welcome to Car Deal</h1>
                    <p className="py-6">We provide internationally Second hand Cars. Simply put: We don’t sell lemons. All cars must pass the 150-point inspection by ASE-Certified technicians. Certified cars are reconditioned to like-new. If there are any minor defects, we show you up front in HD. And every Shift vehicle has a full inspection report and free CARFAX vehicle history.</p>
                    <button className="btn btn-info">Get More Info</button>
                </div>
            </div>
      </div>
    );
};

export default About;