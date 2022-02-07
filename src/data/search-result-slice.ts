import { createSlice } from "@reduxjs/toolkit";
import { SearchResultState } from "./types/slice-types";

import {
  getSearchResultDataPending,
  getSearchResultDataFulfilled,
  getSearchResultDataRejected,
} from "./search-result-thunk";

const INITIAL_STATE: SearchResultState = {
  isLoading: false,
  searchHistory: [],
};

const searchResultSlice = createSlice({
  name: "searchResult",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSearchResultDataPending, (state) => {
        state.isLoading = true;
        delete state.data;
        delete state.error;
      })
      .addCase(getSearchResultDataFulfilled, (state, action) => {
        state.isLoading = false;

        const newData = action.payload;
        state.data = newData;
        const { ipAddress, city } = newData;
        const id = `${state.searchHistory.length}-${ipAddress}-${city}`;

        state.searchHistory.push({ ipAddress, city, id });
      })
      .addCase(getSearchResultDataRejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default searchResultSlice.reducer;
