import { Link } from "react-router-dom";
import { handleTrashBox } from "../../Pages/My Added Foods/MyAddedFoods";

export const TaskCard = ({ task }) => {
    // console.log(task);
    return (
        <div className="card bg-base-100  shadow-xl">
            <figure>
                <img
                    src={task.image}
                    className="object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {task.title}
                    <div className="badge badge-secondary h-10 ">{task.category}</div>
                </h2>
                <p>{task.description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{task.timestamp}</div>

                </div>
            </div>
            <div className="flex items-center justify-start md:justify-around">
                <Link to={`/update-food`} state={task} className="btn btn-primary my-4">Update</Link>
                <button onClick={() => {
                    handleTrashBox(task._id)
                }} className="btn btn-error text-white">Delete</button>
            </div>
        </div>
    );
};