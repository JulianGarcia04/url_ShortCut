import { createSlice } from '@reduxjs/toolkit';

export const navBarSlice = createSlice({
    name: 'stateMenu',
    initialState: {
        value: false
    },
    reducers: {
        changeStateMenu: (state)=>{
            state.value = !state.value;
        }
    }
})

export const {changeStateMenu} = navBarSlice.actions;

export default navBarSlice.reducer;