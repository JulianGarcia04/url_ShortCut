import { configureStore } from '@reduxjs/toolkit'
import reducerNavBar from '../features/navBar/navBarSlice.js';
import reducerToken from "../features/token/tokenSlice.js";
import reducerUser from "../features/user/userSlice.js";

export default configureStore({
    reducer: {
        stateMenu: reducerNavBar,
        token: reducerToken,
        user: reducerUser
    }
})