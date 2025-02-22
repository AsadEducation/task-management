import React from 'react';
import FoodForm from '../../Shared Component/FoodForm';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const UpdateFood = () => {


    const axiosInstance = useAxiosSecure();

    const { state } = useLocation();

    const navigate = useNavigate();

    // console.log(state);

    const handleUpdateSubmit = (e) => {

        e.preventDefault();
        // console.log('handle update submit clicked ');

        const formData = new FormData(e.target);
        const temp = formData.entries();

        const updatedFood = Object.fromEntries(temp);

        console.log('updated food ', updatedFood);

        // console.log('got the id', state._id);

        axiosInstance.put(`/add-food/${state._id}`, updatedFood)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire(
                        {
                            icon: 'success',
                            title: 'Updated Your Food Successfully'
                        }
                    )

                    navigate('/my-added-foods');
                }
            })


    }

    return (
        <div>
            <h2 className="text-center text-4xl font-bold">Update Food </h2>
            <FoodForm
                onSubmit={handleUpdateSubmit}
                defaultValues={state}
                isEditMode={true}
            />
        </div>
    );
};

export default UpdateFood;