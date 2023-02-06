import React from 'react'
import { useDispatch } from 'react-redux'
const Logout = () => {
    const dispatch=useDispatch();
    function multiFunc(){
        dispatch({type:'logout'});
    }
  return (
    <div>
        <button onClick={multiFunc}>Logout</button>
    </div>
  )
}

export default Logout