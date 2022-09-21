import { configureStore } from '@reduxjs/toolkit'
import reducerNavBar from '../features/navBar/navBarSlice.js';

export default configureStore({
    reducer: {
        stateMenu: reducerNavBar
    }
})