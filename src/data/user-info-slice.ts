import { createSlice } from "@reduxjs/toolkit";
import { UserInfoState } from "./types/slice-types";

import {
  getUserDataPending,
  getUserDataFulfilled,
  getUserDataRejected,
} from "./user-info-thunk";

const INITIAL_STATE: UserInfoState = {
  isLoading: false,
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserDataPending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserDataFulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getUserDataRejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default userInfoSlice.reducer;
