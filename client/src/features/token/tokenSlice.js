import {createSlice} from "@reduxjs/toolkit";
import getCookie from "../../utils/getCookie";

export const tokenSlice = createSlice({
    name: "token",
    initialState: {
        value: getCookie('__auth_user')
               
    },
    reducers:{
        setToken: (state, action)=>{
            state.value = action.payload
        }
    }
})

export const {setToken} = tokenSlice.actions;

export default tokenSlice.reducer