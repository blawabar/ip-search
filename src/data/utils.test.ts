import { convertRawResponseData, validateSearchPhrase } from "./utils";

const fakeRawResponseData = {
  ip: "89.64.106.130",
  type: "ipv4",
  continent_code: "EU",
  continent_name: "Europe",
  country_code: "PL",
  country_name: "Poland",
  region_code: "PM",
  region_name: "Pomerania",
  city: "Sopot",
  zip: "80-009",
  latitude: 54.31930923461914,
  longitude: 18.63736915588379,
  location: {
    geoname_id: 3085151,
    capital: "Warsaw",
    languages: [
      {
        code: "pl",
        name: "Polish",
        native: "Polski",
      },
    ],
    country_flag: "https://assets.ipstack.com/flags/pl.svg",
    country_flag_emoji: "🇵🇱",
    country_flag_emoji_unicode: "U+1F1F5 U+1F1F1",
    calling_code: "48",
    is_eu: true,
  },
};

const expectedOutput = {
  ipAddress: "89.64.106.130",
  latitude: 54.31930923461914,
  longitude: 18.63736915588379,
  continent: "Europe",
  country: "Poland",
  region: "Pomerania",
  city: "Sopot",
};

describe("convertRawResponseData", () => {
  it("should convert the data received in a raw format to a normalized one", () => {
    // arrange

    // act
    const output = convertRawResponseData(fakeRawResponseData);

    // assert
    expect(output).toEqual(expectedOutput);
  });
});

describe("validateSearchPhrase", () => {
  it.each(["89.64.106.130", "212.77.98.9", "142.250.188.46"])(
    "should check if a '%s' is a valid external ip address",
    (ipAddress) => {
      // arrange

      // act
      const result = validateSearchPhrase(ipAddress);

      // assert
      expect(result).toBeTruthy();
    },
  );

  it.each([
    "912.456.123.123",
    "127.0.0.1",
    "000.0000.00.00",
    "10.0.0.0",
    "10.255.255.255",
    "172.16.0.0",
    "172.31.255.255",
    "192.168.0.0",
    "192.168.255.255",
  ])(
    "should check if a '%s' is an invalid external ip address",
    (ipAddress) => {
      // arrange

      // act
      const result = validateSearchPhrase(ipAddress);

      // assert
      expect(result).toBeFalsy();
    },
  );

  it.each([
    "https://www.google.com",
    "http://www.google.com",
    "www.google.com",
    "wp.pl",
  ])("should check if a '%s' is a valid domain name", (domain) => {
    // arrange

    // act
    const result = validateSearchPhrase(domain);

    // assert
    expect(result).toBeTruthy();
  });

  it.each([
    "htt://www.google.com",
    "://www.google.com",
    "www.google.",
    "wp.pl.",
  ])("should check if a '%s' is an invalid domain name", (domain) => {
    // arrange

    // act
    const result = validateSearchPhrase(domain);

    // assert
    expect(result).toBeFalsy();
  });
});
