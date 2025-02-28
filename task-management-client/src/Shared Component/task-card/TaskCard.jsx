import { Link } from "react-router-dom";
import { handleTrashBox } from "../../Pages/My Added Foods/MyAddedFoods";
import { useSortable } from "@dnd-kit/sortable";
import { FaEdit, FaTrash } from "react-icons/fa";
import { CSS } from "@dnd-kit/utilities";

export const TaskCard = ({ task, refetch }) => {

    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task._id })

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    // console.log(task);
    return (
        <div ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="w-[400px]  py-4 card bg-base-100  shadow-2xl mx-auto">

            {/* image is flexed with title and description  */}

            <div className="grid grid-cols-3 items-center">
                {/* image content  */}
                <figure>
                    <img className="rounded-md w-[100px] h-[100px]"
                        src={task.image} alt="" />
                </figure>
                {/* title + description  */}
                <div className="flex flex-col gap-1">
                    <h2 className="text-xm font-bold">{task.title}</h2>
                    <p className="text-xs">{task.description}</p>
                    <div className="flex flex-wrap gap-1">
                        <span className="badge badge-outline border-2 border-blue-400 text-xs">{task.category}</span>
                        <span className="badge badge-outline border-2 border-blue-400 text-xs">{task.timestamp}</span>
                    </div>
                </div>

                {/* update + delete button  */}

                <div className="flex flex-col gap-4 mx-auto">
                    <Link to={`/update-food`} state={task} className="cursor-pointer text-blue-500 hover:text-blue-700 text-xs"><FaEdit /></Link>
                    <button onClick={() => {
                        handleTrashBox(task._id, refetch)
                    }} className="cursor-pointer text-red-500 hover:text-red-700 text-xs"><FaTrash /></button>
                </div>

            </div>



        </div>
    );
};