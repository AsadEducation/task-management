import React from 'react';
import FeaturedFoods from './FeaturedFoods';
import Banner from './Banner';
import FoodStorageLocation from './FoodStorageLocation';
import FAQ from './FAQ';


const Home = () => {
    return (
        <div className='space-y-8 lg:space-y-16'>
            
            <div className=''> <Banner /></div>

            <div className='md:w-11/12 mx-auto'> <FeaturedFoods /></div>

            <div className='md:w-11/12 mx-auto'><FoodStorageLocation /></div>

            <div className='md:w-11/12 mx-auto'> <FAQ /></div>


        </div>
    );
};

export default Home;