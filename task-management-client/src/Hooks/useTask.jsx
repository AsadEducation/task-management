import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


export const useTask = () => {

    const axiosInstance = useAxiosSecure();


    const { data: allTask = [], refetch } = useQuery({

        queryKey: ['tasks'],

        queryFn: async () => {

            const { data } = await axiosInstance.get('/tasks'); //console.log(data);
            return data;
        }
    })

    return { allTask, refetch };
};