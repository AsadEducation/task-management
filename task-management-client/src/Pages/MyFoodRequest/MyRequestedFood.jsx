import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useAuth } from '../../Hooks/useAuth';

const MyRequestedFood = () => {



    const axiosInstance = useAxiosSecure();

    const [requestedFoods, setRequestedFoods] = useState([]);

    const {user} = useAuth();


    useEffect(() => {


        axiosInstance.get(`/requested-food/${user.email}`)
        .then(res=>setRequestedFoods(res.data))

    }, [])

    // console.log(requestedFoods);


    return (
        <div className="overflow-x-auto min-h-[60vh]">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th className='dark:text-white'>Expire Date</th>
                        <th className='dark:text-white'>Donar Name</th>
                        <th className='dark:text-white'>Pickup Location</th>
                        <th className='dark:text-white'>Request Date</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        requestedFoods.map((requestedFood, index) => {
                            {/* table  row / cell  */ }

                            const {
                                pickup_location,
                                expired_datetime,
                                food_donator_name,
                                food_requested_date
                            } = requestedFood;

                            // console.log(requestedFood);

                            return (
                                <tr key={index} className="hover">
                                    <th className='dark:text-white'>{expired_datetime}</th>
                                    <td className='dark:text-white'>{food_donator_name}</td>
                                    <td className='dark:text-white'>{pickup_location}</td>
                                    <td className='dark:text-white'>{food_requested_date}</td>
                                </tr>

                            )

                        })
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyRequestedFood;