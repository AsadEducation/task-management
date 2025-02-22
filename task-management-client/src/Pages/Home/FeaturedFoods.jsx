import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import FoodCard from '../../Shared Component/FoodCard';
import { Link } from 'react-router-dom';

const FeaturedFoods = () => {

    const axiosInstance = useAxiosSecure();


    const [hotFoods, setHotFoods] = useState([]);

    useEffect(() => {

        axiosInstance.get('/featured-food')
            .then(res => setHotFoods(res.data))

    }, [])

    // console.log(hotFoods);

    return (
        <div className='space-y-12'>
            <h2 className="text-3xl lg:text-5xl text-center font-bold">Featured Food</h2>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {
                    hotFoods.map((hotFood, index) => {


                        return <FoodCard key={index} food={hotFood} />

                    })
                }
            </div>

            <div className="flex items-center justify-center ">
                <Link to={`/available-foods`}>
                    <button className="inline-block btn mx-auto text-white bg-gray-600">
                        Show All
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedFoods;