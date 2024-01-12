import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './users_slice';

const store = configureStore({
    reducer: {
        users: usersReducer
    }
});

export type RootSate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store