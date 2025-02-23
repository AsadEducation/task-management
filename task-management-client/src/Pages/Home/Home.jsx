import React from 'react';
import FeaturedFoods from './FeaturedFoods';
import Banner from './Banner';
import FoodStorageLocation from './FoodStorageLocation';
import FAQ from './FAQ';
import { useTask } from '../../Hooks/useTask';
import { TaskCard } from '../../Shared Component/task-card/TaskCard';
import AllTasks from '../../task-page/AllTasks';


const Home = () => {

    const allTask = useTask(); //console.log(allTask);

    return (
        <div className='my-32 space-y-8 lg:space-y-16'>
            <AllTasks allTask={allTask} />
        </div>
    );
};

export default Home;