import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useAuth } from '../../Hooks/useAuth';
import FoodForm from '../../Shared Component/FoodForm';
import { useNavigate } from 'react-router-dom';
import Title from '../../Shared Component/title/Title';


const AddFood = () => {


    const axiosInstance = useAxiosSecure();

    const { user } = useAuth();

    const navigate = useNavigate();

    // console.log(user);

    const food_donator_email = user.email;
    const food_donator_image = user.photoURL;

    const handleAddFoodSubmit = (e) => {

        e.preventDefault();

        const formData = new FormData(e.target);
        const temp = formData.entries();

        const addedFood = Object.fromEntries(temp);

        addedFood.food_quantity = parseInt(addedFood.food_quantity)

        // console.log(addedFood);

        //sending the object in the server to add to db

        axiosInstance.post('/add-food', addedFood)
            .then(res => {
                if (res.data.insertedId) {

                    Swal.fire(
                        {
                            icon: 'success',
                            title: 'Your Food is Added SuccessFully',
                        }
                    )

                    navigate('/my-added-foods');

                }
            })

    }

    return (
        <div className='w-[99%] lg:w-[50%] my-8 lg:my-12 mx-auto'>

            <Title text={"Add Task"} />

            <FoodForm
                onSubmit={handleAddFoodSubmit}
                defaultValues={{ food_donator_email, food_donator_image }}
                isEditMode={false}
            />

        </div>
    );
};

export default AddFood;

