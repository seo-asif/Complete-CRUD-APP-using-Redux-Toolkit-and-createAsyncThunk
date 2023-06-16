import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../features/userDetailsSlice";

export const store = configureStore({
  reducer: {
    app: userDetail,
  },
});
