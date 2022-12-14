import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    // let auth = useAuth();
    let location = useLocation();
    if (loading) {
        return <Loading />
    }
    if (!user) {
        return <Navigate to="/signUp" state={{ from: location }} replace />;
    }
    return children;
}

export default RequireAuth;