import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Profile = () => {
    const dispatch=useDispatch();
    const {user}=useSelector((state)=>state.root);
    const [Data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    // console.log(user);
    function multiFunc(){
        dispatch({type:'data'});
        
    }
  return (
    <>
    <button onClick={multiFunc}>Get name and Age of Develeoper</button>
    {
        user.name==='kumawat'?<h1>{user.name}</h1>:null
    }
    </>
  )
}

export default Profile