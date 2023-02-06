import React from 'react';
import { Navigate,Outlet } from 'react-router-dom'

const protectedRoute = ({isAuthenticated,children}) => {
    if(!isAuthenticated){
        return <Navigate to ='/login' />
    }
  return children?children:<Outlet />;
}

export default protectedRoute