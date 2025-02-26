import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";


export const useTask = () => {

    const [allTask, setAllTask] = useState();
    const axios = useAxiosSecure();

    useEffect(() => {
        axios.get('/tasks')
            .then(result => {
                setAllTask(result.data)
                // console.log(allTask)
            }
            )
    }, [])

    return allTask;
};