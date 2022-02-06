import { LocationInfo } from "../LocationInfo";
import { LocationMap } from "../LocationMap";

import styles from "./SearchResult.module.scss";

const locationInfoData = {
  headingText: "Last search information",
  ipAddress: "88.96.24.128",
  latitude: 54.234,
  longitude: 18.345,
  continent: "Europa",
  country: "Poland",
  region: "Pomerania",
  city: "Gdansk",
};

const SearchResult = () => {
  return (
    <div className={styles.searchResult}>
      <LocationMap />
      <LocationInfo {...locationInfoData} />
    </div>
  );
};

export default SearchResult;
