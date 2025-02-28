import { closestCenter, DndContext } from "@dnd-kit/core";
import { useTask } from "../Hooks/useTask";
import { TaskCard } from "../Shared Component/task-card/TaskCard";
import Draggable from "../Shared Component/Draggalbe/Draggable";
import Droppable from "../Shared Component/Droppalbe/Droppable";

import { useEffect, useState } from "react";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";


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

    const allCategories = [todo, inprogress, done]


    const handleDragEnd = (event) => {

        const { active, over } = event; console.log('active', active); console.log('over',over);

        if (!over) return;

        const activeTask = allTask.find((task) => task._id === active.id);
        const overTask = allTask.find((task) => task._id === over.id);

        if (!activeTask || !overTask) return;


        const activeCategory = activeTask.category;
        const overCategory = overTask.category;

        if (activeCategory === overCategory) {
            // Reorder within the same category
            const oldIndex = allTask.findIndex((task) => task._id === active.id);
            const newIndex = allTask.findIndex((task) => task._id === over.id);
            setAllTask(arrayMove(allTask, oldIndex, newIndex));
        } else {
            // Move to a new category
            setAllTask((prevTasks) =>
                prevTasks.map((task) =>
                    task._id === active.id ? { ...task, category: overCategory } : task
                )
            );
        }

    }

    return (
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* looping through all coloums  */}

                {
                    allCategories.map((category, index) => {

                        return <Droppable key={index} id={index} >

                            {/* todo col  */}
                            <SortableContext items={category} strategy={verticalListSortingStrategy}>
                                <div className="grid grid-cols-1 gap-4 bg-slate-500 p-8 rounded-xl">
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