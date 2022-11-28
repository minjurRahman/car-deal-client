import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Categoris from '../Categoris/Categoris';
import VehicleInspec from '../VehicleInspec/VehicleInspec';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Categoris></Categoris>
            <Advertise></Advertise>
            <VehicleInspec></VehicleInspec>

        </div>
    );
};

export default Home;