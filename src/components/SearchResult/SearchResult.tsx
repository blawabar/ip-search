import { LocationInfo } from "../LocationInfo";
import { LocationMap } from "../LocationMap";

import styles from "./SearchResult.module.scss";

const SearchResult = () => {
  return (
    <div className={styles.searchResult}>
      <LocationMap />
      <LocationInfo />
    </div>
  );
};

export default SearchResult;
