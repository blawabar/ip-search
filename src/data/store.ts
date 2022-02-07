import { configureStore } from "@reduxjs/toolkit";

import userInfoReducer from "./user-info-slice";
import searchResultReducer from "./search-result-slice";

export const store = configureStore({
  reducer: { userInfo: userInfoReducer, searchResult: searchResultReducer },
});
