import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const Login = () => {
    const dispatch=useDispatch();
    // if(isAuthenticate) return <Navigate to={'/blog'} />
    function multiFunc(){
        dispatch({type:'login'});
    }
  return (
    <div>
        <button onClick={multiFunc}>Login</button>
    </div>
  )
}

export default Login