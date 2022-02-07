import axios from "axios";
import { BASE_URL, ACCESS_KEY } from "./constants";
import {
  NormalizedResponseData,
  RawDetailNotFound,
  RawLookupResult,
  RawResponseData,
  RawResponseError,
} from "./types/response-data-types";
import { convertRawResponseData } from "./utils";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: { access_key: ACCESS_KEY },
});

export class APIProvider {
  private static async getLookupData(
    url: string,
  ): Promise<NormalizedResponseData> {
    try {
      const response = await axiosInstance.get<RawLookupResult>(`/${url}`);
      const { status, statusText, data } = response;

      if (status !== 200) {
        throw new Error(`${status} - ${statusText}`);
      }

      const isDetailNotFound =
        (data as RawDetailNotFound).detail === "Not Found";

      if (isDetailNotFound) {
        throw new Error("Lookup failed - please try again");
      }

      const errorResponse = data as RawResponseError;
      const isAPIError = errorResponse.success === false;

      if (isAPIError) {
        const {
          error: { code, info },
        } = errorResponse;

        throw new Error(`${code} - ${info}`);
      }

      return convertRawResponseData(data as RawResponseData);
    } catch (error) {
      throw error;
    }
  }

  public static async getUserData(): Promise<NormalizedResponseData> {
    return APIProvider.getLookupData("check");
  }

  public static async getSearchData(
    query: string,
  ): Promise<NormalizedResponseData> {
    return APIProvider.getLookupData(query);
  }
}
