import { use, useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";


const useFoods = (sorted, search) => {


    const axiosInstance = useAxiosSecure();

    const [allFoods, setAllFoods]= useState([]);

    const [loading, setLoading]= useState(true)

    useEffect(()=>{

        axiosInstance.get(`/all-foods?sorted=${sorted}&search=${search}`)
        .then(res=>{
            setAllFoods(res.data);
            setLoading(false);
        });

    },[sorted,search])



    return {allFoods, setAllFoods}
};

export default useFoods;