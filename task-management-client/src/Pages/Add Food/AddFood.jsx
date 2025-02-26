import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useAuth } from '../../Hooks/useAuth';
import FoodForm from '../../Shared Component/FoodForm';
import { useNavigate } from 'react-router-dom';
import Title from '../../Shared Component/title/Title';


const AddFood = () => {


    const axiosInstance = useAxiosSecure();


    const navigate = useNavigate();

    // console.log(user);


    const handleAddFoodSubmit = (e) => {

        e.preventDefault();

        const formData = new FormData(e.target);
        const temp = formData.entries();

        const addedTask = Object.fromEntries(temp);


        // console.log(addedTask);

        // sending the object in the server to add to db

        axiosInstance.post('/add-task', addedTask)
            .then(res => {
                if (res.data.insertedId) {

                    Swal.fire(
                        {
                            icon: 'success',
                            title: 'Task is Added SuccessFully',
                        }
                    )

                    navigate('/');

                }
            })

    }

    return (
        <div className='w-[99%] lg:w-[50%] my-8 lg:my-12 mx-auto'>

            <Title text={"Add Task"} />

            <FoodForm
                onSubmit={handleAddFoodSubmit}
                isEditMode={false}
            />

        </div>
    );
};

export default AddFood;

