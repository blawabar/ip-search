import { convertRawResponseData } from "./utils";

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
