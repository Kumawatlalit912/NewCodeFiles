import { createReducer } from "@reduxjs/toolkit";

const rootReducer=createReducer({isAuthenticated:false,user:{name:'jessica',age:21,hobby:'coding'}},{
    login:(state,action)=>{
        state.isAuthenticated=true;
    },
    logout:(state,action)=>{
        state.isAuthenticated=false;
    },
    data:(state,action)=>{
        state.user={name:'kumawat',age:21,hobby:'coding'}
    }
    
})
export default rootReducer;