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

export const createUser = createAsyncThunk("createUser", async (data) => {
  try {
    const response = await axios.post(POST_URL, data);
    console.log(response.data);
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
  extrareducers: {
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
  },
});

export const { addUser } = userDetail.actions;
export default userDetail.reducer;
