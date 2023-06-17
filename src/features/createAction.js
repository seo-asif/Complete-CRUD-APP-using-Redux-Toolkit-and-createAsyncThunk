import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

const POST_URL = "https://648c3b3f8620b8bae7ec8260.mockapi.io/crud";

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
