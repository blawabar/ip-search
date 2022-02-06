import {
  NormalizedResponseData,
  RawResponseData,
} from "./types/response-data-types";

export const convertRawResponseData = (
  inputData: RawResponseData,
): NormalizedResponseData => {
  const {
    ip: ipAddress,
    latitude,
    longitude,
    continent_name: continent,
    country_name: country,
    region_name: region,
    city,
  } = inputData;

  return {
    ipAddress,
    latitude,
    longitude,
    continent,
    country,
    region,
    city,
  };
};
