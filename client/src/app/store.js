import { configureStore } from '@reduxjs/toolkit'
import reducerNavBar from '../features/navBar/navBarSlice.js';
import reducerToken from "../features/token/tokenSlice";

export default configureStore({
    reducer: {
        stateMenu: reducerNavBar,
        token: reducerToken
    }
})