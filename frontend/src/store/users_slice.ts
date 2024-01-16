import { UserStateObj } from "../models/user_state_obj";
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { UserRowSql } from "../models/user_sql_row";

const defaultUsersState: UserStateObj = {
    users: []
};

const usersSlice = createSlice({
    name: "users",
    initialState: defaultUsersState,
    reducers: {
        updateUsers(state, action: PayloadAction<UserRowSql[]>) {
            console.log(action.payload)
            state.users = action.payload
            console.log(state.users)
        },
        addUser(state, action: PayloadAction<UserRowSql>) {
            state.users.push(action.payload)
            console.log(action.payload)
        },
        editUser(state, action: PayloadAction<UserRowSql>) {
            const existingUserIndex = state.users.findIndex(user => user.id === action.payload.id);
            const existingUser = state.users[existingUserIndex];

            if (existingUser) {
                existingUser.email = action.payload.email;
                existingUser.name = action.payload.name;
                existingUser.position = action.payload.position;
            }
        },
        deleteUser(state, action: PayloadAction<number>) {
            const existingUserIndex = state.users.findIndex(user => user.id === action.payload);
            state.users.splice(existingUserIndex, 1)
        }
    }
});

export const usersActions = usersSlice.actions;
export default usersSlice.reducer;
