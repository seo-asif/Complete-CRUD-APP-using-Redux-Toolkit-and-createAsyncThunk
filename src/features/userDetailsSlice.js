import { createSlice } from "@reduxjs/toolkit";

import { createUser, showUser, updateUser, deleteUser } from "./createAction";

//create Slice
export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData: [],
  },
  reducers: {
    searchUser: (state, action) => {
      state.searchData = action.payload;
    },
  },
  extraReducers: {
    [createUser.pending]: (state, action) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [showUser.pending]: (state, action) => {
      state.loading = true;
    },
    [showUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
      console.log(state.users);
    },
    [showUser.rejected]: (state, action) => {
      state.loading = true;
      state.users = action.payload;
    },
    [updateUser.pending]: (state) => {
      state.loading = true;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = state.users.map((element) =>
        element.id === action.payload.id ? action.payload : element
      );
    },
    [updateUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [deleteUser.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;

      const { id } = action.payload;

      if (id) {
        state.users = state.users.filter((element) => element.id !== id);
      }

      console.log("delete action", action.payload);
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = true;
      state.users = action.payload;
    },
  },
});

export const { searchUser } = userDetail.actions;
export default userDetail.reducer;
