import { configureStore } from "@reduxjs/toolkit";

import userInfoReducer from "./user-info-slice";
import searchResultReducer from "./serach-result-slice";

export const store = configureStore({
  reducer: { userInfo: userInfoReducer, searchResult: searchResultReducer },
});
