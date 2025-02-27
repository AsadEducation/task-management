import { useTask } from "../Hooks/useTask";
import { TaskCard } from "../Shared Component/task-card/TaskCard";


const AllTasks = () => {

    const { allTask, refetch } = useTask();

    return (
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-11/12 mx-auto">
            {
                allTask.map((task, index) => {
                    return <TaskCard key={index} refetch={refetch} task={task} />
                })
            }
        </div>
    );
};

export default AllTasks;