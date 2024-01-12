import { UserStateObj } from "../models/user_state_obj";
import { PayloadAction, current } from "@reduxjs/toolkit";
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
            state.users = action.payload
        },
        addUser(state, action: PayloadAction<UserRowSql>) {
            state.users.concat(action.payload)
            console.log(current(state.users))
        }
    }
});

export const usersActions = usersSlice.actions;
export default usersSlice.reducer;
