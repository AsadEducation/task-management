import React from 'react';
import { useAuth } from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({ children }) => {

    const { user, loading } = useAuth();
    const {pathname} = useLocation();

    // console.log(location);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-ring text-green-600 loading-lg"></span>
            </div>
        )
    }

    if(user){
        return children;
    }


    return <Navigate state={pathname} to={`/auth/login`} />


};

export default Private;