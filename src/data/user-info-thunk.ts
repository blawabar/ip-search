import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIProvider } from "./api-provider";
import { NormalizedResponseData } from "./types/response-data-types";

export const getUserData = createAsyncThunk<
  NormalizedResponseData,
  undefined,
  { rejectValue: string }
>("userInfo/getUserData", async (_, { rejectWithValue }) => {
  try {
    return await APIProvider.getUserData();
  } catch (error) {
    return rejectWithValue(`${(error as Error).toString()}`);
  }
});

export const {
  pending: getUserDataPending,
  fulfilled: getUserDataFulfilled,
  rejected: getUserDataRejected,
} = getUserData;
