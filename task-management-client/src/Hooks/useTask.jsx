import axios from "axios";
import { useEffect, useState } from "react";


export const useTask = () => {

    const [allTask, setAllTask] = useState();

    useEffect(() => {
        axios.get('/public/Fake/task.json')
            .then(result => {
                setAllTask(result.data)
                // console.log(allTask)
            }
            )
    }, [])

    return allTask;
};