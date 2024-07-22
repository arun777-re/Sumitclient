import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user:null,
    token:null,
    posts:[],
    isAuth:false,
    loading:false
}


const ownerSlice = createSlice({ 
    name:"owner",
  initialState,
  reducers:{
    loginSuccess:(state,action)=>{
        state.user = action.payload.user;  
        state.token = action.payload.token;
        state.loading = false;
        state.isAuth = true;
    },
    sendPost:(state,action)=>{
         state.posts = action.payload.posts;
         state.loading = false;
         state.token = action.payload.token;
         state.isAuth = true;

    },

  }
   


})


export const {loginSuccess,sendPost} = ownerSlice.actions;
export default ownerSlice.reducer;