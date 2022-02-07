import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIProvider } from "./api-provider";
import { NormalizedResponseData } from "./types/response-data-types";

export const getSearchResultData = createAsyncThunk<
  NormalizedResponseData,
  string,
  { rejectValue: string }
>("searchResult/getSearchResultData", async (query, { rejectWithValue }) => {
  try {
    return await APIProvider.getSearchData(query);
  } catch (error) {
    return rejectWithValue(`${(error as Error).toString()}`);
  }
});

export const {
  pending: getSearchResultDataPending,
  fulfilled: getSearchResultDataFulfilled,
  rejected: getSearchResultDataRejected,
} = getSearchResultData;
