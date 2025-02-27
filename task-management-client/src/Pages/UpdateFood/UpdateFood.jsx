import React from 'react';
import FoodForm from '../../Shared Component/FoodForm';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import Title from '../../Shared Component/title/Title';
import { useTask } from '../../Hooks/useTask';

const UpdateFood = () => {

    const axiosInstance = useAxiosSecure();

    const { state } = useLocation(); console.log(state);

    const navigate = useNavigate();
    const { refetch } = useTask();

    // console.log(state);

    const handleUpdateSubmit = (e) => {

        e.preventDefault();
        console.log('handle update submit clicked ');

        const formData = new FormData(e.target);
        const temp = formData.entries();

        const updatedTask = Object.fromEntries(temp);

        console.log('updated Task ', updatedTask);

        console.log('got the id', state._id);

        axiosInstance.put(`/add-task/${state._id}`, updatedTask)
            .then(res => {
                if (res.data.modifiedCount) {

                    Swal.fire(
                        {
                            icon: 'success',
                            title: 'Updated Your Task Successfully'
                        }
                    )
                    
                    refetch();  //refetching data after successfully adding it in db 

                    navigate('/');
                }
            })
    }

    return (
        <div>
            <Title text={"Update Task"} />
            <FoodForm
                onSubmit={handleUpdateSubmit}
                defaultValues={state}
                isEditMode={true}
            />
        </div>
    );
};

export default UpdateFood;