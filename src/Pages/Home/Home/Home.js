import React from 'react';
import Banner from '../Banner/Banner';
import Categoris from '../Categoris/Categoris';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Categoris></Categoris>
        </div>
    );
};

export default Home;