import React from 'react';
import Banner from './../../components/home/Banner';
import Seller from '@/components/home/Seller';
import ElectronicsProducts from '@/components/home/ElectronicsProducts';

const HomePage = () => {
    return (
        <div>
          <div className="container">
            <Banner/>
            <Seller/>
            <ElectronicsProducts/>
          </div>
        </div>
    );
};

export default HomePage;