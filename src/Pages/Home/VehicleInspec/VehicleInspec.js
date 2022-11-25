import React from 'react';

const VehicleInspec = () => {
    return (
        <section className='mt-6'>
            <div className="hero bg-base-200 py-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://eadn-wc04-1622458.nxedge.io/cdn/wp-content/uploads/2020/02/Inspection-150-Points-Feature-Small-Car-768x340px.jpg" className=" rounded-lg shadow-2xl lg:w-1/2" alt=''/>
                    <div>
                    <h3 className='text-3xl text-info pb-4'>150-POINT INSPECTION</h3>
                    <h1 className="text-5xl font-bold">We’re picky and we know it</h1>
                    <p className="py-6">Simply put: We don’t sell lemons. All cars must pass the 150-point inspection by ASE-Certified technicians. Certified cars are reconditioned to like-new. If there are any minor defects, we show you up front in HD. And every Shift vehicle has a full inspection report and free CARFAX vehicle history.</p>
                    
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VehicleInspec;