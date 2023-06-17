import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";

const POST_URL = "https://648c3b3f8620b8bae7ec8260.mockapi.io/crud";

// create Action

// export const createUser = createAsyncThunk("createUser", async (data) => {
//   const response = await fetch(POST_URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   try {
//     const result = await response.json();
//     console.log(result);
//     return result;
//   } catch (error) {
//     return isRejectedWithValue(error.response);
//   }
// });

// create User
export const createUser = createAsyncThunk("createUser", async (data) => {
  try {
    const response = await axios.post(POST_URL, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response);
  }
});

// read User
export const showUser = createAsyncThunk("showUser", async (data) => {
  try {
    const response = await axios.get(POST_URL, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response);
  }
});

// update User
export const updateUser = createAsyncThunk("updateUser", async (data) => {
  try {
    const response = await axios.put(
      `https://648c3b3f8620b8bae7ec8260.mockapi.io/crud/${data.id}`,
      data
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response);
  }
});

// delete User
export const deleteUser = createAsyncThunk("deleteUser", async (id) => {
  try {
    const response = await axios.delete(
      `https://648c3b3f8620b8bae7ec8260.mockapi.io/crud/${id}`
    );
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response);
  }
});

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  // reducers: {
  //   addUser: (state, action) => {
  //     state.users = [...state.users, action.payload];
  //   },
  // },
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

export const { addUser } = userDetail.actions;
export default userDetail.reducer;
