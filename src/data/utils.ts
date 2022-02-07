import ipaddr from "ipaddr.js";

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

export const validateSearchPhrase = (searchPhrase: string) => {
  const isIPAddress = ipaddr.isValid(searchPhrase);
  let isIPExternal = false;

  if (isIPAddress) {
    const range = ipaddr.parse(searchPhrase).range();
    isIPExternal =
      range !== "loopback" && range !== "private" && range !== "unspecified";
  }

  const isValidDomain =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(
      searchPhrase,
    );

  return isValidDomain || isIPExternal;
};
