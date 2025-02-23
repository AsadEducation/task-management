import { TaskCard } from "../Shared Component/task-card/TaskCard";


const AllTasks = ({ allTask }) => {

    if (!allTask?.length) return <>Loading...</>

    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto">
            {
                allTask.map((task,index) => {
                    return <TaskCard key={index} task={task} />
                })
            }
        </div>
    );
};

export default AllTasks;