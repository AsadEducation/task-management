import { closestCenter, DndContext } from "@dnd-kit/core";
import { useTask } from "../Hooks/useTask";
import { TaskCard } from "../Shared Component/task-card/TaskCard";
import Draggable from "../Shared Component/Draggalbe/Draggable";
import Droppable from "../Shared Component/Droppalbe/Droppable";

import { useEffect, useState } from "react";
import { arrayMove, rectSortingStrategy, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";


const AllTasks = () => {

    const { allTask: data, refetch } = useTask();

    const [allTask, setAllTask] = useState(data);

    useEffect(() => {
        setAllTask(data);
    }, [data]); // This will update `allTask` whenever `data` changes

    //filtering data and putting it into an category

    const todo = allTask.filter((task) => task.category == "To-Do")
    const done = allTask.filter((task) => task.category == "Done")
    const inprogress = allTask.filter((task) => task.category == "In Progress")

    const allCategories = [todo, done, inprogress]


    const handleDragEnd = (event) => {

        const { active, over } = event;

        if (active.id !== over.id) {

            const oldIndex = allTask.findIndex((task) => task._id === active.id);
            const newIndex = allTask.findIndex((task) => task._id === over.id);

            const newTasks = arrayMove(allTask, oldIndex, newIndex);
            setAllTask(newTasks);
        }

    }

    return (
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <div className="grid grid-cols-2 md:grid-cols-3">
                {/* looping all category tasks  */}

                {
                    allCategories.map((category, index) => {

                        return <Droppable id="task-container">

                            {/* todo col  */}
                            <SortableContext items={category} strategy={verticalListSortingStrategy}>
                                <div className="grid grid-cols-1 gap-4 mx-auto">
                                    {
                                        category.map((task, index) => {
                                            return <Draggable key={task._id} id={task._id}>
                                                <TaskCard key={index} task={task} refetch={refetch} />
                                            </Draggable>
                                        })
                                    }
                                </div>
                            </SortableContext>

                        </Droppable>
                    })
                }
            </div>
        </DndContext>
    );
};

export default AllTasks;