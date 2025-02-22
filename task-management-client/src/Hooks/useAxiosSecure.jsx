import axios from "axios";


const axiosInstance = axios.create(
    {
        // baseURL:'https://food-sharing-server-bay.vercel.app' || 'http://localhost:5000',
        
        baseURL: window.location.hostname === 'localhost'
            ? 'http://localhost:5000'
            : 'https://food-sharing-server-bay.vercel.app',
        withCredentials: true,
    }
)

const useAxiosSecure = () => {
    return axiosInstance;
};

export default useAxiosSecure;