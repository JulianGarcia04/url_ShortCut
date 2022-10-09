import {createSlice} from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name: "token",
    initialState: {
        value: document.cookie.split(';').find(e=>e.search('__auth_user')!==-1)
               &&document.cookie.split(';').find(e=>e.search('__auth_user')!==-1).split('=')[1]
               
    },
    reducers:{
        setToken: (state, action)=>{
            state.value = action.payload
        }
    }
})

export const {setToken} = tokenSlice.actions;

export default tokenSlice.reducer