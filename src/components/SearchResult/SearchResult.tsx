import { useAppSelector } from "../../data/hooks";
import { LocationInfo } from "../LocationInfo";
import { LocationMap } from "../LocationMap";

import styles from "./SearchResult.module.scss";

const SearchResult = () => {
  const isLoading = useAppSelector((state) => state.searchResult.isLoading);
  const data = useAppSelector((state) => state.searchResult.data);
  const error = useAppSelector((state) => state.searchResult.error);

  return isLoading ? (
    <p>Loading...</p>
  ) : data ? (
    <div className={styles.searchResult}>
      <LocationMap center={[data.latitude, data.longitude]} />
      <LocationInfo headingText="Last search information" {...data} />
    </div>
  ) : error ? (
    <p>{error}</p>
  ) : null;
};

export default SearchResult;
