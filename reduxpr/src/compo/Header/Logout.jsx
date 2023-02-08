import { useToast } from '@chakra-ui/react';
import React from 'react'
import { useDispatch } from 'react-redux'
const Logout = () => {
    const dispatch=useDispatch();
    const toast=useToast();
    const multiFunc=()=>{
        dispatch({type:'logout'});
        toast({
            title:'Logout',
            description:'Logout successfully',
            status:'success',
            duration:3000,
        isClosable:true,
        })
    }
  return (
    <div>
        <button onClick={multiFunc}>Logout</button>
    </div>
  )
}

export default Logout