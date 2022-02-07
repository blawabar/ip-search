import { NormalizedResponseData } from "./response-data-types";

export interface UserInfoState {
  isLoading: boolean;
  error?: string;
  data?: NormalizedResponseData;
}

export interface SearchHistoryItem {
  id: string;
  ipAddress: string;
  city: string;
}

export interface SearchResultState extends UserInfoState {
  searchHistory: Array<SearchHistoryItem>;
}
