import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useAuth } from '../../Hooks/useAuth';
import { FaPencil } from 'react-icons/fa6';
import { SiVerizon } from 'react-icons/si';
import moment from 'moment';


const FoodDetails = () => {

    const axiosInstance = useAxiosSecure();

    const { user } = useAuth();    // console.log(user);

    const { id } = useParams();  // console.log(id);



    //fetching data from the server 

    const [data, setData]= useState([]);

    useEffect(() => {

        axiosInstance.get(`/food-details/${id}`)

            .then(res => setData(res.data))

            .catch(err => {
                console.log(err);
            })

    }, [])

    // console.log(data)

    //if the food/data is not available 

    if (!data) {
        return (
            <h2 className='text-center text-5xl min-h-[50vh] flex flex-col justify-center items-center font-bold text-red-500'> You have Already Requested the Food . </h2>
        )
    }

    const {
        food_name,
        food_image,
        food_quantity,
        pickup_location,
        expired_datetime,
        additional_notes,
        food_donator_name,
        food_donator_image,
        food_donator_email,
        food_status,
        _id
    } = data;

    // inserting the email of food requestor in the food object

    data.food_requestor_email = user.email;
    const food_requested_date = moment().format("YYYY-MM-DD");
    const requestedFood = { ...data, food_requested_date };
    // console.log('requested food ',requestedFood);




    const handleRequestFood = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Request Food!"
        }).then((result) => {
            if (result.isConfirmed) {


                Swal.fire({
                    title: "Requested!",
                    text: "Your Food Request is Confirmed.",
                    icon: "success"
                });

                //sending delete request to the server to delete it from foodCollection


                axiosInstance.delete(`/available-foods/${_id}`)
                    .then(res => {

                        // if successfully deleted the item , will add the item in request collection 
                        // console.log(res.data);

                        if (res.data.deletedCount) {
                            // sending requested food through post api 

                            //updating the food status as requested

                            requestedFood.food_status = "requested";


                            axiosInstance.post('/requested-food', requestedFood)
                                .then(res => {
                                    if (res.data.insertedId) {

                                        Swal.fire(
                                            {
                                                icon: 'success',
                                                title: 'Added to your requested Food list',
                                            }
                                        )
                                    }
                                })
                                .catch(err => console.log(err))

                        }
                    })
                    .catch(err => {

                        // console.log(err);
                    })
            }
        });

    }



    const [editable, setEditable] = useState(false);
    const [inputValue, setInputValue] = useState(null);


    const handleEditPencil = (e) => {

        const value = e.target.value;

        setInputValue(value);
    }

    // console.log('inputValue', inputValue , 'type of inputValue ', typeof(inputValue));


    const handleSaveInputValue = () => {

        // if (inputValue.trim() !== "") {
        axiosInstance.put(`/food-details/${_id}`, { value: inputValue })
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
        // }
    }





    return (
        <div className="max-w-[95vw]  lg:flex justify-evenly items-center mx-auto p-6 bg-white dark:bg-slate-600 dark:text-white ">
            {/* Food Image */}
            <img
                src={food_image}
                alt={food_name}
                className=" lg:w-[50%]  object-cover rounded-md"
            />

            {/* Food Details ---Text Content */}

            <div className='space-y-8'>
                <h1 className="text-4xl font-bold mt-6 text-green-500">{food_name}</h1>
                <p className="text-gray-600 dark:text-white mt-2">
                    <span className="font-semibold text-2xl">Status: </span>
                    <span
                        className={`font-medium ${food_status === 'available' ? 'text-green-600' : 'text-red-600'
                            }`}
                    >
                        {food_status}
                    </span>
                </p>

                <div className="mt-4">
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">Details</h2>
                    <ul className="list-disc list-inside mt-2 space-y-2  text-gray-600 dark:text-white">
                        <li>
                            <span className="font-medium t">Quantity:</span> {food_quantity}
                        </li>
                        <li>
                            <span className="font-medium">Pickup Location:</span>{' '}
                            {pickup_location}
                        </li>
                        <li>
                            <span className="font-medium">Expires on:</span> {expired_datetime}
                        </li>
                        {additional_notes && (

                            <li className='flex gap-4 items-center'>
                                <span className="font-medium">Additional Notes:</span>
                                {
                                    editable ? (
                                        <div className='flex items-center gap-2'>
                                            <input
                                                type="text"
                                                onChange={handleEditPencil}
                                                placeholder="Enter Additional Notes"
                                                required
                                                className="input input-bordered w-full max-w-xs"
                                            />
                                            <button onClick={() => {
                                                setEditable(false)
                                                handleSaveInputValue()
                                            }} className='text-xl text-green-500'>
                                                <SiVerizon />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className='flex items-center gap-3'>
                                            <span> {inputValue ? inputValue : additional_notes}</span>
                                            <button onClick={() => setEditable(true)}>
                                                <FaPencil className='text-xl' />
                                            </button>
                                        </div>
                                    )
                                }
                            </li>


                        )}
                    </ul>
                </div>

                {/* Donator Information */}
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">Donator</h2>
                    <div className="flex items-center mt-4">
                        <img
                            src={food_donator_image}
                            alt={food_donator_name}
                            className="w-16 h-16 rounded-full object-cover border border-gray-200"
                        />
                        <div className="ml-4">
                            <p className="text-lg font-semibold">{food_donator_name}</p>
                            <p className="text-gray-600 dark:text-white">{food_donator_email}</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-6">
                    <button onClick={handleRequestFood} className="btn bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-lg">
                        Request Food
                    </button>
                </div>
            </div>
        </div >
    );
};

export default FoodDetails;