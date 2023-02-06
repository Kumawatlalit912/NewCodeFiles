import { createReducer } from "@reduxjs/toolkit";

const rootReducer=createReducer({isAuthenticated:false},{
    login:(state,action)=>{
        state.isAuthenticated=true;
    },
    logout:(state,action)=>{
        state.isAuthenticated=false;
    }
    
})
export default rootReducer;